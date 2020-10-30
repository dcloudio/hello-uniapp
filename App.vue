<script>
	import { mapState } from 'vuex'
    export default {
        onLaunch: function() {
            console.log('App Launch');
            // #ifdef APP-PLUS
            // App平台检测升级，服务端代码是通过uniCloud的云函数实现的，详情可参考：https://ext.dcloud.net.cn/plugin?id=2226
			if(plus.runtime.appid !== 'HBuilder'){ // 真机运行不需要检查更新，真机运行时appid固定为'HBuilder'，这是调试基座的appid
				uni.request({
				    url: 'https://7a3e3fa9-7820-41d0-be80-11927ac2026c.bspapp.com/http/update', //检查更新的服务器地址
				    data: {
				        appid: plus.runtime.appid,
				        version: plus.runtime.version,
				        imei: plus.device.imei
				    },
				    success: (res) => {
				        if (res.statusCode == 200 && res.data.isUpdate) {
				            // 提醒用户更新
				            uni.showModal({
				                title: '更新提示',
				                content: res.data.note ? res.data.note : '是否选择更新',
				                success: (ee) => {
				                    if (ee.confirm) {
				                        plus.runtime.openURL(res.data.url);
				                    }
				                }
				            })
				        }
				    }
				})
			}
            // #endif
        },
        onShow: function() {
            console.log('App Show')
        },
        onHide: function() {
            console.log('App Hide')
        },
		// ********暂用作适配 PC 居中*********开始
		// mounted() {
		// 	if (this.hasLeftWin) {
		// 		this.$el.style.padding ='0 20%'
		// 		this.$el.style.backgroundColor ='#fff'
		// 	}
		// },
		// computed:{
		// 	...mapState({
		// 		hasLeftWin: state => !state.noMatchLeftWindow
		// 	})
		// },
		// ********暂用作适配 PC 居中*********结束
		globalData: {
			test: ''
		}
    }
</script>

<style>
    /* #ifndef APP-PLUS-NVUE */
    /* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
    @import './common/uni.css';

	/* H5 兼容 pc 所需 */
	/* #ifdef H5 */
/* 	@media screen and (min-width: 1500px) {
		uni-content{
			width: 1400px;
			margin: 0 auto;
		}

	} */

	uni-body {
		background-color: #fff;
	}

/*
	uni-left-window::-webkit-scrollbar {
	    display: none;
	}
	uni-left-window {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	*/
	/* #endif */

    /* 以下样式用于 hello uni-app 演示所需 */
    page {
        background-color: #F1F1F1;
        height: 100%;
        font-size: 28rpx;
        line-height: 1.8;
    }
	.fix-pc-padding {
		padding: 0 50px;
	}
    .uni-header-logo {
        padding: 30rpx;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10rpx;
    }

    .uni-header-image {
        width: 100px;
        height: 100px;
    }

    .uni-hello-text {
        color: #7A7E83;
    }

    .uni-hello-addfile {
        text-align: center;
        line-height: 300rpx;
        background: #FFF;
        padding: 50rpx;
        margin-top: 10px;
        font-size: 38rpx;
        color: #808080;
    }
    /* #endif*/
</style>
