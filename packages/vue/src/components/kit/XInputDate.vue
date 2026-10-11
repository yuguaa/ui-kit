<script lang="ts">
import type { ComponentPublicInstance, VNode } from 'vue'
import type { DateFieldRootProps, DateFieldRootEmits, DateRangeFieldRootProps, DateRangeFieldRootEmits, DateValue, SegmentPart } from 'reka-ui'
import type { AppConfig } from '@/lib/nuxt/types/app-config'
import type { UseComponentIconsProps } from '../../lib/nuxt/composables/useComponentIcons'
import type { AvatarProps } from './XAvatar.vue'
import type { IconProps } from './XIcon.vue'
import type { ComponentConfig } from '../../lib/nuxt/types/tv'
import theme from '@/lib/nuxt/ui/input-date'

type InputDate = ComponentConfig<typeof theme, AppConfig, 'inputDate'>

type _DateFieldRootProps = Omit<DateFieldRootProps, 'as' | 'asChild' | 'modelValue' | 'defaultValue' | 'dir'>
type _RangeDateFieldRootProps = Omit<DateRangeFieldRootProps, 'as' | 'asChild' | 'modelValue' | 'defaultValue' | 'dir'>

type InputDateDefaultValue<R extends boolean = false> = R extends true ? DateRangeFieldRootProps['defaultValue'] : DateFieldRootProps['defaultValue']
type InputDateModelValue<R extends boolean = false> = (R extends true ? DateRangeFieldRootProps['modelValue'] : DateFieldRootProps['modelValue']) | undefined

export interface InputDateProps<R extends boolean = false> {

  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  /**
   * @defaultValue 'primary'
   */
  color?: InputDate['variants']['color']
  /**
   * @defaultValue 'solid'
   */
  variant?: InputDate['variants']['variant']
  /**
   * @defaultValue 'md'
   */
  size?: InputDate['variants']['size']
  /** Highlight the ring color like a focus state. */
  highlight?: boolean
  /** Keep the mobile text size on all breakpoints. */
  fixed?: boolean
  autofocus?: boolean
  autofocusDelay?: number
  /**
   * The icon to use as a range separator.
   * @defaultValue appConfig.ui.icons.minus
   * @IconifyIcon
   */
  separatorIcon?: IconProps['name']
  /** Whether or not a range of dates can be selected */
  range?: R & boolean
  defaultValue?: InputDateDefaultValue<R>
  modelValue?: InputDateModelValue<R>
  class?: any
  ui?: InputDate['slots']
  /** 类型修补：生成产物缺少原始源码的部分 prop，索引签名宽松承载（仅类型层） */
  [key: string]: any
}

export interface InputDateEmits<R extends boolean = false> {

  'update:modelValue': [value: InputDateModelValue<R>]
  'change': [event: Event]
  'blur': [event: FocusEvent]
  'focus': [event: FocusEvent]
}

export interface InputDateSlots {
  leading?(props: { ui: InputDate['ui'] }): VNode[]
  default?(props: { ui: InputDate['ui'] }): VNode[]
  trailing?(props: { ui: InputDate['ui'] }): VNode[]
  separator?(props: { ui: InputDate['ui'] }): VNode[]
}
</script>

<script setup lang="ts" generic="R extends boolean">
import { computed, onMounted, onScopeDispose, ref } from 'vue'
import { useForwardProps } from '../../lib/nuxt/composables/useForwardProps'
import { DateField as SingleDateField, DateRangeField as RangeDateField } from 'reka-ui/namespaced'
import { reactiveOmit, createReusableTemplate } from '@vueuse/core'
import { useAppConfig } from '@/lib/nuxt/imports'
import { useComponentProps } from '../../lib/nuxt/composables/useComponentProps'
import { useFieldGroup } from '../../lib/nuxt/composables/useFieldGroup'
import { useComponentIcons } from '../../lib/nuxt/composables/useComponentIcons'
import { useFormField } from '../../lib/nuxt/composables/useFormField'
import { tv } from '../../lib/nuxt/utils/tv'
import XIcon from './XIcon.vue'
import XAvatar from './XAvatar.vue'

defineOptions({ inheritAttrs: false })

const _props = withDefaults(defineProps<InputDateProps<R>>(), {
  autofocusDelay: 0
})
const emits = defineEmits<InputDateEmits<R>>()
const slots = defineSlots<InputDateSlots>()

const props = useComponentProps<InputDateProps<R>>('inputDate', _props)

const appConfig = useAppConfig() as InputDate['AppConfig']

const rootProps = useForwardProps(reactiveOmit(props, 'id', 'name', 'range', 'modelValue', 'defaultValue', 'color', 'variant', 'size', 'highlight', 'fixed', 'disabled', 'autofocus', 'autofocusDelay', 'icon', 'avatar', 'leading', 'leadingIcon', 'trailing', 'trailingIcon', 'loading', 'loadingIcon', 'separatorIcon', 'class', 'ui'), emits)
const { emitFormBlur, emitFormFocus, emitFormChange, emitFormInput, size: formFieldSize, color: formFieldColor, id, name, highlight: formFieldHighlight, disabled: formFieldDisabled, ariaAttrs } = useFormField<InputDateProps<R>>(_props)

const { orientation, size: fieldGroupSize } = useFieldGroup<InputDateProps<R>>(_props)
const { isLeading, isTrailing, leadingIconName, trailingIconName } = useComponentIcons(props as any)

