import { Button } from "@/registry/bases/base/ui/button"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Help sheet"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" data-icon="inline-start" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <path d="M12 17h.01"></path>
          </svg>
          {"Open help sheet"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden right-4 rounded-xl w-[min(26rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="gap-3 pb-2 shrink-0">
        <div className="flex gap-3 items-start justify-between">
          <div className="min-w-0">
            <div className="flex gap-2 items-center min-w-0">
              <SheetTitle className="truncate" id="base-ui-_r_3_">
                {"Help"}
              </SheetTitle>
            </div>
            <SheetDescription className="sr-only" id="base-ui-_r_4_">
              {"Find setup guides and support paths."}
            </SheetDescription>
          </div>
          <SheetClose className="-me-1.5 -mt-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close help sheet">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <InputGroup className="mt-1" role="group">
          <InputGroupAddon role="group" data-align="inline-start">
            <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
              <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="SearchIcon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </span>
          </InputGroupAddon>
          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_5_" aria-label="Search help guides" placeholder="Search guides" autoComplete="off" />
          <InputGroupAddon role="group" data-align="inline-end">
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-xs disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" size="icon-xs" aria-label="Search scope" id="base-ui-_r_7_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
          </InputGroupAddon>
        </InputGroup>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_8_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "174px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="flex flex-col gap-5 pb-4 pt-3 px-4">
              <section className="flex flex-col gap-2.5">
                <div className="flex gap-2 items-center">
                  <h3 className="font-medium text-sm">
                    {"Suggested"}
                  </h3>
                </div>
                <ItemGroup className="gap-2.5" role="list">
                  <Item className="border-border/60 flex-nowrap hover:bg-muted/30" href="#workspace-basics" aria-label="Workspace basics" variant="outline" size="sm">
                    <ItemMedia variant="default">
                      <Item className="[&_svg]:size-4 bg-background border border-border/60 p-0 size-9 text-muted-foreground" variant="default" size="default">
                        <svg className="lucide lucide-package" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PackageIcon" tabler="IconPackage" hugeicons="PackageIcon" phosphor="PackageIcon" remixicon="RiBox3Line" aria-hidden="true">
                          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
                          <path d="M12 22V12"></path>
                          <polyline points="3.29 7 12 12 20.71 7"></polyline>
                          <path d="m7.5 4.27 9 5.15"></path>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          {"Workspace basics"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring inline-flex outline-none rounded-sm" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                            {"New"}
                          </Badge>
                        </TooltipTrigger>
                        </Tooltip>
                      </ItemTitle>
                      <ItemDescription className="text-xs">
                        {"Set up members, roles, and invite rules."}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item className="border-border/60 flex-nowrap hover:bg-muted/30" href="#data-model" aria-label="Data model" variant="outline" size="sm">
                    <ItemMedia variant="default">
                      <Item className="[&_svg]:size-4 bg-background border border-border/60 p-0 size-9 text-muted-foreground" variant="default" size="default">
                        <svg className="lucide lucide-database" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseIcon" tabler="IconDatabase" hugeicons="Database02Icon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                          <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                          <path d="M3 12A9 3 0 0 0 21 12"></path>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          {"Data model"}
                        </span>
                      </ItemTitle>
                      <ItemDescription className="text-xs">
                        {"Understand records, fields, and views."}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item className="border-border/60 flex-nowrap hover:bg-muted/30" href="#permissions" aria-label="Permissions" variant="outline" size="sm">
                    <ItemMedia variant="default">
                      <Item className="[&_svg]:size-4 bg-background border border-border/60 p-0 size-9 text-muted-foreground" variant="default" size="default">
                        <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          {"Permissions"}
                        </span>
                      </ItemTitle>
                      <ItemDescription className="text-xs">
                        {"Review access levels before inviting people."}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </section>
              <section className="flex flex-col gap-2.5">
                <div className="flex gap-2 items-center">
                  <h3 className="font-medium text-sm">
                    {"Getting started"}
                  </h3>
                </div>
                <ItemGroup className="gap-2.5" role="list">
                  <Item className="border-border/60 flex-nowrap hover:bg-muted/30" href="#launch-checklist" aria-label="Launch checklist" variant="outline" size="sm">
                    <ItemMedia variant="default">
                      <Item className="[&_svg]:size-4 bg-background border border-border/60 p-0 size-9 text-muted-foreground" variant="default" size="default">
                        <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                          <path d="M12 7v14"></path>
                          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          {"Launch checklist"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring inline-flex outline-none rounded-sm" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                            {"6 steps"}
                          </Badge>
                        </TooltipTrigger>
                        </Tooltip>
                      </ItemTitle>
                      <ItemDescription className="text-xs">
                        {"Finish the first workspace setup steps."}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item className="border-border/60 flex-nowrap hover:bg-muted/30" href="#import-data" aria-label="Import data" variant="outline" size="sm">
                    <ItemMedia variant="default">
                      <Item className="[&_svg]:size-4 bg-background border border-border/60 p-0 size-9 text-muted-foreground" variant="default" size="default">
                        <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" aria-hidden="true">
                          <path d="M12 3v12"></path>
                          <path d="m17 8-5-5-5 5"></path>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          {"Import data"}
                        </span>
                      </ItemTitle>
                      <ItemDescription className="text-xs">
                        {"Bring contacts and tasks from CSV."}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                  <Item className="border-border/60 flex-nowrap hover:bg-muted/30" href="#automation-guide" aria-label="Automation guide" variant="outline" size="sm">
                    <ItemMedia variant="default">
                      <Item className="[&_svg]:size-4 bg-background border border-border/60 p-0 size-9 text-muted-foreground" variant="default" size="default">
                        <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                          <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                          <path d="M20 2v4"></path>
                          <path d="M22 4h-4"></path>
                          <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                      </Item>
                    </ItemMedia>
                    <ItemContent className="gap-0.5 min-w-0">
                      <ItemTitle className="gap-2 min-w-0 w-full">
                        <span className="truncate">
                          {"Automation guide"}
                        </span>
                        <Tooltip>
                        <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-ring inline-flex outline-none rounded-sm" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                            {"Updated"}
                          </Badge>
                        </TooltipTrigger>
                        </Tooltip>
                      </ItemTitle>
                      <ItemDescription className="text-xs">
                        {"Connect routine work to triggers."}
                      </ItemDescription>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </section>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_8_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "225.3488372093023px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter className="shrink-0">
        <ItemGroup className="gap-px items-start" role="list">
          <Button className="font-normal gap-2 hover:no-underline justify-start max-w-full no-underline w-auto" href="#help-center" aria-label="Help center" role="button" tabIndex="0" type="button">
            <svg className="lucide lucide-circle-question-mark text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" data-icon="inline-start" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <span className="truncate">
              {"Help center"}
            </span>
          </Button>
          <Button className="font-normal gap-2 hover:no-underline justify-start max-w-full no-underline w-auto" href="#support" aria-label="Contact support" role="button" tabIndex="0" type="button">
            <svg className="lucide lucide-life-buoy text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LifeBuoyIcon" tabler="IconLifebuoy" hugeicons="LifebuoyIcon" phosphor="LifebuoyIcon" remixicon="RiLifebuoyLine" data-icon="inline-start" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m4.93 4.93 4.24 4.24"></path>
              <path d="m14.83 9.17 4.24-4.24"></path>
              <path d="m14.83 14.83 4.24 4.24"></path>
              <path d="m9.17 14.83-4.24 4.24"></path>
              <circle cx="12" cy="12" r="4"></circle>
            </svg>
            <span className="truncate">
              {"Contact support"}
            </span>
          </Button>
          <Button className="font-normal gap-2 hover:no-underline justify-start max-w-full no-underline w-auto" href="#shortcuts" aria-label="Shortcuts" role="button" tabIndex="0" type="button">
            <svg className="lucide lucide-layers text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" data-icon="inline-start" aria-hidden="true">
              <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
              <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
              <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
            </svg>
            <span className="truncate">
              {"Shortcuts"}
            </span>
          </Button>
          <Button className="font-normal gap-2 hover:no-underline justify-start max-w-full no-underline w-auto" href="#terms" aria-label="Terms and privacy" role="button" tabIndex="0" type="button">
            <svg className="lucide lucide-shield-check text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" data-icon="inline-start" aria-hidden="true">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <span className="truncate">
              {"Terms and privacy"}
            </span>
          </Button>
        </ItemGroup>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
