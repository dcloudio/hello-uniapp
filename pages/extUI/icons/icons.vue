<template>
	<view class="page">
		<view class="example-info">图标组件方便用户在设计页面的时候，减少小图片的使用。可方便自定义图标单色、尺寸</view>
		<view class="example-title"><text>基础图标</text>
			<view class="uni-right">
				<text>显示{{ checked?' unicode':'图标名' }}</text>
				<switch :checked="checked" class="switch" @change="change" />
			</view>
		</view>
		<view class="example-body">
			<view v-for="(item,index) in iconClassList" :key="index" class="icon-item">
				<uni-icons :type="item.name" :color="activeIndex === index?'#007aff':'#8f8f94'" size="40" @click="switchActive(index)" />
				<text :style="{color:activeIndex === index?'#007aff':'#8f8f94'}">{{ checked? item.unicode: item.name }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				iconClassList: [{
						name: 'contact',
						unicode: 'e100'
					}, {
						name: 'person',
						unicode: 'e101'
					}, {
						name: 'personadd',
						unicode: 'e102'
					}, {
						name: 'contact-filled',
						unicode: 'e130'
					}, {
						name: 'person-filled',
						unicode: 'e131'
					}, {
						name: 'personadd-filled',
						unicode: 'e132'
					}, {
						name: 'phone',
						unicode: 'e200'
					}, {
						name: 'email',
						unicode: 'e201'
					}, {
						name: 'chatbubble',
						unicode: 'e202'
					}, {
						name: 'chatboxes',
						unicode: 'e203'
					}, {
						name: 'phone-filled',
						unicode: 'e230'
					}, {
						name: 'email-filled',
						unicode: 'e231'
					}, {
						name: 'chatbubble-filled',
						unicode: 'e232'
					}, {
						name: 'chatboxes-filled',
						unicode: 'e233'
					}, {
						name: 'weibo',
						unicode: 'e260'
					}, {
						name: 'weixin',
						unicode: 'e261'
					}, {
						name: 'pengyouquan',
						unicode: 'e262'
					}, {
						name: 'chat',
						unicode: 'e263'
					}, {
						name: 'qq',
						unicode: 'e264'
					}, {
						name: 'videocam',
						unicode: 'e300'
					},
					{
						name: 'camera',
						unicode: 'e301'
					},
					{
						name: 'mic',
						unicode: 'e302'
					},
					{
						name: 'location',
						unicode: 'e303'
					},
					{
						name: 'mic-filled',
						unicode: 'e332'
					},
					{
						name: 'location-filled',
						unicode: 'e333'
					},
					{
						name: 'micoff',
						unicode: 'e360'
					},
					{
						name: 'image',
						unicode: 'e363'
					},
					{
						name: 'map',
						unicode: 'e364'
					},
					{
						name: 'compose',
						unicode: 'e400'
					},
					{
						name: 'trash',
						unicode: 'e401'
					},
					{
						name: 'upload',
						unicode: 'e402'
					},
					{
						name: 'download',
						unicode: 'e403'
					},
					{
						name: 'close',
						unicode: 'e404'
					},
					{
						name: 'redo',
						unicode: 'e405'
					},
					{
						name: 'undo',
						unicode: 'e406'
					},
					{
						name: 'refresh',
						unicode: 'e407'
					},
					{
						name: 'star',
						unicode: 'e408'
					},
					{
						name: 'plus',
						unicode: 'e409'
					},
					{
						name: 'minus',
						unicode: 'e410'
					},
					{
						name: 'circle',
						unicode: 'e411'
					},
					{
						name: 'clear',
						unicode: 'e434'
					},
					{
						name: 'refresh-filled',
						unicode: 'e437'
					},
					{
						name: 'star-filled',
						unicode: 'e438'
					},
					{
						name: 'plus-filled',
						unicode: 'e439'
					},
					{
						name: 'minus-filled',
						unicode: 'e440'
					},
					{
						name: 'circle-filled',
						unicode: 'e441'
					},
					{
						name: 'checkbox-filled',
						unicode: 'e442'
					},
					{
						name: 'closeempty',
						unicode: 'e460'
					},
					{
						name: 'refreshempty',
						unicode: 'e461'
					},
					{
						name: 'reload',
						unicode: 'e462'
					},
					{
						name: 'starhalf',
						unicode: 'e463'
					},
					{
						name: 'spinner',
						unicode: 'e464'
					},
					{
						name: 'spinner-cycle',
						unicode: 'e465'
					},
					{
						name: 'search',
						unicode: 'e466'
					},
					{
						name: 'plusempty',
						unicode: 'e468'
					},
					{
						name: 'forward',
						unicode: 'e470'
					},
					{
						name: 'back',
						unicode: 'e471'
					},
					{
						name: 'checkmarkempty',
						unicode: 'e472'
					},
					{
						name: 'home',
						unicode: 'e500'
					},
					{
						name: 'navigate',
						unicode: 'e501'
					},
					{
						name: 'gear',
						unicode: 'e502'
					},
					{
						name: 'paperplane',
						unicode: 'e503'
					},
					{
						name: 'info',
						unicode: 'e504'
					},
					{
						name: 'help',
						unicode: 'e505'
					},
					{
						name: 'locked',
						unicode: 'e506'
					},
					{
						name: 'more',
						unicode: 'e507'
					},
					{
						name: 'flag',
						unicode: 'e508'
					},
					{
						name: 'home-filled',
						unicode: 'e530'
					},
					{
						name: 'gear-filled',
						unicode: 'e532'
					},
					{
						name: 'info-filled',
						unicode: 'e534'
					},
					{
						name: 'help-filled',
						unicode: 'e535'
					},
					{
						name: 'more-filled',
						unicode: 'e537'
					},
					{
						name: 'settings',
						unicode: 'e560'
					},
					{
						name: 'list',
						unicode: 'e562'
					},
					{
						name: 'bars',
						unicode: 'e563'
					},
					{
						name: 'loop',
						unicode: 'e565'
					},
					{
						name: 'paperclip',
						unicode: 'e567'
					},
					{
						name: 'eye',
						unicode: 'e568'
					},
					{
						name: 'arrowup',
						unicode: 'e580'
					},
					{
						name: 'arrowdown',
						unicode: 'e581'
					},
					{
						name: 'arrowleft',
						unicode: 'e582'
					},
					{
						name: 'arrowright',
						unicode: 'e583'
					},
					{
						name: 'arrowthinup',
						unicode: 'e584'
					},
					{
						name: 'arrowthindown',
						unicode: 'e585'
					},
					{
						name: 'arrowthinleft',
						unicode: 'e586'
					},
					{
						name: 'arrowthinright',
						unicode: 'e587'
					},
					{
						name: 'pulldown',
						unicode: 'e588'
					},
					{
						name: 'scan',
						unicode: 'e612'
					},
					{
						name: 'sound',
						unicode: 'e590'
					}
				],
				activeIndex: -1,
				checked: false
			}
		},
		methods: {
			change(e) {
				this.checked = e.detail.value
			},
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
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.example-title {
		padding-right: 5px;
	}

	.example-body {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
	}

	.uni-right {
		display: flex;
		align-items: center;
		color: #666;
	}

	.switch {
		transform: scale(0.8);
		margin-left: 5px;
	}

	.icon-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30upx 10upx;
		width: 25%;
		text-align: center;
		white-space: normal;
		word-break: break-all;
		box-sizing: border-box;
	}
</style>