<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMessage, NButton, NModal } from 'naive-ui'

export default defineComponent({
  components: {
      NButton, NModal
    },
  setup () {
    const message = useMessage()

    return {
      showModal: ref(false),
      cancelCallback () {
        message.error('Cancel')
      },
      submitCallback () {
        message.success('Submit')
      }
    }
  }
})
</script>

<template>
  <n-button @click="showModal = true">
    Click me
  </n-button>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="A useless modal for you"
    content="This modal does nothing"
    positive-text="Submit"
    negative-text="Cancel"
    @positive-click="submitCallback"
    @negative-click="cancelCallback"
  />
</template>

