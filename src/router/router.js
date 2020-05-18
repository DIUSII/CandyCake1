import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../components/mainPage/mainPage'

Vue.use(Router);

let router = new Router({
    routes:[
        {
            path:'/',
            name: 'candyCake',
            component: mainPage
        }
    ]
});

export default router