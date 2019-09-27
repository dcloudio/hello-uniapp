<template>
	<view class="uni-grid-wrap">
		<view :id="elId" ref="uni-grid" class="uni-grid" :class="{ 'uni-grid--border': showBorder }" :style="{ 'border-left-style':'solid','border-left-color':borderColor, 'border-left-width':showBorder?'1px':0 }">
			<slot />
		</view>
	</view>
</template>

<script>
	// #ifdef APP-NVUE
	const dom = weex.requireModule('dom');
	// #endif
	export default {
		name: 'UniGrid',
		props: {
			// 每列显示个数
			column: {
				type: Number,
				default: 3
			},
			// 是否显示边框
			showBorder: {
				type: Boolean,
				default: true
			},
			// 是否显示边框
			borderColor: {
				type: String,
				default: '#d0dee5'
			},
			// 全局标记水平方向移动距离 ，起点为中心，负数为左移动，正数为右移动
			hor: {
				type: Number,
				default: 0
			},
			// 全局标记垂直方向移动距离 ，起点为中心，负数为上移动，正数为下移动
			ver: {
				type: Number,
				default: 0
			},
			// 是否正方形显示,默认为 true
			square: {
				type: Boolean,
				default: true
			},
			highlight: {
				type: Boolean,
				default: true
			}
		},
		provide() {
			return {
				grid: this
			}
		},
		data() {
			const elId = `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`
			return {
				index: 0,
				elId,
				width: 0
			}
		},
		created() {
			this.index = 0
			this.childrens = []
			this.pIndex = this.pIndex ? this.pIndex++ : 0
		},
		mounted() {
			// this._getSize()
		},
		methods: {
			change(e) {
				this.$emit('change', e)
			},
			_getSize(fn) {
				// #ifndef APP-NVUE
				uni.createSelectorQuery()
					.in(this)
					.select(`#${this.elId}`)
					.boundingClientRect()
					.exec(ret => {
						if (!ret[0]) {
							setTimeout(() => {
								this._getSize(fn)
							}, 50)
							return
						}
						let width = parseInt(ret[0].width / this.column) - 1 + 'px'
						typeof fn === 'function' && fn(width)
					})
				// #endif
				// #ifdef APP-NVUE
				dom.getComponentRect(this.$refs['uni-grid'], (ret) => {
					if (ret.size.width === 0) {
						setTimeout(() => {
							this._getSize(fn)
						}, 50)
						return
					}
					let width = parseInt(ret.size.width / this.column) - 1 + 'px'
					typeof fn === 'function' && fn(width)
				})
				// #endif
			}
		}
	}
</script>

<style scoped>
	.uni-grid-wrap {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: column;
		/* #ifdef H5 */
		width: 100%;
		/* #endif */
	}

	.uni-grid {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.uni-grid--border {
		border-left-color: #d0dee5;
		border-left-style: solid;
		border-left-width: 1px;
	}
</style>