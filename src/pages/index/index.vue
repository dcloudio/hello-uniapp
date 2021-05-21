<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button type="defalut" @click="dis">disconnect</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      observer1: {},
      observer2: {}
    }
  },
  onLoad() {},
  mounted() {
    this.observer1 = uni.createMediaQueryObserver(this);
      this.observer1.observe({
        minWidth: 400,
        maxHeight: 600
      }, matches => {
        console.log(555555, matches)
      })
      this.observer2 = uni.createMediaQueryObserver(this);
      this.observer2.observe({
        minWidth: 400,
        maxWidth: 600
      }, matches => {
        console.log(666666, matches)
      })
  },
  methods: {
    dis() {
      this.observer2.disconnect()
    }
  },
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
