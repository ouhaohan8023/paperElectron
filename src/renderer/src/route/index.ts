import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import BasicLayout from '../layouts/BasicLayout.vue'
import BlankLayout from '../layouts/BlankLayout.vue'
import WelcomePage from '../views/Page1.vue'

const hasGithubPages = true

export default createRouter({
  history: hasGithubPages ? createWebHashHistory() : createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'Home' },
      component: BasicLayout,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          meta: { title: '首页', icon: 'icon-icon-test' },
          component: WelcomePage
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          meta: { title: 'AI工具', icon: 'icon-tuijian', flat: true },
          component: BlankLayout,
          redirect: () => ({ name: 'page1' }),
          children: [
            {
              path: 'page-1',
              name: 'page1',
              meta: { title: '参考文献检测工具' },
              component: () => import('../views/admins/PageInfo.vue')
            },
            {
              path: 'page-2',
              name: 'page2',
              meta: { title: 'AI反生成检测工具' },
              component: () => import('../views/admins/PageTypography.vue')
            },
            {
              path: 'dynamic-match/:id(\\d+)',
              name: 'dynamic-match',
              // 路由 path 默认参数再 meta.params 里
              meta: { title: '动态参数页面', params: { id: 1 } },
              component: () => import('../views/admins/DynamicMatch.vue')
            }
          ]
        },
        {
          path: '/version',
          name: 'version',
          meta: { title: 'Version', icon: 'icon-antdesign' },
          component: () => import('../views/Detail.vue')
        }
      ]
    }
  ]
})
