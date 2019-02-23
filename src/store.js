import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  	state: {
		drawer: 'nav-md'
  	},
  	mutations: {
    	toggleSidebar: function (state) {
      		return state.drawer = (state.drawer == 'nav-md' ? 'nav-sm' : 'nav-md');
    	}
  	},
  	actions: {
    	toggleSidebar({ commit }) {
      		commit('toggleSidebar');
    	}
  	},
  	getters: {
    	toggling: (state) => {
      		return state.drawer;
    	}
  	}
});
