<template>
  <div class="list-wrapper">
    <div class="mt-3" v-for="manga in showMangas" :key="manga._id">
      <manga-item
        v-bind:title="manga.title"
        v-bind:id="manga._id"
        v-on:changeIdManga="changeMangaId($event)"
      />
    </div>
  </div>
</template>

<script>
import mangaApi from "../api/manga.js";
import MangaItem from "./MangaItem.vue";
const token = localStorage.getItem("token");

export default {
  props: ["keySearch", "renderCount"],
  components: {
    "manga-item": MangaItem,
  },
  data: function () {
    return {
      mangas: [],
      showMangas: [],
    };
  },
  mounted() {
    this.getMangas();
  },
  methods: {
    async getMangas() {
      const mangas = await mangaApi.get("/mangas", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      this.mangas = mangas.data;
      this.showMangas = [...this.mangas];
    },
    filterFunc: function (keywords) {
      if (keywords) {
        this.showMangas = this.mangas.filter((mangas) => {
          return mangas.title.toLowerCase().includes(keywords.toLowerCase());
        });
      } else {
        this.showMangas = [...this.mangas];
      }
    },
    changeMangaId: function (id) {
      this.$emit("changeCurrentManga", id);
    },
  },
  watch: {
    deep: true,
    immediate: true,
    keySearch: function (val, oldVal) {
      this.filterFunc(val);
    },
    renderCount: function (val, oldVal) {
      this.getMangas();
    },
  },
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  height: 80vh;
  overflow-y: auto;
  padding-bottom: 20px;
}
</style>
