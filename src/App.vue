<script setup>

import { ref } from "vue";

import FilmCard from './components/FilmCard.vue';

const films = ref(null);

fetch('https://ghibliapi.herokuapp.com/films')
  .then(response => response.json())
  .then(data => {
    films.value = data;
    console.log(films.value);
  });

</script>

<template>

<div class="p-20">
  
  <film-card v-for="(film, i) in films" :key="`film_${i}`"
    :title="film.title" :director="film.director" :img="film.movie_banner"
  />

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
