<template>
    <list :id="pageId" class="page" :bounce="false" fixFreezing="true">
        <cell>
            <view id="head" class="header">
                <text class="header-title">header</text>
            </view>
        </cell>
        <cell>
            <view class="tabs" :style="'height:' + pageHeight + 'px'">
                <scroll-view ref="tabbar1" id="tab-bar" class="tab-bar" :scroll="false" :scroll-x="true"
                    :show-scrollbar="false" :scroll-into-view="scrollInto">
                    <view style="flex-direction: column;">
                        <view style="flex-direction: row;">
                            <view class="uni-tab-item" v-for="(tab,index) in tabList" :key="tab.id" :id="tab.id" :ref="'tabitem'+index"
                                :data-id="index" :data-current="index" @click="ontabtap">
                                <text class="uni-tab-item-title" :class="tabIndex==index ? 'uni-tab-item-title-active' : ''">{{tab.name}}</text>
                            </view>
                        </view>
                        <view class="scroll-view-indicator">
                            <view ref="underline" class="scroll-view-underline" :class="isTap ? 'scroll-view-animation':''"
                                :style="{left: indicatorLineLeft + 'px', width: indicatorLineWidth + 'px'}"></view>
                        </view>
                    </view>
                </scroll-view>
                <view class="tab-bar-line"></view>
                <swiper class="tab-view" ref="swiper1" id="tab-bar-view" :current="tabIndex" :duration="300" @change="onswiperchange"
                    @transition="onswiperscroll" @animationfinish="animationfinish" @onAnimationEnd="animationfinish">
                    <swiper-item class="swiper-item" v-for="(page, index) in tabList" :key="index">
                        <swiper-page class="swiper-page" :pid="page.pageid" :parentId="pageId" ref="page"></swiper-page>
                    </swiper-item>
                </swiper>
            </view>
        </cell>
    </list>
</template>

<script>
    // #ifdef APP-PLUS
    const dom = weex.requireModule('dom');
    // #endif

    // 缓存每页最多
    const MAX_CACHE_DATA = 100;

    // 缓存页签数量
    const MAX_CACHE_PAGE = 3;
    const TAB_PRELOAD_OFFSET = 1;

    import swiperPage from './swiper-page.nvue';

    export default {
        components: {
            swiperPage
        },
        data() {
            return {
                tabList: [],
                tabIndex: 0,
                cacheTab: [],
                scrollInto: "",
                indicatorLineLeft: 0,
                indicatorLineWidth: 0,
                isTap: false,
                showTitleView: true,
                pageHeight: 300,
                pageId: "page"
            }
        },
        onLoad() {
            for (var i = 0; i < 6; i++) {
                this.tabList.push({
                    id: "tab" + i,
                    name: 'Tab ' + (i + 1),
                    pageid: i + 1
                })
            }
        },
        onReady() {
            this.pageHeight = uni.getSystemInfoSync().windowHeight;
            this._lastTabIndex = 0;
            this.swiperWidth = 0;
            this.tabbarWidth = 0;
            this.tabListSize = {};
            this._touchTabIndex = 0;
            this._headHeight = 100;

            this.pageList = this.$refs.page;
            this.selectorQuery();
        },
        methods: {
            ontabtap(e) {
                let index = e.target.dataset.current || e.currentTarget.dataset.current;
                //let offsetIndex = this._touchTabIndex = Math.abs(index - this._lastTabIndex) > 1;

                // #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
                this.isTap = true;
                var currentSize = this.tabListSize[index];
                this.updateIndicator(currentSize.left, currentSize.width);
                this._touchTabIndex = index;
                // #endif

                this.switchTab(index);
            },
            onswiperchange(e) {
                // 注意：百度小程序会触发2次

                // #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
                let index = e.target.current || e.detail.current;
                this.switchTab(index);
                // #endif
            },
            onswiperscroll(e) {
                if (this.isTap) {
                    return;
                }

                var offsetX = e.detail.dx;
                var preloadIndex = this._lastTabIndex;
                if (offsetX > TAB_PRELOAD_OFFSET) {
                    preloadIndex++;
                } else if (offsetX < -TAB_PRELOAD_OFFSET) {
                    preloadIndex--;
                }
                if (preloadIndex === this._lastTabIndex || preloadIndex < 0 || preloadIndex > this.pageList.length - 1) {
                    return;
                }
                if (this.pageList[preloadIndex].dataList.length === 0) {
                    this.loadTabData(preloadIndex);
                }

                // #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
                var percentage = Math.abs(this.swiperWidth / offsetX);
                var currentSize = this.tabListSize[this._lastTabIndex];
                var preloadSize = this.tabListSize[preloadIndex];
                var lineL = currentSize.left + (preloadSize.left - currentSize.left) / percentage;
                var lineW = currentSize.width + (preloadSize.width - currentSize.width) / percentage;
                this.updateIndicator(lineL, lineW);
                // #endif
            },
            animationfinish(e) {
                // #ifdef APP-PLUS || H5 || MP-WEIXIN || MP-QQ
                let index = e.detail.current;
                if (this._touchTabIndex === index) {
                    this.isTap = false;
                }
                this._lastTabIndex = index;
                this.switchTab(index);
                this.updateIndicator(this.tabListSize[index].left, this.tabListSize[index].width);
                // #endif
            },
            selectorQuery() {
                // #ifdef APP-NVUE
                uni.createSelectorQuery().in(this).select('#head').boundingClientRect().exec(rect => {
                    this._headHeight = rect[0].height;
                });

                // 查询 tabbar 宽度
                uni.createSelectorQuery().in(this).select('#tab-bar').boundingClientRect().exec(rect => {
                    this.tabbarWidth = rect[0].width;
                });
                // 查询 tabview 宽度
                uni.createSelectorQuery().in(this).select('#tab-bar-view').boundingClientRect().exec(rect => {
                    this.swiperWidth = rect[0].width;
                });

                // 因 nvue 暂不支持 class 查询
                var queryTabSize = uni.createSelectorQuery().in(this);
                for (var i = 0; i < this.tabList.length; i++) {
                    queryTabSize.select('#' + this.tabList[i].id).boundingClientRect();
                }
                queryTabSize.exec(rects => {
                    rects.forEach((rect) => {
                        this.tabListSize[rect.dataset.id] = rect;
                    })
                    this.updateIndicator(this.tabListSize[this.tabIndex].left, this.tabListSize[this.tabIndex].width);
                    this.switchTab(this.tabIndex);
                });
                // #endif

                // #ifdef MP-WEIXIN || H5 || MP-QQ
                uni.createSelectorQuery().in(this).select('.tab-view').fields({
                    dataset: true,
                    size: true,
                }, (res) => {
                    this.swiperWidth = res.width;
                }).exec();
                uni.createSelectorQuery().in(this).selectAll('.uni-tab-item').boundingClientRect((rects) => {
                    rects.forEach((rect) => {
                        this.tabListSize[rect.dataset.id] = rect;
                    })
                    this.updateIndicator(this.tabListSize[this.tabIndex].left, this.tabListSize[this.tabIndex].width);
                }).exec();
                // #endif
            },
            updateIndicator(left, width) {
                this.indicatorLineLeft = left;
                this.indicatorLineWidth = width;
            },
            switchTab(index) {
                if (this.pageList[index].dataList.length === 0) {
                    this.loadTabData(index);
                }

                this.pageList[index].setScrollRef(this._headHeight);

                if (this.tabIndex === index) {
                    return;
                }

                // 缓存 tabId
                if (this.pageList[this.tabIndex].dataList.length > MAX_CACHE_DATA) {
                    let isExist = this.cacheTab.indexOf(this.tabIndex);
                    if (isExist < 0) {
                        this.cacheTab.push(this.tabIndex);
                    }
                }

                this.tabIndex = index;

                // #ifdef APP-NVUE
                this.scrollTabTo(index);
                // #endif
                // #ifndef APP-NVUE
                this.scrollInto = this.tabList[index].id;
                // #endif

                // 释放 tabId
                if (this.cacheTab.length > MAX_CACHE_PAGE) {
                    let cacheIndex = this.cacheTab[0];
                    this.clearTabData(cacheIndex);
                    this.cacheTab.splice(0, 1);
                }
            },
            scrollTabTo(index) {
                const el = this.$refs['tabitem' + index][0];
                let offset = 0;
                // TODO fix ios offset
                if (index > 0) {
                    offset = this.tabbarWidth / 2 - this.tabListSize[index].width / 2;
                    if (this.tabListSize[index].right < this.tabbarWidth / 2) {
                        offset = this.tabListSize[0].width;
                    }
                }
                dom.scrollToElement(el, {
                    offset: -offset
                });
            },
            loadTabData(index) {
                this.pageList[index].loadData();
            },
            clearTabData(index) {
                this.pageList[index].clear();
            }
        }
    }
