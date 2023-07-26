
<script setup>
import { createApp } from 'vue'
import {
  // create naive ui
  create,
  NMessageProvider,
  // component
  NButton
} from 'naive-ui'
import { useSeoMeta } from 'unhead';

const naive = create({
  components: [NButton]
})
useHead({
  title: 'Pub Crawl Lisbon',
  meta: [
    { name: 'The best Lisbon pub crawl', content: 'Info on the best pub crawl in Lisbon' }
  ]
})
useSeoMeta({
  ogTitle: 'Pub Crawl Lisbon',
  description: 'We know the way to go! Join us on an amazing night out!',
  ogDescription: 'We know the way to go! Join us on an amazing night out!',
  ogImage: 'https://way2gopubcrawl.com/_nuxt/retro-logo-700px.2e5c3e89.png',
})

const app = createApp()
app.use(naive)
</script>

<template>
    <n-message-provider>
      <NuxtPage />
    </n-message-provider>
</template>
