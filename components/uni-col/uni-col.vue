<template>
	<!-- #ifndef APP-NVUE -->
	<view :class="['uni-col', sizeClass, pointClassList]" :style="{
		paddingLeft:`${Number(gutter)}rpx`,
		paddingRight:`${Number(gutter)}rpx`,
	}">
		<slot></slot>
	</view>
	<!-- #endif -->
	<!-- #ifdef APP-NVUE -->
	<!-- 在nvue上，类名样式不生效，换为style -->
	<!-- 设置right正值失效，设置 left 负值 -->
	<view :class="['uni-col']" :style="{
		paddingLeft:`${Number(gutter)}rpx`,
		paddingRight:`${Number(gutter)}rpx`,
		width:`${nvueWidth}rpx`,
		position:'relative',
		marginLeft:`${marginLeft}rpx`,
		left:`${right === 0 ? left : -right}rpx`
	}">
		<slot></slot>
	</view>
	<!-- #endif -->
</template>

<script>
	/**
	 * Col	布局-列
	 * @description	搭配uni-row使用，构建布局。
	 * @tutorial	https://ext.dcloud.net.cn/plugin?id=3958
	 *
	 * @property	{span} type = Number 栅格占据的列数
	 * 						默认 24
	 * @property	{offset} type = Number 栅格左侧的间隔格数
	 * @property	{push} type = Number 栅格向右移动格数
	 * @property	{pull} type = Number 栅格向左移动格数
	 * @property	{xs} type = [Number, Object] <768px 响应式栅格数或者栅格属性对象
	 * 						@description	Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
	 * @property	{sm} type = [Number, Object] ≥768px 响应式栅格数或者栅格属性对象
	 * 						@description	Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
	 * @property	{md} type = [Number, Object] ≥992px 响应式栅格数或者栅格属性对象
	 * 						@description	Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
	 * @property	{lg} type = [Number, Object] ≥1200px 响应式栅格数或者栅格属性对象
	 * 						@description	Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
	 * @property	{xl} type = [Number, Object] ≥1920px 响应式栅格数或者栅格属性对象
	 * 						@description	Number时表示在此屏幕宽度下，栅格占据的列数。Object时可配置多个描述{span: 4, offset: 4}
	 */
	const ComponentClass = 'uni-col';

	// -1 默认值，因为在微信小程序端只给Number会有默认值0
	export default {
		name: 'uniCol',
		// #ifdef MP-WEIXIN
		options: {
			virtualHost: true // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现
		},
		// #endif
		props: {
			span: {
				type: Number,
				default: 24
			},
			offset: {
				type: Number,
				default: -1
			},
			pull: {
				type: Number,
				default: -1
			},
			push: {
				type: Number,
				default: -1
			},
			xs: [Number, Object],
			sm: [Number, Object],
			md: [Number, Object],
			lg: [Number, Object],
			xl: [Number, Object]
		},
		data() {
			return {
				gutter: 0,
				sizeClass: '',
				parentWidth: 0,
				nvueWidth: 0,
				marginLeft: 0,
				right: 0,
				left: 0
			}
		},
		created() {
			// 字节小程序中，在computed中读取$parent为undefined
			let parent = this.$parent;

			while (parent && parent.$options.componentName !== 'uniRow') {
				parent = parent.$parent;
			}

			this.updateGutter(parent.gutter)
			parent.$watch('gutter', (gutter) => {
				this.updateGutter(gutter)
			})

			// #ifdef APP-NVUE
			this.updateNvueWidth(parent.width)
			parent.$watch('width', (width) => {
				this.updateNvueWidth(width)
			})
			// #endif
		},
		computed: {
			sizeList() {
				let {
					span,
					offset,
					pull,
					push
				} = this;

				return {
					span,
					offset,
					pull,
					push
				}
			},
			// #ifndef APP-NVUE
			pointClassList() {
				let classList = [];

				['xs', 'sm', 'md', 'lg', 'xl'].forEach(point => {
					const props = this[point];
					if (typeof props === 'number') {
						classList.push(`${ComponentClass}-${point}-${props}`)
					} else if (typeof props === 'object' && props) {
						Object.keys(props).forEach(pointProp => {
							classList.push(
								pointProp === 'span' ?
								`${ComponentClass}-${point}-${props[pointProp]}` :
								`${ComponentClass}-${point}-${pointProp}-${props[pointProp]}`
							)
						})
					}
				});

				// 支付宝小程序使用 :class=[ ['a','b'] ]，渲染错误
				return classList.join(' ');
			}
			// #endif
		},
		methods: {
			updateGutter(parentGutter) {
				parentGutter = Number(parentGutter);
				if (!isNaN(parentGutter)) {
					this.gutter = parentGutter / 2
				}
			},
			// #ifdef APP-NVUE
			updateNvueWidth(width) {
				// 用于在nvue端，span，offset，pull，push的计算
				this.parentWidth = width;
				['span', 'offset', 'pull', 'push'].forEach(size => {
					const curSize = this[size];
					if ((curSize || curSize === 0) && curSize !== -1) {
						let RPX = 1 / 24 * curSize * width
						RPX = Number(RPX);
						switch (size) {
							case 'span':
								this.nvueWidth = RPX
								break;
							case 'offset':
								this.marginLeft = RPX
								break;
							case 'pull':
								this.right = RPX
								break;
							case 'push':
								this.left = RPX
								break;
						}
					}
				});
			}
			// #endif
		},
		watch: {
			sizeList: {
				immediate: true,
				handler(newVal) {
					// #ifndef APP-NVUE
					let classList = [];
					for (let size in newVal) {
						const curSize = newVal[size];
						if ((curSize || curSize === 0) && curSize !== -1) {
							classList.push(
								size === 'span' ?
								`${ComponentClass}-${curSize}` :
								`${ComponentClass}-${size}-${curSize}`
							)
						}
					}
					// 支付宝小程序使用 :class=[ ['a','b'] ]，渲染错误
					this.sizeClass = classList.join(' ');
					// #endif
					// #ifdef APP-NVUE
					this.updateNvueWidth(this.parentWidth);
					// #endif
				}
			}
		}
	}
</script>

