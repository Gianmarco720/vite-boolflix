<script>
import { store } from '../store.js';
export default {
    name: 'MovieList',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <ul v-if="store.results">
        <li v-for="movie in store.results.results">
            {{ movie.title }}
            {{ movie.original_title }}
            <img :src="store.flag(movie.original_language)" alt="" class="my_flag">
            {{ movie.vote_average }}
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.my_flag {
    width: 20px;
    height: 10px;
}
</style>