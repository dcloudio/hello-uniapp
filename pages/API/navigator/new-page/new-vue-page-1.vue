<template>
	<view class="root">
		<page-head :title="title"></page-head>
		<view class="page-body">
            <view class="new-page__text-box">
                <text class="new-page__text">从上个页面接收到参数：{{data}}</text>
            </view>
            <view class="new-page__color" @click="setColorIndex(colorIndex>1?0:colorIndex+1)" :style="{backgroundColor:currentColor}">
                <text class="new-page__color-text">点击改变颜色</text>
            </view>
            <view class="new-page__text-box">
                <text class="new-page__text">点击上方色块使用vuex在页面之间进行通讯</text>
            </view>
            <view class="new-page__button">
				<!-- #ifndef VUE3-->
                <button class="new-page__button-item" @click="navToNvue">跳转NVUE页面</button>
				<!-- #endif -->
                <button class="new-page__button-item" @click="navToVue">跳转VUE页面</button>
            </view>
		</view>
	</view>
</template>
<script>
    import {mapState,mapGetters,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				title: '新页面',
				data:""
			}
		},
        computed:{
            ...mapState(['colorIndex','colorList']),
            ...mapGetters(['currentColor'])
        },
		onLoad(e){
			if(e.data){
				this.data = e.data;
			}
            uni.$on('postMsg',(res)=>{
                uni.showModal({
                    content: `收到uni.$emit消息:${res.msg}`,
                    showCancel: false
                })
            })
		},
        onUnload() {
            uni.$off('postMsg')
        },
        methods:{
            ...mapMutations(['setColorIndex']),
            navToNvue(){
                uni.navigateTo({
                    url:'new-nvue-page-1'
                })
            },
            navToVue(){
                uni.navigateTo({
                    url:'new-vue-page-2'
                })
            }
        }
	}
</script>
<style>
    .new-page__text {
        font-size: 14px;
        color: #666666;
    }

	.root{
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.page-body{
		/* flex: 1; */
		display: flex;
        flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

    .new-page__text-box{
        padding: 20px;
    }

    .new-page__color{
        display: flex;
        width: 200px;
        height: 100px;
		justify-content: center;
		align-items: center;
    }

    .new-page__color-text{
        font-size: 14px;
        color: #FFFFFF;
        line-height: 30px;
        text-align: center;
    }

    .new-page__button-item{
        margin-top: 15px;
        width: 300px;
    }
</style>
