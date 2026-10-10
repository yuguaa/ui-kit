<!-- eslint-disable vue/block-tag-newline -->
<script lang="ts">
import type { AccordionRootProps, AccordionRootEmits } from 'reka-ui'
import type { VNode } from 'vue'
import type { AppConfig } from '@/lib/nuxt/types/app-config'
import theme from '@/lib/nuxt/ui/accordion'
import type { IconProps } from './XIcon.vue'
import type { DynamicSlots, GetItemKeys } from '../../lib/nuxt/types/utils'
import type { ComponentConfig } from '../../lib/nuxt/types/tv'

type Accordion = ComponentConfig<typeof theme, AppConfig, 'accordion'>

export interface AccordionItem {
  label?: string
  /**
   * @IconifyIcon
   */
  icon?: IconProps['name']
  /**
   * @IconifyIcon
   */
  trailingIcon?: IconProps['name']
  slot?: string
  content?: string
  /**
   * A unique value for the accordion item. Defaults to the index.
   * Also used as the Vue `key` for this item, so providing a stable value prevents
   * accordion content (and its local state) from remounting when items are added, removed,
   * or reordered.
   */
  value?: string
  disabled?: boolean
  class?: any
  ui?: Partial<Pick<Accordion['slots'], 'item' | 'header' | 'trigger' | 'leadingIcon' | 'label' | 'trailingIcon' | 'content' | 'body'>>
  [key: string]: any
}

export interface AccordionProps<T extends AccordionItem = AccordionItem> {

  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  items?: T[]
  /**
   * The icon displayed on the right side of the trigger.
   * @defaultValue appConfig.ui.icons.chevronDown
   * @IconifyIcon
   */
  trailingIcon?: IconProps['name']
  /**
   * The key used to get the value from the item.
   * @defaultValue 'value'
   */
  valueKey?: GetItemKeys<T>
  /**
   * The key used to get the label from the item.
   * @defaultValue 'label'
   */
  labelKey?: GetItemKeys<T>
  class?: any
  ui?: Accordion['slots']
}

export interface AccordionEmits {
  'update:modelValue': [payload?: any];
  'update:open': [payload?: any];
  change: [payload?: any];
  close: [payload?: any];
  select: [payload?: any];
  highlight: [payload?: any];
  entryFocus: [payload?: any];
  leave: [payload?: any];
  open: [payload?: any];
  loading: [payload?: any];
}

type SlotProps<T extends AccordionItem> = (props: { item: T, index: number, open: boolean, ui: Accordion['ui'] }) => VNode[]

export type AccordionSlots<T extends AccordionItem = AccordionItem> = {
  default?(props: { item: T, index: number, open: boolean }): VNode[]
  leading?: SlotProps<T>
  trailing?: SlotProps<T>
  content?: SlotProps<T>
  body?: SlotProps<T>
} & DynamicSlots<T, 'body', { index: number, open: boolean, ui: Accordion['ui'] }>

</script>

<script setup lang="ts" generic="T extends AccordionItem">
import { computed } from 'vue'
import { AccordionRoot, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'reka-ui'
import { useForwardProps } from '../../lib/nuxt/composables/useForwardProps'
import { reactivePick } from '@vueuse/core'
import { useAppConfig } from '@/lib/nuxt/imports'
import { useComponentProps } from '../../lib/nuxt/composables/useComponentProps'
import { get } from '../../lib/nuxt/utils'
import { tv } from '../../lib/nuxt/utils/tv'
import XIcon from './XIcon.vue'

const _props = withDefaults(defineProps<AccordionProps<T>>(), {
  type: 'single',
  collapsible: true,
  unmountOnHide: true,
  valueKey: 'value',
  labelKey: 'label'
})
const emits = defineEmits<AccordionEmits>()
const slots = defineSlots<AccordionSlots<T>>()

const props = useComponentProps<AccordionProps<T>>('accordion', _props)

const appConfig = useAppConfig() as Accordion['AppConfig']

const rootProps = useForwardProps(reactivePick(props, 'as', 'collapsible', 'defaultValue', 'disabled', 'modelValue', 'unmountOnHide'), emits)

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.accordion || {}) })({
  disabled: props.disabled
}))
</script>

<template>
  <AccordionRoot v-bind="rootProps" :type="props.type" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <AccordionItem
      v-for="(item, index) in props.items"
      v-slot="{ open }"
      :key="get(item, props.valueKey as string) ?? index"
      :value="get(item, props.valueKey as string) ?? String(index)"
      :disabled="item.disabled"
      data-slot="item"
      :class="ui.item({ class: [props.ui?.item, item.ui?.item, item.class] })"
    >
      <AccordionHeader as="div" data-slot="header" :class="ui.header({ class: [props.ui?.header, item.ui?.header] })">
        <AccordionTrigger data-slot="trigger" :class="ui.trigger({ class: [props.ui?.trigger, item.ui?.trigger], disabled: item.disabled })">
          <slot name="leading" :item="item" :index="index" :open="open" :ui="ui">
            <XIcon v-if="item.icon" :name="item.icon" data-slot="leadingIcon" :class="ui.leadingIcon({ class: [props.ui?.leadingIcon, item?.ui?.leadingIcon] })" />
          </slot>

          <span v-if="get(item, props.labelKey as string) || !!slots.default" data-slot="label" :class="ui.label({ class: [props.ui?.label, item.ui?.label] })">
            <slot :item="item" :index="index" :open="open">{{ get(item, props.labelKey as string) }}</slot>
          </span>

          <slot name="trailing" :item="item" :index="index" :open="open" :ui="ui">
            <XIcon :name="item.trailingIcon || props.trailingIcon || appConfig.ui.icons.chevronDown" data-slot="trailingIcon" :class="ui.trailingIcon({ class: [props.ui?.trailingIcon, item.ui?.trailingIcon] })" />
          </slot>
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent v-if="item.content || !!slots.content || (item.slot && !!slots[item.slot as keyof AccordionSlots<T>]) || !!slots.body || (item.slot && !!slots[`${item.slot}-body` as keyof AccordionSlots<T>])" data-slot="content" :class="ui.content({ class: [props.ui?.content, item.ui?.content] })">
        <slot :name="((item.slot || 'content') as keyof AccordionSlots<T>)" :item="(item as Extract<T, { slot: string; }>)" :index="index" :open="open" :ui="ui">
          <div data-slot="body" :class="ui.body({ class: [props.ui?.body, item.ui?.body] })">
            <slot :name="((item.slot ? `${item.slot}-body`: 'body') as keyof AccordionSlots<T>)" :item="(item as Extract<T, { slot: string; }>)" :index="index" :open="open" :ui="ui">
              {{ item.content }}
            </slot>
          </div>
        </slot>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
