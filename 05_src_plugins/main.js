import Vue from "vue"
import App from "./App.vue"
// Import plugin
import plugin from "./plugins"

// Apply plugin

Vue.use(plugin)

new Vue({
    el:"#app",
    render: createElement => createElement(App)
})