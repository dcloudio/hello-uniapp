<template>
	<view>
		<uni-section title="Basic usage" type="line" padding>
			<uni-steps :options="list1" :active="active" />
		</uni-section>
		<uni-section title="Custom Icons" type="line" padding>
			<uni-steps :options="list1" active-icon="checkbox" :active="active" />
		</uni-section>
		<uni-section title="Custom Icons" type="line" padding>
			<uni-steps :options="list1" active-icon="medal" :active="active" />
		</uni-section>
		<uni-section title="Vertical alignment" type="line" padding>
			<uni-steps :options="list2" active-color="#007AFF" :active="active" direction="column" />
		</uni-section>
		<button type="primary" size="mini" style="margin: 30px 10px; width: 100px;" @click="change">Change Status</button>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				active: 1,
				list1: [{
					title: 'Events 1'
				}, {               
					title: 'Events 2'
				}, {               
					title: 'Events 3'
				}, {               
					title: 'Events 4'
				}],
				list2: [{
					title: 'order',
					desc: '2018-11-11'
				}, {
					title: 'Shipping',
					desc: '2018-11-12'
				}, {
					title: 'Signature',
					desc: '2018-11-13'
				}, {
					title: 'Done',
					desc: '2018-11-14'
				}]
			}
		},
		methods: {
			change() {
				if (this.active < this.list1.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
			}
		}
	}
</script>

<style lang="scss">
	.status-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 92rpx;
		margin: 30rpx;
		background-color: #007AFF;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		flex-direction: row;
	}
</style>
