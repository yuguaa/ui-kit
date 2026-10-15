import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
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
      <div className="max-w-2xl space-y-5 w-full">
        <div className="space-y-0.5">
          <h1 className="font-semibold text-xl">
            {"Workspace Preferences"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {"Adjust defaults that apply across your entire workspace."}
          </p>
        </div>
        <Frame spacing="sm">
          <Collapsible data-open="">
            <Collapsible>
            <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_0_" aria-expanded="true" extracted="1">
              <header className="flex flex-row gap-2 grow items-center justify-between px-4 py-2">
                <div className="font-semibold text-sm">
                  {"General"}
                </div>
                <svg className="in-data-open:rotate-90 lucide lucide-chevron-right mr-2 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </header>
            </CollapsibleTrigger>
            </Collapsible>
            <CollapsibleContent data-open="" id="base-ui-_r_0_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
              <FramePanel className="p-0!">
                <div>
                  <Item className="px-4" variant="default" size="default">
                    <ItemContent>
                      <ItemTitle className="gap-2">
                        {"Default view"}
                      </ItemTitle>
                      <ItemDescription>
                        {"Choose which layout opens on launch."}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Select>
                      <SelectTrigger className="w-40" type="button" tabIndex="0" id="base-ui-_r_1_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Default view">
                        <SelectValue>
                          {"Board"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_1_-hidden-input" tabIndex="-1" aria-hidden="true" value="board" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Item className="px-4" variant="default" size="default">
                    <ItemContent>
                      <ItemTitle className="gap-2">
                        {"Date format"}
                      </ItemTitle>
                      <ItemDescription>
                        {"Set how dates appear across the app."}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Select>
                      <SelectTrigger className="w-40" type="button" tabIndex="0" id="base-ui-_r_4_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Date format">
                        <SelectValue>
                          {"MM/DD/YYYY"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_4_-hidden-input" tabIndex="-1" aria-hidden="true" value="mm/dd/yyyy" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Item className="px-4" variant="default" size="default">
                    <ItemContent>
                      <ItemTitle className="gap-2">
                        {"First day of week"}
                      </ItemTitle>
                      <ItemDescription>
                        {"Used for calendars and date pickers."}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Select>
                      <SelectTrigger className="w-40" type="button" tabIndex="0" id="base-ui-_r_7_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="First day of week">
                        <SelectValue>
                          {"Monday"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_7_-hidden-input" tabIndex="-1" aria-hidden="true" value="monday" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Item className="px-4" variant="default" size="default">
                    <ItemContent>
                      <ItemTitle className="gap-2">
                        {"Auto-save drafts"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                          {"Recommended"}
                        </Badge>
                      </ItemTitle>
                      <ItemDescription>
                        {"Automatically save unsaved changes."}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_a_" aria-checked="true" size="default" aria-label="Auto-save drafts">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                      </Switch>
                      <input id="base-ui-_r_b_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Item className="px-4" variant="default" size="default">
                    <ItemContent>
                      <ItemTitle className="gap-2">
                        {"Rich text editing"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-focus/10 border border-focus/15 dark:bg-focus/15 dark:border-focus/25 dark:text-focus disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-focus-foreground transition-shadow">
                          {"Editor"}
                        </Badge>
                      </ItemTitle>
                      <ItemDescription>
                        {"Enable formatting toolbar in text fields."}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_d_" aria-checked="true" size="default" aria-label="Rich text editing">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                      </Switch>
                      <input id="base-ui-_r_e_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </ItemActions>
                  </Item>
                </div>
              </FramePanel>
            </CollapsibleContent>
          </Collapsible>
        </Frame>
        <Frame spacing="sm">
          <Collapsible data-open="">
            <Collapsible>
            <CollapsibleTrigger className="flex w-full" type="button" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_g_" aria-expanded="true">
              <header className="flex flex-row gap-2 grow items-center justify-between px-4 py-2">
                <div className="font-semibold text-sm">
                  {"Display"}
                </div>
                <svg className="in-data-open:rotate-90 lucide lucide-chevron-right mr-2 size-4 text-muted-foreground transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </header>
            </CollapsibleTrigger>
            </Collapsible>
            <CollapsibleContent data-open="" id="base-ui-_r_g_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
              <FramePanel className="p-0!">
                <div>
                  <Item className="px-4" variant="default" size="default">
                    <ItemContent>
                      <ItemTitle className="gap-2">
                        {"Color theme"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                          {"Shared"}
                        </Badge>
                      </ItemTitle>
                      <ItemDescription>
                        {"Choose your preferred color scheme."}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Select>
                      <SelectTrigger className="w-40" type="button" tabIndex="0" id="base-ui-_r_h_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Color theme">
                        <SelectValue>
                          {"System"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_h_-hidden-input" tabIndex="-1" aria-hidden="true" value="system" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Item className="px-4" variant="default" size="default">
                    <ItemContent>
                      <ItemTitle className="gap-2">
                        {"Sidebar position"}
                      </ItemTitle>
                      <ItemDescription>
                        {"Set the navigation sidebar placement."}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Select>
                      <SelectTrigger className="w-40" type="button" tabIndex="0" id="base-ui-_r_k_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Sidebar position">
                        <SelectValue>
                          {"Left"}
                        </SelectValue>
                        <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                          <path d="m6 9 6 6 6-6"></path>
                          {"▼"}
                        </svg>
                      </SelectTrigger>
                      </Select>
                      <input id="base-ui-_r_k_-hidden-input" tabIndex="-1" aria-hidden="true" value="left" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Item className="px-4" variant="default" size="default">
                    <ItemContent>
                      <ItemTitle className="gap-2">
                        {"Reduce animations"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                          {"Accessibility"}
                        </Badge>
                      </ItemTitle>
                      <ItemDescription>
                        {"Minimize motion for accessibility."}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_n_" aria-checked="false" size="default" aria-label="Reduce animations">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                      </Switch>
                      <input id="base-ui-_r_o_" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </ItemActions>
                  </Item>
                </div>
                <div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <Item className="px-4" variant="default" size="default">
                    <ItemContent>
                      <ItemTitle className="gap-2">
                        {"Show tooltips"}
                      </ItemTitle>
                      <ItemDescription>
                        {"Display helpful hints on hover."}
                      </ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_q_" aria-checked="true" size="default" aria-label="Show tooltips">
                        <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                      </Switch>
                      <input id="base-ui-_r_r_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    </ItemActions>
                  </Item>
                </div>
              </FramePanel>
            </CollapsibleContent>
          </Collapsible>
        </Frame>
      </div>
    </div>
  )
}
