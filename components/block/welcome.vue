<template>
  <BlockContainer :style="item.style">
    <div>
      <h1
        class="duration-1500 group -skew-y-6 cursor-pointer text-[clamp(40px,5.208vw,100px)]
          font-black leading-none text-white transition-all hover:skew-y-6
          hover:text-[clamp(50px,10vw,200px)]"
      >
        <span
          class="group-hover:backdrop-brightness-70 mr-1 inline-block
            group-hover:backdrop-saturate-200"
          >{{ item.title }}</span
        >
        <span class="emoji inline-block animate-bounce">
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
