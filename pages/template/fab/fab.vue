<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">
				<uni-icon size="16" type="info"></uni-icon>
				说明 :
			</view>
			<view class="uni-helllo-text">
				<view>悬浮按钮 fab button ，点击可展开一个图标按钮菜单。</view>
				<view>
					以下五个按钮只为效果展示，真实项目中建议不要动态修改悬浮按钮的位置，展示方式等
				</view>
			</view>
			<button class="btn" type="primary" @click="switchBtn(0)">
				切换菜单({{ directionStr }}显示)
			</button>
			<button class="btn" type="primary" @click="switchBtn('left', 'bottom')">
				左下角显示
			</button>
			<button class="btn" type="primary" @click="switchBtn('right', 'bottom')">
				右下角显示
			</button>
			<button class="btn" type="primary" @click="switchBtn('left', 'top')">左上角显示</button>
			<button class="btn" type="primary" @click="switchBtn('right', 'top')">
				右上角显示
			</button>
		</view>
		<uni-fab
			:pattern="pattern"
			:content="content"
			:horizontal="horizontal"
			:vertical="vertical"
			:direction="direction"
			@trigger="trigger"
		></uni-fab>
	</view>
</template>

<script>
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import uniFab from '@/components/uni-fab.vue';
export default {
	data() {
		return {
			title: 'uni-fab',
			directionStr: '垂直',
			horizontal: 'left',
			vertical: 'bottom',
			direction: 'horizontal',
			pattern: {
				color: '#7A7E83',
				backgroundColor: '#fff',
				selectedColor: '#007AFF',
				buttonColor: '#007AFF'
			},
			content: [
				{
					iconPath: '/static/component.png',
					selectedIconPath: '/static/componentHL.png',
					text: '组件',
					active: false
				},
				{
					iconPath: '/static/api.png',
					selectedIconPath: '/static/apiHL.png',
					text: 'API',
					active: false
				},
				{
					iconPath: '/static/template.png',
					selectedIconPath: '/static/templateHL.png',
					text: '模版',
					active: false
				}
			]
		};
	},
	methods: {
		trigger(e) {
			console.log(e);
			this.content[e.index].active = !e.item.active;
			uni.showModal({
				title: '提示',
				content: `您${this.content[e.index].active ? '选中了' : '取消了'}${e.item.text}`,
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		},
		switchBtn(hor, ver) {
			if (hor === 0) {
				this.direction = this.direction === 'horizontal' ? 'vertical' : 'horizontal';
				this.directionStr = this.direction === 'horizontal' ? '垂直' : '水平';
			} else {
				this.horizontal = hor;
				this.vertical = ver;
			}
			this.$forceUpdate();
		}
	},
	components: {
		uniFab,
		uniIcon
	}
};
</script>

<style>
.btn {
	margin: 30upx 0;
}
</style>
