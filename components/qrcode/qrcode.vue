<template>
	<view class="qrcode">
		<image class="image" v-if="img" :src="img" :style="{width: sizeSync + 'px', height: sizeSync + 'px'}" />
	</view>
</template>
<script>
	import QR from './qrcode.js';
	export default {
		name: 'number-box',
		props: {
			val: {
				type: String,
				default: ''
			},
			size: {
				type: Number,
				default: 100
			}
		},
		data() {
			return {
				img: '',
				sizeSync: 100
			}
		},
		methods: {
			creatQrcode() {
				let val = this.val + '';
				if (!val) {
					return;
				}
				let img = QR.createQrCodeImg(val, {
					size: parseInt(this.size)
				});
				this.img = img;
			},
			clearQrcode() {
				this.img = '';
			}
		},
		watch: {
			size(newVal, oldVal) {
				if (newVal != oldVal) {
					this.sizeSync = newVal;
					this.creatQrcode();
				}
			}
		},
		created() {
			this.sizeSync = this.size;
		}
	}
</script>
<style>
	.qrcode {
		display: flex;
		justify-content: center;
	}
</style>
