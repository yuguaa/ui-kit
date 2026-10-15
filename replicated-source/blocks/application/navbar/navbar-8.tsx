import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex flex-col w-full">
      <header className="bg-background border-b border-border flex gap-3 h-12 items-center justify-between px-4 shrink-0 sticky top-0 w-full z-20">
        <div className="flex gap-2 items-center shrink-0">
          <Item className="bg-primary p-0 size-7 text-primary-foreground" variant="default" size="default">
            <ItemMedia className="size-auto" variant="icon">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </ItemMedia>
          </Item>
          <span className="font-semibold hidden sm:inline text-sm">
            {"Agentflow"}
          </span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <ButtonGroup className="**:data-[slot=button]:border-0" role="group">
            <Button type="button" tabIndex="0">
              {"All"}
            </Button>
            <ButtonGroupSeparator className="bg-primary/10 data-horizontal:h-px data-vertical:self-stretch data-vertical:w-px shrink-0" data-orientation="vertical" role="separator" aria-orientation="vertical"></ButtonGroupSeparator>
            <Button type="button" tabIndex="0">
              {"Code"}
            </Button>
            <ButtonGroupSeparator className="bg-primary/10 data-horizontal:h-px data-vertical:self-stretch data-vertical:w-px shrink-0" data-orientation="vertical" role="separator" aria-orientation="vertical"></ButtonGroupSeparator>
            <Button type="button" tabIndex="0">
              {"Research"}
            </Button>
            <ButtonGroupSeparator className="bg-primary/10 data-horizontal:h-px data-vertical:self-stretch data-vertical:w-px shrink-0" data-orientation="vertical" role="separator" aria-orientation="vertical"></ButtonGroupSeparator>
            <Button type="button" tabIndex="0">
              {"Data"}
            </Button>
          </ButtonGroup>
        </div>
        <div className="flex gap-2 items-center shrink-0">
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-rocket size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RocketIcon" tabler="IconRocket" hugeicons="RocketIcon" phosphor="RocketIcon" remixicon="RiRocketLine" aria-hidden="true">
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
              <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
            </svg>
            <span className="hidden sm:block">
              {"Deploy"}
            </span>
          </Button>
          <Popover>
          <PopoverTrigger className="[&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none relative select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="false">
            <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
            </svg>
            <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
          </PopoverTrigger>
          </Popover>
          <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center mx-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open profile for Nick Bold" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
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
        <div className="auto-rows-min gap-4 grid md:grid-cols-3">
          <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
          <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
          <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}
