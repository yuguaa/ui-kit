import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="@container bg-background text-foreground w-full" aria-labelledby="pricing-3-title">
        <div className="@4xl:gap-16 @4xl:py-16 @min-[40rem]:px-6 @min-[64rem]:px-8 flex flex-col gap-12 max-w-6xl mx-auto px-4 py-12 w-full">
          <h2 className="sr-only" id="pricing-3-title">
            {"Pricing"}
          </h2>
          <figure className="flex flex-col items-center text-center">
            <p className="font-mono mb-5 text-muted-foreground text-xs tracking-widest uppercase">
              {"Used by 1,284 product teams"}
            </p>
            <blockquote className="@2xl:text-2xl font-semibold leading-snug text-balance text-xl">
              <p>
                <span className="@2xl:block">
                  {"“Our funnel review went from a week to a morning."}
                </span>
                {"Adding seats never meant a new contract.”"}
              </p>
            </blockquote>
            <figcaption className="flex gap-3 items-center mt-6 text-sm text-start">
              <Avatar size="lg">
                <AvatarImage alt="" width="40" height="40" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <span className="flex flex-col gap-1">
                <span className="font-semibold leading-none">
                  {"Nora Vale"}
                </span>
                <span className="text-muted-foreground">
                  {"Head of Growth at"}
                  <a className="hover:text-foreground transition-colors underline underline-offset-4" href="#">
                    {"Fernhill"}
                  </a>
                </span>
              </span>
            </figcaption>
          </figure>
          <div className="flex flex-col gap-10">
            <Card className="@max-5xl:hidden [&_[data-slot=table-container]]:overflow-x-clip [overflow-clip-margin:1px] overflow-clip py-0" size="default">
              <div className="cn-table-container">
                <Table>
                  <colgroup>
                    <col className="w-[31%]" />
                    <col className="w-[23%]" />
                    <col className="w-[23%]" />
                    <col className="w-[23%]" />
                  </colgroup>
                  <TableHeader>
                    <TableRow className="border-b-0 h-px hover:bg-transparent">
                      <TableCell className="align-top pb-[calc(var(--card-spacing)+--spacing(4))] pe-3 ps-(--card-spacing) pt-[calc(var(--card-spacing)+--spacing(4))] whitespace-normal" rowSpan="4">
                        <div className="flex flex-col gap-3">
                          <h3 className="font-semibold text-base" id="_r_0_">
                            {"Choose your team size"}
                          </h3>
                          <Tabs className="gap-4" data-orientation="horizontal" activationDirection="none">
                            <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-labelledby="_r_0_">
                              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_" extracted="1">
                                {"Solo"}
                              </TabsTrigger>
                              <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_2_" compositeItemActive="" aria-controls="base-ui-_r_6_">
                                {"Startup"}
                              </TabsTrigger>
                              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
                                {"Growth"}
                              </TabsTrigger>
                              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_4_">
                                {"Enterprise"}
                              </TabsTrigger>
                            </TabsList>
                            <TabsContent className="flex flex-col gap-4" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_6_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_2_">
                              <p className="text-muted-foreground truncate">
                                {"For a first product team"}
                              </p>
                              <ul className="flex flex-col gap-2" role="list">
                                <li className="flex gap-2 items-center">
                                  <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                  </svg>
                                  <span className="font-semibold min-w-0 tabular-nums truncate">
                                    {"5 seats on paid plans"}
                                  </span>
                                </li>
                                <li className="flex gap-2 items-center">
                                  <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                  </svg>
                                  <span className="min-w-0 tabular-nums text-muted-foreground truncate">
                                    {"Shared workspaces"}
                                  </span>
                                </li>
                                <li className="flex gap-2 items-center">
                                  <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                  </svg>
                                  <span className="min-w-0 tabular-nums text-muted-foreground truncate">
                                    {"Editor and viewer roles"}
                                  </span>
                                </li>
                                <li className="flex gap-2 items-center">
                                  <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                    <path d="M20 6 9 17l-5-5"></path>
                                  </svg>
                                  <span className="min-w-0 tabular-nums text-muted-foreground truncate">
                                    {"Comments on charts"}
                                  </span>
                                </li>
                              </ul>
                            </TabsContent>
                          </Tabs>
                        </div>
                      </TableCell>
                      <TableHead className="align-top border-s font-semibold h-auto pb-1 pt-[calc(var(--card-spacing)+--spacing(4))] px-3 relative text-base text-center whitespace-normal" scope="col" abbr="Free">
                        <span className="block min-w-full w-0">
                          {"Free"}
                        </span>
                      </TableHead>
                      <TableHead className="align-top border-s font-semibold h-auto pb-1 pt-[calc(var(--card-spacing)+--spacing(4))] px-3 relative text-base text-center whitespace-normal" scope="col" abbr="Pro">
                        <span className="block min-w-full w-0">
                          {"Pro"}
                        </span>
                      </TableHead>
                      <TableHead className="align-top bg-primary/2 border-s font-semibold h-auto pb-1 pe-(--card-spacing) pt-[calc(var(--card-spacing)+--spacing(4))] px-3 relative text-base text-center whitespace-normal" scope="col" abbr="Ultimate">
                        <Badge className="-top-px -translate-x-1/2 [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 left-1/2 min-w-5 outline-none px-1.25 py-0.5 rounded-t-none! style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                          {"Best Value"}
                        </Badge>
                        <span className="block min-w-full w-0">
                          {"Ultimate"}
                        </span>
                      </TableHead>
                    </TableRow>
                    <TableRow className="border-b-0 h-px hover:bg-transparent">
                      <TableCell className="align-top border-s pb-5 pt-0 px-3 text-center text-muted-foreground whitespace-normal">
                        <div className="min-w-full w-0">
                          <p className="max-w-45 mx-auto text-balance text-xs/relaxed">
                            {"Core charts and funnels for a single product."}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="align-top border-s pb-5 pt-0 px-3 text-center text-muted-foreground whitespace-normal">
                        <div className="min-w-full w-0">
                          <p className="max-w-45 mx-auto text-balance text-xs/relaxed">
                            {"Session replays, hourly alerts and a year of data."}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="align-top bg-primary/2 border-s pb-5 pe-(--card-spacing) pt-0 px-3 text-center text-muted-foreground whitespace-normal">
                        <div className="min-w-full w-0">
                          <p className="max-w-45 mx-auto text-balance text-xs/relaxed">
                            {"Warehouse sync, SSO and replies within a day."}
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-b-0 h-px hover:bg-transparent">
                      <TableCell className="align-top border-s px-3 py-0 text-center whitespace-normal">
                        <div className="flex flex-col gap-2 items-center min-w-full w-0">
                          <p className="flex flex-wrap gap-x-1.5 items-baseline justify-center">
                            <span className="font-bold tabular-nums text-3xl tracking-tight">
                              {"$0"}
                            </span>
                            <span className="font-medium text-muted-foreground text-xs">
                              {"Forever"}
                            </span>
                          </p>
                          <p className="tabular-nums text-muted-foreground text-xs">
                            {"No card needed"}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="align-top border-s px-3 py-0 text-center whitespace-normal">
                        <div className="flex flex-col gap-2 items-center min-w-full w-0">
                          <p className="flex flex-wrap gap-x-1.5 items-baseline justify-center">
                            <s className="font-semibold tabular-nums text-lg text-muted-foreground">
                              <span className="sr-only">
                                {"Regular price"}
                              </span>
                              {"$140"}
                            </s>
                            <span className="font-bold tabular-nums text-3xl tracking-tight">
                              <span className="sr-only">
                                {", now"}
                              </span>
                              {"$130"}
                            </span>
                            <span className="font-medium text-muted-foreground text-xs">
                              {"a month"}
                            </span>
                          </p>
                          <p className="tabular-nums text-muted-foreground text-xs">
                            {"$26 a seat, billed yearly"}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell className="align-top bg-primary/2 border-s pe-(--card-spacing) px-3 py-0 text-center whitespace-normal">
                        <div className="flex flex-col gap-2 items-center min-w-full w-0">
                          <p className="flex flex-wrap gap-x-1.5 items-baseline justify-center">
                            <s className="font-semibold tabular-nums text-lg text-muted-foreground">
                              <span className="sr-only">
                                {"Regular price"}
                              </span>
                              {"$240"}
                            </s>
                            <span className="font-bold tabular-nums text-3xl tracking-tight">
                              <span className="sr-only">
                                {", now"}
                              </span>
                              {"$225"}
                            </span>
                            <span className="font-medium text-muted-foreground text-xs">
                              {"a month"}
                            </span>
                          </p>
                          <p className="tabular-nums text-muted-foreground text-xs">
                            {"$45 a seat, billed yearly"}
                          </p>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="hover:bg-transparent">
                      <TableCell className="align-top border-s pb-[calc(var(--card-spacing)+--spacing(4))] pt-5 px-3 text-center whitespace-normal">
                        <Button className="min-w-full rounded-sm w-0" href="#" role="button" tabIndex="0">
                          {"Start Free"}
                        </Button>
                      </TableCell>
                      <TableCell className="align-top border-s pb-[calc(var(--card-spacing)+--spacing(4))] pt-5 px-3 text-center whitespace-normal">
                        <Button className="leading-none min-w-full rounded-sm text-balance w-0 whitespace-normal" type="button" disabled="" tabIndex="0" disabled>
                          {"Included in your package"}
                        </Button>
                      </TableCell>
                      <TableCell className="align-top bg-primary/2 border-s pb-[calc(var(--card-spacing)+--spacing(4))] pe-(--card-spacing) pt-5 px-3 text-center whitespace-normal">
                        <Button className="leading-none min-w-full rounded-sm text-balance w-0 whitespace-normal" type="button" disabled="" tabIndex="0" disabled>
                          {"Current Package"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Analyst seats">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-users shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                          </svg>
                          <span className="truncate">
                            {"Analyst seats"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Analyst seats" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"1 seat"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"5 seats"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"5 seats"}
                          </Badge>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Monthly events">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-activity shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                            <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                          </svg>
                          <span className="truncate">
                            {"Monthly events"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Monthly events" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"50,000"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"2 million"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"10 million"}
                          </Badge>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Data retention">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-archive shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                            <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                            <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                            <path d="M10 12h4"></path>
                          </svg>
                          <span className="truncate">
                            {"Data retention"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Data retention" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Button className="focus-visible:opacity-100 focus-visible:translate-x-0 group-hover:opacity-100 group-hover:translate-x-0 motion-reduce:transition-none ms-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:translate-x-0 px-0 translate-x-1" href="#" aria-label="Data retention, policy" role="button" tabIndex="0">
                            {"Policy"}
                            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </Button>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"30 days"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"12 months"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"36 months"}
                          </Badge>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Source integrations">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-plug-zap shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                            <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                            <path d="m2 22 3-3"></path>
                            <path d="M7.5 13.5 10 11"></path>
                            <path d="M10.5 16.5 13 14"></path>
                            <path d="m18 3-4 4h6l-4 4"></path>
                          </svg>
                          <span className="truncate">
                            {"Source integrations"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                            {"140"}
                          </Badge>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Source integrations" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Button className="focus-visible:opacity-100 focus-visible:translate-x-0 group-hover:opacity-100 group-hover:translate-x-0 motion-reduce:transition-none ms-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:translate-x-0 px-0 translate-x-1" href="#" aria-label="Source integrations, browse" role="button" tabIndex="0">
                            {"Browse"}
                            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </Button>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Report templates">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-file-text shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                            <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                            <path d="M10 9H8"></path>
                            <path d="M16 13H8"></path>
                            <path d="M16 17H8"></path>
                          </svg>
                          <span className="truncate">
                            {"Report templates"}
                          </span>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                            {"36"}
                          </Badge>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Report templates" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Button className="focus-visible:opacity-100 focus-visible:translate-x-0 group-hover:opacity-100 group-hover:translate-x-0 motion-reduce:transition-none ms-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:translate-x-0 px-0 translate-x-1" href="#" aria-label="Report templates, browse" role="button" tabIndex="0">
                            {"Browse"}
                            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </Button>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Saved dashboards">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-layout-dashboard shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                          </svg>
                          <span className="truncate">
                            {"Saved dashboards"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Saved dashboards" id="base-ui-_r_k_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Button className="focus-visible:opacity-100 focus-visible:translate-x-0 group-hover:opacity-100 group-hover:translate-x-0 motion-reduce:transition-none ms-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:translate-x-0 px-0 translate-x-1" href="#" aria-label="Saved dashboards, examples" role="button" tabIndex="0">
                            {"Examples"}
                            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </Button>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"3"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"50"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"500"}
                          </Badge>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Alert checks">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-bell shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                            <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                          </svg>
                          <span className="truncate">
                            {"Alert checks"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Alert checks" id="base-ui-_r_m_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"Daily"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"Hourly"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"Every 15 minutes"}
                          </Badge>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Session replay">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-play shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
                            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                          </svg>
                          <span className="truncate">
                            {"Session replay"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Session replay" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Button className="focus-visible:opacity-100 focus-visible:translate-x-0 group-hover:opacity-100 group-hover:translate-x-0 motion-reduce:transition-none ms-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:translate-x-0 px-0 translate-x-1" href="#" aria-label="Session replay, watch" role="button" tabIndex="0">
                            {"Watch"}
                            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </Button>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex text-muted-foreground/80">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                            <span className="sr-only">
                              {"Not included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Shared workspaces">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-layers shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                          </svg>
                          <span className="truncate">
                            {"Shared workspaces"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Shared workspaces" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex text-muted-foreground/80">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                            <span className="sr-only">
                              {"Not included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Seat management">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-user-round-cog shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                            <path d="m14.305 19.53.923-.382"></path>
                            <path d="m15.228 16.852-.923-.383"></path>
                            <path d="m16.852 15.228-.383-.923"></path>
                            <path d="m16.852 20.772-.383.924"></path>
                            <path d="m19.148 15.228.383-.923"></path>
                            <path d="m19.53 21.696-.382-.924"></path>
                            <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                            <path d="m20.772 16.852.924-.383"></path>
                            <path d="m20.772 19.148.924.383"></path>
                            <circle cx="10" cy="8" r="5"></circle>
                            <circle cx="18" cy="18" r="3"></circle>
                          </svg>
                          <span className="truncate">
                            {"Seat management"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Seat management" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex text-muted-foreground/80">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                            <span className="sr-only">
                              {"Not included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Warehouse sync">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-database shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                            <path d="M3 12A9 3 0 0 0 21 12"></path>
                          </svg>
                          <span className="truncate">
                            {"Warehouse sync"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Warehouse sync" id="base-ui-_r_u_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Button className="focus-visible:opacity-100 focus-visible:translate-x-0 group-hover:opacity-100 group-hover:translate-x-0 motion-reduce:transition-none ms-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:translate-x-0 px-0 translate-x-1" href="#" aria-label="Warehouse sync, docs" role="button" tabIndex="0">
                            {"Docs"}
                            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </Button>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex text-muted-foreground/80">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                            <span className="sr-only">
                              {"Not included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex text-muted-foreground/80">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                            <span className="sr-only">
                              {"Not included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Single sign-on">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-lock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                          <span className="truncate">
                            {"Single sign-on"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Single sign-on" id="base-ui-_r_10_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                          <Button className="focus-visible:opacity-100 focus-visible:translate-x-0 group-hover:opacity-100 group-hover:translate-x-0 motion-reduce:transition-none ms-auto opacity-0 pointer-coarse:opacity-100 pointer-coarse:translate-x-0 px-0 translate-x-1" href="#" aria-label="Single sign-on, docs" role="button" tabIndex="0">
                            {"Docs"}
                            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </Button>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex text-muted-foreground/80">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                            <span className="sr-only">
                              {"Not included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex text-muted-foreground/80">
                            <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                              <path d="M18 6 6 18"></path>
                              <path d="m6 6 12 12"></path>
                            </svg>
                            <span className="sr-only">
                              {"Not included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <span className="flex">
                            <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span className="sr-only">
                              {"Included"}
                            </span>
                          </span>
                        </span>
                      </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-muted/15 even:hover:bg-muted/15 group hover:bg-transparent">
                      <TableHead className="h-auto pe-3 ps-(--card-spacing) py-3.5 whitespace-normal" scope="row" abbr="Support reply time">
                        <span className="flex gap-2 items-center min-w-0">
                          <svg className="lucide lucide-headphones shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                          </svg>
                          <span className="truncate">
                            {"Support reply time"}
                          </span>
                          <Tooltip>
                          <TooltipTrigger className="-ms-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="About Support reply time" id="base-ui-_r_12_" baseUiTooltipTrigger="">
                            <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M12 16v-4"></path>
                              <path d="M12 8h.01"></path>
                            </svg>
                          </TooltipTrigger>
                          </Tooltip>
                        </span>
                      </TableHead>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"Best effort"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle border-s px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"2 days"}
                          </Badge>
                        </span>
                      </TableCell>
                      <TableCell className="align-middle bg-primary/2 border-s pe-(--card-spacing) px-3 py-3.5 text-center whitespace-normal">
                        <span className="flex justify-center min-w-full w-0">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-secondary-foreground text-xs transition-shadow">
                            {"1 day"}
                          </Badge>
                        </span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Card>
            <div className="@5xl:hidden flex flex-col gap-10">
              <div className="flex flex-col gap-3 items-center">
                <h3 className="font-semibold sr-only text-base" id="_r_13_">
                  {"Choose your team size"}
                </h3>
                <Tabs className="gap-2" data-orientation="horizontal" activationDirection="none">
                  <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-labelledby="_r_13_">
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_14_">
                      {"Solo"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_15_" compositeItemActive="" aria-controls="base-ui-_r_19_">
                      {"Startup"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_16_">
                      {"Growth"}
                    </TabsTrigger>
                    <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_17_">
                      {"Enterprise"}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent className="flex flex-col gap-4" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_19_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_15_">
                    <p className="text-muted-foreground truncate">
                      {"For a first product team"}
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
              <ul className="flex flex-col gap-6" role="list">
                <li>
                  <Card size="default">
                    <CardHeader>
                      <CardTitle className="flex font-semibold gap-2 items-center text-lg" role="heading" aria-level="3">
                        {"Free"}
                      </CardTitle>
                      <CardDescription>
                        {"Core charts and funnels for a single product."}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <p className="flex flex-wrap gap-x-2 items-baseline">
                          <span className="font-bold tabular-nums text-3xl tracking-tight">
                            {"$0"}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {"Forever"}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Button className="h-10 rounded-sm w-full" href="#" role="button" tabIndex="0">
                          {"Start Free"}
                        </Button>
                        <p className="tabular-nums text-center text-muted-foreground text-xs">
                          {"No card needed"}
                        </p>
                      </div>
                    </CardContent>
                    <CardContent className="flex flex-col gap-5">
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <ul className="flex flex-col gap-3" role="list">
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-users shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                            <span className="truncate">
                              {"Analyst seats"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"1 seat"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-activity shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                            </svg>
                            <span className="truncate">
                              {"Monthly events"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"50,000"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Data retention, policy">
                            <svg className="lucide lucide-archive shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                              <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                              <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                              <path d="M10 12h4"></path>
                            </svg>
                            <span className="truncate">
                              {"Data retention"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"30 days"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Source integrations, browse">
                            <svg className="lucide lucide-plug-zap shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                              <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                              <path d="m2 22 3-3"></path>
                              <path d="M7.5 13.5 10 11"></path>
                              <path d="M10.5 16.5 13 14"></path>
                              <path d="m18 3-4 4h6l-4 4"></path>
                            </svg>
                            <span className="truncate">
                              {"Source integrations"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                              {"140"}
                            </Badge>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Report templates, browse">
                            <svg className="lucide lucide-file-text shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                            <span className="truncate">
                              {"Report templates"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                              {"36"}
                            </Badge>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Saved dashboards, examples">
                            <svg className="lucide lucide-layout-dashboard shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                              <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                              <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                              <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                              <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                            </svg>
                            <span className="truncate">
                              {"Saved dashboards"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"3"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-bell shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                            </svg>
                            <span className="truncate">
                              {"Alert checks"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"Daily"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Session replay, watch">
                            <svg className="lucide lucide-play shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
                              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                            </svg>
                            <span className="truncate">
                              {"Session replay"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-layers shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                            </svg>
                            <span className="truncate">
                              {"Shared workspaces"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-user-round-cog shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                              <path d="m14.305 19.53.923-.382"></path>
                              <path d="m15.228 16.852-.923-.383"></path>
                              <path d="m16.852 15.228-.383-.923"></path>
                              <path d="m16.852 20.772-.383.924"></path>
                              <path d="m19.148 15.228.383-.923"></path>
                              <path d="m19.53 21.696-.382-.924"></path>
                              <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                              <path d="m20.772 16.852.924-.383"></path>
                              <path d="m20.772 19.148.924.383"></path>
                              <circle cx="10" cy="8" r="5"></circle>
                              <circle cx="18" cy="18" r="3"></circle>
                            </svg>
                            <span className="truncate">
                              {"Seat management"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Warehouse sync, docs">
                            <svg className="lucide lucide-database shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                              <path d="M3 12A9 3 0 0 0 21 12"></path>
                            </svg>
                            <span className="truncate">
                              {"Warehouse sync"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Single sign-on, docs">
                            <svg className="lucide lucide-lock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <span className="truncate">
                              {"Single sign-on"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-headphones shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                              <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                            </svg>
                            <span className="truncate">
                              {"Support reply time"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"Best effort"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </li>
                <li>
                  <Card size="default">
                    <CardHeader>
                      <CardTitle className="flex font-semibold gap-2 items-center text-lg" role="heading" aria-level="3">
                        {"Pro"}
                      </CardTitle>
                      <CardDescription>
                        {"Session replays, hourly alerts and a year of data."}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <p className="flex flex-wrap gap-x-2 items-baseline">
                          <s className="font-semibold tabular-nums text-lg text-muted-foreground">
                            <span className="sr-only">
                              {"Regular price"}
                            </span>
                            {"$140"}
                          </s>
                          <span className="font-bold tabular-nums text-3xl tracking-tight">
                            <span className="sr-only">
                              {", now"}
                            </span>
                            {"$130"}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {"a month"}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Button className="h-10 leading-none rounded-sm text-balance w-full whitespace-normal" type="button" disabled="" tabIndex="0" disabled>
                          {"Included in your package"}
                        </Button>
                        <p className="tabular-nums text-center text-muted-foreground text-xs">
                          {"$26 a seat, billed yearly"}
                        </p>
                      </div>
                    </CardContent>
                    <CardContent className="flex flex-col gap-5">
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <ul className="flex flex-col gap-3" role="list">
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-users shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                            <span className="truncate">
                              {"Analyst seats"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"5 seats"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-activity shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                            </svg>
                            <span className="truncate">
                              {"Monthly events"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"2 million"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Data retention, policy">
                            <svg className="lucide lucide-archive shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                              <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                              <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                              <path d="M10 12h4"></path>
                            </svg>
                            <span className="truncate">
                              {"Data retention"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"12 months"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Source integrations, browse">
                            <svg className="lucide lucide-plug-zap shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                              <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                              <path d="m2 22 3-3"></path>
                              <path d="M7.5 13.5 10 11"></path>
                              <path d="M10.5 16.5 13 14"></path>
                              <path d="m18 3-4 4h6l-4 4"></path>
                            </svg>
                            <span className="truncate">
                              {"Source integrations"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                              {"140"}
                            </Badge>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Report templates, browse">
                            <svg className="lucide lucide-file-text shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                            <span className="truncate">
                              {"Report templates"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                              {"36"}
                            </Badge>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Saved dashboards, examples">
                            <svg className="lucide lucide-layout-dashboard shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                              <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                              <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                              <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                              <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                            </svg>
                            <span className="truncate">
                              {"Saved dashboards"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"50"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-bell shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                            </svg>
                            <span className="truncate">
                              {"Alert checks"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"Hourly"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Session replay, watch">
                            <svg className="lucide lucide-play shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
                              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                            </svg>
                            <span className="truncate">
                              {"Session replay"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-layers shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                            </svg>
                            <span className="truncate">
                              {"Shared workspaces"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-user-round-cog shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                              <path d="m14.305 19.53.923-.382"></path>
                              <path d="m15.228 16.852-.923-.383"></path>
                              <path d="m16.852 15.228-.383-.923"></path>
                              <path d="m16.852 20.772-.383.924"></path>
                              <path d="m19.148 15.228.383-.923"></path>
                              <path d="m19.53 21.696-.382-.924"></path>
                              <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                              <path d="m20.772 16.852.924-.383"></path>
                              <path d="m20.772 19.148.924.383"></path>
                              <circle cx="10" cy="8" r="5"></circle>
                              <circle cx="18" cy="18" r="3"></circle>
                            </svg>
                            <span className="truncate">
                              {"Seat management"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Warehouse sync, docs">
                            <svg className="lucide lucide-database shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                              <path d="M3 12A9 3 0 0 0 21 12"></path>
                            </svg>
                            <span className="truncate">
                              {"Warehouse sync"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Single sign-on, docs">
                            <svg className="lucide lucide-lock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <span className="truncate">
                              {"Single sign-on"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex text-muted-foreground/80">
                              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                              </svg>
                              <span className="sr-only">
                                {"Not included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-headphones shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                              <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                            </svg>
                            <span className="truncate">
                              {"Support reply time"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"2 days"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </li>
                <li>
                  <Card className="ring-primary/30" size="default">
                    <CardHeader>
                      <CardTitle className="flex font-semibold gap-2 items-center text-lg" role="heading" aria-level="3">
                        {"Ultimate"}
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                          {"Best Value"}
                        </Badge>
                      </CardTitle>
                      <CardDescription>
                        {"Warehouse sync, SSO and replies within a day."}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <p className="flex flex-wrap gap-x-2 items-baseline">
                          <s className="font-semibold tabular-nums text-lg text-muted-foreground">
                            <span className="sr-only">
                              {"Regular price"}
                            </span>
                            {"$240"}
                          </s>
                          <span className="font-bold tabular-nums text-3xl tracking-tight">
                            <span className="sr-only">
                              {", now"}
                            </span>
                            {"$225"}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {"a month"}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Button className="h-10 leading-none rounded-sm text-balance w-full whitespace-normal" type="button" disabled="" tabIndex="0" disabled>
                          {"Current Package"}
                        </Button>
                        <p className="tabular-nums text-center text-muted-foreground text-xs">
                          {"$45 a seat, billed yearly"}
                        </p>
                      </div>
                    </CardContent>
                    <CardContent className="flex flex-col gap-5">
                      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                      <ul className="flex flex-col gap-3" role="list">
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-users shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                            <span className="truncate">
                              {"Analyst seats"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"5 seats"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-activity shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                            </svg>
                            <span className="truncate">
                              {"Monthly events"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"10 million"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Data retention, policy">
                            <svg className="lucide lucide-archive shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                              <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                              <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                              <path d="M10 12h4"></path>
                            </svg>
                            <span className="truncate">
                              {"Data retention"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"36 months"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Source integrations, browse">
                            <svg className="lucide lucide-plug-zap shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                              <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                              <path d="m2 22 3-3"></path>
                              <path d="M7.5 13.5 10 11"></path>
                              <path d="M10.5 16.5 13 14"></path>
                              <path d="m18 3-4 4h6l-4 4"></path>
                            </svg>
                            <span className="truncate">
                              {"Source integrations"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                              {"140"}
                            </Badge>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Report templates, browse">
                            <svg className="lucide lucide-file-text shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                              <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                              <path d="M10 9H8"></path>
                              <path d="M16 13H8"></path>
                              <path d="M16 17H8"></path>
                            </svg>
                            <span className="truncate">
                              {"Report templates"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-xs transition-shadow">
                              {"36"}
                            </Badge>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Saved dashboards, examples">
                            <svg className="lucide lucide-layout-dashboard shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                              <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                              <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                              <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                              <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                            </svg>
                            <span className="truncate">
                              {"Saved dashboards"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"500"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-bell shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                            </svg>
                            <span className="truncate">
                              {"Alert checks"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"Every 15 minutes"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Session replay, watch">
                            <svg className="lucide lucide-play shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
                              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                            </svg>
                            <span className="truncate">
                              {"Session replay"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-layers shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                            </svg>
                            <span className="truncate">
                              {"Shared workspaces"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-user-round-cog shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserRoundCogIcon" tabler="IconUserCog" hugeicons="UserSettings01Icon" phosphor="UserCircleGearIcon" remixicon="RiUserSettingsLine" aria-hidden="true">
                              <path d="m14.305 19.53.923-.382"></path>
                              <path d="m15.228 16.852-.923-.383"></path>
                              <path d="m16.852 15.228-.383-.923"></path>
                              <path d="m16.852 20.772-.383.924"></path>
                              <path d="m19.148 15.228.383-.923"></path>
                              <path d="m19.53 21.696-.382-.924"></path>
                              <path d="M2 21a8 8 0 0 1 10.434-7.62"></path>
                              <path d="m20.772 16.852.924-.383"></path>
                              <path d="m20.772 19.148.924.383"></path>
                              <circle cx="10" cy="8" r="5"></circle>
                              <circle cx="18" cy="18" r="3"></circle>
                            </svg>
                            <span className="truncate">
                              {"Seat management"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Warehouse sync, docs">
                            <svg className="lucide lucide-database shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                              <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                              <path d="M3 12A9 3 0 0 0 21 12"></path>
                            </svg>
                            <span className="truncate">
                              {"Warehouse sync"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <a className="flex focus-visible:ring-3 focus-visible:ring-ring/50 gap-2 hover:text-primary hover:underline items-center min-w-0 outline-none underline-offset-4" href="#" aria-label="Single sign-on, docs">
                            <svg className="lucide lucide-lock shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                            <span className="truncate">
                              {"Single sign-on"}
                            </span>
                            <svg className="lucide lucide-arrow-up-right shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                              <path d="M7 7h10v10"></path>
                              <path d="M7 17 17 7"></path>
                            </svg>
                          </a>
                          <span className="flex justify-end shrink-0">
                            <span className="flex">
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                              <span className="sr-only">
                                {"Included"}
                              </span>
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-3 items-center justify-between min-h-6">
                          <span className="flex gap-2 items-center min-w-0">
                            <svg className="lucide lucide-headphones shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                              <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                            </svg>
                            <span className="truncate">
                              {"Support reply time"}
                            </span>
                          </span>
                          <span className="flex justify-end shrink-0">
                            <span className="flex font-medium gap-1.5 items-center tabular-nums whitespace-nowrap">
                              {"1 day"}
                              <svg className="lucide lucide-check shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                                <path d="M20 6 9 17l-5-5"></path>
                              </svg>
                            </span>
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 items-center text-center text-muted-foreground text-xs">
              <p className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center">
                <span className="flex gap-1.5 items-center">
                  <svg className="lucide lucide-lock shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  {"Encrypted card checkout"}
                </span>
                <a className="flex gap-1.5 hover:text-primary/80 items-center text-primary transition-colors underline underline-offset-4" href="#">
                  <svg className="lucide lucide-shield-check shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  {"30-day refunds"}
                </a>
              </p>
              <p className="text-balance">
                {"Local sales tax is added at checkout, where your country requires it."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
