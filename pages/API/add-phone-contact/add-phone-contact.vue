<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-common-mt">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class="uni-label">Name</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" placeholder="Please enter a contact name" name="name" :value="name" @input="nameChange"/>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class="uni-label">Phone number</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" placeholder="Please enter the phone number" name="phone" :value="phone" @input="phoneChange"/>
					</view>
				</view>
			</view>
			<view class="uni-padding-wrap">
				<view class="uni-btn-v">
					<button type="primary" class="btn-setstorage" @tap="add">Add contact</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	// #ifdef APP-PLUS
	import permision from "@/common/permission.js"
	// #endif
	export default {
		data() {
			return {
				title: 'addPhoneContact',
				name: '',
				phone: ''
			}
		},
		methods: {
			nameChange: function(e) {
				this.name = e.detail.value
			},
			phoneChange: function(e) {
				this.phone = e.detail.value
			},
			async add() {
				// #ifdef APP-PLUS
				let status = await this.checkPermission();
				if (status !== 1) {
				    return;
				}
				// #endif

				uni.addPhoneContact({
					firstName: this.name,
					mobilePhoneNumber: this.phone,
					success: function() {
						uni.showModal({
							content: 'Contacts have been successfully added!',
							showCancel: false
						})
					},
					fail: function() {
						uni.showModal({
							content: 'Add contact failed!',
							showCancel: false
						})
					}
				});
			}
			// #ifdef APP-PLUS
			,
			async checkPermission() {
				let status = permision.isIOS ? await permision.requestIOS('contact') :
					await permision.requestAndroid('android.permission.WRITE_CONTACTS');

				if (status === null || status === 1) {
					status = 1;
				} else {
					uni.showModal({
						content: "Contact permission required",
						confirmText: "Settings",
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppSetting();
							}
						}
					})
				}
				return status;
			}
			// #endif
		}
	}
</script>

<style>
</style>
