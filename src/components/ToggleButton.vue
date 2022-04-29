<script setup>
    defineProps({
        label: String
    });
</script>               
<template>
    <div class="prose dark:prose-invert">
        <div class="relative inline-block w-10 mr-2 align-middle select-none">
            <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
            <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
        </div>
        <label for="toggle" class="text-xs">{{label}}</label>
    </div>
</template>

<style scoped>
.toggle-checkbox:checked {
  right: 0;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  background-color: #68D391;
}
</style>