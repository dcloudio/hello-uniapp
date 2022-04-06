<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">日期格式化组件，通常用于需要展示友好的日期格式的场景。</text>
		</uni-card>
		<uni-section title="基础用法" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 7200000"></uni-dateformat>
				<uni-dateformat date="2020/12/12"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="设置阈值" subTitle="阈值用于控制什么时候显示刚刚|马上，什么时候显示xx分钟前|xx分钟后" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 30000" :threshold="[0,3600000]"></uni-dateformat>
				<uni-dateformat :date="now - 30000" :threshold="[0,0]"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="使用英文" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 1200000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
				<uni-dateformat :date="now - 30000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
				<uni-dateformat :date="now - 80000" :threshold="[60000,3600000]" locale="en"></uni-dateformat>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				now: Date.now()
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.example-body {
		display: flex;
		flex-direction: column;
		line-height: 1.5em;
	}
</style>
