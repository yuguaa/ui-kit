<script setup lang="ts">
/**
 * XBreadcrumb 面包屑：显示当前页面在层级结构中的位置。
 * 分隔符支持文本与图标两种形态，面包屑项可带前置图标。
 */
import type { Component, HTMLAttributes, VNode } from 'vue'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import XLink from '@/components/kit/XLink.vue'
import { cn } from '@/lib/utils'

export interface BreadcrumbDataItem {
  /** 标题 */
  title?: string
  /** 链接地址（末项可省略） */
  href?: string
  /** 前置图标 */
  icon?: Component | VNode
}

/** 面包屑项，允许携带自定义字段 */
type BreadcrumbItemData = BreadcrumbDataItem & Record<string, unknown>

defineSlots<{ 'separator-icon'?: () => unknown }>()

const props = withDefaults(defineProps<{
  /** 面包屑项数组 */
  items: BreadcrumbItemData[]
  /** 标题字段名，items 可用自定义字段承载标题 */
  labelKey?: string
  /** 分隔符 */
  separator?: string
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  labelKey: 'title',
  separator: '/',
  disabled: false,
})

/** 按 labelKey 取面包屑项标题 */
function itemLabel(item: BreadcrumbItemData) {
  return String(item[props.labelKey] ?? '')
}
</script>

<template>
  <Breadcrumb :class="cn(disabled && 'pointer-events-none opacity-50', props.class)">
    <BreadcrumbList>
      <template v-for="(item, index) in items" :key="`${itemLabel(item)}-${index}`">
        <BreadcrumbItem>
          <BreadcrumbPage v-if="index === items.length - 1" class="inline-flex items-center gap-1">
            <component :is="item.icon" v-if="item.icon" />
            {{ itemLabel(item) }}
          </BreadcrumbPage>
          <BreadcrumbLink v-else as-child>
            <XLink :to="item.href" color="neutral">
              <template v-if="item.icon" #leading>
                <component :is="item.icon" />
              </template>
              {{ itemLabel(item) }}
            </XLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index < items.length - 1">
          <slot name="separator-icon">{{ separator }}</slot>
        </BreadcrumbSeparator>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
