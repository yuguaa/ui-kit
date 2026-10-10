<script setup lang="ts">
/**
 * XStepper 步骤条:按 Nuxt UI stepper 结构二次封装。
 * items 字段(title / description / icon / content / slot / value)驱动,
 * 受控 modelValue 与非受控 defaultValue 两种用法,next / prev 可通过 ref 调用。
 */
import type { Component, HTMLAttributes } from 'vue'
import { computed } from 'vue'
import {
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperRoot,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from 'reka-ui'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

type IconName = InstanceType<typeof XIcon>['$props']['name']
type IconSize = NonNullable<InstanceType<typeof XIcon>['$props']['size']>

type StepperColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type StepperSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type StepperOrientation = 'horizontal' | 'vertical'

/** 主题插槽类名,键名与 Nuxt UI 主题保持一致 */
export interface StepperUi {
  root?: string
  header?: string
  item?: string
  container?: string
  trigger?: string
  indicator?: string
  icon?: string
  separator?: string
  wrapper?: string
  title?: string
  description?: string
  content?: string
}

/** 步骤项字段映射,与 Nuxt UI StepperItem 保持一致 */
export interface StepperItem {
  slot?: string
  value?: string | number
  title?: string
  description?: string
  icon?: IconName
  content?: string
  disabled?: boolean
  class?: HTMLAttributes['class']
  ui?: Partial<Pick<StepperUi, 'item' | 'container' | 'trigger' | 'indicator' | 'icon' | 'separator' | 'wrapper' | 'title' | 'description'>>
  [key: string]: any
}

const props = withDefaults(defineProps<{
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 步骤项数组 */
  items: StepperItem[]
  /** 步骤尺寸 */
  size?: StepperSize
  /** 组件颜色 */
  color?: StepperColor
  /** 步骤排列方向 */
  orientation?: StepperOrientation
  /** 从步骤项取 value 的字段,支持点路径 */
  valueKey?: string
  /** 初始激活步骤的 value */
  defaultValue?: string | number
  /** 是否禁用全部步骤 */
  disabled?: boolean
  /** 是否必须按顺序完成 */
  linear?: boolean
  /** 主题插槽类名 */
  ui?: StepperUi
  class?: HTMLAttributes['class']
}>(), {
  as: 'div',
  orientation: 'horizontal',
  linear: true,
  valueKey: 'value',
  size: 'md',
  color: 'primary',
  disabled: false,
})

const modelValue = defineModel<string | number>()
const emit = defineEmits<{ next: [item: StepperItem]; prev: [item: StepperItem] }>()

/** 插槽类型,与 Nuxt StepperSlots 保持一致 */
const slots = defineSlots<{
  indicator?: (props: { item: StepperItem; ui: StepperUi | undefined }) => unknown
  wrapper?: (props: { item: StepperItem }) => unknown
  title?: (props: { item: StepperItem }) => unknown
  description?: (props: { item: StepperItem }) => unknown
  content?: (props: { item: StepperItem }) => unknown
  [key: string]: ((props: any) => unknown) | undefined
}>()

/** 取对象字段,支持点路径 */
function get(item: StepperItem | undefined, key: string): string | number | undefined {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc == null || typeof acc !== 'object') return undefined
    return (acc as Record<string, unknown>)[part]
  }, item) as string | number | undefined
}

/** 尺寸:触发器、图标、标题、描述与包装的类名 */
const stepperSizeClasses: Record<StepperSize, { trigger: string; icon: IconSize; title: string; description: string; wrapper: string }> = {
  xs: { trigger: 'size-6 text-xs', icon: 'xs', title: 'text-xs', description: 'text-xs', wrapper: 'mt-1.5' },
  sm: { trigger: 'size-8 text-sm', icon: 'sm', title: 'text-xs', description: 'text-xs', wrapper: 'mt-2' },
  md: { trigger: 'size-10 text-base', icon: 'md', title: 'text-sm', description: 'text-sm', wrapper: 'mt-2.5' },
  lg: { trigger: 'size-12 text-lg', icon: 'lg', title: 'text-base', description: 'text-base', wrapper: 'mt-3' },
  xl: { trigger: 'size-14 text-xl', icon: 'xl', title: 'text-lg', description: 'text-lg', wrapper: 'mt-3.5' },
}

