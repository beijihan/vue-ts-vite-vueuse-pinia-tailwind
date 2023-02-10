import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  // 其他配置...
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment(count) {
      this.count = count
    }
  },
  persist: true
})