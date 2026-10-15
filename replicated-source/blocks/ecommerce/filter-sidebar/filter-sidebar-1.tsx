import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import { Label } from "@/registry/bases/base/ui/label"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Slider } from "@/registry/bases/base/ui/slider"

export function Pattern() {
  return (
    <div className="flex items-start justify-center min-h-svh p-6 w-full">
      <aside className="max-w-sm w-full" aria-label="Product filters">
        <Card className="gap-0 overflow-hidden p-0" size="default">
          <div className="flex gap-3 items-center justify-between pt-5 px-5">
            <h2 className="font-semibold text-base text-foreground tracking-tight">
              {"Filters"}
            </h2>
            <button className="font-medium hover:text-foreground hover:underline text-muted-foreground text-xs transition-colors underline-offset-4" type="button" data-extracted="1">
              {"Clear all"}
            </button>
          </div>
          <div className="px-5 py-5">
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          </div>
          <div className="flex flex-wrap gap-1.5 px-5" aria-label="Active filters">
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center pl-2 pr-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter Outerwear">
              {"Outerwear"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center pl-2 pr-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter Northline">
              {"Northline"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center pl-2 pr-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter Black">
              <span className="border border-border/60 inline-block rounded-full shrink-0 size-2.5" aria-hidden="true" style={{backgroundColor: "oklch(0.205 0 0)"}}></span>
              {"Black"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
            <button className="bg-muted/40 border border-border font-medium gap-1.5 hover:bg-muted inline-flex items-center pl-2 pr-2 py-0.5 rounded-full text-foreground text-xs transition-colors" type="button" aria-label="Remove filter $40 - $180">
              {"$40 - $180"}
              <svg className="lucide lucide-x size-3 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="px-5 py-5">
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          </div>
          <div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-category">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-category">
                {"Category"}
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-2.5 items-center">
                  <Checkbox checked="" role="checkbox" tabIndex={0} id="base-ui-_r_0_" aria-checked="true" aria-labelledby="category-outerwear-label">
                    <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                  </Checkbox>
                  <input id="category-outerwear" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="category-outerwear" id="category-outerwear-label">
                    <span className="truncate">
                      {"Outerwear"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"128"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3_" aria-checked="false" aria-labelledby="category-knitwear-label"></Checkbox>
                  <input id="category-knitwear" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="category-knitwear" id="category-knitwear-label">
                    <span className="truncate">
                      {"Knitwear"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"84"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_6_" aria-checked="false" aria-labelledby="category-tops-label"></Checkbox>
                  <input id="category-tops" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="category-tops" id="category-tops-label">
                    <span className="truncate">
                      {"Tops"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"156"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_9_" aria-checked="false" aria-labelledby="category-bottoms-label"></Checkbox>
                  <input id="category-bottoms" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="category-bottoms" id="category-bottoms-label">
                    <span className="truncate">
                      {"Bottoms"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"92"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_c_" aria-checked="false" aria-labelledby="category-shoes-label"></Checkbox>
                  <input id="category-shoes" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="category-shoes" id="category-shoes-label">
                    <span className="truncate">
                      {"Shoes"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"67"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_f_" aria-checked="false" aria-labelledby="category-bags-label"></Checkbox>
                  <input id="category-bags" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="category-bags" id="category-bags-label">
                    <span className="truncate">
                      {"Bags"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"42"}
                    </span>
                  </Label>
                </li>
              </ul>
            </section>
            <div className="px-5 py-5">
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <section className="flex flex-col gap-4 px-5" aria-labelledby="filter-price">
              <div className="flex gap-3 items-baseline justify-between">
                <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-price">
                  {"Price"}
                </h3>
                <span className="font-medium tabular-nums text-muted-foreground text-xs">
                  <span className="font-semibold text-foreground">
                    {"$40"}
                  </span>
                  {"-"}
                  <span className="font-semibold text-foreground">
                    {"$180"}
                  </span>
                </span>
              </div>
              <Slider data-orientation="horizontal" id="base-ui-_r_i_" role="group" aria-label="Price range">
                <div className="cn-slider data-disabled:opacity-50 data-vertical:flex-col data-vertical:h-full data-vertical:w-auto flex items-center relative select-none touch-none w-full" data-orientation="horizontal" data-base-ui-slider-control="">
                  <div className="cn-slider-track grow overflow-hidden relative select-none" data-orientation="horizontal" style={{position: "relative"}}>
                    <div className="cn-slider-range data-horizontal:h-full data-vertical:w-full select-none" data-orientation="horizontal" data-base-ui-slider-indicator="" style={{position: "relative", height: "inherit", "--start-position": "17.82945736434109%", "--relative-size": "56.2984496124031%", insetInlineStart: "var(--start-position)", width: "var(--relative-size)"}}></div>
                  </div>
                  <div className="block cn-slider-thumb disabled:opacity-50 disabled:pointer-events-none select-none shrink-0" data-orientation="horizontal" data-index="0" id="base-ui-_r_j_" style={{"--position": "17.82945736434109%", position: "absolute", insetInlineStart: "var(--position)", top: "50%", translate: "-50% -50%"}}>
                    <input aria-orientation="horizontal" id="base-ui-_r_k_" max={240} min={0} step={5} type="range" value="40" aria-valuenow="40" aria-valuetext="40 start range" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "100%", height: "100%", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                  <div className="block cn-slider-thumb disabled:opacity-50 disabled:pointer-events-none select-none shrink-0" data-orientation="horizontal" data-index="1" id="base-ui-_r_m_" style={{"--position": "74.12790697674419%", position: "absolute", insetInlineStart: "var(--position)", top: "50%", translate: "-50% -50%"}}>
                    <input aria-orientation="horizontal" id="base-ui-_r_n_" max={240} min={0} step={5} type="range" value="180" aria-valuenow="180" aria-valuetext="180 end range" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "100%", height: "100%", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </div>
                </div>
              </Slider>
            </section>
            <div className="px-5 py-5">
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-color">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-color">
                {"Color"}
              </h3>
              <ul className="flex flex-wrap gap-3" aria-label="Color swatches">
                <li>
                  <button className="border border-border flex focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring/40 items-center justify-center outline-none relative ring-2 ring-foreground ring-offset-2 rounded-full size-7 transition-shadow" type="button" aria-pressed="true" aria-label="Black" title="Black" style={{backgroundColor: "oklch(0.205 0 0)"}}>
                    <svg className="lucide lucide-check size-3 text-background" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
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
            <div className="px-5 py-5">
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-size">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-size">
                {"Size"}
              </h3>
              <div className="flex flex-wrap gap-1.5" aria-label="Sizes">
                <Button className="min-w-12 tabular-nums" type="button" tabIndex={0} aria-pressed="false">
                  {"XS"}
                </Button>
                <Button className="min-w-12 tabular-nums" type="button" tabIndex={0} aria-pressed="false">
                  {"S"}
                </Button>
                <Button className="min-w-12 tabular-nums" type="button" tabIndex={0} aria-pressed="false">
                  {"M"}
                </Button>
                <Button className="min-w-12 tabular-nums" type="button" tabIndex={0} aria-pressed="false">
                  {"L"}
                </Button>
                <Button className="min-w-12 tabular-nums" type="button" tabIndex={0} aria-pressed="false">
                  {"XL"}
                </Button>
                <Button className="min-w-12 tabular-nums" type="button" tabIndex={0} aria-pressed="false">
                  {"XXL"}
                </Button>
              </div>
            </section>
            <div className="px-5 py-5">
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </div>
            <section className="flex flex-col gap-3 px-5" aria-labelledby="filter-brand">
              <h3 className="font-semibold text-foreground text-sm tracking-tight" id="filter-brand">
                {"Brand"}
              </h3>
              <ul className="flex flex-col gap-2.5">
                <li className="flex gap-2.5 items-center">
                  <Checkbox checked="" role="checkbox" tabIndex={0} id="base-ui-_r_p_" aria-checked="true" aria-labelledby="brand-northline-label">
                    <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                      <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </span>
                  </Checkbox>
                  <input id="brand-northline" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="brand-northline" id="brand-northline-label">
                    <span className="truncate">
                      {"Northline"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"38"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_s_" aria-checked="false" aria-labelledby="brand-aster-label"></Checkbox>
                  <input id="brand-aster" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="brand-aster" id="brand-aster-label">
                    <span className="truncate">
                      {"Aster Goods"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"24"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_v_" aria-checked="false" aria-labelledby="brand-field-label"></Checkbox>
                  <input id="brand-field" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="brand-field" id="brand-field-label">
                    <span className="truncate">
                      {"Field Supply"}
                    </span>
                    <span className="tabular-nums text-muted-foreground">
                      {"19"}
                    </span>
                  </Label>
                </li>
                <li className="flex gap-2.5 items-center">
                  <Checkbox unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_12_" aria-checked="false" aria-labelledby="brand-maven-label"></Checkbox>
                  <input id="brand-maven" tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  <Label className="flex-1 font-normal gap-3 justify-between min-w-0 text-foreground text-sm" htmlFor="brand-maven" id="brand-maven-label">
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
          </div>
          <div className="px-5 py-5">
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          </div>
          <div className="flex gap-2 items-center pb-5 px-5">
            <Button className="flex-1" type="button" tabIndex={0}>
              {"Apply filters"}
            </Button>
            <Button className="hover:text-foreground text-muted-foreground" type="button" tabIndex={0}>
              {"Reset"}
            </Button>
          </div>
        </Card>
      </aside>
    </div>
  )
}
