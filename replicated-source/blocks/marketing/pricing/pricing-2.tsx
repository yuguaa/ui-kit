import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="@container bg-background text-foreground w-full" aria-labelledby="pricing-2-title">
        <div className="@4xl:py-16 @min-[40rem]:px-6 @min-[64rem]:px-8 flex flex-col gap-10 max-w-6xl mx-auto px-4 py-12 w-full">
          <div className="flex flex-col gap-11 items-center text-center">
            <div className="flex flex-col gap-5 items-center">
              <h2 className="@2xl:text-4xl font-semibold text-3xl text-balance tracking-tight" id="pricing-2-title">
                {"Compare Plans"}
              </h2>
              <p className="@2xl:leading-6 @2xl:text-base leading-5 max-w-160 text-balance text-muted-foreground text-sm">
                <span className="@2xl:block">
                  {"Prices are per month, billed yearly. Plans differ in"}
                </span>
                <span className="@2xl:block">
                  {"how many events you send and how long you keep them."}
                </span>
              </p>
            </div>
            <ToggleGroup className="@3xl:hidden" data-orientation="horizontal" aria-orientation="horizontal" role="group" spacing="2" aria-label="Plan to show" style={{"--gap": "2"}}>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="default" size="default" spacing="2" extracted="1">
                {"Free"}
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="default" size="default" spacing="2">
                {"Pro"}
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="default" size="default" spacing="2">
                {"Team"}
              </ToggleGroupItem>
              <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="default" size="default" spacing="2">
                {"Unlimited"}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <Card className="[&_[data-slot=table-container]]:overflow-x-clip gap-0 overflow-clip py-0 w-full" size="default">
            <div className="cn-table-container">
              <Table className="[&>tbody:first-of-type>tr:first-child]:border-t-0 table-fixed">
                <TableHeader className="bg-card sticky top-0 z-10">
                  <TableRow className="border-b-0 hover:bg-transparent">
                    <TableHead className="@3xl:w-auto leading-[inherit] normal-case pe-3 ps-(--card-spacing) text-[length:inherit] text-foreground tracking-normal w-[55%] whitespace-normal" scope="col">
                      <span className="sr-only">
                        {"Feature"}
                      </span>
                    </TableHead>
                    <TableHead className="@3xl:box-content @3xl:w-[min(15cqw,11rem)] @4xl:pe-3 @4xl:ps-3 @max-3xl:hidden font-semibold h-auto normal-case pb-0 pe-2 ps-2 pt-(--card-spacing) shadow-[inset_1px_0_0_var(--border)] text-base text-foreground tracking-normal whitespace-normal" scope="col">
                      <span className="@6xl:flex-row @6xl:gap-2 @6xl:items-baseline @6xl:justify-between @max-3xl:flex-row @max-3xl:flex-wrap @max-3xl:gap-x-2 @max-3xl:items-baseline @max-3xl:justify-between flex flex-col gap-0.5">
                        <span>
                          {"Free"}
                        </span>
                        <span className="font-medium tabular-nums text-sm">
                          {"$0"}
                        </span>
                      </span>
                    </TableHead>
                    <TableHead className="@3xl:box-content @3xl:w-[min(15cqw,11rem)] @4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) font-semibold h-auto normal-case pb-0 pe-2 ps-2 pt-(--card-spacing) shadow-[inset_1px_0_0_var(--border)] text-base text-foreground tracking-normal whitespace-normal" scope="col">
                      <span className="@6xl:flex-row @6xl:gap-2 @6xl:items-baseline @6xl:justify-between @max-3xl:flex-row @max-3xl:flex-wrap @max-3xl:gap-x-2 @max-3xl:items-baseline @max-3xl:justify-between flex flex-col gap-0.5">
                        <span>
                          {"Pro"}
                        </span>
                        <span className="font-medium tabular-nums text-sm">
                          {"$28"}
                        </span>
                      </span>
                    </TableHead>
                    <TableHead className="@3xl:box-content @3xl:w-[min(15cqw,11rem)] @4xl:pe-3 @4xl:ps-3 @max-3xl:hidden font-semibold h-auto normal-case pb-0 pe-2 ps-2 pt-(--card-spacing) shadow-[inset_1px_0_0_var(--border)] text-base text-foreground tracking-normal whitespace-normal" scope="col">
                      <span className="@6xl:flex-row @6xl:gap-2 @6xl:items-baseline @6xl:justify-between @max-3xl:flex-row @max-3xl:flex-wrap @max-3xl:gap-x-2 @max-3xl:items-baseline @max-3xl:justify-between flex flex-col gap-0.5">
                        <span>
                          {"Team"}
                        </span>
                        <span className="font-medium tabular-nums text-sm">
                          {"$40+"}
                        </span>
                      </span>
                    </TableHead>
                    <TableHead className="@3xl:box-content @3xl:w-[min(15cqw,11rem)] @4xl:ps-3 @max-3xl:hidden font-semibold h-auto normal-case pb-0 pe-(--card-spacing) ps-2 pt-(--card-spacing) shadow-[inset_1px_0_0_var(--border)] text-base text-foreground tracking-normal whitespace-normal" scope="col">
                      <span className="@6xl:flex-row @6xl:gap-2 @6xl:items-baseline @6xl:justify-between @max-3xl:flex-row @max-3xl:flex-wrap @max-3xl:gap-x-2 @max-3xl:items-baseline @max-3xl:justify-between flex flex-col gap-0.5">
                        <span>
                          {"Unlimited"}
                        </span>
                        <span className="font-medium tabular-nums text-sm">
                          {"$750+"}
                        </span>
                      </span>
                    </TableHead>
                  </TableRow>
                  <TableRow className="border-b-0 hover:bg-transparent">
                    <TableHead className="h-auto leading-[inherit] normal-case pe-3 ps-(--card-spacing) shadow-[inset_0_-1px_0_var(--border)] text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <span className="sr-only">
                        {"Get started"}
                      </span>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pb-(--card-spacing) pe-2 ps-2 pt-3 shadow-[inset_1px_0_0_var(--border),inset_0_-1px_0_var(--border)] whitespace-normal">
                      <Button className="w-full" href="#" role="button" tabIndex="0">
                        {"Start Free"}
                      </Button>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pb-(--card-spacing) pe-2 ps-2 pt-3 shadow-[inset_1px_0_0_var(--border),inset_0_-1px_0_var(--border)] whitespace-normal">
                      <Button className="w-full" href="#" role="button" tabIndex="0">
                        {"Get Pro"}
                      </Button>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pb-(--card-spacing) pe-2 ps-2 pt-3 shadow-[inset_1px_0_0_var(--border),inset_0_-1px_0_var(--border)] whitespace-normal">
                      <Button className="w-full" href="#" role="button" tabIndex="0">
                        {"Get Team"}
                      </Button>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pb-(--card-spacing) pe-(--card-spacing) ps-2 pt-3 shadow-[inset_1px_0_0_var(--border),inset_0_-1px_0_var(--border)] whitespace-normal">
                      <Button className="w-full" href="#" aria-label="Contact us about Unlimited" role="button" tabIndex="0">
                        {"Contact Us"}
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="bg-muted/50 border-y hover:bg-muted/50">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-3 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="rowgroup">
                      <span className="flex gap-2.5 items-center whitespace-nowrap">
                        <IconTile variant="elevated" size="default">
                          <svg className="lucide lucide-inbox" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InboxIcon" tabler="IconInbox" hugeicons="InboxIcon" phosphor="TrayIcon" remixicon="RiInboxLine" aria-hidden="true">
                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                          </svg>
                        </IconTile>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-semibold text-base text-foreground tracking-tight">
                            {"Collection"}
                          </span>
                          <span className="font-normal text-muted-foreground text-xs tracking-normal">
                            {"Events in, from any source."}
                          </span>
                        </span>
                      </span>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 whitespace-normal"></TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_5_" aria-haspopup="dialog" aria-expanded="false">
                        {"Monthly events"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"50,000"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex flex-col">
                        <span className="tabular-nums">
                          {"2 million"}
                        </span>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"$0.30 per 10,000"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex flex-col">
                        <span className="tabular-nums">
                          {"10 million"}
                        </span>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"$0.22 per 10,000"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Custom volume"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_7_" aria-haspopup="dialog" aria-expanded="false">
                        {"Past the allowance"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Events pause"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Billed next month"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Billed next month"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Set by contract"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_9_" aria-haspopup="dialog" aria-expanded="false">
                        {"Connected sources"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"2"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"10"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"50"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Unlimited"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_b_" aria-haspopup="dialog" aria-expanded="false">
                        {"Schema validation"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Off"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Warn"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Warn or block"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Warn or block"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b-0 hover:bg-transparent">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      {"Volume controls"}
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                  </TableRow>
                  <TableRow className="border-b-0">
                    <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-[calc(var(--card-spacing)+--spacing(4))] py-2.5 text-[length:inherit] text-muted-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_d_" aria-haspopup="dialog" aria-expanded="false">
                        {"Per source caps"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                        <span className="sr-only">
                          {"Not included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="sr-only">
                          {"Included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="sr-only">
                          {"Included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="sr-only">
                          {"Included"}
                        </span>
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-[calc(var(--card-spacing)+--spacing(4))] py-2.5 text-[length:inherit] text-muted-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_f_" aria-haspopup="dialog" aria-expanded="false">
                        {"Sampling rules"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                        <span className="sr-only">
                          {"Not included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                        <span className="sr-only">
                          {"Not included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="sr-only">
                          {"Included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="sr-only">
                          {"Included"}
                        </span>
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_h_" aria-haspopup="dialog" aria-expanded="false">
                        {"Historic backfill"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"None"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"12 months"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"36 months"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Full history"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_j_" aria-haspopup="dialog" aria-expanded="false">
                        {"Data freshness"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"1 hour"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"5 minutes"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"1 minute"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Live"}
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow className="bg-muted/50 border-y hover:bg-muted/50">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-3 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="rowgroup">
                      <span className="flex gap-2.5 items-center whitespace-nowrap">
                        <IconTile variant="elevated" size="default">
                          <svg className="lucide lucide-archive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                            <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                            <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                            <path d="M10 12h4"></path>
                          </svg>
                        </IconTile>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-semibold text-base text-foreground tracking-tight">
                            {"Retention"}
                          </span>
                          <span className="font-normal text-muted-foreground text-xs tracking-normal">
                            {"How far back you can look."}
                          </span>
                        </span>
                      </span>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 whitespace-normal"></TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_l_" aria-haspopup="dialog" aria-expanded="false">
                        {"Event retention"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"30 days"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"12 months"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"36 months"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Unlimited"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b-0 hover:bg-transparent">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      {"Retention by record"}
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                  </TableRow>
                  <TableRow className="border-b-0">
                    <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-[calc(var(--card-spacing)+--spacing(4))] py-2.5 text-[length:inherit] text-muted-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_n_" aria-haspopup="dialog" aria-expanded="false">
                        {"Daily summaries"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"90 days"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"3 years"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"7 years"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Unlimited"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b-0">
                    <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-[calc(var(--card-spacing)+--spacing(4))] py-2.5 text-[length:inherit] text-muted-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_p_" aria-haspopup="dialog" aria-expanded="false">
                        {"User profiles"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"60 days"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"18 months"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"5 years"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Unlimited"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-[calc(var(--card-spacing)+--spacing(4))] py-2.5 text-[length:inherit] text-muted-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_r_" aria-haspopup="dialog" aria-expanded="false">
                        {"Cold archive"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"60 days"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"24 months"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"7 years"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Unlimited"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_t_" aria-haspopup="dialog" aria-expanded="false">
                        {"Archive restore"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"25,000"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex flex-col">
                        <span className="tabular-nums">
                          {"2 million"}
                        </span>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"$5 per million"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex flex-col">
                        <span className="tabular-nums">
                          {"20 million"}
                        </span>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"$3 per million"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Custom volume"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_v_" aria-haspopup="dialog" aria-expanded="false">
                        {"Retention holds"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"None"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"1 hold"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"25 holds"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Unlimited"}
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow className="bg-muted/50 border-y hover:bg-muted/50">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-3 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="rowgroup">
                      <span className="flex gap-2.5 items-center whitespace-nowrap">
                        <IconTile variant="elevated" size="default">
                          <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                            <path d="M18 17V9"></path>
                            <path d="M13 17V5"></path>
                            <path d="M8 17v-3"></path>
                          </svg>
                        </IconTile>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-semibold text-base text-foreground tracking-tight">
                            {"Reporting"}
                          </span>
                          <span className="font-normal text-muted-foreground text-xs tracking-normal">
                            {"Dashboards, alerts and answers."}
                          </span>
                        </span>
                      </span>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 whitespace-normal"></TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_11_" aria-haspopup="dialog" aria-expanded="false">
                        {"Saved dashboards"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"3"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"50"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"500"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Unlimited"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_13_" aria-haspopup="dialog" aria-expanded="false">
                        {"Scheduled reports"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"1 a week"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"25 a week"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"250 a week"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Unlimited"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_15_" aria-haspopup="dialog" aria-expanded="false">
                        {"Funnel steps"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"3"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"10"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"25"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Unlimited"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_17_" aria-haspopup="dialog" aria-expanded="false">
                        {"Alert checks"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Daily"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Hourly"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Every 15 minutes"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Every minute"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_19_" aria-haspopup="dialog" aria-expanded="false">
                        {"Embedded charts"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                        <span className="sr-only">
                          {"Not included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                        <span className="sr-only">
                          {"Not included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="sr-only">
                          {"Included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="sr-only">
                          {"Included"}
                        </span>
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <TableBody>
                  <TableRow className="bg-muted/50 border-y hover:bg-muted/50">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-3 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="rowgroup">
                      <span className="flex gap-2.5 items-center whitespace-nowrap">
                        <IconTile variant="elevated" size="default">
                          <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </IconTile>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-semibold text-base text-foreground tracking-tight">
                            {"Team and Access"}
                          </span>
                          <span className="font-normal text-muted-foreground text-xs tracking-normal">
                            {"Seats, access and billing."}
                          </span>
                        </span>
                      </span>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 whitespace-normal"></TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 whitespace-normal"></TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1b_" aria-haspopup="dialog" aria-expanded="false">
                        {"Team seats"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"1"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"1"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex flex-col">
                        <span className="tabular-nums">
                          {"2 to 20"}
                        </span>
                        <span className="tabular-nums text-muted-foreground text-xs">
                          {"$20 per seat"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Unlimited"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1d_" aria-haspopup="dialog" aria-expanded="false">
                        {"Single sign-on"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                        <span className="sr-only">
                          {"Not included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                        <span className="sr-only">
                          {"Not included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="sr-only">
                          {"Included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="sr-only">
                          {"Included"}
                        </span>
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1f_" aria-haspopup="dialog" aria-expanded="false">
                        {"Data residency"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"US"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"US or EU"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"US, EU or AU"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Your choice"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1h_" aria-haspopup="dialog" aria-expanded="false">
                        {"Support reply time"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Community"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"2 days"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"1 day"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"4 hours"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1j_" aria-haspopup="dialog" aria-expanded="false">
                        {"Uptime target"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                        <span className="sr-only">
                          {"Not included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"99.5%"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"99.9%"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"99.99%"}
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b-0 hover:bg-transparent">
                    <TableHead className="leading-[inherit] normal-case pe-3 ps-(--card-spacing) py-2.5 text-[length:inherit] text-foreground tracking-normal whitespace-normal" scope="row">
                      {"Billing"}
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 shadow-[inset_1px_0_0_var(--border)] whitespace-normal"></TableCell>
                  </TableRow>
                  <TableRow className="border-b-0">
                    <TableHead className="font-normal leading-[inherit] normal-case pe-3 ps-[calc(var(--card-spacing)+--spacing(4))] py-2.5 text-[length:inherit] text-muted-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1l_" aria-haspopup="dialog" aria-expanded="false">
                        {"Invoice billing"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                        <span className="sr-only">
                          {"Not included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                        <span className="sr-only">
                          {"Not included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="sr-only">
                          {"Included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-check size-4 text-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span className="sr-only">
                          {"Included"}
                        </span>
                      </span>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-b-0">
                    <TableHead className="font-normal leading-[inherit] normal-case pb-(--card-spacing) pe-3 ps-[calc(var(--card-spacing)+--spacing(4))] py-2.5 text-[length:inherit] text-muted-foreground tracking-normal whitespace-normal" scope="row">
                      <Popover>
                      <PopoverTrigger className="after:-inset-y-2.5 after:absolute after:inset-x-0 cursor-pointer decoration-dotted decoration-muted-foreground/50 focus-visible:ring-3 focus-visible:ring-ring/50 hover:decoration-foreground outline-none relative scroll-mt-40 text-left transition-colors underline underline-offset-4" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1n_" aria-haspopup="dialog" aria-expanded="false">
                        {"Price lock"}
                      </PopoverTrigger>
                      </Popover>
                    </TableHead>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pb-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="flex">
                        <svg className="lucide lucide-minus size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                          <path d="M5 12h14"></path>
                        </svg>
                        <span className="sr-only">
                          {"Not included"}
                        </span>
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:pe-(--card-spacing) pb-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"12 months"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:pe-3 @4xl:ps-3 @max-3xl:hidden pb-(--card-spacing) pe-2 ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"24 months"}
                      </span>
                    </TableCell>
                    <TableCell className="@4xl:ps-3 @max-3xl:hidden pb-(--card-spacing) pe-(--card-spacing) ps-2 py-2.5 shadow-[inset_1px_0_0_var(--border)] whitespace-normal">
                      <span className="tabular-nums">
                        {"Contract term"}
                      </span>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
