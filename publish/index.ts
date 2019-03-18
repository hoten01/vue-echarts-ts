import { VueConstructor, PluginObject } from "vue/types/index";
import VueEchartsComponent from "./VueEcharts.vue";

const vueEchartsCompoment = {
    install(Vue: VueConstructor) {
        Vue.component('VueEcharts', VueEchartsComponent);
    }
} as PluginObject<any>;

export default vueEchartsCompoment;
