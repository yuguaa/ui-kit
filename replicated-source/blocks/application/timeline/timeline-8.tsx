import { Rating } from "@/registry-neui/bases/base/neui/rating"
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry-neui/bases/radix/neui/timeline"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Team activity timeline sheet"}
      </h1>
      <Sheet>
      <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
        <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" data-icon="inline-start" aria-hidden="true">
          <path d="M13 5h8"></path>
          <path d="M13 12h8"></path>
          <path d="M13 19h8"></path>
          <path d="m3 17 2 2 4-4"></path>
          <path d="m3 7 2 2 4-4"></path>
        </svg>
        {"Open timeline"}
      </SheetTrigger>
      </Sheet>
    </main>
    <Sheet>
    <SheetContent className="bg-popover data-[side=right]:h-[calc(100svh-2rem)] data-[side=right]:inset-y-4 data-[side=right]:left-auto data-[side=right]:max-w-none data-[side=right]:right-4 data-[side=right]:w-[min(32rem,calc(100vw-2rem))] flex flex-col outline-none overflow-hidden p-0 rounded-xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="border-b border-border/70 gap-2 px-5 py-4 shrink-0 text-left">
        <div className="flex gap-3 items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex gap-2 items-center min-w-0">
              <SheetTitle className="truncate" id="base-ui-_r_3_">
                {"Team Activity"}
              </SheetTitle>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative rounded-full text-[0.6rem] text-primary-foreground transition-shadow">
                {"12"}
              </Badge>
            </div>
            <SheetDescription className="sr-only" id="base-ui-_r_4_">
              {"Launch work, reviews, approvals, and follow-ups from the last week."}
            </SheetDescription>
          </div>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Dismiss activity timeline">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full min-h-0" role="presentation" aria-label="Scrollable team activity timeline" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none overflow-x-hidden overflow-y-auto rounded-lg size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "1305px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="pb-5 pt-0 px-5">
              <Timeline data-orientation="vertical">
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border border-none flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center overflow-hidden size-6" aria-hidden="true">
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Dara Kim" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Dara Kim"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"shared"}
                      </span>
                      <span className="font-medium">
                        {"Launch Timeline"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Launch Timeline" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[60ch] text-muted-foreground text-sm">
                      {"Uploaded the launch packet with milestone dates and planning files."}
                    </p>
                    <div className="flex flex-wrap gap-1.5 max-w-full">
                      <ButtonGroup className="max-w-full" role="group">
                        <Button className="gap-2 justify-start min-w-0 px-2.5 shrink" type="button" tabIndex="0">
                          <svg className="lucide lucide-paperclip size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" data-icon="inline-start" aria-hidden="true">
                            <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"timeline.pdf"}
                          </span>
                          <span className="text-muted-foreground">
                            {"(2 MB)"}
                          </span>
                        </Button>
                        <Button className="px-2" type="button" tabIndex="0" aria-label="Download timeline.pdf">
                          <svg className="lucide lucide-download size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                            <path d="M12 15V3"></path>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <path d="m7 10 5 5 5-5"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                      <ButtonGroup className="max-w-full" role="group">
                        <Button className="gap-2 justify-start min-w-0 px-2.5 shrink" type="button" tabIndex="0">
                          <svg className="lucide lucide-paperclip size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" data-icon="inline-start" aria-hidden="true">
                            <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"scope-notes.csv"}
                          </span>
                          <span className="text-muted-foreground">
                            {"(9 KB)"}
                          </span>
                        </Button>
                        <Button className="px-2" type="button" tabIndex="0" aria-label="Download scope-notes.csv">
                          <svg className="lucide lucide-download size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                            <path d="M12 15V3"></path>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <path d="m7 10 5 5 5-5"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-05-06T10:12:00+05:00">
                        {"2 min ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow" aria-label="Files 2">
                        <span className="font-normal opacity-70">
                          {"Files"}
                        </span>
                        <span>
                          {"2"}
                        </span>
                      </Badge>
                    </div>
                    <Rating>
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
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center size-6" aria-hidden="true">
                      <span className="bg-primary rounded-full size-2"></span>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Product Operations"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"scheduled"}
                      </span>
                      <span className="font-medium">
                        {"Roadmap Review"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Roadmap Review" aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[60ch] text-muted-foreground text-sm">
                      {"Confirmed the roadmap review agenda with product, design, and engineering leads."}
                    </p>
                    <AvatarGroup className="-space-x-1">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Nina Ortiz" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=80&h=80&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Caleb Stone" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Maya Singh" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <AvatarGroupCount className="leading-none size-5 text-[9px]">
                        {"+2"}
                      </AvatarGroupCount>
                    </AvatarGroup>
                    <div className="bg-muted/50 border border-border/50 gap-1.5 inline-flex items-center px-2 py-1 rounded-sm text-[11px] text-muted-foreground">
                      <svg className="lucide lucide-calendar opacity-60 shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span className="font-medium text-foreground">
                        {"Today"}
                      </span>
                      <span className="opacity-70">
                        {"10:00 - 11:00 AM"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-05-06T09:51:00+05:00">
                        {"23 min ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow" aria-label="Room Huddle">
                        <span className="font-normal opacity-70">
                          {"Room"}
                        </span>
                        <span>
                          {"Huddle"}
                        </span>
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border border-none flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center overflow-hidden size-6" aria-hidden="true">
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Nora Patel" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Nora Patel"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"mentioned you in"}
                      </span>
                      <span className="font-medium">
                        {"Partner Campaign"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Partner Campaign" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <Button className="gap-2 h-auto justify-start max-w-full min-h-8 px-2.5 py-1.5" type="button" tabIndex="0">
                      <svg className="lucide lucide-message-square size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <span className="flex-1 leading-5 min-w-0 text-left text-sm truncate">
                        {"Partner guideline update"}
                      </span>
                      <span className="font-medium shrink-0 text-primary">
                        {"Open"}
                      </span>
                    </Button>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-05-06T09:14:00+05:00">
                        {"1 hour ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow" aria-label="Thread Open">
                        <span className="font-normal opacity-70">
                          {"Thread"}
                        </span>
                        <span>
                          {"Open"}
                        </span>
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center size-6" aria-hidden="true">
                      <span className="bg-primary rounded-full size-2"></span>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Task Management"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"assigned you"}
                      </span>
                      <span className="font-medium">
                        {"Update Project Specs"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Update Project Specs" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[60ch] text-muted-foreground text-sm">
                      {"Added a task to revise project specs, acceptance criteria, and delivery notes."}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-05-05T14:30:00+05:00">
                        {"1 day ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow" aria-label="Due Tomorrow">
                        <span className="font-normal opacity-70">
                          {"Due"}
                        </span>
                        <span>
                          {"Tomorrow"}
                        </span>
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center size-6" aria-hidden="true">
                      <span className="bg-primary rounded-full size-2"></span>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Engineering Team"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"started sprint"}
                      </span>
                      <span className="font-medium">
                        {"Backend Optimization"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Backend Optimization" aria-haspopup="menu" id="base-ui-_r_t_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[60ch] text-muted-foreground text-sm">
                      {"Opened API latency sprint work with schema cleanup and queue tuning."}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-list-checks size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                          <path d="M13 5h8"></path>
                          <path d="M13 12h8"></path>
                          <path d="M13 19h8"></path>
                          <path d="m3 17 2 2 4-4"></path>
                          <path d="m3 7 2 2 4-4"></path>
                        </svg>
                        {"3 Tasks In Progress"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-focus/10 border border-focus/15 dark:bg-focus/15 dark:border-focus/25 dark:text-focus disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-focus-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-rocket size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                          <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                        </svg>
                        {"Sprint 18"}
                      </Badge>
                    </div>
                    <div className="bg-muted/55 h-1 max-w-48 overflow-hidden relative rounded-full w-full">
                      <div className="absolute inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                      <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="68" aria-valuetext="68%" role="progressbar" aria-label="Timeline progress">
                        <ProgressTrack progressing="">
                          <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "68%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          {"x"}
                        </span>
                      </Progress>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-05-04T15:40:00+05:00">
                        {"2 days ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-focus/10 border border-focus/15 dark:bg-focus/15 dark:border-focus/25 dark:text-focus disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-focus-foreground text-xs transition-shadow" aria-label="Focus API">
                        <span className="font-normal opacity-70">
                          {"Focus"}
                        </span>
                        <span>
                          {"API"}
                        </span>
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center size-6" aria-hidden="true">
                      <span className="bg-primary rounded-full size-2"></span>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Release Management"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"approved"}
                      </span>
                      <span className="font-medium">
                        {"Feature Freeze"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Feature Freeze" aria-haspopup="menu" id="base-ui-_r_12_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[60ch] text-muted-foreground text-sm">
                      {"Locked release scope after support, sales, and implementation reviewed remaining exceptions."}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-shield-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        {"QA Signed"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-cloud-upload size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CloudUploadIcon" tabler="IconCloudUpload" hugeicons="CloudUploadIcon" phosphor="CloudArrowUpIcon" remixicon="RiUploadCloud2Line" aria-hidden="true">
                          <path d="M12 13v8"></path>
                          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                          <path d="m8 17 4-4 4 4"></path>
                        </svg>
                        {"Release 24.8"}
                      </Badge>
                    </div>
                    <div className="bg-muted/55 h-1 max-w-48 overflow-hidden relative rounded-full w-full">
                      <div className="absolute inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                      <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-label="Timeline progress">
                        <ProgressTrack complete="">
                          <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          {"x"}
                        </span>
                      </Progress>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-05-04T12:22:00+05:00">
                        {"2 days ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow" aria-label="Gate Passed">
                        <span className="font-normal opacity-70">
                          {"Gate"}
                        </span>
                        <span>
                          {"Passed"}
                        </span>
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border border-none flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center overflow-hidden size-6" aria-hidden="true">
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Jordan Lee" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Jordan Lee"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"opened"}
                      </span>
                      <span className="font-medium">
                        {"Billing Export Review"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Billing Export Review" aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[60ch] text-muted-foreground text-sm">
                      {"Flagged three enterprise invoices that need finance confirmation before the campaign close."}
                    </p>
                    <div className="flex flex-wrap gap-1.5 max-w-full">
                      <ButtonGroup className="max-w-full" role="group">
                        <Button className="gap-2 justify-start min-w-0 px-2.5 shrink" type="button" tabIndex="0">
                          <svg className="lucide lucide-paperclip size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" data-icon="inline-start" aria-hidden="true">
                            <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"export-audit.csv"}
                          </span>
                          <span className="text-muted-foreground">
                            {"(14 KB)"}
                          </span>
                        </Button>
                        <Button className="px-2" type="button" tabIndex="0" aria-label="Download export-audit.csv">
                          <svg className="lucide lucide-download size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                            <path d="M12 15V3"></path>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <path d="m7 10 5 5 5-5"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-05-03T17:18:00+05:00">
                        {"3 days ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow" aria-label="Owner Finance">
                        <span className="font-normal opacity-70">
                          {"Owner"}
                        </span>
                        <span>
                          {"Finance"}
                        </span>
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center size-6" aria-hidden="true">
                      <span className="bg-primary rounded-full size-2"></span>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Customer Ops"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"scheduled"}
                      </span>
                      <span className="font-medium">
                        {"Beta Feedback Review"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Beta Feedback Review" aria-haspopup="menu" id="base-ui-_r_1c_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[60ch] text-muted-foreground text-sm">
                      {"Grouped top customer notes by onboarding, permissions, notifications, and reporting."}
                    </p>
                    <AvatarGroup className="-space-x-1">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Ari Brooks" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Leah Foster" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <AvatarGroupCount className="leading-none size-5 text-[9px]">
                        {"+4"}
                      </AvatarGroupCount>
                    </AvatarGroup>
                    <div className="bg-muted/50 border border-border/50 gap-1.5 inline-flex items-center px-2 py-1 rounded-sm text-[11px] text-muted-foreground">
                      <svg className="lucide lucide-calendar opacity-60 shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <span className="font-medium text-foreground">
                        {"Friday"}
                      </span>
                      <span className="opacity-70">
                        {"2:30 - 3:00 PM"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-05-03T13:05:00+05:00">
                        {"3 days ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow" aria-label="Notes 18">
                        <span className="font-normal opacity-70">
                          {"Notes"}
                        </span>
                        <span>
                          {"18"}
                        </span>
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border border-none flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center overflow-hidden size-6" aria-hidden="true">
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Mira Chen" src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Mira Chen"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"mentioned you in"}
                      </span>
                      <span className="font-medium">
                        {"Churn Risk Review"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Churn Risk Review" aria-haspopup="menu" id="base-ui-_r_1h_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <Button className="gap-2 h-auto justify-start max-w-full min-h-8 px-2.5 py-1.5" type="button" tabIndex="0">
                      <svg className="lucide lucide-message-square size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <span className="flex-1 leading-5 min-w-0 text-left text-sm truncate">
                        {"Adoption note"}
                      </span>
                      <span className="font-medium shrink-0 text-primary">
                        {"Reply"}
                      </span>
                    </Button>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-05-02T16:44:00+05:00">
                        {"4 days ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow" aria-label="Risk Medium">
                        <span className="font-normal opacity-70">
                          {"Risk"}
                        </span>
                        <span>
                          {"Medium"}
                        </span>
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center size-6" aria-hidden="true">
                      <span className="bg-primary rounded-full size-2"></span>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Platform Team"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"shipped"}
                      </span>
                      <span className="font-medium">
                        {"Edge Cache Rollout"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Edge Cache Rollout" aria-haspopup="menu" id="base-ui-_r_1m_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[60ch] text-muted-foreground text-sm">
                      {"Rolled cache invalidation updates to production and verified dashboard freshness."}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-cloud-upload size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CloudUploadIcon" tabler="IconCloudUpload" hugeicons="CloudUploadIcon" phosphor="CloudArrowUpIcon" remixicon="RiUploadCloud2Line" aria-hidden="true">
                          <path d="M12 13v8"></path>
                          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                          <path d="m8 17 4-4 4 4"></path>
                        </svg>
                        {"Deploy Complete"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        <svg className="lucide lucide-list-checks size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                          <path d="M13 5h8"></path>
                          <path d="M13 12h8"></path>
                          <path d="M13 19h8"></path>
                          <path d="m3 17 2 2 4-4"></path>
                          <path d="m3 7 2 2 4-4"></path>
                        </svg>
                        {"2 Follow-Ups"}
                      </Badge>
                    </div>
                    <div className="bg-muted/55 h-1 max-w-48 overflow-hidden relative rounded-full w-full">
                      <div className="absolute inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                      <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="86" aria-valuetext="86%" role="progressbar" aria-label="Timeline progress">
                        <ProgressTrack progressing="">
                          <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "86%"}}></ProgressIndicator>
                        </ProgressTrack>
                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                          {"x"}
                        </span>
                      </Progress>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-05-01T11:28:00+05:00">
                        {"5 days ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow" aria-label="Region Global">
                        <span className="font-normal opacity-70">
                          {"Region"}
                        </span>
                        <span>
                          {"Global"}
                        </span>
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center size-6" aria-hidden="true">
                      <span className="bg-primary rounded-full size-2"></span>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Design QA"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"completed"}
                      </span>
                      <span className="font-medium">
                        {"Dashboard Polish Pass"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Dashboard Polish Pass" aria-haspopup="menu" id="base-ui-_r_1r_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[60ch] text-muted-foreground text-sm">
                      {"Reviewed table density, empty states, mobile wrapping, and panel spacing."}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-04-30T18:10:00+05:00">
                        {"6 days ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow" aria-label="Issues 0">
                        <span className="font-normal opacity-70">
                          {"Issues"}
                        </span>
                        <span>
                          {"0"}
                        </span>
                      </Badge>
                    </div>
                    <Rating>
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
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Rating>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9 has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-[1.875rem] group-data-[orientation=vertical]/timeline:translate-y-0" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="bg-background border border-none flex group-data-[orientation=vertical]/timeline:-left-7 group-data-completed/timeline-item:border-border items-center justify-center overflow-hidden size-6" aria-hidden="true">
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Sasha Reed" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium">
                        {"Sasha Reed"}
                      </span>
                      <span className="font-normal text-muted-foreground">
                        {"requested"}
                      </span>
                      <span className="font-medium">
                        {"Launch Retro Notes"}
                      </span>
                    </TimelineTitle>
                    <DropdownMenu>
                    <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Launch Retro Notes" aria-haspopup="menu" id="base-ui-_r_20_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <Button className="gap-2 h-auto justify-start max-w-full min-h-8 px-2.5 py-1.5" type="button" tabIndex="0">
                      <svg className="lucide lucide-message-square size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                      </svg>
                      <span className="flex-1 leading-5 min-w-0 text-left text-sm truncate">
                        {"Capture retro blockers"}
                      </span>
                      <span className="font-medium shrink-0 text-primary">
                        {"Note"}
                      </span>
                    </Button>
                    <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                      <TimelineDate className="mb-0" datetime="2026-04-29T09:35:00+05:00">
                        {"1 week ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow" aria-label="Due Monday">
                        <span className="font-normal opacity-70">
                          {"Due"}
                        </span>
                        <span>
                          {"Monday"}
                        </span>
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_5_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "149.550574084199px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
    </SheetContent>
    </Sheet>
  </>
  )
}
