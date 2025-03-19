<template>
  <div :style="styleObject" class="min-h-screen flex">
    <div class="container mx-auto p-8 flex grow justify-center items-center">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlockStyle } from '~/types'

const props = defineProps<{
  style: BlockStyle
}>()

const getColor = (color: string) => {
  switch (color) {
    case 'red':
      return '#e35169'
    case 'orange':
      return '#ffa439'
    case 'yellow':
      return '#ffc23b'
    case 'green':
      return '#2ecda7'
    case 'blue':
      return '#3399ff'
    case 'purple':
      return '#6644ff'
    case 'black':
      return '#18222f'
    case 'white':
      return '#ffffffd'
    default:
      return 'transparent'
  }
}

const styleObject = computed(() => ({
  backgroundColor: getColor(props.style.background),
}))
</script>
