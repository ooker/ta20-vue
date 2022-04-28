<script setup>
import {ref, computed} from 'vue';
import { useStore } from 'vuex';
import FilmCard from './FilmCard.vue';
    const props = defineProps({
        title: String,
        director: {
            type: String,
            default: "Director missing!!!"
        },
        img: {
            type: String,
            default: "https://www.archivesportaleurope.net/documents/10179/97939/01_900_Geneva_Convention_1864.jpg/f58073bb-8ea0-476c-8bc9-9f9f51b318e9?t=1503331863812",
        },
        description: String,
        original: String
    });

    const store = useStore();
    const lang = ref(computed(() => store.getters.lang));

    const changeLang = (lang) => {
        store.commit("setLang", lang);
    } 

</script>

<template>
    <div>
        <h1>Lang {{lang}}</h1>
        <h1>{{props.title}} <br> {{props.original}} </h1>
        <address>{{props.director}}</address>
        <img :src="props.img" class="w-full" />
        <p>{{props.description}}</p>
    </div>
</template>

<style scoped>
    /* img {
        border: 10px red solid;
    } */
</style>