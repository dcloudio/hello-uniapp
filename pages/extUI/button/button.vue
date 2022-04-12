<template>
	<view class="container">
		<!-- 暂时不支持 nvue -->
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">Use the '.uni-btn' class to style the built-in button component</text>
		</uni-card>
		<uni-section title="Pronunciation Shape" sub-title="Add class name .uni-btn-radius to use rounded corner buttons" type="line">
			<view class="uni-ma-5 uni-pb-5">
				<button class="uni-btn">Default Button</button>
				<button class="uni-btn uni-btn-radius " hover-class="hover-class">Rounded corners</button>
			</view>
		</uni-section>
		<uni-section title="Pronunciation Shape(size=mini)" sub-title="Add the class name .uni-btn-radius to use the Rounded corners button" type="line">
			<view class="uni-ma-5 uni-pb-5">
				<button class="uni-btn" size="mini">Default Button</button>
				<button class="uni-btn uni-btn-radius" size="mini">Rounded corners</button>
			</view>
		</uni-section>
		<uni-section title="Default Button" sub-title="Specify different type attributes to display different types of buttons" type="line">
			<view class="uni-ma-5 uni-pb-5">
				<button class="uni-btn" type="default">default</button>
				<button class="uni-btn" type="primary">primary</button>
				<button class="uni-btn" type="success">success</button>
				<button class="uni-btn" type="warning">warning</button>
				<button class="uni-btn" type="error">error</button>
				<button class="uni-btn" type="info">info</button>
			</view>
		</uni-section>
		<uni-section title="Default Button(size=mini)" sub-title="Specify different type attributes to display different types of buttons" type="line">
			<view class="uni-ma-5 uni-pb-5">
				<button class="uni-btn" size="mini">default</button>
				<button class="uni-btn" type="primary" size="mini">primary</button>
				<button class="uni-btn" type="success" size="mini">success</button>
				<button class="uni-btn" type="warning" size="mini">warning</button>
				<button class="uni-btn" type="error" size="mini">error</button>
				<button class="uni-btn" type="info" size="mini">info</button>
			</view>
		</uni-section>

		<uni-section title="Skeleton button" sub-title="Add class name .uni-btn-plain use Skeleton button" type="line">
			<view class="uni-ma-5 uni-pb-5">
				<button class="uni-btn" plain>default</button>
				<button class="uni-btn" plain type="primary">primary</button>
				<button class="uni-btn" plain type="success">success</button>
				<button class="uni-btn" plain type="warning">warning</button>
				<button class="uni-btn" plain type="error">error</button>
				<button class="uni-btn" plain type="info">info</button>
			</view>
		</uni-section>


		<uni-section title="Skeleton button(size=mini)" sub-title="Add class name .uni-btn-plain use Skeleton button" type="line">
			<view class="uni-ma-5 uni-pb-5">
				<button class="uni-btn" plain size="mini">default</button>
				<button class="uni-btn" plain type="primary" size="mini">primary</button>
				<button class="uni-btn" plain type="success" size="mini">success</button>
				<button class="uni-btn" plain type="warning" size="mini">warning</button>
				<button class="uni-btn" plain type="error" size="mini">error</button>
				<button class="uni-btn" plain type="info" size="mini">info</button>
			</view>
		</uni-section>
		<uni-section title="Disable" sub-title="use disabled attribute ,Show Disable button" type="line">
			<view class="uni-ma-5 uni-pb-5">
				<button class="uni-btn" type="primary" disabled>primary</button>
				<button class="uni-btn" plain type="primary" disabled>primary</button>
				<button class="uni-btn uni-btn-radius" disabled>Rounded corners</button>
			</view>
		</uni-section>
		<uni-section title="Disable(size=mini)" sub-title="use  disabled attribute ,Show Disable button" type="line">
			<view class="uni-ma-5 uni-pb-5">
				<button class="uni-btn" type="primary" disabled size="mini">primary</button>
				<button class="uni-btn" plain type="primary" disabled size="mini">primary</button>
				<button class="uni-btn uni-btn-radius" disabled size="mini">Rounded corners</button>
			</view>
		</uni-section>
		<uni-section title="size" sub-title="Add class name .uni-btn-small .uni-btn-mini Show the difference in buttons size" type="line">
			<view class="uni-ma-5 uni-pb-5">
				<button class="uni-btn" type="primary">default</button>
				<button class="uni-btn uni-btn-small" type="primary">samll</button>
				<button class="uni-btn uni-btn-mini uni-btn-radius" type="primary">mini</button>
			</view>
		</uni-section>
		<uni-section title="size(sizi=mini)" sub-title="Add class name .uni-btn-small .uni-btn-mini Show the difference in buttons size" type="line">
			<view class="uni-ma-5 uni-pb-5">
				<button class="uni-btn" type="primary" size="mini">default</button>
				<button class="uni-btn uni-btn-small" type="primary" size="mini">samll</button>
				<button class="uni-btn uni-btn-mini uni-btn-radius" type="primary" size="mini">mini</button>
			</view>
		</uni-section>
	</view>
</template>
<script>
	export default {
		data() {
			return {}
		},
		onLoad() {},
		methods: {}
	}
</script>
<style lang="scss">
	.hover-class-test {
		color: red;
		border: 1px red solid;
		background: blue;
	}
</style>
