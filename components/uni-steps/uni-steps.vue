<template>
	<view class="uni-steps">
		<view :class="'uni-steps-' + direction" class="uni-steps-items">
			<view v-for="(item,index) in options" :key="index" :class="{'uni-steps-process':index === active,'uni-steps-finish':index < active}" class="uni-steps-item">
				<view :style="{color:index === active ? activeColor : ''}" class="uni-steps-item-title-container">
					<view class="uni-steps-item-title">{{ item.title }}</view>
					<view v-if="item.desc" class="uni-steps-item-desc">{{ item.desc }}</view>
				</view>
				<view class="uni-steps-item-circle-container">
					<view v-if="index !== active" :style="{backgroundColor:index < active ? activeColor : ''}" class="uni-steps-item-circle" />
					<uni-icon v-else :color="activeColor" type="checkbox-filled" size="14" />
				</view>
				<view v-if="index !== options.length-1" :style="{backgroundColor:index < active ? activeColor : ''}" class="uni-steps-item-line" />
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../uni-icon/uni-icon.vue'
	export default {
		name: 'UniSteps',
		components: {
			uniIcon
		},
		props: {
			direction: { // 排列方向 row column
				type: String,
				default: 'row'
			},
			activeColor: { // 激活状态颜色
				type: String,
				default: '#1aad19'
			},
			active: { // 当前步骤
				type: Number,
				default: 0
			},
			options: {
				type: Array,
				default () {
					return []
				}
			} // 数据
		},
		data() {
			return {}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-steps {
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative
	}

	.uni-steps-items {
		position: relative;
		display: flex;
		flex-direction: row;
		margin: 10px;
		box-sizing: border-box;
		overflow: hidden
	}

	.uni-steps-items.uni-steps-column {
		margin: 10px 0;
		padding-left: 31px;
		flex-direction: column
	}

	.uni-steps-items.uni-steps-column .uni-steps-item:after {
		content: ' ';
		position: absolute;
		height: 1px;
		width: 100%;
		bottom: 9px;
		left: 0;
		background-color: #ebedf0;
		transform: scaleY(.5)
	}

	.uni-steps-items.uni-steps-column .uni-steps-item:last-child {
		position: relative
	}

	.uni-steps-items.uni-steps-column .uni-steps-item:last-child:after {
		height: 0
	}

	.uni-steps-items.uni-steps-column .uni-steps-item:last-child .uni-steps-item-title-container {
		text-align: left
	}

	.uni-steps-items.uni-steps-column .uni-steps-item:last-child .uni-steps-item-circle-container {
		left: -17px;
		right: auto
	}

	.uni-steps-items.uni-steps-column .uni-steps-item-title-container {
		transform: none;
		display: block;
		line-height: 36upx
	}

	.uni-steps-items.uni-steps-column .uni-steps-item-title {
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden
	}

	.uni-steps-items.uni-steps-column .uni-steps-item-desc {
		white-space: normal;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden
	}

	.uni-steps-items.uni-steps-column .uni-steps-item-circle-container {
		left: -17px;
		top: -1px;
		bottom: auto;
		padding: 8px 0;
		z-index: 1
	}

	.uni-steps-items.uni-steps-column .uni-steps-item-line {
		height: 100%;
		width: 1px;
		left: -15px;
		top: -1px;
		bottom: auto
	}

	.uni-steps-items.uni-steps-column .uni-steps-item.uni-steps-process .uni-steps-item-circle-container {
		bottom: auto;
		left: -21px
	}

	.uni-steps-item {
		flex: 1;
		position: relative;
		padding-bottom: 18px
	}

	.uni-steps-item-title-container {
		text-align: left;
		margin-left: 3px;
		display: inline-block;
		transform: translateX(-50%);
		color: #999
	}

	.uni-steps-item-title {
		font-size: 28upx
	}

	.uni-steps-item-desc {
		font-size: 24upx
	}

	.uni-steps-item:first-child .uni-steps-item-title-container {
		transform: none;
		margin-left: 0
	}

	.uni-steps-item:last-child {
		position: absolute;
		right: 0
	}

	.uni-steps-item:last-child .uni-steps-item-title-container {
		transform: none;
		text-align: right
	}

	.uni-steps-item:last-child .uni-steps-item-circle-container {
		left: auto;
		right: -8px
	}

	.uni-steps-item-circle-container {
		position: absolute;
		bottom: 8px;
		left: -8px;
		padding: 0 8px;
		background-color: #fff;
		z-index: 1
	}

	.uni-steps-item-circle {
		width: 5px;
		height: 5px;
		background-color: #999;
		border-radius: 50%
	}

	.uni-steps-item-line {
		background-color: #ebedf0;
		position: absolute;
		bottom: 10px;
		left: 0;
		width: 100%;
		height: 1px
	}

	.uni-steps-item.uni-steps-finish .uni-steps-item-title-container {
		color: #333
	}

	.uni-steps-item.uni-steps-process .uni-steps-item-circle-container {
		bottom: 3px;
		display: flex
	}
</style>