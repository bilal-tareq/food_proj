import { createRouter, createWebHistory } from "vue-router";
import productlist from "@/component/product/prodlist.vue";
import proddeet from "@/component/product/proddet.vue";






const routes = createRouter({
  history: createWebHistory(),
  routes: [
      
    {path: '/', redirect: '/home'},
    {path: '/productList', component: productlist},
    {path: '/productDetails', component:proddeet},


    ]


});


export default routes;




    
