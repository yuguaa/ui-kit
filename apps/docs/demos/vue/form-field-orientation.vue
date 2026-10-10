<script setup lang="ts">
import { XForm, XFormField, XInput } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-2">
      <span class="text-sm text-muted-foreground">vertical（默认）：标签在上，控件在下</span>
      <XForm class="gap-2">
        <XFormField label="邮箱" description="用于接收通知">
          <XInput placeholder="you@example.com" />
        </XFormField>
      </XForm>
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-sm text-muted-foreground">horizontal：标签与控件同一行</span>
      <XForm class="gap-2">
        <XFormField orientation="horizontal" label="邮箱" description="用于接收通知">
          <XInput placeholder="you@example.com" class="max-w-64" />
        </XFormField>
      </XForm>
    </div>
  </div>
</template>
