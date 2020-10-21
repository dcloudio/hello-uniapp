<template>
	<view class="uni-sub-menu">
		<view class="uni-sub-menu__title" style="paddingLeft: 30px" @click="tiggerMenuItem">
			<view class="uni-sub-menu__title-sub">
				<slot name="title"></slot>
				<!-- <text>{{height}}-{{oldheight}}</text> -->
			</view>
			<uni-icons class="uni-sub-menu__icon" type="arrowdown" :class="{transition:height!==0}" color="#bbb" size="14"></uni-icons>
		</view>
		<!--  -->
		<!-- <view class="uni-sub-menu__content" :style="{height:height+'px'}"> -->
		<view class="uni-sub-menu__content" :style="{display: isOpen ? 'block' : 'none'}">
			<view id="content--hook">
				<slot></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'uniSubMenu',
		data() {
			return {
				height: 0,
				oldheight: 0,
				isOpen: this.active
			};
		},
        props: {
            active: false,
        },
		computed: {

		},
		created() {
			// this.init()
		},
		methods: {
			init() {
				// 所有父元素
				this.rootMenu = {
					NavMenu: [],
					SubMenu: []
				}
				this.childrens = []
				this.getParentAll('SubMenu', this)
				this.getParentAll('Menu', this)
				// 直系父元素
				this.$subMenu = this.rootMenu.SubMenu
				this.$subMenuSelf = this.$subMenu[0]
				if (this.$subMenuSelf) {
					this.$subMenuSelf.childrens && this.$subMenuSelf.childrens.push(this)
				}
				// setTimeout(() => {
				// 	this.getQuery()
				// }, 20)
			},

			tiggerMenuItem() {
				this.isOpen = !this.isOpen
                // console.log("======== this.hasChildActive =========", this.hasChildActive, "======= this.isOpen =======", this.isOpen)
			},

			// select() {
				// if (this.height === 0) {
				// 	this.height = this.oldheight
				// 	this.open()
				// } else {
				// 	// 处理父元素的高度
				// 	this.$subMenu.forEach(item => {
				// 		item.height -= this.height
				// 	})
				// 	this.height = 0
				// 	this.close()
				// }
			// },
			// open() {
			// 	this.$subMenu.forEach(item => {
			// 		item.height += this.oldheight
			// 	})
			// },
			// close() {
			// 	// 处理子元素的高度
			// 	this.childrens.forEach((item) => {
			// 		item.height = 0
			// 		item.close()
			// 	})
			// },
			// getQuery() {
			// 	const query = uni.createSelectorQuery(this).in(this);
			// 	query.select('#content--hook').boundingClientRect(data => {
			// 		this.oldheight = data.height
			// 		// console.log(data.height);
			// 		// console.log("得到布局位置信息" + JSON.stringify(data));
			// 		// console.log("节点离页面顶部的距离为" + data.top);
			// 	}).exec();
			// }

		}
	}
</script>

<style lang="scss">
	.uni-sub-menu {
		// width: 300px;
		position: relative;
		// background-color: #FFFFFF;
	}

	.uni-sub-menu__title {
		display: flex;
		// align-items: center;
		padding: 0 20px;
		padding-right: 10px;
		height: 56px;
		line-height: 56px;
		// color: #303133;
		// border-bottom: 1px #f5f5f5 solid;
	}

	.uni-sub-menu__title:hover {
		outline: none;
		background-color: #F1F1F1;
	}

	.uni-sub-menu__title-sub {
		display: flex;
		align-items: center;
		flex: 1;
	}

	.uni-sub-menu__content {
		transition: all 0.3s;
		/* height: 0; */
		overflow: hidden;
		/* border: 1px red solid; */
		/* padding-left: 20px; */
	}

	.uni-sub-menu__icon {
		transition: all 0.2s;
	}
	.transition {
		transform: rotate(-180deg);
	}
</style>
