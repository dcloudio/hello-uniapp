<template>
	<view>
		<page-head :title="title"></page-head>
		<!-- 示例1 -->
		<view class="uni-text-small uni-center title">示例1</view>
		<view>
			<uni-countdown :timer="timer1"></uni-countdown>
		</view>
		<!-- 示例2：绿底白字 -->
		<view class="uni-text-small uni-center title" >示例2</view>
		<view style="background:#00B26A; padding:50upx 0;">
			<uni-countdown :timer="timer2" borderColor="#FFFFFF" splitorColor="#FFF" fontColor="#FFFFFF" bgrColor="none"></uni-countdown>
		</view>
		<!-- 示例3：黑底白字 -->
		<view class="uni-text-small uni-center title">示例3</view>
		<view>
			<uni-countdown fontColor="#FFFFFF" bgrColor="#000000" :timer="timer3"></uni-countdown>
		</view>
	</view>
</template>
<script>
	import uniCountdown from "../../../components/uni-countdown.vue";
	export default {
		data() {
			var dateObj = new Date();
			var currentTime = dateObj.getTime();
			var timer1 = this.formatDateTime((currentTime + 1000 * 2000));
			var timer2 = this.formatDateTime((currentTime + 1000 * 3000));
			var timer3 = this.formatDateTime((currentTime + 1000 * 5000));
			return {
				title: '倒计时',
				timer1: timer1,
				timer2: timer2,
				timer3: timer3
			}
		},
		components: {
			uniCountdown
		},
		methods: {
			formatDateTime(inputTime) { //时间戳 转 YY-mm-dd HH:ii:ss 
				var date = new Date(inputTime);
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				m = m < 10 ? ('0' + m) : m;
				var d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				var h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				var minute = date.getMinutes();
				var second = date.getSeconds();
				minute = minute < 10 ? ('0' + minute) : minute;
				second = second < 10 ? ('0' + second) : second;
				return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
			}
		},
	}
</script>

<style>
	view {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		justify-content: center;
	}
	
	.title{
		margin:80upx 0 20upx 0;
	}
	
</style>
