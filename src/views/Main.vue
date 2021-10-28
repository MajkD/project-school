<template>
  <div class="main">
    <div class="panel panel__top">
      <div class="selections-column">
        <FormInput
          :title="content.teacher"
          :input-type="'input'"
          :placeholder="content.exampleTeacher"
          :disabled="true"
        >
        </FormInput>
      </div>
      </FormInput>
      <div class="selections-column">
        <FormInput
            :title="content.material"
            :input-type="'select'"
            :entity="'material'"
          >
        </FormInput>
      </div>
    </div>
    <div class="panel panel__bottom">
      <div class="selections-column">
        <FormInput
          :title="content.student"
          :input-type="'select'"
          :entity="'student'"
          :show-all="true"
          @selected="onSelected"
        >
        </FormInput>
        <FormInput
          v-if="selectedStudent"
          :title="content.instructions"
          :input-type="'input'"
        >
        </FormInput>
      </div>
      <div class="selections-column selections-column__buttons"
        v-if="!selectedStudent"
      >
        <Button :text="content.buttons.settings" @clicked="onSettings"></Button>
        <Button :text="content.buttons.viewStudent"></Button>
        <Button :text="content.buttons.viewStudentMatrixes"></Button>
        <Button :text="content.buttons.viewGroupMatrixes"></Button>
        <Button :text="content.buttons.printMaterial"></Button>
        <Button :text="content.buttons.logout"></Button>
      </div>
    </div>
  </div>
</template>

<script>
  import FormInput from '../components/FormInput.vue'
  import Button from '../components/Button.vue'
  import content from '../content'
  import { mapActions } from 'vuex'

  export default {
    name: 'Main',
    components: {
      FormInput,
      Button,
    },
    computed: {
      content() {
        return content.main
      },
      selectedStudent() {
        return this.$store.getters.getStudentSelected
      }
    },
    methods: {
      ...mapActions(['setSelected']),
      onSettings() {
        this.$router.push('/settings')
      },
      onSelected(payLoad) {
        this.setSelected(payLoad)
      }
    }
  }
</script>

<style lang="scss">
  html {
    font-family: arial;
  }

  .main {
    height: 100%;
  }

  .panel {
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    padding: 1rem;

    &__top {
      justify-content: flex-start;
      height: 75px;
    }

    &__bottom {
      bottom: 0;
      top: 75px;

      .form-input {
        margin-bottom: 1rem;
      }
    }
  }

  .selections-column {
    width:  20rem;
    margin-right: 2rem;

    &__buttons {
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: end;

      .button {
        margin-bottom: 0.3rem;
      }
    }
  }
</style>