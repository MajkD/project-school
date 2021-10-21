<template>
  <div class="settings">
    <h1> {{ content.title }}</h1>
    <div class="settings">
      <div class="row">
        <FormInput
          :title="content.group"
          :input-type="'select'"
          :entity="'group'"
          @selected="onSelected"
        >
        </FormInput>
        <Button :text="content.buttons.newGroup" @clicked="newGroupClicked"></Button>
      </div>
      <div class="row">
        <FormInput
          :title="content.student"
          :input-type="'select'"
          :entity="'student'"
        >
        </FormInput>
        <Button :text="content.buttons.newStudent" @clicked="newStudentClicked"></Button>
      </div>
      <div class="row">
        <FormInput
          :title="content.material"
          :input-type="'select'"
          :entity="'material'"
        >
        </FormInput>
        <Button :text="content.buttons.newMaterial" @clicked="newMaterialClicked"></Button>
      </div>
    </div>
    <div class="row">
      <Button :text="content.buttons.back" :small=true @clicked="onBack"></Button>
    </div>
  </div>
</template>

<script>
  import FormInput from '../components/FormInput.vue'
  import Button from '../components/Button.vue'
  import content from '../content'
  import { mapActions } from 'vuex'

  export default {
    name: 'Settings',
    components: {
      FormInput,
      Button,
    },
    computed: {
      content() {
        return content.settings
      }
    },
    methods: {
      ...mapActions(['setLoggedIn', 'setModal', 'setSelected']),
      newGroupClicked() {
        this.setModal({ visible: true, modalType: 'addNewGroup' })
      },
      newStudentClicked() {
        this.setModal({ visible: true, modalType: 'addNewStudent' })
      },
      newMaterialClicked() {
        this.setModal({ visible: true, modalType: 'addNewMaterial' })
      },
      onBack() {
        this.$router.push('/')
      },
      onSelected(payLoad) {
        this.setSelected(payLoad)
      }
    }
  }
</script>

<style lang="scss">
  .settings {
    max-width: 34rem;
    margin: auto;
    text-align: center;
    margin-top:  5rem;

    .form-input {
      margin-right: 0.5rem;
    }
  }
</style>