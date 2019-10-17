<template>
	<view>
		<view :id="elId" :class="{ border: showBorder }" :style="{ 'border-left': showBorder ? '1px ' + borderColor + ' solid' : 'none' }" class="uni-grid">
			<slot />
		</view>
	</view>
</template>

<script>
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
				elId
			}
		},
		created() {
			this.index = 0
			this.childrens = []
			this.pIndex = this.pIndex ? this.pIndex++ : 0
		},
		methods: {
			change(e) {
				this.$emit('change', e)
			},
			_getSize(fn) {
				uni.createSelectorQuery()
					.in(this)
					.select(`#${this.elId}`)
					.boundingClientRect()
					.exec(ret => {
						if (!ret[0]) {
							setTimeout(this._getSize(fn))
							return
						}
						let width = parseInt(ret[0].width / this.column) - 1 + 'px'
						typeof fn === 'function' && fn(width)
					})
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-grid {
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
		border-left: 1px #d0dee5 solid
	}
</style>