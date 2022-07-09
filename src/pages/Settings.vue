<script setup>
import { onBeforeUnmount, onMounted, reactive, computed } from 'vue'
import { useStores } from '@directus/extensions-sdk'
import { useStoreMain } from '../stores/main.js'
import { useLogger } from '../composables/useLogger.js'

const logger = useLogger('Chatus:Settings')
const { useFieldsStore } = useStores()
const fieldsStore = useFieldsStore()
const storeMain = useStoreMain()

const COLLECTIONS = ['chatus_channels', 'chatus_messages', 'chatus_spells']

const state = reactive({
	fieldSelected: null,
})

const getFieldKey = (f) => `${f.collection}-${f.field}`

const fields = computed(() => {
	// TODO save/hardcode this success v0 fields snapshot to deep.compare later on
	return fieldsStore.fields.filter(f => COLLECTIONS.includes(f.collection))
})

onMounted(() => {
  logger.log(':onMounted')
  storeMain.title = 'Settings'
})

onBeforeUnmount(() => {
  logger.log(':onBeforeUnmount')
  storeMain.title = storeMain.titleDefault
})
</script>

<template>
  <div class="flex flex-col p-16px">
      <div v-for="(f,fi) in fields" :key="getFieldKey(f)">
        <div
          @click="state.fieldSelected === getFieldKey(f) ? state.fieldSelected = null : state.fieldSelected = getFieldKey(f)"
        >
          {{f.collection}} - {{f.field}} - {{f.type}} - {{getFieldKey(f)}}
        </div>
        <div v-if="getFieldKey(f) === state.fieldSelected">
          <pre>
            {{f}}
          </pre>
        </div>
      </div>
  </div>
</template>
