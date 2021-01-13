<template>
	<view class="uni-data-tree">
		<view class="uni-data-tree-input" @click="handleInput">
			<slot :options="options" :data="inputSelected" :error="errorMessage">
				<view class="input-value">
					<text v-if="errorMessage" class="error-text">{{errorMessage}}</text>
					<uni-load-more v-else-if="loading && !isOpened" class="load-more" :contentText="loadMore" status="loading"></uni-load-more>
					<view v-else-if="inputSelected.length" v-for="(item,index) in inputSelected" :key="index" class="input-value-item">
						<text>{{item.text}}</text><text v-if="index<inputSelected.length-1" class="input-split-line">/</text>
					</view>
					<text v-else class="placeholder">{{placeholder}}</text>
					<view class="input-arrow"></view>
				</view>
			</slot>
		</view>
		<view class="uni-data-tree-cover" v-if="isOpened" @click="handleClose"></view>
		<view class="uni-data-tree-dialog" v-if="isOpened">
			<view class="dialog-caption">
				<view class="title-area">
					<text class="title">{{popupTitle}}</text>
				</view>
				<view class="dialog-close" @click="handleClose">
					<view class="dialog-close-plus" data-id="close"></view>
					<view class="dialog-close-plus dialog-close-rotate" data-id="close"></view>
				</view>
			</view>
			<data-picker-view class="picker-view" ref="pickerView" v-model="value" :localdata="localdata" :preload="preload" :collection="collection" :field="field" :orderby="orderby" :where="where" :step-searh="stepSearh" :self-field="selfField" :parent-field="parentField" :managed-mode="true" @change="onchange" @datachange="ondatachange"></data-picker-view>
		</view>
	</view>
</template>

<script>
	import dataPicker from "../uni-data-pickerview/uni-data-picker.js"
	import DataPickerView from "../uni-data-pickerview/uni-data-pickerview.vue"

	/**
	 * uni-data-picker
	 * @description uni-data-picker
	 * @tutorial https://uniapp.dcloud.net.cn/uniCloud/uni-data-picker
	 * @property {String} popup-title 弹出窗口标题
	 * @property {Array} localdata 本地数据，参考
	 * @property {Boolean} preload = [true|false] 是否预加载数据
	 * @value true 开启预加载数据，点击弹出窗口后显示已加载数据
	 * @value false 关闭预加载数据，点击弹出窗口后开始加载数据
	 * @property {Boolean} step-searh = [true|false] 是否分布查询
	 * @value true 启用分布查询，仅查询当前选中节点
	 * @value false 关闭分布查询，一次查询出所有数据
	 * @property {String|DBFieldString} self-field 分布查询当前字段名称
	 * @property {String|DBFieldString} parent-field 分布查询父字段名称
	 * @property {String|DBCollectionString} collection 表名
	 * @property {String|DBFieldString} field 查询字段，多个字段用 `,` 分割
	 * @property {String} orderby 排序字段及正序倒叙设置
	 * @property {String|JQLString} where 查询条件
	 * @event {Function} onpopupshow 弹出的选择窗口打开时触发此事件
	 * @event {Function} onpopuphide 弹出的选择窗口关闭时触发此事件
	 */
	export default {
		name: 'UniDataPicker',
		mixins: [dataPicker],
		components: {
			DataPickerView
		},
		props: {
			popupTitle: {
				type: String,
				default: '请选择'
			},
			placeholder: {
				type: String,
				default: '请选择'
			},
			heightMobile: {
				type: String,
				default: ''
			},
			options: {
				type: [Object, Array],
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				isOpened: false,
				inputSelected: []
			}
		},
		created() {
			this.form = this.getForm('uniForms')
			this.formItem = this.getForm('uniFormsItem')
			if (this.formItem) {
				if (this.formItem.name) {
					this.rename = this.formItem.name
					this.form.inputChildrens.push(this)
				}
			}

			this.$nextTick(() => {
				this.load()
			})
		},
		methods: {
			onPropsChange() {
				this._treeData = []
				this.selectedIndex = 0
				this.load()
			},
			load() {
				if (this.isLocaldata) {
					this.loadData()
					this.inputSelected = this.selected.slice(0)
				} else if (this.value.length) {
					this.getTreePath(() => {
						this.inputSelected = this.selected.slice(0)
					})
				}
			},
			getForm(name = 'uniForms') {
				let parent = this.$parent;
				let parentName = parent.$options.name;
				while (parentName !== name) {
					parent = parent.$parent;
					if (!parent) return false;
					parentName = parent.$options.name;
				}
				return parent;
			},
			show() {
				this.isOpened = true
				this.$nextTick(() => {
					this.$refs.pickerView.updateData({
						treeData: this._treeData,
						selected: this.selected,
						selectedIndex: this.selectedIndex
					})
				})
			},
			hide() {
				this.isOpened = false
			},
			handleInput() {
				this.show()
			},
			handleClose(e) {
				this.hide()
			},
			ondatachange(e) {
				this._treeData = this.$refs.pickerView._treeData
			},
			onchange(e) {
				this.hide()
				this.inputSelected = e
				this._dispatchEvent(e)
			},
			_dispatchEvent(selected) {
				var value = new Array(selected.length)
				for (var i = 0; i < selected.length; i++) {
					value[i] = selected[i].value
				}

				if (this.formItem) {
					const v = value[value.length - 1]
					this.formItem.setValue(v)
				}

				this.$emit('change', value)
			}
		}
	}
</script>

<style scoped>
	.uni-data-tree {
		position: relative;
		font-size: 14px;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
	}

	.error-text {
		color: #DD524D;
	}

	.loading-cover {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(255, 255, 255, 0.5);
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 101;
	}

	.input-value {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: nowrap;
		font-size: 14px;
		line-height: 38px;
		border: 1px solid #e5e5e5;
		border-radius: 5px;
		padding: 0 5px;
	}

	.input-value-item {
		padding: 0 1px;
	}

	.placeholder {
		color: grey;
	}

	.input-split-line {
		opacity: .5;
	}

	.input-arrow {
		margin-left: auto;
		margin-right: 5px;
		width: 7px;
		height: 7px;
		border-left: 1px solid #999;
		border-bottom: 1px solid #999;
		transform: rotate(-45deg);
		transform-origin: 2px;
	}

	.uni-data-tree-cover {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		flex-direction: column;
		z-index: 100;
	}

	.uni-data-tree-dialog {
		position: fixed;
		left: 0;
		top: auto;
		right: 0;
		bottom: 0;
		height: 80vh;
		background-color: #FFFFFF;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		display: flex;
		flex-direction: column;
		z-index: 102;
	}

	.dialog-caption {
		position: relative;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #f0f0f0;
	}

	.title-area {
		display: flex;
		align-items: center;
		margin: auto;
		padding: 0 10px;
	}

	.title {
		font-weight: bold;
		line-height: 44px;
	}

	.dialog-close {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		padding: 0 15px;
	}

	.dialog-close-plus {
		width: 16px;
		height: 2px;
		background-color: #666;
		border-radius: 2px;
		transform: rotate(45deg);
	}

	.dialog-close-rotate {
		position: absolute;
		transform: rotate(-45deg);
	}

	/* #ifdef H5 */
	@media all and (min-width: 768px) {
		.uni-data-tree-cover {
			background-color: transparent;
		}

		.uni-data-tree-dialog {
			position: absolute;
			top: 100%;
			height: auto;
			min-height: 400px;
			max-height: 50vh;
			background-color: #fff;
			border-radius: 5px;
			box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
		}

		.dialog-caption {
			display: none;
		}
	}

	/* #endif */
</style>