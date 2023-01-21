import { reactive } from "vue"
import axios from 'axios'

export const store = reactive({
    API_URL: "https://api.themoviedb.org/3/",
    cover_URL: "https://image.tmdb.org/t/p/",
    netflix_logo: "/wwemzKWzjKYJFfCeiB57q3r4Bcm.png",
    results: [],
    series: [],
    error: null,
    integerVote: null,
    params: {
        api_key: "047ca6274f89e4b26bb7a49cbb2609b4",
        query: "m"
    },
    callApi(url) {

        const newUrl = `${url}search/movie?api_key=${this.params.api_key}&query=${this.params.query}`

        const seriesUrl = `${url}search/tv?api_key=${this.params.api_key}&query=${this.params.query}`

        axios.get(newUrl)
            .then(response => {
                this.results = response.data.results

                this.results.forEach(element => {

                    const creditsUrlMovie = `${url}movie/${element.id}/credits?api_key=${this.params.api_key}`

                    axios.get(creditsUrlMovie)
                        .then(response => {

                            response.data.cast.length = 5

                            element.cast = response.data.cast

                        })
                        .catch(err => {
                            console.error(err.message);
                            this.error = err.message
                        })

                });

            })
            .catch(err => {
                console.error(err.message);
                this.error = err.message
            })

        axios.get(seriesUrl)
            .then(response => {

                this.series = response.data.results

                this.series.forEach(element => {

                    const creditsUrlSerie = `${url}movie/${element.id}/credits?api_key=${this.params.api_key}`

                    axios.get(creditsUrlSerie)
                        .then(response => {

                            response.data.cast.length = 5

                            element.cast = response.data.cast
                        })
                        .catch(err => {
                            console.error(err.message);
                            this.error = err.message
                        })

                });
            })
            .catch(err => {
                console.error(err.message);
                this.error = err.message
            })

    },
    searchText: '',
    src: '',
    checkFlag(movie) {
        if (movie.original_language === "it") {
            return "../assets/img/italian_flag.png"
        } else if (movie.original_language === "en") {
            return "../assets/img/great_britain_flag.png"
        } else if (movie.original_language === "fr") {
            return "../assets/img/france_flag.png"
        }
    },
    starsVote(vote) {

        if (vote === 0 || vote === 1 || vote === 2) {
            return 1
        } else if (vote === 3 || vote === 4 || vote === 5) {
            return 2
        } else if (vote === 6 || vote === 7) {
            return 3
        } else if (vote === 8 || vote === 9) {
            return 4
        } else if (vote === 10) {
            return 5
        }

    },
    activeIndex: 0
})