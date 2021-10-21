<template>
  <div
    v-if="show"
    class="modal"
    @keyup.enter="submit"
  >
    <div class="modal__overlay" @click="close"></div>
    <div class=modal__content>
      <h3> {{ title }} </h3>
      <div class="row">
        <FormInput
          :title="content.text"
          :input-type="'input'"
          @onInput="onInput"
        />
      </div>
      <div class="row">
        <div class="actions">
          <Button
            :text="'AVBRYT'"
            :type="'secondary'"
            @clicked="close"
          >
          </Button>
          <Button
            :text="'OK'"
            :disabled="!inputModalValue"
            @clicked="submit"
          >
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import content from '../content'
  import FormInput from '../components/FormInput.vue'
  import Button from '../components/Button.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'Modal',
    components: {
      FormInput,
      Button
    },
    data() {
      return {
        inputModalValue: null
      }
    },
    computed: {
      modal() {
        return this.$store.state.common.modal
      },
      show() {
        return this.modal.visible
      },
      title() {
        return this.content.title.replace(
          '{selectedGroup}',
          this.$store.state.appData.group.selected
        )
      },
      content() {
        return content.modalTypes[this.modal.type]
      }
    },
    methods: {
      ...mapActions(['add', 'setModal']),
      close() {
        this.setModal({ visible: false })
        this.inputModalValue = null
      },
      submit() {
        if (this.content.action.type === 'add') {
          this.add({
            entity: this.content.action.entity,
            value: this.inputModalValue
          })
        }
        this.close()
      },
      onInput(value) {
        this.inputModalValue = value
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
    font-size: $font-size;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: $border-radius;
    background-color: $background-color;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 2px 0px;
    padding: 32px;
    margin: 0;
    z-index: 1;
    overflow-y: auto;
    overscroll-behavior-y: contain;
  }

  .actions {
    display: flex;

    .button:nth-child(1) {
      padding-right:  0.2rem;
    }
    .button:nth-child(2) {
      padding-left:  0.2rem;
    }
  }
}

</style>