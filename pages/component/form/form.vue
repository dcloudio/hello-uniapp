<template>
	<view>
		<page-head title="form"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">Name</view>
					<input class="uni-input" name="nickname" placeholder="Please enter your name" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">Gender</view>
					<radio-group name="gender">
						<label>
							<radio value="Male" /><text>Male</text>
						</label>
						<label>
							<radio value="Female" /><text>Female</text>
						</label>
					</radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">Hobbies</view>
					<checkbox-group name="loves">
						<label>
							<checkbox value="Reading" /><text>Reading</text>
						</label>
						<label>
							<checkbox value="Writing" /><text>Writing</text>
						</label>
					</checkbox-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">Age</view>
					<slider value="20" name="age" show-value></slider>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">Reserved Options</view>
					<view>
						<switch name="switch" />
					</view>
				</view>
				<view class="uni-btn-v">
					<button form-type="submit">Submit</button>
					<button type="default" form-type="reset">Reset</button>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	import graceChecker from "../../../common/graceChecker.js"
	export default {
		data() {
			return {
			}
		},
		methods: {
			formSubmit: function(e) {
				console.log('form submit event，data：' + JSON.stringify(e.detail.value))
                //定义表单规则
                var rule = [
                    {name:"Name", checkType : "string", checkRule:"1,3",  errorMsg:"Name should be 1-3 characters"},
                    {name:"Gender", checkType : "in", checkRule:"Male,Female",  errorMsg:"Please select gender"},
                    {name:"Hobbies", checkType : "notnull", checkRule:"",  errorMsg:"Please select a hobby"}
                ];
                //进行表单检查
                var formData = e.detail.value;
                var checkRes = graceChecker.check(formData, rule);
                if(checkRes){
                    uni.showToast({title:"Verification passed!", icon:"none"});
                }else{
                    uni.showToast({ title: graceChecker.error, icon: "none" });
                }
			},
			formReset: function(e) {
				console.log('Empty data')
			}
		}
	}
</script>

<style>
	.uni-form-item .title {
		padding: 20rpx 0;
	}
</style>
