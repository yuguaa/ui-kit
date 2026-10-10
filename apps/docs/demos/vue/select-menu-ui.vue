<script setup lang="ts">
import { ref } from 'vue'
import { Sparkles } from '@lucide/vue'
import XSelectMenu from '@/components/kit/XSelectMenu.vue'

const plan = ref('pro')
const country = ref('cn')

const plans = [
  { label: '基础版', value: 'basic', description: '适合个人项目' },
  { label: '专业版', value: 'pro', description: '适合小团队' },
  { label: '旗舰版', value: 'ultimate', description: '适合大企业' },
]

const countries = [
  { label: '中国', value: 'cn', alias: 'CN' },
  { label: '美国', value: 'us', alias: 'US' },
  { label: '日本', value: 'jp', alias: 'JP' },
]
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-wrap items-center gap-4">
      <XSelectMenu
        v-model="plan"
        :items="plans"
        value-key="value"
        selected-icon="star"
        clear
        clear-icon="trash"
        class="w-48"
      />
      <XSelectMenu
        v-model="country"
        :items="countries"
        value-key="value"
        search-input
        :filter-fields="['alias']"
        placeholder="按别名搜索"
        class="w-48"
      />
      <XSelectMenu
        v-model="plan"
        :items="plans"
        value-key="value"
        class="w-48"
        :ui="{
          base: 'ring-primary/50 text-primary',
          item: 'rounded-lg',
          itemDescription: 'text-primary/50',
          itemTrailingIcon: 'text-success',
        }"
      />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <XSelectMenu :items="plans" class="w-48">
        <template #leading>
          <Sparkles class="size-4 text-warning" />
        </template>
        <template #trailing>
          <span class="text-xs text-muted-foreground">精选</span>
        </template>
      </XSelectMenu>
      <XSelectMenu :items="plans" class="w-48">
        <template #item="{ item }">
          <button
            type="button"
            class="rounded-md bg-primary/10 px-2 py-1.5 text-left text-sm text-primary"
          >
            自定义：{{ item.label }}
          </button>
        </template>
      </XSelectMenu>
      <XSelectMenu :items="[]" class="w-48">
        <template #empty>
          <span class="text-error">自定义空提示</span>
        </template>
      </XSelectMenu>
    </div>
  </div>
</template>
