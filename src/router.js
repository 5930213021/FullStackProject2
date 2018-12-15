import Vue from 'vue'
import Router from 'vue-router'
import Products from './views/Products.vue'
import Graph from './views/Graph.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/products',
      name: 'product',
      component: Products
    },
    {
      path: '/graph',
      name: 'graph',
      component: Graph
    }
  ]
})
