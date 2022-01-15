<template>
  <b-card v-bind:title="title" header-tag="header" footer-tag="footer">
    <b-card-text></b-card-text>
    <b-button variant="primary" v-on:click="changeMangaId(id)"
      >Show Detail</b-button
    >
  </b-card>
</template>

<script>
export default {
  props: ["title", "id"],
  methods: {
    changeMangaId: function(id) {
      this.$emit('changeIdManga', id)
    }
  }
};
</script>
