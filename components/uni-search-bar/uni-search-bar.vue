<template>
	<view class="uni-searchbar">
		<view :style="{borderRadius:radius+'px'}" class="uni-searchbar__box" @click="searchClick">
			<!-- #ifdef MP-ALIPAY -->
			<view class="uni-searchbar__box-icon-search">
				<uni-icons color="#999999" size="18" type="search" />
			</view>
			<!-- #endif -->
			<!-- #ifndef MP-ALIPAY -->
			<uni-icons color="#999999" class="uni-searchbar__box-icon-search" size="18" type="search" />
			<!-- #endif -->
			<input v-if="show" :focus="show" :placeholder="placeholder" @confirm="confirm" class="uni-searchbar__box-search-input" confirm-type="search" placeholder-style="color:#cccccc" type="text" v-model="searchVal" />
			<text v-else class="uni-searchbar__text-placeholder">{{ placeholder }}</text>
			<view v-if="show && (clearButton==='always'||clearButton==='auto'&&searchVal!=='')" class="uni-searchbar__box-icon-clear">
				<uni-icons color="#999999" class="" size="24" type="clear" />
			</view>
		</view>
		<text @click="cancel" class="uni-searchbar__cancel" v-if="show">取消</text>
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
				default: 5
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
				this.searchVal = "";
				this.show = false;
				// #ifndef APP-PLUS
				uni.hideKeyboard();
				// #endif
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord()
				// #endif
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
		padding: 8px 0;
	}

	.uni-searchbar__box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		overflow: hidden;
		position: relative;
		flex: 1;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		height: 32px;
		border-width: 1px;
		border-style: solid;
		border-color: #c8c7cc;
		border-radius: 5px;
	}

	.uni-searchbar__box-icon-search {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		width: 32px;
		justify-content: center;
		align-items: center;
		color: #c8c7cc;
	}

	.uni-searchbar__box-search-input {
		flex: 1;
		font-size: 14px;
		color: #333333;
	}

	.uni-searchbar__box-icon-clear {
		align-items: center;
		line-height: 24px;
		padding: 0px 5px 0px 5px;
	}

	.uni-searchbar__text-placeholder {
		font-size: 14px;
		color: #cccccc;
		margin-left: 5px;
	}

	.uni-searchbar__cancel {
		padding-left: 10px;
		line-height: 32px;
		font-size: 14px;
		color: #333;
	}
</style>