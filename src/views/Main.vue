<template>
  <div class="main">
    <div class="selections-panel">
      <div class="selections-column">
        <FormInput
          :title="content.teacher"
          :input-type="'input'"
          :placeholder="content.exampleTeacher"
          :disabled="true"
        >
        </FormInput>
        <FormInput
          :title="content.group"
          :input-type="'select'"
          :options="content.groupData"
        >
        </FormInput>
        <SelectionList
          :title="content.student"
          :size="'18'"
          :options="content.studentData"
        >
        </SelectionList>
      </div>
      <div class="selections-column selections-column--middle">
        <FormInput
          :title="content.material"
          :input-type="'select'"
          :options="content.materialData"
        >
        </FormInput>
        <div class="button-group">
          <Button :text="content.buttons.newGroup" @clicked="newGroupClicked"></Button>
        </div>
        <div class="button-student">
          <Button :text="content.buttons.newStudent"></Button>
        </div>
      </div>
      <div class="selections-column">
        <div class="button-material">
          <Button :text="content.buttons.newMaterial"></Button>
        </div>
        <div class="space"></div>
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
  import SelectionList from '../components/SelectionList.vue'
  import Button from '../components/Button.vue'
  import content from '../content'

  export default {
    name: 'Main',
    components: {
      FormInput,
      SelectionList,
      Button,
    },
    computed: {
      content() {
        return content.main
      }
    },
    methods: {
      newGroupClicked() {
        this.$store.commit('showModal', { modalType: 'addNewGroup' })
      }
    }
  }
</script>

<style lang="scss">
  html {
    font-family: arial;
  }

  .main {
    padding: 1rem;
  }

  .selections-column {
    width:  20rem;
    margin-right: 2rem;

    &--middle {
      width: 32rem;
    }
  }
  
  .selections-panel {
    display: flex;
  }

  .button-group {
    margin-top:  2.4rem;
  }
  .button-student {
    margin-top:  2rem;
  }
  .button-material {
    margin-top:  1.4rem;
  }

  .space {
    height: 20rem;
  }
</style>