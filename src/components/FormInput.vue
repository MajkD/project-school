<template>
  <div class="form-input">
    <div class="form-input__title"> {{ title }}</div>
    <input
      v-if="inputType === 'input'"
      :placeholder="placeholder"
      :disabled="disabled == true"
      v-model="value"
      @input="onInput"
    >
    </input>
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
      placeholder: {
        type: String,
        required: false,
        default: ''
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      },
      options: {
        type: Array,
        required: false,
        defualt: () => []
      }
    },
    data() {
      return {
        value: null
      }
    },
    methods: {
      onInput(event) {
        this.$emit('onInput', event.target.value)
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
    font-size: $font-size;
    margin-bottom: 1rem;
    text-align: left;

    &__title {
      padding-left: 1rem;  
    }
  }

  input {
    width: calc(100% - 1rem);
    height: 100%;
    border: 1px solid grey;
    border-radius: $border-radius;
    font-size: $font-size;
    padding: 0 0 0 1rem;
  }

  input:disabled {
    background: white;
  }

  select {
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    border-radius: $border-radius;
    font-size: $font-size;
    padding: 0 0 0 1rem;
  }
</style>