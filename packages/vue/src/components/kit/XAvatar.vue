<script lang="ts">
import type { VNode } from 'vue'
import type { AppConfig } from '@/lib/nuxt/types/app-config'
import theme from '@/lib/nuxt/ui/avatar'
import type { ChipProps } from './XChip.vue'
import type { IconProps } from './XIcon.vue'
import type { ImgHTMLAttributes } from '../../lib/nuxt/types/html'
import type { ComponentConfig } from '../../lib/nuxt/types/tv'

type Avatar = ComponentConfig<typeof theme, AppConfig, 'avatar'>

export interface AvatarProps {
  class?: any;
  style?: any;
  id?: any;
  title?: any;
  role?: any;
  name?: any;
  type?: any;
  value?: any;
  placeholder?: any;
  disabled?: any;
  required?: any;
  readonly?: any;
  autocomplete?: any;
  autofocus?: any;
  tabindex?: any;
  form?: any;
  minlength?: any;
  maxlength?: any;
  pattern?: any;
  step?: any;
  min?: any;
  max?: any;
  multiple?: any;
  checked?: any;
  size?: any;
  rows?: any;
  cols?: any;
  wrap?: any;
  accept?: any;
  capture?: any;
  download?: any;
  href?: any;
  target?: any;
  rel?: any;
  loading?: any;
  accesskey?: any;
  contenteditable?: any;
  draggable?: any;
  hidden?: any;
  lang?: any;
  slot?: any;
  autocapitalize?: any;
  autocorrect?: any;
  spellcheck?: any;
  enterkeyhint?: any;
  inputmode?: any;
  'aria-label'?: any;
  'aria-describedby'?: any;
  'aria-hidden'?: any;
  'aria-expanded'?: any;
  'aria-current'?: any;
  'aria-checked'?: any;
  'aria-controls'?: any;
  'aria-disabled'?: any;
  'aria-invalid'?: any;
  'aria-live'?: any;
  'aria-selected'?: any;
  'data-testid'?: any;
  /**
   * The element or component this component should render as.
   * @defaultValue 'span'
   */
  as?: any | { root?: any, img?: any }
  src?: string
  alt?: string
  /**
   * @IconifyIcon
   */
  icon?: IconProps['name']
  text?: string
  /**
   * @defaultValue 'md'
   */
  size?: Avatar['variants']['size']
  /**
   * @defaultValue 'neutral'
   */
  color?: Avatar['variants']['color']
  chip?: boolean | ChipProps
  class?: any
  style?: any
  ui?: Avatar['slots']
}

export interface AvatarSlots {
  default?(props?: {}): VNode[]
}
</script>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { Primitive, Slot } from 'reka-ui'
import { defu } from 'defu'
import { useAppConfig } from '@/lib/nuxt/imports'
import ImageComponent from '@/lib/nuxt/ui-image-component'
import { useComponentProps } from '../../lib/nuxt/composables/useComponentProps'
import { useAvatarGroup } from '../../lib/nuxt/composables/useAvatarGroup'
import { tv } from '../../lib/nuxt/utils/tv'
import XIcon from './XIcon.vue'
import XChip from './XChip.vue'

defineOptions({ inheritAttrs: false })

const _props = defineProps<AvatarProps>()

const props = useComponentProps('avatar', _props)

// eslint-disable-next-line vue/no-dupe-keys
const as = computed(() => {
  if (typeof props.as === 'string' || typeof props.as?.render === 'function') {
    return { root: props.as }
  }

  return defu(props.as, { root: 'span' })
})

const fallback = computed(() => props.text || (props.alt || '').split(' ').map(word => word.charAt(0)).join('').substring(0, 2))

const appConfig = useAppConfig() as Avatar['AppConfig']

const { size, color } = useAvatarGroup(_props)

// eslint-disable-next-line vue/no-dupe-keys
const ui = computed(() => tv({ extend: theme, ...(appConfig.ui?.avatar || {}) })({
  size: size.value ?? props.size,
  color: color.value ?? props.color
}))

const rootClass = computed(() => ui.value.root({ class: [props.ui?.root, props.class] }))

const sizePx = computed(() => {
  const sizeClass = (rootClass.value || '').split(' ').find(c => /^size-\d+$/.test(c))
  if (sizeClass) {
    const num = Number.parseFloat(sizeClass.split('-')[1] ?? '')
    if (!Number.isNaN(num)) return num * 4
  }

  return null
})

const error = ref(false)

watch(() => props.src, () => {
  if (error.value) {
    error.value = false
  }
})

function onError() {
  error.value = true
}
</script>

<template>
  <component
    :is="props.chip ? XChip : Primitive"
    :as="as.root"
    v-bind="props.chip ? (typeof props.chip === 'object' ? { inset: true, ...props.chip } : { inset: true }) : {}"
    :data-slot="($attrs['data-slot'] as string | undefined) ?? 'root'"
    :class="rootClass"
    :style="props.style"
  >
    <component
      :is="as.img || ImageComponent"
      v-if="props.src && !error"
      :src="props.src"
      :alt="props.alt"
      :width="sizePx"
      :height="sizePx"
      v-bind="$attrs"
      data-slot="image"
      :class="ui.image({ class: props.ui?.image })"
      @error="onError"
    />

    <Slot v-else v-bind="{ ...$attrs, 'data-slot': undefined }">
      <slot>
        <XIcon v-if="props.icon" :name="props.icon" data-slot="icon" :class="ui.icon({ class: props.ui?.icon })" />
        <span v-else data-slot="fallback" :class="ui.fallback({ class: props.ui?.fallback })">{{ fallback || '&nbsp;' }}</span>
      </slot>
    </Slot>
  </component>
</template>
