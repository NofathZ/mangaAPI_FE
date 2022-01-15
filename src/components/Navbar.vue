<template>
  <b-navbar type="dark" variant="dark" toggleable="lg" sticky>
    <div class="container-md">
      <router-link class="navbar-brand" to="/">
        <h1>Save Your Manga(s) Here</h1>
      </router-link>

      <b-navbar-toggle
        class="navbar-toggle-btn"
        target="nav-collapse"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
        <span class="navbar-text">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button
                class="btn btn-danger"
                >Logout</button>
            </li>
          </ul>
        </span>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  methods:{
    logout: function() {
      localStorage.removeItem('token')
      this.$router.push('/login');
    }
  }
}
</script>

