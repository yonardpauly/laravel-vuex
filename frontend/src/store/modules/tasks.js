const state = {
  taskList: [],
  selectedTask: {},
};

const getters = {};

const actions = {
  FETCH_TASKS({ commit }, payload) {
    return this._vm.axios.get("/tasks", {
      params: payload
    });
  },
};

const mutations = {
  SET_TASKS: (st, payload) => {
    st.taskList = payload;
  },
  ADD_TASK: (st, payload) => {
    st.taskList.push(payload);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
