import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
      return {
        cities: [],
      }
    },
    mutations: {
      setCitiesToState(state, cities) {
        state.cities = cities;
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
      postFormToApi(){
          axios.post('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/send-form')
            .then(response => {
                console.log(response.data.success);
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
    },
  });
  
  export default store