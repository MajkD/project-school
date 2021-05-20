<template>
  <div class="main">
    <h1>The Main page!</h1>
  </div>
</template>

<script>
  export default {
    name: 'Main',
    mounted() {
      this.$router.push('Login');
    }
  }
</script>