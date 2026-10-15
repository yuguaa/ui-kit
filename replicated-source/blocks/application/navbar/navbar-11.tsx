import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex flex-col w-full">
      <header className="bg-background border-b border-border flex gap-2 h-12 items-center justify-between px-4 shrink-0 sticky top-0 w-full z-20">
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center shrink-0">
            <Item className="bg-primary p-0 size-7 text-primary-foreground" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </ItemMedia>
            </Item>
            <span className="font-semibold hidden md:inline text-sm">
              {"DesignOps"}
            </span>
          </div>
          <Separator className="h-4 hidden my-auto sm:block" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 hidden min-w-5 outline-none px-1.25 py-0.5 relative sm:inline-flex style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
            {"v3.2.1"}
          </Badge>
        </div>
        <Tabs data-orientation="horizontal" activationDirection="none">
          <TabsList data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
            <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="">
              {"Patterns"}
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
              {"Tokens"}
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
              {"Icons"}
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
              {"Motion"}
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex gap-2 items-center">
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_7_" aria-expanded="false">
            <svg className="size-4" aria-hidden="true" viewBox="0 0 256 256">
              <path fill="none" d="M0 0h256v256H0z"></path>
              <path fill="none" stroke="currentColor" strokeWidth="25" strokeLinecap="round" d="M208 128l-80 80M192 40L40 192"></path>
            </svg>
            <span className="hidden md:inline">
              {"shadcn/ui Tokens"}
            </span>
          </DropdownMenuTrigger>
          </DropdownMenu>
          <Separator className="h-4 hidden my-auto sm:block" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center mx-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open profile for Nick Bold" aria-haspopup="menu" id="base-ui-_r_c_" aria-expanded="false">
            <Avatar className="rounded-md size-6" size="default">
              <AvatarImage alt="Nick Bold" src="https://images.unsplash.com/photo-1543299750-19d1d6297053?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
          </DropdownMenuTrigger>
          </DropdownMenu>
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
