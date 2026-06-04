<script setup lang="ts">
import AirConditionerWidget from '../components/AirConditionerWidget.vue'
import '../style.css'
</script>

<template>
  <main class="demo">
    <h1>便携小空调 Vue</h1>
    <AirConditionerWidget />
  </main>
</template>

<style scoped>
.demo {
  display: grid;
  min-height: 100vh;
  place-items: center;
  align-content: center;
  gap: 24px;
  margin: 0;
  padding: 24px;
}

h1 {
  margin: 0;
  font-size: 28px;
}
</style>
