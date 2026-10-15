import { Rating } from "@/registry-neui/bases/base/neui/rating"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-10 min-h-svh p-6 w-full">
      <Card className="max-w-5xl md:p-6 overflow-hidden p-5 w-full" size="sm">
        <div className="gap-6 grid lg:gap-8 md:grid-cols-[minmax(0,0.82fr)_minmax(360px,1fr)] md:items-stretch">
          <CardContent className="flex flex-col gap-5 lg:py-5 md:py-3 min-w-0 p-0">
            <div className="flex flex-col gap-3 min-w-0">
              <div className="flex flex-col gap-2 min-w-0">
                <div className="flex flex-wrap gap-2 items-center">
                  <a className="flex font-medium gap-1.5 hover:text-primary hover:underline items-center text-muted-foreground text-xs transition-colors underline-offset-4 w-fit" href="#">
                    <svg className="lucide lucide-tag shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TagIcon" tabler="IconTag" hugeicons="Tag01Icon" phosphor="TagIcon" remixicon="RiPriceTag3Line" aria-hidden="true">
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {"Audio"}
                  </a>
                  <Tooltip>
                  <TooltipTrigger className="appearance-none bg-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring inline-flex outline-none p-0 rounded-full" type="button" aria-label="6 left. Only 6 Pearl units left for this drop." id="base-ui-_r_2_" baseUiTooltipTrigger="" extracted="1">
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 cursor-help dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-warning-foreground text-xs transition-shadow">
                      {"Popular"}
                      <span className="font-semibold">
                        {"6 left"}
                      </span>
                    </Badge>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
                <CardTitle className="leading-tight md:text-2xl min-w-0 text-balance text-xl">
                  <a className="block hover:text-primary hover:underline transition-colors underline-offset-4" href="#">
                    {"AirBuds White"}
                  </a>
                </CardTitle>
                <CardDescription className="leading-6 line-clamp-2 max-w-md text-sm">
                  {"White wireless earbuds with open-fit comfort, fast pairing, and a slim pocket charging case."}
                </CardDescription>
                <div className="flex flex-wrap gap-x-3 gap-y-2 items-center">
                  <div aria-label="Rated 4.7 out of 5">
                    <Rating>
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
                          <div className="absolute inset-0 overflow-hidden" style={{width: "70%"}}>
                            <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <span className="text-muted-foreground text-xs w-5">
                        {"4.7"}
                      </span>
                    </Rating>
                  </div>
                  <a className="hover:text-primary hover:underline text-muted-foreground text-sm transition-colors underline-offset-4" href="#">
                    {"362 reviews"}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                {"18% OFF"}
              </Badge>
              <div className="flex font-semibold gap-2 items-baseline tabular-nums text-xl">
                <span>
                  {"$119.00"}
                </span>
                <span className="font-normal line-through text-muted-foreground">
                  {"$149.00"}
                </span>
              </div>
            </div>
            <ul className="flex flex-col gap-2 mt-2 text-muted-foreground text-sm">
              <li className="flex gap-1.5 items-center min-w-0">
                <svg className="lucide lucide-check shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="truncate">
                  {"Open-Fit Comfort"}
                </span>
              </li>
              <li className="flex gap-1.5 items-center min-w-0">
                <svg className="lucide lucide-check shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="truncate">
                  {"Low-Latency Pairing"}
                </span>
              </li>
              <li className="flex gap-1.5 items-center min-w-0">
                <svg className="lucide lucide-check shrink-0 size-4 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span className="truncate">
                  {"Slim Charging Case"}
                </span>
              </li>
            </ul>
            <div className="gap-3 grid mt-auto pt-2">
              <div className="flex gap-3 items-center justify-between">
                <p className="font-medium text-sm">
                  {"Finish"}
                </p>
                <a className="hover:text-primary hover:underline text-muted-foreground text-sm transition-colors underline-offset-4" href="#">
                  {"Tech Specs"}
                </a>
              </div>
              <div className="@container/field-group cn-field-group flex-col gap-2 grid grid-cols-5 group/field-group w-full" role="group" aria-label="Choose Finish">
                <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="feature-card-finish-pearl" id="feature-card-finish-pearl-label">
                  <Field className="bg-primary/5 border-primary/40 h-9 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                    <Checkbox className="-right-2 -top-2 absolute bg-primary border-none opacity-100 rounded-full shadow-none size-5 text-primary-foreground transition-opacity" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_3_" aria-checked="true" aria-label="Choose Pearl finish" aria-labelledby="feature-card-finish-pearl-label">
                      <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                        <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                      </span>
                    </Checkbox>
                    <input id="feature-card-finish-pearl" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                      {"Pearl"}
                    </FieldLabel>
                  </Field>
                </FieldLabel>
                <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="feature-card-finish-frost" id="feature-card-finish-frost-label">
                  <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                    <Checkbox className="-right-2 -top-2 absolute border-none opacity-0 rounded-full shadow-none size-5 transition-opacity" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_6_" aria-checked="false" aria-label="Choose Frost finish" aria-labelledby="feature-card-finish-frost-label"></Checkbox>
                    <input id="feature-card-finish-frost" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                      {"Frost"}
                    </FieldLabel>
                  </Field>
                </FieldLabel>
                <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="feature-card-finish-cloud" id="feature-card-finish-cloud-label">
                  <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                    <Checkbox className="-right-2 -top-2 absolute border-none opacity-0 rounded-full shadow-none size-5 transition-opacity" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="false" aria-label="Choose Cloud finish" aria-labelledby="feature-card-finish-cloud-label"></Checkbox>
                    <input id="feature-card-finish-cloud" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                      {"Cloud"}
                    </FieldLabel>
                  </Field>
                </FieldLabel>
                <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="feature-card-finish-sand" id="feature-card-finish-sand-label">
                  <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                    <Checkbox className="-right-2 -top-2 absolute border-none opacity-0 rounded-full shadow-none size-5 transition-opacity" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" aria-label="Choose Sand finish" aria-labelledby="feature-card-finish-sand-label"></Checkbox>
                    <input id="feature-card-finish-sand" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                      {"Sand"}
                    </FieldLabel>
                  </Field>
                </FieldLabel>
                <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="feature-card-finish-mist" id="feature-card-finish-mist-label">
                  <Field className="border-border/70 h-9 hover:bg-muted/40 justify-center px-3 transition-colors" role="group" data-orientation="horizontal">
                    <Checkbox className="-right-2 -top-2 absolute border-none opacity-0 rounded-full shadow-none size-5 transition-opacity" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_f_" aria-checked="false" aria-label="Choose Mist finish" aria-labelledby="feature-card-finish-mist-label"></Checkbox>
                    <input id="feature-card-finish-mist" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <FieldLabel className="cn-field-title font-medium items-center justify-center text-sm w-full">
                      {"Mist"}
                    </FieldLabel>
                  </Field>
                </FieldLabel>
              </div>
              <div className="gap-2 grid mt-2 sm:grid-cols-[1fr_auto]">
                <Button type="button" tabIndex="0">
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  {"Add to Bag"}
                </Button>
                <Button type="button" tabIndex="0" aria-pressed="false" aria-label="Add AirBuds White to wishlist">
                  <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                  {"Wishlist"}
                </Button>
              </div>
            </div>
          </CardContent>
          <div className="md:min-h-[600px] min-h-[420px] overflow-hidden relative">
            <svg className="absolute pointer-events-none size-0" aria-hidden="true" focusable="false">
              <defs>
                <mask id="product-card-5-media-mask-_r_0_" maskcontentunits="objectBoundingBox">
                  <path d="M 0.04 0 H 0.74 Q 0.79 0 0.825 0.035 L 0.965 0.175 Q 1 0.21 1 0.26 V 0.96 Q 1 1 0.96 1 H 0.26 Q 0.21 1 0.175 0.965 L 0.035 0.825 Q 0 0.79 0 0.74 V 0.04 Q 0 0 0.04 0 Z" fill="white"></path>
                </mask>
              </defs>
            </svg>
            <div className="bg-muted group/media h-full md:min-h-[600px] min-h-[420px] overflow-hidden relative rounded-lg" style={{mask: "url(\"#product-card-5-media-mask-_r_0_\")"}}>
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View AirBuds White details">
                <img className="absolute duration-500 ease-out h-full inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-[1.03] object-center object-cover transition-transform w-full will-change-transform" alt="White wireless earbuds resting in an open charging case" loading="eager" fetchpriority="high" src="https://images.unsplash.com/photo-1739764575613-ecc078ed173d?auto=format&fit=crop&w=1100&h=1320&q=80" />
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
