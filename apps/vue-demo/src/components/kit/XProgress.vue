<script setup lang="ts">
/**
 * XProgress 进度条：展示操作的当前进度，支持线形与圆形。
 */
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

type ProgressType = 'line' | 'circle'
type ProgressStatus = 'normal' | 'success' | 'exception' | 'active'

const props = withDefaults(defineProps<{
  /** 完成百分比 */
  percent?: number
  /** 进度类型 */
  type?: ProgressType
  /** 进度状态 */
  status?: ProgressStatus
  /** 进度条颜色 */
  strokeColor?: string
  /** 是否显示数值 */
  showInfo?: boolean
  /** 圆形直径（px） */
  size?: number
  class?: HTMLAttributes['class']
}>(), {
  percent: 0,
  type: 'line',
  status: 'normal',
  showInfo: true,
  size: 96,
})

const safePercent = computed(() => Math.min(100, Math.max(0, props.percent)))

const statusClasses: Record<ProgressStatus, string> = {
  normal: '[&_[data-slot=progress-indicator]]:bg-primary-6',
  success: '[&_[data-slot=progress-indicator]]:bg-success-6',
  exception: '[&_[data-slot=progress-indicator]]:bg-error-6',
  active: '[&_[data-slot=progress-indicator]]:bg-primary-6 [&_[data-slot=progress-indicator]]:animate-pulse',
}

const radius = 42
const circumference = 2 * Math.PI * radius
const dashOffset = computed(() => circumference - (safePercent.value / 100) * circumference)
</script>

<template>
  <span v-if="type === 'circle'" :class="cn('inline-flex items-center gap-2', props.class)">
    <svg :width="size" :height="size" viewBox="0 0 100 100" class="-rotate-90">
      <circle cx="50" cy="50" :r="radius" fill="none" stroke-width="8" class="stroke-border" />
      <circle
        cx="50"
        cy="50"
        :r="radius"
        fill="none"
        stroke-width="8"
        stroke-linecap="round"
        :stroke="strokeColor ?? 'currentColor'"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        :class="cn(strokeColor == null && statusClasses[status])"
        style="transition: stroke-dashoffset 200ms ease-in-out"
      />
    </svg>
    <span v-if="showInfo" class="text-sm font-medium">{{ safePercent }}%</span>
  </span>
  <span v-else :class="cn('flex w-full items-center gap-2', props.class)">
    <Progress
      :model-value="safePercent"
      :class="cn(
        'h-2 flex-1 [&_[data-slot=progress-track]]:h-2',
        strokeColor == null && statusClasses[status],
        strokeColor != null && '[&_[data-slot=progress-indicator]]:bg-(--progress-color)',
      )"
      :style="strokeColor != null ? { '--progress-color': strokeColor } : undefined"
    />
    <span v-if="showInfo" class="text-sm font-medium">{{ safePercent }}%</span>
  </span>
</template>
