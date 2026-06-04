# Web Component

Web Component 不依赖 React 或 Vue，适合普通网页、CMS 页面或跨框架嵌入。

## npm

```ts
import { defineAirConditionerElement } from '@air-conditioner/widget'

defineAirConditionerElement()
```

```html
<air-conditioner-widget storage-key="ac:state"></air-conditioner-widget>
```

## mount API

```ts
import { mountAirConditioner } from '@air-conditioner/widget'

mountAirConditioner('#ac', {
  storageKey: 'ac:state',
  title: 'Yun AC',
})
```

## Events

```ts
const widget = document.querySelector('air-conditioner-widget')

widget?.addEventListener('ac-change', (event) => {
  console.log(event.detail.state)
})

widget?.addEventListener('ac-notify', (event) => {
  console.log(event.detail.notification)
})
```
