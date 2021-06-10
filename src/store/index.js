import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './module/user'
import messageStore from './module/message'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        namespaced: true, // 为了解决不同模块命名冲突的问题
        userStore,
        messageStore
    }
})
