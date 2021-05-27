<template>
  <div class="form-input">
    <div class="title"> {{ title }}</div>
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
    font-size: 20px;
    margin-bottom: 1rem;
    text-align: left;
  }

  .title {
    padding-left: 1rem;
  }

  input {
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    border-radius: 7px;
    font-size: 20px;
    padding-left: 1rem;
  }
</style>