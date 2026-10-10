<script lang="ts">
import type { VNode } from 'vue'
import type { AppConfig } from '@/lib/nuxt/types/app-config'
import theme from '@/lib/nuxt/ui/field-group'
import type { ComponentConfig } from '../../lib/nuxt/types/tv'

type FieldGroup = ComponentConfig<typeof theme, AppConfig, 'fieldGroup'>

export interface FieldGroupProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /**
   * @defaultValue 'md'
   */
  size?: FieldGroup['variants']['size']
  /**
   * The orientation the buttons are laid out.
   * @defaultValue 'horizontal'
   */
  orientation?: FieldGroup['variants']['orientation']
  class?: any
  ui?: { base?: any }
}

export interface FieldGroupSlots {
  default?(props?: {}): VNode[]
}
</script>

<script setup lang="ts">
import { provide, computed } from 'vue'
import { Primitive } from 'reka-ui'
import { useAppConfig } from '@/lib/nuxt/imports'
import { useComponentProps } from '../../lib/nuxt/composables/useComponentProps'
import { fieldGroupInjectionKey } from '../../lib/nuxt/composables/useFieldGroup'
import { tv } from '../../lib/nuxt/utils/tv'

const _props = withDefaults(defineProps<FieldGroupProps>(), {
  orientation: 'horizontal'
})
defineSlots<FieldGroupSlots>()

const props = useComponentProps('fieldGroup', _props)

const appConfig = useAppConfig() as FieldGroup['AppConfig']

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.fieldGroup || {}) }))

provide(fieldGroupInjectionKey, computed(() => ({
  orientation: props.orientation,
  size: props.size
})))
</script>

<template>
  <Primitive :as="props.as" :data-orientation="props.orientation" :class="ui({ orientation: props.orientation, class: [props.ui?.base, props.class] })">
    <slot />
  </Primitive>
</template>
