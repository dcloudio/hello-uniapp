<template>
	<view>
		<text class="example-info"> uni-forms 组件一般由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</text>
		<uni-section title="基础用法" type="line"></uni-section>
		<uni-forms ref="form" labelPosition="left" labelAlign="left" :form-rules="rules" @submit="submit" @reset="reset" @validate="validate">
			<uni-forms-item name="name" label="用户名">
				<input type="text" placeholder="请输入用户名" @blur="input('form','name',$event.detail.value)">
			</uni-forms-item>
			<uni-forms-item name="age" label="年龄">
				<input type="text" placeholder="请输入年龄" @input="input('form','age',$event.detail.value)">
			</uni-forms-item>
			<uni-forms-item name="email" label="邮箱">
				<input type="text" placeholder="请输入邮箱" @blur="input('form','email',$event.detail.value)">
			</uni-forms-item>

			<!-- 直接使用组件自带submit、reset 方法，小程序不生效 -->
			<!-- <button class="button" form-type="submit">Submit</button>
			<button class="button" form-type="reset">Reset</button> -->

			<button class="button" @click="submitForm('form')">校验表单</button>
			<button class="button" @click="validateField('form')">校验部分表单</button>
			<button class="button" @click="clearValidate('form','name')">移除部分表单校验结果</button>
			<button class="button" @click="clearValidate('form')">移除全部表单校验结果</button>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					name: '',
					age: '',
					email: '',
					size: ''
				},
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '请输入姓名',
							trigger: 'blur'
						}, {
							minLength: 3,
							maxLength: 5,
							errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
							trigger: 'blur'
						}]
					},

					age: {
						rules: [{
							required: true,
							errorMessage: '请填写年龄',
							trigger: "blur"
						}, {
							format: 'number',
							errorMessage: '年龄必须是数字',
							// trigger: 'blur'
						}, {
							minimum: 18,
							maximum: 30,
							errorMessage: '年龄应该大于 {minimum} 岁，小于 {maximum} 岁',
							trigger: 'change'
						}]
					},
					email: {
						rules: [{
							format: 'email',
							errorMessage: '请输入正确的邮箱地址',
							trigger: 'blur'
						}]
					}
				}
			}
		},
		methods: {
			input(form, name, value) {
				this.$refs[form].setValue(name, value)
			},
			/**
			 * 触发校验
			 * @param {Object} event
			 */
			validate(event) {
				console.log('触发校验：', event);
			},

			/**
			 * 表单提交
			 * @param {Object} event
			 */
			submit(event) {
				console.log(event)
			},

			/**
			 * 手动提交
			 * @param {Object} event
			 */
			reset(event) {
				console.log('表单重置：', event);
			},

			/**
			 * 手动提交
			 * @param {Object} form
			 */
			submitForm(form) {
				this.$refs[form].validate((valid, rules) => {
					if (valid) {
						console.log('校验通过')
					} else {
						console.error('校验失败', rules);
					}
				})
			},

			/**
			 * 部分表单校验
			 * @param {Object} form
			 */
			validateField(form) {
				this.$refs[form].validateField(['name', 'email'], (error) => {
					console.log(error);
				})
			},

			/**
			 * 清除表单校验
			 * @param {Object} form
			 * @param {Object} name
			 */
			clearValidate(form, name) {
				if (!name) name = []
				this.$refs[form].clearValidate(name)
			}
		}
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

	.button {
		margin: 10px 15px;
	}
</style>