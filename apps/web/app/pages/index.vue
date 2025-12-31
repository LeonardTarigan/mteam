<template>
  <main class="space-y-3 p-5">
    <!-- <div
      class="bg-primary-500 absolute top-0 left-0 -z-10 flex h-[36dvh] w-full flex-col justify-between p-5 pb-28 text-white"
    ></div> -->
    <section class="flex items-center justify-center">
      <h1 class="text-2xl font-semibold">MTeam</h1>
    </section>

    <section
      class="bg-primary-500 flex items-center justify-between rounded-full p-2 text-white"
    >
      <div class="ml-6">
        <p class="text-lg font-semibold">dr. Ahmad Haidar</p>
        <p class="text-sm">Dokter Umum</p>
      </div>
      <div class="size-16 rounded-full bg-white"></div>
    </section>

    <section class="space-y-7 rounded-4xl bg-white p-6">
      <div class="flex items-center gap-2">
        <UIcon name="ph:book-open-text-bold" class="size-6" />
        <h2 class="text-lg font-medium">Presensi Hari Ini</h2>
      </div>
      <div>
        <p class="text-2xl font-semibold">08 : 12 : 35 WIB</p>
        <p>Kamis, 1 Januari 2026</p>
      </div>
      <div class="space-y-2">
        <div class="flex items-center gap-2">
          <UIcon name="ph:clock" class="size-6" />
          <h2 class="">08:00 - 17:00</h2>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="ph:map-pin" class="size-6" />
          <h2 class="">Klinik Pratama Millenium</h2>
        </div>
      </div>
      <UButton class="w-full justify-center rounded-xl text-center" size="xl"
        >Check-in</UButton
      >
    </section>
    <section class="flex gap-3 text-center">
      <div
        class="flex w-1/2 flex-col items-center justify-center gap-3 rounded-4xl bg-white p-6"
      >
        <UIcon name="ph:sign-in-bold" class="size-6 text-emerald-500" />
        <div>
          <p class="font-medium">00.00</p>
          <p class="text-sm text-neutral-400">Belum Check-in</p>
        </div>
      </div>
      <div
        class="flex w-1/2 flex-col items-center justify-center gap-3 rounded-4xl bg-white p-6"
      >
        <UIcon name="ph:sign-out-bold" class="size-6 text-rose-500" />
        <div>
          <p class="font-medium">00.00</p>
          <p class="text-sm text-neutral-400">Belum Check-out</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Presensi"
})
</script>
