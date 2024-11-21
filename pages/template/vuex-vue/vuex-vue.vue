<template>
  <view class="uni-product">
	<!-- #ifdef VUE2 -->
	<page-head title="vue2"></page-head>
	<!-- #endif -->
	<!-- #ifdef VUE3 -->
	<page-head title="vue3"></page-head>
	<!-- #endif -->
    <text class="username">用户名：{{username}}</text>
    <text class="sex">性别：{{sex}}</text>
    <view class="age">年龄：{{age}}</view>
    <view class="doubleAge">年龄翻倍：{{doubleAge}}</view>
    <button @click="addAge">增加1岁</button>
    <button @click="addAgeTen">增加10岁</button>
    <button @click="addAgeAction">增加20岁</button>
    <button @click="resetAge">重置</button>
  </view>
</template>
<script>
  import store from '@/store/index.js';
  import { mapState } from 'vuex'
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapState(['age']),
      username() {
        return this.$store.state.username
      },
      sex() {
        return store.state.sex
      },
      doubleAge() {
        return store.getters.doubleAge
      }
    },
    methods: {
      addAge() {
        store.commit('increment')
      },
      addAgeTen() {
        store.commit('incrementTen', {
          amount: 10
        })
      },
      addAgeAction () {
        // 以载荷形式分发
        store.dispatch('incrementAsync', {
          amount: 20
        })
      },
      resetAge(){
        store.commit('resetAge')
      }
    }
  }
</script>
