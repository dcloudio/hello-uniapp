<template>
	<view>
		<page-head title="audio"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-center">
				<audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author"
				    :action="audioAction" controls></audio>
				<view class="">audio组件不再维护，建议使用能力更强的uni.createInnerAudioContext()</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				current: {
					poster: 'https://web-assets.dcloud.net.cn/unidoc/zh/Alice.jpeg',
					name: '致爱丽丝',
					author: '暂无',
					src: 'https://web-ext-storage.dcloud.net.cn/uni-app/ForElise.mp3',
				},
				audioAction: {
					method: 'pause'
				}
			}
		}
	}
</script>
