<script>
// import store JS object
import { store } from "../store.js"
// import components
import SingleStar from "./SingleStar.vue"
import SingleStarEmpty from "./SingleStarEmpty.vue"
import CastList from "./CastList.vue"
export default {
    name: "SingleMovie",
    data() {
        return {
            store
        }
    },
    props: {
        movie: Object
    },
    methods: {
        // function to get image path
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
    computed: {
        // function to generate stars and convert valutation in 1 to 5
        stars() {
            return this.store.integerVote = this.store.starsVote(parseInt(this.movie.vote_average))
        }
    },
    components: {
        SingleStar,
        SingleStarEmpty,
        CastList
    }
}
</script>
<template>
    <!-- single column with film cover and information -->
    <div class="col-4">
        <!-- container with info  -->
        <div class="info">
            <!-- movie title -->
            <h5> Titolo: <span>{{ movie.title }}</span></h5>
            <!-- movie originale title  -->
            <h5>Titolo originale: <span>{{ movie.original_title }}</span></h5>
            <!-- movie valutation in stars -->
            <h5>Voto:
                <span>
                    <SingleStar v-for="n in this.store.starsVote(parseInt(this.movie.vote_average)) " />
                    <SingleStarEmpty v-for="n in (5 - this.store.starsVote(parseInt(this.movie.vote_average)))" />
                </span>
            </h5>
            <!-- container with language flag image -->
            <div class="language_flag mb-2">
                <span class="me-2">{{ movie.original_language }}</span>
                <img :src="getImagePath(store.checkFlag(movie))" :alt="movie.original_language">
            </div>
            <!-- movie overview -->
            <p>{{ movie.overview }}</p>
            <!-- list with cast members -->
            <ul>
                <CastList v-for="cast in movie.cast" :castList="cast" />
            </ul>
        </div>
        <!-- container with movie cover  -->
        <div class="poster" v-if="movie.backdrop_path !== null">
            <img :src="store.cover_URL + 'original' + movie.backdrop_path" :alt="movie.original_title">
        </div>
        <!-- container with default image if not found -->
        <div class="poster not_found" v-else>
            <img src="../assets/img/not_available.webp" alt="">
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>