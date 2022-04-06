import { createStore } from 'vuex'
import axios from 'axios'
import router from '@/router/router';

const store = createStore({
    state() {
        return {
            cities: [],
            checkedCity: '',
            online: false,
            checkedTheme: '',
            userTheme: '',
            message: '',
        }
    },
    mutations: {
        setCitiesToState(state, cities) {
            state.cities = cities;
        },
        setCheckedCity(state, city) {
            state.checkedCity = city;
        },
        setStatus(state, status){
            state.online = status;
        },
        setCheckedTheme(state, theme) {
            state.checkedTheme = theme;
        },
        setUserTheme(state, theme){
            state.userTheme = theme;
        },
        setMessage(state, message) {
            state.message = message;
        },
    },
    actions: {
        getCitiesFromApi({ commit }) {
            axios.get('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/cities')
                .then(response => {
                    commit('setCitiesToState', response.data);
                    return response;
                })
                .catch(error => {
                    console.log(error);
                    return error;
                });
        },
        postFormToApi({commit}) {
            axios.post('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/send-form')
                .then(response => {
                    if(!response.data.success){
                        alert('Ошибка отправки заявки')
                    } else {
                        router.push('/result');
                        commit('setCheckedCity','');
                        commit('setStatus',false)
                        commit('setCheckedTheme','');
                        commit('setUserTheme','');
                        commit('setMessage','');
                    }
                    return response;
                })
                .catch(error => {
                    console.log(error);
                    return error;
                })
        }
    },
    getters: {
        Cities(state) {
            return state.cities
        },
        CheckedCity(state){
            return state.checkedCity
        },
        Status(state){
            return state.online
        },
        CheckedTheme(state){
            return state.checkedTheme
        },
        UserTheme(state){
            return state.userTheme
        },
        Message(state){
            return state.message
        }
    },
});

export default store