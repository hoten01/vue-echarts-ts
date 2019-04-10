<template>
  <div id="app">
    <VueEcharts v-if="loaded" :option="option" class="ec" :ei.sync="ei"></VueEcharts>
    <button @click="change()">修改</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "@/plugins/axios.ts";
import { ECharts } from "echarts";
@Component
export default class App extends Vue {
  private loaded = false;
  private option = {
    title: {
      text: "测试1"
    },
    legend: {},
    series: [
      {
        type: "pie"
      }
    ]
  } as any;
  private ei: any | ECharts = {};
  private change() {
    console.log(this.ei);
    this.ei.dispatchAction({
      type: "pieSelect",
      name: "猫"
    });
    axios.get("/data/pie2.json").then((res: any) => {
      this.option = Object.assign({}, this.option);
      this.$set(this.option.series[0], "data", res.data.data);
      this.$set(this.option.legend, "data", res.data.name);
      console.log(this.option);
    });
  }
  private mounted() {
    axios.get("/data/pie.json").then((res: any) => {
      this.option.series[0].data = res.data.data;
      this.option.legend.data = res.data.name;
      this.loaded = true;
    });
  }
}
</script>
<style>
.ec {
  width: 90vw;
  height: 80vh;
}
</style>
