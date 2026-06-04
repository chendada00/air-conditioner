<script setup lang="ts">
import type { AcMode } from '@air-conditioner/core'
import { useAirConditioner } from '../composables/useAirConditioner'

const emit = defineEmits<{
  command: [command: string]
}>()

const airConditioner = useAirConditioner()

function run(command: string, action: () => void) {
  emit('command', command)
  action()
}

function setMode(mode: AcMode) {
  run(mode, () => airConditioner.setMode(mode))
}
</script>

<template>
  <div class="acw-remote" role="group" aria-label="Air conditioner remote control">
    <div class="acw-remote-row">
      <button type="button" class="acw-button acw-button-cold" aria-label="cold" @click="setMode('cold')">
        Cold
      </button>
      <button type="button" class="acw-button acw-button-power" aria-label="power" @click="run('power', airConditioner.toggleStatus)">
        Power
      </button>
      <button type="button" class="acw-button acw-button-hot" aria-label="hot" @click="setMode('hot')">
        Hot
      </button>
    </div>
    <button type="button" class="acw-button acw-button-temp" aria-label="add" @click="run('increase', airConditioner.increase)">
      +
    </button>
    <button type="button" class="acw-button acw-button-temp" aria-label="reduce" @click="run('decrease', airConditioner.decrease)">
      -
    </button>
  </div>
</template>
