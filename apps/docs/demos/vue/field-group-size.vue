<script setup lang="ts">
import { XFieldGroup, XForm, XFormField, XInput } from '@/components/kit'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div
      v-for="size in sizes"
      :key="size"
      class="flex flex-col gap-2"
    >
      <span class="text-sm text-muted-foreground">size="{{ size }}"</span>
      <XForm class="gap-0">
        <XFieldGroup :size="size">
          <XFormField label="姓氏" class="flex-1">
            <XInput placeholder="姓氏" />
          </XFormField>
          <XFormField label="名字" class="flex-1">
            <XInput placeholder="名字" />
          </XFormField>
        </XFieldGroup>
      </XForm>
    </div>
  </div>
</template>
