import App from './App.vue'

import Index from './pages/Index.vue'
import Channel from './pages/Channel.vue'
import ChannelCreate from './pages/ChannelCreate.vue'
import ChannelExplore from './pages/ChannelExplore.vue'
import Settings from './pages/Settings.vue'

import './css/main.scss'
import './css/uno.css'

export default {
	id: 'chatus',
	name: 'Chatus',
	icon: 'chat',
	routes: [
		{
			path: '',
			component: App,
			redirect: '/chatus/home',
			children: [
				{
					path: 'home',
					name: 'Chatus_Index',
					component: Index,
				},
				{
					path: 'settings',
					name: 'Chatus_Settings',
					component: Settings,
				},
				{
					path: 'channel/create',
					name: 'Chatus_Channel_Create',
					component: ChannelCreate,
				},
				{
					path: 'channel/explore',
					name: 'Chatus_Channel_Explore',
					component: ChannelExplore
				},
				{
					path: 'channel/:id',
					name: 'Chatus_Channel',
					component: Channel,
				}
			]
		},
	],
}
