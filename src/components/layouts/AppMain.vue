<script>
import { store } from '../../store.js'
import MovieList from '../MovieList.vue';
export default {
    name: "AppMain",
    components: {
        MovieList
    },
    data() {
        return {
            store
        };
    },
}
</script>

<template>
    <main>
        <MovieList />
    </main>
</template>

<style lang="scss" scoped>

</style>