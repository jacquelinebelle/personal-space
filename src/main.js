import Vue from 'vue'
import { VueMasonryPlugin } from 'vue-masonry';
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueMasonryPlugin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
