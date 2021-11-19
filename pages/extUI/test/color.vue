<template>
	<view class="content">
		<view class="box primary uni-mt-2 uni-radius uni-mt-10">
			<view class="item-box">primary</view>
			<view class="item-box">
				<view class="item  disable">disable</view>
				<view class="item light">light</view>
			</view>
		</view>
		<view class="box success uni-mt-2 uni-radius">
			<view class="item-box">success</view>
			<view class="item-box">
				<view class="item disable">disable</view>
				<view class="item light">light</view>
			</view>

		</view>

		<view class="box warning uni-mt-2 uni-radius">
			<view class="item-box">warning</view>
			<view class="item-box">
				<view class="item disable">disable</view>
				<view class="item light">light</view>
			</view>
		</view>
		<view class="box error uni-mt-2 uni-radius">
			<view class="item-box">error</view>
			<view class="item-box">
				<view class="item disable">disable</view>
				<view class="item light">light</view>
			</view>
		</view>
		<view class="box info uni-mt-2 uni-radius">
				<view class="item-box">info</view>
				<view class="item-box">
					<view class="item disable">disable</view>
					<view class="item light">light</view>
				</view>
		</view>
		<view class="box black uni-mt-2">black</view>
		<view class="box main-color uni-mt-2">main-color</view>
		<view class="box base-color uni-mt-2">base-color</view>
		<view class="box secondary-color uni-mt-2">secondary-color</view>
		<view class="box light-color uni-mt-2">light-color</view>
		<view class="box border-1 uni-mt-2">border-1</view>
		<view class="box border-2 uni-mt-2">border-2</view>
		<view class="box border-3 uni-mt-2">border-3</view>
		<view class="box border-4 uni-mt-2">border-4</view>
		<view class="box bg-color uni-mt-2">bg-color</view>
		<view class="box white uni-mt-2">white</view>
		<view class="box transparent uni-mt-2">transparent</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		computed:{
		},
		onLoad() {
		},
		methods: {
			add(){

			}
		}
	}
</script>

<style lang="scss">
	@mixin flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.test {
		width: 100px;
		height: 100px;
		border: 1px red solid;
	}
	.box {
		@include flex;
		flex-direction: column;
		width: 200px;
		min-height:30px;
		color: #fff;
		font-size: 14px;
		overflow: hidden;
		.item-box {
			@include flex;
			width: 100%;
			height: 30px;
			.item {
				@include flex;
				width: 100%;
				height: 100%;
			}
		}
	}

	.primary {
		background-color: $uni-primary;
		.disable {
			background-color: $uni-primary-disable;
		}
		.light {
			background-color: $uni-primary-light;
		}
	}
	.success {
		background-color:$uni-success;
		.disable {
			background-color: $uni-success-disable;
		}
		.light {
			background-color: $uni-success-light;
		}

	}

	.warning {
		background-color:$uni-warning;
		.disable {
			background-color: $uni-warning-disable;
		}
		.light {
			background-color: $uni-warning-light;
		}
		.stress-box {
			background-color: #e97511;
		}
		.disable-box {
			background-color: #febf88;
		}
		.light-box {
			background-color: #ffeedf;
		}
	}
	.error {
		background-color: $uni-error;
		.disable {
			background-color: $uni-error-disable;
		}
		.light {
			background-color: $uni-error-light;
		}
	}
	.info {
		background-color: $uni-info;
		.disable {
			background-color: $uni-info-disable;
		}
		.light {
			background-color: $uni-info-light;
		}
	}
	.main-color {
		background-color: $uni-main-color;
	}
	.base-color {
		background-color: $uni-base-color;
	}
	.secondary-color {
		background-color: $uni-secondary-color;
	}

	.light-color {
		background-color: $uni-light-color;
	}
	.bg-color {
		background-color: $uni-bg-color;
	}
	.border-1 {
		background-color: $uni-border-1;
	}
	.border-2 {
		background-color: $uni-border-2;
	}
	.border-3 {
		background-color: $uni-border-3;
	}
	.border-4 {
		background-color: $uni-border-4;
	}
	.black {
		background-color: $uni-black;
	}
	.white {
		background-color: $uni-white;
	}
	.transparent {
		background-color: $uni-transparent;
	}
</style>
