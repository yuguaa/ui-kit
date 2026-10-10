<script lang="ts">
import type { VNode } from 'vue'
import type { RatingRootProps, RatingRootEmits } from 'reka-ui'
import type { AppConfig } from '@/lib/nuxt/types/app-config'
import theme from '@/lib/nuxt/ui/input-rating'
import type { IconProps } from './XIcon.vue'
import type { ComponentConfig } from '../../lib/nuxt/types/tv'

type InputRating = ComponentConfig<typeof theme, AppConfig, 'inputRating'>

export interface InputRatingProps {

  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /** The id of the rating. */
  id?: string
  /**
   * Make the rating readonly (non-interactive).
   * @defaultValue false
   */
  readonly?: boolean
  /**
   * The icon displayed for each rating value.
   * @defaultValue appConfig.ui.icons.star
   * @IconifyIcon
   */
  icon?: IconProps['name']
  /**
   * The icon displayed for empty rating values. Defaults to `icon` when not provided.
   * @IconifyIcon
   */
  emptyIcon?: IconProps['name']
  /**
   * @defaultValue 'primary'
   */
  color?: InputRating['variants']['color']
  /**
   * @defaultValue 'md'
   */
  size?: InputRating['variants']['size']
  /**
   * The orientation of the rating.
   * @defaultValue 'horizontal'
   */
  orientation?: InputRating['variants']['orientation']
  class?: any
  ui?: InputRating['slots']
}

export interface InputRatingEmits {

  change: [event: Event]
}

export interface InputRatingSlots {
  /** Rendered for each item. `filled` is `false` for the empty background layer and `true` for the highlighted overlay. */
  item?(props: { index: number, filled: boolean }): VNode[]
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { RatingRoot, RatingItem, RatingItemIndicator } from 'reka-ui'
import { reactivePick } from '@vueuse/core'
import { useAppConfig } from '@/lib/nuxt/imports'
import { useComponentProps } from '../../lib/nuxt/composables/useComponentProps'
import { useForwardProps } from '../../lib/nuxt/composables/useForwardProps'
import { useFormField } from '../../lib/nuxt/composables/useFormField'
import { tv } from '../../lib/nuxt/utils/tv'
import XIcon from './XIcon.vue'

defineOptions({ inheritAttrs: false })

const _props = withDefaults(defineProps<InputRatingProps>(), {
  length: 5,
  step: 1,
  readonly: false,
  defaultValue: 0,
  orientation: 'horizontal',
  hoverable: false,
  clearable: false
})
const emits = defineEmits<InputRatingEmits>()
defineSlots<InputRatingSlots>()

const props = useComponentProps<InputRatingProps>('inputRating', _props)

const appConfig = useAppConfig() as InputRating['AppConfig']

const rootProps = useForwardProps(reactivePick(props, 'as', 'length', 'step', 'hoverable', 'clearable', 'required', 'modelValue', 'defaultValue'), emits)

const { id, emitFormChange, emitFormInput, size: formFieldSize, color: formFieldColor, name, disabled: formFieldDisabled, ariaAttrs } = useFormField<InputRatingProps>(_props)

// eslint-disable-next-line vue/no-dupe-keys
const color = computed(() => formFieldColor.value ?? props.color)
// eslint-disable-next-line vue/no-dupe-keys
const size = computed(() => formFieldSize.value ?? props.size)

const disabled = computed(() => formFieldDisabled.value ?? props.disabled)
// `readonly` blocks interaction too, but only an explicit `disabled` dims the control.
const rootDisabled = computed(() => disabled.value || props.readonly)

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.inputRating || {}) })({
  size: size.value,
  color: color.value,
  orientation: props.orientation,
  readonly: props.readonly && !disabled.value,
  disabled: disabled.value
}))

const starIcon = computed(() => props.icon ?? appConfig.ui.icons.star)

function onUpdate(value: number) {
  // @ts-expect-error - 'target' does not exist in type 'EventInit'
  const event = new Event('change', { target: { value } })
  emits('change', event)
  emitFormChange()
  emitFormInput()
}
</script>

<template>
  <RatingRoot
    :id="id"
    v-slot="{ items }"
    data-slot="root"
    v-bind="{ ...rootProps, ...$attrs, ...ariaAttrs }"
    :name="name"
    :disabled="rootDisabled"
    :aria-readonly="props.readonly || undefined"
    :orientation="props.orientation"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
    @update:model-value="onUpdate"
  >
    <RatingItem
      v-for="item in items"
      v-slot="{ steps }"
      :key="item"
      :item="item"
      data-slot="item"
      :class="ui.item({ class: props.ui?.item })"
    >
      <!-- Empty icon as background -->
      <slot name="item" :index="item" :filled="false">
        <XIcon
          :name="props.emptyIcon ?? starIcon"
          data-slot="emptyIcon"
          :class="ui.emptyIcon({ class: props.ui?.emptyIcon })"
        />
      </slot>

      <!-- Indicators overlaid for each step, clipped to the rated fraction -->
      <RatingItemIndicator
        v-for="step in steps"
        :key="step"
        :step="step"
        :aria-label="`Rate ${step} out of ${props.length}`"
        data-slot="indicator"
        :class="ui.indicator({ class: props.ui?.indicator })"
      >
        <slot name="item" :index="item" :filled="true">
          <XIcon
            :name="starIcon"
            data-slot="icon"
            :class="ui.icon({ class: props.ui?.icon })"
          />
        </slot>
      </RatingItemIndicator>
    </RatingItem>
  </RatingRoot>
</template>
