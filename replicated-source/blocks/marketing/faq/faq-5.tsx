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
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh w-full">
      <section className="max-w-6xl md:px-8 mx-auto px-6 py-12 sm:py-16 w-full" aria-labelledby="faq-5-title">
        <div className="flex flex-col gap-3 max-w-2xl">
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
            <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            {"FAQ"}
          </Badge>
          <h2 className="font-semibold sm:text-3xl text-2xl text-balance text-foreground tracking-tight" id="faq-5-title">
            {"Everything Before Launch"}
          </h2>
          <p className="max-w-md text-base text-muted-foreground text-pretty">
            {"What teams ask when adopting NeUI blocks in production."}
          </p>
        </div>
        <div className="gap-6 grid items-start lg:gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,0.85fr)] lg:mt-8 mt-6">
          <Card className="p-0" size="default">
            <CardContent className="px-6 py-2">
              <Accordion data-orientation="vertical" dir="ltr" role="region">
                <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" index="0" data-open="">
                  <h3 className="flex" data-orientation="vertical" data-index="0" data-open="">
                    <AccordionTrigger className="[&>svg]:my-auto font-medium gap-4 hover:no-underline py-4 text-base text-left" type="button" value="production-use" data-orientation="vertical" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_1_" aria-expanded="true" id="base-ui-_r_2_" tabIndex="0" extracted="1">
                      <span className="min-w-0 text-pretty">
                        {"How Do Teams Move a Block Into Production?"}
                      </span>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                  <AccordionContent data-orientation="vertical" index="0" data-open="" id="base-ui-_r_1_" aria-labelledby="base-ui-_r_2_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                    <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-6 pb-4 text-muted-foreground text-pretty text-sm">
                      <p>
                        {"Copy the block into a route, swap the demo records for your data, and tighten the copy to match the surface. Layout, spacing, and focus states are already reviewed across breakpoints, so the first commit is usually content, not structure."}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" hidden="" index="1" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="1" data-closed="">
                    <AccordionTrigger className="[&>svg]:my-auto font-medium gap-4 hover:no-underline py-4 text-base text-left" type="button" value="production-use" data-orientation="vertical" hidden="" index="1" aria-disabled="false" aria-expanded="false" id="base-ui-_r_5_" tabIndex="0">
                      <span className="min-w-0 text-pretty">
                        {"Can We Customize the Underlying shadcn Primitives?"}
                      </span>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                </AccordionItem>
                <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" hidden="" index="2" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="2" data-closed="">
                    <AccordionTrigger className="[&>svg]:my-auto font-medium gap-4 hover:no-underline py-4 text-base text-left" type="button" value="production-use" data-orientation="vertical" hidden="" index="2" aria-disabled="false" aria-expanded="false" id="base-ui-_r_8_" tabIndex="0">
                      <span className="min-w-0 text-pretty">
                        {"How Does Theming Work With Our Design Tokens?"}
                      </span>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                </AccordionItem>
                <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" hidden="" index="3" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="3" data-closed="">
                    <AccordionTrigger className="[&>svg]:my-auto font-medium gap-4 hover:no-underline py-4 text-base text-left" type="button" value="production-use" data-orientation="vertical" hidden="" index="3" aria-disabled="false" aria-expanded="false" id="base-ui-_r_b_" tabIndex="0">
                      <span className="min-w-0 text-pretty">
                        {"What Does a Pro License Include?"}
                      </span>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                </AccordionItem>
                <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" hidden="" index="4" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="4" data-closed="">
                    <AccordionTrigger className="[&>svg]:my-auto font-medium gap-4 hover:no-underline py-4 text-base text-left" type="button" value="production-use" data-orientation="vertical" hidden="" index="4" aria-disabled="false" aria-expanded="false" id="base-ui-_r_e_" tabIndex="0">
                      <span className="min-w-0 text-pretty">
                        {"Will Updates Overwrite Our Customizations?"}
                      </span>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                </AccordionItem>
                <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" hidden="" index="5" data-closed="">
                  <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="5" data-closed="">
                    <AccordionTrigger className="[&>svg]:my-auto font-medium gap-4 hover:no-underline py-4 text-base text-left" type="button" value="production-use" data-orientation="vertical" hidden="" index="5" aria-disabled="false" aria-expanded="false" id="base-ui-_r_h_" tabIndex="0">
                      <span className="min-w-0 text-pretty">
                        {"Where Do We Go for Implementation Help?"}
                      </span>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                      <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                        <path d="m18 15-6-6-6 6"></path>
                      </svg>
                    </AccordionTrigger>
                  </h3>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <aside className="lg:sticky lg:top-8">
            <Card className="bg-muted/40 border-dashed gap-4 p-6 shadow-none" size="default">
              <CardContent className="flex flex-col gap-4 p-0">
                <span className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex items-center justify-center rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" aria-hidden="true">
                  <svg className="lucide lucide-life-buoy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="LifeBuoyIcon" tabler="IconLifebuoy" hugeicons="LifebuoyIcon" phosphor="LifebuoyIcon" remixicon="RiLifebuoyLine">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m4.93 4.93 4.24 4.24"></path>
                    <path d="m14.83 9.17 4.24-4.24"></path>
                    <path d="m14.83 14.83 4.24 4.24"></path>
                    <path d="m9.17 14.83-4.24 4.24"></path>
                    <circle cx="12" cy="12" r="4"></circle>
                  </svg>
                </span>
                <div className="flex flex-col gap-1.5">
                  <p className="font-semibold text-base text-foreground tracking-tight">
                    {"Still Have Questions?"}
                  </p>
                  <p className="leading-6 text-muted-foreground text-pretty text-sm">
                    {"Tell us your stack and timeline. A real engineer replies within a business day."}
                  </p>
                </div>
                <Button className="w-full" href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    <path d="M7 11h10"></path>
                    <path d="M7 15h6"></path>
                    <path d="M7 7h8"></path>
                  </svg>
                  {"Talk to Support"}
                </Button>
                <div className="border-border/60 border-t flex gap-2.5 items-center pt-4 text-sm">
                  <svg className="lucide lucide-mail size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  <span className="text-muted-foreground">
                    {"Prefer email?"}
                    <a className="focus-visible:outline-none focus-visible:underline font-medium hover:underline text-foreground underline-offset-3" href="#">
                      {"support@neui.dev"}
                    </a>
                  </span>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </div>
  )
}
