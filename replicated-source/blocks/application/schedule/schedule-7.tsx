import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-md w-full">
        <Collapsible data-open="">
          <Collapsible>
          <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_0_" aria-expanded="true" extracted="1">
            <header className="flex flex-row gap-(--frame-panel-header-gap) grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-sm">
                {"Wednesday, 4:00 PM"}
              </div>
              <div className="flex gap-2 shrink-0">
                <AvatarGroup className="-space-x-1.5">
                  <Avatar className="size-4!" size="default">
                    <AvatarImage alt="Sofia Reyes" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-4!" size="default">
                    <AvatarImage alt="James Park" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-4!" size="default">
                    <AvatarImage alt="Mila Torres" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <AvatarGroupCount className="size-4! text-[10px]">
                    {"+2"}
                  </AvatarGroupCount>
                </AvatarGroup>
                <svg className="in-data-open:rotate-180 lucide lucide-chevron-down size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </header>
          </CollapsibleTrigger>
          </Collapsible>
          <CollapsibleContent data-open="" id="base-ui-_r_0_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
            <FramePanel className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="[&_svg]:opacity-60 [&_svg]:size-4 flex gap-1.5 items-center">
                  <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span className="text-foreground text-sm">
                    {"Date"}
                  </span>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="text-muted-foreground text-sm">
                    {"Wednesday, Jul 1, 2026"}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="[&_svg]:opacity-60 [&_svg]:size-4 flex gap-1.5 items-center">
                  <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx={12} cy={12} r={10}></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span className="text-foreground text-sm">
                    {"Time"}
                  </span>
                </div>
                <div className="flex gap-1.5 items-center">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                    {"90 min"}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    {"4:00 PM - 5:30 PM"}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="[&_svg]:opacity-60 [&_svg]:size-4 flex gap-1.5 items-center">
                  <svg className="lucide lucide-video" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="VideoIcon" tabler="IconVideo" hugeicons="Video02Icon" phosphor="VideoCameraIcon" remixicon="RiVideoOnLine" aria-hidden="true">
                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                    <rect x={2} y={6} width={14} height={12} rx={2}></rect>
                  </svg>
                  <span className="text-foreground text-sm">
                    {"Platform"}
                  </span>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="text-muted-foreground text-sm">
                    {"Zoom Webinar"}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="[&_svg]:opacity-60 [&_svg]:size-4 flex gap-1.5 items-center">
                  <svg className="lucide lucide-calendar-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarCheckIcon" tabler="IconCalendarCheck" hugeicons="CalendarCheckIn01Icon" phosphor="CalendarCheckIcon" remixicon="RiCalendarCheckLine" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                    <path d="M3 10h18"></path>
                    <path d="m9 16 2 2 4-4"></path>
                  </svg>
                  <span className="text-foreground text-sm">
                    {"Reminder"}
                  </span>
                </div>
                <div className="flex gap-1.5 items-center">
                  <span className="text-muted-foreground text-sm">
                    {"1 hour before"}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="[&_svg]:opacity-60 [&_svg]:size-4 flex gap-1.5 items-center">
                  <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                  </svg>
                  <span className="text-foreground text-sm">
                    {"Live stream"}
                  </span>
                </div>
                <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_1_" aria-checked="false" size="sm">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                </Switch>
                <input id="base-ui-_r_2_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex items-center justify-between">
                <div className="[&_svg]:opacity-60 [&_svg]:size-4 flex gap-1.5 items-center">
                  <svg className="lucide lucide-circle-dot" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleDotIcon" tabler="IconCircleDot" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiRecordCircleLine" aria-hidden="true">
                    <circle cx={12} cy={12} r={10}></circle>
                    <circle cx={12} cy={12} r={1}></circle>
                  </svg>
                  <span className="text-foreground text-sm">
                    {"Recording"}
                  </span>
                </div>
                <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_4_" aria-checked="true" size="sm">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                </Switch>
                <input id="base-ui-_r_5_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
            </FramePanel>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible data-open="">
          <Collapsible>
          <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_7_" aria-expanded="true">
            <header className="flex flex-row gap-(--frame-panel-header-gap) grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-sm">
                {"Presenters"}
              </div>
              <svg className="in-data-open:rotate-180 lucide lucide-chevron-down size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </header>
          </CollapsibleTrigger>
          </Collapsible>
          <CollapsibleContent data-open="" id="base-ui-_r_7_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
            <FramePanel className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Avatar size="default">
                    <AvatarImage alt="Sofia Reyes" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="flex gap-1.5 items-center">
                      <span className="font-semibold text-sm">
                        {"Sofia Reyes"}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {"Product Lead"}
                    </span>
                  </div>
                </div>
                <svg className="lucide lucide-circle-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Avatar size="default">
                    <AvatarImage alt="James Park" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="flex gap-1.5 items-center">
                      <span className="font-semibold text-sm">
                        {"James Park"}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {"Engineering Lead"}
                    </span>
                  </div>
                </div>
                <svg className="lucide lucide-circle-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Avatar size="default">
                    <AvatarImage alt="Mila Torres" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <div className="flex flex-col">
                    <div className="flex gap-1.5 items-center">
                      <span className="font-semibold text-sm">
                        {"Mila Torres"}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {"Design Lead"}
                    </span>
                  </div>
                </div>
                <svg className="lucide lucide-circle shrink-0 size-4 text-muted-foreground/40" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleIcon" tabler="IconCircle" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiCircleLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                </svg>
              </div>
            </FramePanel>
          </CollapsibleContent>
        </Collapsible>
        <Collapsible data-open="">
          <Collapsible>
          <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_8_" aria-expanded="true">
            <header className="flex flex-row gap-(--frame-panel-header-gap) grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="font-semibold text-sm">
                {"Agenda"}
              </div>
              <svg className="in-data-open:rotate-180 lucide lucide-chevron-down size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </header>
          </CollapsibleTrigger>
          </Collapsible>
          <CollapsibleContent data-open="" id="base-ui-_r_8_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
            <FramePanel className="space-y-3">
              <p className="text-muted-foreground text-sm">
                {"Live walkthrough of AI collaboration tools, redesigned workflow engine, and open Q&A with the team."}
              </p>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground text-sm">
                  {"Joining?"}
                </span>
                <div className="flex gap-1.5 items-center">
                  <Button type="button" tabIndex={0}>
                    {"Yes"}
                  </Button>
                  <Button type="button" tabIndex={0}>
                    {"Skip"}
                  </Button>
                  <Button type="button" tabIndex={0}>
                    {"Maybe"}
                  </Button>
                </div>
              </div>
            </FramePanel>
          </CollapsibleContent>
        </Collapsible>
      </Frame>
    </div>
  )
}
