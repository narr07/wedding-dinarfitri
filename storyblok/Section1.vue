<script setup>
defineProps({ blok: Object })
</script>

<template>
  <!-- Hero -->
  <UContainer class="relative py-10 overflow-hidden">
    <div class="max-w-4xl py-10 mx-auto ">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">
          Assalamu’alaikum Warahmatullahi Wabarakatuh
        </h1>
        <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
          Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
          Ya Allah, perkenankanlah kami merangkai kasih sayang yang Kau ciptakan di antara putra-putri kami:
        </p>
      </div>

      <div class="grid max-w-5xl grid-cols-1 gap-4 mx-auto mt-10 md:grid-cols-2">
        <UCard class="dark:bg-cLight-300">
          <div class="flex items-center justify-center">
            <NuxtImg class="object-cover w-48 h-48 bg-cover rounded-full" :src="blok.image1.filename" />
          </div>
          <template #footer>
            <div class="flex-col space-y-2 text-center">
              <h1 class="text-2xl font-bold text-center">
                Dinar Permadi Yusup
              </h1>
              <p>
                Putra Pertama dari Pasangan
              </p>
              <p>
                Yusup & Yuyun
              </p>
              <p>
                Majalengka
              </p>
            </div>
          </template>
        </UCard>
        <UCard class="dark:bg-cLight-300">
          <div class="flex items-center justify-center">
            <NuxtImg class="object-cover w-48 h-48 bg-cover rounded-full" :src="blok.image2.filename" />
          </div>
          <template #footer>
            <div class="flex-col space-y-2 text-center">
              <h1 class="text-2xl font-bold text-center">
                Fitri Andriyani
              </h1>
              <p>
                Putri Pertama dari Pasangan
              </p>
              <p>
                Apit & Emoh
              </p>
              <p>
                Majalengka
              </p>
            </div>
          </template>
        </UCard>
      </div>
    </div>
  </UContainer>
<!-- End Hero -->
</template>
