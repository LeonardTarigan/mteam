<template>
  <div>
    <h1 class="flex text-3xl font-bold">{{ data }}</h1>
    <p>Home Page</p>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Presensi"
})

const api = useApi()

const { data } = await useAsyncData("ping", async () => {
  const { data } = await api.get()

  return data
})
</script>
