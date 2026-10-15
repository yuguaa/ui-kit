import { DataGridPagination } from "@/registry-neui/bases/base/neui/data-grid/data-grid-pagination"
import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableFillBodyCell,
  DataGridTableFillHeadCell,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <Frame className="max-w-6xl w-full">
        <header className="flex flex-row gap-(--frame-panel-header-gap) items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-2.5!">
          <div className="space-y-px">
            <div className="font-semibold text-sm">
              {"API Integrations"}
            </div>
            <div className="text-muted-foreground text-sm">
              {"Oversee endpoints, key rotation, and traffic availability."}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex gap-2 items-center">
              <span className="hidden md:inline text-muted-foreground text-sm">
                {"Pause all"}
              </span>
              <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1_" aria-checked="false" size="default" aria-label="Pause all integrations">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
              </Switch>
              <input id="base-ui-_r_2_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
            <Button type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-briefcase-business" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BriefcaseBusinessIcon" tabler="IconBriefcase" hugeicons="Briefcase01Icon" phosphor="BriefcaseIcon" remixicon="RiBriefcaseLine" aria-hidden="true">
                <path d="M12 12h.01"></path>
                <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
              </svg>
              <span className="hidden md:inline">
                {"Positions"}
              </span>
            </Button>
          </div>
        </header>
        <FramePanel className="p-0!">
          <div className="relative">
            <DataGridProvider>
            <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
              <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_4_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                <div role="presentation" style={{minWidth: "fit-content"}}>
                  <DataGridProvider>
                  <DataGridTableViewport style={{width: "calc(1098px + var(--data-grid-fill-size, 0px))", "--data-grid-fill-size": "44px", "--data-grid-fill": "44"}}>
                    <DataGridProvider>
                    <DataGridTable style={{"--header-select-size": "38", "--col-select-size": "38", "--header-name-size": "450", "--col-name-size": "450", "--header-apiKey-size": "300", "--col-apiKey-size": "300", "--header-dailyCalls-size": "140", "--col-dailyCalls-size": "140", "--header-enabled-size": "110", "--col-enabled-size": "110", "--header-actions-size": "60", "--col-actions-size": "60", width: "calc(1098px + var(--data-grid-fill-size, 0px))"}}>
                      <colgroup>
                        <col style={{width: "calc(var(--col-select-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-name-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-apiKey-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-dailyCalls-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-enabled-size) * 1px)"}} />
                        <col style={{width: "calc(var(--col-actions-size) * 1px)"}} />
                        <col style={{width: "var(--data-grid-fill-size, 0px)"}} />
                      </colgroup>
                      <thead className="backdrop-blur-xs bg-background/90 sticky top-0 z-40">
                        <tr className="[&>th]:border-b bg-transparent">
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 ps-4! px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "calc(var(--header-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_5_" aria-checked="false" aria-label="Select all"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "calc(var(--header-name-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
                                {"Integration"}
                                <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                  <path d="m5 12 7-7 7 7"></path>
                                  <path d="M12 19V5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="apiKey" data-header-id="apiKey" data-header-depth="0" style={{width: "calc(var(--header-apiKey-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_g_" aria-expanded="false">
                                {"API Key"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="dailyCalls" data-header-id="dailyCalls" data-header-depth="0" style={{width: "calc(var(--header-dailyCalls-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_l_" aria-expanded="false">
                                {"Daily Calls"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 overflow-visible px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="enabled" data-header-id="enabled" data-header-depth="0" style={{width: "calc(var(--header-enabled-size) * 1px)"}}>
                            <div className="-ms-2 flex gap-1.5 h-full items-center justify-between">
                              <DropdownMenu>
                              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost data-[state=open]:bg-secondary data-[state=open]:text-foreground disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-6 hover:bg-secondary hover:text-foreground inline-flex items-center justify-center outline-none px-2 select-none shrink-0 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_q_" aria-expanded="false">
                                {"Status"}
                                <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </DropdownMenuTrigger>
                              </DropdownMenu>
                            </div>
                            <span className="-end-2 absolute before:absolute before:bg-border before:end-2 before:inset-y-0 before:w-px cursor-col-resize flex h-full justify-center select-none top-0 touch-none w-5 z-10"></span>
                          </th>
                          <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "calc(var(--header-actions-size) * 1px)"}}></th>
                          <DataGridTableFillHeadCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillHeadCell>
                        </tr>
                      </thead>
                      <DataGridProvider>
                      <DataGridTableBody>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="ai-summarizer">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_s_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-9" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 296 298" fill="none">
                                    <mask id="gemini-a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
                                      <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"></path>
                                    </mask>
                                    <g mask="url(#gemini-a)">
                                      <g filter="url(#gemini-b)">
                                        <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"></ellipse>
                                      </g>
                                      <g filter="url(#gemini-c)">
                                        <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                      </g>
                                      <g filter="url(#gemini-d)">
                                        <ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                      </g>
                                      <g filter="url(#gemini-e)">
                                        <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"></path>
                                      </g>
                                      <g filter="url(#gemini-f)">
                                        <path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"></path>
                                      </g>
                                      <g filter="url(#gemini-g)">
                                        <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"></path>
                                      </g>
                                      <g filter="url(#gemini-h)">
                                        <path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"></path>
                                      </g>
                                    </g>
                                    <defs>
                                      <filter id="gemini-b" width="464" height="390" x="-69" y="-46" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="18"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-c" width="265" height="273" x="-99" y="6" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-d" width="265" height="273" x="-113" y="12" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-e" width="299.5" height="329" x="-41.5" y="-130" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-f" width="299.5" height="329" x="-45" y="-153" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-g" width="299.5" height="329" x="-41" y="91" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-h" width="299.5" height="329" x="-39" y="132" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                    </defs>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"AI Summarizer"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Gemini · Meeting transcript distillation and action extraction"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-apiKey-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Copy API key" title="gem_live_r1m5q8v3p9x7n2c4">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 max-w-full min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="font-mono min-w-0 tabular-nums truncate">
                                  {"gem_live_r1m5q8v3p9x7n2c4"}
                                </span>
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Badge>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dailyCalls-size) * 1px)"}}>
                            <span className="tabular-nums text-sm">
                              {"4,100"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_v_" aria-checked="false" size="default" aria-label="Toggle AI Summarizer">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="base-ui-_r_10_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Edit AI Summarizer">
                              <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </svg>
                            </Button>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="async-reviews">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_12_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-9" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                    <path fill="#625DF5" d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Async Reviews"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Loom · Code review recordings and feedback collection"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-apiKey-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Copy API key" title="lom_live_x5n2m8q4v1r9p7c3">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 max-w-full min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="font-mono min-w-0 tabular-nums truncate">
                                  {"lom_live_x5n2m8q4v1r9p7c3"}
                                </span>
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Badge>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dailyCalls-size) * 1px)"}}>
                            <span className="tabular-nums text-sm">
                              {"2,900"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_15_" aria-checked="false" size="default" aria-label="Toggle Async Reviews">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="base-ui-_r_16_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Edit Async Reviews">
                              <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </svg>
                            </Button>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="community-sync">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_18_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-9" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                                    <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Community Sync"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Discord · Community reports and moderation escalations"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-apiKey-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Copy API key" title="dsc_live_m3q9v2k7r5n1x8c4">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 max-w-full min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="font-mono min-w-0 tabular-nums truncate">
                                  {"dsc_live_m3q9v2k7r5n1x8c4"}
                                </span>
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Badge>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dailyCalls-size) * 1px)"}}>
                            <span className="tabular-nums text-sm">
                              {"6,400"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1b_" aria-checked="false" size="default" aria-label="Toggle Community Sync">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="base-ui-_r_1c_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Edit Community Sync">
                              <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </svg>
                            </Button>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="content-gen">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1e_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-9" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 296 298" fill="none">
                                    <mask id="gemini-a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
                                      <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"></path>
                                    </mask>
                                    <g mask="url(#gemini-a)">
                                      <g filter="url(#gemini-b)">
                                        <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"></ellipse>
                                      </g>
                                      <g filter="url(#gemini-c)">
                                        <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                      </g>
                                      <g filter="url(#gemini-d)">
                                        <ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                      </g>
                                      <g filter="url(#gemini-e)">
                                        <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"></path>
                                      </g>
                                      <g filter="url(#gemini-f)">
                                        <path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"></path>
                                      </g>
                                      <g filter="url(#gemini-g)">
                                        <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"></path>
                                      </g>
                                      <g filter="url(#gemini-h)">
                                        <path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"></path>
                                      </g>
                                    </g>
                                    <defs>
                                      <filter id="gemini-b" width="464" height="390" x="-69" y="-46" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="18"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-c" width="265" height="273" x="-99" y="6" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-d" width="265" height="273" x="-113" y="12" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-e" width="299.5" height="329" x="-41.5" y="-130" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-f" width="299.5" height="329" x="-45" y="-153" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-g" width="299.5" height="329" x="-41" y="91" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-h" width="299.5" height="329" x="-39" y="132" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                    </defs>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Content Generator"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Gemini · Draft generation and content summarization"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-apiKey-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Copy API key" title="gem_live_k4r9m2q7v1p8x3n5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 max-w-full min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="font-mono min-w-0 tabular-nums truncate">
                                  {"gem_live_k4r9m2q7v1p8x3n5"}
                                </span>
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Badge>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dailyCalls-size) * 1px)"}}>
                            <span className="tabular-nums text-sm">
                              {"8,200"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1h_" aria-checked="false" size="default" aria-label="Toggle Content Generator">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="base-ui-_r_1i_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Edit Content Generator">
                              <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </svg>
                            </Button>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="db-replication">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1k_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-9" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                                    <defs>
                                      <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                                        <stop offset="0%" stopColor="#62F755"></stop>
                                        <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                                      </lineargradient>
                                      <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                                        <stop offset="0%" stopOpacity=".9"></stop>
                                        <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                                      </lineargradient>
                                    </defs>
                                    <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                    <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                    <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                                    <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"DB Replication"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Neon · Cross-region read replica synchronization"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-apiKey-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Copy API key" title="neo_live_p7x3m1q9v4r2n8c6">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 max-w-full min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="font-mono min-w-0 tabular-nums truncate">
                                  {"neo_live_p7x3m1q9v4r2n8c6"}
                                </span>
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Badge>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dailyCalls-size) * 1px)"}}>
                            <span className="tabular-nums text-sm">
                              {"22,100"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_1n_" aria-checked="true" size="default" aria-label="Toggle DB Replication">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="base-ui-_r_1o_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Edit DB Replication">
                              <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </svg>
                            </Button>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="docs-webhook">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1q_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-9" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 19 19" fill="none">
                                    <path d="M18.367 7.28888V1.59755C18.367 0.986819 17.8715 0.5 17.2699 0.5H11.5812C10.6877 0.5 9.80295 0.677018 8.98017 1.01336C8.15738 1.35856 7.40539 1.85424 6.77724 2.49152L6.733 2.53578C5.90137 3.37664 5.30862 4.42108 5.00781 5.57174C5.54749 5.43012 6.10483 5.35931 6.6622 5.35046C8.14852 5.33276 9.60831 5.81073 10.7938 6.7047C11.8643 7.50131 12.6783 8.59885 13.1206 9.86458C13.5807 11.148 13.6337 12.5465 13.2887 13.8653C14.43 13.5644 15.4828 12.9714 16.3233 12.1393L16.3675 12.0951C16.9957 11.4667 17.4999 10.7143 17.845 9.89114C18.19 9.06797 18.3581 8.18285 18.3581 7.28888H18.367Z" fill="#18E299"></path>
                                    <path d="M4.83793 7.193C4.84674 5.44706 5.54303 3.77167 6.76814 2.51953L2.03511 7.25472C2.01749 7.27236 1.99985 7.28117 1.98222 7.29881C0.827615 8.44513 0.131342 9.97945 0.0167623 11.6019C-0.0890033 13.1186 0.307609 14.6176 1.15373 15.8698C1.23444 15.9892 1.45343 16.0285 1.57682 15.9139L4.47656 13.0216C5.38438 12.1134 5.66643 10.7642 5.23455 9.55618C4.96132 8.80666 4.82912 8.00424 4.83793 7.193Z" fill="#0C8C5E"></path>
                                    <path d="M16.341 12.0938C15.4332 12.9844 14.2962 13.6016 13.0623 13.875C11.8195 14.1483 10.5327 14.0689 9.33405 13.6457C9.33405 13.6457 9.32522 13.6457 9.31641 13.6457C8.10892 13.2136 6.76042 13.4958 5.8526 14.3952L2.95282 17.2875C2.82943 17.4109 2.84706 17.6137 2.99689 17.7107C4.24845 18.5484 5.74683 18.954 7.26281 18.8482C8.88455 18.7336 10.4093 18.037 11.5639 16.8818L11.608 16.8378L16.341 12.1026V12.0938Z" fill="#0C8C5E"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Docs Webhook"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Mintlify · Documentation deploy and page-view events"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-apiKey-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Copy API key" title="mnt_live_v2q8m5r1p9x4n7c3">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 max-w-full min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="font-mono min-w-0 tabular-nums truncate">
                                  {"mnt_live_v2q8m5r1p9x4n7c3"}
                                </span>
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Badge>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dailyCalls-size) * 1px)"}}>
                            <span className="tabular-nums text-sm">
                              {"4,300"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_1t_" aria-checked="false" size="default" aria-label="Toggle Docs Webhook">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="base-ui-_r_1u_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Edit Docs Webhook">
                              <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </svg>
                            </Button>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="edge-cache-sync">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_20_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-9" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="28 28 128 132" fill="none">
                                    <path fill="#F3B01C" d="M108.092 130.021c18.166-2.018 35.293-11.698 44.723-27.854-4.466 39.961-48.162 65.218-83.83 49.711-3.286-1.425-6.115-3.796-8.056-6.844-8.016-12.586-10.65-28.601-6.865-43.135 10.817 18.668 32.81 30.111 54.028 28.122Z"></path>
                                    <path fill="#8D2676" d="M53.401 90.174c-7.364 17.017-7.682 36.94 1.345 53.336-31.77-23.902-31.423-75.052-.388-98.715 2.87-2.187 6.282-3.485 9.86-3.683 14.713-.776 29.662 4.91 40.146 15.507-21.3.212-42.046 13.857-50.963 33.555Z"></path>
                                    <path fill="#EE342F" d="M114.637 61.855C103.89 46.87 87.069 36.668 68.639 36.358c35.625-16.17 79.446 10.047 84.217 48.807.444 3.598-.139 7.267-1.734 10.512-6.656 13.518-18.998 24.002-33.42 27.882 10.567-19.599 9.263-43.544-3.065-61.704Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Edge Cache Sync"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Convex · State snapshots for frontend refreshes"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-apiKey-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Copy API key" title="cvx_live_t1p6m9q3r7v2x4c8">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 max-w-full min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="font-mono min-w-0 tabular-nums truncate">
                                  {"cvx_live_t1p6m9q3r7v2x4c8"}
                                </span>
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Badge>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dailyCalls-size) * 1px)"}}>
                            <span className="tabular-nums text-sm">
                              {"15,400"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_23_" aria-checked="false" size="default" aria-label="Toggle Edge Cache Sync">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                            </Switch>
                            <input id="base-ui-_r_24_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Edit Edge Cache Sync">
                              <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </svg>
                            </Button>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="incident-bot">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_26_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-9" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                                    <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Incident Bot"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Discord · Automated incident threads and status page sync"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-apiKey-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Copy API key" title="dsc_live_r6n1m4q9v7p2x8c5">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 max-w-full min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="font-mono min-w-0 tabular-nums truncate">
                                  {"dsc_live_r6n1m4q9v7p2x8c5"}
                                </span>
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Badge>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dailyCalls-size) * 1px)"}}>
                            <span className="tabular-nums text-sm">
                              {"3,200"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_29_" aria-checked="true" size="default" aria-label="Toggle Incident Bot">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="base-ui-_r_2a_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Edit Incident Bot">
                              <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </svg>
                            </Button>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="invoice-relay">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2c_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-9" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                                    <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Invoice Relay"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Stripe · Automated invoice generation and delivery tracking"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-apiKey-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Copy API key" title="stp_live_v3m8q1r6p9x2n4c7">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 max-w-full min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="font-mono min-w-0 tabular-nums truncate">
                                  {"stp_live_v3m8q1r6p9x2n4c7"}
                                </span>
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Badge>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dailyCalls-size) * 1px)"}}>
                            <span className="tabular-nums text-sm">
                              {"7,800"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_2f_" aria-checked="true" size="default" aria-label="Toggle Invoice Relay">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="base-ui-_r_2g_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Edit Invoice Relay">
                              <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </svg>
                            </Button>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                        <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="meeting-webhooks">
                          <td className="align-middle ps-4! px-2 py-1.5" style={{width: "calc(var(--col-select-size) * 1px)"}}>
                            <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2i_" aria-checked="false" aria-label="Select row"></Checkbox>
                            <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-name-size) * 1px)"}}>
                            <div className="flex gap-3 items-center min-w-0">
                              <Item className="[&_svg]:size-5 border-0 p-0 size-9" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                    <defs>
                                      <lineargradient id="_r_2l_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
                                        <stop offset=".00006%" stopColor="#0845BF"></stop>
                                        <stop offset="19.11%" stopColor="#0950DE"></stop>
                                        <stop offset="38.23%" stopColor="#0B59F6"></stop>
                                        <stop offset="50%" stopColor="#0B5CFF"></stop>
                                        <stop offset="67.32%" stopColor="#0E5EFE"></stop>
                                        <stop offset="77.74%" stopColor="#1665FC"></stop>
                                        <stop offset="86.33%" stopColor="#246FF9"></stop>
                                        <stop offset="93.88%" stopColor="#387FF4"></stop>
                                        <stop offset="100%" stopColor="#4F90EE"></stop>
                                      </lineargradient>
                                    </defs>
                                    <path fill="url(#_r_2l_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                                    <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <span className="font-medium text-foreground text-sm truncate">
                                  {"Meeting Webhooks"}
                                </span>
                                <span className="text-muted-foreground text-xs truncate">
                                  {"Zoom · Recording ready and host events"}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-apiKey-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Copy API key" title="zom_live_q5n8r2m4v7c1p9d3">
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 max-w-full min-w-0 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                <span className="font-mono min-w-0 tabular-nums truncate">
                                  {"zom_live_q5n8r2m4v7c1p9d3"}
                                </span>
                                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                              </Badge>
                            </Button>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-dailyCalls-size) * 1px)"}}>
                            <span className="tabular-nums text-sm">
                              {"11,300"}
                            </span>
                          </td>
                          <td className="align-middle px-2 py-1.5 truncate" style={{width: "calc(var(--col-enabled-size) * 1px)"}}>
                            <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_2m_" aria-checked="true" size="default" aria-label="Toggle Meeting Webhooks">
                              <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                            </Switch>
                            <input id="base-ui-_r_2n_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </td>
                          <td className="align-middle px-2 py-1.5" style={{width: "calc(var(--col-actions-size) * 1px)"}}>
                            <Button type="button" tabIndex="0" aria-label="Edit Meeting Webhooks">
                              <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                              </svg>
                            </Button>
                          </td>
                          <DataGridTableFillBodyCell aria-hidden="true" style={{width: "var(--data-grid-fill-size, 0px)"}}></DataGridTableFillBodyCell>
                        </tr>
                      </DataGridTableBody>
                      </DataGridProvider>
                    </DataGridTable>
                    </DataGridProvider>
                  </DataGridTableViewport>
                  </DataGridProvider>
                </div>
              </div>
            </DataGridScrollArea>
            </DataGridProvider>
          </div>
        </FramePanel>
        <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) px-2! py-(--frame-panel-footer-py) py-2.5!">
          <DataGridProvider>
          <DataGridPagination>
            <div className="flex flex-wrap gap-x-2.5 items-center order-2 pb-2.5 sm:order-1 sm:pb-0">
              <div className="text-muted-foreground text-sm">
                {"Rows per page"}
              </div>
              <Select>
              <SelectTrigger className="min-w-16" type="button" tabIndex="0" id="base-ui-_r_2p_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Rows per page">
                <SelectValue>
                  {"10"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_2p_-hidden-input" tabIndex="-1" aria-hidden="true" value="10" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </div>
            <div className="flex flex-col gap-2.5 items-center justify-center order-1 pt-2.5 sm:flex-row sm:justify-end sm:order-2 sm:pt-0">
              <div className="order-2 sm:order-1 text-muted-foreground text-nowrap text-sm">
                {"1 - 10 of 31"}
              </div>
              <div className="flex flex-wrap gap-1 items-center justify-center order-1 sm:flex-nowrap">
                <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" disabled="" tabIndex="0" disabled>
                  <span className="sr-only">
                    {"Go to previous page"}
                  </span>
                  <svg className="lucide lucide-chevron-left size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine">
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </Button>
                <Button className="bg-accent px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-accent-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 1" aria-current="page">
                  {"1"}
                </Button>
                <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 2">
                  {"2"}
                </Button>
                <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 3">
                  {"3"}
                </Button>
                <Button className="px-1.5 style-luma:min-w-8 style-lyra:min-w-7 style-maia:min-w-8 style-mira:min-w-6 style-nova:min-w-7 style-rhea:min-w-7 style-sera:min-w-9 style-vega:min-w-8 text-muted-foreground text-sm" type="button" tabIndex="0" aria-label="Go to page 4">
                  {"4"}
                </Button>
                <Button className="p-0 rtl:rotate-180 rtl:transform text-sm" type="button" tabIndex="0">
                  <span className="sr-only">
                    {"Go to next page"}
                  </span>
                  <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </DataGridPagination>
          </DataGridProvider>
        </footer>
      </Frame>
    </div>
  )
}
