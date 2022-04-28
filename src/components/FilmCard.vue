<script setup>
    defineProps({
        title: String,
        director: String,
        img: String
    });
</script>

<template>
    <div class="border border-black border-solid px-5">
        <img :src="img" class="w-full" />
        <h2> {{ title }} </h2>
        <h4> {{ director }} </h4>
    </div>
</template>