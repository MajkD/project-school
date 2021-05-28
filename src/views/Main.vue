<template>
  <div class="main">
    <div class="selections-panel">
      <FormInput :title="'Lärare'" :input-type="'input'"></FormInput>
      <FormInput
        :title="'Grupp'"
        :input-type="'select'"
        :options="[
          { text: 'Åk 1', value: 1},
          { text: 'Åk 2', value: 2},
          { text: 'Åk 3', value: 3},
          { text: 'Åk 4', value: 4},
        ]"
      >
      </FormInput>
    </div>
  </div>
</template>

<script>
  import FormInput from '../components/FormInput.vue'

  export default {
    name: 'Main',
    components: {
      FormInput,
    }
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