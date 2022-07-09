<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useStoreMain } from '../stores/main.js'
import { useLogger } from '../composables/useLogger.js'

const logger = useLogger('Chatus:Channel')
const storeMain = useStoreMain()

onMounted(() => {
  logger.log(':onMounted')
  storeMain.title = 'Channel Explore'
})

onBeforeUnmount(() => {
  logger.log(':onBeforeUnmount')
  storeMain.title = storeMain.titleDefault
})
</script>

<template>
  <div class="flex flex-col w-full p-16px">
    <span>List of all channels with search and pagination</span>
  </div>
</template>
