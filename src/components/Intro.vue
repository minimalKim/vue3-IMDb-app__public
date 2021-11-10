<template>
  <div class="intro">
    <p><span>SEARCH</span> ALL</p>
    <p>THE MOVIES,</p>
    <p>TV SHOWS</p>
    <p>AND MORE...</p>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/main";

.intro {
  font-family: 'Oswald', sans-serif;
  font-weight: 600;
  font-size: 5rem;
  padding-bottom: 4rem;

  p {
    margin: 0;
    line-height: 5rem;
    
    span {
      color: $primary;
    }
  }
}
</style>