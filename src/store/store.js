import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tasks: [
            'task1'
        ]

    },
    mutations:{
        addTask: (state,payload) => {
            state.tasks.push(payload);
        }
    },
    actions: {
        addTask: (context,payload) => {
            context.commit('addTask',payload);

        }

    }
})

