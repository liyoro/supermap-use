import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
    meta: { title: '登录' }
  },
  {
    path: '/404',
    component: () => import('@/views//404'),
    hidden: true
  },
  {
    path: '/bigscreen',
    name: 'bigscreen',
    component: () => import('@/views/bigscreen/index.vue'),
    meta: {
      title: '大屏',
      icon: 'el-icon-s-platform'
    }
  }
]

export const asyncRoutes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    meta: { title: '管理平台' },
    children: [
      {
        path: `home`,
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'icon-dashboard'
        }
      }
    ]
  },
  {
    path: '/example1',
    component: Layout,
    redirect: '/example1/sub1',
    name: 'Example1',
    meta: {
      title: 'Example1',
      icon: 'icon-chart'
    },
    children: [
      {
        path: 'sub1',
        component: () => import('@/views/example1/sub1/index.vue'),
        name: 'sub1',
        meta: { title: 'sub1', icon: 'icon-table' }
      },
      {
        path: 'sub2',
        component: () => import('@/views/example1/sub2/index.vue'),
        name: 'sub2',
        meta: { title: 'sub2', icon: 'icon-table' }
      }
    ]
  }
]

const createRouter = () => new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
