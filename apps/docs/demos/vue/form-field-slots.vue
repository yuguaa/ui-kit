<script setup lang="ts">
import { XForm, XFormField, XInput } from '@/components/kit'
</script>

<template>
  <XForm class="flex w-full flex-col gap-4">
    <XFormField
      name="username"
      label="用户名"
      hint="必填"
      description="用户名将作为登录账号"
      help="仅支持中英文与数字"
    >
      <XInput placeholder="请输入用户名" />
    </XFormField>
    <XFormField name="email" label="邮箱">
      <template #label>
        <span class="text-primary-6">邮箱地址</span>
      </template>
      <template #hint>8-20 位</template>
      <template #description>
        <span class="text-info-6">用于接收订单通知</span>
      </template>
      <template #help>
        <span class="text-neutral-5">不会公开显示</span>
      </template>
      <XInput placeholder="you@example.com" />
    </XFormField>
  </XForm>
</template>
