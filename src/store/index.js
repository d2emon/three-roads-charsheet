import Vue from 'vue'
import Vuex from 'vuex'
import dice from '../dice'
import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state: {
    playerName: '', // FName
    attrib: {},
    items: [], // FItems
    spells: [], // FSpells
    points: [],
    money: 0, // FMoney
    time: 0,
  },
  getters: {
    getAttribCount: () => 0,
  },
  mutations: {
    createPlayer: (state, { name }) => {
      state.playerName = name;
      state.items = [];
      state.spells = [];
      state.attrib = {};
    },

    setPointsCount: (state, value) => {},
    setPoint: (state, { index, value }) => {},

    resetTime: state => { state.time = 0 },
    modifyTime: (state, value) => {
      const newValue = state.time + value
      state.time = (newValue > 0) ? newValue : 0
    },

    createAttrib: (state, { index, value }) => {
      Vue.set(
        state.attrib,
        index,
        {
          current: value,
          max: value,
        }
      );
    },
    setAttrib: (state, { index, value }) => {
      if (!state.attrib[index]) return;
      Vue.set(
        state.attrib[index],
        'current',
        value
      );
    },
    setAttribMax: (state, { index, value }) => {
      if (!state.attrib[index]) return;
      Vue.set(
        state.attrib[index],
        'max',
        value
      );
    },
    modifyAttrib: (state, { index, value }) => {
      const old = state.attrib[index].current || 0
      let temp = old + value
      if (temp < 0) temp = 0
      if (temp > state.attrib[index].max) temp = state.attrib[index].max;
      Vue.set(state.attrib[index], 'current', temp)
    },

    resetItems: state => { state.items = [] },
    addItem: (state, item) => state.items.push(item),
    deleteItem: (state, index) => state.items.splice(index, 1),

    resetSpells: state => { state.spells = [] },
    addSpell: (state, spell) => state.spells.push(spell),
    deleteSpell: (state, index) => state.spells.splice(index, 1),

    resetPoints: state => state.points.forEach((point, index) => Vue.set(state.points, index, false)),
    clearPoints: state => { state.points = [] },
    addPoints: (state, count) => {
      for(let i = 0; i < count; i++) {
        state.points.push(false)
      }
    },
    deletePoint: state => state.points.pop(),
  },
  actions: {
    createPlayer: ({ commit, dispatch }, { name }) => {
      commit('createPlayer', { name })
      dispatch('reset')
      dispatch('generate')
    },
    generate: ({ commit }) => {
      commit('createAttrib', { index: 0, value: dice(1, 6) + 6 });
      commit('createAttrib', { index: 1, value: dice(2, 6) + 12 });
      commit('createAttrib', { index: 2, value: dice(1, 6) + 6 });
    },
    reset: ({ commit }) => {
      commit('resetTime');
      commit('resetItems');
      commit('resetSpells');
      commit('resetPoints');
    },
    testAttrib: ({ state }, index) => {
      const roll = (index == 1)
        ? dice(4, 6)
        : dice(2, 6)
      return state.attrib[index].current >= roll
    },
  }
})
