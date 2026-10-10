<script setup lang="ts">
import { Search, Tag as TagIcon } from '@lucide/vue'
import XInputTags from '@/components/kit/XInputTags.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <XInputTags :model-value="['Nuxt']" class="w-80">
      <template #leading>
        <Search class="size-4 text-muted-foreground" />
      </template>
    </XInputTags>
    <XInputTags :model-value="['Nuxt']" class="w-80">
      <template #tag="{ tag }">
        <span class="inline-flex items-center gap-1 rounded-xs bg-success-1 px-1.5 py-0.5 text-xs font-medium text-success-7 ring-1 ring-inset ring-success-3">
          <TagIcon class="size-3" />
          {{ tag }}
        </span>
      </template>
    </XInputTags>
    <XInputTags
      :model-value="['Nuxt']"
      class="w-80"
      :ui="{
        base: 'rounded-xl border border-dashed',
        item: 'bg-primary-1 text-primary-7 ring-primary-3',
        itemDeleteIcon: 'text-error-6',
      }"
    />
  </div>
</template>
