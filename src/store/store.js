import { createStore } from 'vuex'
// import { mapGetters } from 'vuex'

export const store = new createStore({
    state() {
        return {
            count: 1
        }
    },
    getters: {
        getCount() {
            return this.count
        }
    }
})
