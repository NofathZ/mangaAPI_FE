<template>
  <div>
    <nav-bar />
    <add-manga-form v-on:changeRenderState="updateRenderState($event)" />
    <div class="container d-flex">
      <div class="px-2" style="flex: 1; box-sizing: border-box">
        <h3>Manga List</h3>
        <search-bar v-on:changeKeySearch="updateKeySearch($event)" />
        <manga-list
          v-on:changeCurrentManga="updateIdCurrentManga($event)"
          v-bind:keySearch="keySearch"
          v-bind:renderCount="rerender"
        />
      </div>
      <div class="px-2" style="flex: 1; box-sizing: border-box">
        <manga-detail v-bind:idManga="idCurrentManga" />
      </div>
    </div>
  </div>
</template>

<script>
import AddMangaForm from "../components/AddMangaForm.vue";
import SearchBar from "../components/SearchBar.vue";
import MangaList from "../components/MangaList.vue";
import MangaDetail from "../components/MangaDetail.vue";
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    "search-bar": SearchBar,
    "manga-list": MangaList,
    "add-manga-form": AddMangaForm,
    "manga-detail": MangaDetail,
    "nav-bar": Navbar
  },
  data: function () {
    return {
      rerender: 0,
      keySearch: "",
      idCurrentManga: -1,
    };
  },
  methods: {
    updateKeySearch(value) {
      this.keySearch = value;
    },
    updateRenderState(value) {
      this.rerender += value;
    },
    updateIdCurrentManga(value) {
      this.idCurrentManga = value;
    },
  },
};
</script>
