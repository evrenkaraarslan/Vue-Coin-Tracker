import Coins from './components/Coins.vue'
import CoinDetails from './components/CoinDetails.vue'
import MyCoins from './components/MyCoins.vue'
import {createRouter, createWebHistory} from 'vue-router'  


const routes = [
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
    },
    {
      path: '/mycoins',
      name: 'mycoins',
      component: MyCoins
    }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
