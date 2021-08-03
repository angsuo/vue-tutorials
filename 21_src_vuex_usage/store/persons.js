import { nanoid } from "nanoid"

export default {
    namespaced: true,
    state: {
        personsList: [
            {id: "001", name: "jj"}
        ]
    },
    actions: {
        addPersonToList(ctx, name){
            console.log("adding", name, "to list")
            ctx.commit("ADD",{id: nanoid(), name})
        }
    },
    mutations: {
        ADD(state, person){
            state.personsList.push(person);
        }
    },
    getters: {

    }
}