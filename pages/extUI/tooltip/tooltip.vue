<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">常用于展示鼠标 hover 时的提示信息，注意：无法覆盖原生组件</text>
		</uni-card>
		<uni-section title="基础用法" type="line" padding>
			<uni-tooltip content="提示文字">
				<button size="mini">左下</button>
			</uni-tooltip>
		</uni-section>

		<uni-section title="弹出层插槽" type="line" padding>
			<uni-tooltip>
				<button size="mini">多行文字提示</button>
				<template v-slot:content>
					<view class="uni-stat-tooltip">
						一段文字一段文字一段文字一段文字一段文字一段文字一段文字
						一段文字一段文字一段文字一段文字一段文字一段文字一段文字
					</view>
				</template>
			</uni-tooltip>
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
</style>
