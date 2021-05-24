(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/component/canvas/canvas"],{

/***/ 219:
/*!********************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/main.js?{"page":"pages%2Fcomponent%2Fcanvas%2Fcanvas"} ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _canvas = _interopRequireDefault(__webpack_require__(/*! ./pages/component/canvas/canvas.vue */ 220));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_canvas.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 220:
/*!***********************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/component/canvas/canvas.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_vue_vue_type_template_id_0e8e1374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas.vue?vue&type=template&id=0e8e1374& */ 221);
/* harmony import */ var _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas.vue?vue&type=script&lang=js& */ 223);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./canvas.vue?vue&type=style&index=0&lang=css& */ 225);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _canvas_vue_vue_type_template_id_0e8e1374___WEBPACK_IMPORTED_MODULE_0__["render"],
  _canvas_vue_vue_type_template_id_0e8e1374___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _canvas_vue_vue_type_template_id_0e8e1374___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/component/canvas/canvas.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 221:
/*!******************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/component/canvas/canvas.vue?vue&type=template&id=0e8e1374& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_template_id_0e8e1374___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./canvas.vue?vue&type=template&id=0e8e1374& */ 222);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_template_id_0e8e1374___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_template_id_0e8e1374___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_template_id_0e8e1374___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_template_id_0e8e1374___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 222:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/component/canvas/canvas.vue?vue&type=template&id=0e8e1374& ***!
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
    return __webpack_require__.e(/*! import() | components/page-head/page-head */ "components/page-head/page-head").then(__webpack_require__.bind(null, /*! @/components/page-head/page-head.vue */ 1004))
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

/***/ 223:
/*!************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/component/canvas/canvas.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./canvas.vue?vue&type=script&lang=js& */ 224);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 224:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/component/canvas/canvas.vue?vue&type=script&lang=js& ***!
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



var ctx = null,
interval = null;

function Ball(x, y, vx, vy, canvasWidth, canvasHeight, ctx) {
  this.canvasWidth = canvasWidth;
  this.canvasHeight = canvasHeight;
  this.ctx = ctx;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.radius = 5;
}

Ball.prototype.draw = function () {
  this.ctx.setFillStyle('#007AFF');
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  this.ctx.closePath();
  this.ctx.fill();
};

Ball.prototype.move = function () {
  this.x += this.vx;
  this.y += this.vy;
  // 回到中心
  // if (getDistance(this.x - this.canvasWidth / 2, this.y - this.canvasHeight / 2) >
  // 	getDistance(this.canvasWidth / 2, this.canvasHeight / 2) + this.radius) {
  // 	this.x = this.canvasWidth / 2
  // 	this.y = this.canvasHeight / 2
  // }

  // 边框反弹
  if (this.x < this.radius) {
    this.vx = Math.abs(this.vx);
    return;
  }
  if (this.x > this.canvasWidth - this.radius) {
    this.vx = -Math.abs(this.vx);
  }
  if (this.y < this.radius) {
    this.vy = Math.abs(this.vy);
    return;
  }
  if (this.y > this.canvasWidth - this.radius) {
    this.vy = -Math.abs(this.vy);
  }
};

function getDistance(x, y) {
  return Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 0.5);
}var _default =



{
  data: function data() {
    return {
      title: 'canvas',
      canvasWidth: 0,
      startStatus: false,
      ballList: [] };

  },
  onReady: function onReady() {var _this = this;
    this.$nextTick(function () {
      uni.createSelectorQuery().select(".canvas").boundingClientRect(function (data) {
        _this.canvasWidth = data.width;




        ctx = uni.createCanvasContext('canvas');
        _this.drawBall();

      }).exec();
    });
  },

  onUnload: function onUnload() {
    clearInterval(interval);
  },
  methods: {
    drawBall: function drawBall() {
      var canvasWidth = this.canvasWidth,
      canvasHeight = this.canvasWidth,
      speed = 3,
      ballList = [],
      layer = 3,
      ballInlayer = 20;
      for (var i = 0; i < layer; i++) {
        var radius = getDistance(canvasWidth / 2, canvasHeight / 2) / layer * i;
        for (var j = 0; j < ballInlayer; j++) {
          var deg = j * 2 * Math.PI / ballInlayer,
          sin = Math.sin(deg),
          cos = Math.cos(deg),
          x = radius * cos + canvasWidth / 2,
          y = radius * sin + canvasHeight / 2,
          vx = speed * cos,
          vy = speed * sin;
          ballList.push(new Ball(x, y, vx, vy, canvasWidth, canvasHeight, ctx));
        }
      }

      function animate(ballList) {
        // ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        ballList.forEach(function (item) {
          item.move();
          item.draw();
        });
        ctx.draw();
      }

      interval = setInterval(function () {
        animate(ballList);
      }, 17);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 225:
/*!********************************************************************************************************************!*\
  !*** /Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/component/canvas/canvas.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX-Alpha 7.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./canvas.vue?vue&type=style&index=0&lang=css& */ 226);
