<script setup>
const name = ref()

onMounted(() => {
  const url = window.location.href
  const index = url.indexOf('#')

  if (index !== -1) {
    const fullName = url.substring(index + 1)
    name.value = decodeURIComponent(fullName)
  }
})
</script>

<template>
  <div class="px-4 text-center ">
    <div class="my-4 rounded-md ">
      <UCard v-if="name">
        <!-- Hanya tampilkan jika ada name -->
        <template #header>
          <p class="">
            Kepada:
          </p>
        </template>
        <h2 class="text-xl md:text-2xl">
          {{ name }}
        </h2>
      </UCard>
    </div>
    <p class="text-sm">
      Tanpa Mengurangi Rasa Hormat, Kami Mengundang Bapak/Ibu/Saudara/i untuk Hadir di Acara Kami.
    </p>
  </div>
</template>
