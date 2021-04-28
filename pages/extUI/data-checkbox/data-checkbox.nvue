<template>
	<view>
		<text class="example-info"> 通过数据驱动的单选框和复选框，可直接通过连接 uniCloud 获取数据，同时可以配合表单组件 uni-forms 使用</text>
		<uni-section title="多选" type="line"></uni-section>

		<uni-group title="基础用法">
			<view class="text">选中：{{JSON.stringify(formData.hobby)}}</view>
			<uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby"></uni-data-checkbox>
		</uni-group>
		<uni-group title="更多样式-button">
			<view class="text">选中：{{JSON.stringify(formData.hobby)}}</view>
			<uni-data-checkbox mode="button" multiple v-model="formData.hobby" :localdata="hobby"></uni-data-checkbox>
		</uni-group>

		<uni-group title="更多样式-tag">
			<view class="text">选中：{{JSON.stringify(formData.hobby)}}</view>
			<uni-data-checkbox mode="tag" multiple v-model="formData.hobby" :localdata="hobby"></uni-data-checkbox>
		</uni-group>

		<uni-group title="更多样式-list">
			<view class="text">选中：{{JSON.stringify(formData.hobby)}}</view>
			<uni-data-checkbox mode="list" multiple v-model="formData.hobby" :localdata="hobby"></uni-data-checkbox>
		</uni-group>

		<uni-group title="禁用">
			<view class="text">选中：{{JSON.stringify(formData.hobby)}}</view>
			<uni-data-checkbox mode="button" multiple v-model="formData.hobby" :localdata="hobby2"></uni-data-checkbox>
		</uni-group>

		<uni-group title="最大最小值">
			<view class="text">选中：{{JSON.stringify(formData.hobby)}}</view>
			<uni-data-checkbox min="1" max="2" multiple v-model="formData.hobby" :localdata="hobby"></uni-data-checkbox>
		</uni-group>

		<uni-group title="自定义高亮颜色">
			<view class="text">选中：{{JSON.stringify(formData.hobby)}}</view>
			<uni-data-checkbox selectedColor="red" multiple v-model="formData.hobby" :localdata="hobby2"></uni-data-checkbox>
		</uni-group>

		<uni-section title="单选" type="line"></uni-section>
		<uni-group title="基础用法">
			<view class="text">选中：{{formData.value}}</view>
			<uni-data-checkbox v-model="formData.value" :localdata="sex"></uni-data-checkbox>
		</uni-group>
		<uni-group title="更多样式-button">
			<view class="text">选中：{{formData.value}}</view>
			<uni-data-checkbox mode="button" v-model="formData.value" :localdata="sex"></uni-data-checkbox>
		</uni-group>

		<uni-group title="更多样式-tag">
			<view class="text">选中：{{formData.value}}</view>
			<uni-data-checkbox mode="tag" v-model="formData.value" :localdata="sex"></uni-data-checkbox>
		</uni-group>

		<uni-group title="更多样式-list">
			<view class="text">选中：{{formData.value}}</view>
			<uni-data-checkbox mode="list" icon="right" v-model="formData.value" :localdata="sex"></uni-data-checkbox>
		</uni-group>

		<uni-group title="禁用">
			<view class="text">选中：{{formData.value}}</view>
			<uni-data-checkbox mode="button" v-model="formData.value" :localdata="sex1"></uni-data-checkbox>
		</uni-group>

		<uni-group title="自定义高亮颜色">
			<view class="text">选中：{{formData.value}}</view>
			<uni-data-checkbox selectedColor="red" v-model="formData.value" :localdata="sex1"></uni-data-checkbox>
		</uni-group>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					value: 1,
					hobby: [1]
				},
				sex: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1
				}, {
					text: '未知',
					value: 2
				}],
				sex1: [{
					text: '男',
					value: 0
				}, {
					text: '女',
					value: 1,
					disable: true
				}, {
					text: '未知',
					value: 2
				}],
				hobby: [{
					text: '足球',
					value: 0
				}, {
					text: '篮球',
					value: 1
				}, {
					text: '游泳',
					value: 2
				}],
				hobby2: [{
					text: '足球',
					value: 0,
					disable: true
				}, {
					text: '篮球',
					value: 1,
					disable: true
				}, {
					text: '游泳',
					value: 2
				}],
			}
		},
		onLoad() {},
		onReady() {},
		methods: {}
	}
</script>

<style>
	@charset "UTF-8";

	/* 头条小程序组件内不能引入字体 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		font-weight: normal;
		font-style: normal;
		src: url("~@/static/uni.ttf") format("truetype");
	}

	/* #endif */
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.example {
		padding: 0 15px 15px;
	}

	.example-info {
		padding: 15px;
		color: #3b4144;
		background: #ffffff;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		font-size: 14px;
		background-color: #ffffff;
	}

	/* #endif */
	.example {
		padding: 0 15px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.example-info-text {
		font-size: 14px;
		line-height: 20px;
		color: #3b4144;
	}

	.example-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
	}

	.word-btn-white {
		font-size: 18px;
		color: #FFFFFF;
	}

	.word-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		border-radius: 6px;
		height: 48px;
		margin: 15px;
		background-color: #007AFF;
	}

	.word-btn--hover {
		background-color: #4ca2ff;
	}

	.example {
		padding: 10px;
		background-color: #fff;
	}

	.text {
		font-size: 14px;
		color: #333;
		margin-bottom: 10px;
	}
</style>