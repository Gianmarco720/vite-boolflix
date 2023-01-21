<script>
// import store JS object
import { store } from "../store";
export default {
    name: "CastList",
    data() {
        return {
            store
        }
    },
    props: {
        castList: Object
    }
}
</script>

<template>

    <!-- single list element with cast member name -->
    <li>{{ castList.name }}</li>


</template>