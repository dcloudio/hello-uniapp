<template>
	<view class="page">
		<text class="example-info">数字角标通用来标记重点信息使用，如接受到新消息、有未读消息等</text>
		<uni-section title="定位: aboslute 属性 + offset 属性" type="line"></uni-section>
		<view class="example-body">
			<uni-badge class="uni-badge-left-margin" :text="value" absolute="rightTop" size="small" type="primary">
				<view class="box"><text class="box-text">右上</text></view>
			</uni-badge>
			<uni-badge class="uni-badge-absolute" :text="value" absolute="rightTop" :offset="[-10, -10]" size="small" type="primary">
				<view class="box"><text class="box-text">右上+偏移</text></view>
			</uni-badge>
			<uni-badge class="uni-badge-absolute" size="small" :text="value" absolute="rightBottom" type="primary">
				<view class="box"><text class="box-text">右下</text></view>
			</uni-badge>
			<uni-badge class="uni-badge-absolute" size="small" :text="value" absolute="leftTop" type="primary" :max-num="10">
				<view class="box"><text class="box-text">左上</text></view>
			</uni-badge>
		</view>
		<uni-section title="仅显示点: is-dot 属性" type="line"></uni-section>
		<view class="example-body">
			<uni-badge class="uni-badge-left-margin" :is-dot="true" :text="value" absolute="rightTop" size="small" type="primary">
				<view class="box"><text class="box-text">圆点</text></view>
			</uni-badge>
			<uni-badge class="uni-badge-absolute" :is-dot="true" :text="value" absolute="rightTop" :offset="[-5, -5]" size="small" type="success">
				<view class="box"><text class="box-text">圆点+偏移</text></view>
			</uni-badge>
			<uni-badge class="uni-badge-absolute" :is-dot="true" :text="value" absolute="rightTop" size="small" type="error">
				<view class="box"><text class="box-text">圆点</text></view>
			</uni-badge>
			<uni-badge class="uni-badge-absolute" :is-dot="true" :text="value" absolute="rightTop" size="small" type="warning">
				<view class="box"><text class="box-text">圆点</text></view>
			</uni-badge>
		</view>
		<uni-section title="有底色" type="line"></uni-section>
		<view class="example-body">
			<uni-badge class="uni-badge-left-margin" text="1" />
			<uni-badge class="uni-badge-left-margin" text="2" type="primary" />
			<uni-badge class="uni-badge-left-margin" text="34" type="success" />
			<uni-badge class="uni-badge-left-margin" text="45" type="warning" />
			<uni-badge class="uni-badge-left-margin" text="123" type="error" />
		</view>
		<uni-section title="无底色" type="line"></uni-section>
		<view class="example-body">
			<uni-badge class="uni-badge-left-margin" :inverted="true" text="1" />
			<uni-badge class="uni-badge-left-margin" :inverted="true" text="2" type="primary" />
			<uni-badge class="uni-badge-left-margin" :inverted="true" text="34" type="success" />
			<uni-badge class="uni-badge-left-margin" :inverted="true" text="45" type="warning" />
			<uni-badge class="uni-badge-left-margin" :inverted="true" text="123" type="error" />
		</view>
		<uni-section title="迷你" type="line"></uni-section>
		<view class="example-body">
			<uni-badge class="uni-badge-left-margin" text="1" size="small" />
			<uni-badge class="uni-badge-left-margin" text="2" type="primary" size="small" />
			<uni-badge class="uni-badge-left-margin" text="34" type="success" size="small" />
			<uni-badge class="uni-badge-left-margin" text="45" type="warning" size="small" />
			<uni-badge class="uni-badge-left-margin" text="123" type="error" size="small" />
		</view>
		<uni-section title="自定义样式" type="line"></uni-section>
		<view class="example-body">
			<uni-badge class="uni-badge-left-margin" text="2" type="primary" :customStyle="customStyle" />
			<uni-badge class="uni-badge-left-margin" text="2" type="primary" :customStyle="{color: 'red'}" />
		</view>

	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				value: 0,
				customStyle: {
					backgroundColor: '#2C405A',
					color: 'red'
				}
			};
		},
		mounted() {
			const timer = setInterval(() => {
				if (this.value >= 199) {
					clearInterval(timer)
					return
				}
				this.value++
			}, 100)
		}
	};
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

	/* #ifdef MP-ALIPAY */
	.uni-badge {
		margin-left: 20rpx;
	}

	/* #endif */
	.example-body {
		flex-direction: row;
		justify-content: flex-start;
	}

	.uni-badge-left-margin {
		margin-left: 10px;
	}

	.uni-badge-absolute {
		margin-left: 40px;
	}

	.box {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #DCDFE6;
		color: #fff;
		font-size: 12px;
	}

	.box-text {
		text-align: center;
		color: #fff;
		font-size: 12px;
	}
</style>