<template>
	<!-- #ifdef APP-NVUE -->
	<cell>
		<!-- #endif -->
		<view class="uni-list-ad">
			<view v-if="borderShow" :class="{'uni-list--border':border,'uni-list-item--first':isFirstChild}"></view>
			<ad style="width: 200px;height: 300px;border-width: 1px;border-color: red;border-style: solid;" adpid="1111111111" unit-id="" appid="" apid="" type="feed" @error="aderror" @close="closeAd"></ad>
		</view>
		<!-- #ifdef APP-NVUE -->
	</cell>
	<!-- #endif -->

</template>

<script>
	// #ifdef APP-NVUE
	const dom = uni.requireNativePlugin('dom');
	// #endif
	export default {
		name: 'UniListAd',
		props: {
			title: {
				type: String,
				default: '',

			}
		},
		inject: ['list'],
		data() {
			return {
				isFirstChild: false,
				border: false,
				borderShow: true,
			}
		},

		mounted() {
			if (!this.list.firstChildAppend) {
				this.list.firstChildAppend = true
				this.isFirstChild = true
			}
			this.border = this.list.border
		},
		methods: {
			aderror(e) {
				console.log("aderror: " + JSON.stringify(e.detail));
			},
			closeAd(e) {
				this.borderShow = false
			}
		}
	}
</script>

<style scoped>
	.uni-list-ad {
		position: relative;
		border: 1px red solid;
	}

	.uni-list--border {
		position: relative;
		padding-bottom: 1px;
		/* #ifdef APP-PLUS */
		border-top-color: #e5e5e5;
		border-top-style: solid;
		border-top-width: 0.5px;
		/* #endif */
		margin-left: 15px;
	}

	/* #ifndef APP-NVUE */
	.uni-list--border:after {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		background-color: #e5e5e5;
	}

	.uni-list-item--first:after {
		height: 0px;
	}

	/* #endif */
</style>