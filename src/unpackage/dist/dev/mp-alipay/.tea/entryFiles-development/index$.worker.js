if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/u-link/u-link?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/page-head/page-head?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../components/api-set-tabbar?hash=84267f235aff0fa7901198043c14a54db1f39b33');
require('../../components/uni-icons/uni-icons?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-transition/uni-transition?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-popup/uni-popup?hash=63f3d097e78ac04213190ce4a92c81860617f7b4');
require('../../components/uni-section/uni-section?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-badge/uni-badge?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-countdown/uni-countdown?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-drawer/uni-drawer?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-load-more/uni-load-more?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-status-bar/uni-status-bar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-nav-bar/uni-nav-bar?hash=e131c6705ecd6504274661106fc380014f3123b8');
require('../../components/uni-number-box/uni-number-box?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-popup-message/uni-popup-message?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-popup-dialog/uni-popup-dialog?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-popup-share/uni-popup-share?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-segmented-control/uni-segmented-control?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-tag/uni-tag?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-list/uni-list?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-list-item/uni-list-item?hash=4d329260cffa6d8c60f86626d2831f4b67a20adf');
require('../../components/uni-card/uni-card?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-collapse/uni-collapse?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-collapse-item/uni-collapse-item?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/uni-pagination/uni-pagination?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/uni-swiper-dot/uni-swiper-dot?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-grid/uni-grid?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-grid-item/uni-grid-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-rate/uni-rate?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/uni-steps/uni-steps?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/uni-notice-bar/uni-notice-bar?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/uni-swipe-action/uni-swipe-action?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../components/uni-swipe-action-item/uni-swipe-action-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-search-bar/uni-search-bar?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/uni-calendar/uni-calendar-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/uni-calendar/uni-calendar?hash=39d75801fe65ecc7ad5149459f3065de50abed34');
require('../../components/uni-indexed-list/uni-indexed-list-item?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/uni-indexed-list/uni-indexed-list?hash=a8c06395a838d07c400d300102c3cca4b13e3fa8');
require('../../components/uni-fab/uni-fab?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-fav/uni-fav?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/uni-goods-nav/uni-goods-nav?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/uni-title/uni-title?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-link/uni-link?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-combox/uni-combox?hash=993ca45dec9dcdb8f19451ba17e5ec831eb613a0');
require('../../components/uni-list-chat/uni-list-chat?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-test/uni-test?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../pages/template/component-communication/reciver?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/template/component-communication/sender?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/template/component-communication/sender-bus?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/template/tabbar/news-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/tabBar/component/component?hash=8f86791ac1590b2475678d21a7cbae1c48a6c458');
require('../../pages/tabBar/API/API?hash=090cb42dfc757495c703ac94f41281a64efca26b');
require('../../pages/tabBar/template/template?hash=8f86791ac1590b2475678d21a7cbae1c48a6c458');
require('../../pages/tabBar/extUI/extUI?hash=8f86791ac1590b2475678d21a7cbae1c48a6c458');
require('../../pages/component/view/view?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/scroll-view/scroll-view?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/swiper/swiper?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/cover-view/cover-view?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/movable-view/movable-view?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/text/text?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/rich-text/rich-text?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/progress/progress?hash=4d26460070efeb11f48bf639af08d5e068165dc2');
require('../../pages/component/button/button?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/checkbox/checkbox?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/form/form?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/input/input?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/component/label/label?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/picker/picker?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/picker-view/picker-view?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/radio/radio?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/slider/slider?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/switch/switch?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/textarea/textarea?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/navigator/navigator?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/navigator/navigate/navigate?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/navigator/redirect/redirect?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/image/image?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/video/video?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/map/map?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/canvas/canvas?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/component/web-view/web-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/component/ad/ad?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/login/login?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/get-user-info/get-user-info?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/request-payment/request-payment?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/share/share?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/set-navigation-bar-title/set-navigation-bar-title?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/show-loading/show-loading?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/navigator/navigator?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/navigator/new-page/new-vue-page-1?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/navigator/new-page/new-vue-page-2?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/API/navigator/new-page/new-nvue-page-1?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/API/navigator/new-page/new-nvue-page-2?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/API/pull-down-refresh/pull-down-refresh?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/animation/animation?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/get-node-info/get-node-info?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/intersection-observer/intersection-observer?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/canvas/canvas?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/action-sheet/action-sheet?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/modal/modal?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/toast/toast?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/get-network-type/get-network-type?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/get-system-info/get-system-info?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/add-phone-contact/add-phone-contact?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/on-accelerometer-change/on-accelerometer-change?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/on-compass-change/on-compass-change?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/make-phone-call/make-phone-call?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/scan-code/scan-code?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/clipboard/clipboard?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/request/request?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/upload-file/upload-file?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/download-file/download-file?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/image/image?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/voice/voice?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/inner-audio/inner-audio?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/background-audio/background-audio?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/video/video?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/file/file?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/map/map?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/API/get-location/get-location?hash=2649280af003fb9e9f15cfdf47891dac3f5e137a');
require('../../pages/API/open-location/open-location?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/choose-location/choose-location?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/storage/storage?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/sqlite/sqlite?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/brightness/brightness?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/vibrate/vibrate?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/API/websocket-global/websocket-global?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/extUI/badge/badge?hash=2831fb3dfac274a2cedc3a64be3998a05e708df8');
require('../../pages/extUI/countdown/countdown?hash=7b38ee8c905b451b22709c1ab87cb1b2b7f1d22d');
require('../../pages/extUI/drawer/drawer?hash=7cc4007b5fb97ef4661067b4a5c06bd2fa70ec23');
require('../../pages/extUI/icons/icons?hash=5552876e8694e0a996aba68fdc06b61d4d9e8364');
require('../../pages/extUI/load-more/load-more?hash=496a74d0cced6dc6e5f2b438ec10aed40b41a746');
require('../../pages/extUI/nav-bar/nav-bar?hash=5ca0e2e937d16722cb9e5d6e45314fae87ed544d');
require('../../pages/extUI/number-box/number-box?hash=1dfd6a646da969c3f74c6bdd80ccebaf24d560a4');
require('../../pages/extUI/popup/popup?hash=3db9ce2a1bff894dfe6ced1135872a10741aa7eb');
require('../../pages/extUI/segmented-control/segmented-control?hash=caab9e58232485b2cd38e4e98848533177ccd120');
require('../../pages/extUI/tag/tag?hash=ded178ce9a64028424067b6f402005dfbbb1fd01');
require('../../pages/extUI/list/list?hash=45b6468daf67b793e19fdb4c7c5470c1308f6f0e');
require('../../pages/extUI/card/card?hash=e73b4b18c0229f51885b7f264924c339e965c093');
require('../../pages/extUI/collapse/collapse?hash=1625bcc30302907e573703fa7a9b50a06259aeca');
require('../../pages/extUI/pagination/pagination?hash=f6a2389e9d766b0181a5713e7e003789d03e9c2e');
require('../../pages/extUI/swiper-dot/swiper-dot?hash=28a53ff7cf035bf9e27e4b4d44b54358987dee74');
require('../../pages/extUI/grid/grid?hash=97e52224ef723bc592dae095dcce25bf9adec713');
require('../../pages/extUI/rate/rate?hash=9253152992158050c0339199097e9b51c4cc190c');
require('../../pages/extUI/steps/steps?hash=8edadf672ffa594e6d6b9b4de5327ef0d33aecb5');
require('../../pages/extUI/notice-bar/notice-bar?hash=38822708f3d6841ee4eb4c5b3e7a6cc287738884');
require('../../pages/extUI/swipe-action/swipe-action?hash=37e2e270740ce860ecbd7e6fb1bc7106627035b4');
require('../../pages/extUI/search-bar/search-bar?hash=e9aee4ed9a8111f79c16bfbd3cae8149deed73fd');
require('../../pages/extUI/calendar/calendar?hash=118ba7f2703c38e886fe733f1e4a4d003d7a3e92');
require('../../pages/extUI/indexed-list/indexed-list?hash=e2b4236570e7968a068b3230962c1847b87d4bad');
require('../../pages/extUI/fab/fab?hash=864cc4a6a1ba7ecec3bb3ce0f9e950c94c2de1a3');
require('../../pages/extUI/fav/fav?hash=8cb2655eb5e33acb5ea16b35d0183ad869e0a4cf');
require('../../pages/extUI/goods-nav/goods-nav?hash=fa27f24e32199dc93da4beefa7b7e94eb22d873b');
require('../../pages/extUI/section/section?hash=257fbb720eddb02a9d76c4fcc6fe21d10312ce8f');
require('../../pages/extUI/transition/transition?hash=6aca838a4a429ca94ec275c7223e58ca3e2a0c82');
require('../../pages/extUI/title/title?hash=81cc4e182895e0d8ce5bbe5a2a1717d8dd4d0eb2');
require('../../pages/extUI/link/link?hash=4633a32094e255145b634af6c3d910b52945091b');
require('../../pages/extUI/combox/combox?hash=ab268ed6305240d844a29a412b5351d76b72c5c6');
require('../../pages/extUI/list/ad?hash=257fbb720eddb02a9d76c4fcc6fe21d10312ce8f');
require('../../pages/extUI/list/chat?hash=a990fe4f8b7e5c1f58d143d5b2d94d77a312f86d');
require('../../pages/extUI/test/test?hash=b2e11aed38dd0ecb7f027fc73bc06c1d865276d6');
require('../../pages/template/ucharts/ucharts?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/template/nav-default/nav-default?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/template/component-communication/component-communication?hash=7da33990d709dec0cab20ce8217739988c28515d');
require('../../pages/template/nav-transparent/nav-transparent?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/template/nav-image/nav-image?hash=4d26460070efeb11f48bf639af08d5e068165dc2');
require('../../pages/template/list2detail-list/list2detail-list?hash=548cdad7a262b25f01107ed1c1dbcecfeb45a493');
require('../../pages/template/list2detail-detail/list2detail-detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/template/tabbar/tabbar?hash=55f81ccf034dfc0920a09cb18ce9b1bccc48ac9e');
require('../../pages/template/tabbar/detail/detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/template/scheme/scheme?hash=9754fd00aaef68491972f664ad05ecc7e30c57f2');
require('../../pages/template/global/global?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}