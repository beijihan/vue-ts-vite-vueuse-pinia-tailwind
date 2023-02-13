import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  // 其他配置...
  state: () => {
    return {
      count: 0,
      isDark: false
    }
  },
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment(count) {
      this.count = count
    },
    changeDark(isDark) {
      this.isDark = isDark
    }
  },
  persist: true
})