export function isPC() {
	var userAgentInfo = navigator.userAgent || '';
	var info = typeof uni !== 'undefined' && uni.getSystemInfoSync ? uni.getSystemInfoSync() : null;
	if (info && info.deviceType) {
		if (info.deviceType === 'pc') return true;
		if (info.deviceType === 'phone' || info.deviceType === 'pad') return false;
	}
	var isMobileUA = /Android|iPhone|SymbianOS|Windows Phone|iPad|iPod|Mobile|Harmony|HarmonyOS/i.test(userAgentInfo);
	if (isMobileUA) return false;
	var hasTouch = false;
	if (typeof navigator.maxTouchPoints === 'number') {
		hasTouch = navigator.maxTouchPoints > 0;
	} else if (typeof window !== 'undefined') {
		hasTouch = 'ontouchstart' in window;
	}
	if (hasTouch && typeof window !== 'undefined' && window.matchMedia) {
		var finePointer = window.matchMedia('(pointer: fine)').matches;
		var canHover = window.matchMedia('(hover: hover)').matches;
		return finePointer || canHover;
	}
	return !hasTouch;
}
