<template>
	<view class="page">
		<page-head title="popup"></page-head>
		<view class="uni-padding-wrap">
			<view class="uni-helllo-text uni-common-mt uni-center">
				请点击下面的按钮进行体验
			</view>
			<!-- 居中 -->
			<uni-popup :show="type==='middle'" type="middle" v-on:hidePopup="togglePopup('')">
				<view class="uni-center" style="font-size:0;">
					<image class="image" style="width:150upx;height:150upx;" mode="widthFix" src="../../../static/uni.png" />
				</view>
				<view class="uni-common-mt uni-helllo-text uni-center">
					消息内容使用 slot 形式定义
				</view>
			</uni-popup>
			<!-- 顶部 -->
			<uni-popup :show="type==='top'" type="top" msg="顶部 popup 信息内容" v-on:hidePopup="togglePopup('')"></uni-popup>
			<!-- 底部 -->
			<uni-popup :show="type==='bottom'" type="bottom" msg="底部 popup 信息内容" v-on:hidePopup="togglePopup('')"></uni-popup>
			<view class="uni-btn-v uni-common-mt">
				<button type="button" @click="togglePopup('middle')">居中弹出 popup</button>
				<button type="button" @click="togglePopup('top')" data-position="top">顶部弹出 popup</button>
				<button type="button" @click="togglePopup('bottom')" data-position="bottom">底部弹出 popup</button>
			</view>
		</view>
	</view>
</template>
<script>
	import uniPopup from '../../../components/uni-popup.vue';
	export default {
		data() {
			return {
				type:''
			}
		},
		methods: {
            togglePopup:function(type){
                this.type = type;
            }
		},
		components: {
			uniPopup
		}
	}
</script>
<style>

</style>
