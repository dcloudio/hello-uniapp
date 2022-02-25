<template>
	<view>
		<page-head title="view"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-hello-text">
				Flex is the abbreviation of Flexible Box, meaning is "flexible layout" and is used to provide maximum flexibility for Box Model. just set "display: flex" for container components, such as "view" etc., and set "flex-direction: row" or "flex-direction: column", you can arrange sub-components in rows or columns in the container. Uni-app recommends to use flex layout. Because flex layout is conducive to cross more platforms, especially platforms that use native rendering.
			</view>

			<view class="uni-title uni-common-mt">
				flex-direction: row
				<text>\nHorizontal layout</text>
			</view>
			<view class="uni-flex uni-row">
				<view class="flex-item uni-bg-red">A</view>
				<view class="flex-item uni-bg-green">B</view>
				<view class="flex-item uni-bg-blue">C</view>
			</view>

			<view class="uni-title uni-common-mt">
				flex-direction: column
				<text>\nVertical layout</text>
			</view>
			<view class="uni-flex uni-column">
				<view class="flex-item flex-item-V uni-bg-red">A</view>
				<view class="flex-item flex-item-V uni-bg-green">B</view>
				<view class="flex-item flex-item-V uni-bg-blue">C</view>
			</view>

			<view class="uni-title uni-common-mt">
				More layout examples
				<text>\nflex Layout Demo</text>
			</view>
			<view>
				<view class="text">Vertical layout-Automatic width</view>
				<view class="text" style="width: 300rpx;">Vertical layout-Fixed width</view>
				<view class="uni-flex uni-row">
					<view class="text">Horizontal layout - Automatic width</view>
					<view class="text">Horizontal layout - Automatic width</view>
				</view>
				<view class="uni-flex uni-row" style="-webkit-justify-content: center;justify-content: center;">
					<view class="text">Horizontal layout - Center</view>
					<view class="text">Horizontal layout - Center</view>
				</view>
				<view class="uni-flex uni-row" style="-webkit-justify-content: flex-end;justify-content: flex-end;">
					<view class="text">Horizontal layout - Right</view>
					<view class="text">Horizontal layout - Right</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text" style="-webkit-flex: 1;flex: 1;">Horizontal layout - Average distribution</view>
					<view class="text" style="-webkit-flex: 1;flex: 1;">Horizontal layout - Average distribution</view>
				</view>
				<view class="uni-flex uni-row" style="-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="text">Horizontal layout - Alignment of both ends</view>
					<view class="text">Horizontal layout - Alignment of both ends</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text" style="width: 200rpx;">Fixed width</view>
					<view class="text" style="-webkit-flex: 1;flex: 1;">Auto-occupy margin</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text" style="width: 200rpx;">Fixed width</view>
					<view class="text" style="-webkit-flex: 1;flex: 1;">Auto-occupy</view>
					<view class="text" style="width: 200rpx;">Fixed width</view>
				</view>
				<view class="uni-flex uni-row" style="-webkit-flex-wrap: wrap;flex-wrap: wrap;">
					<view class="text" style="width: 140px; line-height: unset;">一行显示不全,wrap折行</view>
					<view class="text" style="width: 280rpx; line-height: unset;">A line is not displayed in full, wrap fold line</view>
					<view class="text" style="width: 280rpx; line-height: unset;">A line is not displayed in full, wrap fold line</view>
				</view>
				<view class="uni-flex uni-row">
					<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: flex-start;align-items: flex-start;">
						<text>Vertical topping</text>
					</view>
					<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
						<text>Vertical centering</text>
					</view>
					<view class="text uni-flex" style="-webkit-flex: 1;flex: 1;height: 200rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: flex-end;align-items: flex-end;">
						<text>Vertical bottoming</text>
					</view>
				</view>
			</view>

			<view class="uni-title uni-common-mt">
				Combination example
				<text>\nflex Layout Demo</text>
			</view>
			<view class="uni-flex uni-row">
				<view class="text uni-flex" style="width: 200rpx;height: 220rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
					<image src="../../../static/plus.png" style="width: 150rpx;height: 150rpx;"></image>
				</view>
				<view class="uni-flex uni-column" style="-webkit-flex: 1;flex: 1;-webkit-justify-content: space-between;justify-content: space-between;">
					<view class="text" style="height: 120rpx;text-align: left;padding-left: 20rpx;padding-top: 10rpx;">
						Text to the left, leaving left spacing
					</view>
					<view class="uni-flex uni-row">
						<view class="text" style="-webkit-flex: 1;flex: 1;">Remaining quantity</view>
						<view class="text" style="-webkit-flex: 1;flex: 1;">Buy Now</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style>
	.flex-item {
		width: 33.3%;
		height: 200rpx;
		text-align: center;
		line-height: 200rpx;
	}

	.flex-item-V {
		width: 100%;
		height: 150rpx;
		text-align: center;
		line-height: 150rpx;
	}

	.text {
		margin: 15rpx 10rpx;
		padding: 0 20rpx;
		background-color: #ebebeb;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		color: #777;
		font-size: 26rpx;
	}

	.desc {
		/* text-indent: 40rpx; */
	}
	.flex-pc {
		display: flex;
		justify-content: center;
	}
</style>
