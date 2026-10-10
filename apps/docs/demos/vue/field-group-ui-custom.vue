<script setup lang="ts">
import { XFieldGroup, XForm, XFormField, XInput } from '@/components/kit'
</script>

<template>
  <XForm class="w-full gap-2">
    <XFieldGroup :ui="{ root: 'rounded-lg bg-muted/40 p-3' }">
      <XFormField name="start" label="开始日期" class="flex-1">
        <XInput placeholder="2025-01-01" />
      </XFormField>
      <XFormField name="end" label="结束日期" class="flex-1">
        <XInput placeholder="2025-12-31" />
      </XFormField>
    </XFieldGroup>
  </XForm>
</template>
