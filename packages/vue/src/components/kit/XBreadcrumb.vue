<script setup lang="ts">
/**
 * XBreadcrumb 面包屑：显示当前页面在层级结构中的位置。
 * 与 Nuxt UI Breadcrumb 对齐：color / labelKey / separatorIcon 属性、
 * separator 插槽与 root · list · item · link 等主题插槽键。
 */
import type { Component, HTMLAttributes, VNode } from 'vue'
import { Primitive } from 'reka-ui'
import XIcon, { type IconName } from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface BreadcrumbUi {
  root?: string
  list?: string
  item?: string
  link?: string
  linkLeadingIcon?: string
  linkLabel?: string
  separator?: string
  separatorIcon?: string
}

type BreadcrumbColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'

export interface BreadcrumbDataItem {
  /** 标题 */
  title?: string
  /** 链接地址（末项可省略） */
  href?: string
  /** 前置图标 */
  icon?: Component | VNode
  /** 强制激活态（默认末项激活） */
  active?: boolean
}

/** 面包屑项，允许携带自定义字段 */
type BreadcrumbItemData = BreadcrumbDataItem & Record<string, unknown>

const props = withDefaults(defineProps<{
  /** 面包屑项数组 */
  items: BreadcrumbItemData[]
  /** 标题字段名，items 可用自定义字段承载标题 */
  labelKey?: string
  /** 激活项文字颜色 */
  color?: BreadcrumbColor
  /** 分隔符图标：图标名或组件，默认 chevron-right */
  separatorIcon?: IconName | Component
  /** 是否禁用 */
  disabled?: boolean
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: BreadcrumbUi
  class?: HTMLAttributes['class']
}>(), {
  labelKey: 'title',
  color: 'primary',
  separatorIcon: 'chevron-right',
})

/** 激活项文字颜色（与 XButton link 变体一致的字面量） */
const colorClasses: Record<BreadcrumbColor, string> = {
  primary: 'text-primary-6',
  secondary: 'text-secondary-foreground',
  neutral: 'text-neutral-6',
  success: 'text-success-6',
  info: 'text-info-6',
  warning: 'text-warning-7',
  error: 'text-error-6',
}

/** 按 labelKey 取面包屑项标题 */
function itemLabel(item: BreadcrumbItemData) {
  return String(item[props.labelKey] ?? '')
}

/** 激活项：项自身 active 优先，否则末项激活 */
function isActive(item: BreadcrumbItemData, index: number) {
  return item.active ?? index === props.items.length - 1
}
</script>

<template>
  <Primitive
    :as="as ?? 'nav'"
    aria-label="breadcrumb"
    data-slot="root"
    :class="cn('relative min-w-0', disabled && 'pointer-events-none opacity-50', ui?.root, props.class)"
  >
    <ol data-slot="list" :class="cn('flex items-center gap-1.5', ui?.list)">
      <template v-for="(item, index) in items" :key="index">
        <li data-slot="item" :class="cn('flex min-w-0', ui?.item)">
          <Primitive
            :as="item.href != null ? 'a' : 'span'"
            :href="item.href"
            :aria-current="isActive(item, index) && index === items.length - 1 ? 'page' : undefined"
            data-slot="link"
            :class="cn(
              'group relative flex items-center gap-1.5 text-sm min-w-0 rounded-md',
              isActive(item, index)
                ? cn('font-semibold', colorClasses[color])
                : 'text-muted-foreground font-medium',
              item.href != null && !isActive(item, index) && 'hover:text-foreground transition-colors',
              ui?.link,
            )"
          >
            <component
              :is="item.icon"
              v-if="item.icon"
              data-slot="linkLeadingIcon"
              :class="cn('shrink-0 size-5', ui?.linkLeadingIcon)"
            />
            <span v-if="itemLabel(item)" data-slot="linkLabel" :class="cn('truncate', ui?.linkLabel)">
              {{ itemLabel(item) }}
            </span>
          </Primitive>
        </li>

        <li
          v-if="index < items.length - 1"
          role="presentation"
          aria-hidden="true"
          data-slot="separator"
          :class="cn('flex', ui?.separator)"
        >
          <slot name="separator">
            <XIcon
              v-if="typeof separatorIcon === 'string'"
              :name="separatorIcon"
              data-slot="separatorIcon"
              :class="cn('shrink-0 size-5 text-muted-foreground', ui?.separatorIcon)"
            />
            <component
              :is="separatorIcon"
              v-else
              data-slot="separatorIcon"
              :class="cn('shrink-0 size-5 text-muted-foreground', ui?.separatorIcon)"
            />
          </slot>
        </li>
      </template>
    </ol>
  </Primitive>
</template>
