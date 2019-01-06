const state = {
    result: 0,
    showResult: false,
    showRollBox: false,
}

const mutations = {
    setResult(state, value) {
        state.result = value
        state.showResult = true
    },
    showResult(state) { state.showResult = true },
    hideResult(state) { state.showResult = false },
    showRollBox(state) { state.showRollBox = true },
    hideRollBox(state) { state.showRollBox = false },
}

export default {
    namespaced: true,
    state,
    mutations,
}
