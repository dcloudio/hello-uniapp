<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">The dateformat component, typically used in scenarios where a friendly date format needs to be presented.</text>
		</uni-card>
		<uni-section title="Basic usage" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 7200000"></uni-dateformat>
				<uni-dateformat date="2020/12/12"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="Set Threshold" subTitle="Threshold is used to control when to show just|immediately and when to show xx minutes ago|xx minutes later" type="line" padding>
			<view class="example-body">
				<uni-dateformat :date="now - 30000" :threshold="[0,3600000]"></uni-dateformat>
				<uni-dateformat :date="now - 30000" :threshold="[0,0]"></uni-dateformat>
			</view>
		</uni-section>
		<uni-section title="Use English" type="line" padding>
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
