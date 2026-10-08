<script setup lang="ts">
/**
 * XTextarea 多行文本：shadcn-vue textarea 原子的二次封装。
 * 支持行数、自动调整高度、maxRows 高度上限、字数统计与 error / warning 校验状态。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref, useTemplateRef } from 'vue'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

/* 根节点是包装元素，attrs 需手动透传到真实控件 */
defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 绑定值 */
  modelValue?: string
  /** 行数 */
  rows?: number
  /** 占位文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 自动调整高度 */
  autosize?: boolean
  /** 自动调整高度的行数上限，超出后内容在控件内部滚动 */
  maxRows?: number
  /** 校验状态 */
  status?: 'error' | 'warning'
  /** 最大输入长度 */
  maxLength?: number
  /** 右下角显示字数统计，设置 maxLength 时显示「当前长度 / 最大长度」 */
  showCount?: boolean
  class?: HTMLAttributes['class']
}>(), {
  rows: 3,
  autosize: false,
  showCount: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const statusClasses = {
  error: 'border-error-6 focus-visible:border-error-6 focus-visible:ring-error-6/20',
  warning: 'border-warning-6 focus-visible:border-warning-6 focus-visible:ring-warning-6/20',
}

const rootRef = useTemplateRef<HTMLElement>('rootRef')

/** 内部真实控件：模板 ref 指向原子组件实例，需要通过根元素查找 textarea 元素 */
function textareaEl() {
  return rootRef.value?.querySelector('textarea') ?? undefined
}

/* 未绑定 v-model 时用内部值计数，绑定后直接取 modelValue */
const innerValue = ref('')

function handleInput(value: string | number) {
  const next = String(value ?? '')
  innerValue.value = next
  emit('update:modelValue', next)
}

const count = computed(() => (props.modelValue ?? innerValue.value).length)

/** maxRows 换算为 lh 单位的最大高度，随控件自身行高生效 */
const maxHeightStyle = computed(() =>
  props.autosize && props.maxRows != null ? { maxHeight: `${props.maxRows}lh` } : undefined,
)

function focus() {
  textareaEl()?.focus()
}

function blur() {
  textareaEl()?.blur()
}

defineExpose({ focus, blur })
</script>

<template>
  <div ref="rootRef" :class="cn('relative w-full', props.class)">
    <Textarea
      v-bind="$attrs"
      :model-value="modelValue"
      :rows="rows"
      :disabled="disabled"
      :placeholder="placeholder"
      :maxlength="maxLength"
      :class="cn(
        status && statusClasses[status],
        autosize && 'field-sizing-content resize-none',
        maxHeightStyle != null && 'overflow-auto',
        showCount && 'pb-6',
        props.class,
      )"
      :style="maxHeightStyle"
      @update:model-value="handleInput($event)"
    />
    <span
      v-if="showCount"
      class="pointer-events-none absolute right-3 bottom-2 text-xs tabular-nums text-muted-foreground"
    >
      <template v-if="maxLength != null">{{ count }} / {{ maxLength }}</template>
      <template v-else>{{ count }}</template>
    </span>
  </div>
</template>
