<template>
  <div class="flex justify-center items-center">
    <div class="w-10 h-10 ">{{ x }} {{ y }}</div>
    <el-input class="w-10 h-10"></el-input>
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
let  store = useStore()
let { count } = store
console.log('[ count ] >', count)
// setTimeout(() => {
//   count = x.value
// }, 1000);
// const { count, inc, dec } = useCounter()
// console.log('[ x.value ] >', x.value)
watch(x, () => {
  // store.$patch({ count: x.value })
  store.increment(x.value)
  count = x.value
})
</script>

<style scoped>
</style>
