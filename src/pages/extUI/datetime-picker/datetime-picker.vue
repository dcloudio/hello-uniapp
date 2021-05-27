<template>
	<view class="page">
		<text class="example-info">可以同时选择日期和时间的选择器</text>
		<uni-section :title="'日期用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="date" start="2021-3-20" end="2021-5-20" @change="change" />
		</view>
		<uni-section :title="'时间戳用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker returnType="timestamp" v-model="single" start="2021-3-20" end="2021-5-20" />
		</view>
		<uni-section :title="'日期时间用法：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" v-model="datetimesingle" start="2021-3-20 12:00:00" end="2021-5-20 20:00:00" />
		</view>
		<uni-section :title="'v-model用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" />
		</view>
		<uni-section :title="'无边框用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :border="false" />
		</view>
		<uni-section :title="'disabled用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" disabled />
		</view>
		<uni-section :title="'日期范围用法：' + '[' + range + ']'" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="range" type="daterange" start="2021-3-20" end="2021-5-20" rangeSeparator="至" />
		</view>
		<uni-section :title="'日期时间范围用法：' + '[' + datetimerange + ']' " type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="datetimerange" type="datetimerange" start="2021-3-20 12:00:00" end="2021-5-20 20:00:00" rangeSeparator="至" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				single: '2021-04-3',
				'datetimesingle': '',
				range: ['2021-03-8', '2021-4-20'],
				datetimerange: ['2021-03-20 20:10:10', '2021-05-10 10:10:10'],
			}
		},

		watch: {
			datetimesingle(newval) {
				console.log('单选:', this.datetimesingle);
			},
			range(newval) {
				console.log('范围选:', this.range);
			},
			datetimerange(newval) {
				console.log('范围选:', this.datetimerange);
			}
		},

		methods: {
			change(e) {
				this.single = e
				console.log('----change事件:', this.single = e);
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url("~@/static/uni.ttf") format("truetype");
	}

	/* #endif */
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example {
		padding: 0 15px 15px;
	}

	.example-info {
		padding: 15px;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 15px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}

	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}
</style>