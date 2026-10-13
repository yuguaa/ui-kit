<script lang="ts">
import type { NumberFieldRootProps } from 'reka-ui'
import type { VNode } from 'vue'
import type { AppConfig } from '@/lib/nuxt/types/app-config'
import theme from '@/lib/nuxt/ui/input-number'
import type { ButtonProps } from './XButton.vue'
import type { IconProps } from './XIcon.vue'
import type { LinkPropsKeys } from './XLink.vue'
import type { InputHTMLAttributes } from '../../lib/nuxt/types/html'
import type { ModelModifiers } from '../../lib/nuxt/types/input'
import type { ComponentConfig } from '../../lib/nuxt/types/tv'

type InputNumber = ComponentConfig<typeof theme, AppConfig, 'inputNumber'>

type InputNumberValue = number | null

type ApplyModifiers<T extends InputNumberValue, Mod extends Pick<ModelModifiers, 'optional'>>
  = | T
    | (Mod extends { optional: true } ? undefined : never)

export interface InputNumberProps<T extends InputNumberValue = InputNumberValue, Mod extends Pick<ModelModifiers, 'optional'> = Pick<ModelModifiers, 'optional'>> extends Pick<NumberFieldRootProps, | 'min' | 'max' | 'step' | 'stepSnapping' | 'disabled' | 'required' | 'id' | 'name' | 'formatOptions' | 'disableWheelChange' | 'invertWheelChange' | 'readonly' | 'focusOnChange' | 'locale'>, /** @vue-ignore */ Omit<InputHTMLAttributes, 'disabled' | 'min' | 'max' | 'readonly' | 'required' | 'step' | 'name' | 'placeholder' | 'type' | 'autofocus' | 'maxlength' | 'minlength' | 'pattern' | 'size'> {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /** The placeholder text when the input is empty. */
  placeholder?: string
  color?: InputNumber['variants']['color']
  variant?: InputNumber['variants']['variant']
  size?: InputNumber['variants']['size']
  /** Highlight the ring color like a focus state. */
  highlight?: boolean
  /** Keep the mobile text size on all breakpoints. */
  fixed?: boolean
  /**
   * The orientation of the input number.
   * @defaultValue 'horizontal'
   */
  orientation?: InputNumber['variants']['orientation']
  /**
   * Configure the increment button. The `color` and `size` are inherited.
   * @defaultValue { variant: 'link' }
   */
  increment?: boolean | Omit<ButtonProps, LinkPropsKeys>
  /**
   * The icon displayed to increment the value.
   * @defaultValue appConfig.ui.icons.plus
   * @IconifyIcon
   */
  incrementIcon?: IconProps['name']
  /** Disable the increment button. */
  incrementDisabled?: boolean
  /**
   * Configure the decrement button. The `color` and `size` are inherited.
   * @defaultValue { variant: 'link' }
   */
  decrement?: boolean | Omit<ButtonProps, LinkPropsKeys>
  /**
   * The icon displayed to decrement the value.
   * @defaultValue appConfig.ui.icons.minus
   * @IconifyIcon
   */
  decrementIcon?: IconProps['name']
  /** Disable the decrement button. */
  decrementDisabled?: boolean
  autofocus?: boolean
  autofocusDelay?: number
  defaultValue?: NonNullable<T>
  modelValue?: ApplyModifiers<T, Mod>
  modelModifiers?: Mod
  class?: any
  ui?: InputNumber['slots']
}

export interface InputNumberEmits<T extends InputNumberValue = InputNumberValue, Mod extends Pick<ModelModifiers, 'optional'> = Pick<ModelModifiers, 'optional'>> {
  'update:modelValue': [value: ApplyModifiers<T, Mod>]
  'blur': [event: FocusEvent]
  'change': [event: Event]
}

export interface InputNumberSlots {
  increment?(props?: {}): VNode[]
  decrement?(props?: {}): VNode[]
}
</script>

