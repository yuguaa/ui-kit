<script setup lang="ts">
/**
 * XFormField 表单字段：带标签、辅助说明与错误信息的表单字段。
 * 结构与 Nuxt UI 对齐：root > wrapper（labelWrapper + description）> container（控件 + error / help）。
 * 错误信息优先取 error prop，其次按 name 或 errorPattern 匹配表单校验结果。
 * eagerValidation / validateOnInputDelay 通过 provide 供字段内的表单控件读取。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, provide, useId, useSlots } from 'vue'
import { Label, Primitive } from 'reka-ui'
import {
  XFormFieldContextKey,
  injectXForm,
  type FormFieldContext,
} from '@/components/kit/XFormContext'
import { cn } from '@/lib/utils'

type FormFieldSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type FormFieldOrientation = 'vertical' | 'horizontal'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface FormFieldUi {
  root?: string
  wrapper?: string
  labelWrapper?: string
  label?: string
  container?: string
  description?: string
  error?: string
  hint?: string
  help?: string
}

/** 尺寸 → 根节点字号（对齐 Nuxt UI form-field 主题） */
const sizeClasses: Record<FormFieldSize, string> = {
  xs: 'text-xs',
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-sm',
  xl: 'text-base',
}

const props = withDefaults(defineProps<{
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 字段名（关联表单校验结果） */
  name?: string
  /** 正则匹配表单错误名，用于数组字段（如 tags.0） */
  errorPattern?: RegExp
  /** 标签文字 */
  label?: string
  /** 辅助说明 */
  description?: string
  /** 无错误时显示的帮助文案 */
  help?: string
  /** 错误信息：true 强制错误态，false 关闭错误显示 */
  error?: boolean | string
  /** 标签右侧的提示文案（说明填写要求） */
  hint?: string
  /** 尺寸（控制根节点字号） */
  size?: FormFieldSize
  /** 是否必填 */
  required?: boolean
  /** 输入时立即校验，不等待 blur */
  eagerValidation?: boolean
  /** 输入校验的防抖延迟（毫秒） */
  validateOnInputDelay?: number
  /** 排列方向 */
  orientation?: FormFieldOrientation
  /** 控件 id（label 关联用） */
  id?: string
  /** 主题插槽类名 */
  ui?: FormFieldUi
  class?: HTMLAttributes['class']
}>(), {
  error: undefined,
  orientation: 'vertical',
  validateOnInputDelay: 300,
})

const form = injectXForm()

const fallbackId = useId()
const ariaId = computed(() => props.id ?? fallbackId)

/** 字段错误：error prop 优先，其次按 name / errorPattern 匹配表单错误 */
const fieldError = computed(() => {
  if (props.error !== undefined && props.error !== false) return props.error
  if (props.name != null && form.errors[props.name]) return form.errors[props.name]
  const pattern = props.errorPattern
  if (pattern) {
    const key = Object.keys(form.errors).find((name) => pattern.test(name))
    if (key != null) return form.errors[key]
  }
  return undefined
})

/** 有标签或说明时 container 才参与布局（对齐 Nuxt UI 门控） */
const slots = useSlots()
const hasLabel = computed(() => !!props.label || !!slots.label)
const hasDescription = computed(() => !!props.description || !!slots.description)
const hasHint = computed(() => !!props.hint || !!slots.hint)
const hasHelp = computed(() => !!props.help || !!slots.help)
const hasMeta = computed(() => hasLabel.value || hasDescription.value)

provide(
  XFormFieldContextKey,
  computed<FormFieldContext>(() => ({
    name: props.name,
    size: props.size,
    error: fieldError.value,
    eagerValidation: props.eagerValidation,
    validateOnInputDelay: props.validateOnInputDelay,
    errorPattern: props.errorPattern,
    hint: props.hint,
    description: props.description,
    help: props.help,
    ariaId: ariaId.value,
  })),
)
</script>

<template>
  <Primitive
    :as="as ?? 'div'"
    :data-orientation="orientation"
    data-slot="root"
    :class="cn(
      sizeClasses[size ?? 'md'],
      orientation === 'horizontal' && 'flex justify-between place-items-baseline gap-2',
      props.ui?.root,
      props.class,
    )"
  >
    <div data-slot="wrapper" :class="cn(props.ui?.wrapper)">
      <div
        v-if="hasLabel"
        data-slot="labelWrapper"
        :class="cn('flex content-center items-center justify-between gap-1', props.ui?.labelWrapper)"
      >
        <Label
          :for="ariaId"
          data-slot="label"
          :class="cn('block font-medium text-foreground', props.ui?.label)"
        >
          <slot name="label" :label="label">
            {{ label }}
          </slot>
          <span v-if="required" class="ml-0.5 text-error">*</span>
        </Label>
        <span
          v-if="hasHint"
          :id="`${ariaId}-hint`"
          data-slot="hint"
          :class="cn('text-muted-foreground', props.ui?.hint)"
        >
          <slot name="hint" :hint="hint">
            {{ hint }}
          </slot>
        </span>
      </div>

      <p
        v-if="hasDescription"
        :id="`${ariaId}-description`"
        data-slot="description"
        :class="cn('text-muted-foreground', props.ui?.description)"
      >
        <slot name="description" :description="description">
          {{ description }}
        </slot>
      </p>
    </div>

    <div
      :class="hasMeta
        ? cn(
            'relative',
            orientation === 'vertical' && 'mt-1',
            props.ui?.container,
          )
        : undefined"
    >
      <slot :error="fieldError" />
      <div
        v-if="error !== false && ((typeof fieldError === 'string' && fieldError) || !!slots.error)"
        :id="`${ariaId}-error`"
        role="alert"
        data-slot="error"
        :class="cn('mt-2 text-error', props.ui?.error)"
      >
        <slot name="error" :error="fieldError">
          {{ fieldError }}
        </slot>
      </div>
      <div
        v-else-if="hasHelp"
        :id="`${ariaId}-help`"
        data-slot="help"
        :class="cn('mt-2 text-muted-foreground', props.ui?.help)"
      >
        <slot name="help" :help="help">
          {{ help }}
        </slot>
      </div>
    </div>
  </Primitive>
</template>