const [DefineSegmentsTemplate, ReuseSegmentsTemplate] = createReusableTemplate<{
  segments?: { part: SegmentPart, value: string }[]
  type?: 'start' | 'end'
}>()

// eslint-disable-next-line vue/no-dupe-keys
const color = computed(() => formFieldColor.value ?? props.color)
// eslint-disable-next-line vue/no-dupe-keys
const highlight = computed(() => formFieldHighlight.value ?? props.highlight)
// eslint-disable-next-line vue/no-dupe-keys
const size = computed(() => fieldGroupSize.value ?? formFieldSize.value ?? props.size)

const disabled = computed(() => formFieldDisabled.value ?? props.disabled)

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.inputDate || {}) })({
  color: color.value,
  variant: props.variant,
  size: size.value,
  highlight: highlight.value,
  fixed: props.fixed,
  loading: props.loading,
  leading: isLeading.value || !!props.avatar || !!slots.leading,
  trailing: isTrailing.value || !!slots.trailing,
  fieldGroup: orientation.value
} as any) as unknown as Record<string, any>)

const inputsRef = ref<ComponentPublicInstance[]>([])

function setInputRef(index: number, el: Element | ComponentPublicInstance | null) {
  // @ts-expect-error - ComponentPublicInstance type mismatch in Nuxt module augmentation
  inputsRef.value[index] = el
}

function onUpdate(value: any) {
  // @ts-expect-error - 'target' does not exist in type 'EventInit'
  const event = new Event('change', { target: { value } })
  emits('change', event)

  emitFormChange()
  emitFormInput()
}

function onFocusOut(event: FocusEvent) {
  if (event.relatedTarget && (event.currentTarget as HTMLElement).contains(event.relatedTarget as Node)) {
    return
  }

  emits('blur', event)
  emitFormBlur()
}

function onFocusIn(event: FocusEvent) {
  if (event.relatedTarget && (event.currentTarget as HTMLElement).contains(event.relatedTarget as Node)) {
    return
  }

  emits('focus', event)
  emitFormFocus()
}

function autoFocus() {
  if (props.autofocus) {
    inputsRef.value[0]?.$el?.focus()
  }
}

let autofocusTimeoutId: ReturnType<typeof setTimeout> | undefined

onMounted(() => {
  autofocusTimeoutId = setTimeout(() => {
    autoFocus()
  }, props.autofocusDelay)
})

onScopeDispose(() => clearTimeout(autofocusTimeoutId))

const DateField = computed(() => props.range ? RangeDateField : SingleDateField)

defineExpose({
  inputsRef
})
</script>

<template>
  <DefineSegmentsTemplate v-slot="{ segments, type }">
    <DateField.Input
      v-for="(segment, index) in segments"
      :key="`${segment.part}-${index}`"
      :ref="el => setInputRef(index, el)"
      :type="type"
      :part="segment.part"
      data-slot="segment"
      :class="ui.segment({ class: props.ui?.segment })"
      :data-segment="segment.part"
    >
      {{ segment.value.trim() }}
    </DateField.Input>
  </DefineSegmentsTemplate>

  <DateField.Root
    :id="id"
    v-slot="{ segments }"
    data-slot="base"
    v-bind="{ ...rootProps, ...$attrs, ...ariaAttrs }"
    :model-value="(props.modelValue as DateValue)"
    :default-value="(props.defaultValue as DateValue)"
    :name="name"
    :disabled="disabled"
    :class="ui.base({ class: [props.ui?.base, props.class] })"
    @update:model-value="onUpdate"
    @focusout="onFocusOut"
    @focusin="onFocusIn"
  >
    <template v-if="Array.isArray(segments)">
      <ReuseSegmentsTemplate :segments="segments" />
    </template>
    <template v-else>
      <ReuseSegmentsTemplate :segments="segments.start" type="start" />
      <slot name="separator" :ui="ui">
        <XIcon :name="props.separatorIcon || appConfig.ui.icons.minus" data-slot="separatorIcon" :class="ui.separatorIcon({ class: props.ui?.separatorIcon })" />
      </slot>
      <ReuseSegmentsTemplate :segments="segments.end" type="end" />
    </template>

    <slot :ui="ui" />

    <span v-if="isLeading || !!props.avatar || !!slots.leading" data-slot="leading" :class="ui.leading({ class: props.ui?.leading })">
      <slot name="leading" :ui="ui">
        <XIcon v-if="isLeading && leadingIconName" :name="leadingIconName" data-slot="leadingIcon" :class="ui.leadingIcon({ class: props.ui?.leadingIcon })" />
        <XAvatar v-else-if="!!props.avatar" :size="((props.ui?.leadingAvatarSize || ui.leadingAvatarSize()) as AvatarProps['size'])" v-bind="props.avatar" data-slot="leadingAvatar" :class="ui.leadingAvatar({ class: props.ui?.leadingAvatar })" />
      </slot>
    </span>

    <span v-if="isTrailing || !!slots.trailing" data-slot="trailing" :class="ui.trailing({ class: props.ui?.trailing })">
      <slot name="trailing" :ui="ui">
        <XIcon v-if="trailingIconName" :name="trailingIconName" data-slot="trailingIcon" :class="ui.trailingIcon({ class: props.ui?.trailingIcon })" />
      </slot>
    </span>
  </DateField.Root>
</template>
