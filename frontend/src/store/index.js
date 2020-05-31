import Vue from 'vue';
import Vuex from 'vuex';
import tasks from './modules/tasks';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tasks
  }
});

Vue.store = store;

export default store;
