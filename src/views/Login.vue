<template>
  <div class="login">
    <h1> {{ content.title }}</h1>
    <FormInput :title="content.username" :input-type="'input'"></FormInput>
    <FormInput :title="content.password" :input-type="'input'"></FormInput>
    <Button :text="content.login" :small=true @clicked="onClick"></Button>
  </div>
</template>

<script>
  import FormInput from '../components/FormInput.vue'
  import Button from '../components/Button.vue'
  import content from '../content'
  import { mapActions } from 'vuex'

  export default {
    name: 'Login',
    components: {
      FormInput,
      Button,
    },
    mounted() {
      this.setLoggedIn( {value: true })
    },
    computed: {
      content() {
        return content.login
      }
    },
    methods: {
      ...mapActions(['setLoggedIn']),
      onClick() {
        this.setLoggedIn( {value: true })
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