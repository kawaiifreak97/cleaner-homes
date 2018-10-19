import Vue from "vue";
import Vuex from "vuex";
import hero from "./modules/hero";

Vue.use(Vuex);

export const store = () => {
    return new Vuex.Store({
        state: {

        },
        modules: {
            hero
        }
    })
}

export default store