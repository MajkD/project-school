<template>
  <div class="selection-list">
    <div class="selection-list__title"> {{ title }}</div>
    <div>
      <select ref="list">
        <option v-for="option in list"
          :selected="selected === option.text"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SelectionList',
    props: {
      title: {
        type: String,
        required: false,
        default: ''
      },
      size: {
        type: String,
        required: false,
        default: "5"
      },
      entity: {
        type: String,
        required: false,
        default: ''
      }
    },
    mounted() {
      this.$refs.list.setAttribute("size", this.size)
    },
    computed: {
      list() {
        return this.$store.state[this.entity].list
      },
      selected() {
        return this.$store.state[this.entity].selected
      }
    }
  }
</script>

<style lang="scss">
  @import '../common.scss';

  .selection-list {
    font-size: $font-size;
    margin-bottom: 1rem;

    &__title {
      padding-left: 1rem;  
    }
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