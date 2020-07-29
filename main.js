import {
    createApp
} from 'vue'
import App from './App.vue'
import store from './store'

const app = createApp(App)
app.config.globalProperties.$adpid = "1111111111"
app.config.globalProperties.$backgroundAudioData = {
    playing: false,
    playTime: 0,
    formatedPlayTime: '00:00:00'
}
app.use(store).mount()
