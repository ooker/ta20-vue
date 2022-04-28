<script setup>
    const props = defineProps({
        title: String,
        director: String,
        img: String
    });
</script>

<template>
    <div class="border border-black border-solid p-4 sm:p-[1vw] sm:border-red-500 md:border-blue-500 lg:border-green-500">
        <img :src="props.img" class="w-full" />
        <h2> {{ props.title }} </h2>
        <h4> {{ props.director }} </h4>
    </div>
</template>

<style scoped>
    /* img {
        border: 10px red solid;
    } */
</style>