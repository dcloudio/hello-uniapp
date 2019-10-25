<template>
	<view>
		<view class="example-info">图标组件方便用户在设计页面的时候，减少小图片的使用。可方便自定义图标单色、尺寸</view>
		<block v-for="(item, index) in list" :key="index">
			<view class="example-title"><text>{{ item.name }}</text>
				<switch :checked="checked" @change="change" />
			</view>
			<view class="example-body">
				<view v-for="(icon, idx) in item.data" :key="idx" class="icon-item">
					<uni-icon :type="icon.name" :color="activeIndex === index ? '#007aff' : '#8f8f94'" size="40" @click="switchActive(index)" />
					<text>{{ checked? icon.unicode: icon.name }}</text>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '常用图标',
						data: [{
								name: 'contact',
								unicode: 'e6E5'
							},
							{
								name: 'contact-filled',
								unicode: 'e6E4'
							},
							{
								name: 'person',
								unicode: 'e716'
							},
							{
								name: 'person-filled',
								unicode: 'e715'
							},
							{
								name: 'personadd',
								unicode: 'e6e3'
							},
							{
								name: 'personadd-filled',
								unicode: 'e6e2'
							},
							{
								name: 'email',
								unicode: 'e70b'
							},
							{
								name: 'email-filled',
								unicode: 'e70c'
							},
							{
								name: 'chatboxes',
								unicode: 'e705'
							},
							{
								name: 'chatboxes-filled',
								unicode: 'e704'
							},
							{
								name: 'chat',
								unicode: 'e70d'
							},
							{
								name: 'chat-filled',
								unicode: 'e70e'
							},
							{
								name: 'location',
								unicode: 'e6ed'
							},
							{
								name: 'location-filled',
								unicode: 'e6ec'
							},
							{
								name: 'trash',
								unicode: 'e739'
							},
							{
								name: 'trash-filled',
								unicode: 'e73a'
							},
							{
								name: 'empty',
								unicode: 'e6f7'
							},
							{
								name: 'empty-filled',
								unicode: 'e6f8'
							},
							{
								name: 'upload',
								unicode: 'e651'
							},
							{
								name: 'download',
								unicode: 'e64e'
							},
							{
								name: 'star',
								unicode: 'e6eb'
							},
							{
								name: 'star-filled',
								unicode: 'e6ea'
							},
							{
								name: 'search',
								unicode: 'e741'
							},
							{
								name: 'search-filled',
								unicode: 'e742'
							},
							{
								name: 'home',
								unicode: 'e703'
							},
							{
								name: 'home-filled',
								unicode: 'e702'
							},
							{
								name: 'info',
								unicode: 'e71c'
							},
							{
								name: 'info-filled',
								unicode: 'e71b'
							},
							{
								name: 'help',
								unicode: 'e6fb'
							},
							{
								name: 'help-filled',
								unicode: 'e6fa'
							},
							{
								name: 'mobile',
								unicode: 'e72c'
							},
							{
								name: 'mobile-filled',
								unicode: 'e72b'
							},
							{
								name: 'lock',
								unicode: 'e70a'
							},
							{
								name: 'lock-filled',
								unicode: 'e709'
							},
							{
								name: 'unlock',
								unicode: 'e73c'
							},
							{
								name: 'unlock-filled',
								unicode: 'e73b'
							},
							{
								name: 'eye',
								unicode: 'e6e7'
							},
							{
								name: 'eye-filled',
								unicode: 'e6e6'
							},
							{
								name: 'like',
								unicode: 'e708'
							},
							{
								name: 'like-filled',
								unicode: 'e707'
							},
							{
								name: 'praise',
								unicode: 'e72a'
							},
							{
								name: 'praise-filled',
								unicode: 'e727'
							},
							{
								name: 'visibility',
								unicode: 'e7ac'
							},
							{
								name: 'visibilityoff',
								unicode: 'e7ab'
							},
							{
								name: 'customerservice',
								unicode: 'e6f1'
							},
							{
								name: 'customerservice-filled',
								unicode: 'e6f0'
							},
							{
								name: 'bookmark',
								unicode: 'e625'
							},
							{
								name: 'bookmarkoutline',
								unicode: 'e624'
							},
							{
								name: 'more',
								unicode: 'e710'
							},
							{
								name: 'switch',
								unicode: 'e72e'
							},
							{
								name: 'settings',
								unicode: 'e676'
							},
							{
								name: 'list',
								unicode: 'e714'
							},
							{
								name: 'bars',
								unicode: 'ef34'
							},
							{
								name: 'paperclip',
								unicode: 'e618'
							},

							{
								name: 'scan',
								unicode: 'e722'
							},

							{
								name: 'compose',
								unicode: 'e6f5'
							},
							{
								name: 'paperplane',
								unicode: 'e652'
							},
							{
								name: 'filter',
								unicode: 'e692'
							},
							{
								name: 'certificate-filled',
								unicode: 'eb92'
							},
							{
								name: 'commodity',
								unicode: 'e764'
							},
							{
								name: 'publishgoods-filled',
								unicode: 'e746'
							},
							{
								name: 'diamond',
								unicode: 'e608'
							},
							{
								name: 'new',
								unicode: 'e673'
							}
						]
					},
					{
						name: '表单图标',
						data: [{
								name: 'plus',
								unicode: 'e6e1'
							},
							{
								name: 'plus-filled',
								unicode: 'e6e0'
							},
							{
								name: 'clear',
								unicode: 'e6f3'
							},
							{
								name: 'clear-filled',
								unicode: 'e6f2'
							},
							{
								name: 'minus',
								unicode: 'e713'
							},
							{
								name: 'minus-filled',
								unicode: 'e712'
							},
							{
								name: 'circle',
								unicode: 'e63f'
							},
							{
								name: 'circle-filled',
								unicode: 'e73f'
							},
							{
								name: 'checkbox-filled',
								unicode: 'e63e'
							},
							{
								name: 'checkcircle',
								unicode: 'e641'
							},
							{
								name: 'checkboxout',
								unicode: 'e63b'
							},
							{
								name: 'checkboxout-filled',
								unicode: 'e63a'
							},
							{
								name: 'closeempty',
								unicode: 'e64a'
							},
							{
								name: 'checkmarkempty',
								unicode: 'e642'
							}
						]
					},
					{
						name: '品牌图标',
						data: [{
								name: 'weibo',
								unicode: 'e67a'
							},
							{
								name: 'weixin',
								unicode: 'e62e'
							},
							{
								name: 'pengyouquan',
								unicode: 'e68c'
							},
							{
								name: 'qq',
								unicode: 'e601'
							}
						]
					},
					{
						name: '带动画图标',
						data: [{
								name: 'loop',
								unicode: 'ec31'
							},
							{
								name: 'spinner',
								unicode: 'e600'
							},
							{
								name: 'spinner-cycle',
								unicode: 'e71d'
							},
							{
								name: 'reload',
								unicode: 'e71e'
							},

							{
								name: 'gear',
								unicode: 'e729'
							},
							{
								name: 'gear-filled',
								unicode: 'e728'
							}
						]
					},
					{
						name: '方向图标',
						data: [{
								name: 'arrowup',
								unicode: 'e749'
							},
							{
								name: 'arrowdown',
								unicode: 'e74b'
							},
							{
								name: 'arrowleft',
								unicode: 'e720'
							},
							{
								name: 'arrowright',
								unicode: 'e6f9'
							},
							{
								name: 'arrowthinup',
								unicode: 'e74d'
							},
							{
								name: 'arrowthindown',
								unicode: 'e74c'
							},
							{
								name: 'arrowthinleft',
								unicode: 'e62d'
							},
							{
								name: 'arrowthinright',
								unicode: 'e74e'
							},
							{
								name: 'redo',
								unicode: 'e771'
							},
							{
								name: 'undo',
								unicode: 'e907'
							},
							{
								name: 'fileupload',
								unicode: 'e691'
							},
							{
								name: 'filedownload',
								unicode: 'e690'
							},
							{
								name: 'capslock',
								unicode: 'e6d9'
							}
						]
					},
					{
						name: '媒体图标',
						data: [{
								name: 'videocam',
								unicode: 'e73d'
							},
							{
								name: 'videocam-filled',
								unicode: 'e73e'
							},
							{
								name: 'camera',
								unicode: 'e6e9'
							},
							{
								name: 'camera-filled',
								unicode: 'e6e8'
							},
							{
								name: 'mic',
								unicode: 'e738'
							},
							{
								name: 'mic-filled',
								unicode: 'e737'
							},
							{
								name: 'volumeup',
								unicode: 'e7b2'
							},
							{
								name: 'volumeoff',
								unicode: 'e7b1'
							},
							{
								name: 'volumemute',
								unicode: 'e7b0'
							},
							{
								name: 'volumedown',
								unicode: 'e7af'
							},
							{
								name: 'playcircleoutline',
								unicode: 'e726'
							},
							{
								name: 'playcirclefill',
								unicode: 'e725'
							},
							{
								name: 'playarrow',
								unicode: 'e724'
							},
							{
								name: 'pause',
								unicode: 'e718'
							},
							{
								name: 'pausecircleoutline',
								unicode: 'e717'
							},
							{
								name: 'pausecirclefill',
								unicode: 'e711'
							},
							{
								name: 'mics-filled',
								unicode: 'e6fe'
							},
							{
								name: 'micoff',
								unicode: 'e6fd'
							},
							{
								name: 'micnone',
								unicode: 'e6fc'
							},
							{
								name: 'fastrewind',
								unicode: 'e68e'
							},
							{
								name: 'fastforward',
								unicode: 'e68d'
							},
							{
								name: 'image',
								unicode: 'e71a'
							},
							{
								name: 'image-filled',
								unicode: 'e719'
							},
							{
								name: 'sound',
								unicode: 'e730'
							},
							{
								name: 'sound-filled',
								unicode: 'e72f'
							},
							{
								name: 'notifications',
								unicode: 'e723'
							},
							{
								name: 'notificationson',
								unicode: 'e721'
							},
							{
								name: 'notificationsoff',
								unicode: 'e71f'
							},
							{
								name: 'notificationsnone',
								unicode: 'e70f'
							},
							{
								name: 'bluetoothdisabled',
								unicode: 'e620'
							},
							{
								name: 'bluetooth',
								unicode: 'e622'
							},
							{
								name: 'bluetoothconnected',
								unicode: 'e61f'
							},
							{
								name: 'bluetoothaudio',
								unicode: 'e61e'
							}
						]
					},
					{
						name: '交通图标',
						data: [{
								name: 'traffic',
								unicode: 'e792'
							},
							{
								name: 'flights',
								unicode: 'e697'
							},
							{
								name: 'driveeta',
								unicode: 'e674'
							},
							{
								name: 'directionswalk',
								unicode: 'e66a'
							},
							{
								name: 'directionstrain',
								unicode: 'e667'
							},
							{
								name: 'directionssubway',
								unicode: 'e666'
							},
							{
								name: 'directionsbus',
								unicode: 'e664'
							},
							{
								name: 'directionsbike',
								unicode: 'e663'
							}
						]
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
				// this.activeIndex = index;
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

	.example-body {
		display: flex;
		flex-wrap: wrap;
		padding: 0;
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