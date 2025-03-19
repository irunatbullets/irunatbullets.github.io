<template>
  <div>
    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Error loading data.</p>
    <div v-else-if="homepage">
      <component
        v-for="(block, index) in homepage.blocks"
        :key="index"
        :is="getComponent(block.collection)"
        :item="block.item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import BlockWelcome from "~/components/block/welcome.vue";
import type { Homepage } from "~/types";

const { getSingletonItem } = useDirectusItems();

const {
  data: homepage,
  pending,
  error,
} = await useAsyncData<Homepage>("homepage", async () => {
  return getSingletonItem({
    collection: "homepage",
    params: {
      fields: [
        "blocks.collection",
        "blocks.item.*",
        "blocks.item.style.*",
      ],
    },
  });
});

 const getComponent = (collection: string) => {
  switch (collection) {
    case "block_welcome":
      return BlockWelcome;
    default:
      return "div"
  }
 }

</script>
