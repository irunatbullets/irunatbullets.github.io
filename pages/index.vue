<template>
  <div>
    <p v-if="status === 'pending'">Loading...</p>
    <p v-else-if="error">Error loading data: {{ error.message }}</p>
    <div v-else-if="homepage">
      <component
        v-for="block in homepage.blocks"
        :key="block.item.id"
        :is="resolveComponent(block.collection)"
        :item="block.item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Homepage } from '~/types'

import BlockWelcome from '~/components/block/welcome.vue'

const { getSingletonItem } = useDirectusItems()

const {
  data: homepage,
  status,
  error,
} = await useAsyncData<Homepage>('homepage', async () => {
  return getSingletonItem({
    collection: 'homepage',
    params: {
      fields: ['blocks.collection', 'blocks.item.*', 'blocks.item.style.*'],
    },
  })
})

const componentMap: { [key: string]: any } = {
  block_welcome: BlockWelcome,
}

const resolveComponent = (collection: string): any => {
  return componentMap[collection] || 'div'
}
</script>
