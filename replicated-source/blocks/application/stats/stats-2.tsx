import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <div className="gap-6 grid grid-cols-1 grow lg:grid-cols-4 sm:grid-cols-2">
        <Card className="bg-zinc-950 border-0 text-white" size="default">
          <CardHeader className="flex gap-3 items-center justify-between">
            <CardTitle className="font-medium text-sm text-white/90">
              {"Total Sales"}
            </CardTitle>
            <CardAction>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 text-white/60 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={19} cy={12} r={1}></circle>
                  <circle cx={5} cy={12} r={1}></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <div className="flex gap-2.5 items-center">
              <span className="font-semibold text-2xl tracking-tight">
                {"$892.2M"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/20 border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-semibold gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
                {"0.2%"}
              </Badge>
            </div>
            <div className="border-t border-white/10 mt-2 pt-2.5 text-white/70 text-xs">
              {"Vs last month:"}
              <span className="font-medium text-white">
                {"$889.1M"}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-fuchsia-600 border-0 text-white" size="default">
          <CardHeader className="flex gap-3 items-center justify-between">
            <CardTitle className="font-medium text-sm text-white/90">
              {"New Customers"}
            </CardTitle>
            <CardAction>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 text-white/60 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={19} cy={12} r={1}></circle>
                  <circle cx={5} cy={12} r={1}></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <div className="flex gap-2.5 items-center">
              <span className="font-semibold text-2xl tracking-tight">
                {"12,800"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/20 border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-semibold gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
                {"3.1%"}
              </Badge>
            </div>
            <div className="border-t border-white/10 mt-2 pt-2.5 text-white/70 text-xs">
              {"Vs last month:"}
              <span className="font-medium text-white">
                {"12,400"}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-600 border-0 text-white" size="default">
          <CardHeader className="flex gap-3 items-center justify-between">
            <CardTitle className="font-medium text-sm text-white/90">
              {"Refunds"}
            </CardTitle>
            <CardAction>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 text-white/60 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={19} cy={12} r={1}></circle>
                  <circle cx={5} cy={12} r={1}></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <div className="flex gap-2.5 items-center">
              <span className="font-semibold text-2xl tracking-tight">
                {"320"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/20 border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-semibold gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
                {"-1.2%"}
              </Badge>
            </div>
            <div className="border-t border-white/10 mt-2 pt-2.5 text-white/70 text-xs">
              {"Vs last month:"}
              <span className="font-medium text-white">
                {"340"}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-teal-600 border-0 text-white" size="default">
          <CardHeader className="flex gap-3 items-center justify-between">
            <CardTitle className="font-medium text-sm text-white/90">
              {"Churn Rate"}
            </CardTitle>
            <CardAction>
              <DropdownMenu>
              <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:text-white inline-flex items-center justify-center outline-none select-none shrink-0 text-white/60 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={1}></circle>
                  <circle cx={19} cy={12} r={1}></circle>
                  <circle cx={5} cy={12} r={1}></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <div className="flex gap-2.5 items-center">
              <span className="font-semibold text-2xl tracking-tight">
                {"2.3%"}
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/20 border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-semibold gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-white text-xs transition-shadow">
                <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
                {"-0.1%"}
              </Badge>
            </div>
            <div className="border-t border-white/10 mt-2 pt-2.5 text-white/70 text-xs">
              {"Vs last month:"}
              <span className="font-medium text-white">
                {"2.4%"}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
