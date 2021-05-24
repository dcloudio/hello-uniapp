(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/template/ucharts/ucharts"],{

/***/ 974:
/*!*********************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/main.js?{"page":"pages%2Ftemplate%2Fucharts%2Fucharts"} ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _ucharts = _interopRequireDefault(__webpack_require__(/*! ./pages/template/ucharts/ucharts.vue */ 975));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_ucharts.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 975:
/*!************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/ucharts/ucharts.vue ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ucharts_vue_vue_type_template_id_1052ace9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ucharts.vue?vue&type=template&id=1052ace9& */ 976);
/* harmony import */ var _ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ucharts.vue?vue&type=script&lang=js& */ 978);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ucharts.vue?vue&type=style&index=0&lang=css& */ 981);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ucharts_vue_vue_type_template_id_1052ace9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ucharts_vue_vue_type_template_id_1052ace9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _ucharts_vue_vue_type_template_id_1052ace9___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/template/ucharts/ucharts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 976:
/*!*******************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/ucharts/ucharts.vue?vue&type=template&id=1052ace9& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_template_id_1052ace9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ucharts.vue?vue&type=template&id=1052ace9& */ 977);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_template_id_1052ace9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_template_id_1052ace9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_template_id_1052ace9___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_template_id_1052ace9___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 977:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/ucharts/ucharts.vue?vue&type=template&id=1052ace9& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 978:
/*!*************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/ucharts/ucharts.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ucharts.vue?vue&type=script&lang=js& */ 979);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 979:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/ucharts/ucharts.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
























































































































































































var _uCharts2 = _interopRequireDefault(__webpack_require__(/*! ../../../components/u-charts/u-charts.js */ 980));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var _self;
var canvasObj = {};var _default =

