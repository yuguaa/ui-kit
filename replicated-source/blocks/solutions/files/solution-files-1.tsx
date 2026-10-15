import { DataGridScrollArea } from "@/registry-neui/bases/base/neui/data-grid/data-grid-scroll-area"
import {
  DataGridTable,
  DataGridTableBody,
  DataGridTableViewport,
} from "@/registry-neui/bases/base/neui/data-grid/data-grid-table"
import {
  Tree,
  TreeItemLabel,
} from "@/registry-neui/bases/base/neui/tree"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/registry/bases/base/ui/context-menu"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Sheet,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="h-svh md:p-6 p-4 w-full">
      <h1 className="sr-only">
        Drive Explorer
      </h1>
      <Card className="gap-0! h-full min-h-0 overflow-hidden p-0! relative w-full" size="default">
        <CardContent className="flex flex-1 flex-col min-h-0 p-0!">
          <div className="border-b flex gap-3 items-center justify-between px-4 py-3 shrink-0">
            <div className="flex flex-col gap-0.5 min-w-0">
              <h2 className="font-semibold leading-none text-base text-foreground">
                NeUI Drive
              </h2>
              <p className="max-sm:hidden text-muted-foreground text-xs truncate">
                Shared studio files and folders
              </p>
            </div>
            <div className="flex gap-2 items-center shrink-0">
              <Button type="button" tabIndex="0" extracted="1">
                <svg className="lucide lucide-folder-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderPlusIcon" tabler="IconFolderPlus" hugeicons="FolderAddIcon" phosphor="FolderPlusIcon" remixicon="RiFolderAddLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 10v6"></path>
                  <path d="M9 13h6"></path>
                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                </svg>
                <span className="max-sm:sr-only">
                  New Folder
                </span>
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 3v12"></path>
                  <path d="m17 8-5-5-5 5"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                </svg>
                <span className="max-sm:sr-only">
                  Upload
                </span>
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col lg:flex-row min-h-0">
            <aside className="border-border border-e hidden lg:flex lg:flex-col shrink-0 w-64">
              <div className="flex flex-col h-full min-h-0 min-w-0">
                <ScrollArea className="flex-1 min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_1_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "22px"}} data-has-overflow-y="" data-overflow-y-end="">
                    <div className="p-2">
                      <Tree className="gap-0.5 w-full" role="tree" aria-label="" style={{"--tree-indent": "20px"}}>
                        <ContextMenu>
                        <ContextMenuTrigger className="block w-full">
                          <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="true" data-folder="true" data-selected="true" aria-expanded="true" role="treeitem" aria-setsize="1" aria-posinset="1" aria-selected="true" aria-label="My Drive" aria-level="1" tabIndex="0" style={{"--tree-padding": "0px"}}>
                            <TreeItemLabel className="bg-transparent py-2 w-full">
                              <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="min-w-0 truncate">
                                My Drive
                              </span>
                            </TreeItemLabel>
                          </button>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <ContextMenu>
                        <ContextMenuTrigger className="block w-full">
                          <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="true" data-selected="false" aria-expanded="true" role="treeitem" aria-setsize="4" aria-posinset="1" aria-selected="false" aria-label="Client Deliverables" aria-level="2" tabIndex="-1" style={{"--tree-padding": "20px"}}>
                            <TreeItemLabel className="bg-transparent py-2 w-full">
                              <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="min-w-0 truncate">
                                Client Deliverables
                              </span>
                            </TreeItemLabel>
                          </button>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <ContextMenu>
                        <ContextMenuTrigger className="block w-full">
                          <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="false" data-selected="false" role="treeitem" aria-setsize="2" aria-posinset="1" aria-selected="false" aria-label="Northwind Rebrand" aria-level="3" tabIndex="-1" style={{"--tree-padding": "40px"}}>
                            <TreeItemLabel className="bg-transparent py-2 w-full">
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="min-w-0 truncate">
                                Northwind Rebrand
                              </span>
                            </TreeItemLabel>
                          </button>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <ContextMenu>
                        <ContextMenuTrigger className="block w-full">
                          <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="false" data-selected="false" role="treeitem" aria-setsize="2" aria-posinset="2" aria-selected="false" aria-label="Harbor Coffee" aria-level="3" tabIndex="-1" style={{"--tree-padding": "40px"}}>
                            <TreeItemLabel className="bg-transparent py-2 w-full">
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="min-w-0 truncate">
                                Harbor Coffee
                              </span>
                            </TreeItemLabel>
                          </button>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <ContextMenu>
                        <ContextMenuTrigger className="block w-full">
                          <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="true" data-selected="false" aria-expanded="false" role="treeitem" aria-setsize="4" aria-posinset="2" aria-selected="false" aria-label="Brand Library" aria-level="2" tabIndex="-1" style={{"--tree-padding": "20px"}}>
                            <TreeItemLabel className="bg-transparent py-2 w-full">
                              <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="min-w-0 truncate">
                                Brand Library
                              </span>
                            </TreeItemLabel>
                          </button>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <ContextMenu>
                        <ContextMenuTrigger className="block w-full">
                          <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="true" data-selected="false" aria-expanded="false" role="treeitem" aria-setsize="4" aria-posinset="3" aria-selected="false" aria-label="Spring Campaign" aria-level="2" tabIndex="-1" style={{"--tree-padding": "20px"}}>
                            <TreeItemLabel className="bg-transparent py-2 w-full">
                              <svg className="in-aria-[expanded=false]:-rotate-90 lucide lucide-chevron-down size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                <path d="m6 9 6 6 6-6"></path>
                              </svg>
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="min-w-0 truncate">
                                Spring Campaign
                              </span>
                            </TreeItemLabel>
                          </button>
                        </ContextMenuTrigger>
                        </ContextMenu>
                        <ContextMenu>
                        <ContextMenuTrigger className="block w-full">
                          <button className="block data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:z-20 not-last:pb-0.5 outline-hidden ps-(--tree-padding) select-none w-full z-10" type="button" data-focus="false" data-folder="false" data-selected="false" role="treeitem" aria-setsize="4" aria-posinset="4" aria-selected="false" aria-label="Studio Operations" aria-level="2" tabIndex="-1" style={{"--tree-padding": "20px"}}>
                            <TreeItemLabel className="bg-transparent py-2 w-full">
                              <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4">
                                <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                  <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                </svg>
                              </span>
                              <span className="min-w-0 truncate">
                                Studio Operations
                              </span>
                            </TreeItemLabel>
                          </button>
                        </ContextMenuTrigger>
                        </ContextMenu>
                      </Tree>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_1_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "235.88571428571427px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                  </div>
                </ScrollArea>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="flex flex-col gap-0.5 p-2 shrink-0">
                  <Button className="font-normal gap-2 h-8 justify-start px-2 w-full" type="button" tabIndex="0" aria-pressed="false">
                    <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    Shared With Me
                  </Button>
                  <Button className="font-normal gap-2 h-8 justify-start px-2 w-full" type="button" tabIndex="0" aria-pressed="false">
                    <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    Recent
                  </Button>
                  <Button className="font-normal gap-2 h-8 justify-start px-2 w-full" type="button" tabIndex="0" aria-pressed="false">
                    <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    Starred
                  </Button>
                  <Button className="font-normal gap-2 h-8 justify-start px-2 w-full" type="button" tabIndex="0" aria-pressed="false">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                    Bin
                  </Button>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="flex flex-col gap-2 p-3 shrink-0">
                  <div className="flex gap-2 items-center justify-between">
                    <span className="font-medium text-foreground text-xs">
                      Storage
                    </span>
                    <span className="font-medium tabular-nums text-warning text-xs">
                      88% full
                    </span>
                  </div>
                  <Progress className="gap-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="88" aria-valuetext="88%" role="progressbar">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "88%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                  <p className="tabular-nums text-muted-foreground text-xs">
                    1.77 TB of 2.00 TB used
                  </p>
                  <Button className="mt-1 w-full" type="button" tabIndex="0">
                    Get More Storage
                  </Button>
                </div>
              </div>
            </aside>
            <div className="flex flex-1 flex-col min-h-0 min-w-0">
              <div className="flex flex-col gap-2 lg:flex-row lg:items-center min-w-0 px-4 py-2.5 shrink-0">
                <div className="flex gap-2 items-center lg:me-auto min-w-0">
                  <Sheet>
                  <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center lg:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open navigation" baseUiClickTrigger="" id="base-ui-_r_3_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                      <path d="M4 5h16"></path>
                      <path d="M4 12h16"></path>
                      <path d="M4 19h16"></path>
                    </svg>
                  </SheetTrigger>
                  </Sheet>
                  <Breadcrumb className="min-w-0" aria-label="breadcrumb">
                    <BreadcrumbList className="flex-nowrap">
                      <BreadcrumbItem className="min-w-0">
                        <BreadcrumbPage className="truncate" role="link" aria-disabled="true" aria-current="page">
                          My Drive
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>
                <div className="flex flex-wrap gap-2 items-center lg:flex-nowrap min-w-0">
                  <InputGroup className="lg:w-56" role="group">
                    <InputGroupAddon role="group" data-align="inline-start">
                      <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                    </InputGroupAddon>
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_4_" placeholder="Search files" aria-label="Search files" value="" />
                  </InputGroup>
                  <Select>
                  <SelectTrigger className="flex-1 lg:flex-none lg:w-[132px] w-[132px]" type="button" tabIndex="0" id="base-ui-_r_5_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Filter by type">
                    <SelectValue>
                      All types
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      ▼
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_5_-hidden-input" tabIndex="-1" aria-hidden="true" value="all" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <ToggleGroup className="shrink-0" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="default" spacing="0" aria-label="Browse view" style={{"--gap": "0"}}>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="default" spacing="0" aria-label="List view">
                      <svg className="lucide lucide-list size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListIcon" tabler="IconList" hugeicons="LeftToRightListBulletIcon" phosphor="ListBulletsIcon" remixicon="RiListCheck" aria-hidden="true">
                        <path d="M3 5h.01"></path>
                        <path d="M3 12h.01"></path>
                        <path d="M3 19h.01"></path>
                        <path d="M8 5h13"></path>
                        <path d="M8 12h13"></path>
                        <path d="M8 19h13"></path>
                      </svg>
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Grid view">
                      <svg className="lucide lucide-layout-grid size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" aria-hidden="true">
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <Popover>
                  <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_b_" aria-haspopup="dialog" aria-expanded="false">
                    <svg className="lucide lucide-settings-2 lucide-settings2 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                      <path d="M14 17H5"></path>
                      <path d="M19 7h-9"></path>
                      <circle cx="17" cy="17" r="3"></circle>
                      <circle cx="7" cy="7" r="3"></circle>
                    </svg>
                    View
                  </PopoverTrigger>
                  </Popover>
                </div>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="flex flex-1 flex-col min-h-0 relative">
                <input className="sr-only" accept="*" multiple tabIndex="-1" type="file" />
                <ScrollArea className="flex-1 min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                  <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_c_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "237px"}} data-has-overflow-y="" data-overflow-y-end="">
                    <div className="flex flex-col gap-5 pb-4 pt-3">
                      <div className="flex flex-col gap-2 px-4">
                        <p className="font-medium text-muted-foreground text-xs">
                          Suggested Folders
                        </p>
                        <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
                          <Button className="font-normal gap-2.5 h-auto justify-start! px-2.5 py-2 text-start! w-full" type="button" tabIndex="0">
                            <IconTile variant="elevated" size="default" aria-hidden="true">
                              <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                              </svg>
                            </IconTile>
                            <span className="flex flex-col gap-0.5 items-start min-w-0">
                              <span className="font-medium text-foreground text-sm truncate w-full">
                                Spring Campaign
                              </span>
                              <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                988.2 GB
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                10 items
                              </span>
                            </span>
                          </Button>
                          <Button className="font-normal gap-2.5 h-auto justify-start! px-2.5 py-2 text-start! w-full" type="button" tabIndex="0">
                            <IconTile variant="elevated" size="default" aria-hidden="true">
                              <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                              </svg>
                            </IconTile>
                            <span className="flex flex-col gap-0.5 items-start min-w-0">
                              <span className="font-medium text-foreground text-sm truncate w-full">
                                Client Deliverables
                              </span>
                              <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                482.2 GB
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                11 items
                              </span>
                            </span>
                          </Button>
                          <Button className="font-normal gap-2.5 h-auto justify-start! px-2.5 py-2 text-start! w-full" type="button" tabIndex="0">
                            <IconTile variant="elevated" size="default" aria-hidden="true">
                              <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                              </svg>
                            </IconTile>
                            <span className="flex flex-col gap-0.5 items-start min-w-0">
                              <span className="font-medium text-foreground text-sm truncate w-full">
                                Studio Operations
                              </span>
                              <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                246.0 GB
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                4 items
                              </span>
                            </span>
                          </Button>
                          <Button className="font-normal gap-2.5 h-auto justify-start! px-2.5 py-2 text-start! w-full" type="button" tabIndex="0">
                            <IconTile variant="elevated" size="default" aria-hidden="true">
                              <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                              </svg>
                            </IconTile>
                            <span className="flex flex-col gap-0.5 items-start min-w-0">
                              <span className="font-medium text-foreground text-sm truncate w-full">
                                Brand Library
                              </span>
                              <span className="flex gap-1.5 items-center tabular-nums text-muted-foreground text-xs">
                                102.2 MB
                                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                8 items
                              </span>
                            </span>
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-medium px-4 text-muted-foreground text-xs">
                          Suggested Files
                        </p>
                        <div className="relative">
                          <DataGridScrollArea role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                            <div className="base-ui-disable-scrollbar size-full" role="presentation" data-id="base-ui-_r_d_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                              <div role="presentation" style={{minWidth: "fit-content"}}>
                                <DataGridTableViewport>
                                  <DataGridTable>
                                    <colgroup>
                                      <col style={{width: "32px"}} />
                                      <col style={{width: "300px"}} />
                                      <col style={{width: "160px"}} />
                                      <col style={{width: "84px"}} />
                                      <col style={{width: "92px"}} />
                                      <col style={{width: "128px"}} />
                                      <col style={{width: "56px"}} />
                                    </colgroup>
                                    <thead>
                                      <tr className="[&>th]:border-b bg-transparent">
                                        <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="select" data-header-id="select" data-header-depth="0" style={{width: "32px"}}>
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_e_" aria-checked="false" aria-label="Select all"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </th>
                                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="ascending" data-col-id="name" data-header-id="name" data-header-depth="0" style={{width: "300px"}}>
                                          <div className="-ms-2 flex h-full items-center">
                                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                              Name
                                              <svg className="lucide lucide-arrow-up size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                                <path d="m5 12 7-7 7 7"></path>
                                                <path d="M12 19V5"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </th>
                                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="owner" data-header-id="owner" data-header-depth="0" style={{width: "160px"}}>
                                          <div className="-ms-2 flex h-full items-center">
                                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                              Owner
                                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                                <path d="m7 15 5 5 5-5"></path>
                                                <path d="m7 9 5-5 5 5"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </th>
                                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="type" data-header-id="type" data-header-depth="0" style={{width: "84px"}}>
                                          <div className="-ms-2 flex h-full items-center">
                                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                              Type
                                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                                <path d="m7 15 5 5 5-5"></path>
                                                <path d="m7 9 5-5 5 5"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </th>
                                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="size" data-header-id="size" data-header-depth="0" style={{width: "92px"}}>
                                          <div className="-ms-2 flex h-full items-center">
                                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                              Size
                                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                                <path d="m7 15 5 5 5-5"></path>
                                                <path d="m7 9 5-5 5 5"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </th>
                                        <th className="[&:has([role=checkbox])]:pe-0 align-middle font-medium h-8 px-2 relative rtl:text-right text-foreground text-left" scope="col" aria-sort="none" data-col-id="modified" data-header-id="modified" data-header-depth="0" style={{width: "128px"}}>
                                          <div className="-ms-2 flex h-full items-center">
                                            <Button className="data-[state=open]:bg-secondary data-[state=open]:text-foreground font-normal h-6 hover:bg-secondary hover:text-foreground px-2 style-luma:rounded-full style-lyra:rounded-none style-maia:rounded-full style-mira:rounded-md style-nova:rounded-lg style-rhea:rounded-full style-sera:rounded-none style-vega:rounded-md text-secondary-foreground/80" type="button" tabIndex="0">
                                              Modified
                                              <svg className="lucide lucide-chevrons-up-down mt-px size-3.25" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                                <path d="m7 15 5 5 5-5"></path>
                                                <path d="m7 9 5-5 5 5"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </th>
                                        <th className="[&:has([role=checkbox])]:pe-0 align-middle first:ps-4 font-medium h-8 last:pe-4 px-2 relative rtl:text-right text-foreground text-left" scope="col" data-col-id="actions" data-header-id="actions" data-header-depth="0" style={{width: "56px"}}></th>
                                      </tr>
                                    </thead>
                                    <DataGridTableBody>
                                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fld-brand">
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_h_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-foreground" aria-hidden="true">
                                              <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                              </svg>
                                            </span>
                                            <button className="hover:text-primary min-w-0 text-foreground text-sm text-start transition-colors truncate" type="button">
                                              <span className="font-semibold truncate">
                                                Brand Library
                                              </span>
                                            </button>
                                            <Button className="-ms-1 focus-visible:opacity-100 group-hover/row:opacity-100 opacity-0 text-muted-foreground/60 transition-opacity" type="button" tabIndex="0" aria-pressed="false" aria-label="Star Brand Library">
                                              <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="min-w-0 text-foreground text-sm truncate">
                                              Theo Park
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            Folder
                                          </Badge>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="tabular-nums text-foreground text-sm">
                                              102.2 MB
                                            </span>
                                            <span className="tabular-nums text-muted-foreground text-xs">
                                              8 items
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="text-foreground text-sm">
                                              Last week
                                            </span>
                                            <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                              <Avatar className="size-3.5" size="default">
                                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <span className="truncate">
                                                Theo Park
                                              </span>
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Brand Library" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="12" cy="5" r="1"></circle>
                                              <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </td>
                                      </tr>
                                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-root-tokens">
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_p_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-muted-foreground" aria-hidden="true">
                                              <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                                                <path d="m16 18 6-6-6-6"></path>
                                                <path d="m8 6-6 6 6 6"></path>
                                              </svg>
                                            </span>
                                            <button className="hover:text-primary min-w-0 text-foreground text-sm text-start transition-colors truncate" type="button">
                                              <span className="font-medium truncate">
                                                brand-tokens.json
                                              </span>
                                            </button>
                                            <Button className="-ms-1 focus-visible:opacity-100 group-hover/row:opacity-100 opacity-0 text-muted-foreground/60 transition-opacity" type="button" tabIndex="0" aria-pressed="false" aria-label="Star brand-tokens.json">
                                              <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="min-w-0 text-foreground text-sm truncate">
                                              Kenji Tan
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            JSON
                                          </Badge>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="tabular-nums text-foreground text-sm">
                                              64.0 KB
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="text-foreground text-sm">
                                              Last week
                                            </span>
                                            <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                              <Avatar className="size-3.5" size="default">
                                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <span className="truncate">
                                                Kenji Tan
                                              </span>
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for brand-tokens.json" aria-haspopup="menu" id="base-ui-_r_v_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="12" cy="5" r="1"></circle>
                                              <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </td>
                                      </tr>
                                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fld-client">
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_11_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-foreground" aria-hidden="true">
                                              <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                              </svg>
                                            </span>
                                            <button className="hover:text-primary min-w-0 text-foreground text-sm text-start transition-colors truncate" type="button">
                                              <span className="font-semibold truncate">
                                                Client Deliverables
                                              </span>
                                            </button>
                                            <Button className="-ms-1 transition-opacity" type="button" tabIndex="0" aria-pressed="true" aria-label="Unstar Client Deliverables">
                                              <svg className="fill-current lucide lucide-star size-3.5 text-warning" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="min-w-0 text-foreground text-sm truncate">
                                              Priya Patel
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            Folder
                                          </Badge>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="tabular-nums text-foreground text-sm">
                                              482.2 GB
                                            </span>
                                            <span className="tabular-nums text-muted-foreground text-xs">
                                              11 items
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="text-foreground text-sm">
                                              Yesterday
                                            </span>
                                            <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                              <Avatar className="size-3.5" size="default">
                                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <span className="truncate">
                                                Priya Patel
                                              </span>
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Client Deliverables" aria-haspopup="menu" id="base-ui-_r_17_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="12" cy="5" r="1"></circle>
                                              <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </td>
                                      </tr>
                                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-root-onboarding">
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_19_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-muted-foreground" aria-hidden="true">
                                              <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                <path d="M10 9H8"></path>
                                                <path d="M16 13H8"></path>
                                                <path d="M16 17H8"></path>
                                              </svg>
                                            </span>
                                            <button className="hover:text-primary min-w-0 text-foreground text-sm text-start transition-colors truncate" type="button">
                                              <span className="font-medium truncate">
                                                New Hire Onboarding.pdf
                                              </span>
                                            </button>
                                            <Button className="-ms-1 focus-visible:opacity-100 group-hover/row:opacity-100 opacity-0 text-muted-foreground/60 transition-opacity" type="button" tabIndex="0" aria-pressed="false" aria-label="Star New Hire Onboarding.pdf">
                                              <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="default">
                                              <AvatarFallback className="text-[9px]">
                                                MS
                                              </AvatarFallback>
                                            </Avatar>
                                            <span className="min-w-0 text-foreground text-sm truncate">
                                              Mira Stone
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            PDF
                                          </Badge>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="tabular-nums text-foreground text-sm">
                                              16.0 MB
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="text-foreground text-sm">
                                              3 weeks ago
                                            </span>
                                            <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                              <Avatar className="size-3.5" size="default">
                                                <AvatarFallback className="text-[8px]">
                                                  MS
                                                </AvatarFallback>
                                              </Avatar>
                                              <span className="truncate">
                                                Mira Stone
                                              </span>
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for New Hire Onboarding.pdf" aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="12" cy="5" r="1"></circle>
                                              <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </td>
                                      </tr>
                                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-root-partner">
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1h_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-muted-foreground" aria-hidden="true">
                                              <svg className="lucide lucide-archive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                                                <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                                                <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                                                <path d="M10 12h4"></path>
                                              </svg>
                                            </span>
                                            <button className="hover:text-primary min-w-0 text-foreground text-sm text-start transition-colors truncate" type="button">
                                              <span className="font-medium truncate">
                                                Partner Media Kit.zip
                                              </span>
                                            </button>
                                            <Button className="-ms-1 focus-visible:opacity-100 group-hover/row:opacity-100 opacity-0 text-muted-foreground/60 transition-opacity" type="button" tabIndex="0" aria-pressed="false" aria-label="Star Partner Media Kit.zip">
                                              <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="min-w-0 text-foreground text-sm truncate">
                                              Elijah Morgan
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            ZIP
                                          </Badge>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="tabular-nums text-foreground text-sm">
                                              28.0 GB
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="text-foreground text-sm">
                                              2 weeks ago
                                            </span>
                                            <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                              <Avatar className="size-3.5" size="default">
                                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <span className="truncate">
                                                Elijah Morgan
                                              </span>
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Partner Media Kit.zip" aria-haspopup="menu" id="base-ui-_r_1n_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="12" cy="5" r="1"></circle>
                                              <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </td>
                                      </tr>
                                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-root-plan">
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1p_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-muted-foreground" aria-hidden="true">
                                              <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                                                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                                                <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                                                <path d="M10 9H8"></path>
                                                <path d="M16 13H8"></path>
                                                <path d="M16 17H8"></path>
                                              </svg>
                                            </span>
                                            <button className="hover:text-primary min-w-0 text-foreground text-sm text-start transition-colors truncate" type="button">
                                              <span className="font-medium truncate">
                                                Q3 Studio Plan.pdf
                                              </span>
                                            </button>
                                            <Button className="-ms-1 transition-opacity" type="button" tabIndex="0" aria-pressed="true" aria-label="Unstar Q3 Studio Plan.pdf">
                                              <svg className="fill-current lucide lucide-star size-3.5 text-warning" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="min-w-0 text-foreground text-sm truncate">
                                              Nora Vale
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            PDF
                                          </Badge>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="tabular-nums text-foreground text-sm">
                                              11.0 MB
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="text-foreground text-sm">
                                              Today
                                            </span>
                                            <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                              <Avatar className="size-3.5" size="default">
                                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <span className="truncate">
                                                Nora Vale
                                              </span>
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Q3 Studio Plan.pdf" aria-haspopup="menu" id="base-ui-_r_1v_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="12" cy="5" r="1"></circle>
                                              <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </td>
                                      </tr>
                                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fld-spring">
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_21_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-foreground" aria-hidden="true">
                                              <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                              </svg>
                                            </span>
                                            <button className="hover:text-primary min-w-0 text-foreground text-sm text-start transition-colors truncate" type="button">
                                              <span className="font-semibold truncate">
                                                Spring Campaign
                                              </span>
                                            </button>
                                            <Button className="-ms-1 transition-opacity" type="button" tabIndex="0" aria-pressed="true" aria-label="Unstar Spring Campaign">
                                              <svg className="fill-current lucide lucide-star size-3.5 text-warning" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="min-w-0 text-foreground text-sm truncate">
                                              Leo Grant
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            Folder
                                          </Badge>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="tabular-nums text-foreground text-sm">
                                              988.2 GB
                                            </span>
                                            <span className="tabular-nums text-muted-foreground text-xs">
                                              10 items
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="text-foreground text-sm">
                                              Today
                                            </span>
                                            <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                              <Avatar className="size-3.5" size="default">
                                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <span className="truncate">
                                                Leo Grant
                                              </span>
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Spring Campaign" aria-haspopup="menu" id="base-ui-_r_27_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="12" cy="5" r="1"></circle>
                                              <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </td>
                                      </tr>
                                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fld-ops">
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_29_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-foreground" aria-hidden="true">
                                              <svg className="lucide lucide-folder" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                                                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                                              </svg>
                                            </span>
                                            <button className="hover:text-primary min-w-0 text-foreground text-sm text-start transition-colors truncate" type="button">
                                              <span className="font-semibold truncate">
                                                Studio Operations
                                              </span>
                                            </button>
                                            <Button className="-ms-1 focus-visible:opacity-100 group-hover/row:opacity-100 opacity-0 text-muted-foreground/60 transition-opacity" type="button" tabIndex="0" aria-pressed="false" aria-label="Star Studio Operations">
                                              <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="min-w-0 text-foreground text-sm truncate">
                                              Nora Vale
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            Folder
                                          </Badge>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="tabular-nums text-foreground text-sm">
                                              246.0 GB
                                            </span>
                                            <span className="tabular-nums text-muted-foreground text-xs">
                                              4 items
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="text-foreground text-sm">
                                              2 days ago
                                            </span>
                                            <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                              <Avatar className="size-3.5" size="default">
                                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <span className="truncate">
                                                Nora Vale
                                              </span>
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Studio Operations" aria-haspopup="menu" id="base-ui-_r_2f_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="12" cy="5" r="1"></circle>
                                              <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </td>
                                      </tr>
                                      <tr className="[&:not(:last-child)>td]:border-b data-[state=selected]:bg-muted/50 group/row hover:bg-muted/40" data-row-id="fil-root-reel">
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <Checkbox className="align-[inherit]" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2h_" aria-checked="false" aria-label="Select row"></Checkbox>
                                          <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <span className="[&_svg]:size-4 flex items-center justify-center shrink-0 size-4 text-muted-foreground" aria-hidden="true">
                                              <svg className="lucide lucide-video" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="VideoIcon" tabler="IconVideo" hugeicons="Video02Icon" phosphor="VideoCameraIcon" remixicon="RiVideoOnLine" aria-hidden="true">
                                                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                                                <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                                              </svg>
                                            </span>
                                            <button className="hover:text-primary min-w-0 text-foreground text-sm text-start transition-colors truncate" type="button">
                                              <span className="font-medium truncate">
                                                Studio Reel 2026.mp4
                                              </span>
                                            </button>
                                            <Button className="-ms-1 focus-visible:opacity-100 group-hover/row:opacity-100 opacity-0 text-muted-foreground/60 transition-opacity" type="button" tabIndex="0" aria-pressed="false" aria-label="Star Studio Reel 2026.mp4">
                                              <svg className="lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                                              </svg>
                                            </Button>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex gap-2 items-center min-w-0">
                                            <Avatar className="size-5" size="default">
                                              <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                            </Avatar>
                                            <span className="min-w-0 text-foreground text-sm truncate">
                                              Leo Grant
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-normal gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                                            MP4
                                          </Badge>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="tabular-nums text-foreground text-sm">
                                              64.0 GB
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle px-2 py-1.5">
                                          <div className="flex flex-col gap-0.5">
                                            <span className="text-foreground text-sm">
                                              Today
                                            </span>
                                            <span className="flex gap-1 items-center min-w-0 text-muted-foreground text-xs">
                                              <Avatar className="size-3.5" size="default">
                                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                              </Avatar>
                                              <span className="truncate">
                                                Leo Grant
                                              </span>
                                            </span>
                                          </div>
                                        </td>
                                        <td className="align-middle first:ps-4 last:pe-4 px-2 py-1.5">
                                          <DropdownMenu>
                                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Actions for Studio Reel 2026.mp4" aria-haspopup="menu" id="base-ui-_r_2n_" aria-expanded="false">
                                            <svg className="lucide lucide-ellipsis-vertical size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                              <circle cx="12" cy="12" r="1"></circle>
                                              <circle cx="12" cy="5" r="1"></circle>
                                              <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                          </DropdownMenuTrigger>
                                          </DropdownMenu>
                                        </td>
                                      </tr>
                                    </DataGridTableBody>
                                  </DataGridTable>
                                </DataGridTableViewport>
                              </div>
                            </div>
                          </DataGridScrollArea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_c_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "313.7788732394366px"}}>
                    <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
