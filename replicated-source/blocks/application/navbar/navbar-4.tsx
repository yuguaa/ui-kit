import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex flex-col w-full">
      <header className="bg-background border-b border-border flex gap-3 h-12 items-center px-4 shrink-0 sticky top-0 w-full z-20">
        <div className="flex gap-2 items-center shrink-0">
          <Item className="bg-primary p-0 size-7 text-primary-foreground" variant="default" size="default">
            <ItemMedia className="size-auto" variant="icon">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </ItemMedia>
          </Item>
          <span className="font-semibold hidden sm:inline text-sm">
            NeUI Admin
          </span>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Button className="flex justify-start lg:w-80 md:w-64 text-muted-foreground" type="button" tabIndex="0" aria-label="Search">
            <svg className="lucide lucide-search opacity-60 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            <span className="hidden md:inline">
              Search or jump to...
            </span>
            <Kbd className="ml-auto">
              ⌘K
            </Kbd>
          </Button>
          <DialogHeader className="sr-only">
            <DialogTitle id="base-ui-_r_1_">
              Search
            </DialogTitle>
            <DialogDescription id="base-ui-_r_2_">
              Search or jump to anything in your workspace.
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="flex gap-2 items-center shrink-0">
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <span>
              New
            </span>
          </Button>
          <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <Popover>
          <PopoverTrigger className="[&_svg]:hover:opacity-100 [&_svg]:opacity-60 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none relative select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Notifications" baseUiClickTrigger="" id="base-ui-_r_4_" aria-haspopup="dialog" aria-expanded="false">
            <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
            </svg>
            <span className="absolute bg-primary right-1 rounded-full size-1.5 top-0.5" aria-hidden="true"></span>
          </PopoverTrigger>
          </Popover>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center mx-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open profile for Nick Bold" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
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
