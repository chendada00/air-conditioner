<script setup lang="ts">
import { computed } from 'vue'

interface DotRow {
  num: number
  size: number
  mx: number
  my: number
  color: string
}

/**
 * 一组「黑点 / 白点」文字占位，模拟能效标签上的细密文字。
 */
const dotRows: DotRow[] = [
  { num: 6, size: 4, mx: 2, my: 0, color: 'white' },
]

const detailRows: DotRow[] = [
  { num: 11, size: 2, mx: 0.8, my: 2, color: 'black' },
  { num: 9, size: 1.5, mx: 0.8, my: 2, color: 'black' },
  { num: 10, size: 1.2, mx: 0.8, my: 0, color: 'black' },
]

const footerRow: DotRow = { num: 8, size: 2, mx: 0.8, my: 0, color: 'white' }

function dots(num: number) {
  return Array.from({ length: num }, (_, i) => i)
}

/**
 * 能效条（绿→红渐变等级）
 */
const levels = computed(() => [
  { background: 'lightgreen', width: '50%' },
  { background: '#ffc107', width: '60%' },
  { background: 'orange', width: '70%' },
  { background: 'red', width: '80%' },
])
</script>

<template>
  <div class="acw-energy-label">
    <!-- 顶部白点 -->
    <div
      v-for="(row, ri) in dotRows"
      :key="`top-${ri}`"
      class="acw-dot-row"
      :style="{ '--acw-dot-color': row.color }"
    >
      <span
        v-for="n in dots(row.num)"
        :key="n"
        class="acw-dot"
        :style="{ width: `${row.size}px`, height: `${row.size}px`, margin: `${row.my}px ${row.mx}px` }"
      />
    </div>

    <!-- 能效等级区 -->
    <div class="acw-energy-grades">
      <div class="acw-energy-arrow">
        <div class="acw-arrow-bar" />
        <div class="acw-arrow-tip" />
        <div class="acw-arrow-bar acw-arrow-bar-sm" />
      </div>
      <div
        v-for="(lv, i) in levels"
        :key="i"
        class="acw-energy-level"
        :style="{ backgroundColor: lv.background, width: lv.width }"
      />
    </div>

    <!-- 文字明细区 -->
    <div class="acw-energy-detail">
      <div
        v-for="(row, ri) in detailRows"
        :key="`detail-${ri}`"
        class="acw-dot-row"
        :style="{ '--acw-dot-color': row.color }"
      >
        <span
          v-for="n in dots(row.num)"
          :key="n"
          class="acw-dot"
          :style="{ width: `${row.size}px`, height: `${row.size}px`, margin: `${row.my}px ${row.mx}px` }"
        />
        <div v-if="ri === 0" class="acw-energy-detail-line" />
      </div>
    </div>

    <!-- 底部白点 -->
    <div class="acw-dot-row" :style="{ '--acw-dot-color': footerRow.color }">
      <span
        v-for="n in dots(footerRow.num)"
        :key="n"
        class="acw-dot"
        :style="{ width: `${footerRow.size}px`, height: `${footerRow.size}px`, margin: `${footerRow.my}px ${footerRow.mx}px` }"
      />
    </div>
  </div>
</template>
