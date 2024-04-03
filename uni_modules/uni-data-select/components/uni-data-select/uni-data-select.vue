<template>
	<view class="uni-stat__select">
		<span v-if="label" class="uni-label-text hide-on-phone">{{label + '：'}}</span>
		<view class="uni-stat-box" :class="{'uni-stat__actived': current}">
			<view class="uni-select" :class="{'uni-select--disabled':disabled}">
				<view class="uni-select__input-box" @click="toggleSelector">
					<view v-if="current" class="uni-select__input-text">{{textShow}}</view>
					<view v-else class="uni-select__input-text uni-select__input-placeholder">{{typePlaceholder}}</view>
					<view v-if="current && clear && !disabled" @click.stop="clearVal">
						<uni-icons type="clear" color="#c0c4cc" size="24" />
					</view>
					<view v-else>
						<uni-icons :type="showSelector? 'top' : 'bottom'" size="14" color="#999" />
					</view>
				</view>
				<view class="uni-select--mask" v-if="showSelector" @click="toggleSelector" />
				<view class="uni-select__selector" :style="getOffsetByPlacement" v-if="showSelector">
					<view :class="placement=='bottom'?'uni-popper__arrow_bottom':'uni-popper__arrow_top'"></view>
					<scroll-view scroll-y="true" class="uni-select__selector-scroll">
						<view class="uni-select__selector-empty" v-if="mixinDatacomResData.length === 0">
							<text>{{emptyTips}}</text>
						</view>
						<view v-else class="uni-select__selector-item" v-for="(item,index) in mixinDatacomResData" :key="index"
							@click="change(item)">
							<text :class="{'uni-select__selector__disabled': item.disable}">{{formatItemName(item)}}</text>
						</view>
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
	 * @property {String} value 默认值
	 * @property {Array} localdata 本地数据 ，格式 [{text:'',value:''}]
	 * @property {Boolean} clear 是否可以清空已选项
	 * @property {Boolean} emptyText 没有数据时显示的文字 ，本地数据无效
	 * @property {String} label 左侧标题
	 * @property {String} placeholder 输入框的提示文字
	 * @property {Boolean} disabled 是否禁用
	 * @property {String} placement 弹出位置
	 * 	@value top   		顶部弹出
	 * 	@value bottom		底部弹出（default)
	 * @event {Function} change  选中发生变化触发
	 */

	export default {
		name: "uni-data-select",
		mixins: [uniCloud.mixinDatacom || {}],
		props: {
			localdata: {
				type: Array,
				default () {
					return []
				}
			},
			value: {
				type: [String, Number],
				default: ''
			},
			modelValue: {
				type: [String, Number],
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
				// #ifdef VUE3
				return this.modelValue;
				// #endif
				// #ifndef VUE3
				return this.value;
				// #endif
			},
			textShow() {
				// 长文本显示
				let text = this.current;
				if (text.length > 10) {
					return text.slice(0, 25) + '...';
				}
				return text;
			},
			getOffsetByPlacement() {
				switch (this.placement) {
					case 'top':
						return "bottom:calc(100% + 12px);";
					case 'bottom':
						return "top:calc(100% + 12px);";
				}
			}
		},

		watch: {
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
			debounce(fn, time = 100) {
				let timer = null
				return function(...args) {
					if (timer) clearTimeout(timer)
					timer = setTimeout(() => {
						fn.apply(this, args)
					}, time)
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
				let defValue = ''
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
						let defItem = ''
						if (this.defItem > 0 && this.defItem <= this.mixinDatacomResData.length) {
							defItem = this.mixinDatacomResData[this.defItem - 1].value
						}
						defValue = defItem
					}
					if (defValue || defValue === 0) {
						this.emit(defValue)
					}
				}
				const def = this.mixinDatacomResData.find(item => item.value === defValue)
				this.current = def ? this.formatItemName(def) : ''
			},

			/**
			 * @param {[String, Number]} value
			 * 判断用户给的 value 是否同时为禁用状态
			 */
			isDisabled(value) {
				let isDisabled = false;

				this.mixinDatacomResData.forEach(item => {
					if (item.value === value) {
						isDisabled = item.disable
					}
				})

				return isDisabled;
			},

			clearVal() {
				this.emit('')
				if (this.collection) {
					this.removeCache()
				}
			},
			change(item) {
				if (!item.disable) {
					this.showSelector = false
					this.current = this.formatItemName(item)
					this.emit(item.value)
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

	.uni-select {
		font-size: 14px;
		border: 1px solid $uni-border-3;
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
		border-bottom: solid 1px $uni-border-3;
		width: 100%;
		flex: 1;
		height: 35px;

		&--disabled {
			background-color: #f5f7fa;
			cursor: not-allowed;
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
		height: 35px;
		position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		align-items: center;
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
		line-height: 35px;
		font-size: 14px;
		text-align: center;
		/* border-bottom: solid 1px $uni-border-3; */
		padding: 0px 10px;
	}

	.uni-select__selector-item:hover {
		background-color: #f9f9f9;
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
	.uni-popper__arrow_top::after,
	{
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
	}

	.uni-select__input-placeholder {
		color: $uni-base-color;
		font-size: 12px;
	}

	.uni-select--mask {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 2;
	}
</style>
