<template>
	<view>
		<uni-card is-full :is-shadow="false">
			<text class="uni-h6">uni-pagination component for displaying page numbers, request data, etc.</text>
		</uni-card>
		<uni-section title="Default Style" type="line" padding>
			<uni-pagination :total="50" title="Title text" />
		</uni-section>
		<uni-section title="Modify button text" subTitle="Use prev-text / next-text modify button text" type="line" padding>
			<uni-pagination :total="50" title="Title text" prev-text="prev" next-text="next" />
		</uni-section>
		<uni-section title="Icon style" subTitle="Use show-icon property display icon button" type="line" padding>
			<uni-pagination :show-icon="true" :total="50" title="Title text" />
		</uni-section>
		<uni-section title="Modify data length" type="line" padding>
			<uni-pagination :current="current" :total="total" title="Title text" :show-icon="true" @change="change" />
			<view class="btn-view">
				<view>
					<text class="example-info"> current page: {{ current }}, total data: {{ total }} items, data per page: {{ pageSize }}</text>
				</view>
				<view class="btn-flex">
					<button class="button word-btn" hover-class="word-btn--hover" :hover-start-time="20"
						:hover-stay-time="70" @click="add"><text class="word-btn-white">Add 10 pieces of data</text></button>
					<button class="button" type="default" @click="reset">Reset data</button>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				current: 3,
				total: 10,
				pageSize: 10
			}
		},
		mounted() {
			setTimeout(() => {
				this.current = 5
			}, 3000)
		},
		methods: {
			add() {
				this.total += 10
			},
			reset() {
				this.total = 0
				this.current = 1
			},
			change(e) {
				console.log(e)
				this.current = e.current
			}
		}
	}
</script>

<style lang="scss">
	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
	}

	.btn-view {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		padding: 15px;
		text-align: center;
		background-color: #fff;
		justify-content: center;
		align-items: center;
	}

	.btn-flex {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.button {
		margin: 20px;
		width: 150px;
		font-size: 14px;
		color: #333;
	}
</style>
