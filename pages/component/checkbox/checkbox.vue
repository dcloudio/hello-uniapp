<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title uni-common-mt">Default Style</view>
			<view>
				<checkbox-group>
					<label>
						<checkbox value="cb1" checked="true" />Checked
					</label>
					<label>
						<checkbox value="cb" />Unchecked
					</label>
				</checkbox-group>
			</view>
			<view class="uni-title uni-common-mt">Different colors and sizes checkbox</view>
			<view>
				<checkbox-group>
					<label>
						<checkbox value="cb1" checked="true" color="#FFCC33" style="transform:scale(0.7)" />Checked
					</label>
					<label>
						<checkbox value="cb" color="#FFCC33" style="transform:scale(0.7)" />Unchecked
					</label>
				</checkbox-group>
			</view>
		</view>

		<view class="uni-padding-wrap">
			<view class="uni-title uni-common-mt">
				Recommended display style
				<text>\nUse uni-list layout</text>
			</view>
		</view>
		<view class="uni-list">
			<checkbox-group @change="checkboxChange">
				<label class="uni-list-cell uni-list-cell-pd" v-for="item in items" :key="item.value">
					<view>
						<checkbox :value="item.value" :checked="item.checked" />
					</view>
					<view>{{item.name}}</view>
				</label>
			</checkbox-group>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'Checkbox',
				items: [{
						value: 'USA',
						name: 'USA'
					},
					{
						value: 'CHN',
						name: 'China',
						checked: 'true'
					},
					{
						value: 'BRA',
						name: 'Brazil'
					},
					{
						value: 'JPN',
						name: 'Japan'
					},
					{
						value: 'ENG',
						name: 'England'
					},
					{
						value: 'FRA',
						name: 'France'
					}
				]
			}
		},
		methods: {
			checkboxChange: function (e) {
				var items = this.items,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					const item = items[i]
					if(values.indexOf(item.value) >= 0){
						this.$set(item,'checked',true)
					}else{
						this.$set(item,'checked',false)
					}
				}
			}
		}
	}
</script>

<style>
.uni-list-cell {
	justify-content: flex-start
}
</style>
