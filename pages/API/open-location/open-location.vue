<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-common-mt">
			<form @submit="openLocation">
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							<view class="uni-label">Longitude</view>
						</view>
						<view class="uni-list-cell-db">
							<input class="uni-input" type="text" :disabled="true" value="116.39747" name="longitude"/>
						</view>
					</view>
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							<view class="uni-label">Latitude</view>
						</view>
						<view class="uni-list-cell-db">
							<input class="uni-input" type="text" :disabled="true" value="39.9085" name="latitude"/>
						</view>
					</view>
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							<view class="uni-label">location name</view>
						</view>
						<view class="uni-list-cell-db">
							<input class="uni-input" type="text" :disabled="true" value="Tiananmen" name="name"/>
						</view>
					</view>
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							<view class="uni-label">Detailed Location</view>
						</view>
						<view class="uni-list-cell-db">
							<input class="uni-input" type="text" :disabled="true" value="East Chang'an Street, Dongcheng District, Beijing" name="address"/>
						</view>
					</view>
				</view>
				<view class="uni-padding-wrap">
					<view class="uni-btn-v uni-common-mt">
						<button type="primary" formType="submit">View Location</button>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'openLocation'
			}
		},
		methods: {
			openLocation: function (e) {
				console.log(e)
				var value = e.detail.value
				uni.openLocation({
					longitude: Number(value.longitude),
					latitude: Number(value.latitude),
					name: value.name,
					address: value.address
				})
			}
		}
	}
</script>

<style>
	.uni-list-cell-left {
		padding: 0 30rpx;
	}
</style>
