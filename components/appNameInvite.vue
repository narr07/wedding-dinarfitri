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
  <div class="p-2 text-center ">
    <div class="prounded-md ">
      <UCard v-if="name" class="bg-cLight-300 ">
        <!-- Hanya tampilkan jika ada name -->

        <p class="">
          Kepada:
        </p>

        <h2 class="text-xl font-bold font-Flamenco md:text-2xl">
          {{ name }}
        </h2>
      </UCard>
    </div>
    <div class="py-2">
      <p class="text-sm">
        Tanpa Mengurangi Rasa Hormat, Kami Mengundang Bapak/Ibu/Saudara/i untuk Hadir di Acara Kami.
      </p>
    </div>
  </div>
</template>
