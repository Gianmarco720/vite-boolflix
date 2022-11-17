import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
    api_key: '37d2ecab9b0d9defe2d091f304102fd2',
    base_url: 'https://api.themoviedb.org/3/search/movie',
    query: '',

    config: {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie',

        params: {
            api_key: '37d2ecab9b0d9defe2d091f304102fd2',
            query: '',
        }
    },
    results: null,
    error: false,
    callApi() {
        axios(store.config)
            .then(response => {
                console.log(response.data);
                store.results = response.data;
                store.config.params.query = '';
            })
            .catch(err => {
                console.log(err.message);
                store.error = err.message;
            });
    }
})