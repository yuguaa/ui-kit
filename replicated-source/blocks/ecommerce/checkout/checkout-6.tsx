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
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <main className="min-h-svh w-full">
      <section className="bg-muted/30 flex justify-center lg:p-8 min-h-svh p-4 sm:p-6 w-full">
        <div className="flex flex-col gap-6 max-w-5xl w-full">
          <header className="flex flex-col gap-3 min-w-0">
            <nav className="flex flex-wrap gap-1.5 items-center text-muted-foreground text-sm" aria-label="Breadcrumb">
              <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#">
                {"Store"}
              </a>
              <svg className="lucide lucide-chevron-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <a className="hover:text-foreground hover:underline transition-colors underline-offset-4" href="#">
                {"Bag"}
              </a>
              <svg className="lucide lucide-chevron-right size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
              <span className="text-foreground">
                {"Checkout"}
              </span>
            </nav>
            <div className="max-w-xl">
              <h1 className="font-semibold sm:text-2xl text-xl tracking-tight">
                {"Checkout"}
              </h1>
              <p className="leading-5 mt-1 text-muted-foreground text-sm">
                {"Confirm delivery and payment for your order."}
              </p>
            </div>
          </header>
          <div className="gap-4 grid items-start lg:gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
            <Card className="lg:sticky lg:top-6" size="default">
              <CardHeader>
                <CardTitle>
                  {"Morrow Home Checkout"}
                </CardTitle>
                <CardDescription>
                  {"Reserved goods, ready to ship."}
                </CardDescription>
                <CardAction>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                    {"Ready To Ship"}
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-muted-foreground text-sm">
                    {"Total Due"}
                  </span>
                  <span className="font-semibold tabular-nums text-4xl tracking-tight">
                    {"$302.08"}
                  </span>
                </div>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <ItemGroup className="gap-4" role="list">
                  <Item className="gap-3 items-start px-0 py-0" variant="default" size="default" role="listitem">
                    <ItemMedia variant="image">
                      <Item className="bg-muted flex-nowrap overflow-hidden p-0 relative size-14 w-auto" variant="default" size="default">
                        <a className="block group/product relative size-full" href="#linen-weekender" aria-label="View Linen Weekender Tote">
                          <img className="absolute duration-300 group-hover/product:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Neutral canvas weekender tote on a studio surface" src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=240&h=240&q=80" />
                        </a>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="block line-clamp-none max-w-full min-w-0 overflow-visible">
                        <a className="block hover:text-primary hover:underline text-foreground transition-colors truncate underline-offset-2" href="#linen-weekender">
                          {"Linen Weekender Tote"}
                        </a>
                      </ItemTitle>
                      <p className="min-w-0 text-muted-foreground text-xs truncate">
                        {"Oak handles, interior laptop sleeve"}
                      </p>
                      <div className="flex gap-1.5 items-center min-w-0 mt-0.5 text-muted-foreground text-xs">
                        <a className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#linen-weekender-category">
                          {"Travel Goods"}
                        </a>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="shrink-0">
                          {"Qty 1"}
                        </span>
                      </div>
                    </ItemContent>
                    <ItemActions className="pt-0.5 shrink-0">
                      <span className="font-medium tabular-nums text-sm">
                        {"$128.00"}
                      </span>
                    </ItemActions>
                  </Item>
                  <Item className="gap-3 items-start px-0 py-0" variant="default" size="default" role="listitem">
                    <ItemMedia variant="image">
                      <Item className="bg-muted flex-nowrap overflow-hidden p-0 relative size-14 w-auto" variant="default" size="default">
                        <a className="block group/product relative size-full" href="#ceramic-table-set" aria-label="View Ceramic Table Set">
                          <img className="absolute duration-300 group-hover/product:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Stacked neutral ceramic bowls and plates" src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=240&h=240&q=80" />
                        </a>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="block line-clamp-none max-w-full min-w-0 overflow-visible">
                        <a className="block hover:text-primary hover:underline text-foreground transition-colors truncate underline-offset-2" href="#ceramic-table-set">
                          {"Ceramic Table Set"}
                        </a>
                      </ItemTitle>
                      <p className="min-w-0 text-muted-foreground text-xs truncate">
                        {"Four glazed bowls, two serving plates"}
                      </p>
                      <div className="flex gap-1.5 items-center min-w-0 mt-0.5 text-muted-foreground text-xs">
                        <a className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#ceramic-table-set-category">
                          {"Dining"}
                        </a>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="shrink-0">
                          {"Qty 1"}
                        </span>
                      </div>
                    </ItemContent>
                    <ItemActions className="pt-0.5 shrink-0">
                      <span className="font-medium tabular-nums text-sm">
                        {"$76.00"}
                      </span>
                    </ItemActions>
                  </Item>
                  <Item className="gap-3 items-start px-0 py-0" variant="default" size="default" role="listitem">
                    <ItemMedia variant="image">
                      <Item className="bg-muted flex-nowrap overflow-hidden p-0 relative size-14 w-auto" variant="default" size="default">
                        <a className="block group/product relative size-full" href="#hinoki-care-duo" aria-label="View Hinoki Care Duo">
                          <img className="absolute duration-300 group-hover/product:scale-105 h-full inset-0 object-cover transition-transform w-full" alt="Amber bath care bottles on a bathroom counter" src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=240&h=240&q=80" />
                        </a>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="block line-clamp-none max-w-full min-w-0 overflow-visible">
                        <a className="block hover:text-primary hover:underline text-foreground transition-colors truncate underline-offset-2" href="#hinoki-care-duo">
                          {"Hinoki Care Duo"}
                        </a>
                      </ItemTitle>
                      <p className="min-w-0 text-muted-foreground text-xs truncate">
                        {"Body wash and refill bottle"}
                      </p>
                      <div className="flex gap-1.5 items-center min-w-0 mt-0.5 text-muted-foreground text-xs">
                        <a className="hover:text-primary hover:underline transition-colors underline-offset-2" href="#hinoki-care-duo-category">
                          {"Bath"}
                        </a>
                        <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                        <span className="shrink-0">
                          {"Qty 2"}
                        </span>
                      </div>
                    </ItemContent>
                    <ItemActions className="pt-0.5 shrink-0">
                      <span className="font-medium tabular-nums text-sm">
                        {"$68.00"}
                      </span>
                    </ItemActions>
                  </Item>
                </ItemGroup>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <div className="flex flex-col gap-2.5">
                  <div className="flex gap-4 items-center justify-between text-sm">
                    <span className="gap-1.5 inline-flex items-center text-muted-foreground">
                      {"Subtotal"}
                    </span>
                    <span className="shrink-0 tabular-nums">
                      {"$272.00"}
                    </span>
                  </div>
                  <div className="flex gap-4 items-center justify-between text-sm">
                    <span className="gap-1.5 inline-flex items-center text-muted-foreground">
                      {"Delivery"}
                      <Tooltip>
                      <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-4 text-muted-foreground/70 transition-colors" type="button" id="base-ui-_r_1_" baseUiTooltipTrigger="" aria-label="Delivery details" extracted="1">
                        <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </span>
                    <span className="shrink-0 tabular-nums">
                      {"$9.00"}
                    </span>
                  </div>
                  <div className="flex gap-4 items-center justify-between text-sm">
                    <span className="gap-1.5 inline-flex items-center text-muted-foreground">
                      {"Estimated Tax"}
                    </span>
                    <span className="shrink-0 tabular-nums">
                      {"$21.08"}
                    </span>
                  </div>
                  <div className="border-border/60 border-dashed border-t flex gap-4 items-baseline justify-between mt-1 pt-3">
                    <span className="font-semibold text-sm">
                      {"Total"}
                    </span>
                    <span className="font-semibold tabular-nums text-sm">
                      {"$302.08"}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="text-muted-foreground text-xs">
                <span className="gap-1.5 inline-flex items-center">
                  <span className="bg-success rounded-full size-1.5" aria-hidden="true"></span>
                  {"Encrypted checkout. Receipt sent after payment."}
                </span>
              </CardFooter>
            </Card>
            <Card size="default">
              <CardHeader>
                <CardTitle>
                  {"Payment Details"}
                </CardTitle>
                <CardDescription>
                  {"Express wallet or card."}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <Button className="w-full" type="button" tabIndex="0">
                  <svg className="fill-current h-5 w-auto" aria-hidden="true" viewBox="0 0 512 210.2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M93.6 27.1C87.6 34.2 78 39.8 68.4 39c-1.2-9.6 3.5-19.8 9-26.1 6-7.3 16.5-12.5 25-12.9 1 10-2.9 19.8-8.8 27.1Zm8.7 13.8c-13.9-.8-25.8 7.9-32.4 7.9-6.7 0-16.8-7.5-27.8-7.3-14.3.2-27.6 8.3-34.9 21.2-15 25.8-3.9 64 10.6 85 7.1 10.4 15.6 21.8 26.8 21.4 10.6-.4 14.8-6.9 27.6-6.9 12.9 0 16.6 6.9 27.8 6.7 11.6-.2 18.9-10.4 26-20.8 8.1-11.8 11.4-23.3 11.6-23.9-.2-.2-22.4-8.7-22.6-34.3-.2-21.4 17.5-31.6 18.3-32.2-10-14.8-25.6-16.4-31-16.8ZM182.6 11.9v155.9h24.2v-53.3h33.5c30.6 0 52.1-21 52.1-51.4s-21.1-51.2-51.3-51.2h-58.5Zm24.2 20.4h27.9c21 0 33 11.2 33 30.9s-12 31-33.1 31h-27.8V32.3ZM336.6 169c15.2 0 29.3-7.7 35.7-19.9h.5v18.7h22.4V90.2c0-22.5-18-37-45.7-37-25.7 0-44.7 14.7-45.4 34.9h21.8c1.8-9.6 10.7-15.9 22.9-15.9 14.8 0 23.1 6.9 23.1 19.6v8.6l-30.2 1.8c-28.1 1.7-43.3 13.2-43.3 33.2 0 20.2 15.7 33.6 38.2 33.6Zm6.5-18.5c-12.9 0-21.1-6.2-21.1-15.7 0-9.8 7.9-15.5 23-16.4l26.9-1.7v8.8c0 14.6-12.4 25-28.8 25ZM425.1 210.2c23.6 0 34.7-9 44.4-36.3L512 54.7h-24.6l-28.5 92.1h-.5l-28.5-92.1h-25.3l41 113.5-2.2 6.9c-3.7 11.7-9.7 16.2-20.4 16.2-1.9 0-5.6-.2-7.1-.4v18.7c1.4.4 7.4.6 9.2.6Z"></path>
                  </svg>
                  <span className="sr-only">
                    {"Pay with Apple Pay"}
                  </span>
                </Button>
                <div className="flex gap-3 items-center">
                  <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                  <span className="font-medium text-[0.6875rem] text-muted-foreground tracking-[0.08em] uppercase">
                    {"Or card"}
                  </span>
                  <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <form className="flex flex-col gap-6">
                  <FieldSet className="gap-4">
                    <FieldLegend variant="label">
                      {"Shipping"}
                    </FieldLegend>
                    <FieldGroup className="gap-4">
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-6-email">
                          {"Email"}
                        </FieldLabel>
                        <Input id="checkout-6-email" autoComplete="email" type="email" value="avery.miles@example.com"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-6-name">
                          {"Recipient"}
                        </FieldLabel>
                        <Input id="checkout-6-name" autoComplete="name" value="Avery Miles"></Input>
                      </Field>
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-6-address">
                          {"Address"}
                        </FieldLabel>
                        <Input id="checkout-6-address" autoComplete="shipping street-address" value="18 Stillman Street"></Input>
                      </Field>
                      <FieldGroup className="gap-4 grid sm:grid-cols-[1fr_7rem]">
                        <Field className="gap-2" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-6-delivery">
                            {"Delivery Method"}
                          </FieldLabel>
                          <Select>
                          <SelectTrigger className="w-full" type="button" tabIndex="0" id="checkout-6-delivery" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                            <SelectValue>
                              {"Courier Delivery"}
                            </SelectValue>
                            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                              <path d="m6 9 6 6 6-6"></path>
                              {"▼"}
                            </svg>
                          </SelectTrigger>
                          </Select>
                          <input id="base-ui-_r_5_-hidden-input" tabIndex="-1" aria-hidden="true" value="Courier Delivery" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                        <Field className="gap-2" role="group" data-orientation="vertical">
                          <div className="flex gap-1.5 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-6-postal">
                              {"Postal"}
                            </FieldLabel>
                            <Tooltip>
                            <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-4 text-muted-foreground/70 transition-colors" type="button" id="base-ui-_r_9_" baseUiTooltipTrigger="" aria-label="About postal codes">
                              <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                          <Input id="checkout-6-postal" inputmode="numeric" autoComplete="shipping postal-code" value="94107"></Input>
                        </Field>
                      </FieldGroup>
                    </FieldGroup>
                  </FieldSet>
                  <FieldSet className="gap-4">
                    <div className="flex gap-3 items-center justify-between">
                      <FieldLegend variant="label">
                        {"Card"}
                      </FieldLegend>
                      <span className="gap-1 hidden items-center sm:inline-flex" aria-label="Accepted card networks" role="group">
                        <Item className="bg-background border border-border/60 h-5 inline-flex p-0 w-8" variant="default" size="default" role="img" aria-label="Visa">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="max-h-3 max-w-[1.4rem] object-contain" aria-hidden="true" viewBox="0 0 1000 324.68" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#1434CB" d="M651.19.5c-70.93 0-134.32 36.77-134.32 104.69 0 77.9 112.42 83.28 112.42 122.42 0 16.48-18.88 31.23-51.14 31.23-45.77 0-79.98-20.61-79.98-20.61l-14.64 68.55s39.41 17.41 91.73 17.41c77.55 0 138.58-38.57 138.58-107.66 0-82.32-112.89-87.54-112.89-123.86 0-12.91 15.5-27.05 47.66-27.05 36.29 0 65.89 14.99 65.89 14.99l14.33-66.2S696.61.5 651.18.5h.01ZM2.22 5.5.5 15.49s29.84 5.46 56.72 16.36c34.61 12.49 37.07 19.77 42.9 42.35l63.51 244.83h85.14L379.93 5.5h-84.94l-84.28 213.17-34.39-180.7C173.17 17.29 157.19 5.49 137.64 5.49H2.23l-.01.01Zm411.87 0-66.63 313.53h81L494.85 5.5h-80.76Zm451.76 0c-19.53 0-29.88 10.46-37.47 28.73l-118.67 284.8h84.94l16.43-47.47h103.48l9.99 47.47h74.95L934.12 5.5h-68.27Zm11.05 84.71 25.18 117.65h-67.45L876.91 90.21h-.01Z"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <Item className="bg-background border border-border/60 h-5 inline-flex p-0 w-8" variant="default" size="default" role="img" aria-label="Mastercard">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="max-h-3 max-w-[1.4rem] object-contain" aria-hidden="true" viewBox="0 0 1000 618" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#EB001B" d="M308 0a309 309 0 1 0 2 0z"></path>
                              <path fill="#F79E1B" d="M690 0a309 309 0 1 0 2 0z"></path>
                              <path fill="#FF5F00" d="M500 66a309 309 0 0 0 0 486 309 309 0 0 0 0-486"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <Item className="bg-background border border-border/60 h-5 inline-flex p-0 w-8" variant="default" size="default" role="img" aria-label="American Express">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="max-h-3 max-w-[1.4rem] object-contain" aria-hidden="true" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                              <rect width="96" height="60" rx="6" fill="#016FD0"></rect>
                              <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                              <text x="48" y="26" fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                {"AMERICAN"}
                              </text>
                              <text x="48" y="42" fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                {"EXPRESS"}
                              </text>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <Item className="bg-background border border-border/60 h-5 inline-flex p-0 w-8" variant="default" size="default" role="img" aria-label="Discover">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="max-h-3 max-w-[1.4rem] object-contain" aria-hidden="true" viewBox="0 0 132 24" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="64" cy="12" r="11" fill="#F58220"></circle>
                              <text x="66" y="16.4" fill="#231F20" fontFamily="Arial, Helvetica, sans-serif" fontSize="17" fontWeight="800" letter-spacing=".4" textAnchor="middle">
                                {"DISCOVER"}
                              </text>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <Item className="bg-background border border-border/60 h-5 inline-flex p-0 w-8" variant="default" size="default" role="img" aria-label="JCB">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="max-h-3 max-w-[1.4rem] object-contain" aria-hidden="true" viewBox="0 0 78 60" xmlns="http://www.w3.org/2000/svg">
                              <rect width="78" height="60" rx="7" fill="#fff"></rect>
                              <path d="M8 7h20v46H8a6 6 0 0 1-6-6V13a6 6 0 0 1 6-6Z" fill="#0B4EA2"></path>
                              <path d="M29 7h20v46H29V7Z" fill="#189D4D"></path>
                              <path d="M50 7h20a6 6 0 0 1 6 6v34a6 6 0 0 1-6 6H50V7Z" fill="#D71920"></path>
                              <text x="39" y="38" fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="25" fontWeight="900" letter-spacing="1.8" textAnchor="middle">
                                {"JCB"}
                              </text>
                            </svg>
                          </ItemMedia>
                        </Item>
                      </span>
                      <span className="gap-1 inline-flex items-center sm:hidden" aria-label="Accepted card networks" role="group">
                        <Item className="bg-background border border-border/60 h-5 inline-flex p-0 w-8" variant="default" size="default" role="img" aria-label="Visa">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="max-h-3 max-w-[1.4rem] object-contain" aria-hidden="true" viewBox="0 0 1000 324.68" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#1434CB" d="M651.19.5c-70.93 0-134.32 36.77-134.32 104.69 0 77.9 112.42 83.28 112.42 122.42 0 16.48-18.88 31.23-51.14 31.23-45.77 0-79.98-20.61-79.98-20.61l-14.64 68.55s39.41 17.41 91.73 17.41c77.55 0 138.58-38.57 138.58-107.66 0-82.32-112.89-87.54-112.89-123.86 0-12.91 15.5-27.05 47.66-27.05 36.29 0 65.89 14.99 65.89 14.99l14.33-66.2S696.61.5 651.18.5h.01ZM2.22 5.5.5 15.49s29.84 5.46 56.72 16.36c34.61 12.49 37.07 19.77 42.9 42.35l63.51 244.83h85.14L379.93 5.5h-84.94l-84.28 213.17-34.39-180.7C173.17 17.29 157.19 5.49 137.64 5.49H2.23l-.01.01Zm411.87 0-66.63 313.53h81L494.85 5.5h-80.76Zm451.76 0c-19.53 0-29.88 10.46-37.47 28.73l-118.67 284.8h84.94l16.43-47.47h103.48l9.99 47.47h74.95L934.12 5.5h-68.27Zm11.05 84.71 25.18 117.65h-67.45L876.91 90.21h-.01Z"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <Item className="bg-background border border-border/60 h-5 inline-flex p-0 w-8" variant="default" size="default" role="img" aria-label="Mastercard">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="max-h-3 max-w-[1.4rem] object-contain" aria-hidden="true" viewBox="0 0 1000 618" xmlns="http://www.w3.org/2000/svg">
                              <path fill="#EB001B" d="M308 0a309 309 0 1 0 2 0z"></path>
                              <path fill="#F79E1B" d="M690 0a309 309 0 1 0 2 0z"></path>
                              <path fill="#FF5F00" d="M500 66a309 309 0 0 0 0 486 309 309 0 0 0 0-486"></path>
                            </svg>
                          </ItemMedia>
                        </Item>
                        <Item className="bg-background border border-border/60 h-5 inline-flex p-0 w-8" variant="default" size="default" role="img" aria-label="American Express">
                          <ItemMedia className="size-auto" variant="icon">
                            <svg className="max-h-3 max-w-[1.4rem] object-contain" aria-hidden="true" viewBox="0 0 96 60" xmlns="http://www.w3.org/2000/svg">
                              <rect width="96" height="60" rx="6" fill="#016FD0"></rect>
                              <path fill="#fff" d="M0 35h96v8H0z" opacity=".18"></path>
                              <text x="48" y="26" fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="13" fontWeight="800" letter-spacing=".7" textAnchor="middle">
                                {"AMERICAN"}
                              </text>
                              <text x="48" y="42" fill="#fff" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="900" letter-spacing=".35" textAnchor="middle">
                                {"EXPRESS"}
                              </text>
                            </svg>
                          </ItemMedia>
                        </Item>
                      </span>
                    </div>
                    <FieldGroup className="gap-4">
                      <Field className="gap-2" role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-6-card">
                          {"Card Number"}
                        </FieldLabel>
                        <Input id="checkout-6-card" inputmode="numeric" autoComplete="cc-number" value="4242 4242 4242 4242"></Input>
                      </Field>
                      <FieldGroup className="gap-4 grid sm:grid-cols-2">
                        <Field className="gap-2" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-6-expiry">
                            {"Expiry"}
                          </FieldLabel>
                          <Input id="checkout-6-expiry" placeholder="MM / YY" inputmode="numeric" autoComplete="cc-exp" value="08 / 29"></Input>
                        </Field>
                        <Field className="gap-2" role="group" data-orientation="vertical">
                          <div className="flex gap-1.5 items-center">
                            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-6-cvc">
                              {"CVC"}
                            </FieldLabel>
                            <Tooltip>
                            <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring hover:text-foreground inline-flex items-center justify-center outline-none rounded-full shrink-0 size-4 text-muted-foreground/70 transition-colors" type="button" id="base-ui-_r_e_" baseUiTooltipTrigger="" aria-label="What is a CVC?">
                              <svg className="lucide lucide-circle-question-mark size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                            </TooltipTrigger>
                            </Tooltip>
                          </div>
                          <Input id="checkout-6-cvc" placeholder="123" inputmode="numeric" autoComplete="cc-csc" value="184"></Input>
                        </Field>
                      </FieldGroup>
                      <Field className="gap-3" role="group" data-orientation="horizontal">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_g_" aria-checked="true" aria-labelledby="checkout-6-billing-label">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input id="checkout-6-billing" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="checkout-6-billing" id="checkout-6-billing-label">
                          {"Billing address matches shipping"}
                        </FieldLabel>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                  <Button className="w-full" type="button" tabIndex="0">
                    {"Pay $302.08"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
