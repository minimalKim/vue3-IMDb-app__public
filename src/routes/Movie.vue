<template>
  <section class="movie__container container">
    <Intro />
    <NotFoundMovies
      v-if="$store.state.movie.notFoundMovies && !isLoading"
      :search-word="$store.state.movie.searchWord" />

    <div
      v-if="!$store.state.movie.notFoundMovies && !isFistLoading"
      class="movie__wrapper row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
      <MovieItem
        v-for="movie in movies"
        :key="movie.imdbID" 
        :movie="movie" />
    </div>

    <div class="loader">
      <div
        class="d-flex justify-content-center text-primary">
        <div
          v-show="isLoading"
          class="spinner-border"
          role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <Trigger
        v-if="!$store.state.movie.notFoundMovies"
        @triggerIntersected="loadMore" />
    </div>
  </section>
</template>

<script>
import NotFoundMovies from '~/components/NotFoundMovies';
import MovieItem from '~/components/MovieItem';
import Trigger from '~/components/Trigger';
import Intro from '~/components/Intro';

export default {
  components: {
    NotFoundMovies,
    MovieItem,
    Trigger,
    Intro,
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies;
    },
    isLoading() {
      return this.$store.state.movie.isLoading;
    },
    isFistLoading() {
      return this.$store.state.movie.isFistLoading;
    }
  },
  methods: {
    async loadMore() {
      this.$store.commit('movie/increasePage');
    } 
  }
};
</script>

<style lang="scss">
.movie__container {
  width: 100%;
  
  .row {
    --bs-gutter-y: 1.5rem;
  }
    .loader {
      margin: 4rem 0;
    }
}
</style>