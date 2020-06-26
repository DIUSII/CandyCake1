export default {
    state: {
        viewWindow: false
    },
    mutations: {
        openWindow(state) {
            state.viewWindow = true;
        },
        closeWindow(state){
            state.viewWindow = false;
        }
    },
    getters: {
        hideOrShowWindow(state){
            return state.viewWindow;
        }
    }
}