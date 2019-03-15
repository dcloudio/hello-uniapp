<template>
	<view :class="['uni-collapse-cell',{'uni-collapse-cell--disabled':disabled,'uni-collapse-cell--open':isOpen}]" :hover-class="disabled === true || disabled === 'true' ? '' : 'uni-collapse-cell--hover'">
		<view class="uni-collapse-cell__title" @click="onClick">
			<view class="uni-collapse-cell__title-extra" v-if="thumb">
				<image class="uni-collapse-cell__title-img" :src="thumb"></image>
			</view>
			<view class="uni-collapse-cell__title-inner">
				<view class="uni-collapse-cell__title-text">{{title}}</view>
			</view>
			<view class="uni-collapse-cell__title-arrow" :class="{'uni-active':isOpen}">
				<uni-icon color="#bbb" size="20" type="arrowdown"></uni-icon>
			</view>
		</view>
		<view class="uni-collapse-cell__content" :class="{'uni-collapse-cell--animation':animation==='outer'}" :style="{height:isOpen==='true' || isOpen=== true ? height + 'px' : '0px'}">
			<view :class="{'uni-collapse-cell__inner':animation === 'inner','uni-active':isOpen}" :id="elId">
				<slot />
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '../uni-icon/uni-icon.vue'
	export default {
		name: 'uni-collapse-item',
		components: {
			uniIcon
		},
		props: {
			animation: { //动画效果:inner内容动；outer容器动
				type: String,
				default: 'outer'
			},
			title: { //列表标题
				type: String,
				default: ''
			},
			name: { //唯一标识符
				type: [Number, String],
				default: 0
			},
			disabled: { //是否禁用
				type: [Boolean, String],
				default: false
			},
			open: { //是否展开
				type: [Boolean, String],
				default: false
			},
			thumb: { //缩略图
				type: String,
				default: ''
			}
		},
		data() {
			const elId = `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`
			return {
				isOpen: false,
				height: 0,
				elId: elId
			};
		},
		watch: {
			open(val) {
				this.isOpen = val
			}
		},
		created() {
			let parent = this.$parent || this.$root
			let name = parent.$options.name
			this.isOpen = this.open

			while (parent && name !== 'uni-collapse') {
				parent = parent.$parent
				if (parent) {
					name = parent.$options.name
				}
			}
			this.parent = parent
		},
		// #ifdef H5
		mounted() {
			this.getSize()
		},
		// #endif
		// #ifndef H5
		onReady() {
			this.getSize()
		},
		// #endif
		methods: {
			getSize() {
				uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
					this.height = ret[0].height
				});
			},
			onClick() {
				if (this.disabled) {
					return
				}
				let accordion = this.parent.accordion ? this.parent.accordion : false
				if (accordion === true || accordion === 'true') {
					this.$parent.$children.forEach(vm => {
						if (vm === this) {
							return
						}
						vm.isOpen = false
					})
				}
				this.isOpen = !this.isOpen
				this.parent.onChange && this.parent.onChange(this)
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-collapse-cell {
		position: relative
	}

	.uni-collapse-cell--hover {
		background-color: #f1f1f1
	}

	.uni-collapse-cell--open {
		background-color: #f1f1f1
	}

	.uni-collapse-cell--disabled {
		opacity: .3
	}

	.uni-collapse-cell--animation {
		transition: all .3s
	}

	.uni-collapse-cell:after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc
	}

	.uni-collapse-cell__title {
		padding: 24upx 30upx;
		width: 100%;
		box-sizing: border-box;
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center
	}

	.uni-collapse-cell__title-extra {
		margin-right: 18upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center
	}

	.uni-collapse-cell__title-img {
		height: 52upx;
		width: 52upx
	}

	.uni-collapse-cell__title-arrow {
		width: 20px;
		height: 20px;
		transform: rotate(0);
		transform-origin: center center;
		transition: transform .3s
	}

	.uni-collapse-cell__title-arrow.uni-active {
		transform: rotate(-180deg)
	}

	.uni-collapse-cell__title-inner {
		flex: 1;
		overflow: hidden;
		display: flex;
		flex-direction: column
	}

	.uni-collapse-cell__title-text {
		font-size: 32upx;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: inherit;
		line-height: 1.5;
		overflow: hidden
	}

	.uni-collapse-cell__content {
		position: relative;
		width: 100%;
		overflow: hidden;
		background: #fff
	}

	.uni-collapse-cell__content view {
		font-size: 28upx
	}

	.uni-collapse-cell__inner {
		opacity: 0;
		transform: translateY(-50%);
		transition: all .3s;
		transform-origin: center center
	}

	.uni-collapse-cell__inner.uni-active {
		opacity: 1;
		transform: translateY(0)
	}
</style>