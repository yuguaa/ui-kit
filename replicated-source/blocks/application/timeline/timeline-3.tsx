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
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-6 sm:p-8 w-full">
      <section className="max-w-md w-full" aria-labelledby="finance-activity-title">
        <div className="mb-5 space-y-0.5">
          <h1 className="font-semibold text-base" id="finance-activity-title">
            {"Finance Activity"}
          </h1>
          <p className="leading-5 text-muted-foreground text-sm">
            {"Payouts, risk, invoices, and ledger updates."}
          </p>
        </div>
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
                <TimelineDate className="mb-0 mt-0" datetime="2026-05-06T09:45:00+05:00">
                  {"5 minutes ago"}
                </TimelineDate>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                  <span className="bg-emerald-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
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
              <div className="flex flex-wrap gap-1.5 items-center mt-2">
                <Button type="button" tabIndex={0} extracted="1">
                  {"Review"}
                </Button>
                <Button type="button" tabIndex={0}>
                  {"Clear"}
                </Button>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center mt-2">
                <TimelineDate className="mb-0 mt-0" datetime="2026-05-06T09:32:00+05:00">
                  {"18 minutes ago"}
                </TimelineDate>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                  <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
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
              <div className="flex flex-wrap gap-1.5 items-center mt-2">
                <ButtonGroup role="group">
                  <Button type="button" tabIndex={0}>
                    <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                      <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                    </svg>
                    <span className="truncate">
                      {"settlement-match.csv"}
                    </span>
                    <span className="opacity-60">
                      {"(48kb)"}
                    </span>
                  </Button>
                  <Button type="button" tabIndex={0} aria-label="Download settlement-match.csv">
                    <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                      <path d="M12 15V3"></path>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10 5 5 5-5"></path>
                    </svg>
                  </Button>
                </ButtonGroup>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center mt-2">
                <TimelineDate className="mb-0 mt-0" datetime="2026-05-06T09:08:00+05:00">
                  {"42 minutes ago"}
                </TimelineDate>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                  <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
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
              <div className="flex flex-wrap gap-1.5 items-center mt-2">
                <AvatarGroup className="-space-x-1">
                  <Avatar className="size-5" size="default">
                    <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-5" size="default">
                    <AvatarImage alt="Michael Rodriguez" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <AvatarGroupCount className="leading-none size-5 text-[9px]">
                    <Popover>
                    <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false" aria-label="2 more: Nora Vale, Karl Vogel">
                      {"+2"}
                    </PopoverTrigger>
                    </Popover>
                  </AvatarGroupCount>
                </AvatarGroup>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center mt-2">
                <TimelineDate className="mb-0 mt-0" datetime="2026-05-06T08:50:00+05:00">
                  {"1 hour ago"}
                </TimelineDate>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                  <span className="bg-violet-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
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
              <div className="flex flex-wrap gap-1.5 items-center mt-2">
                <ButtonGroup role="group">
                  <Button type="button" tabIndex={0}>
                    <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                      <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                    </svg>
                    <span className="truncate">
                      {"invoice-2098.pdf"}
                    </span>
                    <span className="opacity-60">
                      {"(76kb)"}
                    </span>
                  </Button>
                  <Button type="button" tabIndex={0} aria-label="Download invoice-2098.pdf">
                    <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                      <path d="M12 15V3"></path>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10 5 5 5-5"></path>
                    </svg>
                  </Button>
                </ButtonGroup>
              </div>
              <div className="flex flex-wrap gap-1.5 items-center mt-2">
                <TimelineDate className="mb-0 mt-0" datetime="2026-05-06T07:50:00+05:00">
                  {"2 hours ago"}
                </TimelineDate>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                  <span className="bg-orange-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                  {"Invoice"}
                </Badge>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                  {"Due Tomorrow"}
                </Badge>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </div>
  )
}
