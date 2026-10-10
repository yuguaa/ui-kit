<script setup lang="ts">
/**
 * XTabs 标签页:按 Nuxt UI tabs 结构二次封装。
 * items 字段(label / icon / avatar / badge / slot / content / value)驱动,
 * variant 支持 pill / link,orientation 支持 horizontal / vertical,
 * 支持受控 modelValue 与非受控 defaultValue,内容区按 item.slot 分发插槽。
 */
import type { Component, ComponentPublicInstance, HTMLAttributes } from 'vue'
import { computed, ref } from 'vue'
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import XAvatar from '@/components/kit/XAvatar.vue'
import XBadge from '@/components/kit/XBadge.vue'
import XIcon from '@/components/kit/XIcon.vue'
import { cn } from '@/lib/utils'

type IconName = InstanceType<typeof XIcon>['$props']['name']
type IconSize = NonNullable<InstanceType<typeof XIcon>['$props']['size']>
type AvatarSize = NonNullable<InstanceType<typeof XAvatar>['$props']['size']>
type AvatarShape = NonNullable<InstanceType<typeof XAvatar>['$props']['shape']>
type AvatarColor = NonNullable<InstanceType<typeof XAvatar>['$props']['color']>
type BadgeColor = NonNullable<InstanceType<typeof XBadge>['$props']['color']>
type BadgeVariant = NonNullable<InstanceType<typeof XBadge>['$props']['variant']>
type BadgeSize = NonNullable<InstanceType<typeof XBadge>['$props']['size']>

type TabsColor = 'primary' | 'secondary' | 'neutral' | 'success' | 'info' | 'warning' | 'error'
type TabsVariant = 'pill' | 'link'
type TabsSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type TabsOrientation = 'horizontal' | 'vertical'

/** 主题插槽类名,键名与 Nuxt UI 主题保持一致(leadingAvatarSize / trailingBadgeSize 为尺寸值) */
export interface TabsUi {
  root?: string
  list?: string
  indicator?: string
  trigger?: string
  leadingIcon?: string
  leadingAvatar?: string
  leadingAvatarSize?: AvatarSize
  label?: string
  trailingBadge?: string
  trailingBadgeSize?: BadgeSize
  content?: string
}

/** 标签项字段映射,与 Nuxt UI TabsItem 保持一致 */
export interface TabsItem {
  label?: string
  icon?: IconName
  avatar?: {
    src?: string
    alt?: string
    text?: string
    size?: AvatarSize
    shape?: AvatarShape
    color?: AvatarColor
  }
  badge?: string | number | {
    label?: string | number
    color?: BadgeColor
    variant?: BadgeVariant
    size?: BadgeSize
  }
  slot?: string
  content?: string
  value?: string | number
  disabled?: boolean
  class?: HTMLAttributes['class']
  ui?: Partial<Pick<TabsUi, 'trigger' | 'leadingIcon' | 'leadingAvatar' | 'leadingAvatarSize' | 'label' | 'trailingBadge' | 'trailingBadgeSize' | 'content'>>
  [key: string]: any
}

