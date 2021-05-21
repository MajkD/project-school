<template>
  <div class="login">
    <h1>This is the login page</h1>
    <FormInput :title="'Namn'"></FormInput>
    <FormInput :title="'Lösenord'"></FormInput>
    <Button :text="'Logga In'" @clicked="onClick"></Button>
  </div>
</template>

<script>
  import FormInput from '../components/FormInput.vue'
  import Button from '../components/Button.vue'

  export default {
    name: 'Login',
    components: {
      FormInput,
      Button,
    },
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

<style lang="scss">
  .login {
    max-width: 20rem;
    margin: auto;
  }
</style>