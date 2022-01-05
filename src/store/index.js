import { createStore } from 'vuex';

const store = createStore({
    state () {
      return {
        avatar: '',
        selectedType: '',
        firstCard: {
          text: 'text-default',
          background: 'bg-color-default',
          shadow: 'shadow-default',
          border: 'default-border',
          shadow: 'shadow-default',
          role: 'bg-role-default'
        },
        secondCard : {
          text: 'text-default',
          background: 'bg-color-default',
          shadow: 'shadow-default',
          border: 'default-border',
          shadow: 'shadow-default',
          role: 'bg-role-default' 
        }
      }
    },

    getters: {
        getSelectedType(state) {
          return state.selectedType
        },

        getImage(state) {
            return state.avatar 
        },

        getFirstCardStyle(state) {
          return state.firstCard    
        },

        getSecondCardStyle(state) { 
          return state.secondCard
        },


    },

    mutations: {
      selectBadge (state, payload) {
        state.selectedType = payload;
        
      },

      selectImage (state, payload) {
        state.avatar = payload;
      },

      getSelectedFirstCardStyle(state) {
          state.firstCard.text = '',
          state.firstCard.shadow = 'shadow-selected',
          state.firstCard.role = 'bg-role-selected'
          state.firstCard.border = 'selected-border'
          state.firstCard.background = 'bg-color-selected'
      },

      getSelectedSecondCardStyle(state, getters) {

        state.secondCard.shadow = 'shadow-selected',
        state.secondCard.role = 'bg-role-selected'
        state.secondCard.border = 'selected-border'
        state.secondCard.background = 'bg-color-selected'
      } 
 
    }
  })


export default store;