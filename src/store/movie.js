export default {
  namespaced: true,
  state() {
    return {
      isLoading: false,
      isFirstLoading: false,
      searchWord: '',
      movies: [],
      page: 0,
      info: {},
      notFoundMovies: false,
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    initPage(state) {
      state.page = 1;
    },
    increasePage(state) {
      state.page++;
    },
    startFirstLoading(state) {
      state.isFirstLoading = true;
    },
    endFirstLoading(state) {
      state.isFirstLoading = false;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },
    notFoundMovies(state) {
      state.notFoundMovies = true;
    },
    foundMovies(state) {
      state.notFoundMovies = false;
    },
  },

  actions: {
    async searchMovies({ commit, state }, payload) {
      commit('startLoading');
      const { searchWord, page } = payload;
      try {
        const { Search } = await _request({ searchWord, page });
        if (Search) {
          commit('foundMovies');
          commit('assignState', {
            searchWord,
            movies:
              searchWord === state.searchWord
                ? [...state.movies, ...Search]
                : Search,
          });
        } else {
          commit('notFoundMovies');
          commit('assignState', {
            searchWord,
          });
        }
      } catch (error) {
        console.error(error);
      }
      commit('endLoading');
    },

    async getMovieInfo({ commit }, payload) {
      commit('startLoading');
      const { id } = payload;
      try {
        const info = await _request({ id });
        commit('assignState', {
          info,
        });
      } catch (error) {
        console.error(error);
      }
      commit('endLoading');
    },
  },
};

async function _request(options) {
  return await fetch('/.netlify/functions/api', {
    method: 'POST',
    body: JSON.stringify(options),
  }).then((res) => res.json());
}
