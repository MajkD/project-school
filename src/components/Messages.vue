<template>
  <div class="messages">
    <div v-for="(message, index) in messages" :key="`message-${index}`">
      {{ message }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Messages',
    data() {
      return {
        messages: []
      }
    },
    mounted() {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'message') {
          this.messages.push(mutation.payload.value)
        }
      })
    }
  }
</script>

<style lang="scss">
  @import '../common.scss';

  .messages {
    border: solid 2px black;
    position: absolute;
    height: 200px;
    width: 400px;
    top: calc(100% - 210px);
    left: calc(100% - 410px);
  }

</style>