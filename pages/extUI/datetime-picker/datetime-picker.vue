<template>
	<view class="page container">
		<uni-card is-full>
			<text class="uni-h6">可以同时选择日期和时间的选择器</text>
		</uni-card>
		<uni-section :title="'日期用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" />
		</view>
		<uni-section :title="'日期时间用法：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" v-model="datetimesingle" @change="changeLog" />
		</view>
		<uni-section :title="'日期范围用法：' + '[' + range + ']'" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="range" type="daterange" @maskClick="maskClick" />
		</view>
		<uni-section :title="'日期时间范围用法：' + '[' + datetimerange + ']' " type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="datetimerange" type="datetimerange" rangeSeparator="至" />
		</view>
		<uni-section :title="'v-model用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" />
		</view>
		<uni-section :title="'时间戳用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker returnType="timestamp" v-model="single" @change="changeLog($event)" />
		</view>
		<uni-section :title="'date 对象用法：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" returnType="date" v-model="datetimesingle" @change="changeLog" />
		</view>
		<uni-section :title="'插槽用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single">我是一个插槽，点击我</uni-datetime-picker>
		</view>
		<uni-section :title="'无边框用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :border="false" />
		</view>
		<uni-section :title="'隐藏清除按钮用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :clearIcon="false" />
		</view>
		<uni-section :title="'disabled用法：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" disabled />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				single: '',
				datetimesingle: '',
				range: ['2021-02-1', '2021-3-28'],
				datetimerange: [],
				start: Date.now() - 1000000000,
				end: Date.now() + 1000000000
			}
		},

		watch: {
			datetimesingle(newval) {
				console.log('单选:', this.datetimesingle);
			},
			range(newval) {
				console.log('范围选:', this.range);
			},
			datetimerange(newval) {
				console.log('范围选:', this.datetimerange);
			}
		},
		mounted() {
			setTimeout(() => {
				this.datetimesingle = Date.now() - 2 * 24 * 3600 * 1000
				this.single = '2021-2-12'
				// this.range = ['2021-03-1', '2021-4-28']
				this.datetimerange = ["2021-07-08 0:01:10", "2021-08-08 23:59:59"]
				// this.start = '2021-07-10'
				// this.end = '2021-07-20'
			}, 3000)
		},

		methods: {
			change(e) {
				this.single = e
				console.log('----change事件:', this.single = e);
			},
			changeLog(e) {
				console.log('----change事件:', e);
			},
			maskClick(e) {
				console.log('----maskClick事件:', e);
			}
		}
	}
</script>

<style lang="scss">
	.example-body {
		background-color: #fff;
		padding: 10px;
	}
</style>
