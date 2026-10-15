import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/bases/base/ui/navigation-menu"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex flex-col w-full">
      <header className="bg-background border-b border-border flex gap-2 h-12 items-center justify-between px-4 shrink-0 sticky top-0 w-full z-20">
        <div className="flex gap-3 items-center min-w-0">
          <div className="flex gap-2 items-center shrink-0">
            <Item className="bg-primary p-0 size-7 text-primary-foreground" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </ItemMedia>
            </Item>
            <span className="font-semibold hidden sm:inline text-sm">
              {"NeUI"}
            </span>
          </div>
          <Separator className="h-4 hidden md:block my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenu>
                <NavigationMenuTrigger type="button" aria-disabled="false" tabIndex="0" aria-expanded="false" baseUiNavigationMenuTrigger="">
                  {"Product"}
                  <svg className="cn-navigation-menu-trigger-icon lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </NavigationMenuTrigger>
                </NavigationMenu>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenu>
                <NavigationMenuTrigger type="button" aria-disabled="false" tabIndex="0" aria-expanded="false" baseUiNavigationMenuTrigger="">
                  {"Company"}
                  <svg className="cn-navigation-menu-trigger-icon lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </NavigationMenuTrigger>
                </NavigationMenu>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="cn-navigation-menu-trigger disabled:pointer-events-none group/navigation-menu-trigger h-9 inline-flex items-center justify-center outline-none w-max" href="#">
                  {"Pricing"}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center">
          <Button className="group/sliding overflow-hidden px-6 relative" type="button" tabIndex="0">
            <span className="duration-300 group-hover/sliding:-translate-x-2 inline-flex items-center transition-transform">
              {"Get Started"}
            </span>
            <svg className="absolute duration-300 group-hover/sliding:opacity-100 group-hover/sliding:translate-x-0 lucide lucide-arrow-right opacity-0 right-2.5 transition-all translate-x-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="auto-rows-min gap-4 grid md:grid-cols-3">
          <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
          <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
          <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
        </div>
        <div className="bg-muted/20 border border-border/70 border-dashed flex-1 min-h-[200px] rounded-lg"></div>
      </div>
    </div>
  )
}
