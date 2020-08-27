import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import JvyUI from '../packages'
import './assets/styles/jly-ui.css'

Vue.use(JvyUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
