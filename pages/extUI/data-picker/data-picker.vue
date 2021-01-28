<template>
	<view class="container">
		<!-- <view class="title">
      <text>uni-data-picker</text>
    </view>
    <uni-data-picker placeholder="请选择地址" popup-title="请选择所在地区" :preload="true" :step-searh="true" self-field="code"
      parent-field="parent_code" collection="opendb-city-china" orderby="value asc" field="code as value, name as text, eq(['$type', 2]) as isleaf" @nodeclick="onnodeclick" @change="onchange">
    </uni-data-picker>

    <view class="title">
      <text>uni-data-picker 有默认值</text>
    </view>
    <uni-data-picker placeholder="请选择地址" popup-title="请选择所在地区" :preload="true" :step-searh="true" self-field="code"
      parent-field="parent_code" collection="opendb-city-china" orderby="value asc" field="code as value, name as text, eq(['$type', 2]) as isleaf"
      v-model="address">
    </uni-data-picker> -->

		<view class="title">
			<text>uni-data-picker 本地数据</text>
		</view>
		<uni-data-picker placeholder="请选择班级" popup-title="请选择所在地区" :localdata="dataTree" v-model="classes">
		</uni-data-picker>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				classes: '1-2',
				dataTree: [{
						text: "一年级",
						value: "1-0",
						children: [{
								text: "1.1班",
								value: "1-1"
							},
							{
								text: "1.2班",
								value: "1-2"
							}
						]
					},
					{
						text: "二年级",
						value: "2-0"
					},
					{
						text: "三年级",
						value: "3-0"
					}
				]
			}
		},
		methods: {
			onnodeclick(e) {
				console.log(e);
			},
			onchange(e) {}
		}
	}
</script>

<style>
	.container {
		height: 100%;
		padding: 0 15px;
		display: flex;
		flex-direction: column;
		max-width: 500px;
	}

	.title {
		font-size: 14px;
		font-weight: bold;
		margin: 20px 0 5px 0;
	}

	.data-pickerview {
		height: 400px;
		border: 1px #e5e5e5 solid;
	}
</style>