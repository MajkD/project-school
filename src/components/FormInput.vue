<template>
  <div class="form-input">
    <div class="title"> {{ title }}</div>
    <input v-if="inputType === 'input'"></input>
    <select v-if="inputType === 'select'">
      <option v-for="option in options"
        value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
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
      },
      inputType: {
        type: String,
        required: true,
      },
      options: {
        type: Array,
        required: false,
        defualt: () => []
      }
    }
  }
</script>

<style lang="scss">
  @import '../common.scss';

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
    border-radius: $border-radius;
    font-size: 20px;
    padding-left: 1rem;
  }

  select {
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    border-radius: $border-radius;
    font-size: 20px;
    padding-left: 1rem;
  }
</style>