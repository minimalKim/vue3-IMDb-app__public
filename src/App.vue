<template>
  <Header />
  <div class="app__inner">
    <div class="app__page">
      <div class="page__container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header';
export default {  
  components: {
    Header
  }
};
</script>

<style lang="scss">
@import "~/scss/main";

body { 
  -ms-overflow-style: none;

  .app__inner {
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    padding-top: 7rem;
  }  
}

::-webkit-scrollbar { 
  display: none; 
}

</style>


