<template>
	<view>
		<uni-card is-full>
			<text class="uni-h6">Data-driven radio and checkboxes that can be accessed directly through a connection to uniCloud and can be used with the form component uni-forms</text>
		</uni-card>
		<uni-section title="Single choice" type="line">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">Single check：{{JSON.stringify(radio1)}}</view>
				<uni-data-checkbox v-model="radio1" :localdata="sex"></uni-data-checkbox>
			</view>
		</uni-section>
		<uni-section title="多选" subTitle="Use the multiple attribute to enable multiple selection" type="line">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">Multi-Check：{{JSON.stringify(checkbox1)}}</view>
				<uni-data-checkbox multiple v-model="checkbox1" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="最大最小值" subTitle="Use min / max to set the maximum and minimum values for multiple selections, not valid for single selections">
			<view class="uni-px-5 uni-pb-5">
				<view class="text">Selected {{JSON.stringify(checkbox6)}}</view>
				<uni-data-checkbox min="1" max="2" multiple v-model="checkbox6" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="More styles - button" subTitle="Use the mode=button property to use the button style" type="line">
			<view class="uni-px-5">
				<view class="text">Single check：{{JSON.stringify(radio2)}}</view>
				<uni-data-checkbox mode="button" v-model="radio2" :localdata="sex"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">Multi-Check：{{JSON.stringify(checkbox2)}}</view>
				<uni-data-checkbox mode="button" multiple v-model="checkbox2" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="More styles - tag" subTitle="Use tag style with mode=tag attribute" type="line">
			<view class="uni-px-5">
				<view class="text">Single check：{{JSON.stringify(radio3)}}</view>
				<uni-data-checkbox mode="tag" v-model="radio3" :localdata="sex"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">Multi-Check：{{JSON.stringify(checkbox3)}}</view>
				<uni-data-checkbox mode="tag" multiple v-model="checkbox3" :localdata="hobby"></uni-data-checkbox>
			</view>
		</uni-section>

		<uni-section title="Disable" subTitle="The disable attribute is used in the data to disable it individually, and the disable attribute is used in the components to disable them all." type="line">
			<view class="uni-px-5">
				<view class="text">Single check：{{JSON.stringify(radio4)}}</view>
				<uni-data-checkbox mode="button" v-model="radio4" :localdata="sex1"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">Multi-Check：{{JSON.stringify(checkbox4)}}</view>
				<uni-data-checkbox mode="button" multiple v-model="checkbox4" :localdata="hobby2">
				</uni-data-checkbox>
			</view>
		</uni-section>



		<uni-section title="Customized highlighting color" subTitle="Use the selectedColor property to modify the color" type="line">
			<view class="uni-px-5">
				<view class="text">Single check：{{JSON.stringify(radio5)}}</view>
				<uni-data-checkbox selectedColor="red" v-model="radio5" :localdata="sex1"></uni-data-checkbox>
			</view>
			<view class="uni-px-5 uni-pb-5">
				<view class="text">Multi-Check：{{JSON.stringify(checkbox5)}}</view>
				<uni-data-checkbox selectedColor="red" multiple v-model="checkbox5" :localdata="hobby2">
				</uni-data-checkbox>
			</view>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio1: 0,
				radio2: 0,
				radio3: 0,
				radio4: 0,
				radio5: 0,
				radio6: 0,
				checkbox1: [0],
				checkbox2: [0],
				checkbox3: [0],
				checkbox4: [0],
				checkbox5: [0],
				checkbox6: [0],
				sex: [{
					text: 'Male',
					value: 0
				}, {
					text: 'Female',
					value: 1
				}, {
					text: 'Unknown',
					value: 2
				}],
				sex1: [{
					text: 'Male',
					value: 0
				}, {
					text: 'Female',
					value: 1,
					disable: true
				}, {
					text: 'UnKnow',
					value: 2
				}],
				hobby: [{
					text: 'Football',
					value: 0
				}, {
					text: 'Basketball',
					value: 1
				}, {
					text: 'Swimming',
					value: 2
				}],
				hobby2: [{
					text: 'Football',
					value: 0,
					disable: true
				}, {
					text: 'Basketball',
					value: 1,
					disable: true
				}, {
					text: 'Swimming',
					value: 2
				}],
			}
		},
		onLoad() {},
		onReady() {},
		methods: {}
	}
</script>

<style lang="scss">
	.text {
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}

	.uni-px-5 {
		padding-left: 10px;
		padding-right: 10px;
	}

	.uni-pb-5 {
		padding-bottom: 10px;
	}
</style>
