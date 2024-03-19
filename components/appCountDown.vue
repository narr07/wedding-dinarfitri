<script setup>
const hariH = new Date('2024-04-23')
const now = ref(new Date())

const countdown = computed(() => {
  const diff = hariH - now.value
  if (diff < 0)
    return 'Waktu telah berlalu'

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
})

onMounted(() => {
  setInterval(() => {
    now.value = new Date()
  }, 1000)
})
</script>

<template>
  <div>
    <div class="p-2 ">
      <h2 class="py-2 font-sans text-2xl font-black text-center">
        23 April 2024
      </h2>

      <div class="grid grid-cols-4 gap-4 ">
        <div class="flex-col items-center justify-center p-2 text-center rounded-md text-cDark-800 bg-cLight-200">
          <p class="font-bold ">
            {{ countdown.days }}
          </p>
          <p class="text-xs ">
            HARI
          </p>
        </div>
        <div class="flex-col items-center justify-center p-2 text-center rounded-md text-cDark-800 bg-cLight-200">
          <p class="font-bold ">
            {{ countdown.hours }}
          </p>
          <p class="text-xs ">
            JAM
          </p>
        </div>
        <div class="flex-col items-center justify-center p-2 text-center rounded-md text-cDark-800 bg-cLight-200">
          <p class="font-bold ">
            {{ countdown.minutes }}
          </p>
          <p class="text-xs ">
            MENIT
          </p>
        </div>
        <div class="flex-col items-center justify-center p-2 text-center rounded-md text-cDark-800 bg-cLight-200">
          <p class="font-bold ">
            {{ countdown.seconds }}
          </p>
          <p class="text-xs ">
            DETIK
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  font-family: 'Inter', sans-serif;
}
</style>