/** 变体 × 语义色:指示器背景、激活态文字与内容聚焦环(完整字面量) */
const tabsColorClasses: Record<TabsColor, Record<TabsVariant, { indicator: string; trigger: string; content: string }>> = {
  primary: {
    pill: {
      indicator: 'bg-primary',
      trigger: 'data-[state=active]:text-background outline-primary/25 focus-visible:outline-3',
      content: 'outline-primary/25',
    },
    link: {
      indicator: 'bg-primary',
      trigger: 'data-[state=active]:text-primary outline-primary/25 focus-visible:outline-3',
      content: 'outline-primary/25',
    },
  },
  secondary: {
    pill: {
      indicator: 'bg-secondary',
      trigger: 'data-[state=active]:text-secondary-foreground outline-secondary/25 focus-visible:outline-3',
      content: 'outline-secondary/25',
    },
    link: {
      indicator: 'bg-secondary',
      trigger: 'data-[state=active]:text-secondary-foreground outline-secondary/25 focus-visible:outline-3',
      content: 'outline-secondary/25',
    },
  },
  neutral: {
    pill: {
      indicator: 'bg-foreground',
      trigger: 'data-[state=active]:text-background outline-foreground/25 focus-visible:outline-3',
      content: 'outline-foreground/25',
    },
    link: {
      indicator: 'bg-foreground',
      trigger: 'data-[state=active]:text-foreground outline-foreground/25 focus-visible:outline-3',
      content: 'outline-foreground/25',
    },
  },
  success: {
    pill: {
      indicator: 'bg-success',
      trigger: 'data-[state=active]:text-background outline-success/25 focus-visible:outline-3',
      content: 'outline-success/25',
    },
    link: {
      indicator: 'bg-success',
      trigger: 'data-[state=active]:text-success outline-success/25 focus-visible:outline-3',
      content: 'outline-success/25',
    },
  },
  info: {
    pill: {
      indicator: 'bg-info',
      trigger: 'data-[state=active]:text-background outline-info/25 focus-visible:outline-3',
      content: 'outline-info/25',
    },
    link: {
      indicator: 'bg-info',
      trigger: 'data-[state=active]:text-info outline-info/25 focus-visible:outline-3',
      content: 'outline-info/25',
    },
  },
  warning: {
    pill: {
      indicator: 'bg-warning',
      trigger: 'data-[state=active]:text-background outline-warning/25 focus-visible:outline-3',
      content: 'outline-warning/25',
    },
    link: {
      indicator: 'bg-warning',
      trigger: 'data-[state=active]:text-warning outline-warning/25 focus-visible:outline-3',
      content: 'outline-warning/25',
    },
  },
  error: {
    pill: {
      indicator: 'bg-error',
      trigger: 'data-[state=active]:text-background outline-error/25 focus-visible:outline-3',
      content: 'outline-error/25',
    },
    link: {
      indicator: 'bg-error',
      trigger: 'data-[state=active]:text-error outline-error/25 focus-visible:outline-3',
      content: 'outline-error/25',
    },
  },
}

/** 尺寸:触发器内边距字号、图标尺寸与头像尺寸 */
const tabsSizeClasses: Record<TabsSize, { trigger: string; leadingIcon: IconSize; leadingAvatarSize: AvatarSize }> = {
  xs: { trigger: 'px-2 py-1 text-xs gap-1', leadingIcon: 'sm', leadingAvatarSize: 'xs' },
  sm: { trigger: 'px-2.5 py-1.5 text-xs gap-1.5', leadingIcon: 'sm', leadingAvatarSize: 'xs' },
  md: { trigger: 'px-3 py-1.5 text-sm gap-1.5', leadingIcon: 'md', leadingAvatarSize: 'sm' },
  lg: { trigger: 'px-3 py-2 text-sm gap-2', leadingIcon: 'md', leadingAvatarSize: 'sm' },
  xl: { trigger: 'px-3 py-2 text-base gap-2', leadingIcon: 'lg', leadingAvatarSize: 'md' },
}

/** 变体:列表与指示器形状 */
const tabsVariantClasses: Record<TabsVariant, { list: string; indicator: string }> = {
  pill: { list: 'bg-muted rounded-lg', indicator: 'rounded-md shadow-xs' },
  link: { list: 'border-border', indicator: 'rounded-full' },
}

/** 方向:根、列表、指示器与触发器的布局 */
const tabsOrientationClasses: Record<TabsOrientation, { root: string; list: string; indicator: string; trigger: string }> = {
  horizontal: {
    root: 'flex-col',
    list: 'w-full',
    indicator: 'left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)',
    trigger: 'justify-center',
  },
  vertical: {
    root: '',
    list: 'flex-col',
    indicator: 'top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)',
    trigger: '',
  },
}

/** 方向 × 变体组合:指示器与列表的边距修正 */
const tabsCompoundClasses: Record<TabsOrientation, Record<TabsVariant, { list?: string; indicator: string; trigger?: string }>> = {
  horizontal: {
    pill: { indicator: 'inset-y-1' },
    link: { list: 'border-b -mb-px', indicator: '-bottom-px h-px' },
  },
  vertical: {
    pill: { list: 'items-center', indicator: 'inset-x-1', trigger: 'w-full justify-center' },
    link: { list: 'border-s -ms-px', indicator: '-start-px w-px' },
  },
}

