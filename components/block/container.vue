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

const colorMap: { [key: string]: string } = {
  red: '#e35169',
  orange: '#ffa439',
  yellow: '#ffc23b',
  green: '#2ecda7',
  blue: '#3399ff',
  purple: '#6644ff',
  black: '#18222f',
  white: '#ffffffd',
}

const getColor = (color: string): string => {
  return colorMap[color] || 'transparent'
}

const styleObject = computed(() => ({
  backgroundColor: getColor(props.style.background),
}))
</script>
