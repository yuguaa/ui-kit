<script setup lang="ts">
/**
 * XLink 链接：页面内或跨页面的超链接。
 * 与 Nuxt UI Link 对齐：active / inactiveClass / ui.base / as，
 * 保留 kit 既有 color 语义与 leading / trailing 图标插槽。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed, useAttrs } from 'vue'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface LinkUi {
  base?: string
}

type LinkColor = 'primary' | 'secondary' | 'neutral'

defineOptions({ name: 'XLink', inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 链接地址 */
  to?: string
  /** 颜色 */
  color?: LinkColor
  /** 激活态 */
  active?: boolean
  /** 非激活态附加类名 */
  inactiveClass?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: LinkUi
  class?: HTMLAttributes['class']
}>(), {
  color: 'primary',
  active: false,
  disabled: false,
})

const attrs = useAttrs()

/** 颜色映射：hover 文字过渡与激活强调 */
const colorClasses: Record<LinkColor, string> = {
  primary: 'text-primary hover:text-primary/75',
  secondary: 'text-foreground hover:text-muted-foreground',
  neutral: 'text-muted-foreground hover:text-foreground',
}

function onClick(event: MouseEvent) {
  if (props.disabled || !props.to) event.preventDefault()

  const handler = attrs.onClick as
    | ((event: MouseEvent) => unknown)
    | Array<(event: MouseEvent) => unknown>
    | undefined
  if (handler == null) return

  /* 透传的处理器可能是数组（上层 as-child 合并后），逐个调用 */
  const handlers = Array.isArray(handler) ? handler : [handler]
  for (const fn of handlers) fn(event)
}

/** 透传属性：onClick 换成包装后的处理函数，其余原样透传 */
const forwardedAttrs = computed(() => ({ ...attrs, onClick }))
</script>

<template>
  <Primitive
    v-bind="forwardedAttrs"
    :as="as ?? 'a'"
    :href="disabled ? undefined : to"
    :aria-current="active ? 'page' : undefined"
    :aria-disabled="disabled || undefined"
    :class="cn(
      'inline-flex items-center gap-1 rounded text-sm font-medium transition-colors outline-none cursor-pointer focus-visible:ring-3 focus-visible:ring-ring/50',
      colorClasses[color],
      active && 'text-primary/75 underline underline-offset-4',
      !active && inactiveClass,
      disabled && 'cursor-not-allowed opacity-75',
      ui?.base,
      props.class,
    )"
  >
    <slot name="leading" />
    <slot />
    <slot name="trailing" />
  </Primitive>
</template>
