<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-btn-v">
				<navigator url="navigate/navigate?title=navigate" hover-class="navigator-hover">
					<button type="default">Jump to new page</button>
				</navigator>
				<navigator url="redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">
					<button type="default">Open in current page</button>
				</navigator>
				<navigator v-if="!hasLeftWin" url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default">Jump to Tab page</button>
				</navigator>
			</view>
		</view>
	</view>
</template>
<script>
	import { mapState } from 'vuex'
	export default {
		data() {
			return {
				title: 'navigator'
			}
		},
		computed: {
			...mapState({
				hasLeftWin: state => !state.noMatchLeftWindow
			})
		},
	}
</script>
