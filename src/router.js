import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/battle',
      name: 'battle',
      component: () => import('./views/Battle.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('./views/EditPlayer.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/three-roads',
      redirect: '/three-roads/start/0',
    },
    {
      path: '/three-roads/:story/:articleId',
      name: 'three-roads',
      component: () => import('./views/ThreeRoads.vue')
    },
    {
      path: '/conan',
      name: 'conan',
      component: () => import('./views/Conan.vue')
    },
    {
      path: '/fargal',
      name: 'fargal',
      component: () => import('./views/Fargal.vue')
    },
    {
      path: '/hagen',
      name: 'hagen',
      component: () => import('./views/Hagen.vue')
    },
  ]
})
