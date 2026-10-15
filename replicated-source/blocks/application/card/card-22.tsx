import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { AspectRatio } from "@/registry/bases/base/ui/aspect-ratio"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-sm min-h-svh p-8 w-full">
      <Frame>
        <FramePanel className="flex flex-col gap-6 items-center justify-center py-7.5">
          <div className="flex items-center justify-center relative w-full">
            <AspectRatio className="-rotate-6 bg-muted/60 border-4 border-background dark:border-4 origin-center overflow-hidden rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-20 z-10" style={{"--ratio": "1"}}>
              <img className="object-cover rounded-lg size-full" alt="Abstract gradient preview" width={600} height={600} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=600&h=600&q=82" />
            </AspectRatio>
            <AspectRatio className="-ml-2.5 bg-muted/60 border-4 border-background dark:border-4 origin-center overflow-hidden rotate-6 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-20 translate-y-[2px] z-0" style={{"--ratio": "1"}}>
              <img className="object-cover rounded-lg size-full" alt="Abstract color preview" width={600} height={600} loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=600&h=600&q=82" />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-3.5 items-center text-center">
            <Badge className="rounded-full!" variant="outline">
              {"Play Mode"}
            </Badge>
            <h3 className="font-medium leading-tight text-foreground text-lg">
              {"Practice Trading Safely"}
            </h3>
            <p className="leading-relaxed text-accent-foreground text-xs">
              {"Analyze live market data to identify patterns"}
              <br />
              {"and respond with precision"}
            </p>
          </div>
          <Button className="rounded-full w-fit" type="button" tabIndex={0}>
            <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            {"Try Demo Trading"}
          </Button>
        </FramePanel>
      </Frame>
    </div>
  )
}
