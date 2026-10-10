<script setup lang="ts">
/**
 * XCard 卡片：在 shadcn-vue 卡片原子上注入 Nuxt UI 变体语义（variant）。
 * 变体：outline | solid | soft
 * 结构：cover → header（title / description / extra）→ body → footer
 */
import type { Component, HTMLAttributes } from 'vue'
import { useAttrs } from 'vue'
import { Primitive } from 'reka-ui'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type CardSize = 'default' | 'small'
type CardVariant = 'outline' | 'solid' | 'soft'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface CardUi {
  root?: string
  header?: string
  title?: string
  description?: string
  body?: string
  footer?: string
}

/** 变体样式：背景与分割线 */
const variantStyles: Record<CardVariant, string> = {
  outline: 'divide-y divide-border',
  solid: 'bg-foreground text-background divide-y divide-border/50',
  soft: 'bg-muted/50 divide-y divide-border',
}

/** solid 反色底上的描述文字使用半透明白 */
const variantDescriptionStyles: Record<CardVariant, string> = {
  outline: '',
  solid: 'text-background/70',
  soft: '',
}

const sizeClasses: Record<CardSize, string> = {
  default: 'gap-4 p-5',
  small: 'gap-3 p-3',
}

const props = withDefaults(defineProps<{
  /** 卡片标题 */
  title?: string
  /** 标题下方的辅助描述 */
  description?: string
  /** 是否显示边框 */
  bordered?: boolean
  /** 悬浮时阴影加深并高亮边框色 */
  hoverable?: boolean
  /** 卡片尺寸 */
  size?: CardSize
  /** 预设样式 */
  variant?: CardVariant
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: CardUi
  class?: HTMLAttributes['class']
}>(), {
  bordered: true,
  hoverable: false,
  size: 'default',
  variant: 'outline',
  as: 'div',
})

defineOptions({ name: 'XCard', inheritAttrs: false })

const attrs = useAttrs()

/** 透传的 onClick 可能是数组（上层 as-child 合并后），逐个调用 */
function onClick(event: MouseEvent) {
  const handler = attrs.onClick as
    | ((event: MouseEvent) => unknown)
    | Array<(event: MouseEvent) => unknown>
    | undefined
  if (handler == null) return
  const handlers = Array.isArray(handler) ? handler : [handler]
  for (const fn of handlers) fn(event)
}
</script>

<template>
  <Primitive
    :as="as"
    v-bind="{ ...attrs, onClick }"
    data-slot="card"
    :class="cn(
      'overflow-hidden rounded-lg bg-card text-card-foreground',
      variantStyles[variant],
      bordered && 'ring-1 ring-inset ring-border',
      hoverable && 'cursor-pointer transition-shadow duration-200 hover:shadow-md hover:ring-primary/25',
      ui?.root,
      props.class,
    )"
  >
    <slot name="cover" />

    <CardHeader
      v-if="$slots.header || title != null || $slots.title || description != null || $slots.description || $slots.extra"
      :class="cn(ui?.header)"
    >
      <slot name="header">
        <div class="flex items-start justify-between gap-2">
          <div class="flex min-w-0 flex-col gap-0.5">
            <CardTitle v-if="title != null || $slots.title" :class="cn(ui?.title)">
              <slot name="title">{{ title }}</slot>
            </CardTitle>
            <CardDescription v-if="description != null || $slots.description" :class="cn(variantDescriptionStyles[variant], ui?.description)">
              <slot name="description">{{ description }}</slot>
            </CardDescription>
          </div>
          <div v-if="$slots.extra" class="shrink-0">
            <slot name="extra" />
          </div>
        </div>
      </slot>
    </CardHeader>

    <CardContent v-if="$slots.default" :class="cn(sizeClasses[size], ui?.body)">
      <slot />
    </CardContent>

    <CardFooter v-if="$slots.actions || $slots.footer" :class="cn(ui?.footer)">
      <slot name="footer">
        <slot name="actions" />
      </slot>
    </CardFooter>
  </Primitive>
</template>
