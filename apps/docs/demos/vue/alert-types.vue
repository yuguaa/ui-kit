<script setup lang="ts">
import XAlert from '@/components/kit/XAlert.vue'
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <XAlert type="success" message="成功提示" description="操作已成功完成。" show-icon />
    <XAlert type="info" message="信息提示" description="这是一条普通的信息说明。" show-icon />
    <XAlert type="warning" message="警告提示" description="操作存在风险，请谨慎处理。" show-icon />
    <XAlert type="error" message="错误提示" description="操作失败，请稍后重试。" show-icon />
  </div>
</template>
