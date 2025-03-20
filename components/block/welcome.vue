<template>
  <BlockContainer :style="item.style">
    <div>
      <h1
        class="text-[clamp(40px,5.208vw,100px)] leading-none font-black text-white"
      >
        <span
          class="inline-block backdrop-saturate-200 backdrop-brightness-70 mr-1"
          >{{ item.title }}</span
        >
        <span class="inline-block animate-bounce emoji">
          <span class="inline-block rotate-[25deg]">{{ item.emoji }}</span>
        </span>
      </h1>
    </div>
  </BlockContainer>
</template>

<script setup lang="ts">
import type { BlockWelcome } from '~/types'

defineProps<{
  item: BlockWelcome
}>()
</script>
