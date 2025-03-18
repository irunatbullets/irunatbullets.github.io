<template>
  <div>
    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Error loading data.</p>
    <pre v-else>{{ homepage }}</pre>
  </div>
</template>

<script setup>
const { getSingletonItem } = useDirectusItems();

// Fetch the singleton item from Directus
const {
  data: homepage,
  pending,
  error,
} = await useAsyncData("homepage", async () => {
  return getSingletonItem({
    collection: "homepage",
    params: {
      fields: [
        "blocks.collection",
        "blocks.item.title",
        "blocks.item.subtitle",
        "blocks.item.emoji",
        "blocks.item.content",
        "blocks.item.style.background",
        "blocks.item.style.background_image"
      ],
    },
  });
});
</script>
