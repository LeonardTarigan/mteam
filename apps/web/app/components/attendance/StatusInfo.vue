<template>
  <div
    :class="
      cn(
        'flex flex-col items-center justify-center gap-1 p-5 text-amber-500',
        containerClass
      )
    "
  >
    <UIcon name="ph:warning-fill" class="size-6" />
    <div>
      <h3 class="text-xs font-semibold">Belum Presensi</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import cn from "@/utils/cn"

interface StatusInfoProps {
  label: string
  containerClass?: string
}

const { containerClass = "" } = defineProps<StatusInfoProps>()
</script>
