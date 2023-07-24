
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
useHead({
  title: 'Pub Crawl Lisbon',
  meta: [
    { name: 'The best Lisbon pub crawl', content: 'Info on the best pub crawl in Lisbon' }
  ]
})

const app = createApp()
app.use(naive)
</script>

<template>
    <n-message-provider>
      <NuxtPage />
    </n-message-provider>
</template>
