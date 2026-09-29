<script setup lang="ts">
/**
 * XBreadcrumb 面包屑：显示当前页面在层级结构中的位置。
 */
import type { HTMLAttributes } from 'vue'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import XLink from '@/components/kit/XLink.vue'
import { cn } from '@/lib/utils'

export interface BreadcrumbDataItem {
  /** 标题 */
  title: string
  /** 链接地址（末项可省略） */
  href?: string
}

const props = withDefaults(defineProps<{
  /** 面包屑项数组 */
  items: BreadcrumbDataItem[]
  /** 分隔符 */
  separator?: string
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  separator: '/',
  disabled: false,
})
</script>

<template>
  <Breadcrumb :class="cn(disabled && 'pointer-events-none opacity-50', props.class)">
    <BreadcrumbList>
      <template v-for="(item, index) in items" :key="`${item.title}-${index}`">
        <BreadcrumbItem>
          <BreadcrumbPage v-if="index === items.length - 1">{{ item.title }}</BreadcrumbPage>
          <BreadcrumbLink v-else as-child>
            <XLink :to="item.href" color="neutral">{{ item.title }}</XLink>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator v-if="index < items.length - 1">{{ separator }}</BreadcrumbSeparator>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>
