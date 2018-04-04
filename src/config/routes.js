import Vue from 'vue'
import VueRouter from 'vue-router'

//引入创建的4个组件
import Home from '../Home'
import Explorer from '../Explorer'
import Cart from '../Cart'
import Me from '../Me'
import BookDetails from '../BookDetails'
import MainComponent from '../MainComponent'

Vue.use(VueRouter)

export default  new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass:'active',
  routes:[
     {
      name:"MainWindow", path:"/", component:MainComponent,
      children:
      [
        {name:"Home", path:"home", component: Home},
        {name:"Categories", path:"categories", component: Explorer},
        {name:"ShoppingCart", path:"shopping-cart", component:Cart},
        {name:"Me", path:"me", component:Me}
      ]
    },
    {name:"BookDetails", path:"/books/:id", component:BookDetails},
  ]
})
