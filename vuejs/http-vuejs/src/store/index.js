import Vue from "vue";
import Vuex from "vuex";
import axios from '../axios-auth';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: nukk
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    }
  },
  actions: {
    login({ commit }, authData) {
      axios.post('/accounts:signInWithPassword?key=',
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        }
      );
    }
  }
})
