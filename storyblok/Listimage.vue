<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div class="aspect-square ">
    <NuxtImg class="object-cover aspect-square" :src="blok.image.filename" :alt="blok.title" />
  </div>
</template>
