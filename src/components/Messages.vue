<template>
  <div class="messages">
    <div
      v-if="messages[0]"
    >
      {{ messages[0] }}
    </div>
    <div v-for="(message, index) in messages" :key="`message-${index}`">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Messages',
    data() {
      return {
        timer: null,
        messages: []
      }
    },
    mounted() {
      this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'message') {
          this.messages.push(mutation.payload.value)
          this.resetTimer()
        }
      })
    },
    methods: {
      updateMessages() {
        this.messages.shift()
        this.resetTimer()
      },
      resetTimer() {
        clearTimeout(this.timer)
        this.timer = setTimeout(this.updateMessages, 2000)
      }
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