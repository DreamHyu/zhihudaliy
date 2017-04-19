import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        topTitle: ''    // 首页提示栏文字
    },
    mutations: {
        increment (state) {
            state.count++
        },
        setTopTitle (state, str) {
            state.topTitle = str
        }
    }
})
