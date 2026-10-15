import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/base/ui/dialog"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="pricing-7-page-heading">
      <h1 className="sr-only" id="pricing-7-page-heading">
        {"Plan picker dialog"}
      </h1>
      <Empty>
        <EmptyHeader>
          <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-empty-media cn-empty-media-default flex items-center justify-center shrink-0" data-variant="default">
            <IconTile variant="elevated" size="default">
              <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                <rect width={20} height={14} x={2} y={5} rx={2}></rect>
                <line x1={2} x2={22} y1={10} y2={10}></line>
              </svg>
            </IconTile>
          </div>
          <EmptyTitle>
            {"Upgrade Your Plan"}
          </EmptyTitle>
          <EmptyDescription>
            {"Compare plans and switch in a minute."}
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Dialog>
          <DialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
            {"View Plans"}
          </DialogTrigger>
          </Dialog>
        </EmptyContent>
      </Empty>
    </main>
    <Dialog>
    <DialogContent className="flex flex-col gap-0 h-fit inset-0 lg:max-h-[min(86svh,41rem)] m-auto max-h-[min(86svh,44rem)] md:max-h-[min(86svh,55rem)] md:max-w-[min(60rem,calc(100%-2rem))] overflow-hidden p-0 sm:max-w-lg translate-x-0 translate-y-0" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <DialogHeader className="border-b px-5 py-4 shrink-0">
        <DialogTitle className="font-semibold text-lg" id="base-ui-_r_3_">
          {"Choose Your Plan"}
        </DialogTitle>
        <DialogDescription id="base-ui-_r_4_">
          {"Basic and Team start with 14 days free."}
        </DialogDescription>
      </DialogHeader>
      <div className="grid min-h-0">
        <ScrollArea className="[&>[data-slot=scroll-area-viewport]]:focus-visible:ring-inset max-md:[&>[data-slot=scroll-area-viewport]]:scroll-fade-y min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
            <div className="flex flex-col md:grid md:grid-cols-[auto_minmax(0,1fr)] md:grid-rows-[auto_minmax(0,1fr)] md:h-full">
              <div className="flex items-center lg:min-w-80 md:border-r md:col-start-1 md:min-w-72 md:row-start-1 pt-4 px-5">
                <p className="font-medium" id="_r_6_">
                  {"Plans"}
                </p>
              </div>
              <ScrollArea className="[&>[data-slot=scroll-area-viewport]]:focus-visible:ring-inset border-b md:[&>[data-slot=scroll-area-viewport]]:scroll-fade-y md:border-b-0 md:border-r md:col-start-1 md:min-h-0 md:row-start-2" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_7_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <RadioGroup className="flex flex-col gap-2 md:pt-5 pb-4 pt-3 px-5" role="radiogroup" aria-labelledby="_r_6_">
                    <Item className="cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none has-focus-visible:border-ring has-focus-visible:ring-3 has-focus-visible:ring-ring/50 hover:bg-muted/60 peer-disabled:cursor-not-allowed relative select-none" variant="outline" size="sm" id="base-ui-_r_a_-label">
                      <RadioGroupItem className="absolute scroll-my-9 sr-only" unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_r_9_" aria-labelledby="base-ui-_r_a_-label"></RadioGroupItem>
                      <input id="base-ui-_r_a_" tabIndex={-1} aria-hidden="true" type="radio" value="basic" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <ItemMedia className="self-center! translate-y-0!" variant="default">
                        <IconTile variant="elevated" size="default">
                          <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx={12} cy={7} r={4}></circle>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="gap-0.5 min-w-0">
                        <ItemTitle>
                          {"Basic"}
                        </ItemTitle>
                        <ItemDescription className="text-xs truncate">
                          {"For solo support"}
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions className="font-medium tabular-nums text-foreground">
                        {"$15"}
                        <span className="sr-only">
                          {"per month"}
                        </span>
                      </ItemActions>
                    </Item>
                    <Item className="bg-muted cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none has-focus-visible:border-ring has-focus-visible:ring-3 has-focus-visible:ring-ring/50 peer-disabled:cursor-not-allowed relative select-none" variant="outline" size="sm" id="base-ui-_r_d_-label">
                      <RadioGroupItem className="absolute scroll-my-9 sr-only" checked="" role="radio" tabIndex={0} aria-checked="true" compositeItemActive="" id="base-ui-_r_c_" aria-labelledby="base-ui-_r_d_-label">
                        <span className="cn-radio-group-indicator" data-checked="">
                          <span className="cn-radio-group-indicator-icon"></span>
                        </span>
                      </RadioGroupItem>
                      <input id="base-ui-_r_d_" tabIndex={-1} aria-hidden="true" type="radio" value="team" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <ItemMedia className="self-center! translate-y-0!" variant="default">
                        <IconTile variant="elevated" size="default">
                          <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx={9} cy={7} r={4}></circle>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="gap-0.5 min-w-0">
                        <ItemTitle>
                          {"Team"}
                        </ItemTitle>
                        <ItemDescription className="text-xs truncate">
                          {"For growing teams"}
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions className="font-medium tabular-nums text-foreground">
                        {"$45"}
                        <span className="sr-only">
                          {"per month"}
                        </span>
                      </ItemActions>
                    </Item>
                    <Item className="cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none has-focus-visible:border-ring has-focus-visible:ring-3 has-focus-visible:ring-ring/50 hover:bg-muted/60 peer-disabled:cursor-not-allowed relative select-none" variant="outline" size="sm" id="base-ui-_r_g_-label">
                      <RadioGroupItem className="absolute scroll-my-9 sr-only" unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_r_f_" aria-labelledby="base-ui-_r_g_-label"></RadioGroupItem>
                      <input id="base-ui-_r_g_" tabIndex={-1} aria-hidden="true" type="radio" value="enterprise" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <ItemMedia className="self-center! translate-y-0!" variant="default">
                        <IconTile variant="elevated" size="default">
                          <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                            <path d="M10 12h4"></path>
                            <path d="M10 8h4"></path>
                            <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                            <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                            <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="gap-0.5 min-w-0">
                        <ItemTitle>
                          {"Enterprise"}
                        </ItemTitle>
                        <ItemDescription className="text-xs truncate">
                          {"For large companies"}
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions className="font-medium tabular-nums text-foreground">
                        {"$140"}
                        <span className="sr-only">
                          {"per month"}
                        </span>
                      </ItemActions>
                    </Item>
                  </RadioGroup>
                </div>
              </ScrollArea>
              <div className="md:col-start-2 md:row-start-1 min-w-0 pt-4 px-5">
                <Tabs data-orientation="horizontal" activationDirection="none">
                  <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-label="Billing period">
                    <TabsTrigger className="scroll-my-9" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_i_">
                      {"Monthly"}
                    </TabsTrigger>
                    <TabsTrigger className="scroll-my-9" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_j_" compositeItemActive="">
                      {"Yearly"}
                      <Badge className="-mr-1 [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"2 Months Free"}
                      </Badge>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="grid invisible max-md:hidden md:col-start-2 md:row-start-2 min-h-0 overflow-hidden pt-5" aria-hidden="true" inert="">
                <div className="col-start-1 row-start-1">
                  <div className="@container/plan flex flex-col gap-5 pb-5 px-5 relative">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap gap-2 items-center">
                        <h3 className="font-semibold text-lg">
                          {"Basic"}
                        </h3>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="flex flex-wrap gap-x-2 items-baseline">
                          <span className="font-semibold tabular-nums text-4xl tracking-tight">
                            {"$15"}
                          </span>
                          <span className="text-muted-foreground">
                            {"per month"}
                          </span>
                        </p>
                        <p className="tabular-nums text-muted-foreground">
                          {"Yearly billing saves $36 a year"}
                        </p>
                      </div>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
                    <div className="flex flex-col gap-3">
                      <p className="font-medium">
                        {"Includes"}
                      </p>
                      <ul className="*:break-inside-avoid @min-[30rem]/plan:columns-2 [&>li+li]:mt-3 gap-x-6" role="list">
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"2"}
                            </span>
                            {"agent seats"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"1"}
                            </span>
                            {"shared inbox"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"90 days"}
                            </span>
                            {"of ticket history"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"1 GB"}
                            </span>
                            {"of attachment storage"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"25"}
                            </span>
                            {"help center articles"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Saved replies"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Ticket tags and filters"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Customer contact profiles"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Website chat widget"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Mobile apps for agents"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Email support"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-x size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="sr-only">
                              {"Not included:"}
                            </span>
                            {"Routing and assignment rules"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-x size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="sr-only">
                              {"Not included:"}
                            </span>
                            {"Team performance reports"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 row-start-1">
                  <div className="@container/plan flex flex-col gap-5 pb-5 px-5 relative">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap gap-2 items-center">
                        <h3 className="font-semibold text-lg">
                          {"Team"}
                          <span className="sr-only">
                            {", Most Popular"}
                          </span>
                        </h3>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow" aria-hidden="true">
                          {"Most Popular"}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="flex flex-wrap gap-x-2 items-baseline">
                          <span className="font-semibold tabular-nums text-4xl tracking-tight">
                            {"$45"}
                          </span>
                          <span className="text-muted-foreground">
                            {"per month"}
                          </span>
                        </p>
                        <p className="tabular-nums text-muted-foreground">
                          {"Yearly billing saves $108 a year"}
                        </p>
                      </div>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
                    <div className="flex flex-col gap-3">
                      <p className="font-medium">
                        {"Everything in Basic, plus"}
                      </p>
                      <ul className="*:break-inside-avoid @min-[30rem]/plan:columns-2 [&>li+li]:mt-3 gap-x-6" role="list">
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"10"}
                            </span>
                            {"agent seats"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"5"}
                            </span>
                            {"shared inboxes"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"Unlimited"}
                            </span>
                            {"ticket history"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"25 GB"}
                            </span>
                            {"of attachment storage"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Routing and assignment rules"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Response time targets"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Agent collision alerts"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Private notes and mentions"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Customer satisfaction surveys"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Team performance reports"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Business hours and holidays"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Priority chat support"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-x size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="sr-only">
                              {"Not included:"}
                            </span>
                            {"SAML single sign-on"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-x size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="sr-only">
                              {"Not included:"}
                            </span>
                            {"Dedicated success manager"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-start-1 row-start-1">
                  <div className="@container/plan flex flex-col gap-5 pb-5 px-5 relative">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap gap-2 items-center">
                        <h3 className="font-semibold text-lg">
                          {"Enterprise"}
                        </h3>
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="flex flex-wrap gap-x-2 items-baseline">
                          <span className="font-semibold tabular-nums text-4xl tracking-tight">
                            {"$140"}
                          </span>
                          <span className="text-muted-foreground">
                            {"per month"}
                          </span>
                        </p>
                        <p className="tabular-nums text-muted-foreground">
                          {"Yearly billing saves $336 a year"}
                        </p>
                      </div>
                    </div>
                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
                    <div className="flex flex-col gap-3">
                      <p className="font-medium">
                        {"Everything in Team, plus"}
                      </p>
                      <ul className="*:break-inside-avoid @min-[30rem]/plan:columns-2 [&>li+li]:mt-3 gap-x-6" role="list">
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"50"}
                            </span>
                            {"agent seats"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"Unlimited"}
                            </span>
                            {"shared inboxes"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"250 GB"}
                            </span>
                            {"of attachment storage"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            <span className="font-medium tabular-nums">
                              {"99.9%"}
                            </span>
                            {"uptime commitment"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Custom roles and permissions"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"SAML single sign-on"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Audit log export"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Custom data retention"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Regional data hosting"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Sandbox workspace"}
                          </span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <span className="flex h-5 items-center shrink-0">
                            <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span className="min-w-0 text-muted-foreground">
                            {"Dedicated success manager"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <ScrollArea className="[&>[data-slot=scroll-area-viewport]]:focus-visible:ring-inset md:[&>[data-slot=scroll-area-viewport]]:scroll-fade-y md:col-start-2 md:min-h-0 md:row-start-2 min-w-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_k_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "83px"}} data-has-overflow-y="" data-overflow-y-end="">
                  <div className="pt-5">
                    <div className="@container/plan flex flex-col gap-5 pb-5 px-5 relative">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-2 items-center">
                          <h3 className="font-semibold text-lg">
                            {"Team"}
                            <span className="sr-only">
                              {", Most Popular"}
                            </span>
                          </h3>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow" aria-hidden="true">
                            {"Most Popular"}
                          </Badge>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="flex flex-wrap gap-x-2 items-baseline">
                            <span className="font-semibold tabular-nums text-4xl tracking-tight">
                              {"$45"}
                            </span>
                            <span className="text-muted-foreground">
                              {"per month"}
                            </span>
                          </p>
                          <p className="tabular-nums text-muted-foreground">
                            {"Yearly billing saves $108 a year"}
                          </p>
                        </div>
                      </div>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
                      <div className="flex flex-col gap-3">
                        <p className="font-medium">
                          {"Everything in Basic, plus"}
                        </p>
                        <ul className="*:break-inside-avoid @min-[30rem]/plan:columns-2 [&>li+li]:mt-3 gap-x-6" role="list">
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              <span className="font-medium tabular-nums">
                                {"10"}
                              </span>
                              {"agent seats"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              <span className="font-medium tabular-nums">
                                {"5"}
                              </span>
                              {"shared inboxes"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              <span className="font-medium tabular-nums">
                                {"Unlimited"}
                              </span>
                              {"ticket history"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              <span className="font-medium tabular-nums">
                                {"25 GB"}
                              </span>
                              {"of attachment storage"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              {"Routing and assignment rules"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              {"Response time targets"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              {"Agent collision alerts"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              {"Private notes and mentions"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              {"Customer satisfaction surveys"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              {"Team performance reports"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              {"Business hours and holidays"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              {"Priority chat support"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-x size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              <span className="sr-only">
                                {"Not included:"}
                              </span>
                              {"SAML single sign-on"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-x size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground">
                              <span className="sr-only">
                                {"Not included:"}
                              </span>
                              {"Dedicated success manager"}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_k_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "283.2183908045977px"}}>
                  <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </ScrollArea>
      </div>
      <DialogFooter className="border-t flex-col gap-3 m-0 px-5 py-4 shrink-0 sm:items-center sm:justify-between">
        <p className="flex gap-2 items-center min-w-0 text-muted-foreground" role="status">
          <span className="font-medium shrink-0 text-foreground">
            {"Team"}
          </span>
          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
          <span className="min-w-0 tabular-nums truncate">
            {"$540 billed yearly"}
          </span>
        </p>
        <Button className="sm:w-auto w-full" href="#" aria-label="Start Trial for Team" role="button" tabIndex={0}>
          {"Start Trial"}
        </Button>
      </DialogFooter>
      <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost cn-dialog-close disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0}>
        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span className="sr-only">
          {"Close"}
        </span>
      </DialogClose>
    </DialogContent>
    </Dialog>
  </>
  )
}
