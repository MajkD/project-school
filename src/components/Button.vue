<template>
  <div class="button">
    <button @click="onClick">
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
  .button {
    height: 3rem;
  }

  button {
    width: 100%;
    height: 100%;
    font-weight: bold;
    font-size: 20px;
  }
</style>