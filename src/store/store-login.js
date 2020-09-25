import { LocalStorage } from 'quasar'
import { firebaseAuth } from 'boot/firebase'

const state = {
  loggedIn: false
};

const getters = {
  loggedIn(state){
    return state.loggedIn
  }
};

const mutations = {
  setLoggedIn(state, value){
    state.loggedIn = value
  }
};

const actions = {
  loginUser({}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
        console.log(response);
        
    })
      .catch(function(error) {
        console.log(error.message);
      });
  },
  logoutUser({ commit }){
    firebaseAuth.signOut();
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        if(this.$router.currentRoute.fullPath !== '/') {
          this.$router.push('timeline').catch(err => {})
        }
      } else {
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        this.$router.replace('/').catch(err => {})
      }
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
