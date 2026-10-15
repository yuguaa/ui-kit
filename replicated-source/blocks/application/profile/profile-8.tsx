import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
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
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
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
      <div className="flex flex-col gap-10 max-w-3xl w-full">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-0.5 max-w-2xl">
            <h1 className="font-semibold text-xl">
              Billing
            </h1>
            <p className="text-muted-foreground text-sm">
              Review the current plan, billing contact, and recent invoices.
            </p>
          </div>
          <Button className="self-start sm:self-auto" type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to profile
          </Button>
        </div>
        <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-destructive bg-destructive/4 border border-destructive/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
          <svg className="lucide lucide-shield-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
          </svg>
          <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
            Renewal is blocked.
          </AlertTitle>
          <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
            No company card is saved. Add one before May 3, 2026 so renewal, seat changes, and receipt delivery can continue normally.
          </AlertDescription>
          <AlertAction className="flex gap-1.5 max-sm:col-start-2 max-sm:justify-start max-sm:mt-2 sm:col-start-3 sm:justify-end sm:row-start-1 sm:self-center">
            <Button type="button" tabIndex="0">
              Add company card
            </Button>
          </AlertAction>
        </Alert>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-px min-w-0">
              <h2 className="font-semibold text-base">
                Plan
              </h2>
              <p className="text-muted-foreground text-sm">
                Current subscription and core usage.
              </p>
            </div>
          </div>
          <div className="gap-4 grid">
            <Card className="gap-0 p-0" size="default">
              <CardHeader className="gap-6 px-5 py-5 sm:px-6">
                <div className="gap-6 grid items-start md:grid-cols-[minmax(0,1fr)_minmax(10rem,13rem)]">
                  <div className="flex gap-4 min-w-0">
                    <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                          <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0 space-y-2">
                      <div className="flex flex-wrap gap-2 items-center">
                        <CardTitle>
                          Growth
                        </CardTitle>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                          Trial
                        </Badge>
                      </div>
                      <p className="text-sm">
                        <span className="font-medium">
                          $24.00
                        </span>
                        <span className="text-muted-foreground">
                          per editor / month
                        </span>
                      </p>
                      <p className="leading-6 max-w-xl text-muted-foreground text-sm">
                        Growth keeps audit history, automations, and workspace permissions on one monthly plan.
                      </p>
                    </div>
                  </div>
                  <dl className="gap-4 grid md:pl-4">
                    <div className="space-y-0.5">
                      <dt className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                        Renewal date
                      </dt>
                      <dd className="font-medium text-sm">
                        May 3, 2026
                      </dd>
                    </div>
                    <div className="space-y-0.5">
                      <dt className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                        Renewal status
                      </dt>
                      <dd className="font-medium text-sm">
                        Card required
                      </dd>
                    </div>
                    <div className="space-y-0.5">
                      <dt className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                        Billing owner
                      </dt>
                      <dd className="font-medium text-sm">
                        Mina Ortega
                      </dd>
                    </div>
                  </dl>
                </div>
              </CardHeader>
              <CardFooter className="border-t flex-col gap-2 items-start justify-between px-5 py-3 sm:flex-row sm:items-center sm:px-6">
                <p className="max-w-xl text-muted-foreground text-sm">
                  Renewal stays paused until a company card is added.
                </p>
                <Button type="button" tabIndex="0">
                  Manage plan
                </Button>
              </CardFooter>
            </Card>
            <Card className="gap-0 p-0" size="default">
              <CardContent className="gap-0 grid p-0 sm:divide-x sm:grid-cols-3">
                <div className="flex flex-col gap-4 justify-between min-h-[7.75rem] px-5 py-5 sm:px-6">
                  <div className="flex gap-3 items-center">
                    <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default" aria-hidden="true">
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
                        Seats
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Active editors
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold tabular-nums text-lg tracking-tight">
                    3 of 5
                  </p>
                </div>
                <div className="flex flex-col gap-4 justify-between min-h-[7.75rem] px-5 py-5 sm:px-6">
                  <div className="flex gap-3 items-center">
                    <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default" aria-hidden="true">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                          <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                          <path d="M10 9H8"></path>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="min-w-0">
                      <p className="font-medium text-sm">
                        Tracked records
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Used this month
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold tabular-nums text-lg tracking-tight">
                    218,430
                  </p>
                </div>
                <div className="flex flex-col gap-4 justify-between min-h-[7.75rem] px-5 py-5 sm:px-6">
                  <div className="flex gap-3 items-center">
                    <Item className="[&_svg]:size-4 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default" aria-hidden="true">
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
                        Automation credits
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Used this month
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold tabular-nums text-lg tracking-tight">
                    1,280
                  </p>
                </div>
              </CardContent>
              <CardFooter className="border-t flex-col gap-2 items-start justify-between px-5 py-3 sm:flex-row sm:items-center sm:px-6">
                <p className="max-w-xl text-muted-foreground text-sm">
                  Usage counters reset on May 3, 2026 with the next billing cycle.
                </p>
                <Button type="button" tabIndex="0">
                  View usage
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-px min-w-0">
              <h2 className="font-semibold text-base">
                Billing Details
              </h2>
              <p className="text-muted-foreground text-sm">
                Invoice contact and payment readiness.
              </p>
            </div>
            <div className="flex items-center shrink-0">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                  <path d="m15 5 4 4"></path>
                </svg>
                Edit details
              </Button>
            </div>
          </div>
          <Card className="gap-0 p-0" size="default">
            <CardContent className="p-0">
              <FieldGroup className="gap-0">
                <Field className="@md/field-group:gap-8 gap-4 px-5 py-4" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-3/5 @md/field-group:pr-2 @md/field-group:w-3/5 flex flex-col gap-0.5 min-w-0 w-full">
                    <div className="flex flex-wrap gap-2 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        Billing contact
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Billing contact details" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <FieldDescription className="leading-5 max-w-[28rem] text-sm">
                      Receives invoices and renewal notices.
                    </FieldDescription>
                  </div>
                  <FieldContent className="@md/field-group:basis-2/5 @md/field-group:w-2/5 min-w-0 w-full">
                    <div className="@md/field-group:justify-end flex justify-start w-full">
                      <span className="block font-medium max-w-full text-right text-sm truncate" title="billing@northstarstudio.co">
                        billing@northstarstudio.co
                      </span>
                    </div>
                  </FieldContent>
                </Field>
                <FieldSeparator content="false">
                  <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </FieldSeparator>
                <Field className="@md/field-group:gap-8 gap-4 px-5 py-4" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-3/5 @md/field-group:pr-2 @md/field-group:w-3/5 flex flex-col gap-0.5 min-w-0 w-full">
                    <div className="flex flex-wrap gap-2 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        Legal entity
                      </FieldLabel>
                    </div>
                    <FieldDescription className="leading-5 max-w-[28rem] text-sm">
                      Shown on invoices and receipts.
                    </FieldDescription>
                  </div>
                  <FieldContent className="@md/field-group:basis-2/5 @md/field-group:w-2/5 min-w-0 w-full">
                    <div className="@md/field-group:justify-end flex justify-start w-full">
                      <span className="block font-medium max-w-full text-right text-sm truncate" title="Northstar Studio GmbH">
                        Northstar Studio GmbH
                      </span>
                    </div>
                  </FieldContent>
                </Field>
                <FieldSeparator content="false">
                  <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </FieldSeparator>
                <Field className="@md/field-group:gap-8 gap-4 px-5 py-4" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-3/5 @md/field-group:pr-2 @md/field-group:w-3/5 flex flex-col gap-0.5 min-w-0 w-full">
                    <div className="flex flex-wrap gap-2 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        Region
                      </FieldLabel>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Region details" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <FieldDescription className="leading-5 max-w-[28rem] text-sm">
                      Used for tax and invoice formatting.
                    </FieldDescription>
                  </div>
                  <FieldContent className="@md/field-group:basis-2/5 @md/field-group:w-2/5 min-w-0 w-full">
                    <div className="@md/field-group:justify-end flex justify-start w-full">
                      <span className="block font-medium max-w-full text-right text-sm truncate" title="Berlin, Germany">
                        Berlin, Germany
                      </span>
                    </div>
                  </FieldContent>
                </Field>
                <FieldSeparator content="false">
                  <Separator className="absolute inset-0 top-1/2" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </FieldSeparator>
                <Field className="@md/field-group:gap-8 gap-4 px-5 py-4" role="group" data-orientation="responsive">
                  <div className="@md/field-group:basis-3/5 @md/field-group:pr-2 @md/field-group:w-3/5 flex flex-col gap-0.5 min-w-0 w-full">
                    <div className="flex flex-wrap gap-2 items-center min-w-0">
                      <FieldLabel className="cn-field-title items-center">
                        Payment method
                      </FieldLabel>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        Action required
                      </Badge>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Payment method details" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </div>
                    <FieldDescription className="leading-5 max-w-[28rem] text-sm">
                      Required before the trial renews.
                    </FieldDescription>
                  </div>
                  <FieldContent className="@md/field-group:basis-2/5 @md/field-group:w-2/5 min-w-0 w-full">
                    <div className="@md/field-group:justify-end flex justify-start w-full">
                      <span className="block max-w-full text-muted-foreground text-right text-sm truncate" title="No company card added">
                        No company card added
                      </span>
                    </div>
                  </FieldContent>
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-px min-w-0">
              <h2 className="font-semibold text-base">
                Invoice History
              </h2>
              <p className="text-muted-foreground text-sm">
                Recent invoices.
              </p>
            </div>
            <div className="flex items-center shrink-0">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
                Download all
              </Button>
            </div>
          </div>
          <Card className="gap-0 p-0" size="default">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <div className="cn-table-container">
                  <Table className="min-w-[42rem] table-fixed">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[22%]">
                          Invoice
                        </TableHead>
                        <TableHead className="w-[22%]">
                          Period
                        </TableHead>
                        <TableHead className="w-[18%]">
                          Date
                        </TableHead>
                        <TableHead className="w-[16%]">
                          Total
                        </TableHead>
                        <TableHead className="text-right w-[14%]">
                          Status
                        </TableHead>
                        <TableHead className="text-right w-[8%]">
                          <span className="sr-only">
                            Download
                          </span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium whitespace-nowrap">
                          <a className="hover:text-primary hover:underline inline-flex text-foreground transition-colors underline-offset-4" href="#">
                            INV-4208
                          </a>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Apr 2026
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Apr 2, 2026
                        </TableCell>
                        <TableCell className="font-semibold tabular-nums tracking-tight whitespace-nowrap">
                          $0.00
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                            Credited
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button type="button" tabIndex="0" aria-label="Download INV-4208">
                            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                              <path d="M12 15V3"></path>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <path d="m7 10 5 5 5-5"></path>
                            </svg>
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-nowrap">
                          <a className="hover:text-primary hover:underline inline-flex text-foreground transition-colors underline-offset-4" href="#">
                            INV-4079
                          </a>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Mar 2026
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Mar 2, 2026
                        </TableCell>
                        <TableCell className="font-semibold tabular-nums tracking-tight whitespace-nowrap">
                          $96.00
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            Paid
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button type="button" tabIndex="0" aria-label="Download INV-4079">
                            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                              <path d="M12 15V3"></path>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <path d="m7 10 5 5 5-5"></path>
                            </svg>
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-nowrap">
                          <a className="hover:text-primary hover:underline inline-flex text-foreground transition-colors underline-offset-4" href="#">
                            INV-3912
                          </a>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Feb 2026
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Feb 2, 2026
                        </TableCell>
                        <TableCell className="font-semibold tabular-nums tracking-tight whitespace-nowrap">
                          $72.00
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            Paid
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button type="button" tabIndex="0" aria-label="Download INV-3912">
                            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                              <path d="M12 15V3"></path>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <path d="m7 10 5 5 5-5"></path>
                            </svg>
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-nowrap">
                          <a className="hover:text-primary hover:underline inline-flex text-foreground transition-colors underline-offset-4" href="#">
                            INV-3784
                          </a>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Jan 2026
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Jan 2, 2026
                        </TableCell>
                        <TableCell className="font-semibold tabular-nums tracking-tight whitespace-nowrap">
                          $72.00
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            Paid
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button type="button" tabIndex="0" aria-label="Download INV-3784">
                            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                              <path d="M12 15V3"></path>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <path d="m7 10 5 5 5-5"></path>
                            </svg>
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-nowrap">
                          <a className="hover:text-primary hover:underline inline-flex text-foreground transition-colors underline-offset-4" href="#">
                            INV-3642
                          </a>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Dec 2025
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Dec 2, 2025
                        </TableCell>
                        <TableCell className="font-semibold tabular-nums tracking-tight whitespace-nowrap">
                          $72.00
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            Paid
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button type="button" tabIndex="0" aria-label="Download INV-3642">
                            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                              <path d="M12 15V3"></path>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <path d="m7 10 5 5 5-5"></path>
                            </svg>
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium whitespace-nowrap">
                          <a className="hover:text-primary hover:underline inline-flex text-foreground transition-colors underline-offset-4" href="#">
                            INV-3501
                          </a>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Nov 2025
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                          Nov 2, 2025
                        </TableCell>
                        <TableCell className="font-semibold tabular-nums tracking-tight whitespace-nowrap">
                          $48.00
                        </TableCell>
                        <TableCell className="text-right">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                            Paid
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button type="button" tabIndex="0" aria-label="Download INV-3501">
                            <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" aria-hidden="true">
                              <path d="M12 15V3"></path>
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                              <path d="m7 10 5 5 5-5"></path>
                            </svg>
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
