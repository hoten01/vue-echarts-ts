import { VueConstructor } from "vue/types/index";
import VueEchartsComponent from "./VueEcharts.vue";
const vueEchartsCompoment = {
    install(Vue: VueConstructor) {
        Vue.component('VueEcharts', VueEchartsComponent);
    }
};

export default vueEchartsCompoment;
