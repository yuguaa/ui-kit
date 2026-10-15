import { Button } from "@/registry/bases/base/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import { Input } from "@/registry/bases/base/ui/input"
import {
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
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Starter library dialog"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Button type="button" tabIndex="0" extracted="1">
          {"Browse starter library"}
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="flex flex-col gap-0 h-[min(86vh,48rem)] lg:max-w-[64rem] max-w-[calc(100vw-1.5rem)] overflow-hidden p-0 sm:max-w-5xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_2_" aria-describedby="base-ui-_r_3_" style={{"--nested-dialogs": "0"}}>
      <DialogHeader className="gap-1 pb-3 pt-4 px-5 shrink-0 text-left">
        <DialogTitle id="base-ui-_r_2_">
          {"Starter library"}
        </DialogTitle>
        <DialogDescription id="base-ui-_r_3_">
          {"Choose a ready operating shape, then tailor it to your team."}
        </DialogDescription>
      </DialogHeader>
      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
      <div className="flex-1 flex-col grid min-h-0">
        <div className="flex flex-1 flex-col lg:flex-row min-h-0">
          <aside className="border-b flex flex-col lg:border-b-0 lg:border-r lg:max-h-none lg:shrink-0 lg:w-72 max-h-[min(42svh,22rem)] min-h-0 overflow-hidden">
            <div className="pb-3 pt-4 px-5">
              <p className="font-medium text-muted-foreground text-xs">
                {"Use cases"}
              </p>
            </div>
            <ScrollArea className="[&_[data-slot=scroll-area-scrollbar]]:duration-150 [&_[data-slot=scroll-area-scrollbar]]:opacity-0 [&_[data-slot=scroll-area-scrollbar]]:transition-opacity flex-1 h-full hover:[&_[data-slot=scroll-area-scrollbar]]:opacity-100 min-h-0 w-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
              <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_4_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "88px"}} data-has-overflow-y="" data-overflow-y-end="">
                <RadioGroup className="flex flex-col gap-0.5 pb-3 px-5" role="radiogroup" aria-label="Use cases">
                  <Item className="bg-muted/70 cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none min-w-0 peer-disabled:cursor-not-allowed px-0.5 py-1.5 select-none text-left" variant="default" size="default" id="base-ui-_r_7_-label">
                    <RadioGroupItem className="sr-only" checked="" role="radio" tabIndex="0" aria-checked="true" compositeItemActive="" id="base-ui-_r_6_" aria-labelledby="base-ui-_r_7_-label">
                      <span className="cn-radio-group-indicator" data-checked="">
                        <span className="cn-radio-group-indicator-icon"></span>
                      </span>
                    </RadioGroupItem>
                    <input id="base-ui-_r_7_" tabIndex="-1" aria-hidden="true" type="radio" value="all" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <ItemMedia className="self-center translate-y-0" variant="default">
                      <Item className="bg-violet-500/15 dark:bg-violet-500/20 dark:text-violet-400 p-0 size-9 text-violet-600" variant="default" size="default">
                        <svg className="lucide lucide-layout-grid size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                          <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                          <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                          <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                          <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium leading-tight text-sm">
                        {"All templates"}
                      </ItemTitle>
                      <ItemDescription className="mt-0.5 text-muted-foreground text-xs">
                        {"Every starter flow"}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item className="cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none hover:bg-muted/70 min-w-0 peer-disabled:cursor-not-allowed px-0.5 py-1.5 select-none text-left" variant="default" size="default" id="base-ui-_r_a_-label">
                    <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_9_" aria-labelledby="base-ui-_r_a_-label"></RadioGroupItem>
                    <input id="base-ui-_r_a_" tabIndex="-1" aria-hidden="true" type="radio" value="launch-ops" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <ItemMedia className="self-center translate-y-0" variant="default">
                      <Item className="bg-rose-500/15 dark:bg-rose-500/20 dark:text-rose-400 p-0 size-9 text-rose-600" variant="default" size="default">
                        <svg className="lucide lucide-rocket size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                          <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium leading-tight text-sm">
                        {"Launch ops"}
                      </ItemTitle>
                      <ItemDescription className="mt-0.5 text-muted-foreground text-xs">
                        {"Releases and rollouts"}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item className="cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none hover:bg-muted/70 min-w-0 peer-disabled:cursor-not-allowed px-0.5 py-1.5 select-none text-left" variant="default" size="default" id="base-ui-_r_d_-label">
                    <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_c_" aria-labelledby="base-ui-_r_d_-label"></RadioGroupItem>
                    <input id="base-ui-_r_d_" tabIndex="-1" aria-hidden="true" type="radio" value="client-delivery" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <ItemMedia className="self-center translate-y-0" variant="default">
                      <Item className="bg-amber-500/15 dark:bg-amber-500/20 dark:text-amber-300 p-0 size-9 text-amber-700" variant="default" size="default">
                        <svg className="lucide lucide-briefcase-business size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                          <path d="M12 12h.01"></path>
                          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                          <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                          <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium leading-tight text-sm">
                        {"Client delivery"}
                      </ItemTitle>
                      <ItemDescription className="mt-0.5 text-muted-foreground text-xs">
                        {"Projects and approvals"}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item className="cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none hover:bg-muted/70 min-w-0 peer-disabled:cursor-not-allowed px-0.5 py-1.5 select-none text-left" variant="default" size="default" id="base-ui-_r_g_-label">
                    <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_f_" aria-labelledby="base-ui-_r_g_-label"></RadioGroupItem>
                    <input id="base-ui-_r_g_" tabIndex="-1" aria-hidden="true" type="radio" value="revenue-rhythm" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <ItemMedia className="self-center translate-y-0" variant="default">
                      <Item className="bg-emerald-500/15 dark:bg-emerald-500/20 dark:text-emerald-400 p-0 size-9 text-emerald-700" variant="default" size="default">
                        <svg className="lucide lucide-trending-up size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                          <path d="M16 7h6v6"></path>
                          <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium leading-tight text-sm">
                        {"Revenue rhythm"}
                      </ItemTitle>
                      <ItemDescription className="mt-0.5 text-muted-foreground text-xs">
                        {"Pipeline and forecasting"}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item className="cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none hover:bg-muted/70 min-w-0 peer-disabled:cursor-not-allowed px-0.5 py-1.5 select-none text-left" variant="default" size="default" id="base-ui-_r_j_-label">
                    <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_i_" aria-labelledby="base-ui-_r_j_-label"></RadioGroupItem>
                    <input id="base-ui-_r_j_" tabIndex="-1" aria-hidden="true" type="radio" value="research" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <ItemMedia className="self-center translate-y-0" variant="default">
                      <Item className="bg-sky-500/15 dark:bg-sky-500/20 dark:text-sky-300 p-0 size-9 text-sky-700" variant="default" size="default">
                        <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="SearchIcon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                          <path d="m21 21-4.34-4.34"></path>
                          <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium leading-tight text-sm">
                        {"Research loops"}
                      </ItemTitle>
                      <ItemDescription className="mt-0.5 text-muted-foreground text-xs">
                        {"Interviews and synthesis"}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item className="cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none hover:bg-muted/70 min-w-0 peer-disabled:cursor-not-allowed px-0.5 py-1.5 select-none text-left" variant="default" size="default" id="base-ui-_r_m_-label">
                    <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_l_" aria-labelledby="base-ui-_r_m_-label"></RadioGroupItem>
                    <input id="base-ui-_r_m_" tabIndex="-1" aria-hidden="true" type="radio" value="people-programs" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <ItemMedia className="self-center translate-y-0" variant="default">
                      <Item className="bg-orange-500/15 dark:bg-orange-500/20 dark:text-orange-300 p-0 size-9 text-orange-700" variant="default" size="default">
                        <svg className="lucide lucide-users size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium leading-tight text-sm">
                        {"People programs"}
                      </ItemTitle>
                      <ItemDescription className="mt-0.5 text-muted-foreground text-xs">
                        {"Hiring and onboarding"}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item className="cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none hover:bg-muted/70 min-w-0 peer-disabled:cursor-not-allowed px-0.5 py-1.5 select-none text-left" variant="default" size="default" id="base-ui-_r_p_-label">
                    <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_o_" aria-labelledby="base-ui-_r_p_-label"></RadioGroupItem>
                    <input id="base-ui-_r_p_" tabIndex="-1" aria-hidden="true" type="radio" value="support-systems" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <ItemMedia className="self-center translate-y-0" variant="default">
                      <Item className="bg-cyan-500/15 dark:bg-cyan-500/20 dark:text-cyan-300 p-0 size-9 text-cyan-700" variant="default" size="default">
                        <svg className="lucide lucide-life-buoy size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LifeBuoyIcon" tabler="IconLifebuoy" hugeicons="LifebuoyIcon" phosphor="LifebuoyIcon" remixicon="RiLifebuoyLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m4.93 4.93 4.24 4.24"></path>
                          <path d="m14.83 9.17 4.24-4.24"></path>
                          <path d="m14.83 14.83 4.24 4.24"></path>
                          <path d="m9.17 14.83-4.24 4.24"></path>
                          <circle cx="12" cy="12" r="4"></circle>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium leading-tight text-sm">
                        {"Support systems"}
                      </ItemTitle>
                      <ItemDescription className="mt-0.5 text-muted-foreground text-xs">
                        {"Queues and handoffs"}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item className="cn-label cursor-pointer flex-nowrap group-data-[disabled=true]:pointer-events-none hover:bg-muted/70 min-w-0 peer-disabled:cursor-not-allowed px-0.5 py-1.5 select-none text-left" variant="default" size="default" id="base-ui-_r_s_-label">
                    <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_r_" aria-labelledby="base-ui-_r_s_-label"></RadioGroupItem>
                    <input id="base-ui-_r_s_" tabIndex="-1" aria-hidden="true" type="radio" value="partner-motion" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <ItemMedia className="self-center translate-y-0" variant="default">
                      <Item className="bg-indigo-500/15 dark:bg-indigo-500/20 dark:text-indigo-300 p-0 size-9 text-indigo-700" variant="default" size="default">
                        <svg className="lucide lucide-link size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="font-medium leading-tight text-sm">
                        {"Partner motion"}
                      </ItemTitle>
                      <ItemDescription className="mt-0.5 text-muted-foreground text-xs">
                        {"Enablement and co-sell"}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </RadioGroup>
              </div>
              <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_4_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "293.44493392070484px"}}>
                <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
              </div>
            </ScrollArea>
          </aside>
          <div className="flex flex-1 flex-col gap-4 min-h-0 min-w-0">
            <div className="pt-5 px-5 shrink-0">
              <Input id="base-ui-_r_u_" placeholder="Search templates, workflows, or teams..." autoComplete="off" value=""></Input>
            </div>
            <ScrollArea className="[&_[data-slot=scroll-area-scrollbar]]:duration-150 [&_[data-slot=scroll-area-scrollbar]]:opacity-0 [&_[data-slot=scroll-area-scrollbar]]:transition-opacity flex-1 hover:[&_[data-slot=scroll-area-scrollbar]]:opacity-100 min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
              <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_v_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "552px"}} data-has-overflow-y="" data-overflow-y-end="">
                <div className="flex flex-col gap-2 pb-5 px-5">
                  <button className="bg-accent/50 border cursor-pointer flex gap-3 items-start p-3 rounded-lg text-left transition-colors w-full" type="button">
                    <div className="aspect-16/10 bg-muted border overflow-hidden relative rounded-lg shrink-0 sm:w-32 w-28">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="Release radar preview" src="https://picsum.photos/seed/release-radar/360/220" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 min-w-0">
                      <div className="flex flex-col gap-2 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="font-bold truncate">
                            {"Release radar"}
                          </h3>
                          <p className="mt-1 text-muted-foreground text-sm">
                            {"Track launch readiness, blockers, and final sign-off across one weekly control room."}
                          </p>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                          {"Product teams"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                          {"Launch"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          {"Weekly"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          {"Approvals"}
                        </Badge>
                      </div>
                    </div>
                  </button>
                  <button className="bg-card border cursor-pointer flex gap-3 hover:bg-accent/50 items-start p-3 rounded-lg text-left transition-colors w-full" type="button">
                    <div className="aspect-16/10 bg-muted border overflow-hidden relative rounded-lg shrink-0 sm:w-32 w-28">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="Client pulse board preview" src="https://picsum.photos/seed/client-pulse-board/360/220" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 min-w-0">
                      <div className="flex flex-col gap-2 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="font-bold truncate">
                            {"Client pulse board"}
                          </h3>
                          <p className="mt-1 text-muted-foreground text-sm">
                            {"Keep active engagements aligned with milestones, owners, and risk check-ins."}
                          </p>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                          {"Service teams"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          {"Delivery"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          {"Milestones"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          {"Risk"}
                        </Badge>
                      </div>
                    </div>
                  </button>
                  <button className="bg-card border cursor-pointer flex gap-3 hover:bg-accent/50 items-start p-3 rounded-lg text-left transition-colors w-full" type="button">
                    <div className="aspect-16/10 bg-muted border overflow-hidden relative rounded-lg shrink-0 sm:w-32 w-28">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="Forecast bridge preview" src="https://picsum.photos/seed/forecast-bridge/360/220" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 min-w-0">
                      <div className="flex flex-col gap-2 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="font-bold truncate">
                            {"Forecast bridge"}
                          </h3>
                          <p className="mt-1 text-muted-foreground text-sm">
                            {"Review commit movement, late-stage changes, and coverage gaps before the number locks."}
                          </p>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                          {"Revenue leaders"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                          {"Forecast"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          {"Pipeline"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                          {"Exec"}
                        </Badge>
                      </div>
                    </div>
                  </button>
                  <button className="bg-card border cursor-pointer flex gap-3 hover:bg-accent/50 items-start p-3 rounded-lg text-left transition-colors w-full" type="button">
                    <div className="aspect-16/10 bg-muted border overflow-hidden relative rounded-lg shrink-0 sm:w-32 w-28">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="Interview signal hub preview" src="https://picsum.photos/seed/interview-signal-hub/360/220" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 min-w-0">
                      <div className="flex flex-col gap-2 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="font-bold truncate">
                            {"Interview signal hub"}
                          </h3>
                          <p className="mt-1 text-muted-foreground text-sm">
                            {"Collect interview notes, confidence markers, and synthesis themes in one review lane."}
                          </p>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                          {"Research squads"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          {"Research"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                          {"Notes"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                          {"Themes"}
                        </Badge>
                      </div>
                    </div>
                  </button>
                  <button className="bg-card border cursor-pointer flex gap-3 hover:bg-accent/50 items-start p-3 rounded-lg text-left transition-colors w-full" type="button">
                    <div className="aspect-16/10 bg-muted border overflow-hidden relative rounded-lg shrink-0 sm:w-32 w-28">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="First 30 plan preview" src="https://picsum.photos/seed/first-30-plan/360/220" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 min-w-0">
                      <div className="flex flex-col gap-2 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="font-bold truncate">
                            {"First 30 plan"}
                          </h3>
                          <p className="mt-1 text-muted-foreground text-sm">
                            {"Guide new hires through setup, shadowing, and early outcome checkpoints."}
                          </p>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                          {"People teams"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          {"Onboarding"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          {"Tasks"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-invert/10 border border-invert/15 dark:bg-invert/35 dark:border-invert/45 dark:text-invert-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-foreground text-xs transition-shadow">
                          {"Manager"}
                        </Badge>
                      </div>
                    </div>
                  </button>
                  <button className="bg-card border cursor-pointer flex gap-3 hover:bg-accent/50 items-start p-3 rounded-lg text-left transition-colors w-full" type="button">
                    <div className="aspect-16/10 bg-muted border overflow-hidden relative rounded-lg shrink-0 sm:w-32 w-28">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="Escalation watch preview" src="https://picsum.photos/seed/escalation-watch/360/220" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 min-w-0">
                      <div className="flex flex-col gap-2 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="font-bold truncate">
                            {"Escalation watch"}
                          </h3>
                          <p className="mt-1 text-muted-foreground text-sm">
                            {"Surface hot customer issues, next actions, and cross-functional handoffs in one place."}
                          </p>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                          {"Support leads"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                          {"Support"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          {"Urgent"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                          {"Handoff"}
                        </Badge>
                      </div>
                    </div>
                  </button>
                  <button className="bg-card border cursor-pointer flex gap-3 hover:bg-accent/50 items-start p-3 rounded-lg text-left transition-colors w-full" type="button">
                    <div className="aspect-16/10 bg-muted border overflow-hidden relative rounded-lg shrink-0 sm:w-32 w-28">
                      <img className="absolute h-full inset-0 object-cover w-full" alt="Partner sprint room preview" src="https://picsum.photos/seed/partner-sprint-room/360/220" />
                    </div>
                    <div className="flex flex-1 flex-col gap-2 min-w-0">
                      <div className="flex flex-col gap-2 min-w-0 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="font-bold truncate">
                            {"Partner sprint room"}
                          </h3>
                          <p className="mt-1 text-muted-foreground text-sm">
                            {"Coordinate shared launches, enablement tasks, and materials reviews with external partners."}
                          </p>
                        </div>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                          {"Partnership teams"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                          {"Partners"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                          {"Assets"}
                        </Badge>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                          {"Review"}
                        </Badge>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_v_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "130.06711409395973px"}}>
                <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
      <DialogFooter className="border-t flex-row items-center justify-between my-auto px-9 py-4">
        <span className="flex flex-1 gap-2 items-center min-w-0 text-muted-foreground text-sm">
          <span className="shrink-0 whitespace-nowrap">
            {"7 ready"}
          </span>
          <span className="bg-gray-300 rounded-full shrink-0 size-1" aria-hidden="true"></span>
          <span className="min-w-0 truncate">
            {"Release radar"}
          </span>
        </span>
        <div className="flex gap-2 items-center">
          <Button type="button" tabIndex="0">
            {"Build from blank"}
          </Button>
          <Button type="button" tabIndex="0">
            {"Open template"}
          </Button>
        </div>
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
