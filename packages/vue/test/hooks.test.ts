import { enableAutoUnmount, mount } from "@vue/test-utils";
import { h, nextTick } from "vue";
import { afterEach, describe, expect, it } from "vitest";
import { useXAccordion } from "@/components/kit/useXAccordion";
import { useXCollapsible } from "@/components/kit/useXCollapsible";
import { useXCommandPalette } from "@/components/kit/useXCommandPalette";
import { useXContextMenu } from "@/components/kit/useXContextMenu";
import { useXDrawer } from "@/components/kit/useXDrawer";
import { useXDropdownMenu } from "@/components/kit/useXDropdownMenu";
import { useXForm } from "@/components/kit/useXForm";
import { useXModal } from "@/components/kit/useXModal";
import { useXPopover } from "@/components/kit/useXPopover";
import { useXScrollArea } from "@/components/kit/useXScrollArea";
import { useXSlideover } from "@/components/kit/useXSlideover";
import { useXSplitter } from "@/components/kit/useXSplitter";
import { useXStepper } from "@/components/kit/useXStepper";
import { useXTable } from "@/components/kit/useXTable";
import { useXTooltip } from "@/components/kit/useXTooltip";

enableAutoUnmount(afterEach);

/** 在真实组件树中使用 hook 的宿主 */
function createHost<T>(useHook: () => readonly [unknown, T]) {
  const apiRef: { current: T | null } = { current: null }
  const Host = {
    setup() {
      const [Component, api] = useHook()
      apiRef.current = api
      return () => h(Component as never)
    },
  }
  return { Host, apiRef }
}

/** 从 body 读取浮层内容断言 */
function bodyHas(text: string): boolean {
  return document.body.textContent?.includes(text) ?? false
}

/** 等待浮层内容渲染到 body（reka Presence 状态机异步推进） */
async function waitForBody(text: string): Promise<boolean> {
  for (let i = 0; i < 20; i++) {
    if (bodyHas(text)) return true
    await nextTick()
  }
  return false
}

describe("useXModal", () => {
  it("调用即得 [Modal, api]，api 控制开合与状态", async () => {
    const { Host, apiRef } = createHost(() => useXModal({ title: "初始标题" }))
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXModal>[1]

    api.open()
    expect(await waitForBody("初始标题")).toBe(true)
    api.setState({ title: "新标题" })
    expect(await waitForBody("新标题")).toBe(true)
    api.close()
    api.toggle()
    expect(await waitForBody("新标题")).toBe(true)
  })
})

describe("useXDrawer / useXSlideover", () => {
  it("api 控制抽屉开合", async () => {
    const { Host, apiRef } = createHost(() => useXDrawer({ title: "抽屉标题" }))
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXDrawer>[1]
    api.open()
    expect(await waitForBody("抽屉标题")).toBe(true)
    api.close()
  })

  it("api 控制侧滑开合", async () => {
    const { Host, apiRef } = createHost(() => useXSlideover({ title: "侧滑面板" }))
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXSlideover>[1]
    api.open()
    expect(await waitForBody("侧滑面板")).toBe(true)
    api.close()
  })
})

describe("useXTooltip / useXPopover", () => {
  it("api 控制提示气泡显示", async () => {
    const { Host, apiRef } = createHost(() => useXTooltip({ title: "提示文字" }))
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXTooltip>[1]
    api.show()
    expect(await waitForBody("提示文字")).toBe(true)
    api.hide()
  })

  it("api 控制气泡开合", async () => {
    const { Host, apiRef } = createHost(() => useXPopover({ title: "气泡标题", content: "气泡说明文字" }))
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXPopover>[1]
    api.open()
    expect(await waitForBody("气泡标题")).toBe(true)
    api.close()
  })
})

describe("useXCommandPalette / useXDropdownMenu / useXContextMenu", () => {
  it("api 控制命令面板开合", () => {
    const { Host, apiRef } = createHost(() => useXCommandPalette())
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXCommandPalette>[1]
    api.open()
    api.toggle()
    api.close()
  })

  it("api 控制下拉菜单开合", () => {
    const { Host, apiRef } = createHost(() => useXDropdownMenu())
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXDropdownMenu>[1]
    api.open()
    api.close()
  })

  it("api 控制右键菜单开合", () => {
    const { Host, apiRef } = createHost(() => useXContextMenu())
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXContextMenu>[1]
    api.open()
    api.close()
  })
})

describe("useXForm", () => {
  it("api 读写数据、校验与重置", () => {
    const { Host, apiRef } = createHost(() =>
      useXForm({ defaultValues: { email: "" }, rules: { email: [{ required: true, message: "邮箱不能为空" }] } }),
    )
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXForm>[1]
    api.setValue("email", "you@example.com")
    expect(api.values.email).toBe("you@example.com")
    expect(api.validate()).toEqual({})
    api.reset()
    expect(api.values.email).toBe("")
    expect(api.validate()).toEqual({ email: "邮箱不能为空" })
  })
})

describe("useXTable / useXStepper", () => {
  it("api 控制加载与页码", () => {
    const { Host, apiRef } = createHost(() => useXTable({ columns: [{ key: "name", title: "名称" }], dataSource: [{ key: "1", name: "张三" }] }))
    const wrapper = mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXTable>[1]
    expect(wrapper.text()).toContain("张三")
    api.setLoading(true)
    api.setLoading(false)
    api.setPage(1)
    api.reload()
    expect(api.page).toBe(1)
  })

  it("api 控制步骤前进后退", () => {
    const { Host, apiRef } = createHost(() => useXStepper({ items: [{ title: "完成" }, { title: "进行中" }, { title: "待处理" }] }))
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXStepper>[1]
    expect(api.current).toBe(0)
    api.next()
    expect(api.current).toBe(1)
    api.next()
    expect(api.current).toBe(2)
    api.prev()
    expect(api.current).toBe(1)
    api.go(0)
    expect(api.current).toBe(0)
  })
})

describe("useXAccordion / useXCollapsible / useXSplitter / useXScrollArea", () => {
  it("api 控制手风琴展开折叠", () => {
    const { Host, apiRef } = createHost(() => useXAccordion({ items: [{ title: "什么是 Nuxt UI？" }] }))
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXAccordion>[1]
    api.open(0)
    expect(api.value).toEqual(["0"])
    api.toggle(0)
    expect(api.value).toEqual([])
  })

  it("api 控制折叠开合", () => {
    const { Host, apiRef } = createHost(() => useXCollapsible())
    mount(Host as never)
    const api = apiRef.current as unknown as ReturnType<typeof useXCollapsible>[1]
    expect(api.open).toBe(false)
    api.toggle()
    expect(api.open).toBe(true)
    api.setOpen(false)
    expect(api.open).toBe(false)
  })

  it("api 控制分栏与滚动", () => {
    const { Host: SplitterHost, apiRef: splitterRef } = createHost(() => useXSplitter())
    mount(SplitterHost as never)
    const splitterApi = splitterRef.current as unknown as ReturnType<typeof useXSplitter>[1]
    expect(splitterApi.size).toBe(50)
    splitterApi.resize(30)
    expect(splitterApi.size).toBe(30)

    const { Host: AreaHost, apiRef: areaRef } = createHost(() => useXScrollArea({ height: 100 }))
    mount(AreaHost as never)
    const areaApi = areaRef.current as unknown as ReturnType<typeof useXScrollArea>[1]
    expect(() => areaApi.scrollTo(0)).not.toThrow()
  })
})
