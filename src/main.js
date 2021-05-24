// import Vue from 'vue'
// import App from './App'

// import store from './store'

// Vue.config.productionTip = false

// Vue.prototype.$store = store
// Vue.prototype.$backgroundAudioData = {
//   playing: false,
//   playTime: 0,
//   formatedPlayTime: '00:00:00'
// }
// Vue.prototype.$adpid = "1111111111"

// App.mpType = 'app'

// const app = new Vue({
//   store,
//   ...App
// })
// app.$mount()


import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
const app = createApp(App,{})
app.use(store)
app.mount('#app')


