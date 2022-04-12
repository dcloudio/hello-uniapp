<template>
	<view class="container">
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">Hyperlink component, copy url within applet, open external browser within app, open new web page in h5 end.</text>
		</uni-card>
		<uni-section title="Basic example" subTitle="Open external connection" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
		</uni-section>
		<uni-section title="Custom colors" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" color="#007BFF"></uni-link>
		</uni-section>
		<uni-section title="Custom Underline" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false">
			</uni-link>
		</uni-section>
		<uni-section title="Customize font size" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				font-size="20"></uni-link>
		</uni-section>
		<uni-section title="Custom Slots" type="line" padding>
			<uni-link href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/" showUnderLine="false"
				color="red">Click to jump</uni-link>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {};
		}
	};
</script>

<style lang="scss">
</style>
