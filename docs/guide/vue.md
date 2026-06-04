# Vue

安装 Vue 适配包：

```bash
pnpm add @air-conditioner/vue
```

引入组件和样式：

```vue
<script setup lang="ts">
import { AirConditionerWidget } from '@air-conditioner/vue'
import '@air-conditioner/vue/style.css'
</script>

<template>
  <AirConditionerWidget storage-key="ac:state" />
</template>
```

手动组合：

```vue
<script setup lang="ts">
import {
  AirConditioner,
  AirConditionerProvider,
  RemoteControl,
} from '@air-conditioner/vue'
import '@air-conditioner/vue/style.css'
</script>

<template>
  <AirConditionerProvider>
    <AirConditioner />
    <RemoteControl />
  </AirConditionerProvider>
</template>
```
