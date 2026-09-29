import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import * as React from "react";
import { useXAccordion } from "@/components/kit/x-accordion";
import { useXCarousel } from "@/components/kit/x-carousel";
import { useXCollapsible } from "@/components/kit/x-collapsible";
import { useXCommandPalette } from "@/components/kit/x-command-palette";
import { useXContextMenu } from "@/components/kit/x-context-menu";
import { useXDrawer } from "@/components/kit/x-drawer";
import { useXDropdownMenu } from "@/components/kit/x-dropdown-menu";
import { useXForm } from "@/components/kit/x-form";
import { useXModal } from "@/components/kit/x-modal";
import { useXPopover } from "@/components/kit/x-popover";
import { useXScrollArea } from "@/components/kit/x-scroll-area";
import { useXSlideover } from "@/components/kit/x-slideover";
import { useXSplitter } from "@/components/kit/x-splitter";
import { useXStepper } from "@/components/kit/x-stepper";
import { useXTable } from "@/components/kit/x-table";
import { useXTooltip } from "@/components/kit/x-tooltip";

/** 在真实组件树中使用 hook 的宿主：贴近实际用法，api 暴露到全局供用例调用 */
function createHost<T>(useHook: () => readonly [React.ComponentType<Record<string, never>>, T]) {
  const apiRef: { current: T | null } = { current: null }
  function Host() {
    const [Component, api] = useHook() as unknown as readonly [React.ComponentType<Record<string, never>>, T]
    apiRef.current = api
    return <Component />
  }
  return { Host, apiRef }
}

describe("useXModal", () => {
  it("调用即得 [Modal, api]，api 控制开合与状态", async () => {
    const { Host, apiRef } = createHost(() => useXModal({ title: "初始标题" }))
    render(<Host />)
    expect(screen.queryByText("初始标题")).not.toBeInTheDocument()

    act(() => apiRef.current!.open())
    expect(await screen.findByText("初始标题")).toBeInTheDocument()

    act(() => apiRef.current!.setState({ title: "新标题" }))
    expect(await screen.findByText("新标题")).toBeInTheDocument()

    act(() => apiRef.current!.close())
    act(() => apiRef.current!.toggle())
    expect(await screen.findByText("新标题")).toBeInTheDocument()
  })
})

describe("useXDrawer / useXSlideover", () => {
  it("api 控制抽屉开合", async () => {
    const { Host, apiRef } = createHost(() => useXDrawer({ title: "抽屉标题" }))
    render(<Host />)
    act(() => apiRef.current!.open())
    expect(await screen.findByText("抽屉标题")).toBeInTheDocument()
    act(() => apiRef.current!.close())
  })

  it("api 控制侧滑开合", async () => {
    const { Host, apiRef } = createHost(() => useXSlideover({ title: "侧滑面板" }))
    render(<Host />)
    act(() => apiRef.current!.open())
    expect((await screen.findAllByText("侧滑面板")).length).toBeGreaterThan(0)
    act(() => apiRef.current!.close())
  })
})

describe("useXTooltip / useXPopover", () => {
  it("api 控制提示气泡显示", async () => {
    const { Host, apiRef } = createHost(() => useXTooltip({ title: "提示文字" }))
    render(<Host />)
    act(() => apiRef.current!.show())
    expect(await screen.findByText("提示文字")).toBeInTheDocument()
    act(() => apiRef.current!.hide())
  })

  it("api 控制气泡开合", async () => {
    const { Host, apiRef } = createHost(() => useXPopover({ title: "气泡标题", content: "气泡说明文字" }))
    render(<Host />)
    act(() => apiRef.current!.open())
    expect(await screen.findByText("气泡标题")).toBeInTheDocument()
    expect(await screen.findByText("气泡说明文字")).toBeInTheDocument()
    act(() => apiRef.current!.close())
  })
})

describe("useXCommandPalette / useXDropdownMenu / useXContextMenu", () => {
  it("api 控制命令面板开合", async () => {
    const { Host, apiRef } = createHost(() =>
      useXCommandPalette({ groups: [{ label: "操作", commands: [{ label: "新建文档", shortcut: "⌘ N" }] }] }),
    )
    render(<Host />)
    act(() => apiRef.current!.open())
    expect(await screen.findByText("新建文档")).toBeInTheDocument()
    act(() => apiRef.current!.close())
  })

  it("api 控制下拉菜单开合", async () => {
    const { Host, apiRef } = createHost(() => useXDropdownMenu({ items: [{ key: "rename", label: "重命名" }] }))
    render(<Host />)
    act(() => apiRef.current!.open())
    expect(await screen.findByText("重命名")).toBeInTheDocument()
    act(() => apiRef.current!.close())
  })

  it("api 控制右键菜单开合", async () => {
    const { Host, apiRef } = createHost(() => useXContextMenu({ items: [{ key: "edit", label: "编辑" }] }))
    render(<Host />)
    act(() => apiRef.current!.open())
    expect(await screen.findByText("编辑")).toBeInTheDocument()
    act(() => apiRef.current!.close())
  })
})

