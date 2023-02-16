<template>
	<view class="page container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">可以同时选择日期和时间的选择器</text>
		</uni-card>
		<uni-section :title="'日期用法：' + dateString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="date" :clear-icon="false" v-model="dateString" @maskClick="maskClick" />
		</view>
		<uni-section :title="'日期时间用法：' + datetimeString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" :start="start" :end="end" v-model="datetimeString" @change="change" />
		</view>
		<uni-section :title="'日期范围用法：' + '[' + dateRange + ']'" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="dateRange" type="daterange" @maskClick="maskClick" />
		</view>
		<uni-section :title="'日期时间范围用法：' + '[' + datetimeRange + ']' " type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="datetimeRange" type="datetimerange" rangeSeparator="至" />
		</view>
		<uni-section :title="'时间戳用法：' + dateTimestamp" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker returnType="timestamp" v-model="dateTimestamp" @change="change" />
		</view>
		<uni-section :title="'date 对象用法：' + dateInstance" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker type="datetime" returnType="date" v-model="dateInstance" @change="change" />
		</view>
		<uni-section :title="'插槽用法：' + dateString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="dateString">我是一个插槽，点击我</uni-datetime-picker>
		</view>
		<uni-section :title="'无边框用法：' + dateString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="dateString" :border="false" />
		</view>
		<uni-section :title="'隐藏清除按钮用法：' + dateString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="dateString" :clearIcon="false" />
		</view>
		<uni-section :title="'disabled用法：' + dateString" type="line"></uni-section>
		<view class="example-body">
			<uni-datetime-picker v-model="dateString" disabled />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dateString: this.getDateTime(new Date()),
				datetimeString: this.getDateTime(new Date()),
				dateTimestamp: Date.now(),
				dateInstance: new Date(),
				dateRange: [this.getDate(Date.now() - 5 * 24 * 3600000), this.getDate(Date.now() + 5 * 24 * 3600000)],
				datetimeRange: [this.getDateTime(Date.now() - 5 * 24 * 3600000), this.getDateTime(Date.now() + 5 * 24 * 3600000)],
				start: Date.now() - 10 * 24 * 3600000,
				end: Date.now() + 10 * 24 * 3600000
			}
		},
		watch: {
			datetimeString() {
				console.log('日期时间单选:', this.datetimeString);
			},
			dateRange() {
				console.log('日期范围选:', this.dateRange);
			},
			datetimeRange() {
				console.log('日期时间范围选:', this.datetimeRange);
			}
		},
		methods: {
			change(e) {
				console.log('----change事件:', e);
			},
			maskClick(e) {
				console.log('----maskClick事件:', e);
			},
      getDateTime(date){
        return `${this.getDate(date)} ${this.getTime(date)}`
      },
      getDate(date){
        date = new Date(date)
        const year = date.getFullYear()
        const month = date.getMonth()+1
        const day = date.getDate()
        return `${year}-${this.addZero(month)}-${this.addZero(day)}`
      },
      getTime(date){
        date = new Date(date)
        const hour = date.getHours()
        const minute = date.getMinutes()
        const second = date.getSeconds()
        return this.hideSecond ? `${this.addZero(hour)}:${this.addZero(minute)}` : `${this.addZero(hour)}:${this.addZero(minute)}:${this.addZero(second)}`
      },
			addZero(num) {
				if (num < 10) {
					num = `0${num}`
				}
				return num
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
