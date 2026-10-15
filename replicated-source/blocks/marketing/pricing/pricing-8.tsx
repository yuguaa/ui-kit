import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
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
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="pricing-8-page-heading">
      <h1 className="sr-only" id="pricing-8-page-heading">
        {"Plan upgrade dialog"}
      </h1>
      <Empty>
        <EmptyHeader>
          <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-empty-media cn-empty-media-default flex items-center justify-center shrink-0" data-variant="default">
            <IconTile variant="elevated" size="default">
              <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                <path d="M16 14v2.2l1.6 1"></path>
                <path d="M16 2v4"></path>
                <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                <path d="M3 10h5"></path>
                <path d="M8 2v4"></path>
                <circle cx="16" cy="16" r="6"></circle>
              </svg>
            </IconTile>
          </div>
          <EmptyTitle>
            {"Bookings Running Low"}
          </EmptyTitle>
          <EmptyDescription>
            {"A paid plan lifts the monthly limit."}
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Dialog>
          <DialogTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
            {"View Plans"}
          </DialogTrigger>
          </Dialog>
        </EmptyContent>
      </Empty>
    </main>
    <Dialog>
    <DialogContent className="flex flex-col gap-0 h-fit inset-0 m-auto max-h-[min(86svh,44rem)] md:max-h-[min(92svh,54rem)] overflow-hidden p-0 sm:max-w-[min(60rem,calc(100%-2rem))] translate-x-0 translate-y-0" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <DialogHeader className="border-b px-5 py-4 shrink-0">
        <DialogTitle className="font-semibold text-lg" id="base-ui-_r_3_">
          {"Pick Your Plan"}
        </DialogTitle>
        <DialogDescription id="base-ui-_r_4_">
          {"Switch or cancel whenever you need."}
        </DialogDescription>
      </DialogHeader>
      <div className="flex-1 grid min-h-0">
        <ScrollArea className="[&>[data-slot=scroll-area-viewport]]:focus-visible:ring-inset [&>[data-slot=scroll-area-viewport]]:scroll-fade-y min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "768px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="border-b flex flex-col gap-3 in-data-[has-overflow-y]:pe-3 md:hidden px-2 py-4">
              <p className="font-medium px-3 text-muted-foreground text-xs" id="_r_6_">
                {"Plans"}
              </p>
              <RadioGroup className="flex flex-col gap-1" role="radiogroup" aria-labelledby="_r_6_">
                <Item className="cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none has-focus-visible:border-ring has-focus-visible:ring-3 has-focus-visible:ring-ring/50 hover:bg-muted/60 peer-disabled:cursor-not-allowed relative select-none" variant="default" size="sm" id="base-ui-_r_9_-label">
                  <RadioGroupItem className="absolute scroll-my-9 sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_8_" aria-labelledby="base-ui-_r_9_-label"></RadioGroupItem>
                  <input id="base-ui-_r_9_" tabIndex="-1" aria-hidden="true" type="radio" value="basic" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <ItemMedia className="self-center! translate-y-0!" variant="default">
                    <IconTile variant="elevated" size="default">
                      <svg className="lucide lucide-user" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserIcon" tabler="IconUser" hugeicons="UserIcon" phosphor="UserIcon" remixicon="RiUserLine" aria-hidden="true">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </IconTile>
                  </ItemMedia>
                  <ItemContent className="gap-0.5 min-w-0">
                    <ItemTitle>
                      {"Basic"}
                    </ItemTitle>
                    <ItemDescription className="text-xs truncate">
                      {"For individuals"}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="font-medium tabular-nums text-foreground">
                    {"$10"}
                    <span className="sr-only">
                      {"per month"}
                    </span>
                  </ItemActions>
                </Item>
                <Item className="bg-muted cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none has-focus-visible:border-ring has-focus-visible:ring-3 has-focus-visible:ring-ring/50 peer-disabled:cursor-not-allowed relative select-none" variant="default" size="sm" id="base-ui-_r_c_-label">
                  <RadioGroupItem className="absolute scroll-my-9 sr-only" checked="" role="radio" tabIndex="0" aria-checked="true" compositeItemActive="" id="base-ui-_r_b_" aria-labelledby="base-ui-_r_c_-label">
                    <span className="cn-radio-group-indicator" data-checked="">
                      <span className="cn-radio-group-indicator-icon"></span>
                    </span>
                  </RadioGroupItem>
                  <input id="base-ui-_r_c_" tabIndex="-1" aria-hidden="true" type="radio" value="team" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <ItemMedia className="self-center! translate-y-0!" variant="default">
                    <IconTile variant="elevated" size="default">
                      <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
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
                    {"$30"}
                    <span className="sr-only">
                      {"per month"}
                    </span>
                  </ItemActions>
                </Item>
                <Item className="cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none has-focus-visible:border-ring has-focus-visible:ring-3 has-focus-visible:ring-ring/50 hover:bg-muted/60 peer-disabled:cursor-not-allowed relative select-none" variant="default" size="sm" id="base-ui-_r_f_-label">
                  <RadioGroupItem className="absolute scroll-my-9 sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_e_" aria-labelledby="base-ui-_r_f_-label"></RadioGroupItem>
                  <input id="base-ui-_r_f_" tabIndex="-1" aria-hidden="true" type="radio" value="enterprise" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <ItemMedia className="self-center! translate-y-0!" variant="default">
                    <IconTile variant="elevated" size="default">
                      <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
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
                      {"For companies"}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="font-medium tabular-nums text-foreground">
                    {"$80"}
                    <span className="sr-only">
                      {"per month"}
                    </span>
                  </ItemActions>
                </Item>
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-4 px-5 py-4">
              <div className="flex justify-center py-2">
                <Tabs data-orientation="horizontal" activationDirection="none">
                  <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-label="Billing period">
                    <TabsTrigger className="scroll-my-12" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_h_">
                      {"Monthly"}
                    </TabsTrigger>
                    <TabsTrigger className="scroll-my-12" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_i_" compositeItemActive="">
                      {"Yearly"}
                      <Badge className="-mr-1 [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"2 Months Free"}
                      </Badge>
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <ul className="gap-3 grid md:grid-cols-3" role="list">
                <li className="max-md:hidden min-w-0">
                  <Frame className="h-full" spacing="default">
                    <header className="flex flex-col gap-(--frame-panel-header-gap) max-md:hidden px-(--frame-panel-header-px) py-(--frame-panel-header-py)" role="none">
                      <div className="text-muted-foreground text-sm truncate">
                        {"For individuals"}
                      </div>
                    </header>
                    <FramePanel className="flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-lg">
                          {"Basic"}
                        </h3>
                        <div className="flex flex-col gap-1">
                          <p className="flex flex-wrap gap-x-2 items-baseline">
                            <span className="font-semibold tabular-nums text-4xl tracking-tight">
                              {"$10"}
                            </span>
                            <span className="text-muted-foreground">
                              {"per month"}
                            </span>
                          </p>
                          <p className="max-md:hidden tabular-nums text-muted-foreground">
                            {"$120 billed yearly"}
                          </p>
                        </div>
                      </div>
                      <Button className="max-md:hidden w-full" href="#" aria-label="Start Trial for Basic" role="button" tabIndex="0">
                        {"Start Trial"}
                      </Button>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
                      <div className="flex flex-col gap-3">
                        <p className="font-medium">
                          {"Includes"}
                        </p>
                        <ul className="flex flex-col gap-3" role="list">
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              <span className="font-medium tabular-nums">
                                {"500"}
                              </span>
                              {"bookings per month"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              <span className="font-medium tabular-nums">
                                {"1"}
                              </span>
                              {"member seat"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              <span className="font-medium tabular-nums">
                                {"3"}
                              </span>
                              {"connected calendars"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              <span className="font-medium tabular-nums">
                                {"5"}
                              </span>
                              {"booking pages"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              {"Email reminders"}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </FramePanel>
                  </Frame>
                </li>
                <li className="min-w-0">
                  <Frame className="h-full" spacing="default">
                    <header className="flex flex-col gap-(--frame-panel-header-gap) max-md:hidden px-(--frame-panel-header-px) py-(--frame-panel-header-py)" role="none">
                      <div className="text-muted-foreground text-sm truncate">
                        {"For growing teams"}
                      </div>
                    </header>
                    <FramePanel className="flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-lg">
                          {"Team"}
                          <span className="sr-only">
                            {", Most Popular"}
                          </span>
                        </h3>
                        <div className="flex flex-col gap-1">
                          <p className="flex flex-wrap gap-x-2 items-baseline">
                            <span className="font-semibold tabular-nums text-4xl tracking-tight">
                              {"$30"}
                            </span>
                            <span className="text-muted-foreground">
                              {"per month"}
                            </span>
                          </p>
                          <p className="max-md:hidden tabular-nums text-muted-foreground">
                            {"$360 billed yearly"}
                          </p>
                        </div>
                      </div>
                      <Button className="max-md:hidden w-full" href="#" aria-label="Start Trial for Team" role="button" tabIndex="0">
                        {"Start Trial"}
                      </Button>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
                      <div className="flex flex-col gap-3">
                        <p className="font-medium">
                          {"Everything in Basic, plus"}
                        </p>
                        <ul className="flex flex-col gap-3" role="list">
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              <span className="font-medium tabular-nums">
                                {"2,500"}
                              </span>
                              {"bookings per month"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              <span className="font-medium tabular-nums">
                                {"10"}
                              </span>
                              {"member seats"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              <span className="font-medium tabular-nums">
                                {"30"}
                              </span>
                              {"connected calendars"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              {"Round robin routing"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              {"Text message reminders"}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </FramePanel>
                    <Badge className="-top-px -translate-y-1/2 [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-linear-to-r/oklch bg-origin-border bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium from-green-500 gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 right-[calc(var(--frame-px)+var(--frame-panel-px)+1px)] shadow-emerald-900/25 shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs to-emerald-700 transition-shadow" aria-hidden="true">
                      {"Most Popular"}
                    </Badge>
                  </Frame>
                </li>
                <li className="max-md:hidden min-w-0">
                  <Frame className="h-full" spacing="default">
                    <header className="flex flex-col gap-(--frame-panel-header-gap) max-md:hidden px-(--frame-panel-header-px) py-(--frame-panel-header-py)" role="none">
                      <div className="text-muted-foreground text-sm truncate">
                        {"For companies"}
                      </div>
                    </header>
                    <FramePanel className="flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        <h3 className="font-semibold text-lg">
                          {"Enterprise"}
                        </h3>
                        <div className="flex flex-col gap-1">
                          <p className="flex flex-wrap gap-x-2 items-baseline">
                            <span className="font-semibold tabular-nums text-4xl tracking-tight">
                              {"$80"}
                            </span>
                            <span className="text-muted-foreground">
                              {"per month"}
                            </span>
                          </p>
                          <p className="max-md:hidden tabular-nums text-muted-foreground">
                            {"$960 billed yearly"}
                          </p>
                        </div>
                      </div>
                      <Button className="max-md:hidden w-full" href="#" aria-label="Contact Sales for Enterprise" role="button" tabIndex="0">
                        {"Contact Sales"}
                      </Button>
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
                      <div className="flex flex-col gap-3">
                        <p className="font-medium">
                          {"Everything in Team, plus"}
                        </p>
                        <ul className="flex flex-col gap-3" role="list">
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              <span className="font-medium tabular-nums">
                                {"Unlimited"}
                              </span>
                              {"bookings per month"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              <span className="font-medium tabular-nums">
                                {"50"}
                              </span>
                              {"member seats"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              {"SAML single sign-on"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              {"Audit log export"}
                            </span>
                          </li>
                          <li className="flex gap-2 items-start">
                            <span className="flex h-5 items-center shrink-0">
                              <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                            <span className="min-w-0 text-muted-foreground text-pretty">
                              {"Named success manager"}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </FramePanel>
                  </Frame>
                </li>
              </ul>
              <Frame spacing="default">
                <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)" role="none">
                  <div className="font-semibold text-sm" id="_r_j_" role="heading" aria-level="3">
                    {"All Features"}
                  </div>
                </header>
                <FramePanel className="[&>[data-slot=table-container]]:overflow-x-clip p-0">
                  <div className="cn-table-container">
                    <Table className="table-fixed" aria-labelledby="_r_j_">
                      <TableHeader>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="leading-[inherit] md:w-1/3 normal-case pe-3 ps-(--frame-panel-px) text-[length:inherit] text-foreground tracking-normal w-2/3 whitespace-normal" scope="col">
                            <span className="sr-only">
                              {"Feature"}
                            </span>
                          </TableHead>
                          <TableHead className="max-md:hidden text-center whitespace-normal" scope="col">
                            {"Basic"}
                          </TableHead>
                          <TableHead className="text-center whitespace-normal" scope="col">
                            {"Team"}
                          </TableHead>
                          <TableHead className="max-md:hidden text-center whitespace-normal" scope="col">
                            {"Enterprise"}
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="bg-muted/50 border-y hover:bg-muted/50">
                          <TableHead className="leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="rowgroup">
                            {"Limits"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal"></TableCell>
                          <TableCell className="text-center whitespace-normal"></TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal"></TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"Bookings per month"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"500"}
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"2,500"}
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"Unlimited"}
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"Member seats"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"1"}
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"10"}
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"50"}
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"Connected calendars"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"3"}
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"30"}
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"Unlimited"}
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"Booking pages"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"5"}
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"Unlimited"}
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"Unlimited"}
                            </span>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                      <TableBody>
                        <TableRow className="bg-muted/50 border-y hover:bg-muted/50">
                          <TableHead className="leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="rowgroup">
                            {"Scheduling"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal"></TableCell>
                          <TableCell className="text-center whitespace-normal"></TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal"></TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"Email reminders"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"Buffers between meetings"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"Text message reminders"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"Round robin routing"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"Payments at booking"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                      <TableBody>
                        <TableRow className="bg-muted/50 border-y hover:bg-muted/50">
                          <TableHead className="leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="rowgroup">
                            {"Security and Support"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal"></TableCell>
                          <TableCell className="text-center whitespace-normal"></TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal"></TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"SAML single sign-on"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"Audit log export"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="flex justify-center">
                              <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </TableCell>
                        </TableRow>
                        <TableRow className="hover:bg-transparent">
                          <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-(--frame-panel-px) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                            {"Support"}
                          </TableHead>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"Email"}
                            </span>
                          </TableCell>
                          <TableCell className="text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"Priority chat"}
                            </span>
                          </TableCell>
                          <TableCell className="max-md:hidden text-center whitespace-normal">
                            <span className="tabular-nums">
                              {"Named success manager"}
                            </span>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </FramePanel>
              </Frame>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_5_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "198.2714398111723px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
      <DialogFooter className="border-t flex-col gap-3 m-0 md:hidden px-5 py-4 shrink-0 sm:flex-col">
        <p className="flex gap-2 items-center min-w-0 text-muted-foreground" role="status">
          <span className="font-medium shrink-0 text-foreground">
            {"Team"}
          </span>
          <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
          <span className="min-w-0 tabular-nums truncate">
            {"$360 billed yearly"}
          </span>
        </p>
        <Button className="w-full" href="#" aria-label="Start Trial for Team" role="button" tabIndex="0">
          {"Start Trial"}
        </Button>
      </DialogFooter>
      <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost cn-dialog-close disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
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
