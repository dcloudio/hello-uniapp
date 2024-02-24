# hello-uniapp

`uni-app`框架示例，一套代码，同时发行到 iOS、Android、H5、小程序等多个平台，请使用手机在下方扫码快速体验`uni-app`的强大功能。[官方文档](https://uniapp.dcloud.net.cn/)

## 快速上手

hello-uniapp 示例工程可以通过两种方式创建， 一种是 HBuilderX, 配套 IDE，集成开发；另一种是 CLI 创建；推荐前者。

### 通过 HBuilderX 可视化界面创建（推荐）

可视化的方式比较简单，HBuilderX 内置相关环境，开箱即用，无需配置 nodejs。

开始之前，开发者需先下载安装如下工具：

-   HBuilderX：[官方 IDE 下载地址](https://www.dcloud.io/hbuilderx.html)

HBuilderX 是通用的前端开发工具，但为`uni-app`做了特别强化，请下载 App 开发版。

由于截图在 github 不便浏览，参见官方文档 [HBuilderX 可视化界面创建](https://uniapp.dcloud.net.cn/quickstart?id=_1-%e9%80%9a%e8%bf%87-hbuilderx-%e5%8f%af%e8%a7%86%e5%8c%96%e7%95%8c%e9%9d%a2)

### 通过 vue-cli 创建

```
npm install -g @vue/cli
```

#### 创建 uni-app

**使用正式版**（对应 HBuilderX 最新正式版）

```
vue create -p dcloudio/uni-preset-vue my-project
```

**使用 alpha 版**（对应 HBuilderX 最新 alpha 版）

```
vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
```

此时，会提示选择项目模板，选择 `hello uni-app` 项目模板，如下所示：

<div>
<img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/h5-cli-01.png" width="300">
</div>

创建好后，进入项目目录

```
cd my-project
```

执行该命令运行到 h5 端

```
npm run dev:h5
```

欢迎提 issues，推荐到[官方社区](https://ask.dcloud.net.cn/explore/)提问。

## 扫码体验

<div class="quick">
    <p>一套代码编到10个平台，这不是梦想。眼见为实，扫描10个二维码，亲自体验最全面的跨平台效果！</p>
    <div style="display: flex;">
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-android.png" width="160" />
        </div>
        <b>Android版</b>
      </a>
      <a href="https://itunes.apple.com/cn/app/hello-uni-app/id1417078253?mt=8" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://web-assets.dcloud.net.cn/unidoc/zh/uni-h5.png" width="160" />
        </div>
        <b>iOS版</b>
      </a>
      <a href="https://hellouniapp.dcloud.net.cn/" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/bb3ef7c0-517d-11eb-bdc1-8bd33eb6adaa.png" width="160" />
        </div>
        <b>H5版</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box"><img src="//img.cdn.aliyun.dcloud.net.cn/guide/uniapp/gh_33446d7f7a26_430.jpg" width="160" /></div>
        <b>微信小程序版</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box"><img src="https://web-assets.dcloud.net.cn/unidoc/zh/alipay1.png" width="160" /></div>
        <b>支付宝小程序版</b>
      </a>
    </div>
    <div class="flex-img-group-view" style="margin-top: 20px;">
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box"><img src="https://web-assets.dcloud.net.cn/unidoc/zh/baidu-uniapp.png" width="160" /></div>
        <b>百度小程序版</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/mp-toutiao.png" width="160" />
        </div>
        <b>字节跳动小程序版</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hello-uni-qq.png" width="160" />
        </div>
        <b>QQ小程序版</b>
      </a>
      <a href="//m3w.cn/uniapp" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hello-uni-qa-union.png" width="160" />
        </div>
        <b>快应用</b>
      </a>
      <a href="https://so.mp.360.cn/mp.html?appid=qh4j181qqtru354st6" target="_blank" class="clear-style barcode-view">
        <div class="barcode-img-box">
          <img src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/hello-uni-mp-360-qr.png" width="160" />
        </div>
        <b>360小程序</b>
      </a>
    </div>
    <p>
        <em>注：某些平台不能提交简单demo，故补充了一些其他功能；hello uni-app示例代码可从[github](https://github.com/dcloudio/hello-uniapp)获取</em></br>
        <em>快应用仅支持 vivo 、oppo、华为</em></br>
        <em>360小程序仅 windows平台支持，需要在360浏览器中打开</em></br>
    </p>
</div>

`uni-app`官网文档详见[https://uniapp.dcloud.io](https://uniapp.dcloud.io)

更多 uni-app 的模板、示例详见[插件市场](https://ext.dcloud.net.cn/)

## 🔥 2024 年最新最好用的的 uniapp 开发模板，unibest

unibest 是由 uniapp + Vue3 + Ts + Vite4 + UnoCss + UniUI + VSCode 驱动的跨端快速启动模板，具有代码提示、自动格式化、统一配置、代码片段、多语言支持等功能，内置了许多常用的基本组件和基本功能，开箱即用，让你编写 uniapp 拥有 best 体验。

短短 1 个多月已经超过 300 star，与其他几个同行库的对比(红色的为 unibest)

[![Star History Chart](https://api.star-history.com/svg?repos=codercup/unibest,Ares-Chang/uni-vitesse,uni-helper/vitesse-uni-app&type=Date)](https://star-history.com/#codercup/unibest&Ares-Chang/uni-vitesse&uni-helper/vitesse-uni-app&Date)

-   [unibest github 仓库](https://github.com/codercup/unibest)
-   [unibest gitee 仓库](https://gitee.com/codercup/unibest)

### unibest ✨ 特性

-   ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - 就是快！

-   🔥 最新语法：使用新的 `<script setup>` 语法

-   🎨 [UnoCSS](https://unocss.dev/) - 高性能且极具灵活性的即时原子化 CSS 引擎

-   🍍 [pinia](https://pinia.vuejs.org/) & [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/) - 全端适配的全局数据管理

-   🦾 [TypeScript](https://www.typescriptlang.org/) & [ESLint](https://eslint.org/) & [stylelint](https://stylelint.io/) - 保证代码质量

-   😃 [UnoCSS Icons](https://unocss.dev/presets/icons) & [icones](https://icones.js.org/) - 海量图标供你选择

-   📦 [组件自动化加载](./src/components) - 可配置化的组件加载方式，轻松加载组件

-   📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入

-   🌈 [husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/lint-staged/lint-staged) + [commitlint](https://commitlint.js.org/) - 保证代码提交质量

-   🎉 `v3` Code Snippets 加快你的页面生成

-   🗂 `uni.request` 请求封装 & 请求拦截，一键引入，快捷使用

-   💡 ES6 import 顺序自动排序，css 属性自动排序，增强编码一致性

-   🖥 多环境配置分开，想则怎么配置就怎么配置
