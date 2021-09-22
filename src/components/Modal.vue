<template>
  <div
    v-if="show"
    class="modal"
  >
    <div class="modal__overlay" @click="close"></div>
    <div class=modal__content>
      <div class="title"> {{ content.title }} </div>
      <div class="text"> {{ content.text }} </div>
    </div>
  </div>
</template>

<script>
  import store from '../store'
  import content from '../content'

  export default {
    name: 'Modal',
    computed: {
      show() {
        return store.state.modal.show
      },
      content() {
        return content.modalTypes[store.state.modal.type]
      }
    },
    methods: {
      close() {
        this.$store.commit('hideMdal')
      }
    }
  }
</script>

<style lang="scss">
@import '../common.scss';

.modal {
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  justify-content: center;
  align-content: center;

  &__overlay {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $modal-background;
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: $border-radius;
    background-color: $background-color;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px 0px;
    padding:  32px;
    margin: 0;
    z-index:  1;
    overflow-y: auto;
    overscroll-behavior-y: contain;
  }
}

</style>