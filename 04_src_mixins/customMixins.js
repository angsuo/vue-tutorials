export const globalMix =  {
    data(){
        return {
            name: "global name",
            address: "global address",
            age: 0
        }
    },
    methods: {
        showName(){
            console.log("Called global mix")
            console.log(this.name)
        }
    }
}

export const localMix ={ 
    data() {
        return {
            name: "local name",
            address: "local address",
            age: 1
        }
    },
    methods: {
        showName(){
            console.log("Called local mix")
            console.log(this.name)
        }
    }
}