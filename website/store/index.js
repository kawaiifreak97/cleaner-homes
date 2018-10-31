import Vue from "vue";
import Vuex from "vuex";

import VueRouter from "vue-router"

import hero from "./modules/hero";
import howItWorks from "./modules/howItWorks"
import about from "./modules/about"
import add from "./modules/add"
import testimonials from "./modules/testimonials"
import services from "./modules/services"
import bookingForm from "./modules/bookingForm"
import header from "./modules/header"

Vue.use(Vuex);
Vue.use(VueRouter);

export const store = () => {
    return new Vuex.Store({
        state: {
        },
        modules: {
            hero,
            howItWorks,
            about,
            add,
            testimonials,
            services,
            bookingForm,
            header  
        }
    })
}

export default store