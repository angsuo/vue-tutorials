export default {
    namespaced: true,
    state: {
        sum: 0
    },
    actions: {
        incOdd(ctx, value){
            if(ctx.state.sum %2) ctx.commit("INC", value)
        },
        incWait(ctx, value){
            setTimeout(() => {
                ctx.commit("INC", value)
            }, 500);
        }
    },
    mutations: {
        INC(state, value){
            state.sum+=value
        },
        DEC(state, value){
            state.sum-=value
        }
    },
    getters: {
        bigSum(state){
            return state.sum *10;
        }
    }
}