<template>
  <div class="login" @click="onClick">
    <h1>This is the login page</h1>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    mounted() {
      this.$store.commit('setLoggedIn')
    },
    methods: {
      onClick() {
        this.$store.commit('setLoggedIn')
        this.$router.push('/')
      }
    }
  }
</script>