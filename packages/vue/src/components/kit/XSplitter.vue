<script setup lang="ts">
/**
 * XSplitter 分割面板：可拖拽调整大小的分栏面板。
 * 基于 reka-ui Splitter 原语，结构对齐 Nuxt UI：root → panel + handle 交替。
 * 支持 items 数组形态（任意数量面板）与 first / second 双面板便捷形态。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from 'reka-ui'
import { cn } from '@/lib/utils'

/** 主题插槽类名，键名与 Nuxt UI 主题保持一致 */
export interface SplitterUi {
  root?: string
  panel?: string
  handle?: string
}

/** 分割面板项 */
export interface SplitterPanelItem {
  /** 面板 id，默认自动生成 */
  id?: string
  /** 初始尺寸（百分比） */
  defaultSize?: number
  /** 最小尺寸（百分比），默认 10 */
  minSize?: number
  /** 最大尺寸（百分比），默认 100 */
  maxSize?: number
  /** 拖拽越过最小尺寸一半时折叠 */
  collapsible?: boolean
  /** 折叠后的尺寸 */
  collapsedSize?: number
  /** 尺寸单位 */
  sizeUnit?: '%' | 'px'
  /** 内容插槽名，默认 panel-{index} */
  slot?: string
  class?: HTMLAttributes['class']
  ui?: { panel?: string }
  [key: string]: any
}

defineOptions({ name: 'XSplitter', inheritAttrs: false })

const props = withDefaults(defineProps<{
  /** 方向 */
  orientation?: 'horizontal' | 'vertical'
  /** 面板数组；未提供时使用 first / second 双面板形态 */
  items?: SplitterPanelItem[]
  /** 锁定全部拖拽 */
  disabled?: boolean
  /** 分组 id，同时用于派生面板与拖拽条 id */
  id?: string
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 主题插槽类名 */
  ui?: SplitterUi
  /** 双面板形态：最小尺寸（百分比） */
  minSize?: number
  /** 双面板形态：默认尺寸（百分比） */
  defaultSize?: number
  /** 双面板形态：受控尺寸（百分比） */
  size?: number
  /** 双面板形态：拖拽越过边界时折叠对应面板 */
  collapsible?: boolean
  class?: HTMLAttributes['class']
}>(), {
  orientation: 'horizontal',
  disabled: false,
  minSize: 20,
  defaultSize: 50,
  collapsible: false,
})

const emit = defineEmits<{
  /** 布局变化 */
  layout: [sizes: number[]]
  /** 面板折叠 */
  collapse: [index: number]
  /** 面板展开 */
  expand: [index: number]
  /** 面板尺寸变化 */
  resize: [index: number, size: number, prevSize?: number]
  /** 拖拽状态变化 */
  dragging: [index: number, dragging: boolean]
}>()

/** 双面板便捷形态：first / second 插槽映射为两个面板项 */
const internalItems = computed<SplitterPanelItem[]>(() => {
  if (props.items) return props.items
  return [
    {
      defaultSize: props.size ?? props.defaultSize,
      minSize: props.minSize,
      collapsible: props.collapsible,
      slot: 'first',
    },
    {
      collapsible: props.collapsible,
      slot: 'second',
    },
  ]
})

/** 面板 id 由分组 id 派生，保证服务端与客户端一致 */
function getPanelId(item: SplitterPanelItem, index: number) {
  return item.id ?? (props.id ? `${props.id}-panel-${index}` : undefined)
}

function getHandleId(index: number) {
  return props.id ? `${props.id}-handle-${index}` : undefined
}
</script>

<template>
  <SplitterGroup
    v-bind="$attrs"
    :id="id"
    :as="as"
    :direction="orientation"
    data-slot="root"
    :class="cn('flex w-full', ui?.root, props.class)"
    @layout="(sizes: number[]) => emit('layout', sizes)"
  >
    <template v-for="(item, index) in internalItems" :key="item.id ?? index">
      <SplitterPanel
        :id="getPanelId(item, index)"
        v-slot="{ isCollapsed, collapse, expand, resize }"
        :default-size="item.defaultSize"
        :min-size="item.minSize"
        :max-size="item.maxSize"
        :collapsible="item.collapsible"
        :collapsed-size="item.collapsedSize"
        :size-unit="item.sizeUnit"
        data-slot="panel"
        :class="cn('flex min-h-0 min-w-0', ui?.panel, item.ui?.panel, item.class)"
        @collapse="emit('collapse', index)"
        @expand="emit('expand', index)"
        @resize="(size: number, prevSize?: number) => emit('resize', index, size, prevSize)"
      >
        <slot
          :name="(item.slot ?? `panel-${index}`) as string"
          :item="item"
          :index="index"
          :collapsed="isCollapsed"
          :collapse="collapse"
          :expand="expand"
          :resize="resize"
        />
      </SplitterPanel>

      <SplitterResizeHandle
        v-if="index < internalItems.length - 1"
        :id="getHandleId(index)"
        :disabled="disabled"
        data-slot="handle"
        :class="cn(
          'group relative shrink-0 focus-visible:outline-2 focus-visible:outline-primary data-[panel-resize-handle-enabled=false]:cursor-default',
          orientation === 'horizontal' ? 'w-2 cursor-col-resize' : 'h-2 cursor-row-resize',
          ui?.handle,
        )"
        @dragging="(dragging: boolean) => emit('dragging', index, dragging)"
      >
        <slot name="resize-handle" :index="index" />
      </SplitterResizeHandle>
    </template>
  </SplitterGroup>
</template>
