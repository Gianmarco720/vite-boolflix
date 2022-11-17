<script>
import { store } from './store.js'
import axios from 'axios'
import SearchBox from './components/SearchBox.vue'
import AppMain from './components/layouts/AppMain.vue'
import AppHeader from './components/layouts/AppHeader.vue'
export default {
  name: "App",
  components: {
    SearchBox,
    AppMain,
    AppHeader
  },
  data() {
    return {
      store
    };
  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped>

</style>
