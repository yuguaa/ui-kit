<script setup lang="ts">
import XForm from '@/components/kit/XForm.vue'
import XFormField from '@/components/kit/XFormField.vue'
import XInput from '@/components/kit/XInput.vue'

/* XFormField 需要在 XForm 内部使用，hint 用于说明填写要求 */
const rules = {
  password: [{ required: true, message: '密码不能为空' }],
}
</script>

<template>
  <XForm :rules="rules" class="flex w-full flex-col gap-4">
    <XFormField name="password" label="密码" hint="8-20 位，含大小写字母与数字" required>
      <XInput placeholder="请输入密码" type="password" />
    </XFormField>
    <XFormField name="phone" label="手机号">
      <template #hint>用于接收订单通知</template>
      <XInput placeholder="请输入手机号" />
    </XFormField>
  </XForm>
</template>
