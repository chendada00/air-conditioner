// @vitest-environment happy-dom

import { describe, expect, it } from 'vitest'
import { defineAirConditionerElement, mountAirConditioner } from '../src'

describe('@air-conditioner/widget', () => {
  it('defines and mounts a native custom element', () => {
    defineAirConditionerElement({ tagName: 'test-air-conditioner-widget' })
    document.body.innerHTML = '<div id="target"></div>'

    const element = mountAirConditioner('#target', {
      tagName: 'test-air-conditioner-widget',
      storageKey: 'test:ac',
    })

    expect(element.localName).toBe('test-air-conditioner-widget')
    expect(element.shadowRoot?.textContent).toContain('Yun AC')
  })

  it('dispatches ac-change and ac-notify events', async () => {
    defineAirConditionerElement({
      tagName: 'test-air-conditioner-contract',
      initialState: { temperature: 31 },
      storage: null,
    })
    const element = document.createElement('test-air-conditioner-contract')
    const changes: unknown[] = []
    const notifications: unknown[] = []
    element.addEventListener('ac-change', event => changes.push((event as CustomEvent).detail))
    element.addEventListener('ac-notify', event => notifications.push((event as CustomEvent).detail.notification))
    document.body.appendChild(element)

    const increment = element.shadowRoot?.querySelector<HTMLButtonElement>('[data-action="increment"]')
    increment?.click()

    expect(changes).toHaveLength(1)
    expect(notifications).toHaveLength(1)
    expect(JSON.stringify(notifications[0])).toContain('已经是最大温度啦')
  })
})
