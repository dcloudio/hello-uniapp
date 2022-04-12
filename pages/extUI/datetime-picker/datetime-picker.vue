<template>
	<view class="page container">
		<uni-card is-full>
			<text class="uni-h6">The datetime-picker selector for both date and time</text>
		</uni-card>
		<uni-section :title="'Date Usage：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" />
		</view>
		<uni-section :title="'Date and Time Usage：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" v-model="datetimesingle" @change="changeLog" />
		</view>
		<uni-section :title="'Date Range Usage：' + '[' + range + ']'" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="range" type="daterange" @maskClick="maskClick" />
		</view>
		<uni-section :title="'Date Time Range Usage：' + '[' + datetimerange + ']' " type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="datetimerange" type="datetimerange" rangeSeparator="To" />
		</view>
		<uni-section :title="'v-model usage：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" />
		</view>
		<uni-section :title="'Timestamp Usage：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker returnType="timestamp" v-model="single" @change="changeLog($event)" />
		</view>
		<uni-section :title="'date Object Usage：' + datetimesingle" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" returnType="date" v-model="datetimesingle" @change="changeLog" />
		</view>
		<uni-section :title="'Slot Usage：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single">I am a slot, click me</uni-datetime-picker>
		</view>
		<uni-section :title="'Borderless usage：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :border="false" />
		</view>
		<uni-section :title="'Hide Clear button usage：' + single" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="single" :clearIcon="false" />
		</view>
		<uni-section :title="'disabled Usage：' + single" type="line"></uni-section>
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
				console.log('Single choice:', this.datetimesingle);
			},
			range(newval) {
				console.log('Range Selection:', this.range);
			},
			datetimerange(newval) {
				console.log('Range Selection:', this.datetimerange);
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
				console.log('----change:', this.single = e);
			},
			changeLog(e) {
				console.log('----change:', e);
			},
			maskClick(e) {
				console.log('----maskClick:', e);
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
