<script lang="ts">
import type { Component } from 'vue'

export interface IconProps {
  name: string | any
  mode?: 'svg' | 'css'
  size?: string | number
  customize?: unknown
}
</script>

<script setup lang="ts">
/**
 * XIcon：Nuxt Icon 的自研兼容实现（自研替身，不经生成器覆盖）。
 * name 支持 'i-lucide-check' 与 'check' 两种写法，组件形式的 name 直接渲染。
 */
import { icons } from '@lucide/vue'
import { computed } from 'vue'

const props = defineProps<IconProps>()

/** 'i-lucide-check' / 'check' → 'Check' */
const lucideName = computed<string | null>(() => {
  if (typeof props.name !== 'string') return null
  const raw = props.name.startsWith('i-') ? props.name.slice(2).replace(/^[a-z-]+-/, '') : props.name
  return raw
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
})

const iconComponent = computed<Component | null>(() => {
  if (!lucideName.value) return null
  return (icons as Record<string, Component>)[lucideName.value] ?? null
})

const iconStyle = computed<Record<string, string> | undefined>(() => {
  if (props.size == null) return undefined
  const value = typeof props.size === 'number' ? `${props.size}px` : String(props.size)
  return { width: value, height: value }
})
</script>

<template>
  <component
    :is="iconComponent ?? name"
    v-if="iconComponent || typeof name !== 'string'"
    :style="iconStyle"
  />
</template>
