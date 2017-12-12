import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Alert from '@/components/Alert'
import Toast from '@/components/Toast'
import Native from '@/components/Native'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Alert',
      name: 'Alert',
      component: Alert
    },
    {
      path: '/Toast',
      name: 'Toast',
      component: Toast
    },
    {
      path:'/Native',
      name:'Native',
      component:Native
    }
  ]
})
