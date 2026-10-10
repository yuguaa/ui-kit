<script setup lang="ts">
import { ref } from 'vue'
import { XPagination } from '@/components/kit'

const page = ref(3)
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <XPagination
      v-model:page="page"
      :total="100"
      :items-per-page="10"
      :ui="{
        root: 'rounded-lg bg-elevated p-2',
        list: 'gap-2',
        item: 'ring-1 ring-inset ring-border',
        label: 'font-bold',
        ellipsis: 'opacity-40',
      }"
    />
    <XPagination v-model:page="page" :total="100" :items-per-page="10">
      <template #item="{ item, page: current }">
        <button
          type="button"
          class="rounded-md px-3 py-1.5 text-sm"
          :class="item.value === current ? 'bg-primary-6 text-white' : 'text-muted-foreground'"
        >
          第 {{ item.value }} 页
        </button>
      </template>
    </XPagination>
  </div>
</template>
