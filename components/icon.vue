<script setup lang="ts">
import { computed } from 'vue'

type SizeType = 'small' | 'large'

const props = defineProps<{
  name?: string
  size?: SizeType
}>()

const iconSize = computed(() => {
  switch (props.size) {
    case 'small':
      return 'w-4 h-4'
    case 'large':
      return 'w-16 h-16'
    default:
      return 'w-8 h-8'
  }
})
</script>

<template>
  <span :class="[props.name, iconSize]"></span>
</template>
