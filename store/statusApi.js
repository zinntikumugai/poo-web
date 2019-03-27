import { get } from "https";

export const state = () => {
    datas: {
        payment: null
        status: null
    }
}

export const mutations = {
    async get({ commit }) {
        datas.payment = await this.$axios.$get("https://mining.zinntikumugai.xyz/api/payments")
        datas.status = await  this.$axios.$get("https://mining.zinntikumugai.xyz/api/stats")
        commit()
    }
}

export const actions = {
    getdata(state) {
        return state.datas
    }
}