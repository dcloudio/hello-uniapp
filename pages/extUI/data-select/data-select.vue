<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用</text>
		</uni-card>
		<uni-section title="本地数据" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="禁用状态" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :disabled="true" :localdata="range"></uni-data-select>
			</view>
		</uni-section>
		<!-- 		<uni-section title="云端数据" subTitle="连接云服务空间, 且存在相关的数据表才能生效(此处演示, 未连接云服务空间, 故不生效, 且有报错)" type="line">
			<uni-data-select collection="opendb-app-list" field="appid as value, name as text" v-mode="value" />
		</uni-section> -->
		<uni-section title="是否可清除已选项" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :localdata="range" @change="change" :clear="false"></uni-data-select>
			</view>
		</uni-section>
		<uni-section title="配置左侧标题" type="line">
			<view class="uni-px-5 uni-pb-5">
				<uni-data-select v-model="value" :localdata="range" @change="change" label="应用选择"></uni-data-select>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 0,
				range: [{
						"value": 0,
						"text": "篮球",
						"disable": true
					},
					{
						"value": 1,
						"text": "足球"
					},
					{
						"value": 2,
						"text": "游泳"
					}
				]
			}
		},
		methods: {
			change(e) {
				console.log('e:', e);
			}
		}
	}
</script>

<style lang="scss">
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
</style>
