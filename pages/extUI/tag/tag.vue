<template>
	<view class="example">
		<view class="example-title">实心标签</view>
		<view>
			<view class="tag-view">
				<uni-tag text="标签"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="primary"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="success"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="warning"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="error"></uni-tag>
			</view>
		</view>
		<view class="example-title">空心标签</view>
		<view>
			<view class="tag-view">
				<uni-tag text="标签" :inverted="true"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" :inverted="true" type="primary"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" :inverted="true" type="success"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" :inverted="true" type="warning"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" :inverted="true" type="error"></uni-tag>
			</view>
		</view>
		<view class="example-title">圆角样式</view>
		<view>
			<view class="tag-view">
				<uni-tag text="标签" type="primary" size="small" :circle="true"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="success" size="small" :inverted="true" :circle="true"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="warning" :circle="true"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="error" :inverted="true" :circle="true"></uni-tag>
			</view>
		</view>
		<view class="example-title">标记样式</view>
		<view>
			<view class="tag-view">
				<uni-tag text="标签" type="primary" :mark="true" size="small"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="success" :mark="true" size="small"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="warning" :mark="true"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="error" :mark="true" :circle="true"></uni-tag>
			</view>
		</view>
		<view class="example-title">点击事件</view>
		<view>
			<view class="tag-view">
				<uni-tag text="标签" :type="type" @click="setType"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="primary" :circle="true" :inverted="inverted" @click="setInverted"></uni-tag>
			</view>
		</view>

		<view class="example-title">小标签</view>
		<view>
			<view class="tag-view">
				<uni-tag text="标签" size="small"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="primary" size="small"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="success" size="small"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" :inverted="true" type="warning" :mark="true" size="small"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" :inverted="true" type="error" size="small" :circle="true"></uni-tag>
			</view>
		</view>

		<view class="example-title">不可点击状态</view>
		<view class="page-section">
			<view class="tag-view">
				<uni-tag text="标签" :disabled="true"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" type="primary" :disabled="true"></uni-tag>
			</view>
			<view class="tag-view">
				<uni-tag text="标签" :inverted="true" type="error" size="small" :disabled="true"></uni-tag>
			</view>
		</view>
	</view>
</template>

<script>
	import uniTag from '@/components/uni-tag/uni-tag.vue'

	export default {
		components: {
			uniTag
		},
		data() {
			return {
				type: 'default',
				inverted: false
			}
		},
		methods: {
			setType() {
				let types = ['default', 'primary', 'success', 'warning', 'error'];
				let index = types.indexOf(this.type);
				types.splice(index, 1)
				let randomIndex = Math.floor(Math.random() * 4);
				this.type = types[randomIndex];
			},
			setInverted() {
				this.inverted = !this.inverted;
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	.tag-view {
		margin: 10upx 20upx;
		display: inline-block;
	}
</style>