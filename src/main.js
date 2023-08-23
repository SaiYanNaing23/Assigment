import Vue from 'vue'
import App from './App.vue'
import "@/assets/app.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { Autocomplete } from 'element-ui';
Vue.use(Autocomplete);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
