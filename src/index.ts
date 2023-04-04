import type { App } from "vue";
import { createPinia } from "pinia";
import { default as widget } from "./components/calendar/core-index.vue";
import { i18n } from "./assets/i18n";

// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import specific icons
import { faEye, faXmark, faChevronRight, faChevronLeft, faMagnifyingGlass, faPenNib } from '@fortawesome/free-solid-svg-icons'

// add icons to the library
library.add(faEye, faXmark, faChevronRight, faChevronLeft, faMagnifyingGlass, faPenNib)

const pinia = createPinia();

const ProCalendar = {
    install: (app: App<Element>) => {
      app.use(pinia);
      app.use(i18n);


      app.provide("$t", app.config.globalProperties.$t);
      app.provide("$i18n", app.config.globalProperties.$i18n);
      app.provide("$locale", app.config.globalProperties.$i18n.locale);

      app.component('font-awesome-icon', FontAwesomeIcon)

      // Plugin code goes here
      app.component('ProCalendar', widget);
    }
}

export { ProCalendar };
