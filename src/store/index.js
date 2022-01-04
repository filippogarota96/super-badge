import { createStore } from 'vuex';

const store = createStore({
    state () {
      return {
        avatar: '',
      }
    },
    getters: {
        getImage(state) {
            return state.avatar 
        }
    },
    mutations: {
      selectImage (state, payload) {
        state.avatar = payload;
      }
    }
  })


export default store;