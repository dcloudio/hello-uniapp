<template>
  <view>
    test
  </view>
</template>

<script>
  if (!uni.xxx) {
    uni.xxx = 'abc'
  }
  const x = uni.xxx
  console.log(x)
  export default {
    data() {
      return {
        uniXxx: uni.xxx
      }
    },
    onLoad() {

    },
    methods: {

    }
  }
</script>

<style>
</style>
