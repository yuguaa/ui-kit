<script lang="ts">
import type { VNode } from 'vue'
import type { AppConfig } from '@/lib/nuxt/types/app-config'
import theme from '@/lib/nuxt/ui/kbd'
import type { KbdKey } from '../../lib/nuxt/composables/useKbd'
import type { ComponentConfig } from '../../lib/nuxt/types/tv'

type Kbd = ComponentConfig<typeof theme, AppConfig, 'kbd'>

export interface KbdProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'kbd'
   */
  as?: any
  value?: KbdKey | string
  /**
   * @defaultValue 'neutral'
   */
  color?: Kbd['variants']['color']
  /**
   * @defaultValue 'outline'
   */
  variant?: Kbd['variants']['variant']
  /**
   * @defaultValue 'md'
   */
  size?: Kbd['variants']['size']
  class?: any
  ui?: { base?: any }
}

export interface KbdSlots {
  default?(props?: {}): VNode[]
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { useAppConfig } from '@/lib/nuxt/imports'
import { useKbd } from '../../lib/nuxt/composables/useKbd'
import { useComponentProps } from '../../lib/nuxt/composables/useComponentProps'
import { tv } from '../../lib/nuxt/utils/tv'

const _props = withDefaults(defineProps</* @vue-ignore */ KbdProps>(), {
  as: 'kbd'
})
defineSlots</* @vue-ignore */ KbdSlots>()

const props = useComponentProps('kbd', _props)

const { getKbdKey } = useKbd()
const appConfig = useAppConfig() as Kbd['AppConfig']

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.kbd || {}) }))
</script>

<template>
  <Primitive :as="props.as" :class="ui({ class: [props.ui?.base, props.class], color: props.color, variant: props.variant, size: props.size })">
    <slot>
      {{ getKbdKey(props.value) }}
    </slot>
  </Primitive>
</template>
