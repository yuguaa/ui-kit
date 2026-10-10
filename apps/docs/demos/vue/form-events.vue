<script setup lang="ts">
import { ref } from 'vue'
import { XButton, XForm, XFormField, XInput, useXForm } from '@/components/kit'

const [Form, formApi] = useXForm({
  defaultValues: { nickname: '' },
  rules: { nickname: [{ required: true, message: '昵称不能为空' }] },
})

const submitted = ref('')
const failedCount = ref(0)
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <Form
      @submit="submitted = JSON.stringify($event)"
      @error="failedCount = Object.keys($event).length"
    >
      <XFormField name="nickname" label="昵称" required>
        <XInput placeholder="请输入昵称" @update:model-value="formApi.setValue('nickname', $event)" />
      </XFormField>
      <XButton type="submit" class="w-fit">提交</XButton>
    </Form>
    <p class="text-sm text-muted-foreground">submit 事件：{{ submitted || '尚未提交' }}</p>
    <p class="text-sm text-muted-foreground">
      error 事件：{{ failedCount > 0 ? `校验失败，共 ${failedCount} 个错误` : '无校验错误' }}
    </p>
  </div>
</template>
