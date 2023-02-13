<template>
  <div class="text-black bg-white dark:text-white dark:bg-gray-800">
    <div class="w-10 h-10 f-cc dark:bg-gray-800">{{ x }} {{ y }}</div>
    <el-input class="w-[200px] h-20"></el-input>
    <el-button @click="isActive = !isActive" type="primary" class="w-20 h-10 text-[#fff] dark:bg-gray-800">变化长短</el-button>
    <br />
    <div>{{ count }}</div>
    <el-button :class="[isActive ? 'w-[200px]' : 'w-[300px]']" :type="isActive ? 'primary' : 'warning'">长短</el-button>
    <Card></Card>
    <el-button @click="toogleDark">切换主题</el-button>
  </div>
</template>
<script setup lang="ts">
import { watch, ref } from 'vue'
import { useMouse } from '@vueuse/core'
import { useStore } from '@/store'
import Card from './Card1.vue'
const { x, y } = useMouse()
let store = useStore()
let { count, isDark } = store
// setTimeout(() => {
//   count = x.value
// }, 1000);
// const { count, inc, dec } = useCounter()
watch(x, () => {
  // store.$patch({ count: x.value })
  store.increment(x.value)
  count = x.value
})
// const dark = ref(false)
function initTheme(isDark) {
  changeTheme(isDark)
}
initTheme(isDark)
function toogleDark() {
  isDark = !isDark
  changeTheme(isDark)
  store.changeDark(isDark)
}
function changeTheme(isDark) {
  if (isDark) {
    console.log('[ isDark ] >', isDark)
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}
let isActive = ref(false)

</script>
