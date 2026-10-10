<script setup lang="ts">
/**
 * NuxtLink 替身：支持 custom 插槽模式与普通 a 渲染。
 * slot props 提供 href / navigate / route / isActive / isExactActive / prefetch / shouldPrefetch。
 */
import { computed } from 'vue'

const props = defineProps({
  to: { type: [String, Object], default: undefined },
  href: { type: [String, Object], default: undefined },
  custom: { type: Boolean, default: false },
  target: { type: String, default: undefined },
  rel: { type: String, default: undefined },
  download: { type: [Boolean, String], default: undefined },
  type: { type: String, default: undefined },
})

const resolvedHref = computed<string | undefined>(() => {
  const path = props.to ?? props.href
  if (path == null) return undefined
  if (typeof path === 'string') return path
  return (path as { path?: string }).path ?? (path as { name?: string }).name
})

const route = { path: '/', query: {}, params: {}, hash: '', fullPath: '/', matched: [] }

function navigate(event: MouseEvent) {
  if (props.target === '_blank' || event.metaKey || event.ctrlKey) return
  if (resolvedHref.value) {
    event.preventDefault()
    window.location.assign(resolvedHref.value)
  }
}
</script>

<template>
  <slot
    v-if="custom"
    :href="resolvedHref"
    :navigate="navigate"
    :route="route"
    :isActive="false"
    :isExactActive="false"
    :prefetch="() => {}"
    :shouldPrefetch="false"
    v-bind="$attrs"
  />
  <a
    v-else
    :href="resolvedHref"
    :target="target"
    :rel="rel"
    :download="download"
    :type="type"
    v-bind="$attrs"
    @click="navigate"
  >
    <slot />
  </a>
</template>
