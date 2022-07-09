<script setup>
import { watch, onMounted, inject, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { useStoreMain } from '../stores/main.js'
import { useLogger } from '../composables/useLogger.js'

const logger = useLogger('Chatus:Channel')
const storeMain = useStoreMain()
const api = inject('api')
const route = useRoute()

const getChannel = async () => {
  logger.log(':getChannel')
  const { data } = await api.get(`/items/chatus_channels/${route.params.id}`)
  logger.log(':getChannel data', data)
  storeMain.channel = data?.data || []
  storeMain.title = `# ${storeMain.channel.name}`
}

const getMessages = async () => {
	logger.log(':getMessages start')
	const { data } = await api.get(`/items/chatus_messages?fields[]=*,channel.id&filter[channel.id][_eq]=${route.params.id}`)
	logger.log(':getMessages data', data)
  storeMain.messages[route.params.id] = data?.data || []
}

watch(
  () => route.params.id,
  (to) => {
    if (to) {
      getChannel()
      getMessages()
    }
  },
  { immediate: true }
)

onMounted(() => {
  logger.log(':onMounted', route.params.id)
  const channelCache = storeMain.channels.find(c => c.id === route.params.id)
  if (channelCache) storeMain.channel = channelCache
})

onBeforeUnmount(() => {
  storeMain.title = storeMain.titleDefault
})
</script>

<template>
  <div class="flex flex-col w-full p-16px">
    <div
      v-for="(m,mi) in storeMain.messages[route.params.id]"
      :key="m.id"
      class="flex flex-col w-full bg-dark-50/50 p-4 mb-4"
    >
      <small class="text-dark-50">{{m.text}}</small>
      <small class="text-dark-50">{{m.id}}</small>
    </div>
  </div>
  <!-- <h1>Channel {{route.params.id}}</h1> -->
  <!-- <pre>{{storeMain.channel}}</pre> -->
  <!-- <pre>{{storeMain.messages}}</pre> -->
</template>
