
<script setup>
import { createApp } from 'vue'
import {
  // create naive ui
  create,
  NMessageProvider,
  // component
  NButton
} from 'naive-ui'

const naive = create({
  components: [NButton]
})

const app = createApp()
app.use(naive)
</script>

<template>
    <n-message-provider>
      <NuxtPage />
    </n-message-provider>
</template>
