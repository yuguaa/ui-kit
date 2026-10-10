<script lang="ts">
import type { AppConfig } from '@/lib/nuxt/types/app-config'
import theme from '@/lib/nuxt/ui/skeleton'
import type { ComponentConfig } from '../../lib/nuxt/types/tv'

type Skeleton = ComponentConfig<typeof theme, AppConfig, 'skeleton'>

export interface SkeletonProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  class?: any
  ui?: { base?: any }
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { useAppConfig } from '@/lib/nuxt/imports'
import { tv } from '../../lib/nuxt/utils/tv'
import { useComponentProps } from '../../lib/nuxt/composables/useComponentProps'

const _props = defineProps</* @vue-ignore */ SkeletonProps>()

const props = useComponentProps('skeleton', _props)

const appConfig = useAppConfig() as Skeleton['AppConfig']

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.skeleton || {}) }))
</script>

<template>
  <Primitive
    :as="props.as"
    aria-busy="true"
    aria-label="loading"
    aria-live="polite"
    role="alert"
    :class="ui({ class: [props.ui?.base, props.class] })"
  >
    <slot />
  </Primitive>
</template>
