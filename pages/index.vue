import appCountDown from '~/components/appCountDown.vue';
<template>
  <div class="flex flex-col items-center h-screen justify-evenly">
    <div class="fixed top-0 z-50">
      <appDarkmode />
    </div>
    <UCard class="flex flex-col items-center w-3/4 max-w-3xl mx-auto bgSvg justify-evenly">
      <h1 class="text-2xl text-center">
        Undangan
      </h1>
      <UCard class="my-4 bg-cLight-300">
        <h2 class="text-2xl text-center">
          Dinar Permadi Yusup
          <br>
          &
          <br>
          Fitri Andriyani
        </h2>
      </Ucard>
      <appCountDown />
    </UCard>

    <UCard class="w-3/4 max-w-3xl mx-auto">
      <appNameInvite />
    </UCard>
  </div>
</template>