/** 语义色:完成 / 激活态的触发器背景与分隔线 */
const stepperColorClasses: Record<StepperColor, { trigger: string; separator: string }> = {
  primary: {
    trigger: 'group-data-[state=completed]:bg-primary-6 group-data-[state=active]:bg-primary-6 outline-primary-6/25',
    separator: 'group-data-[state=completed]:bg-primary-6',
  },
  secondary: {
    trigger: 'group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary outline-secondary/25',
    separator: 'group-data-[state=completed]:bg-secondary',
  },
  neutral: {
    trigger: 'group-data-[state=completed]:bg-neutral-6 group-data-[state=active]:bg-neutral-6 outline-neutral-6/25',
    separator: 'group-data-[state=completed]:bg-neutral-6',
  },
  success: {
    trigger: 'group-data-[state=completed]:bg-success-6 group-data-[state=active]:bg-success-6 outline-success-6/25',
    separator: 'group-data-[state=completed]:bg-success-6',
  },
  info: {
    trigger: 'group-data-[state=completed]:bg-info-6 group-data-[state=active]:bg-info-6 outline-info-6/25',
    separator: 'group-data-[state=completed]:bg-info-6',
  },
  warning: {
    trigger: 'group-data-[state=completed]:bg-warning-6 group-data-[state=active]:bg-warning-6 outline-warning-6/25',
    separator: 'group-data-[state=completed]:bg-warning-6',
  },
  error: {
    trigger: 'group-data-[state=completed]:bg-error-6 group-data-[state=active]:bg-error-6 outline-error-6/25',
    separator: 'group-data-[state=completed]:bg-error-6',
  },
}

/** 方向:根、头部、条目与分隔线的布局 */
const stepperOrientationClasses: Record<StepperOrientation, { root: string; header: string; item: string; container: string; separator: string; wrapper: string }> = {
  horizontal: {
    root: 'flex-col',
    header: '',
    item: '',
    container: 'flex justify-center',
    separator: 'top-[calc(50%-2px)] h-0.5',
    wrapper: 'mt-1',
  },
  vertical: {
    root: '',
    header: 'flex-col gap-4',
    item: 'flex text-start',
    container: '',
    separator: 'start-[calc(50%-1px)] -bottom-[10px] w-0.5',
    wrapper: '',
  },
}

/** 方向 × 尺寸组合:分隔线定位与垂直布局的条目间距 */
const stepperCompoundClasses: Record<StepperSize, Record<StepperOrientation, { separator: string; item: string }>> = {
  xs: {
    horizontal: { separator: 'start-[calc(50%+16px)] end-[calc(-50%+16px)]', item: '' },
    vertical: { separator: 'top-[30px]', item: 'gap-1.5' },
  },
  sm: {
    horizontal: { separator: 'start-[calc(50%+20px)] end-[calc(-50%+20px)]', item: '' },
    vertical: { separator: 'top-[38px]', item: 'gap-2' },
  },
  md: {
    horizontal: { separator: 'start-[calc(50%+28px)] end-[calc(-50%+28px)]', item: '' },
    vertical: { separator: 'top-[46px]', item: 'gap-2.5' },
  },
  lg: {
    horizontal: { separator: 'start-[calc(50%+32px)] end-[calc(-50%+32px)]', item: '' },
    vertical: { separator: 'top-[54px]', item: 'gap-3' },
  },
  xl: {
    horizontal: { separator: 'start-[calc(50%+36px)] end-[calc(-50%+36px)]', item: '' },
    vertical: { separator: 'top-[62px]', item: 'gap-3.5' },
  },
}

/** 当前步骤索引:受控值优先,valueKey 字符串时按字段值查找 */
const currentStepIndex = computed({
  get() {
    const value = modelValue.value ?? props.defaultValue
    const index = typeof value === 'string'
      ? props.items.findIndex(item => get(item, props.valueKey) === value)
      : value
    return index ?? 0
  },
  set(value: number) {
    modelValue.value = get(props.items?.[value], props.valueKey) ?? value
  },
})

const currentStep = computed(() => props.items?.[currentStepIndex.value])
const hasNext = computed(() => currentStepIndex.value < props.items.length - 1)
const hasPrev = computed(() => currentStepIndex.value > 0)

/** 跳到下一步并抛出 next 事件 */
function next() {
  if (hasNext.value) {
    currentStepIndex.value += 1
    emit('next', currentStep.value as StepperItem)
  }
}

/** 回到上一步并抛出 prev 事件 */
function prev() {
  if (hasPrev.value) {
    currentStepIndex.value -= 1
    emit('prev', currentStep.value as StepperItem)
  }
}

