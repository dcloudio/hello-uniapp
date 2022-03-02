<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-title uni-common-pl">Input area height adaptive, no scroll bars</view>
		<view class="uni-textarea">
			<textarea @blur="bindTextAreaBlur" auto-height />
			</view>
			<view class="uni-title uni-common-pl">The placeholder font is a red textarea</view>
			<view class="uni-textarea">
				<textarea placeholder-style="color:#F76260" placeholder="Placeholder font is red"/>
			</view>
		</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'textarea',
				focus: false
			}
		},
		methods: {
			bindTextAreaBlur: function (e) {
				console.log(e.detail.value)
			}
		}
	}
</script>

<style>
</style>
