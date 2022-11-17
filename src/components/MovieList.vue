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
        <li v-for="media in store.results.results">
            {{ media.title }}
            {{ media.original_title }}
            <img :src="store.flag(media.original_language)" alt="" class="my_flag">
            {{ media.vote_average }}
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.my_flag {
    width: 20px;
    height: 10px;
}
</style>