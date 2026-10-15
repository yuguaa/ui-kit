import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
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
        {"Audit event"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" data-icon="inline-start" aria-hidden="true">
            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
          </svg>
          {"Open Event"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(36rem,calc(100vw-2rem))]" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_7_" aria-describedby="base-ui-_r_8_" style={{"--nested-dialogs": "0"}}>
      <div className="flex flex-col gap-2 px-5 py-3.5 shrink-0">
        <div className="flex flex-col gap-1">
          <div className="flex gap-2 items-center justify-between">
            <span className="flex gap-1 items-center min-w-0">
              <span className="font-mono min-w-0 text-foreground text-xs truncate">
                {"EVT-9f3a21"}
              </span>
              <Button type="button" tabIndex={0} aria-label="Copy event ID">
                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                  <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
              </Button>
            </span>
            <div className="flex gap-1 items-center shrink-0">
              <span className="tabular-nums text-muted-foreground text-xs">
                {"1 of 65"}
              </span>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex={0} aria-disabled="true" aria-label="Previous event" aria-keyshortcuts="K" id="base-ui-_r_4_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine" aria-hidden="true">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-disabled="false" aria-label="Next event" aria-keyshortcuts="J" id="base-ui-_r_6_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Button className="-me-1" type="button" tabIndex={0}>
                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
                <span className="sr-only">
                  {"Close"}
                </span>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center min-w-0">
            <SheetTitle className="min-w-0 text-base truncate" id="base-ui-_r_7_">
              <span className="font-mono">
                {"deployment.promote"}
              </span>
            </SheetTitle>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
              {"Success"}
            </Badge>
          </div>
          <SheetDescription id="base-ui-_r_8_">
            <span className="flex flex-wrap gap-1.5 items-center min-w-0">
              <span className="flex gap-2 items-center min-w-0">
                <Avatar className="size-5" size="sm" aria-hidden="true">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <span className="truncate">
                  {"Emma Wilson"}
                </span>
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span className="tabular-nums">
                {"Sep 29, 2026, 14:12:08 UTC"}
              </span>
            </span>
          </SheetDescription>
        </div>
        <p className="text-foreground text-sm">
          {"Promoted payments-api v2.41.0 from the 50% canary to all production traffic."}
        </p>
      </div>
      <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
        <TabsList className="border-b gap-5 h-auto justify-start px-5 py-0 shrink-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
          <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_9_" compositeItemActive="" aria-controls="base-ui-_r_d_">
            {"Details"}
          </TabsTrigger>
          <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_a_">
            {"Changes"}
          </TabsTrigger>
          <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_b_">
            {"Raw"}
          </TabsTrigger>
          <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_c_">
            {"Related"}
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full tabular-nums text-xs transition-shadow">
              {"3"}
            </Badge>
          </TabsTrigger>
        </TabsList>
        <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
          <div className="flex flex-col gap-4 px-5 py-5">
            <TabsContent data-orientation="horizontal" activationDirection="none" id="base-ui-_r_d_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_9_">
              <div className="flex flex-col gap-5">
                <section className="flex flex-col gap-3 min-w-0">
                  <h3 className="font-medium text-muted-foreground text-xs">
                    {"Actor"}
                  </h3>
                  <dl className="gap-x-3 gap-y-2.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Name"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex gap-2 items-center min-w-0">
                          <Avatar className="size-5" size="sm" aria-hidden="true">
                            <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                          </Avatar>
                          <span className="truncate">
                            {"Emma Wilson"}
                          </span>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Role"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="min-w-0 wrap-break-word">
                          {"Release manager, Platform"}
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Auth"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="min-w-0 wrap-break-word">
                          {"SSO with WebAuthn"}
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Session"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex gap-1 items-center min-w-0">
                          <span className="font-mono min-w-0 text-foreground text-xs truncate">
                            {"ses_4QmT8x"}
                          </span>
                          <Button type="button" tabIndex={0} aria-label="Copy session ID">
                            <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                              <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                          </Button>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"IP address"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex flex-wrap gap-x-2 items-center min-w-0">
                          <span className="font-mono tabular-nums text-xs">
                            {"203.0.113.24"}
                          </span>
                          <span className="text-muted-foreground">
                            {"Corporate VPN"}
                          </span>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"User agent"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="font-mono min-w-0 text-xs wrap-break-word">
                          {"Mozilla/5.0 (Macintosh; Intel Mac OS X 14_6) AppleWebKit/537.36 Chrome/129.0.0.0 Safari/537.36"}
                        </span>
                      </dd>
                    </div>
                  </dl>
                </section>
                <section className="flex flex-col gap-3 min-w-0">
                  <h3 className="font-medium text-muted-foreground text-xs">
                    {"Target"}
                  </h3>
                  <dl className="gap-x-3 gap-y-2.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Resource"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex gap-2 items-center min-w-0">
                          <span className="flex shrink-0 text-muted-foreground">
                            <svg className="lucide lucide-cloud-upload size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CloudUploadIcon" tabler="IconCloudUpload" hugeicons="CloudUploadIcon" phosphor="CloudArrowUpIcon" remixicon="RiUploadCloud2Line" aria-hidden="true">
                              <path d="M12 13v8"></path>
                              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                              <path d="m8 17 4-4 4 4"></path>
                            </svg>
                          </span>
                          <span className="text-sm truncate">
                            {"payments-api"}
                          </span>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Resource ID"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex gap-1 items-center min-w-0">
                          <span className="font-mono min-w-0 text-foreground text-xs truncate">
                            {"DEP-4127"}
                          </span>
                          <Button type="button" tabIndex={0} aria-label="Copy resource ID">
                            <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                              <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                          </Button>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Environment"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                          {"Production"}
                        </Badge>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Cluster"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="font-mono min-w-0 text-xs wrap-break-word">
                          {"prod-us-east-1"}
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Source"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex gap-2 items-center min-w-0">
                          <span className="flex shrink-0 text-muted-foreground">
                            <svg className="lucide lucide-monitor size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                              <rect width={20} height={14} x={2} y={3} rx={2}></rect>
                              <line x1={8} x2={16} y1={21} y2={21}></line>
                              <line x1={12} x2={12} y1={17} y2={21}></line>
                            </svg>
                          </span>
                          <span className="text-muted-foreground text-sm truncate">
                            {"Console"}
                          </span>
                        </span>
                      </dd>
                    </div>
                  </dl>
                </section>
                <section className="flex flex-col gap-3 min-w-0">
                  <h3 className="font-medium text-muted-foreground text-xs">
                    {"Request"}
                  </h3>
                  <dl className="gap-x-3 gap-y-2.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Request ID"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex gap-1 items-center min-w-0">
                          <span className="font-mono min-w-0 text-foreground text-xs truncate">
                            {"req_01J8ZK4M2Q"}
                          </span>
                          <Button type="button" tabIndex={0} aria-label="Copy request ID">
                            <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                              <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                          </Button>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Trace ID"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex gap-1 items-center min-w-0">
                          <span className="font-mono min-w-0 text-foreground text-xs truncate" title="4bf92f3577b34da6a3ce929d0e0e4736">
                            {"4bf92f35…0e4736"}
                          </span>
                          <Button type="button" tabIndex={0} aria-label="Copy trace ID">
                            <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                              <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                          </Button>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Recorded"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex flex-wrap gap-x-2 items-center min-w-0">
                          <span className="tabular-nums">
                            {"Sep 29, 2026, 14:12:08 UTC"}
                          </span>
                          <span className="text-muted-foreground">
                            {"7m ago"}
                          </span>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        {"Review"}
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="text-muted-foreground text-sm">
                          {"Not required"}
                        </span>
                      </dd>
                    </div>
                  </dl>
                </section>
              </div>
            </TabsContent>
          </div>
        </div>
      </Tabs>
      <div className="border-t flex flex-wrap gap-2 items-center px-5 py-3 shrink-0">
        <Button type="button" tabIndex={0}>
          <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
          {"Mark reviewed"}
        </Button>
        <Button type="button" tabIndex={0}>
          <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          {"Copy link"}
        </Button>
        <Button className="ms-auto" type="button" tabIndex={0}>
          <svg className="lucide lucide-history" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HistoryIcon" tabler="IconHistory" hugeicons="Clock01Icon" phosphor="ClockCounterClockwiseIcon" remixicon="RiHistoryLine" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
            <path d="M12 7v5l4 2"></path>
          </svg>
          {"Resource history"}
        </Button>
      </div>
    </SheetContent>
    </Sheet>
  </>
  )
}
