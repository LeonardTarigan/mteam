<template>
  <nav
    class="absolute bottom-0 left-0 flex w-full justify-evenly gap-2 bg-white p-2"
  >
    <NuxtLink
      v-for="(menu, index) in navigationMenu"
      :key="index"
      :to="menu.path"
      class="flex w-full flex-col items-center gap-1 rounded-xl p-2 text-xs font-semibold transition-colors"
      :class="{
        'bg-primary-500 text-white': route.path === menu.path,
        'hover:bg-primary-100': route.path !== menu.path
      }"
    >
      <UIcon :name="menu.icon" class="size-5" />
      <p>{{ menu.label }}</p>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()

const navigationMenu = [
  {
    label: "Presensi",
    path: "/",
    icon: "ph:fingerprint"
  },
  {
    label: "Riwayat",
    path: "/history",
    icon: "ph:clock-counter-clockwise-bold"
  },
  {
    label: "Profil",
    path: "/profile",
    icon: "ph:user-circle-fill"
  }
]
</script>
