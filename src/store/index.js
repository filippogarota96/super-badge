import { createStore } from 'vuex';

const store = createStore({
    state () {
      return {
        avatar: '',
        selectedType: ''
      }
    },
    getters: {
        getSelectedType(state) {
          return state.selectedType
        },

        getImage(state) {
            return state.avatar 
        }
    },
    mutations: {
      selectBadge (state, payload) {
        state.selectedType = payload;
      },

      selectImage (state, payload) {
        state.avatar = payload;
      }
      
    }
  })


export default store;