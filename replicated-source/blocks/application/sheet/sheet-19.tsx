import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
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
        Firewall request
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" data-icon="inline-start" aria-hidden="true">
            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          View Request
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(36rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_7_" aria-describedby="base-ui-_r_8_" style={{"--nested-dialogs": "0"}}>
      <div className="flex flex-col gap-1 px-5 py-3.5 shrink-0">
        <div className="flex gap-2 items-center justify-between">
          <span className="flex gap-1 items-center min-w-0">
            <span className="font-mono min-w-0 text-foreground text-xs truncate">
              cb0cdab31430fa59
            </span>
            <Button type="button" tabIndex="0" aria-label="Copy ray ID">
              <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </Button>
          </span>
          <div className="flex gap-1 items-center shrink-0">
            <span className="tabular-nums text-muted-foreground text-xs">
              2 of 112
            </span>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-disabled="false" aria-label="Newer event" aria-keyshortcuts="K" id="base-ui-_r_4_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-chevron-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine" aria-hidden="true">
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-disabled="false" aria-label="Older event" aria-keyshortcuts="J" id="base-ui-_r_6_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <Button className="-me-1" type="button" tabIndex="0" aria-label="Close">
              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center min-w-0">
          <SheetTitle className="min-w-0 text-base truncate" id="base-ui-_r_7_">
            <span className="font-mono">
              GET /.env
            </span>
          </SheetTitle>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
            <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M4.929 4.929 19.07 19.071"></path>
            </svg>
            Blocked
          </Badge>
        </div>
        <SheetDescription id="base-ui-_r_8_">
          <span className="flex flex-wrap gap-1.5 items-center min-w-0">
            <span className="font-mono text-xs">
              203.0.113.12
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span>
              payments-api
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="tabular-nums">
              Sep 29, 2026, 14:19:37 UTC
            </span>
          </span>
        </SheetDescription>
      </div>
      <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
        <TabsList className="border-b gap-5 h-auto justify-start px-5 py-0 shrink-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
          <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_9_" compositeItemActive="" aria-controls="base-ui-_r_c_">
            Details
          </TabsTrigger>
          <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_a_">
            Trace
          </TabsTrigger>
          <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_b_">
            Raw
          </TabsTrigger>
        </TabsList>
        <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
          <div className="flex flex-col gap-4 px-5 py-5">
            <TabsContent data-orientation="horizontal" activationDirection="none" id="base-ui-_r_c_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_9_">
              <div className="flex flex-col gap-5">
                <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-destructive bg-destructive/4 border border-destructive/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
                  <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M4.929 4.929 19.07 19.071"></path>
                  </svg>
                  <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
                    Blocked by Block scanner probes
                  </AlertTitle>
                  <AlertDescription className="[&_p]:leading-relaxed col-start-2 font-mono gap-1 grid justify-items-start text-muted-foreground text-xs">
                    http.path starts_with "/." or http.path contains "wp-" or http.user_agent contains "sqlmap" or http.user_agent contains "Nikto"
                  </AlertDescription>
                </Alert>
                <section className="flex flex-col gap-3 min-w-0">
                  <h3 className="font-medium text-muted-foreground text-xs">
                    Client
                  </h3>
                  <dl className="gap-x-3 gap-y-2.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        IP address
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex gap-1 items-center min-w-0">
                          <span className="font-mono min-w-0 text-foreground text-xs truncate">
                            203.0.113.12
                          </span>
                          <Button type="button" tabIndex="0" aria-label="Copy IP address">
                            <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                          </Button>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        Country
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex gap-1.5 items-center min-w-0">
                          <img className="object-cover rounded-full shrink-0 size-4" alt="" width="16" height="16" loading="lazy" decoding="async" src="https://flagcdn.com/vn.svg" />
                          <span className="truncate">
                            Vietnam
                          </span>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        Network
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="min-w-0 truncate">
                          <span className="font-mono text-xs">
                            AS64498
                          </span>
                          Stackpoint Hosting
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        IP lists
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="text-muted-foreground">
                          None
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        Bot score
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="flex gap-2 items-center tabular-nums">
                          2
                          <span className="text-muted-foreground">
                            likely automated
                          </span>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        Rate
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="tabular-nums">
                          98 requests a minute
                        </span>
                      </dd>
                    </div>
                  </dl>
                </section>
                <section className="flex flex-col gap-3 min-w-0">
                  <h3 className="font-medium text-muted-foreground text-xs">
                    Request
                  </h3>
                  <dl className="gap-x-3 gap-y-2.5 grid grid-cols-[7rem_minmax(0,1fr)] text-sm">
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        Request
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="font-mono min-w-0 text-xs wrap-break-word">
                          GET /.env
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        Service
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                          <span className="flex shrink-0 text-muted-foreground">
                            <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                              <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                              <circle cx="12" cy="12" r="2"></circle>
                              <path d="M6 12h.01M18 12h.01"></path>
                            </svg>
                          </span>
                          <span className="truncate">
                            payments-api
                          </span>
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        User agent
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="font-mono min-w-0 text-xs wrap-break-word">
                          curl/8.7.1
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        Signals
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="text-muted-foreground">
                          None
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        Response
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="tabular-nums">
                          403 Forbidden
                        </span>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="text-muted-foreground">
                        Time
                      </dt>
                      <dd className="flex items-center leading-5 min-w-0">
                        <span className="tabular-nums">
                          Sep 29, 2026, 14:19:37 UTC
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
      <div className="bg-muted border-t flex flex-wrap gap-2 items-center px-5 py-3 shrink-0">
        <Button type="button" tabIndex="0">
          <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M4.929 4.929 19.07 19.071"></path>
          </svg>
          Block IP
        </Button>
        <Button type="button" tabIndex="0">
          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
          Allow IP
        </Button>
        <Button className="ms-auto" type="button" tabIndex="0">
          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          Create Rule
        </Button>
      </div>
    </SheetContent>
    </Sheet>
  </>
  )
}
