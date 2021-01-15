import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    name: 'Allproducts',
    component: () => import(/* webpackChunkName: "Allproducts" */ '../views/Allproducts.vue')
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import(/* webpackChunkName: "Details" */ '../views/Details.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart.vue')
  },
  {
    path: '/offers',
    name: 'Offers',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Offers.vue')
  },
  {
    path: '/populars',
    name: 'Populars',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Populars.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
