import Vue from 'vue';
import Vuex from 'vuex';
import reserves from '@/store/modules/reserves';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    reserves,
  },
});
