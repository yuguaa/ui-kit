import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import { DataGrid } from "@/registry-neui/bases/base/neui/data-grid/data-grid"
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
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="flex items-start justify-center min-h-svh mx-auto p-8 pt-12 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Pricing plan editor data grid with per-row edit mode
      </h1>
      <section className="flex flex-col lg:px-8 max-w-7xl px-4 py-8 sm:px-6 w-full">
        <Frame spacing="default">
          <header className="flex flex-col gap-2 items-start lg:flex-row lg:items-center lg:justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="flex flex-col min-w-0">
              <div className="font-semibold text-base text-foreground tracking-tight">
                Plans
              </div>
              <div className="text-muted-foreground text-sm">
                Edit one plan at a time.
              </div>
            </div>
            <div className="flex gap-1.5 items-center">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_4_" aria-expanded="false" extracted="1">
                <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Visibility
              </DropdownMenuTrigger>
              </DropdownMenu>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                Add plan
              </Button>
            </div>
          </header>
          <FramePanel className="p-0">
            <DataGrid>
              <div className="relative">
                <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                  <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_6_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                    <div role="presentation" style={{minWidth: "fit-content"}}>
                      <DataGridTableViewport>
                        <DataGridTable>
                          <colgroup>
                            <col style={{width: "200px"}} />
                            <col style={{width: "140px"}} />
                            <col style={{width: "128px"}} />
                            <col style={{width: "96px"}} />
                            <col style={{width: "110px"}} />
                            <col style={{width: "138px"}} />
                            <col style={{width: "112px"}} />
                            <col style={{width: "120px"}} />
                          </colgroup>
                          <thead>
                            <tr className="[&>th]:border-b bg-transparent">
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-10 last:pe-4 px-3 relative rtl:text-right sm:first:ps-5 sm:last:pe-5 text-foreground text-left" scope="col" data-col-id="plan" data-header-id="plan" data-header-depth="0" style={{width: "200px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  Plan
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="audience" data-header-id="audience" data-header-depth="0" style={{width: "140px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  Audience
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="price" data-header-id="price" data-header-depth="0" style={{width: "128px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                  Price
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="seats" data-header-id="seats" data-header-depth="0" style={{width: "96px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                  Seats
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left text-right!" scope="col" data-col-id="trial" data-header-id="trial" data-header-depth="0" style={{width: "110px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-end leading-[calc(1.125/0.8125)] text-[0.8125rem] text-right text-secondary-foreground/80 w-full">
                                  Trial
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="visibility" data-header-id="visibility" data-header-depth="0" style={{width: "138px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-secondary-foreground/80">
                                  Visibility
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-10 px-3 relative rtl:text-right text-center! text-foreground text-left" scope="col" data-col-id="featured" data-header-id="featured" data-header-depth="0" style={{width: "112px"}}>
                                <div className="[&_svg]:opacity-60 [&_svg]:size-3.5 font-normal gap-1.5 h-full inline-flex items-center justify-center leading-[calc(1.125/0.8125)] text-[0.8125rem] text-center text-secondary-foreground/80 w-full">
                                  Featured
                                </div>
                              </th>
                              <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-10 last:pe-4 px-3 relative rtl:text-right sm:first:ps-5 sm:last:pe-5 text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "120px"}}></th>
                            </tr>
                          </thead>
                          <DataGridTableBody>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="plan-free">
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="relative">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      Free
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      plan_free
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Individuals
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="flex gap-1 items-baseline justify-end">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $0
                                  </span>
                                  <span className="text-muted-foreground text-xs">
                                    /mo
                                  </span>
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="block tabular-nums text-foreground text-right text-sm">
                                  1
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="block tabular-nums text-muted-foreground text-right text-sm">
                                  No trial
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  Public
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <span className="text-muted-foreground text-sm">
                                    Off
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex gap-1 items-center justify-end">
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Edit" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Duplicate" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-destructive inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Delete" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                      <path d="M10 11v6"></path>
                                      <path d="M14 11v6"></path>
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                      <path d="M3 6h18"></path>
                                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="plan-starter">
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="relative">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      Starter
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      plan_starter
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-sky-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Individuals
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="flex gap-1 items-baseline justify-end">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $12
                                  </span>
                                  <span className="text-muted-foreground text-xs">
                                    /mo
                                  </span>
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="block tabular-nums text-foreground text-right text-sm">
                                  3
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="block tabular-nums text-foreground text-right text-sm">
                                  14-day
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  Public
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <span className="text-muted-foreground text-sm">
                                    Off
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex gap-1 items-center justify-end">
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Edit" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Duplicate" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-destructive inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Delete" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                      <path d="M10 11v6"></path>
                                      <path d="M14 11v6"></path>
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                      <path d="M3 6h18"></path>
                                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="plan-pro">
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="relative">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      Pro
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      plan_pro
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-violet-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Teams
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="flex gap-1 items-baseline justify-end">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $29
                                  </span>
                                  <span className="text-muted-foreground text-xs">
                                    /mo
                                  </span>
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="block tabular-nums text-foreground text-right text-sm">
                                  10
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="block tabular-nums text-foreground text-right text-sm">
                                  14-day
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  Public
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                                    Featured
                                  </Badge>
                                </div>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex gap-1 items-center justify-end">
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Edit" id="base-ui-_r_m_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Duplicate" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-destructive inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Delete" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                      <path d="M10 11v6"></path>
                                      <path d="M14 11v6"></path>
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                      <path d="M3 6h18"></path>
                                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="plan-business">
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="relative">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      Business
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      plan_business
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-violet-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Teams
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="flex gap-1 items-baseline justify-end">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $79
                                  </span>
                                  <span className="text-muted-foreground text-xs">
                                    /mo
                                  </span>
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="block tabular-nums text-foreground text-right text-sm">
                                  25
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="block tabular-nums text-foreground text-right text-sm">
                                  30-day
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  Public
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <span className="text-muted-foreground text-sm">
                                    Off
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex gap-1 items-center justify-end">
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Edit" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Duplicate" id="base-ui-_r_v_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-destructive inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Delete" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                      <path d="M10 11v6"></path>
                                      <path d="M14 11v6"></path>
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                      <path d="M3 6h18"></path>
                                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                            </tr>
                            <tr className="[&:not(:last-child)>td]:border-b [&>td]:h-14 data-[state=selected]:bg-muted/50 hover:bg-muted/40" data-row-id="plan-enterprise">
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="relative">
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-medium text-foreground text-sm truncate">
                                      Enterprise
                                    </span>
                                    <span className="tabular-nums text-muted-foreground text-xs truncate">
                                      plan_enterprise
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                  <span className="bg-amber-500 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                                  Companies
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="flex gap-1 items-baseline justify-end">
                                  <span className="tabular-nums text-foreground text-sm">
                                    $299
                                  </span>
                                  <span className="text-muted-foreground text-xs">
                                    /mo
                                  </span>
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="block tabular-nums text-foreground text-right text-sm">
                                  100
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <span className="block tabular-nums text-foreground text-right text-sm">
                                  30-day
                                </span>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                  Private
                                </Badge>
                              </td>
                              <td className="align-middle px-3 py-2">
                                <div className="flex justify-center">
                                  <span className="text-muted-foreground text-sm">
                                    Off
                                  </span>
                                </div>
                              </td>
                              <td className="align-middle first:ps-4 last:pe-4 px-3 py-2 sm:first:ps-5 sm:last:pe-5">
                                <div className="flex gap-1 items-center justify-end">
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Edit" id="base-ui-_r_14_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Duplicate" id="base-ui-_r_16_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                  <Tooltip>
                                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-destructive inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Delete" id="base-ui-_r_18_" baseUiTooltipTrigger="">
                                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                                      <path d="M10 11v6"></path>
                                      <path d="M14 11v6"></path>
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                      <path d="M3 6h18"></path>
                                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </div>
                              </td>
                            </tr>
                          </DataGridTableBody>
                        </DataGridTable>
                      </DataGridTableViewport>
                    </div>
                  </div>
                </DataGridScrollArea>
              </div>
            </DataGrid>
          </FramePanel>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <span className="flex gap-1.5 items-center text-muted-foreground text-xs">
              <span>
                5 plans
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                4 public
              </span>
            </span>
          </footer>
        </Frame>
      </section>
    </main>
  )
}
