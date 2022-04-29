<script setup>

import { ref,computed } from "vue";
import { useStore } from "vuex";
import FilmCard from './components/FilmCard.vue';
import FilmInfo from './components/FilmInfo.vue';
import ToggleButton from './components/ToggleButton.vue';

const store = useStore();
const isDark = ref(computed(() => store.getters.isDark));

const toggleDark = () => {
    store.commit("toggleDark");
} 
const films = ref(null);
const activeIndex = ref(0);
// const activeFilm = ref(null);


fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(data => {
    films.value = data;
    // console.log(films.value);
});


const cardClick = (idx) => {
  activeIndex.value = idx;
  activeFilm.value = films.value[idx];
  // console.log("klikk:", title);
}

</script>



<template>

<div  :class="isDark ? 'dark' : ''">
  <div class=" p-4 prose dark:prose-invert dark:bg-stone-800 max-w-none">
    <div class=" grid grid-cols-[1fr_3fr] gap-4" >
      <div class="grid gap-4" v-if="films">
        <FilmCard v-for="(film, i) in films" :key="`film_${i}`"
          @click="cardClick(i)"
          :title="film.title" :director="film.director" :img="film.movie_banner"
          class=" rounded-lg cursor-pointer duration-1000 hover:bg-yellow-100 dark:hover:bg-stone-700"
        />
      </div>
      <div v-if="activeIndex != null">
        <div class="sticky top-5">
          <nav class="flex justify-end">
            <toggle-button :label="isDark ? 'Swich to light mode' : 'Swich to dark mode'"
          @click="toggleDark"
          />
          </nav>
          <film-info
            :title="films[activeIndex].title"
            :director="films[activeIndex].director"
            :original="films[activeIndex].original_title"
            :img="films[activeIndex].image"
            :description="films[activeIndex].description"
          />
        </div>
        
      </div>
    </div>
  
    <!-- <FilmCard v-for="(film, i) in films" :key="`film_${i}`"
      :title="film.title" :director="film.director" :img="film.movie_banner"
    /> -->
  
    <!-- <h1> {{ films[2].title }} </h1> -->
  
        <!-- <div v-for="(film, i) in films" :key="`film_${i}`" class="border border-black border-solid px-5"> -->
  
        <!-- </div> -->
  
  </div>
</div>
  
    <!-- <h1 class="font-bold text-red-500">asdadads</h1>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue  3 + Vite TA 20"  /> -->
</template>

<style>
#app {
        /* font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px; */
}
</style>
