<template>
	<private-view :title="storeMain.title">
		<template #navigation>
			<Navigation />
		</template>
		<template #sidebar>
			<Sidebar />
		</template>
		<router-view></router-view>
	</private-view>
</template>

<script setup>
import { onMounted, inject } from 'vue'
import { useStoreMain } from './stores/main.js'
import { useLogger } from './composables/useLogger.js'

import Navigation from './components/Navigation.vue'
import Sidebar from './components/Sidebar.vue'

const logger = useLogger('App')
const storeMain = useStoreMain()
// const api = inject('api')

onMounted(() => {
	logger.log(':onMounted')
})
</script>

<style lang="scss" scoped>
// :global(#sidebar) {
// 	display: none;
// }

// :global(#main-content > header) {
// 	display: none;
// }

// :global(#navigation .project-info) {
// 	display: none !important;
// }

// :global(.v-list-item) {
// 	padding-left: 0 !important;
// }

// :global(.v-list-item-content) {
// 	padding-left: 0 !important;
// }

// pre {
// 	font-size: 10px;
// 	line-height: 1;
// 	background: rgba(0,255,0,0.4);
// }
</style>
