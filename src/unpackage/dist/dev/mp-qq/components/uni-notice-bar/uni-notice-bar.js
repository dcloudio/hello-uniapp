(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-notice-bar/uni-notice-bar"],{

/***/ 1265:
/*!**********************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/components/uni-notice-bar/uni-notice-bar.vue ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_notice_bar_vue_vue_type_template_id_24a05de4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-notice-bar.vue?vue&type=template&id=24a05de4&scoped=true& */ 1266);
/* harmony import */ var _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-notice-bar.vue?vue&type=script&lang=js& */ 1268);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_notice_bar_vue_vue_type_style_index_0_id_24a05de4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-notice-bar.vue?vue&type=style&index=0&id=24a05de4&scoped=true&lang=css& */ 1270);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_notice_bar_vue_vue_type_template_id_24a05de4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_notice_bar_vue_vue_type_template_id_24a05de4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "24a05de4",
  null,
  false,
  _uni_notice_bar_vue_vue_type_template_id_24a05de4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/uni-notice-bar/uni-notice-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1266:
/*!*****************************************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/components/uni-notice-bar/uni-notice-bar.vue?vue&type=template&id=24a05de4&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_template_id_24a05de4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-notice-bar.vue?vue&type=template&id=24a05de4&scoped=true& */ 1267);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_template_id_24a05de4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_template_id_24a05de4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_template_id_24a05de4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_template_id_24a05de4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1267:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/components/uni-notice-bar/uni-notice-bar.vue?vue&type=template&id=24a05de4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniIcons: function() {
    return Promise.all(/*! import() | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/components/uni-icons/uni-icons.vue */ 1087))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1268:
/*!***********************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/components/uni-notice-bar/uni-notice-bar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-notice-bar.vue?vue&type=script&lang=js& */ 1269);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1269:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/components/uni-notice-bar/uni-notice-bar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniIcons = function uniIcons() {Promise.all(/*! require.ensure | components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-icons/uni-icons")]).then((function () {return resolve(__webpack_require__(/*! ../uni-icons/uni-icons.vue */ 1087));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};
































/**
                                                                                                                                                                                                                                                                       * NoticeBar 自定义导航栏
                                                                                                                                                                                                                                                                       * @description 通告栏组件
                                                                                                                                                                                                                                                                       * @tutorial https://ext.dcloud.net.cn/plugin?id=30
                                                                                                                                                                                                                                                                       * @property {Number} speed 文字滚动的速度，默认100px/秒
                                                                                                                                                                                                                                                                       * @property {String} text 显示文字
                                                                                                                                                                                                                                                                       * @property {String} backgroundColor 背景颜色
                                                                                                                                                                                                                                                                       * @property {String} color 文字颜色
                                                                                                                                                                                                                                                                       * @property {String} moreColor 查看更多文字的颜色
                                                                                                                                                                                                                                                                       * @property {String} moreText 设置“查看更多”的文本
                                                                                                                                                                                                                                                                       * @property {Boolean} single = [true|false] 是否单行
                                                                                                                                                                                                                                                                       * @property {Boolean} scrollable = [true|false] 是否滚动，为true时，NoticeBar为单行
                                                                                                                                                                                                                                                                       * @property {Boolean} showIcon = [true|false] 是否显示左侧喇叭图标
                                                                                                                                                                                                                                                                       * @property {Boolean} showClose = [true|false] 是否显示左侧关闭按钮
                                                                                                                                                                                                                                                                       * @property {Boolean} showGetMore = [true|false] 是否显示右侧查看更多图标，为true时，NoticeBar为单行
                                                                                                                                                                                                                                                                       * @event {Function} click 点击 NoticeBar 触发事件
                                                                                                                                                                                                                                                                       * @event {Function} close 关闭 NoticeBar 触发事件
                                                                                                                                                                                                                                                                       * @event {Function} getmore 点击”查看更多“时触发事件
                                                                                                                                                                                                                                                                       */var _default =

