import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tasks: [
            'task1',
        ]

    },
    mutations:{
        addTask: (state,payload) => {
            state.tasks.push(payload);
        },
        removeTask : (state,payload) => {
            const todoIndex = state.tasks.indexOf(payload);
            state.tasks.splice(todoIndex, 1);
        }
    },
    actions: {
        addTask: (context,payload) => {
            context.commit('addTask',payload);

        },
        removeTask: (context,payload) => {
            context.commit('removeTask',payload);
        }

    }
})

