<template>
	<view>
		<text class="example-info">此示例展示了ad广告组件在 uni-list 中的应用</text>
		<uni-section title="列表嵌套广告" type="line"></uni-section>
		<uni-list>
			<template v-for="(item,index) in listData">
				<!-- <uni-list-ad v-if="(index > 0 && (index+1) % 10 == 0)"></uni-list-ad> -->
				<ad  adpid="1111111111" v-if="(index > 0 && (index+1) % 10 == 0)" unit-id="" appid="" apid="" type="feed"></ad>
				<uni-list-item v-else :title="item.title" :note="item.author_name" :thumb="item.cover" thumb-size="lg" />
			</template>
		</uni-list>
	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				UNITS: {
					'年': 31557600000,
					'月': 2629800000,
					'天': 86400000,
					'小时': 3600000,
					'分钟': 60000,
					'秒': 1000
				},
				listData: []
			}
		},
		onLoad() {
			this.getList()
		},
		methods: {
			getList() {
				var data = {
					column: 'id,post_id,title,author_name,cover,published_at' //需要的字段名
				};

				uni.request({
					url: 'https://unidemo.dcloud.net.cn/api/news',
					data: data,
					success: data => {
						if (data.statusCode == 200) {
							let list = this.setTime(data.data);
							this.listData = this.reload ? list : this.listData.concat(list);
							console.log(this.listData);
						}
					},
					fail: (data, code) => {
						console.log('fail' + JSON.stringify(data));
					}
				});
			},
			setTime(items) {
				var newItems = [];
				items.forEach(e => {
					newItems.push({
						author_name: e.author_name,
						cover: e.cover,
						id: e.id,
						post_id: e.post_id,
						published_at: this.format(e.published_at),
						title: e.title
					});
				});
				return newItems;
			},
			format(dateStr) {
				var date = this.parse(dateStr)
				var diff = Date.now() - date.getTime();
				if (diff < this.UNITS['天']) {
					return this.humanize(diff);
				}
				var _format = function(number) {
					return (number < 10 ? ('0' + number) : number);
				};
				return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +
					_format(date.getHours()) + ':' + _format(date.getMinutes());
			},
			parse(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
				var a = str.split(/[^0-9]/);
				return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
			},

		}
	}
</script>

<style lang="scss" scoped>
</style>
