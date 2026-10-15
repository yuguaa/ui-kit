import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="@container bg-background dark flex flex-col justify-center min-h-svh overflow-clip relative text-foreground w-full" aria-labelledby="pricing-6-title">
        <div className="absolute bg-radial-[ellipse_70%_100%_at_50%_0%] from-white/14 h-176 inset-x-0 pointer-events-none to-75% to-transparent top-0 via-40% via-white/5" aria-hidden="true"></div>
        <div className="@4xl:py-16 @min-[40rem]:px-6 @min-[64rem]:px-8 flex flex-col gap-10 max-w-6xl mx-auto px-4 py-12 relative w-full">
          <div className="flex flex-col gap-10 items-center text-center">
            <div className="flex flex-col gap-5 items-center">
              <h2 className="@2xl:text-4xl font-semibold text-3xl text-balance tracking-tight" id="pricing-6-title">
                Priced for Your Studio
              </h2>
              <p className="@2xl:leading-6 @2xl:text-base leading-5 max-w-160 text-balance text-muted-foreground text-sm">
                <span className="@2xl:block">
                  One workspace rate, plus seats as you hire.
                </span>
                <span className="@2xl:block">
                  Basic and Team start with 14 days free.
                </span>
              </p>
            </div>
            <Tabs data-orientation="horizontal" activationDirection="none">
              <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-label="Billing period">
                <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_0_" extracted="1">
                  Monthly
                </TabsTrigger>
                <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="">
                  Yearly
                  <Badge className="-mr-1 [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    2 Months Free
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <ul className="@4xl:gap-y-0 @4xl:grid-cols-3 @4xl:max-w-none gap-6 grid grid-cols-1 max-w-md mx-auto w-full" role="list">
            <li className="@4xl:grid-rows-subgrid @4xl:row-span-4 grid">
              <Card className="@4xl:grid @4xl:grid-rows-subgrid @4xl:row-span-4 isolate relative" size="default">
                <div className="-z-10 absolute inset-0 pointer-events-none" aria-hidden="true">
                  <div className="absolute bg-linear-to-b from-white/5 h-64 inset-x-0 to-transparent top-0"></div>
                  <svg className="absolute h-56 inset-x-0 pointer-events-none text-white/65 top-0 w-full" aria-hidden="true">
                    <defs>
                      <pattern id="_r_2_-dots" patternUnits="userSpaceOnUse" width="6" height="6">
                        <circle cx="1" cy="1" r="0.55" fill="currentColor"></circle>
                      </pattern>
                      <radialgradient id="_r_2_-fade" cx="0.5" cy="0" r="1">
                        <stop offset="0" stopColor="white" stopOpacity="0.85"></stop>
                        <stop offset="0.6" stopColor="white" stopOpacity="0.3"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                      </radialgradient>
                      <mask id="_r_2_-mask">
                        <rect width="100%" height="100%" fill="url(#_r_2_-fade)"></rect>
                      </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#_r_2_-dots)" fillOpacity="0.3" mask="url(#_r_2_-mask)"></rect>
                  </svg>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 items-center">
                    <CardTitle className="font-semibold text-lg" role="heading" aria-level="3">
                      Basic
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="flex flex-wrap gap-x-2 items-baseline">
                      <span className="font-semibold tabular-nums text-5xl tracking-tight">
                        $30
                      </span>
                      <span className="text-muted-foreground">
                        per month
                      </span>
                    </p>
                    <div className="flex flex-col gap-1 text-muted-foreground">
                      <p className="tabular-nums">
                        $360 billed yearly
                      </p>
                      <p>
                        <span className="font-medium tabular-nums">
                          + $5
                        </span>
                        per extra seat / month
                      </p>
                    </div>
                  </div>
                  <Button className="w-full" href="#" aria-label="Start Trial for Basic" role="button" tabIndex="0">
                    Start Trial
                  </Button>
                </CardContent>
                <CardContent>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
                </CardContent>
                <CardContent className="flex flex-col gap-3">
                  <p className="font-medium">
                    Includes
                  </p>
                  <ul className="flex flex-col gap-3" role="list">
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="font-medium tabular-nums">
                          1
                        </span>
                        seat included
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="font-medium tabular-nums">
                          5
                        </span>
                        active projects
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="font-medium tabular-nums">
                          25 GB
                        </span>
                        of file storage
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="font-medium tabular-nums">
                          1
                        </span>
                        client portal
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        Time tracking and timesheets
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        Online invoices and payments
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        Email support
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-x size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="sr-only">
                          Not included:
                        </span>
                        Timesheet approvals
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-x size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="sr-only">
                          Not included:
                        </span>
                        Budgets and profit reports
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </li>
            <li className="@4xl:grid-rows-subgrid @4xl:row-span-4 grid">
              <Card className="@4xl:grid @4xl:grid-rows-subgrid @4xl:row-span-4 dark:ring-foreground/30 isolate relative ring-foreground/30" size="default">
                <div className="-z-10 absolute inset-0 pointer-events-none" aria-hidden="true">
                  <div className="absolute bg-linear-to-b from-teal-400/8 h-64 inset-x-0 to-transparent top-0"></div>
                  <svg className="absolute h-56 inset-x-0 pointer-events-none text-teal-300 top-0 w-full" aria-hidden="true">
                    <defs>
                      <pattern id="_r_3_-dots" patternUnits="userSpaceOnUse" width="6" height="6">
                        <circle cx="1" cy="1" r="0.55" fill="currentColor"></circle>
                      </pattern>
                      <radialgradient id="_r_3_-fade" cx="0.5" cy="0" r="1">
                        <stop offset="0" stopColor="white" stopOpacity="0.85"></stop>
                        <stop offset="0.6" stopColor="white" stopOpacity="0.3"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                      </radialgradient>
                      <mask id="_r_3_-mask">
                        <rect width="100%" height="100%" fill="url(#_r_3_-fade)"></rect>
                      </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#_r_3_-dots)" fillOpacity="0.3" mask="url(#_r_3_-mask)"></rect>
                  </svg>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 items-center">
                    <CardTitle className="font-semibold text-lg" role="heading" aria-level="3">
                      Team
                      <span className="sr-only">
                        , Most Popular
                      </span>
                    </CardTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow" aria-hidden="true">
                      Most Popular
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="flex flex-wrap gap-x-2 items-baseline">
                      <span className="font-semibold tabular-nums text-5xl tracking-tight">
                        $70
                      </span>
                      <span className="text-muted-foreground">
                        per month
                      </span>
                    </p>
                    <div className="flex flex-col gap-1 text-muted-foreground">
                      <p className="tabular-nums">
                        $840 billed yearly
                      </p>
                      <p>
                        <span className="font-medium tabular-nums">
                          + $10
                        </span>
                        per extra seat / month
                      </p>
                    </div>
                  </div>
                  <Button className="w-full" href="#" aria-label="Start Trial for Team" role="button" tabIndex="0">
                    Start Trial
                  </Button>
                </CardContent>
                <CardContent>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
                </CardContent>
                <CardContent className="flex flex-col gap-3">
                  <p className="font-medium">
                    Everything in Basic, plus
                  </p>
                  <ul className="flex flex-col gap-3" role="list">
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="font-medium tabular-nums">
                          5
                        </span>
                        seats included
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="font-medium tabular-nums">
                          Unlimited
                        </span>
                        active projects
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="font-medium tabular-nums">
                          250 GB
                        </span>
                        of file storage
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="font-medium tabular-nums">
                          10
                        </span>
                        client portals
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        Timesheet approvals
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        Budgets and profit reports
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        Priority chat support
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-x size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="sr-only">
                          Not included:
                        </span>
                        Custom roles and permissions
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-x size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="sr-only">
                          Not included:
                        </span>
                        SAML single sign-on
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </li>
            <li className="@4xl:grid-rows-subgrid @4xl:row-span-4 grid">
              <Card className="@4xl:grid @4xl:grid-rows-subgrid @4xl:row-span-4 isolate relative" size="default">
                <div className="-z-10 absolute inset-0 pointer-events-none" aria-hidden="true">
                  <div className="absolute bg-linear-to-b from-violet-400/8 h-64 inset-x-0 to-transparent top-0"></div>
                  <svg className="absolute h-56 inset-x-0 pointer-events-none text-violet-300 top-0 w-full" aria-hidden="true">
                    <defs>
                      <pattern id="_r_4_-dots" patternUnits="userSpaceOnUse" width="6" height="6">
                        <circle cx="1" cy="1" r="0.55" fill="currentColor"></circle>
                      </pattern>
                      <radialgradient id="_r_4_-fade" cx="0.5" cy="0" r="1">
                        <stop offset="0" stopColor="white" stopOpacity="0.85"></stop>
                        <stop offset="0.6" stopColor="white" stopOpacity="0.3"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                      </radialgradient>
                      <mask id="_r_4_-mask">
                        <rect width="100%" height="100%" fill="url(#_r_4_-fade)"></rect>
                      </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#_r_4_-dots)" fillOpacity="0.3" mask="url(#_r_4_-mask)"></rect>
                  </svg>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 items-center">
                    <CardTitle className="font-semibold text-lg" role="heading" aria-level="3">
                      Enterprise
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="flex flex-wrap gap-x-2 items-baseline">
                      <span className="font-semibold tabular-nums text-5xl tracking-tight">
                        $200
                      </span>
                      <span className="text-muted-foreground">
                        per month
                      </span>
                    </p>
                    <div className="flex flex-col gap-1 text-muted-foreground">
                      <p className="tabular-nums">
                        $2,400 billed yearly
                      </p>
                      <p>
                        <span className="font-medium tabular-nums">
                          + $15
                        </span>
                        per extra seat / month
                      </p>
                    </div>
                  </div>
                  <Button className="w-full" href="#" aria-label="Contact Sales for Enterprise" role="button" tabIndex="0">
                    Contact Sales
                  </Button>
                </CardContent>
                <CardContent>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
                </CardContent>
                <CardContent className="flex flex-col gap-3">
                  <p className="font-medium">
                    Everything in Team, plus
                  </p>
                  <ul className="flex flex-col gap-3" role="list">
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="font-medium tabular-nums">
                          20
                        </span>
                        seats included
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="font-medium tabular-nums">
                          2 TB
                        </span>
                        of file storage
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        <span className="font-medium tabular-nums">
                          Unlimited
                        </span>
                        client portals
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        Custom roles and permissions
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        SAML single sign-on
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="flex h-5 items-center shrink-0">
                        <svg className="lucide lucide-check size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                      <span className="min-w-0 text-muted-foreground">
                        Dedicated success manager
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </li>
          </ul>
          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
            <div className="flex gap-4 items-center">
              <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
              <p className="shrink-0 text-muted-foreground text-sm">
                Used by teams at
              </p>
              <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal" aria-hidden="true"></Separator>
            </div>
            <ul className="@3xl:max-w-none @sm:gap-x-9 flex flex-wrap gap-x-5 gap-y-4 items-center justify-center max-w-sm mx-auto" role="list">
              <li className="flex items-center">
                <span className="sr-only">
                  Vercel
                </span>
                <span className="[&_:is(path,circle)]:fill-current! [&_svg]:h-full [&_svg]:w-auto inline-flex text-foreground" aria-hidden="true" style={{height: "16px"}}>
                  <svg aria-label="Vercel logotype" viewBox="0 0 262 52">
                    <path d="M59.8019 52L29.9019 0L0.00190544 52H59.8019ZM89.9593 49.6328L114.947 2.36365H104.139L86.9018 36.6921L69.6647 2.36365H58.8564L83.8442 49.6328H89.9593ZM260.25 2.36365V49.6329H251.302V2.36365H260.25ZM210.442 31.99C210.442 28.3062 211.211 25.0661 212.749 22.2699C214.287 19.4737 216.431 17.321 219.181 15.812C221.93 14.3029 225.146 13.5484 228.828 13.5484C232.09 13.5484 235.026 14.2585 237.636 15.6788C240.245 17.0991 242.319 19.2074 243.857 22.0036C245.395 24.7998 246.187 28.2174 246.234 32.2564V34.3202H219.88C220.066 37.2496 220.928 39.5576 222.466 41.2442C224.051 42.8864 226.171 43.7075 228.828 43.7075C230.505 43.7075 232.043 43.2637 233.441 42.376C234.839 41.4883 235.888 40.2899 236.587 38.7808L245.745 39.4466C244.626 42.7754 242.529 45.4385 239.453 47.4358C236.377 49.4331 232.835 50.4317 228.828 50.4317C225.146 50.4317 221.93 49.6772 219.181 48.1681C216.431 46.6591 214.287 44.5064 212.749 41.7102C211.211 38.914 210.442 35.6739 210.442 31.99ZM237.006 28.6612C236.68 25.7762 235.771 23.668 234.28 22.3365C232.789 20.9606 230.971 20.2726 228.828 20.2726C226.358 20.2726 224.354 21.0049 222.816 22.4696C221.278 23.9343 220.322 25.9982 219.95 28.6612H237.006ZM195.347 22.3365C196.838 23.5348 197.77 25.1993 198.143 27.3297L207.371 26.8637C207.044 24.1562 206.089 21.8039 204.505 19.8066C202.92 17.8093 200.869 16.278 198.353 15.2128C195.883 14.1032 193.157 13.5484 190.174 13.5484C186.492 13.5484 183.277 14.3029 180.527 15.812C177.777 17.321 175.634 19.4737 174.096 22.2699C172.558 25.0661 171.789 28.3062 171.789 31.99C171.789 35.6739 172.558 38.914 174.096 41.7102C175.634 44.5064 177.777 46.6591 180.527 48.1681C183.277 49.6772 186.492 50.4317 190.174 50.4317C193.25 50.4317 196.046 49.8769 198.563 48.7673C201.079 47.6133 203.13 45.9933 204.714 43.9072C206.299 41.8212 207.254 39.38 207.58 36.5838L198.283 36.1844C197.957 38.5367 197.048 40.3565 195.557 41.6436C194.065 42.8864 192.271 43.5078 190.174 43.5078C187.285 43.5078 185.048 42.5091 183.463 40.5118C181.879 38.5145 181.086 35.6739 181.086 31.99C181.086 28.3062 181.879 25.4656 183.463 23.4683C185.048 21.471 187.285 20.4723 190.174 20.4723C192.178 20.4723 193.902 21.0937 195.347 22.3365ZM149.955 14.3457H158.281L158.522 21.1369C159.113 19.2146 159.935 17.7218 160.988 16.6585C162.514 15.1166 164.642 14.3457 167.371 14.3457H170.771V21.6146H167.302C165.359 21.6146 163.763 21.8789 162.514 22.4075C161.311 22.9362 160.386 23.7732 159.739 24.9186C159.137 26.064 158.837 27.5178 158.837 29.2799V49.6328H149.955V14.3457ZM111.548 22.2699C110.01 25.0661 109.241 28.3062 109.241 31.99C109.241 35.6739 110.01 38.914 111.548 41.7102C113.086 44.5064 115.229 46.6591 117.979 48.1681C120.729 49.6772 123.944 50.4317 127.626 50.4317C131.634 50.4317 135.176 49.4331 138.252 47.4358C141.327 45.4385 143.425 42.7754 144.543 39.4466L135.385 38.7808C134.686 40.2899 133.638 41.4883 132.24 42.376C130.842 43.2637 129.304 43.7075 127.626 43.7075C124.97 43.7075 122.849 42.8864 121.265 41.2442C119.727 39.5576 118.865 37.2496 118.678 34.3202H145.032V32.2564C144.986 28.2174 144.194 24.7998 142.656 22.0036C141.118 19.2074 139.044 17.0991 136.434 15.6788C133.824 14.2585 130.888 13.5484 127.626 13.5484C123.944 13.5484 120.729 14.3029 117.979 15.812C115.229 17.321 113.086 19.4737 111.548 22.2699ZM133.079 22.3365C134.57 23.668 135.479 25.7762 135.805 28.6612H118.748C119.121 25.9982 120.076 23.9343 121.614 22.4696C123.152 21.0049 125.156 20.2726 127.626 20.2726C129.77 20.2726 131.587 20.9606 133.079 22.3365Z" fill="black"></path>
                  </svg>
                </span>
              </li>
              <li className="flex items-center">
                <span className="sr-only">
                  Clerk
                </span>
                <span className="[&_:is(path,circle)]:fill-current! [&_svg]:h-full [&_svg]:w-auto inline-flex text-foreground" aria-hidden="true" style={{height: "17px"}}>
                  <svg fill="none" viewBox="0 0 441 128">
                    <path fill="#131316" d="M166.971 40.917c11.605 0 23.824 4.606 31.392 13.519a.14.14 0 0 1-.015.196l-11.393 9.858a.141.141 0 0 1-.198-.013 24.393 24.393 0 0 0-8.422-6.174 24.897 24.897 0 0 0-10.437-2.133c-13.41 0-22.35 9.192-22.35 22.63 0 6.713 2.223 12.345 6.087 16.29a22.093 22.093 0 0 0 7.464 4.805 22.461 22.461 0 0 0 8.799 1.511 26.7 26.7 0 0 0 10.378-1.996 26.24 26.24 0 0 0 8.635-5.752.141.141 0 0 1 .192-.007l11.645 10.047a.14.14 0 0 1 .013.2c-6.497 7.175-17.999 12.866-32.397 12.866-11.139 0-20.793-3.91-27.569-10.565C132.019 99.545 128 90.12 128 78.928c0-22.63 16.169-38.01 38.971-38.01Zm105.326.007c22.067 0 36.337 15.52 36.337 36.95a61.277 61.277 0 0 1-.457 6.659.141.141 0 0 1-.14.123h-54.261a.14.14 0 0 0-.136.171c2.321 10.287 10.27 16.557 21.26 16.557 3.579.075 7.126-.66 10.369-2.151a23.251 23.251 0 0 0 8.236-6.335.14.14 0 0 1 .199-.019l.447.373 11.163 9.719a.14.14 0 0 1 .018.194c-6.316 7.834-16.808 13.599-31.355 13.599-21.772 0-38.196-15.077-38.196-37.983 0-11.238 3.87-20.663 10.319-27.317a35.7 35.7 0 0 1 11.989-7.934 36.2 36.2 0 0 1 14.208-2.606Zm-46.636-28.948a.14.14 0 0 1 .141.14v103.509a.14.14 0 0 1-.141.141h-16.684a.14.14 0 0 1-.141-.141V12.117c0-.078.063-.141.141-.141h16.684Zm135.724 28.943a.14.14 0 0 1 .142.14v18.553c0 .081-.07.146-.151.14-1.944-.147-3.88-.29-5.072-.29-13.058 0-20.725 9.19-20.725 21.253v34.91a.14.14 0 0 1-.141.141h-16.683a.14.14 0 0 1-.141-.141v-73.52a.14.14 0 0 1 .141-.14h16.683a.14.14 0 0 1 .141.14V53.04c0 .057.047.103.104.103a.105.105 0 0 0 .083-.041c5.851-7.815 14.488-12.162 23.613-12.162l2.006-.022Zm26.947-28.943a.14.14 0 0 1 .141.14v63.165c0 .129.157.19.244.095l30.691-33.455a.142.142 0 0 1 .104-.046h20.063c.122 0 .187.145.105.236l-26.752 29.515a.142.142 0 0 0-.016.17l27.119 43.755a.14.14 0 0 1-.119.215h-19.033a.14.14 0 0 1-.12-.067l-19.234-30.912a.14.14 0 0 0-.119-.066h-.18a.144.144 0 0 0-.104.045l-12.612 13.55a.14.14 0 0 0-.037.096v17.213a.14.14 0 0 1-.141.141h-16.685a.14.14 0 0 1-.14-.141V12.117a.14.14 0 0 1 .14-.141h16.685ZM273.184 56.153a19.44 19.44 0 0 0-8.036 1.46 19.154 19.154 0 0 0-6.683 4.624 20.438 20.438 0 0 0-4.538 8.68.14.14 0 0 0 .135.173h37.036a.14.14 0 0 0 .135-.174c-2.156-8.804-8.293-14.763-18.049-14.763Z"></path>
                    <circle cx="64" cy="64" r="20" fill="#6C47FF"></circle>
                    <path fill="#BAB1FF" d="M99.572 10.788c1.999 1.34 2.17 4.156.468 5.858L85.424 31.262c-1.32 1.32-3.37 1.53-5.033.678A35.846 35.846 0 0 0 64 28c-19.882 0-36 16.118-36 36a35.846 35.846 0 0 0 3.94 16.391c.851 1.663.643 3.712-.678 5.033L16.646 100.04c-1.702 1.702-4.519 1.531-5.858-.468C3.974 89.399 0 77.163 0 64 0 28.654 28.654 0 64 0c13.163 0 25.399 3.974 35.572 10.788Z"></path>
                    <path fill="#6C47FF" d="M100.04 111.354c1.702 1.702 1.531 4.519-.468 5.858C89.399 124.026 77.164 128 64 128c-13.164 0-25.399-3.974-35.572-10.788-2-1.339-2.17-4.156-.468-5.858l14.615-14.616c1.321-1.32 3.37-1.53 5.033-.678A35.846 35.846 0 0 0 64 100a35.846 35.846 0 0 0 16.392-3.94c1.662-.852 3.712-.643 5.032.678l14.616 14.616Z"></path>
                  </svg>
                </span>
              </li>
              <li className="flex items-center">
                <span className="sr-only">
                  Resend
                </span>
                <span className="[&_:is(path,circle)]:fill-current! [&_svg]:h-full [&_svg]:w-auto inline-flex text-foreground" aria-hidden="true" style={{height: "15px"}}>
                  <svg viewBox="0 0 1978 420" fill="none">
                    <path d="M543.803 118.321C633.178 118.321 698.215 180.419 693.6 293.286H475.948C484.076 324.654 505.791 351.608 549.257 351.608C573.594 351.608 595.833 344.895 612.617 323.916H687.726L686.467 330.629C673.459 388.112 608.001 420 549.257 420C456.106 420 393.585 357.062 393.585 269.37C393.585 181.678 456.106 118.321 543.803 118.321ZM1173.62 118.321C1263.42 118.321 1328.04 180.419 1323.84 293.286H1106.13C1114.16 324.654 1135.72 351.608 1179.5 351.608C1203.84 351.608 1226.07 344.895 1242.44 323.916H1317.97L1316.71 330.629C1303.7 388.111 1238.24 420 1179.5 420C1086.35 420 1023.83 357.063 1023.83 269.37C1023.83 181.678 1086.35 118.321 1173.62 118.321ZM1978 411.609H1896.6L1900.79 370.91C1889.46 395.246 1852.96 419.162 1807.22 419.162C1731.69 419.162 1670.43 361.26 1670.43 269.791C1670.43 178.322 1730.85 120.42 1807.22 120.42C1848.76 120.42 1874.36 133.847 1897.02 156.924V0H1978V411.609ZM853.47 116.644C919.767 116.644 978.091 140.559 994.875 199.301L996.554 205.595H913.892C896.268 183.777 872.771 180.839 853.47 180.839C835.427 180.839 806.894 185.455 806.894 203.077C806.894 219.441 825.776 224.895 842.141 226.993L889.975 232.028C965.922 238.742 999.491 268.532 999.491 326.854C999.491 393.986 932.774 419.161 866.896 419.161C801.019 419.161 732.624 389.79 719.616 330.21L718.357 323.916H803.117C814.866 357.483 868.994 354.965 866.896 354.965C898.786 354.965 918.508 345.315 918.508 329.79C918.508 319.72 915.15 307.972 882.422 303.776L832.489 298.741C766.612 294.126 726.75 259.3 726.75 207.272C726.75 143.496 787.173 116.644 853.47 116.644ZM251.761 0C331.485 0 378.9 47.4126 378.9 110.35C378.9 173.287 331.485 220.7 251.761 220.7H211.479L411.629 411.609H270.224L117.908 266.854C106.999 256.784 101.963 245.036 101.963 234.966C101.963 220.7 112.034 208.113 131.335 202.658L209.801 181.679C239.592 173.707 260.153 150.63 260.153 120.42C260.153 83.4968 229.941 62.0977 192.597 62.0977H0V0H251.761ZM1520.63 118.74C1591.97 118.74 1641.9 170.768 1641.9 245.034V411.608H1560.5V258.88C1560.5 216.922 1538.26 191.747 1498.81 191.747C1459.37 191.747 1433.78 217.761 1433.78 258.88V411.608H1354.05V124.614H1435.04L1431.26 170.349C1443.01 147.272 1479.51 118.74 1520.63 118.74ZM1826.52 191.749C1777.43 191.749 1751.42 228.252 1751.42 269.791C1751.42 314.266 1780.79 348.252 1826.52 348.252C1870.58 348.252 1899.11 313.847 1899.11 269.791C1899.11 225.735 1871.42 191.749 1826.52 191.749ZM543.803 183.355C504.138 183.355 481.475 207.041 474.442 238.74H611.728C610.893 235.09 609.818 231.188 608.421 226.992C598.35 198.461 574.853 183.356 543.803 183.355ZM1173.62 183.355C1134.3 183.356 1111.7 207.041 1104.68 238.74H1241.97C1241.13 235.09 1240.06 231.188 1238.66 226.992C1228.59 198.461 1205.09 183.355 1173.62 183.355Z" fill="black"></path>
                  </svg>
                </span>
              </li>
              <li className="flex items-center">
                <span className="sr-only">
                  OpenAI
                </span>
                <span className="[&_:is(path,circle)]:fill-current! [&_svg]:h-full [&_svg]:w-auto inline-flex text-foreground" aria-hidden="true" style={{height: "21px"}}>
                  <svg viewBox="0 0 1180 320">
                    <path d="M367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8z m129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68z M614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84V114h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84z m-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48z M747.65 242.64c25.2 0 45.12-13.2 54-35.28L776.93 198c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52z m-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92z M823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88V240h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84V114h-28.8z M1014.17 67.68 948.89 240h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32z m16.8 34.08 27.36 72h-54.24z M1163.69 68.18h-30.72V240.5h30.72z M297.06 130.97a79.712 79.712 0 0 0-6.85-65.48c-17.46-30.4-52.56-46.04-86.84-38.68A79.747 79.747 0 0 0 143.24 0C108.2-.08 77.11 22.48 66.33 55.82a79.754 79.754 0 0 0-53.31 38.67c-17.59 30.32-13.58 68.54 9.92 94.54a79.712 79.712 0 0 0 6.85 65.48c17.46 30.4 52.56 46.04 86.84 38.68a79.687 79.687 0 0 0 60.13 26.8c35.06.09 66.16-22.49 76.94-55.86a79.754 79.754 0 0 0 53.31-38.67c17.57-30.32 13.55-68.51-9.94-94.51z M176.78 299.08a59.77 59.77 0 0 1-38.39-13.88c.49-.26 1.34-.73 1.89-1.07l63.72-36.8a10.36 10.36 0 0 0 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97z M47.94 244.05a59.71 59.71 0 0 1-7.15-40.18c.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83L129.87 266c-28.69 16.52-65.33 6.7-81.92-21.95z M31.17 104.96c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91L118.44 224c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89z m221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94a59.94 59.94 0 0 1-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06z m26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8a10.375 10.375 0 0 0-10.47 0l-77.79 44.92V92c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22a59.95 59.95 0 0 1 7.15 40.1z m-168.51 55.43-26.94-15.55a.943.943 0 0 1-.52-.74V80.86c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07L116 72.67a10.344 10.344 0 0 0-5.24 9.06l-.04 89.79z M125.35 140 160 119.99l34.65 20V180L160 200l-34.65-20z"></path>
                  </svg>
                </span>
              </li>
              <li className="flex items-center">
                <span className="sr-only">
                  GitHub
                </span>
                <span className="[&_:is(path,circle)]:fill-current! [&_svg]:h-full [&_svg]:w-auto inline-flex text-foreground" aria-hidden="true" style={{height: "15px"}}>
                  <svg xmlSpace="preserve" viewBox="0 0 249.1 67.5">
                    <path d="M103.4 55.9h-.1s0 .1.1 0m0 .1c-.5 0-1.8.3-3.2.3-4.4 0-5.9-2-5.9-4.6V34.2h8.9c.5 0 .9-.4.9-1.1v-9.5c0-.5-.4-.9-.9-.9h-8.9V10.9c0-.4-.3-.7-.8-.7h-12c-.5 0-.8.3-.8.7V23s-6.1 1.5-6.5 1.6-.7.5-.7.9v7.6c0 .6.4 1.1.9 1.1h6.2v18.3c0 13.6 9.5 15 16 15 3 0 6.5-.9 7.1-1.2.3-.1.5-.5.5-.9V57c0-.5-.4-.9-.8-1m132.1-12.3c0-10.1-4.1-11.4-8.4-11-3.3.2-6 1.9-6 1.9v19.6s2.7 1.9 6.8 2c5.8.2 7.6-1.8 7.6-12.5m13.6-.9c0 19.1-6.2 24.6-17 24.6-9.1 0-14.1-4.6-14.1-4.6s-.2 2.6-.5 2.9c-.2.3-.4.4-.8.4h-8.3c-.6 0-1.1-.4-1.1-.9l.1-62c0-.5.4-.9.9-.9h11.9c.5 0 .9.4.9.9l-.1 20.9s4.6-3 11.3-3h.1c6.8.1 16.7 2.6 16.7 21.7m-48.6-20.1h-11.7c-.6 0-.9.4-.9 1.1v30.3s-3.1 2.2-7.3 2.2-5.4-1.9-5.4-6.1V23.7c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v28.5c0 12.3 6.9 15.3 16.3 15.3 7.8 0 14.1-4.3 14.1-4.3s.3 2.2.4 2.5.5.5.9.5h7.5c.6 0 .9-.4.9-.9l.1-41.7c-.2-.5-.6-.9-1.2-.9m-132.2-.1H56.4c-.5 0-.9.5-.9 1.1v40.9c0 1.1.7 1.5 1.7 1.5h10.7c1.1 0 1.4-.5 1.4-1.5v-41c-.1-.5-.5-1-1-1M62.4 3.8c-4.3 0-7.7 3.4-7.7 7.7s3.4 7.7 7.7 7.7c4.2 0 7.6-3.4 7.6-7.7s-3.4-7.7-7.6-7.7m92-1.4h-11.8c-.5 0-.9.4-.9.9v22.8h-18.5V3.3c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v62c0 .5.5.9.9.9h11.9c.5 0 .9-.4.9-.9V38.8h18.5l-.1 26.5c0 .5.4.9.9.9h11.9c.5 0 .9-.4.9-.9v-62c0-.5-.4-.9-.9-.9M49.1 29.8v32c0 .2-.1.6-.3.7 0 0-7 5-18.5 5-13.8 0-30.3-4.3-30.3-33C0 5.9 14.4-.1 28.4 0c12.2 0 17.1 2.7 17.8 3.2.2.3.3.5.3.8l-2.3 9.9c0 .5-.5 1.1-1.1.9-2-.6-5-1.8-12.1-1.8-8.2 0-17 2.3-17 20.8s8.4 20.6 14.4 20.6c5.1 0 7-.6 7-.6V41.1h-8.2c-.6 0-1.1-.4-1.1-.9V29.8c0-.5.4-.9 1.1-.9h20.9c.6 0 1 .4 1 .9" style={{fill: "rgb(27, 31, 36)"}}></path>
                  </svg>
                </span>
              </li>
              <li className="flex items-center">
                <span className="sr-only">
                  Anthropic
                </span>
                <span className="[&_:is(path,circle)]:fill-current! [&_svg]:h-full [&_svg]:w-auto inline-flex text-foreground" aria-hidden="true" style={{height: "17px"}}>
                  <svg fillRule="evenodd" viewBox="0 0 182 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                    <title>
                      Anthropic
                    </title>
                    <path d="M38.247 15.874L29.553 2.338H24.86v19.337h4.002V8.139l8.694 13.536h4.693V2.338h-4.003v13.536zm7.313-9.807h6.487v15.608h4.14V6.067h6.487v-3.73H45.56v3.73zm33.686 3.978h-9.109V2.338h-4.14v19.337h4.14v-7.9h9.109v7.9h4.14V2.338h-4.14v7.707zm13.39-3.978h5.108c2.043 0 3.12.746 3.12 2.155 0 1.408-1.077 2.154-3.12 2.154h-5.107v-4.31zm12.37 2.155c0-3.647-2.679-5.884-7.068-5.884h-9.443v19.337h4.142v-7.57h4.61l4.142 7.57h4.583l-4.586-8.146c2.302-.885 3.62-2.75 3.62-5.307zm12.686 9.91c-3.257 0-5.244-2.32-5.244-6.104 0-3.84 1.987-6.16 5.244-6.16 3.23 0 5.189 2.32 5.189 6.16 0 3.784-1.96 6.105-5.189 6.105zm0-16.132c-5.575 0-9.522 4.144-9.522 10.028 0 5.828 3.947 9.972 9.522 9.972 5.547 0 9.466-4.144 9.466-9.972C127.158 6.144 123.24 2 117.692 2zm22.59 8.929h-5.109V6.067h5.11c2.043 0 3.12.829 3.12 2.43 0 1.603-1.077 2.432-3.12 2.432zm.194-8.591h-9.445v19.337h4.142v-7.017h5.303c4.39 0 7.07-2.32 7.07-6.16 0-3.84-2.68-6.16-7.07-6.16zm35.108 12.839c-.718 1.878-2.153 2.956-4.113 2.956-3.257 0-5.244-2.32-5.244-6.105 0-3.84 1.987-6.16 5.244-6.16 1.96 0 3.395 1.077 4.113 2.955h4.388C178.896 4.68 175.667 2 171.472 2c-5.576 0-9.523 4.144-9.523 10.028 0 5.828 3.947 9.972 9.522 9.972 4.223 0 7.453-2.707 8.529-6.823h-4.416zm-26.39-12.84l7.705 19.338h4.225L153.42 2.338h-4.225zM9.277 14.024l2.636-6.796 2.637 6.796H9.276zm.428-11.685L2 21.675h4.307l1.576-4.06h8.06l1.575 4.06h4.307L14.121 2.338H9.704z"></path>
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
