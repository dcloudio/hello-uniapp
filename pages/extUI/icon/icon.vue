<template>
	<view class="page">
		<view>
			<view v-for="(item,index) in iconClassList" :key="index" class="icon-item">
				<uni-icon :type="item" :color="activeIndex === index?'#007aff':'#8f8f94'" size="40" @click="switchActive(index)" />
				<text>{{ item }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue'

	export default {
		components: {
			uniIcon
		},
		data() {
			return {
				iconClassList: [
					'contact',
					'person',
					'personadd',
					'contact-filled',
					'person-filled',
					'personadd-filled',
					'phone',
					'email',
					'chatbubble',
					'chatboxes',
					'phone-filled',
					'email-filled',
					'chatbubble-filled',
					'chatboxes-filled',
					'weibo',
					'weixin',
					'pengyouquan',
					'chat',
					'qq',
					'videocam',
					'camera',
					'mic',
					'location',
					'mic-filled',
					'location-filled',
					'micoff',
					'image',
					'map',
					'compose',
					'trash',
					'upload',
					'download',
					'close',
					'redo',
					'undo',
					'refresh',
					'star',
					'plus',
					'minus',
					'circle',
					'clear',
					'refresh-filled',
					'star-filled',
					'plus-filled',
					'minus-filled',
					'circle-filled',
					'checkbox-filled',
					'closeempty',
					'refreshempty',
					'reload',
					'starhalf',
					'spinner',
					'spinner-cycle',
					'search',
					'plusempty',
					'forward',
					'back',
					'checkmarkempty',
					'home',
					'navigate',
					'gear',
					'paperplane',
					'info',
					'help',
					'locked',
					'more',
					'flag',
					'home-filled',
					'gear-filled',
					'info-filled',
					'help-filled',
					'more-filled',
					'settings',
					'list',
					'bars',
					'loop',
					'paperclip',
					'eye',
					'arrowup',
					'arrowdown',
					'arrowleft',
					'arrowright',
					'arrowthinup',
					'arrowthindown',
					'arrowthinleft',
					'arrowthinright',
					'pulldown',
					'scan',
					'sound'
				],
				activeIndex: -1
			}
		},
		methods: {
			switchActive(index) {
				this.activeIndex = index
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	.icon-item {
		display: inline-flex;
		width: 187upx;
		height: 187upx;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>