{
  data: function data() {
    return {
      cWidth: '',
      cHeight: '',
      cWidth2: '', //横屏图表
      cHeight2: '', //横屏图表
      cWidth3: '', //圆弧进度图
      cHeight3: '', //圆弧进度图
      arcbarWidth: '', //圆弧进度图，进度条宽度,此设置可使各端宽度一致
      gaugeWidth: '', //仪表盘宽度,此设置可使各端宽度一致
      tips: '',
      pixelRatio: 1,
      serverData: '',
      itemCount: 30, //x轴单屏数据密度
      sliderMax: 50 };

  },
  onLoad: function onLoad() {
    _self = this;











    this.cWidth = uni.upx2px(750);
    this.cHeight = uni.upx2px(500);
    this.cWidth2 = uni.upx2px(700);
    this.cHeight2 = uni.upx2px(1100);
    this.cWidth3 = uni.upx2px(250);
    this.cHeight3 = uni.upx2px(250);
    this.arcbarWidth = uni.upx2px(24);
    this.gaugeWidth = uni.upx2px(30);

    //this.fillData(Data);
  },
  onReady: function onReady() {
    this.getServerData();
  },
  methods: {
    getServerData: function getServerData() {
      uni.showLoading({
        title: "正在加载数据..." });

      uni.request({
        url: 'https://unidemo.dcloud.net.cn/hello-uniapp-ucharts-data.json',
        data: {},
        success: function success(res) {
          _self.fillData(res.data);
        },
        fail: function fail() {
          _self.tips = "网络错误，小程序端请检查合法域名";
        },
        complete: function complete() {
          uni.hideLoading();
        } });

    },
    fillData: function fillData(data) {
      this.serverData = data;
      this.tips = data.tips;
      this.sliderMax = data.Candle.categories.length;
      var Column = {
        categories: [],
        series: [] };

      var ColumnMeter = {
        categories: [],
        series: [] };

      var LineA = {
        categories: [],
        series: [] };

      var LineB = {
        categories: [],
        series: [] };

      var Area = {
        categories: [],
        series: [] };

      var Pie = {
        series: [] };

      var Ring = {
        series: [] };

      var Funnel = {
        series: [] };

      var Radar = {
        categories: [],
        series: [] };

      var Arcbar1 = {
        series: [] };

      var Arcbar2 = {
        series: [] };

      var Arcbar3 = {
        series: [] };

      var Gauge = {
        categories: [],
        series: [] };

      var Candle = {
        categories: [],
        series: [] };

      var Mix = {
        categories: [],
        series: [] };

      //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
      Column.categories = data.Column.categories;
      //这里的series数据是后台做好的，如果您的数据没有和前面我注释掉的格式一样，请自行拼接数据
      Column.series = data.Column.series;
      ColumnMeter.categories = data.ColumnMeter.categories;
      //这里的series数据,如果为Meter，series[0]定义为外层数据，series[1]定义为内层数据
      ColumnMeter.series = data.ColumnMeter.series;
      LineA.categories = data.LineA.categories;
      LineA.series = data.LineA.series;
      LineB.categories = data.LineB.categories;
      LineB.series = data.LineB.series;
      Area.categories = data.Area.categories;
      Area.series = data.Area.series;
      Pie.series = data.Pie.series;
      Ring.series = data.Ring.series;
      Funnel.series = data.Pie.series;
      //自定义文案示例，需设置format字段
      var _loop = function _loop(i) {
        Ring.series[i].format = function () {
          return Ring.series[i].name + Ring.series[i].data;
        };};for (var i = 0; i < Ring.series.length; i++) {_loop(i);
      }
      Radar.categories = data.Radar.categories;
      Radar.series = data.Radar.series;
      Arcbar1.series = data.Arcbar1.series;
      Arcbar2.series = data.Arcbar2.series;
      Arcbar3.series = data.Arcbar3.series;
      Gauge.categories = data.Gauge.categories;
      Gauge.series = data.Gauge.series;
      Candle.categories = data.Candle.categories;
      Candle.series = data.Candle.series;
      Mix.categories = data.Mix.categories;
      Mix.series = data.Mix.series;
      this.showColumn("canvasColumn", Column);
      this.showColumnMeter("canvasColumnMeter", ColumnMeter);
      this.showLineA("canvasLineA", LineA);
      this.showLineB("canvasLineB", LineB);
      this.showArea("canvasArea", Area);
      this.showPie("canvasPie", Pie);
      this.showRing("canvasRing", Ring);
      this.showFunnel("canvasFunnel", Funnel);
      this.showRadar("canvasRadar", Radar);
      this.showArcbar("canvasArcbar1", Arcbar1);
      this.showArcbar2("canvasArcbar2", Arcbar2);
      this.showArcbar3("canvasArcbar3", Arcbar3);
      this.showGauge("canvasGauge", Gauge);
      this.showCandle("canvasCandle", Candle);
      this.showMix("canvasMix", Mix);
    },
    showColumn: function showColumn(canvasId, chartData) {
      canvasObj[canvasId] = new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'column',
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 11,
          margin: 0 },

        fontSize: 11,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        animation: false,
        categories: chartData.categories,
        series: chartData.series,
        xAxis: {
          disableGrid: true },

        yAxis: {
          format: function format(val) {
            return val.toFixed(0) + '元';
          } },

        dataLabel: true,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        extra: {
          column: {
            type: 'group',
            width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length } } });



    },
    showColumnMeter: function showColumnMeter(canvasId, chartData) {
      canvasObj[canvasId] = new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'column',
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 11,
          margin: 0 },

        fontSize: 11,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        animation: false,
        categories: chartData.categories,
        series: chartData.series,
        xAxis: {
          disableGrid: true },

        yAxis: {
          //disabled:true
        },
        dataLabel: true,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        extra: {
          column: {
            type: 'meter',
            width: _self.cWidth * _self.pixelRatio * 0.45 / chartData.categories.length,
            meter: {
              border: 4,
              fillColor: '#E5FDC3' } } } });





    },
    showLineA: function showLineA(canvasId, chartData) {var _uCharts;
      canvasObj[canvasId] = new _uCharts2.default((_uCharts = {
        $this: _self,
        canvasId: canvasId,
        type: 'line',
        fontSize: 11,
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 11,
          margin: 5 },

        dataLabel: false,
        dataPointShape: false,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: false,
        enableScroll: true, //开启图表拖拽功能
        xAxis: {
          disableGrid: false,
          type: 'grid',
          gridType: 'dash',
          itemCount: 4,
          scrollShow: true,
          scrollAlign: 'left'
          //scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
          //scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
        },
        yAxis: {
          //disabled:true
          gridType: 'dash',
          splitNumber: 8,
          min: 10,
          max: 180,
          format: function format(val) {
            return val.toFixed(0) + '元';
          } //如不写此方法，Y轴刻度默认保留两位小数
        },
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio }, _defineProperty(_uCharts, "dataLabel",
      true), _defineProperty(_uCharts, "dataPointShape",
      true), _defineProperty(_uCharts, "extra",
      {
        lineStyle: 'straight' }), _uCharts));



    },
    showLineB: function showLineB(canvasId, chartData) {
      canvasObj[canvasId] = new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'line',
        fontSize: 11,
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 11,
          margin: 5 },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        rotate: true, //开启图表横屏



        categories: chartData.categories,
        animation: false,
        series: chartData.series,
        xAxis: {
          disableGrid: true },

        yAxis: {
          //disabled:true
        },
        width: _self.cWidth2 * _self.pixelRatio,
        height: _self.cHeight2 * _self.pixelRatio,
        dataLabel: true,
        dataPointShape: true,
        extra: {
          lineStyle: 'curve' } });


    },
    showArea: function showArea(canvasId, chartData) {
      canvasObj[canvasId] = new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'area',
        fontSize: 11,
        padding: [0, 15, 10, 15],
        legend: {
          show: true,
          position: 'top',
          float: 'center',
          itemGap: 30,
          padding: 5,
          lineHeight: 18,
          margin: 0 },

        dataLabel: false,
        dataPointShape: true,
        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: false,
        xAxis: {
          type: 'grid',
          gridColor: '#CCCCCC',
          gridType: 'dash',
          dashLength: 8,
          boundaryGap: 'justify' //两端不留白配置
        },
        yAxis: {
          gridType: 'dash',
          gridColor: '#CCCCCC',
          dashLength: 8,
          splitNumber: 5 },

        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        extra: {
          area: {
            type: 'curve',
            opacity: 0.2,
            addLine: true,
            width: 2 } } });



    },
    showPie: function showPie(canvasId, chartData) {
      canvasObj[canvasId] = new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'pie',
        fontSize: 11,
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 11,
          margin: 0 },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: false,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: true,
        extra: {
          pie: {
            lableWidth: 15 } } });



    },
    showRing: function showRing(canvasId, chartData) {
      canvasObj[canvasId] = new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'ring',
        fontSize: 11,
        padding: [5, 5, 5, 5],
        legend: {
          show: true,
          position: 'right',
          float: 'center',
          itemGap: 10,
          padding: 5,
          lineHeight: 26,
          margin: 5,
          //backgroundColor:'rgba(41,198,90,0.2)',
          //borderColor :'rgba(41,198,90,0.5)',
          borderWidth: 1 },

        title: {
          name: '70%',
          color: '#7cb5ec',
          fontSize: 25 * _self.pixelRatio },

        subtitle: {
          name: '收益率',
          color: '#666666',
          fontSize: 15 * _self.pixelRatio },

        extra: {
          pie: {
            lableWidth: 15,
            ringWidth: 40 * _self.pixelRatio, //圆环的宽度
            offsetAngle: 0 //圆环的角度
          } },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: false,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        disablePieStroke: true,
        dataLabel: true });


    },
    showFunnel: function showFunnel(canvasId, chartData) {
      canvasObj[canvasId] = new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'funnel',
        fontSize: 11,
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 11,
          margin: 0 },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: false,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: true,
        extra: {
          funnel: {
            border: true,
            borderWidth: 2,
            borderColor: '#FFFFFF' } } });



    },
    showRadar: function showRadar(canvasId, chartData) {
      canvasObj[canvasId] = new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'radar',
        fontSize: 11,
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 11,
          margin: 0 },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        animation: false,
        dataLabel: true,
        categories: chartData.categories,
        series: chartData.series,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        extra: {
          radar: {
            max: 200 //雷达数值的最大值
          } } });


    },
    showArcbar: function showArcbar(canvasId, chartData) {
      new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'arcbar',
        fontSize: 11,
        title: {
          name: Math.round(chartData.series[0].data * 100) + '%',
          color: chartData.series[0].color,
          fontSize: 25 * _self.pixelRatio },

        subtitle: {
          name: chartData.series[0].name,
          color: '#666666',
          fontSize: 15 * _self.pixelRatio },

        extra: {
          arcbar: {
            type: 'default',
            width: _self.arcbarWidth * _self.pixelRatio //圆弧的宽度
          } },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: false,
        width: _self.cWidth3 * _self.pixelRatio,
        height: _self.cHeight3 * _self.pixelRatio,
        dataLabel: true });


    },
    showArcbar2: function showArcbar2(canvasId, chartData) {
      new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'arcbar',
        fontSize: 11,
        title: {
          name: Math.round(chartData.series[0].data * 100) + '%',
          color: chartData.series[0].color,
          fontSize: 25 * _self.pixelRatio },

        subtitle: {
          name: chartData.series[0].name,
          color: '#666666',
          fontSize: 15 * _self.pixelRatio },

        extra: {
          arcbar: {
            type: 'default',
            width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
            backgroundColor: '#ffe3e8',
            startAngle: 1.25,
            endAngle: 0.75 } },


        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: false,
        width: _self.cWidth3 * _self.pixelRatio,
        height: _self.cHeight3 * _self.pixelRatio,
        dataLabel: true });


    },
    showArcbar3: function showArcbar3(canvasId, chartData) {
      new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'arcbar',
        fontSize: 11,
        title: {
          name: Math.round(chartData.series[0].data * 100) + '%',
          color: chartData.series[0].color,
          fontSize: 25 * _self.pixelRatio },

        subtitle: {
          name: chartData.series[0].name,
          color: '#666666',
          fontSize: 15 * _self.pixelRatio },

        extra: {
          arcbar: {
            type: 'circle', //整圆类型进度条图
            width: _self.arcbarWidth * _self.pixelRatio, //圆弧的宽度
            startAngle: 0.5 //整圆类型只需配置起始角度即可
          } },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        series: chartData.series,
        animation: false,
        width: _self.cWidth3 * _self.pixelRatio,
        height: _self.cHeight3 * _self.pixelRatio,
        dataLabel: true });


    },
    showGauge: function showGauge(canvasId, chartData) {
      canvasObj[canvasId] = new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'gauge',
        fontSize: 11,
        title: {
          name: Math.round(chartData.series[0].data * 100) + '%',
          color: chartData.categories[1].color,
          fontSize: 25 * _self.pixelRatio,
          offsetY: 50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        },
        subtitle: {
          name: chartData.series[0].name,
          color: '#666666',
          fontSize: 15 * _self.pixelRatio,
          offsetY: -50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        },
        extra: {
          gauge: {
            type: 'default',
            width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
            startAngle: 0.75,
            endAngle: 0.25,
            startNumber: 0,
            endNumber: 100,
            splitLine: {
              fixRadius: 0,
              splitNumber: 10,
              width: _self.gaugeWidth * _self.pixelRatio, //仪表盘背景的宽度
              color: '#FFFFFF',
              childNumber: 5,
              childWidth: _self.gaugeWidth * 0.4 * _self.pixelRatio //仪表盘背景的宽度
            },
            pointer: {
              width: _self.gaugeWidth * 0.8 * _self.pixelRatio, //指针宽度
              color: 'auto' } } },



        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: true,
        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: true });

    },
    changeGaugeData: function changeGaugeData() {
      var series = [{
        name: "完成率",
        data: Math.random() }];
      //这里是随机数据，生产环境请从服务器获取，注意series数据类型为数组
      //这里我借用之前的categories数据，判断一下新数据的title.color，没有写死在程序里，以便于自定义
      var newTitleColor;
      for (var i = 0; i < _self.serverData.Gauge.categories.length; i++) {
        if (series[0].data <= _self.serverData.Gauge.categories[i].value) {
          newTitleColor = _self.serverData.Gauge.categories[i].color;
          break;
        }
      }

      canvasObj['canvasGauge'].updateData({
        series: series, //这里给了新数值
        categories: _self.serverData.Gauge.categories,
        title: {
          name: Math.round(series[0].data * 100) + '%',
          color: newTitleColor,
          fontSize: 25 * _self.pixelRatio,
          offsetY: 50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        },
        subtitle: {
          name: '更新数据',
          color: '#666666',
          fontSize: 15 * _self.pixelRatio,
          offsetY: -50 * _self.pixelRatio //新增参数，自定义调整Y轴文案距离
        } });

    },
    showCandle: function showCandle(canvasId, chartData) {
      canvasObj[canvasId] = new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'candle',
        fontSize: 11,
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 11,
          margin: 8 },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        enableMarkLine: true,
        /***需要开启标记线***/
        categories: chartData.categories,
        series: chartData.series,
        animation: true,
        enableScroll: true, //开启图表拖拽功能
        xAxis: {
          disableGrid: true, //不绘制X轴网格线
          labelCount: 4, //X轴文案数量
          //type:'grid',
          //gridType:'dash',
          itemCount: _self.itemCount, //可不填写，配合enableScroll图表拖拽功能使用，x轴单屏显示数据的数量，默认为5个
          scrollShow: true, //新增是否显示滚动条，默认false
          scrollAlign: 'right'
          //scrollBackgroundColor:'#F7F7FF',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条背景颜色,默认为 #EFEBEF
          //scrollColor:'#DEE7F7',//可不填写，配合enableScroll图表拖拽功能使用，X轴滚动条颜色,默认为 #A6A6A6
        },
        yAxis: {
          //disabled:true
          gridType: 'dash',
          splitNumber: 5,
          format: function format(val) {
            return val.toFixed(0);
          } },

        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: false,
        dataPointShape: true,
        extra: {
          candle: {
            color: {
              upLine: '#f04864',
              upFill: '#f04864',
              downLine: '#2fc25b',
              downFill: '#2fc25b' },

            average: {
              show: true,
              name: ['MA5', 'MA10', 'MA30'],
              day: [5, 10, 20],
              color: ['#1890ff', '#2fc25b', '#facc14'] } },


          tooltip: {
            bgColor: '#000000',
            bgOpacity: 0.7,
            gridType: 'dash',
            dashLength: 5,
            gridColor: '#1890ff',
            fontColor: '#FFFFFF',
            horizentalLine: true,
            xAxisLabel: true,
            yAxisLabel: true,
            labelBgColor: '#DFE8FF',
            labelBgOpacity: 0.95,
            labelAlign: 'left',
            labelFontColor: '#666666' },

          markLine: {
            type: 'dash',
            dashLength: 5,
            data: [{
              value: 2150,
              lineColor: '#f04864',
              showLabel: true },
            {
              value: 2350,
              lineColor: '#f04864',
              showLabel: true }] } } });




    },
    touchCandle: function touchCandle(e) {
      canvasObj['canvasCandle'].scrollStart(e);
    },
    moveCandle: function moveCandle(e) {
      canvasObj['canvasCandle'].scroll(e);
    },
    touchEndCandle: function touchEndCandle(e) {
      canvasObj['canvasCandle'].scrollEnd(e);
      //下面是toolTip事件，如果滚动后不需要显示，可不填写
      canvasObj['canvasCandle'].showToolTip(e, {
        format: function format(item, category) {
          return category + ' ' + item.name + ':' + item.data;
        } });

    },
    changeData: function changeData() {
      canvasObj['canvasColumn'].updateData({
        series: _self.serverData.ColumnB.series,
        categories: _self.serverData.ColumnB.categories });

    },
    touchLineA: function touchLineA(e) {
      canvasObj['canvasLineA'].scrollStart(e);
    },
    moveLineA: function moveLineA(e) {
      canvasObj['canvasLineA'].scroll(e);
    },
    touchEndLineA: function touchEndLineA(e) {
      canvasObj['canvasLineA'].scrollEnd(e);
      //下面是toolTip事件，如果滚动后不需要显示，可不填写
      canvasObj['canvasLineA'].showToolTip(e, {
        format: function format(item, category) {
          return category + ' ' + item.name + ':' + item.data;
        } });

    },
    showMix: function showMix(canvasId, chartData) {
      canvasObj[canvasId] = new _uCharts2.default({
        $this: _self,
        canvasId: canvasId,
        type: 'mix',
        fontSize: 11,
        padding: [15, 15, 0, 15],
        legend: {
          show: true,
          padding: 5,
          lineHeight: 11,
          margin: 6 },

        background: '#FFFFFF',
        pixelRatio: _self.pixelRatio,
        categories: chartData.categories,
        series: chartData.series,
        animation: false,
        enableScroll: true, //开启图表拖拽功能
        xAxis: {
          disableGrid: false,
          type: 'grid',
          gridType: 'dash',
          itemCount: 4,
          scrollShow: true,
          scrollAlign: 'left' },

        yAxis: {
          gridType: 'dash',
          dashLength: 4,
          splitNumber: 5,
          min: 10,
          max: 180,
          format: function format(val) {
            return val.toFixed(0);
          } },

        width: _self.cWidth * _self.pixelRatio,
        height: _self.cHeight * _self.pixelRatio,
        dataLabel: true,
        dataPointShape: true,
        extra: {
          column: {
            width: 20 * _self.pixelRatio },

          tooltip: {
            bgColor: '#000000',
            bgOpacity: 0.7,
            gridType: 'dash',
            dashLength: 8,
            gridColor: '#1890ff',
            fontColor: '#FFFFFF',
            horizentalLine: true,
            xAxisLabel: true,
            yAxisLabel: true,
            labelBgColor: '#DFE8FF',
            labelBgOpacity: 0.95,
            labelAlign: 'left',
            labelFontColor: '#666666' } } });



    },
    touchMix: function touchMix(e) {
      canvasObj['canvasMix'].scrollStart(e);
    },
    moveMix: function moveMix(e) {
      canvasObj['canvasMix'].scroll(e);
    },
    touchEndMix: function touchEndMix(e) {
      canvasObj['canvasMix'].scrollEnd(e);
      canvasObj['canvasMix'].touchLegend(e);
      //下面是toolTip事件，如果滚动后不需要显示，可不填写
      canvasObj['canvasMix'].showToolTip(e, {
        format: function format(item, category) {
          return category + ' ' + item.name + ':' + item.data;
        } });

    },
    touchIt: function touchIt(e, id) {
      canvasObj[id].touchLegend(e, {
        animation: false });

      canvasObj[id].showToolTip(e, {
        format: function format(item, category) {
          if (typeof item.data === 'object') {
            return category + ' ' + item.name + ':' + item.data.value;
          } else {
            return category + ' ' + item.name + ':' + item.data;
          }
        } });

    },
    touchPie: function touchPie(e, id) {
      canvasObj[id].showToolTip(e, {
        format: function format(item) {
          return item.name + ':' + item.data;
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 981:
/*!*********************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/ucharts/ucharts.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./ucharts.vue?vue&type=style&index=0&lang=css& */ 982);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_ucharts_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 982:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/template/ucharts/ucharts.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[974,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvdGVtcGxhdGUvdWNoYXJ0cy91Y2hhcnRzLnZ1ZT8xNDEwIiwid2VicGFjazovLy8vVXNlcnMvdGlhbmppYXhpbmcvUFAvRGNsb3VkL2hlbGxvLXVuaWFwcC9wYWdlcy90ZW1wbGF0ZS91Y2hhcnRzL3VjaGFydHMudnVlPzAxNmYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL3BhZ2VzL3RlbXBsYXRlL3VjaGFydHMvdWNoYXJ0cy52dWU/ZmJkNSIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvdGVtcGxhdGUvdWNoYXJ0cy91Y2hhcnRzLnZ1ZT80NmY2IiwidW5pLWFwcDovLy9wYWdlcy90ZW1wbGF0ZS91Y2hhcnRzL3VjaGFydHMudnVlIiwid2VicGFjazovLy8vVXNlcnMvdGlhbmppYXhpbmcvUFAvRGNsb3VkL2hlbGxvLXVuaWFwcC9wYWdlcy90ZW1wbGF0ZS91Y2hhcnRzL3VjaGFydHMudnVlP2JlMjgiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL3BhZ2VzL3RlbXBsYXRlL3VjaGFydHMvdWNoYXJ0cy52dWU/YzhhMyJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EsNEc7QUFDQUEsVUFBVSxDQUFDQyxnQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDMkQ7QUFDTDtBQUNhOzs7QUFHbkU7QUFDMk47QUFDM04sZ0JBQWdCLHlOQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLGtGQUFN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QSx3Q0FEQSxFQURBOztBQUlBO0FBQ0EsOEJBREE7QUFFQSwwQkFGQTtBQUdBLDRCQUhBO0FBSUEseUJBSkE7QUFLQSxnQ0FMQTtBQU1BLGdDQU5BO0FBT0EsZ0NBUEE7QUFRQSw0QkFSQTtBQVNBLDRCQVRBO0FBVUEsbUNBVkE7QUFXQSxnQ0FYQTtBQVlBLDhCQVpBO0FBYUEscUNBYkEsRUFKQSxFQXhDQTs7OztBQTZEQSxLQXYwQkE7QUF3MEJBLFlBeDBCQSxvQkF3MEJBLENBeDBCQSxFQXcwQkE7QUFDQTtBQUNBLEtBMTBCQTtBQTIwQkEsV0EzMEJBLG1CQTIwQkEsQ0EzMEJBLEVBMjBCQTtBQUNBO0FBQ0EsS0E3MEJBO0FBODBCQSxlQTkwQkEsdUJBODBCQSxDQTkwQkEsRUE4MEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQTs7QUFLQSxLQXYxQkE7QUF3MUJBLFdBeDFCQSxtQkF3MUJBLENBeDFCQSxFQXcxQkEsRUF4MUJBLEVBdzFCQTtBQUNBO0FBQ0Esd0JBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FQQTs7QUFTQSxLQXIyQkE7QUFzMkJBLFlBdDJCQSxvQkFzMkJBLENBdDJCQSxFQXMyQkEsRUF0MkJBLEVBczJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBS0EsS0E1MkJBLEVBN0NBLEU7Ozs7Ozs7Ozs7Ozs7QUM3TEE7QUFBQTtBQUFBO0FBQUE7QUFBK3ZDLENBQWdCLDBwQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQW54QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL3RlbXBsYXRlL3VjaGFydHMvdWNoYXJ0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy90ZW1wbGF0ZS91Y2hhcnRzL3VjaGFydHMudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdWNoYXJ0cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTA1MmFjZTkmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91Y2hhcnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdWNoYXJ0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdWNoYXJ0cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3RlbXBsYXRlL3VjaGFydHMvdWNoYXJ0cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VjaGFydHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEwNTJhY2U5JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VjaGFydHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91Y2hhcnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInFpdW4tY29sdW1uc1wiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLXBhZGRpbmdcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzJycHg7XCI+XHJcblx0XHRcdDx0ZXh0Pnt7dGlwc319PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLXBhZGRpbmdcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJxaXVuLXRpcFwiIEB0YXA9XCJjaGFuZ2VEYXRhKClcIj7mm7TmlrDmn7Hnirblm77mlbDmja48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInFpdW4tdGl0bGUtYmFyXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjRTVGREMzO1wiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInFpdW4tdGl0bGUtZG90LWxpZ2h0XCI+5p+x54q25Zu+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLWNoYXJ0c1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0U1RkRDMztcIj5cclxuXHRcdFx0PCEtLSNpZmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzQ29sdW1uXCIgaWQ9XCJjYW52YXNDb2x1bW5cIiBjbGFzcz1cImNoYXJ0c1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogI0U1RkRDMztcIiA6d2lkdGg9XCJjV2lkdGgqcGl4ZWxSYXRpb1wiXHJcblx0XHRcdCA6aGVpZ2h0PVwiY0hlaWdodCpwaXhlbFJhdGlvXCIgOnN0eWxlPVwieyd3aWR0aCc6Y1dpZHRoKydweCcsJ2hlaWdodCc6Y0hlaWdodCsncHgnfVwiIEB0b3VjaHN0YXJ0PVwidG91Y2hJdCgkZXZlbnQsJ2NhbnZhc0NvbHVtbicpXCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdFx0PCEtLSNpZm5kZWYgTVAtQUxJUEFZIC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImNhbnZhc0NvbHVtblwiIGlkPVwiY2FudmFzQ29sdW1uXCIgY2xhc3M9XCJjaGFydHNcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNFNUZEQzM7XCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaEl0KCRldmVudCwnY2FudmFzQ29sdW1uJylcIj48L2NhbnZhcz5cclxuXHRcdFx0PCEtLSNlbmRpZi0tPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLWJnLXdoaXRlIHFpdW4tdGl0bGUtYmFyIHFpdW4tY29tbW9uLW10XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicWl1bi10aXRsZS1kb3QtbGlnaHRcIj7muKnluqborqHlvI/lm77ooag8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInFpdW4tY2hhcnRzXCI+XHJcblx0XHRcdDwhLS0jaWZkZWYgTVAtQUxJUEFZIC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImNhbnZhc0NvbHVtbk1ldGVyXCIgaWQ9XCJjYW52YXNDb2x1bW5NZXRlclwiIGNsYXNzPVwiY2hhcnRzXCIgOndpZHRoPVwiY1dpZHRoKnBpeGVsUmF0aW9cIiA6aGVpZ2h0PVwiY0hlaWdodCpwaXhlbFJhdGlvXCJcclxuXHRcdFx0IDpzdHlsZT1cInsnd2lkdGgnOmNXaWR0aCsncHgnLCdoZWlnaHQnOmNIZWlnaHQrJ3B4J31cIiBAdG91Y2hzdGFydD1cInRvdWNoSXQoJGV2ZW50LCdjYW52YXNDb2x1bW5NZXRlcicpXCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdFx0PCEtLSNpZm5kZWYgTVAtQUxJUEFZIC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImNhbnZhc0NvbHVtbk1ldGVyXCIgaWQ9XCJjYW52YXNDb2x1bW5NZXRlclwiIGNsYXNzPVwiY2hhcnRzXCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaEl0KCRldmVudCwnY2FudmFzQ29sdW1uTWV0ZXInKVwiPjwvY2FudmFzPlxyXG5cdFx0XHQ8IS0tI2VuZGlmLS0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInFpdW4tYmctd2hpdGUgcWl1bi10aXRsZS1iYXIgcWl1bi1jb21tb24tbXRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJxaXVuLXRpdGxlLWRvdC1saWdodFwiPua3t+WQiOWbvu+8iOWNleWdkOagh+ezu+aUr+aMgeeUu+eCueOAgee6v+OAgemdouOAgeafse+8iTwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicWl1bi1jaGFydHNcIj5cclxuXHRcdFx0PCEtLSNpZmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzTWl4XCIgaWQ9XCJjYW52YXNNaXhcIiBjbGFzcz1cImNoYXJ0c1wiIDp3aWR0aD1cImNXaWR0aCpwaXhlbFJhdGlvXCIgOmhlaWdodD1cImNIZWlnaHQqcGl4ZWxSYXRpb1wiXHJcblx0XHRcdCA6c3R5bGU9XCJ7J3dpZHRoJzpjV2lkdGgrJ3B4JywnaGVpZ2h0JzpjSGVpZ2h0KydweCd9XCIgZGlzYWJsZS1zY3JvbGw9dHJ1ZSBAdG91Y2hzdGFydD1cInRvdWNoTWl4XCIgQHRvdWNobW92ZT1cIm1vdmVNaXhcIlxyXG5cdFx0XHQgQHRvdWNoZW5kPVwidG91Y2hFbmRNaXhcIj48L2NhbnZhcz5cclxuXHRcdFx0PCEtLSNlbmRpZi0tPlxyXG5cdFx0XHQ8IS0tI2lmbmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzTWl4XCIgaWQ9XCJjYW52YXNNaXhcIiBjbGFzcz1cImNoYXJ0c1wiIGRpc2FibGUtc2Nyb2xsPXRydWUgQHRvdWNoc3RhcnQ9XCJ0b3VjaE1peFwiIEB0b3VjaG1vdmU9XCJtb3ZlTWl4XCJcclxuXHRcdFx0IEB0b3VjaGVuZD1cInRvdWNoRW5kTWl4XCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicWl1bi1iZy13aGl0ZSBxaXVuLXRpdGxlLWJhciBxaXVuLWNvbW1vbi1tdCBxaXVuLXJvd3NcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJxaXVuLXRpdGxlLWRvdC1saWdodFwiPkvnur/lm77vvIjonKHng5vlm77vvIk8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInFpdW4tY2hhcnRzXCI+XHJcblx0XHRcdDwhLS0jaWZkZWYgTVAtQUxJUEFZIC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImNhbnZhc0NhbmRsZVwiIGlkPVwiY2FudmFzQ2FuZGxlXCIgY2xhc3M9XCJjaGFydHNcIiA6d2lkdGg9XCJjV2lkdGgqcGl4ZWxSYXRpb1wiIDpoZWlnaHQ9XCJjSGVpZ2h0KnBpeGVsUmF0aW9cIlxyXG5cdFx0XHQgOnN0eWxlPVwieyd3aWR0aCc6Y1dpZHRoKydweCcsJ2hlaWdodCc6Y0hlaWdodCsncHgnfVwiIGRpc2FibGUtc2Nyb2xsPXRydWUgQHRvdWNoc3RhcnQ9XCJ0b3VjaENhbmRsZVwiIEB0b3VjaG1vdmU9XCJtb3ZlQ2FuZGxlXCJcclxuXHRcdFx0IEB0b3VjaGVuZD1cInRvdWNoRW5kQ2FuZGxlXCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0g5L2/55So5Zu+6KGo5ouW5ou95Yqf6IO95pe277yM5bu66K6u57uZY2FudmFz5aKe5YqgZGlzYWJsZS1zY3JvbGw9dHJ1ZeWxnuaAp++8jOWcqOaLluaLveaXtuemgeatouWxj+W5lea7muWKqCAtLT5cclxuXHRcdFx0PCEtLSNlbmRpZi0tPlxyXG5cdFx0XHQ8IS0tI2lmbmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzQ2FuZGxlXCIgaWQ9XCJjYW52YXNDYW5kbGVcIiBjbGFzcz1cImNoYXJ0c1wiIGRpc2FibGUtc2Nyb2xsPXRydWUgQHRvdWNoc3RhcnQ9XCJ0b3VjaENhbmRsZVwiXHJcblx0XHRcdCBAdG91Y2htb3ZlPVwibW92ZUNhbmRsZVwiIEB0b3VjaGVuZD1cInRvdWNoRW5kQ2FuZGxlXCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0g5L2/55So5Zu+6KGo5ouW5ou95Yqf6IO95pe277yM5bu66K6u57uZY2FudmFz5aKe5YqgZGlzYWJsZS1zY3JvbGw9dHJ1ZeWxnuaAp++8jOWcqOaLluaLveaXtuemgeatouWxj+W5lea7muWKqCAtLT5cclxuXHRcdFx0PCEtLSNlbmRpZi0tPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLXBhZGRpbmdcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJxaXVuLXRpcFwiIEB0YXA9XCJjaGFuZ2VHYXVnZURhdGEoKVwiPuabtOaWsOS7quihqOebmOaVsOaNrjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicWl1bi1iZy13aGl0ZSBxaXVuLXRpdGxlLWJhciBxaXVuLWNvbW1vbi1tdFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInFpdW4tdGl0bGUtZG90LWxpZ2h0XCI+5Luq6KGo55uYPC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLWNoYXJ0c1wiPlxyXG5cdFx0XHQ8IS0tI2lmZGVmIE1QLUFMSVBBWSAtLT5cclxuXHRcdFx0PGNhbnZhcyBjYW52YXMtaWQ9XCJjYW52YXNHYXVnZVwiIGlkPVwiY2FudmFzR2F1Z2VcIiBjbGFzcz1cImNoYXJ0c1wiIDp3aWR0aD1cImNXaWR0aCpwaXhlbFJhdGlvXCIgOmhlaWdodD1cImNIZWlnaHQqcGl4ZWxSYXRpb1wiXHJcblx0XHRcdCA6c3R5bGU9XCJ7J3dpZHRoJzpjV2lkdGgrJ3B4JywnaGVpZ2h0JzpjSGVpZ2h0KydweCd9XCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdFx0PCEtLSNpZm5kZWYgTVAtQUxJUEFZIC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImNhbnZhc0dhdWdlXCIgaWQ9XCJjYW52YXNHYXVnZVwiIGNsYXNzPVwiY2hhcnRzXCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicWl1bi1iZy13aGl0ZSBxaXVuLXRpdGxlLWJhciBxaXVuLWNvbW1vbi1tdFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInFpdW4tdGl0bGUtZG90LWxpZ2h0XCI+5ZyG5byn6L+b5bqm5Zu+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLWNoYXJ0czNcIj5cclxuXHRcdFx0PCEtLSNpZmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzQXJjYmFyMVwiIGlkPVwiY2FudmFzQXJjYmFyMVwiIGNsYXNzPVwiY2hhcnRzM1wiIDpzdHlsZT1cInsnd2lkdGgnOmNXaWR0aDMqcGl4ZWxSYXRpbysncHgnLCdoZWlnaHQnOmNIZWlnaHQzKnBpeGVsUmF0aW8rJ3B4JywgJ3RyYW5zZm9ybSc6ICdzY2FsZSgnKygxL3BpeGVsUmF0aW8pKycpJywnbWFyZ2luLWxlZnQnOi1jV2lkdGgzKihwaXhlbFJhdGlvLTEpLzIrJ3B4JywnbWFyZ2luLXRvcCc6LWNIZWlnaHQzKihwaXhlbFJhdGlvLTEpLzIrJ3B4J31cIj48L2NhbnZhcz5cclxuXHRcdFx0PGNhbnZhcyBjYW52YXMtaWQ9XCJjYW52YXNBcmNiYXIyXCIgaWQ9XCJjYW52YXNBcmNiYXIyXCIgY2xhc3M9XCJjaGFydHMzXCIgOnN0eWxlPVwieyd3aWR0aCc6Y1dpZHRoMypwaXhlbFJhdGlvKydweCcsJ2hlaWdodCc6Y0hlaWdodDMqcGl4ZWxSYXRpbysncHgnLCAndHJhbnNmb3JtJzogJ3NjYWxlKCcrKDEvcGl4ZWxSYXRpbykrJyknLCdtYXJnaW4tbGVmdCc6Y1dpZHRoMy1jV2lkdGgzKihwaXhlbFJhdGlvLTEpLzIrJ3B4JywnbWFyZ2luLXRvcCc6LWNIZWlnaHQzKihwaXhlbFJhdGlvLTEpLzIrJ3B4J31cIj48L2NhbnZhcz5cclxuXHRcdFx0PGNhbnZhcyBjYW52YXMtaWQ9XCJjYW52YXNBcmNiYXIzXCIgaWQ9XCJjYW52YXNBcmNiYXIzXCIgY2xhc3M9XCJjaGFydHMzXCIgOnN0eWxlPVwieyd3aWR0aCc6Y1dpZHRoMypwaXhlbFJhdGlvKydweCcsJ2hlaWdodCc6Y0hlaWdodDMqcGl4ZWxSYXRpbysncHgnLCAndHJhbnNmb3JtJzogJ3NjYWxlKCcrKDEvcGl4ZWxSYXRpbykrJyknLCdtYXJnaW4tbGVmdCc6Y1dpZHRoMyoyLWNXaWR0aDMqKHBpeGVsUmF0aW8tMSkvMisncHgnLCdtYXJnaW4tdG9wJzotY0hlaWdodDMqKHBpeGVsUmF0aW8tMSkvMisncHgnfVwiPjwvY2FudmFzPlxyXG5cdFx0XHQ8IS0tI2VuZGlmLS0+XHJcblx0XHRcdDwhLS0jaWZuZGVmIE1QLUFMSVBBWSAtLT5cclxuXHRcdFx0PGNhbnZhcyBjYW52YXMtaWQ9XCJjYW52YXNBcmNiYXIxXCIgaWQ9XCJjYW52YXNBcmNiYXIxXCIgY2xhc3M9XCJjaGFydHMzXCI+PC9jYW52YXM+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzQXJjYmFyMlwiIGlkPVwiY2FudmFzQXJjYmFyMlwiIGNsYXNzPVwiY2hhcnRzM1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDI1MHJweDtcIj48L2NhbnZhcz5cclxuXHRcdFx0PGNhbnZhcyBjYW52YXMtaWQ9XCJjYW52YXNBcmNiYXIzXCIgaWQ9XCJjYW52YXNBcmNiYXIzXCIgY2xhc3M9XCJjaGFydHMzXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogNTAwcnB4O1wiPjwvY2FudmFzPlxyXG5cdFx0XHQ8IS0tI2VuZGlmLS0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInFpdW4tYmctd2hpdGUgcWl1bi10aXRsZS1iYXIgcWl1bi1jb21tb24tbXRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJxaXVuLXRpdGxlLWRvdC1saWdodFwiPua8j+aWl+Wbvjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicWl1bi1jaGFydHNcIj5cclxuXHRcdFx0PCEtLSNpZmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzRnVubmVsXCIgaWQ9XCJjYW52YXNGdW5uZWxcIiBjbGFzcz1cImNoYXJ0c1wiIDp3aWR0aD1cImNXaWR0aCpwaXhlbFJhdGlvXCIgOmhlaWdodD1cImNIZWlnaHQqcGl4ZWxSYXRpb1wiXHJcblx0XHRcdCA6c3R5bGU9XCJ7J3dpZHRoJzpjV2lkdGgrJ3B4JywnaGVpZ2h0JzpjSGVpZ2h0KydweCd9XCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaFBpZSgkZXZlbnQsJ2NhbnZhc0Z1bm5lbCcpXCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdFx0PCEtLSNpZm5kZWYgTVAtQUxJUEFZIC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImNhbnZhc0Z1bm5lbFwiIGlkPVwiY2FudmFzRnVubmVsXCIgY2xhc3M9XCJjaGFydHNcIiBAdG91Y2hzdGFydD1cInRvdWNoUGllKCRldmVudCwnY2FudmFzRnVubmVsJylcIj48L2NhbnZhcz5cclxuXHRcdFx0PCEtLSNlbmRpZi0tPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLWJnLXdoaXRlIHFpdW4tdGl0bGUtYmFyIHFpdW4tY29tbW9uLW10XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicWl1bi10aXRsZS1kb3QtbGlnaHRcIj7mipjnur/lm77kuIDvvIjlj6/mqKrlkJHmi5bmi73luKbmu5rliqjmnaHvvIk8L3ZpZXc+XHJcblx0XHRcdDwhLS0g5L2/55So5Zu+6KGo5ouW5ou95Yqf6IO95pe277yM5bu66K6u57uZY2FudmFz5aKe5YqgZGlzYWJsZS1zY3JvbGw9dHJ1ZeWxnuaAp++8jOWcqOaLluaLveaXtuemgeatouWxj+W5lea7muWKqCAtLT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicWl1bi1jaGFydHNcIj5cclxuXHRcdFx0PCEtLSNpZmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzTGluZUFcIiBpZD1cImNhbnZhc0xpbmVBXCIgY2xhc3M9XCJjaGFydHNcIiA6d2lkdGg9XCJjV2lkdGgqcGl4ZWxSYXRpb1wiIDpoZWlnaHQ9XCJjSGVpZ2h0KnBpeGVsUmF0aW9cIlxyXG5cdFx0XHQgOnN0eWxlPVwieyd3aWR0aCc6Y1dpZHRoKydweCcsJ2hlaWdodCc6Y0hlaWdodCsncHgnfVwiIGRpc2FibGUtc2Nyb2xsPXRydWUgQHRvdWNoc3RhcnQ9XCJ0b3VjaExpbmVBXCIgQHRvdWNobW92ZT1cIm1vdmVMaW5lQVwiXHJcblx0XHRcdCBAdG91Y2hlbmQ9XCJ0b3VjaEVuZExpbmVBXCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0g5L2/55So5Zu+6KGo5ouW5ou95Yqf6IO95pe277yM5bu66K6u57uZY2FudmFz5aKe5YqgZGlzYWJsZS1zY3JvbGw9dHJ1ZeWxnuaAp++8jOWcqOaLluaLveaXtuemgeatouWxj+W5lea7muWKqCAtLT5cclxuXHRcdFx0PCEtLSNlbmRpZi0tPlxyXG5cdFx0XHQ8IS0tI2lmbmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzTGluZUFcIiBpZD1cImNhbnZhc0xpbmVBXCIgY2xhc3M9XCJjaGFydHNcIiBkaXNhYmxlLXNjcm9sbD10cnVlIEB0b3VjaHN0YXJ0PVwidG91Y2hMaW5lQVwiXHJcblx0XHRcdCBAdG91Y2htb3ZlPVwibW92ZUxpbmVBXCIgQHRvdWNoZW5kPVwidG91Y2hFbmRMaW5lQVwiPjwvY2FudmFzPlxyXG5cdFx0XHQ8IS0tIOS9v+eUqOWbvuihqOaLluaLveWKn+iDveaXtu+8jOW7uuiurue7mWNhbnZhc+WinuWKoGRpc2FibGUtc2Nyb2xsPXRydWXlsZ7mgKfvvIzlnKjmi5bmi73ml7bnpoHmraLlsY/luZXmu5rliqggLS0+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicWl1bi1iZy13aGl0ZSBxaXVuLXRpdGxlLWJhciBxaXVuLWNvbW1vbi1tdFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInFpdW4tdGl0bGUtZG90LWxpZ2h0XCI+5oqY57q/5Zu+5LqM77yI5qiq5bGP5Zu+6KGo77yJPC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLWNoYXJ0cy1yb3RhdGVcIj5cclxuXHRcdFx0PCEtLSNpZmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzTGluZUJcIiBpZD1cImNhbnZhc0xpbmVCXCIgY2xhc3M9XCJjaGFydHMtcm90YXRlXCIgOnN0eWxlPVwieyd3aWR0aCc6Y1dpZHRoMipwaXhlbFJhdGlvKydweCcsJ2hlaWdodCc6Y0hlaWdodDIqcGl4ZWxSYXRpbysncHgnLCAndHJhbnNmb3JtJzogJ3NjYWxlKCcrKDEvcGl4ZWxSYXRpbykrJyknLCdtYXJnaW4tbGVmdCc6LWNXaWR0aDIqKHBpeGVsUmF0aW8tMSkvMisncHgnLCdtYXJnaW4tdG9wJzotY0hlaWdodDIqKHBpeGVsUmF0aW8tMSkvMisncHgnfVwiXHJcblx0XHRcdCBAdG91Y2hzdGFydD1cInRvdWNoSXQoJGV2ZW50LCdjYW52YXNMaW5lQicpXCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdFx0PCEtLSNpZm5kZWYgTVAtQUxJUEFZIC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImNhbnZhc0xpbmVCXCIgaWQ9XCJjYW52YXNMaW5lQlwiIGNsYXNzPVwiY2hhcnRzLXJvdGF0ZVwiIEB0b3VjaHN0YXJ0PVwidG91Y2hJdCgkZXZlbnQsJ2NhbnZhc0xpbmVCJylcIj48L2NhbnZhcz5cclxuXHRcdFx0PCEtLSNlbmRpZi0tPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLWJnLXdoaXRlIHFpdW4tdGl0bGUtYmFyIHFpdW4tY29tbW9uLW10XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicWl1bi10aXRsZS1kb3QtbGlnaHRcIj7ljLrln5/lm748L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInFpdW4tY2hhcnRzXCI+XHJcblx0XHRcdDwhLS0jaWZkZWYgTVAtQUxJUEFZIC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImNhbnZhc0FyZWFcIiBpZD1cImNhbnZhc0FyZWFcIiBjbGFzcz1cImNoYXJ0c1wiIDp3aWR0aD1cImNXaWR0aCpwaXhlbFJhdGlvXCIgOmhlaWdodD1cImNIZWlnaHQqcGl4ZWxSYXRpb1wiXHJcblx0XHRcdCA6c3R5bGU9XCJ7J3dpZHRoJzpjV2lkdGgrJ3B4JywnaGVpZ2h0JzpjSGVpZ2h0KydweCd9XCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaEl0KCRldmVudCwnY2FudmFzQXJlYScpXCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdFx0PCEtLSNpZm5kZWYgTVAtQUxJUEFZIC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImNhbnZhc0FyZWFcIiBpZD1cImNhbnZhc0FyZWFcIiBjbGFzcz1cImNoYXJ0c1wiIEB0b3VjaHN0YXJ0PVwidG91Y2hJdCgkZXZlbnQsJ2NhbnZhc0FyZWEnKVwiPjwvY2FudmFzPlxyXG5cdFx0XHQ8IS0tI2VuZGlmLS0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInFpdW4tYmctd2hpdGUgcWl1bi10aXRsZS1iYXIgcWl1bi1jb21tb24tbXRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJxaXVuLXRpdGxlLWRvdC1saWdodFwiPumlvOeKtuWbvjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicWl1bi1jaGFydHNcIj5cclxuXHRcdFx0PCEtLSNpZmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzUGllXCIgaWQ9XCJjYW52YXNQaWVcIiBjbGFzcz1cImNoYXJ0c1wiIDp3aWR0aD1cImNXaWR0aCpwaXhlbFJhdGlvXCIgOmhlaWdodD1cImNIZWlnaHQqcGl4ZWxSYXRpb1wiXHJcblx0XHRcdCA6c3R5bGU9XCJ7J3dpZHRoJzpjV2lkdGgrJ3B4JywnaGVpZ2h0JzpjSGVpZ2h0KydweCd9XCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaFBpZSgkZXZlbnQsJ2NhbnZhc1BpZScpXCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdFx0PCEtLSNpZm5kZWYgTVAtQUxJUEFZIC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImNhbnZhc1BpZVwiIGlkPVwiY2FudmFzUGllXCIgY2xhc3M9XCJjaGFydHNcIiBAdG91Y2hzdGFydD1cInRvdWNoUGllKCRldmVudCwnY2FudmFzUGllJylcIj48L2NhbnZhcz5cclxuXHRcdFx0PCEtLSNlbmRpZi0tPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLWJnLXdoaXRlIHFpdW4tdGl0bGUtYmFyIHFpdW4tY29tbW9uLW10XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicWl1bi10aXRsZS1kb3QtbGlnaHRcIj7njq/lvaLlm748L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInFpdW4tY2hhcnRzXCI+XHJcblx0XHRcdDwhLS0jaWZkZWYgTVAtQUxJUEFZIC0tPlxyXG5cdFx0XHQ8Y2FudmFzIGNhbnZhcy1pZD1cImNhbnZhc1JpbmdcIiBpZD1cImNhbnZhc1JpbmdcIiBjbGFzcz1cImNoYXJ0c1wiIDp3aWR0aD1cImNXaWR0aCpwaXhlbFJhdGlvXCIgOmhlaWdodD1cImNIZWlnaHQqcGl4ZWxSYXRpb1wiXHJcblx0XHRcdCA6c3R5bGU9XCJ7J3dpZHRoJzpjV2lkdGgrJ3B4JywnaGVpZ2h0JzpjSGVpZ2h0KydweCd9XCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaFBpZSgkZXZlbnQsJ2NhbnZhc1JpbmcnKVwiPjwvY2FudmFzPlxyXG5cdFx0XHQ8IS0tI2VuZGlmLS0+XHJcblx0XHRcdDwhLS0jaWZuZGVmIE1QLUFMSVBBWSAtLT5cclxuXHRcdFx0PGNhbnZhcyBjYW52YXMtaWQ9XCJjYW52YXNSaW5nXCIgaWQ9XCJjYW52YXNSaW5nXCIgY2xhc3M9XCJjaGFydHNcIiBAdG91Y2hzdGFydD1cInRvdWNoUGllKCRldmVudCwnY2FudmFzUmluZycpXCI+PC9jYW52YXM+XHJcblx0XHRcdDwhLS0jZW5kaWYtLT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwicWl1bi1iZy13aGl0ZSBxaXVuLXRpdGxlLWJhciBxaXVuLWNvbW1vbi1tdFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInFpdW4tdGl0bGUtZG90LWxpZ2h0XCI+6Zu36L6+5Zu+PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJxaXVuLWNoYXJ0c1wiPlxyXG5cdFx0XHQ8IS0tI2lmZGVmIE1QLUFMSVBBWSAtLT5cclxuXHRcdFx0PGNhbnZhcyBjYW52YXMtaWQ9XCJjYW52YXNSYWRhclwiIGlkPVwiY2FudmFzUmFkYXJcIiBjbGFzcz1cImNoYXJ0c1wiIDp3aWR0aD1cImNXaWR0aCpwaXhlbFJhdGlvXCIgOmhlaWdodD1cImNIZWlnaHQqcGl4ZWxSYXRpb1wiXHJcblx0XHRcdCA6c3R5bGU9XCJ7J3dpZHRoJzpjV2lkdGgrJ3B4JywnaGVpZ2h0JzpjSGVpZ2h0KydweCd9XCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaFBpZSgkZXZlbnQsJ2NhbnZhc1JhZGFyJylcIj48L2NhbnZhcz5cclxuXHRcdFx0PCEtLSNlbmRpZi0tPlxyXG5cdFx0XHQ8IS0tI2lmbmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHRcdDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzUmFkYXJcIiBpZD1cImNhbnZhc1JhZGFyXCIgY2xhc3M9XCJjaGFydHNcIiBAdG91Y2hzdGFydD1cInRvdWNoUGllKCRldmVudCwnY2FudmFzUmFkYXInKVwiPjwvY2FudmFzPlxyXG5cdFx0XHQ8IS0tI2VuZGlmLS0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgdUNoYXJ0cyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3UtY2hhcnRzL3UtY2hhcnRzLmpzJztcclxuXHR2YXIgX3NlbGY7XHJcblx0dmFyIGNhbnZhc09iaiA9IHt9O1xyXG5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNXaWR0aDogJycsXHJcblx0XHRcdFx0Y0hlaWdodDogJycsXHJcblx0XHRcdFx0Y1dpZHRoMjogJycsIC8v5qiq5bGP5Zu+6KGoXHJcblx0XHRcdFx0Y0hlaWdodDI6ICcnLCAvL+aoquWxj+WbvuihqFxyXG5cdFx0XHRcdGNXaWR0aDM6ICcnLCAvL+WchuW8p+i/m+W6puWbvlxyXG5cdFx0XHRcdGNIZWlnaHQzOiAnJywgLy/lnIblvKfov5vluqblm75cclxuXHRcdFx0XHRhcmNiYXJXaWR0aDogJycsIC8v5ZyG5byn6L+b5bqm5Zu+77yM6L+b5bqm5p2h5a695bqmLOatpOiuvue9ruWPr+S9v+WQhOerr+WuveW6puS4gOiHtFxyXG5cdFx0XHRcdGdhdWdlV2lkdGg6ICcnLCAvL+S7quihqOebmOWuveW6pizmraTorr7nva7lj6/kvb/lkITnq6/lrr3luqbkuIDoh7RcclxuXHRcdFx0XHR0aXBzOiAnJyxcclxuXHRcdFx0XHRwaXhlbFJhdGlvOiAxLFxyXG5cdFx0XHRcdHNlcnZlckRhdGE6ICcnLFxyXG5cdFx0XHRcdGl0ZW1Db3VudDogMzAsIC8veOi9tOWNleWxj+aVsOaNruWvhuW6plxyXG5cdFx0XHRcdHNsaWRlck1heDogNTBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0X3NlbGYgPSB0aGlzO1xyXG5cdFx0XHQvLyNpZmRlZiBNUC1BTElQQVlcclxuXHRcdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5waXhlbFJhdGlvID4gMSkge1xyXG5cdFx0XHRcdFx0XHQvL+ato+W4uOi/memHjOe7mTLlsLHooYzvvIzlpoLmnpxwaXhlbFJhdGlvPTPmgKfog73kvJrpmY3kvY7kuIDngrlcclxuXHRcdFx0XHRcdFx0Ly9fc2VsZi5waXhlbFJhdGlvID1yZXMucGl4ZWxSYXRpbztcclxuXHRcdFx0XHRcdFx0X3NlbGYucGl4ZWxSYXRpbyA9IDI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8jZW5kaWZcclxuXHRcdFx0dGhpcy5jV2lkdGggPSB1bmkudXB4MnB4KDc1MCk7XHJcblx0XHRcdHRoaXMuY0hlaWdodCA9IHVuaS51cHgycHgoNTAwKTtcclxuXHRcdFx0dGhpcy5jV2lkdGgyID0gdW5pLnVweDJweCg3MDApO1xyXG5cdFx0XHR0aGlzLmNIZWlnaHQyID0gdW5pLnVweDJweCgxMTAwKTtcclxuXHRcdFx0dGhpcy5jV2lkdGgzID0gdW5pLnVweDJweCgyNTApO1xyXG5cdFx0XHR0aGlzLmNIZWlnaHQzID0gdW5pLnVweDJweCgyNTApO1xyXG5cdFx0XHR0aGlzLmFyY2JhcldpZHRoID0gdW5pLnVweDJweCgyNCk7XHJcblx0XHRcdHRoaXMuZ2F1Z2VXaWR0aCA9IHVuaS51cHgycHgoMzApO1xyXG5cclxuXHRcdFx0Ly90aGlzLmZpbGxEYXRhKERhdGEpO1xyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdHRoaXMuZ2V0U2VydmVyRGF0YSgpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0U2VydmVyRGF0YSgpIHtcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IFwi5q2j5Zyo5Yqg6L295pWw5o2uLi4uXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHRcdHVybDogJ2h0dHBzOi8vdW5pZGVtby5kY2xvdWQubmV0LmNuL2hlbGxvLXVuaWFwcC11Y2hhcnRzLWRhdGEuanNvbicsXHJcblx0XHRcdFx0XHRkYXRhOiB7fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRfc2VsZi5maWxsRGF0YShyZXMuZGF0YSk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRfc2VsZi50aXBzID0gXCLnvZHnu5zplJnor6/vvIzlsI/nqIvluo/nq6/or7fmo4Dmn6XlkIjms5Xln5/lkI1cIjtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZSgpIHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZpbGxEYXRhKGRhdGEpIHtcclxuXHRcdFx0XHR0aGlzLnNlcnZlckRhdGEgPSBkYXRhO1xyXG5cdFx0XHRcdHRoaXMudGlwcyA9IGRhdGEudGlwcztcclxuXHRcdFx0XHR0aGlzLnNsaWRlck1heCA9IGRhdGEuQ2FuZGxlLmNhdGVnb3JpZXMubGVuZ3RoO1xyXG5cdFx0XHRcdGxldCBDb2x1bW4gPSB7XHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBbXSxcclxuXHRcdFx0XHRcdHNlcmllczogW11cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGxldCBDb2x1bW5NZXRlciA9IHtcclxuXHRcdFx0XHRcdGNhdGVnb3JpZXM6IFtdLFxyXG5cdFx0XHRcdFx0c2VyaWVzOiBbXVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0bGV0IExpbmVBID0ge1xyXG5cdFx0XHRcdFx0Y2F0ZWdvcmllczogW10sXHJcblx0XHRcdFx0XHRzZXJpZXM6IFtdXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRsZXQgTGluZUIgPSB7XHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBbXSxcclxuXHRcdFx0XHRcdHNlcmllczogW11cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGxldCBBcmVhID0ge1xyXG5cdFx0XHRcdFx0Y2F0ZWdvcmllczogW10sXHJcblx0XHRcdFx0XHRzZXJpZXM6IFtdXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRsZXQgUGllID0ge1xyXG5cdFx0XHRcdFx0c2VyaWVzOiBbXVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0bGV0IFJpbmcgPSB7XHJcblx0XHRcdFx0XHRzZXJpZXM6IFtdXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRsZXQgRnVubmVsID0ge1xyXG5cdFx0XHRcdFx0c2VyaWVzOiBbXVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0bGV0IFJhZGFyID0ge1xyXG5cdFx0XHRcdFx0Y2F0ZWdvcmllczogW10sXHJcblx0XHRcdFx0XHRzZXJpZXM6IFtdXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRsZXQgQXJjYmFyMSA9IHtcclxuXHRcdFx0XHRcdHNlcmllczogW11cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGxldCBBcmNiYXIyID0ge1xyXG5cdFx0XHRcdFx0c2VyaWVzOiBbXVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0bGV0IEFyY2JhcjMgPSB7XHJcblx0XHRcdFx0XHRzZXJpZXM6IFtdXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRsZXQgR2F1Z2UgPSB7XHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBbXSxcclxuXHRcdFx0XHRcdHNlcmllczogW11cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGxldCBDYW5kbGUgPSB7XHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBbXSxcclxuXHRcdFx0XHRcdHNlcmllczogW11cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGxldCBNaXggPSB7XHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBbXSxcclxuXHRcdFx0XHRcdHNlcmllczogW11cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdC8v6L+Z6YeM5oiR5ZCO5Y+w6L+U5Zue55qE5piv5pWw57uE77yM5omA5Lul55So562J5LqO77yM5aaC5p6c5oKo5ZCO5Y+w6L+U5Zue55qE5piv5Y2V5p2h5pWw5o2u77yM6ZyA6KaBcHVzaOi/m+WOu1xyXG5cdFx0XHRcdENvbHVtbi5jYXRlZ29yaWVzID0gZGF0YS5Db2x1bW4uY2F0ZWdvcmllcztcclxuXHRcdFx0XHQvL+i/memHjOeahHNlcmllc+aVsOaNruaYr+WQjuWPsOWBmuWlveeahO+8jOWmguaenOaCqOeahOaVsOaNruayoeacieWSjOWJjemdouaIkeazqOmHiuaOieeahOagvOW8j+S4gOagt++8jOivt+iHquihjOaLvOaOpeaVsOaNrlxyXG5cdFx0XHRcdENvbHVtbi5zZXJpZXMgPSBkYXRhLkNvbHVtbi5zZXJpZXM7XHJcblx0XHRcdFx0Q29sdW1uTWV0ZXIuY2F0ZWdvcmllcyA9IGRhdGEuQ29sdW1uTWV0ZXIuY2F0ZWdvcmllcztcclxuXHRcdFx0XHQvL+i/memHjOeahHNlcmllc+aVsOaNrizlpoLmnpzkuLpNZXRlcu+8jHNlcmllc1swXeWumuS5ieS4uuWkluWxguaVsOaNru+8jHNlcmllc1sxXeWumuS5ieS4uuWGheWxguaVsOaNrlxyXG5cdFx0XHRcdENvbHVtbk1ldGVyLnNlcmllcyA9IGRhdGEuQ29sdW1uTWV0ZXIuc2VyaWVzO1xyXG5cdFx0XHRcdExpbmVBLmNhdGVnb3JpZXMgPSBkYXRhLkxpbmVBLmNhdGVnb3JpZXM7XHJcblx0XHRcdFx0TGluZUEuc2VyaWVzID0gZGF0YS5MaW5lQS5zZXJpZXM7XHJcblx0XHRcdFx0TGluZUIuY2F0ZWdvcmllcyA9IGRhdGEuTGluZUIuY2F0ZWdvcmllcztcclxuXHRcdFx0XHRMaW5lQi5zZXJpZXMgPSBkYXRhLkxpbmVCLnNlcmllcztcclxuXHRcdFx0XHRBcmVhLmNhdGVnb3JpZXMgPSBkYXRhLkFyZWEuY2F0ZWdvcmllcztcclxuXHRcdFx0XHRBcmVhLnNlcmllcyA9IGRhdGEuQXJlYS5zZXJpZXM7XHJcblx0XHRcdFx0UGllLnNlcmllcyA9IGRhdGEuUGllLnNlcmllcztcclxuXHRcdFx0XHRSaW5nLnNlcmllcyA9IGRhdGEuUmluZy5zZXJpZXM7XHJcblx0XHRcdFx0RnVubmVsLnNlcmllcyA9IGRhdGEuUGllLnNlcmllcztcclxuXHRcdFx0XHQvL+iHquWumuS5ieaWh+ahiOekuuS+i++8jOmcgOiuvue9rmZvcm1hdOWtl+autVxyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgUmluZy5zZXJpZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFJpbmcuc2VyaWVzW2ldLmZvcm1hdCA9ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIFJpbmcuc2VyaWVzW2ldLm5hbWUgKyBSaW5nLnNlcmllc1tpXS5kYXRhXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRSYWRhci5jYXRlZ29yaWVzID0gZGF0YS5SYWRhci5jYXRlZ29yaWVzO1xyXG5cdFx0XHRcdFJhZGFyLnNlcmllcyA9IGRhdGEuUmFkYXIuc2VyaWVzO1xyXG5cdFx0XHRcdEFyY2JhcjEuc2VyaWVzID0gZGF0YS5BcmNiYXIxLnNlcmllcztcclxuXHRcdFx0XHRBcmNiYXIyLnNlcmllcyA9IGRhdGEuQXJjYmFyMi5zZXJpZXM7XHJcblx0XHRcdFx0QXJjYmFyMy5zZXJpZXMgPSBkYXRhLkFyY2JhcjMuc2VyaWVzO1xyXG5cdFx0XHRcdEdhdWdlLmNhdGVnb3JpZXMgPSBkYXRhLkdhdWdlLmNhdGVnb3JpZXM7XHJcblx0XHRcdFx0R2F1Z2Uuc2VyaWVzID0gZGF0YS5HYXVnZS5zZXJpZXM7XHJcblx0XHRcdFx0Q2FuZGxlLmNhdGVnb3JpZXMgPSBkYXRhLkNhbmRsZS5jYXRlZ29yaWVzO1xyXG5cdFx0XHRcdENhbmRsZS5zZXJpZXMgPSBkYXRhLkNhbmRsZS5zZXJpZXM7XHJcblx0XHRcdFx0TWl4LmNhdGVnb3JpZXMgPSBkYXRhLk1peC5jYXRlZ29yaWVzO1xyXG5cdFx0XHRcdE1peC5zZXJpZXMgPSBkYXRhLk1peC5zZXJpZXM7XHJcblx0XHRcdFx0dGhpcy5zaG93Q29sdW1uKFwiY2FudmFzQ29sdW1uXCIsIENvbHVtbik7XHJcblx0XHRcdFx0dGhpcy5zaG93Q29sdW1uTWV0ZXIoXCJjYW52YXNDb2x1bW5NZXRlclwiLCBDb2x1bW5NZXRlcik7XHJcblx0XHRcdFx0dGhpcy5zaG93TGluZUEoXCJjYW52YXNMaW5lQVwiLCBMaW5lQSk7XHJcblx0XHRcdFx0dGhpcy5zaG93TGluZUIoXCJjYW52YXNMaW5lQlwiLCBMaW5lQik7XHJcblx0XHRcdFx0dGhpcy5zaG93QXJlYShcImNhbnZhc0FyZWFcIiwgQXJlYSk7XHJcblx0XHRcdFx0dGhpcy5zaG93UGllKFwiY2FudmFzUGllXCIsIFBpZSk7XHJcblx0XHRcdFx0dGhpcy5zaG93UmluZyhcImNhbnZhc1JpbmdcIiwgUmluZyk7XHJcblx0XHRcdFx0dGhpcy5zaG93RnVubmVsKFwiY2FudmFzRnVubmVsXCIsIEZ1bm5lbCk7XHJcblx0XHRcdFx0dGhpcy5zaG93UmFkYXIoXCJjYW52YXNSYWRhclwiLCBSYWRhcik7XHJcblx0XHRcdFx0dGhpcy5zaG93QXJjYmFyKFwiY2FudmFzQXJjYmFyMVwiLCBBcmNiYXIxKTtcclxuXHRcdFx0XHR0aGlzLnNob3dBcmNiYXIyKFwiY2FudmFzQXJjYmFyMlwiLCBBcmNiYXIyKTtcclxuXHRcdFx0XHR0aGlzLnNob3dBcmNiYXIzKFwiY2FudmFzQXJjYmFyM1wiLCBBcmNiYXIzKTtcclxuXHRcdFx0XHR0aGlzLnNob3dHYXVnZShcImNhbnZhc0dhdWdlXCIsIEdhdWdlKTtcclxuXHRcdFx0XHR0aGlzLnNob3dDYW5kbGUoXCJjYW52YXNDYW5kbGVcIiwgQ2FuZGxlKTtcclxuXHRcdFx0XHR0aGlzLnNob3dNaXgoXCJjYW52YXNNaXhcIiwgTWl4KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0NvbHVtbihjYW52YXNJZCwgY2hhcnREYXRhKSB7XHJcblx0XHRcdFx0Y2FudmFzT2JqW2NhbnZhc0lkXSA9IG5ldyB1Q2hhcnRzKHtcclxuXHRcdFx0XHRcdCR0aGlzOiBfc2VsZixcclxuXHRcdFx0XHRcdGNhbnZhc0lkOiBjYW52YXNJZCxcclxuXHRcdFx0XHRcdHR5cGU6ICdjb2x1bW4nLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogWzE1LCAxNSwgMCwgMTVdLFxyXG5cdFx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRydWUsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDUsXHJcblx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6IDExLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Zm9udFNpemU6IDExLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdFx0cGl4ZWxSYXRpbzogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBjaGFydERhdGEuY2F0ZWdvcmllcyxcclxuXHRcdFx0XHRcdHNlcmllczogY2hhcnREYXRhLnNlcmllcyxcclxuXHRcdFx0XHRcdHhBeGlzOiB7XHJcblx0XHRcdFx0XHRcdGRpc2FibGVHcmlkOiB0cnVlLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHlBeGlzOiB7XHJcblx0XHRcdFx0XHRcdGZvcm1hdDogKHZhbCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWwudG9GaXhlZCgwKSArICflhYMnXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkYXRhTGFiZWw6IHRydWUsXHJcblx0XHRcdFx0XHR3aWR0aDogX3NlbGYuY1dpZHRoICogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGhlaWdodDogX3NlbGYuY0hlaWdodCAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRleHRyYToge1xyXG5cdFx0XHRcdFx0XHRjb2x1bW46IHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnZ3JvdXAnLFxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBfc2VsZi5jV2lkdGggKiBfc2VsZi5waXhlbFJhdGlvICogMC40NSAvIGNoYXJ0RGF0YS5jYXRlZ29yaWVzLmxlbmd0aFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dDb2x1bW5NZXRlcihjYW52YXNJZCwgY2hhcnREYXRhKSB7XHJcblx0XHRcdFx0Y2FudmFzT2JqW2NhbnZhc0lkXSA9IG5ldyB1Q2hhcnRzKHtcclxuXHRcdFx0XHRcdCR0aGlzOiBfc2VsZixcclxuXHRcdFx0XHRcdGNhbnZhc0lkOiBjYW52YXNJZCxcclxuXHRcdFx0XHRcdHR5cGU6ICdjb2x1bW4nLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogWzE1LCAxNSwgMCwgMTVdLFxyXG5cdFx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRydWUsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDUsXHJcblx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6IDExLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Zm9udFNpemU6IDExLFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdFx0cGl4ZWxSYXRpbzogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBjaGFydERhdGEuY2F0ZWdvcmllcyxcclxuXHRcdFx0XHRcdHNlcmllczogY2hhcnREYXRhLnNlcmllcyxcclxuXHRcdFx0XHRcdHhBeGlzOiB7XHJcblx0XHRcdFx0XHRcdGRpc2FibGVHcmlkOiB0cnVlLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHlBeGlzOiB7XHJcblx0XHRcdFx0XHRcdC8vZGlzYWJsZWQ6dHJ1ZVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRhdGFMYWJlbDogdHJ1ZSxcclxuXHRcdFx0XHRcdHdpZHRoOiBfc2VsZi5jV2lkdGggKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBfc2VsZi5jSGVpZ2h0ICogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGV4dHJhOiB7XHJcblx0XHRcdFx0XHRcdGNvbHVtbjoge1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdtZXRlcicsXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IF9zZWxmLmNXaWR0aCAqIF9zZWxmLnBpeGVsUmF0aW8gKiAwLjQ1IC8gY2hhcnREYXRhLmNhdGVnb3JpZXMubGVuZ3RoLFxyXG5cdFx0XHRcdFx0XHRcdG1ldGVyOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRib3JkZXI6IDQsXHJcblx0XHRcdFx0XHRcdFx0XHRmaWxsQ29sb3I6ICcjRTVGREMzJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0xpbmVBKGNhbnZhc0lkLCBjaGFydERhdGEpIHtcclxuXHRcdFx0XHRjYW52YXNPYmpbY2FudmFzSWRdID0gbmV3IHVDaGFydHMoe1xyXG5cdFx0XHRcdFx0JHRoaXM6IF9zZWxmLFxyXG5cdFx0XHRcdFx0Y2FudmFzSWQ6IGNhbnZhc0lkLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2xpbmUnLFxyXG5cdFx0XHRcdFx0Zm9udFNpemU6IDExLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogWzE1LCAxNSwgMCwgMTVdLFxyXG5cdFx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRydWUsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDUsXHJcblx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6IDExLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDUsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZGF0YUxhYmVsOiBmYWxzZSxcclxuXHRcdFx0XHRcdGRhdGFQb2ludFNoYXBlOiBmYWxzZSxcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdHBpeGVsUmF0aW86IF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBjaGFydERhdGEuY2F0ZWdvcmllcyxcclxuXHRcdFx0XHRcdHNlcmllczogY2hhcnREYXRhLnNlcmllcyxcclxuXHRcdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXHJcblx0XHRcdFx0XHRlbmFibGVTY3JvbGw6IHRydWUsIC8v5byA5ZCv5Zu+6KGo5ouW5ou95Yqf6IO9XHJcblx0XHRcdFx0XHR4QXhpczoge1xyXG5cdFx0XHRcdFx0XHRkaXNhYmxlR3JpZDogZmFsc2UsXHJcblx0XHRcdFx0XHRcdHR5cGU6ICdncmlkJyxcclxuXHRcdFx0XHRcdFx0Z3JpZFR5cGU6ICdkYXNoJyxcclxuXHRcdFx0XHRcdFx0aXRlbUNvdW50OiA0LFxyXG5cdFx0XHRcdFx0XHRzY3JvbGxTaG93OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRzY3JvbGxBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHQvL3Njcm9sbEJhY2tncm91bmRDb2xvcjonI0Y3RjdGRicsLy/lj6/kuI3loavlhpnvvIzphY3lkIhlbmFibGVTY3JvbGzlm77ooajmi5bmi73lip/og73kvb/nlKjvvIxY6L205rua5Yqo5p2h6IOM5pmv6aKc6ImyLOm7mOiupOS4uiAjRUZFQkVGXHJcblx0XHRcdFx0XHRcdC8vc2Nyb2xsQ29sb3I6JyNERUU3RjcnLC8v5Y+v5LiN5aGr5YaZ77yM6YWN5ZCIZW5hYmxlU2Nyb2xs5Zu+6KGo5ouW5ou95Yqf6IO95L2/55So77yMWOi9tOa7muWKqOadoeminOiJsizpu5jorqTkuLogI0E2QTZBNlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHlBeGlzOiB7XHJcblx0XHRcdFx0XHRcdC8vZGlzYWJsZWQ6dHJ1ZVxyXG5cdFx0XHRcdFx0XHRncmlkVHlwZTogJ2Rhc2gnLFxyXG5cdFx0XHRcdFx0XHRzcGxpdE51bWJlcjogOCxcclxuXHRcdFx0XHRcdFx0bWluOiAxMCxcclxuXHRcdFx0XHRcdFx0bWF4OiAxODAsXHJcblx0XHRcdFx0XHRcdGZvcm1hdDogKHZhbCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWwudG9GaXhlZCgwKSArICflhYMnXHJcblx0XHRcdFx0XHRcdH0gLy/lpoLkuI3lhpnmraTmlrnms5XvvIxZ6L205Yi75bqm6buY6K6k5L+d55WZ5Lik5L2N5bCP5pWwXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0d2lkdGg6IF9zZWxmLmNXaWR0aCAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRoZWlnaHQ6IF9zZWxmLmNIZWlnaHQgKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0ZGF0YUxhYmVsOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZGF0YVBvaW50U2hhcGU6IHRydWUsXHJcblx0XHRcdFx0XHRleHRyYToge1xyXG5cdFx0XHRcdFx0XHRsaW5lU3R5bGU6ICdzdHJhaWdodCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93TGluZUIoY2FudmFzSWQsIGNoYXJ0RGF0YSkge1xyXG5cdFx0XHRcdGNhbnZhc09ialtjYW52YXNJZF0gPSBuZXcgdUNoYXJ0cyh7XHJcblx0XHRcdFx0XHQkdGhpczogX3NlbGYsXHJcblx0XHRcdFx0XHRjYW52YXNJZDogY2FudmFzSWQsXHJcblx0XHRcdFx0XHR0eXBlOiAnbGluZScsXHJcblx0XHRcdFx0XHRmb250U2l6ZTogMTEsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiBbMTUsIDE1LCAwLCAxNV0sXHJcblx0XHRcdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRcdFx0c2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogNSxcclxuXHRcdFx0XHRcdFx0bGluZUhlaWdodDogMTEsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogNSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0XHRwaXhlbFJhdGlvOiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0cm90YXRlOiB0cnVlLCAvL+W8gOWQr+WbvuihqOaoquWxj1xyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QLUFMSVBBWVxyXG5cdFx0XHRcdFx0cm90YXRlTG9jazogdHJ1ZSwgLy/nmb7luqblj4rmlK/ku5jlrp3pnIDopoHplIHlrprml4vovaxcclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Y2F0ZWdvcmllczogY2hhcnREYXRhLmNhdGVnb3JpZXMsXHJcblx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxyXG5cdFx0XHRcdFx0c2VyaWVzOiBjaGFydERhdGEuc2VyaWVzLFxyXG5cdFx0XHRcdFx0eEF4aXM6IHtcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZUdyaWQ6IHRydWUsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eUF4aXM6IHtcclxuXHRcdFx0XHRcdFx0Ly9kaXNhYmxlZDp0cnVlXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0d2lkdGg6IF9zZWxmLmNXaWR0aDIgKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBfc2VsZi5jSGVpZ2h0MiAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRkYXRhTGFiZWw6IHRydWUsXHJcblx0XHRcdFx0XHRkYXRhUG9pbnRTaGFwZTogdHJ1ZSxcclxuXHRcdFx0XHRcdGV4dHJhOiB7XHJcblx0XHRcdFx0XHRcdGxpbmVTdHlsZTogJ2N1cnZlJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0FyZWEoY2FudmFzSWQsIGNoYXJ0RGF0YSkge1xyXG5cdFx0XHRcdGNhbnZhc09ialtjYW52YXNJZF0gPSBuZXcgdUNoYXJ0cyh7XHJcblx0XHRcdFx0XHQkdGhpczogX3NlbGYsXHJcblx0XHRcdFx0XHRjYW52YXNJZDogY2FudmFzSWQsXHJcblx0XHRcdFx0XHR0eXBlOiAnYXJlYScsXHJcblx0XHRcdFx0XHRmb250U2l6ZTogMTEsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiBbMCwgMTUsIDEwLCAxNV0sXHJcblx0XHRcdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRcdFx0c2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246ICd0b3AnLFxyXG5cdFx0XHRcdFx0XHRmbG9hdDogJ2NlbnRlcicsXHJcblx0XHRcdFx0XHRcdGl0ZW1HYXA6IDMwLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1LFxyXG5cdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAxOCxcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGRhdGFMYWJlbDogZmFsc2UsXHJcblx0XHRcdFx0XHRkYXRhUG9pbnRTaGFwZTogdHJ1ZSxcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdHBpeGVsUmF0aW86IF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBjaGFydERhdGEuY2F0ZWdvcmllcyxcclxuXHRcdFx0XHRcdHNlcmllczogY2hhcnREYXRhLnNlcmllcyxcclxuXHRcdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXHJcblx0XHRcdFx0XHR4QXhpczoge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAnZ3JpZCcsXHJcblx0XHRcdFx0XHRcdGdyaWRDb2xvcjogJyNDQ0NDQ0MnLFxyXG5cdFx0XHRcdFx0XHRncmlkVHlwZTogJ2Rhc2gnLFxyXG5cdFx0XHRcdFx0XHRkYXNoTGVuZ3RoOiA4LFxyXG5cdFx0XHRcdFx0XHRib3VuZGFyeUdhcDogJ2p1c3RpZnknIC8v5Lik56uv5LiN55WZ55m96YWN572uXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eUF4aXM6IHtcclxuXHRcdFx0XHRcdFx0Z3JpZFR5cGU6ICdkYXNoJyxcclxuXHRcdFx0XHRcdFx0Z3JpZENvbG9yOiAnI0NDQ0NDQycsXHJcblx0XHRcdFx0XHRcdGRhc2hMZW5ndGg6IDgsXHJcblx0XHRcdFx0XHRcdHNwbGl0TnVtYmVyOiA1LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHdpZHRoOiBfc2VsZi5jV2lkdGggKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBfc2VsZi5jSGVpZ2h0ICogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGV4dHJhOiB7XHJcblx0XHRcdFx0XHRcdGFyZWE6IHtcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnY3VydmUnLFxyXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAuMixcclxuXHRcdFx0XHRcdFx0XHRhZGRMaW5lOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAyXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd1BpZShjYW52YXNJZCwgY2hhcnREYXRhKSB7XHJcblx0XHRcdFx0Y2FudmFzT2JqW2NhbnZhc0lkXSA9IG5ldyB1Q2hhcnRzKHtcclxuXHRcdFx0XHRcdCR0aGlzOiBfc2VsZixcclxuXHRcdFx0XHRcdGNhbnZhc0lkOiBjYW52YXNJZCxcclxuXHRcdFx0XHRcdHR5cGU6ICdwaWUnLFxyXG5cdFx0XHRcdFx0Zm9udFNpemU6IDExLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogWzE1LCAxNSwgMCwgMTVdLFxyXG5cdFx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRydWUsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDUsXHJcblx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6IDExLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDAsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdFx0cGl4ZWxSYXRpbzogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdHNlcmllczogY2hhcnREYXRhLnNlcmllcyxcclxuXHRcdFx0XHRcdGFuaW1hdGlvbjogZmFsc2UsXHJcblx0XHRcdFx0XHR3aWR0aDogX3NlbGYuY1dpZHRoICogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGhlaWdodDogX3NlbGYuY0hlaWdodCAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRkYXRhTGFiZWw6IHRydWUsXHJcblx0XHRcdFx0XHRleHRyYToge1xyXG5cdFx0XHRcdFx0XHRwaWU6IHtcclxuXHRcdFx0XHRcdFx0XHRsYWJsZVdpZHRoOiAxNVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93UmluZyhjYW52YXNJZCwgY2hhcnREYXRhKSB7XHJcblx0XHRcdFx0Y2FudmFzT2JqW2NhbnZhc0lkXSA9IG5ldyB1Q2hhcnRzKHtcclxuXHRcdFx0XHRcdCR0aGlzOiBfc2VsZixcclxuXHRcdFx0XHRcdGNhbnZhc0lkOiBjYW52YXNJZCxcclxuXHRcdFx0XHRcdHR5cGU6ICdyaW5nJyxcclxuXHRcdFx0XHRcdGZvbnRTaXplOiAxMSxcclxuXHRcdFx0XHRcdHBhZGRpbmc6IFs1LCA1LCA1LCA1XSxcclxuXHRcdFx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdFx0XHRzaG93OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0ZmxvYXQ6ICdjZW50ZXInLFxyXG5cdFx0XHRcdFx0XHRpdGVtR2FwOiAxMCxcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogNSxcclxuXHRcdFx0XHRcdFx0bGluZUhlaWdodDogMjYsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogNSxcclxuXHRcdFx0XHRcdFx0Ly9iYWNrZ3JvdW5kQ29sb3I6J3JnYmEoNDEsMTk4LDkwLDAuMiknLFxyXG5cdFx0XHRcdFx0XHQvL2JvcmRlckNvbG9yIDoncmdiYSg0MSwxOTgsOTAsMC41KScsXHJcblx0XHRcdFx0XHRcdGJvcmRlcldpZHRoOiAxXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0dGl0bGU6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJzcwJScsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzdjYjVlYycsXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplOiAyNSAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VidGl0bGU6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+aUtuebiueOhycsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzY2NjY2NicsXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplOiAxNSAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXh0cmE6IHtcclxuXHRcdFx0XHRcdFx0cGllOiB7XHJcblx0XHRcdFx0XHRcdFx0bGFibGVXaWR0aDogMTUsXHJcblx0XHRcdFx0XHRcdFx0cmluZ1dpZHRoOiA0MCAqIF9zZWxmLnBpeGVsUmF0aW8sIC8v5ZyG546v55qE5a695bqmXHJcblx0XHRcdFx0XHRcdFx0b2Zmc2V0QW5nbGU6IDAgLy/lnIbnjq/nmoTop5LluqZcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdHBpeGVsUmF0aW86IF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRzZXJpZXM6IGNoYXJ0RGF0YS5zZXJpZXMsXHJcblx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxyXG5cdFx0XHRcdFx0d2lkdGg6IF9zZWxmLmNXaWR0aCAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRoZWlnaHQ6IF9zZWxmLmNIZWlnaHQgKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0ZGlzYWJsZVBpZVN0cm9rZTogdHJ1ZSxcclxuXHRcdFx0XHRcdGRhdGFMYWJlbDogdHJ1ZSxcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dGdW5uZWwoY2FudmFzSWQsIGNoYXJ0RGF0YSkge1xyXG5cdFx0XHRcdGNhbnZhc09ialtjYW52YXNJZF0gPSBuZXcgdUNoYXJ0cyh7XHJcblx0XHRcdFx0XHQkdGhpczogX3NlbGYsXHJcblx0XHRcdFx0XHRjYW52YXNJZDogY2FudmFzSWQsXHJcblx0XHRcdFx0XHR0eXBlOiAnZnVubmVsJyxcclxuXHRcdFx0XHRcdGZvbnRTaXplOiAxMSxcclxuXHRcdFx0XHRcdHBhZGRpbmc6IFsxNSwgMTUsIDAsIDE1XSxcclxuXHRcdFx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdFx0XHRzaG93OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1LFxyXG5cdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAxMSxcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdHBpeGVsUmF0aW86IF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRzZXJpZXM6IGNoYXJ0RGF0YS5zZXJpZXMsXHJcblx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxyXG5cdFx0XHRcdFx0d2lkdGg6IF9zZWxmLmNXaWR0aCAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRoZWlnaHQ6IF9zZWxmLmNIZWlnaHQgKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0ZGF0YUxhYmVsOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZXh0cmE6IHtcclxuXHRcdFx0XHRcdFx0ZnVubmVsOiB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcldpZHRoOiAyLFxyXG5cdFx0XHRcdFx0XHRcdGJvcmRlckNvbG9yOiAnI0ZGRkZGRidcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd1JhZGFyKGNhbnZhc0lkLCBjaGFydERhdGEpIHtcclxuXHRcdFx0XHRjYW52YXNPYmpbY2FudmFzSWRdID0gbmV3IHVDaGFydHMoe1xyXG5cdFx0XHRcdFx0JHRoaXM6IF9zZWxmLFxyXG5cdFx0XHRcdFx0Y2FudmFzSWQ6IGNhbnZhc0lkLFxyXG5cdFx0XHRcdFx0dHlwZTogJ3JhZGFyJyxcclxuXHRcdFx0XHRcdGZvbnRTaXplOiAxMSxcclxuXHRcdFx0XHRcdHBhZGRpbmc6IFsxNSwgMTUsIDAsIDE1XSxcclxuXHRcdFx0XHRcdGxlZ2VuZDoge1xyXG5cdFx0XHRcdFx0XHRzaG93OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA1LFxyXG5cdFx0XHRcdFx0XHRsaW5lSGVpZ2h0OiAxMSxcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAwLFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdHBpeGVsUmF0aW86IF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxyXG5cdFx0XHRcdFx0ZGF0YUxhYmVsOiB0cnVlLFxyXG5cdFx0XHRcdFx0Y2F0ZWdvcmllczogY2hhcnREYXRhLmNhdGVnb3JpZXMsXHJcblx0XHRcdFx0XHRzZXJpZXM6IGNoYXJ0RGF0YS5zZXJpZXMsXHJcblx0XHRcdFx0XHR3aWR0aDogX3NlbGYuY1dpZHRoICogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGhlaWdodDogX3NlbGYuY0hlaWdodCAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRleHRyYToge1xyXG5cdFx0XHRcdFx0XHRyYWRhcjoge1xyXG5cdFx0XHRcdFx0XHRcdG1heDogMjAwIC8v6Zu36L6+5pWw5YC855qE5pyA5aSn5YC8XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0FyY2JhcihjYW52YXNJZCwgY2hhcnREYXRhKSB7XHJcblx0XHRcdFx0bmV3IHVDaGFydHMoe1xyXG5cdFx0XHRcdFx0JHRoaXM6IF9zZWxmLFxyXG5cdFx0XHRcdFx0Y2FudmFzSWQ6IGNhbnZhc0lkLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2FyY2JhcicsXHJcblx0XHRcdFx0XHRmb250U2l6ZTogMTEsXHJcblx0XHRcdFx0XHR0aXRsZToge1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBNYXRoLnJvdW5kKGNoYXJ0RGF0YS5zZXJpZXNbMF0uZGF0YSAqIDEwMCkgKyAnJScsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiBjaGFydERhdGEuc2VyaWVzWzBdLmNvbG9yLFxyXG5cdFx0XHRcdFx0XHRmb250U2l6ZTogMjUgKiBfc2VsZi5waXhlbFJhdGlvXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VidGl0bGU6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogY2hhcnREYXRhLnNlcmllc1swXS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJyM2NjY2NjYnLFxyXG5cdFx0XHRcdFx0XHRmb250U2l6ZTogMTUgKiBfc2VsZi5waXhlbFJhdGlvXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXh0cmE6IHtcclxuXHRcdFx0XHRcdFx0YXJjYmFyOiB7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2RlZmF1bHQnLFxyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiBfc2VsZi5hcmNiYXJXaWR0aCAqIF9zZWxmLnBpeGVsUmF0aW8sIC8v5ZyG5byn55qE5a695bqmXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0XHRwaXhlbFJhdGlvOiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0c2VyaWVzOiBjaGFydERhdGEuc2VyaWVzLFxyXG5cdFx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcclxuXHRcdFx0XHRcdHdpZHRoOiBfc2VsZi5jV2lkdGgzICogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGhlaWdodDogX3NlbGYuY0hlaWdodDMgKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0ZGF0YUxhYmVsOiB0cnVlLFxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0FyY2JhcjIoY2FudmFzSWQsIGNoYXJ0RGF0YSkge1xyXG5cdFx0XHRcdG5ldyB1Q2hhcnRzKHtcclxuXHRcdFx0XHRcdCR0aGlzOiBfc2VsZixcclxuXHRcdFx0XHRcdGNhbnZhc0lkOiBjYW52YXNJZCxcclxuXHRcdFx0XHRcdHR5cGU6ICdhcmNiYXInLFxyXG5cdFx0XHRcdFx0Zm9udFNpemU6IDExLFxyXG5cdFx0XHRcdFx0dGl0bGU6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogTWF0aC5yb3VuZChjaGFydERhdGEuc2VyaWVzWzBdLmRhdGEgKiAxMDApICsgJyUnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogY2hhcnREYXRhLnNlcmllc1swXS5jb2xvcixcclxuXHRcdFx0XHRcdFx0Zm9udFNpemU6IDI1ICogX3NlbGYucGl4ZWxSYXRpb1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1YnRpdGxlOiB7XHJcblx0XHRcdFx0XHRcdG5hbWU6IGNoYXJ0RGF0YS5zZXJpZXNbMF0ubmFtZSxcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICcjNjY2NjY2JyxcclxuXHRcdFx0XHRcdFx0Zm9udFNpemU6IDE1ICogX3NlbGYucGl4ZWxSYXRpb1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGV4dHJhOiB7XHJcblx0XHRcdFx0XHRcdGFyY2Jhcjoge1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdkZWZhdWx0JyxcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogX3NlbGYuYXJjYmFyV2lkdGggKiBfc2VsZi5waXhlbFJhdGlvLCAvL+WchuW8p+eahOWuveW6plxyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJyNmZmUzZTgnLFxyXG5cdFx0XHRcdFx0XHRcdHN0YXJ0QW5nbGU6IDEuMjUsXHJcblx0XHRcdFx0XHRcdFx0ZW5kQW5nbGU6IDAuNzVcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdHBpeGVsUmF0aW86IF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRzZXJpZXM6IGNoYXJ0RGF0YS5zZXJpZXMsXHJcblx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxyXG5cdFx0XHRcdFx0d2lkdGg6IF9zZWxmLmNXaWR0aDMgKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBfc2VsZi5jSGVpZ2h0MyAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRkYXRhTGFiZWw6IHRydWUsXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93QXJjYmFyMyhjYW52YXNJZCwgY2hhcnREYXRhKSB7XHJcblx0XHRcdFx0bmV3IHVDaGFydHMoe1xyXG5cdFx0XHRcdFx0JHRoaXM6IF9zZWxmLFxyXG5cdFx0XHRcdFx0Y2FudmFzSWQ6IGNhbnZhc0lkLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2FyY2JhcicsXHJcblx0XHRcdFx0XHRmb250U2l6ZTogMTEsXHJcblx0XHRcdFx0XHR0aXRsZToge1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBNYXRoLnJvdW5kKGNoYXJ0RGF0YS5zZXJpZXNbMF0uZGF0YSAqIDEwMCkgKyAnJScsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiBjaGFydERhdGEuc2VyaWVzWzBdLmNvbG9yLFxyXG5cdFx0XHRcdFx0XHRmb250U2l6ZTogMjUgKiBfc2VsZi5waXhlbFJhdGlvXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VidGl0bGU6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogY2hhcnREYXRhLnNlcmllc1swXS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJyM2NjY2NjYnLFxyXG5cdFx0XHRcdFx0XHRmb250U2l6ZTogMTUgKiBfc2VsZi5waXhlbFJhdGlvXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZXh0cmE6IHtcclxuXHRcdFx0XHRcdFx0YXJjYmFyOiB7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2NpcmNsZScsIC8v5pW05ZyG57G75Z6L6L+b5bqm5p2h5Zu+XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IF9zZWxmLmFyY2JhcldpZHRoICogX3NlbGYucGl4ZWxSYXRpbywgLy/lnIblvKfnmoTlrr3luqZcclxuXHRcdFx0XHRcdFx0XHRzdGFydEFuZ2xlOiAwLjUgLy/mlbTlnIbnsbvlnovlj6rpnIDphY3nva7otbflp4vop5LluqbljbPlj69cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdHBpeGVsUmF0aW86IF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRzZXJpZXM6IGNoYXJ0RGF0YS5zZXJpZXMsXHJcblx0XHRcdFx0XHRhbmltYXRpb246IGZhbHNlLFxyXG5cdFx0XHRcdFx0d2lkdGg6IF9zZWxmLmNXaWR0aDMgKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBfc2VsZi5jSGVpZ2h0MyAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRkYXRhTGFiZWw6IHRydWUsXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93R2F1Z2UoY2FudmFzSWQsIGNoYXJ0RGF0YSkge1xyXG5cdFx0XHRcdGNhbnZhc09ialtjYW52YXNJZF0gPSBuZXcgdUNoYXJ0cyh7XHJcblx0XHRcdFx0XHQkdGhpczogX3NlbGYsXHJcblx0XHRcdFx0XHRjYW52YXNJZDogY2FudmFzSWQsXHJcblx0XHRcdFx0XHR0eXBlOiAnZ2F1Z2UnLFxyXG5cdFx0XHRcdFx0Zm9udFNpemU6IDExLFxyXG5cdFx0XHRcdFx0dGl0bGU6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogTWF0aC5yb3VuZChjaGFydERhdGEuc2VyaWVzWzBdLmRhdGEgKiAxMDApICsgJyUnLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogY2hhcnREYXRhLmNhdGVnb3JpZXNbMV0uY29sb3IsXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplOiAyNSAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRcdG9mZnNldFk6IDUwICogX3NlbGYucGl4ZWxSYXRpbywgLy/mlrDlop7lj4LmlbDvvIzoh6rlrprkuYnosIPmlbRZ6L205paH5qGI6Led56a7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VidGl0bGU6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogY2hhcnREYXRhLnNlcmllc1swXS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRjb2xvcjogJyM2NjY2NjYnLFxyXG5cdFx0XHRcdFx0XHRmb250U2l6ZTogMTUgKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0XHRvZmZzZXRZOiAtNTAgKiBfc2VsZi5waXhlbFJhdGlvLCAvL+aWsOWinuWPguaVsO+8jOiHquWumuS5ieiwg+aVtFnovbTmlofmoYjot53nprtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRleHRyYToge1xyXG5cdFx0XHRcdFx0XHRnYXVnZToge1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdkZWZhdWx0JyxcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogX3NlbGYuZ2F1Z2VXaWR0aCAqIF9zZWxmLnBpeGVsUmF0aW8sIC8v5Luq6KGo55uY6IOM5pmv55qE5a695bqmXHJcblx0XHRcdFx0XHRcdFx0c3RhcnRBbmdsZTogMC43NSxcclxuXHRcdFx0XHRcdFx0XHRlbmRBbmdsZTogMC4yNSxcclxuXHRcdFx0XHRcdFx0XHRzdGFydE51bWJlcjogMCxcclxuXHRcdFx0XHRcdFx0XHRlbmROdW1iZXI6IDEwMCxcclxuXHRcdFx0XHRcdFx0XHRzcGxpdExpbmU6IHtcclxuXHRcdFx0XHRcdFx0XHRcdGZpeFJhZGl1czogMCxcclxuXHRcdFx0XHRcdFx0XHRcdHNwbGl0TnVtYmVyOiAxMCxcclxuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBfc2VsZi5nYXVnZVdpZHRoICogX3NlbGYucGl4ZWxSYXRpbywgLy/ku6rooajnm5jog4zmma/nmoTlrr3luqZcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0XHRcdFx0XHRjaGlsZE51bWJlcjogNSxcclxuXHRcdFx0XHRcdFx0XHRcdGNoaWxkV2lkdGg6IF9zZWxmLmdhdWdlV2lkdGggKiAwLjQgKiBfc2VsZi5waXhlbFJhdGlvLCAvL+S7quihqOebmOiDjOaZr+eahOWuveW6plxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0cG9pbnRlcjoge1xyXG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IF9zZWxmLmdhdWdlV2lkdGggKiAwLjggKiBfc2VsZi5waXhlbFJhdGlvLCAvL+aMh+mSiOWuveW6plxyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICdhdXRvJ1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdHBpeGVsUmF0aW86IF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBjaGFydERhdGEuY2F0ZWdvcmllcyxcclxuXHRcdFx0XHRcdHNlcmllczogY2hhcnREYXRhLnNlcmllcyxcclxuXHRcdFx0XHRcdGFuaW1hdGlvbjogdHJ1ZSxcclxuXHRcdFx0XHRcdHdpZHRoOiBfc2VsZi5jV2lkdGggKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBfc2VsZi5jSGVpZ2h0ICogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGRhdGFMYWJlbDogdHJ1ZSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2hhbmdlR2F1Z2VEYXRhKCkge1xyXG5cdFx0XHRcdGxldCBzZXJpZXMgPSBbe1xyXG5cdFx0XHRcdFx0bmFtZTogXCLlrozmiJDnjodcIixcclxuXHRcdFx0XHRcdGRhdGE6IE1hdGgucmFuZG9tKClcclxuXHRcdFx0XHR9XTsgLy/ov5nph4zmmK/pmo/mnLrmlbDmja7vvIznlJ/kuqfnjq/looPor7fku47mnI3liqHlmajojrflj5bvvIzms6jmhI9zZXJpZXPmlbDmja7nsbvlnovkuLrmlbDnu4RcclxuXHRcdFx0XHQvL+i/memHjOaIkeWAn+eUqOS5i+WJjeeahGNhdGVnb3JpZXPmlbDmja7vvIzliKTmlq3kuIDkuIvmlrDmlbDmja7nmoR0aXRsZS5jb2xvcu+8jOayoeacieWGmeatu+WcqOeoi+W6j+mHjO+8jOS7peS+v+S6juiHquWumuS5iVxyXG5cdFx0XHRcdGxldCBuZXdUaXRsZUNvbG9yO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgX3NlbGYuc2VydmVyRGF0YS5HYXVnZS5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoc2VyaWVzWzBdLmRhdGEgPD0gX3NlbGYuc2VydmVyRGF0YS5HYXVnZS5jYXRlZ29yaWVzW2ldLnZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdG5ld1RpdGxlQ29sb3IgPSBfc2VsZi5zZXJ2ZXJEYXRhLkdhdWdlLmNhdGVnb3JpZXNbaV0uY29sb3I7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Y2FudmFzT2JqWydjYW52YXNHYXVnZSddLnVwZGF0ZURhdGEoe1xyXG5cdFx0XHRcdFx0c2VyaWVzOiBzZXJpZXMsIC8v6L+Z6YeM57uZ5LqG5paw5pWw5YC8XHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBfc2VsZi5zZXJ2ZXJEYXRhLkdhdWdlLmNhdGVnb3JpZXMsXHJcblx0XHRcdFx0XHR0aXRsZToge1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBNYXRoLnJvdW5kKHNlcmllc1swXS5kYXRhICogMTAwKSArICclJyxcclxuXHRcdFx0XHRcdFx0Y29sb3I6IG5ld1RpdGxlQ29sb3IsXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplOiAyNSAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRcdG9mZnNldFk6IDUwICogX3NlbGYucGl4ZWxSYXRpbywgLy/mlrDlop7lj4LmlbDvvIzoh6rlrprkuYnosIPmlbRZ6L205paH5qGI6Led56a7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0c3VidGl0bGU6IHtcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+abtOaWsOaVsOaNricsXHJcblx0XHRcdFx0XHRcdGNvbG9yOiAnIzY2NjY2NicsXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplOiAxNSAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRcdG9mZnNldFk6IC01MCAqIF9zZWxmLnBpeGVsUmF0aW8sIC8v5paw5aKe5Y+C5pWw77yM6Ieq5a6a5LmJ6LCD5pW0Wei9tOaWh+ahiOi3neemu1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93Q2FuZGxlKGNhbnZhc0lkLCBjaGFydERhdGEpIHtcclxuXHRcdFx0XHRjYW52YXNPYmpbY2FudmFzSWRdID0gbmV3IHVDaGFydHMoe1xyXG5cdFx0XHRcdFx0JHRoaXM6IF9zZWxmLFxyXG5cdFx0XHRcdFx0Y2FudmFzSWQ6IGNhbnZhc0lkLFxyXG5cdFx0XHRcdFx0dHlwZTogJ2NhbmRsZScsXHJcblx0XHRcdFx0XHRmb250U2l6ZTogMTEsXHJcblx0XHRcdFx0XHRwYWRkaW5nOiBbMTUsIDE1LCAwLCAxNV0sXHJcblx0XHRcdFx0XHRsZWdlbmQ6IHtcclxuXHRcdFx0XHRcdFx0c2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogNSxcclxuXHRcdFx0XHRcdFx0bGluZUhlaWdodDogMTEsXHJcblx0XHRcdFx0XHRcdG1hcmdpbjogOCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcblx0XHRcdFx0XHRwaXhlbFJhdGlvOiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0ZW5hYmxlTWFya0xpbmU6IHRydWUsXHJcblx0XHRcdFx0XHQvKioq6ZyA6KaB5byA5ZCv5qCH6K6w57q/KioqL1xyXG5cdFx0XHRcdFx0Y2F0ZWdvcmllczogY2hhcnREYXRhLmNhdGVnb3JpZXMsXHJcblx0XHRcdFx0XHRzZXJpZXM6IGNoYXJ0RGF0YS5zZXJpZXMsXHJcblx0XHRcdFx0XHRhbmltYXRpb246IHRydWUsXHJcblx0XHRcdFx0XHRlbmFibGVTY3JvbGw6IHRydWUsIC8v5byA5ZCv5Zu+6KGo5ouW5ou95Yqf6IO9XHJcblx0XHRcdFx0XHR4QXhpczoge1xyXG5cdFx0XHRcdFx0XHRkaXNhYmxlR3JpZDogdHJ1ZSwgLy/kuI3nu5jliLZY6L20572R5qC857q/XHJcblx0XHRcdFx0XHRcdGxhYmVsQ291bnQ6IDQsIC8vWOi9tOaWh+ahiOaVsOmHj1xyXG5cdFx0XHRcdFx0XHQvL3R5cGU6J2dyaWQnLFxyXG5cdFx0XHRcdFx0XHQvL2dyaWRUeXBlOidkYXNoJyxcclxuXHRcdFx0XHRcdFx0aXRlbUNvdW50OiBfc2VsZi5pdGVtQ291bnQsIC8v5Y+v5LiN5aGr5YaZ77yM6YWN5ZCIZW5hYmxlU2Nyb2xs5Zu+6KGo5ouW5ou95Yqf6IO95L2/55So77yMeOi9tOWNleWxj+aYvuekuuaVsOaNrueahOaVsOmHj++8jOm7mOiupOS4ujXkuKpcclxuXHRcdFx0XHRcdFx0c2Nyb2xsU2hvdzogdHJ1ZSwgLy/mlrDlop7mmK/lkKbmmL7npLrmu5rliqjmnaHvvIzpu5jorqRmYWxzZVxyXG5cdFx0XHRcdFx0XHRzY3JvbGxBbGlnbjogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0Ly9zY3JvbGxCYWNrZ3JvdW5kQ29sb3I6JyNGN0Y3RkYnLC8v5Y+v5LiN5aGr5YaZ77yM6YWN5ZCIZW5hYmxlU2Nyb2xs5Zu+6KGo5ouW5ou95Yqf6IO95L2/55So77yMWOi9tOa7muWKqOadoeiDjOaZr+minOiJsizpu5jorqTkuLogI0VGRUJFRlxyXG5cdFx0XHRcdFx0XHQvL3Njcm9sbENvbG9yOicjREVFN0Y3JywvL+WPr+S4jeWhq+WGme+8jOmFjeWQiGVuYWJsZVNjcm9sbOWbvuihqOaLluaLveWKn+iDveS9v+eUqO+8jFjovbTmu5rliqjmnaHpopzoibIs6buY6K6k5Li6ICNBNkE2QTZcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR5QXhpczoge1xyXG5cdFx0XHRcdFx0XHQvL2Rpc2FibGVkOnRydWVcclxuXHRcdFx0XHRcdFx0Z3JpZFR5cGU6ICdkYXNoJyxcclxuXHRcdFx0XHRcdFx0c3BsaXROdW1iZXI6IDUsXHJcblx0XHRcdFx0XHRcdGZvcm1hdDogKHZhbCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWwudG9GaXhlZCgwKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0d2lkdGg6IF9zZWxmLmNXaWR0aCAqIF9zZWxmLnBpeGVsUmF0aW8sXHJcblx0XHRcdFx0XHRoZWlnaHQ6IF9zZWxmLmNIZWlnaHQgKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0ZGF0YUxhYmVsOiBmYWxzZSxcclxuXHRcdFx0XHRcdGRhdGFQb2ludFNoYXBlOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZXh0cmE6IHtcclxuXHRcdFx0XHRcdFx0Y2FuZGxlOiB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHtcclxuXHRcdFx0XHRcdFx0XHRcdHVwTGluZTogJyNmMDQ4NjQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dXBGaWxsOiAnI2YwNDg2NCcsXHJcblx0XHRcdFx0XHRcdFx0XHRkb3duTGluZTogJyMyZmMyNWInLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZG93bkZpbGw6ICcjMmZjMjViJ1xyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0YXZlcmFnZToge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU6IFsnTUE1JywgJ01BMTAnLCAnTUEzMCddLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGF5OiBbNSwgMTAsIDIwXSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiBbJyMxODkwZmYnLCAnIzJmYzI1YicsICcjZmFjYzE0J11cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHRvb2x0aXA6IHtcclxuXHRcdFx0XHRcdFx0XHRiZ0NvbG9yOiAnIzAwMDAwMCcsXHJcblx0XHRcdFx0XHRcdFx0YmdPcGFjaXR5OiAwLjcsXHJcblx0XHRcdFx0XHRcdFx0Z3JpZFR5cGU6ICdkYXNoJyxcclxuXHRcdFx0XHRcdFx0XHRkYXNoTGVuZ3RoOiA1LFxyXG5cdFx0XHRcdFx0XHRcdGdyaWRDb2xvcjogJyMxODkwZmYnLFxyXG5cdFx0XHRcdFx0XHRcdGZvbnRDb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdFx0XHRcdGhvcml6ZW50YWxMaW5lOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdHhBeGlzTGFiZWw6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0eUF4aXNMYWJlbDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRsYWJlbEJnQ29sb3I6ICcjREZFOEZGJyxcclxuXHRcdFx0XHRcdFx0XHRsYWJlbEJnT3BhY2l0eTogMC45NSxcclxuXHRcdFx0XHRcdFx0XHRsYWJlbEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFx0bGFiZWxGb250Q29sb3I6ICcjNjY2NjY2J1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRtYXJrTGluZToge1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdkYXNoJyxcclxuXHRcdFx0XHRcdFx0XHRkYXNoTGVuZ3RoOiA1LFxyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IFt7XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMjE1MCxcclxuXHRcdFx0XHRcdFx0XHRcdGxpbmVDb2xvcjogJyNmMDQ4NjQnLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2hvd0xhYmVsOiB0cnVlXHJcblx0XHRcdFx0XHRcdFx0fSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDIzNTAsXHJcblx0XHRcdFx0XHRcdFx0XHRsaW5lQ29sb3I6ICcjZjA0ODY0JyxcclxuXHRcdFx0XHRcdFx0XHRcdHNob3dMYWJlbDogdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdH1dXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hDYW5kbGUoZSkge1xyXG5cdFx0XHRcdGNhbnZhc09ialsnY2FudmFzQ2FuZGxlJ10uc2Nyb2xsU3RhcnQoZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG1vdmVDYW5kbGUoZSkge1xyXG5cdFx0XHRcdGNhbnZhc09ialsnY2FudmFzQ2FuZGxlJ10uc2Nyb2xsKGUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaEVuZENhbmRsZShlKSB7XHJcblx0XHRcdFx0Y2FudmFzT2JqWydjYW52YXNDYW5kbGUnXS5zY3JvbGxFbmQoZSk7XHJcblx0XHRcdFx0Ly/kuIvpnaLmmK90b29sVGlw5LqL5Lu277yM5aaC5p6c5rua5Yqo5ZCO5LiN6ZyA6KaB5pi+56S677yM5Y+v5LiN5aGr5YaZXHJcblx0XHRcdFx0Y2FudmFzT2JqWydjYW52YXNDYW5kbGUnXS5zaG93VG9vbFRpcChlLCB7XHJcblx0XHRcdFx0XHRmb3JtYXQ6IGZ1bmN0aW9uKGl0ZW0sIGNhdGVnb3J5KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBjYXRlZ29yeSArICcgJyArIGl0ZW0ubmFtZSArICc6JyArIGl0ZW0uZGF0YVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGFuZ2VEYXRhKCkge1xyXG5cdFx0XHRcdGNhbnZhc09ialsnY2FudmFzQ29sdW1uJ10udXBkYXRlRGF0YSh7XHJcblx0XHRcdFx0XHRzZXJpZXM6IF9zZWxmLnNlcnZlckRhdGEuQ29sdW1uQi5zZXJpZXMsXHJcblx0XHRcdFx0XHRjYXRlZ29yaWVzOiBfc2VsZi5zZXJ2ZXJEYXRhLkNvbHVtbkIuY2F0ZWdvcmllc1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaExpbmVBKGUpIHtcclxuXHRcdFx0XHRjYW52YXNPYmpbJ2NhbnZhc0xpbmVBJ10uc2Nyb2xsU3RhcnQoZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG1vdmVMaW5lQShlKSB7XHJcblx0XHRcdFx0Y2FudmFzT2JqWydjYW52YXNMaW5lQSddLnNjcm9sbChlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hFbmRMaW5lQShlKSB7XHJcblx0XHRcdFx0Y2FudmFzT2JqWydjYW52YXNMaW5lQSddLnNjcm9sbEVuZChlKTtcclxuXHRcdFx0XHQvL+S4i+mdouaYr3Rvb2xUaXDkuovku7bvvIzlpoLmnpzmu5rliqjlkI7kuI3pnIDopoHmmL7npLrvvIzlj6/kuI3loavlhplcclxuXHRcdFx0XHRjYW52YXNPYmpbJ2NhbnZhc0xpbmVBJ10uc2hvd1Rvb2xUaXAoZSwge1xyXG5cdFx0XHRcdFx0Zm9ybWF0OiBmdW5jdGlvbihpdGVtLCBjYXRlZ29yeSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gY2F0ZWdvcnkgKyAnICcgKyBpdGVtLm5hbWUgKyAnOicgKyBpdGVtLmRhdGFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd01peChjYW52YXNJZCwgY2hhcnREYXRhKSB7XHJcblx0XHRcdFx0Y2FudmFzT2JqW2NhbnZhc0lkXSA9IG5ldyB1Q2hhcnRzKHtcclxuXHRcdFx0XHRcdCR0aGlzOiBfc2VsZixcclxuXHRcdFx0XHRcdGNhbnZhc0lkOiBjYW52YXNJZCxcclxuXHRcdFx0XHRcdHR5cGU6ICdtaXgnLFxyXG5cdFx0XHRcdFx0Zm9udFNpemU6IDExLFxyXG5cdFx0XHRcdFx0cGFkZGluZzogWzE1LCAxNSwgMCwgMTVdLFxyXG5cdFx0XHRcdFx0bGVnZW5kOiB7XHJcblx0XHRcdFx0XHRcdHNob3c6IHRydWUsXHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDUsXHJcblx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ6IDExLFxyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDYsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG5cdFx0XHRcdFx0cGl4ZWxSYXRpbzogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGNhdGVnb3JpZXM6IGNoYXJ0RGF0YS5jYXRlZ29yaWVzLFxyXG5cdFx0XHRcdFx0c2VyaWVzOiBjaGFydERhdGEuc2VyaWVzLFxyXG5cdFx0XHRcdFx0YW5pbWF0aW9uOiBmYWxzZSxcclxuXHRcdFx0XHRcdGVuYWJsZVNjcm9sbDogdHJ1ZSwgLy/lvIDlkK/lm77ooajmi5bmi73lip/og71cclxuXHRcdFx0XHRcdHhBeGlzOiB7XHJcblx0XHRcdFx0XHRcdGRpc2FibGVHcmlkOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0dHlwZTogJ2dyaWQnLFxyXG5cdFx0XHRcdFx0XHRncmlkVHlwZTogJ2Rhc2gnLFxyXG5cdFx0XHRcdFx0XHRpdGVtQ291bnQ6IDQsXHJcblx0XHRcdFx0XHRcdHNjcm9sbFNob3c6IHRydWUsXHJcblx0XHRcdFx0XHRcdHNjcm9sbEFsaWduOiAnbGVmdCcsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eUF4aXM6IHtcclxuXHRcdFx0XHRcdFx0Z3JpZFR5cGU6ICdkYXNoJyxcclxuXHRcdFx0XHRcdFx0ZGFzaExlbmd0aDogNCxcclxuXHRcdFx0XHRcdFx0c3BsaXROdW1iZXI6IDUsXHJcblx0XHRcdFx0XHRcdG1pbjogMTAsXHJcblx0XHRcdFx0XHRcdG1heDogMTgwLFxyXG5cdFx0XHRcdFx0XHRmb3JtYXQ6ICh2YWwpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsLnRvRml4ZWQoMClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHdpZHRoOiBfc2VsZi5jV2lkdGggKiBfc2VsZi5waXhlbFJhdGlvLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OiBfc2VsZi5jSGVpZ2h0ICogX3NlbGYucGl4ZWxSYXRpbyxcclxuXHRcdFx0XHRcdGRhdGFMYWJlbDogdHJ1ZSxcclxuXHRcdFx0XHRcdGRhdGFQb2ludFNoYXBlOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZXh0cmE6IHtcclxuXHRcdFx0XHRcdFx0Y29sdW1uOiB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwICogX3NlbGYucGl4ZWxSYXRpb1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR0b29sdGlwOiB7XHJcblx0XHRcdFx0XHRcdFx0YmdDb2xvcjogJyMwMDAwMDAnLFxyXG5cdFx0XHRcdFx0XHRcdGJnT3BhY2l0eTogMC43LFxyXG5cdFx0XHRcdFx0XHRcdGdyaWRUeXBlOiAnZGFzaCcsXHJcblx0XHRcdFx0XHRcdFx0ZGFzaExlbmd0aDogOCxcclxuXHRcdFx0XHRcdFx0XHRncmlkQ29sb3I6ICcjMTg5MGZmJyxcclxuXHRcdFx0XHRcdFx0XHRmb250Q29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdFx0XHRcdFx0XHRob3JpemVudGFsTGluZTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHR4QXhpc0xhYmVsOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdHlBeGlzTGFiZWw6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0bGFiZWxCZ0NvbG9yOiAnI0RGRThGRicsXHJcblx0XHRcdFx0XHRcdFx0bGFiZWxCZ09wYWNpdHk6IDAuOTUsXHJcblx0XHRcdFx0XHRcdFx0bGFiZWxBbGlnbjogJ2xlZnQnLFxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsRm9udENvbG9yOiAnIzY2NjY2NidcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hNaXgoZSkge1xyXG5cdFx0XHRcdGNhbnZhc09ialsnY2FudmFzTWl4J10uc2Nyb2xsU3RhcnQoZSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG1vdmVNaXgoZSkge1xyXG5cdFx0XHRcdGNhbnZhc09ialsnY2FudmFzTWl4J10uc2Nyb2xsKGUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaEVuZE1peChlKSB7XHJcblx0XHRcdFx0Y2FudmFzT2JqWydjYW52YXNNaXgnXS5zY3JvbGxFbmQoZSk7XHJcblx0XHRcdFx0Y2FudmFzT2JqWydjYW52YXNNaXgnXS50b3VjaExlZ2VuZChlKTtcclxuXHRcdFx0XHQvL+S4i+mdouaYr3Rvb2xUaXDkuovku7bvvIzlpoLmnpzmu5rliqjlkI7kuI3pnIDopoHmmL7npLrvvIzlj6/kuI3loavlhplcclxuXHRcdFx0XHRjYW52YXNPYmpbJ2NhbnZhc01peCddLnNob3dUb29sVGlwKGUsIHtcclxuXHRcdFx0XHRcdGZvcm1hdDogZnVuY3Rpb24oaXRlbSwgY2F0ZWdvcnkpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGNhdGVnb3J5ICsgJyAnICsgaXRlbS5uYW1lICsgJzonICsgaXRlbS5kYXRhXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoSXQoZSwgaWQpIHtcclxuXHRcdFx0XHRjYW52YXNPYmpbaWRdLnRvdWNoTGVnZW5kKGUsIHtcclxuXHRcdFx0XHRcdGFuaW1hdGlvbjogZmFsc2VcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRjYW52YXNPYmpbaWRdLnNob3dUb29sVGlwKGUsIHtcclxuXHRcdFx0XHRcdGZvcm1hdDogZnVuY3Rpb24oaXRlbSwgY2F0ZWdvcnkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmRhdGEgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNhdGVnb3J5ICsgJyAnICsgaXRlbS5uYW1lICsgJzonICsgaXRlbS5kYXRhLnZhbHVlXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGNhdGVnb3J5ICsgJyAnICsgaXRlbS5uYW1lICsgJzonICsgaXRlbS5kYXRhXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hQaWUoZSwgaWQpIHtcclxuXHRcdFx0XHRjYW52YXNPYmpbaWRdLnNob3dUb29sVGlwKGUsIHtcclxuXHRcdFx0XHRcdGZvcm1hdDogZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gaXRlbS5uYW1lICsgJzonICsgaXRlbS5kYXRhXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHRwYWdlIHtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0XHQvKiB3aWR0aDogNzUwcnB4OyAqL1xyXG5cdFx0Lyogd2lkdGg6IDEwMCU7ICovXHJcblx0XHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQucWl1bi1wYWRkaW5nIHtcclxuXHRcdHBhZGRpbmc6IDIlO1xyXG5cdFx0d2lkdGg6IDk2JTtcclxuXHR9XHJcblxyXG5cdC5xaXVuLXdyYXAge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHR9XHJcblxyXG5cdC5xaXVuLXJvd3Mge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5xaXVuLWNvbHVtbnMge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuXHR9XHJcblxyXG5cdC5xaXVuLWNvbW1vbi1tdCB7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHJweDtcclxuXHR9XHJcblxyXG5cdC5xaXVuLWJnLXdoaXRlIHtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQucWl1bi10aXRsZS1iYXIge1xyXG5cdFx0d2lkdGg6IDk2JTtcclxuXHRcdHBhZGRpbmc6IDEwcnB4IDIlO1xyXG5cdFx0ZmxleC13cmFwOiBub3dyYXA7XHJcblx0fVxyXG5cclxuXHQucWl1bi10aXRsZS1kb3QtbGlnaHQge1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IDEwcnB4IHNvbGlkICMwZWEzOTE7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDEwcnB4O1xyXG5cdFx0Zm9udC1zaXplOiAzMnJweDtcclxuXHRcdGNvbG9yOiAjMDAwMDAwXHJcblx0fVxyXG5cclxuXHQvKiDpgJrnlKjmoLflvI8gKi9cclxuXHQucWl1bi1jaGFydHMge1xyXG5cdFx0Lyogd2lkdGg6IDc1MHJweDsgKi9cclxuXHRcdC8qIHdpZHRoOjEwMCU7ICovXHJcblx0XHRoZWlnaHQ6IDUwMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQuY2hhcnRzIHtcclxuXHRcdC8qIHdpZHRoOiA3NTBycHg7ICovXHJcblx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0aGVpZ2h0OiA1MDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0Lyog5qiq5bGP5qC35byPICovXHJcblx0LnFpdW4tY2hhcnRzLXJvdGF0ZSB7XHJcblx0XHR3aWR0aDogNzAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMTAwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHRcdHBhZGRpbmc6IDI1cnB4O1xyXG5cdH1cclxuXHJcblx0LmNoYXJ0cy1yb3RhdGUge1xyXG5cdFx0d2lkdGg6IDcwMHJweDtcclxuXHRcdGhlaWdodDogMTEwMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQvKiDlnIblvKfov5vluqbmoLflvI8gKi9cclxuXHQucWl1bi1jaGFydHMzIHtcclxuXHRcdC8qIHdpZHRoOiA3NTBycHg7XHJcblx0XHR3aWR0aDoxMDAlOyAqL1xyXG5cdFx0aGVpZ2h0OiAyNTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0LmNoYXJ0czMge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0d2lkdGg6IDI1MHJweDtcclxuXHRcdGhlaWdodDogMjUwcnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcblxyXG5cdC5xaXVuLXRpcCB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHBhZGRpbmc6IDE1cnB4O1xyXG5cdFx0aGVpZ2h0OiAzMHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMHJweDtcclxuXHRcdG1hcmdpbjogMTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmY5OTMzO1xyXG5cdFx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDhycHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNkYzcwMDQ7XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdWNoYXJ0cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3VjaGFydHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA1MTc3ODI4NDgzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==