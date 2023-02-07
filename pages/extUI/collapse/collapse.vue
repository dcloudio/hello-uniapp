<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">折叠面板用来折叠/显示过长的内容或者是列表。通常是在多内容分类项使用，折叠不重要的内容，显示重要内容。点击可以展开折叠部分。</text>
		</uni-card>
		<uni-section title="基础用法" type="line">
			<uni-collapse ref="collapse" v-model="value" @change="change">
				<uni-collapse-item title="默认开启" >
					<view class="content">
						<text class="text">{{content}}</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="折叠内容">
					<view class="content">
						<text class="text">折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段文字。再次点击标题，折叠内容。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="禁用状态" disabled>
					<view class="content">
						<text class="text">禁用状态内容主体，页面上是看不到这段话的。</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>

		<button class="button" type="primary" @click="add">动态修改内容</button>
		<!-- TODO app 端默认不使用动画，app在使用高度动画的时候会有性能开销问题，所以应该要酌情使用 -->
		<uni-section title="使用动画效果" type="line">
			<uni-collapse >
				<uni-collapse-item title="使用动画" :show-animation="true">
					<view class="content">
						<text class="text">默认开启组件动画，使用动画效果折叠内容会有一个从上到下的动画。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="不使用动画" :show-animation="false">
					<view class="content">
						<text class="text">设置 show-animation="false",关闭当前组件动画效果。</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>
		<uni-section title="手风琴效果（只会保留一个的打开状态）" type="line">
			<uni-collapse  accordion v-model="accordionVal" @change="change">
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="手风琴效果">
					<view class="content">
						<text class="text">手风琴效果同时只会保留一个组件的打开状态，其余组件会自动关闭。</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>

		<uni-section title="配置图片" type="line">
			<uni-collapse>
				<uni-collapse-item title="标题文字"
					thumb="https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
					<view class="content">
						<text class="text">折叠内容主体，可自定义内容及样式</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="标题文字"
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
					<view class="content">
						<text class="text">折叠内容主体，可自定义内容及样式</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>

		<uni-section title="使用插槽" type="line">
			<uni-collapse>
				<uni-collapse-item titleBorder="none">
					<template v-slot:title>
						<uni-list>
							<uni-list-item title="标题使用自定义标题插槽" :show-extra-icon="true" :extra-icon="extraIcon">
							</uni-list-item>
						</uni-list>
					</template>
					<view class="content">
						<text class="text">折叠内容主体，可自定义内容及样式</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="折叠内容使用 uni-list 组件">
					<uni-list>
						<uni-list-item title="列表文字"></uni-list-item>
						<uni-list-item :disabled="true" title="列表文字" note="列表禁用状态"></uni-list-item>
						<uni-list-item title="列表右侧显示 switch" :show-switch="true"></uni-list-item>
						<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon" title="列表左侧带扩展图标"></uni-list-item>
						<uni-list-item title="列表左侧带略缩图" note="列表描述信息"
							thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
							thumb-size="lg" rightText="右侧文字" showArrow></uni-list-item>
						<uni-list-item title="开启点击反馈" clickable showArrow @click="onClick"></uni-list-item>
					</uni-list>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				value:['0'],
				accordionVal:'1',
				content: '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。',
				extraIcon: {
					color: '#4cd964',
					size: '26',
					type: 'image'
				},
			}
		},
		methods: {
			add() {
				if (this.content.length > 35) {
					this.content = '折叠内容主体，可自定义内容及样式，点击按钮修改内容使高度发生变化。'
				} else {
					this.content = '折叠内容主体，这是一段比较长内容。通过点击按钮修改后内容后，使组件高度发生变化，在次点击按钮恢复之前的内容和高度。'
				}
				// TODO 小程序中不支持自动更新 ，需要手动resize 更新组件高度
				// #ifdef MP
				this.$nextTick(() => {
					this.$refs.collapse.resize()
				})
				// #endif
			},
			onClick(e) {
				uni.showToast({
					title: '列表被点击'
				})
			},
			change(e) {
				console.log(e);
			}
		}
	}
</script>

<style lang="scss">
	.example-body {
		flex-direction: column;
		flex: 1;
	}

	.content {
		padding: 15px;
	}

	.text {
		font-size: 14px;
		color: #666;
		line-height: 20px;
	}

	.button {
		// margin-top: 10px;
		margin: 10px;
		margin-bottom: 0;
	}
</style>
