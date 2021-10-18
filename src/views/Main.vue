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
          :entity="'group'"
        >
        </FormInput>
        <FormInput
          :title="content.student"
          :input-type="'select'"
          :entity="'student'"
        >
        </FormInput>
      </div>
      <div class="selections-column selections-column--middle">
        <FormInput
          :title="content.material"
          :input-type="'select'"
          :entity="'material'"
        >
        </FormInput>
        <div class="button-group">
          <Button :text="content.buttons.newGroup" @clicked="newGroupClicked"></Button>
        </div>
        <div class="button-student">
          <Button :text="content.buttons.newStudent" @clicked="newStudentClicked"></Button>
        </div>
      </div>
      <div class="selections-column">
        <div class="button-material">
          <Button :text="content.buttons.newMaterial" @clicked="newMaterialClicked"></Button>
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
      ...mapActions(['setModal']),
      newGroupClicked() {
        this.setModal({ visible: true, modalType: 'addNewGroup' })
      },
      newStudentClicked() {
        this.setModal({ visible: true, modalType: 'addNewStudent' })
      },
      newMaterialClicked() {
        this.setModal({ visible: true, modalType: 'addNewMaterial' })
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