<template>
  <form
    class="d-flex" 
    @submit.prevent="onSubmit">
    <input
      ref="input"
      type="search"
      class="form-control me-2"
      placeholder="Search IMDb"
      aria-label="Search"
      aria-describedby="button-addon2" />
    <button
      id="button-addon2"
      class="btn btn-primary"
      type="submit">
      <span class="material-icons">search</span>
    </button>
  </form>
</template>

<script>
export default {
  methods: {
    async onSubmit() {
      const searchWord = this.$refs.input.value;
      this.$store.commit('movie/startFirstLoading');
      this.$store.commit('movie/initPage');
      await this.$store.dispatch('movie/searchMovies', {
        searchWord,
        page: this.$store.state.movie.page
      });

      if (this.$router.currentRoute.value.fullPath !== '/') {
        this.$router.push({
         name:'Movie',
       });
      }
      this.$store.commit('movie/endFirstLoading');
    }
  },
};
</script>

<style lang="scss" scoped>
form {
  input {
    padding: 0.5rem;
  }

  button {
    span {
      display: block;
    }
  }
}
</style>