<script>
// import store JS object
import { store } from '../store.js'
// import single button component
import ButtonComponent from "./ButtonComponent.vue";
export default {
    name: "SearchButton",
    data() {
        return {
            store
        }
    },
    methods: {
        // function to change query and call database
        searchBar() {
            if (this.store.searchText.length > 0) {
                this.store.params.query = this.store.searchText
                this.store.callApi(this.store.API_URL)
                this.store.searchText = ''
            }
        }
    },
    components: {
        ButtonComponent
    }
}
</script>

<template>

    <!-- input searchbox bond to searchtext and with enter key event  -->
    <input type="text" v-model="store.searchText" @keyup.enter="searchBar()" class="me-3">

    <!-- mounted button component with recall for function -->
    <ButtonComponent @searchBarClick="searchBar()" />

</template>

<style lang="scss" scoped>

</style>
