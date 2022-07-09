import { defineStore } from 'pinia';

export const useStoreMain = defineStore({
	id: 'chatusMain',
	state: () => ({
		title: 'Chatus',
    titleDefault: 'Chatus',
    channel: null,
		channels: [],
    messages: {}
	}),
})
