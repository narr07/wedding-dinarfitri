<script setup>
defineProps({ blok: Object })
</script>

<template>
  <UContainer v-editable="blok" class="py-10">
    <UCard>
      <div class="py-4">
        <h1 class="py-4 text-2xl font-bold text-center">
          {{ blok.heading }}
        </h1>
      </div>
      <div class="grid gap-2 md:grid-cols-4">
        <StoryblokComponent v-for="blok in blok.list" :key="blok._uid" :blok="blok" />
      </div>
    </UCard>
  </UContainer>
</template>
