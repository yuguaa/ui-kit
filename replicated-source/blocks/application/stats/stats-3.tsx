import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Card className="gap-8 sm:max-w-md w-full" size="default">
        <CardHeader className="flex gap-3 items-center justify-between">
          <CardTitle>
            Subscription Alerts
          </CardTitle>
          <CardAction>
            <Select>
            <SelectTrigger type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
              <SelectValue>
                This Month
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                ▼
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="this-month" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2.5 items-center mb-4">
            <div className="flex flex-1 flex-col gap-1.5">
              <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                Total Revenue
              </div>
              <div className="font-bold text-2xl text-foreground">
                $128,400
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <div className="font-medium text-muted-foreground text-xs tracking-wide uppercase">
                Subscriptions
              </div>
              <div className="font-bold text-2xl text-foreground">
                312
              </div>
            </div>
          </div>
          <div className="bg-muted flex gap-0.5 h-2.5 items-center mb-3.5 overflow-hidden rounded-full w-full">
            <div className="bg-teal-400 h-full" style={{width: "60%"}}></div>
            <div className="bg-destructive h-full" style={{width: "30%"}}></div>
            <div className="bg-amber-400 h-full" style={{width: "10%"}}></div>
          </div>
          <div className="flex gap-5 items-center mb-6">
            <div className="flex gap-1 items-center text-teal-600 text-xs">
              <span className="bg-teal-400 inline-block rounded-full size-2"></span>
              Free
            </div>
            <div className="flex gap-1 items-center text-destructive text-xs">
              <span className="bg-destructive inline-block rounded-full size-2"></span>
              Pro
            </div>
            <div className="flex gap-1 items-center text-amber-600 text-xs">
              <span className="bg-amber-400 inline-block rounded-full size-2"></span>
              Enterprise
              <span className="ms-1">
                <Tooltip>
                <TooltipTrigger className="cursor-help focus-visible:ring-[3px] focus-visible:ring-ring/50 hover:text-foreground inline-flex items-center outline-none rounded-full text-muted-foreground" type="button" aria-label="About Enterprise plans" id="base-ui-_r_4_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-info size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2.5">
            <div className="text-muted-foreground text-sm tracking-wide">
              Expiring Soon
            </div>
          </div>
          <div className="bg-muted/40 border border-border/40 flex items-center justify-between last:mb-0 mb-2 px-3 py-2.5 rounded-md">
            <div className="flex gap-2.5 items-center">
              <span className="font-medium text-foreground text-sm">
                Acme Corp
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                Enterprise
              </Badge>
            </div>
            <div className="flex gap-2.5 items-center">
              <span className="text-muted-foreground text-xs">
                in
                <span className="font-semibold text-foreground">
                  3d
                </span>
              </span>
              <Separator className="bg-accent-foreground/20 h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <a className="font-medium hover:underline text-primary text-xs" href="#">
                Renew
              </a>
            </div>
          </div>
          <div className="bg-muted/40 border border-border/40 flex items-center justify-between last:mb-0 mb-2 px-3 py-2.5 rounded-md">
            <div className="flex gap-2.5 items-center">
              <span className="font-medium text-foreground text-sm">
                Beta LLC
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                Pro
              </Badge>
            </div>
            <div className="flex gap-2.5 items-center">
              <span className="text-muted-foreground text-xs">
                in
                <span className="font-semibold text-foreground">
                  5d
                </span>
              </span>
              <Separator className="bg-accent-foreground/20 h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <a className="font-medium hover:underline text-primary text-xs" href="#">
                Renew
              </a>
            </div>
          </div>
          <div className="bg-muted/40 border border-border/40 flex items-center justify-between last:mb-0 mb-2 px-3 py-2.5 rounded-md">
            <div className="flex gap-2.5 items-center">
              <span className="font-medium text-foreground text-sm">
                Gamma Inc
              </span>
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                Pro
              </Badge>
            </div>
            <div className="flex gap-2.5 items-center">
              <span className="text-muted-foreground text-xs">
                in
                <span className="font-semibold text-foreground">
                  7d
                </span>
              </span>
              <Separator className="bg-accent-foreground/20 h-3" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
              <a className="font-medium hover:underline text-primary text-xs" href="#">
                Renew
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
