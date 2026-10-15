import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
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
      <Frame className="@container max-w-[26rem] w-full">
        <FramePanel className="p-0!">
          <Tabs className="w-full" data-orientation="horizontal" activationDirection="none">
            <TabsList className="sr-only" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-label="Crypto transaction views">
              <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_1_">
                Activity
              </TabsTrigger>
            </TabsList>
            <TabsContent className="mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_1_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_0_">
              <ul className="flex flex-col">
                <li>
                  <div className="flex gap-2 items-center px-4 py-3.5">
                    <Item className="[&_svg]:size-5 bg-success/15 border-3 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9.5 text-success" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <p className="font-medium leading-none text-foreground text-sm">
                        Ethereum Gain
                      </p>
                      <p className="leading-4 text-muted-foreground text-xs">
                        12th May, 2026
                      </p>
                    </div>
                    <p className="font-medium leading-none shrink-0 text-lg text-right text-success">
                      + $1,980
                    </p>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center px-4 py-3.5">
                    <Item className="[&_svg]:size-5 bg-destructive/15 border-3 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9.5 text-destructive" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-arrow-up-right rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <p className="font-medium leading-none text-foreground text-sm">
                        Bitcoin Sold
                      </p>
                      <p className="leading-4 text-muted-foreground text-xs">
                        11th May, 2026
                      </p>
                    </div>
                    <p className="font-medium leading-none shrink-0 text-destructive text-lg text-right">
                      - $2,450
                    </p>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center px-4 py-3.5">
                    <Item className="[&_svg]:size-5 bg-success/15 border-3 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9.5 text-success" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <p className="font-medium leading-none text-foreground text-sm">
                        USDT Deposit
                      </p>
                      <p className="leading-4 text-muted-foreground text-xs">
                        9th May, 2026
                      </p>
                    </div>
                    <p className="font-medium leading-none shrink-0 text-lg text-right text-success">
                      + $3,200
                    </p>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center px-4 py-3.5">
                    <Item className="[&_svg]:size-5 bg-success/15 border-3 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9.5 text-success" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-arrow-up-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <p className="font-medium leading-none text-foreground text-sm">
                        Staking Reward
                      </p>
                      <p className="leading-4 text-muted-foreground text-xs">
                        8th May, 2026
                      </p>
                    </div>
                    <p className="font-medium leading-none shrink-0 text-lg text-right text-success">
                      + $126
                    </p>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </li>
                <li>
                  <div className="flex gap-2 items-center px-4 py-3.5">
                    <Item className="[&_svg]:size-5 bg-destructive/15 border-3 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9.5 text-destructive" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-arrow-up-right rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                          <path d="M7 7h10v10"></path>
                          <path d="M7 17 17 7"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex-1 min-w-0 space-y-0.5">
                      <p className="font-medium leading-none text-foreground text-sm">
                        Solana Purchase
                      </p>
                      <p className="leading-4 text-muted-foreground text-xs">
                        6th May, 2026
                      </p>
                    </div>
                    <p className="font-medium leading-none shrink-0 text-destructive text-lg text-right">
                      - $750
                    </p>
                  </div>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </FramePanel>
      </Frame>
    </div>
  )
}