{
  name: 'UniNoticeBar',
  components: {
    uniIcons: uniIcons },

  props: {
    text: {
      type: String,
      default: '' },

    moreText: {
      type: String,
      default: '' },

    backgroundColor: {
      type: String,
      default: '#fffbe8' },

    speed: {
      // 默认1s滚动100px
      type: Number,
      default: 100 },

    color: {
      type: String,
      default: '#de8c17' },

    moreColor: {
      type: String,
      default: '#999999' },

    single: {
      // 是否单行
      type: [Boolean, String],
      default: false },

    scrollable: {
      // 是否滚动，添加后控制单行效果取消
      type: [Boolean, String],
      default: false },

    showIcon: {
      // 是否显示左侧icon
      type: [Boolean, String],
      default: false },

    showGetMore: {
      // 是否显示右侧查看更多
      type: [Boolean, String],
      default: false },

    showClose: {
      // 是否显示左侧关闭按钮
      type: [Boolean, String],
      default: false } },


  data: function data() {
    var elId = "Uni_".concat(Math.ceil(Math.random() * 10e5).toString(36));
    var elIdBox = "Uni_".concat(Math.ceil(Math.random() * 10e5).toString(36));
    return {
      textWidth: 0,
      boxWidth: 0,
      wrapWidth: '',
      webviewHide: false,



      elId: elId,
      elIdBox: elIdBox,
      show: true,
      animationDuration: 'none',
      animationPlayState: 'paused',
      animationDelay: '0s' };

  },
  mounted: function mounted() {var _this = this;











    this.$nextTick(function () {
      _this.initSize();
    });
  },





  methods: {
    initSize: function initSize() {var _this2 = this;
      if (this.scrollable) {

        var query = [],
        boxWidth = 0,
        textWidth = 0;
        var textQuery = new Promise(function (resolve, reject) {
          uni.createSelectorQuery().

          in(_this2).

          select("#".concat(_this2.elId)).
          boundingClientRect().
          exec(function (ret) {
            _this2.textWidth = ret[0].width;
            resolve();
          });
        });
        var boxQuery = new Promise(function (resolve, reject) {
          uni.createSelectorQuery().

          in(_this2).

          select("#".concat(_this2.elIdBox)).
          boundingClientRect().
          exec(function (ret) {
            _this2.boxWidth = ret[0].width;
            resolve();
          });
        });
        query.push(textQuery);
        query.push(boxQuery);
        Promise.all(query).then(function () {
          _this2.animationDuration = "".concat(_this2.textWidth / _this2.speed, "s");
          _this2.animationDelay = "-".concat(_this2.boxWidth / _this2.speed, "s");
          setTimeout(function () {
            _this2.animationPlayState = 'running';
          }, 1000);
        });






























      }







    },
    loopAnimation: function loopAnimation() {























    },
    clickMore: function clickMore() {
      this.$emit('getmore');
    },
    close: function close() {
      this.show = false;
      this.$emit('close');
    },
    onClick: function onClick() {
      this.$emit('click');
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 1270:
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/components/uni-notice-bar/uni-notice-bar.vue?vue&type=style&index=0&id=24a05de4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_id_24a05de4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-notice-bar.vue?vue&type=style&index=0&id=24a05de4&scoped=true&lang=css& */ 1271);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_id_24a05de4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_id_24a05de4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_id_24a05de4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_id_24a05de4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_notice_bar_vue_vue_type_style_index_0_id_24a05de4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1271:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/components/uni-notice-bar/uni-notice-bar.vue?vue&type=style&index=0&id=24a05de4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvY29tcG9uZW50cy91bmktbm90aWNlLWJhci91bmktbm90aWNlLWJhci52dWU/YTc1NSIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvY29tcG9uZW50cy91bmktbm90aWNlLWJhci91bmktbm90aWNlLWJhci52dWU/YzBkNiIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvY29tcG9uZW50cy91bmktbm90aWNlLWJhci91bmktbm90aWNlLWJhci52dWU/MzYwOCIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvY29tcG9uZW50cy91bmktbm90aWNlLWJhci91bmktbm90aWNlLWJhci52dWU/OWJjNiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktbm90aWNlLWJhci91bmktbm90aWNlLWJhci52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL2NvbXBvbmVudHMvdW5pLW5vdGljZS1iYXIvdW5pLW5vdGljZS1iYXIudnVlP2Q0NWEiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL2NvbXBvbmVudHMvdW5pLW5vdGljZS1iYXIvdW5pLW5vdGljZS1iYXIudnVlP2VlYTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1STtBQUN2STtBQUNrRTtBQUNMO0FBQ3FDOzs7QUFHbEc7QUFDd047QUFDeE4sZ0JBQWdCLHlOQUFVO0FBQzFCLEVBQUUsb0ZBQU07QUFDUixFQUFFLHFHQUFNO0FBQ1IsRUFBRSw4R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx5R0FBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxXQUFXLHFQQUVOO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBbzNCLENBQWdCLG8xQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2lDeDRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBLHNCQURBO0FBRUE7QUFDQSxzQkFEQSxFQUZBOztBQUtBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLGlCQUZBLEVBTEE7O0FBU0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBVEE7O0FBYUE7QUFDQTtBQUNBLGtCQUZBO0FBR0Esa0JBSEEsRUFiQTs7QUFrQkE7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBbEJBOztBQXNCQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUF0QkE7O0FBMEJBO0FBQ0E7QUFDQSw2QkFGQTtBQUdBLG9CQUhBLEVBMUJBOztBQStCQTtBQUNBO0FBQ0EsNkJBRkE7QUFHQSxvQkFIQSxFQS9CQTs7QUFvQ0E7QUFDQTtBQUNBLDZCQUZBO0FBR0Esb0JBSEEsRUFwQ0E7O0FBeUNBO0FBQ0E7QUFDQSw2QkFGQTtBQUdBLG9CQUhBLEVBekNBOztBQThDQTtBQUNBO0FBQ0EsNkJBRkE7QUFHQSxvQkFIQSxFQTlDQSxFQUxBOzs7QUF5REEsTUF6REEsa0JBeURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQTtBQUdBLG1CQUhBO0FBSUEsd0JBSkE7Ozs7QUFRQSxnQkFSQTtBQVNBLHNCQVRBO0FBVUEsZ0JBVkE7QUFXQSwrQkFYQTtBQVlBLGtDQVpBO0FBYUEsMEJBYkE7O0FBZUEsR0EzRUE7QUE0RUEsU0E1RUEscUJBNEVBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBM0ZBOzs7Ozs7QUFpR0E7QUFDQSxZQURBLHNCQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFDQTs7QUFFQSxZQUZBLENBRUEsTUFGQTs7QUFJQSxnQkFKQSxZQUlBLFdBSkE7QUFLQSw0QkFMQTtBQU1BLGNBTkEsQ0FNQTtBQUNBO0FBQ0E7QUFDQSxXQVRBO0FBVUEsU0FYQTtBQVlBO0FBQ0E7O0FBRUEsWUFGQSxDQUVBLE1BRkE7O0FBSUEsZ0JBSkEsWUFJQSxjQUpBO0FBS0EsNEJBTEE7QUFNQSxjQU5BLENBTUE7QUFDQTtBQUNBO0FBQ0EsV0FUQTtBQVVBLFNBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsRUFFQSxJQUZBO0FBR0EsU0FOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQTs7Ozs7Ozs7QUFRQSxLQTlFQTtBQStFQSxpQkEvRUEsMkJBK0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsS0F2R0E7QUF3R0EsYUF4R0EsdUJBd0dBO0FBQ0E7QUFDQSxLQTFHQTtBQTJHQSxTQTNHQSxtQkEyR0E7QUFDQTtBQUNBO0FBQ0EsS0E5R0E7QUErR0EsV0EvR0EscUJBK0dBO0FBQ0E7QUFDQSxLQWpIQSxFQWpHQSxFOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQXl3QyxDQUFnQix5ckNBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0E3eEM7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJjb21wb25lbnRzL3VuaS1ub3RpY2UtYmFyL3VuaS1ub3RpY2UtYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktbm90aWNlLWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRhMDVkZTQmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktbm90aWNlLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1ub3RpY2UtYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi91bmktbm90aWNlLWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNGEwNWRlNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjRhMDVkZTRcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy91bmktbm90aWNlLWJhci91bmktbm90aWNlLWJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VuaS1ub3RpY2UtYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNGEwNWRlNCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzID0ge1xuICB1bmlJY29uczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zXCIgKi8gXCJAL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29ucy52dWVcIlxuICAgIClcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdW5pLW5vdGljZS1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91bmktbm90aWNlLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgdi1pZj1cInNob3dcIiBjbGFzcz1cInVuaS1ub3RpY2ViYXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yIH1cIiBAY2xpY2s9XCJvbkNsaWNrXCI+XHJcblx0XHQ8IS0tICNpZmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwic2hvd0Nsb3NlID09PSB0cnVlIHx8IHNob3dDbG9zZSA9PT0gJ3RydWUnXCIgY2xhc3M9XCJ1bmktbm90aWNlYmFyLWNsb3NlXCIgQGNsaWNrPVwiY2xvc2VcIj5cclxuXHRcdFx0PHVuaS1pY29ucyB0eXBlPVwiY2xvc2VlbXB0eVwiIDpjb2xvcj1cImNvbG9yXCIgc2l6ZT1cIjEyXCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHYtaWY9XCJzaG93SWNvbiA9PT0gdHJ1ZSB8fCBzaG93SWNvbiA9PT0gJ3RydWUnXCIgY2xhc3M9XCJ1bmktbm90aWNlYmFyLWljb25cIj5cclxuXHRcdFx0PHVuaS1pY29ucyB0eXBlPVwic291bmRcIiA6Y29sb3I9XCJjb2xvclwiIHNpemU9XCIxNFwiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdDwhLS0gI2lmbmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHQ8dW5pLWljb25zIHYtaWY9XCJzaG93Q2xvc2UgPT09IHRydWUgfHwgc2hvd0Nsb3NlID09PSAndHJ1ZSdcIiBjbGFzcz1cInVuaS1ub3RpY2ViYXItY2xvc2VcIiB0eXBlPVwiY2xvc2VlbXB0eVwiIDpjb2xvcj1cImNvbG9yXCIgc2l6ZT1cIjEyXCIgQGNsaWNrPVwiY2xvc2VcIiAvPlxyXG5cdFx0PHVuaS1pY29ucyB2LWlmPVwic2hvd0ljb24gPT09IHRydWUgfHwgc2hvd0ljb24gPT09ICd0cnVlJ1wiIGNsYXNzPVwidW5pLW5vdGljZWJhci1pY29uXCIgdHlwZT1cInNvdW5kXCIgOmNvbG9yPVwiY29sb3JcIiBzaXplPVwiMTRcIiAvPlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8dmlldyByZWY9XCJ0ZXh0Qm94XCIgY2xhc3M9XCJ1bmktbm90aWNlYmFyX19jb250ZW50LXdyYXBwZXJcIiA6Y2xhc3M9XCJ7J3VuaS1ub3RpY2ViYXJfX2NvbnRlbnQtd3JhcHBlci0tc2Nyb2xsYWJsZSc6c2Nyb2xsYWJsZSwgJ3VuaS1ub3RpY2ViYXJfX2NvbnRlbnQtd3JhcHBlci0tc2luZ2xlJzohc2Nyb2xsYWJsZSAmJiAoc2luZ2xlIHx8IG1vcmVUZXh0KX1cIj5cclxuXHRcdFx0PHZpZXcgOmlkPVwiZWxJZEJveFwiIGNsYXNzPVwidW5pLW5vdGljZWJhcl9fY29udGVudFwiIDpjbGFzcz1cInsndW5pLW5vdGljZWJhcl9fY29udGVudC0tc2Nyb2xsYWJsZSc6c2Nyb2xsYWJsZSwgJ3VuaS1ub3RpY2ViYXJfX2NvbnRlbnQtLXNpbmdsZSc6IXNjcm9sbGFibGUgJiYgKHNpbmdsZSB8fCBtb3JlVGV4dCl9XCI+XHJcblx0XHRcdFx0PHRleHQgOmlkPVwiZWxJZFwiIHJlZj1cImFuaW1hdGlvbkVsZVwiIGNsYXNzPVwidW5pLW5vdGljZWJhcl9fY29udGVudC10ZXh0XCIgOmNsYXNzPVwieyd1bmktbm90aWNlYmFyX19jb250ZW50LXRleHQtLXNjcm9sbGFibGUnOnNjcm9sbGFibGUsJ3VuaS1ub3RpY2ViYXJfX2NvbnRlbnQtdGV4dC0tc2luZ2xlJzohc2Nyb2xsYWJsZSAmJiAoc2luZ2xlIHx8IG1vcmVUZXh0KX1cIiA6c3R5bGU9XCJ7Y29sb3I6Y29sb3IsIHdpZHRoOndyYXBXaWR0aCsncHgnLCAnYW5pbWF0aW9uRHVyYXRpb24nOiBhbmltYXRpb25EdXJhdGlvbiwgJy13ZWJraXQtYW5pbWF0aW9uRHVyYXRpb24nOiBhbmltYXRpb25EdXJhdGlvbiAsYW5pbWF0aW9uUGxheVN0YXRlOiB3ZWJ2aWV3SGlkZT8ncGF1c2VkJzphbmltYXRpb25QbGF5U3RhdGUsJy13ZWJraXQtYW5pbWF0aW9uUGxheVN0YXRlJzp3ZWJ2aWV3SGlkZT8ncGF1c2VkJzphbmltYXRpb25QbGF5U3RhdGUsIGFuaW1hdGlvbkRlbGF5OiBhbmltYXRpb25EZWxheSwgJy13ZWJraXQtYW5pbWF0aW9uRGVsYXknOmFuaW1hdGlvbkRlbGF5fVwiPnt7dGV4dH19PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyB2LWlmPVwic2hvd0dldE1vcmUgPT09IHRydWUgfHwgc2hvd0dldE1vcmUgPT09ICd0cnVlJ1wiIGNsYXNzPVwidW5pLW5vdGljZWJhcl9fbW9yZVwiIEBjbGljaz1cImNsaWNrTW9yZVwiPlxyXG5cdFx0XHQ8dGV4dCB2LWlmPVwibW9yZVRleHRcIiA6c3R5bGU9XCJ7IGNvbG9yOiBtb3JlQ29sb3IgfVwiIGNsYXNzPVwidW5pLW5vdGljZWJhcl9fbW9yZS10ZXh0XCI+e3sgbW9yZVRleHQgfX08L3RleHQ+XHJcblx0XHRcdDx1bmktaWNvbnMgdHlwZT1cImFycm93cmlnaHRcIiA6Y29sb3I9XCJtb3JlQ29sb3JcIiBzaXplPVwiMTRcIiAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHVuaUljb25zIGZyb20gJy4uL3VuaS1pY29ucy91bmktaWNvbnMudnVlJ1xyXG5cdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdGNvbnN0IGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblx0Y29uc3QgYW5pbWF0aW9uID0gd2VleC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKTtcclxuXHQvLyAjZW5kaWZcclxuXHJcblx0LyoqXHJcblx0ICogTm90aWNlQmFyIOiHquWumuS5ieWvvOiIquagj1xyXG5cdCAqIEBkZXNjcmlwdGlvbiDpgJrlkYrmoI/nu4Tku7ZcclxuXHQgKiBAdHV0b3JpYWwgaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MzBcclxuXHQgKiBAcHJvcGVydHkge051bWJlcn0gc3BlZWQg5paH5a2X5rua5Yqo55qE6YCf5bqm77yM6buY6K6kMTAwcHgv56eSXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IHRleHQg5pi+56S65paH5a2XXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGJhY2tncm91bmRDb2xvciDog4zmma/popzoibJcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gY29sb3Ig5paH5a2X6aKc6ImyXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IG1vcmVDb2xvciDmn6XnnIvmm7TlpJrmloflrZfnmoTpopzoibJcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gbW9yZVRleHQg6K6+572u4oCc5p+l55yL5pu05aSa4oCd55qE5paH5pysXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBzaW5nbGUgPSBbdHJ1ZXxmYWxzZV0g5piv5ZCm5Y2V6KGMXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBzY3JvbGxhYmxlID0gW3RydWV8ZmFsc2VdIOaYr+WQpua7muWKqO+8jOS4unRydWXml7bvvIxOb3RpY2VCYXLkuLrljZXooYxcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IHNob3dJY29uID0gW3RydWV8ZmFsc2VdIOaYr+WQpuaYvuekuuW3puS+p+WWh+WPreWbvuagh1xyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2hvd0Nsb3NlID0gW3RydWV8ZmFsc2VdIOaYr+WQpuaYvuekuuW3puS+p+WFs+mXreaMiemSrlxyXG5cdCAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2hvd0dldE1vcmUgPSBbdHJ1ZXxmYWxzZV0g5piv5ZCm5pi+56S65Y+z5L6n5p+l55yL5pu05aSa5Zu+5qCH77yM5Li6dHJ1ZeaXtu+8jE5vdGljZUJhcuS4uuWNleihjFxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGNsaWNrIOeCueWHuyBOb3RpY2VCYXIg6Kem5Y+R5LqL5Lu2XHJcblx0ICogQGV2ZW50IHtGdW5jdGlvbn0gY2xvc2Ug5YWz6ZetIE5vdGljZUJhciDop6blj5Hkuovku7ZcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBnZXRtb3JlIOeCueWHu+KAneafpeeci+abtOWkmuKAnOaXtuinpuWPkeS6i+S7tlxyXG5cdCAqL1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAnVW5pTm90aWNlQmFyJyxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0dW5pSWNvbnNcclxuXHRcdH0sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHR0ZXh0OiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vcmVUZXh0OiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnI2ZmZmJlOCdcclxuXHRcdFx0fSxcclxuXHRcdFx0c3BlZWQ6IHtcclxuXHRcdFx0XHQvLyDpu5jorqQxc+a7muWKqDEwMHB4XHJcblx0XHRcdFx0dHlwZTogTnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDEwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnI2RlOGMxNydcclxuXHRcdFx0fSxcclxuXHRcdFx0bW9yZUNvbG9yOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcjOTk5OTk5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaW5nbGU6IHtcclxuXHRcdFx0XHQvLyDmmK/lkKbljZXooYxcclxuXHRcdFx0XHR0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzY3JvbGxhYmxlOiB7XHJcblx0XHRcdFx0Ly8g5piv5ZCm5rua5Yqo77yM5re75Yqg5ZCO5o6n5Yi25Y2V6KGM5pWI5p6c5Y+W5raIXHJcblx0XHRcdFx0dHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0ljb246IHtcclxuXHRcdFx0XHQvLyDmmK/lkKbmmL7npLrlt6bkvqdpY29uXHJcblx0XHRcdFx0dHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0dldE1vcmU6IHtcclxuXHRcdFx0XHQvLyDmmK/lkKbmmL7npLrlj7Pkvqfmn6XnnIvmm7TlpJpcclxuXHRcdFx0XHR0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93Q2xvc2U6IHtcclxuXHRcdFx0XHQvLyDmmK/lkKbmmL7npLrlt6bkvqflhbPpl63mjInpkq5cclxuXHRcdFx0XHR0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0Y29uc3QgZWxJZCA9IGBVbmlfJHtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwZTUpLnRvU3RyaW5nKDM2KX1gXHJcblx0XHRcdGNvbnN0IGVsSWRCb3ggPSBgVW5pXyR7TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMGU1KS50b1N0cmluZygzNil9YFxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRleHRXaWR0aDogMCxcclxuXHRcdFx0XHRib3hXaWR0aDogMCxcclxuXHRcdFx0XHR3cmFwV2lkdGg6ICcnLFxyXG5cdFx0XHRcdHdlYnZpZXdIaWRlOiBmYWxzZSxcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0XHRzdG9wQW5pbWF0aW9uOiBmYWxzZSxcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRlbElkOiBlbElkLFxyXG5cdFx0XHRcdGVsSWRCb3g6IGVsSWRCb3gsXHJcblx0XHRcdFx0c2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRhbmltYXRpb25EdXJhdGlvbjogJ25vbmUnLFxyXG5cdFx0XHRcdGFuaW1hdGlvblBsYXlTdGF0ZTogJ3BhdXNlZCcsXHJcblx0XHRcdFx0YW5pbWF0aW9uRGVsYXk6ICcwcydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHR2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuXHRcdFx0dmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuXHRcdFx0dmFyIGN1cnJlbnRXZWJ2aWV3ID0gcGFnZS4kZ2V0QXBwV2VidmlldygpO1xyXG5cdFx0XHRjdXJyZW50V2Vidmlldy5hZGRFdmVudExpc3RlbmVyKCdoaWRlJywgKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMud2Vidmlld0hpZGUgPSB0cnVlXHJcblx0XHRcdH0pXHJcblx0XHRcdGN1cnJlbnRXZWJ2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3cnLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy53ZWJ2aWV3SGlkZSA9IGZhbHNlXHJcblx0XHRcdH0pXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5pbml0U2l6ZSgpXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRiZWZvcmVEZXN0cm95KCkge1xyXG5cdFx0XHR0aGlzLnN0b3BBbmltYXRpb24gPSB0cnVlXHJcblx0XHR9LFxyXG5cdFx0Ly8gI2VuZGlmXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGluaXRTaXplKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbGFibGUpIHtcclxuXHRcdFx0XHRcdC8vICNpZm5kZWYgQVBQLU5WVUVcclxuXHRcdFx0XHRcdGxldCBxdWVyeSA9IFtdLFxyXG5cdFx0XHRcdFx0XHRib3hXaWR0aCA9IDAsXHJcblx0XHRcdFx0XHRcdHRleHRXaWR0aCA9IDA7XHJcblx0XHRcdFx0XHRsZXQgdGV4dFF1ZXJ5ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcblx0XHRcdFx0XHRcdFx0Ly8gI2lmbmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHRcdFx0XHQuaW4odGhpcylcclxuXHRcdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFx0XHQuc2VsZWN0KGAjJHt0aGlzLmVsSWR9YClcclxuXHRcdFx0XHRcdFx0XHQuYm91bmRpbmdDbGllbnRSZWN0KClcclxuXHRcdFx0XHRcdFx0XHQuZXhlYyhyZXQgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy50ZXh0V2lkdGggPSByZXRbMF0ud2lkdGhcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0bGV0IGJveFF1ZXJ5ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcblx0XHRcdFx0XHRcdFx0Ly8gI2lmbmRlZiBNUC1BTElQQVlcclxuXHRcdFx0XHRcdFx0XHQuaW4odGhpcylcclxuXHRcdFx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdFx0XHQuc2VsZWN0KGAjJHt0aGlzLmVsSWRCb3h9YClcclxuXHRcdFx0XHRcdFx0XHQuYm91bmRpbmdDbGllbnRSZWN0KClcclxuXHRcdFx0XHRcdFx0XHQuZXhlYyhyZXQgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5ib3hXaWR0aCA9IHJldFswXS53aWR0aFxyXG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSgpXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRxdWVyeS5wdXNoKHRleHRRdWVyeSlcclxuXHRcdFx0XHRcdHF1ZXJ5LnB1c2goYm94UXVlcnkpXHJcblx0XHRcdFx0XHRQcm9taXNlLmFsbChxdWVyeSkudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gPSBgJHt0aGlzLnRleHRXaWR0aCAvIHRoaXMuc3BlZWR9c2BcclxuXHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb25EZWxheSA9IGAtJHt0aGlzLmJveFdpZHRoIC8gdGhpcy5zcGVlZH1zYFxyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvblBsYXlTdGF0ZSA9ICdydW5uaW5nJ1xyXG5cdFx0XHRcdFx0XHR9LCAxMDAwKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0XHRkb20uZ2V0Q29tcG9uZW50UmVjdCh0aGlzLiRyZWZzWydhbmltYXRpb25FbGUnXSwgKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgd2luV2lkdGggPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aFxyXG5cdFx0XHRcdFx0XHR0aGlzLnRleHRXaWR0aCA9IHJlcy5zaXplLndpZHRoXHJcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKHRoaXMuJHJlZnNbJ2FuaW1hdGlvbkVsZSddLCB7XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke3dpbldpZHRofXB4KWBcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLFxyXG5cdFx0XHRcdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcclxuXHRcdFx0XHRcdFx0XHRkZWxheTogMFxyXG5cdFx0XHRcdFx0XHR9LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzLnN0b3BBbmltYXRpb24pIHtcclxuXHRcdFx0XHRcdFx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKHRoaXMuJHJlZnNbJ2FuaW1hdGlvbkVsZSddLCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7dGhpcy50ZXh0V2lkdGh9cHgpYFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAodGhpcy50ZXh0V2lkdGggLSB3aW5XaWR0aCkgLyB0aGlzLnNwZWVkICogMTAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsYXk6IDEwMDBcclxuXHRcdFx0XHRcdFx0XHRcdH0sICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzLnN0b3BBbmltYXRpb24pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmxvb3BBbmltYXRpb24oKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0XHRpZiAoIXRoaXMuc2Nyb2xsYWJsZSAmJiAodGhpcy5zaW5nbGUgfHwgdGhpcy5tb3JlVGV4dCkpIHtcclxuXHRcdFx0XHRcdGRvbS5nZXRDb21wb25lbnRSZWN0KHRoaXMuJHJlZnNbJ3RleHRCb3gnXSwgKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLndyYXBXaWR0aCA9IHJlcy5zaXplLndpZHRoXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0bG9vcEFuaW1hdGlvbigpIHtcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbih0aGlzLiRyZWZzWydhbmltYXRpb25FbGUnXSwge1xyXG5cdFx0XHRcdFx0c3R5bGVzOiB7XHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoMHB4KWBcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMFxyXG5cdFx0XHRcdH0sICgpID0+IHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5zdG9wQW5pbWF0aW9uKSB7XHJcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKHRoaXMuJHJlZnNbJ2FuaW1hdGlvbkVsZSddLCB7XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke3RoaXMudGV4dFdpZHRofXB4KWBcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiB0aGlzLnRleHRXaWR0aCAvIHRoaXMuc3BlZWQgKiAxMDAwLFxyXG5cdFx0XHRcdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcclxuXHRcdFx0XHRcdFx0XHRkZWxheTogMFxyXG5cdFx0XHRcdFx0XHR9LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCF0aGlzLnN0b3BBbmltYXRpb24pIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMubG9vcEFuaW1hdGlvbigpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xpY2tNb3JlKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2dldG1vcmUnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZSgpIHtcclxuXHRcdFx0XHR0aGlzLnNob3cgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbG9zZScpXHJcblx0XHRcdH0sXHJcblx0XHRcdG9uQ2xpY2soKSB7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnVuaS1ub3RpY2ViYXIge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiA2cHggMTJweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHQudW5pLW5vdGljZWJhci1jbG9zZSB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHR9XHJcblxyXG5cdC51bmktbm90aWNlYmFyLWljb24ge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0fVxyXG5cclxuXHQudW5pLW5vdGljZWJhcl9fY29udGVudC13cmFwcGVyIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC51bmktbm90aWNlYmFyX19jb250ZW50LXdyYXBwZXItLXNpbmdsZSB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRsaW5lLWhlaWdodDogMThweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnVuaS1ub3RpY2ViYXJfX2NvbnRlbnQtd3JhcHBlci0tc2luZ2xlLFxyXG5cdC51bmktbm90aWNlYmFyX19jb250ZW50LXdyYXBwZXItLXNjcm9sbGFibGUge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblxyXG5cdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHQudW5pLW5vdGljZWJhcl9fY29udGVudC13cmFwcGVyLS1zY3JvbGxhYmxlIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGhlaWdodDogMThweDtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG5cdC51bmktbm90aWNlYmFyX19jb250ZW50LS1zY3JvbGxhYmxlIHtcclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZmxleDogMDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnVuaS1ub3RpY2ViYXJfX2NvbnRlbnQtLXNpbmdsZSB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleDogbm9uZTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC51bmktbm90aWNlYmFyX19jb250ZW50LXRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC51bmktbm90aWNlYmFyX19jb250ZW50LXRleHQtLXNpbmdsZSB7XHJcblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuXHRcdGxpbmVzOiAxO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdH1cclxuXHJcblx0LnVuaS1ub3RpY2ViYXJfX2NvbnRlbnQtdGV4dC0tc2Nyb2xsYWJsZSB7XHJcblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuXHRcdGxpbmVzOiAxO1xyXG5cdFx0LyogcGFkZGluZy1sZWZ0OiA3NTBycHg7ICovXHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0aGVpZ2h0OiAxOHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxMDAlO1xyXG5cdFx0YW5pbWF0aW9uOiBub3RpY2UgMTBzIDBzIGxpbmVhciBpbmZpbml0ZSBib3RoO1xyXG5cdFx0YW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cclxuXHJcblx0LnVuaS1ub3RpY2ViYXJfX21vcmUge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDVweDtcclxuXHR9XHJcblxyXG5cdC51bmktbm90aWNlYmFyX19tb3JlLXRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdH1cclxuXHJcblx0QGtleWZyYW1lcyBub3RpY2Uge1xyXG5cdFx0MTAwJSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG5cdFx0fVxyXG5cdH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdW5pLW5vdGljZS1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjRhMDVkZTQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91bmktbm90aWNlLWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNGEwNWRlNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDUxNzc4Mjk1OTFcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(1265))
        })
    },
    [['components/uni-notice-bar/uni-notice-bar-create-component']]
]);
