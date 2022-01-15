<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    'navb': Navbar
  },
};
</script>

<style lang="scss"></style>
