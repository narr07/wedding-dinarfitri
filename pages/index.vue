<template>
  <div>
    <UContainer class="flex flex-col items-center h-screen justify-evenly">
      <h1 class="text-2xl">
        Undangan Pernikahan
      </h1>
      <UCard>
        <h1 class="text-2xl text-center md:text-4xl">
          Dinar Permadi Yusup <br>&<br> Fitri Andriyani
        </h1>
      </UCard>
      <div>
        <UCard>
          <h2 class="font-sans text-2xl text-center">
            23 April 2024
          </h2>
        </UCard>
        <div class="w-full ">
          <appCountDown />
        </div>
      </div>
      <appNameInvite />
    </UContainer>
  </div>
</template>
