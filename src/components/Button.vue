<template>
  <div class="button">
    <button
      @click="onClick"
      v-bind:class="{ 'small': small }"
      :class="type === 'primary' ? 'primary' : 'secondary'"
      :disabled="disabled"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      text: {
        type: String,
        required: false,
        default: ''
      },
      small: {
        type: Boolean,
        required: false,
        default: false
      },
      type: {
        type: String,
        required: false,
        default: 'primary'
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    methods: {
      onClick() {
        this.$emit('clicked')
      }
    }
  }
</script>

<style lang="scss">
  @import '../common.scss';

  .button {
    height: 2.6rem;
  }

  button {
    width: 12rem;
    height: 100%;
    font-size: $font-size;
    background: $button-color;
    border: 1px solid grey;
    border-radius: 7px;
    cursor: pointer;

    &:hover {
      background: $button-color-hover;
    }

    &.small {
      width:  12rem;
    }

    &.secondary {
      background: $button-color-secondary;

      &:hover {
        background: $button-color-secondary-hover;
      }
    }
  }
</style>