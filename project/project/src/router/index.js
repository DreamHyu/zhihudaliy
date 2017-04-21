import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        component: require('../components/main_page')
    }, {
        path: '/login',
        component: require('../components/bell_login')
    }, {
        path: '/',
        component: require('../components/main_page')
    }, {
        path: '/detail/:id',
        name: 'detail',
        component: require('../components/details')
    }, {
        path: '/themes/:theme',
        name: 'theme',
        component: require('../components/theme')
    }
    ]
})
