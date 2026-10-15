import { IconStack } from "@/registry-neui/bases/base/neui/icon-stack"
import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry-neui/bases/radix/neui/timeline"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Spinner } from "@/registry/bases/base/ui/spinner"
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
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col min-h-svh w-full">
      <div className="max-w-[1320px] mx-auto p-3 w-full">
        <div className="border-b flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between pb-3">
          <div className="flex gap-2 items-center min-w-0">
            <span className="[&_svg]:opacity-80 [&_svg]:size-5 bg-muted/40 border flex items-center justify-center rounded-md shrink-0 size-10" aria-hidden="true">
              <svg className="size-6" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                <g clipRule="evenodd" fillRule="evenodd">
                  <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                  <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                  <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                  <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                </g>
              </svg>
            </span>
            <div className="flex flex-col gap-0 min-w-0">
              <div className="flex flex-wrap gap-2 items-center">
                <h1 className="font-semibold text-foreground text-lg tracking-tight truncate">
                  {"Slack"}
                </h1>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                  {"ACC-3092"}
                </Badge>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                  {"Scale"}
                </Badge>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                  {"Past due"}
                </Badge>
              </div>
              <p className="leading-5 text-muted-foreground text-sm truncate">
                {"Customer since Mar 2024, owner Andre Costa"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 shrink-0 sm:flex-row sm:items-center sm:justify-end">
            <div className="flex gap-2 items-center sm:border-r sm:pr-3">
              <span className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                {"Balance due"}
              </span>
              <span className="font-semibold tabular-nums text-foreground text-lg tracking-tight">
                {"$890.00"}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Button type="button" tabIndex="0" extracted="1">
                <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
                {"Send reminder"}
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                {"New invoice"}
              </Button>
            </div>
          </div>
        </div>
        <div className="gap-4 grid lg:gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] mt-4">
          <Tabs className="gap-3 min-w-0" data-orientation="horizontal" activationDirection="none">
            <TabsList className="grid grid-cols-3 sm:w-fit w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default" aria-label="Billing detail sections">
              <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_5_">
                {"Invoices"}
              </TabsTrigger>
              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
                {"Subscription"}
              </TabsTrigger>
              <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                {"Payments"}
              </TabsTrigger>
            </TabsList>
            <TabsContent className="flex flex-col gap-3 min-w-0 mt-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_5_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_0_">
              <section className="flex flex-col gap-3">
                <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-px min-w-0">
                    <h2 className="capitalize font-semibold text-base text-foreground tracking-tight">
                      {"Invoices"}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {"History and current collection state."}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <div className="flex gap-2 items-center">
                      <Button type="button" tabIndex="0">
                        <svg className="lucide lucide-download" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DownloadIcon" tabler="IconDownload" hugeicons="Download01Icon" phosphor="DownloadSimpleIcon" remixicon="RiDownload2Line" data-icon="inline-start" aria-hidden="true">
                          <path d="M12 15V3"></path>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <path d="m7 10 5 5 5-5"></path>
                        </svg>
                        {"Download"}
                      </Button>
                      <Button type="button" tabIndex="0">
                        <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" data-icon="inline-start" aria-hidden="true">
                          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                          <path d="m21.854 2.147-10.94 10.939"></path>
                        </svg>
                        {"Remind"}
                      </Button>
                    </div>
                  </div>
                </header>
                <Card className="gap-0 p-0" size="default">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <div className="cn-table-container">
                        <Table className="min-w-[48rem] table-fixed">
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[20%]">
                                {"Invoice"}
                              </TableHead>
                              <TableHead className="w-[24%]">
                                {"Period"}
                              </TableHead>
                              <TableHead className="w-[17%]">
                                {"Date"}
                              </TableHead>
                              <TableHead className="w-[15%]">
                                {"Total"}
                              </TableHead>
                              <TableHead className="text-right w-[14%]">
                                {"Status"}
                              </TableHead>
                              <TableHead className="text-right w-[10%]">
                                <span className="sr-only">
                                  {"Actions"}
                                </span>
                              </TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell className="font-medium whitespace-nowrap">
                                <a className="hover:text-primary hover:underline inline-flex text-foreground transition-colors underline-offset-4" href="#">
                                  {"INV-20418"}
                                </a>
                              </TableCell>
                              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                                {"May usage · seats"}
                              </TableCell>
                              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                                {"May 12, 2026"}
                              </TableCell>
                              <TableCell className="font-semibold tabular-nums tracking-tight whitespace-nowrap">
                                {"$890.00"}
                              </TableCell>
                              <TableCell className="text-right">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                  {"Past due"}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for INV-20418" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" data-icon="icon" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium whitespace-nowrap">
                                <a className="hover:text-primary hover:underline inline-flex text-foreground transition-colors underline-offset-4" href="#">
                                  {"INV-20290"}
                                </a>
                              </TableCell>
                              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                                {"Apr usage · seats"}
                              </TableCell>
                              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                                {"Apr 12, 2026"}
                              </TableCell>
                              <TableCell className="font-semibold tabular-nums tracking-tight whitespace-nowrap">
                                {"$840.00"}
                              </TableCell>
                              <TableCell className="text-right">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Paid"}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for INV-20290" aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" data-icon="icon" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium whitespace-nowrap">
                                <a className="hover:text-primary hover:underline inline-flex text-foreground transition-colors underline-offset-4" href="#">
                                  {"INV-19980"}
                                </a>
                              </TableCell>
                              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                                {"Annual renewal · Scale"}
                              </TableCell>
                              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                                {"Mar 1, 2026"}
                              </TableCell>
                              <TableCell className="font-semibold tabular-nums tracking-tight whitespace-nowrap">
                                {"$18,000.00"}
                              </TableCell>
                              <TableCell className="text-right">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Paid"}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for INV-19980" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" data-icon="icon" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="font-medium whitespace-nowrap">
                                <a className="hover:text-primary hover:underline inline-flex text-foreground transition-colors underline-offset-4" href="#">
                                  {"INV-19844"}
                                </a>
                              </TableCell>
                              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                                {"Feb usage · seats"}
                              </TableCell>
                              <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                                {"Feb 12, 2026"}
                              </TableCell>
                              <TableCell className="font-semibold tabular-nums tracking-tight whitespace-nowrap">
                                {"$760.00"}
                              </TableCell>
                              <TableCell className="text-right">
                                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                  {"Paid"}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for INV-19844" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                                  <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" data-icon="icon" aria-hidden="true">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="19" cy="12" r="1"></circle>
                                    <circle cx="5" cy="12" r="1"></circle>
                                  </svg>
                                </DropdownMenuTrigger>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card size="default">
                  <CardContent>
                    <div className="flex justify-center py-4 w-full">
                      <Empty className="bg-transparent border-0 flex-none gap-6 max-w-md p-0 text-foreground">
                        <EmptyHeader className="gap-5 text-center">
                          <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-empty-media cn-empty-media-default flex items-center justify-center mb-0 shrink-0" data-variant="default">
                            <IconStack aria-hidden="true" style={{"--icon-stack-content-x": "71%", "--icon-stack-content-y": "58%"}}>
                              <svg className="h-full overflow-visible w-full" aria-hidden="true" viewBox="0 0 72 81" fill="none">
                                <ellipse className="blur-[4px]" cx="36" cy="76" rx="30" ry="7" fill="currentColor" fillOpacity="0.055"></ellipse>
                                <g opacity="0.4" transform="translate(0 0)">
                                  <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                                <g opacity="0.6" transform="translate(13.65 6.04)">
                                  <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                                <g opacity="0.8" transform="translate(27.32 12.08)">
                                  <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                              </svg>
                              <div className="-skew-y-26 -translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[var(--icon-stack-content-x)] pointer-events-none scale-x-90 text-muted-foreground top-[var(--icon-stack-content-y)]">
                                <svg className="lucide lucide-inbox" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InboxIcon" tabler="IconInbox" hugeicons="InboxIcon" phosphor="TrayIcon" remixicon="RiInboxLine" aria-hidden="true">
                                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                </svg>
                              </div>
                            </IconStack>
                          </div>
                          <div className="flex flex-col gap-1.5 items-center">
                            <EmptyTitle>
                              {"No Open Invoices"}
                            </EmptyTitle>
                            <EmptyDescription className="max-w-80">
                              {"The current cycle on SUB-4821 is fully collected. The next invoice issues at renewal on Mar 1, 2027."}
                            </EmptyDescription>
                          </div>
                        </EmptyHeader>
                        <EmptyContent className="gap-0 max-w-none">
                          <Button type="button" tabIndex="0">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                            {"New invoice"}
                          </Button>
                        </EmptyContent>
                      </Empty>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </TabsContent>
          </Tabs>
          <Card className="h-[34rem] lg:h-[41rem] lg:sticky lg:top-3 min-h-0" size="default">
            <CardHeader className="shrink-0">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-px min-w-0">
                  <h2 className="capitalize font-semibold text-base text-foreground tracking-tight">
                    {"Account Activity"}
                  </h2>
                  <p className="text-muted-foreground text-sm">
                    {"Recent billing events on ACC-3092."}
                  </p>
                </div>
              </header>
            </CardHeader>
            <CardContent className="flex-1 min-h-0">
              <ScrollArea className="-mr-2 h-full pr-2" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_q_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "377px"}} data-has-overflow-y="" data-overflow-y-end="">
                  <Timeline className="pl-2" data-orientation="vertical">
                    <TimelineItem className="pb-4">
                      <TimelineHeader>
                        <TimelineSeparator className="group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                          <TimelineTitle className="font-semibold">
                            {"Backup method added"}
                          </TimelineTitle>
                          <span className="text-muted-foreground text-xs">
                            {"May 22, 2026"}
                          </span>
                        </div>
                        <TimelineIndicator className="bg-primary/10 border border-primary/30 flex items-center justify-center size-5 text-primary" aria-hidden="true">
                          <svg className="lucide lucide-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5 pb-0.5 space-y-1.5">
                        <p className="leading-5 text-foreground text-sm">
                          {"ACH Mercury Bank is available for fallback collection."}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Method"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"PM-7610"}
                            </span>
                          </Badge>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Added"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"backup"}
                            </span>
                          </Badge>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="pb-4">
                      <TimelineHeader>
                        <TimelineSeparator className="group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                          <TimelineTitle className="font-semibold">
                            {"Finance owner notified"}
                          </TimelineTitle>
                          <span className="text-muted-foreground text-xs">
                            {"May 21, 2026"}
                          </span>
                        </div>
                        <TimelineIndicator className="bg-primary/10 border border-primary/30 flex items-center justify-center size-5 text-primary" aria-hidden="true">
                          <svg className="lucide lucide-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5 pb-0.5 space-y-1.5">
                        <p className="leading-5 text-foreground text-sm">
                          {"Andre Costa received the expiring-card notice."}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Owner"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"Andre"}
                            </span>
                          </Badge>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Email"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"opened"}
                            </span>
                          </Badge>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="pb-4">
                      <TimelineHeader>
                        <TimelineSeparator className="group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                          <TimelineTitle className="font-semibold">
                            {"Review queued"}
                          </TimelineTitle>
                          <span className="text-muted-foreground text-xs">
                            {"May 20, 2026"}
                          </span>
                        </div>
                        <TimelineIndicator className="bg-muted/40 border border-border flex items-center justify-center size-5 text-muted-foreground" aria-hidden="true">
                          <svg className="lucide lucide-circle size-2.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10"></circle>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5 pb-0.5 space-y-1.5">
                        <p className="leading-5 text-foreground text-sm">
                          {"Collections review waits for the retry result."}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Queue"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"billing"}
                            </span>
                          </Badge>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"SLA"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"24h"}
                            </span>
                          </Badge>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="pb-4">
                      <TimelineHeader>
                        <TimelineSeparator className="group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                          <TimelineTitle className="font-semibold">
                            {"Card expiry flagged"}
                          </TimelineTitle>
                          <span className="text-muted-foreground text-xs">
                            {"May 20, 2026"}
                          </span>
                        </div>
                        <TimelineIndicator className="bg-primary/10 border border-primary/30 flex items-center justify-center size-5 text-primary" aria-hidden="true">
                          <svg className="lucide lucide-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5 pb-0.5 space-y-1.5">
                        <p className="leading-5 text-foreground text-sm">
                          {"Visa ending 4242 expires 07/26 and needs a replacement."}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Checked"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"request sent"}
                            </span>
                          </Badge>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Method"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"PM-7741"}
                            </span>
                          </Badge>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="pb-4">
                      <TimelineHeader>
                        <TimelineSeparator className="group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                          <TimelineTitle className="font-semibold">
                            {"Smart retry scheduled"}
                          </TimelineTitle>
                          <span className="text-muted-foreground text-xs">
                            {"May 18, 2026"}
                          </span>
                        </div>
                        <TimelineIndicator className="bg-primary border border-primary flex items-center justify-center ring-2 ring-current/20 size-5 text-primary-foreground" aria-hidden="true">
                          <Spinner className="lucide lucide-loader-circle size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Loader2Icon" tabler="IconLoader" hugeicons="Loading03Icon" phosphor="SpinnerIcon" remixicon="RiLoaderLine" role="status" aria-label="Loading">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                          </Spinner>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5 pb-0.5 space-y-1.5">
                        <p className="leading-5 text-foreground text-sm">
                          {"Retry runs against the saved Visa method."}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                            <span>
                              {"Scheduled"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"May 18"}
                            </span>
                          </Badge>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Invoice"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"INV-20418"}
                            </span>
                          </Badge>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="pb-4">
                      <TimelineHeader>
                        <TimelineSeparator className="group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                          <TimelineTitle className="font-semibold">
                            {"Payment reminder sent"}
                          </TimelineTitle>
                          <span className="text-muted-foreground text-xs">
                            {"May 16, 2026"}
                          </span>
                        </div>
                        <TimelineIndicator className="bg-primary/10 border border-primary/30 flex items-center justify-center size-5 text-primary" aria-hidden="true">
                          <svg className="lucide lucide-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5 pb-0.5 space-y-1.5">
                        <p className="leading-5 text-foreground text-sm">
                          {"Reminder sent to billing@slack.example."}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Email"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"delivered"}
                            </span>
                          </Badge>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Balance"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"$890"}
                            </span>
                          </Badge>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="pb-4">
                      <TimelineHeader>
                        <TimelineSeparator className="group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                          <TimelineTitle className="font-semibold">
                            {"Renewal charge declined"}
                          </TimelineTitle>
                          <span className="text-muted-foreground text-xs">
                            {"May 14, 2026"}
                          </span>
                        </div>
                        <TimelineIndicator className="bg-destructive/10 border border-destructive/40 dark:bg-destructive/20 flex items-center justify-center size-5 text-destructive" aria-hidden="true">
                          <svg className="lucide lucide-triangle-alert size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                            <path d="M12 9v4"></path>
                            <path d="M12 17h.01"></path>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5 pb-0.5 space-y-1.5">
                        <p className="leading-5 text-foreground text-sm">
                          {"Visa ending 4242 failed collection on INV-20418."}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/15 dark:border-destructive/25 dark:text-destructive disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                            <span>
                              {"Issue"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"insufficient funds"}
                            </span>
                          </Badge>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Amount"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"$890"}
                            </span>
                          </Badge>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="pb-4">
                      <TimelineHeader>
                        <TimelineSeparator className="group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                          <TimelineTitle className="font-semibold">
                            {"Invoice issued"}
                          </TimelineTitle>
                          <span className="text-muted-foreground text-xs">
                            {"May 12, 2026"}
                          </span>
                        </div>
                        <TimelineIndicator className="bg-primary/10 border border-primary/30 flex items-center justify-center size-5 text-primary" aria-hidden="true">
                          <svg className="lucide lucide-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5 pb-0.5 space-y-1.5">
                        <p className="leading-5 text-foreground text-sm">
                          {"INV-20418 posted for May usage seats."}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Invoice"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"INV-20418"}
                            </span>
                          </Badge>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Amount"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"$890"}
                            </span>
                          </Badge>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem className="pb-1">
                      <TimelineHeader>
                        <TimelineSeparator className="group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                        <div className="flex flex-wrap gap-x-2 gap-y-1 items-center">
                          <TimelineTitle className="font-semibold">
                            {"Seat true-up posted"}
                          </TimelineTitle>
                          <span className="text-muted-foreground text-xs">
                            {"May 10, 2026"}
                          </span>
                        </div>
                        <TimelineIndicator className="bg-primary/10 border border-primary/30 flex items-center justify-center size-5 text-primary" aria-hidden="true">
                          <svg className="lucide lucide-check size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </TimelineIndicator>
                      </TimelineHeader>
                      <TimelineContent className="mt-1.5 pb-0.5 space-y-1.5">
                        <p className="leading-5 text-foreground text-sm">
                          {"Usage true-up added four seats to the cycle."}
                        </p>
                        <div className="flex flex-wrap gap-1.5 items-center">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Usage"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"+4 seats"}
                            </span>
                          </Badge>
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-shadow">
                            <span>
                              {"Plan"}
                            </span>
                            <span className="font-normal opacity-75">
                              {"Scale"}
                            </span>
                          </Badge>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </div>
                <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_q_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "336.00319148936165px"}}>
                  <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
