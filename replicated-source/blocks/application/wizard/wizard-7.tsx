import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="min-h-svh w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Fund transfer wizard"}
      </h1>
      <div className="bg-background flex flex-col min-h-svh w-full">
        <header className="backdrop-blur bg-background/95 border-b border-border shrink-0 sticky top-0 z-20">
          <div className="flex gap-3 items-center justify-between lg:px-8 min-h-14 px-4 relative sm:min-h-16 sm:px-6">
            <div className="flex items-center min-w-0">
              <div className="flex gap-2 items-center min-w-0">
                <h1 className="font-medium leading-5 text-base text-foreground truncate">
                  {"Fund Transfer"}
                </h1>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute hidden left-1/2 max-w-md min-w-80 sm:block w-[44vw]">
              <StepperItem>
              <Stepper className="max-w-md" role="tablist" aria-orientation="horizontal" data-orientation="horizontal" aria-label="Fund transfer steps">
                <Stepper>
                <StepperNav className="items-center" data-state="1" data-orientation="horizontal">
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="active">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex={-1} data-state="active" loading="false" extracted="1">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                        <div className="absolute">
                          {"1"}
                        </div>
                      </StepperIndicator>
                      </Stepper>
                      <Stepper>
                      <StepperTitle className="text-foreground truncate" data-state="active">
                        {"Payee"}
                      </StepperTitle>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                    <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="active"></StepperSeparator>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                        <div className="absolute">
                          {"2"}
                        </div>
                      </StepperIndicator>
                      </Stepper>
                      <Stepper>
                      <StepperTitle className="text-foreground truncate" data-state="inactive">
                        {"Amount"}
                      </StepperTitle>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                    <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="inactive"></StepperSeparator>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                        <div className="absolute">
                          {"3"}
                        </div>
                      </StepperIndicator>
                      </Stepper>
                      <Stepper>
                      <StepperTitle className="text-foreground truncate" data-state="inactive">
                        {"Details"}
                      </StepperTitle>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                    <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary md:mx-2.5" data-state="inactive"></StepperSeparator>
                  </StepperItem>
                  </Stepper>
                  <Stepper>
                  <StepperItem className="min-w-0 relative" data-state="inactive">
                    <Stepper>
                    <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start min-w-0 pointer-events-none" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex={-1} data-state="inactive" loading="false">
                      <Stepper>
                      <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                        <div className="absolute">
                          {"4"}
                        </div>
                      </StepperIndicator>
                      </Stepper>
                      <Stepper>
                      <StepperTitle className="text-foreground truncate" data-state="inactive">
                        {"Authorize"}
                      </StepperTitle>
                      </Stepper>
                    </StepperTrigger>
                    </Stepper>
                  </StepperItem>
                  </Stepper>
                </StepperNav>
                </Stepper>
              </Stepper>
              </StepperItem>
            </div>
            <div className="flex gap-2 items-center ml-auto shrink-0">
              <Button className="-me-2 size-8" type="button" tabIndex={0} aria-label="Close fund transfer">
                <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </Button>
            </div>
          </div>
          <div className="pb-2 px-4 sm:hidden">
            <StepperItem>
            <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal" aria-label="Fund transfer steps">
              <Stepper>
              <StepperNav className="items-center" data-state="1" data-orientation="horizontal">
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="active">
                  <Stepper>
                  <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start pointer-events-none" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex={-1} data-state="active" loading="false">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="active">
                      <div className="absolute">
                        {"1"}
                        <span className="sr-only">
                          {"Payee"}
                        </span>
                      </div>
                    </StepperIndicator>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="active"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start pointer-events-none" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex={-1} data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"2"}
                        <span className="sr-only">
                          {"Amount"}
                        </span>
                      </div>
                    </StepperIndicator>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="inactive"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start pointer-events-none" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex={-1} data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"3"}
                        <span className="sr-only">
                          {"Details"}
                        </span>
                      </div>
                    </StepperIndicator>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                  <StepperSeparator className="bg-border group-data-[state=completed]/step:bg-primary mx-2" data-state="inactive"></StepperSeparator>
                </StepperItem>
                </Stepper>
                <Stepper>
                <StepperItem className="min-w-0 relative" data-state="inactive">
                  <Stepper>
                  <StepperTrigger className="cursor-default disabled:opacity-100 gap-1.5 justify-start pointer-events-none" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex={-1} data-state="inactive" loading="false">
                    <Stepper>
                    <StepperIndicator className="before:absolute before:border before:border-dashed before:border-transparent before:content-[''] before:inset-0 before:pointer-events-none before:rounded-full before:z-10 border data-[state=active]:before:animate-[spin_8s_linear_infinite] data-[state=active]:before:border-primary data-[state=active]:bg-primary/10 data-[state=active]:border-0 data-[state=active]:text-primary data-[state=inactive]:border-border data-[state=inactive]:text-muted-foreground isolate motion-reduce:data-[state=active]:before:animate-none overflow-visible" data-state="inactive">
                      <div className="absolute">
                        {"4"}
                        <span className="sr-only">
                          {"Authorize"}
                        </span>
                      </div>
                    </StepperIndicator>
                    </Stepper>
                  </StepperTrigger>
                  </Stepper>
                </StepperItem>
                </Stepper>
              </StepperNav>
              </Stepper>
            </Stepper>
            </StepperItem>
          </div>
        </header>
        <main className="flex flex-1 justify-center lg:px-10 min-h-0 overflow-y-auto px-4 py-8 sm:px-8 sm:py-10">
          <form className="flex flex-col gap-8 max-w-[34rem] w-full" id="payment-flow-wizard-form" aria-label="Fund transfer wizard">
            <FieldSet className="gap-0 min-h-[34rem]">
              <FieldLegend className="sr-only" variant="legend">
                {"Fund transfer wizard"}
              </FieldLegend>
              <FieldDescription className="sr-only">
                {"Select a payee, enter an amount, review funding, and authorize transfer."}
              </FieldDescription>
              <div className="flex flex-col gap-7 min-w-0" style={{opacity: "1", transform: "none"}}>
                <section className="flex flex-col gap-6 mx-auto w-full" aria-labelledby="wizard-7-recipient-title">
                  <FieldSet className="gap-0">
                    <FieldLegend className="sr-only" variant="legend" id="wizard-7-recipient-title">
                      {"Recipient"}
                    </FieldLegend>
                    <FieldDescription className="sr-only">
                      {"Select a payee for this fund transfer."}
                    </FieldDescription>
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-3">
                        <h3 className="font-medium text-sm">
                          {"Recent payees"}
                        </h3>
                        <div className="gap-2 grid grid-cols-3 min-w-0 sm:grid-cols-6">
                          <button className="flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 gap-2 h-full hover:bg-muted items-center justify-start min-h-26 min-w-0 outline-none p-2 rounded-md text-center transition-colors w-full" type="button">
                            <Tooltip>
                            <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                              <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-12" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80"></AvatarImage>
                              </Avatar>
                              <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/us.svg" />
                              </span>
                            </TooltipTrigger>
                            </Tooltip>
                            <span className="flex flex-col min-w-0 w-full">
                              <span className="font-medium leading-5 text-sm truncate">
                                {"Emma Clarke"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Mercury Bank · Consulting ending 3508"}
                              </span>
                            </span>
                          </button>
                          <button className="flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 gap-2 h-full hover:bg-muted items-center justify-start min-h-26 min-w-0 outline-none p-2 rounded-md text-center transition-colors w-full" type="button">
                            <Tooltip>
                            <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                              <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-12" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80"></AvatarImage>
                              </Avatar>
                              <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/us.svg" />
                              </span>
                            </TooltipTrigger>
                            </Tooltip>
                            <span className="flex flex-col min-w-0 w-full">
                              <span className="font-medium leading-5 text-sm truncate">
                                {"Mason Reed"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Aster Bank · Contractor ending 1184"}
                              </span>
                            </span>
                          </button>
                          <button className="flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 gap-2 h-full hover:bg-muted items-center justify-start min-h-26 min-w-0 outline-none p-2 rounded-md text-center transition-colors w-full" type="button">
                            <Tooltip>
                            <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                              <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-12" size="default">
                                <AvatarFallback className="bg-muted font-medium text-foreground">
                                  {"OB"}
                                </AvatarFallback>
                              </Avatar>
                              <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/gb.svg" />
                              </span>
                            </TooltipTrigger>
                            </Tooltip>
                            <span className="flex flex-col min-w-0 w-full">
                              <span className="font-medium leading-5 text-sm truncate">
                                {"Oliver Bennett"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Barclays Business · Supplier ending 7420"}
                              </span>
                            </span>
                          </button>
                          <button className="flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 gap-2 h-full hover:bg-muted items-center justify-start min-h-26 min-w-0 outline-none p-2 rounded-md text-center transition-colors w-full" type="button">
                            <Tooltip>
                            <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                              <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-12" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80"></AvatarImage>
                              </Avatar>
                              <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/de.svg" />
                              </span>
                            </TooltipTrigger>
                            </Tooltip>
                            <span className="flex flex-col min-w-0 w-full">
                              <span className="font-medium leading-5 text-sm truncate">
                                {"Helio Parts Co."}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Commerzbank · Parts invoice ending 4318"}
                              </span>
                            </span>
                          </button>
                          <button className="flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 gap-2 h-full hover:bg-muted items-center justify-start min-h-26 min-w-0 outline-none p-2 rounded-md text-center transition-colors w-full" type="button">
                            <Tooltip>
                            <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                              <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-12" size="default">
                                <AvatarFallback className="bg-muted font-medium text-foreground">
                                  {"KS"}
                                </AvatarFallback>
                              </Avatar>
                              <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/us.svg" />
                              </span>
                            </TooltipTrigger>
                            </Tooltip>
                            <span className="flex flex-col min-w-0 w-full">
                              <span className="font-medium leading-5 text-sm truncate">
                                {"Keystone Systems"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Chase Business · Maintenance ending 1180"}
                              </span>
                            </span>
                          </button>
                          <button className="flex flex-col focus-visible:ring-[3px] focus-visible:ring-ring/50 gap-2 h-full hover:bg-muted items-center justify-start min-h-26 min-w-0 outline-none p-2 rounded-md text-center transition-colors w-full" type="button">
                            <Tooltip>
                            <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                              <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-12" size="default">
                                <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80"></AvatarImage>
                              </Avatar>
                              <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/gb.svg" />
                              </span>
                            </TooltipTrigger>
                            </Tooltip>
                            <span className="flex flex-col min-w-0 w-full">
                              <span className="font-medium leading-5 text-sm truncate">
                                {"Lauren Pierce"}
                              </span>
                              <span className="text-muted-foreground text-xs truncate">
                                {"Monzo Business · Studio ending 6672"}
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <h3 className="font-medium text-sm">
                          {"Saved accounts"}
                        </h3>
                        <div className="relative">
                          <svg className="-translate-y-1/2 absolute left-3 lucide lucide-search pointer-events-none size-4 text-muted-foreground top-1/2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path>
                            <circle cx={11} cy={11} r={8}></circle>
                          </svg>
                          <Input className="ps-9" id="base-ui-_r_e_" aria-label="Search payees" placeholder="Name, bank, ending, or country" value=""></Input>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button type="button" tabIndex={0}>
                            {"All"}
                          </Button>
                          <Button type="button" tabIndex={0}>
                            {"My wallets"}
                          </Button>
                        </div>
                        <ScrollArea className="h-[clamp(13rem,calc(100svh-31rem),24rem)]" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
                          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_f_-viewport" tabIndex={0} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "420px"}} data-has-overflow-y="" data-overflow-y-end="">
                            <ItemGroup className="gap-1 pr-3" role="list">
                              <Item className="cursor-pointer focus-visible:outline-none gap-3 hover:bg-muted min-w-0 px-0 py-2.5 rounded-md sm:px-2 text-left" type="button" variant="default" size="default">
                                <ItemMedia variant="default">
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                                    <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-10" size="default">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                      <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/us.svg" />
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </ItemMedia>
                                <ItemContent className="min-w-0">
                                  <ItemTitle className="max-w-full truncate">
                                    {"Emma Clarke"}
                                  </ItemTitle>
                                  <ItemDescription className="truncate">
                                    {"Mercury Bank · Consulting ending 3508"}
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2 justify-end min-w-8 shrink-0 sm:max-w-40 sm:min-w-28 text-muted-foreground text-right text-xs">
                                  <span className="hidden sm:block truncate">
                                    {"Paid Apr 18"}
                                  </span>
                                  <svg className="lucide lucide-chevron-right shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </ItemActions>
                              </Item>
                              <Item className="cursor-pointer focus-visible:outline-none gap-3 hover:bg-muted min-w-0 px-0 py-2.5 rounded-md sm:px-2 text-left" type="button" variant="default" size="default">
                                <ItemMedia variant="default">
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                                    <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-10" size="default">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                      <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/us.svg" />
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </ItemMedia>
                                <ItemContent className="min-w-0">
                                  <ItemTitle className="max-w-full truncate">
                                    {"Mason Reed"}
                                  </ItemTitle>
                                  <ItemDescription className="truncate">
                                    {"Aster Bank · Contractor ending 1184"}
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2 justify-end min-w-8 shrink-0 sm:max-w-40 sm:min-w-28 text-muted-foreground text-right text-xs">
                                  <span className="hidden sm:block truncate">
                                    {"Paid May 03"}
                                  </span>
                                  <svg className="lucide lucide-chevron-right shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </ItemActions>
                              </Item>
                              <Item className="cursor-pointer focus-visible:outline-none gap-3 hover:bg-muted min-w-0 px-0 py-2.5 rounded-md sm:px-2 text-left" type="button" variant="default" size="default">
                                <ItemMedia variant="default">
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                                    <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-10" size="default">
                                      <AvatarFallback className="bg-muted font-medium text-foreground">
                                        {"OB"}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                      <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/gb.svg" />
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </ItemMedia>
                                <ItemContent className="min-w-0">
                                  <ItemTitle className="max-w-full truncate">
                                    {"Oliver Bennett"}
                                  </ItemTitle>
                                  <ItemDescription className="truncate">
                                    {"Barclays Business · Supplier ending 7420"}
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2 justify-end min-w-8 shrink-0 text-muted-foreground text-right text-xs">
                                  <svg className="lucide lucide-chevron-right shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </ItemActions>
                              </Item>
                              <Item className="cursor-pointer focus-visible:outline-none gap-3 hover:bg-muted min-w-0 px-0 py-2.5 rounded-md sm:px-2 text-left" type="button" variant="default" size="default">
                                <ItemMedia variant="default">
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_n_" baseUiTooltipTrigger="">
                                    <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-10" size="default">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                      <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/de.svg" />
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </ItemMedia>
                                <ItemContent className="min-w-0">
                                  <ItemTitle className="max-w-full truncate">
                                    {"Helio Parts Co."}
                                  </ItemTitle>
                                  <ItemDescription className="truncate">
                                    {"Commerzbank · Parts invoice ending 4318"}
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2 justify-end min-w-8 shrink-0 text-muted-foreground text-right text-xs">
                                  <svg className="lucide lucide-chevron-right shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </ItemActions>
                              </Item>
                              <Item className="cursor-pointer focus-visible:outline-none gap-3 hover:bg-muted min-w-0 px-0 py-2.5 rounded-md sm:px-2 text-left" type="button" variant="default" size="default">
                                <ItemMedia variant="default">
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                                    <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-10" size="default">
                                      <AvatarFallback className="bg-muted font-medium text-foreground">
                                        {"KS"}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                      <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/us.svg" />
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </ItemMedia>
                                <ItemContent className="min-w-0">
                                  <ItemTitle className="max-w-full truncate">
                                    {"Keystone Systems"}
                                  </ItemTitle>
                                  <ItemDescription className="truncate">
                                    {"Chase Business · Maintenance ending 1180"}
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2 justify-end min-w-8 shrink-0 sm:max-w-40 sm:min-w-28 text-muted-foreground text-right text-xs">
                                  <span className="hidden sm:block truncate">
                                    {"New details"}
                                  </span>
                                  <svg className="lucide lucide-chevron-right shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </ItemActions>
                              </Item>
                              <Item className="cursor-pointer focus-visible:outline-none gap-3 hover:bg-muted min-w-0 px-0 py-2.5 rounded-md sm:px-2 text-left" type="button" variant="default" size="default">
                                <ItemMedia variant="default">
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_r_" baseUiTooltipTrigger="">
                                    <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-10" size="default">
                                      <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=128&h=128&q=80"></AvatarImage>
                                    </Avatar>
                                    <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                      <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/gb.svg" />
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </ItemMedia>
                                <ItemContent className="min-w-0">
                                  <ItemTitle className="max-w-full truncate">
                                    {"Lauren Pierce"}
                                  </ItemTitle>
                                  <ItemDescription className="truncate">
                                    {"Monzo Business · Studio ending 6672"}
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2 justify-end min-w-8 shrink-0 text-muted-foreground text-right text-xs">
                                  <svg className="lucide lucide-chevron-right shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </ItemActions>
                              </Item>
                              <Item className="cursor-pointer focus-visible:outline-none gap-3 hover:bg-muted min-w-0 px-0 py-2.5 rounded-md sm:px-2 text-left" type="button" variant="default" size="default">
                                <ItemMedia variant="default">
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_t_" baseUiTooltipTrigger="">
                                    <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-10" size="default">
                                      <AvatarFallback className="bg-muted font-medium text-foreground">
                                        {"OS"}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                      <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/us.svg" />
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </ItemMedia>
                                <ItemContent className="min-w-0">
                                  <ItemTitle className="max-w-full truncate">
                                    {"Oakridge Supply"}
                                  </ItemTitle>
                                  <ItemDescription className="truncate">
                                    {"Wells Fargo · Wholesale ending 2888"}
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2 justify-end min-w-8 shrink-0 text-muted-foreground text-right text-xs">
                                  <svg className="lucide lucide-chevron-right shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </ItemActions>
                              </Item>
                              <Item className="cursor-pointer focus-visible:outline-none gap-3 hover:bg-muted min-w-0 px-0 py-2.5 rounded-md sm:px-2 text-left" type="button" variant="default" size="default">
                                <ItemMedia variant="default">
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_v_" baseUiTooltipTrigger="">
                                    <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-10" size="default">
                                      <AvatarFallback className="bg-muted font-medium text-foreground">
                                        {"AW"}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                      <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/us.svg" />
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </ItemMedia>
                                <ItemContent className="min-w-0">
                                  <ItemTitle className="max-w-full truncate">
                                    {"Arden Wholesale"}
                                  </ItemTitle>
                                  <ItemDescription className="truncate">
                                    {"First Century Bank · Warehouse ending 0400"}
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2 justify-end min-w-8 shrink-0 sm:max-w-40 sm:min-w-28 text-muted-foreground text-right text-xs">
                                  <span className="hidden sm:block truncate">
                                    {"Paid Apr 11"}
                                  </span>
                                  <svg className="lucide lucide-chevron-right shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </ItemActions>
                              </Item>
                              <Item className="cursor-pointer focus-visible:outline-none gap-3 hover:bg-muted min-w-0 px-0 py-2.5 rounded-md sm:px-2 text-left" type="button" variant="default" size="default">
                                <ItemMedia variant="default">
                                  <Tooltip>
                                  <TooltipTrigger className="focus-visible:ring-[3px] focus-visible:ring-ring/50 inline-flex outline-none relative rounded-full shrink-0" id="base-ui-_r_11_" baseUiTooltipTrigger="">
                                    <Avatar className="after:rounded-full bg-muted overflow-hidden rounded-full size-10" size="default">
                                      <AvatarFallback className="bg-muted font-medium text-foreground">
                                        {"SC"}
                                      </AvatarFallback>
                                    </Avatar>
                                    <span className="-bottom-0.5 -end-0.5 absolute bg-background border border-background flex items-center justify-center overflow-hidden rounded-full size-5">
                                      <img className="block object-cover rounded-full shrink-0 size-full" alt="" width={20} height={20} src="https://flagcdn.com/au.svg" />
                                    </span>
                                  </TooltipTrigger>
                                  </Tooltip>
                                </ItemMedia>
                                <ItemContent className="min-w-0">
                                  <ItemTitle className="max-w-full truncate">
                                    {"Slate Courier"}
                                  </ItemTitle>
                                  <ItemDescription className="truncate">
                                    {"Westpac · Route account ending 8434"}
                                  </ItemDescription>
                                </ItemContent>
                                <ItemActions className="gap-2 justify-end min-w-8 shrink-0 text-muted-foreground text-right text-xs">
                                  <svg className="lucide lucide-chevron-right shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                    <path d="m9 18 6-6-6-6"></path>
                                  </svg>
                                </ItemActions>
                              </Item>
                            </ItemGroup>
                          </div>
                          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_f_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "68.22929936305732px"}}>
                            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
                          </div>
                        </ScrollArea>
                      </div>
                    </div>
                  </FieldSet>
                </section>
              </div>
            </FieldSet>
            <div className="flex gap-3 items-center justify-between">
              <Button className="invisible justify-start min-w-24 px-0" type="button" disabled="" tabIndex={0} disabled>
                <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true" data-icon="inline-start">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
                {"Back"}
              </Button>
              <Button type="submit" tabIndex={0}>
                {"Continue"}
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true" data-icon="inline-end">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
            </div>
          </form>
        </main>
      </div>
    </main>
  )
}
