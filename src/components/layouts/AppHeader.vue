<script>
import { store } from '../../store';
import SearchBox from '../SearchBox.vue';
export default {
    name: 'AppHeader',
    components: {
        SearchBox
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="logo">
            Logo
        </div>

        <SearchBox @performSearch="store.callApi" />
    </header>
</template>