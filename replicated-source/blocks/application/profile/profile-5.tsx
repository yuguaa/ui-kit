import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/registry/bases/base/ui/progress"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Switch } from "@/registry/bases/base/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="flex flex-col gap-7 max-w-3xl w-full">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 max-w-xl">
            <div className="flex flex-wrap gap-2 items-center">
              <h1 className="font-semibold text-xl tracking-tight">
                {"Notification Settings"}
              </h1>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                {"Synced"}
              </Badge>
            </div>
            <p className="leading-5 text-muted-foreground text-sm">
              {"Set digest cadence and route collaboration alerts across email and in-app delivery."}
            </p>
          </div>
          <Button className="self-start sm:self-center" type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            {"Back to Profile"}
          </Button>
        </div>
        <section className="flex flex-col gap-3.5 mt-1">
          <div className="flex flex-col gap-px">
            <h2 className="font-semibold text-base tracking-tight">
              {"Daily Briefing"}
            </h2>
            <p className="leading-5 text-muted-foreground text-sm">
              {"Batch open work into one calm morning summary."}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Card className="gap-0 p-0" size="default">
              <CardContent className="gap-0 grid p-0 sm:grid-cols-3">
                <div className="flex gap-3 items-start min-w-0 px-5 py-4">
                  <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 6v6l4 2"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-1 flex-col gap-2 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <p className="font-medium min-w-0 text-sm truncate">
                        {"Time"}
                      </p>
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm shrink-0 text-muted-foreground transition-colors" type="button" aria-label="Time info" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-baseline">
                      <p className="font-semibold leading-none tabular-nums text-base tracking-tight">
                        {"8:30"}
                      </p>
                      <p className="font-medium text-muted-foreground text-xs">
                        {"AM local"}
                      </p>
                    </div>
                    <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:bg-muted/80 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:h-1 **:data-[slot=progress-track]:min-w-10 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-value]:order-2 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="92" aria-valuetext="92%" role="progressbar" aria-labelledby="base-ui-_r_2_">
                      <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_2_" role="presentation">
                        {"Time readiness"}
                      </ProgressLabel>
                      <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                        {"92%"}
                      </ProgressValue>
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "92%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                  </div>
                </div>
                <div className="border-t flex gap-3 items-start min-w-0 px-5 py-4 sm:border-l sm:border-t-0">
                  <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-1 flex-col gap-2 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <p className="font-medium min-w-0 text-sm truncate">
                        {"Channel"}
                      </p>
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm shrink-0 text-muted-foreground transition-colors" type="button" aria-label="Channel info" id="base-ui-_r_4_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-baseline">
                      <p className="font-semibold leading-none text-base tracking-tight">
                        {"Email"}
                      </p>
                      <p className="font-medium text-muted-foreground text-xs">
                        {"Digest"}
                      </p>
                    </div>
                    <Progress className="**:data-[slot=progress-indicator]:bg-emerald-500 **:data-[slot=progress-track]:bg-muted/80 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:h-1 **:data-[slot=progress-track]:min-w-10 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-value]:order-2 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="97" aria-valuetext="97%" role="progressbar" aria-labelledby="base-ui-_r_5_">
                      <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_5_" role="presentation">
                        {"Channel readiness"}
                      </ProgressLabel>
                      <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                        {"97%"}
                      </ProgressValue>
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "97%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                  </div>
                </div>
                <div className="border-t flex gap-3 items-start min-w-0 px-5 py-4 sm:border-l sm:border-t-0">
                  <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default" aria-hidden="true">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="lucide lucide-calendar-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarCheckIcon" tabler="IconCalendarCheck" hugeicons="CalendarCheckIn01Icon" phosphor="CalendarCheckIcon" remixicon="RiCalendarCheckLine" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                        <path d="m9 16 2 2 4-4"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <div className="flex flex-1 flex-col gap-2 min-w-0">
                    <div className="flex gap-1.5 items-center min-w-0">
                      <p className="font-medium min-w-0 text-sm truncate">
                        {"Scope"}
                      </p>
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm shrink-0 text-muted-foreground transition-colors" type="button" aria-label="Scope info" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-baseline">
                      <p className="font-semibold leading-none text-base tracking-tight">
                        {"Today"}
                      </p>
                      <p className="font-medium text-muted-foreground text-xs">
                        {"+ overdue"}
                      </p>
                    </div>
                    <Progress className="**:data-[slot=progress-indicator]:bg-amber-500 **:data-[slot=progress-track]:bg-muted/80 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:h-1 **:data-[slot=progress-track]:min-w-10 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-value]:order-2 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="78" aria-valuetext="78%" role="progressbar" aria-labelledby="base-ui-_r_8_">
                      <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_8_" role="presentation">
                        {"Scope readiness"}
                      </ProgressLabel>
                      <ProgressValue className="leading-none shrink-0 tabular-nums text-[10px] text-muted-foreground" progressing="" aria-hidden="true">
                        {"78%"}
                      </ProgressValue>
                      <ProgressTrack progressing="">
                        <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "78%"}}></ProgressIndicator>
                      </ProgressTrack>
                      <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                        {"x"}
                      </span>
                    </Progress>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="gap-0 p-0" size="default">
              <CardContent className="p-0">
                <FieldGroup>
                  <Field className="gap-4 items-start px-5 py-4" role="group" data-orientation="responsive">
                    <div className="@md/field-group:max-w-xl flex flex-1 gap-3 items-start min-w-0">
                      <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default" aria-hidden="true">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                      <div className="flex flex-col gap-1 min-w-0">
                        <div className="flex flex-wrap gap-2 items-center">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="profile-5-daily-briefing" id="profile-5-daily-briefing-label">
                            {"Morning Digest"}
                          </FieldLabel>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                            {"Weekdays"}
                          </Badge>
                        </div>
                        <FieldDescription className="leading-5">
                          {"Bundle due-today work and overdue follow-ups into one calm summary."}
                        </FieldDescription>
                      </div>
                    </div>
                    <FieldContent className="@md/field-group:w-78 min-w-0">
                      <div className="@md/field-group:justify-end flex gap-3 items-center justify-between w-full">
                        <span className="@md/field-group:hidden text-muted-foreground text-sm">
                          {"Enabled"}
                        </span>
                        <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_9_" aria-checked="true" size="default" aria-label="Morning Digest" aria-labelledby="profile-5-daily-briefing-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="profile-5-daily-briefing" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="flex flex-col gap-3.5">
          <div className="flex flex-col gap-px">
            <h2 className="font-semibold text-base tracking-tight">
              {"Collaboration Alerts"}
            </h2>
            <p className="leading-5 text-muted-foreground text-sm">
              {"Route shared-work events to email or in-app delivery."}
            </p>
          </div>
          <Card className="gap-0 p-0" size="default">
            <CardContent className="p-0">
              <div className="border-b flex gap-3 items-center justify-between px-5 py-3">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="font-medium text-sm">
                    {"Delivery Rules"}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {"Choose a channel for each collaboration event."}
                  </p>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                  {"6 types"}
                </Badge>
              </div>
              <ScrollArea className="[&>[data-slot=scroll-area-scrollbar][data-orientation=vertical]]:hidden w-full whitespace-nowrap" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
                <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_c_-viewport" tabIndex="-1" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
                  <div className="min-w-[44rem]">
                    <div className="cn-table-container">
                      <Table className="table-fixed w-full">
                        <TableHeader>
                          <TableRow>
                            <TableHead className="font-semibold min-w-[27rem] pl-5 pr-6 py-3 w-[27rem]">
                              {"Alert Type"}
                            </TableHead>
                            <TableHead className="font-medium min-w-[8.5rem] px-0 py-3 text-center text-muted-foreground text-xs w-[8.5rem] whitespace-nowrap">
                              <div className="flex gap-1.5 items-center justify-center whitespace-nowrap">
                                <span className="[&_svg]:size-4 text-muted-foreground">
                                  <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                  </svg>
                                </span>
                                <span>
                                  {"Email"}
                                </span>
                              </div>
                            </TableHead>
                            <TableHead className="font-medium min-w-[8.5rem] pl-0 pr-5 py-3 text-center text-muted-foreground text-xs w-[8.5rem] whitespace-nowrap">
                              <div className="flex gap-1.5 items-center justify-center whitespace-nowrap">
                                <span className="[&_svg]:size-4 text-muted-foreground">
                                  <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                  </svg>
                                </span>
                                <span>
                                  {"In App"}
                                </span>
                              </div>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="align-middle pl-5 pr-6 py-3.5">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <p className="font-medium leading-5 text-sm">
                                  {"Direct mentions"}
                                </p>
                                <p className="leading-5 text-muted-foreground text-xs">
                                  {"When someone tags you in a note, comment, or shared handoff."}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] px-0 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_d_" aria-checked="true" aria-label="Direct mentions via Email">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] pl-0 pr-5 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_g_" aria-checked="true" aria-label="Direct mentions via In App">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="align-middle pl-5 pr-6 py-3.5">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <p className="font-medium leading-5 text-sm">
                                  {"Thread replies"}
                                </p>
                                <p className="leading-5 text-muted-foreground text-xs">
                                  {"When a teammate replies to work you started or followed."}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] px-0 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_j_" aria-checked="true" aria-label="Thread replies via Email">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] pl-0 pr-5 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_m_" aria-checked="true" aria-label="Thread replies via In App">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="align-middle pl-5 pr-6 py-3.5">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <p className="font-medium leading-5 text-sm">
                                  {"Approval requests"}
                                </p>
                                <p className="leading-5 text-muted-foreground text-xs">
                                  {"Role reviews, access decisions, and requests waiting on you."}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] px-0 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_p_" aria-checked="true" aria-label="Approval requests via Email">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] pl-0 pr-5 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_s_" aria-checked="true" aria-label="Approval requests via In App">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="align-middle pl-5 pr-6 py-3.5">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <p className="font-medium leading-5 text-sm">
                                  {"Ownership changes"}
                                </p>
                                <p className="leading-5 text-muted-foreground text-xs">
                                  {"When work is assigned to you or handed back to your queue."}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] px-0 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_v_" aria-checked="false" aria-label="Ownership changes via Email"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] pl-0 pr-5 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_12_" aria-checked="true" aria-label="Ownership changes via In App">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="align-middle pl-5 pr-6 py-3.5">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <p className="font-medium leading-5 text-sm">
                                  {"Shared files"}
                                </p>
                                <p className="leading-5 text-muted-foreground text-xs">
                                  {"When a teammate drops a brief, recap, or attachment into a thread."}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] px-0 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_15_" aria-checked="true" aria-label="Shared files via Email">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] pl-0 pr-5 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_18_" aria-checked="false" aria-label="Shared files via In App"></Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="align-middle pl-5 pr-6 py-3.5">
                              <div className="flex flex-col gap-0.5 min-w-0">
                                <p className="font-medium leading-5 text-sm">
                                  {"Workflow reviews"}
                                </p>
                                <p className="leading-5 text-muted-foreground text-xs">
                                  {"When an automation request is approved, denied, or sent back."}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] px-0 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1b_" aria-checked="true" aria-label="Workflow reviews via Email">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                            <TableCell className="align-middle min-w-[8rem] pl-0 pr-5 py-3.5 w-[8rem]">
                              <div className="flex justify-center">
                                <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1e_" aria-checked="true" aria-label="Workflow reviews via In App">
                                  <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                                    <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                                      <path d="M20 6 9 17l-5-5"></path>
                                    </svg>
                                  </span>
                                </Checkbox>
                                <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                              </div>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter className="border-t px-5 py-4">
              <div className="flex gap-1.5 items-start w-full">
                <p className="text-muted-foreground text-sm">
                  {"Keep direct mentions and approval requests reachable."}
                </p>
                <Tooltip>
                <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex p-0.5 rounded-sm shrink-0 text-muted-foreground transition-colors" type="button" aria-label="Notification routing guidance" id="base-ui-_r_1i_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  )
}
