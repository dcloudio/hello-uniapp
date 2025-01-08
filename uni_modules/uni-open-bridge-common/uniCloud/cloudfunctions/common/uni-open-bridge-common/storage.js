'use strict';

const {
  Validator
} = require('./validator.js')

const {
  CacheKeyCascade
} = require('./uni-cloud-cache.js')

const {
  BridgeError
} = require('./bridge-error.js')

class Storage {

  constructor(type, keys) {
    this._type = type || null
    this._keys = keys || []
  }

  async get(key, fallback) {
    this.validateKey(key)
    const result = await this.create(key, fallback).get()
    return result.value
  }

  async set(key, value, expiresIn) {
    this.validateKey(key)
    this.validateValue(value)
    const expires_in = this.getExpiresIn(expiresIn)
    if (expires_in !== 0) {
      await this.create(key).set(this.getValue(value), expires_in)
    }
  }

  async remove(key) {
    this.validateKey(key)
    await this.create(key).remove()
  }

  // virtual
  async update(key) {
    this.validateKey(key)
  }

  async ttl(key) {
    this.validateKey(key)
    // 后续考虑支持
  }

  async fallback(key) {
    return {
      value: null,
      duration: -1
    }
  }

  getKeyString(key) {
    const keyArray = [Storage.Prefix]
    this._keys.forEach((name) => {
      keyArray.push(key[name])
    })
    keyArray.push(this._type)
    return keyArray.join(':')
  }

  getValue(value) {
    return value
  }

  getExpiresIn(value) {
    if (value !== undefined) {
      return value
    }
    return -1
  }

  validateKey(key) {
    Validator.Key(this._keys, key)
  }

  validateValue(value) {
    Validator.Value(value)
  }

  create(key, fallback) {
    const keyString = this.getKeyString(key)
    const options = {
      layers: [{
        type: 'database',
        key: keyString
      }, {
        type: 'redis',
        key: keyString
      }]
    }

    const _this = this
    return new CacheKeyCascade({
      ...options,
      fallback: async function() {
        if (fallback) {
          return fallback(key)
        } else if (_this.fallback) {
          return _this.fallback(key)
        }
      }
    })
  }
}
Storage.Prefix = "uni-id"

module.exports = {
  Storage
};
