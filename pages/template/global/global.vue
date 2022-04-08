<template>
	<view class="pa">
		<view class="uni-divider">
			<view class="uni-divider__content">globalData</view>
			<view class="uni-divider__line"></view>
		</view>
		<text class="text">The value of text in globalData: {{gd.test}}</text>
		<button @click="setGD()" class="button">Modify the above value to 123</button>

		<view class="uni-divider">
			<view class="uni-divider__content">vuex</view>
			<view class="uni-divider__line"></view>
		</view>
		<text class="text">The value of hasLogin in vuex: {{testvuex}}</text>
		<button @click="setVUEX(true)" class="button">Modify the above value to true</button>
		<button @click="setVUEX(false)" class="button">Modify the above value to false</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				gd:{}
			}
		},
		computed: {
			...mapState(['testvuex'])
		},
		methods: {
			...mapMutations(['setTestTrue']),
			...mapMutations(['setTestFalse']),
			setGD:function () {
				this.gd.test="123"
			},
			setVUEX:function (isTrue) {
				// console.log("this.testvuex: " + this.testvuex);
				// this.hasLogin = true; 这样赋值不生效，必须用store/index.js里注册的mapMutations才行
				if(isTrue){
					this.setTestTrue(this.$store.state);
				}
				else{
					this.setTestFalse(this.$store.state);
				}
				// console.log("this.testvuex: " + this.testvuex);
			}
		},
		onShow() {
			this.gd = getApp().globalData
		}
	}
</script>

<style>
.button {
	margin: 30rpx;
	color: #007AFF;
}
.text{
	margin-left: 30rpx;
}
</style>
