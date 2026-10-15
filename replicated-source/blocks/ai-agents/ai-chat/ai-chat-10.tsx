import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { FieldLabel } from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh min-h-0 text-foreground w-full">
      <header className="after:absolute after:bg-gradient-to-b after:from-background after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-background/70 flex gap-2 h-14 items-center px-3 shrink-0 sm:px-4 sticky supports-backdrop-filter:bg-background/60 top-0 z-10">
        <div className="flex flex-1 gap-2 items-center min-w-0">
          <Popover>
          <PopoverTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none font-medium gap-1.5 group/button inline-flex items-center justify-center min-w-0 outline-none px-2 select-none shrink transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
            <span className="min-w-0 truncate">
              {"New chat"}
            </span>
            <svg className="lucide lucide-chevron-down opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </PopoverTrigger>
          </Popover>
        </div>
        <Tooltip>
        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="New chat" id="base-ui-_r_3_" baseUiTooltipTrigger="">
          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </TooltipTrigger>
        </Tooltip>
        <Tooltip>
        <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-secondary disabled:opacity-50 disabled:pointer-events-none group/button hidden items-center justify-center outline-none select-none shrink-0 sm:inline-flex transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chat memory" aria-pressed="true" id="base-ui-_r_5_" baseUiTooltipTrigger="">
          <svg className="lucide lucide-bookmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookmarkIcon" tabler="IconBookmark" hugeicons="Bookmark02Icon" phosphor="BookmarkSimpleIcon" remixicon="RiBookmarkLine" aria-hidden="true">
            <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path>
          </svg>
        </TooltipTrigger>
        </Tooltip>
        <DropdownMenu>
        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Chat options" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
          <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="12" cy="5" r="1"></circle>
            <circle cx="12" cy="19" r="1"></circle>
          </svg>
        </DropdownMenuTrigger>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col min-h-0">
        <div className="flex flex-1 min-h-0 overflow-y-auto px-3 scrollbar sm:px-4">
          <div className="flex flex-col gap-16 m-auto max-w-3xl py-10 w-full">
            <div className="flex flex-col gap-5 items-center text-center">
              <Item className="bg-primary p-0 size-10 text-primary-foreground" variant="default" size="default" aria-hidden="true">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="size-5" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <h1 className="font-medium text-3xl/9 text-balance tracking-tight">
                {"Good morning, Maya."}
              </h1>
            </div>
            <div className="flex flex-col gap-3">
              <Frame className="w-full" spacing="sm">
                <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                  <ToggleGroup className="flex-wrap w-full" multiple="" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="2" aria-label="Sources this chat can read" style={{"--gap": "2"}}>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:bg-card data-pressed:shadow-xs data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center min-w-0 outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="2">
                      <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="M18 17V9"></path>
                        <path d="M13 17V5"></path>
                        <path d="M8 17v-3"></path>
                      </svg>
                      <span className="max-w-40 min-w-0 truncate">
                        {"churn-q3.csv"}
                      </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:bg-card data-pressed:shadow-xs data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center min-w-0 outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="2">
                      <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                        <path d="m16 18 6-6-6-6"></path>
                        <path d="m8 6-6 6 6 6"></path>
                      </svg>
                      <span className="max-w-40 min-w-0 truncate">
                        {"stripe-webhook.ts"}
                      </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:bg-card data-pressed:shadow-xs data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center min-w-0 outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="2">
                      <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File01Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                      <span className="max-w-40 min-w-0 truncate">
                        {"release-notes-3.4.md"}
                      </span>
                    </ToggleGroupItem>
                    <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:bg-card data-pressed:shadow-xs data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center min-w-0 outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="2">
                      <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                        <path d="M12 7v14"></path>
                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                      </svg>
                      <span className="max-w-40 min-w-0 truncate">
                        {"onboarding-research.md"}
                      </span>
                    </ToggleGroupItem>
                  </ToggleGroup>
                </header>
                <FramePanel className="p-0">
                  <form>
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-10-composer">
                      {"Message NeUI Chat"}
                    </FieldLabel>
                    <InputGroup className="bg-transparent border-0 shadow-none" role="group">
                      <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-48 min-h-20 outline-none placeholder:text-muted-foreground resize-none w-full" id="ai-chat-10-composer" placeholder="Ask about churn, the webhook, or anything you connected..."></textarea>
                      <InputGroupAddon className="gap-1" role="group" data-align="block-end">
                        <DropdownMenu>
                        <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-sm" aria-label="Mention a file" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                          <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                            <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                          </svg>
                        </DropdownMenuTrigger>
                        </DropdownMenu>
                        <div className="flex gap-1 items-center ms-auto">
                          <DropdownMenu>
                          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline cn-input-group-button cn-input-group-button-size-sm disabled:opacity-50 disabled:pointer-events-none flex gap-1.5 group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="sm" aria-label="Model, Claude Sonnet 5" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                            <span className="inline-flex shrink-0 size-4" aria-hidden="true">
                              <svg className="dark:hidden size-4" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                                <title>
                                  {"Anthropic"}
                                </title>
                                <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                              </svg>
                              <svg className="dark:block hidden size-4" fill="#ffff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                                <title>
                                  {"Anthropic"}
                                </title>
                                <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                              </svg>
                            </span>
                            <span className="max-w-24 sm:max-w-none truncate">
                              {"Claude Sonnet 5"}
                            </span>
                            <svg className="lucide lucide-chevron-down opacity-60" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                            </svg>
                          </DropdownMenuTrigger>
                          </DropdownMenu>
                          <Tooltip>
                          <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none rounded-full select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="submit" tabIndex="0" size="icon-sm" aria-label="Send message" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" aria-hidden="true">
                              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                              <path d="m21.854 2.147-10.94 10.939"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </div>
                      </InputGroupAddon>
                    </InputGroup>
                  </form>
                </FramePanel>
              </Frame>
              <div className="gap-2 grid sm:grid-cols-3">
                <Item className="h-full hover:bg-accent/50 items-start text-start" type="button" variant="outline" size="default">
                  <span className="text-muted-foreground text-sm/5">
                    <span>
                      {"Read"}
                    </span>
                    <strong className="font-medium tabular-nums text-foreground">
                      {"12,480 churn records"}
                    </strong>
                    <span>
                      {"and rank the plans losing the most accounts."}
                    </span>
                  </span>
                </Item>
                <Item className="h-full hover:bg-accent/50 items-start text-start" type="button" variant="outline" size="default">
                  <span className="text-muted-foreground text-sm/5">
                    <span>
                      {"Trace the"}
                    </span>
                    <strong className="font-medium tabular-nums text-foreground">
                      {"charge.refunded 500s"}
                    </strong>
                    <span>
                      {"to the line in stripe-webhook.ts that throws."}
                    </span>
                  </span>
                </Item>
                <Item className="h-full hover:bg-accent/50 items-start text-start" type="button" variant="outline" size="default">
                  <span className="text-muted-foreground text-sm/5">
                    <span>
                      {"Sit"}
                    </span>
                    <strong className="font-medium tabular-nums text-foreground">
                      {"18 onboarding interviews"}
                    </strong>
                    <span>
                      {"next to the accounts that cancel first."}
                    </span>
                  </span>
                </Item>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
