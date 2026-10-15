import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Stepper,
  StepperContent,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperPanel,
  StepperSeparator,
  StepperTitle,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="flex items-start justify-center lg:p-10 min-h-svh p-4 pb-20 sm:p-6 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"AI token checkout"}
      </h1>
      <form className="flex flex-col max-w-2xl w-full" aria-label="AI token checkout">
        <StepperItem>
        <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
          <Frame className="w-full">
            <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
              <div className="flex gap-3 items-start justify-between">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <div className="font-semibold leading-tight text-sm">
                    {"AI Token Checkout"}
                  </div>
                  <div className="flex-wrap gap-1.5 inline-flex items-center min-w-0 text-muted-foreground text-sm">
                    <span className="truncate">
                      {"OpenAI"}
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="shrink-0">
                      {"5M tokens"}
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span className="font-semibold shrink-0 tabular-nums text-foreground">
                      {"$119"}
                    </span>
                  </div>
                </div>
                <Button type="button" tabIndex="0" extracted="1">
                  <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" data-icon="inline-start" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                  {"Guide"}
                </Button>
              </div>
            </header>
            <FramePanel className="flex items-center overflow-x-auto">
              <Stepper>
              <StepperNav className="items-center min-w-full" data-state="1" data-orientation="horizontal">
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="active">
                  <Stepper>
                  <StepperTrigger className="disabled:opacity-100 gap-2 justify-start min-w-0" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-md before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                      <div className="absolute">
                        {"1"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <Stepper>
                    <StepperTitle className="hidden sm:block text-foreground truncate" data-state="active">
                      {"Provider"}
                    </StepperTitle>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="active"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="disabled:opacity-100 gap-2 justify-start min-w-0" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-md before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"2"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <Stepper>
                    <StepperTitle className="hidden sm:block text-foreground truncate" data-state="inactive">
                      {"Tokens"}
                    </StepperTitle>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="inactive"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="disabled:opacity-100 gap-2 justify-start min-w-0" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-md before:z-10 data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=inactive]:border data-[state=inactive]:border-border data-[state=inactive]:text-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"3"}
                      </div>
                    </StepperIndicator>
                    </Stepper>
                    <Stepper>
                    <StepperTitle className="hidden sm:block text-foreground truncate" data-state="inactive">
                      {"Pay"}
                    </StepperTitle>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                </StepperItem>
                </Stepper>
              </StepperNav>
              </Stepper>
            </FramePanel>
            <FramePanel>
              <Stepper>
              <StepperPanel className="text-sm" data-state="1">
                <Stepper>
                <StepperContent data-state="1">
                  <section className="flex flex-col gap-5 min-w-0" aria-labelledby="checkout-3-provider-title">
                    <div className="flex flex-col gap-1 min-w-0">
                      <h2 className="font-semibold text-base" id="checkout-3-provider-title">
                        {"Provider Balance"}
                      </h2>
                      <p className="leading-5 max-w-xl text-muted-foreground text-sm">
                        {"Fund one AI provider balance for the selected workspace."}
                      </p>
                    </div>
                    <FieldSet className="gap-3" invalid="false">
                      <FieldLegend className="sr-only" variant="legend">
                        {"AI provider"}
                      </FieldLegend>
                      <RadioGroup className="gap-2 grid sm:grid-cols-2" role="radiogroup" aria-label="Select AI provider">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="checkout-3-provider-openai" id="checkout-3-provider-openai-label">
                          <Field role="group" data-orientation="horizontal">
                            <RadioGroupItem className="absolute right-3 rounded-full size-5 top-3" checked="" role="radio" tabIndex="0" aria-checked="true" compositeItemActive="" id="base-ui-_r_1_" aria-labelledby="checkout-3-provider-openai-label">
                              <span className="cn-radio-group-indicator" data-checked="">
                                <span className="cn-radio-group-indicator-icon"></span>
                              </span>
                            </RadioGroupItem>
                            <input id="checkout-3-provider-openai" tabIndex="-1" aria-hidden="true" type="radio" value="openai" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            <FieldLabel className="cn-field-title flex-col gap-3 items-start">
                              <Item className="bg-background border border-border p-2 shadow-black/5 shadow-xs w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <span className="dark:hidden" aria-hidden="true">
                                    <svg className="size-5" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                      <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                    </svg>
                                  </span>
                                  <span className="dark:block hidden" aria-hidden="true">
                                    <svg className="size-5" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                                      <path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                                    </svg>
                                  </span>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 items-start min-w-0">
                                <span className="flex flex-wrap gap-2 items-center min-w-0">
                                  <span className="font-semibold text-sm">
                                    {"OpenAI"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                    {"Default"}
                                  </Badge>
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  {"Text, image, and embedding usage for product workflows."}
                                </span>
                              </div>
                            </FieldLabel>
                          </Field>
                        </FieldLabel>
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="checkout-3-provider-claude" id="checkout-3-provider-claude-label">
                          <Field role="group" data-orientation="horizontal">
                            <RadioGroupItem className="absolute right-3 rounded-full size-5 top-3" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_4_" aria-labelledby="checkout-3-provider-claude-label"></RadioGroupItem>
                            <input id="checkout-3-provider-claude" tabIndex="-1" aria-hidden="true" type="radio" value="claude" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            <FieldLabel className="cn-field-title flex-col gap-3 items-start">
                              <Item className="bg-background border border-border p-2 shadow-black/5 shadow-xs w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
                                    <path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 items-start min-w-0">
                                <span className="flex flex-wrap gap-2 items-center min-w-0">
                                  <span className="font-semibold text-sm">
                                    {"Claude"}
                                  </span>
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  {"Long-form drafting, research review, and support notes."}
                                </span>
                              </div>
                            </FieldLabel>
                          </Field>
                        </FieldLabel>
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="checkout-3-provider-gemini" id="checkout-3-provider-gemini-label">
                          <Field role="group" data-orientation="horizontal">
                            <RadioGroupItem className="absolute right-3 rounded-full size-5 top-3" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_7_" aria-labelledby="checkout-3-provider-gemini-label"></RadioGroupItem>
                            <input id="checkout-3-provider-gemini" tabIndex="-1" aria-hidden="true" type="radio" value="gemini" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            <FieldLabel className="cn-field-title flex-col gap-3 items-start">
                              <Item className="bg-background border border-border p-2 shadow-black/5 shadow-xs w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5" aria-hidden="true" viewBox="0 0 296 298" fill="none">
                                    <mask id="gemini-a" width="296" height="298" x="0" y="0" maskUnits="userSpaceOnUse" style={{maskType: "alpha"}}>
                                      <path fill="#3186FF" d="M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"></path>
                                    </mask>
                                    <g mask="url(#gemini-a)">
                                      <g filter="url(#gemini-b)">
                                        <ellipse cx="163" cy="149" fill="#3689FF" rx="196" ry="159"></ellipse>
                                      </g>
                                      <g filter="url(#gemini-c)">
                                        <ellipse cx="33.5" cy="142.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                      </g>
                                      <g filter="url(#gemini-d)">
                                        <ellipse cx="19.5" cy="148.5" fill="#F6C013" rx="68.5" ry="72.5"></ellipse>
                                      </g>
                                      <g filter="url(#gemini-e)">
                                        <path fill="#FA4340" d="M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"></path>
                                      </g>
                                      <g filter="url(#gemini-f)">
                                        <path fill="#FA4340" d="M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"></path>
                                      </g>
                                      <g filter="url(#gemini-g)">
                                        <path fill="#14BB69" d="M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"></path>
                                      </g>
                                      <g filter="url(#gemini-h)">
                                        <path fill="#14BB69" d="M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"></path>
                                      </g>
                                    </g>
                                    <defs>
                                      <filter id="gemini-b" width="464" height="390" x="-69" y="-46" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="18"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-c" width="265" height="273" x="-99" y="6" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-d" width="265" height="273" x="-113" y="12" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-e" width="299.5" height="329" x="-41.5" y="-130" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-f" width="299.5" height="329" x="-45" y="-153" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-g" width="299.5" height="329" x="-41" y="91" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                      <filter id="gemini-h" width="299.5" height="329" x="-39" y="132" color-interpolation-filters="sRGB" filterunits="userSpaceOnUse">
                                        <feflood floodOpacity="0" result="BackgroundImageFix"></feflood>
                                        <feblend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feblend>
                                        <fegaussianblur result="effect1_foregroundBlur_69_17998" stdDeviation="32"></fegaussianblur>
                                      </filter>
                                    </defs>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 items-start min-w-0">
                                <span className="flex flex-wrap gap-2 items-center min-w-0">
                                  <span className="font-semibold text-sm">
                                    {"Gemini"}
                                  </span>
                                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                                    {"Media"}
                                  </Badge>
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  {"Multimodal analysis for documents, media, and search."}
                                </span>
                              </div>
                            </FieldLabel>
                          </Field>
                        </FieldLabel>
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="checkout-3-provider-mistral" id="checkout-3-provider-mistral-label">
                          <Field role="group" data-orientation="horizontal">
                            <RadioGroupItem className="absolute right-3 rounded-full size-5 top-3" unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_a_" aria-labelledby="checkout-3-provider-mistral-label"></RadioGroupItem>
                            <input id="checkout-3-provider-mistral" tabIndex="-1" aria-hidden="true" type="radio" value="mistral" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                            <FieldLabel className="cn-field-title flex-col gap-3 items-start">
                              <Item className="bg-background border border-border p-2 shadow-black/5 shadow-xs w-auto" variant="default" size="default">
                                <ItemMedia className="size-auto" variant="icon">
                                  <svg className="size-5 text-foreground" aria-hidden="true" fill="currentColor" preserveAspectRatio="xMidYMid" viewBox="0 0 256 233">
                                    <path d="M186.18182 0h46.54545v46.54545h-46.54545z"></path>
                                    <path fill="#F7D046" d="M209.45454 0h46.54545v46.54545h-46.54545z"></path>
                                    <path d="M0 0h46.54545v46.54545H0zM0 46.54545h46.54545V93.0909H0zM0 93.09091h46.54545v46.54545H0zM0 139.63636h46.54545v46.54545H0zM0 186.18182h46.54545v46.54545H0z"></path>
                                    <path fill="#F7D046" d="M23.27273 0h46.54545v46.54545H23.27273z"></path>
                                    <path fill="#F2A73B" d="M209.45454 46.54545h46.54545V93.0909h-46.54545zM23.27273 46.54545h46.54545V93.0909H23.27273z"></path>
                                    <path d="M139.63636 46.54545h46.54545V93.0909h-46.54545z"></path>
                                    <path fill="#F2A73B" d="M162.90909 46.54545h46.54545V93.0909h-46.54545zM69.81818 46.54545h46.54545V93.0909H69.81818z"></path>
                                    <path fill="#EE792F" d="M116.36364 93.09091h46.54545v46.54545h-46.54545zM162.90909 93.09091h46.54545v46.54545h-46.54545zM69.81818 93.09091h46.54545v46.54545H69.81818z"></path>
                                    <path d="M93.09091 139.63636h46.54545v46.54545H93.09091z"></path>
                                    <path fill="#EB5829" d="M116.36364 139.63636h46.54545v46.54545h-46.54545z"></path>
                                    <path fill="#EE792F" d="M209.45454 93.09091h46.54545v46.54545h-46.54545zM23.27273 93.09091h46.54545v46.54545H23.27273z"></path>
                                    <path d="M186.18182 139.63636h46.54545v46.54545h-46.54545z"></path>
                                    <path fill="#EB5829" d="M209.45454 139.63636h46.54545v46.54545h-46.54545z"></path>
                                    <path d="M186.18182 186.18182h46.54545v46.54545h-46.54545z"></path>
                                    <path fill="#EB5829" d="M23.27273 139.63636h46.54545v46.54545H23.27273z"></path>
                                    <path fill="#EA3326" d="M209.45454 186.18182h46.54545v46.54545h-46.54545zM23.27273 186.18182h46.54545v46.54545H23.27273z"></path>
                                  </svg>
                                </ItemMedia>
                              </Item>
                              <div className="flex flex-col gap-0.5 items-start min-w-0">
                                <span className="flex flex-wrap gap-2 items-center min-w-0">
                                  <span className="font-semibold text-sm">
                                    {"Mistral"}
                                  </span>
                                </span>
                                <span className="text-muted-foreground text-xs">
                                  {"Low-latency credits for compact automation agents."}
                                </span>
                              </div>
                            </FieldLabel>
                          </Field>
                        </FieldLabel>
                      </RadioGroup>
                    </FieldSet>
                  </section>
                </StepperContent>
                </Stepper>
              </StepperPanel>
              </Stepper>
            </FramePanel>
            <footer className="flex flex-col gap-3 px-(--frame-panel-footer-px) py-(--frame-panel-footer-py) sm:flex-row sm:items-center sm:justify-between">
              <div className="gap-1.5 hidden items-center min-w-0 sm:flex text-muted-foreground text-sm">
                <svg className="lucide lucide-sparkles shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
                {"Choose the AI balance to fund."}
              </div>
              <div className="flex gap-2 items-center justify-end sm:w-auto w-full">
                <Button type="submit" tabIndex="0">
                  {"Next Step"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" data-icon="inline-end" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </footer>
          </Frame>
        </Stepper>
        </StepperItem>
      </form>
    </main>
  )
}
