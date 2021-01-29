<template>
	<view>
		<uni-table border :loading="loading" stripe :emptyText="loading?'加载中...':'暂无更多数据'" type="selection">
			<uni-tr>
				<uni-th align="center">日期</uni-th>
				<uni-th align="center">姓名</uni-th>
				<uni-th align="left">地址</uni-th>
			</uni-tr>
			<!--
			<uni-tr>
				<uni-td>2020-10-20</uni-td>
				<uni-td>Jeson</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-21</uni-td>
				<uni-td>HanMeiMei</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-22</uni-td>
				<uni-td>LiLei</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-23</uni-td>
				<uni-td>Danner</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>


			-->
		</uni-table>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false
			}
		},
		created() {
			this.loading = true
			setTimeout(() => {
				console.log('----');
				this.loading = false
			}, 2000)
		},
		methods: {}
	}
</script>

<style></style>