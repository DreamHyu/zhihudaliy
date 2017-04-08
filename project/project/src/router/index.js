import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        component: require('../components/mainpage')
    }, {
        path: '/login',
        component: require('../components/belllogin')
    }, {
        path: '/',
        component: require('../components/mainpage')
    }
    ]
})
