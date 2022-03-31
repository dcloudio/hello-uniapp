<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">分组组件可用于将组件分组，添加间隔，以产生明显的区块。</text>
		</uni-card>
		<uni-section title="基础分组" type="line">
			<uni-group>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
			<uni-group title="基本模式" margin-top="20">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
		</uni-section>




		<uni-section title="卡片分组" type="line">
			<uni-group mode="card">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>

			<uni-group title="card 模式" mode="card">
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
				<view> 分组内容 </view>
			</uni-group>
		</uni-section>

	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				appear: false,
				name: '',
				mobile: '139 9999 9999',
				weixin: 'sskd',
				message: '',
				errorMessage: ''
			}
		},
		onReady() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.uni-wrap {
		flex-direction: column;
		/* #ifdef H5 */
		height: calc(100vh - 44px);
		/* #endif */
		/* #ifndef H5 */
		height: 100vh;
		/* #endif */
		flex: 1;
	}

	.scroll {
		flex-direction: column;
		flex: 1;
	}

	.example-body {
		padding: 0;
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}
</style>
