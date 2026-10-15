import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import { FieldLabel } from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col h-svh text-foreground w-full">
      <header className="after:absolute after:bg-gradient-to-b after:from-background after:h-6 after:inset-x-0 after:pointer-events-none after:to-transparent after:top-full backdrop-blur-md bg-background/70 flex gap-2 h-14 items-center px-4 shrink-0 sm:px-6 sticky supports-backdrop-filter:bg-background/60 top-0 z-10">
        <IconTile variant="elevated" size="sm" aria-hidden="true">
          <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine">
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
            <path d="M20 2v4"></path>
            <path d="M22 4h-4"></path>
            <circle cx={4} cy={20} r={2}></circle>
          </svg>
        </IconTile>
        <span className="font-medium shrink-0 text-sm">
          {"NeUI Chat"}
        </span>
        <div className="flex gap-2 items-center ms-auto shrink-0">
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none gap-1.5 group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Model, Claude Sonnet 5" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
            <span className="max-w-28 sm:max-w-none truncate">
              {"Claude Sonnet 5"}
            </span>
            <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1 flex-col min-h-0 overflow-y-auto px-4 py-6 scrollbar sm:px-6">
        <div className="flex flex-col gap-8 m-auto max-w-3xl w-full">
          <Empty className="flex-none gap-0 p-0">
            <EmptyHeader className="gap-2 max-w-none">
              <EmptyTitle className="font-semibold sm:text-3xl text-2xl tracking-tight">
                <h1>
                  {"Morning, Maya"}
                </h1>
              </EmptyTitle>
              <EmptyDescription className="text-sm">
                {"Release 3.4 ships Thursday"}
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
          <div className="flex flex-col gap-5 max-w-lg mx-auto w-full">
            <section className="flex flex-col gap-1">
              <h2 className="font-medium text-muted-foreground text-xs">
                {"Start"}
              </h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <Button className="font-normal gap-3 h-auto justify-start px-3 py-2.5 text-start w-full" type="button" tabIndex={0}>
                    <span className="[&>svg]:size-4 shrink-0 text-muted-foreground">
                      <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </span>
                    <span className="min-w-0 text-sm truncate">
                      {"Explain the webhook 500s"}
                    </span>
                  </Button>
                </li>
                <li>
                  <Button className="font-normal gap-3 h-auto justify-start px-3 py-2.5 text-start w-full" type="button" tabIndex={0}>
                    <span className="[&>svg]:size-4 shrink-0 text-muted-foreground">
                      <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File01Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                    </span>
                    <span className="min-w-0 text-sm truncate">
                      {"Draft Q3 release notes"}
                    </span>
                  </Button>
                </li>
                <li>
                  <Button className="font-normal gap-3 h-auto justify-start px-3 py-2.5 text-start w-full" type="button" tabIndex={0}>
                    <span className="[&>svg]:size-4 shrink-0 text-muted-foreground">
                      <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                        <path d="M18 17V9"></path>
                        <path d="M13 17V5"></path>
                        <path d="M8 17v-3"></path>
                      </svg>
                    </span>
                    <span className="min-w-0 text-sm truncate">
                      {"Summarize churn by plan"}
                    </span>
                  </Button>
                </li>
                <li>
                  <Button className="font-normal gap-3 h-auto justify-start px-3 py-2.5 text-start w-full" type="button" tabIndex={0}>
                    <span className="[&>svg]:size-4 shrink-0 text-muted-foreground">
                      <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx={9} cy={7} r={4}></circle>
                      </svg>
                    </span>
                    <span className="min-w-0 text-sm truncate">
                      {"Plan the onboarding revamp"}
                    </span>
                  </Button>
                </li>
              </ul>
            </section>
            <section className="flex flex-col gap-1">
              <h2 className="font-medium text-muted-foreground text-xs">
                {"Resume"}
              </h2>
              <ul className="flex flex-col">
                <li className="min-w-0">
                  <button className="cursor-pointer flex gap-2 group/resume items-center min-w-0 py-1 text-start w-full" type="button">
                    <span className="[&>svg]:size-3.5 group-hover/resume:text-foreground shrink-0 text-muted-foreground transition-colors" aria-hidden="true">
                      <svg className="lucide lucide-activity" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                      </svg>
                    </span>
                    <span className="group-hover/resume:text-foreground group-hover/resume:underline min-w-0 text-muted-foreground text-sm transition-colors truncate underline-offset-4">
                      {"p95 latency on eu-west"}
                    </span>
                    <span className="shrink-0 tabular-nums text-muted-foreground/70 text-xs">
                      {"22m"}
                    </span>
                  </button>
                </li>
                <li className="min-w-0">
                  <button className="cursor-pointer flex gap-2 group/resume items-center min-w-0 py-1 text-start w-full" type="button">
                    <span className="[&>svg]:size-3.5 group-hover/resume:text-foreground shrink-0 text-muted-foreground transition-colors" aria-hidden="true">
                      <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x={2} y={4} width={20} height={16} rx={2}></rect>
                      </svg>
                    </span>
                    <span className="group-hover/resume:text-foreground group-hover/resume:underline min-w-0 text-muted-foreground text-sm transition-colors truncate underline-offset-4">
                      {"Trial expiry email rewrite"}
                    </span>
                    <span className="shrink-0 tabular-nums text-muted-foreground/70 text-xs">
                      {"Yesterday"}
                    </span>
                  </button>
                </li>
                <li className="min-w-0">
                  <button className="cursor-pointer flex gap-2 group/resume items-center min-w-0 py-1 text-start w-full" type="button">
                    <span className="[&>svg]:size-3.5 group-hover/resume:text-foreground shrink-0 text-muted-foreground transition-colors" aria-hidden="true">
                      <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </span>
                    <span className="group-hover/resume:text-foreground group-hover/resume:underline min-w-0 text-muted-foreground text-sm transition-colors truncate underline-offset-4">
                      {"Audit log export scope"}
                    </span>
                    <span className="shrink-0 tabular-nums text-muted-foreground/70 text-xs">
                      {"Tue"}
                    </span>
                  </button>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div className="pb-4 px-4 shrink-0 sm:px-6">
        <div className="flex flex-col gap-2 max-w-3xl mx-auto w-full">
          <form className="flex flex-col gap-2">
            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-3-composer">
              {"Message NeUI Chat"}
            </FieldLabel>
            <InputGroup className="bg-background h-auto px-2 rounded-full shadow-xs" role="group">
              <div className="flex-1 min-w-0 relative w-full">
                <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-40 min-h-12 outline-none placeholder:text-muted-foreground px-0 py-3 resize-none w-full" id="ai-chat-3-composer" placeholder=""></textarea>
                <span className="absolute data-[empty=true]:opacity-100 duration-200 ease-out end-0 group/placeholder inset-y-0 motion-reduce:transition-none opacity-0 overflow-hidden pointer-events-none start-0 text-muted-foreground text-sm transition-opacity" aria-hidden="true" data-empty="true">
                  <span className="absolute data-[slot-position=above]:-translate-y-2.5 data-[slot-position=below]:translate-y-2.5 data-[slot-position=current-fade]:delay-150 data-[slot-position=current-fade]:duration-300 data-[slot-position=current-fade]:opacity-100 data-[slot-position=current]:delay-150 data-[slot-position=current]:duration-300 data-[slot-position=current]:opacity-100 duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] end-0 flex inset-y-0 items-center motion-reduce:transition-none motion-reduce:translate-y-0 opacity-0 start-0 transition-[opacity,translate] translate-y-0 truncate" data-slot-position="below">
                    {"Ask anything"}
                  </span>
                  <span className="absolute data-[slot-position=above]:-translate-y-2.5 data-[slot-position=below]:translate-y-2.5 data-[slot-position=current-fade]:delay-150 data-[slot-position=current-fade]:duration-300 data-[slot-position=current-fade]:opacity-100 data-[slot-position=current]:delay-150 data-[slot-position=current]:duration-300 data-[slot-position=current]:opacity-100 duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] end-0 flex inset-y-0 items-center motion-reduce:transition-none motion-reduce:translate-y-0 opacity-0 start-0 transition-[opacity,translate] translate-y-0 truncate" data-slot-position="below">
                    {"Explain the webhook 500s"}
                  </span>
                  <span className="absolute data-[slot-position=above]:-translate-y-2.5 data-[slot-position=below]:translate-y-2.5 data-[slot-position=current-fade]:delay-150 data-[slot-position=current-fade]:duration-300 data-[slot-position=current-fade]:opacity-100 data-[slot-position=current]:delay-150 data-[slot-position=current]:duration-300 data-[slot-position=current]:opacity-100 duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] end-0 flex inset-y-0 items-center motion-reduce:transition-none motion-reduce:translate-y-0 opacity-0 start-0 transition-[opacity,translate] translate-y-0 truncate" data-slot-position="below">
                    {"Draft the 3.4 release notes"}
                  </span>
                  <span className="absolute data-[slot-position=above]:-translate-y-2.5 data-[slot-position=below]:translate-y-2.5 data-[slot-position=current-fade]:delay-150 data-[slot-position=current-fade]:duration-300 data-[slot-position=current-fade]:opacity-100 data-[slot-position=current]:delay-150 data-[slot-position=current]:duration-300 data-[slot-position=current]:opacity-100 duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] end-0 flex inset-y-0 items-center motion-reduce:transition-none motion-reduce:translate-y-0 opacity-0 start-0 transition-[opacity,translate] translate-y-0 truncate" data-slot-position="below">
                    {"Summarize churn by plan"}
                  </span>
                  <span className="absolute data-[slot-position=above]:-translate-y-2.5 data-[slot-position=below]:translate-y-2.5 data-[slot-position=current-fade]:delay-150 data-[slot-position=current-fade]:duration-300 data-[slot-position=current-fade]:opacity-100 data-[slot-position=current]:delay-150 data-[slot-position=current]:duration-300 data-[slot-position=current]:opacity-100 duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] end-0 flex inset-y-0 items-center motion-reduce:transition-none motion-reduce:translate-y-0 opacity-0 start-0 transition-[opacity,translate] translate-y-0 truncate" data-slot-position="above">
                    {"Which numbers need verifying?"}
                  </span>
                  <span className="absolute data-[slot-position=above]:-translate-y-2.5 data-[slot-position=below]:translate-y-2.5 data-[slot-position=current-fade]:delay-150 data-[slot-position=current-fade]:duration-300 data-[slot-position=current-fade]:opacity-100 data-[slot-position=current]:delay-150 data-[slot-position=current]:duration-300 data-[slot-position=current]:opacity-100 duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] end-0 flex inset-y-0 items-center motion-reduce:transition-none motion-reduce:translate-y-0 opacity-0 start-0 transition-[opacity,translate] translate-y-0 truncate" data-slot-position="current">
                    {"Plan the onboarding revamp"}
                  </span>
                </span>
              </div>
              <InputGroupAddon className="me-1" role="group" data-align="inline-start">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none rounded-full select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} size="icon-sm" aria-label="Add context" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </InputGroupAddon>
              <InputGroupAddon className="gap-1" role="group" data-align="inline-end">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center max-sm:hidden outline-none rounded-full select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} size="sm" aria-label="Reasoning, Instant" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
                  {"Instant"}
                  <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-end" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none rounded-full select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="submit" tabIndex={0} size="icon-sm" aria-label="Send message" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                    <path d="m5 12 7-7 7 7"></path>
                    <path d="M12 19V5"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </InputGroupAddon>
            </InputGroup>
          </form>
          <p className="text-center text-muted-foreground text-xs">
            {"NeUI Chat can make mistakes. Check important info."}
          </p>
        </div>
      </div>
    </div>
  )
}
