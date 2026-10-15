import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-6 w-full">
      <div className="@container w-full">
        <div className="@2xl:grid-cols-2 gap-5 grid">
          <Frame>
            <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-1!">
              <div className="font-medium text-sm">
                {"Meeting"}
              </div>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent! cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis-vertical size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={12} cy={5} r={1}></circle>
                  <circle cx={12} cy={19} r={1}></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </header>
            <FramePanel className="space-y-3">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                    {"Apollo CRM - Sprint Planning"}
                  </a>
                  <p className="leading-relaxed text-muted-foreground text-xs">
                    {"09:00 AM CET"}
                  </p>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                  {"30 min"}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                {"Collaborative sprint planning to address blockers, assign tasks, and refine deliverables for the upcoming development phase."}
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                <AvatarGroup>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Michael Rodriguez" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Emma Wilson" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <AvatarGroupCount className="border size-6 text-[10px]">
                    {"+3"}
                  </AvatarGroupCount>
                </AvatarGroup>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                  {"Client Meeting"}
                </Badge>
              </div>
            </FramePanel>
            <FramePanel className="py-2!">
              <a className="font-medium gap-2 hover:underline inline-flex items-center text-primary text-xs" href="#">
                <svg className="shrink-0 size-4" aria-hidden="true" viewBox="0 0 622 512" fill="none">
                  <g clipPath="url(#googlemeet-clip0)">
                    <path d="M351.419 255.568L411.978 324.79L493.418 376.827L507.584 256.005L493.418 137.908L410.418 183.621L351.419 255.568Z" fill="#00832D"></path>
                    <path d="M0.00283051 365.583V468.541C0.00283051 492.049 19.0851 511.136 42.5983 511.136H145.556L166.876 433.344L145.556 365.583L74.9198 344.263L0.00283051 365.583Z" fill="#0066DA"></path>
                    <path d="M145.556 -7.62939e-06L0.00283051 145.554L74.9247 166.822L145.556 145.554L166.488 78.7145L145.556 -7.62939e-06Z" fill="#E94235"></path>
                    <path d="M0.00526047 365.629H145.556V145.551H0.00526047V365.629Z" fill="#2684FC"></path>
                    <path d="M586.398 61.6293L493.416 137.91V376.827L586.782 453.404C600.758 464.352 621.204 454.374 621.204 436.607V78.0861C621.204 60.1224 600.271 50.193 586.396 61.6317" fill="#00AC47"></path>
                    <path d="M351.419 255.568V365.583H145.556V511.136H450.825C474.338 511.136 493.418 492.049 493.418 468.541V376.827L351.419 255.568Z" fill="#00AC47"></path>
                    <path d="M450.825 -7.62939e-06H145.556V145.554H351.419V255.568L493.42 137.905V42.5979C493.42 19.0847 474.338 0.00241891 450.825 0.00241891" fill="#FFBA00"></path>
                  </g>
                  <defs>
                    <clippath id="googlemeet-clip0">
                      <rect width={621.2} height={512} fill="white"></rect>
                    </clippath>
                  </defs>
                </svg>
                {"Join Meeting"}
              </a>
            </FramePanel>
          </Frame>
          <Frame>
            <header className="flex flex-row gap-2 grow items-center justify-between px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-1!">
              <div className="font-medium text-sm">
                {"Meeting"}
              </div>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent! cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis-vertical size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={12} cy={5} r={1}></circle>
                  <circle cx={12} cy={19} r={1}></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </header>
            <FramePanel className="space-y-3">
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                    {"Delta Finance - Budget Alignment"}
                  </a>
                  <p className="leading-relaxed text-muted-foreground text-xs">
                    {"11:30 AM CET"}
                  </p>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                  {"90 min"}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">
                {"Reviewing quarterly spend, adjusting forecasts, and aligning budgets across departments with finance and operations teams."}
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                <AvatarGroup>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Michael Rodriguez" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <Avatar className="size-6" size="default">
                    <AvatarImage alt="Emma Wilson" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  <AvatarGroupCount className="border size-6 text-[10px]">
                    {"+3"}
                  </AvatarGroupCount>
                </AvatarGroup>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-secondary-foreground transition-shadow">
                  {"Internal"}
                </Badge>
              </div>
            </FramePanel>
            <FramePanel className="py-2!">
              <a className="font-medium gap-2 hover:underline inline-flex items-center text-primary text-xs" href="#">
                <Item className="bg-sky-500 p-0 rounded-full size-4 text-white" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-video size-2.5 text-white" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="VideoIcon" tabler="IconVideo" hugeicons="Video02Icon" phosphor="VideoCameraIcon" remixicon="RiVideoOnLine" aria-hidden="true">
                      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                      <rect x={2} y={6} width={14} height={12} rx={2}></rect>
                    </svg>
                  </ItemMedia>
                </Item>
                {"Join Meeting"}
              </a>
            </FramePanel>
          </Frame>
        </div>
      </div>
    </div>
  )
}
