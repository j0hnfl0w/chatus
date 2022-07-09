<script setup>
import { onMounted, inject, reactive } from 'vue'
import { useLogger } from '../composables/useLogger.js'
import { useStoreMain } from '../stores/main.js'

const logger = useLogger('Navigation')
const storeMain = useStoreMain()
const api = inject('api')

const getChannels = async () => {
	logger.log(':getChannels start')
	const { data } = await api.get('/items/chatus_channels')
	logger.log(':getChannels data', data)
	storeMain.channels = data?.data || []
	// if (storeMain.channels[0]) storeMain.channel = storeMain.channels[0]
}

const state = reactive({
	channelsShow: true,
	directsShow: true,
})

onMounted(() => {
	logger.log(':onMounted')
	getChannels()
})
</script>

<template>
  <div :style="{padding: '16px'}">
    <!-- threads, directs, mentions, saved items  -->
    <!-- starred -->
    <!-- channels -->
    <!-- <span>Channels</span> -->
    <v-button secondary small fullWidth align="left" style="margin-bottom: 4px" @click="state.channelsShow ? state.channelsShow = false : state.channelsShow = true">
      <v-icon :name="state.channelsShow ? 'arrow_drop_down' : 'arrow_right'" style="margin-right: 8px" />
      Channels
    </v-button>
    <v-list dense v-show="state.channelsShow">
      <v-list-item
        v-for="(c,ci) in storeMain.channels" :key="c.id"
        dense
      >
        <v-list-item-content>
          <v-button secondary xSmall align="left" :to="{name: 'Chatus_Channel', params: {id: c.id}}" @click="state.channel = c" :active="c.id === state.channel?.id">
            <v-icon name="tag" small style="margin-right: 8px" />
            {{ c.name }}
          </v-button>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- channel explore/create btn -->
    <v-menu attached style="margin-top: 4px; padding-left: 0px;">
      <template #activator="{ toggle }">
        <v-button secondary small fullWidth align="left" @click="toggle()">
          <v-icon name="add" />
          Add channels
        </v-button>
      </template>
      <v-list v-if="true" :mandatory="false">
        <v-list-item clickable :to="{name: 'Chatus_Channel_Create'}">
          <v-list-item-content>
            Create a new channel
          </v-list-item-content>
        </v-list-item>
        <v-list-item clickable :to="{name: 'Chatus_Channel_Explore'}">
          <v-list-item-content>
            Browse channels
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- direct messages -->
    <!-- <v-button v-if="false" secondary small fullWidth align="left" style="margin-top: 4px" @click="state.directsShow ? state.directsShow = false : state.directsShow = true">
      <v-icon :name="state.directsShow ? 'arrow_drop_down' : 'arrow_right'" style="margin-right: 8px" />
      Direct messages
    </v-button> -->
    <!-- <v-list v-if="false" dense v-show="state.directsShow" style="margin-top: 4px">
      <v-list-item
        v-for="(c,ci) in state.channels" :key="c.id"
        dense
      >
        <v-list-item-content>
          <v-button secondary xSmall align="left" @click="state.channel = c" :active="c.id === state.channel?.id">
            <v-icon name="tag" small style="margin-right: 8px" />
            {{ c.name }}
          </v-button>
        </v-list-item-content>
      </v-list-item>
    </v-list> -->
    <!-- create conversation -->
    <!-- <v-button v-if="false" secondary small fullWidth align="left" style="margin-top: 4px">
      <v-icon name="add" style="margin-right: 8px" />
      Create conversation
    </v-button> -->
    <!-- apps? -->
    <v-button secondary small fullWidth align="left" style="margin-top: 4px" :to="{name: 'Chatus_Index'}">
      <v-icon name="home" style="margin-right: 8px" />
      Home
    </v-button>
    <v-button secondary small fullWidth align="left" style="margin-top: 4px" :to="{name: 'Chatus_Settings'}">
      <v-icon name="settings" style="margin-right: 8px" />
      Settings
    </v-button>
  </div>
</template>
