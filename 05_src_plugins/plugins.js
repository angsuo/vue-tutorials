export default {
    install(Vue){
        // hide production tip
        Vue.config.productionTip = false;

        // Global filter
        Vue.filter('mySlice',function(value){
			return value.slice(0,4)
		})
    }
}