</script>

<style>
    /* #ifndef APP-PLUS */
    page {
        width: 100%;
        min-height: 100%;
        display: flex;
    }

    /* #endif */

    .page {
        flex: 1;
    }

    .header {
        height: 160px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: #f4f4f4;
    }

    .header-title {
        font-size: 30px;
        font-weight: bold;
        color: #444;
    }

    .flexible-view {
        background-color: #f823ff;
    }

    .page-head {
        height: 200px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: red;
    }

    .tabs {
        flex-direction: column;
        overflow: hidden;
        background-color: #ffffff;
        /* #ifdef MP-ALIPAY || MP-BAIDU */
        height: 100vh;
        /* #endif */
    }

    .tab-bar {
        width: 750rpx;
        height: 84rpx;
        flex-direction: row;
        /* #ifndef APP-PLUS */
        white-space: nowrap;
        /* #endif */
    }

    /* #ifndef APP-NVUE */
    .tab-bar ::-webkit-scrollbar {
        display: none;
        width: 0 !important;
        height: 0 !important;
        -webkit-appearance: none;
        background: transparent;
    }

    /* #endif */

    .scroll-view-indicator {
        position: relative;
        height: 2px;
        background-color: transparent;
    }

    .scroll-view-underline {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 0;
        background-color: #007AFF;
    }

    .scroll-view-animation {
        transition-duration: 0.2s;
        transition-property: left;
    }

    .tab-bar-line {
        height: 1rpx;
        background-color: #cccccc;
    }

    .tab-view {
        flex: 1;
    }

    .uni-tab-item {
        /* #ifndef APP-PLUS */
        display: inline-block;
        /* #endif */
        flex-wrap: nowrap;
        padding-left: 25px;
        padding-right: 25px;
    }

    .uni-tab-item-title {
        color: #555;
        font-size: 30rpx;
        height: 80rpx;
        line-height: 80rpx;
        flex-wrap: nowrap;
        /* #ifndef APP-PLUS */
        white-space: nowrap;
        /* #endif */
    }

    .uni-tab-item-title-active {
        color: #007AFF;
    }

    .swiper-item {
        flex: 1;
        flex-direction: column;
    }

    .swiper-page {
        flex: 1;
        flex-direction: row;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
</style>
