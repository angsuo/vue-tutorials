import Vue from "vue"
import App from "./App.vue"

import {globalMix} from "./customMixins"

Vue.config.productionTip = false

// Apply global mixins (all instances will access datas & methods)

Vue.mixin(globalMix)

new Vue({
    el:"#app",
    render: createElement => createElement(App)
})