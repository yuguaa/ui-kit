import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { Label } from "@/registry/bases/base/ui/label"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Slider } from "@/registry/bases/base/ui/slider"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh p-6 w-full">
      <aside className="max-w-xs w-full" aria-label="Product filters">
        <Card className="gap-0 overflow-hidden p-0" size="default">
          <div className="flex gap-3 items-center justify-between px-5 py-4">
            <h2 className="font-semibold text-foreground text-sm tracking-tight">
              {"Filters"}
            </h2>
            <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex="0" extracted="1">
              {"Clear all"}
            </Button>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="flex flex-wrap gap-1.5 px-5 py-4" aria-label="Active filters">
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center px-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter Women">
              {"Women"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center px-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter Outerwear">
              {"Outerwear"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center px-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter Cotton">
              {"Cotton"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center px-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter Black">
              <span className="border border-border/60 inline-block rounded-full shrink-0 size-2.5" aria-hidden="true" style={{backgroundColor: "oklch(0.205 0 0)"}}></span>
              {"Black"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center px-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter Northline">
              {"Northline"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center px-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter 4★ & up">
              {"4★ & up"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center px-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter $40 − $180">
              {"$40 − $180"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center px-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter In stock">
              {"In stock"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <Accordion className="gap-0" data-orientation="vertical" dir="ltr" role="region">
            <AccordionItem className="border-b border-border/70 border-dashed last:border-b-0" data-orientation="vertical" hidden="" index="0" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="0" data-closed="">
                <AccordionTrigger className="font-semibold hover:no-underline items-center px-5 py-3.5 text-sm tracking-tight" type="button" value="category,price" data-orientation="vertical" hidden="" aria-disabled="false" aria-expanded="false" id="base-ui-_r_2_" tabIndex="0">
                  <span className="inline-flex items-center">
                    {"Department"}
                    <span className="bg-foreground font-semibold h-4 inline-flex items-center justify-center min-w-4 ml-1.5 px-1 rounded-full tabular-nums text-[0.625rem] text-background">
                      {"1"}
                    </span>
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
            <AccordionItem className="border-b border-border/70 border-dashed last:border-b-0" data-orientation="vertical" index="1" data-open="">
              <h3 className="flex" data-orientation="vertical" data-index="1" data-open="">
                <AccordionTrigger className="font-semibold hover:no-underline items-center px-5 py-3.5 text-sm tracking-tight" type="button" value="category,price" data-orientation="vertical" index="1" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_4_" aria-expanded="true" id="base-ui-_r_5_" tabIndex="0">
                  <span className="inline-flex items-center">
                    {"Category"}
                    <span className="bg-foreground font-semibold h-4 inline-flex items-center justify-center min-w-4 ml-1.5 px-1 rounded-full tabular-nums text-[0.625rem] text-background">
                      {"1"}
                    </span>
                  </span>
                  <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </AccordionTrigger>
              </h3>
              <AccordionContent data-orientation="vertical" index="1" data-open="" id="base-ui-_r_4_" aria-labelledby="base-ui-_r_5_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) pb-4 px-5">
                  <ul className="flex flex-col gap-2.5">
                    <li className="flex gap-2.5 items-center">
                      <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_6_" aria-checked="true" aria-labelledby="filter-6-category-outerwear-label">
                        <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                          <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                      </Checkbox>
                      <input id="filter-6-category-outerwear" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-6-category-outerwear" id="filter-6-category-outerwear-label">
                        <span className="truncate">
                          {"Outerwear"}
                        </span>
                        <span className="tabular-nums text-muted-foreground">
                          {"128"}
                        </span>
                      </Label>
                    </li>
                    <li className="flex gap-2.5 items-center">
                      <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="false" aria-labelledby="filter-6-category-knitwear-label"></Checkbox>
                      <input id="filter-6-category-knitwear" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-6-category-knitwear" id="filter-6-category-knitwear-label">
                        <span className="truncate">
                          {"Knitwear"}
                        </span>
                        <span className="tabular-nums text-muted-foreground">
                          {"84"}
                        </span>
                      </Label>
                    </li>
                    <li className="flex gap-2.5 items-center">
                      <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" aria-labelledby="filter-6-category-tops-label"></Checkbox>
                      <input id="filter-6-category-tops" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-6-category-tops" id="filter-6-category-tops-label">
                        <span className="truncate">
                          {"Tops"}
                        </span>
                        <span className="tabular-nums text-muted-foreground">
                          {"156"}
                        </span>
                      </Label>
                    </li>
                    <li className="flex gap-2.5 items-center">
                      <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_f_" aria-checked="false" aria-labelledby="filter-6-category-bottoms-label"></Checkbox>
                      <input id="filter-6-category-bottoms" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-6-category-bottoms" id="filter-6-category-bottoms-label">
                        <span className="truncate">
                          {"Bottoms"}
                        </span>
                        <span className="tabular-nums text-muted-foreground">
                          {"92"}
                        </span>
                      </Label>
                    </li>
                    <li className="flex gap-2.5 items-center">
                      <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_i_" aria-checked="false" aria-labelledby="filter-6-category-dresses-label"></Checkbox>
                      <input id="filter-6-category-dresses" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-6-category-dresses" id="filter-6-category-dresses-label">
                        <span className="truncate">
                          {"Dresses"}
                        </span>
                        <span className="tabular-nums text-muted-foreground">
                          {"74"}
                        </span>
                      </Label>
                    </li>
                    <li className="flex gap-2.5 items-center">
                      <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_l_" aria-checked="false" aria-labelledby="filter-6-category-footwear-label"></Checkbox>
                      <input id="filter-6-category-footwear" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-6-category-footwear" id="filter-6-category-footwear-label">
                        <span className="truncate">
                          {"Footwear"}
                        </span>
                        <span className="tabular-nums text-muted-foreground">
                          {"67"}
                        </span>
                      </Label>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-border/70 border-dashed last:border-b-0" data-orientation="vertical" index="2" data-open="">
              <h3 className="flex" data-orientation="vertical" data-index="2" data-open="">
                <AccordionTrigger className="font-semibold hover:no-underline items-center px-5 py-3.5 text-sm tracking-tight" type="button" value="category,price" data-orientation="vertical" index="2" panelOpen="" aria-disabled="false" aria-controls="base-ui-_r_p_" aria-expanded="true" id="base-ui-_r_q_" tabIndex="0">
                  <span className="inline-flex items-center">
                    {"Price"}
                    <span className="bg-foreground font-semibold h-4 inline-flex items-center justify-center min-w-4 ml-1.5 px-1 rounded-full tabular-nums text-[0.625rem] text-background">
                      {"1"}
                    </span>
                  </span>
                  <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <svg className="cn-accordion-trigger-icon group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronUpIcon" tabler="IconChevronUp" hugeicons="ArrowUp01Icon" phosphor="CaretUpIcon" remixicon="RiArrowUpSLine">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </AccordionTrigger>
              </h3>
              <AccordionContent data-orientation="vertical" index="2" data-open="" id="base-ui-_r_p_" aria-labelledby="base-ui-_r_q_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 cn-accordion-content-inner data-ending-style:h-0 data-starting-style:h-0 flex flex-col gap-3 h-(--accordion-panel-height) pb-4 px-5">
                  <div className="flex font-medium gap-3 items-baseline justify-between tabular-nums text-xs">
                    <span className="font-semibold text-foreground">
                      {"$40"}
                    </span>
                    <span className="font-semibold text-foreground">
                      {"$180"}
                    </span>
                  </div>
                  <Slider data-orientation="horizontal" id="base-ui-_r_r_" role="group" aria-label="Price range">
                    <div className="cn-slider data-disabled:opacity-50 data-vertical:flex-col data-vertical:h-full data-vertical:w-auto flex items-center relative select-none touch-none w-full" data-orientation="horizontal" data-base-ui-slider-control="">
                      <div className="cn-slider-track grow overflow-hidden relative select-none" data-orientation="horizontal" style={{position: "relative"}}>
                        <div className="cn-slider-range data-horizontal:h-full data-vertical:w-full select-none" data-orientation="horizontal" data-base-ui-slider-indicator="" style={{position: "relative", height: "inherit", "--start-position": "18.0952380952381%", "--relative-size": "55.83333333333333%", insetInlineStart: "var(--start-position)", width: "var(--relative-size)"}}></div>
                      </div>
                      <div className="block cn-slider-thumb disabled:opacity-50 disabled:pointer-events-none select-none shrink-0" data-orientation="horizontal" data-index="0" id="base-ui-_r_s_" style={{"--position": "18.0952380952381%", position: "absolute", insetInlineStart: "var(--position)", top: "50%", translate: "-50% -50%"}}>
                        <input aria-orientation="horizontal" id="base-ui-_r_t_" max="240" min="0" step="5" type="range" value="40" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "100%", height: "100%", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} aria-valuenow="40" aria-valuetext="40 start range" />
                      </div>
                      <div className="block cn-slider-thumb disabled:opacity-50 disabled:pointer-events-none select-none shrink-0" data-orientation="horizontal" data-index="1" id="base-ui-_r_v_" style={{"--position": "73.92857142857143%", position: "absolute", insetInlineStart: "var(--position)", top: "50%", translate: "-50% -50%"}}>
                        <input aria-orientation="horizontal" id="base-ui-_r_10_" max="240" min="0" step="5" type="range" value="180" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "100%", height: "100%", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} aria-valuenow="180" aria-valuetext="180 end range" />
                      </div>
                    </div>
                  </Slider>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-border/70 border-dashed last:border-b-0" data-orientation="vertical" hidden="" index="3" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="3" data-closed="">
                <AccordionTrigger className="font-semibold hover:no-underline items-center px-5 py-3.5 text-sm tracking-tight" type="button" value="category,price" data-orientation="vertical" hidden="" index="3" aria-disabled="false" aria-expanded="false" id="base-ui-_r_14_" tabIndex="0">
                  <span className="inline-flex items-center">
                    {"Color"}
                    <span className="bg-foreground font-semibold h-4 inline-flex items-center justify-center min-w-4 ml-1.5 px-1 rounded-full tabular-nums text-[0.625rem] text-background">
                      {"1"}
                    </span>
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
            <AccordionItem className="border-b border-border/70 border-dashed last:border-b-0" data-orientation="vertical" hidden="" index="4" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="4" data-closed="">
                <AccordionTrigger className="font-semibold hover:no-underline items-center px-5 py-3.5 text-sm tracking-tight" type="button" value="category,price" data-orientation="vertical" hidden="" index="4" aria-disabled="false" aria-expanded="false" id="base-ui-_r_17_" tabIndex="0">
                  <span className="inline-flex items-center">
                    {"Size"}
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
            <AccordionItem className="border-b border-border/70 border-dashed last:border-b-0" data-orientation="vertical" hidden="" index="5" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="5" data-closed="">
                <AccordionTrigger className="font-semibold hover:no-underline items-center px-5 py-3.5 text-sm tracking-tight" type="button" value="category,price" data-orientation="vertical" hidden="" index="5" aria-disabled="false" aria-expanded="false" id="base-ui-_r_1a_" tabIndex="0">
                  <span className="inline-flex items-center">
                    {"Material"}
                    <span className="bg-foreground font-semibold h-4 inline-flex items-center justify-center min-w-4 ml-1.5 px-1 rounded-full tabular-nums text-[0.625rem] text-background">
                      {"1"}
                    </span>
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
            <AccordionItem className="border-b border-border/70 border-dashed last:border-b-0" data-orientation="vertical" hidden="" index="6" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="6" data-closed="">
                <AccordionTrigger className="font-semibold hover:no-underline items-center px-5 py-3.5 text-sm tracking-tight" type="button" value="category,price" data-orientation="vertical" hidden="" index="6" aria-disabled="false" aria-expanded="false" id="base-ui-_r_1d_" tabIndex="0">
                  <span className="inline-flex items-center">
                    {"Brand"}
                    <span className="bg-foreground font-semibold h-4 inline-flex items-center justify-center min-w-4 ml-1.5 px-1 rounded-full tabular-nums text-[0.625rem] text-background">
                      {"1"}
                    </span>
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
            <AccordionItem className="border-b border-border/70 border-dashed last:border-b-0" data-orientation="vertical" hidden="" index="7" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="7" data-closed="">
                <AccordionTrigger className="font-semibold hover:no-underline items-center px-5 py-3.5 text-sm tracking-tight" type="button" value="category,price" data-orientation="vertical" hidden="" index="7" aria-disabled="false" aria-expanded="false" id="base-ui-_r_1g_" tabIndex="0">
                  <span className="inline-flex items-center">
                    {"Rating"}
                    <span className="bg-foreground font-semibold h-4 inline-flex items-center justify-center min-w-4 ml-1.5 px-1 rounded-full tabular-nums text-[0.625rem] text-background">
                      {"1"}
                    </span>
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
            <AccordionItem className="border-b border-border/70 border-dashed last:border-b-0" data-orientation="vertical" hidden="" index="8" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="8" data-closed="">
                <AccordionTrigger className="font-semibold hover:no-underline items-center px-5 py-3.5 text-sm tracking-tight" type="button" value="category,price" data-orientation="vertical" hidden="" index="8" aria-disabled="false" aria-expanded="false" id="base-ui-_r_1j_" tabIndex="0">
                  <span className="inline-flex items-center">
                    {"Quick filters"}
                    <span className="bg-foreground font-semibold h-4 inline-flex items-center justify-center min-w-4 ml-1.5 px-1 rounded-full tabular-nums text-[0.625rem] text-background">
                      {"1"}
                    </span>
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
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="flex gap-2 items-center px-5 py-4">
            <Button className="flex-1" type="button" tabIndex="0">
              {"Apply filters"}
            </Button>
            <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex="0">
              {"Reset"}
            </Button>
          </div>
        </Card>
      </aside>
    </div>
  )
}
