<template>
  <div :style="styleObject" class="min-h-screen flex">
    <div class="container mx-auto p-8 flex grow justify-center items-center">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlockStyle } from "~/types";

const props = defineProps<{
  style: BlockStyle
}>();

const styleObject = computed(() => ({
  background: props.style.background,
  color: props.style.background == "black" ? "white" : ""
}));
</script>
