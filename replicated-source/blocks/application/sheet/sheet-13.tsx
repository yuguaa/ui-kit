import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
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
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"New cron job"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          {"New Job"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(36rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <div className="border-b flex flex-col px-5 py-3.5 shrink-0">
        <div className="flex gap-2 items-center justify-between">
          <SheetTitle className="min-w-0 text-lg" id="base-ui-_r_3_">
            {"New Job"}
          </SheetTitle>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <SheetDescription className="mt-1" id="base-ui-_r_4_">
          {"Schedule a command on Harbor Ops."}
        </SheetDescription>
      </div>
      <form className="flex flex-1 flex-col min-h-0" id="sheet-13-new-job-form" novalidate="">
        <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
          <div className="flex flex-col gap-5 px-5 py-5">
            <Field role="group" data-orientation="vertical">
              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-13-new-name">
                {"Name"}
              </FieldLabel>
              <Input id="sheet-13-new-name" placeholder="Nightly ledger reconciliation" value=""></Input>
            </Field>
            <Field role="group" data-orientation="vertical">
              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-13-new-command">
                {"Command"}
              </FieldLabel>
              <InputGroup role="group">
                <InputGroupAddon role="group" data-align="inline-start">
                  <svg className="lucide lucide-square-terminal" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareTerminalIcon" tabler="IconTerminal2" hugeicons="CommandLineIcon" phosphor="TerminalWindowIcon" remixicon="RiTerminalBoxLine" aria-hidden="true">
                    <path d="m7 11 2-2-2-2"></path>
                    <path d="M11 13h4"></path>
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  </svg>
                </InputGroupAddon>
                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 font-mono min-w-0 outline-none placeholder:text-muted-foreground w-full" id="sheet-13-new-command" spellCheck="false" autoComplete="off" placeholder="harbor run payments-api -- jobs:sync" value="" />
              </InputGroup>
            </Field>
            <FieldSet>
              <FieldLegend variant="label">
                {"Schedule"}
              </FieldLegend>
              <FieldGroup className="gap-4">
                <ToggleGroup className="hidden sm:flex w-full" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="0" aria-label="Schedule presets" style={{"--gap": "0"}}>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="sm" spacing="0">
                    {"Every 5 min"}
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="sm" spacing="0">
                    {"Hourly"}
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                    {"Daily"}
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                    {"Weekdays"}
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                    {"Weekly"}
                  </ToggleGroupItem>
                  <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline data-pressed:text-foreground disabled:opacity-50 disabled:pointer-events-none flex-1 focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none text-muted-foreground whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="0">
                    {"Monthly"}
                  </ToggleGroupItem>
                </ToggleGroup>
                <div className="sm:hidden">
                  <Select>
                  <SelectTrigger className="w-full" type="button" tabIndex="0" id="base-ui-_r_d_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Schedule preset">
                    <SelectValue>
                      {"Hourly"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_d_-hidden-input" tabIndex="-1" aria-hidden="true" value="hourly" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <Field role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-13-new-cron">
                    {"Cron Expression"}
                  </FieldLabel>
                  <InputGroup role="group">
                    <InputGroupAddon role="group" data-align="inline-start">
                      <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" aria-hidden="true">
                        <path d="M16 14v2.2l1.6 1"></path>
                        <path d="M16 2v4"></path>
                        <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                        <path d="M3 10h5"></path>
                        <path d="M8 2v4"></path>
                        <circle cx="16" cy="16" r="6"></circle>
                      </svg>
                    </InputGroupAddon>
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 font-mono min-w-0 outline-none placeholder:text-muted-foreground w-full" id="sheet-13-new-cron" spellCheck="false" autoComplete="off" aria-describedby="sheet-13-new-cron-line" placeholder="0 2 * * *" value="0 * * * *" />
                  </InputGroup>
                  <FieldDescription id="sheet-13-new-cron-line">
                    {"Hourly at :00 UTC"}
                  </FieldDescription>
                </Field>
                <Field role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-13-new-timezone">
                    {"Timezone"}
                  </FieldLabel>
                  <Select>
                  <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-13-new-timezone" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue>
                      {"UTC"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_h_-hidden-input" tabIndex="-1" aria-hidden="true" value="UTC" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </Field>
                <section className="flex flex-col gap-2" aria-live="polite">
                  <h3 className="font-medium text-muted-foreground text-xs">
                    {"Next 3 Runs"}
                  </h3>
                  <ol className="flex flex-col gap-1.5 text-sm">
                    <li className="flex gap-3 items-center justify-between">
                      <span className="min-w-0 tabular-nums truncate">
                        {"Tue, Sep 29, 15:00 UTC"}
                      </span>
                      <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                        {"in 40m"}
                      </span>
                    </li>
                    <li className="flex gap-3 items-center justify-between">
                      <span className="min-w-0 tabular-nums truncate">
                        {"Tue, Sep 29, 16:00 UTC"}
                      </span>
                      <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                        {"in 1h 40m"}
                      </span>
                    </li>
                    <li className="flex gap-3 items-center justify-between">
                      <span className="min-w-0 tabular-nums truncate">
                        {"Tue, Sep 29, 17:00 UTC"}
                      </span>
                      <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                        {"in 2h 40m"}
                      </span>
                    </li>
                  </ol>
                </section>
              </FieldGroup>
            </FieldSet>
            <div className="gap-4 grid min-[360px]:grid-cols-2">
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-13-new-service">
                  {"Service"}
                </FieldLabel>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-13-new-service" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    <span className="[&_svg:not([class*=size-])]:size-4 flex gap-2 items-center min-w-0">
                      <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                        <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M6 12h.01M18 12h.01"></path>
                      </svg>
                      <span className="truncate">
                        {"payments-api"}
                      </span>
                    </span>
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_k_-hidden-input" tabIndex="-1" aria-hidden="true" value="payments-api" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </Field>
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-13-new-cluster">
                  {"Cluster"}
                </FieldLabel>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-13-new-cluster" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    <span className="font-mono truncate">
                      {"prod-us-east-1"}
                    </span>
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_n_-hidden-input" tabIndex="-1" aria-hidden="true" value="prod-us-east-1" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </Field>
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-13-new-environment">
                  {"Environment"}
                </FieldLabel>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-13-new-environment" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      {"Production"}
                    </Badge>
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_q_-hidden-input" tabIndex="-1" aria-hidden="true" value="production" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </Field>
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-13-new-owner">
                  {"Owner"}
                </FieldLabel>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex="0" id="sheet-13-new-owner" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    <span className="flex gap-2 items-center min-w-0">
                      <Avatar className="size-5" size="sm">
                        <AvatarImage alt="" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span className="truncate">
                        {"Nina Santos"}
                      </span>
                    </span>
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_t_-hidden-input" tabIndex="-1" aria-hidden="true" value="nina" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </Field>
            </div>
            <Field role="group" data-orientation="horizontal">
              <FieldContent>
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-13-new-enabled" id="sheet-13-new-enabled-label">
                  {"Start enabled"}
                </FieldLabel>
                <FieldDescription>
                  {"Runs on schedule once created."}
                </FieldDescription>
              </FieldContent>
              <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_10_" aria-checked="true" size="sm" aria-labelledby="sheet-13-new-enabled-label">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="sheet-13-new-enabled" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
          </div>
        </div>
        <div className="bg-muted border-t flex gap-2 items-center px-5 py-3 shrink-0">
          <p className="flex gap-1.5 items-center me-auto min-w-0 tabular-nums text-muted-foreground text-xs" aria-live="polite">
            <span className="truncate">
              {"First run in 40m"}
            </span>
            <span className="bg-muted-foreground/40 max-sm:hidden rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="max-sm:hidden shrink-0">
              {"15:00 UTC"}
            </span>
          </p>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
            {"Cancel"}
          </SheetClose>
          <Button type="submit" tabIndex="0">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            {"Create Job"}
          </Button>
        </div>
      </form>
    </SheetContent>
    </Sheet>
  </>
  )
}
