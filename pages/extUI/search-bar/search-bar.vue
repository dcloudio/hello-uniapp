<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">uni-search-bar component, usually used to search for products, articles, etc.</text>
		</uni-card>

		<uni-section title="Basic usage" type="line">
			<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
				@cancel="cancel" @clear="clear">
			</uni-search-bar>
			<view class="search-result">
				<text class="search-result-text">The current input is：{{ searchValue }}</text>
			</view>

		</uni-section>

		<uni-section title="Custom styles" subTitle="Use the bgColor property to customize the background color" type="line">
			<uni-search-bar placeholder="Custom background color" bgColor="#EEEEEE" @confirm="search" />
		</uni-section>
		<uni-section title="Customicon" type="line">
			<uni-search-bar placeholder="CustomsearchIcon" @confirm="search" @cancel="cancel" cancel-text="cancel">
				<uni-icons v-slot:searchIcon color="#999999" size="18" type="home" />
			</uni-search-bar>
		</uni-section>
		<uni-section title="Control clear/cancel button" subTitle="Use the clearButton property to set the clear button" type="line">
			<uni-search-bar radius="5" placeholder="Always show" clearButton="always" cancelButton="always" @confirm="search"
				@cancel="cancel" />
			<uni-search-bar class="uni-mt-10" radius="5" placeholder="Show hidden automatically" clearButton="auto" cancelButton="none" @confirm="search" />
			<uni-search-bar class="uni-mt-10" radius="100" placeholder="Never shows" clearButton="none" cancelButton="none" @confirm="search" />
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: '123123'
			}
		},
		methods: {
			search(res) {
				uni.showToast({
					title: 'search：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				console.log('----input:', res)
			},
			clear(res) {
				uni.showToast({
					title: 'clear event：' + res.value,
					icon: 'none'
				})
			},
			blur(res) {
				uni.showToast({
					title: 'blur event：' + res.value,
					icon: 'none'
				})
			},
			focus(e) {
				uni.showToast({
					title: 'focus event：' + e.value,
					icon: 'none'
				})
			},
			cancel(res) {
				uni.showToast({
					title: 'cancel：' + res.value,
					icon: 'none'
				})
			}
		},
		onBackPress() {
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
		}
	}
</script>

<style lang="scss">

	.search-result {
		padding-top: 10px;
		padding-bottom: 20px;
		text-align: center;
	}

	.search-result-text {
		text-align: center;
		font-size: 14px;
		color:#666;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 0px;
	}

	.uni-mt-10 {
		margin-top: 10px;
	}
</style>
