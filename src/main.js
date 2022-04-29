import { createApp } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
    state () {
      return {
        count: 0,
        isDark: false,
      }
    },
    getters : {      
        isDark(state){
            return state.isDark;
        },
    },
    mutations: {
      toggleDark (state) {
        state.isDark = !state.isDark;
      }
    }
  })

import App from './App.vue';
import './index.css';

createApp(App).use(store).mount('#app');
