import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Tabs className="max-w-md w-full" data-orientation="horizontal" activationDirection="none">
        <Frame className="@container w-full">
          <FramePanel className="flex gap-4 items-center justify-between p-3.5!">
            <h2 className="font-medium text-base text-foreground">
              {"Transactions"}
            </h2>
            <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
              <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_2_">
                {"Weekly"}
              </TabsTrigger>
              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_1_">
                {"All Time"}
              </TabsTrigger>
            </TabsList>
          </FramePanel>
          <FramePanel className="p-4!">
            <TabsContent data-orientation="horizontal" activationDirection="none" id="base-ui-_r_2_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_0_">
              <ul className="flex flex-col">
                <li>
                  <div className="flex gap-2 items-center">
                    <Item className="[&_svg]:size-5.5 [&_svg]:text-white bg-emerald-600 border-3 border-background dark:border-3 overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-12" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                          <path d="M12 15V3"></path>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <path d="m7 10 5 5 5-5"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-1 flex-col gap-0 min-w-0">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"One-time Deposit"}
                      </p>
                      <p className="leading-4 text-muted-foreground text-sm">
                        {"June 16"}
                      </p>
                    </div>
                    <div className="flex flex-col items-end shrink-0 space-y-1 text-right">
                      <span className="font-medium text-base text-success">
                        {"+ $3,100.00"}
                      </span>
                    </div>
                  </div>
                  <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <Item className="[&_svg]:size-5.5 [&_svg]:text-white bg-violet-600 border-3 border-background dark:border-3 overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-12" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-shopping-cart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingCartIcon" tabler="IconShoppingCart" hugeicons="ShoppingCart01Icon" phosphor="ShoppingCartIcon" remixicon="RiShoppingCartLine" aria-hidden="true">
                          <circle cx={8} cy={21} r={1}></circle>
                          <circle cx={19} cy={21} r={1}></circle>
                          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-1 flex-col gap-0 min-w-0">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"Grocery Shopping"}
                      </p>
                      <p className="leading-4 text-muted-foreground text-sm">
                        {"June 14"}
                      </p>
                    </div>
                    <div className="flex flex-col items-end shrink-0 space-y-1 text-right">
                      <span className="font-medium text-base text-destructive">
                        {"- $312.40"}
                      </span>
                    </div>
                  </div>
                  <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <Item className="[&_svg]:size-5.5 [&_svg]:text-white bg-orange-500 border-3 border-background dark:border-3 overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-12" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-1 flex-col gap-0 min-w-0">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"Electricity Bill"}
                      </p>
                      <p className="leading-4 text-muted-foreground text-sm">
                        {"June 12"}
                      </p>
                    </div>
                    <div className="flex flex-col items-end shrink-0 space-y-1 text-right">
                      <span className="font-medium text-base text-destructive">
                        {"- $84.20"}
                      </span>
                    </div>
                  </div>
                  <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <Item className="[&_svg]:size-5.5 [&_svg]:text-white bg-blue-600 border-3 border-background dark:border-3 overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-12" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-store" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                          <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                          <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                          <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-1 flex-col gap-0 min-w-0">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"Dining Out"}
                      </p>
                      <p className="leading-4 text-muted-foreground text-sm">
                        {"June 11"}
                      </p>
                    </div>
                    <div className="flex flex-col items-end shrink-0 space-y-1 text-right">
                      <span className="font-medium text-base text-destructive">
                        {"- $189.00"}
                      </span>
                    </div>
                  </div>
                  <Separator className="bg-transparent border-dashed border-t my-3.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center">
                    <Item className="[&_svg]:size-5.5 [&_svg]:text-white bg-zinc-700 border-3 border-background dark:border-3 overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-12" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-trending-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-1 flex-col gap-0 min-w-0">
                      <p className="font-medium leading-5 text-base text-foreground">
                        {"Interest Payout"}
                      </p>
                      <p className="leading-4 text-muted-foreground text-sm">
                        {"June 9"}
                      </p>
                    </div>
                    <div className="flex flex-col items-end shrink-0 space-y-1 text-right">
                      <span className="font-medium text-base text-success">
                        {"+ $28.90"}
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </TabsContent>
          </FramePanel>
          <FramePanel className="p-3.5!">
            <Button className="text-foreground w-full" type="button" tabIndex={0}>
              <svg className="lucide lucide-external-link opacity-50" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
              {"View More"}
            </Button>
          </FramePanel>
        </Frame>
      </Tabs>
    </div>
  )
}
