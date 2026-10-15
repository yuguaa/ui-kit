import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
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
  FieldSeparator,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@/registry/bases/base/ui/progress"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="flex flex-col gap-8 max-w-3xl w-full">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-0.5 max-w-lg">
            <div className="flex flex-wrap gap-2 items-center">
              <h1 className="font-semibold text-xl">
                Partner Rewards
              </h1>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                Active Program
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm">
              Share one private invite and track the credits your referrals unlock.
            </p>
          </div>
          <Button className="self-start sm:self-auto" type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" data-icon="inline-start" aria-hidden="true">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Profile
          </Button>
        </div>
        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-px sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-px min-w-0">
              <h2 className="font-semibold text-base">
                Referral Link
              </h2>
              <p className="text-muted-foreground text-sm">
                Share one invite and keep the offer clear.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Card className="gap-0 p-0" size="default">
              <CardContent className="gap-0 grid p-0 sm:grid-cols-3">
                <div className="flex flex-col gap-3 justify-between min-h-32 px-5 py-4 sm:px-6">
                  <div className="flex gap-3 items-start justify-between">
                    <div className="flex gap-3 items-center min-w-0">
                      <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                            <path d="M20 2v4"></path>
                            <path d="M22 4h-4"></path>
                            <circle cx="4" cy="20" r="2"></circle>
                          </svg>
                        </ItemMedia>
                      </Item>
                      <div className="min-w-0">
                        <p className="font-medium text-sm">
                          Offer
                        </p>
                        <p className="text-muted-foreground text-sm truncate">
                          First paid quarter
                        </p>
                      </div>
                    </div>
                    <Tooltip>
                    <TooltipTrigger className="-me-1 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Offer info" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <p className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                    15%
                  </p>
                  <Progress className="**:data-[slot=progress-indicator]:bg-success **:data-[slot=progress-track]:bg-muted/80 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:min-w-10 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-value]:order-2 flex-nowrap flex-row gap-2 items-center min-w-0" complete="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" aria-valuetext="100%" role="progressbar" aria-labelledby="base-ui-_r_2_">
                    <ProgressLabel className="sr-only" complete="" id="base-ui-_r_2_" role="presentation">
                      Offer progress
                    </ProgressLabel>
                    <ProgressValue className="leading-none shrink-0 tabular-nums text-muted-foreground text-xs" complete="" aria-hidden="true">
                      100%
                    </ProgressValue>
                    <ProgressTrack complete="">
                      <ProgressIndicator complete="" style={{insetInlineStart: "0px", height: "inherit", width: "100%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
                <div className="border-t flex flex-col gap-3 justify-between min-h-32 px-5 py-4 sm:border-l sm:border-t-0 sm:px-6">
                  <div className="flex gap-3 items-start justify-between">
                    <div className="flex gap-3 items-center min-w-0">
                      <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                        </ItemMedia>
                      </Item>
                      <div className="min-w-0">
                        <p className="font-medium text-sm">
                          Qualified Teams
                        </p>
                        <p className="text-muted-foreground text-sm truncate">
                          This cycle
                        </p>
                      </div>
                    </div>
                    <Tooltip>
                    <TooltipTrigger className="-me-1 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Qualified Teams info" id="base-ui-_r_4_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <p className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                    14
                  </p>
                  <Progress className="**:data-[slot=progress-indicator]:bg-info **:data-[slot=progress-track]:bg-muted/80 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:min-w-10 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-value]:order-2 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" aria-valuetext="70%" role="progressbar" aria-labelledby="base-ui-_r_5_">
                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_5_" role="presentation">
                      Qualified Teams progress
                    </ProgressLabel>
                    <ProgressValue className="leading-none shrink-0 tabular-nums text-muted-foreground text-xs" progressing="" aria-hidden="true">
                      70%
                    </ProgressValue>
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "70%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
                <div className="border-t flex flex-col gap-3 justify-between min-h-32 px-5 py-4 sm:border-l sm:border-t-0 sm:px-6">
                  <div className="flex gap-3 items-start justify-between">
                    <div className="flex gap-3 items-center min-w-0">
                      <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="lucide lucide-circle-dollar-sign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                            <path d="M12 18V6"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                      <div className="min-w-0">
                        <p className="font-medium text-sm">
                          Credits Applied
                        </p>
                        <p className="text-muted-foreground text-sm truncate">
                          Ready for billing
                        </p>
                      </div>
                    </div>
                    <Tooltip>
                    <TooltipTrigger className="-me-1 -mt-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Credits Applied info" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                  <p className="font-semibold leading-none tabular-nums text-2xl tracking-tight">
                    $620
                  </p>
                  <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-track]:bg-muted/80 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:h-1.5 **:data-[slot=progress-track]:min-w-10 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-value]:order-2 flex-nowrap flex-row gap-2 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="62" aria-valuetext="62%" role="progressbar" aria-labelledby="base-ui-_r_8_">
                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_8_" role="presentation">
                      Credits Applied progress
                    </ProgressLabel>
                    <ProgressValue className="leading-none shrink-0 tabular-nums text-muted-foreground text-xs" progressing="" aria-hidden="true">
                      62%
                    </ProgressValue>
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "62%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
              </CardContent>
            </Card>
            <Card className="gap-0 p-0" size="default">
              <CardHeader className="border-b items-center px-5 py-3.5 sm:px-6">
                <div className="min-w-0">
                  <CardTitle>
                    Personal Link
                  </CardTitle>
                  <CardDescription>
                    One private invite for every channel.
                  </CardDescription>
                </div>
                <CardAction>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/30 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                    April Cycle
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <div className="px-5 py-4 sm:px-6">
                    <Field role="group" data-orientation="vertical">
                      <InputGroup role="group">
                        <InputGroupAddon role="group" data-align="inline-start">
                          <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                            <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                          </span>
                        </InputGroupAddon>
                        <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="profile-6-link" readOnly value="orbit/r/partner-rewards" />
                        <InputGroupAddon role="group" data-align="inline-end">
                          <Button className="cn-input-group-button cn-input-group-button-size-xs flex shadow-none" type="button" tabIndex="0" size="xs" aria-label="Copy referral link">
                            <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" aria-hidden="true">
                              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                            </svg>
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </Field>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="flex gap-3 items-start px-5 py-4 sm:px-6">
                    <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border mt-0.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <div className="font-medium leading-5 max-w-full text-sm truncate">
                        14 active days
                      </div>
                      <p className="leading-5 text-balance text-muted-foreground text-sm">
                        New workspaces qualify after two weeks of active usage.
                      </p>
                    </div>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="flex gap-3 items-start px-5 py-4 sm:px-6">
                    <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border mt-0.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-circle-dollar-sign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                          <path d="M12 18V6"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <div className="font-medium leading-5 max-w-full text-sm truncate">
                        First invoice cleared
                      </div>
                      <p className="leading-5 text-balance text-muted-foreground text-sm">
                        Credits and points unlock when the first paid invoice lands.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t flex-col gap-3 items-start justify-between px-5 py-3.5 sm:flex-row sm:items-center sm:px-6">
                <p className="max-w-xl text-muted-foreground text-sm">
                  Use this link for partner emails, community posts, and handoffs.
                </p>
                <div className="flex flex-wrap gap-2 items-center">
                  <Button type="button" tabIndex="0">
                    <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" data-icon="inline-start" aria-hidden="true">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    Terms
                  </Button>
                  <Button type="button" tabIndex="0">
                    <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" data-icon="inline-start" aria-hidden="true">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                    Copy Note
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-px sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-px min-w-0">
              <h2 className="font-semibold text-base">
                Reward Progress
              </h2>
              <p className="text-muted-foreground text-sm">
                Track points and the next unlock.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Card className="gap-0 p-0" size="default">
              <CardHeader className="border-b items-center px-5 py-3.5 sm:px-6">
                <div className="min-w-0">
                  <CardTitle>
                    Next Unlock
                  </CardTitle>
                  <CardDescription>
                    Advisory Sprint
                  </CardDescription>
                </div>
                <CardAction className="self-center">
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    58% ready
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="px-5 py-4 sm:px-6">
                <div className="flex flex-col gap-3">
                  <p className="text-muted-foreground text-sm">
                    Unlock a rollout review with planning and one focused strategy call.
                  </p>
                  <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-track]:bg-muted/80 **:data-[slot=progress-track]:flex-1 **:data-[slot=progress-track]:h-2 **:data-[slot=progress-track]:min-w-10 **:data-[slot=progress-track]:order-1 **:data-[slot=progress-track]:rounded-full **:data-[slot=progress-value]:order-2 flex-nowrap flex-row gap-2.5 items-center min-w-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="58" aria-valuetext="58%" role="progressbar" aria-labelledby="base-ui-_r_a_">
                    <ProgressLabel className="sr-only" progressing="" id="base-ui-_r_a_" role="presentation">
                      Next unlock progress
                    </ProgressLabel>
                    <ProgressValue className="leading-none shrink-0 tabular-nums text-muted-foreground text-xs" progressing="" aria-hidden="true">
                      58%
                    </ProgressValue>
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "58%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
              </CardContent>
            </Card>
            <Card className="gap-0 p-0" size="default">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto] items-center px-5 py-4 sm:px-6">
                    <div className="flex gap-3 items-start min-w-0">
                      <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border mt-0.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="lucide lucide-circle-dollar-sign" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleDollarSignIcon" tabler="IconPremiumRights" hugeicons="DollarCircleIcon" phosphor="CurrencyCircleDollarIcon" remixicon="RiMoneyDollarCircleLine" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                            <path d="M12 18V6"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="font-medium leading-5 max-w-full text-sm truncate">
                          Workspace Credit
                        </div>
                        <p className="leading-5 text-balance text-muted-foreground text-sm">
                          Apply billing credit to the next paid workspace cycle.
                        </p>
                      </div>
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                      Unlocked
                    </Badge>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto] items-center px-5 py-4 sm:px-6">
                    <div className="flex gap-3 items-start min-w-0">
                      <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border mt-0.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                            <path d="M20 2v4"></path>
                            <path d="M22 4h-4"></path>
                            <circle cx="4" cy="20" r="2"></circle>
                          </svg>
                        </ItemMedia>
                      </Item>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="font-medium leading-5 max-w-full text-sm truncate">
                          Advisory Sprint
                        </div>
                        <p className="leading-5 text-balance text-muted-foreground text-sm">
                          Book a rollout review for onboarding and activation.
                        </p>
                      </div>
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                      Next
                    </Badge>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto] items-center px-5 py-4 sm:px-6">
                    <div className="flex gap-3 items-start min-w-0">
                      <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border mt-0.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="lucide lucide-rocket" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                            <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <div className="font-medium leading-5 max-w-full text-sm truncate">
                          Migration Concierge
                        </div>
                        <p className="leading-5 text-balance text-muted-foreground text-sm">
                          Unlock hands-on setup support for the next referred team.
                        </p>
                      </div>
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                      Locked
                    </Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t px-5 py-3.5 sm:px-6">
                <div className="flex gap-1.5 items-center">
                  <p className="min-w-0 text-muted-foreground text-sm">
                    Points post after activation and the first paid invoice.
                  </p>
                  <Tooltip>
                  <TooltipTrigger className="-my-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reward qualification details" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-px sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-px min-w-0">
              <h2 className="font-semibold text-base">
                Recent Referrals
              </h2>
              <p className="text-muted-foreground text-sm">
                Qualified, pending, and under review.
              </p>
            </div>
          </div>
          <Card className="gap-0 p-0" size="default">
            <CardContent className="p-0">
              <FieldGroup className="gap-0">
                <Field className="@md/field-group:gap-12 gap-4 px-5 py-4 sm:px-6" role="group" data-orientation="responsive">
                  <div className="@md/field-group:flex-1 flex gap-3 items-start min-w-0">
                    <Avatar size="sm">
                      <AvatarImage alt="Northwind Labs" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <FieldLabel className="cn-field-title items-center min-w-0 w-full">
                        <span className="truncate">
                          Northwind Labs
                        </span>
                      </FieldLabel>
                      <FieldDescription className="flex flex-wrap gap-1.5 items-center leading-5 min-w-0 text-sm">
                        <span>
                          18 seats active
                        </span>
                        <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          Qualified
                        </span>
                        <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          4 days ago
                        </span>
                      </FieldDescription>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:flex-none min-w-0">
                    <div className="@md/field-group:justify-end flex justify-start w-full">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                        Qualified
                      </Badge>
                    </div>
                  </FieldContent>
                </Field>
                <FieldSeparator content="false">
                  <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </FieldSeparator>
                <Field className="@md/field-group:gap-12 gap-4 px-5 py-4 sm:px-6" role="group" data-orientation="responsive">
                  <div className="@md/field-group:flex-1 flex gap-3 items-start min-w-0">
                    <Avatar size="sm">
                      <AvatarImage alt="Relay Grid" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <FieldLabel className="cn-field-title items-center min-w-0 w-full">
                        <span className="truncate">
                          Relay Grid
                        </span>
                      </FieldLabel>
                      <FieldDescription className="flex flex-wrap gap-1.5 items-center leading-5 min-w-0 text-sm">
                        <span>
                          6 seats live
                        </span>
                        <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          Invoice pending
                        </span>
                        <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          Today
                        </span>
                      </FieldDescription>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:flex-none min-w-0">
                    <div className="@md/field-group:justify-end flex justify-start w-full">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        Pending
                      </Badge>
                    </div>
                  </FieldContent>
                </Field>
                <FieldSeparator content="false">
                  <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </FieldSeparator>
                <Field className="@md/field-group:gap-12 gap-4 px-5 py-4 sm:px-6" role="group" data-orientation="responsive">
                  <div className="@md/field-group:flex-1 flex gap-3 items-start min-w-0">
                    <Avatar size="sm">
                      <AvatarImage alt="Studio Harbor" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                    <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                      <FieldLabel className="cn-field-title items-center min-w-0 w-full">
                        <span className="truncate">
                          Studio Harbor
                        </span>
                      </FieldLabel>
                      <FieldDescription className="flex flex-wrap gap-1.5 items-center leading-5 min-w-0 text-sm">
                        <span>
                          Enterprise review
                        </span>
                        <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          Security review
                        </span>
                        <span className="bg-muted-foreground/50 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span>
                          Open
                        </span>
                      </FieldDescription>
                    </div>
                  </div>
                  <FieldContent className="@md/field-group:flex-none min-w-0">
                    <div className="@md/field-group:justify-end flex justify-start w-full">
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        In Review
                      </Badge>
                    </div>
                  </FieldContent>
                </Field>
              </FieldGroup>
            </CardContent>
            <CardFooter className="border-t flex-col gap-3 items-start justify-between px-5 py-3 sm:flex-row sm:items-center sm:px-6">
              <p className="max-w-xl text-muted-foreground text-sm">
                Export a clean referral snapshot for finance or growth.
              </p>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                Export Activity
              </Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  )
}
