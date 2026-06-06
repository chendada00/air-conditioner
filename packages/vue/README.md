# @air-conditioner/vue

> [云空调](https://ac.yunyoujun.cn) 的 Vue 3 组件——便携小空调，为你的夏日带去清凉！

开箱即用的空调组件：白色机身、能效标签、数码管温度显示、风特效、遥控器与音效，自动适配亮 / 暗模式。

## 安装

```bash
pnpm add @air-conditioner/vue
```

## 使用

```vue
<script setup lang="ts">
import { AirConditionerWidget } from '@air-conditioner/vue'
import '@air-conditioner/vue/style.css'
</script>

<template>
  <AirConditionerWidget storage-key="ac:state" />
</template>
```

组件依赖一组音效与数码管字体，需放到宿主项目的静态资源目录：

```bash
cp -r node_modules/@air-conditioner/vue/dist/assets public/assets
```

更多用法（Props、手动组合、暗黑模式、音效接入、组合式 API）见文档：

📖 <https://github.com/YunYouJun/air-conditioner/blob/dev/docs/guide/vue.md>

## License

[MIT](https://github.com/YunYouJun/air-conditioner/blob/dev/LICENSE)
