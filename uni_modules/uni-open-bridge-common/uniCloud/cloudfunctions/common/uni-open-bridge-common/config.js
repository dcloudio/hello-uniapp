'use strict';

const {
  ProviderType
} = require('./consts.js')

const configCenter = require('uni-config-center')

// 多维数据为兼容uni-id以前版本配置
const OauthConfig = {
  'weixin-app': [
    ['app', 'oauth', 'weixin'],
    ['app-plus', 'oauth', 'weixin']
  ],
  'weixin-mp': [
    ['mp-weixin', 'oauth', 'weixin']
  ],
  'weixin-h5': [
    ['web', 'oauth', 'weixin-h5'],
    ['h5-weixin', 'oauth', 'weixin'],
    ['h5', 'oauth', 'weixin']
  ],
  'weixin-web': [
    ['web', 'oauth', 'weixin-web']
  ],
  'qq-app': [
    ['app', 'oauth', 'qq'],
    ['app-plus', 'oauth', 'qq']
  ],
  'qq-mp': [
    ['mp-qq', 'oauth', 'qq']
  ]
}

const Support_Platforms = [
  ProviderType.WEIXIN_MP,
  ProviderType.WEIXIN_H5,
  ProviderType.WEIXIN_APP,
  ProviderType.WEIXIN_WEB,
  ProviderType.QQ_MP,
  ProviderType.QQ_APP
]

class ConfigBase {

  constructor() {
    const uniIdConfigCenter = configCenter({
      pluginId: 'uni-id'
    })

    this._uniIdConfig = uniIdConfigCenter.config()
  }

  getAppConfig(appid) {
    if (Array.isArray(this._uniIdConfig)) {
      return this._uniIdConfig.find((item) => {
        return (item.dcloudAppid === appid)
      })
    }
    return this._uniIdConfig
  }
}

class AppConfig extends ConfigBase {

  constructor() {
    super()
  }

  get(appid, platform) {
    if (!this.isSupport(platform)) {
      return null
    }

    let appConfig = this.getAppConfig(appid)
    if (!appConfig) {
      return null
    }

    return this.getOauthConfig(appConfig, platform)
  }

  isSupport(platformName) {
    return (Support_Platforms.indexOf(platformName) >= 0)
  }

  getOauthConfig(appConfig, platformName) {
    let treePath = OauthConfig[platformName]
    let node = this.findNode(appConfig, treePath)
    if (node && node.appid && node.appsecret) {
      return {
        appid: node.appid,
        secret: node.appsecret
      }
    }
    return null
  }

  findNode(treeNode, arrayPath) {
    let node = treeNode
    for (let treePath of arrayPath) {
      for (let name of treePath) {
        const currentNode = node[name]
        if (currentNode) {
          node = currentNode
        } else {
          node = null
          break
        }
      }
      if (node === null) {
        node = treeNode
      } else {
        break
      }
    }
    return node
  }
}


module.exports = {
  AppConfig
};