import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="bg-background flex items-start justify-center max-w-5xl md:p-4 min-h-svh mx-auto p-3 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Coupon Manager"}
      </h1>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <div className="flex flex-wrap gap-2.5 items-center">
              <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                {"Coupons"}
              </h2>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                {"1 live"}
              </Badge>
            </div>
            <div className="flex flex-wrap gap-x-1.5 gap-y-1 items-center text-muted-foreground text-xs">
              <span className="gap-1.5 inline-flex items-center">
                <Avatar className="size-4" size="default">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                {"Mara Whitfield"}
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
              <span>
                {"4 coupons"}
              </span>
            </div>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Button type="button" tabIndex={0} extracted="1">
              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              {"Create"}
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <Frame spacing="sm">
            <Collapsible data-open="">
              <header className="flex flex-row gap-2.5 group/header grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex gap-2.5 grow items-center min-w-0">
                  <Collapsible>
                  <CollapsibleTrigger className="shrink-0 text-left" type="button" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_0_" aria-expanded="true">
                    <Item className="[&_svg]:size-3.5 bg-muted/30 border border-border p-0 shadow-none! size-8" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-ticket-percent" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" aria-hidden="true">
                          <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                          <path d="M9 9h.01"></path>
                          <path d="m15 9-6 6"></path>
                          <path d="M15 15h.01"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                  </CollapsibleTrigger>
                  </Collapsible>
                  <div className="flex flex-col gap-0 min-w-0">
                    <div className="flex gap-1 group/code items-center min-w-0">
                      <Collapsible>
                      <CollapsibleTrigger className="min-w-0 text-left" type="button" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_0_" aria-expanded="true">
                        <span className="block font-mono font-semibold text-foreground text-sm tracking-wide truncate uppercase">
                          {"SPRING25"}
                        </span>
                      </CollapsibleTrigger>
                      </Collapsible>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button hover:text-foreground inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/code:opacity-100 sm:group-hover/code:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy SPRING25" id="base-ui-_r_2_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                          <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <Collapsible>
                    <CollapsibleTrigger className="min-w-0 text-left" type="button" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_0_" aria-expanded="true">
                      <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                        <span className="truncate">
                          {"25% off"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          {"Ends in 12 days"}
                        </span>
                      </span>
                    </CollapsibleTrigger>
                    </Collapsible>
                  </div>
                </div>
                <Collapsible>
                <CollapsibleTrigger className="flex gap-2.5 group/row items-center shrink-0 text-left" type="button" panelOpen="" tabIndex={0} aria-disabled="false" aria-controls="base-ui-_r_0_" aria-expanded="true">
                  <span className="hidden sm:inline tabular-nums text-muted-foreground text-xs">
                    {"142 / 500"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Active"}
                  </Badge>
                  <svg className="group-hover/row:text-foreground in-data-open:rotate-180 lucide lucide-chevron-down shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </CollapsibleTrigger>
                </Collapsible>
              </header>
              <CollapsibleContent data-open="" id="base-ui-_r_0_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                <FramePanel className="border-border border-t">
                  <FieldSet className="gap-0">
                    <FieldLegend className="sr-only" variant="legend">
                      {"SPRING25 redemption rules"}
                    </FieldLegend>
                    <FieldDescription className="sr-only">
                      {"Edit the discount, duration, limit, and eligible plans."}
                    </FieldDescription>
                    <FieldGroup className="gap-0">
                      <Field className="@md/field-group:gap-8 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3 px-4 py-3" role="group" data-orientation="responsive">
                        <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                          <FieldLabel className="cn-field-title items-center">
                            {"Discount Type"}
                          </FieldLabel>
                          <FieldDescription className="leading-5 text-xs">
                            {"Percentage or a fixed amount."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:basis-1/2 @md/field-group:w-1/2 min-w-0 w-full">
                          <div className="flex justify-start w-full">
                            <Tabs data-orientation="horizontal" activationDirection="none">
                              <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                                <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_3_" compositeItemActive="">
                                  {"Percentage"}
                                </TabsTrigger>
                                <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_4_">
                                  {"Fixed Amount"}
                                </TabsTrigger>
                              </TabsList>
                            </Tabs>
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="@md/field-group:gap-8 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3 px-4 py-3" role="group" data-orientation="responsive">
                        <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="PROMO-SPRING25-amount">
                            {"Amount"}
                          </FieldLabel>
                          <FieldDescription className="leading-5 text-xs">
                            {"The discount applied at checkout."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:basis-1/2 @md/field-group:w-1/2 min-w-0 w-full">
                          <div className="flex justify-start w-full">
                            <InputGroup className="max-w-[180px]" role="group">
                              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="PROMO-SPRING25-amount" inputmode="numeric" min={0} type="number" value="25" />
                              <InputGroupAddon role="group" data-align="inline-end">
                                <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center text-muted-foreground">
                                  {"%"}
                                </span>
                              </InputGroupAddon>
                            </InputGroup>
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="@md/field-group:gap-8 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3 px-4 py-3" role="group" data-orientation="responsive">
                        <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                          <FieldLabel className="cn-field-title items-center">
                            {"Duration"}
                          </FieldLabel>
                          <FieldDescription className="leading-5 text-xs">
                            {"How long the discount applies."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:basis-1/2 @md/field-group:w-1/2 min-w-0 w-full">
                          <div className="flex justify-start w-full">
                            <Select>
                            <SelectTrigger className="max-w-[200px]" type="button" tabIndex={0} id="base-ui-_r_6_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                              <SelectValue>
                                {"repeating"}
                              </SelectValue>
                              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                <path d="m6 9 6 6 6-6"></path>
                                {"▼"}
                              </svg>
                            </SelectTrigger>
                            </Select>
                            <input id="base-ui-_r_6_-hidden-input" tabIndex={-1} aria-hidden="true" value="repeating" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="@md/field-group:gap-8 @md/field-group:has-[>[data-slot=field-content]]:items-center gap-3 px-4 py-3" role="group" data-orientation="responsive">
                        <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="PROMO-SPRING25-limit">
                            {"Redemption Limit"}
                          </FieldLabel>
                          <FieldDescription className="leading-5 text-xs">
                            {"Cap the total times this code can be used."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:basis-1/2 @md/field-group:w-1/2 min-w-0 w-full">
                          <div className="flex justify-start w-full">
                            <div className="flex flex-wrap gap-3 items-center w-full">
                              <InputGroup className="max-w-[160px]" role="group">
                                <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="PROMO-SPRING25-limit" inputmode="numeric" min={0} placeholder="Unlimited" type="number" value="500" />
                              </InputGroup>
                              <span className="gap-2 inline-flex items-center text-muted-foreground text-sm">
                                <Switch unchecked="" role="switch" tabIndex={0} id="base-ui-_r_a_" aria-checked="false" size="default" aria-label="Unlimited redemptions">
                                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                                </Switch>
                                <input id="base-ui-_r_b_" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                {"Unlimited"}
                              </span>
                            </div>
                          </div>
                        </FieldContent>
                      </Field>
                      <FieldSeparator content="false">
                        <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      </FieldSeparator>
                      <Field className="@md/field-group:gap-8 gap-3 px-4 py-3" role="group" data-orientation="responsive">
                        <div className="@md/field-group:basis-1/2 @md/field-group:pr-6 @md/field-group:w-1/2 flex flex-col gap-0.5 min-w-0 w-full">
                          <FieldLabel className="cn-field-title items-center">
                            {"Eligible Plans"}
                          </FieldLabel>
                          <FieldDescription className="leading-5 text-xs">
                            {"Plans this code can be applied to."}
                          </FieldDescription>
                        </div>
                        <FieldContent className="@md/field-group:basis-1/2 @md/field-group:w-1/2 min-w-0 w-full">
                          <div className="flex justify-start w-full">
                            <div className="flex flex-wrap gap-1.5">
                              <Button type="button" tabIndex={0} aria-pressed="false">
                                {"Starter"}
                              </Button>
                              <Button type="button" tabIndex={0} aria-pressed="true">
                                <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                {"Growth"}
                              </Button>
                              <Button type="button" tabIndex={0} aria-pressed="true">
                                <svg className="lucide lucide-check size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                  <path d="M20 6 9 17l-5-5"></path>
                                </svg>
                                {"Scale"}
                              </Button>
                              <Button type="button" tabIndex={0} aria-pressed="false">
                                {"Enterprise"}
                              </Button>
                            </div>
                          </div>
                        </FieldContent>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                </FramePanel>
                <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
                  <div className="gap-2 grid grid-cols-2 ml-auto sm:w-64 w-full">
                    <Button className="w-full" type="button" tabIndex={0}>
                      <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                        <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                      </svg>
                      {"Copy"}
                    </Button>
                    <Button className="w-full" type="button" tabIndex={0}>
                      {"Save"}
                    </Button>
                  </div>
                </footer>
              </CollapsibleContent>
            </Collapsible>
          </Frame>
          <Frame spacing="sm">
            <Collapsible data-closed="">
              <header className="flex flex-row gap-2.5 group/header grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex gap-2.5 grow items-center min-w-0">
                  <Collapsible>
                  <CollapsibleTrigger className="shrink-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                    <Item className="[&_svg]:size-3.5 bg-muted/30 border border-border p-0 shadow-none! size-8" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-ticket-percent" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" aria-hidden="true">
                          <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                          <path d="M9 9h.01"></path>
                          <path d="m15 9-6 6"></path>
                          <path d="M15 15h.01"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                  </CollapsibleTrigger>
                  </Collapsible>
                  <div className="flex flex-col gap-0 min-w-0">
                    <div className="flex gap-1 group/code items-center min-w-0">
                      <Collapsible>
                      <CollapsibleTrigger className="min-w-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                        <span className="block font-mono font-semibold text-foreground text-sm tracking-wide truncate uppercase">
                          {"WELCOME10"}
                        </span>
                      </CollapsibleTrigger>
                      </Collapsible>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button hover:text-foreground inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/code:opacity-100 sm:group-hover/code:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy WELCOME10" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                          <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <Collapsible>
                    <CollapsibleTrigger className="min-w-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                      <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                        <span className="truncate">
                          {"$10 off"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          {"Starts in 5 days"}
                        </span>
                      </span>
                    </CollapsibleTrigger>
                    </Collapsible>
                  </div>
                </div>
                <Collapsible>
                <CollapsibleTrigger className="flex gap-2.5 group/row items-center shrink-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                  <span className="hidden sm:inline tabular-nums text-muted-foreground text-xs">
                    {"0 / 300"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    {"Scheduled"}
                  </Badge>
                  <svg className="group-hover/row:text-foreground in-data-open:rotate-180 lucide lucide-chevron-down shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </CollapsibleTrigger>
                </Collapsible>
              </header>
            </Collapsible>
          </Frame>
          <Frame spacing="sm">
            <Collapsible data-closed="">
              <header className="flex flex-row gap-2.5 group/header grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex gap-2.5 grow items-center min-w-0">
                  <Collapsible>
                  <CollapsibleTrigger className="shrink-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                    <Item className="[&_svg]:size-3.5 bg-muted/30 border border-border p-0 shadow-none! size-8" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-ticket-percent" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" aria-hidden="true">
                          <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                          <path d="M9 9h.01"></path>
                          <path d="m15 9-6 6"></path>
                          <path d="M15 15h.01"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                  </CollapsibleTrigger>
                  </Collapsible>
                  <div className="flex flex-col gap-0 min-w-0">
                    <div className="flex gap-1 group/code items-center min-w-0">
                      <Collapsible>
                      <CollapsibleTrigger className="min-w-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                        <span className="block font-mono font-semibold text-foreground text-sm tracking-wide truncate uppercase">
                          {"LEGACY15"}
                        </span>
                      </CollapsibleTrigger>
                      </Collapsible>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button hover:text-foreground inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/code:opacity-100 sm:group-hover/code:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy LEGACY15" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                          <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <Collapsible>
                    <CollapsibleTrigger className="min-w-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                      <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                        <span className="truncate">
                          {"15% off"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          {"Ended 8 days ago"}
                        </span>
                      </span>
                    </CollapsibleTrigger>
                    </Collapsible>
                  </div>
                </div>
                <Collapsible>
                <CollapsibleTrigger className="flex gap-2.5 group/row items-center shrink-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                  <span className="hidden sm:inline tabular-nums text-muted-foreground text-xs">
                    {"612 used"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                    {"Expired"}
                  </Badge>
                  <svg className="group-hover/row:text-foreground in-data-open:rotate-180 lucide lucide-chevron-down shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </CollapsibleTrigger>
                </Collapsible>
              </header>
            </Collapsible>
          </Frame>
          <Frame spacing="sm">
            <Collapsible data-closed="">
              <header className="flex flex-row gap-2.5 group/header grow items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex gap-2.5 grow items-center min-w-0">
                  <Collapsible>
                  <CollapsibleTrigger className="shrink-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                    <Item className="[&_svg]:size-3.5 bg-muted/30 border border-border p-0 shadow-none! size-8" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-ticket-percent" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TicketPercentIcon" tabler="IconTicket" hugeicons="CouponPercentIcon" phosphor="TicketIcon" remixicon="RiCoupon3Line" aria-hidden="true">
                          <path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                          <path d="M9 9h.01"></path>
                          <path d="m15 9-6 6"></path>
                          <path d="M15 15h.01"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                  </CollapsibleTrigger>
                  </Collapsible>
                  <div className="flex flex-col gap-0 min-w-0">
                    <div className="flex gap-1 group/code items-center min-w-0">
                      <Collapsible>
                      <CollapsibleTrigger className="min-w-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                        <span className="block font-mono font-semibold text-foreground text-sm tracking-wide truncate uppercase">
                          {"MAXOUT30"}
                        </span>
                      </CollapsibleTrigger>
                      </Collapsible>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:opacity-100 group/button hover:text-foreground inline-flex items-center justify-center opacity-100 outline-none select-none shrink-0 sm:group-focus-within/code:opacity-100 sm:group-hover/code:opacity-100 sm:opacity-0 text-muted-foreground transition-opacity whitespace-nowrap" type="button" tabIndex={0} aria-label="Copy MAXOUT30" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-copy size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                          <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <Collapsible>
                    <CollapsibleTrigger className="min-w-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                      <span className="flex gap-1.5 items-center leading-4 min-w-0 text-muted-foreground text-xs">
                        <span className="truncate">
                          {"30% off"}
                        </span>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="truncate">
                          {"Cap hit 2 days ago"}
                        </span>
                      </span>
                    </CollapsibleTrigger>
                    </Collapsible>
                  </div>
                </div>
                <Collapsible>
                <CollapsibleTrigger className="flex gap-2.5 group/row items-center shrink-0 text-left" type="button" tabIndex={0} aria-disabled="false" aria-expanded="false">
                  <span className="hidden sm:inline tabular-nums text-muted-foreground text-xs">
                    {"500 / 500"}
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    {"Limit Reached"}
                  </Badge>
                  <svg className="group-hover/row:text-foreground in-data-open:rotate-180 lucide lucide-chevron-down shrink-0 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </CollapsibleTrigger>
                </Collapsible>
              </header>
            </Collapsible>
          </Frame>
        </div>
      </div>
    </main>
  )
}
