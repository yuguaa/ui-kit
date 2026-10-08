import { createApp } from 'vue'
import { afterEach, describe, expect, it } from 'vitest'
import ComponentPreview from '../src/components/ComponentPreview.vue'

/* 每个用例后卸载应用，清理浮层 teleport 到 body 的内容 */
const mounted: Array<{ unmount: () => void }> = []
afterEach(() => {
  for (const app of mounted.splice(0)) app.unmount()
  document.body.innerHTML = ''
})

/** 挂载预览面板并返回渲染文本 */
async function renderPreview(framework: 'vue' | 'react' = 'vue') {
  const host = document.createElement('div')
  document.body.appendChild(host)
  const app = createApp(ComponentPreview, { vars: {}, dark: false })
  app.mount(host)
  mounted.push(app)
  await new Promise((resolve) => setTimeout(resolve, 50))
  return host.textContent ?? ''
}

describe('组件预览', () => {
  it('渲染全部组件区块', async () => {
    const text = await renderPreview()

    for (const section of ['布局与展示', '表单', '导航', '浮层', '内容']) {
      expect(text, section).toContain(section)
    }
  })

  it('渲染各区块的代表性组件', async () => {
    const text = await renderPreview()

    for (const marker of [
      '主要按钮',
      '可关闭',
      '卡片标题',
      '带标签分割线',
      '同意协议',
      '拖拽文件到此处，或点击上传',
      '文档链接',
      '订单管理',
      '打开命令面板',
      '在此处右键打开菜单',
      '消息通知',
      '警告提示',
      '轮播项 1',
      '滚动内容第 1 行',
      '左面板',
      '订单 A',
    ]) {
      expect(text, marker).toContain(marker)
    }
  })
})
