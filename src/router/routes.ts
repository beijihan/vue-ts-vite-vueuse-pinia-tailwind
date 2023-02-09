const routes: Array<any> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home.vue')
  }
]
export {
  routes
}