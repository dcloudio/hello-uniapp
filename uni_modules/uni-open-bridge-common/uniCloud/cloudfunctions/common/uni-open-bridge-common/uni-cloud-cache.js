const db = uniCloud.database()

function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}

const validator = {
  key: function(value) {
    const err = new Error('Invalid key')
    if (typeof value !== 'string') {
      throw err
    }
    const valueTrim = value.trim()
    if (!valueTrim || valueTrim !== value) {
      throw err
    }
  },
  value: function(value) {
    // 仅作简单校验
    const type = getType(value)
    const validValueType = ['null', 'number', 'string', 'array', 'object']
    if (validValueType.indexOf(type) === -1) {
      throw new Error('Invalid value type')
    }
  },
  duration: function(value) {
    const err = new Error('Invalid duration')
    if (value === undefined) {
      return
    }
    if (typeof value !== 'number' || value === 0) {
      throw err
    }
  }
}

/**
 * 入库时 expired 为过期时间对应的时间戳，永不过期用-1表示
 * 返回结果时 与redis对齐，-1表示永不过期，-2表示已过期或不存在
 */
class DatabaseCache {
  constructor({
    collection = 'opendb-open-data'
  } = {}) {
    this.type = 'db'
    this.collection = db.collection(collection)
  }

  _serializeValue(value) {
    return value === undefined ? null : JSON.stringify(value)
  }

  _deserializeValue(value) {
    return value ? JSON.parse(value) : value
  }

  async set(key, value, duration) {
    validator.key(key)
    validator.value(value)
    validator.duration(duration)
    value = this._serializeValue(value)
    await this.collection.doc(key).set({
      value,
      expired: duration && duration !== -1 ? Date.now() + (duration * 1000) : -1
    })
  }

  async _getWithDuration(key) {
    const getKeyRes = await this.collection.doc(key).get()
    const record = getKeyRes.data[0]
    if (!record) {
      return {
        value: null,
        duration: -2
      }
    }
    const value = this._deserializeValue(record.value)
    const expired = record.expired
    if (expired === -1) {
      return {
        value,
        duration: -1
      }
    }
    const duration = expired - Date.now()
    if (duration <= 0) {
      await this.remove(key)
      return {
        value: null,
        duration: -2
      }
    }
    return {
      value,
      duration: Math.floor(duration / 1000)
    }
  }

  async get(key, {
    withDuration = true
  } = {}) {
    const result = await this._getWithDuration(key)
    if (!withDuration) {
      delete result.duration
    }
    return result
  }

  async remove(key) {
    await this.collection.doc(key).remove()
  }
}

class RedisCache {
  constructor() {
    this.type = 'redis'
    this.redis = uniCloud.redis()
  }

  _serializeValue(value) {
    return value === undefined ? null : JSON.stringify(value)
  }

  _deserializeValue(value) {
    return value ? JSON.parse(value) : value
  }

  async set(key, value, duration) {
    validator.key(key)
    validator.value(value)
    validator.duration(duration)
    value = this._serializeValue(value)
    if (!duration || duration === -1) {
      await this.redis.set(key, value)
    } else {
      await this.redis.set(key, value, 'EX', duration)
    }
  }

  async get(key, {
    withDuration = false
  } = {}) {
    let value = await this.redis.get(key)
    value = this._deserializeValue(value)
    if (!withDuration) {
      return {
        value
      }
    }
    const durationSecond = await this.redis.ttl(key)
    let duration
    switch (durationSecond) {
      case -1:
        duration = -1
        break
      case -2:
        duration = -2
        break
      default:
        duration = durationSecond
        break
    }
    return {
      value,
      duration
    }
  }

  async remove(key) {
    await this.redis.del(key)
  }
}

class Cache {
  constructor({
    type,
    collection
  } = {}) {
    if (type === 'database') {
      return new DatabaseCache({
        collection
      })
    } else if (type === 'redis') {
      return new RedisCache()
    } else {
      throw new Error('Invalid cache type')
    }
  }
}

class CacheKey {
  constructor({
    type,
    collection,
    cache,
    key,
    fallback
  } = {}) {
    this.cache = cache || new Cache({
      type,
      collection
    })
    this.key = key
    this.fallback = fallback
  }

  async set(value, duration) {
    await this.cache.set(this.key, value, duration)
  }

  async setWithSync(value, duration, syncMethod) {
    await Promise.all([
      this.set(this.key, value, duration),
      syncMethod(value, duration)
    ])
  }

  async get() {
    let {
      value,
      duration
    } = await this.cache.get(this.key)
    if (value !== null && value !== undefined) {
      return {
        value,
        duration
      }
    }
    if (!this.fallback) {
      return {
        value: null,
        duration: -2
      }
    }
    const fallbackResult = await this.fallback()
    value = fallbackResult.value
    duration = fallbackResult.duration
    if (value !== null && duration !== undefined) {
      await this.cache.set(this.key, value, duration)
    }
    return {
      value,
      duration
    }
  }

  async remove() {
    await this.cache.remove(this.key)
  }
}

class CacheKeyCascade {
  constructor({
    layers, // [{cache, type, collection, key}] 从低级到高级排序，[DbCacheKey, RedisCacheKey]
    fallback
  } = {}) {
    this.layers = layers
    this.cacheLayers = []
    let lastCacheKey
    for (let i = 0; i < layers.length; i++) {
      const {
        type,
        cache,
        collection,
        key
      } = layers[i]
      const lastCacheKeyTemp = lastCacheKey
      try {
        const currentCacheKey = new CacheKey({
          type,
          collection,
          cache,
          key,
          fallback: i === 0 ? fallback : function() {
            return lastCacheKeyTemp.get()
          }
        })
        this.cacheLayers.push(currentCacheKey)
        lastCacheKey = currentCacheKey
      } catch (e) {}
    }
    this.highLevelCache = lastCacheKey
  }

  async set(value, duration) {
    return Promise.all(
      this.cacheLayers.map(item => {
        return item.set(value, duration)
      })
    )
  }

  async setWithSync(value, duration, syncMethod) {
    const setPromise = this.cacheLayers.map(item => {
      return item.set(value, duration)
    })
    return Promise.all(
      [
        ...setPromise,
        syncMethod(value, duration)
      ]
    )
  }

  async get() {
    return this.highLevelCache.get()
  }

  async remove() {
    await Promise.all(
      this.cacheLayers.map(cacheKeyItem => {
        return cacheKeyItem.remove()
      })
    )
  }
}

module.exports = {
  Cache,
  DatabaseCache,
  RedisCache,
  CacheKey,
  CacheKeyCascade
}
