import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <div className="@container grow w-full">
        <div className="@3xl:grid-cols-3 gap-5 grid grid-cols-1 grow max-w-5xl mx-auto">
          <Frame>
            <FramePanel className="flex flex-col gap-6 items-start">
              <Item className="[&_svg]:size-5 bg-muted border-2 border-background dark:border dark:text-blue-400 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5 text-blue-600" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-headphones" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="space-y-0.5">
                <div className="font-bold leading-none text-2xl text-foreground">
                  {"320"}
                </div>
                <div className="font-medium text-muted-foreground text-sm">
                  {"Support Tickets"}
                </div>
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                {"12 Open, 308 Closed"}
              </Badge>
            </FramePanel>
          </Frame>
          <Frame>
            <FramePanel className="flex flex-col gap-6 items-start">
              <Item className="[&_svg]:size-5 bg-muted border-2 border-background dark:border dark:text-emerald-400 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5 text-emerald-600" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="space-y-0.5">
                <div className="font-bold leading-none text-2xl text-foreground">
                  {"98%"}
                </div>
                <div className="font-medium text-muted-foreground text-sm">
                  {"Resolved"}
                </div>
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                {"+2.1% this month"}
              </Badge>
            </FramePanel>
          </Frame>
          <Frame>
            <FramePanel className="flex flex-col gap-6 items-start">
              <Item className="[&_svg]:size-5 bg-muted border-2 border-background dark:border dark:text-amber-400 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5 text-amber-600" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-smile" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" x2="9.01" y1="9" y2="9"></line>
                    <line x1="15" x2="15.01" y1="9" y2="9"></line>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="space-y-0.5">
                <div className="font-bold leading-none text-2xl text-foreground">
                  {"4.8"}
                </div>
                <div className="font-medium text-muted-foreground text-sm">
                  {"Satisfaction Rate"}
                </div>
              </div>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                {"Avg. (out of 5)"}
              </Badge>
            </FramePanel>
          </Frame>
        </div>
      </div>
    </div>
  )
}
