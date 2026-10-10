<script lang="ts">
import type { VNode } from 'vue'
import type { AppConfig } from '@/lib/nuxt/types/app-config'
import theme from '@/lib/nuxt/ui/card'
import type { ComponentConfig } from '../../lib/nuxt/types/tv'

type Card = ComponentConfig<typeof theme, AppConfig, 'card'>

export interface CardProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  title?: string
  description?: string
  /**
   * @defaultValue 'outline'
   */
  variant?: Card['variants']['variant']
  class?: any
  ui?: Card['slots']
}

export interface CardSlots {
  header?(props?: {}): VNode[]
  title?(props?: {}): VNode[]
  description?(props?: {}): VNode[]
  default?(props?: {}): VNode[]
  footer?(props?: {}): VNode[]
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { useAppConfig } from '@/lib/nuxt/imports'
import { useComponentProps } from '../../lib/nuxt/composables/useComponentProps'
import { tv } from '../../lib/nuxt/utils/tv'

const _props = defineProps</* @vue-ignore */ CardProps>()
const slots = defineSlots</* @vue-ignore */ CardSlots>()

const props = useComponentProps('card', _props)

const appConfig = useAppConfig() as Card['AppConfig']

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.card || {}) })({
  variant: props.variant
}))
</script>

<template>
  <Primitive :as="props.as" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <div v-if="!!slots.header || (props.title || !!slots.title) || (props.description || !!slots.description)" data-slot="header" :class="ui.header({ class: props.ui?.header })">
      <slot name="header">
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
      </slot>
    </div>

    <div v-if="!!slots.default" data-slot="body" :class="ui.body({ class: props.ui?.body })">
      <slot />
    </div>

    <div v-if="!!slots.footer" data-slot="footer" :class="ui.footer({ class: props.ui?.footer })">
      <slot name="footer" />
    </div>
  </Primitive>
</template>
