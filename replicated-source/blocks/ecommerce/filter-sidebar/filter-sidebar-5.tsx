import { Rating } from "@/registry-neui/bases/base/neui/rating"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { Label } from "@/registry/bases/base/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Separator } from "@/registry/bases/base/ui/separator"
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
import { Slider } from "@/registry/bases/base/ui/slider"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
  <>
    <div className="flex items-start justify-center min-h-svh p-6 w-full">
      <div className="flex items-center justify-center min-h-[360px] w-full">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-funnel" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FilterIcon" tabler="IconFilter" hugeicons="FilterIcon" phosphor="FunnelIcon" remixicon="RiFilterLine" data-icon="inline-start" aria-hidden="true">
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
          </svg>
          {"Filters"}
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 ml-1 outline-none px-1 py-0.25 relative rounded-full tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
            {"8"}
          </Badge>
        </SheetTrigger>
        </Sheet>
      </div>
    </div>
    <Sheet>
    <SheetContent className="gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(28rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-label="Product filters" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="flex-row gap-3 items-center justify-between px-5 py-4">
        <div className="min-w-0">
          <SheetTitle className="font-semibold text-foreground text-sm tracking-tight" id="base-ui-_r_3_">
            {"Filters"}
          </SheetTitle>
          <SheetDescription className="sr-only" id="base-ui-_r_4_">
            {"Refine the catalog by department, category, price, color, size, material, brand, rating, and availability."}
          </SheetDescription>
        </div>
        <div className="flex gap-1 items-center">
          <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex="0">
            {"Clear all"}
          </Button>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 size-7 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close filters">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
      </SheetHeader>
      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
      <ScrollArea className="flex-1 min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
        <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "848px"}} data-has-overflow-y="" data-overflow-y-end="">
          <div className="flex flex-col py-5">
            <div className="flex flex-wrap gap-1.5 px-5" aria-label="Active filters">
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
            <div className="px-5 py-5" aria-hidden="true">
              <div className="border-border border-dashed border-t"></div>
            </div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-5-department">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-5-department">
                {"Department"}
              </h3>
              <div className="-mx-0.5 flex flex-wrap gap-1.5 px-0.5" role="group" aria-label="Department">
                <button className="bg-background border border-border font-medium hover:text-foreground px-3 py-1 rounded-full text-muted-foreground text-xs transition-colors" type="button" aria-pressed="false">
                  {"All"}
                </button>
                <button className="bg-foreground font-medium px-3 py-1 rounded-full text-background text-xs transition-colors" type="button" aria-pressed="true">
                  {"Women"}
                </button>
                <button className="bg-background border border-border font-medium hover:text-foreground px-3 py-1 rounded-full text-muted-foreground text-xs transition-colors" type="button" aria-pressed="false">
                  {"Men"}
                </button>
                <button className="bg-background border border-border font-medium hover:text-foreground px-3 py-1 rounded-full text-muted-foreground text-xs transition-colors" type="button" aria-pressed="false">
                  {"Kids"}
                </button>
              </div>
            </section>
            <div className="px-5 py-5" aria-hidden="true">
              <div className="border-border border-dashed border-t"></div>
            </div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-5-category">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-5-category">
                {"Category"}
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-2.5 items-center">
                  <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_6_" aria-checked="true" aria-labelledby="filter-5-category-outerwear-label">
                    <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                  </Checkbox>
                  <input id="filter-5-category-outerwear" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-category-outerwear" id="filter-5-category-outerwear-label">
                    <span className="truncate">
                      {"Outerwear"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"128"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="false" aria-labelledby="filter-5-category-knitwear-label"></Checkbox>
                  <input id="filter-5-category-knitwear" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-category-knitwear" id="filter-5-category-knitwear-label">
                    <span className="truncate">
                      {"Knitwear"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"84"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" aria-labelledby="filter-5-category-tops-label"></Checkbox>
                  <input id="filter-5-category-tops" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-category-tops" id="filter-5-category-tops-label">
                    <span className="truncate">
                      {"Tops"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"156"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_f_" aria-checked="false" aria-labelledby="filter-5-category-bottoms-label"></Checkbox>
                  <input id="filter-5-category-bottoms" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-category-bottoms" id="filter-5-category-bottoms-label">
                    <span className="truncate">
                      {"Bottoms"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"92"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_i_" aria-checked="false" aria-labelledby="filter-5-category-dresses-label"></Checkbox>
                  <input id="filter-5-category-dresses" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-category-dresses" id="filter-5-category-dresses-label">
                    <span className="truncate">
                      {"Dresses"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"74"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_l_" aria-checked="false" aria-labelledby="filter-5-category-footwear-label"></Checkbox>
                  <input id="filter-5-category-footwear" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-category-footwear" id="filter-5-category-footwear-label">
                    <span className="truncate">
                      {"Footwear"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"67"}
                    </span>
                  </Label>
                </li>
              </ul>
            </section>
            <div className="px-5 py-5" aria-hidden="true">
              <div className="border-border border-dashed border-t"></div>
            </div>
            <section className="flex flex-col gap-4 px-5" aria-labelledby="filter-5-price">
              <div className="flex gap-3 items-baseline justify-between">
                <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-5-price">
                  {"Price"}
                </h3>
                <span className="font-medium tabular-nums text-muted-foreground text-xs">
                  <span className="font-semibold text-foreground">
                    {"$40"}
                  </span>
                  {"−"}
                  <span className="font-semibold text-foreground">
                    {"$180"}
                  </span>
                </span>
              </div>
              <Slider data-orientation="horizontal" id="base-ui-_r_o_" role="group" aria-label="Price range">
                <div className="cn-slider data-disabled:opacity-50 data-vertical:flex-col data-vertical:h-full data-vertical:w-auto flex items-center relative select-none touch-none w-full" data-orientation="horizontal" data-base-ui-slider-control="">
                  <div className="cn-slider-track grow overflow-hidden relative select-none" data-orientation="horizontal" style={{position: "relative"}}>
                    <div className="cn-slider-range data-horizontal:h-full data-vertical:w-full select-none" data-orientation="horizontal" data-base-ui-slider-indicator="" style={{position: "relative", height: "inherit", "--start-position": "17.649467649467653%", "--relative-size": "56.613431613431615%", insetInlineStart: "var(--start-position)", width: "var(--relative-size)"}}></div>
                  </div>
                  <div className="block cn-slider-thumb disabled:opacity-50 disabled:pointer-events-none select-none shrink-0" data-orientation="horizontal" data-index="0" id="base-ui-_r_p_" style={{"--position": "17.649467649467653%", position: "absolute", insetInlineStart: "var(--position)", top: "50%", translate: "-50% -50%"}}>
                    <input aria-orientation="horizontal" id="base-ui-_r_q_" max="240" min="0" step="5" type="range" value="40" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "100%", height: "100%", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} aria-valuenow="40" aria-valuetext="40 start range" />
                  </div>
                  <div className="block cn-slider-thumb disabled:opacity-50 disabled:pointer-events-none select-none shrink-0" data-orientation="horizontal" data-index="1" id="base-ui-_r_s_" style={{"--position": "74.26289926289927%", position: "absolute", insetInlineStart: "var(--position)", top: "50%", translate: "-50% -50%"}}>
                    <input aria-orientation="horizontal" id="base-ui-_r_t_" max="240" min="0" step="5" type="range" value="180" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "100%", height: "100%", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} aria-valuenow="180" aria-valuetext="180 end range" />
                  </div>
                </div>
              </Slider>
            </section>
            <div className="px-5 py-5" aria-hidden="true">
              <div className="border-border border-dashed border-t"></div>
            </div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-5-color">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-5-color">
                {"Color"}
              </h3>
              <ul className="flex flex-wrap gap-3" aria-label="Color swatches">
                <li>
                  <button className="border border-border flex focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring/40 items-center justify-center outline-none relative ring-2 ring-foreground ring-offset-2 rounded-full size-7 transition-shadow" type="button" aria-pressed="true" aria-label="Black" title="Black" style={{backgroundColor: "oklch(0.205 0 0)"}}>
                    <svg className="lucide lucide-check size-3 text-background" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="border border-border flex focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring/40 items-center justify-center outline-none relative rounded-full size-7 transition-shadow" type="button" aria-pressed="false" aria-label="Ivory" title="Ivory" style={{backgroundColor: "oklch(0.96 0.012 90)"}}></button>
                </li>
                <li>
                  <button className="border border-border flex focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring/40 items-center justify-center outline-none relative rounded-full size-7 transition-shadow" type="button" aria-pressed="false" aria-label="Beige" title="Beige" style={{backgroundColor: "oklch(0.83 0.04 80)"}}></button>
                </li>
                <li>
                  <button className="border border-border flex focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring/40 items-center justify-center outline-none relative rounded-full size-7 transition-shadow" type="button" aria-pressed="false" aria-label="Olive" title="Olive" style={{backgroundColor: "oklch(0.55 0.07 120)"}}></button>
                </li>
                <li>
                  <button className="border border-border flex focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring/40 items-center justify-center outline-none relative rounded-full size-7 transition-shadow" type="button" aria-pressed="false" aria-label="Navy" title="Navy" style={{backgroundColor: "oklch(0.32 0.06 250)"}}></button>
                </li>
                <li>
                  <button className="border border-border flex focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring/40 items-center justify-center outline-none relative rounded-full size-7 transition-shadow" type="button" aria-pressed="false" aria-label="Rust" title="Rust" style={{backgroundColor: "oklch(0.55 0.13 40)"}}></button>
                </li>
              </ul>
            </section>
            <div className="px-5 py-5" aria-hidden="true">
              <div className="border-border border-dashed border-t"></div>
            </div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-5-size">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-5-size">
                {"Size"}
              </h3>
              <div className="flex flex-wrap gap-1.5" aria-label="Sizes">
                <Button className="min-w-12 tabular-nums" type="button" tabIndex="0" aria-pressed="false">
                  {"XS"}
                </Button>
                <Button className="min-w-12 tabular-nums" type="button" tabIndex="0" aria-pressed="false">
                  {"S"}
                </Button>
                <Button className="min-w-12 tabular-nums" type="button" tabIndex="0" aria-pressed="false">
                  {"M"}
                </Button>
                <Button className="min-w-12 tabular-nums" type="button" tabIndex="0" aria-pressed="false">
                  {"L"}
                </Button>
                <Button className="min-w-12 tabular-nums" type="button" tabIndex="0" aria-pressed="false">
                  {"XL"}
                </Button>
                <Button className="min-w-12 tabular-nums" type="button" tabIndex="0" aria-pressed="false">
                  {"XXL"}
                </Button>
              </div>
            </section>
            <div className="px-5 py-5" aria-hidden="true">
              <div className="border-border border-dashed border-t"></div>
            </div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-5-material">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-5-material">
                {"Material"}
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-2.5 items-center">
                  <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_v_" aria-checked="true" aria-labelledby="filter-5-material-cotton-label">
                    <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                  </Checkbox>
                  <input id="filter-5-material-cotton" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-material-cotton" id="filter-5-material-cotton-label">
                    <span className="truncate">
                      {"Cotton"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"184"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_12_" aria-checked="false" aria-labelledby="filter-5-material-linen-label"></Checkbox>
                  <input id="filter-5-material-linen" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-material-linen" id="filter-5-material-linen-label">
                    <span className="truncate">
                      {"Linen"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"56"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_15_" aria-checked="false" aria-labelledby="filter-5-material-wool-label"></Checkbox>
                  <input id="filter-5-material-wool" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-material-wool" id="filter-5-material-wool-label">
                    <span className="truncate">
                      {"Wool"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"48"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_18_" aria-checked="false" aria-labelledby="filter-5-material-cashmere-label"></Checkbox>
                  <input id="filter-5-material-cashmere" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-material-cashmere" id="filter-5-material-cashmere-label">
                    <span className="truncate">
                      {"Cashmere"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"22"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1b_" aria-checked="false" aria-labelledby="filter-5-material-leather-label"></Checkbox>
                  <input id="filter-5-material-leather" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-material-leather" id="filter-5-material-leather-label">
                    <span className="truncate">
                      {"Leather"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"31"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1e_" aria-checked="false" aria-labelledby="filter-5-material-recycled-label"></Checkbox>
                  <input id="filter-5-material-recycled" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-material-recycled" id="filter-5-material-recycled-label">
                    <span className="truncate">
                      {"Recycled fibers"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"64"}
                    </span>
                  </Label>
                </li>
              </ul>
            </section>
            <div className="px-5 py-5" aria-hidden="true">
              <div className="border-border border-dashed border-t"></div>
            </div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-5-brand">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-5-brand">
                {"Brand"}
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-2.5 items-center">
                  <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1h_" aria-checked="true" aria-labelledby="filter-5-brand-northline-label">
                    <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                  </Checkbox>
                  <input id="filter-5-brand-northline" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-brand-northline" id="filter-5-brand-northline-label">
                    <span className="truncate">
                      {"Northline"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"38"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1k_" aria-checked="false" aria-labelledby="filter-5-brand-aster-label"></Checkbox>
                  <input id="filter-5-brand-aster" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-brand-aster" id="filter-5-brand-aster-label">
                    <span className="truncate">
                      {"Aster Goods"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"24"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1n_" aria-checked="false" aria-labelledby="filter-5-brand-field-label"></Checkbox>
                  <input id="filter-5-brand-field" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-brand-field" id="filter-5-brand-field-label">
                    <span className="truncate">
                      {"Field Supply"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"19"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1q_" aria-checked="false" aria-labelledby="filter-5-brand-maven-label"></Checkbox>
                  <input id="filter-5-brand-maven" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="filter-5-brand-maven" id="filter-5-brand-maven-label">
                    <span className="truncate">
                      {"Maven & Co."}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"31"}
                    </span>
                  </Label>
                </li>
              </ul>
            </section>
            <div className="px-5 py-5" aria-hidden="true">
              <div className="border-border border-dashed border-t"></div>
            </div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-5-rating">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-5-rating">
                {"Rating"}
              </h3>
              <RadioGroup className="flex flex-col gap-2" role="radiogroup">
                <div className="flex gap-2.5 items-center">
                  <RadioGroupItem checked="" role="radio" tabIndex="0" aria-checked="true" compositeItemActive="" id="base-ui-_r_1u_" aria-labelledby="filter-5-rating-4-label">
                    <span className="cn-radio-group-indicator" data-checked="">
                      <span className="cn-radio-group-indicator-icon"></span>
                    </span>
                  </RadioGroupItem>
                  <input id="filter-5-rating-4" tabIndex="-1" aria-hidden="true" type="radio" value="4" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-2 min-w-0 text-foreground text-sm" htmlFor="filter-5-rating-4" id="filter-5-rating-4-label">
                    <Rating className="gap-0.5" aria-hidden="true">
                      <div className="flex items-center">
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Rating>
                    <span className="text-muted-foreground text-xs">
                      {"4 & up"}
                    </span>
                  </Label>
                </div>
                <div className="flex gap-2.5 items-center">
                  <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_21_" aria-labelledby="filter-5-rating-3-label"></RadioGroupItem>
                  <input id="filter-5-rating-3" tabIndex="-1" aria-hidden="true" type="radio" value="3" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-2 min-w-0 text-foreground text-sm" htmlFor="filter-5-rating-3" id="filter-5-rating-3-label">
                    <Rating className="gap-0.5" aria-hidden="true">
                      <div className="flex items-center">
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Rating>
                    <span className="text-muted-foreground text-xs">
                      {"3 & up"}
                    </span>
                  </Label>
                </div>
                <div className="flex gap-2.5 items-center">
                  <RadioGroupItem unchecked="" role="radio" tabIndex="-1" aria-checked="false" id="base-ui-_r_24_" aria-labelledby="filter-5-rating-2-label"></RadioGroupItem>
                  <input id="filter-5-rating-2" tabIndex="-1" aria-hidden="true" type="radio" value="2" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-2 min-w-0 text-foreground text-sm" htmlFor="filter-5-rating-2" id="filter-5-rating-2-label">
                    <Rating className="gap-0.5" aria-hidden="true">
                      <div className="flex items-center">
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                          <div className="absolute inset-0 overflow-hidden" style={{width: "0%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Rating>
                    <span className="text-muted-foreground text-xs">
                      {"2 & up"}
                    </span>
                  </Label>
                </div>
              </RadioGroup>
            </section>
            <div className="px-5 py-5" aria-hidden="true">
              <div className="border-border border-dashed border-t"></div>
            </div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-5-quick">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-5-quick">
                {"Quick filters"}
              </h3>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-center justify-between">
                  <Label className="font-normal text-foreground text-sm" htmlFor="filter-5-in-stock" id="filter-5-in-stock-label">
                    {"In stock only"}
                  </Label>
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_27_" aria-checked="true" size="sm" aria-labelledby="filter-5-in-stock-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="filter-5-in-stock" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
                <div className="flex gap-3 items-center justify-between">
                  <Label className="font-normal text-foreground text-sm" htmlFor="filter-5-on-sale" id="filter-5-on-sale-label">
                    {"On sale"}
                  </Label>
                  <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_2a_" aria-checked="false" size="sm" aria-labelledby="filter-5-on-sale-label">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                  </Switch>
                  <input id="filter-5-on-sale" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_5_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "172.18010550113036px"}}>
          <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
        </div>
      </ScrollArea>
      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
      <SheetFooter className="flex-row gap-2 items-center px-5 py-4">
        <Button className="flex-1" type="button" tabIndex="0">
          {"Apply filters"}
        </Button>
        <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex="0">
          {"Reset"}
        </Button>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
