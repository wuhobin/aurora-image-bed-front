import Vue from 'vue'
import App from './App.vue'
import api from "./api";
import router from "@/router";
import store from "@/store/index";
import "@/assets/css/reset.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.prototype.$http = api;

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
