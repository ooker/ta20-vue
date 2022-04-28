import { createApp } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
    state () {
      return {
        count: 0,
        lang: 'en',
        mingiAsi : {
            title: "janii",
            isActive: false
        }
      }
    },
    getters : {
                
        lang(state){
            return state.lang;
        },
    },
    mutations: {
      setLang (state, newLang) {
        state.lang = newLang
      }
    }
  })

import App from './App.vue';
import './index.css';

createApp(App).use(store).mount('#app');
