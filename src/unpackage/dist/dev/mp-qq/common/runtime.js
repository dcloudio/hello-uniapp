
  !function(){try{var a=Function("return this")();a&&!a.Math&&(Object.assign(a,{isFinite:isFinite,Array:Array,Date:Date,Error:Error,Function:Function,Math:Math,Object:Object,RegExp:RegExp,String:String,TypeError:TypeError,setTimeout:setTimeout,clearTimeout:clearTimeout,setInterval:setInterval,clearInterval:clearInterval}),"undefined"!=typeof Reflect&&(a.Reflect=Reflect))}catch(a){}}();
  /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"common/runtime": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"common/runtime": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"components/api-set-tabbar":1,"components/uni-icons/uni-icons":1,"components/uni-popup/uni-popup":1,"components/uni-badge/uni-badge":1,"components/uni-section/uni-section":1,"components/uni-countdown/uni-countdown":1,"components/uni-drawer/uni-drawer":1,"components/uni-load-more/uni-load-more":1,"components/uni-nav-bar/uni-nav-bar":1,"components/uni-number-box/uni-number-box":1,"components/uni-popup-dialog/uni-popup-dialog":1,"components/uni-popup-message/uni-popup-message":1,"components/uni-popup-share/uni-popup-share":1,"components/uni-segmented-control/uni-segmented-control":1,"components/uni-tag/uni-tag":1,"components/uni-list-item/uni-list-item":1,"components/uni-list/uni-list":1,"components/uni-card/uni-card":1,"components/uni-collapse-item/uni-collapse-item":1,"components/uni-collapse/uni-collapse":1,"components/uni-pagination/uni-pagination":1,"components/uni-swiper-dot/uni-swiper-dot":1,"components/uni-grid-item/uni-grid-item":1,"components/uni-grid/uni-grid":1,"components/uni-rate/uni-rate":1,"components/uni-steps/uni-steps":1,"components/uni-notice-bar/uni-notice-bar":1,"components/uni-swipe-action-item/uni-swipe-action-item":1,"components/uni-search-bar/uni-search-bar":1,"components/uni-calendar/uni-calendar":1,"components/uni-indexed-list/uni-indexed-list":1,"components/uni-fab/uni-fab":1,"components/uni-fav/uni-fav":1,"components/uni-goods-nav/uni-goods-nav":1,"components/uni-transition/uni-transition":1,"components/uni-title/uni-title":1,"components/uni-link/uni-link":1,"components/uni-combox/uni-combox":1,"components/uni-list-chat/uni-list-chat":1,"pages/template/component-communication/reciver":1,"pages/template/component-communication/sender-bus":1,"pages/template/component-communication/sender":1,"pages/template/tabbar/news-item":1,"pages/template/swiper-list/swiper-page":1,"components/uni-status-bar/uni-status-bar":1,"components/uni-calendar/uni-calendar-item":1,"components/uni-indexed-list/uni-indexed-list-item":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + ({"components/u-link/u-link":"components/u-link/u-link","components/api-set-tabbar":"components/api-set-tabbar","components/page-head/page-head":"components/page-head/page-head","components/uni-icons/uni-icons":"components/uni-icons/uni-icons","components/uni-popup/uni-popup":"components/uni-popup/uni-popup","components/uni-badge/uni-badge":"components/uni-badge/uni-badge","components/uni-section/uni-section":"components/uni-section/uni-section","components/uni-countdown/uni-countdown":"components/uni-countdown/uni-countdown","components/uni-drawer/uni-drawer":"components/uni-drawer/uni-drawer","components/uni-load-more/uni-load-more":"components/uni-load-more/uni-load-more","components/uni-nav-bar/uni-nav-bar":"components/uni-nav-bar/uni-nav-bar","components/uni-number-box/uni-number-box":"components/uni-number-box/uni-number-box","components/uni-popup-dialog/uni-popup-dialog":"components/uni-popup-dialog/uni-popup-dialog","components/uni-popup-message/uni-popup-message":"components/uni-popup-message/uni-popup-message","components/uni-popup-share/uni-popup-share":"components/uni-popup-share/uni-popup-share","components/uni-segmented-control/uni-segmented-control":"components/uni-segmented-control/uni-segmented-control","components/uni-tag/uni-tag":"components/uni-tag/uni-tag","components/uni-list-item/uni-list-item":"components/uni-list-item/uni-list-item","components/uni-list/uni-list":"components/uni-list/uni-list","components/uni-card/uni-card":"components/uni-card/uni-card","components/uni-collapse-item/uni-collapse-item":"components/uni-collapse-item/uni-collapse-item","components/uni-collapse/uni-collapse":"components/uni-collapse/uni-collapse","components/uni-pagination/uni-pagination":"components/uni-pagination/uni-pagination","components/uni-swiper-dot/uni-swiper-dot":"components/uni-swiper-dot/uni-swiper-dot","components/uni-grid-item/uni-grid-item":"components/uni-grid-item/uni-grid-item","components/uni-grid/uni-grid":"components/uni-grid/uni-grid","components/uni-rate/uni-rate":"components/uni-rate/uni-rate","components/uni-steps/uni-steps":"components/uni-steps/uni-steps","components/uni-notice-bar/uni-notice-bar":"components/uni-notice-bar/uni-notice-bar","components/uni-swipe-action-item/uni-swipe-action-item":"components/uni-swipe-action-item/uni-swipe-action-item","components/uni-swipe-action/uni-swipe-action":"components/uni-swipe-action/uni-swipe-action","components/uni-search-bar/uni-search-bar":"components/uni-search-bar/uni-search-bar","components/uni-calendar/uni-calendar":"components/uni-calendar/uni-calendar","components/uni-indexed-list/uni-indexed-list":"components/uni-indexed-list/uni-indexed-list","components/uni-fab/uni-fab":"components/uni-fab/uni-fab","components/uni-fav/uni-fav":"components/uni-fav/uni-fav","components/uni-goods-nav/uni-goods-nav":"components/uni-goods-nav/uni-goods-nav","components/uni-transition/uni-transition":"components/uni-transition/uni-transition","components/uni-title/uni-title":"components/uni-title/uni-title","components/uni-link/uni-link":"components/uni-link/uni-link","components/uni-combox/uni-combox":"components/uni-combox/uni-combox","components/uni-list-chat/uni-list-chat":"components/uni-list-chat/uni-list-chat","components/uni-test/uni-test":"components/uni-test/uni-test","pages/template/component-communication/reciver":"pages/template/component-communication/reciver","pages/template/component-communication/sender-bus":"pages/template/component-communication/sender-bus","pages/template/component-communication/sender":"pages/template/component-communication/sender","pages/template/tabbar/news-item":"pages/template/tabbar/news-item","pages/template/swiper-list/swiper-page":"pages/template/swiper-list/swiper-page","components/uni-status-bar/uni-status-bar":"components/uni-status-bar/uni-status-bar","components/uni-calendar/uni-calendar-item":"components/uni-calendar/uni-calendar-item","components/uni-indexed-list/uni-indexed-list-item":"components/uni-indexed-list/uni-indexed-list-item"}[chunkId]||chunkId) + ".qss";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTtRQUNBLG9CQUFvQjtRQUNwQjtRQUNBO1FBQ0E7UUFDQSx1QkFBdUIsMDdIQUEwN0g7UUFDajlIO1FBQ0E7UUFDQSxtQkFBbUIsNkJBQTZCO1FBQ2hEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxtQkFBbUIsOEJBQThCO1FBQ2pEO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0EsS0FBSztRQUNMOztRQUVBOztRQUVBO1FBQ0EsaUNBQWlDOztRQUVqQztRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esd0JBQXdCLGtDQUFrQztRQUMxRCxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0EsMENBQTBDLG9CQUFvQixXQUFXOztRQUV6RTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0EiLCJmaWxlIjoiY29tbW9uL3J1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBDU1MgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ3NzQ2h1bmtzID0ge1xuIFx0XHRcImNvbW1vbi9ydW50aW1lXCI6IDBcbiBcdH1cblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiY29tbW9uL3J1bnRpbWVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiXG4gXHR9XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiBDU1MgbG9hZGluZ1xuIFx0XHR2YXIgY3NzQ2h1bmtzID0ge1wiY29tcG9uZW50cy9hcGktc2V0LXRhYmJhclwiOjEsXCJjb21wb25lbnRzL3VuaS1pY29ucy91bmktaWNvbnNcIjoxLFwiY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwXCI6MSxcImNvbXBvbmVudHMvdW5pLWJhZGdlL3VuaS1iYWRnZVwiOjEsXCJjb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uXCI6MSxcImNvbXBvbmVudHMvdW5pLWNvdW50ZG93bi91bmktY291bnRkb3duXCI6MSxcImNvbXBvbmVudHMvdW5pLWRyYXdlci91bmktZHJhd2VyXCI6MSxcImNvbXBvbmVudHMvdW5pLWxvYWQtbW9yZS91bmktbG9hZC1tb3JlXCI6MSxcImNvbXBvbmVudHMvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXJcIjoxLFwiY29tcG9uZW50cy91bmktbnVtYmVyLWJveC91bmktbnVtYmVyLWJveFwiOjEsXCJjb21wb25lbnRzL3VuaS1wb3B1cC1kaWFsb2cvdW5pLXBvcHVwLWRpYWxvZ1wiOjEsXCJjb21wb25lbnRzL3VuaS1wb3B1cC1tZXNzYWdlL3VuaS1wb3B1cC1tZXNzYWdlXCI6MSxcImNvbXBvbmVudHMvdW5pLXBvcHVwLXNoYXJlL3VuaS1wb3B1cC1zaGFyZVwiOjEsXCJjb21wb25lbnRzL3VuaS1zZWdtZW50ZWQtY29udHJvbC91bmktc2VnbWVudGVkLWNvbnRyb2xcIjoxLFwiY29tcG9uZW50cy91bmktdGFnL3VuaS10YWdcIjoxLFwiY29tcG9uZW50cy91bmktbGlzdC1pdGVtL3VuaS1saXN0LWl0ZW1cIjoxLFwiY29tcG9uZW50cy91bmktbGlzdC91bmktbGlzdFwiOjEsXCJjb21wb25lbnRzL3VuaS1jYXJkL3VuaS1jYXJkXCI6MSxcImNvbXBvbmVudHMvdW5pLWNvbGxhcHNlLWl0ZW0vdW5pLWNvbGxhcHNlLWl0ZW1cIjoxLFwiY29tcG9uZW50cy91bmktY29sbGFwc2UvdW5pLWNvbGxhcHNlXCI6MSxcImNvbXBvbmVudHMvdW5pLXBhZ2luYXRpb24vdW5pLXBhZ2luYXRpb25cIjoxLFwiY29tcG9uZW50cy91bmktc3dpcGVyLWRvdC91bmktc3dpcGVyLWRvdFwiOjEsXCJjb21wb25lbnRzL3VuaS1ncmlkLWl0ZW0vdW5pLWdyaWQtaXRlbVwiOjEsXCJjb21wb25lbnRzL3VuaS1ncmlkL3VuaS1ncmlkXCI6MSxcImNvbXBvbmVudHMvdW5pLXJhdGUvdW5pLXJhdGVcIjoxLFwiY29tcG9uZW50cy91bmktc3RlcHMvdW5pLXN0ZXBzXCI6MSxcImNvbXBvbmVudHMvdW5pLW5vdGljZS1iYXIvdW5pLW5vdGljZS1iYXJcIjoxLFwiY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uLWl0ZW0vdW5pLXN3aXBlLWFjdGlvbi1pdGVtXCI6MSxcImNvbXBvbmVudHMvdW5pLXNlYXJjaC1iYXIvdW5pLXNlYXJjaC1iYXJcIjoxLFwiY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyXCI6MSxcImNvbXBvbmVudHMvdW5pLWluZGV4ZWQtbGlzdC91bmktaW5kZXhlZC1saXN0XCI6MSxcImNvbXBvbmVudHMvdW5pLWZhYi91bmktZmFiXCI6MSxcImNvbXBvbmVudHMvdW5pLWZhdi91bmktZmF2XCI6MSxcImNvbXBvbmVudHMvdW5pLWdvb2RzLW5hdi91bmktZ29vZHMtbmF2XCI6MSxcImNvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb25cIjoxLFwiY29tcG9uZW50cy91bmktdGl0bGUvdW5pLXRpdGxlXCI6MSxcImNvbXBvbmVudHMvdW5pLWxpbmsvdW5pLWxpbmtcIjoxLFwiY29tcG9uZW50cy91bmktY29tYm94L3VuaS1jb21ib3hcIjoxLFwiY29tcG9uZW50cy91bmktbGlzdC1jaGF0L3VuaS1saXN0LWNoYXRcIjoxLFwicGFnZXMvdGVtcGxhdGUvY29tcG9uZW50LWNvbW11bmljYXRpb24vcmVjaXZlclwiOjEsXCJwYWdlcy90ZW1wbGF0ZS9jb21wb25lbnQtY29tbXVuaWNhdGlvbi9zZW5kZXItYnVzXCI6MSxcInBhZ2VzL3RlbXBsYXRlL2NvbXBvbmVudC1jb21tdW5pY2F0aW9uL3NlbmRlclwiOjEsXCJwYWdlcy90ZW1wbGF0ZS90YWJiYXIvbmV3cy1pdGVtXCI6MSxcInBhZ2VzL3RlbXBsYXRlL3N3aXBlci1saXN0L3N3aXBlci1wYWdlXCI6MSxcImNvbXBvbmVudHMvdW5pLXN0YXR1cy1iYXIvdW5pLXN0YXR1cy1iYXJcIjoxLFwiY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLWl0ZW1cIjoxLFwiY29tcG9uZW50cy91bmktaW5kZXhlZC1saXN0L3VuaS1pbmRleGVkLWxpc3QtaXRlbVwiOjF9O1xuIFx0XHRpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0pIHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0ZWxzZSBpZihpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gIT09IDAgJiYgY3NzQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDc3NDaHVua3NbY2h1bmtJZF0gPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdHZhciBocmVmID0gXCJcIiArICh7XCJjb21wb25lbnRzL3UtbGluay91LWxpbmtcIjpcImNvbXBvbmVudHMvdS1saW5rL3UtbGlua1wiLFwiY29tcG9uZW50cy9hcGktc2V0LXRhYmJhclwiOlwiY29tcG9uZW50cy9hcGktc2V0LXRhYmJhclwiLFwiY29tcG9uZW50cy9wYWdlLWhlYWQvcGFnZS1oZWFkXCI6XCJjb21wb25lbnRzL3BhZ2UtaGVhZC9wYWdlLWhlYWRcIixcImNvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29uc1wiOlwiY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zXCIsXCJjb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXBcIjpcImNvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cFwiLFwiY29tcG9uZW50cy91bmktYmFkZ2UvdW5pLWJhZGdlXCI6XCJjb21wb25lbnRzL3VuaS1iYWRnZS91bmktYmFkZ2VcIixcImNvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb25cIjpcImNvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb25cIixcImNvbXBvbmVudHMvdW5pLWNvdW50ZG93bi91bmktY291bnRkb3duXCI6XCJjb21wb25lbnRzL3VuaS1jb3VudGRvd24vdW5pLWNvdW50ZG93blwiLFwiY29tcG9uZW50cy91bmktZHJhd2VyL3VuaS1kcmF3ZXJcIjpcImNvbXBvbmVudHMvdW5pLWRyYXdlci91bmktZHJhd2VyXCIsXCJjb21wb25lbnRzL3VuaS1sb2FkLW1vcmUvdW5pLWxvYWQtbW9yZVwiOlwiY29tcG9uZW50cy91bmktbG9hZC1tb3JlL3VuaS1sb2FkLW1vcmVcIixcImNvbXBvbmVudHMvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXJcIjpcImNvbXBvbmVudHMvdW5pLW5hdi1iYXIvdW5pLW5hdi1iYXJcIixcImNvbXBvbmVudHMvdW5pLW51bWJlci1ib3gvdW5pLW51bWJlci1ib3hcIjpcImNvbXBvbmVudHMvdW5pLW51bWJlci1ib3gvdW5pLW51bWJlci1ib3hcIixcImNvbXBvbmVudHMvdW5pLXBvcHVwLWRpYWxvZy91bmktcG9wdXAtZGlhbG9nXCI6XCJjb21wb25lbnRzL3VuaS1wb3B1cC1kaWFsb2cvdW5pLXBvcHVwLWRpYWxvZ1wiLFwiY29tcG9uZW50cy91bmktcG9wdXAtbWVzc2FnZS91bmktcG9wdXAtbWVzc2FnZVwiOlwiY29tcG9uZW50cy91bmktcG9wdXAtbWVzc2FnZS91bmktcG9wdXAtbWVzc2FnZVwiLFwiY29tcG9uZW50cy91bmktcG9wdXAtc2hhcmUvdW5pLXBvcHVwLXNoYXJlXCI6XCJjb21wb25lbnRzL3VuaS1wb3B1cC1zaGFyZS91bmktcG9wdXAtc2hhcmVcIixcImNvbXBvbmVudHMvdW5pLXNlZ21lbnRlZC1jb250cm9sL3VuaS1zZWdtZW50ZWQtY29udHJvbFwiOlwiY29tcG9uZW50cy91bmktc2VnbWVudGVkLWNvbnRyb2wvdW5pLXNlZ21lbnRlZC1jb250cm9sXCIsXCJjb21wb25lbnRzL3VuaS10YWcvdW5pLXRhZ1wiOlwiY29tcG9uZW50cy91bmktdGFnL3VuaS10YWdcIixcImNvbXBvbmVudHMvdW5pLWxpc3QtaXRlbS91bmktbGlzdC1pdGVtXCI6XCJjb21wb25lbnRzL3VuaS1saXN0LWl0ZW0vdW5pLWxpc3QtaXRlbVwiLFwiY29tcG9uZW50cy91bmktbGlzdC91bmktbGlzdFwiOlwiY29tcG9uZW50cy91bmktbGlzdC91bmktbGlzdFwiLFwiY29tcG9uZW50cy91bmktY2FyZC91bmktY2FyZFwiOlwiY29tcG9uZW50cy91bmktY2FyZC91bmktY2FyZFwiLFwiY29tcG9uZW50cy91bmktY29sbGFwc2UtaXRlbS91bmktY29sbGFwc2UtaXRlbVwiOlwiY29tcG9uZW50cy91bmktY29sbGFwc2UtaXRlbS91bmktY29sbGFwc2UtaXRlbVwiLFwiY29tcG9uZW50cy91bmktY29sbGFwc2UvdW5pLWNvbGxhcHNlXCI6XCJjb21wb25lbnRzL3VuaS1jb2xsYXBzZS91bmktY29sbGFwc2VcIixcImNvbXBvbmVudHMvdW5pLXBhZ2luYXRpb24vdW5pLXBhZ2luYXRpb25cIjpcImNvbXBvbmVudHMvdW5pLXBhZ2luYXRpb24vdW5pLXBhZ2luYXRpb25cIixcImNvbXBvbmVudHMvdW5pLXN3aXBlci1kb3QvdW5pLXN3aXBlci1kb3RcIjpcImNvbXBvbmVudHMvdW5pLXN3aXBlci1kb3QvdW5pLXN3aXBlci1kb3RcIixcImNvbXBvbmVudHMvdW5pLWdyaWQtaXRlbS91bmktZ3JpZC1pdGVtXCI6XCJjb21wb25lbnRzL3VuaS1ncmlkLWl0ZW0vdW5pLWdyaWQtaXRlbVwiLFwiY29tcG9uZW50cy91bmktZ3JpZC91bmktZ3JpZFwiOlwiY29tcG9uZW50cy91bmktZ3JpZC91bmktZ3JpZFwiLFwiY29tcG9uZW50cy91bmktcmF0ZS91bmktcmF0ZVwiOlwiY29tcG9uZW50cy91bmktcmF0ZS91bmktcmF0ZVwiLFwiY29tcG9uZW50cy91bmktc3RlcHMvdW5pLXN0ZXBzXCI6XCJjb21wb25lbnRzL3VuaS1zdGVwcy91bmktc3RlcHNcIixcImNvbXBvbmVudHMvdW5pLW5vdGljZS1iYXIvdW5pLW5vdGljZS1iYXJcIjpcImNvbXBvbmVudHMvdW5pLW5vdGljZS1iYXIvdW5pLW5vdGljZS1iYXJcIixcImNvbXBvbmVudHMvdW5pLXN3aXBlLWFjdGlvbi1pdGVtL3VuaS1zd2lwZS1hY3Rpb24taXRlbVwiOlwiY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uLWl0ZW0vdW5pLXN3aXBlLWFjdGlvbi1pdGVtXCIsXCJjb21wb25lbnRzL3VuaS1zd2lwZS1hY3Rpb24vdW5pLXN3aXBlLWFjdGlvblwiOlwiY29tcG9uZW50cy91bmktc3dpcGUtYWN0aW9uL3VuaS1zd2lwZS1hY3Rpb25cIixcImNvbXBvbmVudHMvdW5pLXNlYXJjaC1iYXIvdW5pLXNlYXJjaC1iYXJcIjpcImNvbXBvbmVudHMvdW5pLXNlYXJjaC1iYXIvdW5pLXNlYXJjaC1iYXJcIixcImNvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhclwiOlwiY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyXCIsXCJjb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdFwiOlwiY29tcG9uZW50cy91bmktaW5kZXhlZC1saXN0L3VuaS1pbmRleGVkLWxpc3RcIixcImNvbXBvbmVudHMvdW5pLWZhYi91bmktZmFiXCI6XCJjb21wb25lbnRzL3VuaS1mYWIvdW5pLWZhYlwiLFwiY29tcG9uZW50cy91bmktZmF2L3VuaS1mYXZcIjpcImNvbXBvbmVudHMvdW5pLWZhdi91bmktZmF2XCIsXCJjb21wb25lbnRzL3VuaS1nb29kcy1uYXYvdW5pLWdvb2RzLW5hdlwiOlwiY29tcG9uZW50cy91bmktZ29vZHMtbmF2L3VuaS1nb29kcy1uYXZcIixcImNvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb25cIjpcImNvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb25cIixcImNvbXBvbmVudHMvdW5pLXRpdGxlL3VuaS10aXRsZVwiOlwiY29tcG9uZW50cy91bmktdGl0bGUvdW5pLXRpdGxlXCIsXCJjb21wb25lbnRzL3VuaS1saW5rL3VuaS1saW5rXCI6XCJjb21wb25lbnRzL3VuaS1saW5rL3VuaS1saW5rXCIsXCJjb21wb25lbnRzL3VuaS1jb21ib3gvdW5pLWNvbWJveFwiOlwiY29tcG9uZW50cy91bmktY29tYm94L3VuaS1jb21ib3hcIixcImNvbXBvbmVudHMvdW5pLWxpc3QtY2hhdC91bmktbGlzdC1jaGF0XCI6XCJjb21wb25lbnRzL3VuaS1saXN0LWNoYXQvdW5pLWxpc3QtY2hhdFwiLFwiY29tcG9uZW50cy91bmktdGVzdC91bmktdGVzdFwiOlwiY29tcG9uZW50cy91bmktdGVzdC91bmktdGVzdFwiLFwicGFnZXMvdGVtcGxhdGUvY29tcG9uZW50LWNvbW11bmljYXRpb24vcmVjaXZlclwiOlwicGFnZXMvdGVtcGxhdGUvY29tcG9uZW50LWNvbW11bmljYXRpb24vcmVjaXZlclwiLFwicGFnZXMvdGVtcGxhdGUvY29tcG9uZW50LWNvbW11bmljYXRpb24vc2VuZGVyLWJ1c1wiOlwicGFnZXMvdGVtcGxhdGUvY29tcG9uZW50LWNvbW11bmljYXRpb24vc2VuZGVyLWJ1c1wiLFwicGFnZXMvdGVtcGxhdGUvY29tcG9uZW50LWNvbW11bmljYXRpb24vc2VuZGVyXCI6XCJwYWdlcy90ZW1wbGF0ZS9jb21wb25lbnQtY29tbXVuaWNhdGlvbi9zZW5kZXJcIixcInBhZ2VzL3RlbXBsYXRlL3RhYmJhci9uZXdzLWl0ZW1cIjpcInBhZ2VzL3RlbXBsYXRlL3RhYmJhci9uZXdzLWl0ZW1cIixcInBhZ2VzL3RlbXBsYXRlL3N3aXBlci1saXN0L3N3aXBlci1wYWdlXCI6XCJwYWdlcy90ZW1wbGF0ZS9zd2lwZXItbGlzdC9zd2lwZXItcGFnZVwiLFwiY29tcG9uZW50cy91bmktc3RhdHVzLWJhci91bmktc3RhdHVzLWJhclwiOlwiY29tcG9uZW50cy91bmktc3RhdHVzLWJhci91bmktc3RhdHVzLWJhclwiLFwiY29tcG9uZW50cy91bmktY2FsZW5kYXIvdW5pLWNhbGVuZGFyLWl0ZW1cIjpcImNvbXBvbmVudHMvdW5pLWNhbGVuZGFyL3VuaS1jYWxlbmRhci1pdGVtXCIsXCJjb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdC1pdGVtXCI6XCJjb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdC1pdGVtXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLnFzc1wiO1xuIFx0XHRcdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcbiBcdFx0XHRcdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuIFx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nTGlua1RhZ3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKHRhZy5yZWwgPT09IFwic3R5bGVzaGVldFwiICYmIChkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpKSByZXR1cm4gcmVzb2x2ZSgpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcbiBcdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1N0eWxlVGFncy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG4gXHRcdFx0XHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG4gXHRcdFx0XHRcdGlmKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikgcmV0dXJuIHJlc29sdmUoKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG4gXHRcdFx0XHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuIFx0XHRcdFx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuIFx0XHRcdFx0bGlua1RhZy5vbmxvYWQgPSByZXNvbHZlO1xuIFx0XHRcdFx0bGlua1RhZy5vbmVycm9yID0gZnVuY3Rpb24oZXZlbnQpIHtcbiBcdFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYyB8fCBmdWxsaHJlZjtcbiBcdFx0XHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyByZXF1ZXN0ICsgXCIpXCIpO1xuIFx0XHRcdFx0XHRlcnIuY29kZSA9IFwiQ1NTX0NIVU5LX0xPQURfRkFJTEVEXCI7XG4gXHRcdFx0XHRcdGVyci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiBcdFx0XHRcdFx0ZGVsZXRlIGluc3RhbGxlZENzc0NodW5rc1tjaHVua0lkXVxuIFx0XHRcdFx0XHRsaW5rVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlua1RhZylcbiBcdFx0XHRcdFx0cmVqZWN0KGVycik7XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cbiBcdFx0XHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuIFx0XHRcdFx0aGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcbiBcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aW5zdGFsbGVkQ3NzQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0XHR9KSk7XG4gXHRcdH1cblxuIFx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG4gXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cbiBcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcbiBcdFx0XHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0XHRcdHZhciBvblNjcmlwdENvbXBsZXRlO1xuXG4gXHRcdFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcbiBcdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHNjcmlwdC5zcmMgPSBqc29ucFNjcmlwdFNyYyhjaHVua0lkKTtcblxuIFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuIFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG4gXHRcdFx0XHRvblNjcmlwdENvbXBsZXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gXHRcdFx0XHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cbiBcdFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdFx0XHR2YXIgY2h1bmsgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG4gXHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuIFx0XHRcdFx0XHRcdFx0Y2h1bmtbMV0oZXJyb3IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH07XG4gXHRcdFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiBcdFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSh7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSk7XG4gXHRcdFx0XHR9LCAxMjAwMDApO1xuIFx0XHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IGdsb2JhbFtcIndlYnBhY2tKc29ucFwiXSA9IGdsb2JhbFtcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgZnJvbSBvdGhlciBjaHVua3NcbiBcdGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9
  