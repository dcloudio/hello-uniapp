(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/API/canvas/canvas"],{

/***/ 387:
/*!**************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/main.js?{"page":"pages%2FAPI%2Fcanvas%2Fcanvas"} ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _canvas = _interopRequireDefault(__webpack_require__(/*! ./pages/API/canvas/canvas.vue */ 388));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_canvas.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 388:
/*!*****************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/canvas/canvas.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_vue_vue_type_template_id_98010b1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.vue?vue&type=template&id=98010b1e& */ 389);
/* harmony import */ var _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas.vue?vue&type=script&lang=js& */ 391);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas.vue?vue&type=style&index=0&lang=css& */ 393);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _canvas_vue_vue_type_template_id_98010b1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _canvas_vue_vue_type_template_id_98010b1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _canvas_vue_vue_type_template_id_98010b1e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/API/canvas/canvas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 389:
/*!************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/canvas/canvas.vue?vue&type=template&id=98010b1e& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_template_id_98010b1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./canvas.vue?vue&type=template&id=98010b1e& */ 390);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_template_id_98010b1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_template_id_98010b1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_template_id_98010b1e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_template_id_98010b1e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 390:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/canvas/canvas.vue?vue&type=template&id=98010b1e& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 391:
/*!******************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/canvas/canvas.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./canvas.vue?vue&type=script&lang=js& */ 392);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 392:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/canvas/canvas.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var context = null;var _default =
{
  data: function data() {
    return {
      title: 'createContext',
      names: ["rotate", "scale", "reset", "translate", "save", "restore", "drawImage", "fillText", "fill",
      "stroke", "clearRect", "beginPath", "closePath", "moveTo", "lineTo", "rect", "arc",
      "quadraticCurveTo", "bezierCurveTo", "setFillStyle", "setStrokeStyle", "setGlobalAlpha",
      "setShadow", "setFontSize", "setLineCap", "setLineJoin", "setLineWidth", "setMiterLimit"] };


  },
  onReady: function onReady() {
    context = uni.createCanvasContext('canvas', this);
  },
  methods: {
    toTempFilePath: function toTempFilePath() {
      uni.canvasToTempFilePath({
        canvasId: 'canvas',
        success: function success(res) {
          console.log(res.tempFilePath);
        },
        fail: function fail(err) {
          console.error(JSON.stringify(err));
        } });

    },
    handleCanvasButton: function handleCanvasButton(name) {
      this[name] && this[name]();
    },
    rotate: function rotate() {
      context.beginPath();
      context.rotate(10 * Math.PI / 180);
      context.rect(225, 75, 20, 10);
      context.fill();
      context.draw();
    },
    scale: function scale() {
      context.beginPath();
      context.rect(25, 25, 50, 50);
      context.stroke();

      context.scale(2, 2);

      context.beginPath();
      context.rect(25, 25, 50, 50);
      context.stroke();
      context.draw();
    },
    reset: function reset() {
      context.beginPath();

      context.setFillStyle('#000000');
      context.setStrokeStyle('#000000');
      context.setFontSize(10);
      context.setGlobalAlpha(1);
      context.setShadow(0, 0, 0, 'rgba(0, 0, 0, 0)');

      context.setLineCap('butt');
      context.setLineJoin('miter');
      context.setLineWidth(1);
      context.setMiterLimit(10);
      context.draw();
    },
    translate: function translate() {
      context.beginPath();
      context.rect(10, 10, 100, 50);
      context.fill();

      context.translate(70, 70);

      context.beginPath();
      context.fill();
      context.draw();
    },
    save: function save() {
      context.beginPath();
      context.setStrokeStyle('#00ff00');
      context.save();

      context.scale(2, 2);
      context.setStrokeStyle('#ff0000');
      context.rect(0, 0, 100, 100);
      context.stroke();
      context.restore();

      context.rect(0, 0, 50, 50);
      context.stroke();
      context.draw();
    },
    restore: function restore() {
      [3, 2, 1].forEach(function (item) {
        context.beginPath();
        context.save();
        context.scale(item, item);
        context.rect(10, 10, 100, 100);
        context.stroke();
        context.restore();
      });
      context.draw();
    },
    drawImage: function drawImage() {




      context.drawImage('../../../static/uni.png', 0, 0);

      context.draw();
    },
    fillText: function fillText() {
      context.setStrokeStyle('#ff0000');

      context.beginPath();
      context.moveTo(0, 10);
      context.lineTo(300, 10);
      context.stroke();
      // context.save()
      // context.scale(1.5, 1.5)
      // context.translate(20, 20)
      context.setFontSize(10);
      context.fillText('Hello World', 0, 30);
      context.setFontSize(20);
      context.fillText('Hello World', 100, 30);

      // context.restore()

      context.beginPath();
      context.moveTo(0, 30);
      context.lineTo(300, 30);
      context.stroke();
      context.draw();
    },
    fill: function fill() {
      context.beginPath();
      context.rect(20, 20, 150, 100);
      context.setStrokeStyle('#00ff00');
      context.fill();
      context.draw();
    },
    stroke: function stroke() {
      context.beginPath();
      context.moveTo(20, 20);
      context.lineTo(20, 100);
      context.lineTo(70, 100);
      context.setStrokeStyle('#00ff00');
      context.stroke();
      context.draw();
    },
    clearRect: function clearRect() {
      context.setFillStyle('#ff0000');
      context.beginPath();
      context.rect(0, 0, 300, 150);
      context.fill();
      context.clearRect(20, 20, 100, 50);
      context.draw();
    },
    beginPath: function beginPath() {
      context.beginPath();
      context.setLineWidth(5);
      context.setStrokeStyle('#ff0000');
      context.moveTo(0, 75);
      context.lineTo(250, 75);
      context.stroke();
      context.beginPath();
      context.setStrokeStyle('#0000ff');
      context.moveTo(50, 0);
      context.lineTo(150, 130);
      context.stroke();
      context.draw();
    },
    closePath: function closePath() {
      context.beginPath();
      context.setLineWidth(1);
      context.moveTo(20, 20);
      context.lineTo(20, 100);
      context.lineTo(70, 100);
      context.closePath();
      context.stroke();
      context.draw();
    },
    moveTo: function moveTo() {
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(300, 150);
      context.stroke();
      context.draw();
    },
    lineTo: function lineTo() {
      context.beginPath();
      context.moveTo(20, 20);
      context.lineTo(20, 100);
      context.lineTo(70, 100);
      context.stroke();
      context.draw();
    },
    rect: function rect() {
      context.beginPath();
      context.rect(20, 20, 150, 100);
      context.stroke();
      context.draw();
    },
    arc: function arc() {
      context.beginPath();
      context.setLineWidth(2);
      context.arc(75, 75, 50, 0, Math.PI * 2, true);
      context.moveTo(110, 75);
      context.arc(75, 75, 35, 0, Math.PI, false);
      context.moveTo(65, 65);
      context.arc(60, 65, 5, 0, Math.PI * 2, true);
      context.moveTo(95, 65);
      context.arc(90, 65, 5, 0, Math.PI * 2, true);
      context.stroke();
      context.draw();
    },
    quadraticCurveTo: function quadraticCurveTo() {
      context.beginPath();
      context.moveTo(20, 20);
      context.quadraticCurveTo(20, 100, 200, 20);
      context.stroke();
      context.draw();
    },
    bezierCurveTo: function bezierCurveTo() {
      context.beginPath();
      context.moveTo(20, 20);
      context.bezierCurveTo(20, 100, 200, 100, 200, 20);
      context.stroke();
      context.draw();
    },
    setFillStyle: function setFillStyle() {
      ['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {
        context.setFillStyle(item);
        context.beginPath();
        context.rect(0 + 75 * index, 0, 50, 50);
        context.fill();
      });
      context.draw();
    },
    setStrokeStyle: function setStrokeStyle() {
      ['#fef957', 'rgb(242,159,63)', 'rgb(242,117,63)', '#e87e51'].forEach(function (item, index) {
        context.setStrokeStyle(item);
        context.beginPath();
        context.rect(0 + 75 * index, 0, 50, 50);
        context.stroke();
      });
      context.draw();
    },
    setGlobalAlpha: function setGlobalAlpha() {
      context.setFillStyle('#000000');
      [1, 0.5, 0.1].forEach(function (item, index) {
        context.setGlobalAlpha(item);
        context.beginPath();
        context.rect(0 + 75 * index, 0, 50, 50);
        context.fill();
      });
      context.draw();
      context.setGlobalAlpha(1);
    },
    setShadow: function setShadow() {
      context.beginPath();
      context.setShadow(10, 10, 10, 'rgba(0, 0, 0, 199)');
      context.rect(10, 10, 100, 100);
      context.fill();
      context.draw();
    },
    setFontSize: function setFontSize() {
      [10, 20, 30, 40].forEach(function (item, index) {
        context.setFontSize(item);
        context.fillText('Hello, world', 20, 20 + 40 * index);
      });
      context.draw();
    },
    setLineCap: function setLineCap() {
      context.setLineWidth(10);
      ['butt', 'round', 'square'].forEach(function (item, index) {
        context.beginPath();
        context.setLineCap(item);
        context.moveTo(20, 20 + 20 * index);
        context.lineTo(100, 20 + 20 * index);
        context.stroke();
      });
      context.draw();
    },
    setLineJoin: function setLineJoin() {
      context.setLineWidth(10);
      ['bevel', 'round', 'miter'].forEach(function (item, index) {
        context.beginPath();
        context.setLineJoin(item);
        context.moveTo(20 + 80 * index, 20);
        context.lineTo(100 + 80 * index, 50);
        context.lineTo(20 + 80 * index, 100);
        context.stroke();
      });
      context.draw();
    },
    setLineWidth: function setLineWidth() {
      [2, 4, 6, 8, 10].forEach(function (item, index) {
        context.beginPath();
        context.setLineWidth(item);
        context.moveTo(20, 20 + 20 * index);
        context.lineTo(100, 20 + 20 * index);
        context.stroke();
      });
      context.draw();
    },
    setMiterLimit: function setMiterLimit() {
      context.setLineWidth(4);
      [2, 4, 6, 8, 10].forEach(function (item, index) {
        context.beginPath();
        context.setMiterLimit(item);
        context.moveTo(20 + 80 * index, 20);
        context.lineTo(100 + 80 * index, 50);
        context.lineTo(20 + 80 * index, 100);
        context.stroke();
      });
      context.draw();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 393:
/*!**************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/canvas/canvas.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./canvas.vue?vue&type=style&index=0&lang=css& */ 394);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 394:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/API/canvas/canvas.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[387,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvQVBJL2NhbnZhcy9jYW52YXMudnVlP2JmYzgiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL3BhZ2VzL0FQSS9jYW52YXMvY2FudmFzLnZ1ZT9jN2YxIiwid2VicGFjazovLy8vVXNlcnMvdGlhbmppYXhpbmcvUFAvRGNsb3VkL2hlbGxvLXVuaWFwcC9wYWdlcy9BUEkvY2FudmFzL2NhbnZhcy52dWU/OWE3YSIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvQVBJL2NhbnZhcy9jYW52YXMudnVlP2U0YWIiLCJ1bmktYXBwOi8vL3BhZ2VzL0FQSS9jYW52YXMvY2FudmFzLnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvQVBJL2NhbnZhcy9jYW52YXMudnVlPzBmODEiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL3BhZ2VzL0FQSS9jYW52YXMvY2FudmFzLnZ1ZT9iNjdiIl0sIm5hbWVzIjpbImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSxvRztBQUNBQSxVQUFVLENBQUNDLGVBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1IO0FBQ25IO0FBQzBEO0FBQ0w7QUFDYTs7O0FBR2xFO0FBQzJOO0FBQzNOLGdCQUFnQix5TkFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsV0FBVywrTEFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQTIzQixDQUFnQiw0MEJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNlLzRCLG1CO0FBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBO0FBQ0EsY0FEQSxFQUNBLFdBREEsRUFDQSxXQURBLEVBQ0EsV0FEQSxFQUNBLFFBREEsRUFDQSxRQURBLEVBQ0EsTUFEQSxFQUNBLEtBREE7QUFFQSx3QkFGQSxFQUVBLGVBRkEsRUFFQSxjQUZBLEVBRUEsZ0JBRkEsRUFFQSxnQkFGQTtBQUdBLGlCQUhBLEVBR0EsYUFIQSxFQUdBLFlBSEEsRUFHQSxhQUhBLEVBR0EsY0FIQSxFQUdBLGVBSEEsQ0FGQTs7O0FBUUEsR0FWQTtBQVdBO0FBQ0E7QUFDQSxHQWJBO0FBY0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUNBO0FBQ0EsU0FKQTtBQUtBO0FBQ0E7QUFDQSxTQVBBOztBQVNBLEtBWEE7QUFZQTtBQUNBO0FBQ0EsS0FkQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBckJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FqQ0E7QUFrQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhEQTtBQWlEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQTNEQTtBQTREQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBMUVBO0FBMkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVBBO0FBUUE7QUFDQSxLQXJGQTtBQXNGQTs7Ozs7QUFLQTs7QUFFQTtBQUNBLEtBOUZBO0FBK0ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FySEE7QUFzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E1SEE7QUE2SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcklBO0FBc0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3SUE7QUE4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTNKQTtBQTRKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJLQTtBQXNLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVLQTtBQTZLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcExBO0FBcUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFMQTtBQTJMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZNQTtBQXdNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTlNQTtBQStNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJOQTtBQXNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBO0FBTUE7QUFDQSxLQTlOQTtBQStOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUxBO0FBTUE7QUFDQSxLQXZPQTtBQXdPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEE7QUFNQTtBQUNBO0FBQ0EsS0FsUEE7QUFtUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6UEE7QUEwUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUE7QUFDQSxLQWhRQTtBQWlRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQTtBQU9BO0FBQ0EsS0EzUUE7QUE0UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FQQTtBQVFBO0FBQ0EsS0F2UkE7QUF3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQU5BO0FBT0E7QUFDQSxLQWpTQTtBQWtTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVBBO0FBUUE7QUFDQSxLQTdTQSxFQWRBLEU7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBOHZDLENBQWdCLHlwQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQWx4QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL0FQSS9jYW52YXMvY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL0FQSS9jYW52YXMvY2FudmFzLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NhbnZhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTgwMTBiMWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYW52YXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYW52YXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NhbnZhcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL0FQSS9jYW52YXMvY2FudmFzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FudmFzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ODAxMGIxZSZcIiIsInZhciBjb21wb25lbnRzID0ge1xuICBwYWdlSGVhZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy9wYWdlLWhlYWQvcGFnZS1oZWFkXCIgKi8gXCJAL2NvbXBvbmVudHMvcGFnZS1oZWFkL3BhZ2UtaGVhZC52dWVcIlxuICAgIClcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FudmFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FudmFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDxwYWdlLWhlYWQgOnRpdGxlPVwidGl0bGVcIj48L3BhZ2UtaGVhZD5cclxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWNvbW1vbi1tdFwiPlxyXG5cdFx0XHQ8Y2FudmFzIGNsYXNzPVwiY2FudmFzLWVsZW1lbnRcIiBjYW52YXMtaWQ9XCJjYW52YXNcIiBpZD1cImNhbnZhc1wiPjwvY2FudmFzPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJjYW52YXMtYnV0dG9uc1wiIHNjcm9sbC15PVwidHJ1ZVwiPlxyXG5cdFx0XHRcdDxibG9jayB2LWZvcj1cIihuYW1lLCBpbmRleCkgaW4gbmFtZXNcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJjYW52YXMtYnV0dG9uXCIgQGNsaWNrPVwiaGFuZGxlQ2FudmFzQnV0dG9uKG5hbWUpXCI+e3tuYW1lfX08L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJjYW52YXMtYnV0dG9uXCIgQGNsaWNrPVwidG9UZW1wRmlsZVBhdGhcIiB0eXBlPVwicHJpbWFyeVwiPnRvVGVtcEZpbGVQYXRoPC9idXR0b24+XHJcblx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdHZhciBjb250ZXh0ID0gbnVsbDtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRpdGxlOiAnY3JlYXRlQ29udGV4dCcsXHJcblx0XHRcdFx0bmFtZXM6IFtcInJvdGF0ZVwiLCBcInNjYWxlXCIsIFwicmVzZXRcIiwgXCJ0cmFuc2xhdGVcIiwgXCJzYXZlXCIsIFwicmVzdG9yZVwiLCBcImRyYXdJbWFnZVwiLCBcImZpbGxUZXh0XCIsIFwiZmlsbFwiLFxyXG5cdFx0XHRcdFx0XCJzdHJva2VcIiwgXCJjbGVhclJlY3RcIiwgXCJiZWdpblBhdGhcIiwgXCJjbG9zZVBhdGhcIiwgXCJtb3ZlVG9cIiwgXCJsaW5lVG9cIiwgXCJyZWN0XCIsIFwiYXJjXCIsXHJcblx0XHRcdFx0XHRcInF1YWRyYXRpY0N1cnZlVG9cIiwgXCJiZXppZXJDdXJ2ZVRvXCIsIFwic2V0RmlsbFN0eWxlXCIsIFwic2V0U3Ryb2tlU3R5bGVcIiwgXCJzZXRHbG9iYWxBbHBoYVwiLFxyXG5cdFx0XHRcdFx0XCJzZXRTaGFkb3dcIiwgXCJzZXRGb250U2l6ZVwiLCBcInNldExpbmVDYXBcIiwgXCJzZXRMaW5lSm9pblwiLCBcInNldExpbmVXaWR0aFwiLCBcInNldE1pdGVyTGltaXRcIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRjb250ZXh0ID0gdW5pLmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NhbnZhcycsdGhpcylcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHRvVGVtcEZpbGVQYXRoOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1bmkuY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xyXG5cdFx0XHRcdFx0Y2FudmFzSWQ6ICdjYW52YXMnLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy50ZW1wRmlsZVBhdGgpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoSlNPTi5zdHJpbmdpZnkoZXJyKSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoYW5kbGVDYW52YXNCdXR0b246IGZ1bmN0aW9uKG5hbWUpIHtcclxuXHRcdFx0XHR0aGlzW25hbWVdICYmIHRoaXNbbmFtZV0oKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cm90YXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb250ZXh0LmJlZ2luUGF0aCgpXHJcblx0XHRcdFx0Y29udGV4dC5yb3RhdGUoMTAgKiBNYXRoLlBJIC8gMTgwKVxyXG5cdFx0XHRcdGNvbnRleHQucmVjdCgyMjUsIDc1LCAyMCwgMTApXHJcblx0XHRcdFx0Y29udGV4dC5maWxsKClcclxuXHRcdFx0XHRjb250ZXh0LmRyYXcoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzY2FsZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdGNvbnRleHQucmVjdCgyNSwgMjUsIDUwLCA1MClcclxuXHRcdFx0XHRjb250ZXh0LnN0cm9rZSgpXHJcblxyXG5cdFx0XHRcdGNvbnRleHQuc2NhbGUoMiwgMilcclxuXHJcblx0XHRcdFx0Y29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdGNvbnRleHQucmVjdCgyNSwgMjUsIDUwLCA1MClcclxuXHRcdFx0XHRjb250ZXh0LnN0cm9rZSgpXHJcblx0XHRcdFx0Y29udGV4dC5kcmF3KClcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcclxuXHJcblx0XHRcdFx0Y29udGV4dC5zZXRGaWxsU3R5bGUoJyMwMDAwMDAnKVxyXG5cdFx0XHRcdGNvbnRleHQuc2V0U3Ryb2tlU3R5bGUoJyMwMDAwMDAnKVxyXG5cdFx0XHRcdGNvbnRleHQuc2V0Rm9udFNpemUoMTApXHJcblx0XHRcdFx0Y29udGV4dC5zZXRHbG9iYWxBbHBoYSgxKVxyXG5cdFx0XHRcdGNvbnRleHQuc2V0U2hhZG93KDAsIDAsIDAsICdyZ2JhKDAsIDAsIDAsIDApJylcclxuXHJcblx0XHRcdFx0Y29udGV4dC5zZXRMaW5lQ2FwKCdidXR0JylcclxuXHRcdFx0XHRjb250ZXh0LnNldExpbmVKb2luKCdtaXRlcicpXHJcblx0XHRcdFx0Y29udGV4dC5zZXRMaW5lV2lkdGgoMSlcclxuXHRcdFx0XHRjb250ZXh0LnNldE1pdGVyTGltaXQoMTApXHJcblx0XHRcdFx0Y29udGV4dC5kcmF3KClcclxuXHRcdFx0fSxcclxuXHRcdFx0dHJhbnNsYXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb250ZXh0LmJlZ2luUGF0aCgpXHJcblx0XHRcdFx0Y29udGV4dC5yZWN0KDEwLCAxMCwgMTAwLCA1MClcclxuXHRcdFx0XHRjb250ZXh0LmZpbGwoKVxyXG5cclxuXHRcdFx0XHRjb250ZXh0LnRyYW5zbGF0ZSg3MCwgNzApXHJcblxyXG5cdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHRjb250ZXh0LmZpbGwoKVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNhdmU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHRjb250ZXh0LnNldFN0cm9rZVN0eWxlKCcjMDBmZjAwJylcclxuXHRcdFx0XHRjb250ZXh0LnNhdmUoKVxyXG5cclxuXHRcdFx0XHRjb250ZXh0LnNjYWxlKDIsIDIpXHJcblx0XHRcdFx0Y29udGV4dC5zZXRTdHJva2VTdHlsZSgnI2ZmMDAwMCcpXHJcblx0XHRcdFx0Y29udGV4dC5yZWN0KDAsIDAsIDEwMCwgMTAwKVxyXG5cdFx0XHRcdGNvbnRleHQuc3Ryb2tlKClcclxuXHRcdFx0XHRjb250ZXh0LnJlc3RvcmUoKVxyXG5cclxuXHRcdFx0XHRjb250ZXh0LnJlY3QoMCwgMCwgNTAsIDUwKVxyXG5cdFx0XHRcdGNvbnRleHQuc3Ryb2tlKClcclxuXHRcdFx0XHRjb250ZXh0LmRyYXcoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZXN0b3JlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRbMywgMiwgMV0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdFx0XHRjb250ZXh0LmJlZ2luUGF0aCgpXHJcblx0XHRcdFx0XHRjb250ZXh0LnNhdmUoKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5zY2FsZShpdGVtLCBpdGVtKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5yZWN0KDEwLCAxMCwgMTAwLCAxMDApXHJcblx0XHRcdFx0XHRjb250ZXh0LnN0cm9rZSgpXHJcblx0XHRcdFx0XHRjb250ZXh0LnJlc3RvcmUoKVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdGRyYXdJbWFnZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0Y29udGV4dC5kcmF3SW1hZ2UoJy4uLy4uLy4uL3N0YXRpYy9hcHAtcGx1cy91bmlAMngucG5nJywgMCwgMClcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0Y29udGV4dC5kcmF3SW1hZ2UoJy4uLy4uLy4uL3N0YXRpYy91bmkucG5nJywgMCwgMClcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRjb250ZXh0LmRyYXcoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmaWxsVGV4dDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29udGV4dC5zZXRTdHJva2VTdHlsZSgnI2ZmMDAwMCcpXHJcblxyXG5cdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHRjb250ZXh0Lm1vdmVUbygwLCAxMClcclxuXHRcdFx0XHRjb250ZXh0LmxpbmVUbygzMDAsIDEwKVxyXG5cdFx0XHRcdGNvbnRleHQuc3Ryb2tlKClcclxuXHRcdFx0XHQvLyBjb250ZXh0LnNhdmUoKVxyXG5cdFx0XHRcdC8vIGNvbnRleHQuc2NhbGUoMS41LCAxLjUpXHJcblx0XHRcdFx0Ly8gY29udGV4dC50cmFuc2xhdGUoMjAsIDIwKVxyXG5cdFx0XHRcdGNvbnRleHQuc2V0Rm9udFNpemUoMTApXHJcblx0XHRcdFx0Y29udGV4dC5maWxsVGV4dCgnSGVsbG8gV29ybGQnLCAwLCAzMClcclxuXHRcdFx0XHRjb250ZXh0LnNldEZvbnRTaXplKDIwKVxyXG5cdFx0XHRcdGNvbnRleHQuZmlsbFRleHQoJ0hlbGxvIFdvcmxkJywgMTAwLCAzMClcclxuXHJcblx0XHRcdFx0Ly8gY29udGV4dC5yZXN0b3JlKClcclxuXHJcblx0XHRcdFx0Y29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdGNvbnRleHQubW92ZVRvKDAsIDMwKVxyXG5cdFx0XHRcdGNvbnRleHQubGluZVRvKDMwMCwgMzApXHJcblx0XHRcdFx0Y29udGV4dC5zdHJva2UoKVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdGZpbGw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHRjb250ZXh0LnJlY3QoMjAsIDIwLCAxNTAsIDEwMClcclxuXHRcdFx0XHRjb250ZXh0LnNldFN0cm9rZVN0eWxlKCcjMDBmZjAwJylcclxuXHRcdFx0XHRjb250ZXh0LmZpbGwoKVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdHN0cm9rZTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdGNvbnRleHQubW92ZVRvKDIwLCAyMClcclxuXHRcdFx0XHRjb250ZXh0LmxpbmVUbygyMCwgMTAwKVxyXG5cdFx0XHRcdGNvbnRleHQubGluZVRvKDcwLCAxMDApXHJcblx0XHRcdFx0Y29udGV4dC5zZXRTdHJva2VTdHlsZSgnIzAwZmYwMCcpXHJcblx0XHRcdFx0Y29udGV4dC5zdHJva2UoKVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsZWFyUmVjdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29udGV4dC5zZXRGaWxsU3R5bGUoJyNmZjAwMDAnKVxyXG5cdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHRjb250ZXh0LnJlY3QoMCwgMCwgMzAwLCAxNTApXHJcblx0XHRcdFx0Y29udGV4dC5maWxsKClcclxuXHRcdFx0XHRjb250ZXh0LmNsZWFyUmVjdCgyMCwgMjAsIDEwMCwgNTApXHJcblx0XHRcdFx0Y29udGV4dC5kcmF3KClcclxuXHRcdFx0fSxcclxuXHRcdFx0YmVnaW5QYXRoOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb250ZXh0LmJlZ2luUGF0aCgpXHJcblx0XHRcdFx0Y29udGV4dC5zZXRMaW5lV2lkdGgoNSlcclxuXHRcdFx0XHRjb250ZXh0LnNldFN0cm9rZVN0eWxlKCcjZmYwMDAwJylcclxuXHRcdFx0XHRjb250ZXh0Lm1vdmVUbygwLCA3NSlcclxuXHRcdFx0XHRjb250ZXh0LmxpbmVUbygyNTAsIDc1KVxyXG5cdFx0XHRcdGNvbnRleHQuc3Ryb2tlKClcclxuXHRcdFx0XHRjb250ZXh0LmJlZ2luUGF0aCgpXHJcblx0XHRcdFx0Y29udGV4dC5zZXRTdHJva2VTdHlsZSgnIzAwMDBmZicpXHJcblx0XHRcdFx0Y29udGV4dC5tb3ZlVG8oNTAsIDApXHJcblx0XHRcdFx0Y29udGV4dC5saW5lVG8oMTUwLCAxMzApXHJcblx0XHRcdFx0Y29udGV4dC5zdHJva2UoKVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlUGF0aDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdGNvbnRleHQuc2V0TGluZVdpZHRoKDEpXHJcblx0XHRcdFx0Y29udGV4dC5tb3ZlVG8oMjAsIDIwKVxyXG5cdFx0XHRcdGNvbnRleHQubGluZVRvKDIwLCAxMDApXHJcblx0XHRcdFx0Y29udGV4dC5saW5lVG8oNzAsIDEwMClcclxuXHRcdFx0XHRjb250ZXh0LmNsb3NlUGF0aCgpXHJcblx0XHRcdFx0Y29udGV4dC5zdHJva2UoKVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vdmVUbzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdGNvbnRleHQubW92ZVRvKDAsIDApXHJcblx0XHRcdFx0Y29udGV4dC5saW5lVG8oMzAwLCAxNTApXHJcblx0XHRcdFx0Y29udGV4dC5zdHJva2UoKVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpbmVUbzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdGNvbnRleHQubW92ZVRvKDIwLCAyMClcclxuXHRcdFx0XHRjb250ZXh0LmxpbmVUbygyMCwgMTAwKVxyXG5cdFx0XHRcdGNvbnRleHQubGluZVRvKDcwLCAxMDApXHJcblx0XHRcdFx0Y29udGV4dC5zdHJva2UoKVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdHJlY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHRjb250ZXh0LnJlY3QoMjAsIDIwLCAxNTAsIDEwMClcclxuXHRcdFx0XHRjb250ZXh0LnN0cm9rZSgpXHJcblx0XHRcdFx0Y29udGV4dC5kcmF3KClcclxuXHRcdFx0fSxcclxuXHRcdFx0YXJjOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb250ZXh0LmJlZ2luUGF0aCgpXHJcblx0XHRcdFx0Y29udGV4dC5zZXRMaW5lV2lkdGgoMilcclxuXHRcdFx0XHRjb250ZXh0LmFyYyg3NSwgNzUsIDUwLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSlcclxuXHRcdFx0XHRjb250ZXh0Lm1vdmVUbygxMTAsIDc1KVxyXG5cdFx0XHRcdGNvbnRleHQuYXJjKDc1LCA3NSwgMzUsIDAsIE1hdGguUEksIGZhbHNlKVxyXG5cdFx0XHRcdGNvbnRleHQubW92ZVRvKDY1LCA2NSlcclxuXHRcdFx0XHRjb250ZXh0LmFyYyg2MCwgNjUsIDUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKVxyXG5cdFx0XHRcdGNvbnRleHQubW92ZVRvKDk1LCA2NSlcclxuXHRcdFx0XHRjb250ZXh0LmFyYyg5MCwgNjUsIDUsIDAsIE1hdGguUEkgKiAyLCB0cnVlKVxyXG5cdFx0XHRcdGNvbnRleHQuc3Ryb2tlKClcclxuXHRcdFx0XHRjb250ZXh0LmRyYXcoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRxdWFkcmF0aWNDdXJ2ZVRvOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb250ZXh0LmJlZ2luUGF0aCgpXHJcblx0XHRcdFx0Y29udGV4dC5tb3ZlVG8oMjAsIDIwKVxyXG5cdFx0XHRcdGNvbnRleHQucXVhZHJhdGljQ3VydmVUbygyMCwgMTAwLCAyMDAsIDIwKVxyXG5cdFx0XHRcdGNvbnRleHQuc3Ryb2tlKClcclxuXHRcdFx0XHRjb250ZXh0LmRyYXcoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiZXppZXJDdXJ2ZVRvOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb250ZXh0LmJlZ2luUGF0aCgpXHJcblx0XHRcdFx0Y29udGV4dC5tb3ZlVG8oMjAsIDIwKVxyXG5cdFx0XHRcdGNvbnRleHQuYmV6aWVyQ3VydmVUbygyMCwgMTAwLCAyMDAsIDEwMCwgMjAwLCAyMClcclxuXHRcdFx0XHRjb250ZXh0LnN0cm9rZSgpXHJcblx0XHRcdFx0Y29udGV4dC5kcmF3KClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0RmlsbFN0eWxlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRbJyNmZWY5NTcnLCAncmdiKDI0MiwxNTksNjMpJywgJ3JnYigyNDIsMTE3LDYzKScsICcjZTg3ZTUxJ10uZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0Y29udGV4dC5zZXRGaWxsU3R5bGUoaXRlbSlcclxuXHRcdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHRcdGNvbnRleHQucmVjdCgwICsgNzUgKiBpbmRleCwgMCwgNTAsIDUwKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5maWxsKClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldFN0cm9rZVN0eWxlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRbJyNmZWY5NTcnLCAncmdiKDI0MiwxNTksNjMpJywgJ3JnYigyNDIsMTE3LDYzKScsICcjZTg3ZTUxJ10uZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0Y29udGV4dC5zZXRTdHJva2VTdHlsZShpdGVtKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5yZWN0KDAgKyA3NSAqIGluZGV4LCAwLCA1MCwgNTApXHJcblx0XHRcdFx0XHRjb250ZXh0LnN0cm9rZSgpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRjb250ZXh0LmRyYXcoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRHbG9iYWxBbHBoYTogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y29udGV4dC5zZXRGaWxsU3R5bGUoJyMwMDAwMDAnKTtcclxuXHRcdFx0XHRbMSwgMC41LCAwLjFdLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdGNvbnRleHQuc2V0R2xvYmFsQWxwaGEoaXRlbSlcclxuXHRcdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHRcdGNvbnRleHQucmVjdCgwICsgNzUgKiBpbmRleCwgMCwgNTAsIDUwKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5maWxsKClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdFx0Y29udGV4dC5zZXRHbG9iYWxBbHBoYSgxKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRTaGFkb3c6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHRjb250ZXh0LnNldFNoYWRvdygxMCwgMTAsIDEwLCAncmdiYSgwLCAwLCAwLCAxOTkpJylcclxuXHRcdFx0XHRjb250ZXh0LnJlY3QoMTAsIDEwLCAxMDAsIDEwMClcclxuXHRcdFx0XHRjb250ZXh0LmZpbGwoKVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldEZvbnRTaXplOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRbMTAsIDIwLCAzMCwgNDBdLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdGNvbnRleHQuc2V0Rm9udFNpemUoaXRlbSlcclxuXHRcdFx0XHRcdGNvbnRleHQuZmlsbFRleHQoJ0hlbGxvLCB3b3JsZCcsIDIwLCAyMCArIDQwICogaW5kZXgpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRjb250ZXh0LmRyYXcoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRMaW5lQ2FwOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjb250ZXh0LnNldExpbmVXaWR0aCgxMCk7XHJcblx0XHRcdFx0WydidXR0JywgJ3JvdW5kJywgJ3NxdWFyZSddLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuXHRcdFx0XHRcdGNvbnRleHQuYmVnaW5QYXRoKClcclxuXHRcdFx0XHRcdGNvbnRleHQuc2V0TGluZUNhcChpdGVtKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5tb3ZlVG8oMjAsIDIwICsgMjAgKiBpbmRleClcclxuXHRcdFx0XHRcdGNvbnRleHQubGluZVRvKDEwMCwgMjAgKyAyMCAqIGluZGV4KVxyXG5cdFx0XHRcdFx0Y29udGV4dC5zdHJva2UoKVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Y29udGV4dC5kcmF3KClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0TGluZUpvaW46IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnRleHQuc2V0TGluZVdpZHRoKDEwKTtcclxuXHRcdFx0XHRbJ2JldmVsJywgJ3JvdW5kJywgJ21pdGVyJ10uZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0Y29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5zZXRMaW5lSm9pbihpdGVtKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5tb3ZlVG8oMjAgKyA4MCAqIGluZGV4LCAyMClcclxuXHRcdFx0XHRcdGNvbnRleHQubGluZVRvKDEwMCArIDgwICogaW5kZXgsIDUwKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5saW5lVG8oMjAgKyA4MCAqIGluZGV4LCAxMDApXHJcblx0XHRcdFx0XHRjb250ZXh0LnN0cm9rZSgpXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRjb250ZXh0LmRyYXcoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZXRMaW5lV2lkdGg6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFsyLCA0LCA2LCA4LCAxMF0uZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0Y29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5zZXRMaW5lV2lkdGgoaXRlbSlcclxuXHRcdFx0XHRcdGNvbnRleHQubW92ZVRvKDIwLCAyMCArIDIwICogaW5kZXgpXHJcblx0XHRcdFx0XHRjb250ZXh0LmxpbmVUbygxMDAsIDIwICsgMjAgKiBpbmRleClcclxuXHRcdFx0XHRcdGNvbnRleHQuc3Ryb2tlKClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH0sXHJcblx0XHRcdHNldE1pdGVyTGltaXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNvbnRleHQuc2V0TGluZVdpZHRoKDQpO1xyXG5cdFx0XHRcdFsyLCA0LCA2LCA4LCAxMF0uZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCkge1xyXG5cdFx0XHRcdFx0Y29udGV4dC5iZWdpblBhdGgoKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5zZXRNaXRlckxpbWl0KGl0ZW0pXHJcblx0XHRcdFx0XHRjb250ZXh0Lm1vdmVUbygyMCArIDgwICogaW5kZXgsIDIwKVxyXG5cdFx0XHRcdFx0Y29udGV4dC5saW5lVG8oMTAwICsgODAgKiBpbmRleCwgNTApXHJcblx0XHRcdFx0XHRjb250ZXh0LmxpbmVUbygyMCArIDgwICogaW5kZXgsIDEwMClcclxuXHRcdFx0XHRcdGNvbnRleHQuc3Ryb2tlKClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnRleHQuZHJhdygpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5jYW52YXMtZWxlbWVudC13cmFwcGVyIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTAwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNhbnZhcy1lbGVtZW50IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiA1MDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG5cdH1cclxuXHJcblx0LmNhbnZhcy1idXR0b25zIHtcclxuXHRcdHBhZGRpbmc6IDMwcnB4IDUwcnB4IDEwcnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDM2MHJweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0fVxyXG5cclxuXHQuY2FudmFzLWJ1dHRvbiB7XHJcblx0XHRmbG9hdDogbGVmdDtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHR3aWR0aDogMzAwcnB4O1xyXG5cdFx0bWFyZ2luOiAxNXJweCAxMnJweDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYW52YXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9jYW52YXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjA1MTc3ODIzNDQzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==