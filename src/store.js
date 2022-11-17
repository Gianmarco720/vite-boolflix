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
    },
    flag(language) {
        if (language === 'en') {
            return 'https://countryflagsapi.com/png/GB'
        } else if (language === 'fr') {
            return 'https://countryflagsapi.com/png/FR'
        } else if (language === 'it') {
            return 'https://countryflagsapi.com/png/IT'
        } else if (language === 'jp') {
            return 'https://countryflagsapi.com/png/JP'
        }
        else {
            return 'https://countryflagsapi.com/png/' + language
        }
    }
})