<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-common-mt">
			<view class="uni-padding-wrap">
				<view class="uni-btn-v">
					<button type="primary" class="btn-setstorage" @tap="addInterceptor">添加拦截器</button>
					<button type="primary" class="btn-setstorage" @tap="request">发送请求</button>
					<button type="primary" class="btn-setstorage" @tap="removeInterceptor">移除拦截器</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	const interceptor = {
		invoke (args) {
			args.url = 'https://unidemo.dcloud.net.cn/ajax/echo/text?afterIntercept=1';
		}
	}
	export default {
		data() {
			return {
				title: 'addInterceptor',
				responseText: ''
			}
		},
		methods: {
			addInterceptor() {
				uni.addInterceptor('request', interceptor);
			},
			request() {
				uni.request({
					url: 'https://unidemo.dcloud.net.cn/ajax/echo/text?beforeIntercept=1',
					responseType: 'text',
					dataType: 'text',
					success: (res) => {
						console.log('请求成功：', res);
						this.responseText = res.data.trim();
					},
					fail: (err) => {
						console.log('请求失败：', err);
					}
				});
			},
			removeInterceptor() {
				uni.removeInterceptor('request', interceptor);
			}
		}
	}
</script>

<style>
</style>
