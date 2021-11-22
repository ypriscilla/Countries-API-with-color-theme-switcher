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
    SET_THEME(state, theme) {
      if (!theme) {
        state.theme = state.theme == 1 ? 0 : 1;
      } else {
        state.theme = theme;
      }
    },
  },
  actions: {
    setTheme: ({ commit }, theme) => {
      commit("SET_THEME", theme);
    },
  },
};

export default layout;
