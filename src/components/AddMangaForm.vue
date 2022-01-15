<template>
  <div class="container">
    <div class="card wrapper">
      <h3>Add Manga Form</h3>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group class="my-2" id="input-group-1" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.mangaTitle"
            type="text"
            placeholder="Enter Manga Title"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Add Manga</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import mangaApi from "../api/manga";
const token = localStorage.getItem("token");

export default {
  data() {
    return {
      form: {
        mangaTitle: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      mangaApi
        .post(
          "/mangas",
          {
            title: this.form.mangaTitle,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          this.$emit("changeRenderState", 1);
          this.onReset();
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    onReset(event) {
      event.preventDefault();
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px 10px;
  margin: 20px 0;
}
</style>
