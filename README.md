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
  <a>
    English
  </a>
  <span> | </span>
  <a href="./README_CN.md">
    中文
  </a>
</p>

> Vue custom component based on Vue2.x and Echarts with typescript

## Features
- **Vue echarts component:** Can directly be used in vue-typescirpt project as a custom component.Has already completed echarts instance initiation and handled window resizing.Can operate echarts instance to dispatch actions and other.
- **Typescript supported:** Developed and exported with typescript.Support @types/echarts definitions.

## Install

```
npm i vue-echarts-ts
```

## Init

```typescript
import Vue from 'vue';
import VueEcharts from 'vue-echarts-ts';

Vue.use(VueEcharts);
```

## SimpleUse

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
        data: [{ name: "cat", value: 100 }, { name: "dog", value: 180 }]
      }
    ]
  };
  private ei: any | ECharts = {};
  private dipatchAction() {
    this.ei.dispatchAction({
      type: "pieSelect",
      name: "cat"
    });
  }
}
</script>

```

## Document

Props:

- option:

    echartsOption,see [EchartsOption](https://echarts.baidu.com/option.html#title).

- ei:

    echartsInstance,see [EchartsApi](https://echarts.baidu.com/api.html#echarts).

- theme:

    theme used for echarts init,see [EchartsTheme](https://echarts.baidu.com/download-theme.html).

- init-option:

    object used for echarts init,see [EchartsInit](https://echarts.baidu.com/api.html#echarts.init)

## License

[MIT](http://opensource.org/licenses/MIT)

## Support

Modern browsers and Internet Explorer 10+, include pc and mobile browser.
