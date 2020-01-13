import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css';
Vue.use(Swipe).use(SwipeItem);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