describe("useXForm", () => {
  it("api 读写数据、校验与重置", () => {
    const { Host, apiRef } = createHost(() =>
      useXForm({ defaultValues: { email: "" }, rules: { email: [{ required: true, message: "邮箱不能为空" }] } }),
    )
    render(<Host />)
    act(() => apiRef.current!.setValue("email", "you@example.com"))
    expect(apiRef.current!.values.email).toBe("you@example.com")
    expect(apiRef.current!.validate()).toEqual({})
    act(() => apiRef.current!.reset())
    expect(apiRef.current!.values.email).toBe("")
    expect(apiRef.current!.validate()).toEqual({ email: "邮箱不能为空" })
  })
})

describe("useXTable", () => {
  it("api 控制加载与页码", () => {
    const { Host, apiRef } = createHost(() =>
      useXTable({ columns: [{ key: "name", title: "名称" }], dataSource: [{ key: "1", name: "张三" }] }),
    )
    render(<Host />)
    expect(screen.getByText("张三")).toBeInTheDocument()
    act(() => apiRef.current!.setLoading(true))
    act(() => apiRef.current!.setLoading(false))
    act(() => apiRef.current!.setPage(1))
    act(() => apiRef.current!.reload())
    expect(apiRef.current!.page).toBe(1)
  })
})

describe("useXStepper", () => {
  it("api 控制步骤前进后退", () => {
    const { Host, apiRef } = createHost(() =>
      useXStepper({ items: [{ title: "完成" }, { title: "进行中" }, { title: "待处理" }] }),
    )
    render(<Host />)
    expect(apiRef.current!.current).toBe(0)
    act(() => apiRef.current!.next())
    expect(apiRef.current!.current).toBe(1)
    act(() => apiRef.current!.next())
    expect(apiRef.current!.current).toBe(2)
    act(() => apiRef.current!.prev())
    expect(apiRef.current!.current).toBe(1)
    act(() => apiRef.current!.go(0))
    expect(apiRef.current!.current).toBe(0)
  })
})

describe("useXAccordion / useXCollapsible", () => {
  it("api 控制手风琴展开折叠", () => {
    const { Host, apiRef } = createHost(() => useXAccordion({ items: [{ title: "什么是 Nuxt UI？", content: "组件库说明" }] }))
    render(<Host />)
    act(() => apiRef.current!.open(0))
    expect(apiRef.current!.value).toEqual(["0"])
    act(() => apiRef.current!.toggle(0))
    expect(apiRef.current!.value).toEqual([])
  })

  it("api 控制折叠开合", () => {
    const { Host, apiRef } = createHost(() => useXCollapsible())
    render(<Host />)
    expect(apiRef.current!.open).toBe(false)
    act(() => apiRef.current!.toggle())
    expect(apiRef.current!.open).toBe(true)
    act(() => apiRef.current!.setOpen(false))
    expect(apiRef.current!.open).toBe(false)
  })
})

describe("useXScrollArea / useXSplitter / useXCarousel", () => {
  it("api 提供滚动、分栏与轮播控制", () => {
    const { Host: AreaHost, apiRef: areaApi } = createHost(() => useXScrollArea())
    render(<AreaHost />)
    expect(() => areaApi.current!.scrollTo(0)).not.toThrow()

    const { Host: SplitterHost, apiRef: splitterApi } = createHost(() => useXSplitter())
    render(<SplitterHost />)
    expect(splitterApi.current!.size).toBe(50)
    act(() => splitterApi.current!.resize(30))
    expect(splitterApi.current!.size).toBe(30)

    const { Host: CarouselHost, apiRef: carouselApi } = createHost(() =>
      useXCarousel({ items: [{ key: "1", content: "Slide 1" }, { key: "2", content: "Slide 2" }] }),
    )
    render(<CarouselHost />)
    expect(typeof carouselApi.current!.next).toBe("function")
    expect(typeof carouselApi.current!.prev).toBe("function")
  })
})
