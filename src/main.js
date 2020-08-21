import Vue from 'vue/dist/vue.js';
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCarousel from '@chenfengyuan/vue-carousel';



Vue.config.productionTip = false;
Vue.component('font-awesome-icon', FontAwesomeIcon);


// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VueCarousel);

new Vue({
  render: h => h(App),
}).$mount('#app');
