import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
// import store from './store';
//import axios from 'axios';
//axios.defaults.withCredentials = true
//axios.defaults.baseURL = 'https://gabbyblog.herokuapp.com/';
//Vue.config.productionTip = false

createApp(App).use(router).mount('#app')
