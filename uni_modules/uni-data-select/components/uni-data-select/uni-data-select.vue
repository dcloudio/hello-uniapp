<template>
	<view class="uni-stat__select">
		<span v-if="label" class="uni-label-text hide-on-phone">{{label + '：'}}</span>
		<view class="uni-stat-box" :class="{'uni-stat__actived': current}">
			<view class="uni-select" :class="{'uni-select--disabled':disabled, 'uni-select--wrap': shouldWrap , 'border-default': mode == 'default','border-bottom': mode == 'underline'}">
				<view class="uni-select__input-box" @click="toggleSelector" :class="{'uni-select__input-box--wrap': shouldWrap}">
          <view v-if="slotSelected" class="slot-content padding-top-bottom" :class="{'uni-select__input-text--wrap': shouldWrap}">
            <slot name="selected" :selectedItems="getSelectedItems()"></slot>
          </view>
          <template v-else>
            <view v-if="textShow" class="uni-select__input-text" :class="{'uni-select__input-text--wrap': shouldWrap}">
              <view class="padding-top-bottom" :class="'align-'+align">{{textShow}}</view>
            </view>
            <view v-else class="uni-select__input-text uni-select__input-placeholder" :class="'align-'+align">{{typePlaceholder}}</view>
          </template>
					<view key="clear-button" v-if="!hideRight && shouldShowClear && clear && !disabled" @click.stop="clearVal">
						<uni-icons type="clear" color="#c0c4cc" size="24" />
					</view>
					<view key="arrow-button" v-else-if="!hideRight">
						<uni-icons :type="showSelector? 'top' : 'bottom'" size="14" color="#999" />
					</view>
				</view>
				<view class="uni-select--mask" v-if="showSelector" @click="toggleSelector" />
					<view class="uni-select__selector" :style="getOffsetByPlacement" v-if="showSelector">
						<view :class="placement=='bottom'?'uni-popper__arrow_bottom':'uni-popper__arrow_top'"></view>
						<scroll-view scroll-y="true" class="uni-select__selector-scroll">
							<template v-if="slotEmpty && mixinDatacomResData.length === 0">
								<view class="uni-select__selector-empty">
									<slot name="empty" :empty="emptyTips"></slot>
								</view>
							</template>
							<template v-else>
								<view v-if="mixinDatacomResData.length === 0" class="uni-select__selector-empty">
									<text>{{emptyTips}}</text>
								</view>
							</template>
							<template v-if="slotOption">
								<view v-for="(itemData,index) in mixinDatacomResData" :key="index" @click="change(itemData)">
									<slot name="option" :item="itemData" :itemSelected="multiple? getCurrentValues().includes(itemData.value):getCurrentValues() == itemData.value"></slot>
								</view>
							</template>
							<template v-else>
								<view v-if="!multiple && mixinDatacomResData.length > 0" class="uni-select__selector-item" v-for="(item,index) in mixinDatacomResData" :key="index"
									@click="change(item)">
									<text :class="{'uni-select__selector__disabled': item.disable}">{{formatItemName(item)}}</text>
								</view>
								<view v-if="multiple && mixinDatacomResData.length > 0" >
									<checkbox-group @change="checkBoxChange">
										<label class="uni-select__selector-item" v-for="(item,index) in mixinDatacomResData" :key="index" >
											<checkbox :value="index+''" :checked="getCurrentValues().includes(item.value)" :disabled="item.disable"></checkbox>
											<view :class="{'uni-select__selector__disabled': item.disable}">{{formatItemName(item)}}</view>
										</label>
									</checkbox-group>
								</view>
							</template>
						</scroll-view>
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * DataChecklist 数据选择器
	 * @description 通过数据渲染的下拉框组件
	 * @tutorial https://uniapp.dcloud.io/component/uniui/uni-data-select
	 * @property {String|Array} value 默认值，多选时为数组
	 * @property {Array} localdata 本地数据 ，格式 [{text:'',value:''}]
	 * @property {Boolean} clear 是否可以清空已选项
	 * @property {Boolean} emptyText 没有数据时显示的文字 ，本地数据无效
	 * @property {String} label 左侧标题
	 * @property {String} placeholder 输入框的提示文字
	 * @property {Boolean} disabled 是否禁用
	 * @property {Boolean} multiple 是否多选模式
	 * @property {Boolean} wrap 是否允许选中文本换行显示
	 * @property {String} placement 弹出位置
	 * 	@value top   		顶部弹出
	 * 	@value bottom		底部弹出（default)
	 * @property {String} align 选择文字的位置
	 *  @value left 显示左侧
	 *  @value center 显示中间
	 *  @value right 显示 右侧
	 * @property {Boolean} hideRight 是否隐藏右侧按钮
	 * @property {String} mode 边框样式
	 *  @value default 四周边框
	 *  @value underline 下边框
	 *  @value none 无边框
	 * @event {Function} change  选中发生变化触发
	 * @event {Function} open  选择框开启时触发
	 * @event {Function} close  选择框关闭时触发
	 * @event {Function} clear  点击清除按钮之后触发
	 */

	export default {
		name: "uni-data-select",
		mixins: [uniCloud.mixinDatacom || {}],
		emits: [
			'open',
			'close',
			'update:modelValue',
			'input',
			'clear',
			'change'
		],
		model: {
			prop: 'modelValue',
			event: 'update:modelValue'
		},
		options: {
			// #ifdef MP-TOUTIAO
			virtualHost: false,
			// #endif
			// #ifndef MP-TOUTIAO
			virtualHost: true
			// #endif
		},
		props: {
			localdata: {
				type: Array,
				default () {
					return []
				}
			},
			value: {
				type: [String, Number, Array],
				default: ''
			},
			modelValue: {
				type: [String, Number, Array],
				default: ''
			},
			label: {
				type: String,
				default: ''
			},
			placeholder: {
				type: String,
				default: '请选择'
			},
			emptyTips: {
				type: String,
				default: '无选项'
			},
			clear: {
				type: Boolean,
				default: true
			},
			defItem: {
				type: Number,
				default: 0
			},
			disabled: {
				type: Boolean,
				default: false
			},
			// 格式化输出 用法 field="_id as value, version as text, uni_platform as label" format="{label} - {text}"
			format: {
				type: String,
				default: ''
			},
			placement: {
				type: String,
				default: 'bottom'
			},
      multiple: {
				type: Boolean,
				default: false
			},
			wrap: {
				type: Boolean,
				default: false
			},
			align:{
				type: String,
				default: "left"
			},
			hideRight: {
				type: Boolean,
				default: false
			},
      mode:{
        type: String,
        default: 'default'
      }
		},
		data() {
			return {
				showSelector: false,
				current: '',
				mixinDatacomResData: [],
				apps: [],
				channels: [],
				cacheKey: "uni-data-select-lastSelectedValue",
			};
		},
		created() {
			this.debounceGet = this.debounce(() => {
				this.query();
			}, 300);
			if (this.collection && !this.localdata.length) {
				this.debounceGet();
			}
		},
		computed: {
			typePlaceholder() {
				const text = {
					'opendb-stat-app-versions': '版本',
					'opendb-app-channels': '渠道',
					'opendb-app-list': '应用'
				}
				const common = this.placeholder
				const placeholder = text[this.collection]
				return placeholder ?
					common + placeholder :
					common
			},
			valueCom() {
        if (this.value === '') return this.modelValue
				if (this.modelValue === '') return this.value
				return this.value
			},
			textShow() {
				// 长文本显示
				if (this.multiple) {
					const currentValues = this.getCurrentValues();
					if (Array.isArray(currentValues) && currentValues.length > 0) {
						const selectedItems = this.mixinDatacomResData.filter(item => currentValues.includes(item.value));
						return selectedItems.map(item => this.formatItemName(item)).join(', ');
					} else {
						return ''; // 空数组时返回空字符串，显示占位符
					}
				} else {
					return this.current;
				}
			},
			shouldShowClear() {
				if (this.multiple) {
					const currentValues = this.getCurrentValues();
					return Array.isArray(currentValues) && currentValues.length > 0;
				} else {
					return !!this.current;
				}
			},
			shouldWrap() {
				// 只有在多选模式、开启换行、且有内容时才应用换行样式
				return this.multiple && this.wrap && !!this.textShow;
			},
			getOffsetByPlacement() {
				switch (this.placement) {
					case 'top':
						return "bottom:calc(100% + 12px);";
					case 'bottom':
						return "top:calc(100% + 12px);";
				}
			},
      slotSelected(){
        // #ifdef VUE2
        return this.$scopedSlots ? this.$scopedSlots.selected : false
        // #endif
        // #ifdef VUE3
        return this.$slots ? this.$slots.selected : false
        // #endif
      },
      slotEmpty(){
        // #ifdef VUE2
        return this.$scopedSlots ? this.$scopedSlots.empty : false
        // #endif
        // #ifdef VUE3
        return this.$slots ? this.$slots.empty : false
        // #endif
      },
			slotOption(){
				// #ifdef VUE2
				return this.$scopedSlots ? this.$scopedSlots.option : false
				// #endif
				// #ifdef VUE3
				return this.$slots ? this.$slots.option : false
				// #endif
			}
		},
		watch: {
			showSelector:{
				handler(val,old){
					val ? this.$emit('open') : this.$emit('close')
				}
			},
			localdata: {
				immediate: true,
				handler(val, old) {
					if (Array.isArray(val) && old !== val) {
						this.mixinDatacomResData = val
					}
				}
			},
			valueCom(val, old) {
				this.initDefVal()
			},
			mixinDatacomResData: {
				immediate: true,
				handler(val) {
					if (val.length) {
						this.initDefVal()
					}
				}
			},
		},
		methods: {
			getSelectedItems() {
				const currentValues = this.getCurrentValues();
				let _minxData = this.mixinDatacomResData
				// #ifdef MP-WEIXIN || MP-TOUTIAO
				_minxData = JSON.parse(JSON.stringify(this.mixinDatacomResData))
				// #endif
				if (this.multiple) {
					return _minxData.filter(item => currentValues.includes(item.value)) || [];
				} else {
					return _minxData.filter(item => item.value === currentValues) || [];
				}
			},
			debounce(fn, time = 100) {
				let timer = null
				return function(...args) {
					if (timer) clearTimeout(timer)
					timer = setTimeout(() => {
						fn.apply(this, args)
					}, time)
				}
			},
			// 检查项目是否已选中
			isSelected(item) {
				if (this.multiple) {
					const currentValues = this.getCurrentValues();
					return Array.isArray(currentValues) && currentValues.includes(item.value);
				} else {
					return this.getCurrentValues() === item.value;
				}
			},
			// 获取当前选中的值
			getCurrentValues() {
				if (this.multiple) {
					return Array.isArray(this.valueCom) ? this.valueCom : (this.valueCom ? [this.valueCom] : []);
				} else {
					return this.valueCom;
				}
			},
			// 执行数据库查询
			query() {
				this.mixinDatacomEasyGet();
			},
			// 监听查询条件变更事件
			onMixinDatacomPropsChange() {
				if (this.collection) {
					this.debounceGet();
				}
			},
			initDefVal() {
				let defValue = this.multiple ? [] : ''
				if ((this.valueCom || this.valueCom === 0) && !this.isDisabled(this.valueCom)) {
					defValue = this.valueCom
				} else {
					let strogeValue
					if (this.collection) {
						strogeValue = this.getCache()
					}
					if (strogeValue || strogeValue === 0) {
						defValue = strogeValue
					} else {
						let defItem = this.multiple ? [] : ''
						if (this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length) {
							defItem = this.multiple ? [this.mixinDatacomResData[this.defItem - 1].value] : this.mixinDatacomResData[this.defItem - 1].value
						}
						defValue = defItem
					}
					if (defValue || defValue === 0 || (this.multiple && Array.isArray(defValue) && defValue.length > 0)) {
						this.emit(defValue)
					}
				}

				if (this.multiple) {
					const selectedValues = Array.isArray(defValue) ? defValue : (defValue ? [defValue] : []);
					const selectedItems = this.mixinDatacomResData.filter(item => selectedValues.includes(item.value));
					this.current = selectedItems.map(item => this.formatItemName(item));
				} else {
					const def = this.mixinDatacomResData.find(item => item.value === defValue)
					this.current = def ? this.formatItemName(def) : ''
				}
			},

			/**
			 * @param {[String, Number, Array]} value
			 * 判断用户给的 value 是否同时为禁用状态
			 */
			isDisabled(value) {
				if (Array.isArray(value)) {
					// 对于数组，如果任意一个值被禁用，则认为整体被禁用
					return value.some(val => {
						return this.mixinDatacomResData.some(item => item.value === val && item.disable);
					});
				} else {
					let isDisabled = false;
					this.mixinDatacomResData.forEach(item => {
						if (item.value === value) {
							isDisabled = item.disable
						}
					})
					return isDisabled;
				}
			},
			clearVal() {
				const emptyValue = this.multiple ? [] : '';
				this.emit(emptyValue)
				this.current = this.multiple ? [] : ''
				if (this.collection) {
					this.removeCache()
				}
				this.$emit('clear')
			},
			checkBoxChange(res){
				let range = res.detail.value

				let currentValues = range && range.length > 0? range.map((item)=>{
					const index = parseInt(item, 10);

					if (isNaN(index)) {
						console.error(`无效索引: ${item}`);
					}

					if (index < 0 || index >= this.mixinDatacomResData.length) {
						console.error(`索引越界: ${index}`);
					}

					return this.mixinDatacomResData[index].value;
				}) : []
				const selectedItems = this.mixinDatacomResData.filter(dataItem => currentValues.includes(dataItem.value));
				this.current = selectedItems.map(dataItem => this.formatItemName(dataItem));

				this.emit(currentValues);
			},
			change(item) {
				if (!item.disable) {
					if (this.multiple) {
						// 多选模式
						let currentValues = this.getCurrentValues();
						if (!Array.isArray(currentValues)) {
							currentValues = currentValues ? [currentValues] : [];
						}

						const itemValue = item.value;
						const index = currentValues.indexOf(itemValue);

						if (index > -1) {
							currentValues.splice(index, 1);
						} else {
							currentValues.push(itemValue);
						}

						const selectedItems = this.mixinDatacomResData.filter(dataItem => currentValues.includes(dataItem.value));
						this.current = selectedItems.map(dataItem => this.formatItemName(dataItem));

						this.emit(currentValues);
					} else {
						// 单选模式
						this.showSelector = false
						this.current = this.formatItemName(item)
						this.emit(item.value)
					}
				}
			},
			emit(val) {
				this.$emit('input', val)
				this.$emit('update:modelValue', val)
				this.$emit('change', val)
				if (this.collection) {
					this.setCache(val);
				}
			},
			toggleSelector() {
				if (this.disabled) {
					return
				}

				this.showSelector = !this.showSelector
			},
			formatItemName(item) {
				let {
					text,
					value,
					channel_code
				} = item
				channel_code = channel_code ? `(${channel_code})` : ''

				if (this.format) {
					// 格式化输出
					let str = "";
					str = this.format;
					for (let key in item) {
						str = str.replace(new RegExp(`{${key}}`, "g"), item[key]);
					}
					return str;
				} else {
					return this.collection.indexOf('app-list') > 0 ?
						`${text}(${value})` :
						(
							text ?
							text :
							`未命名${channel_code}`
						)
				}
			},
			// 获取当前加载的数据
			getLoadData() {
				return this.mixinDatacomResData;
			},
			// 获取当前缓存key
			getCurrentCacheKey() {
				return this.collection;
			},
			// 获取缓存
			getCache(name = this.getCurrentCacheKey()) {
				let cacheData = uni.getStorageSync(this.cacheKey) || {};
				return cacheData[name];
			},
			// 设置缓存
			setCache(value, name = this.getCurrentCacheKey()) {
				let cacheData = uni.getStorageSync(this.cacheKey) || {};
				cacheData[name] = value;
				uni.setStorageSync(this.cacheKey, cacheData);
			},
			// 删除缓存
			removeCache(name = this.getCurrentCacheKey()) {
				let cacheData = uni.getStorageSync(this.cacheKey) || {};
				delete cacheData[name];
				uni.setStorageSync(this.cacheKey, cacheData);
			},
		}
	}
