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
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh w-full">
      <section className="lg:py-16 max-w-3xl mx-auto px-6 py-12 sm:py-14 w-full" aria-labelledby="faq-6-title">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold sm:text-4xl text-3xl text-balance text-foreground tracking-tight" id="faq-6-title">
            {"Questions, Answered"}
          </h2>
          <p className="leading-7 max-w-xl text-base text-muted-foreground text-pretty">
            {"Practical answers on production use, theming, licensing, and support."}
          </p>
        </div>
        <Frame className="mt-6" spacing="default">
          <FramePanel className="px-2 sm:px-4">
            <Accordion className="gap-0" data-orientation="vertical" dir="ltr" role="region">
              <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" index="0" data-open="">
                <h3 className="flex" data-orientation="vertical" data-index="0" data-open="">
                  <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 px-2 py-4 text-base text-left tracking-tight" type="button" value="production-use" data-orientation="vertical" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_1_" aria-expanded="true" id="base-ui-_r_2_" tabIndex={0} extracted="1">
                    <span className="min-w-0">
                      {"Are NeUI Blocks Ready For Production?"}
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
                  <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-7 pb-4 px-2 text-base text-muted-foreground text-pretty">
                    <p>
                      {"Yes. Each block ships as a finished React surface with responsive layout, focus states, and overflow handling already reviewed. Most teams paste a block into an existing route, swap the demo data for their model, and tighten the copy before launch."}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" hidden="" index="1" data-closed="">
                <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="1" data-closed="">
                  <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 px-2 py-4 text-base text-left tracking-tight" type="button" value="production-use" data-orientation="vertical" hidden="" index="1" aria-disabled="false" aria-expanded="false" id="base-ui-_r_5_" tabIndex={0}>
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
              <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" hidden="" index="2" data-closed="">
                <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="2" data-closed="">
                  <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 px-2 py-4 text-base text-left tracking-tight" type="button" value="production-use" data-orientation="vertical" hidden="" index="2" aria-disabled="false" aria-expanded="false" id="base-ui-_r_8_" tabIndex={0}>
                    <span className="min-w-0">
                      {"How Do Blocks Pick Up Our Theme Tokens?"}
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
              <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" hidden="" index="3" data-closed="">
                <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="3" data-closed="">
                  <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 px-2 py-4 text-base text-left tracking-tight" type="button" value="production-use" data-orientation="vertical" hidden="" index="3" aria-disabled="false" aria-expanded="false" id="base-ui-_r_b_" tabIndex={0}>
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
              <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" hidden="" index="4" data-closed="">
                <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="4" data-closed="">
                  <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 px-2 py-4 text-base text-left tracking-tight" type="button" value="production-use" data-orientation="vertical" hidden="" index="4" aria-disabled="false" aria-expanded="false" id="base-ui-_r_e_" tabIndex={0}>
                    <span className="min-w-0">
                      {"How Do Updates Reach Our Codebase?"}
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
              <AccordionItem className="border-b border-border/60 last:border-b-0" data-orientation="vertical" hidden="" index="5" data-closed="">
                <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="5" data-closed="">
                  <AccordionTrigger className="[&>svg]:my-auto font-semibold gap-4 hover:no-underline leading-6 px-2 py-4 text-base text-left tracking-tight" type="button" value="production-use" data-orientation="vertical" hidden="" index="5" aria-disabled="false" aria-expanded="false" id="base-ui-_r_h_" tabIndex={0}>
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
          </FramePanel>
          <FramePanel className="bg-muted/40 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-3 items-start">
              <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="lucide lucide-message-square-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareTextIcon" tabler="IconMessageDots" hugeicons="Comment01Icon" phosphor="ChatTextIcon" remixicon="RiMessage3Line" aria-hidden="true">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    <path d="M7 11h10"></path>
                    <path d="M7 15h6"></path>
                    <path d="M7 7h8"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <div className="min-w-0">
                <p className="font-semibold text-foreground text-sm">
                  {"Still Have A Question?"}
                </p>
                <p className="leading-6 text-muted-foreground text-pretty text-sm">
                  {"Bring your edge case to the team and we will map it to one block and one owner."}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 items-center shrink-0">
              <Button href="#" role="button" tabIndex={0}>
                <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
                {"Read The Docs"}
              </Button>
              <Button href="#" role="button" tabIndex={0}>
                <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x={2} y={4} width={20} height={16} rx={2}></rect>
                </svg>
                {"Contact Support"}
              </Button>
            </div>
          </FramePanel>
        </Frame>
      </section>
    </div>
  )
}
