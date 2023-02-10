<template>
  <div  class="f-cc text-black">
    <div class="w-10 h-10">{{ x }} {{ y }}</div>
    <el-input class="w-20 h-20"></el-input>
    <el-button type="primary" class="w-10 h-10">sadfasdf</el-button>
    <div>{{ count }}</div>
    <Card></Card>
  </div>
</template>
<script setup lang="ts">
import { watch } from 'vue'
import { useMouse } from '@vueuse/core'
import { useStore } from '@/store'
import Card from './Card1.vue'
const { x, y } = useMouse()
let store = useStore()
let { count } = store
// setTimeout(() => {
//   count = x.value
// }, 1000);
// const { count, inc, dec } = useCounter()
watch(x, () => {
  // store.$patch({ count: x.value })
  store.increment(x.value)
  count = x.value
})
</script>

<style scoped>
</style>
