import Vue from "vue"
import Vuex from "vuex"

// import component stores
import persons from "./persons"
import addition from "./addition"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        persons, addition
    }
})