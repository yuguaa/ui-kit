<script setup lang="ts">
/**
 * XAccordion 手风琴：可展开与折叠的内容分组。
 */
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

export interface AccordionDataItem {
  /** 标题 */
  title: string
  /** 该项是否禁用 */
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  /** 手风琴项数组 */
  items: AccordionDataItem[]
  /** 是否可多开 */
  multiple?: boolean
  /** 是否禁用 */
  disabled?: boolean
  class?: HTMLAttributes['class']
}>(), {
  multiple: false,
  disabled: false,
})

const model = defineModel<string | string[]>({ default: '' })

const accordionType = computed(() => (props.multiple ? 'multiple' : 'single'))
const accordionValue = computed<string | string[]>(() => model.value ?? (props.multiple ? [] : ''))
</script>

<template>
  <Accordion
    :type="accordionType"
    collapsible
    :model-value="accordionValue"
    :disabled="disabled"
    :class="cn('w-full', props.class)"
    @update:model-value="model = (($event ?? (multiple ? [] : '')) as string | string[])"
  >
    <AccordionItem v-for="(item, index) in items" :key="index" :value="String(index)" :disabled="item.disabled">
      <AccordionTrigger>
        <slot name="item" :item="item" :index="index">{{ item.title }}</slot>
      </AccordionTrigger>
      <AccordionContent>
        <slot name="content" :item="item" :index="index" />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
