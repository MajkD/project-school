<template>
  <div class="main">
    <div class="selections-panel">
      <FormInput :title="'Lärare'"></FormInput>
      <FormInput :title="'Grupp'"></FormInput>
    </div>
  </div>
</template>

<script>
  import FormInput from '../components/FormInput.vue'

  export default {
    name: 'Main',
    components: {
      FormInput,
    },
  }
</script>

<style lang="scss">
  .main {
    padding: 1rem;
  }
  
  .selections-panel {
    width:  20rem;
  }
</style>