# React

安装 React 适配包：

```bash
pnpm add @air-conditioner/react
```

引入组件和样式：

```tsx
import { AirConditionerWidget } from '@air-conditioner/react'
import '@air-conditioner/react/style.css'

export function App() {
  return <AirConditionerWidget storageKey="ac:state" />
}
```

也可以手动组合 Provider、空调和遥控器：

```tsx
import {
  AirConditioner,
  AirConditionerProvider,
  RemoteControl,
} from '@air-conditioner/react'
import '@air-conditioner/react/style.css'

export function App() {
  return (
    <AirConditionerProvider>
      <AirConditioner />
      <RemoteControl />
    </AirConditionerProvider>
  )
}
```
