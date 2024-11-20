<template>
	<view>
		<page-head :title="title"></page-head>
		<view :data="data" :change:data="renderjs.getServiceData" class="renderjs" style="margin:40rpx;">
			{{data}}
		</view>
		<button @click="renderjs.sendRenderjsData">调用renderjs中的sendRenderjsData方法</button>
		<button @click="changeServiceData">改变data的值,renderjs层收到改变后的数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'renderjs',
				data: 'serviceData',
			};
		},
		methods: {
			changeServiceData() {
				this.data = "serviceData改变了";
			},
			getRenderData(renderjsValue) {
				console.log('renderjs返回的值-->', renderjsValue);
				this.data = renderjsValue
			}
		}
	};
</script>

<script module="renderjs" lang="renderjs">
	export default {
		data() {
			return {
				value: 'renderjsData',
				newValue: '',
				oldValue: ''
			}
		},
		methods: {
			// 监听 service 层数据变更
			getServiceData(newValue, oldValue, ownerVm, vm) {
				// console.log('data变化了newValue', newValue)
				// console.log('data变化了oldValue', oldValue)
				this.newValue = newValue
				this.oldValue = oldValue
			},
			// 调用 service 层的方法
			sendRenderjsData(event, ownerInstance) {
				// vue3-h5，ownerInstance undefined
				if(ownerInstance){
					ownerInstance.callMethod('getRenderData', this.value)
				}else{
					this.$ownerInstance.callMethod('getRenderData', this.value)
				}
			}
		}
	};
</script>
