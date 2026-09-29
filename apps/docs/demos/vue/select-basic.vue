<script setup lang="ts">
import { ref } from 'vue'
import XSelectMenu from '@/components/kit/XSelectMenu.vue'
import XInputMenu from '@/components/kit/XInputMenu.vue'
import XInputNumber from '@/components/kit/XInputNumber.vue'
import XSlider from '@/components/kit/XSlider.vue'
import XInputRating from '@/components/kit/XInputRating.vue'
import XInputTags from '@/components/kit/XInputTags.vue'
import XInputDate from '@/components/kit/XInputDate.vue'
import XInputTime from '@/components/kit/XInputTime.vue'

const selected = ref('apple')
const date = ref('2025-06-15')
const time = ref('14:30')
const count = ref(5)
const volume = ref(50)
const rating = ref(4)
const tags = ref(['Vue', 'Nuxt'])
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XSelectMenu
        v-model="selected"
        show-search
        :options="[{ label: '苹果', value: 'apple' }, { label: '香蕉', value: 'banana' }, { label: '橙子', value: 'orange' }]"
        class="w-48"
      />
      <XInputMenu :items="[{ label: '上海', value: 'sh' }, { label: '北京', value: 'bj' }]" class="w-48" />
      <XInputDate v-model="date" class="w-44" />
      <XInputTime v-model="time" class="w-32" />
    </div>
    <div class="flex flex-wrap items-center gap-6">
      <XInputNumber v-model="count" :min="1" :max="10" />
      <XSlider v-model="volume" class="w-48" />
      <XInputRating v-model="rating" allow-half />
      <XInputTags v-model="tags" placeholder="输入后回车添加…" class="w-72" />
    </div>
  </div>
</template>
