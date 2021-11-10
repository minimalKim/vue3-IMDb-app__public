<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <a
          class="navbar-brand"
          href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            alt="" />
        </a>
        <Search />
      </div>
    </nav>
  </header>
</template>

<script>
import Search from '~/components/Search';
export default {
  components: {
    Search,
  }
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  font-family: 'Roboto', sans-serif;
  
  .navbar {
    background-color: $indigo-900;
    box-sizing: border-box;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 1rem 0;

    img {
      height: 2.6rem;
    }
    
    .d-flex {
      flex-grow: 1;
      margin:0 10rem;
    }
  }
}

@include media-breakpoint-down(lg) {
  header {
    .navbar {
      .d-flex {
        margin:0 1rem;
      }
    }
  }
}
</style>