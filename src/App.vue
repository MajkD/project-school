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

  .app {
    height: 100%;
  }

  body {
    background: $background-color;
    height:  100vh;
    margin: 0;
    display: grid;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: end;
    margin-bottom: 1rem;
  }
</style>