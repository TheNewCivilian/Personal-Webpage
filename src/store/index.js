import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    detailsShown: false,
  },
  mutations: {
    TOGGLE_DETAILS(currentState, payload) {
      currentState.detailsShown = payload;
    },
  },
  actions: {
    showDetails(context) {
      context.commit('TOGGLE_DETAILS', true);
    },
    hideDetails(context) {
      context.commit('TOGGLE_DETAILS', false);
    },
  },
  getters: {
    detailsShown(currentState) {
      return currentState.detailsShown;
    },
  },
});
