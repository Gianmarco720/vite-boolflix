
<script>
// import store JS object
import { store } from "../../store";
// import components with section for movies and series
import MovieList from "../MovieList.vue"
import SeriesList from "../SeriesList.vue";
export default {
    name: "AppMain",
    components: {
        SeriesList,
        MovieList
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <!-- main page container -->
    <div class="main_container">

        <!-- component movie list -->
        <MovieList />

        <!-- component series list -->
        <SeriesList />

    </div>

</template>

<style lang="scss" scoped>

</style>