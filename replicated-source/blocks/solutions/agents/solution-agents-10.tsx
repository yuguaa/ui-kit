import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="max-w-3xl space-y-5 w-full">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between w-full">
          <div className="min-w-0 space-y-px">
            <div className="flex flex-wrap gap-2 items-center">
              <h2 className="font-semibold leading-tight text-foreground text-lg tracking-tight">
                {"Agent Settings"}
              </h2>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                {"Saved"}
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm">
              {"Refund Resolver · 4 concurrent runs"}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Select>
            <SelectTrigger className="sm:w-[220px] w-full" type="button" tabIndex={0} id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Select agent" extracted="1">
              <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                <path d="M12 8V4H8"></path>
                <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
              <SelectValue>
                {"Refund Resolver"}
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                {"▼"}
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_0_-hidden-input" tabIndex={-1} aria-hidden="true" value="refund-resolver" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            <div className="flex gap-2">
              <Button type="button" disabled="" tabIndex={0} disabled>
                {"Discard"}
              </Button>
              <Button type="button" tabIndex={0}>
                {"Save"}
              </Button>
            </div>
          </div>
        </div>
        <Frame className="w-full">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-2.5!">
            <div className="font-semibold text-sm">
              {"Run Controls"}
            </div>
            <div className="text-muted-foreground text-sm">
              {"Maya Perez · about 120 runs daily"}
            </div>
          </header>
          <FramePanel className="p-0">
            <FieldGroup className="gap-0">
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="agent-settings-model">
                      {"Reasoning Model"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Model used for refunds and retries."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 min-w-0">
                  <Select>
                  <SelectTrigger className="w-full" type="button" tabIndex={0} id="agent-settings-model" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue>
                      {"GPT-4o · refunds"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_3_-hidden-input" tabIndex={-1} aria-hidden="true" value="gpt-4o" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </FieldContent>
              </Field>
              <FieldSeparator content="false">
                <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </FieldSeparator>
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="agent-settings-concurrency">
                      {"Max Concurrent Runs"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Refund Resolver can run 4 jobs at once."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 min-w-0">
                  <Select>
                  <SelectTrigger className="w-full" type="button" tabIndex={0} id="agent-settings-concurrency" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue>
                      {"4 runs"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_6_-hidden-input" tabIndex={-1} aria-hidden="true" value="4" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </FieldContent>
              </Field>
              <FieldSeparator content="false">
                <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </FieldSeparator>
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="agent-settings-timeout">
                      {"Run Timeout"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"RUN-4822 validates 30 to 900 seconds."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 min-w-0">
                  <div className="space-y-1.5 w-full">
                    <InputGroup role="group">
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="agent-settings-timeout" inputmode="numeric" aria-invalid="false" value="120" />
                      <InputGroupAddon role="group" data-align="inline-end">
                        <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                          {"sec"}
                        </span>
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                </FieldContent>
              </Field>
              <FieldSeparator content="false">
                <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </FieldSeparator>
              <Field className="gap-4 px-4 py-4" role="group" data-orientation="responsive">
                <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                  <div className="flex flex-wrap gap-2 items-center">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="agent-settings-autonomy">
                      {"Autonomy Level"}
                    </FieldLabel>
                  </div>
                  <FieldDescription className="text-xs">
                    {"Controls writes above the 500 USD threshold."}
                  </FieldDescription>
                </div>
                <FieldContent className="@md/field-group:w-78 min-w-0">
                  <Select>
                  <SelectTrigger className="w-full" type="button" tabIndex={0} id="agent-settings-autonomy" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                    <SelectValue>
                      {"Approve writes"}
                    </SelectValue>
                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                      <path d="m6 9 6 6 6-6"></path>
                      {"▼"}
                    </svg>
                  </SelectTrigger>
                  </Select>
                  <input id="base-ui-_r_a_-hidden-input" tabIndex={-1} aria-hidden="true" value="approve-writes" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </FieldContent>
              </Field>
            </FieldGroup>
          </FramePanel>
        </Frame>
        <Frame className="w-full">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="font-semibold text-sm">
              {"Operating Policies"}
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-sm">
              <span>
                {"3 policies"}
              </span>
              <span className="bg-muted-foreground/50 rounded-full size-1" aria-hidden="true"></span>
              <span>
                {"1 org locked"}
              </span>
            </div>
          </header>
          <FramePanel className="p-0!">
            <Item className="px-3.5 py-3" variant="default" size="sm">
              <IconTile variant="elevated" size="default">
                <svg className="lucide lucide-flask-conical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FlaskConicalIcon" tabler="IconFlask" hugeicons="TestTube01Icon" phosphor="FlaskIcon" remixicon="RiFlaskLine" aria-hidden="true">
                  <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                  <path d="M6.453 15h11.094"></path>
                  <path d="M8.5 2h7"></path>
                </svg>
              </IconTile>
              <ItemContent className="min-w-0">
                <ItemTitle className="gap-2">
                  {"Sandbox Untrusted Tools"}
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    {"Tool Safety"}
                  </Badge>
                </ItemTitle>
                <ItemDescription>
                  {"Unverified tools run sandboxed for 25 calls."}
                </ItemDescription>
              </ItemContent>
              <ItemActions className="gap-2">
                <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_d_" aria-checked="true" size="default" aria-label="Sandbox Untrusted Tools">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                </Switch>
                <input id="base-ui-_r_e_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </ItemActions>
            </Item>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Item className="px-3.5 py-3" variant="default" size="sm">
              <IconTile variant="elevated" size="default">
                <svg className="lucide lucide-shield-alert size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
              </IconTile>
              <ItemContent className="min-w-0">
                <ItemTitle className="gap-2">
                  {"Halt Repeated Failures"}
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    {"Retry Guard"}
                  </Badge>
                </ItemTitle>
                <ItemDescription>
                  {"Stops after 3 failed tool calls."}
                </ItemDescription>
              </ItemContent>
              <ItemActions className="gap-2">
                <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_g_" aria-checked="true" size="default" aria-label="Halt Repeated Failures">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                </Switch>
                <input id="base-ui-_r_h_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </ItemActions>
            </Item>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <Item className="px-3.5 py-3" variant="default" size="sm">
              <IconTile variant="elevated" size="default">
                <svg className="lucide lucide-eye-off size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeOffIcon" tabler="IconEyeOff" hugeicons="ViewOffSlashIcon" phosphor="EyeSlashIcon" remixicon="RiEyeOffLine" aria-hidden="true">
                  <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                  <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                  <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                  <path d="m2 2 20 20"></path>
                </svg>
              </IconTile>
              <ItemContent className="min-w-0">
                <ItemTitle className="gap-2">
                  {"PII Redaction"}
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                    <span className="bg-info rounded-full size-1.5" aria-hidden="true"></span>
                    {"Org Locked"}
                  </Badge>
                </ItemTitle>
                <ItemDescription>
                  {"Masks emails and card numbers in 120 daily runs."}
                </ItemDescription>
              </ItemContent>
              <ItemActions className="gap-2">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                  <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                  {"Required"}
                </Badge>
                <Switch disabled="" checked="" role="switch" tabIndex={-1} aria-disabled="true" id="base-ui-_r_j_" aria-checked="true" size="default" aria-label="PII Redaction">
                  <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-disabled="" data-checked=""></span>
                </Switch>
                <input disabled id="base-ui-_r_k_" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <svg className="lucide lucide-lock size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                  <rect width={18} height={11} x={3} y={11} rx={2} ry={2}></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </ItemActions>
            </Item>
          </FramePanel>
        </Frame>
        <Frame className="@container w-full">
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="font-semibold text-sm">
              {"Related Controls"}
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-sm">
              <span>
                {"4 linked settings"}
              </span>
              <span className="bg-muted-foreground/50 rounded-full size-1" aria-hidden="true"></span>
              <span>
                {"updated today"}
              </span>
            </div>
          </header>
          <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 gap-1 grid">
            <FramePanel className="group/card hover:[--frame-panel-border-color:var(--color-ring)] isolate transition-colors">
              <div className="flex flex-col relative z-10">
                <IconTile className="mb-6" variant="elevated" size="default">
                  <svg className="lucide lucide-shield-check size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </IconTile>
                <a className="font-medium group-hover/card:text-primary hover:text-primary leading-tight text-sm transition-colors" href="#">
                  {"Approval Rules"}
                </a>
                <p className="leading-relaxed pt-1.5 text-muted-foreground text-xs">
                  {"500 USD refunds require finance review"}
                </p>
              </div>
            </FramePanel>
            <FramePanel className="group/card hover:[--frame-panel-border-color:var(--color-ring)] isolate transition-colors">
              <div className="flex flex-col relative z-10">
                <IconTile className="mb-6" variant="elevated" size="default">
                  <svg className="lucide lucide-flask-conical size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FlaskConicalIcon" tabler="IconFlask" hugeicons="TestTube01Icon" phosphor="FlaskIcon" remixicon="RiFlaskLine" aria-hidden="true">
                    <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                    <path d="M6.453 15h11.094"></path>
                    <path d="M8.5 2h7"></path>
                  </svg>
                </IconTile>
                <a className="font-medium group-hover/card:text-primary hover:text-primary leading-tight text-sm transition-colors" href="#">
                  {"Tool Matrix"}
                </a>
                <p className="leading-relaxed pt-1.5 text-muted-foreground text-xs">
                  {"5 tools inherit sandbox defaults"}
                </p>
              </div>
            </FramePanel>
            <FramePanel className="group/card hover:[--frame-panel-border-color:var(--color-ring)] isolate transition-colors">
              <div className="flex flex-col relative z-10">
                <IconTile className="mb-6" variant="elevated" size="default">
                  <svg className="lucide lucide-clock size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx={12} cy={12} r={10}></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </IconTile>
                <a className="font-medium group-hover/card:text-primary hover:text-primary leading-tight text-sm transition-colors" href="#">
                  {"Failure Routing"}
                </a>
                <p className="leading-relaxed pt-1.5 text-muted-foreground text-xs">
                  {"3 failed calls page Jonas Reed"}
                </p>
              </div>
            </FramePanel>
            <FramePanel className="group/card hover:[--frame-panel-border-color:var(--color-ring)] isolate transition-colors">
              <div className="flex flex-col relative z-10">
                <IconTile className="mb-6" variant="elevated" size="default">
                  <svg className="lucide lucide-book-open size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </IconTile>
                <a className="font-medium group-hover/card:text-primary hover:text-primary leading-tight text-sm transition-colors" href="#">
                  {"Audit Export"}
                </a>
                <p className="leading-relaxed pt-1.5 text-muted-foreground text-xs">
                  {"RUN-4822 keeps 90 days of logs"}
                </p>
              </div>
            </FramePanel>
          </div>
        </Frame>
      </div>
    </div>
  )
}
