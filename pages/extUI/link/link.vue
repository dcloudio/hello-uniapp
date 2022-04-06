<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。</text>
		</uni-card>
		<uni-section title="基本示例" subTitle="打开外部连接" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
		</uni-section>
		<uni-section title="自定义颜色" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" color="#007BFF"></uni-link>
		</uni-section>
		<uni-section title="自定义下划线" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false">
			</uni-link>
		</uni-section>
		<uni-section title="自定义字体大小" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				font-size="20"></uni-link>
		</uni-section>
		<uni-section title="自定义插槽" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				color="red">点击跳转</uni-link>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {};
		}
	};
</script>

<style lang="scss">
</style>
