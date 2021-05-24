<template name="page-head">
	<view class="common-page-head">
		<view class="common-page-head-title">{{title}}</view>
	</view>
</template>
<script>
	export default {
		name: "page-head",
		props: {
			title: {
				type: String,
				default: ""
			}
		}
	}
</script>
