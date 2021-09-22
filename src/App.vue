<template>
  <div class="app">
    <modal />
    <router-view />
  </div>
</template>

<script>
  import store from './store'
  import Modal from './components/Modal.vue'

  export default {
    name: 'App',
    components: {
      Modal,
    },
    mounted() {
      if(store.state.loggedIn !== true) {
        this.$router.push('/login')
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