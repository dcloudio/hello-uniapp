<template>
  <view class="uni-product">
    <page-head title="Pinia"></page-head>
    <text class="count">当前计数：{{ counter.count }}</text>
    <text class="doubleCount" style="margin: 20rpx 0;">计数翻倍：{{ counter.doubleCount }}</text>
    <button @click="incrementCounter">增加计数</button>
    <button @click="incrementPatchCounter">使用$patch方法增加计数</button>
    <button class="increment" @click="counter.increment">通过actions中的increment增加计数</button>
    <button class="decrement" @click="counter.decrement">通过actions中的decrement减少计数</button>
  </view>
</template>

<script>
import { useCounterStore } from '@/store/counter'
export default {
  setup() {
    const counter = useCounterStore()
    function incrementCounter() {
      counter.count++
    }
    function incrementPatchCounter() {
      // 或者使用 $patch 方法
      counter.$patch({ count: counter.count + 1 })
    }
    return {
      counter,
      incrementCounter,
      incrementPatchCounter
    }
  }
}
</script>
