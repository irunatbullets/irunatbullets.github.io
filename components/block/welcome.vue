<template>
  <BlockContainer :style="item.style">
    <div>
      <h1
        class="text-[clamp(40px,5.208vw,100px)] leading-none font-black text-white cursor-pointer group transition-all duration-1500 -skew-y-6 hover:skew-y-6 hover:text-[clamp(60px,10vw,200px)]"
      >
        <span
          class="inline-block mr-1 group-hover:backdrop-saturate-200 group-hover:backdrop-brightness-70"
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
