<script>
// import store JS object
import { store } from "../store.js"
export default {
    name: "ButtonComponent",
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <!-- single button component with $emit functionality to search function to apply -->
    <button type="button" class="btn btn-primary" @click="$emit('searchBarClick')">Search</button>

</template>