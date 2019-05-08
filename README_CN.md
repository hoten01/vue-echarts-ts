# vue-echarts-ts


<p>
  <a href="https://www.npmjs.org/package/vue-echarts-ts">
    <img src="https://img.shields.io/npm/v/vue-echarts-ts.svg" alt="Npm package">
  </a>
  <a>
    <img src="https://img.shields.io/badge/license-MIT-000000.svg" alt="License">
  </a>
</p>

<p align="center">
  <a  href="./README.md">
    English
  </a>
  <span> | </span>
  <a>
    中文
  </a>
</p>

> 基于Vue2.x和echarts的封装好的vue自定义组件

## 特点
- **Vue组件:** 可以直接在vue-typescript项目中引用后使用。组件已经处理好echarts的初始化和窗口重绘事件。可以通过导出的echarts实例，自由的调用echarts的各种api。
- **支持typescript:** 基于ts开发，支持编辑器的ts查询@types/echarts。

## 安装

```
npm i vue-echarts-ts
```

## 初始化

```typescript
import Vue from 'vue';
import VueEcharts from 'vue-echarts-ts';

Vue.use(VueEcharts);
```

## 简单使用

```html
<template>
  <div class="home">
    <VueEcharts :option="option" :ei.sync="ei"></VueEcharts>
    <button @click="dipatchAction()">Dispatch</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  private option = {
    series: [
      {
        type: "pie",
        data: [{ name: "猫", value: 100 }, { name: "狗", value: 180 }]
      }
    ]
  };
  private ei: any | ECharts = {};
  private dipatchAction() {
    this.ei.dispatchAction({
      type: "pieSelect",
      name: "猫"
    });
  }
}
</script>

```

## 文档

组件参数：

- option:

    Echarts配置的option属性，具体配置见 [EchartsOption](https://echarts.baidu.com/option.html#title).

- ei:

   Echarts初始化后返回的实例，可以调用各种api,见[EchartsApi](https://echarts.baidu.com/api.html#echarts).

- theme:

    Echarts初始化时传递的主题名，见 [EchartsTheme](https://echarts.baidu.com/download-theme.html).

- init-option:

    Echarts初始化时传递的配置对象，见 [EchartsInit](https://echarts.baidu.com/api.html#echarts.init)

## 证书

[MIT](http://opensource.org/licenses/MIT)

## 浏览器支持

现代浏览器和IE10+，基本全部的移动端浏览器。
