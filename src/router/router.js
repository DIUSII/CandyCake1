import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../components/mainPage/mainPage'
import doOrder from '../components/doOrderPage/doOrderPage'
import catalog from '../components/catalog/catalog'
import product from '../components/product/product'

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path:'/',
            name: 'candyCake',
            component: mainPage
        },
        {
            path: '/do-order',
            name: 'order',
            component: doOrder
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: catalog
        },
        {
            path: '/product',
            name: 'product',
            component: product
        }
    ]
});

export default router