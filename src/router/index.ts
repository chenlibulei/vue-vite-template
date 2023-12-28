import { createRouter, createWebHistory, RouteRecordRaw ,createWebHashHistory} from 'vue-router'
import routers from "./autoRoter";
console.log(routers,'routers');

const routes: Array<RouteRecordRaw> = [
    ...routers,
//   {
//     path: '/',
//     name: 'home',
//     alias: ['/home','/home2'],   // 别名，可以定义很多个
//     component: () => import('../views/Home/index.vue'),
//   },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