const props = withDefaults(defineProps<{
  /** 渲染为指定元素或组件 */
  as?: string | Component
  /** 标签项数组 */
  items?: TabsItem[]
  /** 组件颜色 */
  color?: TabsColor
  /** 预设样式 */
  variant?: TabsVariant
  /** 标签尺寸 */
  size?: TabsSize
  /** 标签排列方向 */
  orientation?: TabsOrientation
  /** 是否渲染内容区 */
  content?: boolean
  /** 从标签项取 value 的字段,支持点路径 */
  valueKey?: string
  /** 从标签项取 label 的字段,支持点路径 */
  labelKey?: string
  /** 初始激活的标签 value */
  defaultValue?: string | number
  /** 激活方式:automatic 聚焦即激活,manual 仅点击激活 */
  activationMode?: 'automatic' | 'manual'
  /** 隐藏面板时是否卸载内容 */
  unmountOnHide?: boolean
  /** 主题插槽类名 */
  ui?: TabsUi
  class?: HTMLAttributes['class']
}>(), {
  as: 'div',
  items: () => [],
  color: 'primary',
  variant: 'pill',
  size: 'md',
  orientation: 'horizontal',
  content: true,
  valueKey: 'value',
  labelKey: 'label',
  defaultValue: '0',
  activationMode: 'automatic',
  unmountOnHide: true,
})

const modelValue = defineModel<string | number>()

/** 取对象字段,支持点路径 */
function get(item: TabsItem, key: string): string | number | undefined {
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc == null || typeof acc !== 'object') return undefined
    return (acc as Record<string, unknown>)[part]
  }, item) as string | number | undefined
}

/** 触发器元素引用,与 Nuxt 一致对外暴露 */
const triggersRef = ref<(ComponentPublicInstance | Element | null)[]>([])

function setTriggerRef(index: number, el: unknown) {
  triggersRef.value[index] = el as ComponentPublicInstance | Element | null
}

defineExpose({ triggersRef })

/** 传给 leading / trailing / content 插槽的 ui 对象(各槽合并后的类名) */
const slotUi = computed<TabsUi>(() => ({
  root: cn('flex items-center gap-2', tabsOrientationClasses[props.orientation].root, props.ui?.root, props.class),
  list: cn(
    'relative flex p-1 group',
    tabsOrientationClasses[props.orientation].list,
    tabsVariantClasses[props.variant].list,
    tabsCompoundClasses[props.orientation][props.variant].list,
    props.ui?.list,
  ),
  indicator: cn(
    'absolute transition-[translate,width] duration-200 ease-out motion-reduce:transition-none',
    tabsVariantClasses[props.variant].indicator,
    tabsOrientationClasses[props.orientation].indicator,
    tabsCompoundClasses[props.orientation][props.variant].indicator,
    tabsColorClasses[props.color][props.variant].indicator,
    props.ui?.indicator,
  ),
  trigger: props.ui?.trigger,
  leadingIcon: cn('shrink-0', props.ui?.leadingIcon),
  leadingAvatar: cn('shrink-0', props.ui?.leadingAvatar),
  leadingAvatarSize: props.ui?.leadingAvatarSize ?? tabsSizeClasses[props.size].leadingAvatarSize,
  label: cn('truncate', props.ui?.label),
  trailingBadge: cn('shrink-0', props.ui?.trailingBadge),
  trailingBadgeSize: props.ui?.trailingBadgeSize ?? 'sm',
  content: props.ui?.content,
}))
</script>

