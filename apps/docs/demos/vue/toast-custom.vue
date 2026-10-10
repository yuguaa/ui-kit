<script setup lang="ts">
import { defineComponent, h } from 'vue'
import XButton from '@/components/kit/XButton.vue'
import XToaster from '@/components/kit/XToaster.vue'
import { useToast } from '@/components/kit/XToast'

const toastApi = useToast()

/** 自定义标题组件（等价 title 插槽） */
const EmojiTitle = defineComponent({
  props: { text: { type: String, default: '' } },
  setup(props) {
    return () => h('span', { class: 'font-bold' }, `🔥 ${props.text}`)
  },
})
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <XButton
      variant="soft"
      color="primary"
      @click="toastApi.show({
        title: '普通标题',
        description: 'avatar 显示头像，progress 显示剩余时长进度条。',
        avatar: { src: 'https://github.com/nuxt-ui.png', alt: 'NU' },
        progress: { color: 'success' },
        duration: 8000,
      })"
    >
      头像与进度条
    </XButton>
    <XButton
      variant="soft"
      color="primary"
      @click="toastApi.show({
        title: h(EmojiTitle, { text: '自定义标题' }),
        description: 'ui 插槽类名定制各区域样式。',
        ui: { root: 'ring-4 ring-primary-3', title: 'text-base', description: 'text-xs' },
        duration: 8000,
      })"
    >
      ui 插槽与自定义标题
    </XButton>
  </div>
  <XToaster />
</template>
