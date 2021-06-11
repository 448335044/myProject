export default {
    namespaced: true, // 会生成带命名空间的module， 为了解决不同模块命名冲突的问题，使用时加上空间名（模块名）就调用此模块的对应的动作
    
    state: {
        content: '今天在下雨',
        text: 'dayu'
    },

    getters: {
        status(state) {
            return `${state.text}停了`
        }
    },

    mutations: {
        saveWeater(state, p) {
            console.log('state', state);
            console.log('p', p);
            state.content = p
        }
    },
    
    actions: {
        mesAction({state, commit, dispatch}, p) {
            // console.log('M-context', context);
            console.log('M-p', p);
            dispatch('changeWeater' ,'雨停了，天晴了，人的心情也好多了')
        },
        changeWeater({state, commit, dispatch}, p) {
            console.log('触发了dispatch', p);
            commit('saveWeater', p)
        }
    }
}