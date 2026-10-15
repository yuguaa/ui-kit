import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import { Label } from "@/registry/bases/base/ui/label"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Dataset preview"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-rows-3 lucide-rows3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Rows3Icon" tabler="IconLayoutRows" hugeicons="LayoutTable01Icon" phosphor="RowsIcon" remixicon="RiLayoutRowLine" data-icon="inline-start" aria-hidden="true">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M21 9H3"></path>
            <path d="M21 15H3"></path>
          </svg>
          {"Preview Data"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(40rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_5_" aria-describedby="base-ui-_r_6_" style={{"--nested-dialogs": "0"}}>
      <div className="border-b flex flex-col px-5 py-3 shrink-0">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex gap-1 items-center min-w-0">
            <span className="font-mono min-w-0 text-muted-foreground text-xs truncate">
              {"CON-102"}
            </span>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy connection ID" id="base-ui-_r_4_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
          </div>
          <div className="flex gap-1 items-center shrink-0">
            <Button type="button" tabIndex="0" aria-label="Close">
              <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </Button>
          </div>
        </div>
        <div className="flex gap-3 items-center min-w-0 mt-1.5">
          <IconTile variant="outline" size="default" aria-hidden="true">
            <svg aria-hidden="true" fill="none" viewBox="100 100 312 312">
              <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
            </svg>
          </IconTile>
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex flex-wrap gap-2 items-center min-w-0">
              <SheetTitle className="min-w-0 truncate" id="base-ui-_r_5_">
                {"stripe-live"}
              </SheetTitle>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                {"Healthy"}
              </Badge>
            </div>
            <SheetDescription id="base-ui-_r_6_">
              <span className="flex flex-wrap gap-1.5 items-center min-w-0">
                <span>
                  {"Stripe REST API"}
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                  {"Production"}
                </Badge>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span className="tabular-nums">
                  {"4 of 6 datasets linked"}
                </span>
              </span>
            </SheetDescription>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
        <div className="flex flex-col gap-3 px-5 py-4">
          <Select>
          <SelectTrigger className="w-full" type="button" tabIndex="0" id="base-ui-_r_7_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Dataset to preview">
            <SelectValue>
              <span className="flex gap-2 items-center min-w-0">
                <span className="flex shrink-0 text-muted-foreground">
                  <svg className="lucide lucide-file-braces-corner" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileJson2Icon" tabler="IconJson" hugeicons="FileBracesCornerIcon" phosphor="FileJsIcon" remixicon="RiBracesLine" aria-hidden="true">
                    <path d="M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1"></path>
                    <path d="M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1"></path>
                  </svg>
                </span>
                <span className="font-mono truncate">
                  {"charges"}
                </span>
              </span>
            </SelectValue>
            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
              {"▼"}
            </svg>
          </SelectTrigger>
          </Select>
          <input id="base-ui-_r_7_-hidden-input" tabIndex="-1" aria-hidden="true" value="CON-102:charges" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          <Frame className="min-w-0" spacing="default">
            <div className="flex flex-wrap gap-2 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <ToggleGroup data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Preview as" style={{"--gap": "0"}}>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="0">
                  <svg className="lucide lucide-rows-3 lucide-rows3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Rows3Icon" tabler="IconLayoutRows" hugeicons="LayoutTable01Icon" phosphor="RowsIcon" remixicon="RiLayoutRowLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M21 9H3"></path>
                    <path d="M21 15H3"></path>
                  </svg>
                  {"Rows"}
                </ToggleGroupItem>
                <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                  <svg className="lucide lucide-columns-3 lucide-columns3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Columns3Icon" tabler="IconColumns3" hugeicons="Layout07Icon" phosphor="ColumnsIcon" remixicon="RiLayoutColumnLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 3v18"></path>
                    <path d="M15 3v18"></path>
                  </svg>
                  {"Schema"}
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="flex gap-3 items-center">
                <div className="flex gap-2 items-center">
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_c_" aria-checked="true" size="sm" aria-labelledby="sheet-24-mask-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="sheet-24-mask" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="text-xs" htmlFor="sheet-24-mask" id="sheet-24-mask-label">
                    {"Mask PII"}
                  </Label>
                </div>
                <div className="flex gap-1 items-center">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Copy preview query" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                      <path d="m16 18 6-6-6-6"></path>
                      <path d="m8 6-6 6 6 6"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Draw a new sample" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-refresh-cw" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RefreshCwIcon" tabler="IconRefresh" hugeicons="RefreshIcon" phosphor="ArrowsClockwiseIcon" remixicon="RiRefreshLine" aria-hidden="true">
                      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                      <path d="M8 16H3v5"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
              </div>
            </div>
            <FramePanel className="p-0">
              <div className="cn-table-container">
                <Table className="text-xs">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="first:ps-4 last:pe-4 ps-3">
                        <span className="flex font-medium font-mono gap-1.5 items-center">
                          <span className="[&_svg:not([class*=size-])]:size-3.5 flex shrink-0 text-muted-foreground" title="ID">
                            <svg className="lucide lucide-key-round" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KeyRoundIcon" tabler="IconKey" hugeicons="Key02Icon" phosphor="KeyIcon" remixicon="RiKey2Line" aria-hidden="true">
                              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </svg>
                          </span>
                          {"id"}
                        </span>
                      </TableHead>
                      <TableHead className="first:ps-4 last:pe-4 ps-3">
                        <span className="flex font-medium font-mono gap-1.5 items-center">
                          <span className="[&_svg:not([class*=size-])]:size-3.5 flex shrink-0 text-muted-foreground" title="Money">
                            <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                              <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                              <circle cx="12" cy="12" r="2"></circle>
                              <path d="M6 12h.01M18 12h.01"></path>
                            </svg>
                          </span>
                          {"amount"}
                        </span>
                      </TableHead>
                      <TableHead className="first:ps-4 last:pe-4 ps-3">
                        <span className="flex font-medium font-mono gap-1.5 items-center">
                          <span className="[&_svg:not([class*=size-])]:size-3.5 flex shrink-0 text-muted-foreground" title="Enum">
                            <svg className="lucide lucide-list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListIcon" tabler="IconList" hugeicons="LeftToRightListBulletIcon" phosphor="ListBulletsIcon" remixicon="RiListCheck" aria-hidden="true">
                              <path d="M3 5h.01"></path>
                              <path d="M3 12h.01"></path>
                              <path d="M3 19h.01"></path>
                              <path d="M8 5h13"></path>
                              <path d="M8 12h13"></path>
                              <path d="M8 19h13"></path>
                            </svg>
                          </span>
                          {"currency"}
                        </span>
                      </TableHead>
                      <TableHead className="first:ps-4 last:pe-4 ps-3">
                        <span className="flex font-medium font-mono gap-1.5 items-center">
                          <span className="[&_svg:not([class*=size-])]:size-3.5 flex shrink-0 text-muted-foreground" title="Enum">
                            <svg className="lucide lucide-list" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListIcon" tabler="IconList" hugeicons="LeftToRightListBulletIcon" phosphor="ListBulletsIcon" remixicon="RiListCheck" aria-hidden="true">
                              <path d="M3 5h.01"></path>
                              <path d="M3 12h.01"></path>
                              <path d="M3 19h.01"></path>
                              <path d="M8 5h13"></path>
                              <path d="M8 12h13"></path>
                              <path d="M8 19h13"></path>
                            </svg>
                          </span>
                          {"status"}
                        </span>
                      </TableHead>
                      <TableHead className="first:ps-4 last:pe-4 ps-3">
                        <span className="flex font-medium font-mono gap-1.5 items-center">
                          <span className="[&_svg:not([class*=size-])]:size-3.5 flex shrink-0 text-muted-foreground" title="Text">
                            <svg className="lucide lucide-type" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TypeIcon" tabler="IconLetterT" hugeicons="TextIcon" phosphor="TextTIcon" remixicon="RiText" aria-hidden="true">
                              <path d="M12 4v16"></path>
                              <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path>
                              <path d="M9 20h6"></path>
                            </svg>
                          </span>
                          {"receipt_email"}
                          <span className="[&_svg:not([class*=size-])]:size-3 flex text-muted-foreground">
                            <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                          </span>
                        </span>
                      </TableHead>
                      <TableHead className="first:ps-4 last:pe-4 ps-3">
                        <span className="flex font-medium font-mono gap-1.5 items-center">
                          <span className="[&_svg:not([class*=size-])]:size-3.5 flex shrink-0 text-muted-foreground" title="Timestamp">
                            <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                              <path d="M16 14v2.2l1.6 1"></path>
                              <path d="M16 2v4"></path>
                              <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                              <path d="M3 10h5"></path>
                              <path d="M8 2v4"></path>
                              <circle cx="16" cy="16" r="6"></circle>
                            </svg>
                          </span>
                          {"created"}
                        </span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"ch_Ekbqd9MUMk"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums text-right whitespace-nowrap">
                        <span>
                          {"635.92 EUR"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"eur"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"succeeded"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span className="[&_svg:not([class*=size-])]:size-3 gap-1 inline-flex items-center text-muted-foreground">
                          <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          {"l•••••@example.org"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"2026-09-29 14:19:58"}
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"ch_dnfxiEKXkQ"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums text-right whitespace-nowrap">
                        <span>
                          {"7,726.39 GBP"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"gbp"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"pending"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span className="[&_svg:not([class*=size-])]:size-3 gap-1 inline-flex items-center text-muted-foreground">
                          <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          {"h•••••@example.org"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"2026-09-29 14:19:42"}
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"ch_yenN4DnMcC"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums text-right whitespace-nowrap">
                        <span>
                          {"19,371.04 EUR"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"eur"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"succeeded"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span className="[&_svg:not([class*=size-])]:size-3 gap-1 inline-flex items-center text-muted-foreground">
                          <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          {"l•••••@example.org"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"2026-09-29 14:19:24"}
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"ch_kDe5FJTF6X"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums text-right whitespace-nowrap">
                        <span>
                          {"17,572.91 USD"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"usd"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"succeeded"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span className="[&_svg:not([class*=size-])]:size-3 gap-1 inline-flex items-center text-muted-foreground">
                          <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          {"j•••••@example.com"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"2026-09-29 14:19:08"}
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"ch_Wtkg3HNrAi"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums text-right whitespace-nowrap">
                        <span>
                          {"4,144.14 USD"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"usd"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"failed"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span className="[&_svg:not([class*=size-])]:size-3 gap-1 inline-flex items-center text-muted-foreground">
                          <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          {"j•••••@example.com"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"2026-09-29 14:19:00"}
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"ch_nGfxSy6Hru"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums text-right whitespace-nowrap">
                        <span>
                          {"16,189.68 EUR"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"eur"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"succeeded"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span className="[&_svg:not([class*=size-])]:size-3 gap-1 inline-flex items-center text-muted-foreground">
                          <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          {"l•••••@example.org"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"2026-09-29 14:18:42"}
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"ch_w62BykePVJ"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums text-right whitespace-nowrap">
                        <span>
                          {"16,850.16 EUR"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"eur"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"succeeded"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span className="[&_svg:not([class*=size-])]:size-3 gap-1 inline-flex items-center text-muted-foreground">
                          <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          {"r•••••@example.net"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"2026-09-29 14:18:28"}
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"ch_bJAN7bUA3u"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums text-right whitespace-nowrap">
                        <span>
                          {"13,499.09 GBP"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"gbp"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"succeeded"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span className="[&_svg:not([class*=size-])]:size-3 gap-1 inline-flex items-center text-muted-foreground">
                          <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          {"a•••••@example.com"}
                        </span>
                      </TableCell>
                      <TableCell className="first:ps-4 font-mono last:pe-4 ps-3 tabular-nums whitespace-nowrap">
                        <span>
                          {"2026-09-29 14:18:13"}
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </FramePanel>
            <footer className="flex flex-row flex-wrap gap-(--frame-panel-footer-gap) gap-x-2 gap-y-1 items-center px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <p className="tabular-nums text-muted-foreground text-xs" aria-live="polite">
                {"8 of 7,120,554 rows, sampled 14:20 UTC"}
              </p>
            </footer>
          </Frame>
        </div>
      </div>
    </SheetContent>
    </Sheet>
  </>
  )
}
