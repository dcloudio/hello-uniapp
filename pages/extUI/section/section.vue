<template>
	<view class="uni-wrap">
		<scroll-view class="scroll" scroll-y>
			<view class="example-info">
				<text class="example-info-text"> uni-section 组件主要用于文章、列表详情的等标题展示 </text>
			</view>
			<uni-section class="uni-section" title="基础用法" sub-title="副标题"></uni-section>
			<view class="example-body">
				<uni-list>
					<uni-list-item title="item" />
					<uni-list-item title="item" />
				</uni-list>
			</view>
			<uni-section title="竖线装饰" sub-title="副标题" type="line"></uni-section>
			<view class="example-body">
				<uni-list>
					<uni-list-item title="item" />
					<uni-list-item title="item" />
				</uni-list>
			</view>
			<uni-section title="圆形装饰" sub-title="副标题" type="circle"></uni-section>
			<view class="example-body">
				<uni-list>
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
					<uni-list-item title="item" />
				</uni-list>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				appear: false,
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
