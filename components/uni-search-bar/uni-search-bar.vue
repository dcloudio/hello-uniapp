<template>
	<view class="">
		<view :class="show?'':'uni-searchbar-hide'" class="uni-searchbar">
			<view :style="{borderRadius:radius+'rpx'}" class="uni-searchbar__box" v-if="show">
				<!-- #ifndef MP-ALIPAY -->
				<uni-icons :color="'#999999'" class="uni-searchbar__box-icon-search" size="18" type="search" />
				<!-- #endif -->
				<!-- #ifdef MP-ALIPAY -->
				<view class="uni-searchbar__box-icon-search">
					<uni-icons :color="'#999999'" class="uni-searchbar__box-icon-search" size="18" type="search" />
				</view>
				<!-- #endif -->
				<input :focus="show" :placeholder="placeholder" @confirm="confirm" class="uni-searchbar__box-search-input" confirm-type="search" placeholder-style="color:#cccccc" type="text" v-model="searchVal" />
				<!-- #ifndef APP-NVUE -->
				<view class="uni-searchbar__box-icon-clear" @click="clear">
					<uni-icons :color="'#999999'" class="uni-searchbar__box-icon-clear" size="24" type="clear" v-if="clearButton==='always'||clearButton==='auto'&&searchVal!==''" />
				</view>
				<!-- #endif -->
				<!-- #ifdef APP-NVUE -->
				<uni-icons :color="'#999999'" @click="clear" class="uni-searchbar__box-icon-clear" size="24" type="clear" v-if="clearButton==='always'||clearButton==='auto'&&searchVal!==''" />
				<!-- #endif -->
			</view>
			<view :style="{borderRadius:radius+'rpx'}" @click="searchClick" class="uni-searchbar__text" v-if="!show">
				<view class="uni-searchbar__text-icon-search">
					<uni-icons class="uni-searchbar__text-icon-search" color="#999999" size="18" type="search" />
				</view>
				<text class="uni-searchbar__text-placeholder">{{ placeholder }}</text>
			</view>
			<text @click="cancel" class="uni-searchbar__cancel" v-if="show">取消</text>
		</view>
	</view>
</template>

<script>
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	export default {
		name: "UniSearchBar",
		components: {
			uniIcons
		},
		props: {
			placeholder: {
				type: String,
				default: "搜索"
			},
			radius: {
				type: [Number, String],
				default: 10
			},
			clearButton: {
				type: String,
				default: "auto"
			}
		},
		data() {
			return {
				show: false,
				searchVal: ""
			};
		},
		watch: {
			searchVal() {
				this.$emit("input", {
					value: this.searchVal
				});
			}
		},
		methods: {
			searchClick() {
				this.searchVal = "";
				this.show = true;
			},
			clear() {
				this.searchVal = "";
			},
			cancel() {
				this.$emit("cancel", {
					value: this.searchVal
				});
				// setTimeout(function(){
				this.searchVal = "";
				this.show = false;
				// },0)
			},
			confirm() {
				this.$emit("confirm", {
					value: this.searchVal
				});
			}
		}
	};
</script>

<style scoped>
	.uni-searchbar {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		position: relative;
		padding: 15rpx 0;
		width: 690rpx;
	}

	.uni-searchbar__box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		overflow: hidden;
		position: relative;
		flex: 1;
		flex-direction: row;
		align-items: center;
		/* width: 100%;
 */
		height: 32px;
		color: #c8c7cc;
		background-color: #ffffff;
		border-width: 1rpx;
		border-style: solid;
		border-color: #c8c7cc;
		border-radius: 10rpx;
	}

	.uni-searchbar__box-icon-search {
		color: #c8c7cc;
		line-height: 24px;
		padding: 0rpx 10rpx 0rpx 15rpx;
	}

	.uni-searchbar__box-search-input {
		/* #ifdef APP-PLUS */
		width: 485rpx;
		position: absolute;
		top: 10rpx;
		left: 63rpx;
		height: 28rpx;
		line-height: 28rpx;
		padding-top: 0;
		padding-bottom: 0;
		/* #endif */
		/* #ifdef APP-NVUE */
		height: 52rpx;
		line-height: 52rpx;
		width: 600rpx;
		/* #endif */
		flex: 1;
		font-size: 28rpx;
		color: #333333;
	}


	.uni-searchbar__box-icon-clear {
		/* #ifdef APP-PLUS */
		position: absolute;
		right: 0;
		top: 0;
		/* #endif */
		align-items: center;
		height: 30px;
		line-height: 30px;
		padding: 0rpx 15rpx 0rpx 10rpx;
		color: #c8c7cc;
		z-index: 10;
		background-color: #FFFFFF;
		border-radius: 30px;
	}

	.uni-searchbar__text {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex: 1;
		align-items: center;
		justify-content: center;
		/* width: 530rpx;
 */
		height: 32px;
		line-height: 32px;
		text-align: center;
		color: #c8c7cc;
		background-color: #ffffff;
		border-width: 1rpx;
		border-style: solid;
		border-color: #c8c7cc;
		border-radius: 10rpx;
	}

	.uni-searchbar__text-icon-search {
		height: 32px;
		line-height: 32px;
	}

	.uni-searchbar__text-placeholder {
		font-size: 28rpx;
		color: #cccccc;
		margin-left: 10rpx;
	}

	.uni-searchbar__cancel {
		width: 80rpx;
		padding-left: 20rpx;
		line-height: 32px;
		font-size: 28rpx;
		color: #333;
	}
</style>