<style scoped>
	/* breakpoints */
	/* #ifndef APP-NVUE */
	.uni-col {
		float: left;
		box-sizing: border-box;
	}

	.uni-col-0 {
		/* #ifdef APP-NVUE */
		width: 0;
		height: 0;
		margin-top: 0;
		margin-right: 0;
		margin-bottom: 0;
		margin-left: 0;
		/* #endif */
		/* #ifndef APP-NVUE */
		display: none;
		/* #endif */
	}

	.uni-col-0 {
		width: 0%;
	}

	.uni-col-offset-0 {
		margin-left: 0%;
	}

	.uni-col-pull-0 {
		position: relative;
		right: 0%;
	}

	.uni-col-push-0 {
		position: relative;
		left: 0%;
	}

	.uni-col-1 {
		width: 4.1666666667%;
	}

	.uni-col-offset-1 {
		margin-left: 4.1666666667%;
	}

	.uni-col-pull-1 {
		position: relative;
		right: 4.1666666667%;
	}

	.uni-col-push-1 {
		position: relative;
		left: 4.1666666667%;
	}

	.uni-col-2 {
		width: 8.3333333333%;
	}

	.uni-col-offset-2 {
		margin-left: 8.3333333333%;
	}

	.uni-col-pull-2 {
		position: relative;
		right: 8.3333333333%;
	}

	.uni-col-push-2 {
		position: relative;
		left: 8.3333333333%;
	}

	.uni-col-3 {
		width: 12.5%;
	}

	.uni-col-offset-3 {
		margin-left: 12.5%;
	}

	.uni-col-pull-3 {
		position: relative;
		right: 12.5%;
	}

	.uni-col-push-3 {
		position: relative;
		left: 12.5%;
	}

	.uni-col-4 {
		width: 16.6666666667%;
	}

	.uni-col-offset-4 {
		margin-left: 16.6666666667%;
	}

	.uni-col-pull-4 {
		position: relative;
		right: 16.6666666667%;
	}

	.uni-col-push-4 {
		position: relative;
		left: 16.6666666667%;
	}

	.uni-col-5 {
		width: 20.8333333333%;
	}

	.uni-col-offset-5 {
		margin-left: 20.8333333333%;
	}

	.uni-col-pull-5 {
		position: relative;
		right: 20.8333333333%;
	}

	.uni-col-push-5 {
		position: relative;
		left: 20.8333333333%;
	}

	.uni-col-6 {
		width: 25%;
	}

	.uni-col-offset-6 {
		margin-left: 25%;
	}

	.uni-col-pull-6 {
		position: relative;
		right: 25%;
	}

	.uni-col-push-6 {
		position: relative;
		left: 25%;
	}

	.uni-col-7 {
		width: 29.1666666667%;
	}

	.uni-col-offset-7 {
		margin-left: 29.1666666667%;
	}

	.uni-col-pull-7 {
		position: relative;
		right: 29.1666666667%;
	}

	.uni-col-push-7 {
		position: relative;
		left: 29.1666666667%;
	}

	.uni-col-8 {
		width: 33.3333333333%;
	}

	.uni-col-offset-8 {
		margin-left: 33.3333333333%;
	}

	.uni-col-pull-8 {
		position: relative;
		right: 33.3333333333%;
	}

	.uni-col-push-8 {
		position: relative;
		left: 33.3333333333%;
	}

	.uni-col-9 {
		width: 37.5%;
	}

	.uni-col-offset-9 {
		margin-left: 37.5%;
	}

	.uni-col-pull-9 {
		position: relative;
		right: 37.5%;
	}

	.uni-col-push-9 {
		position: relative;
		left: 37.5%;
	}

	.uni-col-10 {
		width: 41.6666666667%;
	}

	.uni-col-offset-10 {
		margin-left: 41.6666666667%;
	}

	.uni-col-pull-10 {
		position: relative;
		right: 41.6666666667%;
	}

	.uni-col-push-10 {
		position: relative;
		left: 41.6666666667%;
	}

	.uni-col-11 {
		width: 45.8333333333%;
	}

	.uni-col-offset-11 {
		margin-left: 45.8333333333%;
	}

	.uni-col-pull-11 {
		position: relative;
		right: 45.8333333333%;
	}

	.uni-col-push-11 {
		position: relative;
		left: 45.8333333333%;
	}

	.uni-col-12 {
		width: 50%;
	}

	.uni-col-offset-12 {
		margin-left: 50%;
	}

	.uni-col-pull-12 {
		position: relative;
		right: 50%;
	}

	.uni-col-push-12 {
		position: relative;
		left: 50%;
	}

	.uni-col-13 {
		width: 54.1666666667%;
	}

	.uni-col-offset-13 {
		margin-left: 54.1666666667%;
	}

	.uni-col-pull-13 {
		position: relative;
		right: 54.1666666667%;
	}

	.uni-col-push-13 {
		position: relative;
		left: 54.1666666667%;
	}

	.uni-col-14 {
		width: 58.3333333333%;
	}

	.uni-col-offset-14 {
		margin-left: 58.3333333333%;
	}

	.uni-col-pull-14 {
		position: relative;
		right: 58.3333333333%;
	}

	.uni-col-push-14 {
		position: relative;
		left: 58.3333333333%;
	}

	.uni-col-15 {
		width: 62.5%;
	}

	.uni-col-offset-15 {
		margin-left: 62.5%;
	}

	.uni-col-pull-15 {
		position: relative;
		right: 62.5%;
	}

	.uni-col-push-15 {
		position: relative;
		left: 62.5%;
	}

	.uni-col-16 {
		width: 66.6666666667%;
	}

	.uni-col-offset-16 {
		margin-left: 66.6666666667%;
	}

	.uni-col-pull-16 {
		position: relative;
		right: 66.6666666667%;
	}

	.uni-col-push-16 {
		position: relative;
		left: 66.6666666667%;
	}

	.uni-col-17 {
		width: 70.8333333333%;
	}

	.uni-col-offset-17 {
		margin-left: 70.8333333333%;
	}

	.uni-col-pull-17 {
		position: relative;
		right: 70.8333333333%;
	}

	.uni-col-push-17 {
		position: relative;
		left: 70.8333333333%;
	}

	.uni-col-18 {
		width: 75%;
	}

	.uni-col-offset-18 {
		margin-left: 75%;
	}

	.uni-col-pull-18 {
		position: relative;
		right: 75%;
	}

	.uni-col-push-18 {
		position: relative;
		left: 75%;
	}

	.uni-col-19 {
		width: 79.1666666667%;
	}

	.uni-col-offset-19 {
		margin-left: 79.1666666667%;
	}

	.uni-col-pull-19 {
		position: relative;
		right: 79.1666666667%;
	}

	.uni-col-push-19 {
		position: relative;
		left: 79.1666666667%;
	}

	.uni-col-20 {
		width: 83.3333333333%;
	}

	.uni-col-offset-20 {
		margin-left: 83.3333333333%;
	}

	.uni-col-pull-20 {
		position: relative;
		right: 83.3333333333%;
	}

	.uni-col-push-20 {
		position: relative;
		left: 83.3333333333%;
	}

	.uni-col-21 {
		width: 87.5%;
	}

	.uni-col-offset-21 {
		margin-left: 87.5%;
	}

	.uni-col-pull-21 {
		position: relative;
		right: 87.5%;
	}

	.uni-col-push-21 {
		position: relative;
		left: 87.5%;
	}

	.uni-col-22 {
		width: 91.6666666667%;
	}

	.uni-col-offset-22 {
		margin-left: 91.6666666667%;
	}

	.uni-col-pull-22 {
		position: relative;
		right: 91.6666666667%;
	}

	.uni-col-push-22 {
		position: relative;
		left: 91.6666666667%;
	}

	.uni-col-23 {
		width: 95.8333333333%;
	}

	.uni-col-offset-23 {
		margin-left: 95.8333333333%;
	}

	.uni-col-pull-23 {
		position: relative;
		right: 95.8333333333%;
	}

	.uni-col-push-23 {
		position: relative;
		left: 95.8333333333%;
	}

	.uni-col-24 {
		width: 100%;
	}

	.uni-col-offset-24 {
		margin-left: 100%;
	}

	.uni-col-pull-24 {
		position: relative;
		right: 100%;
	}

	.uni-col-push-24 {
		position: relative;
		left: 100%;
	}

	@media screen and (max-width: 767px) {
		.uni-col-xs-0 {
			display: none;
		}

		.uni-col-xs-0 {
			width: 0%;
		}

		.uni-col-xs-offset-0 {
			margin-left: 0%;
		}

		.uni-col-xs-pull-0 {
			position: relative;
			right: 0%;
		}

		.uni-col-xs-push-0 {
			position: relative;
			left: 0%;
		}

		.uni-col-xs-1 {
			width: 4.1666666667%;
		}

		.uni-col-xs-offset-1 {
			margin-left: 4.1666666667%;
		}

		.uni-col-xs-pull-1 {
			position: relative;
			right: 4.1666666667%;
		}

		.uni-col-xs-push-1 {
			position: relative;
			left: 4.1666666667%;
		}

		.uni-col-xs-2 {
			width: 8.3333333333%;
		}

		.uni-col-xs-offset-2 {
			margin-left: 8.3333333333%;
		}

		.uni-col-xs-pull-2 {
			position: relative;
			right: 8.3333333333%;
		}

		.uni-col-xs-push-2 {
			position: relative;
			left: 8.3333333333%;
		}

		.uni-col-xs-3 {
			width: 12.5%;
		}

		.uni-col-xs-offset-3 {
			margin-left: 12.5%;
		}

		.uni-col-xs-pull-3 {
			position: relative;
			right: 12.5%;
		}

		.uni-col-xs-push-3 {
			position: relative;
			left: 12.5%;
		}

		.uni-col-xs-4 {
			width: 16.6666666667%;
		}

		.uni-col-xs-offset-4 {
			margin-left: 16.6666666667%;
		}

		.uni-col-xs-pull-4 {
			position: relative;
			right: 16.6666666667%;
		}

		.uni-col-xs-push-4 {
			position: relative;
			left: 16.6666666667%;
		}

		.uni-col-xs-5 {
			width: 20.8333333333%;
		}

		.uni-col-xs-offset-5 {
			margin-left: 20.8333333333%;
		}

		.uni-col-xs-pull-5 {
			position: relative;
			right: 20.8333333333%;
		}

		.uni-col-xs-push-5 {
			position: relative;
			left: 20.8333333333%;
		}

		.uni-col-xs-6 {
			width: 25%;
		}

		.uni-col-xs-offset-6 {
			margin-left: 25%;
		}

		.uni-col-xs-pull-6 {
			position: relative;
			right: 25%;
		}

		.uni-col-xs-push-6 {
			position: relative;
			left: 25%;
		}

		.uni-col-xs-7 {
			width: 29.1666666667%;
		}

		.uni-col-xs-offset-7 {
			margin-left: 29.1666666667%;
		}

		.uni-col-xs-pull-7 {
			position: relative;
			right: 29.1666666667%;
		}

		.uni-col-xs-push-7 {
			position: relative;
			left: 29.1666666667%;
		}

		.uni-col-xs-8 {
			width: 33.3333333333%;
		}

		.uni-col-xs-offset-8 {
			margin-left: 33.3333333333%;
		}

		.uni-col-xs-pull-8 {
			position: relative;
			right: 33.3333333333%;
		}

		.uni-col-xs-push-8 {
			position: relative;
			left: 33.3333333333%;
		}

		.uni-col-xs-9 {
			width: 37.5%;
		}

		.uni-col-xs-offset-9 {
			margin-left: 37.5%;
		}

		.uni-col-xs-pull-9 {
			position: relative;
			right: 37.5%;
		}

		.uni-col-xs-push-9 {
			position: relative;
			left: 37.5%;
		}

		.uni-col-xs-10 {
			width: 41.6666666667%;
		}

		.uni-col-xs-offset-10 {
			margin-left: 41.6666666667%;
		}

		.uni-col-xs-pull-10 {
			position: relative;
			right: 41.6666666667%;
		}

		.uni-col-xs-push-10 {
			position: relative;
			left: 41.6666666667%;
		}

		.uni-col-xs-11 {
			width: 45.8333333333%;
		}

		.uni-col-xs-offset-11 {
			margin-left: 45.8333333333%;
		}

		.uni-col-xs-pull-11 {
			position: relative;
			right: 45.8333333333%;
		}

		.uni-col-xs-push-11 {
			position: relative;
			left: 45.8333333333%;
		}

		.uni-col-xs-12 {
			width: 50%;
		}

		.uni-col-xs-offset-12 {
			margin-left: 50%;
		}

		.uni-col-xs-pull-12 {
			position: relative;
			right: 50%;
		}

		.uni-col-xs-push-12 {
			position: relative;
			left: 50%;
		}

		.uni-col-xs-13 {
			width: 54.1666666667%;
		}

		.uni-col-xs-offset-13 {
			margin-left: 54.1666666667%;
		}

		.uni-col-xs-pull-13 {
			position: relative;
			right: 54.1666666667%;
		}

		.uni-col-xs-push-13 {
			position: relative;
			left: 54.1666666667%;
		}

		.uni-col-xs-14 {
			width: 58.3333333333%;
		}

		.uni-col-xs-offset-14 {
			margin-left: 58.3333333333%;
		}

		.uni-col-xs-pull-14 {
			position: relative;
			right: 58.3333333333%;
		}

		.uni-col-xs-push-14 {
			position: relative;
			left: 58.3333333333%;
		}

		.uni-col-xs-15 {
			width: 62.5%;
		}

		.uni-col-xs-offset-15 {
			margin-left: 62.5%;
		}

		.uni-col-xs-pull-15 {
			position: relative;
			right: 62.5%;
		}

		.uni-col-xs-push-15 {
			position: relative;
			left: 62.5%;
		}

		.uni-col-xs-16 {
			width: 66.6666666667%;
		}

		.uni-col-xs-offset-16 {
			margin-left: 66.6666666667%;
		}

		.uni-col-xs-pull-16 {
			position: relative;
			right: 66.6666666667%;
		}

		.uni-col-xs-push-16 {
			position: relative;
			left: 66.6666666667%;
		}

		.uni-col-xs-17 {
			width: 70.8333333333%;
		}

		.uni-col-xs-offset-17 {
			margin-left: 70.8333333333%;
		}

		.uni-col-xs-pull-17 {
			position: relative;
			right: 70.8333333333%;
		}

		.uni-col-xs-push-17 {
			position: relative;
			left: 70.8333333333%;
		}

		.uni-col-xs-18 {
			width: 75%;
		}

		.uni-col-xs-offset-18 {
			margin-left: 75%;
		}

		.uni-col-xs-pull-18 {
			position: relative;
			right: 75%;
		}

		.uni-col-xs-push-18 {
			position: relative;
			left: 75%;
		}

		.uni-col-xs-19 {
			width: 79.1666666667%;
		}

		.uni-col-xs-offset-19 {
			margin-left: 79.1666666667%;
		}

		.uni-col-xs-pull-19 {
			position: relative;
			right: 79.1666666667%;
		}

		.uni-col-xs-push-19 {
			position: relative;
			left: 79.1666666667%;
		}

		.uni-col-xs-20 {
			width: 83.3333333333%;
		}

		.uni-col-xs-offset-20 {
			margin-left: 83.3333333333%;
		}

		.uni-col-xs-pull-20 {
			position: relative;
			right: 83.3333333333%;
		}

		.uni-col-xs-push-20 {
			position: relative;
			left: 83.3333333333%;
		}

		.uni-col-xs-21 {
			width: 87.5%;
		}

		.uni-col-xs-offset-21 {
			margin-left: 87.5%;
		}

		.uni-col-xs-pull-21 {
			position: relative;
			right: 87.5%;
		}

		.uni-col-xs-push-21 {
			position: relative;
			left: 87.5%;
		}

		.uni-col-xs-22 {
			width: 91.6666666667%;
		}

		.uni-col-xs-offset-22 {
			margin-left: 91.6666666667%;
		}

		.uni-col-xs-pull-22 {
			position: relative;
			right: 91.6666666667%;
		}

		.uni-col-xs-push-22 {
			position: relative;
			left: 91.6666666667%;
		}

		.uni-col-xs-23 {
			width: 95.8333333333%;
		}

		.uni-col-xs-offset-23 {
			margin-left: 95.8333333333%;
		}

		.uni-col-xs-pull-23 {
			position: relative;
			right: 95.8333333333%;
		}

		.uni-col-xs-push-23 {
			position: relative;
			left: 95.8333333333%;
		}

		.uni-col-xs-24 {
			width: 100%;
		}

		.uni-col-xs-offset-24 {
			margin-left: 100%;
		}

		.uni-col-xs-pull-24 {
			position: relative;
			right: 100%;
		}

		.uni-col-xs-push-24 {
			position: relative;
			left: 100%;
		}
	}

	@media screen and (min-width: 768px) {
		.uni-col-sm-0 {
			display: none;
		}

		.uni-col-sm-0 {
			width: 0%;
		}

		.uni-col-sm-offset-0 {
			margin-left: 0%;
		}

		.uni-col-sm-pull-0 {
			position: relative;
			right: 0%;
		}

		.uni-col-sm-push-0 {
			position: relative;
			left: 0%;
		}

		.uni-col-sm-1 {
			width: 4.1666666667%;
		}

		.uni-col-sm-offset-1 {
			margin-left: 4.1666666667%;
		}

		.uni-col-sm-pull-1 {
			position: relative;
			right: 4.1666666667%;
		}

		.uni-col-sm-push-1 {
			position: relative;
			left: 4.1666666667%;
		}

		.uni-col-sm-2 {
			width: 8.3333333333%;
		}

		.uni-col-sm-offset-2 {
			margin-left: 8.3333333333%;
		}

		.uni-col-sm-pull-2 {
			position: relative;
			right: 8.3333333333%;
		}

		.uni-col-sm-push-2 {
			position: relative;
			left: 8.3333333333%;
		}

		.uni-col-sm-3 {
			width: 12.5%;
		}

		.uni-col-sm-offset-3 {
			margin-left: 12.5%;
		}

		.uni-col-sm-pull-3 {
			position: relative;
			right: 12.5%;
		}

		.uni-col-sm-push-3 {
			position: relative;
			left: 12.5%;
		}

		.uni-col-sm-4 {
			width: 16.6666666667%;
		}

		.uni-col-sm-offset-4 {
			margin-left: 16.6666666667%;
		}

		.uni-col-sm-pull-4 {
			position: relative;
			right: 16.6666666667%;
		}

		.uni-col-sm-push-4 {
			position: relative;
			left: 16.6666666667%;
		}

		.uni-col-sm-5 {
			width: 20.8333333333%;
		}

		.uni-col-sm-offset-5 {
			margin-left: 20.8333333333%;
		}

		.uni-col-sm-pull-5 {
			position: relative;
			right: 20.8333333333%;
		}

		.uni-col-sm-push-5 {
			position: relative;
			left: 20.8333333333%;
		}

		.uni-col-sm-6 {
			width: 25%;
		}

		.uni-col-sm-offset-6 {
			margin-left: 25%;
		}

		.uni-col-sm-pull-6 {
			position: relative;
			right: 25%;
		}

		.uni-col-sm-push-6 {
			position: relative;
			left: 25%;
		}

		.uni-col-sm-7 {
			width: 29.1666666667%;
		}

		.uni-col-sm-offset-7 {
			margin-left: 29.1666666667%;
		}

		.uni-col-sm-pull-7 {
			position: relative;
			right: 29.1666666667%;
		}

		.uni-col-sm-push-7 {
			position: relative;
			left: 29.1666666667%;
		}

		.uni-col-sm-8 {
			width: 33.3333333333%;
		}

		.uni-col-sm-offset-8 {
			margin-left: 33.3333333333%;
		}

		.uni-col-sm-pull-8 {
			position: relative;
			right: 33.3333333333%;
		}

		.uni-col-sm-push-8 {
			position: relative;
			left: 33.3333333333%;
		}

		.uni-col-sm-9 {
			width: 37.5%;
		}

		.uni-col-sm-offset-9 {
			margin-left: 37.5%;
		}

		.uni-col-sm-pull-9 {
			position: relative;
			right: 37.5%;
		}

		.uni-col-sm-push-9 {
			position: relative;
			left: 37.5%;
		}

		.uni-col-sm-10 {
			width: 41.6666666667%;
		}

		.uni-col-sm-offset-10 {
			margin-left: 41.6666666667%;
		}

		.uni-col-sm-pull-10 {
			position: relative;
			right: 41.6666666667%;
		}

		.uni-col-sm-push-10 {
			position: relative;
			left: 41.6666666667%;
		}

		.uni-col-sm-11 {
			width: 45.8333333333%;
		}

		.uni-col-sm-offset-11 {
			margin-left: 45.8333333333%;
		}

		.uni-col-sm-pull-11 {
			position: relative;
			right: 45.8333333333%;
		}

		.uni-col-sm-push-11 {
			position: relative;
			left: 45.8333333333%;
		}

		.uni-col-sm-12 {
			width: 50%;
		}

		.uni-col-sm-offset-12 {
			margin-left: 50%;
		}

		.uni-col-sm-pull-12 {
			position: relative;
			right: 50%;
		}

		.uni-col-sm-push-12 {
			position: relative;
			left: 50%;
		}

		.uni-col-sm-13 {
			width: 54.1666666667%;
		}

		.uni-col-sm-offset-13 {
			margin-left: 54.1666666667%;
		}

		.uni-col-sm-pull-13 {
			position: relative;
			right: 54.1666666667%;
		}

		.uni-col-sm-push-13 {
			position: relative;
			left: 54.1666666667%;
		}

		.uni-col-sm-14 {
			width: 58.3333333333%;
		}

		.uni-col-sm-offset-14 {
			margin-left: 58.3333333333%;
		}

		.uni-col-sm-pull-14 {
			position: relative;
			right: 58.3333333333%;
		}

		.uni-col-sm-push-14 {
			position: relative;
			left: 58.3333333333%;
		}

		.uni-col-sm-15 {
			width: 62.5%;
		}

		.uni-col-sm-offset-15 {
			margin-left: 62.5%;
		}

		.uni-col-sm-pull-15 {
			position: relative;
			right: 62.5%;
		}

		.uni-col-sm-push-15 {
			position: relative;
			left: 62.5%;
		}

		.uni-col-sm-16 {
			width: 66.6666666667%;
		}

		.uni-col-sm-offset-16 {
			margin-left: 66.6666666667%;
		}

		.uni-col-sm-pull-16 {
			position: relative;
			right: 66.6666666667%;
		}

		.uni-col-sm-push-16 {
			position: relative;
			left: 66.6666666667%;
		}

		.uni-col-sm-17 {
			width: 70.8333333333%;
		}

		.uni-col-sm-offset-17 {
			margin-left: 70.8333333333%;
		}

		.uni-col-sm-pull-17 {
			position: relative;
			right: 70.8333333333%;
		}

		.uni-col-sm-push-17 {
			position: relative;
			left: 70.8333333333%;
		}

		.uni-col-sm-18 {
			width: 75%;
		}

		.uni-col-sm-offset-18 {
			margin-left: 75%;
		}

		.uni-col-sm-pull-18 {
			position: relative;
			right: 75%;
		}

		.uni-col-sm-push-18 {
			position: relative;
			left: 75%;
		}

		.uni-col-sm-19 {
			width: 79.1666666667%;
		}

		.uni-col-sm-offset-19 {
			margin-left: 79.1666666667%;
		}

		.uni-col-sm-pull-19 {
			position: relative;
			right: 79.1666666667%;
		}

		.uni-col-sm-push-19 {
			position: relative;
			left: 79.1666666667%;
		}

		.uni-col-sm-20 {
			width: 83.3333333333%;
		}

		.uni-col-sm-offset-20 {
			margin-left: 83.3333333333%;
		}

		.uni-col-sm-pull-20 {
			position: relative;
			right: 83.3333333333%;
		}

		.uni-col-sm-push-20 {
			position: relative;
			left: 83.3333333333%;
		}

		.uni-col-sm-21 {
			width: 87.5%;
		}

		.uni-col-sm-offset-21 {
			margin-left: 87.5%;
		}

		.uni-col-sm-pull-21 {
			position: relative;
			right: 87.5%;
		}

		.uni-col-sm-push-21 {
			position: relative;
			left: 87.5%;
		}

		.uni-col-sm-22 {
			width: 91.6666666667%;
		}

		.uni-col-sm-offset-22 {
			margin-left: 91.6666666667%;
		}

		.uni-col-sm-pull-22 {
			position: relative;
			right: 91.6666666667%;
		}

		.uni-col-sm-push-22 {
			position: relative;
			left: 91.6666666667%;
		}

		.uni-col-sm-23 {
			width: 95.8333333333%;
		}

		.uni-col-sm-offset-23 {
			margin-left: 95.8333333333%;
		}

		.uni-col-sm-pull-23 {
			position: relative;
			right: 95.8333333333%;
		}

		.uni-col-sm-push-23 {
			position: relative;
			left: 95.8333333333%;
		}

		.uni-col-sm-24 {
			width: 100%;
		}

		.uni-col-sm-offset-24 {
			margin-left: 100%;
		}

		.uni-col-sm-pull-24 {
			position: relative;
			right: 100%;
		}

		.uni-col-sm-push-24 {
			position: relative;
			left: 100%;
		}
	}

	@media screen and (min-width: 992px) {
		.uni-col-md-0 {
			display: none;
		}

		.uni-col-md-0 {
			width: 0%;
		}

		.uni-col-md-offset-0 {
			margin-left: 0%;
		}

		.uni-col-md-pull-0 {
			position: relative;
			right: 0%;
		}

		.uni-col-md-push-0 {
			position: relative;
			left: 0%;
		}

		.uni-col-md-1 {
			width: 4.1666666667%;
		}

		.uni-col-md-offset-1 {
			margin-left: 4.1666666667%;
		}

		.uni-col-md-pull-1 {
			position: relative;
			right: 4.1666666667%;
		}

		.uni-col-md-push-1 {
			position: relative;
			left: 4.1666666667%;
		}

		.uni-col-md-2 {
			width: 8.3333333333%;
		}

		.uni-col-md-offset-2 {
			margin-left: 8.3333333333%;
		}

		.uni-col-md-pull-2 {
			position: relative;
			right: 8.3333333333%;
		}

		.uni-col-md-push-2 {
			position: relative;
			left: 8.3333333333%;
		}

		.uni-col-md-3 {
			width: 12.5%;
		}

		.uni-col-md-offset-3 {
			margin-left: 12.5%;
		}

		.uni-col-md-pull-3 {
			position: relative;
			right: 12.5%;
		}

		.uni-col-md-push-3 {
			position: relative;
			left: 12.5%;
		}

		.uni-col-md-4 {
			width: 16.6666666667%;
		}

		.uni-col-md-offset-4 {
			margin-left: 16.6666666667%;
		}

		.uni-col-md-pull-4 {
			position: relative;
			right: 16.6666666667%;
		}

		.uni-col-md-push-4 {
			position: relative;
			left: 16.6666666667%;
		}

		.uni-col-md-5 {
			width: 20.8333333333%;
		}

		.uni-col-md-offset-5 {
			margin-left: 20.8333333333%;
		}

		.uni-col-md-pull-5 {
			position: relative;
			right: 20.8333333333%;
		}

		.uni-col-md-push-5 {
			position: relative;
			left: 20.8333333333%;
		}

		.uni-col-md-6 {
			width: 25%;
		}

		.uni-col-md-offset-6 {
			margin-left: 25%;
		}

		.uni-col-md-pull-6 {
			position: relative;
			right: 25%;
		}

		.uni-col-md-push-6 {
			position: relative;
			left: 25%;
		}

		.uni-col-md-7 {
			width: 29.1666666667%;
		}

		.uni-col-md-offset-7 {
			margin-left: 29.1666666667%;
		}

		.uni-col-md-pull-7 {
			position: relative;
			right: 29.1666666667%;
		}

		.uni-col-md-push-7 {
			position: relative;
			left: 29.1666666667%;
		}

		.uni-col-md-8 {
			width: 33.3333333333%;
		}

		.uni-col-md-offset-8 {
			margin-left: 33.3333333333%;
		}

		.uni-col-md-pull-8 {
			position: relative;
			right: 33.3333333333%;
		}

		.uni-col-md-push-8 {
			position: relative;
			left: 33.3333333333%;
		}

		.uni-col-md-9 {
			width: 37.5%;
		}

		.uni-col-md-offset-9 {
			margin-left: 37.5%;
		}

		.uni-col-md-pull-9 {
			position: relative;
			right: 37.5%;
		}

		.uni-col-md-push-9 {
			position: relative;
			left: 37.5%;
		}

		.uni-col-md-10 {
			width: 41.6666666667%;
		}

		.uni-col-md-offset-10 {
			margin-left: 41.6666666667%;
		}

		.uni-col-md-pull-10 {
			position: relative;
			right: 41.6666666667%;
		}

		.uni-col-md-push-10 {
			position: relative;
			left: 41.6666666667%;
		}

		.uni-col-md-11 {
			width: 45.8333333333%;
		}

		.uni-col-md-offset-11 {
			margin-left: 45.8333333333%;
		}

		.uni-col-md-pull-11 {
			position: relative;
			right: 45.8333333333%;
		}

		.uni-col-md-push-11 {
			position: relative;
			left: 45.8333333333%;
		}

		.uni-col-md-12 {
			width: 50%;
		}

		.uni-col-md-offset-12 {
			margin-left: 50%;
		}

		.uni-col-md-pull-12 {
			position: relative;
			right: 50%;
		}

		.uni-col-md-push-12 {
			position: relative;
			left: 50%;
		}

		.uni-col-md-13 {
			width: 54.1666666667%;
		}

		.uni-col-md-offset-13 {
			margin-left: 54.1666666667%;
		}

		.uni-col-md-pull-13 {
			position: relative;
			right: 54.1666666667%;
		}

		.uni-col-md-push-13 {
			position: relative;
			left: 54.1666666667%;
		}

		.uni-col-md-14 {
			width: 58.3333333333%;
		}

		.uni-col-md-offset-14 {
			margin-left: 58.3333333333%;
		}

		.uni-col-md-pull-14 {
			position: relative;
			right: 58.3333333333%;
		}

		.uni-col-md-push-14 {
			position: relative;
			left: 58.3333333333%;
		}

		.uni-col-md-15 {
			width: 62.5%;
		}

		.uni-col-md-offset-15 {
			margin-left: 62.5%;
		}

		.uni-col-md-pull-15 {
			position: relative;
			right: 62.5%;
		}

		.uni-col-md-push-15 {
			position: relative;
			left: 62.5%;
		}

		.uni-col-md-16 {
			width: 66.6666666667%;
		}

		.uni-col-md-offset-16 {
			margin-left: 66.6666666667%;
		}

		.uni-col-md-pull-16 {
			position: relative;
			right: 66.6666666667%;
		}

		.uni-col-md-push-16 {
			position: relative;
			left: 66.6666666667%;
		}

		.uni-col-md-17 {
			width: 70.8333333333%;
		}

		.uni-col-md-offset-17 {
			margin-left: 70.8333333333%;
		}

		.uni-col-md-pull-17 {
			position: relative;
			right: 70.8333333333%;
		}

		.uni-col-md-push-17 {
			position: relative;
			left: 70.8333333333%;
		}

		.uni-col-md-18 {
			width: 75%;
		}

		.uni-col-md-offset-18 {
			margin-left: 75%;
		}

		.uni-col-md-pull-18 {
			position: relative;
			right: 75%;
		}

		.uni-col-md-push-18 {
			position: relative;
			left: 75%;
		}

		.uni-col-md-19 {
			width: 79.1666666667%;
		}

		.uni-col-md-offset-19 {
			margin-left: 79.1666666667%;
		}

		.uni-col-md-pull-19 {
			position: relative;
			right: 79.1666666667%;
		}

		.uni-col-md-push-19 {
			position: relative;
			left: 79.1666666667%;
		}

		.uni-col-md-20 {
			width: 83.3333333333%;
		}

		.uni-col-md-offset-20 {
			margin-left: 83.3333333333%;
		}

		.uni-col-md-pull-20 {
			position: relative;
			right: 83.3333333333%;
		}

		.uni-col-md-push-20 {
			position: relative;
			left: 83.3333333333%;
		}

		.uni-col-md-21 {
			width: 87.5%;
		}

		.uni-col-md-offset-21 {
			margin-left: 87.5%;
		}

		.uni-col-md-pull-21 {
			position: relative;
			right: 87.5%;
		}

		.uni-col-md-push-21 {
			position: relative;
			left: 87.5%;
		}

		.uni-col-md-22 {
			width: 91.6666666667%;
		}

		.uni-col-md-offset-22 {
			margin-left: 91.6666666667%;
		}

		.uni-col-md-pull-22 {
			position: relative;
			right: 91.6666666667%;
		}

		.uni-col-md-push-22 {
			position: relative;
			left: 91.6666666667%;
		}

		.uni-col-md-23 {
			width: 95.8333333333%;
		}

		.uni-col-md-offset-23 {
			margin-left: 95.8333333333%;
		}

		.uni-col-md-pull-23 {
			position: relative;
			right: 95.8333333333%;
		}

		.uni-col-md-push-23 {
			position: relative;
			left: 95.8333333333%;
		}

		.uni-col-md-24 {
			width: 100%;
		}

		.uni-col-md-offset-24 {
			margin-left: 100%;
		}

		.uni-col-md-pull-24 {
			position: relative;
			right: 100%;
		}

		.uni-col-md-push-24 {
			position: relative;
			left: 100%;
		}
	}

	@media screen and (min-width: 1200px) {
		.uni-col-lg-0 {
			display: none;
		}

		.uni-col-lg-0 {
			width: 0%;
		}

		.uni-col-lg-offset-0 {
			margin-left: 0%;
		}

		.uni-col-lg-pull-0 {
			position: relative;
			right: 0%;
		}

		.uni-col-lg-push-0 {
			position: relative;
			left: 0%;
		}

		.uni-col-lg-1 {
			width: 4.1666666667%;
		}

		.uni-col-lg-offset-1 {
			margin-left: 4.1666666667%;
		}

		.uni-col-lg-pull-1 {
			position: relative;
			right: 4.1666666667%;
		}

		.uni-col-lg-push-1 {
			position: relative;
			left: 4.1666666667%;
		}

		.uni-col-lg-2 {
			width: 8.3333333333%;
		}

		.uni-col-lg-offset-2 {
			margin-left: 8.3333333333%;
		}

		.uni-col-lg-pull-2 {
			position: relative;
			right: 8.3333333333%;
		}

		.uni-col-lg-push-2 {
			position: relative;
			left: 8.3333333333%;
		}

		.uni-col-lg-3 {
			width: 12.5%;
		}

		.uni-col-lg-offset-3 {
			margin-left: 12.5%;
		}

		.uni-col-lg-pull-3 {
			position: relative;
			right: 12.5%;
		}

		.uni-col-lg-push-3 {
			position: relative;
			left: 12.5%;
		}

		.uni-col-lg-4 {
			width: 16.6666666667%;
		}

		.uni-col-lg-offset-4 {
			margin-left: 16.6666666667%;
		}

		.uni-col-lg-pull-4 {
			position: relative;
			right: 16.6666666667%;
		}

		.uni-col-lg-push-4 {
			position: relative;
			left: 16.6666666667%;
		}

		.uni-col-lg-5 {
			width: 20.8333333333%;
		}

		.uni-col-lg-offset-5 {
			margin-left: 20.8333333333%;
		}

		.uni-col-lg-pull-5 {
			position: relative;
			right: 20.8333333333%;
		}

		.uni-col-lg-push-5 {
			position: relative;
			left: 20.8333333333%;
		}

		.uni-col-lg-6 {
			width: 25%;
		}

		.uni-col-lg-offset-6 {
			margin-left: 25%;
		}

		.uni-col-lg-pull-6 {
			position: relative;
			right: 25%;
		}

		.uni-col-lg-push-6 {
			position: relative;
			left: 25%;
		}

		.uni-col-lg-7 {
			width: 29.1666666667%;
		}

		.uni-col-lg-offset-7 {
			margin-left: 29.1666666667%;
		}

		.uni-col-lg-pull-7 {
			position: relative;
			right: 29.1666666667%;
		}

		.uni-col-lg-push-7 {
			position: relative;
			left: 29.1666666667%;
		}

		.uni-col-lg-8 {
			width: 33.3333333333%;
		}

		.uni-col-lg-offset-8 {
			margin-left: 33.3333333333%;
		}

		.uni-col-lg-pull-8 {
			position: relative;
			right: 33.3333333333%;
		}

		.uni-col-lg-push-8 {
			position: relative;
			left: 33.3333333333%;
		}

		.uni-col-lg-9 {
			width: 37.5%;
		}

		.uni-col-lg-offset-9 {
			margin-left: 37.5%;
		}

		.uni-col-lg-pull-9 {
			position: relative;
			right: 37.5%;
		}

		.uni-col-lg-push-9 {
			position: relative;
			left: 37.5%;
		}

		.uni-col-lg-10 {
			width: 41.6666666667%;
		}

		.uni-col-lg-offset-10 {
			margin-left: 41.6666666667%;
		}

		.uni-col-lg-pull-10 {
			position: relative;
			right: 41.6666666667%;
		}

		.uni-col-lg-push-10 {
			position: relative;
			left: 41.6666666667%;
		}

		.uni-col-lg-11 {
			width: 45.8333333333%;
		}

		.uni-col-lg-offset-11 {
			margin-left: 45.8333333333%;
		}

		.uni-col-lg-pull-11 {
			position: relative;
			right: 45.8333333333%;
		}

		.uni-col-lg-push-11 {
			position: relative;
			left: 45.8333333333%;
		}

		.uni-col-lg-12 {
			width: 50%;
		}

		.uni-col-lg-offset-12 {
			margin-left: 50%;
		}

		.uni-col-lg-pull-12 {
			position: relative;
			right: 50%;
		}

		.uni-col-lg-push-12 {
			position: relative;
			left: 50%;
		}

		.uni-col-lg-13 {
			width: 54.1666666667%;
		}

		.uni-col-lg-offset-13 {
			margin-left: 54.1666666667%;
		}

		.uni-col-lg-pull-13 {
			position: relative;
			right: 54.1666666667%;
		}

		.uni-col-lg-push-13 {
			position: relative;
			left: 54.1666666667%;
		}

		.uni-col-lg-14 {
			width: 58.3333333333%;
		}

		.uni-col-lg-offset-14 {
			margin-left: 58.3333333333%;
		}

		.uni-col-lg-pull-14 {
			position: relative;
			right: 58.3333333333%;
		}

		.uni-col-lg-push-14 {
			position: relative;
			left: 58.3333333333%;
		}

		.uni-col-lg-15 {
			width: 62.5%;
		}

		.uni-col-lg-offset-15 {
			margin-left: 62.5%;
		}

		.uni-col-lg-pull-15 {
			position: relative;
			right: 62.5%;
		}

		.uni-col-lg-push-15 {
			position: relative;
			left: 62.5%;
		}

		.uni-col-lg-16 {
			width: 66.6666666667%;
		}

		.uni-col-lg-offset-16 {
			margin-left: 66.6666666667%;
		}

		.uni-col-lg-pull-16 {
			position: relative;
			right: 66.6666666667%;
		}

		.uni-col-lg-push-16 {
			position: relative;
			left: 66.6666666667%;
		}

		.uni-col-lg-17 {
			width: 70.8333333333%;
		}

		.uni-col-lg-offset-17 {
			margin-left: 70.8333333333%;
		}

		.uni-col-lg-pull-17 {
			position: relative;
			right: 70.8333333333%;
		}

		.uni-col-lg-push-17 {
			position: relative;
			left: 70.8333333333%;
		}

		.uni-col-lg-18 {
			width: 75%;
		}

		.uni-col-lg-offset-18 {
			margin-left: 75%;
		}

		.uni-col-lg-pull-18 {
			position: relative;
			right: 75%;
		}

		.uni-col-lg-push-18 {
			position: relative;
			left: 75%;
		}

		.uni-col-lg-19 {
			width: 79.1666666667%;
		}

		.uni-col-lg-offset-19 {
			margin-left: 79.1666666667%;
		}

		.uni-col-lg-pull-19 {
			position: relative;
			right: 79.1666666667%;
		}

		.uni-col-lg-push-19 {
			position: relative;
			left: 79.1666666667%;
		}

		.uni-col-lg-20 {
			width: 83.3333333333%;
		}

		.uni-col-lg-offset-20 {
			margin-left: 83.3333333333%;
		}

		.uni-col-lg-pull-20 {
			position: relative;
			right: 83.3333333333%;
		}

		.uni-col-lg-push-20 {
			position: relative;
			left: 83.3333333333%;
		}

		.uni-col-lg-21 {
			width: 87.5%;
		}

		.uni-col-lg-offset-21 {
			margin-left: 87.5%;
		}

		.uni-col-lg-pull-21 {
			position: relative;
			right: 87.5%;
		}

		.uni-col-lg-push-21 {
			position: relative;
			left: 87.5%;
		}

		.uni-col-lg-22 {
			width: 91.6666666667%;
		}

		.uni-col-lg-offset-22 {
			margin-left: 91.6666666667%;
		}

		.uni-col-lg-pull-22 {
			position: relative;
			right: 91.6666666667%;
		}

		.uni-col-lg-push-22 {
			position: relative;
			left: 91.6666666667%;
		}

		.uni-col-lg-23 {
			width: 95.8333333333%;
		}

		.uni-col-lg-offset-23 {
			margin-left: 95.8333333333%;
		}

		.uni-col-lg-pull-23 {
			position: relative;
			right: 95.8333333333%;
		}

		.uni-col-lg-push-23 {
			position: relative;
			left: 95.8333333333%;
		}

		.uni-col-lg-24 {
			width: 100%;
		}

		.uni-col-lg-offset-24 {
			margin-left: 100%;
		}

		.uni-col-lg-pull-24 {
			position: relative;
			right: 100%;
		}

		.uni-col-lg-push-24 {
			position: relative;
			left: 100%;
		}
	}

	@media screen and (min-width: 1920px) {
		.uni-col-xl-0 {
			display: none;
		}

		.uni-col-xl-0 {
			width: 0%;
		}

		.uni-col-xl-offset-0 {
			margin-left: 0%;
		}

		.uni-col-xl-pull-0 {
			position: relative;
			right: 0%;
		}

		.uni-col-xl-push-0 {
			position: relative;
			left: 0%;
		}

		.uni-col-xl-1 {
			width: 4.1666666667%;
		}

		.uni-col-xl-offset-1 {
			margin-left: 4.1666666667%;
		}

		.uni-col-xl-pull-1 {
			position: relative;
			right: 4.1666666667%;
		}

		.uni-col-xl-push-1 {
			position: relative;
			left: 4.1666666667%;
		}

		.uni-col-xl-2 {
			width: 8.3333333333%;
		}

		.uni-col-xl-offset-2 {
			margin-left: 8.3333333333%;
		}

		.uni-col-xl-pull-2 {
			position: relative;
			right: 8.3333333333%;
		}

		.uni-col-xl-push-2 {
			position: relative;
			left: 8.3333333333%;
		}

		.uni-col-xl-3 {
			width: 12.5%;
		}

		.uni-col-xl-offset-3 {
			margin-left: 12.5%;
		}

		.uni-col-xl-pull-3 {
			position: relative;
			right: 12.5%;
		}

		.uni-col-xl-push-3 {
			position: relative;
			left: 12.5%;
		}

		.uni-col-xl-4 {
			width: 16.6666666667%;
		}

		.uni-col-xl-offset-4 {
			margin-left: 16.6666666667%;
		}

		.uni-col-xl-pull-4 {
			position: relative;
			right: 16.6666666667%;
		}

		.uni-col-xl-push-4 {
			position: relative;
			left: 16.6666666667%;
		}

		.uni-col-xl-5 {
			width: 20.8333333333%;
		}

		.uni-col-xl-offset-5 {
			margin-left: 20.8333333333%;
		}

		.uni-col-xl-pull-5 {
			position: relative;
			right: 20.8333333333%;
		}

		.uni-col-xl-push-5 {
			position: relative;
			left: 20.8333333333%;
		}

		.uni-col-xl-6 {
			width: 25%;
		}

		.uni-col-xl-offset-6 {
			margin-left: 25%;
		}

		.uni-col-xl-pull-6 {
			position: relative;
			right: 25%;
		}

		.uni-col-xl-push-6 {
			position: relative;
			left: 25%;
		}

		.uni-col-xl-7 {
			width: 29.1666666667%;
		}

		.uni-col-xl-offset-7 {
			margin-left: 29.1666666667%;
		}

		.uni-col-xl-pull-7 {
			position: relative;
			right: 29.1666666667%;
		}

		.uni-col-xl-push-7 {
			position: relative;
			left: 29.1666666667%;
		}

		.uni-col-xl-8 {
			width: 33.3333333333%;
		}

		.uni-col-xl-offset-8 {
			margin-left: 33.3333333333%;
		}

		.uni-col-xl-pull-8 {
			position: relative;
			right: 33.3333333333%;
		}

		.uni-col-xl-push-8 {
			position: relative;
			left: 33.3333333333%;
		}

		.uni-col-xl-9 {
			width: 37.5%;
		}

		.uni-col-xl-offset-9 {
			margin-left: 37.5%;
		}

		.uni-col-xl-pull-9 {
			position: relative;
			right: 37.5%;
		}

		.uni-col-xl-push-9 {
			position: relative;
			left: 37.5%;
		}

		.uni-col-xl-10 {
			width: 41.6666666667%;
		}

		.uni-col-xl-offset-10 {
			margin-left: 41.6666666667%;
		}

		.uni-col-xl-pull-10 {
			position: relative;
			right: 41.6666666667%;
		}

		.uni-col-xl-push-10 {
			position: relative;
			left: 41.6666666667%;
		}

		.uni-col-xl-11 {
			width: 45.8333333333%;
		}

		.uni-col-xl-offset-11 {
			margin-left: 45.8333333333%;
		}

		.uni-col-xl-pull-11 {
			position: relative;
			right: 45.8333333333%;
		}

		.uni-col-xl-push-11 {
			position: relative;
			left: 45.8333333333%;
		}

		.uni-col-xl-12 {
			width: 50%;
		}

		.uni-col-xl-offset-12 {
			margin-left: 50%;
		}

		.uni-col-xl-pull-12 {
			position: relative;
			right: 50%;
		}

		.uni-col-xl-push-12 {
			position: relative;
			left: 50%;
		}

		.uni-col-xl-13 {
			width: 54.1666666667%;
		}

		.uni-col-xl-offset-13 {
			margin-left: 54.1666666667%;
		}

		.uni-col-xl-pull-13 {
			position: relative;
			right: 54.1666666667%;
		}

		.uni-col-xl-push-13 {
			position: relative;
			left: 54.1666666667%;
		}

		.uni-col-xl-14 {
			width: 58.3333333333%;
		}

		.uni-col-xl-offset-14 {
			margin-left: 58.3333333333%;
		}

		.uni-col-xl-pull-14 {
			position: relative;
			right: 58.3333333333%;
		}

		.uni-col-xl-push-14 {
			position: relative;
			left: 58.3333333333%;
		}

		.uni-col-xl-15 {
			width: 62.5%;
		}

		.uni-col-xl-offset-15 {
			margin-left: 62.5%;
		}

		.uni-col-xl-pull-15 {
			position: relative;
			right: 62.5%;
		}

		.uni-col-xl-push-15 {
			position: relative;
			left: 62.5%;
		}

		.uni-col-xl-16 {
			width: 66.6666666667%;
		}

		.uni-col-xl-offset-16 {
			margin-left: 66.6666666667%;
		}

		.uni-col-xl-pull-16 {
			position: relative;
			right: 66.6666666667%;
		}

		.uni-col-xl-push-16 {
			position: relative;
			left: 66.6666666667%;
		}

		.uni-col-xl-17 {
			width: 70.8333333333%;
		}

		.uni-col-xl-offset-17 {
			margin-left: 70.8333333333%;
		}

		.uni-col-xl-pull-17 {
			position: relative;
			right: 70.8333333333%;
		}

		.uni-col-xl-push-17 {
			position: relative;
			left: 70.8333333333%;
		}

		.uni-col-xl-18 {
			width: 75%;
		}

		.uni-col-xl-offset-18 {
			margin-left: 75%;
		}

		.uni-col-xl-pull-18 {
			position: relative;
			right: 75%;
		}

		.uni-col-xl-push-18 {
			position: relative;
			left: 75%;
		}

		.uni-col-xl-19 {
			width: 79.1666666667%;
		}

		.uni-col-xl-offset-19 {
			margin-left: 79.1666666667%;
		}

		.uni-col-xl-pull-19 {
			position: relative;
			right: 79.1666666667%;
		}

		.uni-col-xl-push-19 {
			position: relative;
			left: 79.1666666667%;
		}

		.uni-col-xl-20 {
			width: 83.3333333333%;
		}

		.uni-col-xl-offset-20 {
			margin-left: 83.3333333333%;
		}

		.uni-col-xl-pull-20 {
			position: relative;
			right: 83.3333333333%;
		}

		.uni-col-xl-push-20 {
			position: relative;
			left: 83.3333333333%;
		}

		.uni-col-xl-21 {
			width: 87.5%;
		}

		.uni-col-xl-offset-21 {
			margin-left: 87.5%;
		}

		.uni-col-xl-pull-21 {
			position: relative;
			right: 87.5%;
		}

		.uni-col-xl-push-21 {
			position: relative;
			left: 87.5%;
		}

		.uni-col-xl-22 {
			width: 91.6666666667%;
		}

		.uni-col-xl-offset-22 {
			margin-left: 91.6666666667%;
		}

		.uni-col-xl-pull-22 {
			position: relative;
			right: 91.6666666667%;
		}

		.uni-col-xl-push-22 {
			position: relative;
			left: 91.6666666667%;
		}

		.uni-col-xl-23 {
			width: 95.8333333333%;
		}

		.uni-col-xl-offset-23 {
			margin-left: 95.8333333333%;
		}

		.uni-col-xl-pull-23 {
			position: relative;
			right: 95.8333333333%;
		}

		.uni-col-xl-push-23 {
			position: relative;
			left: 95.8333333333%;
		}

		.uni-col-xl-24 {
			width: 100%;
		}

		.uni-col-xl-offset-24 {
			margin-left: 100%;
		}

		.uni-col-xl-pull-24 {
			position: relative;
			right: 100%;
		}

		.uni-col-xl-push-24 {
			position: relative;
			left: 100%;
		}
	}

	/* #endif */
</style>