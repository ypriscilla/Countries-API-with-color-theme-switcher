const layout = {
  state: () => ({
    theme: 0,
    themeList: ["Light", "Dark"],
  }),
  getters: {
    getTheme: (state) => {
      return state.themeList[state.theme];
    },
  },
  mutations: {
    SET_THEME(state) {
      state.theme = state.theme == 1 ? 0 : 1;
    },
  },
  actions: {
    setTheme: ({ commit }) => {
      commit("SET_THEME");
    },
  },
};

export default layout;
