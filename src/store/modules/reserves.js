export default {
  state: {
    reserves: [],
  },
  mutations: {
    SET_RESERVES(state, payload) {
      state.reserves = payload;
    },
    ADD_RESERVE(state, payload) {
      state.reserves.push(payload);
    },
  },
  getters: {
    getReserves(state) {
      return state.reserves;
    },
  },
  actions: {
    setReserves({ commit }) {
      commit('SET_RESERVES');
    },
    addReserve({ commit }, paylaod) {
      commit('ADD_RESERVE', paylaod);
    },
  },
};
