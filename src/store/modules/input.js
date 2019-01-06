// import Vue from 'vue'

const state = {
    inputBoxes: {
        player: true,
        item: false,
        spell: false,
        points: false,
    }
}

const mutations = {
    showInput: (state, inputBox) => {
        // Vue.set(state.inputBoxes, inputBox, true)
        state.inputBoxes = { ...state.inputBoxes, [inputBox]: true }
    },
    hideInput: (state, inputBox) => {
        // Vue.set(state.inputBoxes, inputBox, false)
        state.inputBoxes = { ...state.inputBoxes, [inputBox]: false }
    },
}

export default {
    namespaced: true,
    state,
    mutations,
}
