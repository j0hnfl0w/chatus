<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useStoreMain } from '../stores/main.js'
import { useLogger } from '../composables/useLogger.js'

const logger = useLogger('Chatus:Index')
const storeMain = useStoreMain()

onMounted(() => {
  logger.log(':onMounted')
  storeMain.title = 'Dashboard'
})

onBeforeUnmount(() => {
  logger.log(':onBeforeUnmount')
  storeMain.title = storeMain.titleDefault
})
</script>

<template>
  <div style="padding: 16px;">
    <h1>Index Dashboard</h1>
    <h2>Threads, Mentions, Bookmarks, Drafts, Stats, Spells, Cooldowns,</h2>
  </div>
</template>
