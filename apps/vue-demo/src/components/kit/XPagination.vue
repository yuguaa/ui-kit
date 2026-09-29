<script setup lang="ts">
/**
 * XPagination 分页：对长列表数据进行分页浏览。
 */
import type { HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { ChevronLeft, ChevronRight } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import XSelectMenu from '@/components/kit/XSelectMenu.vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  /** 当前页数 */
  current?: number
  /** 数据总数 */
  total: number
  /** 每页条数 */
  pageSize?: number
  /** 是否显示每页条数切换 */
  showSizeChanger?: boolean
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  pageSize: 10,
  showSizeChanger: false,
  disabled: false,
})

const emit = defineEmits<{
  /** 页码或每页条数变化回调 */
  change: [page: number, pageSize: number]
}>()

const innerPage = ref(1)

const pageCount = computed(() => Math.max(1, Math.ceil(props.total / props.pageSize)))
const safeCurrent = computed(() => Math.min(props.current ?? innerPage.value, pageCount.value))

/** 计算带省略号的页码序列 */
const pages = computed(() => {
  const count = pageCount.value
  if (count <= 7) return Array.from({ length: count }, (_, i) => i + 1)
  const result: (number | 'ellipsis')[] = [1]
  if (safeCurrent.value > 3) result.push('ellipsis')
  for (let i = Math.max(2, safeCurrent.value - 1); i <= Math.min(count - 1, safeCurrent.value + 1); i++) result.push(i)
  if (safeCurrent.value < count - 2) result.push('ellipsis')
  result.push(count)
  return result
})

function go(page: number) {
  if (page < 1 || page > pageCount.value || props.disabled) return
  if (props.current == null) innerPage.value = page
  emit('change', page, props.pageSize)
}

function changePageSize(value: string | string[]) {
  const next = Number(Array.isArray(value) ? value[0] : value)
  if (props.current == null) {
    innerPage.value = 1
  }
  emit('change', 1, next)
}
</script>

<template>
  <div :class="cn('flex items-center gap-1.5', disabled && 'pointer-events-none opacity-50', props.class)">
    <Button variant="outline" size="sm" aria-label="上一页" :disabled="safeCurrent <= 1" @click="go(safeCurrent - 1)">
      <ChevronLeft class="size-4" />
    </Button>
    <template v-for="(page, index) in pages" :key="`${page}-${index}`">
      <span v-if="page === 'ellipsis'" class="inline-flex size-7 items-center justify-center text-sm text-muted-foreground">
        …
      </span>
      <Button
        v-else
        :variant="page === safeCurrent ? 'default' : 'outline'"
        size="sm"
        :aria-current="page === safeCurrent ? 'page' : undefined"
        :class="cn(page === safeCurrent && 'bg-primary-6 text-white hover:bg-primary-5')"
        @click="go(page)"
      >
        <slot name="itemRender" :page="page">{{ page }}</slot>
      </Button>
    </template>
    <Button variant="outline" size="sm" aria-label="下一页" :disabled="safeCurrent >= pageCount" @click="go(safeCurrent + 1)">
      <ChevronRight class="size-4" />
    </Button>
    <XSelectMenu
      v-if="showSizeChanger"
      :options="[10, 20, 50, 100].map((size) => ({ label: `${size} 条/页`, value: String(size) }))"
      :model-value="String(pageSize)"
      class="ml-2 w-28"
      @update:model-value="changePageSize"
    />
  </div>
</template>
