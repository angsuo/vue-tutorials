import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Way 1 to import
// new Vue({
//   // 将APP组件放入容器中
//   render: h => h(App),
// }).$mount('#app')

// Way 2 to import
new Vue({
  el: "#app",
  render: h=> h(App)
})