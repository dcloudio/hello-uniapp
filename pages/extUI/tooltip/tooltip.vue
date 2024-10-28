<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">常用于展示鼠标 hover 时的提示信息，注意：无法覆盖原生组件</text>

		</uni-card>
		<uni-section title="基础用法" type="line" padding>
			<view class="content">
				<uni-tooltip class="tooltip" content="提示文字" placement="left">
					<button size="mini" type="primary" plain>左</button>
				</uni-tooltip>
				<uni-tooltip class="tooltip" content="提示文字" placement="bottom">
					<button size="mini" type="primary" plain>底</button>
				</uni-tooltip>
				<uni-tooltip class="tooltip" content="提示文字" placement="top">
					<button size="mini" type="primary" plain>上</button>
				</uni-tooltip>
				<uni-tooltip class="tooltip" content="提示文字" placement="right">
					<button size="mini" type="primary" plain>右</button>
				</uni-tooltip>
			</view>

		</uni-section>

		<uni-section title="弹出层插槽" type="line" padding>
			<view class="content">
				<uni-tooltip class="tooltip" placement="bottom">
					<button size="mini" type="primary" plain>多行文字提示</button>
					<template v-slot:content>
						<view class="uni-stat-tooltip">
							一段文字一段文字一段文字一段文字一段文字一段文字一段文字
							一段文字一段文字一段文字一段文字一段文字一段文字一段文字
						</view>
					</template>
				</uni-tooltip>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {

			};
		},
	};
</script>

<style lang="scss">
	.uni-stat-tooltip {
		width: 160px;
	}

	.tooltip {
		margin: 10px;
	}

	.content {
		display: flex;
		justify-content: center;

	}
</style>
