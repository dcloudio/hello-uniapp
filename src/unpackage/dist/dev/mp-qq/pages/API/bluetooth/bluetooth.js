(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/API/bluetooth/bluetooth"],{

/***/ 599:
/*!********************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/main.js?{"page":"pages%2FAPI%2Fbluetooth%2Fbluetooth"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _bluetooth = _interopRequireDefault(__webpack_require__(/*! ./pages/API/bluetooth/bluetooth.vue */ 600));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_bluetooth.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 600:
/*!***********************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/bluetooth/bluetooth.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bluetooth_vue_vue_type_template_id_5d1f42e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bluetooth.vue?vue&type=template&id=5d1f42e2& */ 601);
/* harmony import */ var _bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bluetooth.vue?vue&type=script&lang=js& */ 603);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _bluetooth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bluetooth.vue?vue&type=style&index=0&lang=css& */ 605);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bluetooth_vue_vue_type_template_id_5d1f42e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bluetooth_vue_vue_type_template_id_5d1f42e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _bluetooth_vue_vue_type_template_id_5d1f42e2___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/API/bluetooth/bluetooth.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 601:
/*!******************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/bluetooth/bluetooth.vue?vue&type=template&id=5d1f42e2& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_template_id_5d1f42e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bluetooth.vue?vue&type=template&id=5d1f42e2& */ 602);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_template_id_5d1f42e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_template_id_5d1f42e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_template_id_5d1f42e2___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_template_id_5d1f42e2___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 602:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/bluetooth/bluetooth.vue?vue&type=template&id=5d1f42e2& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  pageHead: function() {
    return __webpack_require__.e(/*! import() | components/page-head/page-head */ "components/page-head/page-head").then(__webpack_require__.bind(null, /*! @/components/page-head/page-head.vue */ 1082))
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

/***/ 603:
/*!************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/bluetooth/bluetooth.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bluetooth.vue?vue&type=script&lang=js& */ 604);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 604:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/bluetooth/bluetooth.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      title: 'bluetooth',
      disabled: [false, true, true, true, true, true, true, true, true, true, true],
      newDeviceLoad: false,
      searchLoad: false,
      maskShow: false,
      equipment: [],
      adapterState: {
        discovering: false,
        available: false },

      connected: false,
      showMaskType: 'device',
      servicesData: [],
      characteristicsData: [],
      valueChangeData: {},
      isStop: true,
      list: [] };

  },
  onLoad: function onLoad() {
    this.onBLEConnectionStateChange();
  },
  methods: {
    moveHandle: function moveHandle() {},
    /**
                                           * 关闭遮罩
                                           */
    maskclose: function maskclose() {
      this.maskShow = false;
    },
    /**
        * 选择设备
        */
    queryDevices: function queryDevices() {
      // this.newDeviceLoad = true;
      this.showMaskType = 'device';
      this.maskShow = true;
    },
    tapQuery: function tapQuery(item) {
      if (this.showMaskType === 'device') {
        this.$set(this.disabled, 4, false);
        if (this.equipment.length > 0) {
          this.equipment[0] = item;
        } else {
          this.equipment.push(item);
        }
        this.newDeviceLoad = false;
      }
      if (this.showMaskType === 'service') {
        this.$set(this.disabled, 6, false);
        if (this.servicesData.length > 0) {
          this.servicesData[0] = item;
        } else {
          this.servicesData.push(item);
        }
      }
      if (this.showMaskType === 'characteristics') {
        this.$set(this.disabled, 7, false);
        if (this.characteristicsData.length > 0) {
          this.characteristicsData[0] = item;
        } else {
          this.characteristicsData.push(item);
        }
      }
      this.maskShow = false;
    },
    /**
        * 初始化蓝牙设备
        */
    openBluetoothAdapter: function openBluetoothAdapter() {var _this = this;
      uni.openBluetoothAdapter({
        success: function success(e) {
          console.log('初始化蓝牙成功:' + e.errMsg);
          console.log(JSON.stringify(e));
          _this.isStop = false;
          _this.$set(_this.disabled, 0, true);
          _this.$set(_this.disabled, 1, false);
          _this.$set(_this.disabled, 10, false);
          _this.getBluetoothAdapterState();
        },
        fail: function fail(e) {
          console.log(e);
          console.log('初始化蓝牙失败，错误码：' + (e.errCode || e.errMsg));
          if (e.errCode !== 0) {
            initTypes(e.errCode, e.errMsg);
          }
        } });

    },
    /**
        * 开始搜索蓝牙设备
        */
    startBluetoothDevicesDiscovery: function startBluetoothDevicesDiscovery() {var _this2 = this;
      uni.startBluetoothDevicesDiscovery({
        success: function success(e) {
          console.log('开始搜索蓝牙设备:' + e.errMsg);
          _this2.searchLoad = true;
          _this2.$set(_this2.disabled, 1, true);
          _this2.$set(_this2.disabled, 2, false);
          _this2.$set(_this2.disabled, 3, false);
          _this2.onBluetoothDeviceFound();
        },
        fail: function fail(e) {
          console.log('搜索蓝牙设备失败，错误码：' + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        } });

    },
    /**
        * 停止搜索蓝牙设备
        */
    stopBluetoothDevicesDiscovery: function stopBluetoothDevicesDiscovery(types) {var _this3 = this;
      uni.stopBluetoothDevicesDiscovery({
        success: function success(e) {
          console.log('停止搜索蓝牙设备:' + e.errMsg);
          if (types) {
            _this3.$set(_this3.disabled, 1, true);
          } else {
            _this3.$set(_this3.disabled, 1, false);
          }
          _this3.$set(_this3.disabled, 2, true);
          // this.$set(this.disabled, 3, true);
          _this3.searchLoad = false;
        },
        fail: function fail(e) {
          console.log('停止搜索蓝牙设备失败，错误码：' + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        } });

    },
    /**
        * 发现外围设备
        */
    onBluetoothDeviceFound: function onBluetoothDeviceFound() {var _this4 = this;
      uni.onBluetoothDeviceFound(function (devices) {
        console.log('开始监听寻找到新设备的事件');
        // this.$set(this.disabled, 3, false);
        _this4.getBluetoothDevices();
      });
    },
    /**
        * 获取在蓝牙模块生效期间所有已发现的蓝牙设备。包括已经和本机处于连接状态的设备。
        */
    getBluetoothDevices: function getBluetoothDevices() {var _this5 = this;
      uni.getBluetoothDevices({
        success: function success(res) {
          _this5.newDeviceLoad = false;
          console.log('获取蓝牙设备成功:' + res.errMsg);
          // console.log(JSON.stringify(res))
          _this5.list = res.devices;
        },
        fail: function fail(e) {
          console.log('获取蓝牙设备错误，错误码：' + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        } });

    },
    /**
        * 获取本机蓝牙适配器状态
        */
    getBluetoothAdapterState: function getBluetoothAdapterState() {var _this6 = this;
      console.log('--->');
      uni.getBluetoothAdapterState({
        success: function success(res) {
          console.log(JSON.stringify(res));
          _this6.adapterState = res;
        },
        fail: function fail(e) {
          console.log('获取本机蓝牙适配器状态失败，错误码：' + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        } });

    },
    /**
        * 连接低功耗蓝牙
        */
    createBLEConnection: function createBLEConnection() {var _this7 = this;
      var deviceId = this.equipment[0].deviceId;
      uni.showToast({
        title: '连接蓝牙...',
        icon: 'loading',
        duration: 99999 });

      uni.createBLEConnection({
        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
        deviceId: deviceId,
        success: function success(res) {
          console.log(res);
          console.log('连接蓝牙成功:' + res.errMsg);
          // 连接设备后断开搜索 并且不能搜索设备
          _this7.stopBluetoothDevicesDiscovery(true);
          uni.hideToast();
          uni.showToast({
            title: '连接成功',
            icon: 'success',
            duration: 2000 });

          _this7.$set(_this7.disabled, 3, true);
          _this7.$set(_this7.disabled, 4, true);
          _this7.$set(_this7.disabled, 5, false);
          _this7.$set(_this7.disabled, 9, false);
          _this7.connected = true;
        },
        fail: function fail(e) {
          console.log('连接低功耗蓝牙失败，错误码：' + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        } });

    },
    /**
        * 断开与低功耗蓝牙设备的连接
        */
    closeBLEConnection: function closeBLEConnection() {var _this8 = this;
      var deviceId = this.equipment[0].deviceId;
      uni.closeBLEConnection({
        deviceId: deviceId,
        success: function success(res) {
          console.log(res);
          console.log('断开低功耗蓝牙成功:' + res.errMsg);
          _this8.$set(_this8.disabled, 1, false);
          _this8.$set(_this8.disabled, 3, true);
          _this8.$set(_this8.disabled, 4, true);
          _this8.$set(_this8.disabled, 5, true);
          _this8.$set(_this8.disabled, 6, true);
          _this8.$set(_this8.disabled, 7, true);
          _this8.$set(_this8.disabled, 8, true);
          _this8.$set(_this8.disabled, 9, true);
          _this8.equipment = [];
          _this8.servicesData = [];
          _this8.characteristicsData = [];
        },
        fail: function fail(e) {
          console.log('断开低功耗蓝牙成功，错误码：' + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        } });

    },
    /**
        * 获取所有服务
        */
    getBLEDeviceServices: function getBLEDeviceServices() {var _this9 = this;
      var deviceId = this.equipment[0].deviceId;
      console.log('获取所有服务的 uuid:' + deviceId);

      uni.getBLEDeviceServices({
        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
        deviceId: deviceId,
        success: function success(res) {
          console.log(JSON.stringify(res.services));
          console.log('获取设备服务成功:' + res.errMsg);
          _this9.$set(_this9.disabled, 7, true);
          _this9.$set(_this9.disabled, 8, true);
          _this9.showMaskType = 'service';
          _this9.list = res.services;

          _this9.characteristicsData = [];
          if (_this9.list.length <= 0) {
            toast('获取服务失败，请重试!');
            return;
          }
          _this9.maskShow = true;
        },
        fail: function fail(e) {
          console.log('获取设备服务失败，错误码：' + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        } });

    },
    /**
        * 获取某个服务下的所有特征值
        */
    getBLEDeviceCharacteristics: function getBLEDeviceCharacteristics() {var _this10 = this;
      var deviceId = this.equipment[0].deviceId;
      var serviceId = this.servicesData[0].uuid;
      console.log(deviceId);
      console.log(serviceId);
      uni.getBLEDeviceCharacteristics({
        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
        deviceId: deviceId,
        // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
        serviceId: serviceId,
        success: function success(res) {
          console.log(JSON.stringify(res));
          console.log('获取特征值成功:' + res.errMsg);
          _this10.$set(_this10.disabled, 7, true);
          _this10.valueChangeData = {};
          _this10.showMaskType = 'characteristics';
          _this10.list = res.characteristics;
          if (_this10.list.length <= 0) {
            toast('获取特征值失败，请重试!');
            return;
          }
          _this10.maskShow = true;
        },
        fail: function fail(e) {
          console.log('获取特征值失败，错误码：' + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        } });

    },
    /**
        * 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
        */
    onBLEConnectionStateChange: function onBLEConnectionStateChange() {var _this11 = this;
      uni.onBLEConnectionStateChange(function (res) {
        // 该方法回调中可以用于处理连接意外断开等异常情况
        console.log("\u84DD\u7259\u8FDE\u63A5\u72B6\u6001 -------------------------->");
        console.log(JSON.stringify(res));
        if (!res.connected) {
          if (_this11.isStop) return;
          console.log('断开低功耗蓝牙成功:');
          _this11.$set(_this11.disabled, 1, false);
          _this11.$set(_this11.disabled, 3, true);
          _this11.$set(_this11.disabled, 4, true);
          _this11.$set(_this11.disabled, 5, true);
          _this11.$set(_this11.disabled, 6, true);
          _this11.$set(_this11.disabled, 7, true);
          _this11.$set(_this11.disabled, 8, true);
          _this11.$set(_this11.disabled, 9, true);
          _this11.searchLoad = false;
          _this11.equipment = [];
          _this11.servicesData = [];
          _this11.characteristicsData = [];
          _this11.valueChangeData = {};
          toast('已经断开当前蓝牙连接');
        }
      });
    },
    /**
        * 读取低功耗蓝牙设备的特征值的二进制数据值。注意：必须设备的特征值支持 read 才可以成功调用
        */
    readBLECharacteristicValue: function readBLECharacteristicValue() {var _this12 = this;
      var deviceId = this.equipment[0].deviceId;
      var serviceId = this.servicesData[0].uuid;
      var characteristicId = this.characteristicsData[0].uuid;
      console.log(deviceId);
      console.log(serviceId);
      console.log(characteristicId);
      uni.readBLECharacteristicValue({
        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
        deviceId: deviceId,
        // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
        serviceId: serviceId,
        // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
        characteristicId: characteristicId,
        success: function success(res) {
          console.log('读取设备数据值成功');
          console.log(JSON.stringify(res));
          _this12.notifyBLECharacteristicValueChange();
        },
        fail: function fail(e) {
          console.log('读取设备数据值失败，错误码：' + e.errCode);
          if (e.errCode !== 0) {
            initTypes(e.errCode);
          }
        } });

      this.onBLECharacteristicValueChange();
    },
    /**
        * 监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。
        */
    onBLECharacteristicValueChange: function onBLECharacteristicValueChange() {var _this13 = this;
      // 必须在这里的回调才能获取
      uni.onBLECharacteristicValueChange(function (characteristic) {
        console.log('监听低功耗蓝牙设备的特征值变化事件成功');
        console.log(JSON.stringify(characteristic));
        _this13.valueChangeData = characteristic;
      });
    },
    /**
        * 订阅操作成功后需要设备主动更新特征值的 value，才会触发 uni.onBLECharacteristicValueChange 回调。
        */
    notifyBLECharacteristicValueChange: function notifyBLECharacteristicValueChange() {
      var deviceId = this.equipment[0].deviceId;
      var serviceId = this.servicesData[0].uuid;
      var characteristicId = this.characteristicsData[0].uuid;
      var notify = this.characteristicsData[0].properties.notify;
      console.log(deviceId);
      console.log(serviceId);
      console.log(characteristicId);
      console.log(notify);
      uni.notifyBLECharacteristicValueChange({
        state: true, // 启用 notify 功能
        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
        deviceId: deviceId,
        // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取
        serviceId: serviceId,
        // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取
        characteristicId: characteristicId,
        success: function success(res) {
          console.log('notifyBLECharacteristicValueChange success:' + res.errMsg);
          console.log(JSON.stringify(res));
        } });

    },
    /**
        * 	断开蓝牙模块
        */
    closeBluetoothAdapter: function closeBluetoothAdapter(OBJECT) {var _this14 = this;
      uni.closeBluetoothAdapter({
        success: function success(res) {
          console.log('断开蓝牙模块成功');
          _this14.isStop = true;
          _this14.$set(_this14.disabled, 0, false);
          _this14.$set(_this14.disabled, 1, true);
          _this14.$set(_this14.disabled, 2, true);
          _this14.$set(_this14.disabled, 3, true);
          _this14.$set(_this14.disabled, 4, true);
          _this14.$set(_this14.disabled, 5, true);
          _this14.$set(_this14.disabled, 6, true);
          _this14.$set(_this14.disabled, 7, true);
          _this14.$set(_this14.disabled, 8, true);
          _this14.$set(_this14.disabled, 9, true);
          _this14.$set(_this14.disabled, 10, true);
          _this14.equipment = [];
          _this14.servicesData = [];
          _this14.characteristicsData = [];
          _this14.valueChangeData = {};
          _this14.adapterState = [];
          _this14.searchLoad = false;
          toast('断开蓝牙模块');
        } });

    } } };



/**
            * 判断初始化蓝牙状态
            */exports.default = _default;
function initTypes(code, errMsg) {
  switch (code) {
    case 10000:
      toast('未初始化蓝牙适配器');
      break;
    case 10001:
      toast('未检测到蓝牙，请打开蓝牙重试！');
      break;
    case 10002:
      toast('没有找到指定设备');
      break;
    case 10003:
      toast('连接失败');
      break;
    case 10004:
      toast('没有找到指定服务');
      break;
    case 10005:
      toast('没有找到指定特征值');
      break;
    case 10006:
      toast('当前连接已断开');
      break;
    case 10007:
      toast('当前特征值不支持此操作');
      break;
    case 10008:
      toast('其余所有系统上报的异常');
      break;
    case 10009:
      toast('Android 系统特有，系统版本低于 4.3 不支持 BLE');
      break;
    default:
      toast(errMsg);}

}

/**
   * 弹出框封装
   */
function toast(content) {var showCancel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  uni.showModal({
    title: '提示',
    content: content,
    showCancel: showCancel });

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 605:
/*!********************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/bluetooth/bluetooth.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bluetooth.vue?vue&type=style&index=0&lang=css& */ 606);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bluetooth_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 606:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/bluetooth/bluetooth.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[599,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvQVBJL2JsdWV0b290aC9ibHVldG9vdGgudnVlPzIyNzciLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL3BhZ2VzL0FQSS9ibHVldG9vdGgvYmx1ZXRvb3RoLnZ1ZT81NzMzIiwid2VicGFjazovLy8vVXNlcnMvdGlhbmppYXhpbmcvUFAvRGNsb3VkL2hlbGxvLXVuaWFwcC9wYWdlcy9BUEkvYmx1ZXRvb3RoL2JsdWV0b290aC52dWU/MmFiOSIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvQVBJL2JsdWV0b290aC9ibHVldG9vdGgudnVlPzYwMDciLCJ1bmktYXBwOi8vL3BhZ2VzL0FQSS9ibHVldG9vdGgvYmx1ZXRvb3RoLnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvQVBJL2JsdWV0b290aC9ibHVldG9vdGgudnVlPzc5ZDEiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL3BhZ2VzL0FQSS9ibHVldG9vdGgvYmx1ZXRvb3RoLnZ1ZT84MzZmIl0sIm5hbWVzIjpbImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSw2RztBQUNBQSxVQUFVLENBQUNDLGtCQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzSDtBQUN0SDtBQUM2RDtBQUNMO0FBQ2E7OztBQUdyRTtBQUMyTjtBQUMzTixnQkFBZ0IseU5BQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsb0ZBQU07QUFDUixF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Q0EsZUFEQTtBQUVBLG9CQUZBO0FBR0EsMEJBSEE7O0FBS0EsQzs7Ozs7Ozs7Ozs7OztBQ3huQkE7QUFBQTtBQUFBO0FBQUE7QUFBaXdDLENBQWdCLDRwQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXJ4QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL0FQSS9ibHVldG9vdGgvYmx1ZXRvb3RoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL0FQSS9ibHVldG9vdGgvYmx1ZXRvb3RoLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2JsdWV0b290aC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWQxZjQyZTImXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9ibHVldG9vdGgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9ibHVldG9vdGgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2JsdWV0b290aC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL0FQSS9ibHVldG9vdGgvYmx1ZXRvb3RoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vYmx1ZXRvb3RoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZDFmNDJlMiZcIiIsInZhciBjb21wb25lbnRzID0ge1xuICBwYWdlSGVhZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy9wYWdlLWhlYWQvcGFnZS1oZWFkXCIgKi8gXCJAL2NvbXBvbmVudHMvcGFnZS1oZWFkL3BhZ2UtaGVhZC52dWVcIlxuICAgIClcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vYmx1ZXRvb3RoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vYmx1ZXRvb3RoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDxwYWdlLWhlYWQgOnRpdGxlPVwidGl0bGVcIj48L3BhZ2UtaGVhZD5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLXBhZGRpbmctd3JhcCB1bmktY29tbW9uLW10XCI+XHJcblx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdOacrOiTneeJmeWNj+iuruWPquaUr+aMgeS9juWKn+iAl+iTneeJmeWNj+iurmJsZeOAguWmguaenOaDs+i/nuaOpemdnmJsZeiTneeJmeiuvuWkh++8jOivt+WcqOekvuWMuuaQnOe0oiBOYXRpdmUuanMg6JOd54mZ44CCXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktYnRuLXZcIj5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgOmRpc2FibGVkPVwiZGlzYWJsZWRbMF1cIiBAY2xpY2s9XCJvcGVuQmx1ZXRvb3RoQWRhcHRlclwiPlxyXG5cdFx0XHRcdFx05Yid5aeL5YyW6JOd54mZ5qih5Z2XXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cIiFhZGFwdGVyU3RhdGUuYXZhaWxhYmxlXCI+XHJcblx0XHRcdFx0XHR7eyAn6JOd54mZ6YCC6YWN5Zmo5LiN5Y+v55SoLOivt+WIneWni+WMluiTneeJmeaooeWdlycgfX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT1cInByaW1hcnlcIlxyXG5cdFx0XHRcdFx0OmxvYWRpbmc9XCJzZWFyY2hMb2FkXCJcclxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkWzFdXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cInN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx05byA5aeL5pCc57Si6JOd54mZ6K6+5aSHXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0dHlwZT1cInByaW1hcnlcIlxyXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRbMl1cIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwic3RvcEJsdWV0b290aERldmljZXNEaXNjb3ZlcnkoZmFsc2UpXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHTlgZzmraLmkJzntKLok53niZnorr7lpIdcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHR0eXBlPVwicHJpbWFyeVwiXHJcblx0XHRcdFx0XHQ6bG9hZGluZz1cIm5ld0RldmljZUxvYWRcIlxyXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRbM11cIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwicXVlcnlEZXZpY2VzXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHTpgInmi6norr7lpIdcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiZXF1aXBtZW50Lmxlbmd0aCA+IDBcIj5cclxuXHRcdFx0XHRcdHt7XHJcblx0XHRcdFx0XHRcdChjb25uZWN0ZWQgPyAn5bey6L+e5o6l6K6+5aSHJyA6ICflt7LpgInmi6norr7lpIcnKSArXHJcblx0XHRcdFx0XHRcdFx0JyA6ICcgK1xyXG5cdFx0XHRcdFx0XHRcdGVxdWlwbWVudFswXS5uYW1lICtcclxuXHRcdFx0XHRcdFx0XHQnICgnICtcclxuXHRcdFx0XHRcdFx0XHRlcXVpcG1lbnRbMF0uZGV2aWNlSWQgK1xyXG5cdFx0XHRcdFx0XHRcdCcpJ1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIDpkaXNhYmxlZD1cImRpc2FibGVkWzRdXCIgQGNsaWNrPVwiY3JlYXRlQkxFQ29ubmVjdGlvblwiPlxyXG5cdFx0XHRcdFx06L+e5o6l6JOd54mZ6K6+5aSHXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIDpkaXNhYmxlZD1cImRpc2FibGVkWzVdXCIgQGNsaWNrPVwiZ2V0QkxFRGV2aWNlU2VydmljZXNcIj5cclxuXHRcdFx0XHRcdOmAieaLqeiuvuWkh+acjeWKoVxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJzZXJ2aWNlc0RhdGEubGVuZ3RoID4gMFwiPuW3sumAieacjeWKoXV1aWTvvJp7eyBzZXJ2aWNlc0RhdGFbMF0udXVpZCB9fTwvdmlldz5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgOmRpc2FibGVkPVwiZGlzYWJsZWRbNl1cIiBAY2xpY2s9XCJnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3NcIj5cclxuXHRcdFx0XHRcdOiOt+WPluacjeWKoeeahOeJueW+geWAvFxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJjaGFyYWN0ZXJpc3RpY3NEYXRhLmxlbmd0aCA+IDBcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RfbmFtZVwiPnV1aWQ6e3sgY2hhcmFjdGVyaXN0aWNzRGF0YVswXS51dWlkIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdF9pdGVtXCI+XHJcblx0XHRcdFx0XHRcdOaYr+WQpuaUr+aMgSByZWFkIOaTjeS9nDp7eyBjaGFyYWN0ZXJpc3RpY3NEYXRhWzBdLnByb3BlcnRpZXMucmVhZCB9fVxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdF9pdGVtXCI+XHJcblx0XHRcdFx0XHRcdOaYr+WQpuaUr+aMgSB3cml0ZSDmk43kvZw6e3sgY2hhcmFjdGVyaXN0aWNzRGF0YVswXS5wcm9wZXJ0aWVzLndyaXRlIH19XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0X2l0ZW1cIj5cclxuXHRcdFx0XHRcdFx05piv5ZCm5pSv5oyBIG5vdGlmeSDmk43kvZw6e3sgY2hhcmFjdGVyaXN0aWNzRGF0YVswXS5wcm9wZXJ0aWVzLm5vdGlmeSB9fVxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdF9pdGVtXCI+XHJcblx0XHRcdFx0XHRcdOaYr+WQpuaUr+aMgSBpbmRpY2F0ZSDmk43kvZw6e3sgY2hhcmFjdGVyaXN0aWNzRGF0YVswXS5wcm9wZXJ0aWVzLmluZGljYXRlIH19XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0gPGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIDpkaXNhYmxlZD1cImRpc2FibGVkWzddXCIgQGNsaWNrPVwicmVhZEJMRUNoYXJhY3RlcmlzdGljVmFsdWVcIj5cclxuXHRcdFx0XHRcdOivu+WPlueJueW+geWAvOaVsOaNrlxyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJ2YWx1ZUNoYW5nZURhdGEuc2VydmljZUlkXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImxpc3QtbmFtZVwiPlxyXG5cdFx0XHRcdFx0XHTnibnlvoHlgLzmnIDmlrDnmoTlgLw6e3sgdmFsdWVDaGFuZ2VEYXRhLnZhbHVlIHx8ICfov5jmsqHmnInmnIDmlrDlgLwnIH19XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PiAtLT5cclxuXHRcdFx0XHQ8IS0tIDxidXR0b24gdHlwZT1cInByaW1hcnlcIiA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFs4XVwiIEBjbGljaz1cIndcIj7lhpnlhaXnibnlvoHlgLzmlbDmja48L2J1dHRvbj4gLS0+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIDpkaXNhYmxlZD1cImRpc2FibGVkWzldXCIgQGNsaWNrPVwiY2xvc2VCTEVDb25uZWN0aW9uXCI+XHJcblx0XHRcdFx0XHTmlq3lvIDok53niZnorr7lpIdcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgOmRpc2FibGVkPVwiZGlzYWJsZWRbMTBdXCIgQGNsaWNrPVwiY2xvc2VCbHVldG9vdGhBZGFwdGVyXCI+XHJcblx0XHRcdFx0XHTlhbPpl63ok53niZnmqKHlnZdcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDpga7nvakgLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwibWFza1Nob3dcIiBjbGFzcz1cInVuaS1tYXNrXCIgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJtb3ZlSGFuZGxlXCIgQGNsaWNrPVwibWFza2Nsb3NlXCI+XHJcblx0XHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cInVuaS1zY3JvbGxfYm94XCIgc2Nyb2xsLXkgQHRvdWNobW92ZS5zdG9wLnByZXZlbnQ9XCJtb3ZlSGFuZGxlXCIgQGNsaWNrLnN0b3A9XCJtb3ZlSGFuZGxlXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktdGl0bGVcIj5cclxuXHRcdFx0XHRcdOW3sue7j+WPkeeOsHt7IGxpc3QubGVuZ3RoIH19e3sgc2hvd01hc2tUeXBlID09PSAnZGV2aWNlJyA/ICflj7Dorr7lpIcnIDogJ+S4quacjeWKoScgfX06XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3XHJcblx0XHRcdFx0XHRjbGFzcz1cInVuaS1saXN0LWJveFwiXHJcblx0XHRcdFx0XHR2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbGlzdFwiXHJcblx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwidGFwUXVlcnkoaXRlbSlcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJzaG93TWFza1R5cGUgPT09ICdkZXZpY2UnXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RfbmFtZVwiPnt7IGl0ZW0ubmFtZSB8fCBpdGVtLmxvY2FsTmFtZSB9fTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdF9pdGVtXCI+5L+h5Y+35by65bqmOnt7IGl0ZW0uUlNTSSB9fWRCbTwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdF9pdGVtXCI+VVVJRDp7eyBpdGVtLmRldmljZUlkIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwibGlzdC1pdGVtXCIgdi1pZj1cInNob3dNYXNrVHlwZSA9PT0gJ2RldmljZSdcIj5cclxuXHRcdFx0XHRcdFx0XHRTZXJ2aWNl5pWw6YePOnt7IGl0ZW0uYWR2ZXJ0aXNTZXJ2aWNlVVVJRHMubGVuZ3RoIH19XHJcblx0XHRcdFx0XHRcdDwvdmlldz4gLS0+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWlmPVwic2hvd01hc2tUeXBlID09PSAnc2VydmljZSdcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdF9pdGVtXCIgc3R5bGU9XCJsaW5lLWhlaWdodDoyLjI7XCI+XHJcblx0XHRcdFx0XHRcdFx0VVVJRDoge3sgaXRlbS51dWlkIH19XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj1cInNob3dNYXNrVHlwZSA9PT0gJ3NlcnZpY2UnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7eyBpdGVtLmlzUHJpbWFyeSA/ICfvvIjkuLvmnI3liqHvvIknIDogJycgfX1cclxuXHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJzaG93TWFza1R5cGUgPT09ICdjaGFyYWN0ZXJpc3RpY3MnXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RfbmFtZVwiPnV1aWQ6e3sgaXRlbS51dWlkIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1saXN0X2l0ZW1cIj7mmK/lkKbmlK/mjIEgcmVhZCDmk43kvZw6e3sgaXRlbS5wcm9wZXJ0aWVzLnJlYWQgfX08L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RfaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdOaYr+WQpuaUr+aMgSB3cml0ZSDmk43kvZw6e3sgaXRlbS5wcm9wZXJ0aWVzLndyaXRlIH19XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbGlzdF9pdGVtXCI+XHJcblx0XHRcdFx0XHRcdFx05piv5ZCm5pSv5oyBIG5vdGlmeSDmk43kvZw6e3sgaXRlbS5wcm9wZXJ0aWVzLm5vdGlmeSB9fVxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWxpc3RfaXRlbVwiPlxyXG5cdFx0XHRcdFx0XHRcdOaYr+WQpuaUr+aMgSBpbmRpY2F0ZSDmk43kvZw6e3sgaXRlbS5wcm9wZXJ0aWVzLmluZGljYXRlIH19XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRpdGxlOiAnYmx1ZXRvb3RoJyxcclxuXHRcdFx0ZGlzYWJsZWQ6IFtmYWxzZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZSwgdHJ1ZV0sXHJcblx0XHRcdG5ld0RldmljZUxvYWQ6IGZhbHNlLFxyXG5cdFx0XHRzZWFyY2hMb2FkOiBmYWxzZSxcclxuXHRcdFx0bWFza1Nob3c6IGZhbHNlLFxyXG5cdFx0XHRlcXVpcG1lbnQ6IFtdLFxyXG5cdFx0XHRhZGFwdGVyU3RhdGU6IHtcclxuXHRcdFx0XHRkaXNjb3ZlcmluZzogZmFsc2UsXHJcblx0XHRcdFx0YXZhaWxhYmxlOiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjb25uZWN0ZWQ6IGZhbHNlLFxyXG5cdFx0XHRzaG93TWFza1R5cGU6ICdkZXZpY2UnLFxyXG5cdFx0XHRzZXJ2aWNlc0RhdGE6IFtdLFxyXG5cdFx0XHRjaGFyYWN0ZXJpc3RpY3NEYXRhOiBbXSxcclxuXHRcdFx0dmFsdWVDaGFuZ2VEYXRhOiB7fSxcclxuXHRcdFx0aXNTdG9wOnRydWUgLFxyXG5cdFx0XHRsaXN0OiBbXVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdHRoaXMub25CTEVDb25uZWN0aW9uU3RhdGVDaGFuZ2UoKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdG1vdmVIYW5kbGUoKSB7fSxcclxuXHRcdC8qKlxyXG5cdFx0ICog5YWz6Zet6YGu572pXHJcblx0XHQgKi9cclxuXHRcdG1hc2tjbG9zZSgpe1xyXG5cdFx0XHR0aGlzLm1hc2tTaG93ID0gZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDpgInmi6norr7lpIdcclxuXHRcdCAqL1xyXG5cdFx0cXVlcnlEZXZpY2VzKCkge1xyXG5cdFx0XHQvLyB0aGlzLm5ld0RldmljZUxvYWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLnNob3dNYXNrVHlwZSA9ICdkZXZpY2UnO1xyXG5cdFx0XHR0aGlzLm1hc2tTaG93ID0gdHJ1ZTtcclxuXHRcdH0sXHJcblx0XHR0YXBRdWVyeShpdGVtKSB7XHJcblx0XHRcdGlmICh0aGlzLnNob3dNYXNrVHlwZSA9PT0gJ2RldmljZScpIHtcclxuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgNCwgZmFsc2UpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmVxdWlwbWVudC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVxdWlwbWVudFswXSA9IGl0ZW07XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuZXF1aXBtZW50LnB1c2goaXRlbSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubmV3RGV2aWNlTG9hZCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnNob3dNYXNrVHlwZSA9PT0gJ3NlcnZpY2UnKSB7XHJcblx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDYsIGZhbHNlKTtcclxuXHRcdFx0XHRpZiAodGhpcy5zZXJ2aWNlc0RhdGEubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5zZXJ2aWNlc0RhdGFbMF0gPSBpdGVtO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNlcnZpY2VzRGF0YS5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodGhpcy5zaG93TWFza1R5cGUgPT09ICdjaGFyYWN0ZXJpc3RpY3MnKSB7XHJcblx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDcsIGZhbHNlKTtcclxuXHRcdFx0XHRpZiAodGhpcy5jaGFyYWN0ZXJpc3RpY3NEYXRhLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdHRoaXMuY2hhcmFjdGVyaXN0aWNzRGF0YVswXSA9IGl0ZW07XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuY2hhcmFjdGVyaXN0aWNzRGF0YS5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm1hc2tTaG93ID0gZmFsc2U7XHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDliJ3lp4vljJbok53niZnorr7lpIdcclxuXHRcdCAqL1xyXG5cdFx0b3BlbkJsdWV0b290aEFkYXB0ZXIoKSB7XHJcblx0XHRcdHVuaS5vcGVuQmx1ZXRvb3RoQWRhcHRlcih7XHJcblx0XHRcdFx0c3VjY2VzczogZSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5Yid5aeL5YyW6JOd54mZ5oiQ5YqfOicgKyBlLmVyck1zZyk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlKSk7XHJcblx0XHRcdFx0XHR0aGlzLmlzU3RvcCA9IGZhbHNlIDtcclxuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAxLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMTAsIGZhbHNlKTtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Qmx1ZXRvb3RoQWRhcHRlclN0YXRlKCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiBlID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5Yid5aeL5YyW6JOd54mZ5aSx6LSl77yM6ZSZ6K+v56CB77yaJyArIChlLmVyckNvZGUgfHwgZS5lcnJNc2cpKTtcclxuXHRcdFx0XHRcdGlmIChlLmVyckNvZGUgIT09IDApIHtcclxuXHRcdFx0XHRcdFx0aW5pdFR5cGVzKGUuZXJyQ29kZSxlLmVyck1zZyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvKipcclxuXHRcdCAqIOW8gOWni+aQnOe0ouiTneeJmeiuvuWkh1xyXG5cdFx0ICovXHJcblx0XHRzdGFydEJsdWV0b290aERldmljZXNEaXNjb3ZlcnkoKSB7XHJcblx0XHRcdHVuaS5zdGFydEJsdWV0b290aERldmljZXNEaXNjb3Zlcnkoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGUgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+W8gOWni+aQnOe0ouiTneeJmeiuvuWkhzonICsgZS5lcnJNc2cpO1xyXG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hMb2FkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAxLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAyLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0dGhpcy5vbkJsdWV0b290aERldmljZUZvdW5kKCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiBlID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmkJzntKLok53niZnorr7lpIflpLHotKXvvIzplJnor6/noIHvvJonICsgZS5lcnJDb2RlKTtcclxuXHRcdFx0XHRcdGlmIChlLmVyckNvZGUgIT09IDApIHtcclxuXHRcdFx0XHRcdFx0aW5pdFR5cGVzKGUuZXJyQ29kZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvKipcclxuXHRcdCAqIOWBnOatouaQnOe0ouiTneeJmeiuvuWkh1xyXG5cdFx0ICovXHJcblx0XHRzdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh0eXBlcykge1xyXG5cdFx0XHR1bmkuc3RvcEJsdWV0b290aERldmljZXNEaXNjb3Zlcnkoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGUgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+WBnOatouaQnOe0ouiTneeJmeiuvuWkhzonICsgZS5lcnJNc2cpO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVzKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAxLCB0cnVlKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAxLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHQvLyB0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLnNlYXJjaExvYWQgPSBmYWxzZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IGUgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+WBnOatouaQnOe0ouiTneeJmeiuvuWkh+Wksei0pe+8jOmUmeivr+egge+8micgKyBlLmVyckNvZGUpO1xyXG5cdFx0XHRcdFx0aWYgKGUuZXJyQ29kZSAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRpbml0VHlwZXMoZS5lcnJDb2RlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICog5Y+R546w5aSW5Zu06K6+5aSHXHJcblx0XHQgKi9cclxuXHRcdG9uQmx1ZXRvb3RoRGV2aWNlRm91bmQoKSB7XHJcblx0XHRcdHVuaS5vbkJsdWV0b290aERldmljZUZvdW5kKGRldmljZXMgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCflvIDlp4vnm5HlkKzlr7vmib7liLDmlrDorr7lpIfnmoTkuovku7YnKTtcclxuXHRcdFx0XHQvLyB0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMywgZmFsc2UpO1xyXG5cdFx0XHRcdHRoaXMuZ2V0Qmx1ZXRvb3RoRGV2aWNlcygpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvKipcclxuXHRcdCAqIOiOt+WPluWcqOiTneeJmeaooeWdl+eUn+aViOacn+mXtOaJgOacieW3suWPkeeOsOeahOiTneeJmeiuvuWkh+OAguWMheaLrOW3sue7j+WSjOacrOacuuWkhOS6jui/nuaOpeeKtuaAgeeahOiuvuWkh+OAglxyXG5cdFx0ICovXHJcblx0XHRnZXRCbHVldG9vdGhEZXZpY2VzKCkge1xyXG5cdFx0XHR1bmkuZ2V0Qmx1ZXRvb3RoRGV2aWNlcyh7XHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubmV3RGV2aWNlTG9hZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPluiTneeJmeiuvuWkh+aIkOWKnzonICsgcmVzLmVyck1zZyk7XHJcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKVxyXG5cdFx0XHRcdFx0dGhpcy5saXN0ID0gcmVzLmRldmljZXM7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiBlID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfojrflj5bok53niZnorr7lpIfplJnor6/vvIzplJnor6/noIHvvJonICsgZS5lcnJDb2RlKTtcclxuXHRcdFx0XHRcdGlmIChlLmVyckNvZGUgIT09IDApIHtcclxuXHRcdFx0XHRcdFx0aW5pdFR5cGVzKGUuZXJyQ29kZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvKipcclxuXHRcdCAqIOiOt+WPluacrOacuuiTneeJmemAgumFjeWZqOeKtuaAgVxyXG5cdFx0ICovXHJcblx0XHRnZXRCbHVldG9vdGhBZGFwdGVyU3RhdGUoKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCctLS0+Jyk7XHJcblx0XHRcdHVuaS5nZXRCbHVldG9vdGhBZGFwdGVyU3RhdGUoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHRcdFx0XHRcdHRoaXMuYWRhcHRlclN0YXRlID0gcmVzO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogZSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6I635Y+W5pys5py66JOd54mZ6YCC6YWN5Zmo54q25oCB5aSx6LSl77yM6ZSZ6K+v56CB77yaJyArIGUuZXJyQ29kZSk7XHJcblx0XHRcdFx0XHRpZiAoZS5lcnJDb2RlICE9PSAwKSB7XHJcblx0XHRcdFx0XHRcdGluaXRUeXBlcyhlLmVyckNvZGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDov57mjqXkvY7lip/ogJfok53niZlcclxuXHRcdCAqL1xyXG5cdFx0Y3JlYXRlQkxFQ29ubmVjdGlvbigpIHtcclxuXHRcdFx0bGV0IGRldmljZUlkID0gdGhpcy5lcXVpcG1lbnRbMF0uZGV2aWNlSWQ7XHJcblx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdHRpdGxlOiAn6L+e5o6l6JOd54mZLi4uJyxcclxuXHRcdFx0XHRpY29uOiAnbG9hZGluZycsXHJcblx0XHRcdFx0ZHVyYXRpb246IDk5OTk5XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR1bmkuY3JlYXRlQkxFQ29ubmVjdGlvbih7XHJcblx0XHRcdFx0Ly8g6L+Z6YeM55qEIGRldmljZUlkIOmcgOimgeW3sue7j+mAmui/hyBjcmVhdGVCTEVDb25uZWN0aW9uIOS4juWvueW6lOiuvuWkh+W7uueri+mTvuaOpVxyXG5cdFx0XHRcdGRldmljZUlkLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+i/nuaOpeiTneeJmeaIkOWKnzonICsgcmVzLmVyck1zZyk7XHJcblx0XHRcdFx0XHQvLyDov57mjqXorr7lpIflkI7mlq3lvIDmkJzntKIg5bm25LiU5LiN6IO95pCc57Si6K6+5aSHXHJcblx0XHRcdFx0XHR0aGlzLnN0b3BCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5KHRydWUpO1xyXG5cdFx0XHRcdFx0dW5pLmhpZGVUb2FzdCgpO1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6L+e5o6l5oiQ5YqfJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxyXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgNCwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgNSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDksIGZhbHNlKTtcclxuXHRcdFx0XHRcdHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IGUgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+i/nuaOpeS9juWKn+iAl+iTneeJmeWksei0pe+8jOmUmeivr+egge+8micgKyBlLmVyckNvZGUpO1xyXG5cdFx0XHRcdFx0aWYgKGUuZXJyQ29kZSAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRpbml0VHlwZXMoZS5lcnJDb2RlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICog5pat5byA5LiO5L2O5Yqf6ICX6JOd54mZ6K6+5aSH55qE6L+e5o6lXHJcblx0XHQgKi9cclxuXHRcdGNsb3NlQkxFQ29ubmVjdGlvbigpIHtcclxuXHRcdFx0bGV0IGRldmljZUlkID0gdGhpcy5lcXVpcG1lbnRbMF0uZGV2aWNlSWQ7XHJcblx0XHRcdHVuaS5jbG9zZUJMRUNvbm5lY3Rpb24oe1xyXG5cdFx0XHRcdGRldmljZUlkLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aWreW8gOS9juWKn+iAl+iTneeJmeaIkOWKnzonICsgcmVzLmVyck1zZyk7XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDMsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDQsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDUsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDYsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDcsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDgsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDksIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5lcXVpcG1lbnQgPSBbXTtcclxuXHRcdFx0XHRcdHRoaXMuc2VydmljZXNEYXRhID0gW107XHJcblx0XHRcdFx0XHR0aGlzLmNoYXJhY3RlcmlzdGljc0RhdGEgPSBbXTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IGUgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aWreW8gOS9juWKn+iAl+iTneeJmeaIkOWKn++8jOmUmeivr+egge+8micgKyBlLmVyckNvZGUpO1xyXG5cdFx0XHRcdFx0aWYgKGUuZXJyQ29kZSAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRpbml0VHlwZXMoZS5lcnJDb2RlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICog6I635Y+W5omA5pyJ5pyN5YqhXHJcblx0XHQgKi9cclxuXHRcdGdldEJMRURldmljZVNlcnZpY2VzKCkge1xyXG5cdFx0XHRsZXQgZGV2aWNlSWQgPSB0aGlzLmVxdWlwbWVudFswXS5kZXZpY2VJZDtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPluaJgOacieacjeWKoeeahCB1dWlkOicgKyBkZXZpY2VJZCk7XHJcblxyXG5cdFx0XHR1bmkuZ2V0QkxFRGV2aWNlU2VydmljZXMoe1xyXG5cdFx0XHRcdC8vIOi/memHjOeahCBkZXZpY2VJZCDpnIDopoHlt7Lnu4/pgJrov4cgY3JlYXRlQkxFQ29ubmVjdGlvbiDkuI7lr7nlupTorr7lpIflu7rnq4vpk77mjqVcclxuXHRcdFx0XHRkZXZpY2VJZCxcclxuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzLnNlcnZpY2VzKSk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6I635Y+W6K6+5aSH5pyN5Yqh5oiQ5YqfOicgKyByZXMuZXJyTXNnKTtcclxuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA3LCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA4LCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd01hc2tUeXBlID0gJ3NlcnZpY2UnO1xyXG5cdFx0XHRcdFx0dGhpcy5saXN0ID0gcmVzLnNlcnZpY2VzO1xyXG5cclxuXHRcdFx0XHRcdHRoaXMuY2hhcmFjdGVyaXN0aWNzRGF0YSA9IFtdO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMubGlzdC5sZW5ndGggPD0gMCkge1xyXG5cdFx0XHRcdFx0XHR0b2FzdCgn6I635Y+W5pyN5Yqh5aSx6LSl77yM6K+36YeN6K+VIScpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLm1hc2tTaG93ID0gdHJ1ZTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IGUgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPluiuvuWkh+acjeWKoeWksei0pe+8jOmUmeivr+egge+8micgKyBlLmVyckNvZGUpO1xyXG5cdFx0XHRcdFx0aWYgKGUuZXJyQ29kZSAhPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRpbml0VHlwZXMoZS5lcnJDb2RlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICog6I635Y+W5p+Q5Liq5pyN5Yqh5LiL55qE5omA5pyJ54m55b6B5YC8XHJcblx0XHQgKi9cclxuXHRcdGdldEJMRURldmljZUNoYXJhY3RlcmlzdGljcygpIHtcclxuXHRcdFx0bGV0IGRldmljZUlkID0gdGhpcy5lcXVpcG1lbnRbMF0uZGV2aWNlSWQ7XHJcblx0XHRcdGxldCBzZXJ2aWNlSWQgPSB0aGlzLnNlcnZpY2VzRGF0YVswXS51dWlkO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkZXZpY2VJZCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHNlcnZpY2VJZCk7XHJcblx0XHRcdHVuaS5nZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3Moe1xyXG5cdFx0XHRcdC8vIOi/memHjOeahCBkZXZpY2VJZCDpnIDopoHlt7Lnu4/pgJrov4cgY3JlYXRlQkxFQ29ubmVjdGlvbiDkuI7lr7nlupTorr7lpIflu7rnq4vpk77mjqVcclxuXHRcdFx0XHRkZXZpY2VJZCxcclxuXHRcdFx0XHQvLyDov5nph4znmoQgc2VydmljZUlkIOmcgOimgeWcqCBnZXRCTEVEZXZpY2VTZXJ2aWNlcyDmjqXlj6PkuK3ojrflj5ZcclxuXHRcdFx0XHRzZXJ2aWNlSWQsXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+iOt+WPlueJueW+geWAvOaIkOWKnzonICsgcmVzLmVyck1zZyk7XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgNywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlQ2hhbmdlRGF0YSA9IHt9O1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93TWFza1R5cGUgPSAnY2hhcmFjdGVyaXN0aWNzJztcclxuXHRcdFx0XHRcdHRoaXMubGlzdCA9IHJlcy5jaGFyYWN0ZXJpc3RpY3M7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5saXN0Lmxlbmd0aCA8PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRvYXN0KCfojrflj5bnibnlvoHlgLzlpLHotKXvvIzor7fph43or5UhJyk7XHJcblx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMubWFza1Nob3cgPSB0cnVlO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogZSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6I635Y+W54m55b6B5YC85aSx6LSl77yM6ZSZ6K+v56CB77yaJyArIGUuZXJyQ29kZSk7XHJcblx0XHRcdFx0XHRpZiAoZS5lcnJDb2RlICE9PSAwKSB7XHJcblx0XHRcdFx0XHRcdGluaXRUeXBlcyhlLmVyckNvZGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDnm5HlkKzkvY7lip/ogJfok53niZnov57mjqXnirbmgIHnmoTmlLnlj5jkuovku7bjgILljIXmi6zlvIDlj5HogIXkuLvliqjov57mjqXmiJbmlq3lvIDov57mjqXvvIzorr7lpIfkuKLlpLHvvIzov57mjqXlvILluLjmlq3lvIDnrYnnrYlcclxuXHRcdCAqL1xyXG5cdFx0b25CTEVDb25uZWN0aW9uU3RhdGVDaGFuZ2UoKSB7XHJcblx0XHRcdHVuaS5vbkJMRUNvbm5lY3Rpb25TdGF0ZUNoYW5nZShyZXMgPT4ge1xyXG5cdFx0XHRcdC8vIOivpeaWueazleWbnuiwg+S4reWPr+S7peeUqOS6juWkhOeQhui/nuaOpeaEj+WkluaWreW8gOetieW8guW4uOaDheWGtVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGDok53niZnov57mjqXnirbmgIEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0+YCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdFx0aWYgKCFyZXMuY29ubmVjdGVkKSB7XHJcblx0XHRcdFx0XHRpZih0aGlzLmlzU3RvcCkgcmV0dXJuIDtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmlq3lvIDkvY7lip/ogJfok53niZnmiJDlip86Jyk7XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMSwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDMsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDQsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDUsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDYsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDcsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDgsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDksIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hMb2FkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmVxdWlwbWVudCA9IFtdO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXJ2aWNlc0RhdGEgPSBbXTtcclxuXHRcdFx0XHRcdHRoaXMuY2hhcmFjdGVyaXN0aWNzRGF0YSA9IFtdO1xyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZUNoYW5nZURhdGEgPSB7fTtcclxuXHRcdFx0XHRcdHRvYXN0KCflt7Lnu4/mlq3lvIDlvZPliY3ok53niZnov57mjqUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICog6K+75Y+W5L2O5Yqf6ICX6JOd54mZ6K6+5aSH55qE54m55b6B5YC855qE5LqM6L+b5Yi25pWw5o2u5YC844CC5rOo5oSP77ya5b+F6aG76K6+5aSH55qE54m55b6B5YC85pSv5oyBIHJlYWQg5omN5Y+v5Lul5oiQ5Yqf6LCD55SoXHJcblx0XHQgKi9cclxuXHRcdHJlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKCkge1xyXG5cdFx0XHRsZXQgZGV2aWNlSWQgPSB0aGlzLmVxdWlwbWVudFswXS5kZXZpY2VJZDtcclxuXHRcdFx0bGV0IHNlcnZpY2VJZCA9IHRoaXMuc2VydmljZXNEYXRhWzBdLnV1aWQ7XHJcblx0XHRcdGxldCBjaGFyYWN0ZXJpc3RpY0lkID0gdGhpcy5jaGFyYWN0ZXJpc3RpY3NEYXRhWzBdLnV1aWQ7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRldmljZUlkKTtcclxuXHRcdFx0Y29uc29sZS5sb2coc2VydmljZUlkKTtcclxuXHRcdFx0Y29uc29sZS5sb2coY2hhcmFjdGVyaXN0aWNJZCk7XHJcblx0XHRcdHVuaS5yZWFkQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSh7XHJcblx0XHRcdFx0Ly8g6L+Z6YeM55qEIGRldmljZUlkIOmcgOimgeW3sue7j+mAmui/hyBjcmVhdGVCTEVDb25uZWN0aW9uIOS4juWvueW6lOiuvuWkh+W7uueri+mTvuaOpVxyXG5cdFx0XHRcdGRldmljZUlkLFxyXG5cdFx0XHRcdC8vIOi/memHjOeahCBzZXJ2aWNlSWQg6ZyA6KaB5ZyoIGdldEJMRURldmljZVNlcnZpY2VzIOaOpeWPo+S4reiOt+WPllxyXG5cdFx0XHRcdHNlcnZpY2VJZCxcclxuXHRcdFx0XHQvLyDov5nph4znmoQgY2hhcmFjdGVyaXN0aWNJZCDpnIDopoHlnKggZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzIOaOpeWPo+S4reiOt+WPllxyXG5cdFx0XHRcdGNoYXJhY3RlcmlzdGljSWQsXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfor7vlj5borr7lpIfmlbDmja7lgLzmiJDlip8nKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdFx0XHRcdFx0dGhpcy5ub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlKCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsKGUpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfor7vlj5borr7lpIfmlbDmja7lgLzlpLHotKXvvIzplJnor6/noIHvvJonICsgZS5lcnJDb2RlKTtcclxuXHRcdFx0XHRcdGlmIChlLmVyckNvZGUgIT09IDApIHtcclxuXHRcdFx0XHRcdFx0aW5pdFR5cGVzKGUuZXJyQ29kZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5vbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoKTtcclxuXHRcdH0sXHJcblx0XHQvKipcclxuXHRcdCAqIOebkeWQrOS9juWKn+iAl+iTneeJmeiuvuWkh+eahOeJueW+geWAvOWPmOWMluS6i+S7tuOAguW/hemhu+WFiOWQr+eUqCBub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlIOaOpeWPo+aJjeiDveaOpeaUtuWIsOiuvuWkh+aOqOmAgeeahCBub3RpZmljYXRpb27jgIJcclxuXHRcdCAqL1xyXG5cdFx0b25CTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlKCkge1xyXG5cdFx0XHQvLyDlv4XpobvlnKjov5nph4znmoTlm57osIPmiY3og73ojrflj5ZcclxuXHRcdFx0dW5pLm9uQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZShjaGFyYWN0ZXJpc3RpYyA9PiB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+ebkeWQrOS9juWKn+iAl+iTneeJmeiuvuWkh+eahOeJueW+geWAvOWPmOWMluS6i+S7tuaIkOWKnycpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNoYXJhY3RlcmlzdGljKSk7XHJcblx0XHRcdFx0dGhpcy52YWx1ZUNoYW5nZURhdGEgPSBjaGFyYWN0ZXJpc3RpYztcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0LyoqXHJcblx0XHQgKiDorqLpmIXmk43kvZzmiJDlip/lkI7pnIDopoHorr7lpIfkuLvliqjmm7TmlrDnibnlvoHlgLznmoQgdmFsdWXvvIzmiY3kvJrop6blj5EgdW5pLm9uQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSDlm57osIPjgIJcclxuXHRcdCAqL1xyXG5cdFx0bm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSgpIHtcclxuXHRcdFx0bGV0IGRldmljZUlkID0gdGhpcy5lcXVpcG1lbnRbMF0uZGV2aWNlSWQ7XHJcblx0XHRcdGxldCBzZXJ2aWNlSWQgPSB0aGlzLnNlcnZpY2VzRGF0YVswXS51dWlkO1xyXG5cdFx0XHRsZXQgY2hhcmFjdGVyaXN0aWNJZCA9IHRoaXMuY2hhcmFjdGVyaXN0aWNzRGF0YVswXS51dWlkO1xyXG5cdFx0XHRsZXQgbm90aWZ5ID0gdGhpcy5jaGFyYWN0ZXJpc3RpY3NEYXRhWzBdLnByb3BlcnRpZXMubm90aWZ5O1xyXG5cdFx0XHRjb25zb2xlLmxvZyhkZXZpY2VJZCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHNlcnZpY2VJZCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKGNoYXJhY3RlcmlzdGljSWQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhub3RpZnkpO1xyXG5cdFx0XHR1bmkubm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSh7XHJcblx0XHRcdFx0c3RhdGU6IHRydWUsIC8vIOWQr+eUqCBub3RpZnkg5Yqf6IO9XHJcblx0XHRcdFx0Ly8g6L+Z6YeM55qEIGRldmljZUlkIOmcgOimgeW3sue7j+mAmui/hyBjcmVhdGVCTEVDb25uZWN0aW9uIOS4juWvueW6lOiuvuWkh+W7uueri+mTvuaOpVxyXG5cdFx0XHRcdGRldmljZUlkLFxyXG5cdFx0XHRcdC8vIOi/memHjOeahCBzZXJ2aWNlSWQg6ZyA6KaB5ZyoIGdldEJMRURldmljZVNlcnZpY2VzIOaOpeWPo+S4reiOt+WPllxyXG5cdFx0XHRcdHNlcnZpY2VJZCxcclxuXHRcdFx0XHQvLyDov5nph4znmoQgY2hhcmFjdGVyaXN0aWNJZCDpnIDopoHlnKggZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzIOaOpeWPo+S4reiOt+WPllxyXG5cdFx0XHRcdGNoYXJhY3RlcmlzdGljSWQsXHJcblx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlIHN1Y2Nlc3M6JyArIHJlcy5lcnJNc2cpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHQvKipcclxuXHRcdCAqIFx05pat5byA6JOd54mZ5qih5Z2XXHJcblx0XHQgKi9cclxuXHRcdGNsb3NlQmx1ZXRvb3RoQWRhcHRlcihPQkpFQ1QpIHtcclxuXHRcdFx0dW5pLmNsb3NlQmx1ZXRvb3RoQWRhcHRlcih7XHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmlq3lvIDok53niZnmqKHlnZfmiJDlip8nKTtcclxuXHRcdFx0XHRcdHRoaXMuaXNTdG9wID0gdHJ1ZSA7XHJcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5kaXNhYmxlZCwgMCwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDEsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDIsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDMsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDQsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDUsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDYsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDcsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDgsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDksIHRydWUpO1xyXG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDEwLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRoaXMuZXF1aXBtZW50ID0gW107XHJcblx0XHRcdFx0XHR0aGlzLnNlcnZpY2VzRGF0YSA9IFtdO1xyXG5cdFx0XHRcdFx0dGhpcy5jaGFyYWN0ZXJpc3RpY3NEYXRhID0gW107XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlQ2hhbmdlRGF0YSA9IHt9O1xyXG5cdFx0XHRcdFx0dGhpcy5hZGFwdGVyU3RhdGUgPSBbXTtcclxuXHRcdFx0XHRcdHRoaXMuc2VhcmNoTG9hZCA9ZmFsc2U7XHJcblx0XHRcdFx0XHR0b2FzdCgn5pat5byA6JOd54mZ5qih5Z2XJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG4vKipcclxuICog5Yik5pat5Yid5aeL5YyW6JOd54mZ54q25oCBXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0VHlwZXMoY29kZSwgZXJyTXNnKSB7XHJcblx0c3dpdGNoIChjb2RlKSB7XHJcblx0XHRjYXNlIDEwMDAwOlxyXG5cdFx0XHR0b2FzdCgn5pyq5Yid5aeL5YyW6JOd54mZ6YCC6YWN5ZmoJyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAxMDAwMTpcclxuXHRcdFx0dG9hc3QoJ+acquajgOa1i+WIsOiTneeJme+8jOivt+aJk+W8gOiTneeJmemHjeivle+8gScpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMTAwMDI6XHJcblx0XHRcdHRvYXN0KCfmsqHmnInmib7liLDmjIflrprorr7lpIcnKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDEwMDAzOlxyXG5cdFx0XHR0b2FzdCgn6L+e5o6l5aSx6LSlJyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAxMDAwNDpcclxuXHRcdFx0dG9hc3QoJ+ayoeacieaJvuWIsOaMh+WumuacjeWKoScpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMTAwMDU6XHJcblx0XHRcdHRvYXN0KCfmsqHmnInmib7liLDmjIflrprnibnlvoHlgLwnKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDEwMDA2OlxyXG5cdFx0XHR0b2FzdCgn5b2T5YmN6L+e5o6l5bey5pat5byAJyk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAxMDAwNzpcclxuXHRcdFx0dG9hc3QoJ+W9k+WJjeeJueW+geWAvOS4jeaUr+aMgeatpOaTjeS9nCcpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMTAwMDg6XHJcblx0XHRcdHRvYXN0KCflhbbkvZnmiYDmnInns7vnu5/kuIrmiqXnmoTlvILluLgnKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDEwMDA5OlxyXG5cdFx0XHR0b2FzdCgnQW5kcm9pZCDns7vnu5/nibnmnInvvIzns7vnu5/niYjmnKzkvY7kuo4gNC4zIOS4jeaUr+aMgSBCTEUnKTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHR0b2FzdChlcnJNc2cpO1xyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOW8ueWHuuahhuWwgeijhVxyXG4gKi9cclxuZnVuY3Rpb24gdG9hc3QoY29udGVudCwgc2hvd0NhbmNlbCA9IGZhbHNlKSB7XHJcblx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHR0aXRsZTogJ+aPkOekuicsXHJcblx0XHRjb250ZW50LFxyXG5cdFx0c2hvd0NhbmNlbFxyXG5cdH0pO1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuLnVuaS10aXRsZSB7XHJcblx0Lyogd2lkdGg6IDEwMCU7ICovXHJcblx0LyogaGVpZ2h0OiA4MHJweDsgKi9cclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi51bmktbWFzayB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5cdHBhZGRpbmc6IDAgMzBycHg7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnVuaS1zY3JvbGxfYm94IHtcclxuXHRoZWlnaHQ6IDcwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDIwcnB4O1xyXG59XHJcbi51bmktbGlzdC1ib3gge1xyXG5cdG1hcmdpbjogMCAyMHJweDtcclxuXHRwYWRkaW5nOiAxNXJweCAwO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCAjZjVmNWY1IHNvbGlkO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnVuaS1saXN0Omxhc3QtY2hpbGQge1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG4udW5pLWxpc3RfbmFtZSB7XHJcblx0Zm9udC1zaXplOiAzMHJweDtcclxuXHRjb2xvcjogIzMzMztcclxufVxyXG4udW5pLWxpc3RfaXRlbSB7XHJcblx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRjb2xvcjogIzU1NTtcclxuXHRsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4udW5pLXN1Y2Nlc3NfYm94IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHRib3R0b206IDA7XHJcblx0bWluLWhlaWdodDogMTAwcnB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRib3JkZXItdG9wOiAxcHggI2VlZSBzb2xpZDtcclxufVxyXG4udW5pLXN1Y2Nlc3Nfc3ViIHtcclxuXHQvKiB3aWR0aDogMTAwJSU7ICovXHJcblx0aGVpZ2h0OiAxMDBycHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwIDMwcnB4O1xyXG59XHJcbi51bmktY2xvc2VfYnV0dG9uIHtcclxuXHRwYWRkaW5nOiAwIDIwcnB4O1xyXG5cdGhlaWdodDogNjBycHg7XHJcblx0bGluZS1oZWlnaHQ6IDYwcnB4O1xyXG5cdGJhY2tncm91bmQ6ICNjZTNjMzk7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBycHg7XHJcbn1cclxuLnVuaS1zdWNjZXNzX2NvbnRlbnQge1xyXG5cdGhlaWdodDogNjAwcnB4O1xyXG5cdG1hcmdpbjogMzBycHg7XHJcblx0bWFyZ2luLXRvcDogMDtcclxuXHRib3JkZXI6IDFweCAjZWVlIHNvbGlkO1xyXG5cdHBhZGRpbmc6IDMwcnB4O1xyXG59XHJcbi51bmktY29udGVudF9saXN0IHtcclxuXHRwYWRkaW5nLWJvdHRvbTogMTBycHg7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4ICNmNWY1ZjUgc29saWQ7XHJcbn1cclxuLnVuaS10aXBzIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRjb2xvcjogIzY2NjtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vYmx1ZXRvb3RoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vYmx1ZXRvb3RoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYwNTE3NzgxNjM3OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=