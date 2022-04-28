<script setup>

import { ref } from "vue";

import FilmCard from './components/FilmCard.vue';
import FilmInfo from './components/FilmInfo.vue';

const films = ref(null);
const activeIndex = ref(null);
const activeFilm = ref(null);


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

<div class="p-10">
  
  <div class="grid grid-cols-2 gap-4" >
    <div class="grid md:grid-cols-2 gap-4" v-if="films">
      <FilmCard v-for="(film, i) in films" :key="`film_${i}`"
        @click="cardClick(i)"
        :title="film.title" :director="film.director" :img="film.movie_banner"
        class="rounded-lg cursor-pointer duration-1000 hover:bg-yellow-100"
      />
    </div>
    <div v-if="activeIndex != null">
      <film-info 
        :title="films[activeIndex].title" 
        :director="films[activeIndex].director" 
        :original="films[activeIndex].original_title" 
        :img="films[activeIndex].image" 
      />
      <!-- <h1 class="text-blue-500" v-if="activeFilm">{{activeFilm.title}} </h1> -->
    </div>
  </div>

  <!-- <FilmCard v-for="(film, i) in films" :key="`film_${i}`"
    :title="film.title" :director="film.director" :img="film.movie_banner"
  /> -->

  <!-- <h1> {{ films[2].title }} </h1> -->

      <!-- <div v-for="(film, i) in films" :key="`film_${i}`" class="border border-black border-solid px-5"> -->
        
      <!-- </div> -->
    
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
