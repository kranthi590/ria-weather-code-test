import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
        currentCity: {},
        weather: {},
        currentDate: {},
        tabs: [{
            name:"rio-de-janeiro",
            displayName: "RIO DE JANEIRO",
            coordinates: ["-22.970722", "-43.182365"]
        },{
            name:"beijing",
            displayName: "BEIJING",
            coordinates: ["39.9042", "116.4074"]
        },{
            name:"los-angeles",
            displayName: "LOS ANGELES",
            coordinates: ["34.0549", "-118.2426"]
        }]
    },
    actions: {
        UPDATE_CURRENT_CITY({ commit }, payload) {
            commit('UPDATE_CURRENT_CITY', payload);
        },
        UPDATE_WEATHER({ commit }, payload) {
            commit('UPDATE_WEATHER', payload);
        },
        UPDATE_CURRENT_DATE({ commit }, payload) {
            commit('UPDATE_CURRENT_DATE', payload)
        },
    },
    mutations: {
        UPDATE_CURRENT_CITY(state, payload) {
            state.currentCity = payload.city;
        },
        UPDATE_WEATHER(state, payload) {
            state.weather = payload.weather;
        },
        UPDATE_CURRENT_DATE(state, payload) {
            state.currentDate = payload.date;
        }
    },
    getters: {
        currentCity(state) {
            return state.currentCity
        },
        tabs(state) {
            return state.tabs
        },
        weather(state) {
            return state.weather
        },
        currentDate(state) {
            return state.currentDate
        }
    },
})