</script>

<style lang="scss">
	$uni-base-color: #6a6a6a !default;
	$uni-main-color: #333 !default;
	$uni-secondary-color: #909399 !default;
	$uni-border-3: #e5e5e5;
  $uni-primary: #2979ff !default;
	$uni-success: #4cd964 !default;
	$uni-warning: #f0ad4e !default;
	$uni-error: #dd524d !default;
	$uni-info: #909399 !default;

	/* #ifndef APP-NVUE */
	@media screen and (max-width: 500px) {
		.hide-on-phone {
			display: none;
		}
	}

	/* #endif */
	.uni-stat__select {
		display: flex;
		align-items: center;
		// padding: 15px;
		/* #ifdef H5 */
		cursor: pointer;
		/* #endif */
		width: 100%;
		flex: 1;
		box-sizing: border-box;
	}

	.uni-stat-box {
		background-color: #fff;
		width: 100%;
		flex: 1;
	}

	.uni-stat__actived {
		width: 100%;
		flex: 1;
		// outline: 1px solid #2979ff;
	}

	.uni-label-text {
		font-size: 14px;
		font-weight: bold;
		color: $uni-base-color;
		margin: auto 0;
		margin-right: 5px;
	}

  .border-bottom {
    border-bottom: solid 1px $uni-border-3;
  }

  .border-default {
    border: 1px solid $uni-border-3;
  }

	.uni-select {
		font-size: 14px;
		box-sizing: border-box;
		border-radius: 4px;
		padding: 0 5px;
		padding-left: 10px;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		user-select: none;
		/* #endif */
		flex-direction: row;
		align-items: center;
		width: 100%;
		flex: 1;
		min-height: 35px;

		&--disabled {
			background-color: #f5f7fa;
			cursor: not-allowed;
		}

		&--wrap {
			height: auto;
			min-height: 35px;
			// align-items: flex-start;
		}
	}

	.uni-select__label {
		font-size: 16px;
		// line-height: 22px;
		height: 35px;
		padding-right: 10px;
		color: $uni-secondary-color;
	}

	.uni-select__input-box {
		// height: 35px;
		width: 0px;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		align-items: center;

		&--wrap {
			.uni-select__input-text {
				margin-right: 8px;
			}
		}

    .padding-top-bottom {
      padding-top: 5px;
      padding-bottom: 5px;
    }

    .slot-content {
      width: 100%;
      display: flex;
      flex-direction: row;
			flex-wrap: wrap;
    }
	}

	.uni-select__input {
		flex: 1;
		font-size: 14px;
		height: 22px;
		line-height: 22px;
	}

	.uni-select__input-plac {
		font-size: 14px;
		color: $uni-secondary-color;
	}

	.uni-select__selector {
		/* #ifndef APP-NVUE */
		box-sizing: border-box;
		/* #endif */
		position: absolute;
		left: 0;
		width: 100%;
		background-color: #FFFFFF;
		border: 1px solid #EBEEF5;
		border-radius: 6px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		z-index: 3;
		padding: 4px 0;
	}

	.uni-select__selector-scroll {
		/* #ifndef APP-NVUE */
		max-height: 200px;
		box-sizing: border-box;
		/* #endif */
	}

	/* #ifdef H5 */
	@media (min-width: 768px) {
		.uni-select__selector-scroll {
			max-height: 600px;
		}
	}

	/* #endif */

	.uni-select__selector-empty,
	.uni-select__selector-item {
		/* #ifndef APP-NVUE */
		display: flex;
		cursor: pointer;
		/* #endif */
		flex-direction: row;
		align-items: center;
		line-height: 35px;
		font-size: 14px;
		/* border-bottom: solid 1px $uni-border-3; */
		padding: 0px 10px;
	}



	.uni-select__selector-item-check {
		margin-left: auto;
	}

	.uni-select__selector-empty:last-child,
	.uni-select__selector-item:last-child {
		/* #ifndef APP-NVUE */
		border-bottom: none;
		/* #endif */
	}

	.uni-select__selector__disabled {
		opacity: 0.4;
		cursor: default;
	}

	/* picker 弹出层通用的指示小三角 */
	.uni-popper__arrow_bottom,
	.uni-popper__arrow_bottom::after,
	.uni-popper__arrow_top,
	.uni-popper__arrow_top::after {
		position: absolute;
		display: block;
		width: 0;
		height: 0;
		border-color: transparent;
		border-style: solid;
		border-width: 6px;
	}

	.uni-popper__arrow_bottom {
		filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
		top: -6px;
		left: 10%;
		margin-right: 3px;
		border-top-width: 0;
		border-bottom-color: #EBEEF5;
	}

	.uni-popper__arrow_bottom::after {
		content: " ";
		top: 1px;
		margin-left: -6px;
		border-top-width: 0;
		border-bottom-color: #fff;
	}

	.uni-popper__arrow_top {
		filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.03));
		bottom: -6px;
		left: 10%;
		margin-right: 3px;
		border-bottom-width: 0;
		border-top-color: #EBEEF5;
	}

	.uni-popper__arrow_top::after {
		content: " ";
		bottom: 1px;
		margin-left: -6px;
		border-bottom-width: 0;
		border-top-color: #fff;
	}


	.uni-select__input-text {
		// width: 280px;
		width: 100%;
		color: $uni-main-color;
		white-space: nowrap;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
		overflow: hidden;

		&--wrap {
			white-space: normal;
			text-overflow: initial;
			-o-text-overflow: initial;
			overflow: visible;
			word-wrap: break-word;
			word-break: break-all;
			// line-height: 1.5;
		}
	}

	.uni-select__input-placeholder {
		color: $uni-base-color;
		font-size: 12px;
    margin: 1px 0;
	}

	.uni-select--mask {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 2;
	}

  .align-left {
    text-align: left;
  }

  .align-center {
    text-align: center;
  }

  .align-right {
    text-align: right;
  }

</style>
