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
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-6 sm:p-8 w-full">
      <section className="max-w-lg w-full" aria-labelledby="activity-title">
        <h1 className="sr-only" id="activity-title">
          Team Activity Timeline
        </h1>
        <Timeline data-orientation="vertical">
          <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9">
            <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
              <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-1 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
              <TimelineIndicator className="bg-background border border-none flex group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:-top-0.5 group-data-completed/timeline-item:border-border items-center justify-center overflow-hidden size-6" aria-hidden="true">
                <Avatar className="size-6" size="default">
                  <AvatarImage alt="Dara Kim" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </TimelineIndicator>
              <TimelineTitle className="leading-5 min-w-0">
                <span className="font-medium">
                  Dara Kim
                </span>
                <span className="font-normal text-muted-foreground">
                  shared
                </span>
                <span className="font-medium">
                  Launch Timeline
                </span>
              </TimelineTitle>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Launch Timeline" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
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
                Uploaded the launch packet with milestone dates and planning files.
              </p>
              <div className="flex flex-wrap gap-1.5 max-w-full">
                <ButtonGroup className="max-w-full" role="group">
                  <Button className="gap-2 justify-start min-w-0 px-2.5 shrink" type="button" tabIndex="0">
                    <svg className="lucide lucide-paperclip size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" data-icon="inline-start" aria-hidden="true">
                      <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                    </svg>
                    <span className="min-w-0 truncate">
                      timeline.pdf
                    </span>
                    <span className="text-muted-foreground">
                      (2 MB)
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
                      scope-notes.csv
                    </span>
                    <span className="text-muted-foreground">
                      (9 KB)
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
                  2 min ago
                </TimelineDate>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow" aria-label="Files 2">
                  <span className="font-normal opacity-70">
                    Files
                  </span>
                  <span>
                    2
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
          <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9">
            <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
              <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-1 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
              <TimelineIndicator className="bg-background border flex group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:-top-0.5 group-data-completed/timeline-item:border-border items-center justify-center size-6" aria-hidden="true">
                <span className="bg-muted rounded-full size-2"></span>
              </TimelineIndicator>
              <TimelineTitle className="leading-5 min-w-0">
                <span className="font-medium">
                  Product Operations
                </span>
                <span className="font-normal text-muted-foreground">
                  scheduled
                </span>
                <span className="font-medium">
                  Roadmap Review
                </span>
              </TimelineTitle>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Roadmap Review" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
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
                Confirmed the roadmap review agenda with product, design, and engineering leads.
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
                  <Popover>
                  <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_b_" aria-haspopup="dialog" aria-expanded="false" aria-label="2 more: Ava Chen, Jonah Reed">
                    +2
                  </PopoverTrigger>
                  </Popover>
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
                  Today
                </span>
                <span className="opacity-70">
                  10:00 - 11:00 AM
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                <TimelineDate className="mb-0" datetime="2026-05-06T09:51:00+05:00">
                  23 min ago
                </TimelineDate>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow" aria-label="Room Huddle">
                  <span className="font-normal opacity-70">
                    Room
                  </span>
                  <span>
                    Huddle
                  </span>
                </Badge>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9">
            <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
              <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-1 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
              <TimelineIndicator className="bg-background border border-none flex group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:-top-0.5 group-data-completed/timeline-item:border-border items-center justify-center overflow-hidden size-6" aria-hidden="true">
                <Avatar className="size-6" size="default">
                  <AvatarImage alt="Nora Patel" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </TimelineIndicator>
              <TimelineTitle className="leading-5 min-w-0">
                <span className="font-medium">
                  Nora Patel
                </span>
                <span className="font-normal text-muted-foreground">
                  mentioned you in
                </span>
                <span className="font-medium">
                  Partner Campaign
                </span>
              </TimelineTitle>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Partner Campaign" aria-haspopup="menu" id="base-ui-_r_f_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </TimelineHeader>
            <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
              <Button className="gap-2 h-auto justify-start max-w-full min-h-8 px-2.5 py-1.5 whitespace-normal" type="button" tabIndex="0">
                <svg className="lucide lucide-message-square size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                </svg>
                <span className="flex-1 leading-5 min-w-0 text-left text-sm">
                  @Alex, can you update the partner guidelines?
                </span>
                <span className="font-medium shrink-0 text-primary">
                  View
                </span>
              </Button>
              <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                <TimelineDate className="mb-0" datetime="2026-05-06T09:14:00+05:00">
                  1 hour ago
                </TimelineDate>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow" aria-label="Thread Open">
                  <span className="font-normal opacity-70">
                    Thread
                  </span>
                  <span>
                    Open
                  </span>
                </Badge>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9">
            <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
              <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-1 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
              <TimelineIndicator className="bg-background border flex group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:-top-0.5 group-data-completed/timeline-item:border-border items-center justify-center size-6" aria-hidden="true">
                <span className="bg-muted rounded-full size-2"></span>
              </TimelineIndicator>
              <TimelineTitle className="leading-5 min-w-0">
                <span className="font-medium">
                  Task Management
                </span>
                <span className="font-normal text-muted-foreground">
                  assigned you
                </span>
                <span className="font-medium">
                  Update Project Specs
                </span>
              </TimelineTitle>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Update Project Specs" aria-haspopup="menu" id="base-ui-_r_k_" aria-expanded="false">
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
                Added a task to revise project specs, acceptance criteria, and delivery notes.
              </p>
              <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                <TimelineDate className="mb-0" datetime="2026-05-05T14:30:00+05:00">
                  1 day ago
                </TimelineDate>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow" aria-label="Due Tomorrow">
                  <span className="font-normal opacity-70">
                    Due
                  </span>
                  <span>
                    Tomorrow
                  </span>
                </Badge>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-9">
            <TimelineHeader className="flex gap-2.5 items-start justify-between min-w-0">
              <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-1 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
              <TimelineIndicator className="bg-background border flex group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:-top-0.5 group-data-completed/timeline-item:border-border items-center justify-center size-6" aria-hidden="true">
                <span className="bg-muted rounded-full size-2"></span>
              </TimelineIndicator>
              <TimelineTitle className="leading-5 min-w-0">
                <span className="font-medium">
                  Engineering Team
                </span>
                <span className="font-normal text-muted-foreground">
                  started sprint
                </span>
                <span className="font-medium">
                  Backend Optimization
                </span>
              </TimelineTitle>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-2 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for Backend Optimization" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
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
                Opened API latency sprint work with schema cleanup and queue tuning.
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
                  3 Tasks In Progress
                </Badge>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-focus/10 border border-focus/15 dark:bg-focus/15 dark:border-focus/25 dark:text-focus disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-focus-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-rocket size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                    <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                  </svg>
                  Sprint 18
                </Badge>
              </div>
              <div className="bg-muted/55 h-1 max-w-48 overflow-hidden relative rounded-full w-full">
                <div className="absolute inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true" style={{backgroundImage: "repeating-linear-gradient(-45deg, currentcolor 0px, currentcolor 1px, transparent 0px, transparent 4px)"}}></div>
                <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="68" aria-valuetext="68%" role="progressbar" aria-label="Timeline progress">
                  <ProgressTrack progressing="">
                    <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "68%"}}></ProgressIndicator>
                  </ProgressTrack>
                  <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                    x
                  </span>
                </Progress>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center pt-0.5">
                <TimelineDate className="mb-0" datetime="2026-05-04T15:40:00+05:00">
                  2 days ago
                </TimelineDate>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-focus/10 border border-focus/15 dark:bg-focus/15 dark:border-focus/25 dark:text-focus disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-focus-foreground text-xs transition-shadow" aria-label="Focus API">
                  <span className="font-normal opacity-70">
                    Focus
                  </span>
                  <span>
                    API
                  </span>
                </Badge>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </div>
  )
}
