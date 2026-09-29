<script setup lang="ts">
import { ref } from 'vue'
import XForm from '@/components/kit/XForm.vue'
import XFormField from '@/components/kit/XFormField.vue'
import XFieldGroup from '@/components/kit/XFieldGroup.vue'
import XInput from '@/components/kit/XInput.vue'
import XButton from '@/components/kit/XButton.vue'
import { useXForm } from '@/components/kit/useXForm'

const [Form, formApi] = useXForm({
  defaultValues: { email: '', username: '' },
  rules: {
    email: [{ required: true, message: '邮箱不能为空' }],
    username: [{ required: true, message: '用户名不能为空' }],
  },
})

const submitted = ref('')
function onSubmit(values: Record<string, unknown>) {
  submitted.value = JSON.stringify(values)
}
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <Form @submit="onSubmit">
      <XFieldGroup>
        <XFormField name="username" label="用户名" required class="flex-1">
          <XInput placeholder="请输入用户名" @update:model-value="formApi.setValue('username', $event)" />
        </XFormField>
        <XFormField name="email" label="邮箱" required class="flex-1">
          <XInput placeholder="you@example.com" @update:model-value="formApi.setValue('email', $event)" />
        </XFormField>
      </XFieldGroup>
      <XFormField label="公司（选填）" description="非必填字段">
        <XInput placeholder="公司名称" />
      </XFormField>
      <div class="flex items-center gap-3">
        <XButton type="submit" variant="solid">提交</XButton>
        <XButton type="button" variant="outline" @click="formApi.reset()">重置</XButton>
      </div>
    </Form>
    <p v-if="submitted" class="text-sm text-success-7">提交数据：{{ submitted }}</p>
  </div>
</template>