<script setup lang="ts" generic="T extends InputNumberValue = InputNumberValue, Mod extends Pick<ModelModifiers, 'optional'> = Pick<ModelModifiers, 'optional'>">
import { onMounted, onScopeDispose, computed, useTemplateRef, toRef } from 'vue'
import { NumberFieldRoot, NumberFieldInput, NumberFieldDecrement, NumberFieldIncrement } from 'reka-ui'
import { useForwardProps } from '../../lib/nuxt/composables/useForwardProps'
import { reactivePick } from '@vueuse/core'
import { useAppConfig } from '@/lib/nuxt/imports'
import { useComponentProps } from '../../lib/nuxt/composables/useComponentProps'
import { useFieldGroup } from '../../lib/nuxt/composables/useFieldGroup'
import { useFormField } from '../../lib/nuxt/composables/useFormField'
import { useLocale } from '../../lib/nuxt/composables/useLocale'
import { tv } from '../../lib/nuxt/utils/tv'
import XButton from './XButton.vue'

defineOptions({ inheritAttrs: false })

const _props = withDefaults(defineProps<{
  optional?: any;
  stepSnapping?: any;
  formatOptions?: any;
  disableWheelChange?: any;
  invertWheelChange?: any;
  focusOnChange?: any;
  locale?: any;
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any;
  placeholder?: any;
  color?: any;
  variant?: any;
  /** Highlight the ring color like a focus state. */
  size?: any;
  /** Keep the mobile text size on all breakpoints. */
  highlight?: any;
  /**
   * The orientation of the input number.
   * @defaultValue 'horizontal'
   */
  fixed?: any;
  /**
   * Configure the increment button. The `color` and `size` are inherited.
   * @defaultValue { variant: 'link' }
   */
  orientation?: any;
  /**
   * The icon displayed to increment the value.
   * @defaultValue appConfig.ui.icons.plus
   * @IconifyIcon
   */
  increment?: any;
  /** Disable the increment button. */
  incrementIcon?: any;
  /**
   * Configure the decrement button. The `color` and `size` are inherited.
   * @defaultValue { variant: 'link' }
   */
  incrementDisabled?: any;
  /**
   * The icon displayed to decrement the value.
   * @defaultValue appConfig.ui.icons.minus
   * @IconifyIcon
   */
  decrement?: any;
  /** Disable the decrement button. */
  decrementIcon?: any;
  decrementDisabled?: any;
  autofocus?: any;
  autofocusDelay?: any;
  defaultValue?: any;
  modelValue?: any;
  modelModifiers?: any;
  class?: any;
  ui?: any;
}>(), {
  orientation: 'horizontal',
  increment: true,
  decrement: true
})
const emits = defineEmits<{
  'update:modelValue': [payload?: any];
  blur: [payload?: any];
  change: [payload?: any];
}>()

defineSlots<Record<string, any>>()

const props = useComponentProps<InputNumberProps<T, Mod>>('inputNumber', _props)

const { t } = useLocale()
const appConfig = useAppConfig() as InputNumber['AppConfig']

const rootProps = useForwardProps(reactivePick(props, 'as', 'stepSnapping', 'formatOptions', 'disableWheelChange', 'invertWheelChange', 'required', 'readonly', 'focusOnChange', 'locale'))

const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, id, color: formFieldColor, size: formFieldSize, name, highlight: formFieldHighlight, disabled: formFieldDisabled, ariaAttrs } = useFormField<InputNumberProps<T, Mod>>(_props)

const { orientation, size: fieldGroupSize } = useFieldGroup<InputNumberProps<T, Mod>>(_props)

// eslint-disable-next-line vue/no-dupe-keys
const color = computed(() => formFieldColor.value ?? props.color)
// eslint-disable-next-line vue/no-dupe-keys
const highlight = computed(() => formFieldHighlight.value ?? props.highlight)
// eslint-disable-next-line vue/no-dupe-keys
const size = computed(() => fieldGroupSize.value ?? formFieldSize.value ?? props.size)

