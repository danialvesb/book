import Vue from 'vue';

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
    async setReserves({ commit }) {
      const { data } = await Vue.prototype.$http.get('/historical/reserves');

      const reserves = data.map((item) => ({
        user: item.group_id === 1 ? 'Aluno' : 'Professor',
        book: item.book,
        days: item.days,
        created_date: item.created_date,
      }));

      commit('SET_RESERVES', reserves);
    },
    async addReserve({ commit }, payload) {
      const formData = new FormData();
      formData.append('group_id', payload.user === 'Aluno' ? 1 : 2);
      formData.append('book', payload.book);
      formData.append('days', payload.days);
      formData.append('created_date', payload.created_date);

      const response = await Vue.prototype.$http.post('historical/reserve', formData, {
        headers: {
          'Content-Type': 'multipart/form-data; boundary=something',
        },
      });

      if (response.status === 201) {
        commit('ADD_RESERVE', payload);
      } else {
        alert(`Erro ao salvar: ${response.status}`);
      }
    },
  },
};
