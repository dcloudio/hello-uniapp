<template>
	<view>
		<page-head title="cover-view用于覆盖map、video等原生组件"></page-head>
		<view class="uni-common-mt">
			<view>
				<map>
					<cover-view class="cover-view">简单的cover-view</cover-view>
					<cover-image class="cover-image" src="/static/uni.png"></cover-image>
				</map>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		}
	}
</script>

<style>
map{
	width: 750upx;
}
.cover-view{
	width: 375upx;
	text-align: center;
	background-color: #DDDDDD;
}
.cover-image{
	position: absolute;
	left: 300upx;
	width: 96px;
	height: 96px;
}
</style>
