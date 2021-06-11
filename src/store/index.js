import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './module/user'
import messageStore from './module/message'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        content: '公共的今天也在下雨',
        text: '也是dayu'
    },
    getters: {
        // 在getters中定义相同的的status此时会有命名冲突，
        // 在modules 》 messageStore 中定义命名空间即可---- {namespaced: true},   使用时加上命名空间，
        // ...mapGetters('messageStore', {weaterStatus: 'status'})  
        // ...mapGetters('messageStore'，['status'])
        
        // 有点类似于vuex动态注册（store.registerModule('register', register);）
        // ...mapActions('register', ['getVerifyCodeReq']),
        status(state) {
            return `公共-还在下大雨`
        }
    },
    actions: {
        commonAction(context, p) {
            console.log('Common-context', context);
            console.log('Common-p', p);
        }
    },
    modules: {
        userStore,
        messageStore
    }
})
