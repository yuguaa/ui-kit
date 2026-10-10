<script setup lang="ts">
import { ref } from 'vue'
import XProgress from '@/components/kit/XProgress.vue'

const step = ref(1)
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <XProgress v-model="step" :max="['提交订单', '支付', '发货', '收货']" />
    <XProgress :model-value="2" :max="['提交订单', '支付', '发货', '收货']" color="success">
      <template #step-0="{ step: text }">
        <span class="text-success">{{ text }} ✓</span>
      </template>
    </XProgress>
  </div>
</template>
