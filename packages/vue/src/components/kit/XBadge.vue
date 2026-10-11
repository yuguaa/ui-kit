<script lang="ts">
import type { VNode } from 'vue'
import type { AppConfig } from '@/lib/nuxt/types/app-config'
import theme from '@/lib/nuxt/ui/badge'
import type { UseComponentIconsProps } from '../../lib/nuxt/composables/useComponentIcons'
import type { AvatarProps } from './XAvatar.vue'
import type { ComponentConfig } from '../../lib/nuxt/types/tv'

type Badge = ComponentConfig<typeof theme, AppConfig, 'badge'>

export interface BadgeProps {

  /**
   * The element or component this component should render as.
   * @defaultValue 'span'
   */
  as?: any
  label?: string | number
  /**
   * @defaultValue 'primary'
   */
  color?: Badge['variants']['color']
  /**
   * @defaultValue 'solid'
   */
  variant?: Badge['variants']['variant']
  /**
   * @defaultValue 'md'
   */
  size?: Badge['variants']['size']
  /** Render the badge with equal padding on all sides. */
  square?: boolean
  /** Display an avatar on the left side. */
  avatar?: AvatarProps
  class?: any
  ui?: Badge['slots']
}

export interface BadgeSlots {
  leading?(props: { ui: Badge['ui'] }): VNode[]
  default?(props: { ui: Badge['ui'] }): VNode[]
  trailing?(props: { ui: Badge['ui'] }): VNode[]
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { useAppConfig } from '@/lib/nuxt/imports'
import { useFieldGroup } from '../../lib/nuxt/composables/useFieldGroup'
import { useComponentIcons } from '../../lib/nuxt/composables/useComponentIcons'
import { useComponentProps } from '../../lib/nuxt/composables/useComponentProps'
import { tv } from '../../lib/nuxt/utils/tv'
import XIcon from './XIcon.vue'
import XAvatar from './XAvatar.vue'

const _props = withDefaults(defineProps<BadgeProps>(), {
  as: 'span'
})
const slots = defineSlots<BadgeSlots>()

const props = useComponentProps('badge', _props)

const appConfig = useAppConfig() as Badge['AppConfig']
const { orientation, size: fieldGroupSize } = useFieldGroup<BadgeProps>(_props)
const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props as any)

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.badge || {}) })({
  color: props.color,
  variant: props.variant,
  size: fieldGroupSize.value ?? props.size,
  square: props.square || (!slots.default && !props.label),
  fieldGroup: orientation.value
} as any))
</script>

<template>
  <Primitive :as="props.as" data-slot="base" :class="ui.base({ class: [props.ui?.base, props.class] })">
    <slot name="leading" :ui="ui">
      <XIcon v-if="isLeading && leadingIconName" :name="leadingIconName" data-slot="leadingIcon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
      <XAvatar v-else-if="!!props.avatar" :size="((props.ui?.leadingAvatarSize || ui.leadingAvatarSize()) as AvatarProps['size'])" v-bind="props.avatar" data-slot="leadingAvatar" :class="ui.leadingAvatar({ class: props.ui?.leadingAvatar })" />
    </slot>

    <slot :ui="ui">
      <span v-if="props.label !== undefined && props.label !== null" data-slot="label" :class="ui.label({ class: props.ui?.label })">
        {{ props.label }}
      </span>
    </slot>

    <slot name="trailing" :ui="ui">
      <XIcon v-if="isTrailing && trailingIconName" :name="trailingIconName" data-slot="trailingIcon" :class="ui.trailingIcon({ class: props.ui?.trailingIcon })" />
    </slot>
  </Primitive>
</template>
