import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        topTitle: '首页'    // 首页提示栏文字
    },
    mutations: {
        setTopTitle (state, str) {
            state.topTitle = str
        }
    }
})
