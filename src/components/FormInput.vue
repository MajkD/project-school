<template>
  <div class="form-input">
    <div class="form-input__title"> {{ title }}</div>
    <input
      v-if="inputType === 'input'"
      :placeholder="placeholder"
      :disabled="disabled == true"
      v-model="value"
      @input="onInput"
    >
    </input>
    <select v-if="inputType === 'select'"
      @input="onSelect"
    >
      <option v-for="option in list"
        v-if="shouldShow(option)"
        :selected="selected === option.text"
        :value="option.text"
      >
        {{ itemText(option) }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'FormInput',
    props: {
      title: {
        type: String,
        required: false,
        default: ''
      },
      inputType: {
        type: String,
        required: true,
      },
      placeholder: {
        type: String,
        required: false,
        default: ''
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      },
      entity: {
        type: String,
        required: false,
        default: ''
      },
      showAll: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        value: null
      }
    },
    computed: {
      entityData() {
        return this.$store.state.appData[this.entity] 
      },
      list() {
        if(this.belongsTo) {
          const sortedList = []
          let listInternal = []
          const listBelonging = this.$store.state.appData[this.belongsTo].list
          for(const i in listBelonging) {
            const text = listBelonging[i].text
            for(const j in this.entityData.list) {
              const item = this.entityData.list[j]
              if(item[this.belongsTo] === text) {
                listInternal.push(item)
              }
            }
            sortedList.push(...this.sortAlphabetically(listInternal))
            listInternal = []
          }
          return sortedList
        }
        return this.entityData.list
      },
      selected() {
        return this.entityData.selected
      },
      belongsTo() {
        return this.entityData.belongsTo
      }
    },
    methods: {
      sortAlphabetically(listToSort) {
        return listToSort.sort((a, b) => {
          if (a.text < b.text) { return -1 }
          if (a.text > b.text) { return 1 }
          return 0
        })
      },
      itemText(option) {
        if (this.belongsTo && this.showAll) {
          return `${option.text}, ${option[this.belongsTo]}`
        }
        return option.text
      },
      shouldShow(option) {
        if(this.showAll) {
          return true
        }
        if(this.belongsTo) {
          const selectedBelonging = this.$store.state.appData[this.belongsTo].selected
          if(option[this.belongsTo] !== selectedBelonging) {
            return false
          }
        }
        return true
      },
      onInput(event) {
        this.$emit('onInput', event.target.value)
      },
      onSelect(event) {
        this.$emit('selected', {
          entity: this.entity,
          value: event.target.value
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '../common.scss';

  .form-input {
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: column;
    font-size: $font-size;
    margin-bottom: 0.1rem;
    text-align: left;

    &__title {
      padding-left: 1rem;  
    }
  }

  input {
    width: calc(100% - 1rem);
    height: 100%;
    border: 1px solid grey;
    border-radius: $border-radius;
    font-size: $font-size;
    padding: 0 0 0 1rem;
  }

  input:disabled {
    background: white;
  }

  select {
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    border-radius: $border-radius;
    font-size: $font-size;
    padding: 0 0 0 1rem;
  }
</style>