<script setup lang="ts">
import { ref } from 'vue'
import XColorPicker from '@/components/kit/XColorPicker.vue'
import XPinInput from '@/components/kit/XPinInput.vue'
import XFileUpload from '@/components/kit/XFileUpload.vue'

const color = ref('#00DC82')
const pin = ref('1234')
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-6">
      <XColorPicker v-model="color" />
      <XPinInput v-model="pin" :length="6" />
    </div>
    <XFileUpload class="w-full" />
  </div>
</template>
