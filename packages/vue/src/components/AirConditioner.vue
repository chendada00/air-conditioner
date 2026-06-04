<script setup lang="ts">
import type { AcMode, AcState } from '@air-conditioner/core'
import { defaultAcState } from '@air-conditioner/core'
import { computed } from 'vue'
import { useOptionalAirConditioner } from '../composables/useAirConditioner'

const props = withDefaults(defineProps<{
  mode?: AcMode
  status?: boolean
  temperature?: number
  title?: string
}>(), {
  title: 'Yun AC',
})

const context = useOptionalAirConditioner()
const state = computed<AcState>(() => ({
  ...defaultAcState,
  ...context?.state.value,
  mode: props.mode ?? context?.state.value.mode ?? defaultAcState.mode,
  status: props.status ?? context?.state.value.status ?? defaultAcState.status,
  temperature: props.temperature ?? context?.state.value.temperature ?? defaultAcState.temperature,
}))
</script>

<template>
  <div class="acw-unit" :data-mode="state.mode" :data-status="state.status ? 'on' : 'off'">
    <div class="acw-shell">
      <div class="acw-badge" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div class="acw-display" aria-live="polite">
        <span class="acw-mode">{{ state.mode === 'cold' ? 'cold' : 'hot' }}</span>
        <strong>{{ state.temperature }}</strong>
        <small>°C</small>
      </div>
      <div class="acw-logo">
        {{ props.title }}
      </div>
      <span class="acw-led" :aria-label="state.status ? 'on' : 'off'" />
    </div>
    <div class="acw-wind" :aria-hidden="!state.status">
      <span />
      <span />
      <span />
    </div>
  </div>
</template>
