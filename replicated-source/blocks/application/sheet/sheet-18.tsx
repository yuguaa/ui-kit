import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry-neui/bases/base/neui/code-block/code-block"
import { FiltersAdvanced } from "@/registry-neui/bases/base/neui/filters/filters-advanced"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Edit firewall rule"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="sheet-18-rule-trigger" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" data-icon="inline-start" aria-hidden="true">
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
            <path d="m15 5 4 4"></path>
          </svg>
          {"Edit Rule"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(36rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_4_" aria-describedby="base-ui-_r_5_" style={{"--nested-dialogs": "0"}}>
      <div className="border-b flex flex-col gap-1 px-5 py-3.5 shrink-0">
        <div className="flex gap-2 items-center justify-between">
          <span className="flex gap-1 items-center min-w-0">
            <span className="font-mono min-w-0 text-foreground text-xs truncate">
              {"FW-1004"}
            </span>
            <Button type="button" tabIndex="0" aria-label="Copy rule ID">
              <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </Button>
          </span>
          <SheetClose className="-me-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <div className="flex flex-wrap gap-2 items-center min-w-0">
          <SheetTitle className="min-w-0 text-lg truncate" id="base-ui-_r_4_">
            {"Block scanner probes"}
          </SheetTitle>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
            <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M4.929 4.929 19.07 19.071"></path>
            </svg>
            {"Block"}
          </Badge>
        </div>
        <SheetDescription id="base-ui-_r_5_">
          <span className="flex flex-wrap gap-1.5 items-center min-w-0 tabular-nums">
            {"Priority 4 of 12"}
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            {"Updated by Sarah 6d ago"}
          </span>
        </SheetDescription>
      </div>
      <Tabs className="flex-1 flex-col gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
        <TabsList className="border-b gap-5 h-auto justify-start px-5 py-0 shrink-0 w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
          <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_6_" compositeItemActive="" aria-controls="base-ui-_r_8_">
            {"Rule"}
          </TabsTrigger>
          <TabsTrigger className="after:-bottom-px! flex-none h-full px-0 py-2" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_7_">
            {"Matches"}
          </TabsTrigger>
        </TabsList>
        <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
          <div className="flex flex-col px-5 py-5">
            <TabsContent data-orientation="horizontal" activationDirection="none" id="base-ui-_r_8_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_6_">
              <FieldGroup className="gap-6">
                <FieldGroup className="gap-4">
                  <Field role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-18-rule-name">
                      {"Name"}
                    </FieldLabel>
                    <Input id="sheet-18-rule-name" autoComplete="off" placeholder="Block card testing bursts" value="Block scanner probes"></Input>
                  </Field>
                  <Field role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-18-rule-description">
                      {"Description"}
                    </FieldLabel>
                    <Input id="sheet-18-rule-description" autoComplete="off" placeholder="What this rule protects" value="Dotfiles, CMS paths and attack tooling"></Input>
                  </Field>
                </FieldGroup>
                <FieldSet className="gap-3">
                  <FieldLegend variant="label">
                    {"When"}
                  </FieldLegend>
                  <FiltersAdvanced className="flex flex-col gap-2 min-w-0 py-(--filter-panel-pad) w-full" role="group" aria-label="Advanced filter" aria-description="4 conditions" style={{"--filter-panel-pad": "0px"}}>
                    <div className="@container/track flex flex-col gap-3 min-w-0 px-(--filter-panel-pad)">
                      <div className="data-[drop-edge=after]:after:mt-[5px] data-[drop-edge=after]:after:top-full data-[drop-edge=before]:after:bottom-full data-[drop-edge=before]:after:mb-[5px] data-dragging:opacity-60 data-drop-edge:after:absolute data-drop-edge:after:bg-primary data-drop-edge:after:end-1 data-drop-edge:after:h-0.5 data-drop-edge:after:rounded-full data-drop-edge:after:start-0 data-drop-edge:after:z-10 flex gap-1.5 group/row items-center min-w-0 relative rounded-md" role="group" aria-label="Path starts with, level 1" data-node-id="fw1004-a" data-parent-id="root" data-index="0" data-depth="1">
                        <div className="@container/cell flex grow-0 items-center justify-center me-1.5 min-w-0 shrink w-16">
                          <span className="px-1 style-sera:normal-case style-sera:tracking-normal text-center text-muted-foreground text-sm truncate w-full">
                            {"Where"}
                          </span>
                        </div>
                        <div className="flex flex-1 gap-1.5 items-center min-w-0">
                          <div className="@container/cell basis-[var(--filter-field-width,11rem)] flex grow-0 min-w-0 shrink">
                            <Popover>
                            <PopoverTrigger className="@max-[5rem]/cell:[&_span>svg]:hidden @max-[7rem]/cell:[&>svg]:hidden @max-[7rem]/cell:gap-0 [&>svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button inline-flex items-center justify-between min-w-0 outline-none select-none shrink-0 style-sera:normal-case style-sera:tracking-normal transition-all w-full whitespace-nowrap" type="button" tabIndex="0" aria-label="Path" title="Path" filterCell="field" baseUiClickTrigger="" id="base-ui-_r_d_" aria-haspopup="dialog" aria-expanded="false">
                              <span className="flex gap-1.5 items-center min-w-0 truncate">
                                <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                  <circle cx="6" cy="19" r="3"></circle>
                                  <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                  <circle cx="18" cy="5" r="3"></circle>
                                </svg>
                                <span className="truncate">
                                  <span>
                                    {"Path"}
                                  </span>
                                </span>
                              </span>
                              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </PopoverTrigger>
                            </Popover>
                          </div>
                          <div className="@container/cell basis-[var(--filter-operator-width,9rem)] flex grow-0 min-w-0 shrink">
                            <Popover>
                            <PopoverTrigger className="@max-[5rem]/cell:[&_span>svg]:hidden @max-[7rem]/cell:[&>svg]:hidden @max-[7rem]/cell:gap-0 [&>svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline data-invalid:ring-1 data-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button inline-flex items-center justify-between min-w-0 outline-none select-none shrink-0 style-sera:normal-case style-sera:tracking-normal text-muted-foreground transition-all w-full whitespace-nowrap" type="button" tabIndex="-1" title="starts with" filterCell="operator" baseUiClickTrigger="" id="base-ui-_r_f_" aria-haspopup="dialog" aria-expanded="false">
                              <span className="truncate">
                                {"starts with"}
                              </span>
                              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </PopoverTrigger>
                            </Popover>
                          </div>
                          <div className="@container/cell basis-[var(--filter-value-width,12rem)] flex grow-0 min-w-0 relative self-stretch shrink">
                            <Popover>
                            <PopoverTrigger className="@max-[5rem]/cell:[&_span>svg]:hidden @max-[7rem]/cell:[&>svg]:hidden @max-[7rem]/cell:gap-0 [&>svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline data-invalid:ring-1 data-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button h-full inline-flex items-center justify-between min-w-0 outline-none select-none shrink-0 style-sera:normal-case style-sera:tracking-normal transition-all w-full whitespace-nowrap" type="button" tabIndex="-1" aria-label="/." title="/." filterCell="value" baseUiClickTrigger="" id="base-ui-_r_h_" aria-haspopup="dialog" aria-expanded="false">
                              <span className="flex-1 min-w-0 text-start truncate">
                                <span className="font-mono text-xs">
                                  {"/."}
                                </span>
                              </span>
                            </PopoverTrigger>
                            </Popover>
                          </div>
                        </div>
                        <div className="flex gap-0.5 items-center pe-1 shrink-0 text-muted-foreground">
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost data-[state=open]:inset-ring data-[state=open]:inset-ring-border data-popup-open:inset-ring data-popup-open:inset-ring-border disabled:opacity-50 disabled:pointer-events-none group/button hover:inset-ring hover:inset-ring-border inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-label="Path filter options" filterCell="menu" aria-haspopup="menu" id="base-ui-_r_l_" aria-expanded="false">
                            <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMoreLine">
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </div>
                      </div>
                      <div className="data-[drop-edge=after]:after:mt-[5px] data-[drop-edge=after]:after:top-full data-[drop-edge=before]:after:bottom-full data-[drop-edge=before]:after:mb-[5px] data-dragging:opacity-60 data-drop-edge:after:absolute data-drop-edge:after:bg-primary data-drop-edge:after:end-1 data-drop-edge:after:h-0.5 data-drop-edge:after:rounded-full data-drop-edge:after:start-0 data-drop-edge:after:z-10 flex gap-1.5 group/row items-center min-w-0 relative rounded-md" role="group" aria-label="Path contains, level 1" data-node-id="fw1004-b" data-parent-id="root" data-index="1" data-depth="1">
                        <div className="@container/cell flex grow-0 items-center justify-center me-1.5 min-w-0 shrink w-16">
                          <Button className="font-normal group/combinator min-w-0 px-1.5 relative style-sera:normal-case style-sera:tracking-normal w-full" type="button" tabIndex="-1" aria-label="Or, change combinator" title="Or, change combinator" filterCell="combinator">
                            <span className="truncate">
                              {"Or"}
                            </span>
                            <span className="[&_svg]:size-3 absolute end-1 group-focus-visible/combinator:opacity-60 group-hover/combinator:opacity-60 opacity-0 pointer-events-none transition-opacity" aria-hidden="true">
                              <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine">
                                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                                <path d="M21 3v5h-5"></path>
                                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                                <path d="M8 16H3v5"></path>
                              </svg>
                            </span>
                          </Button>
                        </div>
                        <div className="flex flex-1 gap-1.5 items-center min-w-0">
                          <div className="@container/cell basis-[var(--filter-field-width,11rem)] flex grow-0 min-w-0 shrink">
                            <Popover>
                            <PopoverTrigger className="@max-[5rem]/cell:[&_span>svg]:hidden @max-[7rem]/cell:[&>svg]:hidden @max-[7rem]/cell:gap-0 [&>svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button inline-flex items-center justify-between min-w-0 outline-none select-none shrink-0 style-sera:normal-case style-sera:tracking-normal transition-all w-full whitespace-nowrap" type="button" tabIndex="-1" aria-label="Path" title="Path" filterCell="field" baseUiClickTrigger="" id="base-ui-_r_o_" aria-haspopup="dialog" aria-expanded="false">
                              <span className="flex gap-1.5 items-center min-w-0 truncate">
                                <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                                  <circle cx="6" cy="19" r="3"></circle>
                                  <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                                  <circle cx="18" cy="5" r="3"></circle>
                                </svg>
                                <span className="truncate">
                                  <span>
                                    {"Path"}
                                  </span>
                                </span>
                              </span>
                              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </PopoverTrigger>
                            </Popover>
                          </div>
                          <div className="@container/cell basis-[var(--filter-operator-width,9rem)] flex grow-0 min-w-0 shrink">
                            <Popover>
                            <PopoverTrigger className="@max-[5rem]/cell:[&_span>svg]:hidden @max-[7rem]/cell:[&>svg]:hidden @max-[7rem]/cell:gap-0 [&>svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline data-invalid:ring-1 data-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button inline-flex items-center justify-between min-w-0 outline-none select-none shrink-0 style-sera:normal-case style-sera:tracking-normal text-muted-foreground transition-all w-full whitespace-nowrap" type="button" tabIndex="-1" title="contains" filterCell="operator" baseUiClickTrigger="" id="base-ui-_r_q_" aria-haspopup="dialog" aria-expanded="false">
                              <span className="truncate">
                                {"contains"}
                              </span>
                              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </PopoverTrigger>
                            </Popover>
                          </div>
                          <div className="@container/cell basis-[var(--filter-value-width,12rem)] flex grow-0 min-w-0 relative self-stretch shrink">
                            <Popover>
                            <PopoverTrigger className="@max-[5rem]/cell:[&_span>svg]:hidden @max-[7rem]/cell:[&>svg]:hidden @max-[7rem]/cell:gap-0 [&>svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline data-invalid:ring-1 data-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button h-full inline-flex items-center justify-between min-w-0 outline-none select-none shrink-0 style-sera:normal-case style-sera:tracking-normal transition-all w-full whitespace-nowrap" type="button" tabIndex="-1" aria-label="wp-" title="wp-" filterCell="value" baseUiClickTrigger="" id="base-ui-_r_s_" aria-haspopup="dialog" aria-expanded="false">
                              <span className="flex-1 min-w-0 text-start truncate">
                                <span className="font-mono text-xs">
                                  {"wp-"}
                                </span>
                              </span>
                            </PopoverTrigger>
                            </Popover>
                          </div>
                        </div>
                        <div className="flex gap-0.5 items-center pe-1 shrink-0 text-muted-foreground">
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost data-[state=open]:inset-ring data-[state=open]:inset-ring-border data-popup-open:inset-ring data-popup-open:inset-ring-border disabled:opacity-50 disabled:pointer-events-none group/button hover:inset-ring hover:inset-ring-border inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-label="Path filter options" filterCell="menu" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                            <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMoreLine">
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </div>
                      </div>
                      <div className="data-[drop-edge=after]:after:mt-[5px] data-[drop-edge=after]:after:top-full data-[drop-edge=before]:after:bottom-full data-[drop-edge=before]:after:mb-[5px] data-dragging:opacity-60 data-drop-edge:after:absolute data-drop-edge:after:bg-primary data-drop-edge:after:end-1 data-drop-edge:after:h-0.5 data-drop-edge:after:rounded-full data-drop-edge:after:start-0 data-drop-edge:after:z-10 flex gap-1.5 group/row items-center min-w-0 relative rounded-md" role="group" aria-label="User agent contains, level 1" data-node-id="fw1004-c" data-parent-id="root" data-index="2" data-depth="1">
                        <div className="@container/cell flex grow-0 items-center justify-center me-1.5 min-w-0 shrink w-16">
                          <span className="px-1 style-sera:normal-case style-sera:tracking-normal text-center text-muted-foreground text-sm truncate w-full">
                            {"Or"}
                          </span>
                        </div>
                        <div className="flex flex-1 gap-1.5 items-center min-w-0">
                          <div className="@container/cell basis-[var(--filter-field-width,11rem)] flex grow-0 min-w-0 shrink">
                            <Popover>
                            <PopoverTrigger className="@max-[5rem]/cell:[&_span>svg]:hidden @max-[7rem]/cell:[&>svg]:hidden @max-[7rem]/cell:gap-0 [&>svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button inline-flex items-center justify-between min-w-0 outline-none select-none shrink-0 style-sera:normal-case style-sera:tracking-normal transition-all w-full whitespace-nowrap" type="button" tabIndex="-1" aria-label="User agent" title="User agent" filterCell="field" baseUiClickTrigger="" id="base-ui-_r_13_" aria-haspopup="dialog" aria-expanded="false">
                              <span className="flex gap-1.5 items-center min-w-0 truncate">
                                <svg className="lucide lucide-monitor size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                                  <line x1="8" x2="16" y1="21" y2="21"></line>
                                  <line x1="12" x2="12" y1="17" y2="21"></line>
                                </svg>
                                <span className="truncate">
                                  <span>
                                    {"User agent"}
                                  </span>
                                </span>
                              </span>
                              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </PopoverTrigger>
                            </Popover>
                          </div>
                          <div className="@container/cell basis-[var(--filter-operator-width,9rem)] flex grow-0 min-w-0 shrink">
                            <Popover>
                            <PopoverTrigger className="@max-[5rem]/cell:[&_span>svg]:hidden @max-[7rem]/cell:[&>svg]:hidden @max-[7rem]/cell:gap-0 [&>svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline data-invalid:ring-1 data-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button inline-flex items-center justify-between min-w-0 outline-none select-none shrink-0 style-sera:normal-case style-sera:tracking-normal text-muted-foreground transition-all w-full whitespace-nowrap" type="button" tabIndex="-1" title="contains" filterCell="operator" baseUiClickTrigger="" id="base-ui-_r_15_" aria-haspopup="dialog" aria-expanded="false">
                              <span className="truncate">
                                {"contains"}
                              </span>
                              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </PopoverTrigger>
                            </Popover>
                          </div>
                          <div className="@container/cell basis-[var(--filter-value-width,12rem)] flex grow-0 min-w-0 relative self-stretch shrink">
                            <Input className="data-invalid:ring-1 data-invalid:ring-destructive/40 h-full" id="base-ui-_r_16_" aria-label="User agent" placeholder="python-requests" filterCell="value" tabIndex="-1" filterCellInput="" value="sqlmap"></Input>
                          </div>
                        </div>
                        <div className="flex gap-0.5 items-center pe-1 shrink-0 text-muted-foreground">
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost data-[state=open]:inset-ring data-[state=open]:inset-ring-border data-popup-open:inset-ring data-popup-open:inset-ring-border disabled:opacity-50 disabled:pointer-events-none group/button hover:inset-ring hover:inset-ring-border inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-label="User agent filter options" filterCell="menu" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                            <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMoreLine">
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </div>
                      </div>
                      <div className="data-[drop-edge=after]:after:mt-[5px] data-[drop-edge=after]:after:top-full data-[drop-edge=before]:after:bottom-full data-[drop-edge=before]:after:mb-[5px] data-dragging:opacity-60 data-drop-edge:after:absolute data-drop-edge:after:bg-primary data-drop-edge:after:end-1 data-drop-edge:after:h-0.5 data-drop-edge:after:rounded-full data-drop-edge:after:start-0 data-drop-edge:after:z-10 flex gap-1.5 group/row items-center min-w-0 relative rounded-md" role="group" aria-label="User agent contains, level 1" data-node-id="fw1004-d" data-parent-id="root" data-index="3" data-depth="1">
                        <div className="@container/cell flex grow-0 items-center justify-center me-1.5 min-w-0 shrink w-16">
                          <span className="px-1 style-sera:normal-case style-sera:tracking-normal text-center text-muted-foreground text-sm truncate w-full">
                            {"Or"}
                          </span>
                        </div>
                        <div className="flex flex-1 gap-1.5 items-center min-w-0">
                          <div className="@container/cell basis-[var(--filter-field-width,11rem)] flex grow-0 min-w-0 shrink">
                            <Popover>
                            <PopoverTrigger className="@max-[5rem]/cell:[&_span>svg]:hidden @max-[7rem]/cell:[&>svg]:hidden @max-[7rem]/cell:gap-0 [&>svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button inline-flex items-center justify-between min-w-0 outline-none select-none shrink-0 style-sera:normal-case style-sera:tracking-normal transition-all w-full whitespace-nowrap" type="button" tabIndex="-1" aria-label="User agent" title="User agent" filterCell="field" baseUiClickTrigger="" id="base-ui-_r_1d_" aria-haspopup="dialog" aria-expanded="false">
                              <span className="flex gap-1.5 items-center min-w-0 truncate">
                                <svg className="lucide lucide-monitor size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MonitorIcon" tabler="IconDeviceDesktop" hugeicons="ComputerIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                                  <rect width="20" height="14" x="2" y="3" rx="2"></rect>
                                  <line x1="8" x2="16" y1="21" y2="21"></line>
                                  <line x1="12" x2="12" y1="17" y2="21"></line>
                                </svg>
                                <span className="truncate">
                                  <span>
                                    {"User agent"}
                                  </span>
                                </span>
                              </span>
                              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </PopoverTrigger>
                            </Popover>
                          </div>
                          <div className="@container/cell basis-[var(--filter-operator-width,9rem)] flex grow-0 min-w-0 shrink">
                            <Popover>
                            <PopoverTrigger className="@max-[5rem]/cell:[&_span>svg]:hidden @max-[7rem]/cell:[&>svg]:hidden @max-[7rem]/cell:gap-0 [&>svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline data-invalid:ring-1 data-invalid:ring-destructive/40 disabled:opacity-50 disabled:pointer-events-none font-normal gap-1.5 group/button inline-flex items-center justify-between min-w-0 outline-none select-none shrink-0 style-sera:normal-case style-sera:tracking-normal text-muted-foreground transition-all w-full whitespace-nowrap" type="button" tabIndex="-1" title="contains" filterCell="operator" baseUiClickTrigger="" id="base-ui-_r_1f_" aria-haspopup="dialog" aria-expanded="false">
                              <span className="truncate">
                                {"contains"}
                              </span>
                              <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                            </PopoverTrigger>
                            </Popover>
                          </div>
                          <div className="@container/cell basis-[var(--filter-value-width,12rem)] flex grow-0 min-w-0 relative self-stretch shrink">
                            <Input className="data-invalid:ring-1 data-invalid:ring-destructive/40 h-full" id="base-ui-_r_1g_" aria-label="User agent" placeholder="python-requests" filterCell="value" tabIndex="-1" filterCellInput="" value="Nikto"></Input>
                          </div>
                        </div>
                        <div className="flex gap-0.5 items-center pe-1 shrink-0 text-muted-foreground">
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost data-[state=open]:inset-ring data-[state=open]:inset-ring-border data-popup-open:inset-ring data-popup-open:inset-ring-border disabled:opacity-50 disabled:pointer-events-none group/button hover:inset-ring hover:inset-ring-border inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="-1" aria-label="User agent filter options" filterCell="menu" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                            <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMoreLine">
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="12" cy="5" r="1"></circle>
                              <circle cx="12" cy="19" r="1"></circle>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                    <div className="-mt-3 data-drop-into:after:absolute data-drop-into:after:bg-primary data-drop-into:after:end-[calc(var(--filter-panel-pad)+4px)] data-drop-into:after:h-0.5 data-drop-into:after:rounded-full data-drop-into:after:start-(--filter-panel-pad) data-drop-into:after:top-0 flex flex-wrap gap-2 items-center pe-[calc(var(--filter-panel-pad)+4px)] pt-5 px-(--filter-panel-pad) relative" data-drop-parent="root" data-drop-index="4">
                      <Button className="font-normal" type="button" tabIndex="0">
                        <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine">
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path>
                        </svg>
                        {"Add condition"}
                      </Button>
                      <Button className="font-normal" type="button" tabIndex="0">
                        <svg className="lucide lucide-folder-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="FolderPlusIcon" tabler="IconFolderPlus" hugeicons="FolderAddIcon" phosphor="FolderPlusIcon" remixicon="RiFolderAddLine">
                          <path d="M12 10v6"></path>
                          <path d="M9 13h6"></path>
                          <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                        </svg>
                        {"Add group"}
                      </Button>
                      <Button className="hover:text-foreground ms-auto text-muted-foreground" type="button" tabIndex="0">
                        {"Clear all"}
                      </Button>
                    </div>
                    <div className="sr-only" aria-live="polite" role="status">
                      <span></span>
                    </div>
                  </FiltersAdvanced>
                  <CodeBlock className="[--code-block-bg:var(--card)] [--code-block-caret-color:var(--primary)] [--code-block-copy-inset:--spacing(2)] [--code-block-copy-top:var(--code-block-copy-inset)] [--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_8%,transparent)] [--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-error-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-expand-clearance:--spacing(9)] [--code-block-fold-width:--spacing(4.5)] [--code-block-font-size:0.8125rem] [--code-block-gutter-gap:--spacing(2.5)] [--code-block-gutter-width:--spacing(9)] [--code-block-header-height:--spacing(8)] [--code-block-highlight-bar:color-mix(in_oklch,var(--primary)_60%,transparent)] [--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_6%,transparent)] [--code-block-info-bg:color-mix(in_oklch,var(--info)_8%,transparent)] [--code-block-line-height:1.125rem] [--code-block-number-pad:var(--code-block-gutter-gap)] [--code-block-padding:--spacing(2)] [--code-block-warning-bg:color-mix(in_oklch,var(--warning)_10%,transparent)] bg-card bg-clip-padding border border-border dark:[--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_12%,transparent)] dark:[--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-error-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_12%,transparent)] dark:[--code-block-info-bg:color-mix(in_oklch,var(--info)_12%,transparent)] dark:[--code-block-warning-bg:color-mix(in_oklch,var(--warning)_14%,transparent)] data-[gutter-channel]:[--code-block-number-pad:calc(var(--code-block-gutter-gap)+var(--code-block-fold-width))] data-[has-diff]:[--code-block-gutter-gap:--spacing(4)] data-[has-header]:[--code-block-copy-top:calc(var(--code-block-header-height)+1px+var(--code-block-copy-inset))] flex flex-col group/code-block min-w-0 relative rounded-(--code-block-radius) style-luma:[--code-block-radius:var(--radius-2xl)] style-lyra:[--code-block-radius:0px] style-maia:[--code-block-radius:var(--radius-2xl)] style-mira:[--code-block-radius:var(--radius-lg)] style-nova:[--code-block-radius:var(--radius-lg)] style-rhea:[--code-block-radius:var(--radius-xl)] style-sera:[--code-block-radius:0px] style-vega:[--code-block-radius:var(--radius-lg)] text-card-foreground text-left w-full" variant="default" hasHeader="true">
                    <CodeBlockHeader className="min-h-8 px-2.5">
                      <CodeBlockTitle>
                        {"Expression"}
                      </CodeBlockTitle>
                      <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center ms-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" data-position="inline" aria-label="Copy expression">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                      </button>
                    </CodeBlockHeader>
                    <CodeBlockContent className="flex-1 min-w-0 overflow-hidden relative rounded-[inherit]">
                      <span className="sr-only" role="status" aria-live="polite"></span>
                      <div className="[scrollbar-width:thin] focus-visible:ring-[3px] focus-visible:ring-ring/50 min-w-0 outline-none overflow-auto relative rounded-[inherit]" id="_r_1m_" role="region" aria-label="text code" tabIndex="0">
                        <pre className="[&_[data-slot=code-block-token]]:text-[color:var(--cb-c,currentColor)] break-words dark:[&_[data-slot=code-block-token]]:text-[color:var(--cb-cd,currentColor)] font-mono max-w-full min-w-0 py-(--code-block-padding) text-(length:--code-block-font-size) w-full whitespace-pre-wrap" dir="ltr" data-wrap="true" style={{"--code-block-gutter-width": "calc(2ch + var(--code-block-gutter-gap) + var(--code-block-padding))", counterReset: "cb-line 0"}}>
                          <code>
                            <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="1" id="_r_1m_-L1" style={{counterReset: "cb-line 0"}}>
                              <span>
                                <span>
                                  {"http.path starts_with \"/.\" or http.path contains \"wp-\" or http.user_agent contains \"sqlmap\" or http.user_agent contains \"Nikto\""}
                                </span>
                              </span>
                            </span>
                          </code>
                        </pre>
                      </div>
                    </CodeBlockContent>
                  </CodeBlock>
                </FieldSet>
                <FieldSet className="gap-3">
                  <FieldLegend variant="label">
                    {"Then"}
                  </FieldLegend>
                  <RadioGroup className="gap-2 grid sm:grid-cols-2" role="radiogroup" aria-label="Action">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-18-action-block" id="sheet-18-action-block-label">
                      <Field className="items-start" role="group" data-orientation="horizontal">
                        <FieldContent className="gap-0.5 min-w-0">
                          <FieldLabel className="[&_svg:not([class*=size-])]:size-4 cn-field-title items-center">
                            <span className="flex text-muted-foreground">
                              <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M4.929 4.929 19.07 19.071"></path>
                              </svg>
                            </span>
                            {"Block"}
                          </FieldLabel>
                          <FieldDescription className="text-xs">
                            {"Refuse the request with a 403"}
                          </FieldDescription>
                        </FieldContent>
                        <RadioGroupItem checked="" role="radio" tabIndex="0" aria-checked="true" compositeItemActive="" id="base-ui-_r_1o_" aria-labelledby="sheet-18-action-block-label">
                          <span className="cn-radio-group-indicator" data-checked="">
                            <span className="cn-radio-group-indicator-icon"></span>
                          </span>
                        </RadioGroupItem>
                        <input id="sheet-18-action-block" tabIndex="-1" aria-hidden="true" type="radio" value="block" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                    </FieldLabel>
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-18-action-challenge" id="sheet-18-action-challenge-label">
                      <Field className="items-start" role="group" data-orientation="horizontal">
                        <FieldContent className="gap-0.5 min-w-0">
                          <FieldLabel className="[&_svg:not([class*=size-])]:size-4 cn-field-title items-center">
                            <span className="flex text-muted-foreground">
                              <svg className="lucide lucide-puzzle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PuzzleIcon" tabler="IconPuzzle" hugeicons="PuzzleIcon" phosphor="PuzzlePieceIcon" remixicon="RiPuzzleLine" aria-hidden="true">
                                <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                              </svg>
                            </span>
                            {"Challenge"}
                          </FieldLabel>
                          <FieldDescription className="text-xs">
                            {"Ask the client to prove it is human"}
                          </FieldDescription>
                        </FieldContent>
                        <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_1r_" aria-labelledby="sheet-18-action-challenge-label"></RadioGroupItem>
                        <input id="sheet-18-action-challenge" tabIndex="-1" aria-hidden="true" type="radio" value="challenge" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                    </FieldLabel>
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-18-action-allow" id="sheet-18-action-allow-label">
                      <Field className="items-start" role="group" data-orientation="horizontal">
                        <FieldContent className="gap-0.5 min-w-0">
                          <FieldLabel className="[&_svg:not([class*=size-])]:size-4 cn-field-title items-center">
                            <span className="flex text-muted-foreground">
                              <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </span>
                            {"Allow"}
                          </FieldLabel>
                          <FieldDescription className="text-xs">
                            {"Skip every later rule and protection"}
                          </FieldDescription>
                        </FieldContent>
                        <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_1u_" aria-labelledby="sheet-18-action-allow-label"></RadioGroupItem>
                        <input id="sheet-18-action-allow" tabIndex="-1" aria-hidden="true" type="radio" value="allow" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                    </FieldLabel>
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-18-action-log" id="sheet-18-action-log-label">
                      <Field className="items-start" role="group" data-orientation="horizontal">
                        <FieldContent className="gap-0.5 min-w-0">
                          <FieldLabel className="[&_svg:not([class*=size-])]:size-4 cn-field-title items-center">
                            <span className="flex text-muted-foreground">
                              <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </span>
                            {"Log"}
                          </FieldLabel>
                          <FieldDescription className="text-xs">
                            {"Record the match and keep evaluating"}
                          </FieldDescription>
                        </FieldContent>
                        <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_21_" aria-labelledby="sheet-18-action-log-label"></RadioGroupItem>
                        <input id="sheet-18-action-log" tabIndex="-1" aria-hidden="true" type="radio" value="log" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </Field>
                    </FieldLabel>
                  </RadioGroup>
                </FieldSet>
                <FieldGroup className="gap-4 grid sm:grid-cols-2">
                  <Field role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-18-rule-expiry">
                      {"Expires"}
                    </FieldLabel>
                    <Select>
                    <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-18-rule-expiry" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"Never"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_24_-hidden-input" tabIndex="-1" aria-hidden="true" value="never" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                </FieldGroup>
                <Field role="group" data-orientation="horizontal">
                  <FieldContent>
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-18-rule-enabled" id="sheet-18-rule-enabled-label">
                      {"Enabled"}
                    </FieldLabel>
                    <FieldDescription className="text-xs">
                      {"A disabled rule keeps its place but meets nothing"}
                    </FieldDescription>
                  </FieldContent>
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_27_" aria-checked="true" size="default" aria-labelledby="sheet-18-rule-enabled-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="sheet-18-rule-enabled" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </Field>
                <Frame className="w-full" spacing="default">
                  <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                    <div className="flex flex-col gap-px min-w-0">
                      <div className="font-semibold text-sm">
                        {"Recent Traffic"}
                      </div>
                      <div className="tabular-nums text-muted-foreground text-xs">
                        {"Meets 9 of the last 150 requests"}
                      </div>
                    </div>
                  </header>
                  <FramePanel className="p-0">
                    <ul className="divide-y flex flex-col" aria-label="Matching requests">
                      <li className="px-(--frame-panel-px) py-2">
                        <span className="flex gap-3 items-center min-w-0 text-xs">
                          <span className="shrink-0 tabular-nums text-muted-foreground">
                            {"14:19:37"}
                          </span>
                          <span className="font-mono shrink-0 text-foreground truncate w-28">
                            {"203.0.113.12"}
                          </span>
                          <span className="font-mono min-w-0 text-muted-foreground truncate">
                            {"GET /.env"}
                          </span>
                        </span>
                      </li>
                      <li className="px-(--frame-panel-px) py-2">
                        <span className="flex gap-3 items-center min-w-0 text-xs">
                          <span className="shrink-0 tabular-nums text-muted-foreground">
                            {"14:17:08"}
                          </span>
                          <span className="font-mono shrink-0 text-foreground truncate w-28">
                            {"192.0.2.77"}
                          </span>
                          <span className="font-mono min-w-0 text-muted-foreground truncate">
                            {"GET /wp-login.php"}
                          </span>
                        </span>
                      </li>
                      <li className="px-(--frame-panel-px) py-2">
                        <span className="flex gap-3 items-center min-w-0 text-xs">
                          <span className="shrink-0 tabular-nums text-muted-foreground">
                            {"14:14:20"}
                          </span>
                          <span className="font-mono shrink-0 text-foreground truncate w-28">
                            {"203.0.113.12"}
                          </span>
                          <span className="font-mono min-w-0 text-muted-foreground truncate">
                            {"GET /wp-login.php"}
                          </span>
                        </span>
                      </li>
                      <li className="px-(--frame-panel-px) py-2">
                        <span className="flex gap-3 items-center min-w-0 text-xs">
                          <span className="shrink-0 tabular-nums text-muted-foreground">
                            {"14:12:55"}
                          </span>
                          <span className="font-mono shrink-0 text-foreground truncate w-28">
                            {"198.51.100.199"}
                          </span>
                          <span className="font-mono min-w-0 text-muted-foreground truncate">
                            {"GET /.env"}
                          </span>
                        </span>
                      </li>
                    </ul>
                  </FramePanel>
                </Frame>
              </FieldGroup>
            </TabsContent>
          </div>
        </div>
      </Tabs>
      <div className="bg-muted border-t flex flex-wrap gap-2 items-center px-5 py-3 shrink-0">
        <Button type="button" tabIndex="0">
          <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
            <path d="M3 6h18"></path>
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
          {"Delete"}
        </Button>
        <div className="flex gap-2 items-center ms-auto">
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
            {"Cancel"}
          </SheetClose>
          <Button type="button" disabled="" tabIndex="0" disabled>
            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
            {"Save Rule"}
          </Button>
        </div>
      </div>
    </SheetContent>
    </Sheet>
  </>
  )
}
