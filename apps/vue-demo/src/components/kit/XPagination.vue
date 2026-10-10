<script setup lang="ts">
/**
 * XPagination 分页:按 Nuxt UI pagination 结构二次封装。
 * 由 reka-ui PaginationRoot 计算页码序列(省略号由 showEdges / siblingCount 控制),
 * 页码与首末按钮用 XButton 渲染,color / variant / size 与激活态独立配置。
 */
import type { Component, HTMLAttributes } from 'vue'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Ellipsis } from '@lucide/vue'
import {
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot,
} from 'reka-ui'
import XButton from '@/components/kit/XButton.vue'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

type IconName = InstanceType<typeof XIcon>['$props']['name']
type ButtonColor = NonNullable<InstanceType<typeof XButton>['$props']['color']>
type ButtonVariant = NonNullable<InstanceType<typeof XButton>['$props']['variant']>
type ButtonSize = NonNullable<InstanceType<typeof XButton>['$props']['size']>
type ButtonAs = NonNullable<InstanceType<typeof XButton>['$props']['as']>

/** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
export interface PaginationUi {
  root?: string
  list?: string
  ellipsis?: string
  label?: string
  first?: string
  prev?: string
  item?: string
  next?: string
  last?: string
}

const props = withDefaults(defineProps<{
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 初始页码 */
  defaultPage?: number
  /** 是否禁用 */
  disabled?: boolean
  /** 每页条数 */
  itemsPerPage?: number
  /** 当前页码(受控) */
  page?: number
  /** 始终显示第一页、最后一页与省略号 */
  showEdges?: boolean
  /** 当前页两侧的页码数量 */
  siblingCount?: number
  /** 数据总数 */
  total?: number
  /** 首页按钮图标 */
  firstIcon?: IconName
  /** 上一页按钮图标 */
  prevIcon?: IconName
  /** 下一页按钮图标 */
  nextIcon?: IconName
  /** 末页按钮图标 */
  lastIcon?: IconName
  /** 省略号图标 */
  ellipsisIcon?: IconName
  /** 页码按钮颜色 */
  color?: ButtonColor
  /** 页码按钮样式 */
  variant?: ButtonVariant
  /** 激活页码颜色 */
  activeColor?: ButtonColor
  /** 激活页码样式 */
  activeVariant?: ButtonVariant
  /** 是否显示首页、上一页、下一页与末页按钮 */
  showControls?: boolean
  /** 页码按钮尺寸 */
  size?: ButtonSize
  /** 将页码控件渲染为链接(返回 XButton 的 as) */
  to?: (page: number) => ButtonAs
  /** 主题插槽类名 */
  ui?: PaginationUi
  class?: HTMLAttributes['class']
}>(), {
  color: 'neutral',
  variant: 'outline',
  activeColor: 'primary',
  activeVariant: 'solid',
  showControls: true,
  showEdges: false,
  itemsPerPage: 10,
  siblingCount: 2,
  total: 0,
})

const emit = defineEmits<{ 'update:page': [value: number] }>()
</script>

<template>
  <PaginationRoot
    v-slot="{ page, pageCount }"
    :as="as ?? 'nav'"
    :page="props.page"
    :default-page="props.defaultPage"
    :items-per-page="props.itemsPerPage"
    :total="props.total"
    :sibling-count="props.siblingCount"
    :show-edges="props.showEdges"
    :disabled="props.disabled"
    data-slot="root"
    :class="cn(props.ui?.root, props.class)"
    @update:page="emit('update:page', $event)"
  >
    <PaginationList v-slot="{ items }" data-slot="list" :class="cn('flex items-center gap-1', props.ui?.list)">
      <PaginationFirst
        v-if="props.showControls || !!$slots.first"
        as-child
        data-slot="first"
        :class="props.ui?.first"
      >
        <slot name="first">
          <XButton
            :color="props.color"
            :variant="props.variant"
            :size="props.size"
            :as="props.to?.(1)"
          >
            <template #leading>
              <XIcon v-if="props.firstIcon" :name="props.firstIcon" size="sm" />
              <ChevronsLeft v-else class="size-4" />
            </template>
          </XButton>
        </slot>
      </PaginationFirst>
      <PaginationPrev
        v-if="props.showControls || !!$slots.prev"
        as-child
        data-slot="prev"
        :class="props.ui?.prev"
      >
        <slot name="prev">
          <XButton
            :color="props.color"
            :variant="props.variant"
            :size="props.size"
            :as="page > 1 ? props.to?.(page - 1) : undefined"
          >
            <template #leading>
              <XIcon v-if="props.prevIcon" :name="props.prevIcon" size="sm" />
              <ChevronLeft v-else class="size-4" />
            </template>
          </XButton>
        </slot>
      </PaginationPrev>

      <template v-for="(item, index) in items" :key="index">
        <PaginationListItem
          v-if="item.type === 'page'"
          as-child
          :value="item.value"
          data-slot="item"
          :class="props.ui?.item"
        >
          <slot name="item" v-bind="{ item, index, page, pageCount }">
            <XButton
              :color="page === item.value ? props.activeColor : props.color"
              :variant="page === item.value ? props.activeVariant : props.variant"
              :size="props.size"
              :label="String(item.value)"
              :ui="{ label: cn('min-w-5 text-center', props.ui?.label) }"
              :as="props.to?.(item.value)"
              square
            />
          </slot>
        </PaginationListItem>

        <PaginationEllipsis
          v-else
          as-child
          data-slot="ellipsis"
          :class="cn('pointer-events-none', props.ui?.ellipsis)"
        >
          <slot name="ellipsis" :ui="props.ui">
            <XButton
              as="div"
              :color="props.color"
              :variant="props.variant"
              :size="props.size"
            >
              <template #leading>
                <XIcon v-if="props.ellipsisIcon" :name="props.ellipsisIcon" size="sm" />
                <Ellipsis v-else class="size-4" />
              </template>
            </XButton>
          </slot>
        </PaginationEllipsis>
      </template>

      <PaginationNext
        v-if="props.showControls || !!$slots.next"
        as-child
        data-slot="next"
        :class="props.ui?.next"
      >
        <slot name="next">
          <XButton
            :color="props.color"
            :variant="props.variant"
            :size="props.size"
            :as="page < pageCount ? props.to?.(page + 1) : undefined"
          >
            <template #leading>
              <XIcon v-if="props.nextIcon" :name="props.nextIcon" size="sm" />
              <ChevronRight v-else class="size-4" />
            </template>
          </XButton>
        </slot>
      </PaginationNext>
      <PaginationLast
        v-if="props.showControls || !!$slots.last"
        as-child
        data-slot="last"
        :class="props.ui?.last"
      >
        <slot name="last">
          <XButton
            :color="props.color"
            :variant="props.variant"
            :size="props.size"
            :as="props.to?.(pageCount)"
          >
            <template #leading>
              <XIcon v-if="props.lastIcon" :name="props.lastIcon" size="sm" />
              <ChevronsRight v-else class="size-4" />
            </template>
          </XButton>
        </slot>
      </PaginationLast>
    </PaginationList>
  </PaginationRoot>
</template>
