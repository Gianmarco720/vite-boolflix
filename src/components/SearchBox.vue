<script>
import { store } from '../store.js'
export default {
    name: 'SearchBox',
    emits: ['performSearch'],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="search-box">
        <input type="search" v-model="store.config.params.query" @keyup.enter="$emit('performSearch')">
        <button @click="$emit('performSearch')">Search</button>
    </div>
</template>