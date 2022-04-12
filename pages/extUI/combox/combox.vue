<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-combox Generally used for form entries that can be selected as well as entered.</text>
		</uni-card>
		<uni-section title="Basic usage" type="line">
			<view class="example-body">
				<uni-combox :candidates="candidates" placeholder="Please select your cityPlease select your cityPlease select your city" v-model="city"></uni-combox>
				<view class="result-box">
					<text>city：{{city}}</text>
				</view>
			</view>
		</uni-section>

		<uni-section title="Borderless" subTitle="Use border = false to cancel the border" type="line">
			<view class="example-body">
				<uni-combox :border="false" :candidates="candidates" placeholder="Please select your cityPlease select your cityPlease select your city"></uni-combox>
			</view>
		</uni-section>

		<uni-section title="Set the prompt when there is no match" subTitle="Use the emptyTips property to set the prompt when there are no matches" type="line">
			<view class="example-body">
				<uni-combox emptyTips="There's nothing here." placeholder="Please select your cityPlease select your cityPlease select your city"></uni-combox>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				candidates: ['Beijing', 'Nanjing', 'Tokyo', 'Wuhan', 'Tianjin', 'Shanghai', 'Haikou'],
				city: ''
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.example-body {
		padding: 12px;
		background-color: #FFFFFF;
	}

	.result-box {
		text-align: center;
		padding: 20px 0px;
		font-size: 16px;
	}
</style>
