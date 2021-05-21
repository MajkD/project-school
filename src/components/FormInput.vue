<template>
  <div class="form-input">
    <div> {{ title }}</div>
    <input></input>
  </div>
</template>

<script>
  export default {
    name: 'FormInput',
    props: {
      title: {
        type: String,
        required: false,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
  .form-input {
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: column;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 20px;
  }
</style>