import { createApp } from 'vue'
import store from './store'
import router from "./router"
import App from './App.vue'
import 'animate.css'
import 'animate.css/animate.compat.css'
import './assets/css/init.css'
import './assets/css/index.css'
import './assets/css/preflight.css'


const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
