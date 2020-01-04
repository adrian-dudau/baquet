import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import page2imbracaminte from '@/components/page2imbracaminte'
import page3accesorii from '@/components/page3accesorii'
import page4saloane from '@/components/page4saloane'
import page5cart from '@/components/page5cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/page2imbracaminte',
      name: 'page2imbracaminte',
      component: page2imbracaminte
    },
    {
      path: '/page3accesorii',
      name: 'page3accesorii',
      component: page3accesorii
    },
    {
      path: '/page4saloane',
      name: 'page4saloane',
      component: page4saloane
    },
    {
      path: '/page5cart',
      name: 'page5cart',
      component: page5cart
    }
  ]
})
