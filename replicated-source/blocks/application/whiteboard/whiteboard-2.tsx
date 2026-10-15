import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
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
import { Separator } from "@/registry/bases/base/ui/separator"
import { Spinner } from "@/registry/bases/base/ui/spinner"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { ToggleGroup } from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="h-svh w-full">
      <div className="@container/board bg-background flex flex-col min-h-0 size-full text-foreground">
        <header className="@container/header bg-background border-b flex gap-2 h-12 items-center px-3 shrink-0 sticky top-0 z-20" aria-labelledby="_r_1_">
          <div className="flex flex-1 gap-2 items-center min-w-0">
            <h2 className="font-medium text-sm truncate" id="_r_1_">
              {"Sprint 42 Planning"}
            </h2>
            <span className="@max-md/header:hidden bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            <span className="@max-md/header:hidden shrink-0 tabular-nums text-muted-foreground text-xs">
              {"Sep 28 to Oct 9"}
            </span>
            <span className="data-[status=error]:text-destructive flex gap-1.5 items-center shrink-0 text-muted-foreground text-xs whitespace-nowrap" data-status="saved">
              <span className="sr-only" role="status" aria-live="polite">
                {"Saved"}
              </span>
              <span className="flex items-center justify-center shrink-0 size-4" aria-hidden="true">
                <Spinner className="hidden lucide lucide-loader-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Loader2Icon" tabler="IconLoader" hugeicons="Loading03Icon" phosphor="SpinnerIcon" remixicon="RiLoaderLine" role="presentation" aria-label="Loading" aria-hidden="true">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </Spinner>
                <svg className="hidden lucide lucide-triangle-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17h.01"></path>
                </svg>
                <svg className="hidden lucide lucide-cloud-upload size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CloudUploadIcon" tabler="IconCloudUpload" hugeicons="CloudUploadIcon" phosphor="CloudArrowUpIcon" remixicon="RiUploadCloud2Line" aria-hidden="true">
                  <path d="M12 13v8"></path>
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                  <path d="m8 17 4-4 4 4"></path>
                </svg>
                <svg className="lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </span>
              <span className="@max-md/header:hidden grid" aria-hidden="true">
                <span className="col-start-1 row-start-1">
                  {"Saved"}
                </span>
                <span className="col-start-1 invisible row-start-1">
                  {"Unsaved"}
                </span>
                <span className="col-start-1 invisible row-start-1">
                  {"Saving"}
                </span>
                <span className="col-start-1 invisible row-start-1">
                  {"Save failed"}
                </span>
              </span>
            </span>
          </div>
          <div className="flex gap-2 items-center shrink-0">
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [--halo:var(--background)] aria-expanded:[--halo:var(--muted)] cn-button cn-button-size-default cn-button-variant-ghost dark:hover:[--halo:color-mix(in_srgb,var(--muted)_50%,var(--background))] disabled:opacity-50 disabled:pointer-events-none group/button hover:[--halo:var(--muted)] inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Team, 3 here, 1 away" aria-haspopup="menu" id="base-ui-_r_8_" baseUiTooltipTrigger="" aria-expanded="false" extracted="1">
              <AvatarGroup className="*:data-[slot=avatar-group-count]:ring-(--halo) *:data-[slot=avatar]:ring-(--halo) *:data-[slot=avatar]:ring-4 -space-x-1">
                <Avatar className="dark:outline-(--ink-dark) data-[state=away]:grayscale data-[state=away]:opacity-50 outline-(--ink) outline-2 z-30" size="sm" data-state="active" style={{"--ink": "rgb(168 197 255)", "--ink-dark": "rgb(46 71 121)"}}>
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  <AvatarBadge className="bg-success ring-[color:var(--halo,var(--background))]"></AvatarBadge>
                </Avatar>
                <Avatar className="dark:outline-(--ink-dark) data-[state=away]:grayscale data-[state=away]:opacity-50 outline-(--ink) outline-2 z-20" size="sm" data-state="active" style={{"--ink": "rgb(212 168 255)", "--ink-dark": "rgb(103 66 140)"}}>
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  <AvatarBadge className="bg-success ring-[color:var(--halo,var(--background))]"></AvatarBadge>
                </Avatar>
                <Avatar className="@max-md/header:hidden dark:outline-(--ink-dark) data-[state=away]:grayscale data-[state=away]:opacity-50 outline-(--ink) outline-2 z-10" size="sm" data-state="idle" style={{"--ink": "rgb(255 168 226)", "--ink-dark": "rgb(128 53 103)"}}>
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  <AvatarBadge className="bg-[color:var(--halo,var(--background))] border-2 border-warning ring-[color:var(--halo,var(--background))]"></AvatarBadge>
                </Avatar>
                <AvatarGroupCount className="@max-md/header:hidden ms-1 tabular-nums text-xs" aria-hidden="true">
                  {"+1"}
                </AvatarGroupCount>
                <AvatarGroupCount className="@md/header:hidden ms-1 tabular-nums text-xs" aria-hidden="true">
                  {"+2"}
                </AvatarGroupCount>
              </AvatarGroup>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="@max-md/header:aspect-square @max-md/header:px-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none whitespace-nowrap" type="button" tabIndex="0" aria-pressed="false" id="base-ui-_r_c_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-radio" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RadioIcon" tabler="IconBroadcast" hugeicons="LiveStreaming02Icon" phosphor="BroadcastIcon" remixicon="RiRfidLine" aria-hidden="true">
                <path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path>
                <path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path>
                <path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path>
                <path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
              <span className="@max-md/header:sr-only">
                {"Present"}
              </span>
            </TooltipTrigger>
            </Tooltip>
            <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-default cn-toggle-variant-default disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 whitespace-nowrap" type="button" pressed="" tabIndex="0" aria-pressed="true" aria-label="Planning panel" aria-controls="_r_0_" id="base-ui-_r_f_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-panel-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelRightIcon" tabler="IconLayoutSidebarRight" hugeicons="SidebarRight01Icon" phosphor="SidebarSimpleIcon" remixicon="RiLayoutRightLine" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M15 3v18"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
          </div>
        </header>
        <div className="flex flex-1 min-h-0 overflow-hidden relative">
          <div className={"[&[data-wb-tool=selection]_.HintViewer]:hidden! [&_.LoadingMessage]:hidden! [&_.excalidraw_.scroll-back-to-content]:hidden! [:root:has(&)_.excalidraw-tooltip]:[--ui-font:var(--font-sans)]! [:root:has(&)_.excalidraw-tooltip]:[border-radius:var(--border-radius-md)]! [:root:has(&)_.excalidraw-tooltip]:bg-foreground! [:root:has(&)_.excalidraw-tooltip]:font-normal! [:root:has(&)_.excalidraw-tooltip]:px-3! [:root:has(&)_.excalidraw-tooltip]:py-1.5! [:root:has(&)_.excalidraw-tooltip]:text-background! [:root:has(&)_.excalidraw-tooltip]:text-xs! [:root:has(&)_.excalidraw.excalidraw-modal-container]:[--button-hover-bg:var(--accent)]! [:root:has(&)_.excalidraw.excalidraw-modal-container]:[--island-bg-color:var(--popover)]! [:root:has(&)_.excalidraw.theme--dark]:[--ExcTextField--background:color-mix(in_oklab,var(--input)_30%,transparent)]! [:root:has(&)_.excalidraw.theme--dark]:[--color-primary-light:color-mix(in_oklab,var(--primary)_24%,var(--background))]! [:root:has(&)_.excalidraw.theme--dark]:[--color-surface-primary-container:color-mix(in_oklab,var(--primary)_24%,var(--background))]! [:root:has(&)_.excalidraw.theme--dark_.context-menu-item.dangerous:hover]:bg-destructive/20! [:root:has(&)_.excalidraw.theme--dark_.default-sidebar_.sidebar-tab-trigger[data-state=active]]:[border:1px_solid_var(--input)]! [:root:has(&)_.excalidraw.theme--dark_.sidebar-tab-trigger[data-state=active]]:[--button-bg:color-mix(in_oklab,var(--input)_30%,transparent)]! [:root:has(&)_.excalidraw.theme--dark_.sidebar-tab-trigger[data-state=active]]:[--button-hover-bg:color-mix(in_oklab,var(--input)_30%,transparent)]! [:root:has(&)_.excalidraw.theme--dark_:is(.App-menu\\_\\_left,.App-mobile-menu)]:[--button-hover-bg:var(--accent)]! [:root:has(&)_.excalidraw]:[--ExcTextField--background:transparent]! [:root:has(&)_.excalidraw]:[--ExcTextField--border-active:var(--ring)]! [:root:has(&)_.excalidraw]:[--ExcTextField--border-hover:var(--input)]! [:root:has(&)_.excalidraw]:[--ExcTextField--border:var(--input)]! [:root:has(&)_.excalidraw]:[--ExcTextField--placeholder:var(--muted-foreground)]! [:root:has(&)_.excalidraw]:[--border-radius-lg:var(--radius)]! [:root:has(&)_.excalidraw]:[--border-radius-md:calc(var(--radius)_-_2px)]! [:root:has(&)_.excalidraw]:[--button-gray-1:var(--muted)]! [:root:has(&)_.excalidraw]:[--button-gray-2:var(--border)]! [:root:has(&)_.excalidraw]:[--button-gray-3:var(--input)]! [:root:has(&)_.excalidraw]:[--color-brand-active:var(--primary)]! [:root:has(&)_.excalidraw]:[--color-brand-hover:color-mix(in_oklab,var(--primary)_80%,transparent)]! [:root:has(&)_.excalidraw]:[--color-disabled:color-mix(in_oklab,var(--muted-foreground)_50%,transparent)]! [:root:has(&)_.excalidraw]:[--color-icon-white:var(--primary-foreground)]! [:root:has(&)_.excalidraw]:[--color-logo-text:var(--foreground)]! [:root:has(&)_.excalidraw]:[--color-on-primary-container:var(--primary)]! [:root:has(&)_.excalidraw]:[--color-on-surface:var(--foreground)]! [:root:has(&)_.excalidraw]:[--color-primary-darker:color-mix(in_oklab,var(--primary)_80%,transparent)]! [:root:has(&)_.excalidraw]:[--color-primary-darkest:var(--ring)]! [:root:has(&)_.excalidraw]:[--color-primary-hover:color-mix(in_oklab,var(--primary)_80%,transparent)]! [:root:has(&)_.excalidraw]:[--color-primary-light:color-mix(in_oklab,var(--primary)_12%,var(--background))]! [:root:has(&)_.excalidraw]:[--color-primary:var(--primary)]! [:root:has(&)_.excalidraw]:[--color-slider-thumb:var(--primary)]! [:root:has(&)_.excalidraw]:[--color-slider-track:var(--primary)]! [:root:has(&)_.excalidraw]:[--color-surface-high:var(--muted)]! [:root:has(&)_.excalidraw]:[--color-surface-low:var(--background)]! [:root:has(&)_.excalidraw]:[--color-surface-lowest:var(--background)]! [:root:has(&)_.excalidraw]:[--color-surface-mid:var(--muted)]! [:root:has(&)_.excalidraw]:[--color-surface-primary-container:color-mix(in_oklab,var(--primary)_12%,var(--background))]! [:root:has(&)_.excalidraw]:[--default-bg-color:var(--background)]! [:root:has(&)_.excalidraw]:[--default-border-color:var(--border)]! [:root:has(&)_.excalidraw]:[--default-button-size:2rem]! [:root:has(&)_.excalidraw]:[--default-icon-size:1rem]! [:root:has(&)_.excalidraw]:[--dialog-border-color:var(--border)]! [:root:has(&)_.excalidraw]:[--focus-highlight-color:color-mix(in_oklab,var(--ring)_50%,transparent)]! [:root:has(&)_.excalidraw]:[--input-bg-color:transparent]! [:root:has(&)_.excalidraw]:[--input-border-color:var(--input)]! [:root:has(&)_.excalidraw]:[--island-bg-color:var(--background)]! [:root:has(&)_.excalidraw]:[--keybinding-color:var(--muted-foreground)]! [:root:has(&)_.excalidraw]:[--lg-button-size:2rem]! [:root:has(&)_.excalidraw]:[--lg-icon-size:1rem]! [:root:has(&)_.excalidraw]:[--library-dropdown-shadow:var(--shadow-island)]! [:root:has(&)_.excalidraw]:[--link-color:var(--primary)]! [:root:has(&)_.excalidraw]:[--list-border-color:var(--border)]! [:root:has(&)_.excalidraw]:[--modal-shadow:none]! [:root:has(&)_.excalidraw]:[--popup-bg-color:var(--popover)]! [:root:has(&)_.excalidraw]:[--popup-secondary-bg-color:var(--popover)]! [:root:has(&)_.excalidraw]:[--popup-text-color:var(--popover-foreground)]! [:root:has(&)_.excalidraw]:[--scrollbar-thumb-hover:color-mix(in_oklab,var(--muted-foreground)_50%,transparent)]! [:root:has(&)_.excalidraw]:[--scrollbar-thumb:var(--border)]! [:root:has(&)_.excalidraw]:[--select-highlight-color:var(--primary)]! [:root:has(&)_.excalidraw]:[--shadow-island:0_0_0_1px_color-mix(in_oklab,var(--foreground)_10%,transparent),var(--shadow-sm)]! [:root:has(&)_.excalidraw]:[--sidebar-bg-color:var(--background)]! [:root:has(&)_.excalidraw]:[--sidebar-border-color:var(--border)]! [:root:has(&)_.excalidraw]:[--sidebar-shadow:none]! [:root:has(&)_.excalidraw]:[--ui-font:var(--font-sans)]! [:root:has(&)_.excalidraw_.App-bottom-bar>.Island_.App-toolbar-content]:gap-1! [:root:has(&)_.excalidraw_.App-bottom-bar>.Island_.App-toolbar-content]:justify-start! [:root:has(&)_.excalidraw_.App-bottom-bar>.Island_.App-toolbar-content]:min-h-[calc(var(--wb-control-size,2rem)+0.5rem)]! [:root:has(&)_.excalidraw_.App-bottom-bar>.Island_.App-toolbar-content]:p-1! [:root:has(&)_.excalidraw_.App-bottom-bar>.Island_.App-toolbar-content]:pe-[calc(var(--wb-control-size,2rem)*2+0.5rem)]! [:root:has(&)_.excalidraw_.App-bottom-bar>.Island_.App-toolbar-content]:ps-[calc(var(--wb-footer-width,0px)+0.5rem)]! [:root:has(&)_.excalidraw_.App-bottom-bar]:[--default-button-size:var(--wb-control-size,2rem)]! [:root:has(&)_.excalidraw_.App-menu\\_\\_left>.panelColumn]:min-h-0! [:root:has(&)_.excalidraw_.App-menu\\_\\_left>.panelColumn]:no-scrollbar! [:root:has(&)_.excalidraw_.App-menu\\_\\_left>.panelColumn]:overflow-x-hidden! [:root:has(&)_.excalidraw_.App-menu\\_\\_left>.panelColumn]:overflow-y-auto! [:root:has(&)_.excalidraw_.App-menu\\_\\_left>.panelColumn]:p-2! [:root:has(&)_.excalidraw_.App-menu\\_\\_left>.panelColumn]:scroll-fade-y! [:root:has(&)_.excalidraw_.App-menu\\_\\_left>.panelColumn]:scroll-py-10! [:root:has(&)_.excalidraw_.App-menu\\_\\_left]:flex! [:root:has(&)_.excalidraw_.App-menu\\_\\_left]:flex-col! [:root:has(&)_.excalidraw_.App-menu\\_\\_left]:overflow-hidden! [:root:has(&)_.excalidraw_.App-menu\\_\\_left]:p-0! [:root:has(&)_.excalidraw_.App-menu\\_\\_left]:w-44! [:root:has(&)_.excalidraw_.App-mobile-menu]:no-scrollbar! [:root:has(&)_.excalidraw_.App-mobile-menu]:scroll-fade-y! [:root:has(&)_.excalidraw_.App-toolbar.Island]:invisible! [:root:has(&)_.excalidraw_.HintViewer]:visible! [:root:has(&)_.excalidraw_.Modal\\_\\_background]:backdrop-blur-xs! [:root:has(&)_.excalidraw_.Modal\\_\\_background]:bg-black/10! [:root:has(&)_.excalidraw_.Modal\\_\\_content]:[border-radius:var(--border-radius-lg)]! [:root:has(&)_.excalidraw_.Toast]:[border-radius:var(--border-radius-lg)]! [:root:has(&)_.excalidraw_.Toast]:[box-shadow:var(--shadow-island)]! [:root:has(&)_.excalidraw_.Toast]:bg-popover! [:root:has(&)_.excalidraw_.Toast]:py-2! [:root:has(&)_.excalidraw_.Toast]:text-sm! [:root:has(&)_.excalidraw_.color-picker-content--default]:grid-cols-[repeat(5,1.5rem)]! [:root:has(&)_.excalidraw_.color-picker\\_\\_button--large]:size-6! [:root:has(&)_.excalidraw_.context-menu-item-separator]:-mx-1! [:root:has(&)_.excalidraw_.context-menu-item-separator]:border-border! [:root:has(&)_.excalidraw_.context-menu-item-separator]:my-1! [:root:has(&)_.excalidraw_.context-menu-item.checkmark]:before:hidden! [:root:has(&)_.excalidraw_.context-menu-item.checkmark_.context-menu-item\\_\\_label]:after:[content:\"\"]! [:root:has(&)_.excalidraw_.context-menu-item.checkmark_.context-menu-item\\_\\_label]:after:[mask:url(\"data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='M20%206%209%2017l-5-5'/%3E%3C/svg%3E\")_right/1rem_1rem_no-repeat]! [:root:has(&)_.excalidraw_.context-menu-item.checkmark_.context-menu-item\\_\\_label]:after:bg-current! [:root:has(&)_.excalidraw_.context-menu-item.checkmark_.context-menu-item\\_\\_label]:after:ms-auto! [:root:has(&)_.excalidraw_.context-menu-item.checkmark_.context-menu-item\\_\\_label]:after:shrink-0! [:root:has(&)_.excalidraw_.context-menu-item.checkmark_.context-menu-item\\_\\_label]:after:size-4! [:root:has(&)_.excalidraw_.context-menu-item.dangerous:hover]:bg-destructive/10! [:root:has(&)_.excalidraw_.context-menu-item.dangerous_.context-menu-item\\_\\_label]:text-destructive! [:root:has(&)_.excalidraw_.context-menu-item:focus-visible]:bg-accent! [:root:has(&)_.excalidraw_.context-menu-item:focus-visible]:outline-none! [:root:has(&)_.excalidraw_.context-menu-item:is(:hover,:focus-visible)]:[--popup-bg-color:var(--accent-foreground)]! [:root:has(&)_.excalidraw_.context-menu-item:is(:hover,:focus-visible)]:[--select-highlight-color:var(--accent)]! [:root:has(&)_.excalidraw_.context-menu-item\\_\\_label]:flex! [:root:has(&)_.excalidraw_.context-menu-item\\_\\_label]:flex-1! [:root:has(&)_.excalidraw_.context-menu-item\\_\\_label]:gap-4! [:root:has(&)_.excalidraw_.context-menu-item\\_\\_label]:items-center! [:root:has(&)_.excalidraw_.context-menu-item\\_\\_label]:me-0! [:root:has(&)_.excalidraw_.context-menu-item\\_\\_shortcut:not(:empty)]:ps-4! [:root:has(&)_.excalidraw_.context-menu-item\\_\\_shortcut]:opacity-100! [:root:has(&)_.excalidraw_.context-menu-item\\_\\_shortcut]:text-muted-foreground! [:root:has(&)_.excalidraw_.context-menu-item\\_\\_shortcut]:text-xs! [:root:has(&)_.excalidraw_.context-menu-item\\_\\_shortcut]:tracking-widest! [:root:has(&)_.excalidraw_.context-menu-item]:[border-radius:var(--border-radius-md)]! [:root:has(&)_.excalidraw_.context-menu-item]:flex! [:root:has(&)_.excalidraw_.context-menu-item]:gap-1.5! [:root:has(&)_.excalidraw_.context-menu-item]:h-7! [:root:has(&)_.excalidraw_.context-menu-item]:items-center! [:root:has(&)_.excalidraw_.context-menu-item]:min-w-32! [:root:has(&)_.excalidraw_.context-menu-item]:px-1.5! [:root:has(&)_.excalidraw_.context-menu-item]:py-0! [:root:has(&)_.excalidraw_.context-menu-item]:text-sm! [:root:has(&)_.excalidraw_.context-menu]:[border-radius:var(--border-radius-lg)]! [:root:has(&)_.excalidraw_.context-menu]:[box-shadow:var(--shadow-island)]! [:root:has(&)_.excalidraw_.context-menu]:border-0! [:root:has(&)_.excalidraw_.context-menu]:p-1! [:root:has(&)_.excalidraw_.default-sidebar_.sidebar-triggers]:bg-muted! [:root:has(&)_.excalidraw_.default-sidebar_.sidebar-triggers]:border-transparent! [:root:has(&)_.excalidraw_.dropdown-menu-button:hover]:[--background:var(--muted)]! [:root:has(&)_.excalidraw_.dropdown-menu-container>div:not([class])]:-mx-1! [:root:has(&)_.excalidraw_.dropdown-menu-container>div:not([class])]:my-1! [:root:has(&)_.excalidraw_.dropdown-menu-item:disabled]:opacity-50! [:root:has(&)_.excalidraw_.dropdown-menu-item:disabled]:pointer-events-none! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-container]:gap-0! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-container]:p-1! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-group-title]:font-medium! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-group-title]:m-0! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-group-title]:px-1.5! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-group-title]:py-1! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-group-title]:text-muted-foreground! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-group-title]:text-xs! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item:focus-visible]:[box-shadow:none]! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item:focus-visible]:bg-accent! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item\\_\\_shortcut]:opacity-100! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item\\_\\_shortcut]:ps-4! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item\\_\\_shortcut]:text-muted-foreground! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item\\_\\_shortcut]:tracking-widest! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item\\_\\_text]:gap-1.5! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item]:border-0! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item]:gap-1.5! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item]:h-7! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item]:m-0! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item]:px-1.5! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item]:text-sm! [:root:has(&)_.excalidraw_.dropdown-menu_.dropdown-menu-item]:w-full! [:root:has(&)_.excalidraw_.dropdown-menu_:is(.dropdown-menu-item\\_\\_shortcut,.dropdown-menu-item\\_\\_shortcut--orphaned)]:text-xs! [:root:has(&)_.excalidraw_.exc-stats\\_\\_row--heading]:font-medium! [:root:has(&)_.excalidraw_.exc-stats_h2]:font-medium! [:root:has(&)_.excalidraw_.exc-stats_h2]:text-sm! [:root:has(&)_.excalidraw_.exc-stats_h3]:font-medium! [:root:has(&)_.excalidraw_.exc-stats_h3]:text-muted-foreground! [:root:has(&)_.excalidraw_.exc-stats_h3]:text-xs! [:root:has(&)_.excalidraw_.focus-visible-none>.Island]:[--island-bg-color:var(--popover)]! [:root:has(&)_.excalidraw_.focus-visible-none>.Island]:p-2! [:root:has(&)_.excalidraw_.focus-visible-none>span]:hidden! [:root:has(&)_.excalidraw_.follow-mode]:hidden! [:root:has(&)_.excalidraw_.layer-ui\\_\\_search-header_.ExcTextField\\_\\_input]:bg-muted! [:root:has(&)_.excalidraw_.layer-ui\\_\\_wrapper\\_\\_footer-left]:ps-[calc(var(--wb-footer-width,0px)+0.5rem)]! [:root:has(&)_.excalidraw_.layer-ui\\_\\_wrapper\\_\\_footer-right]:hidden! [:root:has(&)_.excalidraw_.library-menu-browse-button]:hidden! [:root:has(&)_.excalidraw_.library-menu-control-buttons--at-bottom]:hidden! [:root:has(&)_.excalidraw_.library-menu-items-container\\_\\_header--excal+div:not(.library-menu-items-container\\_\\_grid)]:hidden! [:root:has(&)_.excalidraw_.library-menu-items-container\\_\\_header--excal:not(:has(+.library-menu-items-container\\_\\_grid))]:hidden! [:root:has(&)_.excalidraw_.library-menu-items-container\\_\\_header]:font-medium! [:root:has(&)_.excalidraw_.library-menu-items-container\\_\\_header]:text-foreground! [:root:has(&)_.excalidraw_.library-menu-items-container\\_\\_header]:text-sm! [:root:has(&)_.excalidraw_.main-menu-trigger.dropdown-menu-button--mobile]:hidden! [:root:has(&)_.excalidraw_.main-menu-trigger]:invisible! [:root:has(&)_.excalidraw_.popover[style*=overflow]]:no-scrollbar! [:root:has(&)_.excalidraw_.popover[style*=overflow]]:scroll-fade-y! [:root:has(&)_.excalidraw_.popover[style*=overflow]]:scroll-py-10! [:root:has(&)_.excalidraw_.range-wrapper]:mb-1! [:root:has(&)_.excalidraw_.range-wrapper]:text-xs! [:root:has(&)_.excalidraw_.sidebar-tab-trigger[data-state=active]]:[--button-bg:var(--background)]! [:root:has(&)_.excalidraw_.sidebar-tab-trigger[data-state=active]]:[--button-hover-bg:var(--background)]! [:root:has(&)_.excalidraw_.sidebar-tab-trigger[data-state=active]]:text-foreground! [:root:has(&)_.excalidraw_.sidebar-tab-trigger]:[--button-active-bg:var(--button-bg)]! [:root:has(&)_.excalidraw_.sidebar-tab-trigger]:[--button-color:var(--muted-foreground)]! [:root:has(&)_.excalidraw_.sidebar-tab-trigger]:[--button-hover-color:var(--foreground)]! [:root:has(&)_.excalidraw_.sidebar-trigger\\_\\_label-element:has(.default-sidebar-trigger)]:hidden! [:root:has(&)_.excalidraw_.welcome-screen-decor]:[font-family:inherit]! [:root:has(&)_.excalidraw_.welcome-screen-menu-item:hover_.welcome-screen-menu-item\\_\\_text]:text-foreground! [:root:has(&)_.excalidraw_.welcome-screen-menu-item\\_\\_icon_svg]:size-4! [:root:has(&)_.excalidraw_:is(.App-menu\\_\\_left,.App-mobile-menu)]:[--default-button-size:1.75rem]! [:root:has(&)_.excalidraw_:is(.App-menu\\_\\_left,.App-mobile-menu)_.color-picker\\_\\_button.active-color]:size-6! [:root:has(&)_.excalidraw_:is(.App-menu\\_\\_left,.App-mobile-menu)_.color-picker\\_\\_button]:size-5! [:root:has(&)_.excalidraw_:is(.App-menu\\_\\_left,.App-mobile-menu)_.panelColumn]:gap-y-2! [:root:has(&)_.excalidraw_:is(.App-menu\\_\\_left,.App-mobile-menu)_.panelColumn_.buttonList]:gap-1! [:root:has(&)_.excalidraw_:is(.App-menu\\_\\_left,.App-mobile-menu)_.panelColumn_.buttonList]:py-0! [:root:has(&)_.excalidraw_:is(.App-menu\\_\\_left,.App-mobile-menu)_.panelColumn_:is(legend,h3,.control-label)]:text-muted-foreground! [:root:has(&)_.excalidraw_:is(.ExcTextField\\_\\_label,.ExcTextField\\_\\_input_input)]:[font-family:inherit]! [:root:has(&)_.excalidraw_:is(.UserList\\_\\_wrapper,.UserList-Wrapper)]:hidden! [:root:has(&)_.excalidraw_:is(.dropdown-menu-button,.sidebar-tab-trigger)]:p-0! [:root:has(&)_.excalidraw_:is(.dropdown-menu-button,.sidebar-tab-trigger)_svg]:shrink-0! [:root:has(&)_.excalidraw_:is(.dropdown-menu-button,.sidebar-tab-trigger)_svg]:size-4! [:root:has(&)_.excalidraw_:is(.dropdown-menu-container,.picker,.context-menu,.Toast,.ElementLinkDialog,.focus-visible-none>.Island)]:[--shadow-island:0_0_0_1px_color-mix(in_oklab,var(--foreground)_10%,transparent),var(--shadow-md)]! [:root:has(&)_.excalidraw_:is(.dropdown-menu-container,.properties-content)]:[--button-hover-bg:var(--accent)]! [:root:has(&)_.excalidraw_:is(.dropdown-menu-container,.properties-content)]:[--island-bg-color:var(--popover)]! [:root:has(&)_.excalidraw_:is(.dropdown-menu:not(.manual-hover)_.dropdown-menu-item:is(:hover,:focus-visible),.dropdown-menu-item--hovered)]:[--color-on-surface:var(--accent-foreground)]! [:root:has(&)_.excalidraw_:is(.library-menu-items-container,.dropdown-menu-container,.Modal\\_\\_content)]:no-scrollbar! [:root:has(&)_.excalidraw_:is(.library-menu-items-container\\_\\_items,.layer-ui\\_\\_search-result-container,.ScrollableList\\_\\_wrapper)]:no-scrollbar! [:root:has(&)_.excalidraw_:is(.library-menu-items-container\\_\\_items,.layer-ui\\_\\_search-result-container,.ScrollableList\\_\\_wrapper)]:scroll-fade-y! [:root:has(&)_.excalidraw_:is(.undo-redo-buttons,.App-toolbar-content>div:has(>[data-testid=button-undo]))]:hidden! [:root:has(&)_.excalidraw_:is(.welcome-screen-decor,.welcome-screen-menu-item,.welcome-screen-menu-item\\_\\_shortcut,.HintViewer,.Dialog\\_\\_close)]:text-muted-foreground! [:root:has(&)_.excalidraw_:is(.zoom-actions,.mobile-misc-tools-container)]:hidden! [:root:has(&)_.excalidraw_[data-testid=lib-dropdown--remove]]:hidden! [:root:has(&)_.excalidraw_svg[focusable=false]:not([fill=currentColor],:has([fill=currentColor],[fill^=var]),[data-testid^=fill-]_svg,label:has(>[data-testid^=strokeWidth])_svg,label:has(>[name=strokeStyle])_svg)_:is(path,line,polyline,polygon,circle,ellipse,rect)]:[stroke-width:1.33px]! [:root:has(&)_.excalidraw_svg[focusable=false]:not([fill=currentColor],:has([fill=currentColor],[fill^=var]),[data-testid^=fill-]_svg,label:has(>[data-testid^=strokeWidth])_svg,label:has(>[name=strokeStyle])_svg)_:is(path,line,polyline,polygon,circle,ellipse,rect)]:[vector-effect:non-scaling-stroke]! bg-background data-keyboard-focus:ring-2 data-keyboard-focus:ring-inset data-keyboard-focus:ring-ring/50 flex-1 isolate min-h-0 min-w-0 overflow-hidden relative size-full"} role="region" aria-label="Sprint 42 Planning board" aria-busy="false" style={{"--wb-footer-width": "344px", "--wb-control-size": "32px"}} data-wb-tool="selection">
            <div className="[--wb-grid-ink:color-mix(in_oklab,var(--wb-grid-line)_var(--wb-grid-fade,100%),transparent)] [--wb-grid-line:color-mix(in_oklab,var(--foreground)_3%,transparent)] [background-image:linear-gradient(to_right,var(--wb-grid-ink)_1px,transparent_1px),linear-gradient(to_bottom,var(--wb-grid-ink)_1px,transparent_1px)] [background-position:var(--wb-grid-x,0px)_var(--wb-grid-y,0px)] [background-size:var(--wb-grid-gap,20px)_var(--wb-grid-gap,20px)] absolute dark:[--wb-grid-line:color-mix(in_oklab,var(--foreground)_4%,transparent)] inset-0 pointer-events-none" aria-hidden="true" style={{"--wb-grid-gap": "12px", "--wb-grid-x": "25.600000000000044px", "--wb-grid-y": "88.10000000000002px", "--wb-grid-fade": "100%"}}></div>
            <div className="excalidraw excalidraw-container" tabIndex="0" style={{"--ui-pointerEvents": "all", "--right-sidebar-width": "302px"}}>
              <div className="layer-ui__wrapper">
                <div className="FixedSideContainer FixedSideContainer_side_top">
                  <div className="App-menu App-menu_top">
                    <div className="App-menu_top__left Stack Stack_vertical" style={{"--gap": "6"}}>
                      <div style={{position: "relative"}}>
                        <button className="dropdown-menu-button main-menu-trigger zen-mode-transition" data-prevent-outside-click="true" type="button" data-testid="main-menu-trigger">
                          <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                            <g strokeWidth="1.5">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <line x1="4" y1="6" x2="20" y2="6"></line>
                              <line x1="4" y1="12" x2="20" y2="12"></line>
                              <line x1="4" y1="18" x2="20" y2="18"></line>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <section className="shapes-section" aria-labelledby="O3UrguvPOqKR0Sz_JNAMi-shapes-title">
                      <div style={{position: "relative"}}>
                        <div className="Stack Stack_vertical" style={{"--gap": "4", justifyItems: "start"}}>
                          <div className="App-toolbar-container Stack Stack_horizontal" style={{"--gap": "1"}}>
                            <div className="App-toolbar Island" style={{"--padding": "1"}}>
                              <div className="HintViewer">
                                <span>
                                  {"To move canvas, hold mouse wheel or spacebar while dragging, or use the hand tool"}
                                </span>
                              </div>
                              <h2 className="visually-hidden" id="O3UrguvPOqKR0Sz_JNAMi-shapes-title">
                                {"Shapes"}
                              </h2>
                              <div className="Stack Stack_horizontal" style={{"--gap": "1"}}>
                                <label className="ToolIcon ToolIcon__lock ToolIcon_size_medium" title="Keep selected tool active after drawing — Q">
                                  <input className="ToolIcon_type_checkbox" aria-label="Keep selected tool active after drawing" data-testid="toolbar-lock" type="checkbox" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                      <g>
                                        <path d="M13.542 8.542H6.458a2.5 2.5 0 0 0-2.5 2.5v3.75a2.5 2.5 0 0 0 2.5 2.5h7.084a2.5 2.5 0 0 0 2.5-2.5v-3.75a2.5 2.5 0 0 0-2.5-2.5Z" stroke="currentColor" strokeWidth="1.25"></path>
                                        <path d="M10 13.958a1.042 1.042 0 1 0 0-2.083 1.042 1.042 0 0 0 0 2.083Z" stroke="currentColor" strokeWidth="1.25"></path>
                                        <mask id="UnlockedIcon" maskUnits="userSpaceOnUse" x="6" y="1" width="9" height="9" style={{maskType: "alpha"}}>
                                          <path stroke="none" d="M6.399 9.561V5.175c0-.93.401-1.823 1.116-2.48a3.981 3.981 0 0 1 2.693-1.028c1.01 0 1.98.37 2.694 1.027.715.658 1.116 1.55 1.116 2.481" fill="#fff"></path>
                                        </mask>
                                        <g mask="url(#UnlockedIcon)">
                                          <path stroke="none" d="M5.149 9.561v1.25h2.5v-1.25h-2.5Zm5.06-7.894V.417v1.25Zm2.559 3.508v1.25h2.5v-1.25h-2.5ZM7.648 8.51V5.175h-2.5V8.51h2.5Zm0-3.334c0-.564.243-1.128.713-1.561L6.668 1.775c-.959.883-1.52 2.104-1.52 3.4h2.5Zm.713-1.561a2.732 2.732 0 0 1 1.847-.697v-2.5c-1.31 0-2.585.478-3.54 1.358L8.36 3.614Zm1.847-.697c.71 0 1.374.26 1.847.697l1.694-1.839a5.231 5.231 0 0 0-3.54-1.358v2.5Zm1.847.697c.47.433.713.997.713 1.561h2.5c0-1.296-.56-2.517-1.52-3.4l-1.693 1.839Z" fill="currentColor"></path>
                                        </g>
                                      </g>
                                    </svg>
                                  </div>
                                </label>
                                <div className="App-toolbar__divider"></div>
                                <label className="Shape ToolIcon" title="Hand (panning tool) — H">
                                  <input className="ToolIcon_size_medium ToolIcon_type_radio" aria-label="Hand (panning tool) — H" aria-keyshortcuts="h" data-testid="toolbar-hand" id="O3UrguvPOqKR0Sz_JNAMi-undefined" type="radio" name="editor-current-shape" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                      <g strokeWidth="1.25">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 13v-7.5a1.5 1.5 0 0 1 3 0v6.5"></path>
                                        <path d="M11 5.5v-2a1.5 1.5 0 1 1 3 0v8.5"></path>
                                        <path d="M14 5.5a1.5 1.5 0 0 1 3 0v6.5"></path>
                                        <path d="M17 7.5a1.5 1.5 0 0 1 3 0v8.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
                                      </g>
                                    </svg>
                                  </div>
                                </label>
                                <label className="Shape ToolIcon fillable" title="Selection — V or 1">
                                  <input className="ToolIcon_size_medium ToolIcon_type_radio" aria-label="Selection" aria-keyshortcuts="V or 1" data-testid="toolbar-selection" id="O3UrguvPOqKR0Sz_JNAMi-undefined" type="radio" checked name="editor-current-shape" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 22 22" fill="none" strokeWidth="1.25">
                                      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M6 6l4.153 11.793a0.365 .365 0 0 0 .331 .207a0.366 .366 0 0 0 .332 -.207l2.184 -4.793l4.787 -1.994a0.355 .355 0 0 0 .213 -.323a0.355 .355 0 0 0 -.213 -.323l-11.787 -4.36z"></path>
                                        <path d="M13.5 13.5l4.5 4.5"></path>
                                      </g>
                                    </svg>
                                    <span className="ToolIcon__keybinding">
                                      {"1"}
                                    </span>
                                  </div>
                                </label>
                                <label className="Shape ToolIcon fillable" title="Rectangle — R or 2">
                                  <input className="ToolIcon_size_medium ToolIcon_type_radio" aria-label="Rectangle" aria-keyshortcuts="R or 2" data-testid="toolbar-rectangle" id="O3UrguvPOqKR0Sz_JNAMi-undefined" type="radio" name="editor-current-shape" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                      <g strokeWidth="1.5">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                      </g>
                                    </svg>
                                    <span className="ToolIcon__keybinding">
                                      {"2"}
                                    </span>
                                  </div>
                                </label>
                                <label className="Shape ToolIcon fillable" title="Diamond — D or 3">
                                  <input className="ToolIcon_size_medium ToolIcon_type_radio" aria-label="Diamond" aria-keyshortcuts="D or 3" data-testid="toolbar-diamond" id="O3UrguvPOqKR0Sz_JNAMi-undefined" type="radio" name="editor-current-shape" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                      <g strokeWidth="1.5">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z"></path>
                                      </g>
                                    </svg>
                                    <span className="ToolIcon__keybinding">
                                      {"3"}
                                    </span>
                                  </div>
                                </label>
                                <label className="Shape ToolIcon fillable" title="Ellipse — O or 4">
                                  <input className="ToolIcon_size_medium ToolIcon_type_radio" aria-label="Ellipse" aria-keyshortcuts="O or 4" data-testid="toolbar-ellipse" id="O3UrguvPOqKR0Sz_JNAMi-undefined" type="radio" name="editor-current-shape" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                      <g strokeWidth="1.5">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                      </g>
                                    </svg>
                                    <span className="ToolIcon__keybinding">
                                      {"4"}
                                    </span>
                                  </div>
                                </label>
                                <label className="Shape ToolIcon fillable" title="Arrow — A or 5">
                                  <input className="ToolIcon_size_medium ToolIcon_type_radio" aria-label="Arrow" aria-keyshortcuts="A or 5" data-testid="toolbar-arrow" id="O3UrguvPOqKR0Sz_JNAMi-undefined" type="radio" name="editor-current-shape" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                      <g strokeWidth="1.5">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <line x1="15" y1="16" x2="19" y2="12"></line>
                                        <line x1="15" y1="8" x2="19" y2="12"></line>
                                      </g>
                                    </svg>
                                    <span className="ToolIcon__keybinding">
                                      {"5"}
                                    </span>
                                  </div>
                                </label>
                                <label className="Shape ToolIcon fillable" title="Line — L or 6">
                                  <input className="ToolIcon_size_medium ToolIcon_type_radio" aria-label="Line" aria-keyshortcuts="L or 6" data-testid="toolbar-line" id="O3UrguvPOqKR0Sz_JNAMi-undefined" type="radio" name="editor-current-shape" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M4.167 10h11.666" strokeWidth="1.5"></path>
                                    </svg>
                                    <span className="ToolIcon__keybinding">
                                      {"6"}
                                    </span>
                                  </div>
                                </label>
                                <label className="Shape ToolIcon" title="Draw — P or 7">
                                  <input className="ToolIcon_size_medium ToolIcon_type_radio" aria-label="Draw" aria-keyshortcuts="P or 7" data-testid="toolbar-freedraw" id="O3UrguvPOqKR0Sz_JNAMi-undefined" type="radio" name="editor-current-shape" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                      <g strokeWidth="1.25">
                                        <path clipRule="evenodd" d="m7.643 15.69 7.774-7.773a2.357 2.357 0 1 0-3.334-3.334L4.31 12.357a3.333 3.333 0 0 0-.977 2.357v1.953h1.953c.884 0 1.732-.352 2.357-.977Z"></path>
                                        <path d="m11.25 5.417 3.333 3.333"></path>
                                      </g>
                                    </svg>
                                    <span className="ToolIcon__keybinding">
                                      {"7"}
                                    </span>
                                  </div>
                                </label>
                                <label className="Shape ToolIcon" title="Text — T or 8">
                                  <input className="ToolIcon_size_medium ToolIcon_type_radio" aria-label="Text" aria-keyshortcuts="T or 8" data-testid="toolbar-text" id="O3UrguvPOqKR0Sz_JNAMi-undefined" type="radio" name="editor-current-shape" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                      <g strokeWidth="1.5">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="4" y1="20" x2="7" y2="20"></line>
                                        <line x1="14" y1="20" x2="21" y2="20"></line>
                                        <line x1="6.9" y1="15" x2="13.8" y2="15"></line>
                                        <line x1="10.2" y1="6.3" x2="16" y2="20"></line>
                                        <polyline points="5 20 11 4 13 4 20 20"></polyline>
                                      </g>
                                    </svg>
                                    <span className="ToolIcon__keybinding">
                                      {"8"}
                                    </span>
                                  </div>
                                </label>
                                <label className="Shape ToolIcon" title="Insert image — 9">
                                  <input className="ToolIcon_size_medium ToolIcon_type_radio" aria-label="Insert image" aria-keyshortcuts="9" data-testid="toolbar-image" id="O3UrguvPOqKR0Sz_JNAMi-undefined" type="radio" name="editor-current-shape" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                      <g strokeWidth="1.25">
                                        <path d="M12.5 6.667h.01"></path>
                                        <path d="M4.91 2.625h10.18a2.284 2.284 0 0 1 2.285 2.284v10.182a2.284 2.284 0 0 1-2.284 2.284H4.909a2.284 2.284 0 0 1-2.284-2.284V4.909a2.284 2.284 0 0 1 2.284-2.284Z"></path>
                                        <path d="m3.333 12.5 3.334-3.333c.773-.745 1.726-.745 2.5 0l4.166 4.166"></path>
                                        <path d="m11.667 11.667.833-.834c.774-.744 1.726-.744 2.5 0l1.667 1.667"></path>
                                      </g>
                                    </svg>
                                    <span className="ToolIcon__keybinding">
                                      {"9"}
                                    </span>
                                  </div>
                                </label>
                                <label className="Shape ToolIcon" title="Eraser — E or 0">
                                  <input className="ToolIcon_size_medium ToolIcon_type_radio" aria-label="Eraser" aria-keyshortcuts="E or 0" data-testid="toolbar-eraser" id="O3UrguvPOqKR0Sz_JNAMi-undefined" type="radio" name="editor-current-shape" />
                                  <div className="ToolIcon__icon">
                                    <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                      <g strokeWidth="1.5">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3"></path>
                                        <path d="M18 13.3l-6.3 -6.3"></path>
                                      </g>
                                    </svg>
                                    <span className="ToolIcon__keybinding">
                                      {"0"}
                                    </span>
                                  </div>
                                </label>
                                <div className="App-toolbar__divider"></div>
                                <button className="App-toolbar__extra-tools-trigger dropdown-menu-button zen-mode-transition" data-prevent-outside-click="true" type="button" data-testid="dropdown-menu-button" title="More tools">
                                  <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <g strokeWidth="1.5">
                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                      <path d="M12 3l-4 7h8z"></path>
                                      <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                      <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                                    </g>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="layer-ui__wrapper__top-right zen-mode-transition">
                      <div className="UserList__wrapper">
                        <div className="UserList" style={{"--max-avatars": "1"}}>
                          <button className="UserList__more" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_r_3l_" data-state="closed">
                            {"+4"}
                          </button>
                        </div>
                      </div>
                      <label className="sidebar-trigger__label-element" title="Library">
                        <input className="ToolIcon_type_checkbox" aria-label="Library" aria-keyshortcuts="0" type="checkbox" />
                        <div className="default-sidebar-trigger sidebar-trigger">
                          <div>
                            <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                              <g strokeWidth="1.25">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                                <line x1="3" y1="6" x2="3" y2="19"></line>
                                <line x1="12" y1="6" x2="12" y2="19"></line>
                                <line x1="21" y1="6" x2="21" y2="19"></line>
                              </g>
                            </svg>
                          </div>
                          <div className="sidebar-trigger__label">
                            {"Library"}
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <footer className="App-menu App-menu_bottom layer-ui__wrapper__footer" role="contentinfo">
                  <div className="layer-ui__wrapper__footer-left zen-mode-transition">
                    <div className="Stack Stack_vertical" style={{"--gap": "2"}}>
                      <section aria-labelledby="O3UrguvPOqKR0Sz_JNAMi-canvasActions-title">
                        <h2 className="visually-hidden" id="O3UrguvPOqKR0Sz_JNAMi-canvasActions-title">
                          {"Canvas actions"}
                        </h2>
                        <div className="Stack Stack_vertical zoom-actions" style={{"--gap": "1"}}>
                          <div className="Stack Stack_horizontal" style={{alignItems: "center"}}>
                            <button className="ToolIcon ToolIcon_size_medium ToolIcon_type_button ToolIcon_type_button--show zoom-button zoom-out-button" title="Zoom out — Cmd+-" aria-label="Zoom out" type="button">
                              <div className="ToolIcon__icon" aria-hidden="true" aria-disabled="false">
                                <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 10h10" strokeWidth="1.25"></path>
                                </svg>
                              </div>
                            </button>
                            <div className="excalidraw-tooltip-wrapper" style={{height: "100%"}}>
                              <button className="ToolIcon ToolIcon_size_medium ToolIcon_type_button ToolIcon_type_button--show reset-zoom-button zoom-button" title="Reset zoom" aria-label="Reset zoom" type="button">
                                {"60%"}
                              </button>
                            </div>
                            <button className="ToolIcon ToolIcon_size_medium ToolIcon_type_button ToolIcon_type_button--show zoom-button zoom-in-button" title="Zoom in — Cmd++" aria-label="Zoom in" type="button">
                              <div className="ToolIcon__icon" aria-hidden="true" aria-disabled="false">
                                <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                  <path strokeWidth="1.25" d="M10 4.167v11.666M4.167 10h11.666"></path>
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                        <div className="undo-redo-buttons zen-mode-transition">
                          <div className="undo-button-container">
                            <div className="excalidraw-tooltip-wrapper">
                              <button className="ToolIcon ToolIcon_size_medium ToolIcon_type_button ToolIcon_type_button--show" data-testid="button-undo" aria-label="Undo" type="button" disabled>
                                <div className="ToolIcon__icon" aria-hidden="true" aria-disabled="true">
                                  <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7.5 10.833 4.167 7.5 7.5 4.167M4.167 7.5h9.166a3.333 3.333 0 0 1 0 6.667H12.5" strokeWidth="1.25"></path>
                                  </svg>
                                </div>
                              </button>
                            </div>
                          </div>
                          <div className="redo-button-container">
                            <div className="excalidraw-tooltip-wrapper">
                              <button className="ToolIcon ToolIcon_size_medium ToolIcon_type_button ToolIcon_type_button--show" data-testid="button-redo" aria-label="Redo" type="button" disabled>
                                <div className="ToolIcon__icon" aria-hidden="true" aria-disabled="true">
                                  <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12.5 10.833 15.833 7.5 12.5 4.167M15.833 7.5H6.667a3.333 3.333 0 1 0 0 6.667H7.5" strokeWidth="1.25"></path>
                                  </svg>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="layer-ui__wrapper__footer-right zen-mode-transition">
                    <div style={{position: "relative"}}>
                      <button className="help-icon" type="button" title="Help — ?" aria-label="Help">
                        <svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                          <g strokeWidth="1.5">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <line x1="12" y1="17" x2="12" y2="17.01"></line>
                            <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button className="disable-zen-mode" type="button">
                    {"Exit zen mode"}
                  </button>
                </footer>
              </div>
              <div className="excalidraw-textEditorContainer"></div>
              <div className="excalidraw-contextMenuContainer"></div>
              <div className="excalidraw-eye-dropper-container"></div>
              <div className="SVGLayer">
                <svg></svg>
              </div>
              <div className="excalidraw__canvas-wrapper">
                <canvas className="excalidraw__canvas static" width="992" height="585" style={{width: "992px", height: "585px"}}></canvas>
              </div>
              <canvas className="excalidraw__canvas interactive" width="992" height="585" style={{width: "992px", height: "585px"}}>
                {"Drawing canvas"}
              </canvas>
              <div id="O3UrguvPOqKR0Sz_JNAMi-frame-name-frm_goal" style={{position: "absolute", bottom: "499.9px", left: "25.6px", zIndex: "2", fontSize: "14px", color: "rgb(153, 153, 153)", lineHeight: "1.25", width: "max-content", maxWidth: "736px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", cursor: "move", pointerEvents: "all"}}>
                {"Sprint Goal"}
              </div>
              <div id="O3UrguvPOqKR0Sz_JNAMi-frame-name-frm_risks" style={{position: "absolute", bottom: "499.9px", left: "524.8px", zIndex: "2", fontSize: "14px", color: "rgb(153, 153, 153)", lineHeight: "1.25", width: "max-content", maxWidth: "736px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", cursor: "move", pointerEvents: "all"}}>
                {"Risks"}
              </div>
              <div id="O3UrguvPOqKR0Sz_JNAMi-frame-name-frm_express_pay" style={{position: "absolute", bottom: "334.3px", left: "25.6px", zIndex: "2", fontSize: "14px", color: "rgb(153, 153, 153)", lineHeight: "1.25", width: "max-content", maxWidth: "320px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", cursor: "move", pointerEvents: "all"}}>
                {"Express Pay"}
              </div>
              <div id="O3UrguvPOqKR0Sz_JNAMi-frame-name-frm_receipts" style={{position: "absolute", bottom: "334.3px", left: "275.2px", zIndex: "2", fontSize: "14px", color: "rgb(153, 153, 153)", lineHeight: "1.25", width: "max-content", maxWidth: "320px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", cursor: "move", pointerEvents: "all"}}>
                {"Receipts"}
              </div>
              <div id="O3UrguvPOqKR0Sz_JNAMi-frame-name-frm_offline" style={{position: "absolute", bottom: "334.3px", left: "524.8px", zIndex: "2", fontSize: "14px", color: "rgb(153, 153, 153)", lineHeight: "1.25", width: "max-content", maxWidth: "320px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", cursor: "move", pointerEvents: "all"}}>
                {"Offline Research"}
              </div>
              <div id="O3UrguvPOqKR0Sz_JNAMi-frame-name-frm_parked" style={{position: "absolute", bottom: "334.3px", left: "774.4px", zIndex: "2", fontSize: "14px", color: "rgb(153, 153, 153)", lineHeight: "1.25", width: "max-content", maxWidth: "320px", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", cursor: "move", pointerEvents: "all"}}>
                {"Parked"}
              </div>
            </div>
            <div className="absolute group/wb-overlay inset-0 overflow-hidden pointer-events-none z-2" data-theme="light" aria-hidden="true" inert="" data-remote-selection="shown">
              <div className="absolute data-hidden:opacity-0 duration-150 in-data-[demo=frozen]:transition-none left-0 motion-reduce:transition-none top-0 transition-opacity" style={{transform: "translate(188px, 284px)"}}>
                <Avatar className="-translate-x-1/2 -translate-y-1/2 ring-2 ring-background" size="sm">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </div>
              <div className="absolute data-hidden:opacity-0 duration-150 in-data-[demo=frozen]:transition-none left-0 motion-reduce:transition-none top-0 transition-opacity" style={{transform: "translate(188px, 339px)"}}>
                <Avatar className="-translate-x-1/2 -translate-y-1/2 ring-2 ring-background" size="sm">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </div>
              <div className="absolute data-hidden:opacity-0 duration-150 in-data-[demo=frozen]:transition-none left-0 motion-reduce:transition-none top-0 transition-opacity" style={{transform: "translate(188px, 394px)"}}>
                <Avatar className="-translate-x-1/2 -translate-y-1/2 ring-2 ring-background" size="sm">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </div>
              <div className="absolute data-hidden:opacity-0 duration-150 in-data-[demo=frozen]:transition-none left-0 motion-reduce:transition-none top-0 transition-opacity" style={{transform: "translate(188px, 449px)"}}>
                <Avatar className="-translate-x-1/2 -translate-y-1/2 ring-2 ring-background" size="sm">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </div>
              <div className="absolute data-hidden:opacity-0 duration-150 in-data-[demo=frozen]:transition-none left-0 motion-reduce:transition-none top-0 transition-opacity" style={{transform: "translate(437px, 284px)"}}>
                <Avatar className="-translate-x-1/2 -translate-y-1/2 ring-2 ring-background" size="sm">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </div>
              <div className="absolute data-hidden:opacity-0 duration-150 in-data-[demo=frozen]:transition-none left-0 motion-reduce:transition-none top-0 transition-opacity" style={{transform: "translate(437px, 339px)"}}>
                <Avatar className="-translate-x-1/2 -translate-y-1/2 ring-2 ring-background" size="sm">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </div>
              <div className="absolute data-hidden:opacity-0 duration-150 in-data-[demo=frozen]:transition-none left-0 motion-reduce:transition-none top-0 transition-opacity" style={{transform: "translate(437px, 394px)"}}>
                <Avatar className="-translate-x-1/2 -translate-y-1/2 ring-2 ring-background" size="sm">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </div>
              <div className="absolute data-hidden:opacity-0 duration-150 in-data-[demo=frozen]:transition-none left-0 motion-reduce:transition-none top-0 transition-opacity" style={{transform: "translate(687px, 284px)"}}>
                <Avatar className="-translate-x-1/2 -translate-y-1/2 ring-2 ring-background" size="sm">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </div>
              <div className="absolute data-hidden:opacity-0 duration-150 in-data-[demo=frozen]:transition-none left-0 motion-reduce:transition-none top-0 transition-opacity" style={{transform: "translate(687px, 339px)"}}>
                <Avatar className="-translate-x-1/2 -translate-y-1/2 ring-2 ring-background" size="sm">
                  <AvatarImage alt="" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
              </div>
              <div className="absolute data-hidden:opacity-0 duration-150 group-data-[remote-selection=hidden]/wb-overlay:invisible in-data-[demo=frozen]:transition-none left-0 motion-reduce:transition-none top-0 transition-opacity" style={{transform: "translate(295px, 272px)"}}>
                <Badge className="-translate-y-full [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 in-data-[demo=frozen]:transition-none min-w-5 motion-reduce:transition-none outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-opacity">
                  <span className="group-data-[theme=dark]/wb-overlay:[filter:invert(93%)_hue-rotate(180deg)] rounded-full size-2" aria-hidden="true" style={{backgroundColor: "rgb(212, 168, 255)"}}></span>
                  {"Sofia"}
                </Badge>
              </div>
              <div className="absolute data-hidden:opacity-0 duration-150 group-data-[remote-selection=hidden]/wb-overlay:invisible in-data-[demo=frozen]:transition-none left-0 motion-reduce:transition-none top-0 transition-opacity" style={{transform: "translate(46px, 272px)"}}>
                <Badge className="-translate-y-full [&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-background border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none duration-200 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 in-data-[demo=frozen]:transition-none min-w-5 motion-reduce:transition-none outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-xs transition-opacity">
                  <span className="group-data-[theme=dark]/wb-overlay:[filter:invert(93%)_hue-rotate(180deg)] rounded-full size-2" aria-hidden="true" style={{backgroundColor: "rgb(255, 168, 226)"}}></span>
                  {"Omar"}
                </Badge>
              </div>
            </div>
            <div className="@container absolute inset-0 pointer-events-none z-10">
              <div className="absolute left-4 top-4">
                <div className="bg-background pointer-events-auto">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shadow-sm shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Board menu" aria-haspopup="menu" id="base-ui-_r_l_" baseUiTooltipTrigger="" aria-expanded="false">
                    <svg className="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                      <path d="M4 5h16"></path>
                      <path d="M4 12h16"></path>
                      <path d="M4 19h16"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
              </div>
              <div className="-translate-x-1/2 absolute left-1/2 pointer-events-auto top-4">
                <ToggleGroup className="bg-background shadow-sm" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Tools" style={{"--gap": "0"}}>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Hand" aria-keyshortcuts="H" id="base-ui-_r_p_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-hand" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HandIcon" tabler="IconHandStop" hugeicons="HandIcon" phosphor="HandIcon" remixicon="RiHand" aria-hidden="true">
                      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path>
                      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path>
                      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path>
                      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="-1" aria-pressed="true" variant="outline" size="default" spacing="0" aria-label="Selection" aria-keyshortcuts="V" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-mouse-pointer-2 lucide-mouse-pointer2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MousePointer2Icon" tabler="IconPointer" hugeicons="Cursor01Icon" phosphor="CursorIcon" remixicon="RiCursorLine" aria-hidden="true">
                      <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Rectangle" aria-keyshortcuts="R" id="base-ui-_r_v_" baseUiTooltipTrigger="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Diamond" aria-keyshortcuts="D" id="base-ui-_r_12_" baseUiTooltipTrigger="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M10.5 20.4l-6.9-6.9c-.78-.78-.78-2.22 0-3l6.9-6.9c.78-.78 2.22-.78 3 0l6.9 6.9c.78.78.78 2.22 0 3l-6.9 6.9c-.78.78-2.22.78-3 0z"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Ellipse" aria-keyshortcuts="O" id="base-ui-_r_15_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-circle" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleIcon" tabler="IconCircle" hugeicons="CircleIcon" phosphor="CircleIcon" remixicon="RiCircleLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Arrow" aria-keyshortcuts="A" id="base-ui-_r_18_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Line" aria-keyshortcuts="L" id="base-ui-_r_1b_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Draw" aria-keyshortcuts="P" id="base-ui-_r_1e_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Text" aria-keyshortcuts="T" id="base-ui-_r_1h_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-type" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TypeIcon" tabler="IconLetterT" hugeicons="TextIcon" phosphor="TextTIcon" remixicon="RiText" aria-hidden="true">
                      <path d="M12 4v16"></path>
                      <path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path>
                      <path d="M9 20h6"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Image" aria-keyshortcuts="9" id="base-ui-_r_1k_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ImageIcon" tabler="IconPhoto" hugeicons="Image01Icon" phosphor="ImageIcon" remixicon="RiImageLine" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Eraser" aria-keyshortcuts="E" id="base-ui-_r_1n_" baseUiTooltipTrigger="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M19 20h-10.5l-4.21-4.3a1 1 0 0 1 0-1.41l10-10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3"></path>
                      <path d="M18 13.3l-6.3-6.3"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="More tools" aria-haspopup="menu" id="base-ui-_r_1t_" baseUiTooltipTrigger="" aria-expanded="false">
                    <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </ToggleGroup>
              </div>
              <div className="absolute right-4 top-4">
                <div className="flex gap-2 items-center pointer-events-auto shrink-0">
                  <ToggleGroup className="bg-background shadow-sm" multiple="" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="Estimate Together" style={{"--gap": "0"}}>
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Estimate Together" id="base-ui-_r_22_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </ToggleGroup>
                  <div className="bg-background">
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shadow-sm shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Add to Log" id="base-ui-_r_25_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-square-pen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquarePenIcon" tabler="IconEdit" hugeicons="PencilEdit02Icon" phosphor="NotePencilIcon" remixicon="RiEditBoxLine" aria-hidden="true">
                        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 flex gap-2 items-center left-4 pointer-events-auto">
                <ButtonGroup className="*:shadow-sm [&>*+*:focus-visible]:[clip-path:none] [&>*+*]:[clip-path:polygon(-8px_-8px,calc(100%+8px)_-8px,calc(100%+8px)_calc(100%+8px),-8px_calc(100%+8px),-8px_100%,0_100%,0_0,-8px_0)] bg-background" role="group" aria-label="Zoom">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-disabled="false" aria-label="Zoom Out" id="base-ui-_r_27_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-minus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MinusIcon" tabler="IconMinus" hugeicons="MinusSignIcon" phosphor="MinusIcon" remixicon="RiSubtractLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center min-w-16 outline-none select-none shrink-0 tabular-nums transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Zoom 60%, zoom options" aria-haspopup="menu" id="base-ui-_r_2c_" baseUiTooltipTrigger="" aria-expanded="false">
                    {"60%"}
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-disabled="false" aria-label="Zoom In" id="base-ui-_r_2g_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </ButtonGroup>
                <div className="bg-background">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shadow-sm shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-disabled="false" aria-label="Zoom to Fit" aria-keyshortcuts="Shift+1" id="base-ui-_r_2i_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-maximize-2 lucide-maximize2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Maximize2Icon" tabler="IconMaximize" hugeicons="Maximize01Icon" phosphor="CornersOutIcon" remixicon="RiFullscreenLine" aria-hidden="true">
                      <path d="M15 3h6v6"></path>
                      <path d="m21 3-7 7"></path>
                      <path d="m3 21 7-7"></path>
                      <path d="M9 21H3v-6"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </div>
                <ToggleGroup className="bg-background shadow-sm" multiple="" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" spacing="0" aria-label="View" style={{"--gap": "0"}}>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="0" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Grid" aria-keyshortcuts="Control+' Meta+'" id="base-ui-_r_2k_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-grid-2x2 lucide-grid2x2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Grid2x2Icon" tabler="IconBorderAll" hugeicons="Grid2X2Icon" phosphor="GridFourIcon" remixicon="RiLayoutGrid2Line" aria-hidden="true">
                      <path d="M12 3v18"></path>
                      <path d="M3 12h18"></path>
                      <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="Snap to Objects" aria-keyshortcuts="Alt+S" id="base-ui-_r_2n_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-combine" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CombineIcon" tabler="IconLayersIntersect" hugeicons="CombineIcon" phosphor="IntersectSquareIcon" remixicon="RiShapesLine" aria-hidden="true">
                      <path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"></path>
                      <path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"></path>
                      <path d="m7 15 3 3"></path>
                      <path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2"></path>
                      <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                      <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-group-item cn-toggle-size-default cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] focus-visible:z-10 focus:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-0 shrink-0 whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="default" spacing="0" aria-label="View Only" aria-keyshortcuts="Alt+R" id="base-ui-_r_2q_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-lock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LockIcon" tabler="IconLock" hugeicons="SquareLock01Icon" phosphor="LockSimpleIcon" remixicon="RiLockLine" aria-hidden="true">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </ToggleGroup>
                <ButtonGroup className="*:shadow-sm [&>*+*:focus-visible]:[clip-path:none] [&>*+*]:[clip-path:polygon(-8px_-8px,calc(100%+8px)_-8px,calc(100%+8px)_calc(100%+8px),-8px_calc(100%+8px),-8px_100%,0_100%,0_0,-8px_0)] bg-background" role="group" aria-label="History">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" aria-disabled="true" aria-label="Undo" aria-keyshortcuts="Control+Z Meta+Z" id="base-ui-_r_2t_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-undo-2 lucide-undo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Undo2Icon" tabler="IconArrowBackUp" hugeicons="Undo02Icon" phosphor="ArrowUUpLeftIcon" remixicon="RiArrowGoBackLine" aria-hidden="true">
                      <path d="M9 14 4 9l5-5"></path>
                      <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex="0" aria-disabled="true" aria-label="Redo" aria-keyshortcuts="Control+Shift+Z Meta+Shift+Z" id="base-ui-_r_2v_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-redo-2 lucide-redo2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Redo2Icon" tabler="IconArrowForwardUp" hugeicons="Redo02Icon" phosphor="ArrowUUpRightIcon" remixicon="RiArrowGoForwardLine" aria-hidden="true">
                      <path d="m15 14 5-5-5-5"></path>
                      <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </ButtonGroup>
              </div>
              <div className="absolute bottom-4 pointer-events-auto right-4">
                <ButtonGroup className="*:shadow-sm [&>*+*:focus-visible]:[clip-path:none] [&>*+*]:[clip-path:polygon(-8px_-8px,calc(100%+8px)_-8px,calc(100%+8px)_calc(100%+8px),-8px_calc(100%+8px),-8px_100%,0_100%,0_0,-8px_0)] bg-background" role="group" aria-label="Frames">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-disabled="false" aria-label="Previous Frame" aria-keyshortcuts="[" id="base-ui-_r_3b_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-chevron-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronLeftIcon" tabler="IconChevronLeft" hugeicons="ArrowLeft01Icon" phosphor="CaretLeftIcon" remixicon="RiArrowLeftSLine" aria-hidden="true">
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all w-36 whitespace-nowrap" type="button" tabIndex="0" aria-label="6 Frames, choose a frame" aria-haspopup="menu" id="base-ui-_r_3g_" baseUiTooltipTrigger="" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 7h16M4 17h16M7 4v16M17 4v16"></path>
                    </svg>
                    <span className="min-w-0 truncate">
                      {"6 Frames"}
                    </span>
                  </TooltipTrigger>
                  </Tooltip>
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-disabled:opacity-50 aria-disabled:pointer-events-none cn-button cn-button-size-icon cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-disabled="false" aria-label="Next Frame" aria-keyshortcuts="]" id="base-ui-_r_3k_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <aside className="bg-background border-l flex flex-col shrink-0 w-72" id="_r_0_" aria-label="Planning panel" style={{opacity: "1", transform: "none"}}>
            <Tabs className="flex-1 gap-0 min-h-0" data-orientation="horizontal" activationDirection="none">
              <div className="p-3 shrink-0">
                <TabsList className="w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                  <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_33_" compositeItemActive="" aria-controls="base-ui-_r_35_">
                    {"Plan"}
                  </TabsTrigger>
                  <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_34_">
                    {"Log"}
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent className="animate-in duration-150 fade-in-0 flex flex-col min-h-0 motion-reduce:animate-none" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_35_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_33_">
                <div className="pb-2 px-3 shrink-0">
                  <InputGroup role="group">
                    <InputGroupAddon role="group" data-align="inline-start">
                      <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                      </svg>
                    </InputGroupAddon>
                    <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_36_" placeholder="Find a card" aria-label="Find a card" value="" />
                  </InputGroup>
                  <span className="sr-only" role="status" aria-live="polite"></span>
                </div>
                <div className="-mt-1 flex-1 min-h-0 no-scrollbar overflow-y-auto pb-3 pt-1 px-3 scroll-fade-y scroll-py-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                      <section className="pb-1" aria-label="Sprint capacity">
                        <Item className="flex-col gap-2 items-stretch py-0" variant="default" size="xs">
                          <div className="flex gap-2 items-center justify-between">
                            <span className="text-muted-foreground text-xs">
                              {"Committed"}
                            </span>
                            <span className="flex gap-1.5 items-center">
                              <span className="font-medium tabular-nums text-sm">
                                {"26 of 31 pts"}
                              </span>
                            </span>
                          </div>
                          <Progress progressing="" aria-valuemax="31" aria-valuemin="0" aria-valuenow="26" aria-valuetext="26 of 31 points" role="progressbar" aria-label="Committed points">
                            <ProgressTrack progressing="">
                              <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "83.871%"}}></ProgressIndicator>
                            </ProgressTrack>
                            <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                              {"x"}
                            </span>
                          </Progress>
                          <p className="tabular-nums text-muted-foreground text-xs">
                            {"11 pts parked"}
                          </p>
                        </Item>
                      </section>
                      <section className="flex flex-col gap-1.5" aria-label="Lanes">
                        <Item className="flex-nowrap justify-between min-h-6 py-0" variant="default" size="xs">
                          <h3 className="font-medium text-muted-foreground text-xs">
                            {"Lanes"}
                          </h3>
                        </Item>
                        <ItemGroup className="gap-0.5" role="list">
                          <Item className="dark:data-current:bg-muted/50 dark:hover:bg-muted/30 data-current:bg-muted flex-nowrap has-[[data-row-select]:focus-visible]:border-ring has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-inset has-[[data-row-select]:focus-visible]:ring-ring/50 hover:bg-muted/50 relative" variant="default" size="xs" role="listitem">
                            <ItemMedia variant="default">
                              <IconTile variant="elevated" size="sm">
                                <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                              <ItemTitle className="font-normal min-h-5 w-full">
                                <button className="after:absolute after:inset-0 aria-disabled:cursor-default cursor-pointer min-w-0 outline-none text-start" type="button" data-row-select="">
                                  <span className="block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] group-has-[:focus-visible]/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--row-slide": "0px"}}>
                                    <span className="duration-150 ease-linear group-has-[:focus-visible]/item:duration-[2500ms] group-has-[:focus-visible]/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] group-hover/item:duration-[2500ms] group-hover/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] inline-block max-w-none motion-reduce:transition-none pointer-coarse:whitespace-normal transition-transform whitespace-nowrap">
                                      {"Express Pay"}
                                    </span>
                                  </span>
                                </button>
                              </ItemTitle>
                              <ItemDescription className="tabular-nums text-xs/normal">
                                <span className="block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] group-has-[:focus-visible]/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--row-slide": "0px"}}>
                                  <span className="align-top duration-150 ease-linear gap-1.5 group-has-[:focus-visible]/item:duration-[2500ms] group-has-[:focus-visible]/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] group-hover/item:duration-[2500ms] group-hover/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] inline-flex items-center max-w-none motion-reduce:transition-none pointer-coarse:flex-wrap pointer-coarse:whitespace-normal transition-transform whitespace-nowrap">
                                    {"Omar Farouk"}
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="sr-only">
                                      {","}
                                    </span>
                                    {"13 of 13 pts"}
                                  </span>
                                </span>
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="duration-150 gap-1 group-focus-within/item:not-sr-only group-focus-within/item:opacity-100 group-hover/item:not-sr-only group-hover/item:opacity-100 motion-reduce:transition-none opacity-0 pointer-coarse:not-sr-only pointer-coarse:opacity-100 sr-only transition-opacity">
                              <Tooltip>
                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-foreground/10 inline-flex items-center justify-center outline-none relative select-none shrink-0 transition-all whitespace-nowrap z-10" type="button" tabIndex="0" aria-label="Add a card to Express Pay" id="base-ui-_r_3n_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                            </ItemActions>
                          </Item>
                          <Item className="dark:data-current:bg-muted/50 dark:hover:bg-muted/30 data-current:bg-muted flex-nowrap has-[[data-row-select]:focus-visible]:border-ring has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-inset has-[[data-row-select]:focus-visible]:ring-ring/50 hover:bg-muted/50 relative" variant="default" size="xs" role="listitem">
                            <ItemMedia variant="default">
                              <IconTile variant="elevated" size="sm">
                                <svg className="lucide lucide-receipt-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ReceiptTextIcon" tabler="IconReceipt" hugeicons="Invoice01Icon" phosphor="ReceiptIcon" remixicon="RiReceiptLine" aria-hidden="true">
                                  <path d="M13 16H8"></path>
                                  <path d="M14 8H8"></path>
                                  <path d="M16 12H8"></path>
                                  <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                              <ItemTitle className="font-normal min-h-5 w-full">
                                <button className="after:absolute after:inset-0 aria-disabled:cursor-default cursor-pointer min-w-0 outline-none text-start" type="button" data-row-select="">
                                  <span className="block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] group-has-[:focus-visible]/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--row-slide": "0px"}}>
                                    <span className="duration-150 ease-linear group-has-[:focus-visible]/item:duration-[2500ms] group-has-[:focus-visible]/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] group-hover/item:duration-[2500ms] group-hover/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] inline-block max-w-none motion-reduce:transition-none pointer-coarse:whitespace-normal transition-transform whitespace-nowrap">
                                      {"Receipts"}
                                    </span>
                                  </span>
                                </button>
                              </ItemTitle>
                              <ItemDescription className="tabular-nums text-xs/normal">
                                <span className="block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] group-has-[:focus-visible]/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--row-slide": "0px"}}>
                                  <span className="align-top duration-150 ease-linear gap-1.5 group-has-[:focus-visible]/item:duration-[2500ms] group-has-[:focus-visible]/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] group-hover/item:duration-[2500ms] group-hover/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] inline-flex items-center max-w-none motion-reduce:transition-none pointer-coarse:flex-wrap pointer-coarse:whitespace-normal transition-transform whitespace-nowrap">
                                    {"Sofia Marino"}
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="sr-only">
                                      {","}
                                    </span>
                                    {"8 of 10 pts"}
                                  </span>
                                </span>
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="duration-150 gap-1 group-focus-within/item:not-sr-only group-focus-within/item:opacity-100 group-hover/item:not-sr-only group-hover/item:opacity-100 motion-reduce:transition-none opacity-0 pointer-coarse:not-sr-only pointer-coarse:opacity-100 sr-only transition-opacity">
                              <Tooltip>
                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-foreground/10 inline-flex items-center justify-center outline-none relative select-none shrink-0 transition-all whitespace-nowrap z-10" type="button" tabIndex="0" aria-label="Add a card to Receipts" id="base-ui-_r_3p_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                            </ItemActions>
                          </Item>
                          <Item className="dark:data-current:bg-muted/50 dark:hover:bg-muted/30 data-current:bg-muted flex-nowrap has-[[data-row-select]:focus-visible]:border-ring has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-inset has-[[data-row-select]:focus-visible]:ring-ring/50 hover:bg-muted/50 relative" variant="default" size="xs" role="listitem">
                            <ItemMedia variant="default">
                              <IconTile variant="elevated" size="sm">
                                <svg className="lucide lucide-flask-conical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FlaskConicalIcon" tabler="IconFlask" hugeicons="TestTube01Icon" phosphor="FlaskIcon" remixicon="RiFlaskLine" aria-hidden="true">
                                  <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path>
                                  <path d="M6.453 15h11.094"></path>
                                  <path d="M8.5 2h7"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                              <ItemTitle className="font-normal min-h-5 w-full">
                                <button className="after:absolute after:inset-0 aria-disabled:cursor-default cursor-pointer min-w-0 outline-none text-start" type="button" data-row-select="">
                                  <span className="block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] group-has-[:focus-visible]/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--row-slide": "0px"}}>
                                    <span className="duration-150 ease-linear group-has-[:focus-visible]/item:duration-[2500ms] group-has-[:focus-visible]/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] group-hover/item:duration-[2500ms] group-hover/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] inline-block max-w-none motion-reduce:transition-none pointer-coarse:whitespace-normal transition-transform whitespace-nowrap">
                                      {"Offline Research"}
                                    </span>
                                  </span>
                                </button>
                              </ItemTitle>
                              <ItemDescription className="tabular-nums text-xs/normal">
                                <span className="block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] group-has-[:focus-visible]/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--row-slide": "0px"}}>
                                  <span className="align-top duration-150 ease-linear gap-1.5 group-has-[:focus-visible]/item:duration-[2500ms] group-has-[:focus-visible]/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] group-hover/item:duration-[2500ms] group-hover/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] inline-flex items-center max-w-none motion-reduce:transition-none pointer-coarse:flex-wrap pointer-coarse:whitespace-normal transition-transform whitespace-nowrap">
                                    {"Emma Lindgren"}
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="sr-only">
                                      {","}
                                    </span>
                                    {"5 of 8 pts"}
                                  </span>
                                </span>
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="duration-150 gap-1 group-focus-within/item:not-sr-only group-focus-within/item:opacity-100 group-hover/item:not-sr-only group-hover/item:opacity-100 motion-reduce:transition-none opacity-0 pointer-coarse:not-sr-only pointer-coarse:opacity-100 sr-only transition-opacity">
                              <Tooltip>
                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-foreground/10 inline-flex items-center justify-center outline-none relative select-none shrink-0 transition-all whitespace-nowrap z-10" type="button" tabIndex="0" aria-label="Add a card to Offline Research" id="base-ui-_r_3r_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                            </ItemActions>
                          </Item>
                          <Item className="dark:data-current:bg-muted/50 dark:hover:bg-muted/30 data-current:bg-muted flex-nowrap has-[[data-row-select]:focus-visible]:border-ring has-[[data-row-select]:focus-visible]:ring-[3px] has-[[data-row-select]:focus-visible]:ring-inset has-[[data-row-select]:focus-visible]:ring-ring/50 hover:bg-muted/50 relative" variant="default" size="xs" role="listitem">
                            <ItemMedia variant="default">
                              <IconTile variant="elevated" size="sm">
                                <svg className="lucide lucide-archive" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArchiveIcon" tabler="IconArchive" hugeicons="Archive01Icon" phosphor="ArchiveIcon" remixicon="RiArchiveLine" aria-hidden="true">
                                  <rect width="20" height="5" x="2" y="3" rx="1"></rect>
                                  <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
                                  <path d="M10 12h4"></path>
                                </svg>
                              </IconTile>
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                              <ItemTitle className="font-normal min-h-5 w-full">
                                <button className="after:absolute after:inset-0 aria-disabled:cursor-default cursor-pointer min-w-0 outline-none text-start" type="button" data-row-select="">
                                  <span className="block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] group-has-[:focus-visible]/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--row-slide": "0px"}}>
                                    <span className="duration-150 ease-linear group-has-[:focus-visible]/item:duration-[2500ms] group-has-[:focus-visible]/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] group-hover/item:duration-[2500ms] group-hover/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] inline-block max-w-none motion-reduce:transition-none pointer-coarse:whitespace-normal transition-transform whitespace-nowrap">
                                      {"Parked"}
                                    </span>
                                  </span>
                                </button>
                              </ItemTitle>
                              <ItemDescription className="tabular-nums text-xs/normal">
                                <span className="block data-overflowing:[mask-image:linear-gradient(to_right,#000_calc(100%-1.5rem),transparent)] group-has-[:focus-visible]/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] group-hover/item:data-overflowing:[mask-image:linear-gradient(to_right,transparent,#000_1.5rem,#000_calc(100%-1.5rem),transparent)] min-w-0 overflow-hidden" style={{"--row-slide": "0px"}}>
                                  <span className="align-top duration-150 ease-linear gap-1.5 group-has-[:focus-visible]/item:duration-[2500ms] group-has-[:focus-visible]/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] group-hover/item:duration-[2500ms] group-hover/item:in-data-overflowing:[transform:translateX(calc(var(--row-slide)-1.5rem))] inline-flex items-center max-w-none motion-reduce:transition-none pointer-coarse:flex-wrap pointer-coarse:whitespace-normal transition-transform whitespace-nowrap">
                                    {"2 cards"}
                                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                                    <span className="sr-only">
                                      {","}
                                    </span>
                                    {"11 pts"}
                                  </span>
                                </span>
                              </ItemDescription>
                            </ItemContent>
                            <ItemActions className="duration-150 gap-1 group-focus-within/item:not-sr-only group-focus-within/item:opacity-100 group-hover/item:not-sr-only group-hover/item:opacity-100 motion-reduce:transition-none opacity-0 pointer-coarse:not-sr-only pointer-coarse:opacity-100 sr-only transition-opacity">
                              <Tooltip>
                              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-foreground/10 inline-flex items-center justify-center outline-none relative select-none shrink-0 transition-all whitespace-nowrap z-10" type="button" tabIndex="0" aria-label="Add a card to Parked" id="base-ui-_r_3t_" baseUiTooltipTrigger="">
                                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5v14"></path>
                                </svg>
                              </TooltipTrigger>
                              </Tooltip>
                            </ItemActions>
                          </Item>
                        </ItemGroup>
                      </section>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </aside>
        </div>
        <input className="hidden" accept=".excalidraw,.json,.png,.svg" tabIndex="-1" aria-hidden="true" type="file" />
        <span className="sr-only" role="status" aria-live="polite"></span>
      </div>
    </div>
  )
}
