<template>
  <div class="messages">
    <div
      v-if="messages[0]"
      class="message-container"
    >
      <div> {{ messages[0] }} </div>
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
    position: absolute;
    height: 3rem;
    width: 30rem;
    top: calc(100% - 4rem);
    left: calc(100% - 31rem);

    .message-container {
      font-size: 22px;
      height: 3rem;
      background: #3bad12;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 1rem;
      border-radius: 0.5rem;

      -webkit-animation: fadeIn 0.4s;
    }

    @-webkit-keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
    }
  }

</style>