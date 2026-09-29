<script setup lang="ts">
import XAlert from '@/components/kit/XAlert.vue'
import XProgress from '@/components/kit/XProgress.vue'
import XAccordion from '@/components/kit/XAccordion.vue'
import XCollapsible from '@/components/kit/XCollapsible.vue'
import XListbox from '@/components/kit/XListbox.vue'
import XScrollArea from '@/components/kit/XScrollArea.vue'
import XCarousel from '@/components/kit/XCarousel.vue'
import XSplitter from '@/components/kit/XSplitter.vue'
import XTable from '@/components/kit/XTable.vue'
import XChip from '@/components/kit/XChip.vue'

const statusChip: Record<string, string> = {
  已完成: 'success',
  进行中: 'warning',
  已失败: 'error',
}
</script>

<template>
  <div class="flex w-full flex-col gap-5">
    <div class="flex flex-col gap-3">
      <XAlert type="success" message="成功提示" description="操作已成功完成。" show-icon />
      <XAlert type="info" message="信息提示" description="这是一条普通的信息说明。" show-icon closable />
      <XAlert type="warning" message="警告提示" description="操作存在风险，请谨慎处理。" show-icon />
      <XAlert type="error" message="错误提示" description="操作失败，请稍后重试。" show-icon />
    </div>
    <div class="flex flex-wrap items-center gap-6">
      <XProgress :percent="30" class="w-48" />
      <XProgress :percent="70" status="success" class="w-48" />
      <XProgress :percent="45" status="exception" class="w-48" />
      <XProgress :percent="75" type="circle" />
    </div>
    <XAccordion :items="[{ title: '什么是 Nuxt UI？' }, { title: '如何安装？' }]">
      <template #content="{ index }">
        <p v-if="index === 0" class="py-1 text-sm">基于 Tailwind 与 Reka UI 的 Vue 组件库，提供完整的 props、slots 与 API。</p>
        <p v-else class="py-1 text-sm">通过 shadcn-vue CLI 添加组件。</p>
      </template>
    </XAccordion>
    <XCollapsible>
      <template #content>这里是折叠的内容区域，展开后显示。</template>
    </XCollapsible>
    <div class="grid grid-cols-2 gap-4">
      <XListbox :items="[{ key: 'a', label: '选项 A' }, { key: 'b', label: '选项 B' }, { key: 'c', label: '选项 C' }]" :selected="['a']" />
      <XScrollArea :height="100">
        <div v-for="i in 6" :key="i" class="py-1 text-sm">滚动内容第 {{ i }} 行</div>
      </XScrollArea>
    </div>
    <XCarousel :items="[{ key: '1' }, { key: '2' }, { key: '3' }]">
      <template #item="{ item }">
        <div class="flex h-24 items-center justify-center rounded-lg bg-primary-1 text-primary-7">Slide {{ item.key }}</div>
      </template>
    </XCarousel>
    <XSplitter class="h-32">
      <template #first><div class="flex h-full items-center justify-center text-sm">左面板</div></template>
      <template #second><div class="flex h-full items-center justify-center text-sm">右面板</div></template>
    </XSplitter>
    <XTable
      :columns="[
        { key: 'name', title: '名称' },
        { key: 'age', title: '年龄' },
        { key: 'address', title: '地址' },
        { key: 'status', title: '状态' },
      ]"
      :data-source="[
        { key: '1', name: '张三', age: 28, address: '北京市朝阳区望京街道', status: '已完成' },
        { key: '2', name: '李四', age: 32, address: '上海市浦东新区张江镇', status: '进行中' },
        { key: '3', name: '王五', age: 24, address: '广州市天河区珠江新城', status: '已失败' },
      ]"
    >
      <template #bodyCell="{ column, record }">
        <XChip v-if="column.key === 'status'" :color="statusChip[String(record.status)] ?? 'neutral'" size="sm">
          {{ record.status }}
        </XChip>
        <template v-else>{{ record[column.key] }}</template>
      </template>
    </XTable>
  </div>
</template>
