<template>
  <div
    :class="
      cn('flex flex-col items-center justify-center gap-1 p-3', containerClass)
    "
  >
    <UIcon name="ph:alarm-fill" class="size-6" />
    <div>
      <p class="text-lg font-semibold">{{ time }}</p>
      <h3 class="text-xs text-neutral-400">{{ label }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import cn from "@/utils/cn"

interface InfoProps {
  time: string
  label: string
  containerClass?: string
}

const { time, label, containerClass = "" } = defineProps<InfoProps>()
</script>
