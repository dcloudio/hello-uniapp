<template>
	<view class="uni-wrap">
		<uni-card :is-shadow="false" is-full>				<text class="uni-h6">uni-section 组件主要用于文章、列表详情等标题展示</text>
		</uni-card>
		<uni-section class="mb-10" title="基础用法" sub-title="副标题"></uni-section>
		<uni-section class="mb-10" title="竖线装饰" sub-title="副标题" type="line"></uni-section>
		<uni-section class="mb-10" title="装饰器插槽" sub-title="副标题">
			<template v-slot:decoration>
				<view class="decoration"></view>
			</template>
		</uni-section>
		<uni-section class="mb-10" title="默认插槽" sub-title="副标题" padding="0 0 5px 10px">默认插槽内容</uni-section>
		<uni-section class="mb-10" title="主标题">
			<template v-slot:right>
				right slot
			</template>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		onReady() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	$uni-success: #18bc37 !default;

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

	.mb-10 {
		margin-bottom: 10px;
	}

	.decoration {
		width: 6px;
		height: 6px;
		margin-right: 4px;
		border-radius: 50%;
		background-color: $uni-success;
	}
</style>
