<script setup lang="ts">
import { XForm, XFormField, XInput, useXForm } from '@/components/kit'

const [Form] = useXForm({ defaultValues: { name: '' } })
</script>

<template>
  <Form
    :ui="{ root: 'rounded-xl border border-dashed border-primary/50 bg-primary/10 p-4 gap-2' }"
    class="w-full"
  >
    <XFormField name="name" label="姓名">
      <XInput placeholder="请输入姓名" />
    </XFormField>
  </Form>
</template>
