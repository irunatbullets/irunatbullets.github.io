<template>
  <div :style="styleObject" class="flex min-h-screen">
    <div
      class="/*container*/ mx-auto flex grow items-center justify-center p-8
        backdrop-blur-[10rem]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import type { BlockStyle, Color } from '~/types'

const config = useRuntimeConfig()
const assetUrl: string = config.public.assetsUrl

const props = defineProps<{
  style: BlockStyle
}>()

const colorMap: Record<Color, string> = {
  red: '#e35169',
  orange: '#ffa439',
  yellow: '#ffc23b',
  green: '#2ecda7',
  blue: '#3399ff',
  purple: '#6644ff',
  black: '#18222f',
  white: '#ffffff',
}

const getColor = (background: BlockStyle['background']): string => {
  if (background === 'none' || background === 'image') {
    return 'transparent'
  }

  return colorMap[background] || 'transparent'
}

const styleObject = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    backgroundColor: getColor(props.style.background),
  }

  if (props.style.background === 'image' && props.style.background_image) {
    styles.backgroundImage = `url(${assetUrl}${props.style.background_image}.png)`
    styles.backgroundSize = 'cover'
    styles.backgroundPosition = 'center'
  }

  return styles
})
</script>
