<template>
  <div id="vue-echarts" ref="ele"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import echarts, { ECharts, EChartOption } from "echarts";
@Component
export default class VueEchartsComponent extends Vue {
  private echartsInstance!: ECharts;
  @Prop() private ei!: ECharts;
  @Prop() private option!: EChartOption;
  @Watch("option", { deep: true })
  private optionChanged(v: EChartOption, oldV: EChartOption) {
    this.renderEcharts();
  }
  private resizeEventHandler(): void {
    this.echartsInstance.resize();
  }
  private Init() {
    if (this.option) {
      this.echartsInstance = echarts.init(this.$refs.ele as HTMLDivElement);
      this.$emit("update:ei", this.echartsInstance);
      if (window.addEventListener) {
        window.addEventListener("resize", this.resizeEventHandler, false);
      } else if (window.attachEvent) {
        const that = this;
        window.attachEvent("resize", that.resizeEventHandler);
      }
    }
  }
  private renderEcharts() {
    if (this.option && this.echartsInstance) {
      this.echartsInstance.setOption(this.option);
      this.$emit("instance", this.echartsInstance);
    }
  }
  private mounted() {
    this.Init();
    this.renderEcharts();
  }
  private destoryed() {
    this.$emit("instance", null);
    if (window.removeEventListener) {
      window.removeEventListener("resize", this.resizeEventHandler, false);
    } else if (window.detachEvent) {
      const that = this;
      window.detachEvent("resize", that.resizeEventHandler);
    }
    this.echartsInstance.dispose();
  }
}
</script>

<style scoped>
#vue-echarts {
  min-height: 100px;
  min-width: 100px;
}
</style>
