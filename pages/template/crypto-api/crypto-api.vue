<template>
	<view>
		<view id="str">{{str.join('-')}}</view>
		<button id="button" @click="getRandomValues">crypto.getRandomValues</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				str: [false, false, false]
			}
		},
		methods: {
			getRandomValues() {
				try {
					this.str[0] = typeof crypto === 'object';
					this.str[1] = typeof crypto.getRandomValues === 'function';
					var rnds8 = new Uint8Array(16);
					const res = crypto.getRandomValues(rnds8);

					this.str[2] = res.length === 16
				} catch (e) {
					console.log("crypto error:", e);
				}
			}
		}
	}
</script>

<style>

</style>
