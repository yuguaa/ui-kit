<script setup lang="ts">
/**
 * XInput 输入框：shadcn-vue input 原子的二次封装。
 * 支持前缀/后缀图标、前后置标签（addon）、clearable 清空与 error / warning 校验状态。
 */
import type { HTMLAttributes } from 'vue'
import { computed, useAttrs, useTemplateRef } from 'vue'
import { X } from '@lucide/vue'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/* 属性透传到内部 input，避免落到外层包装元素 */
defineOptions({ inheritAttrs: false })

type InputSize = 'sm' | 'md'
type InputStatus = 'error' | 'warning'

const props = withDefaults(defineProps<{
  /** 控件尺寸 */
  size?: InputSize
  /** 校验状态 */
  status?: InputStatus
  /** 占位提示文字 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 最大输入长度 */
  maxLength?: number
  /** 是否显示清空按钮 */
  clearable?: boolean
  class?: HTMLAttributes['class']
}>(), {
  size: 'md',
  clearable: false,
})

const emit = defineEmits<{
  /** 点击清空按钮时回调 */
  clear: []
}>()

const sizeClasses: Record<InputSize, string> = {
  sm: 'h-7 px-2 text-sm',
  md: 'h-9 px-3 text-sm',
}

const statusClasses: Record<InputStatus, string> = {
  error: 'border-error-6 focus-visible:border-error-6 focus-visible:ring-error-6/20',
  warning: 'border-warning-6 focus-visible:border-warning-6 focus-visible:ring-warning-6/20',
}

const rootRef = useTemplateRef<HTMLElement>('rootRef')

/** 内部真实控件：模板 ref 指向原子组件实例，需要通过根元素查找 input 元素 */
function inputEl() {
  return rootRef.value?.querySelector('input') ?? undefined
}

/** 输入值（支持 v-model） */
const model = defineModel<string | number>({ default: '' })

const attrs = useAttrs()

/* 只读状态经 $attrs 透传，此处读取用于控制清空按钮显隐 */
const isReadonly = computed(() => attrs.readonly === '' || attrs.readonly === true)

/* 有值且未禁用、未只读时才展示清空按钮 */
const showClear = computed(
  () => props.clearable && model.value !== '' && model.value != null && !props.disabled && !isReadonly.value,
)

/** 清空值并恢复焦点 */
function handleClear() {
  model.value = ''
  emit('clear')
  focus()
}

/** 使输入框获得焦点 */
function focus() {
  inputEl()?.focus()
}

/** 使输入框失去焦点 */
function blur() {
  inputEl()?.blur()
}

/** 选中输入框内容 */
function select() {
  inputEl()?.select()
}

defineExpose({ focus, blur, select })
</script>

<template>
  <span ref="rootRef" class="flex w-full items-stretch">
    <span
      v-if="$slots.addonBefore"
      class="inline-flex items-center rounded-l-lg border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground"
    >
      <slot name="addonBefore" />
    </span>
    <span class="relative flex w-full min-w-0 flex-1 items-center" :class="cn($slots.addonBefore && '[&_input]:rounded-l-none', $slots.addonAfter && '[&_input]:rounded-r-none')">
      <span v-if="$slots.prefix" class="pointer-events-none absolute left-3 flex items-center text-muted-foreground [&_svg]:size-4">
        <slot name="prefix" />
      </span>
      <Input
        v-bind="$attrs"
        v-model="model"
        :class="cn(
          sizeClasses[size],
          $slots.prefix && 'pl-9',
          $slots.suffix && (showClear ? 'pr-12' : 'pr-9'),
          showClear && !$slots.suffix && 'pr-7',
          status && statusClasses[status],
          props.class,
        )"
        :disabled="disabled"
        :maxlength="maxLength"
        :placeholder="placeholder"
      />
      <span
        v-if="$slots.suffix"
        class="pointer-events-none absolute flex items-center text-muted-foreground [&_svg]:size-4"
        :class="showClear ? 'right-8' : 'right-3'"
      >
        <slot name="suffix" />
      </span>
      <Button
        v-if="showClear"
        type="button"
        variant="ghost"
        size="icon-xs"
        aria-label="清空"
        class="absolute right-2 size-4 rounded-full text-muted-foreground opacity-70 hover:bg-transparent hover:opacity-100 [&_svg]:size-3.5"
        @click="handleClear"
      >
        <X />
      </Button>
    </span>
    <span
      v-if="$slots.addonAfter"
      class="inline-flex items-center rounded-r-lg border border-l-0 border-input bg-muted px-3 text-sm text-muted-foreground"
    >
      <slot name="addonAfter" />
    </span>
  </span>
</template>
