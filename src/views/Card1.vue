<template>
  <div class="f-cc">{{ count }}</div>
</template>
<script setup lang="ts">
import { useStore } from '@/store'
import { storeToRefs } from 'pinia';
import { watch } from 'vue'
const store = useStore()
let { count } = storeToRefs(store) 
watch(count, () => {
})
</script>

<style scoped>
</style>
