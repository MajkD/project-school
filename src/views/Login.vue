<template>
  <div class="login" @click="onClick">
    <h1>This is the login page</h1>
    <FormInput :title="'Namn'"></FormInput>
    <FormInput :title="'Lösenord'"></FormInput>
  </div>
</template>

<script>
  import FormInput from '../components/FormInput.vue'

  export default {
    name: 'Login',
    components: {
      FormInput,
    },
    mounted() {
      this.$store.commit('setLoggedIn')
    },
    methods: {
      onClick() {
        // this.$store.commit('setLoggedIn')
        // this.$router.push('/')
      }
    }
  }
</script>