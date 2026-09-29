<script setup lang="ts">
/**
 * XPinInput 验证码输入：shadcn-vue input-otp 原子的二次封装。
 * 分段输入验证码，输入完成触发 complete。
 */
import type { HTMLAttributes } from 'vue'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 绑定值 */
  modelValue?: string
  /** 位数 */
  length?: number
  /** 是否掩码 */
  mask?: boolean
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  modelValue: '',
  length: 6,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  /** 输入完成回调 */
  complete: [value: string]
}>()
</script>

<template>
  <InputOTP
    :model-value="modelValue"
    :maxlength="length"
    :disabled="disabled"
    :class="cn('gap-2', mask && '[&_[data-slot=input-otp-slot]]:text-transparent', props.class)"
    @update:model-value="emit('update:modelValue', $event)"
    @complete="emit('complete', $event)"
  >
    <InputOTPGroup>
      <template v-for="index in length" :key="index">
        <InputOTPSeparator v-if="index - 1 === Math.floor(length / 2) && index - 1 > 0" />
        <InputOTPSlot :index="index - 1" class="h-10 w-10 rounded-lg text-base" />
      </template>
    </InputOTPGroup>
  </InputOTP>
</template>
