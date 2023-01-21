<script>
// import store JS object
import { store } from "../store.js"
// import necessary components
import SingleStar from "./SingleStar.vue"
import SingleStarEmpty from "./SingleStarEmpty.vue"
import CastList from "./CastList.vue"
export default {
    name: "SingleSerie",
    data() {
        return {
            store
        }
    },
    props: {
        serie: Object
    },
    methods: {
        // function to get image path
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    },
    computed: {
        // function to convert valutation in stars from 1 to 5
        stars() {
            return this.store.integerVote = this.store.starsVote(parseInt(this.serie.vote_average))
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
    <!-- single column with serie cover and info -->
    <div class="col-4">
        <!-- container with information -->
        <div class="info">
            <!-- serie title  -->
            <h5> Titolo: <span>{{ serie.original_name }}</span></h5>
            <!-- serie valutation -->
            <h5>Voto:
                <span>
                    <SingleStar v-for="n in this.store.starsVote(parseInt(this.serie.vote_average)) " />
                    <SingleStarEmpty v-for="n in (5 - this.store.starsVote(parseInt(this.serie.vote_average)))" />
                </span>
            </h5>
            <!-- container with language flag image -->
            <div class="language_flag mb-2">
                <span>{{ serie.original_language }}</span>
                <img :src="getImagePath(store.checkFlag(serie))" :alt="serie.original_language">
            </div>
            <!-- serie overview -->
            <p>{{ serie.overview }}</p>
            <!-- cast members list -->
            <ul>
                <CastList v-for="cast in serie.cast" :castList="cast" />
            </ul>
        </div>
        <!-- container with cover image -->
        <div class="poster" v-if="serie.backdrop_path !== null">
            <img :src="store.cover_URL + 'original' + serie.backdrop_path" :alt="serie.original_name">
        </div>
        <!-- container if cover image is not found -->
        <div class="poster not_found" v-else>
            <img src="../assets/img/not_available.webp" alt="">
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>