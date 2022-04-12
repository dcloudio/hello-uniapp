<template>
	<view>
		<uni-card :is-shadow="false" is-full>
			<text class="uni-h6">Collapse panel is used to collapse/display overly long content or lists. It is usually
				used in multiple content categories to collapse unimportant content and display important content. Click
				to expand the collapsed section.</text>
		</uni-card>
		<uni-section title="Basic usage" type="line">
			<uni-collapse ref="collapse" v-model="value" @change="change">
				<uni-collapse-item title="Default On">
					<view class="content">
						<text class="text">{{content}}</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="Collapse content">
					<view class="content">
						<text class="text">Collapse the content body, which is a longer piece of content. By default,
							the main content is collapsed and only the current item title is displayed. Click on the
							title to expand it in order to see the paragraph. Click on the title again to collapse the
							content.</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="Disable Status" disabled>
					<view class="content">
						<text class="text">Disable the status content body, the paragraph is not visible on the page.</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>

		<button class="button" type="primary" @click="add">Dynamic modification of content</button>
		<!-- TODO app The app will have performance overhead problems when using height animation, so it should be used as appropriate -->
		<uni-section title="Using animation effects" type="line">
			<uni-collapse>
				<uni-collapse-item title="Use of animation" :show-animation="true">
					<view class="content">
						<text class="text">Component animation is enabled by default, and collapsing the content using the animation effect will have a top-to-bottom animation.</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="No animation" :show-animation="false">
					<view class="content">
						<text class="text">Set show-animation="false" to disable the current component animation effect.</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>
		<uni-section title="Accordion effect (only the open state of one will be retained)" type="line">
			<uni-collapse accordion v-model="accordionVal" @change="change">
				<uni-collapse-item title="Accordion effect">
					<view class="content">
						<text class="text">Accordion effect At the same time only one component will remain open and the rest will be closed automatically.</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="Accordion effect">
					<view class="content">
						<text class="text">Accordion effectAt the same time only one component will remain open and the rest will be closed automatically.</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="Accordion effect">
					<view class="content">
						<text class="text">Accordion effectAt the same time only one component will remain open and the rest will be closed automatically.</text>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>

		<uni-section title="配置图片" type="line">
			<uni-collapse>
				<uni-collapse-item title="标题文字"
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
					<view class="content">
						<text class="text">Folded content body with customizable content and style</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="标题文字"
					thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png">
					<view class="content">
						<text class="text">Folded content body with customizable content and style</text>
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
						<text class="text">Folded content body with customizable content and style</text>
					</view>
				</uni-collapse-item>
				<uni-collapse-item title="Collapse content using the uni-list component">
					<uni-list>
						<uni-list-item title="List Text"></uni-list-item>
						<uni-list-item :disabled="true" title="List Text" note="List Disabled Status"></uni-list-item>
						<uni-list-item title="The right side of the list shows switch" :show-switch="true"></uni-list-item>
						<uni-list-item :show-extra-icon="true" :extra-icon="extraIcon" title="List with extended icons on the left side">
						</uni-list-item>
						<uni-list-item title="List with thumbnails on the left" note="List description information"
							thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"
							thumb-size="lg" rightText="Right side text" showArrow></uni-list-item>
						<uni-list-item title="Open Click Feedback" clickable showArrow @click="onClick"></uni-list-item>
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
				value: ['0'],
				accordionVal: '1',
				content: 'Folded content body with customizable content and style，Clicking the button to modify the content causes the height to change.',
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
					this.content = 'Folded content body with customizable content and style，Clicking the button to modify the content causes the height to change.'
				} else {
					this.content = 'Collapse the content body, which is a relatively long piece of content. After the content is modified by clicking the button, the height of the component is made to change, and the previous content and height are restored at the second click of the button.'
				}
				// TODO The applet does not support automatic update, you need to manually resize to update the component height
				// #ifdef MP
				this.$nextTick(() => {
					this.$refs.collapse.resize()
				})
				// #endif
			},
			onClick(e) {
				uni.showToast({
					title: 'The list is clicked'
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
