<script>
// import store JS object
import { store } from "../../store.js";
// import component search button
import SearchBox from '../SearchBox.vue';
export default {
    name: "AppHeader",
    components: {
        SearchBox
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <!-- header section  -->
    <header id="site_header" class="p-3">

        <!-- row with logo and search field -->
        <div class="row justify-content-between">

            <!-- single column with logo -->
            <div class="col-2">
                <img :src="store.cover_URL + 'w342' + store.netflix_logo" alt="" class="img-fluid p-3">
            </div>

            <!-- single column with search box and button -->
            <div class="col-4 d-flex align-items-center">
                <SearchBox />
            </div>

        </div>

    </header>

</template>

<style lang="scss" scoped>

</style>