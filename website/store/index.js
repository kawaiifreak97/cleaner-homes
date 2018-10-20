import Vue from "vue";
import Vuex from "vuex";
import hero from "./modules/hero";
import howItWorks from "./modules/howItWorks"
import about from "./modules/about"
import add from "./modules/add"
import testimonials from "./modules/testimonials"

Vue.use(Vuex);

export const store = () => {
    return new Vuex.Store({
        state: {

        },
        modules: {
            hero,
            howItWorks,
            about,
            add,
            testimonials
        }
    })
}

export default store