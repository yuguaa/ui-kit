import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="@container bg-background text-foreground w-full" aria-labelledby="pricing-5-title">
        <div className="@min-[40rem]:px-6 @min-[64rem]:px-8 flex flex-col gap-9 max-w-6xl mx-auto px-4 py-12 w-full">
          <div className="flex flex-col gap-10 items-center text-center">
            <div className="flex flex-col gap-5 items-center">
              <h2 className="@2xl:text-4xl font-semibold text-3xl text-balance tracking-tight" id="pricing-5-title">
                {"Pricing on Your Terms"}
              </h2>
              <p className="@2xl:leading-6 @2xl:text-base leading-5 max-w-160 text-balance text-muted-foreground text-sm">
                <span className="@2xl:block">
                  {"Start free with a million events a month and core analytics,"}
                </span>
                <span className="@2xl:block">
                  {"then pay per seat as your team grows."}
                </span>
              </p>
            </div>
            <Tabs data-orientation="horizontal" activationDirection="none">
              <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-label="Billing period">
                <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_0_" extracted="1">
                  {"Monthly"}
                </TabsTrigger>
                <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_1_" compositeItemActive="">
                  {"Yearly"}
                  <Badge className="-mr-1 [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    {"Save 25%"}
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="@6xl:gap-4 flex flex-col gap-6">
            <ul className="@2xl:grid-cols-2 @2xl:max-w-none @6xl:gap-4 @6xl:grid-cols-4 gap-6 grid grid-cols-1 max-w-md mx-auto w-full" role="list">
              <li className="@2xl:grid-rows-subgrid @2xl:row-span-4 grid">
                <Card className="@2xl:grid @2xl:grid-rows-subgrid @2xl:row-span-4 overflow-visible relative ring-border ring-inset" size="default">
                  <CardHeader>
                    <CardTitle className="font-semibold text-lg" role="heading" aria-level="3">
                      {"Free"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <p className="flex flex-wrap gap-x-2 items-baseline">
                      <span className="@6xl:text-4xl font-semibold tabular-nums text-5xl tracking-tight">
                        {"$0"}
                      </span>
                      <span className="text-muted-foreground">
                        {"USD"}
                      </span>
                    </p>
                    <div>
                      <p className="font-semibold">
                        {"For side projects and demos"}
                      </p>
                      <p className="text-balance text-muted-foreground">
                        {"No credit card required"}
                      </p>
                    </div>
                  </CardContent>
                  <CardContent>
                    <Button className="w-full" href="#" role="button" tabIndex={0}>
                      {"Start Free"}
                    </Button>
                  </CardContent>
                  <CardContent>
                    <ul className="flex flex-col gap-3" role="list">
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"1 million"}
                          </span>
                          {"events a month"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"5"}
                          </span>
                          {"saved dashboards"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"30 days"}
                          </span>
                          {"of event history"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"2"}
                          </span>
                          {"team seats"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M8 12h8"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="sr-only">
                            {"Not included:"}
                          </span>
                          {"Email support"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M8 12h8"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="sr-only">
                            {"Not included:"}
                          </span>
                          {"Session replays"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M8 12h8"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="sr-only">
                            {"Not included:"}
                          </span>
                          {"Warehouse sync"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M8 12h8"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="sr-only">
                            {"Not included:"}
                          </span>
                          {"SAML single sign-on"}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </li>
              <li className="@2xl:grid-rows-subgrid @2xl:row-span-4 grid">
                <Card className="@2xl:grid @2xl:grid-rows-subgrid @2xl:row-span-4 overflow-visible relative ring-border ring-inset" size="default">
                  <CardHeader>
                    <CardTitle className="font-semibold text-lg" role="heading" aria-level="3">
                      {"Team"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <p className="flex flex-wrap gap-x-2 items-baseline">
                      <span className="@6xl:text-4xl font-semibold tabular-nums text-5xl tracking-tight">
                        {"$9"}
                      </span>
                      <span className="text-muted-foreground">
                        {"USD"}
                      </span>
                    </p>
                    <div>
                      <p className="font-semibold">
                        {"For startups shipping fast"}
                      </p>
                      <p className="text-balance text-muted-foreground">
                        {"Per seat a month, billed yearly"}
                      </p>
                    </div>
                  </CardContent>
                  <CardContent>
                    <Button className="w-full" href="#" role="button" tabIndex={0}>
                      {"Choose Team"}
                    </Button>
                  </CardContent>
                  <CardContent>
                    <ul className="flex flex-col gap-3" role="list">
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"10 million"}
                          </span>
                          {"events a month"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"Unlimited"}
                          </span>
                          {"dashboards"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"1 year"}
                          </span>
                          {"of event history"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"Up to 10"}
                          </span>
                          {"team seats"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          {"Email support"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M8 12h8"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="sr-only">
                            {"Not included:"}
                          </span>
                          {"Session replays"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M8 12h8"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="sr-only">
                            {"Not included:"}
                          </span>
                          {"Warehouse sync"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M8 12h8"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="sr-only">
                            {"Not included:"}
                          </span>
                          {"SAML single sign-on"}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </li>
              <li className="@2xl:grid-rows-subgrid @2xl:row-span-4 grid">
                <Card className="@2xl:grid @2xl:grid-rows-subgrid @2xl:row-span-4 overflow-visible relative ring-border ring-inset" size="default">
                  <CardHeader>
                    <CardTitle className="font-semibold text-lg" role="heading" aria-level="3">
                      {"Growth"}
                      <span className="sr-only">
                        {", Most Popular"}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <Badge className="-translate-y-1/2 [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-linear-to-r/oklch bg-origin-border bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium from-green-500 gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 right-(--card-spacing) shadow-emerald-900/25 shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs to-emerald-700 top-0 transition-shadow" aria-hidden="true">
                    {"Most Popular"}
                  </Badge>
                  <CardContent className="flex flex-col gap-3">
                    <p className="flex flex-wrap gap-x-2 items-baseline">
                      <span className="@6xl:text-4xl font-semibold tabular-nums text-5xl tracking-tight">
                        {"$18"}
                      </span>
                      <span className="text-muted-foreground">
                        {"USD"}
                      </span>
                    </p>
                    <div>
                      <p className="font-semibold">
                        {"For teams that experiment"}
                      </p>
                      <p className="text-balance text-muted-foreground">
                        {"Per seat a month, billed yearly"}
                      </p>
                    </div>
                  </CardContent>
                  <CardContent>
                    <Button className="w-full" href="#" role="button" tabIndex={0}>
                      {"Choose Growth"}
                    </Button>
                  </CardContent>
                  <CardContent>
                    <ul className="flex flex-col gap-3" role="list">
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"50 million"}
                          </span>
                          {"events a month"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"Unlimited"}
                          </span>
                          {"dashboards"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"3 years"}
                          </span>
                          {"of event history"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"Unlimited"}
                          </span>
                          {"team seats"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          {"Live chat support"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          {"Session replays"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          {"Warehouse sync"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleMinusIcon" tabler="IconCircleMinus" hugeicons="MinusSignCircleIcon" phosphor="MinusCircleIcon" remixicon="RiIndeterminateCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M8 12h8"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="sr-only">
                            {"Not included:"}
                          </span>
                          {"SAML single sign-on"}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </li>
              <li className="@2xl:grid-rows-subgrid @2xl:row-span-4 grid">
                <Card className="@2xl:grid @2xl:grid-rows-subgrid @2xl:row-span-4 overflow-visible relative ring-border ring-inset" size="default">
                  <CardHeader>
                    <CardTitle className="font-semibold text-lg" role="heading" aria-level="3">
                      {"Enterprise"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <p className="flex flex-wrap gap-x-2 items-baseline">
                      <span className="@6xl:text-4xl font-semibold tabular-nums text-5xl tracking-tight">
                        {"$36"}
                      </span>
                      <span className="text-muted-foreground">
                        {"USD"}
                      </span>
                    </p>
                    <div>
                      <p className="font-semibold">
                        {"For regulated companies"}
                      </p>
                      <p className="text-balance text-muted-foreground">
                        {"Per seat a month, billed yearly"}
                      </p>
                    </div>
                  </CardContent>
                  <CardContent>
                    <Button className="w-full" href="#" aria-label="Contact us about Enterprise" role="button" tabIndex={0}>
                      {"Contact Us"}
                    </Button>
                  </CardContent>
                  <CardContent>
                    <ul className="flex flex-col gap-3" role="list">
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"Custom"}
                          </span>
                          {"event volume"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"Unlimited"}
                          </span>
                          {"dashboards"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"Unlimited"}
                          </span>
                          {"event history"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          <span className="font-medium tabular-nums">
                            {"Unlimited"}
                          </span>
                          {"team seats"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          {"Named account manager"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          {"Session replays"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          {"Warehouse sync"}
                        </span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <span className="flex h-5 items-center shrink-0">
                          <svg className="lucide lucide-circle-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        <span className="min-w-0">
                          {"SAML single sign-on"}
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </li>
            </ul>
            <Card className="@2xl:max-w-none isolate max-w-md mx-auto relative ring-border ring-inset w-full" size="sm">
              <div className="[--dot-opacity:0.12] absolute dark:[--dot-opacity:0.2] inset-px pointer-events-none text-foreground z-0" aria-hidden="true">
                <svg className="opacity-(--dot-opacity) size-full" fill="none" preserveAspectRatio="none">
                  <defs>
                    <pattern id="_r_2_-pattern" patternUnits="userSpaceOnUse" width={48} height={48} viewBox="0 0 48 48">
                      <g fill="currentColor">
                        <rect x={0} y={0} width={2} height={2} fillOpacity={0.216}></rect>
                        <rect x={4} y={0} width={2} height={2} fillOpacity={0.489}></rect>
                        <rect x={8} y={0} width={2} height={2} fillOpacity={0.366}></rect>
                        <rect x={12} y={0} width={2} height={2} fillOpacity={0.305}></rect>
                        <rect x={16} y={0} width={2} height={2} fillOpacity={0.514}></rect>
                        <rect x={20} y={0} width={2} height={2} fillOpacity={0.129}></rect>
                        <rect x={24} y={0} width={2} height={2} fillOpacity={0.431}></rect>
                        <rect x={28} y={0} width={2} height={2} fillOpacity={0.142}></rect>
                        <rect x={32} y={0} width={2} height={2} fillOpacity={0.288}></rect>
                        <rect x={36} y={0} width={2} height={2} fillOpacity={0.144}></rect>
                        <rect x={40} y={0} width={2} height={2} fillOpacity={0.313}></rect>
                        <rect x={44} y={0} width={2} height={2} fillOpacity={0.214}></rect>
                        <rect x={0} y={4} width={2} height={2} fillOpacity={0.4}></rect>
                        <rect x={4} y={4} width={2} height={2} fillOpacity={0.13}></rect>
                        <rect x={8} y={4} width={2} height={2} fillOpacity={0.498}></rect>
                        <rect x={12} y={4} width={2} height={2} fillOpacity={0.473}></rect>
                        <rect x={16} y={4} width={2} height={2} fillOpacity={0.386}></rect>
                        <rect x={20} y={4} width={2} height={2} fillOpacity={0.248}></rect>
                        <rect x={24} y={4} width={2} height={2} fillOpacity={0.168}></rect>
                        <rect x={28} y={4} width={2} height={2} fillOpacity={0.193}></rect>
                        <rect x={32} y={4} width={2} height={2} fillOpacity={0.528}></rect>
                        <rect x={36} y={4} width={2} height={2} fillOpacity={0.307}></rect>
                        <rect x={40} y={4} width={2} height={2} fillOpacity={0.314}></rect>
                        <rect x={44} y={4} width={2} height={2} fillOpacity={0.444}></rect>
                        <rect x={0} y={8} width={2} height={2} fillOpacity={0.33}></rect>
                        <rect x={4} y={8} width={2} height={2} fillOpacity={0.438}></rect>
                        <rect x={8} y={8} width={2} height={2} fillOpacity={0.477}></rect>
                        <rect x={12} y={8} width={2} height={2} fillOpacity={0.434}></rect>
                        <rect x={16} y={8} width={2} height={2} fillOpacity={0.47}></rect>
                        <rect x={20} y={8} width={2} height={2} fillOpacity={0.383}></rect>
                        <rect x={24} y={8} width={2} height={2} fillOpacity={0.514}></rect>
                        <rect x={28} y={8} width={2} height={2} fillOpacity={0.287}></rect>
                        <rect x={32} y={8} width={2} height={2} fillOpacity={0.346}></rect>
                        <rect x={36} y={8} width={2} height={2} fillOpacity={0.52}></rect>
                        <rect x={40} y={8} width={2} height={2} fillOpacity={0.524}></rect>
                        <rect x={44} y={8} width={2} height={2} fillOpacity={0.126}></rect>
                        <rect x={0} y={12} width={2} height={2} fillOpacity={0.259}></rect>
                        <rect x={4} y={12} width={2} height={2} fillOpacity={0.281}></rect>
                        <rect x={8} y={12} width={2} height={2} fillOpacity={0.311}></rect>
                        <rect x={12} y={12} width={2} height={2} fillOpacity={0.212}></rect>
                        <rect x={16} y={12} width={2} height={2} fillOpacity={0.524}></rect>
                        <rect x={20} y={12} width={2} height={2} fillOpacity={0.353}></rect>
                        <rect x={24} y={12} width={2} height={2} fillOpacity={0.34}></rect>
                        <rect x={28} y={12} width={2} height={2} fillOpacity={0.417}></rect>
                        <rect x={32} y={12} width={2} height={2} fillOpacity={0.258}></rect>
                        <rect x={36} y={12} width={2} height={2} fillOpacity={0.158}></rect>
                        <rect x={40} y={12} width={2} height={2} fillOpacity={0.388}></rect>
                        <rect x={44} y={12} width={2} height={2} fillOpacity={0.184}></rect>
                        <rect x={0} y={16} width={2} height={2} fillOpacity={0.491}></rect>
                        <rect x={4} y={16} width={2} height={2} fillOpacity={0.417}></rect>
                        <rect x={8} y={16} width={2} height={2} fillOpacity={0.231}></rect>
                        <rect x={12} y={16} width={2} height={2} fillOpacity={0.209}></rect>
                        <rect x={16} y={16} width={2} height={2} fillOpacity={0.305}></rect>
                        <rect x={20} y={16} width={2} height={2} fillOpacity={0.287}></rect>
                        <rect x={24} y={16} width={2} height={2} fillOpacity={0.353}></rect>
                        <rect x={28} y={16} width={2} height={2} fillOpacity={0.513}></rect>
                        <rect x={32} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                        <rect x={36} y={16} width={2} height={2} fillOpacity={0.455}></rect>
                        <rect x={40} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                        <rect x={44} y={16} width={2} height={2} fillOpacity={0.189}></rect>
                        <rect x={0} y={20} width={2} height={2} fillOpacity={0.264}></rect>
                        <rect x={4} y={20} width={2} height={2} fillOpacity={0.295}></rect>
                        <rect x={8} y={20} width={2} height={2} fillOpacity={0.51}></rect>
                        <rect x={12} y={20} width={2} height={2} fillOpacity={0.305}></rect>
                        <rect x={16} y={20} width={2} height={2} fillOpacity={0.438}></rect>
                        <rect x={20} y={20} width={2} height={2} fillOpacity={0.289}></rect>
                        <rect x={24} y={20} width={2} height={2} fillOpacity={0.322}></rect>
                        <rect x={28} y={20} width={2} height={2} fillOpacity={0.196}></rect>
                        <rect x={32} y={20} width={2} height={2} fillOpacity={0.486}></rect>
                        <rect x={36} y={20} width={2} height={2} fillOpacity={0.388}></rect>
                        <rect x={40} y={20} width={2} height={2} fillOpacity={0.489}></rect>
                        <rect x={44} y={20} width={2} height={2} fillOpacity={0.208}></rect>
                        <rect x={0} y={24} width={2} height={2} fillOpacity={0.239}></rect>
                        <rect x={4} y={24} width={2} height={2} fillOpacity={0.463}></rect>
                        <rect x={8} y={24} width={2} height={2} fillOpacity={0.539}></rect>
                        <rect x={12} y={24} width={2} height={2} fillOpacity={0.408}></rect>
                        <rect x={16} y={24} width={2} height={2} fillOpacity={0.527}></rect>
                        <rect x={20} y={24} width={2} height={2} fillOpacity={0.357}></rect>
                        <rect x={24} y={24} width={2} height={2} fillOpacity={0.362}></rect>
                        <rect x={28} y={24} width={2} height={2} fillOpacity={0.151}></rect>
                        <rect x={32} y={24} width={2} height={2} fillOpacity={0.324}></rect>
                        <rect x={36} y={24} width={2} height={2} fillOpacity={0.347}></rect>
                        <rect x={40} y={24} width={2} height={2} fillOpacity={0.299}></rect>
                        <rect x={44} y={24} width={2} height={2} fillOpacity={0.127}></rect>
                        <rect x={0} y={28} width={2} height={2} fillOpacity={0.476}></rect>
                        <rect x={4} y={28} width={2} height={2} fillOpacity={0.461}></rect>
                        <rect x={8} y={28} width={2} height={2} fillOpacity={0.377}></rect>
                        <rect x={12} y={28} width={2} height={2} fillOpacity={0.415}></rect>
                        <rect x={16} y={28} width={2} height={2} fillOpacity={0.217}></rect>
                        <rect x={20} y={28} width={2} height={2} fillOpacity={0.297}></rect>
                        <rect x={24} y={28} width={2} height={2} fillOpacity={0.258}></rect>
                        <rect x={28} y={28} width={2} height={2} fillOpacity={0.296}></rect>
                        <rect x={32} y={28} width={2} height={2} fillOpacity={0.276}></rect>
                        <rect x={36} y={28} width={2} height={2} fillOpacity={0.182}></rect>
                        <rect x={40} y={28} width={2} height={2} fillOpacity={0.422}></rect>
                        <rect x={44} y={28} width={2} height={2} fillOpacity={0.392}></rect>
                        <rect x={0} y={32} width={2} height={2} fillOpacity={0.273}></rect>
                        <rect x={4} y={32} width={2} height={2} fillOpacity={0.143}></rect>
                        <rect x={8} y={32} width={2} height={2} fillOpacity={0.338}></rect>
                        <rect x={12} y={32} width={2} height={2} fillOpacity={0.264}></rect>
                        <rect x={16} y={32} width={2} height={2} fillOpacity={0.218}></rect>
                        <rect x={20} y={32} width={2} height={2} fillOpacity={0.29}></rect>
                        <rect x={24} y={32} width={2} height={2} fillOpacity={0.336}></rect>
                        <rect x={28} y={32} width={2} height={2} fillOpacity={0.313}></rect>
                        <rect x={32} y={32} width={2} height={2} fillOpacity={0.514}></rect>
                        <rect x={36} y={32} width={2} height={2} fillOpacity={0.289}></rect>
                        <rect x={40} y={32} width={2} height={2} fillOpacity={0.25}></rect>
                        <rect x={44} y={32} width={2} height={2} fillOpacity={0.507}></rect>
                        <rect x={0} y={36} width={2} height={2} fillOpacity={0.346}></rect>
                        <rect x={4} y={36} width={2} height={2} fillOpacity={0.208}></rect>
                        <rect x={8} y={36} width={2} height={2} fillOpacity={0.313}></rect>
                        <rect x={12} y={36} width={2} height={2} fillOpacity={0.365}></rect>
                        <rect x={16} y={36} width={2} height={2} fillOpacity={0.491}></rect>
                        <rect x={20} y={36} width={2} height={2} fillOpacity={0.121}></rect>
                        <rect x={24} y={36} width={2} height={2} fillOpacity={0.472}></rect>
                        <rect x={28} y={36} width={2} height={2} fillOpacity={0.281}></rect>
                        <rect x={32} y={36} width={2} height={2} fillOpacity={0.297}></rect>
                        <rect x={36} y={36} width={2} height={2} fillOpacity={0.33}></rect>
                        <rect x={40} y={36} width={2} height={2} fillOpacity={0.463}></rect>
                        <rect x={44} y={36} width={2} height={2} fillOpacity={0.447}></rect>
                        <rect x={0} y={40} width={2} height={2} fillOpacity={0.217}></rect>
                        <rect x={4} y={40} width={2} height={2} fillOpacity={0.467}></rect>
                        <rect x={8} y={40} width={2} height={2} fillOpacity={0.297}></rect>
                        <rect x={12} y={40} width={2} height={2} fillOpacity={0.303}></rect>
                        <rect x={16} y={40} width={2} height={2} fillOpacity={0.497}></rect>
                        <rect x={20} y={40} width={2} height={2} fillOpacity={0.201}></rect>
                        <rect x={24} y={40} width={2} height={2} fillOpacity={0.5}></rect>
                        <rect x={28} y={40} width={2} height={2} fillOpacity={0.458}></rect>
                        <rect x={32} y={40} width={2} height={2} fillOpacity={0.165}></rect>
                        <rect x={36} y={40} width={2} height={2} fillOpacity={0.36}></rect>
                        <rect x={40} y={40} width={2} height={2} fillOpacity={0.329}></rect>
                        <rect x={44} y={40} width={2} height={2} fillOpacity={0.419}></rect>
                        <rect x={0} y={44} width={2} height={2} fillOpacity={0.47}></rect>
                        <rect x={4} y={44} width={2} height={2} fillOpacity={0.161}></rect>
                        <rect x={8} y={44} width={2} height={2} fillOpacity={0.191}></rect>
                        <rect x={12} y={44} width={2} height={2} fillOpacity={0.341}></rect>
                        <rect x={16} y={44} width={2} height={2} fillOpacity={0.279}></rect>
                        <rect x={20} y={44} width={2} height={2} fillOpacity={0.387}></rect>
                        <rect x={24} y={44} width={2} height={2} fillOpacity={0.173}></rect>
                        <rect x={28} y={44} width={2} height={2} fillOpacity={0.537}></rect>
                        <rect x={32} y={44} width={2} height={2} fillOpacity={0.218}></rect>
                        <rect x={36} y={44} width={2} height={2} fillOpacity={0.368}></rect>
                        <rect x={40} y={44} width={2} height={2} fillOpacity={0.5}></rect>
                        <rect x={44} y={44} width={2} height={2} fillOpacity={0.414}></rect>
                      </g>
                    </pattern>
                    <lineargradient id="_r_2_-gradient" x1={1} y1={1} x2={0.4} y2={0.1}>
                      <stop stopColor="white"></stop>
                      <stop offset={0.55} stopColor="white"></stop>
                      <stop offset={1} stopColor="white" stopOpacity={0}></stop>
                    </lineargradient>
                    <mask id="_r_2_-mask" style={{maskType: "alpha"}}>
                      <rect width="100%" height="100%" fill="url(#_r_2_-gradient)"></rect>
                    </mask>
                  </defs>
                  <g mask="url(#_r_2_-mask)">
                    <rect width="100%" height="100%" fill="url(#_r_2_-pattern)"></rect>
                  </g>
                </svg>
              </div>
              <CardContent className="relative z-10">
                <ul className="@2xl:flex-row @2xl:gap-3 flex flex-col gap-1" role="list">
                  <li className="@2xl:flex-1 min-w-0">
                    <Item href="#" variant="default" size="default">
                      <ItemMedia className="self-center! translate-y-0!" variant="default">
                        <IconTile variant="elevated" size="default">
                          <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                            <path d="M13 5h8"></path>
                            <path d="M13 12h8"></path>
                            <path d="M13 19h8"></path>
                            <path d="m3 17 2 2 4-4"></path>
                            <path d="m3 7 2 2 4-4"></path>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="gap-0.5">
                        <ItemTitle>
                          {"Compare Features"}
                        </ItemTitle>
                        <ItemDescription>
                          {"Every plan limit, side by side"}
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <svg className="group-hover/item:text-foreground lucide lucide-arrow-down size-4 text-muted-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                          <path d="M12 5v14"></path>
                          <path d="m19 12-7 7-7-7"></path>
                        </svg>
                      </ItemActions>
                    </Item>
                  </li>
                  <li className="@2xl:flex hidden" aria-hidden="true">
                    <Separator data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
                  </li>
                  <li className="@2xl:flex-1 min-w-0">
                    <Item href="#" variant="default" size="default">
                      <ItemMedia className="self-center! translate-y-0!" variant="default">
                        <IconTile variant="elevated" size="default">
                          <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </IconTile>
                      </ItemMedia>
                      <ItemContent className="gap-0.5">
                        <ItemTitle>
                          {"Pricing FAQ"}
                        </ItemTitle>
                        <ItemDescription>
                          {"Seats, invoices and refunds"}
                        </ItemDescription>
                      </ItemContent>
                      <ItemActions>
                        <svg className="group-hover/item:text-foreground lucide lucide-arrow-down size-4 text-muted-foreground transition-colors" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                          <path d="M12 5v14"></path>
                          <path d="m19 12-7 7-7-7"></path>
                        </svg>
                      </ItemActions>
                    </Item>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
