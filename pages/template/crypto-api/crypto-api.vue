<template>
	<view>
		<view id="str">{{ str.join("-") }}</view>
		<button id="button" @click="getRandomValues">
			crypto.getRandomValues
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				str: [false, false, false]
			};
		},
		methods: {
			getRandomValues() {
				try {
					const isExists = typeof crypto === "object";
					const hasFunction =
						typeof crypto.getRandomValues === "function";
					var rnds8 = new Uint8Array(16);
					const res = crypto.getRandomValues(rnds8);
					const isLengthSame = res.length === 16;
					this.str = [isExists, hasFunction, isLengthSame];
				} catch (e) {
					console.log("crypto error:", e);
				}
			},
		},
	};
</script>

<style></style>
