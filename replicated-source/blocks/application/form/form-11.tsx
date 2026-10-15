import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
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
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex items-start justify-center min-h-svh px-4 py-6 sm:px-6 sm:py-10 w-full">
      <Card className="gap-0 max-w-3xl p-0 w-full" size="default">
        <CardHeader className="border-b border-border gap-1 px-5 py-4 sm:px-6">
          <CardTitle>
            {"New App"}
          </CardTitle>
          <CardDescription>
            {"Create a launch-ready app from a brief, source, and starter."}
          </CardDescription>
        </CardHeader>
        <form id="form-11-app-launch">
          <CardContent className="p-0">
            <div className="px-5 py-4 sm:px-6">
              <div className="bg-[linear-gradient(155deg,oklch(0.24_0.15_258)_0%,oklch(0.37_0.18_282)_36%,oklch(0.68_0.19_318)_67%,oklch(0.86_0.13_48)_100%)] isolate overflow-hidden p-4 relative rounded-md sm:p-5 text-white">
                <div className="absolute bg-[linear-gradient(100deg,oklch(0.18_0.15_252)_0%,transparent_48%),linear-gradient(28deg,oklch(0.91_0.11_42)_0%,transparent_45%)] inset-0 opacity-90 pointer-events-none"></div>
                <div className="absolute bg-[linear-gradient(180deg,transparent_0%,oklch(0.87_0.14_330)_100%)] inset-0 opacity-50 pointer-events-none"></div>
                <div className="flex flex-col gap-4 min-w-0 relative sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex gap-3 items-start min-w-0">
                    <Item className="bg-white/15 border border-white/20 p-0 size-10" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-rocket size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                          <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <p className="font-medium text-white/70 text-xs">
                        {"Launch setup"}
                      </p>
                      <h2 className="font-semibold leading-6 text-lg truncate">
                        {"Response Hub"}
                      </h2>
                      <p className="line-clamp-1 mt-1 text-sm text-white/75">
                        {"Incident queues, escalation notes, and executive readouts."}
                      </p>
                    </div>
                  </div>
                  <div className="backdrop-blur bg-background/95 p-3 rounded-md shadow-black/15 shadow-lg sm:w-64 text-foreground text-sm w-full">
                    <div className="gap-1.5 grid">
                      <div className="flex gap-3 items-center justify-between min-w-0">
                        <span className="shrink-0 text-muted-foreground">
                          {"Source"}
                        </span>
                        <span className="font-medium truncate">
                          {"meadow-relay"}
                        </span>
                      </div>
                      <div className="flex gap-3 items-center justify-between min-w-0">
                        <span className="shrink-0 text-muted-foreground">
                          {"Runtime"}
                        </span>
                        <span className="font-medium truncate">
                          {"Next.js App"}
                        </span>
                      </div>
                      <div className="flex gap-3 items-center justify-between min-w-0">
                        <span className="shrink-0 text-muted-foreground">
                          {"Region"}
                        </span>
                        <span className="font-medium truncate">
                          {"US East"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5 sm:px-6">
              <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <FieldSet className="gap-0">
              <FieldLegend className="sr-only" variant="legend">
                {"New app launch"}
              </FieldLegend>
              <FieldDescription className="sr-only">
                {"Configure launch brief, starter, source, app name, route, runtime, and region."}
              </FieldDescription>
              <FieldGroup className="gap-0">
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-start px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-11-launch-prompt">
                      {"Launch Brief"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Describe the first version."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Textarea className="min-h-24" id="form-11-launch-prompt">
                      {"Create a service desk app with priority queues, SLA badges, and owner handoff notes."}
                    </Textarea>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-11-template">
                      {"Starter"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Base app surface."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="form-11-template" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"Response Hub"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_0_-hidden-input" tabIndex={-1} aria-hidden="true" value="response-hub" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-11-repository">
                      {"Source"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Repository to connect."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="form-11-repository" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"meadow-relay"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_3_-hidden-input" tabIndex={-1} aria-hidden="true" value="meadow-relay" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-11-app-name">
                      {"App Name"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Display name for the app."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Input id="form-11-app-name" autoComplete="organization" value="Meadow Relay"></Input>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-11-app-slug">
                      {"App URL"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Public route for previews."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <InputGroup role="group">
                      <InputGroupAddon className="pl-3 pr-0" role="group" data-align="inline-start">
                        <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center text-muted-foreground">
                          {"studio.neui.dev/"}
                        </span>
                      </InputGroupAddon>
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="form-11-app-slug" autoComplete="off" value="meadow-relay" />
                    </InputGroup>
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-11-runtime">
                      {"Runtime"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Where the app executes."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="form-11-runtime" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"Next.js App"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_8_-hidden-input" tabIndex={-1} aria-hidden="true" value="next-app" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
                <div className="px-5 sm:px-6">
                  <Separator className="bg-transparent border-border data-horizontal:border-dashed data-horizontal:border-t data-horizontal:h-0" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <Field className="gap-3 grid md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:items-center px-5 py-4 sm:px-6" role="group" data-orientation="vertical">
                  <FieldContent className="gap-0.5 md:pt-0.5">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="form-11-region">
                      {"Region"}
                    </FieldLabel>
                    <FieldDescription>
                      {"Deployment location."}
                    </FieldDescription>
                  </FieldContent>
                  <div className="min-w-0">
                    <Select>
                    <SelectTrigger className="[&_small]:hidden w-full" type="button" tabIndex={0} id="form-11-region" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                      <SelectValue>
                        {"US East"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_b_-hidden-input" tabIndex={-1} aria-hidden="true" value="iad" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </Field>
              </FieldGroup>
            </FieldSet>
          </CardContent>
          <CardFooter className="gap-2 justify-end px-5 py-4 sm:px-6">
            <Button type="reset" tabIndex={0}>
              {"Cancel"}
            </Button>
            <Button type="submit" tabIndex={0}>
              <svg className="lucide lucide-rocket" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
              </svg>
              {"Create App"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
