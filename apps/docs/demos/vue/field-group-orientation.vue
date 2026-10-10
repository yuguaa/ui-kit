<script setup lang="ts">
import { XFieldGroup, XForm, XFormField, XInput } from '@/components/kit'
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <div class="flex flex-col gap-2">
      <span class="text-sm text-muted-foreground">horizontal（默认）：字段同行排列</span>
      <XForm class="gap-2">
        <XFieldGroup>
          <XFormField name="province" label="省份" class="flex-1">
            <XInput placeholder="省份" />
          </XFormField>
          <XFormField name="city" label="城市" class="flex-1">
            <XInput placeholder="城市" />
          </XFormField>
        </XFieldGroup>
      </XForm>
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-sm text-muted-foreground">vertical：字段纵向堆叠（等价于旧属性 inline=false）</span>
      <XForm class="gap-2">
        <XFieldGroup orientation="vertical">
          <XFormField name="street" label="街道">
            <XInput placeholder="街道" />
          </XFormField>
          <XFormField name="building" label="楼栋">
            <XInput placeholder="楼栋" />
          </XFormField>
        </XFieldGroup>
      </XForm>
    </div>
  </div>
</template>
