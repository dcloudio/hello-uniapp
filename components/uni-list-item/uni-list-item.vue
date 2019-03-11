<template>
	<view class="uni-list-item" :class="[disabled === true || disabled === 'true' ? 'uni-list-item--disabled' : '']" :hover-class="disabled === true || disabled === 'true' || showSwitch === true || showSwitch === 'true' ? '' : 'uni-list-item--hover'" @click="onClick">
		<view class="uni-list-item__container">
			<view class="uni-list-item__icon" v-if="thumb">
				<image class="uni-list-item__icon-img" :src="thumb"></image>
			</view>
			<view class="uni-list-item__icon" v-else-if="showExtraIcon === true || showExtraIcon === 'true'">
				<uni-icon :color="extraIcon.color" :size="extraIcon.size" :type="extraIcon.type"></uni-icon>
			</view>
			<view class="uni-list-item__content">
				<view class="uni-list-item__content-title">{{title}}</view>
				<view class="uni-list-item__content-note" v-if="note">{{note}}</view>
			</view>
			<view class="uni-list-item__extra" v-if="showBadge === true || showBadge === 'true' || showArrow === true || showArrow === 'true'||showSwitch === true || showSwitch === 'true'">
				<uni-badge v-if="showBadge === true || showBadge === 'true'" :type="badgeType" :text="badgeText"></uni-badge>
				<switch v-if="showSwitch === true || showSwitch === 'true'" :disabled='disabled' :checked="switchChecked" @change="onSwitchChange" />
				<uni-icon v-if="showArrow === true || showArrow === 'true'" color="#bbb" size="20" type="arrowright"></uni-icon>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../uni-icon/uni-icon.vue'
	import uniBadge from '../uni-badge/uni-badge.vue'
	export default {
		name: 'uni-list-item',
		components: {
			uniIcon,
			uniBadge
		},
		data() {
			return {

			};
		},
		props: {
			title: String, //列表标题
			note: String, //列表描述
			disabled: { //是否禁用
				type: [Boolean, String],
				default: false
			},
			showArrow: { //是否显示箭头
				type: [Boolean, String],
				default: true
			},
			showBadge: { //是否显示数字角标
				type: [Boolean, String],
				default: false
			},
			showSwitch: { //是否显示Switch
				type: [Boolean, String],
				default: false
			},
			switchChecked: { //Switch是否被选中
				type: [Boolean, String],
				default: false
			},
			badgeText: String, //badge内容
			badgeType: { //badge类型
				type: String,
				default: 'success'
			},
			thumb: String, //缩略图
			showExtraIcon: { //是否显示扩展图标
				type: [Boolean, String],
				default: false
			},
			extraIcon: {
				type: Object,
				default () {
					return {
						type: "contact",
						color: "#000000",
						size: "20"
					};
				}
			}
		},
		methods: {
			onClick() {
				this.$emit('click')
			},
			onSwitchChange(e) {
				this.$emit('switchChange', e.detail)
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-list-item {
		font-size: 32upx;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center
	}

	.uni-list-item--disabled {
		opacity: .3
	}

	.uni-list-item--hover {
		background-color: #f1f1f1
	}

	.uni-list-item__container {
		padding: 24upx 30upx;
		width: 100%;
		box-sizing: border-box;
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center
	}

	.uni-list-item__container:after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}

	.uni-list-item__content {
		flex: 1;
		overflow: hidden;
		display: flex;
		flex-direction: column
	}

	.uni-list-item__content-title {
		font-size: 32upx;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: inherit;
		line-height: 1.5;
		overflow: hidden
	}

	.uni-list-item__content-note {
		color: #999;
		font-size: 28upx;
		white-space: normal;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden
	}

	.uni-list-item__extra {
		width: 25%;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center
	}

	.uni-list-item__icon {
		margin-right: 18upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center
	}

	.uni-list-item__icon-img {
		height: 52upx;
		width: 52upx
	}

	.uni-list>.uni-list-item:last-child .uni-list-item-container:after {
		height: 0
	}
</style>