
<script>
// import components header and main section
import AppMain from "./components/layouts/AppMain.vue"
import AppHeader from "./components/layouts/AppHeader.vue";
// import store JS with all i need
import { store } from './store.js';
export default {
  name: "App",
  data() {
    return {
      store
    }
  },
  mounted() {
    // called function to get elements from database
    this.store.callApi(this.store.API_URL)
  },
  components: {
    AppMain,
    AppHeader
  }
}
</script>

<template>

  <!-- header section  -->
  <AppHeader />

  <!-- main section -->
  <AppMain />

</template>

<style lang="scss" scoped>

</style>