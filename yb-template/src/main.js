import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Swipe, SwipeItem,Icon,Popup  } from 'vant';
import 'vant/lib/index.css';
Vue.use(Icon);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Popup );

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
