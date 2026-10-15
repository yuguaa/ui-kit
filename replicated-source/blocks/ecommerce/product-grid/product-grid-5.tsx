import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-background min-h-svh w-full">
      <section className="max-w-6xl md:px-6 md:py-12 mx-auto px-4 py-8 w-full" aria-label="Technical outerwear">
        <div className="gap-6 grid grid-cols-1 lg:gap-8 lg:grid-cols-3 sm:grid-cols-2">
          <article className="flex flex-col gap-3 group/card min-w-0">
            <Item className="aspect-[4/5] border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Field Shell Jacket">
                <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Field Shell Jacket on a studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&h=1125&q=80" />
              </a>
              <div className="absolute left-3 top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  Sale
                </Badge>
              </div>
              <Button className="absolute right-3 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-3 transition-opacity" type="button" tabIndex="0" aria-label="Add Field Shell Jacket to wishlist" aria-pressed="false" extracted="1">
                <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
              <Item className="absolute backdrop-blur-sm bg-background/95 border-0 bottom-3 duration-300 flex-col gap-2 inset-x-3 items-stretch max-sm:opacity-100 p-2.5 shadow-md sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 transition-opacity w-auto" variant="default" size="default">
                <div className="@container/field-group cn-field-group flex-col gap-1.5 grid grid-cols-5 group/field-group w-full" role="group" aria-label="Select size for Field Shell Jacket">
                  <FieldLabel className="cn-label cursor-not-allowed group-data-[disabled=true]:pointer-events-none items-center min-w-0 opacity-60 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-field-shell-jacket-size-xs" id="pg5-field-shell-jacket-size-xs-label">
                    <Field className="bg-muted/30 border-border/70 h-8 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" disabled="" unchecked="" role="checkbox" tabIndex="-1" aria-disabled="true" id="base-ui-_r_0_" aria-checked="false" aria-label="Size XS, out of stock" aria-labelledby="pg5-field-shell-jacket-size-xs-label"></Checkbox>
                      <input disabled id="pg5-field-shell-jacket-size-xs" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center line-through tabular-nums text-xs w-full">
                        XS
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-field-shell-jacket-size-s" id="pg5-field-shell-jacket-size-s-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_3_" aria-checked="false" aria-label="Size S, in stock" aria-labelledby="pg5-field-shell-jacket-size-s-label"></Checkbox>
                      <input id="pg5-field-shell-jacket-size-s" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        S
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-field-shell-jacket-size-m" id="pg5-field-shell-jacket-size-m-label">
                    <Field className="bg-primary/5 border-primary/40 h-8 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" checked="" role="checkbox" tabIndex="0" id="base-ui-_r_6_" aria-checked="true" aria-label="Size M, in stock" aria-labelledby="pg5-field-shell-jacket-size-m-label">
                        <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                          <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                            <path d="M20 6 9 17l-5-5"></path>
                          </svg>
                        </span>
                      </Checkbox>
                      <input id="pg5-field-shell-jacket-size-m" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        M
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-field-shell-jacket-size-l" id="pg5-field-shell-jacket-size-l-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="false" aria-label="Size L, in stock" aria-labelledby="pg5-field-shell-jacket-size-l-label"></Checkbox>
                      <input id="pg5-field-shell-jacket-size-l" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        L
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-field-shell-jacket-size-xl" id="pg5-field-shell-jacket-size-xl-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_c_" aria-checked="false" aria-label="Size XL, low stock" aria-labelledby="pg5-field-shell-jacket-size-xl-label"></Checkbox>
                      <input id="pg5-field-shell-jacket-size-xl" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-warning text-xs w-full">
                        XL
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                </div>
                <Button className="w-full" type="button" tabIndex="0" aria-label="Add Field Shell Jacket in size M to bag">
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  Add to Bag
                </Button>
              </Item>
            </Item>
            <div className="flex flex-col gap-1.5 min-w-0">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.16em] transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Halden products">
                Halden
              </a>
              <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                  Field Shell Jacket
                </a>
              </h3>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 tabular-nums text-base">
                <span className="text-foreground">
                  $185
                </span>
                <span className="font-normal line-through text-muted-foreground">
                  $228
                </span>
              </div>
              <p className="leading-relaxed text-muted-foreground text-xs">
                Free shipping · Ships in 2-3 days
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-3 group/card min-w-0">
            <Item className="aspect-[4/5] border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Compass Down Vest">
                <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Compass Down Vest in slate against a wood wall" loading="lazy" src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=900&h=1125&q=80" />
              </a>
              <div className="absolute left-3 top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  Bestseller
                </Badge>
              </div>
              <Button className="absolute right-3 top-3 transition-opacity" type="button" tabIndex="0" aria-label="Remove Compass Down Vest from wishlist" aria-pressed="true">
                <svg className="fill-destructive lucide lucide-heart size-4 text-destructive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
              <Item className="absolute backdrop-blur-sm bg-background/95 border-0 bottom-3 duration-300 flex-col gap-2 inset-x-3 items-stretch max-sm:opacity-100 p-2.5 shadow-md sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 transition-opacity w-auto" variant="default" size="default">
                <div className="@container/field-group cn-field-group flex-col gap-1.5 grid grid-cols-5 group/field-group w-full" role="group" aria-label="Select size for Compass Down Vest">
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-compass-down-vest-size-xs" id="pg5-compass-down-vest-size-xs-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_f_" aria-checked="false" aria-label="Size XS, in stock" aria-labelledby="pg5-compass-down-vest-size-xs-label"></Checkbox>
                      <input id="pg5-compass-down-vest-size-xs" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        XS
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-compass-down-vest-size-s" id="pg5-compass-down-vest-size-s-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_i_" aria-checked="false" aria-label="Size S, in stock" aria-labelledby="pg5-compass-down-vest-size-s-label"></Checkbox>
                      <input id="pg5-compass-down-vest-size-s" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        S
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-compass-down-vest-size-m" id="pg5-compass-down-vest-size-m-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_l_" aria-checked="false" aria-label="Size M, in stock" aria-labelledby="pg5-compass-down-vest-size-m-label"></Checkbox>
                      <input id="pg5-compass-down-vest-size-m" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        M
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-compass-down-vest-size-l" id="pg5-compass-down-vest-size-l-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_o_" aria-checked="false" aria-label="Size L, in stock" aria-labelledby="pg5-compass-down-vest-size-l-label"></Checkbox>
                      <input id="pg5-compass-down-vest-size-l" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        L
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-compass-down-vest-size-xl" id="pg5-compass-down-vest-size-xl-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_r_" aria-checked="false" aria-label="Size XL, in stock" aria-labelledby="pg5-compass-down-vest-size-xl-label"></Checkbox>
                      <input id="pg5-compass-down-vest-size-xl" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        XL
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                </div>
                <Button className="w-full" type="button" tabIndex="0" aria-label="Select a size for Compass Down Vest">
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  Select Size
                </Button>
              </Item>
            </Item>
            <div className="flex flex-col gap-1.5 min-w-0">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.16em] transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Halden products">
                Halden
              </a>
              <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                  Compass Down Vest
                </a>
              </h3>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 tabular-nums text-base">
                <span className="text-foreground">
                  $228
                </span>
              </div>
              <p className="leading-relaxed text-muted-foreground text-xs">
                Free shipping · Ships tomorrow
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-3 group/card min-w-0">
            <Item className="aspect-[4/5] border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Trailhead Anorak">
                <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Trailhead Anorak in sand on a model outdoors" loading="lazy" src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=900&h=1125&q=80" />
              </a>
              <div className="absolute left-3 top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-primary-foreground text-xs transition-shadow">
                  New
                </Badge>
              </div>
              <Button className="absolute right-3 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-3 transition-opacity" type="button" tabIndex="0" aria-label="Add Trailhead Anorak to wishlist" aria-pressed="false">
                <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
              <Item className="absolute backdrop-blur-sm bg-background/95 border-0 bottom-3 duration-300 flex-col gap-2 inset-x-3 items-stretch max-sm:opacity-100 p-2.5 shadow-md sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 transition-opacity w-auto" variant="default" size="default">
                <div className="@container/field-group cn-field-group flex-col gap-1.5 grid grid-cols-5 group/field-group w-full" role="group" aria-label="Select size for Trailhead Anorak">
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-trailhead-anorak-size-xs" id="pg5-trailhead-anorak-size-xs-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_u_" aria-checked="false" aria-label="Size XS, in stock" aria-labelledby="pg5-trailhead-anorak-size-xs-label"></Checkbox>
                      <input id="pg5-trailhead-anorak-size-xs" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        XS
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-trailhead-anorak-size-s" id="pg5-trailhead-anorak-size-s-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_11_" aria-checked="false" aria-label="Size S, in stock" aria-labelledby="pg5-trailhead-anorak-size-s-label"></Checkbox>
                      <input id="pg5-trailhead-anorak-size-s" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        S
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-trailhead-anorak-size-m" id="pg5-trailhead-anorak-size-m-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_14_" aria-checked="false" aria-label="Size M, in stock" aria-labelledby="pg5-trailhead-anorak-size-m-label"></Checkbox>
                      <input id="pg5-trailhead-anorak-size-m" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        M
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-trailhead-anorak-size-l" id="pg5-trailhead-anorak-size-l-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_17_" aria-checked="false" aria-label="Size L, low stock" aria-labelledby="pg5-trailhead-anorak-size-l-label"></Checkbox>
                      <input id="pg5-trailhead-anorak-size-l" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-warning text-xs w-full">
                        L
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-not-allowed group-data-[disabled=true]:pointer-events-none items-center min-w-0 opacity-60 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-trailhead-anorak-size-xl" id="pg5-trailhead-anorak-size-xl-label">
                    <Field className="bg-muted/30 border-border/70 h-8 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" disabled="" unchecked="" role="checkbox" tabIndex="-1" aria-disabled="true" id="base-ui-_r_1a_" aria-checked="false" aria-label="Size XL, out of stock" aria-labelledby="pg5-trailhead-anorak-size-xl-label"></Checkbox>
                      <input disabled id="pg5-trailhead-anorak-size-xl" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center line-through tabular-nums text-xs w-full">
                        XL
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                </div>
                <Button className="w-full" type="button" tabIndex="0" aria-label="Select a size for Trailhead Anorak">
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  Select Size
                </Button>
              </Item>
            </Item>
            <div className="flex flex-col gap-1.5 min-w-0">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.16em] transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Marlow Goods products">
                Marlow Goods
              </a>
              <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                  Trailhead Anorak
                </a>
              </h3>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 tabular-nums text-base">
                <span className="text-foreground">
                  $148
                </span>
              </div>
              <p className="leading-relaxed text-muted-foreground text-xs">
                Free shipping · Ships in 3-5 days
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-3 group/card min-w-0">
            <Item className="aspect-[4/5] border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Cumulus Rain Jacket">
                <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Cumulus Rain Jacket folded on a stone surface" loading="lazy" src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=900&h=1125&q=80" />
              </a>
              <Button className="absolute right-3 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-3 transition-opacity" type="button" tabIndex="0" aria-label="Add Cumulus Rain Jacket to wishlist" aria-pressed="false">
                <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
              <Item className="absolute backdrop-blur-sm bg-background/95 border-0 bottom-3 duration-300 flex-col gap-2 inset-x-3 items-stretch max-sm:opacity-100 p-2.5 shadow-md sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 transition-opacity w-auto" variant="default" size="default">
                <div className="@container/field-group cn-field-group flex-col gap-1.5 grid grid-cols-5 group/field-group w-full" role="group" aria-label="Select size for Cumulus Rain Jacket">
                  <FieldLabel className="cn-label cursor-not-allowed group-data-[disabled=true]:pointer-events-none items-center min-w-0 opacity-60 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-cumulus-rain-jacket-size-xs" id="pg5-cumulus-rain-jacket-size-xs-label">
                    <Field className="bg-muted/30 border-border/70 h-8 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" disabled="" unchecked="" role="checkbox" tabIndex="-1" aria-disabled="true" id="base-ui-_r_1d_" aria-checked="false" aria-label="Size XS, out of stock" aria-labelledby="pg5-cumulus-rain-jacket-size-xs-label"></Checkbox>
                      <input disabled id="pg5-cumulus-rain-jacket-size-xs" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center line-through tabular-nums text-xs w-full">
                        XS
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-cumulus-rain-jacket-size-s" id="pg5-cumulus-rain-jacket-size-s-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1g_" aria-checked="false" aria-label="Size S, low stock" aria-labelledby="pg5-cumulus-rain-jacket-size-s-label"></Checkbox>
                      <input id="pg5-cumulus-rain-jacket-size-s" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-warning text-xs w-full">
                        S
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-cumulus-rain-jacket-size-m" id="pg5-cumulus-rain-jacket-size-m-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1j_" aria-checked="false" aria-label="Size M, in stock" aria-labelledby="pg5-cumulus-rain-jacket-size-m-label"></Checkbox>
                      <input id="pg5-cumulus-rain-jacket-size-m" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        M
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-cumulus-rain-jacket-size-l" id="pg5-cumulus-rain-jacket-size-l-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1m_" aria-checked="false" aria-label="Size L, in stock" aria-labelledby="pg5-cumulus-rain-jacket-size-l-label"></Checkbox>
                      <input id="pg5-cumulus-rain-jacket-size-l" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        L
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-not-allowed group-data-[disabled=true]:pointer-events-none items-center min-w-0 opacity-60 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-cumulus-rain-jacket-size-xl" id="pg5-cumulus-rain-jacket-size-xl-label">
                    <Field className="bg-muted/30 border-border/70 h-8 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" disabled="" unchecked="" role="checkbox" tabIndex="-1" aria-disabled="true" id="base-ui-_r_1p_" aria-checked="false" aria-label="Size XL, out of stock" aria-labelledby="pg5-cumulus-rain-jacket-size-xl-label"></Checkbox>
                      <input disabled id="pg5-cumulus-rain-jacket-size-xl" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center line-through tabular-nums text-xs w-full">
                        XL
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                </div>
                <Button className="w-full" type="button" tabIndex="0" aria-label="Select a size for Cumulus Rain Jacket">
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  Select Size
                </Button>
              </Item>
            </Item>
            <div className="flex flex-col gap-1.5 min-w-0">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.16em] transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Marlow Goods products">
                Marlow Goods
              </a>
              <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                  Cumulus Rain Jacket
                </a>
              </h3>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 tabular-nums text-base">
                <span className="text-foreground">
                  $268
                </span>
              </div>
              <p className="leading-relaxed text-muted-foreground text-xs">
                Free returns · Ships in 2-3 days
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-3 group/card min-w-0">
            <Item className="aspect-[4/5] border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Refuge Wool Overcoat">
                <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Refuge Wool Overcoat in charcoal against a quiet wall" loading="lazy" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&h=1125&q=80" />
              </a>
              <div className="absolute left-3 top-3">
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative rounded-full text-white text-xs transition-shadow">
                  Limited
                </Badge>
              </div>
              <Button className="absolute right-3 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-3 transition-opacity" type="button" tabIndex="0" aria-label="Add Refuge Wool Overcoat to wishlist" aria-pressed="false">
                <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
              <Item className="absolute backdrop-blur-sm bg-background/95 border-0 bottom-3 duration-300 flex-col gap-2 inset-x-3 items-stretch max-sm:opacity-100 p-2.5 shadow-md sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 transition-opacity w-auto" variant="default" size="default">
                <div className="@container/field-group cn-field-group flex-col gap-1.5 grid grid-cols-5 group/field-group w-full" role="group" aria-label="Select size for Refuge Wool Overcoat">
                  <FieldLabel className="cn-label cursor-not-allowed group-data-[disabled=true]:pointer-events-none items-center min-w-0 opacity-60 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-refuge-wool-overcoat-size-xs" id="pg5-refuge-wool-overcoat-size-xs-label">
                    <Field className="bg-muted/30 border-border/70 h-8 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" disabled="" unchecked="" role="checkbox" tabIndex="-1" aria-disabled="true" id="base-ui-_r_1s_" aria-checked="false" aria-label="Size XS, out of stock" aria-labelledby="pg5-refuge-wool-overcoat-size-xs-label"></Checkbox>
                      <input disabled id="pg5-refuge-wool-overcoat-size-xs" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center line-through tabular-nums text-xs w-full">
                        XS
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-not-allowed group-data-[disabled=true]:pointer-events-none items-center min-w-0 opacity-60 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-refuge-wool-overcoat-size-s" id="pg5-refuge-wool-overcoat-size-s-label">
                    <Field className="bg-muted/30 border-border/70 h-8 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" disabled="" unchecked="" role="checkbox" tabIndex="-1" aria-disabled="true" id="base-ui-_r_1v_" aria-checked="false" aria-label="Size S, out of stock" aria-labelledby="pg5-refuge-wool-overcoat-size-s-label"></Checkbox>
                      <input disabled id="pg5-refuge-wool-overcoat-size-s" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center line-through tabular-nums text-xs w-full">
                        S
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-refuge-wool-overcoat-size-m" id="pg5-refuge-wool-overcoat-size-m-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_22_" aria-checked="false" aria-label="Size M, low stock" aria-labelledby="pg5-refuge-wool-overcoat-size-m-label"></Checkbox>
                      <input id="pg5-refuge-wool-overcoat-size-m" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-warning text-xs w-full">
                        M
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-refuge-wool-overcoat-size-l" id="pg5-refuge-wool-overcoat-size-l-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_25_" aria-checked="false" aria-label="Size L, in stock" aria-labelledby="pg5-refuge-wool-overcoat-size-l-label"></Checkbox>
                      <input id="pg5-refuge-wool-overcoat-size-l" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        L
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-refuge-wool-overcoat-size-xl" id="pg5-refuge-wool-overcoat-size-xl-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_28_" aria-checked="false" aria-label="Size XL, low stock" aria-labelledby="pg5-refuge-wool-overcoat-size-xl-label"></Checkbox>
                      <input id="pg5-refuge-wool-overcoat-size-xl" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-warning text-xs w-full">
                        XL
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                </div>
                <Button className="w-full" type="button" tabIndex="0" aria-label="Select a size for Refuge Wool Overcoat">
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  Select Size
                </Button>
              </Item>
            </Item>
            <div className="flex flex-col gap-1.5 min-w-0">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.16em] transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Wren & Field products">
                Wren & Field
              </a>
              <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                  Refuge Wool Overcoat
                </a>
              </h3>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 tabular-nums text-base">
                <span className="text-foreground">
                  $398
                </span>
              </div>
              <p className="leading-relaxed text-muted-foreground text-xs">
                Limited release · Ships in a week
              </p>
            </div>
          </article>
          <article className="flex flex-col gap-3 group/card min-w-0">
            <Item className="aspect-[4/5] border-0 group/media overflow-hidden p-0 relative shadow-none" variant="muted" size="default">
              <a className="absolute block focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring inset-0 outline-none" href="#" aria-label="View Pivot Softshell">
                <img className="absolute duration-500 ease-out inset-0 motion-reduce:transition-none motion-safe:group-hover/media:scale-105 object-cover size-full transition-transform" alt="Pivot Softshell in moss styled outdoors" loading="lazy" src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&h=1125&q=80" />
              </a>
              <Button className="absolute right-3 sm:focus-visible:opacity-100 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-3 transition-opacity" type="button" tabIndex="0" aria-label="Add Pivot Softshell to wishlist" aria-pressed="false">
                <svg className="lucide lucide-heart size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HeartIcon" tabler="IconHeart" hugeicons="FavouriteIcon" phosphor="HeartIcon" remixicon="RiHeartLine" aria-hidden="true">
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </Button>
              <Item className="absolute backdrop-blur-sm bg-background/95 border-0 bottom-3 duration-300 flex-col gap-2 inset-x-3 items-stretch max-sm:opacity-100 p-2.5 shadow-md sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 transition-opacity w-auto" variant="default" size="default">
                <div className="@container/field-group cn-field-group flex-col gap-1.5 grid grid-cols-5 group/field-group w-full" role="group" aria-label="Select size for Pivot Softshell">
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-pivot-softshell-size-xs" id="pg5-pivot-softshell-size-xs-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2b_" aria-checked="false" aria-label="Size XS, in stock" aria-labelledby="pg5-pivot-softshell-size-xs-label"></Checkbox>
                      <input id="pg5-pivot-softshell-size-xs" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        XS
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-pivot-softshell-size-s" id="pg5-pivot-softshell-size-s-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2e_" aria-checked="false" aria-label="Size S, in stock" aria-labelledby="pg5-pivot-softshell-size-s-label"></Checkbox>
                      <input id="pg5-pivot-softshell-size-s" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        S
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-pivot-softshell-size-m" id="pg5-pivot-softshell-size-m-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2h_" aria-checked="false" aria-label="Size M, in stock" aria-labelledby="pg5-pivot-softshell-size-m-label"></Checkbox>
                      <input id="pg5-pivot-softshell-size-m" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        M
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-pivot-softshell-size-l" id="pg5-pivot-softshell-size-l-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2k_" aria-checked="false" aria-label="Size L, in stock" aria-labelledby="pg5-pivot-softshell-size-l-label"></Checkbox>
                      <input id="pg5-pivot-softshell-size-l" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        L
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                  <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 p-0 peer-disabled:cursor-not-allowed relative select-none" htmlFor="pg5-pivot-softshell-size-xl" id="pg5-pivot-softshell-size-xl-label">
                    <Field className="border-border/70 h-8 hover:bg-muted/40 justify-center px-1.5 transition-colors" role="group" data-orientation="horizontal">
                      <Checkbox className="-right-1.5 -top-1.5 absolute border-none rounded-full shadow-none size-4" unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2n_" aria-checked="false" aria-label="Size XL, in stock" aria-labelledby="pg5-pivot-softshell-size-xl-label"></Checkbox>
                      <input id="pg5-pivot-softshell-size-xl" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      <FieldLabel className="cn-field-title font-medium items-center justify-center tabular-nums text-xs w-full">
                        XL
                      </FieldLabel>
                    </Field>
                  </FieldLabel>
                </div>
                <Button className="w-full" type="button" tabIndex="0" aria-label="Select a size for Pivot Softshell">
                  <svg className="lucide lucide-shopping-bag size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingBagIcon" tabler="IconShoppingBag" hugeicons="ShoppingBag01Icon" phosphor="ShoppingBagIcon" remixicon="RiShoppingBagLine" aria-hidden="true">
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                    <path d="M3.103 6.034h17.794"></path>
                    <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
                  </svg>
                  Select Size
                </Button>
              </Item>
            </Item>
            <div className="flex flex-col gap-1.5 min-w-0">
              <a className="font-medium hover:text-primary hover:underline text-muted-foreground text-xs tracking-[0.16em] transition-colors underline-offset-4 uppercase w-fit" href="#" aria-label="View all Wren & Field products">
                Wren & Field
              </a>
              <h3 className="font-medium leading-snug min-w-0 text-base text-foreground tracking-tight">
                <a className="block hover:text-primary hover:underline transition-colors truncate underline-offset-4" href="#">
                  Pivot Softshell
                </a>
              </h3>
              <div className="flex font-semibold gap-2 items-baseline min-w-0 tabular-nums text-base">
                <span className="text-foreground">
                  $158
                </span>
              </div>
              <p className="leading-relaxed text-muted-foreground text-xs">
                Members ship free · 2-3 days
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
