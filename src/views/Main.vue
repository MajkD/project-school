<template>
  <div class="main">
    <div class="selections-panel">
      <div class=selections-column>
        <FormInput :title="content.teacher" :input-type="'input'"></FormInput>
        <FormInput
          :title="content.group"
          :input-type="'select'"
          :options="content.groupData"
        >
        </FormInput>
        <SelectionList
          :title="content.student"
          :size="12"
          :options="content.studentData"
        >
        </SelectionList>
      </div>
      <div class=selections-column>
        <FormInput
          :title="content.material"
          :input-type="'select'"
          :options="content.materialData"
        >
        </FormInput>
      </div>
    </div>
  </div>
</template>

<script>
  import FormInput from '../components/FormInput.vue'
  import SelectionList from '../components/SelectionList.vue'
  import content from '../content'

  export default {
    name: 'Main',
    components: {
      FormInput,
      SelectionList,
    },
    computed: {
      content() {
        return content.main
      }
    }
  }
</script>

<style lang="scss">
  .main {
    padding: 1rem;
  }

  .selections-column {
    width:  20rem;
    margin-right: 2rem;
  }
  
  .selections-panel {
    display: flex;
  }
</style>