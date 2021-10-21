<template>
  <div class="main">
    <div class="selections-column">
      <FormInput
        :title="content.teacher"
        :input-type="'input'"
        :placeholder="content.exampleTeacher"
        :disabled="true"
      >
      </FormInput>
    </div>
    <div class="selections-column selections-column__buttons">
      <Button :text="content.buttons.settings" @clicked="onSettings"></Button>
      <Button :text="content.buttons.viewStudent"></Button>
      <Button :text="content.buttons.viewStudentMatrixes"></Button>
      <Button :text="content.buttons.viewGroupMatrixes"></Button>
      <Button :text="content.buttons.printMaterial"></Button>
      <Button :text="content.buttons.logout"></Button>
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
      groupData() {
        return this.$store.state.groupData
      },
      studentData() {
        return this.$store.state.studentData
      },
      materialData() {
        return this.$store.state.materialData
      }
    },
    methods: {
      onSettings() {
        this.$router.push('/settings')
      }
    }
  }
</script>

<style lang="scss">
  html {
    font-family: arial;
  }

  .main {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .selections-column {
    width:  20rem;
    margin-right: 2rem;
    padding: 1rem;

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