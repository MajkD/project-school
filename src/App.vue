<template>
  <div class="app">
    <modal />
    <messages />
    <router-view />
  </div>
</template>

<script>
  import store from './store'
  import Modal from './components/Modal.vue'
  import Messages from './components/Messages.vue'

  export default {
    name: 'App',
    components: {
      Modal,
      Messages,
    },
    mounted() {
      if(store.common.loggedIn !== true) {
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