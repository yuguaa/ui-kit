import { Rating } from "@/registry-neui/bases/base/neui/rating"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Notifications sheet
      </h1>
      <Sheet>
      <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
        <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" data-icon="inline-start" aria-hidden="true">
          <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
          <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
        </svg>
        Open notifications
      </SheetTrigger>
      </Sheet>
    </main>
    <Sheet>
    <SheetContent className="bg-popover data-[side=right]:h-[calc(100svh-2rem)] data-[side=right]:inset-y-4 data-[side=right]:left-auto data-[side=right]:max-w-none data-[side=right]:right-4 data-[side=right]:w-[min(26rem,calc(100vw-2rem))] outline-none overflow-hidden p-0 rounded-xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="gap-2 pb-1 pt-4 px-5 shrink-0 text-left">
        <div className="flex gap-3 items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex gap-2 items-center min-w-0">
              <SheetTitle className="truncate" id="base-ui-_r_3_">
                Notifications
              </SheetTitle>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative rounded-full text-[0.6rem] text-primary-foreground transition-shadow">
                3
              </Badge>
            </div>
            <SheetDescription className="sr-only" id="base-ui-_r_4_">
              Latest workspace activity, approvals, and mentions.
            </SheetDescription>
          </div>
          <div className="flex gap-1 items-center shrink-0">
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Mark all as read" id="base-ui-_r_6_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-check-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckCheckIcon" tabler="IconChecks" hugeicons="Tick01Icon" phosphor="ChecksIcon" remixicon="RiCheckDoubleLine" aria-hidden="true">
                <path d="M18 6 7 17l-5-5"></path>
                <path d="m22 10-7.5 7.5L13 16"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Dismiss notifications">
              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </SheetClose>
          </div>
        </div>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_7_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "1739px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div>
              <div className="relative">
                <div className="flex gap-2 items-start pb-3 pt-2 px-5 text-left w-full">
                  <div className="grid place-items-center relative shrink-0 size-5">
                    <Avatar className="size-5" size="sm">
                      <AvatarImage alt="SR" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <a className="font-medium hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-2" href="#">
                          @sarah_smith
                        </a>
                        mentioned you in
                        <a className="font-medium hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-2" href="#PR-1024">
                          #PR-1024
                        </a>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      "Can you review the changes?"
                    </p>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        2m ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <div className="flex gap-2 items-start pb-3 pt-3 px-5 text-left w-full">
                  <div className="grid place-items-center relative shrink-0 size-5 text-warning">
                    <span className="-left-3 -translate-y-1/2 absolute bg-primary rounded-full size-1.5 top-1/2" aria-hidden="true"></span>
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Pending approval
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Design System v2.0 release requires your approval before deployment.
                    </p>
                    <div className="flex flex-wrap gap-1 items-center py-1">
                      <Button type="button" tabIndex="0">
                        Approve
                      </Button>
                      <Button type="button" tabIndex="0">
                        Review
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        5m ago
                      </p>
                      <span className="border border-border/60 font-medium h-6 inline-flex items-center overflow-hidden rounded-sm shrink-0 text-xs">
                        <span className="bg-muted/60 border-border/50 border-r flex h-full items-center leading-none px-1.5 text-muted-foreground text-xs">
                          Priority
                        </span>
                        <span className="flex h-full items-center leading-none px-1.5 text-warning text-xs">
                          High
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <div className="flex gap-2 items-start pb-3 pt-3 px-5 text-left w-full">
                  <div className="grid place-items-center relative shrink-0 size-5">
                    <span className="-left-3 -translate-y-1/2 absolute bg-primary rounded-full size-1.5 top-1/2" aria-hidden="true"></span>
                    <Avatar className="size-5" size="sm">
                      <AvatarImage alt="MA" src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <a className="font-medium hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-2" href="#">
                          @maverick
                        </a>
                        shared
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Project Timeline
                    </p>
                    <div className="flex gap-1 items-center py-1">
                      <ButtonGroup role="group">
                        <Button type="button" tabIndex="0">
                          <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" data-icon="inline-start" aria-hidden="true">
                            <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                          </svg>
                          <span className="min-w-0 truncate">
                            project-plan.pdf
                          </span>
                          <span className="opacity-60">
                            (2mb)
                          </span>
                        </Button>
                        <Button type="button" tabIndex="0" aria-label="Download attachment">
                          <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                            <path d="M12 15V3"></path>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <path d="m7 10 5 5 5-5"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        15m ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-info">
                    <span className="-left-3 -translate-y-1/2 absolute bg-primary rounded-full size-1.5 top-1/2" aria-hidden="true"></span>
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Task assigned to you
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Implement user authentication flow for the mobile app.
                    </p>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        30m ago
                      </p>
                      <span className="border border-border/60 font-medium h-6 inline-flex items-center overflow-hidden rounded-sm shrink-0 text-xs">
                        <span className="bg-muted/60 border-border/50 border-r flex h-full items-center leading-none px-1.5 text-muted-foreground text-xs">
                          Due
                        </span>
                        <span className="flex h-full items-center leading-none px-1.5 text-destructive text-xs">
                          Tomorrow
                        </span>
                      </span>
                    </div>
                  </div>
                </Button>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-success">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          4 people joined your workspace
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Sarah, Mike, Emma and James just joined NeUI Pro.
                    </p>
                    <AvatarGroup className="-space-x-1 mt-1.5">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="SC" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="MR" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="EW" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <AvatarGroupCount className="leading-none size-5 text-[9px]">
                        +1
                      </AvatarGroupCount>
                    </AvatarGroup>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        45m ago
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-info">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-smile" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmileIcon" tabler="IconMoodSmile" hugeicons="SmileIcon" phosphor="SmileyIcon" remixicon="RiEmotionHappyLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" x2="9.01" y1="9" y2="9"></line>
                        <line x1="15" x2="15.01" y1="9" y2="9"></line>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Reactions on your comment
                        </span>
                      </p>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-px outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                        +5
                      </Badge>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Sarah and 2 others reacted to your comment in #design-system.
                    </p>
                    <AvatarGroup className="-space-x-1 mt-1.5">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="SR" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="MA" src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <AvatarGroupCount className="leading-none size-5 text-[9px]">
                        +1
                      </AvatarGroupCount>
                    </AvatarGroup>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        1h ago
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <div className="flex gap-2 items-start pb-3 pt-3 px-5 text-left w-full">
                  <div className="grid place-items-center relative shrink-0 size-5">
                    <Avatar className="size-5" size="sm">
                      <AvatarImage alt="EW" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <a className="font-medium hover:text-primary hover:underline text-muted-foreground transition-colors underline-offset-2" href="#">
                          @emma
                        </a>
                        New review received
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Emma left a review on Design System v2.0.
                    </p>
                    <Rating className="mt-0.5">
                      <div className="flex items-center">
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Rating>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        2h ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <div className="flex gap-2 items-start pb-3 pt-3 px-5 text-left w-full">
                  <div className="grid place-items-center relative shrink-0 size-5 text-info">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Upcoming event reminder
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Design system review with the product team.
                    </p>
                    <div className="bg-muted/50 border border-border/50 gap-1.5 inline-flex items-center mt-1 px-2 py-1 rounded-sm text-muted-foreground text-sm w-fit">
                      <svg className="lucide lucide-calendar opacity-60 shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span className="font-medium text-foreground">
                        Mar 3, 2026
                      </span>
                      <span className="opacity-70">
                        10:00 - 11:00 AM
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 items-center py-1">
                      <Button type="button" tabIndex="0">
                        Join
                      </Button>
                      <Button type="button" tabIndex="0">
                        Decline
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        3h ago
                      </p>
                      <span className="border border-border/60 font-medium h-6 inline-flex items-center overflow-hidden rounded-sm shrink-0 text-xs">
                        <span className="bg-muted/60 border-border/50 border-r flex h-full items-center leading-none px-1.5 text-muted-foreground text-xs">
                          Where
                        </span>
                        <span className="flex h-full items-center leading-none px-1.5 text-info text-xs">
                          Google Meet
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <div className="flex gap-2 items-start pb-3 pt-3 px-5 text-left w-full">
                  <div className="grid place-items-center relative shrink-0 size-5 text-info">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="19" x2="19" y1="8" y2="14"></line>
                        <line x1="22" x2="16" y1="11" y2="11"></line>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Team Invitation
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Alex invited you to join NeUI Pro.
                    </p>
                    <div className="flex flex-wrap gap-1 items-center py-1">
                      <Button type="button" tabIndex="0">
                        Accept
                      </Button>
                      <Button type="button" tabIndex="0">
                        Decline
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        1h ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-success">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Slack connected
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Your Slack workspace is now synced with notifications.
                    </p>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        2h ago
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-info">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Payment processed
                        </span>
                      </p>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 mt-px outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                        $49.00
                      </Badge>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Your monthly subscription was renewed.
                    </p>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        3h ago
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-success">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Monthly milestone reached!
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      100 of 100 tasks completed this month. Outstanding work!
                    </p>
                    <div className="bg-muted/55 h-1 mt-1.5 overflow-hidden relative rounded-full">
                      <div className="absolute bg-[repeating-linear-gradient(-45deg,currentColor_0,currentColor_1px,transparent_0,transparent_4px)] inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true"></div>
                      <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar">
                        <ProgressTrack complete="">
                          <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          x
                        </span>
                      </Progress>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        4h ago
                      </p>
                      <span className="border border-border/60 font-medium h-6 inline-flex items-center overflow-hidden rounded-sm shrink-0 text-xs">
                        <span className="bg-muted/60 border-border/50 border-r flex h-full items-center leading-none px-1.5 text-muted-foreground text-xs">
                          Goal
                        </span>
                        <span className="flex h-full items-center leading-none px-1.5 text-success text-xs">
                          100 tasks
                        </span>
                      </span>
                    </div>
                  </div>
                </Button>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-destructive">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-shield-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="M12 8v4"></path>
                        <path d="M12 16h.01"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          New sign-in detected
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      We noticed a new login from Mac OS, Chrome.
                    </p>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        Yesterday
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <div className="flex gap-2 items-start pb-3 pt-3 px-5 text-left w-full">
                  <div className="grid place-items-center relative shrink-0 size-5 text-info">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-thumbs-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ThumbsUpIcon" tabler="IconThumbUp" hugeicons="ThumbsUpIcon" phosphor="ThumbsUpIcon" remixicon="RiThumbUpLine" aria-hidden="true">
                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                        <path d="M7 10v12"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Feedback requested
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      How was your experience with the new dashboard?
                    </p>
                    <div className="flex flex-wrap gap-1 items-center py-1">
                      <Button type="button" tabIndex="0">
                        Rate
                      </Button>
                      <Button type="button" tabIndex="0">
                        Later
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        Yesterday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-warning">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                        <path d="M20 2v4"></path>
                        <path d="M22 4h-4"></path>
                        <circle cx="4" cy="20" r="2"></circle>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Introducing AI Copilot
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Generate code, fix bugs, and write tests faster with our new AI assistant.
                    </p>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        2 days ago
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-info">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          New comment on Issue #84
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      "I think we should prioritize this for the next sprint..."
                    </p>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        3 days ago
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-success">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-rocket" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                        <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Deployment successful
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      Production branch deployed to Vercel.
                    </p>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        4 days ago
                      </p>
                      <span className="border border-border/60 font-medium h-6 inline-flex items-center overflow-hidden rounded-sm shrink-0 text-xs">
                        <span className="bg-muted/60 border-border/50 border-r flex h-full items-center leading-none px-1.5 text-muted-foreground text-xs">
                          Env
                        </span>
                        <span className="flex h-full items-center leading-none px-1.5 text-success text-xs">
                          Production
                        </span>
                      </span>
                    </div>
                  </div>
                </Button>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-warning">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          API usage at 80%
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      You've used 80% of your monthly API quota.
                    </p>
                    <div className="bg-muted/55 h-1 mt-1.5 overflow-hidden relative rounded-full">
                      <div className="absolute bg-[repeating-linear-gradient(-45deg,currentColor_0,currentColor_1px,transparent_0,transparent_4px)] inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true"></div>
                      <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" aria-valuetext="80%" role="progressbar">
                        <ProgressTrack progressing="">
                          <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "80%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          x
                        </span>
                      </Progress>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        5 days ago
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
              <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <div>
              <div className="relative">
                <Button className="active:bg-transparent h-auto hover:bg-transparent items-start justify-start pb-3 pt-3 px-5 rounded-none text-left w-full whitespace-normal" type="button" tabIndex="0">
                  <div className="grid place-items-center relative shrink-0 size-5 text-info">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-circle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="AlertCircleIcon" tabler="IconAlertCircle" hugeicons="AlertCircleIcon" phosphor="WarningCircleIcon" remixicon="RiErrorWarningLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="leading-5 min-w-0 text-foreground text-sm">
                        <span className="font-medium">
                          Scheduled maintenance
                        </span>
                      </p>
                    </div>
                    <p className="line-clamp-2 text-muted-foreground text-sm">
                      We'll be performing maintenance on Feb 28, 2026 at 2:00 AM UTC.
                    </p>
                    <div className="flex flex-wrap gap-2 items-center min-w-0 pt-0.5">
                      <p className="text-muted-foreground text-xs">
                        1 week ago
                      </p>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_7_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "126.2280316344464px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
    </SheetContent>
    </Sheet>
  </>
  )
}
