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
		<uni-data-picker placeholder="请选择班级" popup-title="请选择所在地区" :localdata="dataTree" v-model="classes" @change="onchange" @nodeclick="onnodeclick" @popupopened="onpopupopened" @popupclosed="onpopupclosed">
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
						value: "2-0",
						children: [{
								text: "2.1班",
								value: "2-1"
							},
							{
								text: "2.2班",
								value: "2-2"
							}
						]
					},
					{
						text: "三年级",
						value: "3-0",
						disable: true
					}
				]
			}
		},
		methods: {
			onnodeclick(e) {
				console.log(e);
			},
			onpopupopened(e) {
				console.log('popupopened');
			},
			onpopupclosed(e) {
				console.log('popupclosed');
			},
			onchange(e) {}
		}
	}
</script>

<style>
	.container {
		height: 100%;
		/* #ifndef APP-NVUE */
		display: flex;
		max-width: 500px;
		padding: 0 15px;
		/* #endif */
		flex-direction: column;
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