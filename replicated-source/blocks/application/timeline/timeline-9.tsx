import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
} from "@/registry-neui/bases/radix/neui/timeline"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
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
        {"Finance activity timeline sheet"}
      </h1>
      <Sheet>
      <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
        <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" data-icon="inline-start" aria-hidden="true">
          <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
        </svg>
        {"Open timeline"}
      </SheetTrigger>
      </Sheet>
    </main>
    <Sheet>
    <SheetContent className="bg-popover data-[side=right]:h-[calc(100svh-2rem)] data-[side=right]:inset-y-4 data-[side=right]:left-auto data-[side=right]:max-w-none data-[side=right]:right-4 data-[side=right]:w-[min(30rem,calc(100vw-2rem))] flex flex-col outline-none overflow-hidden p-0 rounded-xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="border-b border-border/70 gap-2 px-5 py-4 shrink-0 text-left">
        <div className="flex gap-3 items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex gap-2 items-center min-w-0">
              <SheetTitle className="truncate" id="base-ui-_r_3_">
                {"Finance Activity"}
              </SheetTitle>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 leading-none min-w-4 outline-none px-1 py-0.25 relative rounded-full text-[0.6rem] text-primary-foreground transition-shadow">
                {"12"}
              </Badge>
            </div>
            <SheetDescription className="sr-only" id="base-ui-_r_4_">
              {"Payouts, reviews, invoices, and ledger updates from the finance queue."}
            </SheetDescription>
          </div>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Dismiss finance activity timeline">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full min-h-0" role="presentation" aria-label="Scrollable finance activity timeline" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none overflow-x-hidden overflow-y-auto rounded-lg size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "888px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="pb-5 pt-0 px-5">
              <Timeline data-orientation="vertical">
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Nadia Flores" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Nadia Flores"}
                        </span>
                        <span className="text-muted-foreground">
                          {"approved payout batch"}
                        </span>
                        <a className="font-medium hover:text-primary text-foreground underline underline-offset-2" href="#">
                          {"ACH-4182"}
                        </a>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"$142,800 routed to 38 merchant accounts"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-09T15:35:00+05:00">
                        {"5 minutes ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Payout"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"Same Day"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Theo Ramsey" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Theo Ramsey"}
                        </span>
                        <span className="text-muted-foreground">
                          {"flagged review on"}
                        </span>
                        {"Transfer"}
                        <a className="font-medium hover:text-primary text-foreground underline underline-offset-2" href="#">
                          {"TX-9041"}
                        </a>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"Velocity threshold exceeded for new payee"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center max-w-full mt-2">
                      <Button type="button" tabIndex="0">
                        {"Review"}
                      </Button>
                      <Button type="button" tabIndex="0">
                        {"Clear"}
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-09T15:22:00+05:00">
                        {"18 minutes ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Risk"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        {"High"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Iris Chen" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Iris Chen"}
                        </span>
                        <span className="text-muted-foreground">
                          {"reconciled ledger entry"}
                        </span>
                        <a className="font-medium hover:text-primary text-foreground underline underline-offset-2" href="#">
                          {"LDG-7749"}
                        </a>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"Subscription invoice matched to bank settlement"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center max-w-full mt-2">
                      <ButtonGroup className="max-w-full" role="group">
                        <Button className="justify-start min-w-0" type="button" tabIndex="0">
                          <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" data-icon="inline-start" aria-hidden="true">
                            <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"settlement-match.csv"}
                          </span>
                          <span className="opacity-60 shrink-0">
                            {"(48kb)"}
                          </span>
                        </Button>
                        <Button type="button" tabIndex="0" aria-label="Download settlement-match.csv">
                          <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                            <path d="M12 15V3"></path>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <path d="m7 10 5 5 5-5"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-09T14:58:00+05:00">
                        {"42 minutes ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-info rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Ledger"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Marcus Bell" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Marcus Bell"}
                        </span>
                        <span className="text-muted-foreground">
                          {"raised limit for"}
                        </span>
                        <span className="font-medium">
                          {"Northstar Workspace"}
                        </span>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"Monthly card volume increased to $850K"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center max-w-full mt-2">
                      <AvatarGroup className="-space-x-1">
                        <Avatar className="size-5" size="default">
                          <AvatarImage alt="SC" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-5" size="default">
                          <AvatarImage alt="MR" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <AvatarGroupCount className="leading-none size-5 text-[9px]">
                          {"+2"}
                        </AvatarGroupCount>
                      </AvatarGroup>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-09T14:40:00+05:00">
                        {"1 hour ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-primary rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Limit Raised"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Amara Okafor" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Amara Okafor"}
                        </span>
                        <span className="text-muted-foreground">
                          {"sent invoice reminder"}
                        </span>
                        <a className="font-medium hover:text-primary text-foreground underline underline-offset-2" href="#">
                          {"INV-2098"}
                        </a>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"Net 7 renewal balance due tomorrow"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center max-w-full mt-2">
                      <ButtonGroup className="max-w-full" role="group">
                        <Button className="justify-start min-w-0" type="button" tabIndex="0">
                          <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" data-icon="inline-start" aria-hidden="true">
                            <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"invoice-2098.pdf"}
                          </span>
                          <span className="opacity-60 shrink-0">
                            {"(76kb)"}
                          </span>
                        </Button>
                        <Button type="button" tabIndex="0" aria-label="Download invoice-2098.pdf">
                          <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                            <path d="M12 15V3"></path>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <path d="m7 10 5 5 5-5"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-09T13:40:00+05:00">
                        {"2 hours ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-destructive rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Invoice"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                        {"Due Tomorrow"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Priya Shah" src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Priya Shah"}
                        </span>
                        <span className="text-muted-foreground">
                          {"verified onboarding documents for"}
                        </span>
                        <a className="font-medium hover:text-primary text-foreground underline underline-offset-2" href="#">
                          {"KYC-1872"}
                        </a>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"Business ownership file cleared after manual review"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center max-w-full mt-2">
                      <AvatarGroup className="-space-x-1">
                        <Avatar className="size-5" size="default">
                          <AvatarImage alt="AB" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-5" size="default">
                          <AvatarImage alt="LF" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                      </AvatarGroup>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-09T12:40:00+05:00">
                        {"3 hours ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-focus rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"KYC"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"Cleared"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Evan Brooks" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Evan Brooks"}
                        </span>
                        <span className="text-muted-foreground">
                          {"opened dispute packet"}
                        </span>
                        <a className="font-medium hover:text-primary text-foreground underline underline-offset-2" href="#">
                          {"CASE-427"}
                        </a>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"Cardholder evidence requested before processor deadline"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center max-w-full mt-2">
                      <Button type="button" tabIndex="0">
                        {"Upload"}
                      </Button>
                      <Button type="button" tabIndex="0">
                        {"Assign"}
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-09T11:40:00+05:00">
                        {"4 hours ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Dispute"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        {"Needs Evidence"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Leah Foster" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Leah Foster"}
                        </span>
                        <span className="text-muted-foreground">
                          {"matched reserve release"}
                        </span>
                        <a className="font-medium hover:text-primary text-foreground underline underline-offset-2" href="#">
                          {"RSV-3301"}
                        </a>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"$28,400 released after risk window expired"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center max-w-full mt-2">
                      <ButtonGroup className="max-w-full" role="group">
                        <Button className="justify-start min-w-0" type="button" tabIndex="0">
                          <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" data-icon="inline-start" aria-hidden="true">
                            <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"reserve-release.pdf"}
                          </span>
                          <span className="opacity-60 shrink-0">
                            {"(112kb)"}
                          </span>
                        </Button>
                        <Button type="button" tabIndex="0" aria-label="Download reserve-release.pdf">
                          <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                            <path d="M12 15V3"></path>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <path d="m7 10 5 5 5-5"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-09T09:40:00+05:00">
                        {"6 hours ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Reserve"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"Released"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Caleb Stone" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Caleb Stone"}
                        </span>
                        <span className="text-muted-foreground">
                          {"updated tax profile for"}
                        </span>
                        <a className="font-medium hover:text-primary text-foreground underline underline-offset-2" href="#">
                          {"TIN-6150"}
                        </a>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"W-9 details synced to the annual reporting workspace"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center max-w-full mt-2">
                      <AvatarGroup className="-space-x-1">
                        <Avatar className="size-5" size="default">
                          <AvatarImage alt="NP" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <Avatar className="size-5" size="default">
                          <AvatarImage alt="MC" src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=96&h=96&dpr=2&q=80"></AvatarImage>
                        </Avatar>
                        <AvatarGroupCount className="leading-none size-5 text-[9px]">
                          {"+1"}
                        </AvatarGroupCount>
                      </AvatarGroup>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-08T17:05:00+05:00">
                        {"Yesterday"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-info rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Tax"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Maya Singh" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Maya Singh"}
                        </span>
                        <span className="text-muted-foreground">
                          {"scheduled settlement hold for"}
                        </span>
                        {"Merchant"}
                        <a className="font-medium hover:text-primary text-foreground underline underline-offset-2" href="#">
                          {"MCH-8824"}
                        </a>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"Hold expires after processor review on Monday"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center max-w-full mt-2">
                      <Button type="button" tabIndex="0">
                        {"View Hold"}
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-08T13:20:00+05:00">
                        {"Yesterday"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-warning rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Settlement"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"Timed"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Jon Bell" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Jon Bell"}
                        </span>
                        <span className="text-muted-foreground">
                          {"exported compliance packet"}
                        </span>
                        <a className="font-medium hover:text-primary text-foreground underline underline-offset-2" href="#">
                          {"AUD-5108"}
                        </a>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"Quarterly transaction sample prepared for audit"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center max-w-full mt-2">
                      <ButtonGroup className="max-w-full" role="group">
                        <Button className="justify-start min-w-0" type="button" tabIndex="0">
                          <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" data-icon="inline-start" aria-hidden="true">
                            <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                          </svg>
                          <span className="min-w-0 truncate">
                            {"audit-sample.zip"}
                          </span>
                          <span className="opacity-60 shrink-0">
                            {"(4.2mb)"}
                          </span>
                        </Button>
                        <Button type="button" tabIndex="0" aria-label="Download audit-sample.zip">
                          <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                            <path d="M12 15V3"></path>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <path d="m7 10 5 5 5-5"></path>
                          </svg>
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-07T16:45:00+05:00">
                        {"2 days ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-focus rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Audit"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                        {"Ready"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="group-data-[orientation=vertical]/timeline:ms-10 group-data-[orientation=vertical]/timeline:not-last:pb-4" completed="true">
                  <TimelineHeader>
                    <TimelineSeparator className="bg-border! group-data-[orientation=vertical]/timeline:-left-8 group-data-[orientation=vertical]/timeline:h-[calc(100%-2.25rem)] group-data-[orientation=vertical]/timeline:top-2 group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="border-none group-data-[orientation=vertical]/timeline:-left-8 overflow-hidden size-7" aria-hidden="true">
                      <Avatar className="size-7" size="default">
                        <AvatarImage alt="Sofia Marin" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </TimelineIndicator>
                  </TimelineHeader>
                  <TimelineContent className="min-w-0 pb-1">
                    <div className="min-w-0">
                      <p className="leading-5 text-sm">
                        <span className="font-medium hover:text-primary text-foreground">
                          {"Sofia Marin"}
                        </span>
                        <span className="text-muted-foreground">
                          {"closed risk exception"}
                        </span>
                        <a className="font-medium hover:text-primary text-foreground underline underline-offset-2" href="#">
                          {"RISK-2906"}
                        </a>
                      </p>
                    </div>
                    <p className="leading-4 mt-1 text-muted-foreground text-xs">
                      {"Merchant monitoring returned to the standard review cadence"}
                    </p>
                    <div className="flex flex-wrap gap-1.5 items-center mt-2">
                      <TimelineDate className="mb-0 mt-0" datetime="2026-05-06T10:10:00+05:00">
                        {"3 days ago"}
                      </TimelineDate>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                        <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                        {"Risk"}
                      </Badge>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        {"Closed"}
                      </Badge>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_5_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "193.71671388101984px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
    </SheetContent>
    </Sheet>
  </>
  )
}
