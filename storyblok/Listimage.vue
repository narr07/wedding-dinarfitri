<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="bg-cover aspect-square">
    <NuxtImg class="object-cover w-full h-64 bg-cover rounded-md aspect-square" :src="blok.image.filename" :alt="blok.title" />
  </div>
</template>
