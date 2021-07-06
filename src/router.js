import Vue from 'vue'
import Router from 'vue-router'
import Coins from './components/Coins.vue'
import CoinDetails from './components/CoinDetails.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/coins'
    },
    {
      path: '/coins',
      name: 'customers',
      component: Coins
    },
    {
      path: '/coindetails/:id',
      name: 'coindetails',
      component: CoinDetails
    }
  ]
})
export default router
