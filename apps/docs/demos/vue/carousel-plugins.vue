<script setup lang="ts">
import XCarousel from '@/components/kit/XCarousel.vue'

const slides = [
  { key: '1', text: '第一张', height: 'h-24' },
  { key: '2', text: '第二张', height: 'h-32' },
  { key: '3', text: '第三张', height: 'h-24' },
]

/* classNames 字符串形态仅接受单类名，多类用数组形态（embla 插件的 DOMTokenList.add 约束） */
const classNamesConfig = {
  inView: "opacity-60",
  snapped: ["opacity-100", "ring-2", "ring-primary/50"],
}
const autoScrollConfig = { speed: 1 }
</script>

<template>
  <div class="flex w-full flex-col gap-8">
    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">fade 淡入淡出切换，autoHeight 容器高度跟随当前项</span>
      <XCarousel :items="slides" fade auto-height>
        <template #default="{ item }">
          <div :class="['flex items-center justify-center rounded-lg bg-primary/10 text-primary', item.height]">
            {{ item.text }}
          </div>
        </template>
      </XCarousel>
    </div>

    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">autoScroll 连续滚动，wheelGestures 滚轮切换</span>
      <XCarousel :items="slides" :auto-scroll="autoScrollConfig" :arrows="false" wheel-gestures>
        <template #default="{ item }">
          <div :class="['flex items-center justify-center rounded-lg bg-info/10 text-info', item.height]">
            {{ item.text }}
          </div>
        </template>
      </XCarousel>
    </div>
    <div class="flex flex-col gap-3">
      <span class="text-muted-foreground text-sm">classNames 给轮播项加状态类名：进入视口的项变淡，当前吸附项高亮</span>
      <XCarousel
        :items="slides"
        :class-names="classNamesConfig"
      >
        <template #default="{ item }">
          <div :class="['flex items-center justify-center rounded-lg bg-success/10 text-success', item.height]">
            {{ item.text }}
          </div>
        </template>
      </XCarousel>
    </div>
  </div>
</template>
