<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-common-mt">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class="uni-label">名称</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" placeholder="请输入联系人名称" name="name" :value="name" @input="nameChange"></input>
					</view>
				</view>
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						<view class="uni-label">手机号</view>
					</view>
					<view class="uni-list-cell-db">
						<input class="uni-input" type="text" placeholder="请输入联系人手机号" name="phone" :value="phone" @input="phoneChange"></input>
					</view>
				</view>
			</view>
			<view class="uni-padding-wrap">
				<view class="uni-btn-v">
					<button type="primary" class="btn-setstorage" @tap="add">添加联系人</button>
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
			add() {
				// #ifdef APP-PLUS
				if (this.checkPermission() !== 1) {
					return;
				}
				// #endif

				uni.addPhoneContact({
					firstName: this.name,
					mobilePhoneNumber: this.phone,
					success: function() {
						uni.showModal({
							content: '已成功添加联系人！',
							showCancel: false
						})
					},
					fail: function() {
						uni.showModal({
							content: '添加联系人失败！',
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
						content: "需要联系人权限",
						confirmText: "设置",
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
