<script lang="ts">
import type { VNode } from 'vue'
import type { AppConfig } from '@/lib/nuxt/types/app-config'
import theme from '@/lib/nuxt/ui/alert'
import type { AvatarProps } from './XAvatar.vue'
import type { ButtonProps } from './XButton.vue'
import type { IconProps } from './XIcon.vue'
import type { LinkPropsKeys } from './XLink.vue'
import type { ComponentConfig } from '../../lib/nuxt/types/tv'

type Alert = ComponentConfig<typeof theme, AppConfig, 'alert'>

export interface AlertProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  title?: string
  description?: string
  /**
   * @IconifyIcon
   */
  icon?: IconProps['name']
  avatar?: AvatarProps
  /**
   * @defaultValue 'primary'
   */
  color?: Alert['variants']['color']
  /**
   * @defaultValue 'solid'
   */
  variant?: Alert['variants']['variant']
  /**
   * The orientation between the content and the actions.
   * @defaultValue 'vertical'
   */
  orientation?: Alert['variants']['orientation']
  /**
   * Display a list of actions:
   * - under the title and description when orientation is `vertical`
   * - next to the close button when orientation is `horizontal`
   * `{ size: 'xs' }`{lang="ts-type"}
   */
  actions?: ButtonProps[]
  /**
   * Display a close button to dismiss the alert.
   * `{ size: 'md', color: 'neutral', variant: 'link' }`{lang="ts-type"}
   * @emits 'update:open'
   * @defaultValue false
   */
  close?: boolean | Omit<ButtonProps, LinkPropsKeys>
  /**
   * The icon displayed in the close button.
   * @defaultValue appConfig.ui.icons.close
   * @IconifyIcon
   */
  closeIcon?: IconProps['name']
  class?: any
  ui?: Alert['slots']
}

export interface AlertEmits {
  'update:open': [value: boolean]
}

export interface AlertSlots {
  leading?(props: { ui: Alert['ui'] }): VNode[]
  title?(props?: {}): VNode[]
  description?(props?: {}): VNode[]
  actions?(props?: {}): VNode[]
  close?(props: { ui: Alert['ui'] }): VNode[]
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { useAppConfig } from '@/lib/nuxt/imports'
import { useComponentProps } from '../../lib/nuxt/composables/useComponentProps'
import { useLocale } from '../../lib/nuxt/composables/useLocale'
import { tv } from '../../lib/nuxt/utils/tv'
import XIcon from './XIcon.vue'
import XAvatar from './XAvatar.vue'
import XButton from './XButton.vue'

const _props = withDefaults(defineProps</* @vue-ignore */ AlertProps>(), {
  orientation: 'vertical'
})
const emits = defineEmits</* @vue-ignore */ AlertEmits>()
const slots = defineSlots</* @vue-ignore */ AlertSlots>()

const props = useComponentProps('alert', _props)

const { t } = useLocale()
const appConfig = useAppConfig() as Alert['AppConfig']

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.alert || {}) })({
  color: props.color,
  variant: props.variant,
  orientation: props.orientation,
  title: !!props.title || !!slots.title
}))
</script>

<template>
  <Primitive :as="props.as" :data-orientation="props.orientation" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <slot name="leading" :ui="ui">
      <XAvatar v-if="props.avatar" :size="((props.ui?.avatarSize || ui.avatarSize()) as AvatarProps['size'])" v-bind="props.avatar" data-slot="avatar" :class="ui.avatar({ class: props.ui?.avatar })" />
      <XIcon v-else-if="props.icon" :name="props.icon" data-slot="icon" :class="ui.icon({ class: props.ui?.icon })" />
    </slot>

    <div data-slot="wrapper" :class="ui.wrapper({ class: props.ui?.wrapper })">
      <div v-if="props.title || !!slots.title" data-slot="title" :class="ui.title({ class: props.ui?.title })">
        <slot name="title">
          {{ props.title }}
        </slot>
      </div>
      <div v-if="props.description || !!slots.description" data-slot="description" :class="ui.description({ class: props.ui?.description })">
        <slot name="description">
          {{ props.description }}
        </slot>
      </div>

      <div v-if="props.orientation === 'vertical' && (props.actions?.length || !!slots.actions)" data-slot="actions" :class="ui.actions({ class: props.ui?.actions })">
        <slot name="actions">
          <XButton v-for="(action, index) in props.actions" :key="index" size="xs" v-bind="action" />
        </slot>
      </div>
    </div>

    <div v-if="(props.orientation === 'horizontal' && (props.actions?.length || !!slots.actions)) || props.close" data-slot="actions" :class="ui.actions({ class: props.ui?.actions, orientation: 'horizontal' })">
      <template v-if="props.orientation === 'horizontal' && (props.actions?.length || !!slots.actions)">
        <slot name="actions">
          <XButton v-for="(action, index) in props.actions" :key="index" size="xs" v-bind="action" />
        </slot>
      </template>

      <slot name="close" :ui="ui">
        <XButton
          v-if="props.close"
          :icon="props.closeIcon || appConfig.ui.icons.close"
          color="neutral"
          variant="link"
          :aria-label="t('alert.close')"
          v-bind="(typeof props.close === 'object' ? props.close : {})"
          data-slot="close"
          :class="ui.close({ class: props.ui?.close })"
          @click="emits('update:open', false)"
        />
      </slot>
    </div>
  </Primitive>
</template>
