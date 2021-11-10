<template>
  <div
    class="col"
    @click="$router.push({
      name:'Info',
      params: {
        id: movie.imdbID
      }
    })
    ">
    <div
      class="movie__item"
      :class="{'no-poster' : !hasPoster}">
      <transition name="fade">
        <img
          v-show="loaded"
          :src="movie.Poster"
          alt=""
          @load="onLoaded" />
      </transition>

      <div class="info">
        <div class="year">
          {{ movie.Year }}
        </div>
        <div class="title">
          {{ movie.Title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      hasPoster: this.movie.Poster !== 'N/A',
      loaded: false
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.movie.isLoading;
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.col {

  .movie__item {
    $width: 100%;
    width: $width;
    padding-bottom: $width * 1.5;
    background-size: cover;
    border-radius: 0.6rem;
    position: relative;
    background-color: transparentize($gray-700, 0.4);
    cursor: pointer;
    overflow: hidden;
    position: relative;
    

    img {
      $width: 100%;
      width: $width;
      height: $width;
      position: absolute;
      top:0; 
      left: 0;
      
      .fade-enter {
        opacity: 0;
      }
      .fade-enter-active {
        transition: opacity 3s ease-in-out;
        opacity: 1;
      }

    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      display: none;
      width: 100%;
      background-color: rgba($gray-900, 0.3);
      font-size: 1.2rem;
      padding: 1rem;
      backdrop-filter: blur(10px);

      .year {
        color: $primary;
        font-size: $font-size-sm;
      }
      
      .title {
        font-family: 'Oswald', sans-serif;
        font-weight: 600;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 0.2rem;
      }
    }

    &:hover .info {
      display: block;
    }

    &.no-poster {
      display: flex;
      justify-content: center;
      position: relative;

      &::after {
        color: transparentize($gray-500, 0.4);
        font-weight: 800;
        font-size: 2rem;
        text-align: center;
        content: 'NO\APOSTER';
        white-space:pre;
        position: absolute;
        bottom: 38%;
      }
    }
  }
  
}
</style>