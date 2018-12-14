<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
			 :activeColor="activeColor"></uni-segmented-control>
		</view>
		<view class="content">
			<view v-show="current === 0">
				选项卡1的内容
			</view>
			<view v-show="current === 1">
				选项卡2的内容
			</view>
			<view v-show="current === 2">
				选项卡3的内容
			</view>
		</view>

		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">Style</view>
		</view>
		<view class="uni-list">
			<radio-group @change="styleChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in styles" :key="index">
					{{item.text}}
					<radio :value="item.value" :checked="index === styleIndex" />
				</label>
			</radio-group>
		</view>

		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">Color</view>
		</view>
		<view class="uni-list">
			<radio-group @change="colorChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in colors" :key="index">
					<view class="color-tag" :style="{backgroundColor: item}"></view>
					<radio :value="item" :checked="index === colorIndex" />
				</label>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '../../../components/uni-segmented-control.vue';

	export default {
		data() {
			return {
				items: [
					'选项卡1',
					'选项卡2',
					'选项卡3'
				],
				styles: [{
					value: 'button',
					text: '按钮'
				}, {
					value: 'text',
					text: '文字'
				}],
				colors: [
					'#007aff',
					'#4cd964',
					'#dd524d'
				],
				current: 0,
				activeColor: '#007aff',
				styleType: 'button',
				styleIndex: 0,
				colorIndex: 0,
			}
		},
		components: {
			uniSegmentedControl
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			styleChange(evt) {
				const value = evt.target.value;
				if (this.styleType !== value) {
					this.styleType = value;
					for (let i = 0; i < this.styles.length; i++) {
						if (this.styles[i].value === value) {
							this.styleIndex = i;
							break;
						}
					}
				}
			},
			colorChange(evt) {
				if (this.styleType !== evt.target.value) {
					this.activeColor = evt.target.value;
					this.colorIndex = this.colors.indexOf(evt.target.value);
				}
			}
		}
	}
</script>

<style>
	page {
		height: auto;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 300upx;
		text-align: center;
	}

	.color-tag {
		width: 50upx;
		height: 50upx;
	}
</style>
