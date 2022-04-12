<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">easyinput component is an enhancement of the native input component, designed to work with uni-forms, easyinput has built-in borders, icons, etc., and includes input all functions</text>
		</uni-card>
		<uni-section title="Default" subTitle="Use the focus property to automatically get the focus of the input box" type="line" padding>
			<uni-easyinput errorMessage v-model="value" focus placeholder="Please enter the content" @input="input"></uni-easyinput>
		</uni-section>

		<uni-section title="去除空格" subTitle="Using the trim attribute, you can control the spaces in the returned content" type="line" padding>
			<text class="uni-subtitle">Input content：{{ '"'+value+'"' }}</text>
			<uni-easyinput class="uni-mt-5" trim="all" v-model="value" placeholder="Please enter the content" @input="input">
			</uni-easyinput>
		</uni-section>


		<uni-section title="Custom styles" subTitle="Using the styles property, you can customize the input box style" type="line" padding>
			<uni-easyinput v-model="value" :styles="styles" :placeholderStyle="placeholderStyle" placeholder="Please enter the content"
				@input="input"></uni-easyinput>
		</uni-section>

		<uni-section title="Icon" subTitle="Use the prefixIcon / suffixIcon property to customize the left and right icons of the input box" type="line" padding>
			<uni-easyinput prefixIcon="search" v-model="value" placeholder="left icon" @iconClick="iconClick">
			</uni-easyinput>
			<uni-easyinput class="uni-mt-5" suffixIcon="search" v-model="value" placeholder="right icon"
				@iconClick="iconClick">
			</uni-easyinput>
		</uni-section>


		<uni-section title="disabled" subTitle="Use the disabled property to disable the input box" type="line" padding>
			<uni-easyinput disabled value="Disabled" placeholder="Please enter the content"></uni-easyinput>
		</uni-section>

		<uni-section title="password" subTitle="Specify the attribute type=password to use the password box, the eye icon will be displayed on the right side" type="line" padding>
			<uni-easyinput type="password" v-model="password" placeholder="Please enter your password"></uni-easyinput>
		</uni-section>

		<uni-section title="textarea" subTitle="type=textarea" type="line" padding>
			<uni-easyinput type="textarea" v-model="value" placeholder="Please enter the content"></uni-easyinput>
		</uni-section>


		<uni-section title="textarea auto height" subTitle="autoHeight" type="line" padding>
			<uni-easyinput type="textarea" autoHeight v-model="value" placeholder="Please enter the content"></uni-easyinput>
		</uni-section>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				password: '',
				placeholderStyle: "color:#2979FF;font-size:14px",
				styles: {
					color: '#2979FF',
					borderColor: '#2979FF'
				}
			}

		},
		onLoad() {},
		onReady() {},
		methods: {
			input(e) {
				console.log('Input content：', e);
			},
			iconClick(type) {
				uni.showToast({
					title: `Clicked on the ${type=='prefix'?' left':'right'} icon`,
					icon: 'none'
				})
			}
		}
	}
</script>

<style lang="scss">
	.uni-mt-5 {
		margin-top: 5px;
	}
</style>
