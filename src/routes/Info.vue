<template>
  <div
    class="d-flex justify-content-center text-primary">
    <div
      v-show="isLoading"
      class="spinner-border"
      role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  
  <section v-if="!isLoading">
    <div class="container">
      <div class="poster">
        <img
          :src="info.Poster.slice(0, -7) + '700px.jpg'"
          alt="" />
      </div>

      <div class="discription--main">
        <h1 class="title">
          {{ info.Title }}
          <h5
            v-if="info.Rated !== 'N/A'"
            class="rated">
            <span :class="[ratedClass, info.Rated === 'R' ? 'bg-danger' : 'bg-success']">{{ info.Rated }}</span>
          </h5>
        </h1>
        <div class="discription__container">
          <p>{{ info.Year }}</p>
          <p>{{ info.Genre.replaceAll(',', ' / ') }}</p>
          <p>{{ info.Country.replaceAll(',', ' / ') }}</p>
        </div>
        <div class="plot">
          {{ info.Plot }}
        </div>
        <div class="score">
          <div class="score__container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cc/IMDb_Logo_Square.svg"
              alt="Imdb_Square_Logo" />
            <p>{{ info.imdbRating }}</p>
          </div>
          <div
            v-if="info.Ratings[1]"
            class="score__container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg"
              alt="Rotten_Tomatoes_Logo" />
            <p>{{ info.Ratings[1].Value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      done: false,
      ratedClass: 'badge rounded-pill',
    };
  },
  computed: {
    info() {
      return this.$store.state.movie.info;
    },
    isLoading() {
      return this.$store.state.movie.isLoading;
    }
  },
  created() {
    this.$store.dispatch('movie/getMovieInfo', {
      id: this.$route.params.id
    });
  }
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";

$width : 30%;
$margin-x : 4rem;

.spinner-border {
  margin: calc(100vh / 2 - 4rem) 0;
}

.container {
  display: flex;
  flex-wrap: wrap;

  .poster {
    border-radius: $border-radius-lg * 3;
    overflow: hidden;
    width: $width;
    padding-bottom: $width * 1.5;
    position: relative;
    background-size: cover;
    margin-right: $margin-x;
    box-shadow: -0.2rem 1rem 2.4rem 0.8rem transparentize($yellow-600, 0.9);
    background-color: transparentize($gray-700, 0.4);

    img {
      $width: 100%;
      width: $width;
      height: $width;
      position: absolute;
      top:0; 
      left: 0;
    }
  }

  .discription--main {
    width: calc(100% - $width - ($margin-x * 2));
    position: relative;

    .title {
      font-family: 'Oswald', sans-serif;
      font-weight: 600;
      font-size: $h1-font-size;
      color: $white;
      display: flex;

      .rated {
        margin: 0.2rem 0 0 0.8rem;
      }
    }

    .discription__container {
      display: flex;
      font-size: $line-height-sm;
      color: transparentize($primary, 0.2);
      padding: 0;

      p:not(:last-child)::after {
        content: '・';
        margin: 0 0.2rem;
      }

    }

    .plot {
      margin-bottom: 0;
      padding-right: 30%;
      
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 15; /* 라인수 */
      -webkit-box-orient: vertical;
      word-wrap:break-word; 
      line-height: 1.2em;

      @include media-breakpoint-down(xl) {
      -webkit-line-clamp: 11;
      }
    }
    
    .score {
      display: flex;
      width: calc(100% - $width - ($margin-x * 2));
      position: absolute;
      bottom: 1rem;

      .score__container {
        display: flex;
        align-items: center;
        margin-right: 3.4rem;
      }

      img {
        height: 2.5rem;
      }

      p {
        font-size: $h1-font-size;
        font-family: 'Oswald', sans-serif;
        font-weight: 600;
        margin: 0 0 0 0.8rem;
        
        &:last-child {
          letter-spacing: 0.2rem;
        }
      }
    }
  }
}

@include media-breakpoint-down(lg) {
  $width : 80%;
  .container {
    flex-direction: column;
    align-items: center;

    .poster {
      width: $width;
      margin-right: 0;
      padding-bottom: $width * 1.5;

      img {
        $width: 100%;
        width: $width;
        height: $width;
      }
    }

    .discription--main {
      width: 80%;
      margin-top: 3rem;
      font-size: $font-size-sm;

      p:not(:last-child)::after {
        margin: 0;
      }

      .plot {
        margin-bottom: 5rem;
        padding-right: 0;
      }
    }
  }
}

</style>