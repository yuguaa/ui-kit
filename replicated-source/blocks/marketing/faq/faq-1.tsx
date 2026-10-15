import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh w-full">
      <section className="gap-10 grid max-w-6xl md:gap-16 md:grid-cols-[0.85fr_1.35fr] md:px-8 md:py-16 mx-auto px-6 py-12 w-full" aria-labelledby="faq-1-title">
        <div className="flex flex-col gap-8 max-w-sm md:self-start md:sticky md:top-12">
          <div className="flex flex-col gap-3">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5.5 min-w-5.5 outline-none px-1.5 py-0.5 relative self-start style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
              <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
              {"FAQs"}
            </Badge>
            <h2 className="font-semibold leading-tight sm:text-4xl text-3xl text-balance text-foreground tracking-tight" id="faq-1-title">
              {"Answers Before You Ship"}
            </h2>
            <p className="leading-7 text-balance text-base text-muted-foreground">
              {"Everything teams check when moving NeUI blocks to production."}
            </p>
          </div>
          <div className="border-border/70 border-t flex flex-col gap-3 items-start pt-6">
            <p className="leading-6 text-muted-foreground text-pretty text-sm">
              {"Not covered here? A real engineer answers implementation questions directly."}
            </p>
            <Button href="#" role="button" tabIndex="0">
              <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                <path d="M7 11h10"></path>
                <path d="M7 15h6"></path>
                <path d="M7 7h8"></path>
              </svg>
              {"Talk to support"}
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-6 min-w-0">
          <div className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-auto pb-px">
            <Tabs data-orientation="horizontal" activationDirection="none">
              <TabsList className="gap-6 h-10! justify-start min-w-full p-0 w-max" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Filter questions by topic">
                <TabsTrigger className="after:-bottom-px! flex-none font-medium pb-3 px-0 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" extracted="1">
                  {"All"}
                </TabsTrigger>
                <TabsTrigger className="after:-bottom-px! flex-none font-medium pb-3 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
                  {"Getting Started"}
                </TabsTrigger>
                <TabsTrigger className="after:-bottom-px! flex-none font-medium pb-3 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
                  {"Licensing"}
                </TabsTrigger>
                <TabsTrigger className="after:-bottom-px! flex-none font-medium pb-3 px-0 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
                  {"Updates"}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <Accordion className="gap-3 min-w-0" data-orientation="vertical" dir="ltr" role="region">
            <Card className="bg-card border border-border overflow-hidden p-0 ring-0 shadow-none" size="default">
              <CardContent className="p-0">
                <AccordionItem data-orientation="vertical" index="0" data-open="">
                  <h3 className="flex" data-orientation="vertical" data-index="0" data-open="">
                    <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:bg-muted/40 hover:no-underline leading-6 px-5 py-4 text-base text-left tracking-tight transition-colors" type="button" value="production-ready" data-orientation="vertical" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_5_" aria-expanded="true" id="base-ui-_r_6_" tabIndex="0">
                      {"How quickly can we use a block in production?"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                  <AccordionContent data-orientation="vertical" index="0" data-open="" id="base-ui-_r_5_" aria-labelledby="base-ui-_r_6_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                    <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-7 pb-5 px-5 text-base text-muted-foreground text-pretty">
                      {"Most teams copy a block into an existing route, replace the demo data, and tighten the copy for their product. The structure is already responsive and token-aware, so most of the work is content, not layout."}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border overflow-hidden p-0 ring-0 shadow-none" size="default">
              <CardContent className="p-0">
                <AccordionItem data-orientation="vertical" hidden="" index="1" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="1" data-closed="">
                    <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:bg-muted/40 hover:no-underline leading-6 px-5 py-4 text-base text-left tracking-tight transition-colors" type="button" value="production-ready" data-orientation="vertical" hidden="" index="1" aria-disabled="false" aria-expanded="false" id="base-ui-_r_9_" tabIndex="0">
                      {"Will these blocks fit our existing app shell?"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                </AccordionItem>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border overflow-hidden p-0 ring-0 shadow-none" size="default">
              <CardContent className="p-0">
                <AccordionItem data-orientation="vertical" hidden="" index="2" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="2" data-closed="">
                    <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:bg-muted/40 hover:no-underline leading-6 px-5 py-4 text-base text-left tracking-tight transition-colors" type="button" value="production-ready" data-orientation="vertical" hidden="" index="2" aria-disabled="false" aria-expanded="false" id="base-ui-_r_c_" tabIndex="0">
                      {"Can we customize every shadcn primitive?"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                </AccordionItem>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border overflow-hidden p-0 ring-0 shadow-none" size="default">
              <CardContent className="p-0">
                <AccordionItem data-orientation="vertical" hidden="" index="3" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="3" data-closed="">
                    <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:bg-muted/40 hover:no-underline leading-6 px-5 py-4 text-base text-left tracking-tight transition-colors" type="button" value="production-ready" data-orientation="vertical" hidden="" index="3" aria-disabled="false" aria-expanded="false" id="base-ui-_r_f_" tabIndex="0">
                      {"Can one team use NeUI across multiple products?"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                </AccordionItem>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border overflow-hidden p-0 ring-0 shadow-none" size="default">
              <CardContent className="p-0">
                <AccordionItem data-orientation="vertical" hidden="" index="4" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="4" data-closed="">
                    <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:bg-muted/40 hover:no-underline leading-6 px-5 py-4 text-base text-left tracking-tight transition-colors" type="button" value="production-ready" data-orientation="vertical" hidden="" index="4" aria-disabled="false" aria-expanded="false" id="base-ui-_r_i_" tabIndex="0">
                      {"What is included with a Pro license?"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                </AccordionItem>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border overflow-hidden p-0 ring-0 shadow-none" size="default">
              <CardContent className="p-0">
                <AccordionItem data-orientation="vertical" hidden="" index="5" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="5" data-closed="">
                    <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:bg-muted/40 hover:no-underline leading-6 px-5 py-4 text-base text-left tracking-tight transition-colors" type="button" value="production-ready" data-orientation="vertical" hidden="" index="5" aria-disabled="false" aria-expanded="false" id="base-ui-_r_l_" tabIndex="0">
                      {"How do updates reach our codebase?"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                </AccordionItem>
              </CardContent>
            </Card>
            <Card className="bg-card border border-border overflow-hidden p-0 ring-0 shadow-none" size="default">
              <CardContent className="p-0">
                <AccordionItem data-orientation="vertical" hidden="" index="6" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="6" data-closed="">
                    <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:bg-muted/40 hover:no-underline leading-6 px-5 py-4 text-base text-left tracking-tight transition-colors" type="button" value="production-ready" data-orientation="vertical" hidden="" index="6" aria-disabled="false" aria-expanded="false" id="base-ui-_r_o_" tabIndex="0">
                      {"Will an update overwrite our changes?"}
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                </AccordionItem>
              </CardContent>
            </Card>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
