<script setup>
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

</script>

<template>
    <div class="flex gap-4">
        <img :src="props.img" class="h-[90vh] w-auto m-0 " />
        <div class="pt-8">
            <h1>{{props.title}}<br>{{props.original}} </h1>
            <address>{{props.director}}</address>
            <p>{{props.description}}</p>
        </div>
    </div>
</template>

<style scoped>
    /* img {
        border: 10px red solid;
    } */
</style>