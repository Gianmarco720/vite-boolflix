<script>
// import single serie component
import SingleSerie from "./SingleSerie.vue"
// import store JS object
import { store } from '../store.js'
export default {
    name: "SeriesList",
    components: {
        SingleSerie
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <!-- section Series list -->
    <div class="section_container p-3">

        <!-- section title  -->
        <h2 class="text-white">Lista serie TV</h2>

        <!-- row with images covers and info  -->
        <div class="row flex-nowrap my_row">
            <SingleSerie v-for="serie in store.series" :serie="serie" />
        </div>

    </div>

</template>

<style lang="scss" scoped>

</style>