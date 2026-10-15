import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="dark:bg-muted/10 max-w-[408px] w-full" spacing="xs">
        <FramePanel className="isolate px-4 py-4 sm:px-5 text-card-foreground">
          <div className="flex flex-col gap-5 relative z-10">
            <div className="isolate overflow-visible relative">
              <div className="flex gap-5 items-center relative z-10">
                <IconTile className="[--icon-tile-size:--spacing(20)] border-4 overflow-hidden" variant="elevated" size="default">
                  <img className="object-cover object-top size-full" alt="Mara Alves" loading="lazy" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=160&h=160&dpr=2&q=80" />
                </IconTile>
                <div className="flex flex-col gap-2 min-w-0">
                  <h2 className="font-semibold leading-tight text-sm truncate">
                    {"Mara Alves"}
                  </h2>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-success-foreground text-xs transition-shadow">
                    <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                      <circle cx={12} cy={12} r={10}></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {"Open to Proposals"}
                  </Badge>
                  <p className="text-muted-foreground text-xs truncate">
                    {"malves@neui-capital.io"}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-muted/60 border grid grid-cols-[1fr_auto_1fr_auto_1fr] overflow-hidden rounded-lg">
              <div className="contents">
                <Item className="bg-transparent px-2 py-3" variant="muted" size="sm">
                  <ItemContent className="gap-1 items-center">
                    <ItemTitle className="font-medium leading-none tabular-nums text-sm">
                      {"87"}
                    </ItemTitle>
                    <ItemDescription className="leading-tight line-clamp-1 text-xs">
                      {"Deals"}
                    </ItemDescription>
                  </ItemContent>
                </Item>
                <Separator className="my-2.5" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              </div>
              <div className="contents">
                <Item className="bg-transparent px-2 py-3" variant="muted" size="sm">
                  <ItemContent className="gap-1 items-center">
                    <ItemTitle className="font-medium leading-none tabular-nums text-sm">
                      {"$7.2M"}
                    </ItemTitle>
                    <ItemDescription className="leading-tight line-clamp-1 text-xs">
                      {"Avg. Ticket"}
                    </ItemDescription>
                  </ItemContent>
                </Item>
                <Separator className="my-2.5" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              </div>
              <div className="contents">
                <Item className="bg-transparent px-2 py-3" variant="muted" size="sm">
                  <ItemContent className="gap-1 items-center">
                    <ItemTitle className="font-medium leading-none tabular-nums text-sm">
                      {"$415M"}
                    </ItemTitle>
                    <ItemDescription className="leading-tight line-clamp-1 text-xs">
                      {"Total Fund"}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </div>
            </div>
            <ItemGroup className="gap-0!" role="list">
              <div className="contents">
                <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                  <ItemMedia variant="default">
                    <IconTile className="bg-invert text-invert-foreground" variant="elevated" size="sm">
                      <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="M18 17V9"></path>
                        <path d="M13 17V5"></path>
                        <path d="M8 17v-3"></path>
                      </svg>
                    </IconTile>
                  </ItemMedia>
                  <ItemContent className="min-w-0">
                    <ItemTitle className="min-w-0 w-full">
                      <span className="font-medium leading-5 text-sm truncate">
                        {"Northline Ventures"}
                      </span>
                    </ItemTitle>
                  </ItemContent>
                  <ItemActions className="shrink-0">
                    <span className="font-medium leading-5 tabular-nums text-sm">
                      {"$7,840,000"}
                    </span>
                  </ItemActions>
                </Item>
                <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2.5 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
              </div>
              <div className="contents">
                <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                  <ItemMedia variant="default">
                    <IconTile className="bg-[oklch(0.54_0.25_292)] text-[oklch(0.98_0.01_292)]" variant="elevated" size="sm">
                      <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                      </svg>
                    </IconTile>
                  </ItemMedia>
                  <ItemContent className="min-w-0">
                    <ItemTitle className="min-w-0 w-full">
                      <span className="font-medium leading-5 text-sm truncate">
                        {"Bluepeak Capital"}
                      </span>
                    </ItemTitle>
                  </ItemContent>
                  <ItemActions className="shrink-0">
                    <span className="font-medium leading-5 tabular-nums text-sm">
                      {"$3,260,000"}
                    </span>
                  </ItemActions>
                </Item>
                <ItemSeparator className="bg-transparent border-dashed border-t data-horizontal:h-px data-horizontal:w-full data-vertical:self-stretch data-vertical:w-px my-2.5 shrink-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></ItemSeparator>
              </div>
              <div className="contents">
                <Item className="flex-nowrap px-0 py-0" variant="default" size="sm">
                  <ItemMedia variant="default">
                    <IconTile className="bg-[oklch(0.78_0.18_79)] text-[oklch(0.99_0.01_88)]" variant="elevated" size="sm">
                      <svg className="lucide lucide-circle-dollar-sign" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                        <circle cx={12} cy={12} r={10}></circle>
                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                        <path d="M12 18V6"></path>
                      </svg>
                    </IconTile>
                  </ItemMedia>
                  <ItemContent className="min-w-0">
                    <ItemTitle className="min-w-0 w-full">
                      <span className="font-medium leading-5 text-sm truncate">
                        {"Everfield Equity"}
                      </span>
                    </ItemTitle>
                  </ItemContent>
                  <ItemActions className="shrink-0">
                    <span className="font-medium leading-5 tabular-nums text-sm">
                      {"$1,180,000"}
                    </span>
                  </ItemActions>
                </Item>
              </div>
            </ItemGroup>
            <Button className="h-10! w-full" type="button" tabIndex={0}>
              <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
              </svg>
              {"Send Funding Proposal"}
            </Button>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
