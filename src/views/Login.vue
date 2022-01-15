<template>
  <div class="container">
    <h1>Login</h1>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your Password: "
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
    <div>
      <h6 class="redirect-auth" v-on:click="redirectAuth()">Register Here</h6>
    </div>
  </div>
</template>

<script>
import mangaApi from "../api/manga";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      mangaApi
        .post(
          "/login",
          {
            email: this.form.email,
            password: this.form.email,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("token", res.data.accessToken);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    redirectAuth() {
      this.$router.push("/register");
    },
  },
};
</script>
<style lang="scss" scoped>
.redirect-auth {
  color: rgb(115, 163, 252);
  text-align: center;
  cursor: pointer;
}
</style>
