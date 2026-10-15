import {
  Timeline,
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/registry-neui/bases/radix/neui/timeline"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
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
import { Textarea } from "@/registry/bases/base/ui/textarea"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <main className="bg-background flex items-start justify-center md:p-12 min-h-svh overflow-x-hidden p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Appointment detail
      </h1>
      <div className="flex flex-col gap-2 h-[calc(100svh-4rem)] max-w-md min-h-[360px] mx-auto py-6 w-full">
        <div className="flex gap-2 items-center justify-between px-1">
          <h2 className="font-semibold gap-1.5 inline-flex items-center text-foreground text-sm">
            <span>
              Today
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span>
              14 appointments
            </span>
          </h2>
          <Sheet>
          <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
            <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" data-icon="inline-start" aria-hidden="true">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M15 3v18"></path>
            </svg>
            Open Detail
          </SheetTrigger>
          </Sheet>
        </div>
        <ScrollArea className="flex-1 min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_2_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "371px"}} data-has-overflow-y="" data-overflow-y-end="">
            <ItemGroup className="gap-0.5" role="list">
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Hannah Brooks" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Hannah Brooks
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Gloss Refresh
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    9:00 AM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    Confirmed
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarFallback className="text-[10px]">
                      SC
                    </AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Sarah Chen
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Brow Shaping
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    9:30 AM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    Completed
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Mira Stone
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Cut and Blow-Dry
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    10:00 AM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    Completed
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Nora Vale
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Root Touch-Up
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    10:30 AM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    Confirmed
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Mira Stone
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Cut and Blow-Dry
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    11:00 AM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                    Completed
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Hannah Brooks" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Hannah Brooks
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Deep-Tissue Massage
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    12:00 PM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    Confirmed
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarFallback className="text-[10px]">
                      SC
                    </AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Sarah Chen
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Gel Manicure
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    1:15 PM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    Pending
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="border border-border gap-3" variant="muted" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Hannah Brooks" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Hannah Brooks
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Balayage
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    2:30 PM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    Confirmed
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Mira Stone
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Blowout
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    3:15 PM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    Confirmed
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Nora Vale
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Signature Facial
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    4:00 PM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    Confirmed
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarFallback className="text-[10px]">
                      SC
                    </AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Sarah Chen
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Lash Lift
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    4:45 PM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    Pending
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Hannah Brooks" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Hannah Brooks
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Toner Refresh
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    5:15 PM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                    Confirmed
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Mira Stone" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Mira Stone
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Scalp Treatment
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    6:00 PM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                    Pending
                  </Badge>
                </ItemActions>
              </Item>
              <Item className="gap-3" variant="default" size="sm" role="listitem">
                <ItemMedia variant="default">
                  <Avatar className="size-8" size="default">
                    <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0 min-w-0">
                  <ItemTitle className="font-medium text-sm truncate">
                    Nora Vale
                  </ItemTitle>
                  <ItemDescription className="text-xs truncate">
                    Color Consultation
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <span className="shrink-0 tabular-nums text-muted-foreground text-xs">
                    6:30 PM
                  </span>
                  <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
                    Cancelled
                  </Badge>
                </ItemActions>
              </Item>
            </ItemGroup>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_2_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "273.66238317757006px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
    </main>
    <Sheet>
    <SheetContent className="bg-popover flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(30rem,calc(100vw-2rem))] z-[60]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_4_" aria-describedby="base-ui-_r_5_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="border-b gap-0 p-0 shrink-0">
        <div className="flex gap-2 items-center justify-between min-h-11 px-5">
          <span className="font-mono gap-2 inline-flex items-center text-muted-foreground text-xs">
            <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            APT-4821
          </span>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close appointment detail">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <div className="flex flex-col gap-2 min-w-0 pb-4 pt-1 px-5">
          <div className="flex gap-2 items-center min-w-0">
            <SheetTitle className="flex flex-1 font-semibold gap-2 items-center min-w-0 text-lg tracking-tight" id="base-ui-_r_4_">
              <span>
                Tue, Jun 17
              </span>
              <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
              <span>
                2:30 PM
              </span>
            </SheetTitle>
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
              Confirmed
            </Badge>
          </div>
          <SheetDescription className="flex-wrap gap-x-1.5 inline-flex items-center text-muted-foreground text-xs" id="base-ui-_r_5_">
            <span>
              Balayage with Nora Vale · color station 3
            </span>
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span>
              120 min
            </span>
          </SheetDescription>
        </div>
      </SheetHeader>
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_6_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "796px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Client
                </h3>
              </div>
              <div className="flex gap-3 items-start">
                <Avatar className="size-9" size="default">
                  <AvatarImage alt="Hannah Brooks" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <div className="flex flex-1 flex-col gap-1 min-w-0">
                  <div className="flex gap-2 items-start justify-between">
                    <p className="font-medium leading-5 min-w-0 text-foreground text-sm">
                      Hannah Brooks
                    </p>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                      VIP
                    </Badge>
                  </div>
                  <p className="flex-wrap gap-x-1.5 inline-flex items-center text-muted-foreground text-xs">
                    <span className="gap-1 inline-flex items-center">
                      <svg className="lucide lucide-smartphone size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SmartphoneIcon" tabler="IconDeviceMobile" hugeicons="SmartPhone01Icon" phosphor="DeviceMobileIcon" remixicon="RiSmartphoneLine" aria-hidden="true">
                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                        <path d="M12 18h.01"></path>
                      </svg>
                      (415) 555-0148
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      9 visits
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Service
                </h3>
              </div>
              <div className="flex gap-3 items-end justify-between">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-medium text-foreground text-sm">
                    Balayage
                  </span>
                  <span className="gap-1.5 inline-flex items-center text-muted-foreground text-xs">
                    <span>
                      Color
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      150 min
                    </span>
                  </span>
                </div>
                <span className="font-semibold tabular-nums text-foreground text-sm">
                  $165
                </span>
              </div>
              <div className="flex gap-1.5 items-center mt-1 text-muted-foreground text-xs">
                <Avatar className="size-5" size="default">
                  <AvatarImage alt="Nora Vale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <span className="font-medium text-foreground">
                  Nora Vale
                </span>
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span>
                  Colorist
                </span>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Payment
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-3 items-start">
                  <div className="grid place-items-center relative shrink-0 size-5 text-muted-foreground">
                    <span className="[&_svg]:block [&_svg]:size-4 grid leading-none place-items-center size-5">
                      <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                        <line x1="2" x2="22" y1="10" y2="10"></line>
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-1 min-w-0">
                    <div className="flex gap-2 items-start justify-between">
                      <p className="font-medium leading-5 min-w-0 text-foreground text-sm">
                        $165 total
                      </p>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        Deposit paid
                      </Badge>
                    </div>
                    <p className="flex-wrap gap-x-1.5 inline-flex items-center text-muted-foreground text-xs">
                      <span>
                        Visa ending 4821
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="font-mono">
                        RCP-2210
                      </span>
                    </p>
                  </div>
                </div>
                <div className="bg-muted/55 h-1 mt-1.5 overflow-hidden relative rounded-full">
                  <div className="absolute bg-[repeating-linear-gradient(-45deg,currentColor_0,currentColor_1px,transparent_0,transparent_4px)] inset-0 opacity-20 pointer-events-none text-muted-foreground" aria-hidden="true"></div>
                  <Progress className="**:data-[slot=progress-indicator]:bg-warning **:data-[slot=progress-indicator]:rounded-none **:data-[slot=progress-track]:bg-transparent **:data-[slot=progress-track]:h-full **:data-[slot=progress-track]:rounded-none absolute gap-0 inset-0" progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="30" aria-valuetext="30%" role="progressbar">
                    <ProgressTrack progressing="">
                      <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "30%"}}></ProgressIndicator>
                    </ProgressTrack>
                    <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                      x
                    </span>
                  </Progress>
                </div>
                <div className="flex gap-2 items-center justify-between text-muted-foreground text-xs">
                  <span className="gap-1.5 inline-flex items-center">
                    <span>
                      Deposit $50
                    </span>
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      30%
                    </span>
                  </span>
                  <span className="tabular-nums">
                    Balance $115 due
                  </span>
                </div>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Details
                </h3>
              </div>
              <dl className="gap-x-4 gap-y-2.5 grid grid-cols-[7.5rem_1fr]">
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Booked via
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    Online · lumenstudio.app
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Chair
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    Color station 3
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    First visit
                  </dt>
                  <dd className="min-w-0 text-foreground text-sm">
                    Mar 4, 2024
                  </dd>
                </div>
                <div className="contents">
                  <dt className="text-muted-foreground text-sm">
                    Reference
                  </dt>
                  <dd className="font-mono min-w-0 text-foreground text-xs">
                    APT-4821
                  </dd>
                </div>
              </dl>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Internal Note
                </h3>
              </div>
              <Textarea className="border min-h-20 px-3 py-2 resize-none rounded-lg" id="appointment-internal-note" placeholder="Add a staff-only note, e.g. prefers low-ammonia color."></Textarea>
              <div className="flex gap-2 items-center justify-between">
                <p className="text-muted-foreground text-xs">
                  Visible to Lumen Studio staff only.
                </p>
                <Button type="button" tabIndex="0">
                  Save Note
                </Button>
              </div>
            </div>
            <Separator className="opacity-60" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-3 px-5 py-4">
              <div className="flex gap-2 items-center justify-between">
                <h3 className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                  Activity
                </h3>
              </div>
              <Timeline data-orientation="vertical">
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-info/10 border border-info/20 dark:bg-info/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-info" aria-hidden="true">
                      <svg className="lucide lucide-calendar size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        Appointment booked
                      </span>
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      Hannah Brooks booked Balayage online for the 2:30 PM color slot.
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Hannah Brooks" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        Hannah Brooks
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        Jun 12
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-warning/10 border border-warning/20 dark:bg-warning/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-warning" aria-hidden="true">
                      <svg className="lucide lucide-bell size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                        <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                        <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        Reminder sent
                      </span>
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      Automated SMS reminder went out 24 hours ahead to (415) 555-0148.
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarFallback className="text-[9px]">
                          SC
                        </AvatarFallback>
                      </Avatar>
                      <span>
                        Sarah Chen
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        Jun 16, 2:30 PM
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-success/10 border border-success/20 dark:bg-success/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-success" aria-hidden="true">
                      <svg className="lucide lucide-circle-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        Confirmed by client
                      </span>
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      Hannah replied YES to the reminder and kept the 2:30 PM slot.
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarImage alt="Hannah Brooks" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <span>
                        Hannah Brooks
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        Jun 16, 3:08 PM
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem className="has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-border">
                  <TimelineHeader className="flex gap-2.5 items-start min-w-0">
                    <TimelineSeparator className="bg-border group-data-[orientation=vertical]/timeline:h-[calc(100%-1.25rem-0.5rem)] group-data-[orientation=vertical]/timeline:translate-y-6" aria-hidden="true"></TimelineSeparator>
                    <TimelineIndicator className="[&_svg]:size-3 bg-primary/10 border dark:bg-primary/15 flex group-data-completed/timeline-item:border-border items-center justify-center size-5 text-primary" aria-hidden="true">
                      <svg className="lucide lucide-user-check size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserCheckIcon" tabler="IconUserCheck" hugeicons="UserCheck01Icon" phosphor="UserCheckIcon" remixicon="RiUserFollowLine" aria-hidden="true">
                        <path d="m16 11 2 2 4-4"></path>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </TimelineIndicator>
                    <TimelineTitle className="leading-5 min-w-0">
                      <span className="font-medium text-foreground">
                        Checked in at front desk
                      </span>
                    </TimelineTitle>
                  </TimelineHeader>
                  <TimelineContent className="flex flex-col gap-2 items-start min-w-0 pb-1">
                    <p className="leading-5 max-w-[52ch] text-muted-foreground text-sm">
                      Sarah Chen seated Hannah at color station 3 with Nora Vale.
                    </p>
                    <div className="flex gap-1.5 items-center text-muted-foreground text-xs">
                      <Avatar className="size-5" size="default">
                        <AvatarFallback className="text-[9px]">
                          SC
                        </AvatarFallback>
                      </Avatar>
                      <span>
                        Sarah Chen
                      </span>
                      <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                      <span className="tabular-nums">
                        2:24 PM
                      </span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_6_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "150.6919315403423px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter className="border-t flex-row gap-2 items-center px-5 py-3 shrink-0">
        <Button type="button" tabIndex="0">
          <svg className="lucide lucide-calendar-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CalendarClockIcon" tabler="IconCalendarTime" hugeicons="Calendar03Icon" phosphor="CalendarDotsIcon" remixicon="RiCalendarScheduleLine" data-icon="inline-start" aria-hidden="true">
            <path d="M16 14v2.2l1.6 1"></path>
            <path d="M16 2v4"></path>
            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
            <path d="M3 10h5"></path>
            <path d="M8 2v4"></path>
            <circle cx="16" cy="16" r="6"></circle>
          </svg>
          Reschedule
        </Button>
        <Button className="ms-auto" type="button" tabIndex="0">
          Mark No-show
        </Button>
        <Button type="button" tabIndex="0">
          <svg className="lucide lucide-user-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserCheckIcon" tabler="IconUserCheck" hugeicons="UserCheck01Icon" phosphor="UserCheckIcon" remixicon="RiUserFollowLine" data-icon="inline-start" aria-hidden="true">
            <path d="m16 11 2 2 4-4"></path>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
          </svg>
          Check-in
        </Button>
      </SheetFooter>
    </SheetContent>
    </Sheet>
  </>
  )
}
