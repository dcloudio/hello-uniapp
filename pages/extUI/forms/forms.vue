<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-forms Components generally consist of controls such as input boxes, selectors, radio boxes, and multi-select boxes to collect, validate, and submit data.</text>
		</uni-card>
		<uni-section title="基本用法" type="line">
			<view class="example">
				<!-- 基础用法，不包含校验规则 -->
				<uni-forms ref="baseForm" :modelValue="baseFormData">
					<uni-forms-item label="Name" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="Please enter your name" />
					</uni-forms-item>
					<uni-forms-item label="Age" required>
						<uni-easyinput v-model="baseFormData.age" placeholder="Please enter your age" />
					</uni-forms-item>
					<uni-forms-item label="Gender" required>
						<uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />
					</uni-forms-item>
					<uni-forms-item label="Hobbies" required>
						<uni-data-checkbox v-model="baseFormData.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
					<uni-forms-item label="Self-Introduction">
						<uni-easyinput type="textarea" v-model="baseFormData.introduction" placeholder="Please enter your self introduction" />
					</uni-forms-item>
					<uni-forms-item label="Date and time">
						<uni-datetime-picker type="datetime" return-type="timestamp"
							v-model="baseFormData.datetimesingle" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</uni-section>

		<uni-section title="Alignment method" type="line">
			<view class="example">
				<view class="segmented-control">
					<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem"
						styleType="button">
					</uni-segmented-control>
				</view>
				<!-- 展示不同的排列方式 -->
				<uni-forms ref="baseForm" :modelValue="alignmentFormData" :label-position="alignment">
					<uni-forms-item label="Name" required>
						<uni-easyinput v-model="baseFormData.name" placeholder="Please enter your name" />
					</uni-forms-item>
					<uni-forms-item label="Age" required>
						<uni-easyinput v-model="baseFormData.age" placeholder="Please enter your age" />
					</uni-forms-item>
				</uni-forms>
			</view>
		</uni-section>

		<uni-section title="Form Validation" type="line">
			<view class="example">
				<!-- Basic form validation -->
				<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
					<uni-forms-item label="Name" required name="name">
						<uni-easyinput v-model="valiFormData.name" placeholder="Please enter Name" />
					</uni-forms-item>
					<uni-forms-item label="Age" required name="age">
						<uni-easyinput v-model="valiFormData.age" placeholder="Please enter Age" />
					</uni-forms-item>
					<uni-forms-item label="Self Introduction" name="introduction">
						<uni-easyinput type="textarea" v-model="valiFormData.introduction" placeholder="Please enter self introduction" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('valiForm')">commit</button>
			</view>
		</uni-section>

		<uni-section title="Custom check rules" type="line">
			<view class="example">
				<!-- Custom form validation -->
				<uni-forms ref="customForm" :rules="customRules" :modelValue="customFormData">
					<uni-forms-item label="Name" required name="name">
						<uni-easyinput v-model="customFormData.name" placeholder="Please enter Name" />
					</uni-forms-item>
					<uni-forms-item label="Age" required name="age">
						<uni-easyinput v-model="customFormData.age" placeholder="Please enter Age" />
					</uni-forms-item>
					<uni-forms-item label="Hobbies" required name="hobby">
						<uni-data-checkbox v-model="customFormData.hobby" multiple :localdata="hobbys" />
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submit('customForm')">commit</button>
			</view>
		</uni-section>


		<uni-section title="Dynamic Forms" type="line">
			<view class="example">
				<!-- Dynamic form validation -->
				<uni-forms ref="dynamicForm" :rules="dynamicRules" :modelValue="dynamicFormData">
					<uni-forms-item label="Email" required name="email">
						<uni-easyinput v-model="dynamicFormData.email" placeholder="Please enter Name" />
					</uni-forms-item>
					<uni-forms-item v-for="(item,index) in dynamicLists" :key="item.id" :label="item.label+' '+index"
						required :rules="item.rules" :name="'domains[' + item.id + ']'">
						<view class="form-item">
							<uni-easyinput v-model="dynamicFormData.domains[item.id]" placeholder="Please enter domain name" />
							<button class="button" size="mini" type="default" @click="del(item.id)">删除</button>
						</view>
					</uni-forms-item>
				</uni-forms>
				<view class="button-group">
					<button type="primary" size="mini" @click="add">Domain Name</button>
					<button type="primary" size="mini" @click="submit('dynamicForm')">commit</button>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 基础表单数据
				baseFormData: {
					name: '',
					age: '',
					introduction: '',
					sex: 2,
					hobby: [5],
					datetimesingle: 1627529992399
				},
				// 表单数据
				alignmentFormData: {
					name: '',
					age: '',
				},
				// 单选数据源
				sexs: [{
					text: ' Male',
					value: 0
				}, {
					text: 'Female',
					value: 1
				}, {
					text: 'Confidential',
					value: 2
				}],
				// 多选数据源
				hobbys: [{
					text: 'Running',
					value: 0
				}, {
					text: 'swimming',
					value: 1
				}, {
					text: 'Drawing',
					value: 2
				}, {
					text: 'Football',
					value: 3
				}, {
					text: 'Basketball',
					value: 4
				}, {
					text: 'Other',
					value: 5
				}],
				// 分段器数据
				current: 0,
				items: ['Left Align', 'Top Align'],
				// 校验表单数据
				valiFormData: {
					name: '',
					age: '',
					introduction: '',
				},
				// 校验规则
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: 'Name can`t be empty'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: 'Age can`t be empty'
						}, {
							format: 'number',
							errorMessage: 'Age only numbers can be entered'
						}]
					}
				},
				// 自定义表单数据
				customFormData: {
					name: '',
					age: '',
					hobby: []
				},
				// 自定义表单校验规则
				customRules: {
					name: {
						rules: [{
							required: true,
							errorMessage: 'Name can`t be empty'
						}]
					},
					age: {
						rules: [{
							required: true,
							errorMessage: 'Age can`t be empty'
						}]
					},
					hobby: {
						rules: [{
								format: 'array'
							},
							{
								validateFunction: function(rule, value, data, callback) {
									if (value.length < 2) {
										callback('Please check at least two Hobbies')
									}
									return true
								}
							}
						]
					}

				},
				dynamicFormData: {
					email: '',
					domains: {}
				},
				dynamicLists: [],
				dynamicRules: {
					email: {
						rules: [{
							required: true,
							errorMessage: 'Domain name can`t be empty'
						}, {
							format: 'email',
							errorMessage: 'Domain name format error'
						}]
					}
				}
			}
		},
		computed: {
			// 处理表单排列切换
			alignment() {
				if (this.current === 0) return 'left'
				if (this.current === 1) return 'top'
				return 'left'
			}
		},
		onLoad() {},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
			this.$refs.customForm.setRules(this.customRules)
		},
		methods: {
			onClickItem(e) {
				console.log(e);
				this.current = e.currentIndex
			},
			add() {
				this.dynamicLists.push({
					label: 'Domain name',
					rules: [{
						'required': true,
						errorMessage: 'Domain name field is required'
					}],
					id: Date.now()
				})
			},
			del(id) {
				let index = this.dynamicLists.findIndex(v => v.id === id)
				this.dynamicLists.splice(index, 1)
			},
			submit(ref) {
				this.$refs[ref].validate().then(res => {
					console.log('success', res);
					uni.showToast({
						title: `Calibration passed`
					})
				}).catch(err => {
					console.log('err', err);
				})
			},
		}
	}
</script>

<style lang="scss">
	.example {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
	}
</style>
