<template>
    <view class="uni-container">
        <view class="uni-header-logo">
            <image class="uni-header-image" src="/static/componentIndex.png"></image>
        </view>
        <view class="uni-hello-text">
            <text class="hello-text">uni-app内置组件，展示样式仅供参考，文档详见：</text>
            <u-link class="hello-link" :href="'https://uniapp.dcloud.io/component/'" :text="'https://uniapp.dcloud.io/component/'"
                :inWhiteList="true"></u-link>
        </view>
        <view class="uni-panel" v-for="(item, index) in list" :key="item.id">
            <view class="uni-panel-h" :class="item.open ? 'uni-panel-h-on' : ''" @click="triggerCollapse(index)">
                <text class="uni-panel-text">{{item.name}}</text>
                <text class="uni-panel-icon uni-icon" :class="item.open ? 'uni-panel-icon-on' : ''">&#xe581;</text>
            </view>
            <view class="uni-panel-c" v-if="item.open">
                <view class="uni-navigate-item" v-for="(item2,key) in item.pages" :key="key" @click="goDetailPage(item2)">
                    <text class="uni-navigate-text">{{item2.name ? item2.name : item2}}</text>
                    <text class="uni-navigate-icon uni-icon">&#xe470;</text>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
    // TODO 修复Android v3 加载过慢问题
    // #ifdef APP-PLUS
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
        'fontFamily': "uniicons",
        'src': "url('/static/uni.ttf')"
    });
    // #endif

    import uLink from '@/components/uLink.vue'
    export default {
        components: {
            uLink
        },
        data() {
            return {
                list: [{
                        id: 'view',
                        name: '视图容器',
                        open: false,
                        pages: [
                            'view',
                            'scroll-view',
                            'swiper'
                            // #ifndef MP-TOUTIAO
                            ,
                            'movable-view',
                            'cover-view'
                            // #endif
                        ]
                    }, {
                        id: 'content',
                        name: '基础内容',
                        open: false,
                        pages: ['text', 'rich-text', 'progress']
                    }, {
                        id: 'form',
                        name: '表单组件',
                        open: false,
                        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'picker-view', 'radio',
                            'slider',
                            'switch', 'textarea',
                            // #ifdef MP-WEIXIN
                            'editor',
                            // #endif
                        ]
                    }, {
                        id: 'nav',
                        name: '导航',
                        open: false,
                        pages: ['navigator']
                    }, {
                        id: 'media',
                        name: '媒体组件',
                        open: false,
                        pages: [
                            'image',
                            // #ifndef MP-ALIPAY
                            'video',
                            // #endif
                            // #ifndef MP-ALIPAY || MP-TOUTIAO
                            'audio',
                            // #endif
                        ],
                    },
                    // #ifndef MP-TOUTIAO
                    {
                        id: 'map',
                        name: '地图',
                        open: false,
                        pages: ['map']

                    },
                    // #endif
                    // #ifdef APP-PLUS
                    {
                        id: 'web-view',
                        name: '网页',
                        open: false,
                        pages: [{
                            name: '网络网页',
                            url: '/pages/component/web-view/web-view'
                        }, {
                            name: '本地网页',
                            url: '/pages/component/web-view-local/web-view-local'
                        }]
                    },
                    // #endif
                    // #ifndef APP-PLUS
                    {
                        id: 'web-view',
                        name: '网页',
                        open: false,
                        pages: ['web-view']
                    },
                    // #endif
                ],
                navigateFlag: false
            }
        },
        onShareAppMessage() {
            return {
                title: '欢迎体验uni-app',
                path: '/pages/tabBar/component/component'
            }
        },
        onNavigationBarButtonTap(e) {
            uni.navigateTo({
                url: '/pages/about/about'
            });
        },
        methods: {
            triggerCollapse(e) {
                if (!this.list[e].pages) {
                    this.goDetailPage(this.list[e].url);
                    return;
                }
                for (var i = 0; i < this.list.length; ++i) {
                    if (e === i) {
                        this.list[i].open = !this.list[e].open;
                    } else {
                        this.list[i].open = false;
                    }
                }
            },
            goDetailPage(e) {
                if (this.navigateFlag) {
                    return;
                }
                this.navigateFlag = true;
                if (typeof e === 'string') {
                    uni.navigateTo({
                        url: '/pages/component/' + e + '/' + e
                    })
                } else {
                    uni.navigateTo({
                        url: e.url
                    })
                }
                setTimeout(() => {
                    this.navigateFlag = false;
                }, 200)
            }
        }
    }
</script>

<style>
    @import '../../../common/uni-nvue.css';
</style>
