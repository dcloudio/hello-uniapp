<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">Default Style</view>
			<view>
				<switch checked @change="switch1Change" />
				<switch @change="switch2Change" />
			</view>
			<view class="uni-title">Different colors and sizes switch</view>
			<view>
				<switch checked color="#FFCC33" style="transform:scale(0.7)"/>
				<switch color="#FFCC33" style="transform:scale(0.7)"/>
			</view>

			<view class="uni-title">Recommended display style</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">Open</view>
				<switch checked />
			</view>
			<view class="uni-list-cell uni-list-cell-pd">
				<view class="uni-list-cell-db">Close</view>
				<switch />
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'switch'
			}
		},
		methods: {
			switch1Change: function (e) {
				console.log('switch1', e.detail.value)
			},
			switch2Change: function (e) {
				console.log('switch2', e.detail.value)
			}
		}
	}
</script>

