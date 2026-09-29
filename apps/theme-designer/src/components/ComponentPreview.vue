<script setup lang="ts">
defineProps<{
  vars: Record<string, string>
  dark?: boolean
}>()
</script>

<template>
  <section class="rounded-xl border border-neutral-200 bg-white p-5">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-sm font-semibold text-neutral-900">组件预览</h2>
        <p class="mt-1 text-xs text-neutral-500">使用生成的 CSS 变量实时渲染</p>
      </div>
      <span
        class="rounded-md px-2 py-1 text-[10px] font-medium"
        :class="dark ? 'bg-black text-white' : 'bg-neutral-100 text-neutral-600'"
      >
        {{ dark ? '暗色' : '亮色' }}
      </span>
    </div>

    <!-- 变量作用域：子元素通过 var() 引用色阶 -->
    <div
      :style="vars"
      class="mt-4 flex flex-col gap-4 rounded-lg border p-4 transition-colors"
      :class="dark ? 'border-neutral-7 bg-(--neutral-9)' : 'border-neutral-200 bg-neutral-50'"
    >
      <!-- 按钮 -->
      <div class="flex flex-wrap items-center gap-2">
        <button type="button" class="cursor-pointer rounded-lg bg-(--primary-6) px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-(--primary-5) active:bg-(--primary-7)">
          主要按钮
        </button>
        <button type="button" class="cursor-pointer rounded-lg bg-(--primary-1) px-3 py-1.5 text-xs font-medium text-(--primary-7) transition-colors hover:bg-(--primary-3)">
          次要按钮
        </button>
        <button type="button" class="cursor-pointer rounded-lg border border-(--primary-6) px-3 py-1.5 text-xs font-medium text-(--primary-6) transition-colors hover:bg-(--primary-1)">
          描边按钮
        </button>
        <button type="button" class="cursor-pointer rounded-lg bg-(--error-6) px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-(--error-5)">
          危险按钮
        </button>
      </div>

      <!-- 徽标 -->
      <div class="flex flex-wrap items-center gap-2">
        <span class="rounded-md border border-(--primary-3) bg-(--primary-1) px-2 py-0.5 text-xs font-medium text-(--primary-7)">primary</span>
        <span class="rounded-md border border-(--success-3) bg-(--success-1) px-2 py-0.5 text-xs font-medium text-(--success-7)">success</span>
        <span class="rounded-md border border-(--warning-3) bg-(--warning-1) px-2 py-0.5 text-xs font-medium text-(--warning-8)">warning</span>
        <span class="rounded-md border border-(--error-3) bg-(--error-1) px-2 py-0.5 text-xs font-medium text-(--error-7)">error</span>
      </div>

      <!-- 卡片 -->
      <div
        class="rounded-lg border p-3 transition-colors"
        :class="dark ? 'border-neutral-7 bg-(--neutral-8) text-neutral-2 hover:border-(--primary-5)' : 'border-neutral-200 bg-white text-neutral-800 hover:border-(--primary-5)'"
      >
        <div class="text-xs font-semibold">卡片标题</div>
        <div class="mt-1 text-xs opacity-70">悬浮时边框高亮，阴影加深，无位移动画。</div>
      </div>

      <!-- 表单控件 -->
      <div class="flex flex-wrap items-center gap-4">
        <label class="flex items-center gap-1.5 text-xs">
          <span class="grid size-3.5 place-items-center rounded-[4px] border border-neutral-400 bg-(--primary-6) text-white">
            <span class="block size-1.5 rounded-full bg-white" />
          </span>
          多选框
        </label>
        <label class="flex items-center gap-1.5 text-xs">
          <span class="relative inline-flex h-3.5 w-6 items-center rounded-full bg-(--primary-6)">
            <span class="absolute right-0.5 size-2.5 rounded-full bg-white" />
          </span>
          开关
        </label>
        <input
          type="text"
          placeholder="输入框"
          class="h-8 w-36 rounded-lg border border-neutral-300 px-2.5 text-xs outline-none transition-colors focus:border-(--primary-6) focus:ring-2 focus:ring-(--primary-3)"
          :class="dark ? 'bg-(--neutral-8) text-white' : 'bg-white text-neutral-800'"
        />
      </div>

      <!-- 进度条 -->
      <div class="flex items-center gap-2">
        <div class="h-1.5 flex-1 overflow-hidden rounded-full" :class="dark ? 'bg-(--neutral-7)' : 'bg-(--primary-1)'">
          <div class="h-full w-3/5 rounded-full bg-(--primary-6)" />
        </div>
        <span class="text-xs font-medium" :class="dark ? 'text-neutral-2' : 'text-neutral-700'">60%</span>
      </div>

      <!-- 警告提示 -->
      <div
        class="flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs"
        :class="dark ? 'border-(--warning-6) bg-(--warning-9) text-(--warning-2)' : 'border-(--warning-3) bg-(--warning-1) text-(--warning-8)'"
      >
        警告提示：语义色随主色体系同步生成。
      </div>
    </div>
  </section>
</template>
