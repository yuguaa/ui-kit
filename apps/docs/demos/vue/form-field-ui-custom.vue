<script setup lang="ts">
import { XButton, XForm, XFormField, XInput, useXForm } from '@/components/kit'

const [Form, formApi] = useXForm({
  defaultValues: { email: '' },
  rules: { email: [{ required: true, message: '邮箱不能为空' }] },
})
</script>

<template>
  <Form class="w-full gap-4">
    <XFormField
      name="email"
      label="邮箱"
      hint="必填"
      description="工作邮箱"
      required
      :ui="{
        root: 'rounded-lg bg-muted/40 p-3',
        label: 'text-info-6',
        labelWrapper: 'border-b border-dashed border-neutral-3 pb-1',
        description: 'text-neutral-4 italic',
        error: 'text-warning-7 font-medium',
        hint: 'text-primary-5',
      }"
    >
      <XInput placeholder="you@example.com" @update:model-value="formApi.setValue('email', $event)" />
    </XFormField>
    <XButton type="submit" class="w-fit">提交查看错误样式</XButton>
  </Form>
</template>
