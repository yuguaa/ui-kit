import { Button } from "@/registry/bases/base/ui/button"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex justify-center lg:p-10 min-h-svh p-4 sm:p-6 w-full">
      <section className="max-w-6xl mx-auto w-full" aria-labelledby="collections-title">
        <header className="flex flex-wrap gap-x-6 gap-y-3 items-baseline justify-between pb-5">
          <div className="flex flex-wrap gap-x-3 gap-y-1 items-baseline">
            <h1 className="font-semibold text-2xl text-foreground tracking-tight" id="collections-title">
              {"Wishlist Collections"}
            </h1>
            <span className="tabular-nums text-muted-foreground text-sm">
              {"83 items across 6 collections"}
            </span>
          </div>
          <Button type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            {"New Collection"}
          </Button>
        </header>
        <Tabs data-orientation="horizontal" activationDirection="none">
          <TabsList className="gap-6 h-10! justify-start overflow-x-auto w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line" aria-label="Filter collections">
            <TabsTrigger className="after:-bottom-px! gap-2 px-1 text-sm" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-label="All Collections (6)">
              <span>
                {"All Collections"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                {"6"}
              </Badge>
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! gap-2 px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_" aria-label="Recently Updated (3)">
              <span>
                {"Recently Updated"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                {"3"}
              </Badge>
            </TabsTrigger>
            <TabsTrigger className="after:-bottom-px! gap-2 px-1 text-sm" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_" aria-label="Shared (2)">
              <span>
                {"Shared"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                {"2"}
              </Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <ul className="gap-x-6 gap-y-8 grid grid-cols-1 lg:grid-cols-3 mt-6 sm:grid-cols-2" role="list">
          <li className="min-w-0">
            <article className="flex flex-col gap-3 group/card h-full min-w-0">
              <div className="relative">
                <a className="block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-primary hover:underline outline-none transition-colors underline-offset-4" href="#collection-spring-capsule" aria-label="Open the Spring Capsule collection, 24 items">
                  <Item className="aspect-square border-0 group/mosaic overflow-hidden p-0 relative shadow-none" variant="muted" size="default" aria-label="Spring Capsule preview, 24 items">
                    <div className="absolute bg-muted gap-0.5 grid grid-cols-2 grid-rows-2 inset-0">
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Ribbed tank set in soft daylight studio" loading="lazy" src="https://images.unsplash.com/photo-1763499390110-8221cb9cc28f?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Cream studio coat on a clean studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1776273920142-f30bceff0cf3?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Sage quilted crossbody bag on a studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Sand suede mules on a soft studio surface" loading="lazy" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-primary border border-transparent bottom-3 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pointer-events-none px-1.25 py-0.5 right-3 shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-primary-foreground text-xs transition-shadow">
                      {"+20"}
                    </Badge>
                  </Item>
                </a>
                <div className="absolute duration-200 flex gap-1.5 opacity-100 pointer-events-none right-2.5 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10">
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Share the Spring Capsule collection">
                    <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                  </Button>
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Delete the Spring Capsule collection">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-semibold leading-tight text-base text-foreground tracking-tight">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#collection-spring-capsule">
                    {"Spring Capsule"}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-2 items-center tabular-nums text-muted-foreground text-xs">
                  <span>
                    {"24 items"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    {"Updated 2 days ago"}
                  </span>
                </div>
              </div>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-3 group/card h-full min-w-0">
              <div className="relative">
                <a className="block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-primary hover:underline outline-none transition-colors underline-offset-4" href="#collection-wedding-guest-looks" aria-label="Open the Wedding Guest Looks collection, 8 items">
                  <Item className="aspect-square border-0 group/mosaic overflow-hidden p-0 relative shadow-none" variant="muted" size="default" aria-label="Wedding Guest Looks preview, 8 items">
                    <div className="absolute bg-muted gap-0.5 grid grid-cols-2 grid-rows-2 inset-0">
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Black studio set styled on a fashion model" loading="lazy" src="https://images.unsplash.com/photo-1774813958356-652b1f2a6b4c?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Side slit tank set in editorial studio light" loading="lazy" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Sand suede mule heels on a soft studio surface" loading="lazy" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Sage quilted crossbody bag on a studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-primary border border-transparent bottom-3 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pointer-events-none px-1.25 py-0.5 right-3 shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-primary-foreground text-xs transition-shadow">
                      {"+4"}
                    </Badge>
                  </Item>
                </a>
                <div className="absolute duration-200 flex gap-1.5 opacity-100 pointer-events-none right-2.5 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10">
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Share the Wedding Guest Looks collection">
                    <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                  </Button>
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Delete the Wedding Guest Looks collection">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-semibold leading-tight text-base text-foreground tracking-tight">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#collection-wedding-guest-looks">
                    {"Wedding Guest Looks"}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-2 items-center tabular-nums text-muted-foreground text-xs">
                  <span>
                    {"8 items"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    {"Updated a week ago"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="flex gap-1 items-center text-foreground/80">
                    <svg className="lucide lucide-users size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    {"Shared"}
                  </span>
                </div>
              </div>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-3 group/card h-full min-w-0">
              <div className="relative">
                <a className="block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-primary hover:underline outline-none transition-colors underline-offset-4" href="#collection-cold-weather-essentials" aria-label="Open the Cold Weather Essentials collection, 15 items">
                  <Item className="aspect-square border-0 group/mosaic overflow-hidden p-0 relative shadow-none" variant="muted" size="default" aria-label="Cold Weather Essentials preview, 15 items">
                    <div className="absolute bg-muted gap-0.5 grid grid-cols-2 grid-rows-2 inset-0">
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Glossy puffer jacket on a fashion model" loading="lazy" src="https://images.unsplash.com/photo-1769689387681-42b8a41fa2de?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Leather biker jacket on a studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1762160766742-90dbea704e70?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Cream studio coat on a clean studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1776273920142-f30bceff0cf3?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Stone pleated wide trouser on a fashion model" loading="lazy" src="https://images.unsplash.com/photo-1674851993957-f5d6cacd5e1b?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-primary border border-transparent bottom-3 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pointer-events-none px-1.25 py-0.5 right-3 shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-primary-foreground text-xs transition-shadow">
                      {"+11"}
                    </Badge>
                  </Item>
                </a>
                <div className="absolute duration-200 flex gap-1.5 opacity-100 pointer-events-none right-2.5 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10">
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Share the Cold Weather Essentials collection">
                    <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                  </Button>
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Delete the Cold Weather Essentials collection">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-semibold leading-tight text-base text-foreground tracking-tight">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#collection-cold-weather-essentials">
                    {"Cold Weather Essentials"}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-2 items-center tabular-nums text-muted-foreground text-xs">
                  <span>
                    {"15 items"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    {"Updated 3 days ago"}
                  </span>
                </div>
              </div>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-3 group/card h-full min-w-0">
              <div className="relative">
                <a className="block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-primary hover:underline outline-none transition-colors underline-offset-4" href="#collection-studio-workwear" aria-label="Open the Studio Workwear collection, 12 items">
                  <Item className="aspect-square border-0 group/mosaic overflow-hidden p-0 relative shadow-none" variant="muted" size="default" aria-label="Studio Workwear preview, 12 items">
                    <div className="absolute bg-muted gap-0.5 grid grid-cols-2 grid-rows-2 inset-0">
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Stone pleated trouser styled on a model" loading="lazy" src="https://images.unsplash.com/photo-1674851993957-f5d6cacd5e1b?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Cream studio coat on a clean studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1776273920142-f30bceff0cf3?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Black studio set styled on a fashion model" loading="lazy" src="https://images.unsplash.com/photo-1774813958356-652b1f2a6b4c?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Sage quilted crossbody bag on a studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-primary border border-transparent bottom-3 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pointer-events-none px-1.25 py-0.5 right-3 shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-primary-foreground text-xs transition-shadow">
                      {"+8"}
                    </Badge>
                  </Item>
                </a>
                <div className="absolute duration-200 flex gap-1.5 opacity-100 pointer-events-none right-2.5 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10">
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Share the Studio Workwear collection">
                    <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                  </Button>
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Delete the Studio Workwear collection">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-semibold leading-tight text-base text-foreground tracking-tight">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#collection-studio-workwear">
                    {"Studio Workwear"}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-2 items-center tabular-nums text-muted-foreground text-xs">
                  <span>
                    {"12 items"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    {"Updated yesterday"}
                  </span>
                </div>
              </div>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-3 group/card h-full min-w-0">
              <div className="relative">
                <a className="block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-primary hover:underline outline-none transition-colors underline-offset-4" href="#collection-gifts-for-mom" aria-label="Open the Gifts For Mom collection, 6 items">
                  <Item className="aspect-square border-0 group/mosaic overflow-hidden p-0 relative shadow-none" variant="muted" size="default" aria-label="Gifts For Mom preview, 6 items">
                    <div className="absolute bg-muted gap-0.5 grid grid-cols-2 grid-rows-2 inset-0">
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Cream studio coat on a clean studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1776273920142-f30bceff0cf3?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Sand suede mules on a soft studio surface" loading="lazy" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Sage quilted crossbody bag on a studio backdrop" loading="lazy" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted-foreground/5" aria-hidden="true"></span>
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-primary border border-transparent bottom-3 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pointer-events-none px-1.25 py-0.5 right-3 shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-primary-foreground text-xs transition-shadow">
                      {"+3"}
                    </Badge>
                  </Item>
                </a>
                <div className="absolute duration-200 flex gap-1.5 opacity-100 pointer-events-none right-2.5 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10">
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Share the Gifts For Mom collection">
                    <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                  </Button>
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Delete the Gifts For Mom collection">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-semibold leading-tight text-base text-foreground tracking-tight">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#collection-gifts-for-mom">
                    {"Gifts For Mom"}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-2 items-center tabular-nums text-muted-foreground text-xs">
                  <span>
                    {"6 items"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    {"Updated 5 days ago"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span className="flex gap-1 items-center text-foreground/80">
                    <svg className="lucide lucide-users size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                    {"Shared"}
                  </span>
                </div>
              </div>
            </article>
          </li>
          <li className="min-w-0">
            <article className="flex flex-col gap-3 group/card h-full min-w-0">
              <div className="relative">
                <a className="block focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring hover:text-primary hover:underline outline-none transition-colors underline-offset-4" href="#collection-vacation-edit" aria-label="Open the Vacation Edit collection, 18 items">
                  <Item className="aspect-square border-0 group/mosaic overflow-hidden p-0 relative shadow-none" variant="muted" size="default" aria-label="Vacation Edit preview, 18 items">
                    <div className="absolute bg-muted gap-0.5 grid grid-cols-2 grid-rows-2 inset-0">
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Side slit tank set in editorial studio light" loading="lazy" src="https://images.unsplash.com/photo-1763499390053-c7067878efd6?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Ribbed tank set in soft daylight studio" loading="lazy" src="https://images.unsplash.com/photo-1763499390110-8221cb9cc28f?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Relaxed studio set on a fashion model" loading="lazy" src="https://images.unsplash.com/photo-1674851993263-823aef958e73?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                      <span className="bg-muted overflow-hidden relative">
                        <img className="absolute duration-500 ease-out group-hover/mosaic:scale-105 h-full inset-0 motion-reduce:transition-none object-cover transition-transform w-full" alt="Sand suede mules on a soft studio surface" loading="lazy" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&h=600&q=85" />
                      </span>
                    </div>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 absolute bg-primary border border-transparent bottom-3 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none pointer-events-none px-1.25 py-0.5 right-3 shadow-sm style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm tabular-nums text-primary-foreground text-xs transition-shadow">
                      {"+14"}
                    </Badge>
                  </Item>
                </a>
                <div className="absolute duration-200 flex gap-1.5 opacity-100 pointer-events-none right-2.5 sm:group-focus-within/card:opacity-100 sm:group-hover/card:opacity-100 sm:opacity-0 top-2.5 transition-opacity z-10">
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Share the Vacation Edit collection">
                    <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                  </Button>
                  <Button className="backdrop-blur-sm bg-background/90 hover:bg-background pointer-events-auto shadow-sm" type="button" tabIndex="0" aria-label="Delete the Vacation Edit collection">
                    <svg className="lucide lucide-trash-2 lucide-trash2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Trash2Icon" tabler="IconTrash" hugeicons="Delete02Icon" phosphor="TrashIcon" remixicon="RiDeleteBinLine" aria-hidden="true">
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                      <path d="M3 6h18"></path>
                      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="font-semibold leading-tight text-base text-foreground tracking-tight">
                  <a className="hover:text-primary hover:underline transition-colors underline-offset-4" href="#collection-vacation-edit">
                    {"Vacation Edit"}
                  </a>
                </h3>
                <div className="flex flex-wrap gap-2 items-center tabular-nums text-muted-foreground text-xs">
                  <span>
                    {"18 items"}
                  </span>
                  <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                  <span>
                    {"Updated 2 weeks ago"}
                  </span>
                </div>
              </div>
            </article>
          </li>
          <li className="min-w-0">
            <Item className="aspect-square border-dashed cursor-pointer flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring gap-2 hover:bg-muted/40 hover:text-foreground p-6 relative text-muted-foreground text-sm" type="button" aria-label="Create a new wishlist collection" variant="outline" size="default">
              <svg className="lucide lucide-plus size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <span className="font-medium">
                {"New Collection"}
              </span>
            </Item>
          </li>
        </ul>
      </section>
    </div>
  )
}
