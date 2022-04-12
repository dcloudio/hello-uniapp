<template>
	<view class="container">
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">The uni-file-picker component allows you to select any files such as images, videos, etc. and upload them to the currently bound service space.</text>
		</uni-card>
		<uni-section title="Select only images" type="line">
			<view class="example-body">
				<uni-file-picker limit="9" title="Select up to 9 images"></uni-file-picker>
			</view>
		</uni-section>
		<uni-section title="Select video only" type="line">
			<view class="example-body">
				<uni-file-picker limit="9" file-mediatype="video" title="Select up to 9 videos"></uni-file-picker>
			</view>
		</uni-section>


		<!-- #ifdef H5 || MP-WEIXIN -->
		<uni-section title="Select any file" type="line">
			<view class="example-body">
				<uni-file-picker limit="5" file-mediatype="all" title="Select up to 5 files"></uni-file-picker>
			</view>
		</uni-section>
		<!-- #endif -->

		<uni-section title="Customize image size" type="line">
			<view class="example-body custom-image-box">
				<text class="text">Select avatar</text>
				<uni-file-picker limit="1" :del-icon="false" disable-preview :imageStyles="imageStyles"
					file-mediatype="image">select</uni-file-picker>
			</view>
		</uni-section>

		<uni-section title="Customize image size" type="line">
			<view class="example-body ">
				<uni-file-picker readonly :value="fileLists" :imageStyles="imageStyles" file-mediatype="image">
				</uni-file-picker>
				<uni-file-picker readonly :value="fileLists" :listStyles="listStyles" file-mediatype="all">
				</uni-file-picker>
			</view>
		</uni-section>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageStyles: {
					width: 64,
					height: 64,
					border: {
						radius: '50%'
					}
				},
				listStyles: {
					border: true,
					dividline: true,
					borderStyle: {
						width: 1,
						color: 'blue',
						style: 'dashed',
						radius: 2
					}
				},
				fileLists: [{
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					extname: 'png',
					name: 'shuijiao.png'
				}, {
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					extname: 'png',
					name: 'uniapp-logo.png'
				}, {
					url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					extname: 'png',
					name: 'shuijiao.png'
				}]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.example-body {
		padding: 10px;
		padding-top: 0;
	}

	.custom-image-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.text {
		font-size: 14px;
		color: #333;
	}
</style>
