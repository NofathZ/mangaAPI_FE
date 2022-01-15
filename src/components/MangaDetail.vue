<template>
  <div class="card detail-box">
    <h3>Manga detail</h3>
    <div v-if="mangaInfo.title == null">
      <h5>Title: ...</h5>
      <h5>Canonical Title: ...</h5>
      <h6>Rating: ...</h6>
      <h6>Synopsis:</h6>
      <p>...</p>
    </div>
    <div v-else>
      <h5>Title: {{ mangaInfo.title }}</h5>
      <h5>Canonical Title: {{ mangaInfo.canonicalTitle }}</h5>
      <h6>Rating: {{ mangaInfo.averageRating }}</h6>
      <h6>Synopsis:</h6>
      <p>{{ mangaInfo.synopsis }}</p>
    </div>
  </div>
</template>

<script>
import mangaApi from "../api/manga.js";
const token = localStorage.getItem("token");

export default {
  props: ["idManga"],
  data: function () {
    return {
      mangaInfo: {
        title: null,
        canonicalTitle: null,
        averageRating: null,
        synopsis: null,
      },
    };
  },
  methods: {
    getInfoManga(id) {
      mangaApi
        .get(`/mangas/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.mangaInfo = res.data;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
  watch: {
    idManga: function (val, oldVal) {
      this.getInfoManga(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-box {
  padding: 3px 10px;
}
</style>
