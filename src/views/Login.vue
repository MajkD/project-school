<template>
  <div class="login">
    <h1>Inloggning</h1>
    <FormInput :title="'Användarnamn'" :input-type="'input'"></FormInput>
    <FormInput :title="'Lösenord'" :input-type="'input'"></FormInput>
    <Button :text="'Logga In'" :small=true @clicked="onClick"></Button>
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
    text-align: center;
    margin-top:  10rem;
  }
</style>