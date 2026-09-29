<script setup lang="ts">
import { ref } from 'vue'
import XInput from '@/components/kit/XInput.vue'
import XIcon from '@/components/kit/XIcon.vue'
import XTextarea from '@/components/kit/XTextarea.vue'
import XCheckbox from '@/components/kit/XCheckbox.vue'
import XRadioGroup from '@/components/kit/XRadioGroup.vue'
import XSwitch from '@/components/kit/XSwitch.vue'

const email = ref('')
const checked = ref(true)
const city = ref('a')
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XInput v-model="email" placeholder="Input（md）" class="w-56" />
      <XInput size="sm" placeholder="Input（sm）" class="w-40" />
      <XInput placeholder="带前缀图标（搜索）" class="w-56">
        <template #prefix><XIcon name="search" size="sm" /></template>
      </XInput>
      <XInput status="error" placeholder="错误状态（error）" class="w-56" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <XInput class="w-64">
        <template #addonBefore>https://</template>
        <template #addonAfter>.com</template>
      </XInput>
      <XTextarea placeholder="请输入多行文本…" class="w-full" />
    </div>
    <div class="flex flex-wrap items-center gap-6">
      <XCheckbox v-model="checked" label="多选框 Checkbox" />
      <XCheckbox indeterminate label="半选状态" />
      <XRadioGroup
        v-model="city"
        :options="[{ value: 'a', label: '选项 A' }, { value: 'b', label: '选项 B' }, { value: 'c', label: '选项 C' }]"
      />
      <XSwitch label="开启通知" />
    </div>
  </div>
</template>
