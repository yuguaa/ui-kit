import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="@container bg-background text-foreground w-full" aria-labelledby="cta-15-title">
        <div className="flex justify-center max-w-[90rem] mx-auto px-[clamp(1rem,5.56cqw,5rem)] py-12 w-full">
          <Card className="@container bg-emerald-900 dark isolate max-w-7xl py-0 relative ring-0 shadow-2xl text-base w-full" size="default">
            <div className="absolute bg-[radial-gradient(circle_at_1.5px_1.5px,rgba(236,253,240,0.11)_0.75px,transparent_0)] bg-[size:3px_3px] inset-0 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute bg-lime-400/12 blur-[100px] left-[-220px] pointer-events-none rounded-full size-125 top-[-230px]" aria-hidden="true"></div>
            <div className="absolute bg-lime-400/12 blur-[100px] bottom-[-232px] pointer-events-none right-[-200px] rounded-full size-125" aria-hidden="true"></div>
            <div className="@min-[900px]:flex-row @min-[900px]:gap-x-6 @min-[900px]:items-center @min-[900px]:p-0 flex flex-col gap-8 px-6 py-10 relative">
              <div className="@min-[1240px]:px-12 @min-[1240px]:py-20 @min-[900px]:flex-1 @min-[900px]:justify-center @min-[900px]:min-w-72 @min-[900px]:px-8 @min-[900px]:py-14 flex flex-col gap-6">
                <h2 className="@min-[1240px]:text-5xl @min-[940px]:text-4xl font-semibold text-3xl text-white" id="cta-15-title">
                  {"Build Production-Ready Interfaces with NeUI"}
                </h2>
                <p className="leading-6 text-base text-white/50">
                  {"Build production-ready interfaces with flexible NeUI blocks, AI-friendly workflows, and components designed for fast customization."}
                </p>
                <div className="[--primary-foreground:var(--color-amber-950)] [--primary:var(--color-amber-300)] [--secondary-foreground:var(--color-white)] [--secondary:oklch(1_0_0_/_0.1)] flex flex-wrap gap-x-4 gap-y-2 items-center">
                  <Button className="shadow-2xs" href="#" role="button" tabIndex="0">
                    {"Start Building"}
                  </Button>
                  <Button className="shadow-xs" href="#" role="button" tabIndex="0">
                    {"Read Docs"}
                  </Button>
                </div>
              </div>
              <ul className="@min-[1240px]:pe-12 @min-[900px]:flex-1 @min-[900px]:max-w-xl @min-[900px]:min-w-px @min-[900px]:pe-8 flex flex-col gap-5">
                <li className="flex gap-1.5 items-start">
                  <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="leading-5 text-foreground text-sm">
                    {"Ship polished pages without rebuilding"}
                  </span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="leading-5 text-foreground text-sm">
                    {"Connect AI agents through built-in MCP support"}
                  </span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="leading-5 text-foreground text-sm">
                    {"Maintain accessible interfaces across every screen and workflow"}
                  </span>
                </li>
                <li className="flex gap-1.5 items-start">
                  <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="leading-5 text-foreground text-sm">
                    {"Keep design systems consistent as your product grows"}
                  </span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
