<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">The form component is inside the label</view>
				<checkbox-group class="uni-list" @change="checkboxChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="item in checkboxItems" :key="item.name">
						<view>
							<checkbox :value="item.name" :checked="item.checked"></checkbox>
						</view>
						<view>{{item.value}}</view>
					</label>
				</checkbox-group>
			</view>

			<view class="uni-form-item uni-column">
				<view class="title">label identifies form components with for</view>
				<radio-group class="uni-list" @change="radioChange">
					<view class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
						<view>
							<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
						</view>
                        <label class="label-2-text" :for="item.name">
                            <text>{{item.value}}</text>
                        </label>
					</view>
				</radio-group>
			</view>

			<view class="uni-form-item uni-column">
				<view class="title">label内Check the first one if there are more than one in label</view>
				<checkbox-group class="uni-list" @change="checkboxChange">
					<label class="label-3">
						<view class="uni-list-cell uni-list-cell-pd">
							<checkbox class="checkbox-3">Option 1</checkbox>
						</view>
						<view class="uni-list-cell uni-list-cell-pd">
							<checkbox class="checkbox-3">Option 2</checkbox>
						</view>
						<view class="uni-link uni-center" style="margin-top:20rpx;">Click on the text under the label to select the first checkbox by default</view>
					</label>
				</checkbox-group>
			</view>

		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'label',
				checkboxItems: [{
						name: 'USA',
						value: 'USA'
					},
					{
						name: 'China',
						value: 'China',
						checked: 'true'
					}
				],
				radioItems: [{
						name: 'USA',
						value: 'USA'
					},
					{
						name: 'China',
						value: 'China',
						checked: 'true'
					}
				],
				hidden: false
			}
		},
		methods: {
			checkboxChange: function(e) {
				var checked = e.detail.value
				console.log(checked)

			},
			radioChange: function(e) {
				var checked = e.detail.value
				console.log(checked)
			}
		}
	}
</script>

<style>
	.uni-list-cell {
		justify-content: flex-start
	}

	.uni-list .label-3 {
		padding: 0;
	}

    .label-2-text {
        flex: 1;
    }
</style>
