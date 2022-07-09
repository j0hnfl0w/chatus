<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useStoreMain } from '../stores/main.js'
import { useLogger } from '../composables/useLogger.js'

const logger = useLogger('Chatus:Channel')
const storeMain = useStoreMain()

onMounted(() => {
  logger.log(':onMounted')
  storeMain.title = 'Channel Create'
})

onBeforeUnmount(() => {
  logger.log(':onBeforeUnmount')
  storeMain.title = storeMain.titleDefault
})
</script>

<template>
  <div class="flex flex-col w-full p-16px">
    <span>Channel name</span>
    <span>Private channel?</span>
    <span>Members?</span>
    <v-button>Create channel</v-button>
  </div>
</template>
