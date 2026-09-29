<script setup lang="ts">
/**
 * XAvatar 头像：展示用户形象，支持圆形/方形、五档尺寸、图片与图标。
 */
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

type AvatarShape = 'circle' | 'square'
type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const props = withDefaults(defineProps<{
  /** 头像形状 */
  shape?: AvatarShape
  /** 头像尺寸 */
  size?: AvatarSize
  /** 图片地址 */
  src?: string
  /** 图片描述文本 */
  alt?: string
  class?: HTMLAttributes['class']
}>(), {
  shape: 'circle',
  size: 'md',
})

const emit = defineEmits<{
  /** 图片加载失败回调 */
  error: [event: Event]
}>()

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'size-5 text-xs',
  sm: 'size-6 text-xs',
  md: 'size-8 text-sm',
  lg: 'size-10 text-base',
  xl: 'size-12 text-lg',
}

const shapeClass = computed(() => (props.shape === 'circle' ? 'rounded-full' : 'rounded-md'))
</script>

<template>
  <Avatar :class="cn(shapeClass, sizeClasses[size], props.class)">
    <AvatarImage v-if="src" :src="src" :alt="alt ?? 'avatar'" @error="emit('error', $event)" />
    <AvatarFallback :class="shapeClass">
      <slot name="icon" />
      <slot />
    </AvatarFallback>
  </Avatar>
</template>
