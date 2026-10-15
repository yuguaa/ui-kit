import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh w-full">
      <section className="lg:py-24 max-w-3xl mx-auto px-6 py-16 sm:py-20 w-full" aria-labelledby="faq-4-title">
        <div className="flex flex-col gap-4 items-center max-w-2xl mx-auto text-center">
          <span className="font-medium gap-2 inline-flex items-center text-muted-foreground text-xs tracking-[0.18em] uppercase">
            <svg className="lucide lucide-circle-question-mark size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
              <circle cx={12} cy={12} r={10}></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            {"Support"}
          </span>
          <h2 className="font-semibold sm:text-4xl text-3xl text-balance text-foreground tracking-tight" id="faq-4-title">
            {"Questions, Answered"}
          </h2>
          <p className="leading-7 max-w-xl text-balance text-base text-muted-foreground">
            {"The practical details teams check before building production screens with NeUI blocks, from customizing primitives to ongoing updates."}
          </p>
        </div>
        <Accordion className="gap-0 mt-12 sm:mt-14" data-orientation="vertical" dir="ltr" role="region">
          <AccordionItem className="border-border/60 first:border-t last:border-b" data-orientation="vertical" index="0" data-open="">
            <h3 className="flex" data-orientation="vertical" data-index="0" data-open="">
              <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-6 hover:no-underline leading-6 py-5 sm:text-lg text-base text-left tracking-tight" type="button" value="production" data-orientation="vertical" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_1_" aria-expanded="true" id="base-ui-_r_2_" tabIndex={0} extracted="1">
                <span className="min-w-0">
                  {"How Do We Move A Block Into Production?"}
                </span>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </AccordionTrigger>
            </h3>
            <AccordionContent data-orientation="vertical" index="0" data-open="" id="base-ui-_r_1_" aria-labelledby="base-ui-_r_2_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
              <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-7 max-w-xl pb-5 text-base text-muted-foreground text-pretty">
                {"Copy the block into a route, swap the demo data for your own, and tighten the copy for your product. The markup is already responsive and reads from theme tokens, so most of the work is content, not layout."}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="border-border/60 first:border-t last:border-b" data-orientation="vertical" hidden="" index="1" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="1" data-closed="">
              <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-6 hover:no-underline leading-6 py-5 sm:text-lg text-base text-left tracking-tight" type="button" value="production" data-orientation="vertical" hidden="" index="1" aria-disabled="false" aria-expanded="false" id="base-ui-_r_5_" tabIndex={0}>
                <span className="min-w-0">
                  {"Can We Customize The shadcn Primitives?"}
                </span>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </AccordionTrigger>
            </h3>
          </AccordionItem>
          <AccordionItem className="border-border/60 first:border-t last:border-b" data-orientation="vertical" hidden="" index="2" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="2" data-closed="">
              <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-6 hover:no-underline leading-6 py-5 sm:text-lg text-base text-left tracking-tight" type="button" value="production" data-orientation="vertical" hidden="" index="2" aria-disabled="false" aria-expanded="false" id="base-ui-_r_8_" tabIndex={0}>
                <span className="min-w-0">
                  {"How Does Theming Work Across Blocks?"}
                </span>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </AccordionTrigger>
            </h3>
          </AccordionItem>
          <AccordionItem className="border-border/60 first:border-t last:border-b" data-orientation="vertical" hidden="" index="3" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="3" data-closed="">
              <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-6 hover:no-underline leading-6 py-5 sm:text-lg text-base text-left tracking-tight" type="button" value="production" data-orientation="vertical" hidden="" index="3" aria-disabled="false" aria-expanded="false" id="base-ui-_r_b_" tabIndex={0}>
                <span className="min-w-0">
                  {"Will A Block Fit Our Existing App Shell?"}
                </span>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </AccordionTrigger>
            </h3>
          </AccordionItem>
          <AccordionItem className="border-border/60 first:border-t last:border-b" data-orientation="vertical" hidden="" index="4" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="4" data-closed="">
              <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-6 hover:no-underline leading-6 py-5 sm:text-lg text-base text-left tracking-tight" type="button" value="production" data-orientation="vertical" hidden="" index="4" aria-disabled="false" aria-expanded="false" id="base-ui-_r_e_" tabIndex={0}>
                <span className="min-w-0">
                  {"What Does A Pro License Include?"}
                </span>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </AccordionTrigger>
            </h3>
          </AccordionItem>
          <AccordionItem className="border-border/60 first:border-t last:border-b" data-orientation="vertical" hidden="" index="5" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="5" data-closed="">
              <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-6 hover:no-underline leading-6 py-5 sm:text-lg text-base text-left tracking-tight" type="button" value="production" data-orientation="vertical" hidden="" index="5" aria-disabled="false" aria-expanded="false" id="base-ui-_r_h_" tabIndex={0}>
                <span className="min-w-0">
                  {"How Do Block Updates Reach Our Codebase?"}
                </span>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </AccordionTrigger>
            </h3>
          </AccordionItem>
          <AccordionItem className="border-border/60 first:border-t last:border-b" data-orientation="vertical" hidden="" index="6" data-closed="">
            <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="6" data-closed="">
              <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-6 hover:no-underline leading-6 py-5 sm:text-lg text-base text-left tracking-tight" type="button" value="production" data-orientation="vertical" hidden="" index="6" aria-disabled="false" aria-expanded="false" id="base-ui-_r_k_" tabIndex={0}>
                <span className="min-w-0">
                  {"Where Do We Get Implementation Help?"}
                </span>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
                <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                  <path d="m18 15-6-6-6 6"></path>
                </svg>
              </AccordionTrigger>
            </h3>
          </AccordionItem>
        </Accordion>
        <p className="mt-10 text-center text-muted-foreground text-sm">
          {"Still have a question?"}
          <a className="focus-visible:outline-none focus-visible:underline font-medium gap-1 group hover:underline inline-flex items-center text-foreground underline-offset-4" href="#">
            {"Talk to the team"}
            <svg className="duration-200 group-hover:translate-x-0.5 lucide lucide-arrow-right size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </p>
      </section>
    </div>
  )
}
