<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<!-- #ifndef APP-NVUE -->
			<text class="uni-h6">uni-row Streaming raster system, with screens or viewports divided into 24 parts, allows for quick and easy layout creation</text>
			<!-- #endif -->
			<!-- #ifdef APP-NVUE -->
			<text class="uni-h6"> Streaming raster system, no media queries available at nvue</text>
			<!-- #endif -->
		</uni-card>

		<uni-section title="Basic layout" subTitle="Create a basic grid layout with a single sub-column" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col>
						<view class="demo-uni-col dark_deep"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="12">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="12">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="8">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :width="nvueWidth">
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>


		<uni-section title="Hybrid layout" subTitle="Complex hybrid layouts can be created by extending the base 1/24 column in any combination" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="8">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="16">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :span="4">
						<view class="demo-uni-col dark"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>


		<uni-section title="Column Offset" subTitle="Supports offsetting a specified number of columns" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="8">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="8" :offset="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="6" :offset="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6" :offset="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="12" :pull="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :span="6" :push="6">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>

				<uni-row class="demo-uni-row" :gutter="gutter" :width="nvueWidth">
					<uni-col :span="12" :offset="6">
						<view class="demo-uni-col dark"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>


		<!-- #ifndef APP-NVUE -->
		<uni-section title="Responsive layout" subTitle="There are five response sizes: xs, sm, md, lg and xl" type="line">
			<view class="example-body">
				<uni-row class="demo-uni-row" :gutter="gutter">
					<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
						<view class="demo-uni-col light"></view>
					</uni-col>
					<uni-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
						<view class="demo-uni-col dark"></view>
					</uni-col>
					<uni-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
						<view class="demo-uni-col light"></view>
					</uni-col>
				</uni-row>
			</view>
		</uni-section>

		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gutter: 0,
				nvueWidth: 730
			}
		}
	}
</script>

<style lang="scss">
	.demo-uni-row {
		margin-bottom: 10px;

		// 组件在小程序端display为inline
		// QQ、字节小程序文档写有 :host，但实测不生效
		// 百度小程序没有 :host
		/* #ifdef MP-TOUTIAO || MP-QQ || MP-BAIDU */
		display: block;
		/* #endif */
	}

	// 支付宝小程序没有 demo-uni-row 层级
	// 微信小程序使用了虚拟化节点，没有 demo-uni-row 层级
	/* #ifdef MP-ALIPAY || MP-WEIXIN */
	::v-deep .uni-row {
		margin-bottom: 10px;
	}

	/* #endif */

	.demo-uni-col {
		height: 36px;
		border-radius: 5px;
	}

	.dark_deep {
		background-color: #99a9bf;
	}

	.dark {
		background-color: #d3dce6;
	}

	.light {
		background-color: #e5e9f2;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 5rpx 10rpx 0;
		overflow: hidden;
	}
</style>
