<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用</text>
		</uni-card>
		<uni-section title="本地数据 (单选)" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="多选换行显示" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="multipleValue" multiple wrap :localdata="range" @change="changeMultiple"
					label="换行显示"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="禁用状态" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :disabled="true" :localdata="range"></uni-data-select>
			</view>
		</uni-section>
		<!-- <uni-section title="云端数据" subTitle="连接云服务空间, 且存在相关的数据表才能生效(此处演示, 未连接云服务空间, 故不生效, 且有报错)" type="line">
			<uni-data-select collection="opendb-app-list" field="appid as value, name as text" v-mode="value" />
		</uni-section> -->
		<uni-section title="设置弹出位置,文字出现位置,下划线显示" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select label="应用选择" placement="top" align="center" mode="underline" v-model="value" :localdata="range"
					@change="change"></uni-data-select>
			</view>
		</uni-section>
		<!-- #ifndef MP-TOUTIAO && VUE2 -->
		<!-- 头条中存在 2 个插槽存在问题 -->
		<uni-section title="单选使用插槽" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" mode="underline" :localdata="range">
					<template v-slot:selected="{selectedItems}">
						<view class="slot-box">
							<view v-for="item in sliceArray(selectedItems)" :key="item.value" class="slot-content-item">
								{{item.text}}
							</view>
							<view v-if="selectedItems.length == 0" class="slot-content-item"> 没有选择项 </view>
						</view>
					</template>
					<template v-slot:option="{item,itemSelected}">
						<view class="item-view" :class="{
							'item-selected': itemSelected,
							'item-disabled': item.disable
						}">
							{{ item.text }}
						</view>
					</template>
				</uni-data-select>
			</view>
		</uni-section>
		<!-- #endif -->

		<uni-section title="多选使用插槽" subTitle="多选的时候,超过2个显示省略;" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="multipleValue" multiple mode="underline" placement="top" :localdata="range">
					<template v-slot:selected="{selectedItems}">
						<view class="slot-box">
							<view v-for="item in sliceArray(selectedItems)" :key="item.value" class="slot-content-item">
								{{item.text}}
							</view>
							<view v-if="selectedItems.length > 2" class="slot-content-item"> +{{selectedItems.length - 2}} more </view>
							<view v-if="selectedItems.length == 0" class="slot-content-item"> 没有选择项 </view>
						</view>
					</template>
					<template v-slot:option="{item,itemSelected}">
						<view>
							<uni-list-item showSwitch :switchChecked="itemSelected" :title="item.text" :note="item.value+''"
								:disabled="item.disable"></uni-list-item>
						</view>
					</template>
				</uni-data-select>
			</view>
		</uni-section>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				value: 1,
				multipleValue: [1, 2, 3],
				range: [{
					"value": 0,
					"text": "篮球运动",
					"disable": true
				}, {
					"value": 1,
					"text": "足球运动",
				}, {
					"value": 2,
					"text": "游泳健身运动"
				}, {
					"value": 3,
					"text": "跑步有氧运动",
				}, {
					"value": 4,
					"text": "网球运动"
				}, {
					"value": 5,
					"text": "羽毛球运动"
				}, {
					"value": 6,
					"text": "乒乓球运动"
				}, {
					"value": 7,
					"text": "保龄球运动"
				}]
			}
		},
		methods: {
			change(e) {
				console.log('单选值:', e);
			},
			changeMultiple(e) {
				console.log('多选值:', e);
			},
			open() {
				console.log("打开选择框")
			},
			close() {
				console.log("关闭选择框")
			},
			clear() {
				console.log("清除选择框")
			},
			// 支付宝小程序上需要这样
			sliceArray(ls) {
				if (Array.isArray(ls)) {
					return ls.slice(0, 2)
				}
				return ls
			}
		}
	}
</script>
<style lang="scss">
	$uni-secondary-color: #909399 !default;
	.text {
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}

	.uni-px-5 {
		padding-left: 10px;
		padding-right: 10px;
	}

	.uni-pb-5 {
		padding-bottom: 10px;
	}

	.slot-content-item {
		background-color: $uni-secondary-color;
		padding: 2px 5px;
		border-radius: 5px;
		color: #fff;
	}

	.slot-box {
		gap: 5px;
		display: flex;
		flex-wrap: wrap;
	}

	.empty-box {
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.select-box {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.item-view {
		padding: 8px 12px;
		border-radius: 4px;
		transition: background-color 0.3s ease;
	}

	.item-selected {
		background-color: #007aff;
		color: #fff;
	}

	.item-disabled {
		background-color: #f5f5f5;
		color: #999;
		opacity: 0.6;
	}

	.item-disabled.item-selected {
		background-color: #d0d0d0;
		color: #666;
	}
</style>