<template>
  <TabsRoot
    :as="as"
    :model-value="modelValue"
    :default-value="props.defaultValue"
    :orientation="props.orientation"
    :activation-mode="props.activationMode"
    :unmount-on-hide="props.unmountOnHide"
    data-slot="root"
    :class="cn('flex items-center gap-2', tabsOrientationClasses[props.orientation].root, props.ui?.root, props.class)"
    @update:model-value="modelValue = $event"
  >
    <TabsList
      data-slot="list"
      :class="cn(
        'relative flex p-1 group',
        tabsOrientationClasses[props.orientation].list,
        tabsVariantClasses[props.variant].list,
        tabsCompoundClasses[props.orientation][props.variant].list,
        props.ui?.list,
      )"
    >
      <TabsIndicator
        data-slot="indicator"
        :class="cn(
          'absolute transition-[translate,width] duration-200 ease-out motion-reduce:transition-none',
          tabsVariantClasses[props.variant].indicator,
          tabsOrientationClasses[props.orientation].indicator,
          tabsCompoundClasses[props.orientation][props.variant].indicator,
          tabsColorClasses[props.color][props.variant].indicator,
          props.ui?.indicator,
        )"
      />

      <slot name="list-leading" />

      <TabsTrigger
        v-for="(item, index) of props.items"
        :key="get(item, props.valueKey) ?? index"
        :ref="el => setTriggerRef(index, el)"
        :value="get(item, props.valueKey) ?? String(index)"
        :disabled="item.disabled"
        data-slot="trigger"
        :class="cn(
          'group relative inline-flex min-w-0 items-center rounded-md font-medium transition-colors',
          'data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:not-disabled:text-foreground',
          'disabled:cursor-not-allowed disabled:opacity-75',
          tabsSizeClasses[props.size].trigger,
          tabsOrientationClasses[props.orientation].trigger,
          tabsCompoundClasses[props.orientation][props.variant].trigger,
          tabsColorClasses[props.color][props.variant].trigger,
          props.ui?.trigger,
          item.ui?.trigger,
        )"
      >
        <slot name="leading" :item="item" :index="index" :ui="slotUi">
          <XIcon
            v-if="item.icon"
            :name="item.icon"
            :size="tabsSizeClasses[props.size].leadingIcon"
            data-slot="leadingIcon"
            :class="cn('shrink-0', props.ui?.leadingIcon, item.ui?.leadingIcon)"
          />
          <XAvatar
            v-else-if="item.avatar"
            v-bind="item.avatar"
            :size="item.ui?.leadingAvatarSize ?? props.ui?.leadingAvatarSize ?? tabsSizeClasses[props.size].leadingAvatarSize"
            data-slot="leadingAvatar"
            :class="cn('shrink-0', props.ui?.leadingAvatar, item.ui?.leadingAvatar)"
          />
        </slot>

        <span
          v-if="get(item, props.labelKey) != null || !!$slots.default"
          data-slot="label"
          :class="cn('truncate', props.ui?.label, item.ui?.label)"
        >
          <slot :item="item" :index="index">{{ get(item, props.labelKey) }}</slot>
        </span>

        <slot name="trailing" :item="item" :index="index" :ui="slotUi">
          <XBadge
            v-if="item.badge != null"
            color="neutral"
            variant="outline"
            :size="item.ui?.trailingBadgeSize ?? props.ui?.trailingBadgeSize ?? 'sm'"
            v-bind="typeof item.badge === 'string' || typeof item.badge === 'number' ? { label: item.badge } : item.badge"
            data-slot="trailingBadge"
            :class="cn('shrink-0', props.ui?.trailingBadge, item.ui?.trailingBadge)"
          />
        </slot>
      </TabsTrigger>

      <slot name="list-trailing" />
    </TabsList>

    <template v-if="props.content">
      <TabsContent
        v-for="(item, index) of props.items"
        :key="get(item, props.valueKey) ?? index"
        :value="get(item, props.valueKey) ?? String(index)"
        data-slot="content"
        :class="cn(
          'w-full rounded-md focus-visible:outline-3',
          tabsColorClasses[props.color][props.variant].content,
          props.ui?.content,
          item.ui?.content,
          item.class,
        )"
      >
        <slot :name="item.slot ?? 'content'" :item="item" :index="index" :ui="slotUi">
          {{ item.content }}
        </slot>
      </TabsContent>
    </template>
  </TabsRoot>
</template>