const disabled = computed(() => formFieldDisabled.value ?? props.disabled)

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.inputNumber || {}) })({
  color: color.value,
  variant: props.variant,
  size: size.value,
  highlight: highlight.value,
  fixed: props.fixed,
  orientation: props.orientation,
  fieldGroup: orientation.value,
  increment: props.orientation === 'vertical' ? (!!props.increment || !!props.decrement) : !!props.increment,
  decrement: props.orientation === 'vertical' ? false : !!props.decrement
} as any))

// eslint-disable-next-line vue/no-dupe-keys
const incrementIcon = computed(() => props.incrementIcon || (props.orientation === 'horizontal' ? appConfig.ui.icons.plus : appConfig.ui.icons.chevronUp))
// eslint-disable-next-line vue/no-dupe-keys
const decrementIcon = computed(() => props.decrementIcon || (props.orientation === 'horizontal' ? appConfig.ui.icons.minus : appConfig.ui.icons.chevronDown))

const inputRef = useTemplateRef('inputRef')

function onUpdate(value: ApplyModifiers<T, Mod> | undefined) {
  if (props.modelModifiers?.optional) {
    value = value ?? undefined
  }

  // In controlled mode reka emits on every write, even when nothing changed (blur, Enter, stepping at a bound).
  if (value === props.modelValue || (value == null && props.modelValue == null)) {
    return
  }

  emits('update:modelValue', value as ApplyModifiers<T, Mod>)

  // @ts-expect-error - 'target' does not exist in type 'EventInit'
  const event = new Event('change', { target: { value } })
  emits('change', event)

  emitFormChange()
  emitFormInput()
}

function onBlur(event: FocusEvent) {
  emitFormBlur()
  emits('blur', event)
}

function autoFocus() {
  if (props.autofocus) {
    inputRef.value?.$el?.focus()
  }
}

let autofocusTimeoutId: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  autofocusTimeoutId = setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)
})

onScopeDispose(() => clearTimeout(autofocusTimeoutId))

defineExpose({
  inputRef: toRef(() => inputRef.value?.$el as HTMLInputElement)
})
</script>

<template>
  <NumberFieldRoot
    v-bind="rootProps"
    :id="id"
    :default-value="props.defaultValue"
    :model-value="props.modelValue"
    :min="props.min"
    :max="props.max"
    :step="props.step"
    :data-slot="($attrs['data-slot'] as string | undefined) ?? 'root'"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
    :name="name"
    :disabled="disabled"
    @update:model-value="(val) => onUpdate(val as ApplyModifiers<T, Mod>)"
  >
    <NumberFieldInput
      v-bind="{ ...$attrs, ...ariaAttrs }"
      ref="inputRef"
      :placeholder="props.placeholder"
      :required="props.required"
      data-slot="base"
      :class="ui.base({ class: props.ui?.base })"
      @blur="onBlur"
      @focus="emitFormFocus"
    />

    <div v-if="!!props.increment" data-slot="increment" :class="ui.increment({ class: props.ui?.increment })">
      <NumberFieldIncrement as-child :disabled="disabled || props.incrementDisabled">
        <slot name="increment">
          <XButton
            :icon="incrementIcon"
            :color="color"
            :size="size"
            variant="link"
            :aria-label="t('inputNumber.increment')"
            v-bind="typeof props.increment === 'object' ? props.increment : undefined"
          />
        </slot>
      </NumberFieldIncrement>
    </div>

    <div v-if="!!props.decrement" data-slot="decrement" :class="ui.decrement({ class: props.ui?.decrement })">
      <NumberFieldDecrement as-child :disabled="disabled || props.decrementDisabled">
        <slot name="decrement">
          <XButton
            :icon="decrementIcon"
            :color="color"
            :size="size"
            variant="link"
            :aria-label="t('inputNumber.decrement')"
            v-bind="typeof props.decrement === 'object' ? props.decrement : undefined"
          />
        </slot>
      </NumberFieldDecrement>
    </div>
  </NumberFieldRoot>
</template>
