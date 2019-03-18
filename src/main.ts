import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import VueEchartsComponent from "@/components/vue-echarts/VueEcharts.vue";
Vue.component('VueEcharts', VueEchartsComponent);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
