<script setup lang="ts">
import { ref } from 'vue'
import { Check, X } from '@lucide/vue'
import XSwitch from '@/components/kit/XSwitch.vue'

const on = ref(true)
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <XSwitch v-model="on" :checked-icon="Check" :unchecked-icon="X" label="滑块内图标" />
    <XSwitch highlight label="常显聚焦环" />
    <XSwitch v-model="on" color="info" highlight :checked-icon="Check" label="info 聚焦环" />
    <XSwitch color="warning" label="warning 语义色" />
  </div>
</template>
