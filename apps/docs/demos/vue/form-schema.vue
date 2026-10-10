<script setup lang="ts">
import { ref } from 'vue'
import { XButton, XForm, XFormField, XInput, useXForm } from '@/components/kit'

/** 标准 schema（zod v4 / valibot v1 的对象可直接传入，这里手写协议形状演示） */
const schema = {
  '~standard': {
    validate: async (value: unknown) => {
      const form = value as Record<string, unknown>
      const issues: Array<{ path?: string[]; message: string }> = []
      if (!form.email) issues.push({ path: ['email'], message: '邮箱不能为空' })
      if (typeof form.username === 'string' && form.username.length < 2) {
        issues.push({ path: ['username'], message: '用户名至少 2 个字符' })
      }
      return issues.length ? { issues } : { value: form }
    },
  },
}

const [Form, formApi] = useXForm({
  defaultValues: { username: '', email: '' },
})

const submitted = ref('')
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <Form :schema="schema" @submit="submitted = JSON.stringify($event)">
      <XFormField name="username" label="用户名" required>
        <XInput placeholder="请输入用户名" @update:model-value="formApi.setValue('username', $event)" />
      </XFormField>
      <XFormField name="email" label="邮箱" required>
        <XInput placeholder="you@example.com" @update:model-value="formApi.setValue('email', $event)" />
      </XFormField>
      <div class="flex items-center gap-3">
        <XButton type="submit">提交</XButton>
        <XButton type="button" variant="outline" @click="formApi.reset()">重置</XButton>
      </div>
    </Form>
    <p v-if="submitted" class="text-sm text-success/75">提交数据：{{ submitted }}</p>
  </div>
</template>
