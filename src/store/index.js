import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const actions = {
    incOdd(ctx, val){
        if(ctx.state.sum%2) ctx.commit("INC", val)
    },
    incWait(ctx, val){
        setTimeout(() => {
            console.log("now I'm increasing the sum by:", val);
            ctx.commit("INC", val)
        }, 500);
    }
}

const mutations = {
    INC(state, val){
        // console.log("Incrementing the current sum:", state.sum, "by", val)
        state.sum += val;
    },
    DEC(state, val){
        state.sum-=val;
    }
}

const state = {
    sum:0,
    fName:"Jjj",
    lName: "JJJ"
}

// getters ~= computed for store
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

export default new Vuex.Store({actions, mutations, state, getters})