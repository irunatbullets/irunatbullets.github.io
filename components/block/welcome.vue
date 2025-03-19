<template>
  <BlockContainer :style="item.style">
    <div>
      <h1 class="text-[clamp(40px,5.208vw,100px)] leading-none font-black">{{ item.title }}<span class="inline-block animate-bounce"><span class="inline-block rotate-[25deg]">{{ item.emoji }}</span></span></h1>
    </div>
  </BlockContainer :style="item.style">
</template>

<script setup lang="ts">
import type { BlockWelcome } from '~/types';

defineProps<{
  item: BlockWelcome
}>();
</script>
