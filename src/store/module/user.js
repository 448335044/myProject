export default {
    state: {
        uesr: {
            name: '老王',
            age: 23
        }
    },

    getters: {
        // status(state) {
        //     return `uuu公共-还在下大雨`
        // }
    },

    mutations: {

    },
    
    actions: {
        userAction(context, p) {
            console.log('U-context', context);
            console.log('U-p', p);
        }
    }
}