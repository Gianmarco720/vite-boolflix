import { createApp } from 'vue'
import '../src/assets/scss/style.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

/*import complete bootstap */
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

/* add icons to the library */
library.add(fas)
library.add(far)

createApp(App)
    .use(bootstrap)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')