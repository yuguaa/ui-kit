import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <section className="flex flex-col gap-10 lg:gap-12 max-w-4xl w-full" aria-labelledby="cta-4-title">
        <div className="flex flex-col gap-5 items-center max-w-2xl mx-auto text-center">
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5.5 min-w-5.5 outline-none px-1.5 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
            {"NeUI Pro"}
          </Badge>
          <h2 className="font-semibold leading-tight lg:text-5xl sm:text-4xl text-3xl text-balance text-foreground tracking-tight" id="cta-4-title">
            {"Ship Finished Interfaces"}
          </h2>
          <p className="leading-7 max-w-xl sm:leading-8 sm:text-lg text-base text-muted-foreground text-pretty">
            {"Drop production-grade NeUI sections into your product and ship a finished-looking interface without a redesign pass."}
          </p>
        </div>
        <Frame className="w-full">
          <div className="gap-1 grid md:grid-cols-3">
            <FramePanel className="flex flex-col gap-4">
              <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-layout-grid" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                    <rect width={7} height={7} x={3} y={3} rx={1}></rect>
                    <rect width={7} height={7} x={14} y={3} rx={1}></rect>
                    <rect width={7} height={7} x={14} y={14} rx={1}></rect>
                    <rect width={7} height={7} x={3} y={14} rx={1}></rect>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold text-base text-foreground tracking-tight">
                  {"900+ Blocks"}
                </h3>
                <p className="leading-6 text-muted-foreground text-pretty text-sm">
                  {"Registry-ready sections for every surface you ship."}
                </p>
              </div>
            </FramePanel>
            <FramePanel className="flex flex-col gap-4">
              <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-puzzle" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PuzzleIcon" tabler="IconPuzzle" hugeicons="PuzzleIcon" phosphor="PuzzlePieceIcon" remixicon="RiPuzzleLine" aria-hidden="true">
                    <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold text-base text-foreground tracking-tight">
                  {"shadcn Compatible"}
                </h3>
                <p className="leading-6 text-muted-foreground text-pretty text-sm">
                  {"Drop-in primitives that match your existing stack."}
                </p>
              </div>
            </FramePanel>
            <FramePanel className="flex flex-col gap-4">
              <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-palette" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaletteIcon" tabler="IconPalette" hugeicons="PaintBoardIcon" phosphor="PaletteIcon" remixicon="RiPaletteLine" aria-hidden="true">
                    <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                    <circle cx={13.5} cy={6.5} r=".5" fill="currentColor"></circle>
                    <circle cx={17.5} cy={10.5} r=".5" fill="currentColor"></circle>
                    <circle cx={6.5} cy={12.5} r=".5" fill="currentColor"></circle>
                    <circle cx={8.5} cy={7.5} r=".5" fill="currentColor"></circle>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold text-base text-foreground tracking-tight">
                  {"Theme-Aware"}
                </h3>
                <p className="leading-6 text-muted-foreground text-pretty text-sm">
                  {"Source code that adapts to your design tokens."}
                </p>
              </div>
            </FramePanel>
          </div>
        </Frame>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          <Button href="#" role="button" tabIndex={0}>
            {"Browse Blocks"}
            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
          <Button href="#" role="button" tabIndex={0}>
            {"View Documentation"}
          </Button>
        </div>
      </section>
    </div>
  )
}
