import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="bg-muted/30 flex items-start justify-center min-h-svh w-full">
      <section className="flex flex-col gap-10 items-center max-w-4xl mx-auto px-6 py-14 sm:py-16 w-full" aria-labelledby="faq-2-title">
        <div className="flex flex-col gap-4 items-center max-w-2xl text-center">
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
            {"FAQs"}
          </Badge>
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold sm:text-3xl text-2xl text-balance text-foreground tracking-tight" id="faq-2-title">
              {"Questions Teams Ask"}
            </h2>
            <p className="max-w-sm text-balance text-muted-foreground text-sm">
              {"Straight answers about adapting, owning, and shipping NeUI blocks to production."}
            </p>
          </div>
        </div>
        <Accordion className="gap-x-10 grid grid-cols-1 md:grid-cols-2" data-orientation="vertical" dir="ltr" role="region">
          <div className="flex flex-col">
            <AccordionItem className="border-b border-border/60 data-open:bg-transparent last:border-b-0" data-orientation="vertical" index="0" data-open="">
              <h3 className="flex" data-orientation="vertical" data-index="0" data-open="">
                <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 py-4 text-[15px] text-left tracking-tight" type="button" value="client-projects,framework-lock" data-orientation="vertical" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_1_" aria-expanded="true" id="base-ui-_r_2_" tabIndex={0} extracted="1">
                  <span className="text-balance">
                    {"Can I ship these blocks in client products?"}
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
                <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-6 pb-4 text-muted-foreground text-pretty text-sm">
                  <p>
                    {"These blocks ship as production React surfaces, so your team adapts copy, tokens, and data without rebuilding the interaction model from scratch."}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-border/60 data-open:bg-transparent last:border-b-0" data-orientation="vertical" hidden="" index="1" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="1" data-closed="">
                <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 py-4 text-[15px] text-left tracking-tight" type="button" value="client-projects,framework-lock" data-orientation="vertical" hidden="" index="1" aria-disabled="false" aria-expanded="false" id="base-ui-_r_5_" tabIndex={0}>
                  <span className="text-balance">
                    {"How much work is needed to match our brand?"}
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
            <AccordionItem className="border-b border-border/60 data-open:bg-transparent last:border-b-0" data-orientation="vertical" hidden="" index="2" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="2" data-closed="">
                <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 py-4 text-[15px] text-left tracking-tight" type="button" value="client-projects,framework-lock" data-orientation="vertical" hidden="" index="2" aria-disabled="false" aria-expanded="false" id="base-ui-_r_8_" tabIndex={0}>
                  <span className="text-balance">
                    {"What happens when our content gets longer?"}
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
          </div>
          <div className="flex flex-col">
            <AccordionItem className="border-b border-border/60 data-open:bg-transparent last:border-b-0" data-orientation="vertical" index="3" data-open="">
              <h3 className="flex" data-orientation="vertical" data-index="3" data-open="">
                <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 py-4 text-[15px] text-left tracking-tight" type="button" value="client-projects,framework-lock" data-orientation="vertical" index="3" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_a_" aria-expanded="true" id="base-ui-_r_b_" tabIndex={0}>
                  <span className="text-balance">
                    {"Are the blocks locked to a single app framework?"}
                  </span>
                  <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </AccordionTrigger>
              </h3>
              <AccordionContent data-orientation="vertical" index="3" data-open="" id="base-ui-_r_a_" aria-labelledby="base-ui-_r_b_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-6 pb-4 text-muted-foreground text-pretty text-sm">
                  <p>
                    {"No. Registry blocks avoid Next runtime primitives and use portable React, shadcn components, and local demo data that can be swapped for your stack."}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-border/60 data-open:bg-transparent last:border-b-0" data-orientation="vertical" hidden="" index="4" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="4" data-closed="">
                <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 py-4 text-[15px] text-left tracking-tight" type="button" value="client-projects,framework-lock" data-orientation="vertical" hidden="" index="4" aria-disabled="false" aria-expanded="false" id="base-ui-_r_e_" tabIndex={0}>
                  <span className="text-balance">
                    {"Will updates overwrite our custom changes?"}
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
            <AccordionItem className="border-b border-border/60 data-open:bg-transparent last:border-b-0" data-orientation="vertical" hidden="" index="5" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="5" data-closed="">
                <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 py-4 text-[15px] text-left tracking-tight" type="button" value="client-projects,framework-lock" data-orientation="vertical" hidden="" index="5" aria-disabled="false" aria-expanded="false" id="base-ui-_r_h_" tabIndex={0}>
                  <span className="text-balance">
                    {"Can designers review the same source engineers use?"}
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
          </div>
        </Accordion>
        <Frame className="w-full" spacing="lg">
          <FramePanel className="flex flex-col gap-4 isolate items-center sm:flex-row sm:gap-6 sm:justify-between sm:text-left text-center">
            <div className="[--cta-dot-fill:var(--color-foreground)] [--cta-dot-opacity:0.12] absolute dark:[--cta-dot-opacity:0.2] inset-0 pointer-events-none z-0" aria-hidden="true">
              <svg className="size-full" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: "var(--cta-dot-opacity)"}}>
                <defs>
                  <pattern id="_r_i_-pattern" patternUnits="userSpaceOnUse" width={48} height={48} viewBox="0 0 48 48">
                    <g fill="var(--cta-dot-fill)">
                      <rect x={0} y={0} width={2} height={2} fillOpacity={0.216}></rect>
                      <rect x={4} y={0} width={2} height={2} fillOpacity={0.489}></rect>
                      <rect x={8} y={0} width={2} height={2} fillOpacity={0.366}></rect>
                      <rect x={12} y={0} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={16} y={0} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={20} y={0} width={2} height={2} fillOpacity={0.129}></rect>
                      <rect x={24} y={0} width={2} height={2} fillOpacity={0.431}></rect>
                      <rect x={28} y={0} width={2} height={2} fillOpacity={0.142}></rect>
                      <rect x={32} y={0} width={2} height={2} fillOpacity={0.288}></rect>
                      <rect x={36} y={0} width={2} height={2} fillOpacity={0.144}></rect>
                      <rect x={40} y={0} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={44} y={0} width={2} height={2} fillOpacity={0.214}></rect>
                      <rect x={0} y={4} width={2} height={2} fillOpacity={0.4}></rect>
                      <rect x={4} y={4} width={2} height={2} fillOpacity={0.13}></rect>
                      <rect x={8} y={4} width={2} height={2} fillOpacity={0.498}></rect>
                      <rect x={12} y={4} width={2} height={2} fillOpacity={0.473}></rect>
                      <rect x={16} y={4} width={2} height={2} fillOpacity={0.386}></rect>
                      <rect x={20} y={4} width={2} height={2} fillOpacity={0.248}></rect>
                      <rect x={24} y={4} width={2} height={2} fillOpacity={0.168}></rect>
                      <rect x={28} y={4} width={2} height={2} fillOpacity={0.193}></rect>
                      <rect x={32} y={4} width={2} height={2} fillOpacity={0.528}></rect>
                      <rect x={36} y={4} width={2} height={2} fillOpacity={0.307}></rect>
                      <rect x={40} y={4} width={2} height={2} fillOpacity={0.314}></rect>
                      <rect x={44} y={4} width={2} height={2} fillOpacity={0.444}></rect>
                      <rect x={0} y={8} width={2} height={2} fillOpacity={0.33}></rect>
                      <rect x={4} y={8} width={2} height={2} fillOpacity={0.438}></rect>
                      <rect x={8} y={8} width={2} height={2} fillOpacity={0.477}></rect>
                      <rect x={12} y={8} width={2} height={2} fillOpacity={0.434}></rect>
                      <rect x={16} y={8} width={2} height={2} fillOpacity={0.47}></rect>
                      <rect x={20} y={8} width={2} height={2} fillOpacity={0.383}></rect>
                      <rect x={24} y={8} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={28} y={8} width={2} height={2} fillOpacity={0.287}></rect>
                      <rect x={32} y={8} width={2} height={2} fillOpacity={0.346}></rect>
                      <rect x={36} y={8} width={2} height={2} fillOpacity={0.52}></rect>
                      <rect x={40} y={8} width={2} height={2} fillOpacity={0.524}></rect>
                      <rect x={44} y={8} width={2} height={2} fillOpacity={0.126}></rect>
                      <rect x={0} y={12} width={2} height={2} fillOpacity={0.259}></rect>
                      <rect x={4} y={12} width={2} height={2} fillOpacity={0.281}></rect>
                      <rect x={8} y={12} width={2} height={2} fillOpacity={0.311}></rect>
                      <rect x={12} y={12} width={2} height={2} fillOpacity={0.212}></rect>
                      <rect x={16} y={12} width={2} height={2} fillOpacity={0.524}></rect>
                      <rect x={20} y={12} width={2} height={2} fillOpacity={0.353}></rect>
                      <rect x={24} y={12} width={2} height={2} fillOpacity={0.34}></rect>
                      <rect x={28} y={12} width={2} height={2} fillOpacity={0.417}></rect>
                      <rect x={32} y={12} width={2} height={2} fillOpacity={0.258}></rect>
                      <rect x={36} y={12} width={2} height={2} fillOpacity={0.158}></rect>
                      <rect x={40} y={12} width={2} height={2} fillOpacity={0.388}></rect>
                      <rect x={44} y={12} width={2} height={2} fillOpacity={0.184}></rect>
                      <rect x={0} y={16} width={2} height={2} fillOpacity={0.491}></rect>
                      <rect x={4} y={16} width={2} height={2} fillOpacity={0.417}></rect>
                      <rect x={8} y={16} width={2} height={2} fillOpacity={0.231}></rect>
                      <rect x={12} y={16} width={2} height={2} fillOpacity={0.209}></rect>
                      <rect x={16} y={16} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={20} y={16} width={2} height={2} fillOpacity={0.287}></rect>
                      <rect x={24} y={16} width={2} height={2} fillOpacity={0.353}></rect>
                      <rect x={28} y={16} width={2} height={2} fillOpacity={0.513}></rect>
                      <rect x={32} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                      <rect x={36} y={16} width={2} height={2} fillOpacity={0.455}></rect>
                      <rect x={40} y={16} width={2} height={2} fillOpacity={0.483}></rect>
                      <rect x={44} y={16} width={2} height={2} fillOpacity={0.189}></rect>
                      <rect x={0} y={20} width={2} height={2} fillOpacity={0.264}></rect>
                      <rect x={4} y={20} width={2} height={2} fillOpacity={0.295}></rect>
                      <rect x={8} y={20} width={2} height={2} fillOpacity={0.51}></rect>
                      <rect x={12} y={20} width={2} height={2} fillOpacity={0.305}></rect>
                      <rect x={16} y={20} width={2} height={2} fillOpacity={0.438}></rect>
                      <rect x={20} y={20} width={2} height={2} fillOpacity={0.289}></rect>
                      <rect x={24} y={20} width={2} height={2} fillOpacity={0.322}></rect>
                      <rect x={28} y={20} width={2} height={2} fillOpacity={0.196}></rect>
                      <rect x={32} y={20} width={2} height={2} fillOpacity={0.486}></rect>
                      <rect x={36} y={20} width={2} height={2} fillOpacity={0.388}></rect>
                      <rect x={40} y={20} width={2} height={2} fillOpacity={0.489}></rect>
                      <rect x={44} y={20} width={2} height={2} fillOpacity={0.208}></rect>
                      <rect x={0} y={24} width={2} height={2} fillOpacity={0.239}></rect>
                      <rect x={4} y={24} width={2} height={2} fillOpacity={0.463}></rect>
                      <rect x={8} y={24} width={2} height={2} fillOpacity={0.539}></rect>
                      <rect x={12} y={24} width={2} height={2} fillOpacity={0.408}></rect>
                      <rect x={16} y={24} width={2} height={2} fillOpacity={0.527}></rect>
                      <rect x={20} y={24} width={2} height={2} fillOpacity={0.357}></rect>
                      <rect x={24} y={24} width={2} height={2} fillOpacity={0.362}></rect>
                      <rect x={28} y={24} width={2} height={2} fillOpacity={0.151}></rect>
                      <rect x={32} y={24} width={2} height={2} fillOpacity={0.324}></rect>
                      <rect x={36} y={24} width={2} height={2} fillOpacity={0.347}></rect>
                      <rect x={40} y={24} width={2} height={2} fillOpacity={0.299}></rect>
                      <rect x={44} y={24} width={2} height={2} fillOpacity={0.127}></rect>
                      <rect x={0} y={28} width={2} height={2} fillOpacity={0.476}></rect>
                      <rect x={4} y={28} width={2} height={2} fillOpacity={0.461}></rect>
                      <rect x={8} y={28} width={2} height={2} fillOpacity={0.377}></rect>
                      <rect x={12} y={28} width={2} height={2} fillOpacity={0.415}></rect>
                      <rect x={16} y={28} width={2} height={2} fillOpacity={0.217}></rect>
                      <rect x={20} y={28} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={24} y={28} width={2} height={2} fillOpacity={0.258}></rect>
                      <rect x={28} y={28} width={2} height={2} fillOpacity={0.296}></rect>
                      <rect x={32} y={28} width={2} height={2} fillOpacity={0.276}></rect>
                      <rect x={36} y={28} width={2} height={2} fillOpacity={0.182}></rect>
                      <rect x={40} y={28} width={2} height={2} fillOpacity={0.422}></rect>
                      <rect x={44} y={28} width={2} height={2} fillOpacity={0.392}></rect>
                      <rect x={0} y={32} width={2} height={2} fillOpacity={0.273}></rect>
                      <rect x={4} y={32} width={2} height={2} fillOpacity={0.143}></rect>
                      <rect x={8} y={32} width={2} height={2} fillOpacity={0.338}></rect>
                      <rect x={12} y={32} width={2} height={2} fillOpacity={0.264}></rect>
                      <rect x={16} y={32} width={2} height={2} fillOpacity={0.218}></rect>
                      <rect x={20} y={32} width={2} height={2} fillOpacity={0.29}></rect>
                      <rect x={24} y={32} width={2} height={2} fillOpacity={0.336}></rect>
                      <rect x={28} y={32} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={32} y={32} width={2} height={2} fillOpacity={0.514}></rect>
                      <rect x={36} y={32} width={2} height={2} fillOpacity={0.289}></rect>
                      <rect x={40} y={32} width={2} height={2} fillOpacity={0.25}></rect>
                      <rect x={44} y={32} width={2} height={2} fillOpacity={0.507}></rect>
                      <rect x={0} y={36} width={2} height={2} fillOpacity={0.346}></rect>
                      <rect x={4} y={36} width={2} height={2} fillOpacity={0.208}></rect>
                      <rect x={8} y={36} width={2} height={2} fillOpacity={0.313}></rect>
                      <rect x={12} y={36} width={2} height={2} fillOpacity={0.365}></rect>
                      <rect x={16} y={36} width={2} height={2} fillOpacity={0.491}></rect>
                      <rect x={20} y={36} width={2} height={2} fillOpacity={0.121}></rect>
                      <rect x={24} y={36} width={2} height={2} fillOpacity={0.472}></rect>
                      <rect x={28} y={36} width={2} height={2} fillOpacity={0.281}></rect>
                      <rect x={32} y={36} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={36} y={36} width={2} height={2} fillOpacity={0.33}></rect>
                      <rect x={40} y={36} width={2} height={2} fillOpacity={0.463}></rect>
                      <rect x={44} y={36} width={2} height={2} fillOpacity={0.447}></rect>
                      <rect x={0} y={40} width={2} height={2} fillOpacity={0.217}></rect>
                      <rect x={4} y={40} width={2} height={2} fillOpacity={0.467}></rect>
                      <rect x={8} y={40} width={2} height={2} fillOpacity={0.297}></rect>
                      <rect x={12} y={40} width={2} height={2} fillOpacity={0.303}></rect>
                      <rect x={16} y={40} width={2} height={2} fillOpacity={0.497}></rect>
                      <rect x={20} y={40} width={2} height={2} fillOpacity={0.201}></rect>
                      <rect x={24} y={40} width={2} height={2} fillOpacity={0.5}></rect>
                      <rect x={28} y={40} width={2} height={2} fillOpacity={0.458}></rect>
                      <rect x={32} y={40} width={2} height={2} fillOpacity={0.165}></rect>
                      <rect x={36} y={40} width={2} height={2} fillOpacity={0.36}></rect>
                      <rect x={40} y={40} width={2} height={2} fillOpacity={0.329}></rect>
                      <rect x={44} y={40} width={2} height={2} fillOpacity={0.419}></rect>
                      <rect x={0} y={44} width={2} height={2} fillOpacity={0.47}></rect>
                      <rect x={4} y={44} width={2} height={2} fillOpacity={0.161}></rect>
                      <rect x={8} y={44} width={2} height={2} fillOpacity={0.191}></rect>
                      <rect x={12} y={44} width={2} height={2} fillOpacity={0.341}></rect>
                      <rect x={16} y={44} width={2} height={2} fillOpacity={0.279}></rect>
                      <rect x={20} y={44} width={2} height={2} fillOpacity={0.387}></rect>
                      <rect x={24} y={44} width={2} height={2} fillOpacity={0.173}></rect>
                      <rect x={28} y={44} width={2} height={2} fillOpacity={0.537}></rect>
                      <rect x={32} y={44} width={2} height={2} fillOpacity={0.218}></rect>
                      <rect x={36} y={44} width={2} height={2} fillOpacity={0.368}></rect>
                      <rect x={40} y={44} width={2} height={2} fillOpacity={0.5}></rect>
                      <rect x={44} y={44} width={2} height={2} fillOpacity={0.414}></rect>
                    </g>
                  </pattern>
                  <lineargradient id="_r_i_-gradient" x1={0} y1={0} x2={0.6} y2={0.9}>
                    <stop stopColor="white"></stop>
                    <stop offset={0.55} stopColor="white"></stop>
                    <stop offset={1} stopColor="white" stopOpacity={0}></stop>
                  </lineargradient>
                  <mask id="_r_i_-mask" style={{maskType: "alpha"}}>
                    <rect width="100%" height="100%" fill="url(#_r_i_-gradient)"></rect>
                  </mask>
                </defs>
                <g mask="url(#_r_i_-mask)">
                  <rect width="100%" height="100%" fill="url(#_r_i_-pattern)"></rect>
                </g>
              </svg>
            </div>
            <div className="flex gap-3 items-center relative z-10">
              <span className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border flex items-center justify-center rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] shrink-0 size-10.5" aria-hidden="true">
                <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line">
                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  <path d="M7 11h10"></path>
                  <path d="M7 15h6"></path>
                  <path d="M7 7h8"></path>
                </svg>
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-foreground text-sm">
                  {"Still have a question?"}
                </p>
                <p className="leading-5 text-muted-foreground text-sm">
                  {"Bring your edge case to review and map it to one block and one owner."}
                </p>
              </div>
            </div>
            <Button className="relative z-10" href="#" role="button" tabIndex={0}>
              {"Book a review"}
            </Button>
          </FramePanel>
        </Frame>
      </section>
    </div>
  )
}