/* harmony import */ var _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_Alpha_7_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_canvas_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 226:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/tianjiaxing/PP/Dcloud/hello-uniapp/pages/component/canvas/canvas.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[219,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvY29tcG9uZW50L2NhbnZhcy9jYW52YXMudnVlPzY1NmYiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL3BhZ2VzL2NvbXBvbmVudC9jYW52YXMvY2FudmFzLnZ1ZT83ZGU4Iiwid2VicGFjazovLy8vVXNlcnMvdGlhbmppYXhpbmcvUFAvRGNsb3VkL2hlbGxvLXVuaWFwcC9wYWdlcy9jb21wb25lbnQvY2FudmFzL2NhbnZhcy52dWU/MzMwNSIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvY29tcG9uZW50L2NhbnZhcy9jYW52YXMudnVlP2ViMjgiLCJ1bmktYXBwOi8vL3BhZ2VzL2NvbXBvbmVudC9jYW52YXMvY2FudmFzLnZ1ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL3RpYW5qaWF4aW5nL1BQL0RjbG91ZC9oZWxsby11bmlhcHAvcGFnZXMvY29tcG9uZW50L2NhbnZhcy9jYW52YXMudnVlPzM1Y2EiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy90aWFuamlheGluZy9QUC9EY2xvdWQvaGVsbG8tdW5pYXBwL3BhZ2VzL2NvbXBvbmVudC9jYW52YXMvY2FudmFzLnZ1ZT9kOGViIl0sIm5hbWVzIjpbImNyZWF0ZVBhZ2UiLCJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tEQUFBO0FBQ0E7QUFDQSwwRztBQUNBQSxVQUFVLENBQUNDLGVBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1IO0FBQ25IO0FBQzBEO0FBQ0w7QUFDYTs7O0FBR2xFO0FBQzJOO0FBQzNOLGdCQUFnQix5TkFBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsV0FBVywrTEFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQTIzQixDQUFnQiw0MEJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNpSS80QjtBQUNBLGVBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0F6QkE7O0FBMkJBO0FBQ0E7QUFDQSxDOzs7O0FBSUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLG9CQUZBO0FBR0Esd0JBSEE7QUFJQSxrQkFKQTs7QUFNQSxHQVJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTs7QUFFQSxPQVRBLEVBU0EsSUFUQTtBQVVBLEtBWEE7QUFZQSxHQXRCQTs7QUF3QkE7QUFDQTtBQUNBLEdBMUJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUEsZUFGQTtBQUdBLG1CQUhBO0FBSUEsZUFKQTtBQUtBLHNCQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLDZCQUZBO0FBR0EsNENBSEE7QUFJQSw2Q0FKQTtBQUtBLDBCQUxBO0FBTUEsMEJBTkE7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsRUFGQTtBQUdBLEtBbENBLEVBM0JBLEU7Ozs7Ozs7Ozs7Ozs7QUN4TEE7QUFBQTtBQUFBO0FBQUE7QUFBOHZDLENBQWdCLHlwQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQWx4QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2NvbXBvbmVudC9jYW52YXMvY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2NvbXBvbmVudC9jYW52YXMvY2FudmFzLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NhbnZhcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGU4ZTEzNzQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYW52YXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYW52YXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NhbnZhcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvbXBvbmVudC9jYW52YXMvY2FudmFzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FudmFzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZThlMTM3NCZcIiIsInZhciBjb21wb25lbnRzID0ge1xuICBwYWdlSGVhZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy9wYWdlLWhlYWQvcGFnZS1oZWFkXCIgKi8gXCJAL2NvbXBvbmVudHMvcGFnZS1oZWFkL3BhZ2UtaGVhZC52dWVcIlxuICAgIClcbiAgfVxufVxudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FudmFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vY2FudmFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuICAgIDx2aWV3PlxyXG4gICAgICAgIDxwYWdlLWhlYWQgOnRpdGxlPVwidGl0bGVcIj48L3BhZ2UtaGVhZD5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInBhZ2UtYm9keVwiPlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cInBhZ2UtYm9keS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tICNpZmRlZiBBUFAtUExVUyB8fCBINSAtLT5cclxuICAgICAgICAgICAgICAgIDxjYW52YXMgY2FudmFzLWlkPVwiY2FudmFzXCIgY2xhc3M9XCJjYW52YXNcIiA6c3RhcnQ9XCJzdGFydFN0YXR1c1wiIDpjaGFuZ2U6c3RhcnQ9XCJhbmltYXRlLnN0YXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGF0YS13aWR0aD1cImNhbnZhc1dpZHRoXCIgOmRhdGEtaGVpZ2h0PVwiY2FudmFzV2lkdGhcIj48L2NhbnZhcz5cclxuICAgICAgICAgICAgICAgIDwhLS0gI2VuZGlmIC0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLSAjaWZuZGVmIEFQUC1QTFVTIHx8IEg1IC0tPlxyXG4gICAgICAgICAgICAgICAgPGNhbnZhcyBjYW52YXMtaWQ9XCJjYW52YXNcIiBpZD1cImNhbnZhc1wiIGNsYXNzPVwiY2FudmFzXCI+PC9jYW52YXM+XHJcbiAgICAgICAgICAgICAgICA8IS0tICNlbmRpZiAtLT5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbW9kdWxlPVwiYW5pbWF0ZVwiIGxhbmc9XCJyZW5kZXJqc1wiPlxyXG4gICAgZnVuY3Rpb24gQmFsbCh7XHJcbiAgICAgICAgeCxcclxuICAgICAgICB5LFxyXG4gICAgICAgIHZ4LFxyXG4gICAgICAgIHZ5LFxyXG4gICAgICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgICAgIGNhbnZhc0hlaWdodCxcclxuICAgICAgICBjdHhcclxuICAgIH0pIHtcclxuICAgICAgICB0aGlzLmNhbnZhc1dpZHRoID0gY2FudmFzV2lkdGhcclxuICAgICAgICB0aGlzLmNhbnZhc0hlaWdodCA9IGNhbnZhc0hlaWdodFxyXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLnZ4ID0gdnhcclxuICAgICAgICB0aGlzLnZ5ID0gdnlcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IDVcclxuICAgIH1cclxuXHJcbiAgICBCYWxsLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKClcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnIzAwN0FGRidcclxuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSlcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKVxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIEJhbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnggKz0gdGhpcy52eFxyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZ5XHJcbiAgICAgICAgLy8g5Zue5Yiw5Lit5b+DXHJcbiAgICAgICAgLy8gaWYgKGdldERpc3RhbmNlKHRoaXMueCAtIHRoaXMuY2FudmFzV2lkdGggLyAyLCB0aGlzLnkgLSB0aGlzLmNhbnZhc0hlaWdodCAvIDIpID5cclxuICAgICAgICAvLyBcdGdldERpc3RhbmNlKHRoaXMuY2FudmFzV2lkdGggLyAyLCB0aGlzLmNhbnZhc0hlaWdodCAvIDIpICsgdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAvLyBcdHRoaXMueCA9IHRoaXMuY2FudmFzV2lkdGggLyAyXHJcbiAgICAgICAgLy8gXHR0aGlzLnkgPSB0aGlzLmNhbnZhc0hlaWdodCAvIDJcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIOi+ueahhuWPjeW8uVxyXG4gICAgICAgIGlmICh0aGlzLnggPCB0aGlzLnJhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLnZ4ID0gTWF0aC5hYnModGhpcy52eClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnggPiB0aGlzLmNhbnZhc1dpZHRoIC0gdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IC1NYXRoLmFicyh0aGlzLnZ4KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy55IDwgdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy52eSA9IE1hdGguYWJzKHRoaXMudnkpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy55ID4gdGhpcy5jYW52YXNXaWR0aCAtIHRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnkgPSAtTWF0aC5hYnModGhpcy52eSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RGlzdGFuY2UoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhNYXRoLnBvdyh4LCAyKSArIE1hdGgucG93KHksIDIpLCAwLjUpXHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgc3RhcnQobmV3VmFsLCBvbGRWYWwsIG93bmVyLCBpbnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjYW52YXNXaWR0aCA9IGlucy5nZXREYXRhc2V0KCkud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzSGVpZ2h0ID0gaW5zLmdldERhdGFzZXQoKS5oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhbnZhcz5jYW52YXMnKVswXSxcclxuICAgICAgICAgICAgICAgICAgICBjdHggPSBjYW52YXNFbGUuZ2V0Q29udGV4dCgnMmQnKSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZCA9IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsbExpc3QgPSBbXSxcclxuICAgICAgICAgICAgICAgICAgICBsYXllciA9IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsbElubGF5ZXIgPSAyMFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllcjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhZGl1cyA9IGdldERpc3RhbmNlKGNhbnZhc1dpZHRoIC8gMiwgY2FudmFzSGVpZ2h0IC8gMikgLyBsYXllciAqIGlcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJhbGxJbmxheWVyOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlZyA9IGogKiAyICogTWF0aC5QSSAvIGJhbGxJbmxheWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oZGVnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcyA9IE1hdGguY29zKGRlZyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gcmFkaXVzICogY29zICsgY2FudmFzV2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHJhZGl1cyAqIHNpbiArIGNhbnZhc0hlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCA9IHNwZWVkICogY29zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgPSBzcGVlZCAqIHNpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsTGlzdC5wdXNoKG5ldyBCYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhc1dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzSGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhbmltYXRlKGJhbGxMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNFbGUud2lkdGgsIGNhbnZhc0VsZS5oZWlnaHQpXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsbExpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZHJhdygpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoYmFsbExpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFuaW1hdGUoYmFsbExpc3QpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuICAgIC8vICNpZm5kZWYgQVBQLVBMVVMgfHwgSDVcclxuXHJcbiAgICBsZXQgY3R4ID0gbnVsbCxcclxuICAgICAgICBpbnRlcnZhbCA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gQmFsbCh4LCB5LCB2eCwgdnksIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIGN0eCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzV2lkdGggPSBjYW52YXNXaWR0aFxyXG4gICAgICAgIHRoaXMuY2FudmFzSGVpZ2h0ID0gY2FudmFzSGVpZ2h0XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMudnggPSB2eFxyXG4gICAgICAgIHRoaXMudnkgPSB2eVxyXG4gICAgICAgIHRoaXMucmFkaXVzID0gNVxyXG4gICAgfVxyXG5cclxuICAgIEJhbGwucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmN0eC5zZXRGaWxsU3R5bGUoJyMwMDdBRkYnKVxyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpXHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpXHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKClcclxuICAgICAgICB0aGlzLmN0eC5maWxsKClcclxuICAgIH1cclxuXHJcbiAgICBCYWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMudnhcclxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52eVxyXG4gICAgICAgIC8vIOWbnuWIsOS4reW/g1xyXG4gICAgICAgIC8vIGlmIChnZXREaXN0YW5jZSh0aGlzLnggLSB0aGlzLmNhbnZhc1dpZHRoIC8gMiwgdGhpcy55IC0gdGhpcy5jYW52YXNIZWlnaHQgLyAyKSA+XHJcbiAgICAgICAgLy8gXHRnZXREaXN0YW5jZSh0aGlzLmNhbnZhc1dpZHRoIC8gMiwgdGhpcy5jYW52YXNIZWlnaHQgLyAyKSArIHRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgLy8gXHR0aGlzLnggPSB0aGlzLmNhbnZhc1dpZHRoIC8gMlxyXG4gICAgICAgIC8vIFx0dGhpcy55ID0gdGhpcy5jYW52YXNIZWlnaHQgLyAyXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyDovrnmoYblj43lvLlcclxuICAgICAgICBpZiAodGhpcy54IDwgdGhpcy5yYWRpdXMpIHtcclxuICAgICAgICAgICAgdGhpcy52eCA9IE1hdGguYWJzKHRoaXMudngpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy54ID4gdGhpcy5jYW52YXNXaWR0aCAtIHRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnggPSAtTWF0aC5hYnModGhpcy52eClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueSA8IHRoaXMucmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMudnkgPSBNYXRoLmFicyh0aGlzLnZ5KVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMueSA+IHRoaXMuY2FudmFzV2lkdGggLSB0aGlzLnJhZGl1cykge1xyXG4gICAgICAgICAgICB0aGlzLnZ5ID0gLU1hdGguYWJzKHRoaXMudnkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldERpc3RhbmNlKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coTWF0aC5wb3coeCwgMikgKyBNYXRoLnBvdyh5LCAyKSwgMC41KVxyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRpZlxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdjYW52YXMnLFxyXG4gICAgICAgICAgICAgICAgY2FudmFzV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICBzdGFydFN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBiYWxsTGlzdDogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25SZWFkeTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KFwiLmNhbnZhc1wiKS5ib3VuZGluZ0NsaWVudFJlY3QoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW52YXNXaWR0aCA9IGRhdGEud2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAvLyAjaWZkZWYgQVBQLVBMVVMgfHwgSDVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3RhdHVzID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICNlbmRpZlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICNpZm5kZWYgQVBQLVBMVVMgfHwgSDVcclxuICAgICAgICAgICAgICAgICAgICBjdHggPSB1bmkuY3JlYXRlQ2FudmFzQ29udGV4dCgnY2FudmFzJylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdCYWxsKClcclxuICAgICAgICAgICAgICAgICAgICAvLyAjZW5kaWZcclxuICAgICAgICAgICAgICAgIH0pLmV4ZWMoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gI2lmbmRlZiBBUFAtUExVUyB8fCBINVxyXG4gICAgICAgIG9uVW5sb2FkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIGRyYXdCYWxsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjYW52YXNXaWR0aCA9IHRoaXMuY2FudmFzV2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzSGVpZ2h0ID0gdGhpcy5jYW52YXNXaWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZCA9IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsbExpc3QgPSBbXSxcclxuICAgICAgICAgICAgICAgICAgICBsYXllciA9IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFsbElubGF5ZXIgPSAyMFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXllcjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhZGl1cyA9IGdldERpc3RhbmNlKGNhbnZhc1dpZHRoIC8gMiwgY2FudmFzSGVpZ2h0IC8gMikgLyBsYXllciAqIGlcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJhbGxJbmxheWVyOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlZyA9IGogKiAyICogTWF0aC5QSSAvIGJhbGxJbmxheWVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oZGVnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcyA9IE1hdGguY29zKGRlZyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4ID0gcmFkaXVzICogY29zICsgY2FudmFzV2lkdGggLyAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeSA9IHJhZGl1cyAqIHNpbiArIGNhbnZhc0hlaWdodCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2eCA9IHNwZWVkICogY29zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdnkgPSBzcGVlZCAqIHNpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWxsTGlzdC5wdXNoKG5ldyBCYWxsKHgsIHksIHZ4LCB2eSwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgY3R4KSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZShiYWxsTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodClcclxuICAgICAgICAgICAgICAgICAgICBiYWxsTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5kcmF3KClcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3KClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGUoYmFsbExpc3QpXHJcbiAgICAgICAgICAgICAgICB9LCAxNylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAjZW5kaWZcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICAucGFnZS1ib2R5LXdyYXBwZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FudmFzIHtcclxuICAgICAgICB3aWR0aDogNjEwcnB4O1xyXG4gICAgICAgIGhlaWdodDogNjEwcnB4O1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhbnZhcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLUFscGhhIDcuYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC1BbHBoYSA3LmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2NhbnZhcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MDUxNzU3ODI0NjVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9IQnVpbGRlclgtQWxwaGEgNy5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9