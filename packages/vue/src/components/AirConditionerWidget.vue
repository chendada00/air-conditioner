<script setup lang="ts">
import type { AcChangeEvent, AcNotification, AcState } from '@air-conditioner/core'
import { shallowRef } from 'vue'
import AirConditioner from './AirConditioner.vue'
import AirConditionerProvider from './AirConditionerProvider.vue'
import RemoteControl from './RemoteControl.vue'

defineProps<{
  initialState?: Partial<AcState>
  storageKey?: string
  storage?: Storage | null
  title?: string
}>()

const notification = shallowRef<AcNotification | undefined>()

function onNotify(value: AcNotification) {
  notification.value = value
}

function onChange(_event: AcChangeEvent) {}
</script>

<template>
  <AirConditionerProvider
    :initial-state="initialState"
    :storage-key="storageKey"
    :storage="storage"
    @notify="onNotify"
    @change="onChange"
  >
    <div class="acw-root">
      <AirConditioner :title="title" />
      <RemoteControl />
      <div v-if="notification" class="acw-notification" :data-severity="notification.severity" role="status">
        {{ notification.message }}
      </div>
    </div>
  </AirConditionerProvider>
</template>
