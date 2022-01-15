<template>
  <div>
    <b-form-input
      v-model="keySearch"
      v-on:change="changeKeyword()"
      placeholder="Find Your Manga"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      keySearch: "",
    };
  },
  methods: {
    changeKeyword() {
      this.$emit('changeKeySearch', this.keySearch)
    },
  },
  watch: {
    keySearch: function() {
      this.changeKeyword()
    }
  }
};
</script>
