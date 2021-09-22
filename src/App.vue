<template>
  <the-header />
  <router-view></router-view>
  <br>
  <the-footer />
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-size: 13px;
}

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
}
</style>
