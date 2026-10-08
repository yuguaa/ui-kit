<script setup lang="ts">
/**
 * XFormField 表单字段：带标签、辅助说明与错误信息的表单字段。
 * 错误信息优先取表单校验结果（按 name），其次取 error prop。
 */
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { Label } from '@/components/ui/label'
import { injectXForm } from '@/components/kit/XFormContext'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 字段名（关联表单校验结果） */
  name?: string
  /** 标签文字 */
  label?: string
  /** 标签右侧的提示文案（说明填写要求） */
  hint?: string
  /** 辅助说明 */
  description?: string
  /** 错误信息 */
  error?: string
  /** 是否必填 */
  required?: boolean
  /** 控件 id（label 关联用） */
  id?: string
  class?: HTMLAttributes['class']
}>(), {
  required: false,
})

const form = injectXForm()

const fieldError = computed(() => (props.name != null ? form.errors[props.name] : undefined) ?? props.error)
</script>

<template>
  <div :class="cn('flex flex-col gap-1.5', props.class)">
    <div v-if="label != null || $slots.label || hint != null || $slots.hint" class="flex items-center gap-1">
      <Label v-if="label != null || $slots.label" :for="id" class="text-sm font-medium">
        <slot name="label">
          {{ label }}
          <span v-if="required" class="ml-0.5 text-error-6">*</span>
        </slot>
      </Label>
      <span v-if="hint != null || $slots.hint" class="text-sm text-muted-foreground">
        <slot name="hint">{{ hint }}</slot>
      </span>
    </div>
    <slot />
    <p v-if="fieldError != null" role="alert" class="text-sm text-error-6">
      <slot name="error">{{ fieldError }}</slot>
    </p>
    <p v-else-if="description != null || $slots.description" class="text-sm text-muted-foreground">
      <slot name="description">{{ description }}</slot>
    </p>
  </div>
</template>
