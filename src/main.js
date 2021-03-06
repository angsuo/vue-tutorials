import Vue from "vue"
import App from "./App.vue"

// import Vue Router
import VueRouter from "vue-router"

import router from "./router"

Vue.config.productionTip = false

// use Router
Vue.use(VueRouter)


new Vue({
    el:"#app",
    render: createElement => createElement(App),
    router
})