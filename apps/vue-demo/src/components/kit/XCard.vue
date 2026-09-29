<script setup lang="ts">
/**
 * XCard 卡片：通用容器，承载标题、操作区、封面与底部操作。
 * hoverable 时悬浮上浮 2px 并加深阴影。
 */
import type { HTMLAttributes } from 'vue'
import { motion } from 'motion-v'
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { kitMotion } from '@/lib/kit/motion'
import { cn } from '@/lib/utils'

type CardSize = 'default' | 'small'

const props = withDefaults(defineProps<{
  /** 卡片标题 */
  title?: string
  /** 标题下方的辅助描述 */
  description?: string
  /** 是否显示边框 */
  bordered?: boolean
  /** 悬浮时提升效果 */
  hoverable?: boolean
  /** 卡片尺寸 */
  size?: CardSize
  class?: HTMLAttributes['class']
}>(), {
  bordered: true,
  hoverable: false,
  size: 'default',
})

const emit = defineEmits<{
  /** 点击卡片时触发 */
  click: [event: MouseEvent]
  /** 悬浮卡片时触发 */
  hover: [event: MouseEvent]
}>()

const sizeClasses: Record<CardSize, string> = {
  default: 'gap-4 p-5',
  small: 'gap-3 p-3',
}
</script>

<template>
  <motion.div
    :class="cn(
      'overflow-hidden rounded-lg border bg-card text-card-foreground',
      hoverable && 'cursor-pointer hover:shadow-md',
      props.class,
    )"
    :while-hover="hoverable ? { y: -2 } : undefined"
    :transition="kitMotion.tokens.fast"
    @click="emit('click', $event)"
    @mouseenter="emit('hover', $event)"
  >
    <slot name="cover" />
    <CardHeader v-if="title != null || description != null || $slots.extra" :class="cn(!bordered && 'border-0')">
      <div class="flex items-start justify-between gap-2">
        <div class="flex min-w-0 flex-col gap-0.5">
          <CardTitle v-if="title != null || $slots.title"><slot name="title">{{ title }}</slot></CardTitle>
          <CardDescription v-if="description != null || $slots.description">
            <slot name="description">{{ description }}</slot>
          </CardDescription>
        </div>
        <div v-if="$slots.extra" class="shrink-0">
          <slot name="extra" />
        </div>
      </div>
    </CardHeader>
    <CardContent v-if="$slots.default" :class="cn(sizeClasses[size], !bordered && 'border-0')">
      <slot />
    </CardContent>
    <CardFooter v-if="$slots.actions" :class="cn(!bordered && 'border-0')">
      <slot name="actions" />
    </CardFooter>
  </motion.div>
</template>
