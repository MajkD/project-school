<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
  import store from './store'

  export default {
    name: 'App',
    mounted() {
      if(store.state.loggedIn !== true) {
        this.$router.push('Login')
      }
    }
  }
</script>

<style lang="scss">
  @import 'common.scss';

  body {
    background: $background-color;
  }
</style>