import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Skills from './components/Skills'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue' )
    },
    {
      path: '/work',
      name: 'work',
      component: () => import( './views/Work.vue' )
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import( './views/Contact.vue' )
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    }
  ]
})
