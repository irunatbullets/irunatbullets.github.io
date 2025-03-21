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
import type { Component } from 'vue'
import type { Homepage, Block } from '~/types'

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

const componentMap: Record<Block['collection'], Component> = {
  block_welcome: BlockWelcome,
}

const resolveComponent = (collection: Block['collection']): Component => {
  return componentMap[collection] || 'div'
}
</script>