defineExpose({ next, prev, hasNext, hasPrev })
</script>

<template>
  <StepperRoot
    v-model="currentStepIndex"
    :as="as"
    :orientation="props.orientation"
    :linear="props.linear"
    data-slot="root"
    :class="cn('flex gap-4', stepperOrientationClasses[props.orientation].root, props.ui?.root, props.class)"
  >
    <div
      data-slot="header"
      :class="cn('flex', stepperOrientationClasses[props.orientation].header, props.ui?.header)"
    >
      <StepperItem
        v-for="(item, count) in props.items"
        :key="count"
        :step="count"
        :disabled="item.disabled || props.disabled"
        data-slot="item"
        :class="cn(
          'group relative w-full text-center',
          stepperOrientationClasses[props.orientation].item,
          stepperCompoundClasses[props.size][props.orientation].item,
          props.ui?.item,
          item.ui?.item,
          item.class,
        )"
      >
        <div
          data-slot="container"
          :class="cn('relative', stepperOrientationClasses[props.orientation].container, props.ui?.container, item.ui?.container)"
        >
          <StepperTrigger
            data-slot="trigger"
            :class="cn(
              'flex items-center justify-center rounded-full bg-muted align-middle font-semibold text-muted-foreground',
              'group-data-[state=completed]:text-white group-data-[state=active]:text-white',
              'focus-visible:outline-3',
              stepperSizeClasses[props.size].trigger,
              stepperColorClasses[props.color].trigger,
              props.ui?.trigger,
              item.ui?.trigger,
            )"
          >
            <StepperIndicator
              data-slot="indicator"
              :class="cn('flex size-full items-center justify-center', props.ui?.indicator, item.ui?.indicator)"
            >
              <slot name="indicator" :item="item" :ui="props.ui">
                <XIcon
                  v-if="item.icon"
                  :name="item.icon"
                  :size="stepperSizeClasses[props.size].icon"
                  data-slot="icon"
                  :class="cn('shrink-0', props.ui?.icon, item.ui?.icon)"
                />
                <template v-else>
                  {{ count + 1 }}
                </template>
              </slot>
            </StepperIndicator>
          </StepperTrigger>

          <StepperSeparator
            v-if="count < props.items.length - 1"
            data-slot="separator"
            :class="cn(
              'absolute rounded-full bg-border group-data-[disabled]:opacity-75',
              stepperOrientationClasses[props.orientation].separator,
              stepperCompoundClasses[props.size][props.orientation].separator,
              stepperColorClasses[props.color].separator,
              props.ui?.separator,
              item.ui?.separator,
            )"
          />
        </div>

        <div
          data-slot="wrapper"
          :class="cn(
            stepperOrientationClasses[props.orientation].wrapper,
            stepperSizeClasses[props.size].wrapper,
            props.ui?.wrapper,
            item.ui?.wrapper,
          )"
        >
          <slot :name="item.slot ? `${item.slot}-wrapper` : 'wrapper'" :item="item">
            <StepperTitle
              v-if="item.title || !!$slots[item.slot ? `${item.slot}-title` : 'title']"
              as="div"
              data-slot="title"
              :class="cn('font-medium text-foreground', stepperSizeClasses[props.size].title, props.ui?.title, item.ui?.title)"
            >
              <slot :name="item.slot ? `${item.slot}-title` : 'title'" :item="item">
                {{ item.title }}
              </slot>
            </StepperTitle>
            <StepperDescription
              v-if="item.description || !!$slots[item.slot ? `${item.slot}-description` : 'description']"
              as="div"
              data-slot="description"
              :class="cn('text-wrap text-muted-foreground', stepperSizeClasses[props.size].description, props.ui?.description, item.ui?.description)"
            >
              <slot :name="item.slot ? `${item.slot}-description` : 'description'" :item="item">
                {{ item.description }}
              </slot>
            </StepperDescription>
          </slot>
        </div>
      </StepperItem>
    </div>

    <div
      v-if="currentStep?.content != null || !!$slots.content || (currentStep?.slot && !!$slots[currentStep.slot])"
      data-slot="content"
      :class="cn('size-full', props.ui?.content)"
    >
      <slot :name="currentStep?.slot ?? 'content'" :item="currentStep">
        {{ currentStep?.content }}
      </slot>
    </div>
  </StepperRoot>
</template>
