<script setup lang="ts">
/**
 * XAccordion 手风琴：可展开与折叠的内容分组。
 * 结构对齐 Nuxt UI：root → item → header → trigger（leading / label / trailing）→ content → body。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { ChevronDown } from '@lucide/vue'
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'reka-ui'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface AccordionUi {
  root?: string
  item?: string
  header?: string
  trigger?: string
  content?: string
  body?: string
  leadingIcon?: string
  trailingIcon?: string
  label?: string
}

/** 单项主题插槽类名 */
export interface AccordionItemUi {
  item?: string
  header?: string
  trigger?: string
  leadingIcon?: string
  label?: string
  trailingIcon?: string
  content?: string
  body?: string
}

/** 手风琴项：labelKey / valueKey 决定字段来源，图标可为 XIcon 图标名或组件 */
export interface AccordionDataItem {
  /** 标题文本（字段名由 labelKey 决定） */
  label?: string
  /** 前置图标 */
  icon?: string | Component
  /** 后置图标，优先于组件级 trailingIcon */
  trailingIcon?: string | Component
  /** 内容文本 */
  content?: string
  /** 唯一值（字段名由 valueKey 决定），默认取索引 */
  value?: string
  /** 该项是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
  ui?: AccordionItemUi
  [key: string]: any
}

defineOptions({ name: 'XAccordion', inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 手风琴项数组 */
  items?: AccordionDataItem[]
  /** 是否可多开 */
  multiple?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 展开项是否可全部收起 */
  collapsible?: boolean
  /** 隐藏时是否卸载内容 */
  unmountOnHide?: boolean
  /** 默认展开项 */
  defaultValue?: string | string[]
  /** 标签字段名 */
  labelKey?: string
  /** 值字段名 */
  valueKey?: string
  /** 后置图标，单项 trailingIcon 优先 */
  trailingIcon?: string | Component
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: AccordionUi
  class?: HTMLAttributes['class']
}>(), {
  items: () => [],
  multiple: false,
  disabled: false,
  collapsible: true,
  unmountOnHide: true,
  labelKey: 'label',
  valueKey: 'value',
})

const model = defineModel<string | string[]>()

/* 未受控时传 undefined，由 reka-ui 接管状态并应用 defaultValue */
const accordionValue = computed(() => model.value)

/** 按字段名（支持点路径）从项中取值 */
function getValue(item: AccordionDataItem, key: string): unknown {
  let value: unknown = item
  for (const part of key.split('.')) {
    if (value == null) return undefined
    value = (value as Record<string, unknown>)[part]
  }
  return value
}

/** 图标渲染组件：字符串走 XIcon，否则原样渲染 */
function iconComponent(icon: unknown): Component {
  if (typeof icon === 'string') return XIcon
  return (icon as Component) ?? ChevronDown
}

/** 字符串图标传给 XIcon 的 name */
function iconProps(icon: unknown): Record<string, unknown> {
  return typeof icon === 'string' ? { name: icon as never } : {}
}
</script>

<template>
  <AccordionRoot
    v-bind="$attrs"
    :as="as"
    :type="multiple ? 'multiple' : 'single'"
    :collapsible="collapsible"
    :model-value="accordionValue"
    :default-value="defaultValue"
    :disabled="disabled"
    :unmount-on-hide="unmountOnHide"
    data-slot="root"
    :class="cn('w-full', ui?.root, props.class)"
    @update:model-value="model = ($event ?? (multiple ? [] : '')) as string | string[]"
  >
    <AccordionItem
      v-for="(item, index) in items"
      v-slot="{ open }"
      :key="(getValue(item, valueKey) as string | number | undefined) ?? index"
      :value="String(getValue(item, valueKey) ?? index)"
      :disabled="item.disabled"
      data-slot="item"
      :class="cn('border-b border-border last:border-b-0', ui?.item, item.ui?.item, item.class)"
    >
      <AccordionHeader as="div" data-slot="header" :class="cn('flex', ui?.header, item.ui?.header)">
        <AccordionTrigger
          data-slot="trigger"
          :class="cn(
            'group flex flex-1 items-center gap-1.5 rounded-md py-3.5 font-medium text-sm outline-primary/25 min-w-0 focus-visible:outline-3',
            item.disabled && 'cursor-not-allowed opacity-75',
            ui?.trigger,
            item.ui?.trigger,
          )"
        >
          <slot name="leading" :item="item" :index="index" :open="open">
            <component
              v-if="item.icon"
              :is="iconComponent(item.icon)"
              v-bind="iconProps(item.icon)"
              data-slot="leadingIcon"
              :class="cn('size-5 shrink-0', ui?.leadingIcon, item.ui?.leadingIcon)"
            />
          </slot>

          <span
            v-if="getValue(item, labelKey) != null || $slots.default"
            data-slot="label"
            :class="cn('text-start break-words', ui?.label, item.ui?.label)"
          >
            <slot :item="item" :index="index" :open="open">{{ getValue(item, labelKey) }}</slot>
          </span>

          <slot name="trailing" :item="item" :index="index" :open="open">
            <component
              :is="iconComponent(item.trailingIcon ?? trailingIcon)"
              v-bind="iconProps(item.trailingIcon ?? trailingIcon)"
              data-slot="trailingIcon"
              :class="cn(
                'ms-auto size-5 shrink-0 transition-transform duration-200 ease-out group-data-[state=open]:rotate-180 motion-reduce:transition-none',
                ui?.trailingIcon,
                item.ui?.trailingIcon,
              )"
            />
          </slot>
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent
        v-if="item.content != null || $slots.content || $slots.body"
        data-slot="content"
        :class="cn(
          'focus:outline-none data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up data-[state=closed]:overflow-hidden',
          ui?.content,
          item.ui?.content,
        )"
      >
        <slot name="content" :item="item" :index="index" :open="open">
          <div data-slot="body" :class="cn('text-sm pb-3.5', ui?.body, item.ui?.body)">
            <slot name="body" :item="item" :index="index" :open="open">{{ item.content }}</slot>
          </div>
        </slot>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
