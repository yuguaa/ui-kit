import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Sheet,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export function Pattern() {
  return (
    <div className="[--shell-ink-icon:#79697b] [--shell-ink-soft:rgba(121,105,123,0.8)] [--shell-ink:#594c5b] [--shell-line:#f3f1f3] [--shell-panel:#fcfcfc] [--shell-rim:inset_1px_1px_0_0_rgb(255_255_255/0.95),inset_-1px_-1px_0_0_rgb(255_255_255/0.55)] [--shell-sheet:#ffffff] [--shell-tint:rgba(243,241,243,0.5)] bg-background dark:[--shell-ink-icon:var(--muted-foreground)] dark:[--shell-ink-soft:var(--muted-foreground)] dark:[--shell-ink:var(--foreground)] dark:[--shell-line:var(--border)] dark:[--shell-panel:var(--card)] dark:[--shell-rim:inset_1px_1px_0_0_rgb(255_255_255/0.12),inset_-1px_-1px_0_0_rgb(255_255_255/0.04)] dark:[--shell-sheet:var(--card)] dark:[--shell-tint:var(--muted)] flex h-svh min-h-0 overflow-hidden relative w-full">
      <div className="absolute dark:opacity-15 h-[900px] inset-x-0 opacity-[0.23] pointer-events-none top-0" aria-hidden="true">
        <span className="-translate-x-1/2 -translate-y-1/2 absolute size-[2400px]" style={{left: "720px", top: "700px", backgroundImage: "radial-gradient(1200px, rgba(0, 204, 255, 0.435) 0%, rgba(0, 204, 255, 0.427) 5%, rgba(0, 204, 255, 0.408) 10%, rgba(0, 204, 255, 0.373) 15%, rgba(0, 204, 255, 0.333) 20%, rgba(0, 204, 255, 0.282) 25%, rgba(0, 204, 255, 0.235) 30%, rgba(0, 204, 255, 0.19) 35%, rgba(0, 204, 255, 0.145) 40%, rgba(0, 204, 255, 0.106) 45%, rgba(0, 204, 255, 0.075) 50%, rgba(0, 204, 255, 0.05) 55%, rgba(0, 204, 255, 0.035) 60%, rgba(0, 204, 255, 0.024) 65%, rgba(0, 204, 255, 0.01) 70%, rgba(0, 204, 255, 0.008) 75%, rgba(0, 204, 255, 0.004) 80%, rgba(0, 204, 255, 0.004) 85%, rgba(0, 204, 255, 0) 90%, rgba(0, 204, 255, 0) 95%, rgba(0, 204, 255, 0) 100%)"}}></span>
        <span className="-translate-x-1/2 -translate-y-1/2 absolute size-[2400px]" style={{left: "1240px", top: "700px", backgroundImage: "radial-gradient(1200px, rgba(254, 0, 4, 0.435) 0%, rgba(254, 0, 4, 0.427) 5%, rgba(254, 0, 4, 0.408) 10%, rgba(254, 0, 4, 0.373) 15%, rgba(254, 0, 4, 0.333) 20%, rgba(254, 0, 4, 0.282) 25%, rgba(254, 0, 4, 0.235) 30%, rgba(254, 0, 4, 0.19) 35%, rgba(254, 0, 4, 0.145) 40%, rgba(254, 0, 4, 0.106) 45%, rgba(254, 0, 4, 0.075) 50%, rgba(254, 0, 4, 0.05) 55%, rgba(254, 0, 4, 0.035) 60%, rgba(254, 0, 4, 0.024) 65%, rgba(254, 0, 4, 0.01) 70%, rgba(254, 0, 4, 0.008) 75%, rgba(254, 0, 4, 0.004) 80%, rgba(254, 0, 4, 0.004) 85%, rgba(254, 0, 4, 0) 90%, rgba(254, 0, 4, 0) 95%, rgba(254, 0, 4, 0) 100%)"}}></span>
        <span className="-translate-x-1/2 -translate-y-1/2 absolute size-[2400px]" style={{left: "190px", top: "700px", backgroundImage: "radial-gradient(1200px, rgba(94, 255, 0, 0.435) 0%, rgba(94, 255, 0, 0.427) 5%, rgba(94, 255, 0, 0.408) 10%, rgba(94, 255, 0, 0.373) 15%, rgba(94, 255, 0, 0.333) 20%, rgba(94, 255, 0, 0.282) 25%, rgba(94, 255, 0, 0.235) 30%, rgba(94, 255, 0, 0.19) 35%, rgba(94, 255, 0, 0.145) 40%, rgba(94, 255, 0, 0.106) 45%, rgba(94, 255, 0, 0.075) 50%, rgba(94, 255, 0, 0.05) 55%, rgba(94, 255, 0, 0.035) 60%, rgba(94, 255, 0, 0.024) 65%, rgba(94, 255, 0, 0.01) 70%, rgba(94, 255, 0, 0.008) 75%, rgba(94, 255, 0, 0.004) 80%, rgba(94, 255, 0, 0.004) 85%, rgba(94, 255, 0, 0) 90%, rgba(94, 255, 0, 0) 95%, rgba(94, 255, 0, 0) 100%)"}}></span>
        <span className="-translate-x-1/2 -translate-y-1/2 absolute size-[2400px]" style={{left: "1250px", top: "300px", backgroundImage: "radial-gradient(1200px, rgba(252, 227, 0, 0.435) 0%, rgba(252, 227, 0, 0.427) 5%, rgba(252, 227, 0, 0.408) 10%, rgba(252, 227, 0, 0.373) 15%, rgba(252, 227, 0, 0.333) 20%, rgba(252, 227, 0, 0.282) 25%, rgba(252, 227, 0, 0.235) 30%, rgba(252, 227, 0, 0.19) 35%, rgba(252, 227, 0, 0.145) 40%, rgba(252, 227, 0, 0.106) 45%, rgba(252, 227, 0, 0.075) 50%, rgba(252, 227, 0, 0.05) 55%, rgba(252, 227, 0, 0.035) 60%, rgba(252, 227, 0, 0.024) 65%, rgba(252, 227, 0, 0.01) 70%, rgba(252, 227, 0, 0.008) 75%, rgba(252, 227, 0, 0.004) 80%, rgba(252, 227, 0, 0.004) 85%, rgba(252, 227, 0, 0) 90%, rgba(252, 227, 0, 0) 95%, rgba(252, 227, 0, 0) 100%)"}}></span>
        <span className="-translate-x-1/2 -translate-y-1/2 absolute size-[2400px]" style={{left: "720px", top: "300px", backgroundImage: "radial-gradient(1200px, rgba(18, 255, 46, 0.435) 0%, rgba(18, 255, 46, 0.427) 5%, rgba(18, 255, 46, 0.408) 10%, rgba(18, 255, 46, 0.373) 15%, rgba(18, 255, 46, 0.333) 20%, rgba(18, 255, 46, 0.282) 25%, rgba(18, 255, 46, 0.235) 30%, rgba(18, 255, 46, 0.19) 35%, rgba(18, 255, 46, 0.145) 40%, rgba(18, 255, 46, 0.106) 45%, rgba(18, 255, 46, 0.075) 50%, rgba(18, 255, 46, 0.05) 55%, rgba(18, 255, 46, 0.035) 60%, rgba(18, 255, 46, 0.024) 65%, rgba(18, 255, 46, 0.01) 70%, rgba(18, 255, 46, 0.008) 75%, rgba(18, 255, 46, 0.004) 80%, rgba(18, 255, 46, 0.004) 85%, rgba(18, 255, 46, 0) 90%, rgba(18, 255, 46, 0) 95%, rgba(18, 255, 46, 0) 100%)"}}></span>
        <span className="-translate-x-1/2 -translate-y-1/2 absolute size-[2400px]" style={{left: "180px", top: "300px", backgroundImage: "radial-gradient(1200px, rgba(208, 18, 255, 0.435) 0%, rgba(208, 18, 255, 0.427) 5%, rgba(208, 18, 255, 0.408) 10%, rgba(208, 18, 255, 0.373) 15%, rgba(208, 18, 255, 0.333) 20%, rgba(208, 18, 255, 0.282) 25%, rgba(208, 18, 255, 0.235) 30%, rgba(208, 18, 255, 0.19) 35%, rgba(208, 18, 255, 0.145) 40%, rgba(208, 18, 255, 0.106) 45%, rgba(208, 18, 255, 0.075) 50%, rgba(208, 18, 255, 0.05) 55%, rgba(208, 18, 255, 0.035) 60%, rgba(208, 18, 255, 0.024) 65%, rgba(208, 18, 255, 0.01) 70%, rgba(208, 18, 255, 0.008) 75%, rgba(208, 18, 255, 0.004) 80%, rgba(208, 18, 255, 0.004) 85%, rgba(208, 18, 255, 0) 90%, rgba(208, 18, 255, 0) 95%, rgba(208, 18, 255, 0) 100%)"}}></span>
      </div>
      <div className="hidden lg:flex shrink-0">
        <nav className="flex flex-col gap-4 h-full items-center justify-between px-3 py-6 shrink-0 sm:px-6 sm:w-23 w-17" aria-label="Fleet sections">
          <div className="flex flex-col gap-1 items-center p-1.5 relative rounded-full shadow-[0_0_6px_0_rgba(0,0,0,0.05)] shrink-0">
            <span className="absolute bg-linear-to-r dark:from-white/[0.02] dark:to-white/[0.05] from-black/[0.02] inset-0 pointer-events-none rounded-full shadow-(--shell-rim) to-white/40" aria-hidden="true"></span>
            <span className="flex items-center justify-center relative size-8">
              <span className="absolute bg-white/20 dark:bg-white/[0.06] inset-0 rounded-full shadow-(--shell-rim)" aria-hidden="true"></span>
              <svg className="relative shrink-0 size-8 text-(--shell-ink)" viewBox="0 0 36 36" fill="none" role="img" aria-label="NeUI">
                <path d="M25.2483 12.3826C26.1824 12.3826 26.9396 11.6253 26.9396 10.6913C26.9396 9.75721 26.1824 9 25.2483 9C24.3142 9 23.557 9.75721 23.557 10.6913C23.557 11.6253 24.3142 12.3826 25.2483 12.3826Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.06047 20.4764V10.6912C9.06047 9.75711 9.81768 8.9999 10.7517 8.9999C11.6858 8.9999 12.443 9.75711 12.443 10.6912V20.4764C12.443 22.2111 13.8492 23.6174 15.5839 23.6174H20.4162C22.1508 23.6174 23.5571 22.2111 23.5571 20.4764V15.6925C23.5571 14.7585 24.3143 14.0013 25.2484 14.0013C26.1824 14.0013 26.9396 14.7585 26.9396 15.6925V20.4764C26.9396 24.0793 24.019 26.9999 20.4162 26.9999H15.5839C11.9811 26.9999 9.06047 24.0793 9.06047 20.4764Z" fill="currentColor"></path>
              </svg>
            </span>
            <Button className="[&_svg]:opacity-80 hover:[&_svg]:opacity-100 hover:bg-white/10 hover:rounded-full hover:shadow-(--shell-rim) hover:text-(--shell-ink) rounded-md text-(--shell-ink-icon)" type="button" tabIndex={0} aria-label="Search">
              <svg className="lucide lucide-search size-4.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx={11} cy={11} r={8}></circle>
              </svg>
            </Button>
          </div>
          <div className="flex flex-col gap-1 items-center p-1.5 relative rounded-full shadow-[0_0_6px_0_rgba(0,0,0,0.05)] shrink-0">
            <span className="absolute bg-linear-to-r dark:from-white/[0.02] dark:to-white/[0.05] from-black/[0.02] inset-0 pointer-events-none rounded-full shadow-(--shell-rim) to-white/40" aria-hidden="true"></span>
            <Button className="bg-white/10 rounded-full shadow-(--shell-rim) text-(--shell-ink)" type="button" tabIndex={0} aria-label="Overview" aria-current="page">
              <svg className="lucide lucide-layout-dashboard size-4.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                <rect width={7} height={5} x={3} y={16} rx={1}></rect>
              </svg>
            </Button>
            <Button className="[&_svg]:opacity-80 hover:[&_svg]:opacity-100 hover:bg-white/10 hover:rounded-full hover:shadow-(--shell-rim) hover:text-(--shell-ink) rounded-lg text-(--shell-ink-icon)" type="button" tabIndex={0} aria-label="Routes">
              <svg className="lucide lucide-route size-4.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                <circle cx={6} cy={19} r={3}></circle>
                <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                <circle cx={18} cy={5} r={3}></circle>
              </svg>
            </Button>
            <Button className="[&_svg]:opacity-80 hover:[&_svg]:opacity-100 hover:bg-white/10 hover:rounded-full hover:shadow-(--shell-rim) hover:text-(--shell-ink) rounded-lg text-(--shell-ink-icon)" type="button" tabIndex={0} aria-label="Map">
              <svg className="lucide lucide-map size-4.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapIcon" tabler="IconMap" hugeicons="Location01Icon" phosphor="MapTrifoldIcon" remixicon="RiMapLine" aria-hidden="true">
                <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                <path d="M15 5.764v15"></path>
                <path d="M9 3.236v15"></path>
              </svg>
            </Button>
            <Button className="[&_svg]:opacity-80 hover:[&_svg]:opacity-100 hover:bg-white/10 hover:rounded-full hover:shadow-(--shell-rim) hover:text-(--shell-ink) rounded-lg text-(--shell-ink-icon)" type="button" tabIndex={0} aria-label="Signals">
              <svg className="lucide lucide-radio-tower size-4.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="RadioTowerIcon" tabler="IconAntenna" hugeicons="AntennaIcon" phosphor="BroadcastIcon" remixicon="RiSignalTowerLine" aria-hidden="true">
                <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></path>
                <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></path>
                <circle cx={12} cy={9} r={2}></circle>
                <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></path>
                <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></path>
                <path d="M9.5 18h5"></path>
                <path d="m8 22 4-11 4 11"></path>
              </svg>
            </Button>
            <Button className="[&_svg]:opacity-80 hover:[&_svg]:opacity-100 hover:bg-white/10 hover:rounded-full hover:shadow-(--shell-rim) hover:text-(--shell-ink) rounded-lg text-(--shell-ink-icon)" type="button" tabIndex={0} aria-label="Robots">
              <svg className="lucide lucide-bot size-4.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                <path d="M12 8V4H8"></path>
                <rect width={16} height={12} x={4} y={8} rx={2}></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
            </Button>
            <Button className="[&_svg]:opacity-80 hover:[&_svg]:opacity-100 hover:bg-white/10 hover:rounded-full hover:shadow-(--shell-rim) hover:text-(--shell-ink) rounded-lg text-(--shell-ink-icon)" type="button" tabIndex={0} aria-label="Zones">
              <svg className="lucide lucide-square-dashed-mouse-pointer size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SquareDashedMousePointerIcon" tabler="IconLayersSelected" hugeicons="SquareMousePointerIcon" phosphor="SelectionIcon" remixicon="RiCursorLine" aria-hidden="true">
                <path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"></path>
                <path d="M5 3a2 2 0 0 0-2 2"></path>
                <path d="M19 3a2 2 0 0 1 2 2"></path>
                <path d="M5 21a2 2 0 0 1-2-2"></path>
                <path d="M9 3h1"></path>
                <path d="M9 21h2"></path>
                <path d="M14 3h1"></path>
                <path d="M3 9v1"></path>
                <path d="M21 9v2"></path>
                <path d="M3 14v1"></path>
              </svg>
            </Button>
            <Button className="[&_svg]:opacity-80 hover:[&_svg]:opacity-100 hover:bg-white/10 hover:rounded-full hover:shadow-(--shell-rim) hover:text-(--shell-ink) rounded-lg text-(--shell-ink-icon)" type="button" tabIndex={0} aria-label="Stops">
              <svg className="lucide lucide-map-pinned size-4.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MapPinnedIcon" tabler="IconMapPin" hugeicons="MapPinIcon" phosphor="MapPinAreaIcon" remixicon="RiRoadMapLine" aria-hidden="true">
                <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path>
                <circle cx={12} cy={8} r={2}></circle>
                <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path>
              </svg>
            </Button>
            <Button className="[&_svg]:opacity-80 hover:[&_svg]:opacity-100 hover:bg-white/10 hover:rounded-full hover:shadow-(--shell-rim) hover:text-(--shell-ink) rounded-lg text-(--shell-ink-icon)" type="button" tabIndex={0} aria-label="Incidents">
              <svg className="lucide lucide-shield-alert size-4.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
              </svg>
            </Button>
            <Button className="[&_svg]:opacity-80 hover:[&_svg]:opacity-100 hover:bg-white/10 hover:rounded-full hover:shadow-(--shell-rim) hover:text-(--shell-ink) rounded-lg text-(--shell-ink-icon)" type="button" tabIndex={0} aria-label="Tasks">
              <svg className="lucide lucide-clipboard-list size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ClipboardListIcon" tabler="IconClipboardList" hugeicons="ClipboardIcon" phosphor="ClipboardTextIcon" remixicon="RiFileListLine" aria-hidden="true">
                <rect width={8} height={4} x={8} y={2} rx={1} ry={1}></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <path d="M12 11h4"></path>
                <path d="M12 16h4"></path>
                <path d="M8 11h.01"></path>
                <path d="M8 16h.01"></path>
              </svg>
            </Button>
          </div>
          <div className="bg-white/10 dark:bg-white/[0.04] flex flex-col gap-1 items-center p-1.5 relative rounded-full shadow-[0_0_6px_0_rgba(0,0,0,0.05)] shrink-0">
            <span className="absolute bg-linear-to-r dark:from-white/[0.02] dark:to-white/[0.05] from-black/[0.02] inset-0 pointer-events-none rounded-full shadow-(--shell-rim) to-white/40" aria-hidden="true"></span>
            <Button className="[&_svg]:opacity-80 hover:[&_svg]:opacity-100 hover:bg-white/10 hover:rounded-full hover:shadow-(--shell-rim) hover:text-(--shell-ink) rounded-md text-(--shell-ink-icon)" type="button" tabIndex={0} aria-label="Sign out">
              <svg className="lucide lucide-log-out size-4.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LogOutIcon" tabler="IconLogout" hugeicons="LogoutSquare01Icon" phosphor="SignOutIcon" remixicon="RiLogoutBoxRLine" aria-hidden="true">
                <path d="m16 17 5-5-5-5"></path>
                <path d="M21 12H9"></path>
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              </svg>
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent inline-flex items-center justify-center outline-none p-0 rounded-full select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Operator menu" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
              <Avatar className="size-8" size="default">
                <AvatarImage alt="Kai Meyer" src="https://github.com/shadcn.png"></AvatarImage>
              </Avatar>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </nav>
      </div>
      <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:gap-6 lg:pl-0 min-w-0 px-3 py-6 relative sm:px-6">
        <header className="bg-white/20 dark:bg-white/[0.03] flex gap-2 items-center justify-between lg:hidden mb-2 p-1.5 relative rounded-full shadow-[0_0_6px_0_rgba(0,0,0,0.05)]">
          <span className="absolute bg-linear-to-r dark:from-white/[0.02] dark:to-white/[0.05] from-black/[0.02] inset-0 pointer-events-none rounded-full shadow-(--shell-rim) to-white/40" aria-hidden="true"></span>
          <span className="flex items-center justify-center relative shrink-0 size-8">
            <span className="absolute bg-white/20 dark:bg-white/[0.06] inset-0 rounded-full shadow-(--shell-rim)" aria-hidden="true"></span>
            <svg className="relative shrink-0 size-8 text-(--shell-ink)" viewBox="0 0 36 36" fill="none" role="img" aria-label="NeUI">
              <path d="M25.2483 12.3826C26.1824 12.3826 26.9396 11.6253 26.9396 10.6913C26.9396 9.75721 26.1824 9 25.2483 9C24.3142 9 23.557 9.75721 23.557 10.6913C23.557 11.6253 24.3142 12.3826 25.2483 12.3826Z" fill="currentColor"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.06047 20.4764V10.6912C9.06047 9.75711 9.81768 8.9999 10.7517 8.9999C11.6858 8.9999 12.443 9.75711 12.443 10.6912V20.4764C12.443 22.2111 13.8492 23.6174 15.5839 23.6174H20.4162C22.1508 23.6174 23.5571 22.2111 23.5571 20.4764V15.6925C23.5571 14.7585 24.3143 14.0013 25.2484 14.0013C26.1824 14.0013 26.9396 14.7585 26.9396 15.6925V20.4764C26.9396 24.0793 24.019 26.9999 20.4162 26.9999H15.5839C11.9811 26.9999 9.06047 24.0793 9.06047 20.4764Z" fill="currentColor"></path>
            </svg>
          </span>
          <Sheet>
          <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon cn-button-variant-ghost dark:hover:bg-white/[0.06] disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/20 hover:text-(--shell-ink) inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-(--shell-ink-icon) transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Open sections" baseUiClickTrigger="" id="base-ui-_r_6_" aria-haspopup="dialog" aria-expanded="false">
            <svg className="lucide lucide-menu size-4.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </SheetTrigger>
          </Sheet>
        </header>
        <div className="flex flex-1 gap-6 min-h-0 min-w-0">
          <Tabs className="flex-1 gap-0 min-h-0 min-w-0 relative" data-orientation="horizontal" activationDirection="none">
            <svg className="absolute h-[37px] left-0 lg:h-[45px] lg:w-[723.681px] pointer-events-none top-0 w-[calc(100%-var(--radius)-12px)]" viewBox="0 0 723.681 45" fill="none" aria-hidden="true" preserveAspectRatio="none">
              <path className="dark:fill-white/[0.04] fill-black/5" d="M436.873 0H672.88C680.742 0 688.006 4.195 691.935 11.0042L704.626 32.9958C708.555 39.805 715.819 45 723.681 45H487.674C479.812 45 472.548 39.805 468.619 32.9958L455.928 11.0042C451.999 4.195 444.735 0 436.873 0Z"></path>
              <path className="dark:fill-white/[0.06] fill-white/40" d="M201.904 0H436.873C444.735 0 451.999 4.195 455.928 11.0042L468.619 32.9958C472.548 39.805 479.812 45 487.674 45H252.705C244.843 45 237.579 39.805 233.65 32.9958L220.959 11.0042C217.03 4.195 209.766 0 201.904 0Z"></path>
            </svg>
            <div className="absolute dark:drop-shadow-[0_0_16px_rgba(0,0,0,0.55)] drop-shadow-[0_0_12px_rgba(0,0,0,0.04)] inset-0 text-(--shell-sheet)" aria-hidden="true">
              <svg className="absolute h-[37px] left-0 lg:h-[45px] lg:w-[723.681px] top-0 w-[calc(100%-var(--radius)-12px)]" viewBox="0 0 723.681 45" fill="none" preserveAspectRatio="none">
                <path d="M22 0H201.904C209.766 0 217.03 4.195 220.959 11.0042L233.65 32.9958C237.579 39.805 244.843 45 252.705 45H0V22C0 9.8497 9.8497 0 22 0Z" fill="currentColor"></path>
              </svg>
              <div className="absolute bg-(--shell-sheet) bottom-0 inset-x-0 lg:top-11 rounded-[calc(var(--radius)+12px)] rounded-tl-none top-9"></div>
            </div>
            <TabsList className="gap-0 h-9! justify-start lg:h-11! lg:w-fit p-0 relative rounded-none shrink-0 w-[calc(100%-var(--radius)-12px)]" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
              <TabsTrigger className="after:hidden dark:data-active:bg-transparent dark:data-active:border-transparent dark:data-active:text-(--shell-ink) dark:text-(--shell-ink-soft) data-active:bg-transparent data-active:border-transparent data-active:text-(--shell-ink) flex-none focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0 font-medium group/tab h-full! lg:px-5 lg:w-(--tab-w) min-w-0 px-0.5 rounded-md shadow-none! sm:px-2 sm:text-sm text-(--shell-ink-soft) text-xs truncate w-[calc(var(--tab-f)*100%)]" type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_7_" compositeItemActive="" aria-controls="base-ui-_r_a_" style={{"--tab-w": "227.304px", "--tab-f": "0.31409419343605816"}}>
                <span className="group-focus-visible/tab:ring-(--shell-ink)/70 group-focus-visible/tab:ring-2 px-2 py-0.5 rounded-full">
                  {"Operations"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="after:hidden dark:data-active:bg-transparent dark:data-active:border-transparent dark:data-active:text-(--shell-ink) dark:text-(--shell-ink-soft) data-active:bg-transparent data-active:border-transparent data-active:text-(--shell-ink) flex-none focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0 font-medium group/tab h-full! lg:px-5 lg:w-(--tab-w) min-w-0 px-0.5 rounded-md shadow-none! sm:px-2 sm:text-sm text-(--shell-ink-soft) text-xs truncate w-[calc(var(--tab-f)*100%)]" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_8_" style={{"--tab-w": "234.969px", "--tab-f": "0.32468587678825334"}}>
                <span className="group-focus-visible/tab:ring-(--shell-ink)/70 group-focus-visible/tab:ring-2 px-2 py-0.5 rounded-full">
                  {"Structure"}
                </span>
              </TabsTrigger>
              <TabsTrigger className="after:hidden dark:data-active:bg-transparent dark:data-active:border-transparent dark:data-active:text-(--shell-ink) dark:text-(--shell-ink-soft) data-active:bg-transparent data-active:border-transparent data-active:text-(--shell-ink) flex-none focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-0 font-medium group/tab h-full! lg:px-5 lg:w-(--tab-w) min-w-0 px-0.5 rounded-md shadow-none! sm:px-2 sm:text-sm text-(--shell-ink-soft) text-xs truncate w-[calc(var(--tab-f)*100%)]" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_9_" style={{"--tab-w": "236.007px", "--tab-f": "0.32612021042420625"}}>
                <span className="group-focus-visible/tab:ring-(--shell-ink)/70 group-focus-visible/tab:ring-2 px-2 py-0.5 rounded-full">
                  {"Insights"}
                </span>
              </TabsTrigger>
            </TabsList>
            <TabsContent className="flex flex-col min-h-0 overflow-y-auto p-6 relative scrollbar" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_a_" role="tabpanel" tabIndex={0} index="0" aria-labelledby="base-ui-_r_7_">
              <div className="flex flex-1 flex-col gap-6 min-h-0">
                <div className="flex flex-col gap-6 lg:flex-row lg:h-[332px] lg:shrink-0">
                  <div className="auto-rows-min gap-3 grid grid-cols-1 lg:w-[332px] shrink-0 sm:grid-cols-2">
                    <Card className="bg-(--shell-sheet) border border-(--shell-line) h-20 lg:h-[160px] ring-0 rounded-[calc(var(--radius)+12px)] shadow-none sm:h-[120px]" size="default" aria-hidden="true">
                      <CardContent className="flex flex-1 flex-col gap-3 min-h-0">
                        <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 from-input/50 h-4 shrink-0 to-input/50 w-1/2"></Skeleton>
                        <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 flex-1 from-input/50 min-h-px to-input/50"></Skeleton>
                      </CardContent>
                    </Card>
                    <Card className="bg-(--shell-sheet) border border-(--shell-line) h-20 lg:h-[160px] ring-0 rounded-[calc(var(--radius)+12px)] shadow-none sm:h-[120px]" size="default" aria-hidden="true">
                      <CardContent className="flex flex-1 flex-col gap-3 min-h-0">
                        <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 from-input/50 h-4 shrink-0 to-input/50 w-1/2"></Skeleton>
                        <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 flex-1 from-input/50 min-h-px to-input/50"></Skeleton>
                      </CardContent>
                    </Card>
                    <Card className="bg-(--shell-sheet) border border-(--shell-line) h-20 lg:h-[160px] ring-0 rounded-[calc(var(--radius)+12px)] shadow-none sm:h-[120px]" size="default" aria-hidden="true">
                      <CardContent className="flex flex-1 flex-col gap-3 min-h-0">
                        <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 from-input/50 h-4 shrink-0 to-input/50 w-1/2"></Skeleton>
                        <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 flex-1 from-input/50 min-h-px to-input/50"></Skeleton>
                      </CardContent>
                    </Card>
                    <Card className="bg-(--shell-sheet) border border-(--shell-line) h-20 lg:h-[160px] ring-0 rounded-[calc(var(--radius)+12px)] shadow-none sm:h-[120px]" size="default" aria-hidden="true">
                      <CardContent className="flex flex-1 flex-col gap-3 min-h-0">
                        <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 from-input/50 h-4 shrink-0 to-input/50 w-1/2"></Skeleton>
                        <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 flex-1 from-input/50 min-h-px to-input/50"></Skeleton>
                      </CardContent>
                    </Card>
                  </div>
                  <Card className="bg-(--shell-sheet) border border-(--shell-line) flex-1 lg:h-auto min-h-40 ring-0 rounded-[calc(var(--radius)+12px)] shadow-none" size="default" aria-hidden="true">
                    <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                      <div className="flex flex-col gap-2 h-10 shrink-0">
                        <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 flex-1 from-input/50 min-h-px to-input/50"></Skeleton>
                        <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 flex-1 from-input/50 min-h-px to-input/50"></Skeleton>
                      </div>
                      <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 flex-1 from-input/50 min-h-px to-input/50"></Skeleton>
                    </CardContent>
                  </Card>
                </div>
                <Card className="bg-(--shell-sheet) border border-(--shell-line) flex-1 lg:min-h-[280px] md:min-h-min min-h-screen ring-0 rounded-[calc(var(--radius)+12px)] shadow-none" size="default" aria-hidden="true">
                  <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 flex-1 from-input/50 min-h-px to-input/50"></Skeleton>
                      <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 flex-1 from-input/50 min-h-px to-input/50"></Skeleton>
                    </div>
                    <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 flex-1 from-input/50 min-h-px to-input/50"></Skeleton>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          <aside className="flex-col hidden min-[1200px]:flex pt-11 shrink-0 w-80 xl:w-96" aria-label="Assistant">
            <div className="bg-(--shell-panel) dark:shadow-[0_0_16px_0_rgba(0,0,0,0.55)] flex flex-1 flex-col gap-2 min-h-0 overflow-hidden p-1 rounded-[calc(var(--radius)+12px)] shadow-[0_0_12px_0_rgba(0,0,0,0.04)]" aria-hidden="true">
              <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 from-input/50 h-9 rounded-[calc(var(--radius)+8px)] shrink-0 to-input/50"></Skeleton>
              <div className="flex flex-1 flex-col justify-end min-h-0 p-1">
                <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 from-input/50 h-17.5 rounded-[calc(var(--radius)+4px)] shrink-0 to-input/50"></Skeleton>
                <div className="flex h-5 pl-[25px] shrink-0">
                  <span className="border-(--shell-line) border-l"></span>
                </div>
                <div className="flex gap-2 items-center px-3 self-start shrink-0">
                  <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 from-input/50 h-4.5 rounded-full to-input/50 w-15"></Skeleton>
                  <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 from-input/50 h-2.5 to-input/50 w-19"></Skeleton>
                </div>
                <div className="flex h-5 pl-[25px] shrink-0">
                  <span className="border-(--shell-line) border-l"></span>
                </div>
                <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 from-input/50 h-42.5 rounded-[calc(var(--radius)+4px)] shrink-0 to-input/50"></Skeleton>
              </div>
              <Skeleton className="bg-(--shell-sheet) bg-linear-to-r dark:from-input/30 dark:to-input/30 from-input/50 h-10.5 rounded-full shrink-0 to-input/50"></Skeleton>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
