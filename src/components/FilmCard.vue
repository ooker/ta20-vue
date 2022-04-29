<script setup>
    const props = defineProps({
        title: String,
        director: String,
        img: String
    });
</script>

<template>
    <div class="prose dark:prose-invert ring-1 p-4 sm:p-[1vw]">
        <img :src="props.img" class="w-full mb-2" />
        <h2 class="m-0"> {{ props.title }} </h2>
        <h4> {{ props.director }} </h4>
    </div>
</template>

<style scoped>
    /* img {
        border: 10px red solid;
    } */
</style>