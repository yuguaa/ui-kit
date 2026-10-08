<script setup lang="ts">
import XBadge from '@/components/kit/XBadge.vue'
import XIcon from '@/components/kit/XIcon.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-wrap items-center gap-4">
      <XBadge square color="primary" size="xs"><XIcon name="plus" /></XBadge>
      <XBadge square color="success" size="sm"><XIcon name="check" /></XBadge>
      <XBadge square color="warning" size="md"><XIcon name="bell" /></XBadge>
      <XBadge square color="error" size="lg"><XIcon name="star" /></XBadge>
      <XBadge square color="neutral" size="xl">5</XBadge>
    </div>

    <div class="flex flex-wrap items-center gap-4">
      <XBadge color="success" :count="8">
        <template #leading><XIcon name="check" size="xs" /></template>
      </XBadge>
      <XBadge color="info" :count="12">
        <template #trailing><XIcon name="chevron-right" size="xs" /></template>
      </XBadge>
      <XBadge color="warning" variant="subtle" :count="2">
        <template #leading><XIcon name="circle-alert" size="xs" /></template>
        <template #trailing><XIcon name="x" size="xs" /></template>
      </XBadge>
    </div>

    <div class="flex flex-wrap items-center gap-8">
      <XBadge square color="error" :count="9">
        <XIcon name="bell" size="lg" />
      </XBadge>
      <XBadge color="primary" :count="3">
        <template #leading>▲</template>
        <XIcon name="bell" size="lg" />
      </XBadge>
    </div>
  </div>
</template>
