jest.setTimeout(10000000);
let pageIndex = 0
const pages = [
	"/pages/component/view/view",
	"/pages/component/scroll-view/scroll-view",
	"/pages/component/movable-view/movable-view",
	"/pages/component/text/text",
	"/pages/component/progress/progress",
	"/pages/component/checkbox/checkbox",
	"/pages/component/form/form",
	"/pages/component/label/label",
	"/pages/component/radio/radio",
	"/pages/component/slider/slider",
	"/pages/component/switch/switch",
	"/pages/component/textarea/textarea",
	"/pages/component/editor/editor",
	"/pages/component/navigator/navigator",
	"/pages/component/navigator/navigate/navigate",
	"/pages/component/navigator/redirect/redirect",
	"/pages/component/image/image",
	"/pages/component/web-view/web-view",
	"/pages/API/login/login",
	"/pages/API/get-user-info/get-user-info",
	"/pages/API/request-payment/request-payment",
	"/pages/API/share/share",
	"/pages/API/set-navigation-bar-title/set-navigation-bar-title",
	"/pages/API/show-loading/show-loading",
	"/pages/API/navigator/navigator",
	"/pages/API/navigator/new-page/new-vue-page-1",
	"/pages/API/navigator/new-page/new-vue-page-2",
	"/pages/API/pull-down-refresh/pull-down-refresh",
	"/pages/API/animation/animation",
	"/pages/API/get-node-info/get-node-info",
	"/pages/API/intersection-observer/intersection-observer",
	"/pages/API/canvas/canvas",
	"/pages/API/action-sheet/action-sheet",
	"/pages/API/modal/modal",
	"/pages/API/toast/toast",
	"/pages/API/get-network-type/get-network-type",
	"/pages/API/get-system-info/get-system-info",
	"/pages/API/add-phone-contact/add-phone-contact",
	"/pages/API/on-accelerometer-change/on-accelerometer-change",
	"/pages/API/on-compass-change/on-compass-change",
	"/pages/API/make-phone-call/make-phone-call",
	"/pages/API/scan-code/scan-code",
	"/pages/API/clipboard/clipboard",
	"/pages/API/request/request",
	"/pages/API/upload-file/upload-file",
	"/pages/API/download-file/download-file",
	"/pages/API/image/image",
	"/pages/API/voice/voice",
	"/pages/API/background-audio/background-audio",
	"/pages/API/video/video",
	"/pages/API/file/file",
	"/pages/extUI/popup/popup",
	"/pages/extUI/segmented-control/segmented-control",
	"/pages/extUI/collapse/collapse",
	"/pages/extUI/pagination/pagination",
	"/pages/extUI/steps/steps",
	"/pages/extUI/swipe-action/swipe-action",
	"/pages/extUI/search-bar/search-bar",
	"/pages/extUI/fab/fab",
	"/pages/extUI/fav/fav",
	"/pages/extUI/section/section",
	"/pages/extUI/transition/transition",
	"/pages/extUI/title/title",
	"/pages/extUI/tooltip/tooltip",
	"/pages/extUI/link/link",
	"/pages/extUI/combox/combox",
	"/pages/extUI/table/table",
	"/pages/extUI/data-checkbox/data-checkbox",
	"/pages/extUI/easyinput/easyinput",
	"/pages/extUI/data-select/data-select",
	"/pages/extUI/row/row",
	"/pages/extUI/file-picker/file-picker",
	"/pages/extUI/button/button",
	"/pages/template/nav-default/nav-default",
	"/pages/template/component-communication/component-communication",
	"/pages/template/list2detail-detail/list2detail-detail",
	"/pages/template/tabbar/detail/detail",
	"/pages/template/scheme/scheme",
	"/pages/template/global/global",
	"/pages/component/rich-text/rich-text",
	"/pages/API/get-location/get-location",
	"/pages/API/open-location/open-location",
	"/pages/API/choose-location/choose-location",
	"/pages/API/storage/storage",
	"/pages/API/sqlite/sqlite",
	"/pages/API/vibrate/vibrate",
	"/pages/API/websocket-socketTask/websocket-socketTask",
	"/pages/extUI/forms/forms",
	"/pages/extUI/group/group",
	"/pages/extUI/breadcrumb/breadcrumb",
	"/pages/extUI/drawer/drawer",

	...(isMatch('web') ? [
		// 只有h5支持
		"/pages/error/404",
	] : [
		// 只有h5不支持
		"/pages/API/brightness/brightness",
		"/pages/API/save-media/save-media",
		"/pages/API/soter/soter",
		"/pages/API/bluetooth/bluetooth",
	]),

	...(isMatch('android') ? [
		// 只有app支持
		"/pages/API/subnvue/subnvue",
		"/pages/API/full-screen-video-ad/full-screen-video-ad",
		"/platforms/app-plus/feedback/feedback",
		"/platforms/app-plus/speech/speech",
		"/platforms/app-plus/orientation/orientation",
		"/platforms/app-plus/proximity/proximity",
		"/platforms/app-plus/push/push",
		"/platforms/app-plus/shake/shake",
	] : []),

	...((isMatch('android') || isMatch('mp-weixin')) ? [
		// 只有app和微信小程序支持
		"/pages/API/ibeacon/ibeacon",
	] : []),

	...(isMatch('mp-weixin') ? [] : [
		// 微信小程序不支持
		"/pages/component/web-view-local/web-view-local",
		"/pages/template/nav-transparent/nav-transparent",
		"/pages/template/nav-image/nav-image",
		"/pages/template/nav-city-dropdown/nav-city-dropdown",
		"/pages/template/nav-dot/nav-dot",
		"/pages/template/nav-search-input/detail/detail",
		"/pages/template/nav-button/nav-button",
		"/pages/template/nav-search-input/nav-search-input",
		"/pages/about/about",
	]),

	...(isMatch('safari') ? [] : [
		// safari 在此页面会莫名卡住
		"/pages/API/inner-audio/inner-audio",
	]),

	// 只有vue3支持
	// "/pages/API/navigator/new-page/new-nvue-page-1",
	// "/pages/API/navigator/new-page/new-nvue-page-2",

	// 只有vue2支持
	// "/pages/template/ucharts/ucharts",
	// "/pages/template/vant-button/vant-button",

	// 动态内容
	// "/pages/component/ad/ad",
	// "/pages/component/swiper/swiper",
	// "/pages/component/canvas/canvas",
	// "/pages/extUI/dateformat/dateformat",
	// "/pages/extUI/datetime-picker/datetime-picker",
	// "/pages/extUI/list/chat",
	// "/pages/extUI/notice-bar/notice-bar",
	// "/pages/template/list2detail-list/list2detail-list",
	// "/pages/API/rewarded-video-ad/rewarded-video-ad",
	// "/pages/extUI/badge/badge",
	// "/pages/component/picker/picker",
	// "/pages/component/picker-view/picker-view",
	// "/pages/extUI/calendar/calendar",
	// "/pages/component/button/button",

	// nvue页面截图白屏
	// "/pages/tabBar/component/component",
	// "/pages/tabBar/API/API",
	// "/pages/tabBar/template/template",
	// "/pages/tabBar/extUI/extUI",
	// "/pages/component/cover-view/cover-view",
	// "/pages/component/input/input",
	// "/pages/component/video/video",
	// "/pages/API/map/map",
	// "/pages/extUI/icons/icons",
	// "/pages/extUI/load-more/load-more",
	// "/pages/extUI/nav-bar/nav-bar",
	// "/pages/extUI/number-box/number-box",
	// "/pages/extUI/tag/tag",
	// "/pages/extUI/list/list",
	// "/pages/extUI/card/card",
	// "/pages/extUI/swiper-dot/swiper-dot",
	// "/pages/extUI/grid/grid",
	// "/pages/extUI/rate/rate",
	// "/pages/extUI/indexed-list/indexed-list",
	// "/pages/extUI/goods-nav/goods-nav",
	// "/pages/extUI/data-picker/data-picker",
	// "/pages/extUI/space/space",
	// "/pages/extUI/font/font",
	// "/pages/extUI/color/color",
	// "/pages/extUI/radius/radius",
	// "/pages/template/tabbar/tabbar",
	// "/pages/template/swiper-vertical/swiper-vertical",
	// "/pages/template/swiper-list/swiper-list",
	// "/pages/extUI/countdown/countdown",
	// "/pages/template/swiper-list-nvue/swiper-list-nvue",
	// "/pages/API/map-search/map-search",

	// "/pages/API/websocket-global/websocket-global",
	// "/pages/component/map/map",
]

function isMatch(platform) {
	return process.env.uniTestPlatformInfo.toLocaleLowerCase().includes(platform)
}
// 设置position: fixed的页面不能截取完整内容
const notFullPages = []

let page;
describe("page screenshot test", () => {
	// HarmonyOS平台不支持截图，直接跳过
	if (isMatch('ios') || isMatch('harmony')) {
		it("ios platform not support", async () => {
			expect(1).toBe(1);
		});
		return
	}
	beforeAll(async () => {
		console.log("page screenshot test start");
	});
	beforeEach(async () => {
		page = await program.reLaunch(pages[pageIndex]);
		await page.waitFor(2000);
	});
	afterEach(() => {
		pageIndex++;
	});
	afterAll(() => {
		console.log("page screenshot test finish");
	});
	test.each(pages)("%s", async () => {
		console.log("Taking screenshot: ", pageIndex, pages[pageIndex],
			`${(((pageIndex + 1) / pages.length) * 100).toFixed(1)}%`);
		let fullPage = true;
		if (notFullPages.includes(pages[pageIndex])) {
			fullPage = false;
		}
		const image = await program.screenshot({
			fullPage: fullPage
		});
		expect(image).toSaveImageSnapshot();
		await page.waitFor(500);
	});
});
