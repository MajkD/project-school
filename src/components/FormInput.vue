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
    <select v-if="inputType === 'select'"
      @input="onSelect"
    >
      <option v-for="option in list"
        v-if="shouldShow(option)"
        :selected="selected === option.text"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

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
      entity: {
        type: String,
        required: false,
        default: ''
      }
    },
    data() {
      return {
        value: null
      }
    },
    computed: {
      list() {
        return this.$store.state.appData[this.entity].list
      },
      selected() {
        return this.$store.state.appData[this.entity].selected
      }
    },
    methods: {
      ...mapActions(['setSelected']),
      shouldShow(option) {
        const belongs = this.$store.state.appData[this.entity].belongsTo
        if(belongs) {
          const selectedBelonging = this.$store.state.appData[belongs].selected
          if(option[belongs] !== selectedBelonging) {
            return false
          }
        }
        return true
      },
      onInput(event) {
        this.$emit('onInput', event.target.value)
      },
      onSelect(event) {
        this.setSelected({
          entity: this.entity,
          value: event.target.value
        })
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
    margin-bottom: 0.1rem;
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