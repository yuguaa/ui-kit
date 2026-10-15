import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Card className="bg-zinc-900 border-0 max-w-md rounded-2xl text-white w-full" size="default">
        <CardHeader className="flex gap-3 items-center justify-between mb-4">
          <CardTitle className="font-semibold text-lg text-zinc-400">
            Balance
          </CardTitle>
          <CardAction>
            <Button className="bg-zinc-800 border-zinc-800 hover:bg-zinc-700 hover:text-zinc-100 text-zinc-100" type="button" tabIndex="0" extracted="1">
              <svg className="lucide lucide-banknote" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BanknoteIcon" tabler="IconCashBanknote" hugeicons="Money01Icon" phosphor="MoneyIcon" remixicon="RiCashLine" aria-hidden="true">
                <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M6 12h.01M18 12h.01"></path>
              </svg>
              Topup
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 items-end mb-5">
            <span className="font-bold text-3xl text-white tracking-tight">
              $10,976.95
            </span>
            <span className="font-semibold ms-2 text-base text-emerald-400">
              +5.7%
            </span>
          </div>
          <div className="border-b border-zinc-700 mb-6"></div>
          <div className="flex gap-1.5 items-center mb-3 w-full">
            <div className="space-y-2.5" style={{width: "30%"}}>
              <div className="bg-white h-2.5 overflow-hidden rounded-sm transition-all w-full"></div>
              <div className="flex flex-1 flex-col items-start">
                <span className="font-medium text-xs text-zinc-400">
                  USD
                </span>
                <span className="font-semibold text-base text-white">
                  30%
                </span>
              </div>
            </div>
            <div className="space-y-2.5" style={{width: "20%"}}>
              <div className="bg-indigo-400 h-2.5 overflow-hidden rounded-sm transition-all w-full"></div>
              <div className="flex flex-1 flex-col items-start">
                <span className="font-medium text-xs text-zinc-400">
                  GBP
                </span>
                <span className="font-semibold text-base text-white">
                  20%
                </span>
              </div>
            </div>
            <div className="space-y-2.5" style={{width: "15%"}}>
              <div className="bg-blue-500 h-2.5 overflow-hidden rounded-sm transition-all w-full"></div>
              <div className="flex flex-1 flex-col items-start">
                <span className="font-medium text-xs text-zinc-400">
                  EUR
                </span>
                <span className="font-semibold text-base text-white">
                  15%
                </span>
              </div>
            </div>
            <div className="space-y-2.5" style={{width: "20%"}}>
              <div className="bg-violet-600 h-2.5 overflow-hidden rounded-sm transition-all w-full"></div>
              <div className="flex flex-1 flex-col items-start">
                <span className="font-medium text-xs text-zinc-400">
                  JPY
                </span>
                <span className="font-semibold text-base text-white">
                  20%
                </span>
              </div>
            </div>
            <div className="space-y-2.5" style={{width: "15%"}}>
              <div className="bg-fuchsia-600 h-2.5 overflow-hidden rounded-sm transition-all w-full"></div>
              <div className="flex flex-1 flex-col items-start">
                <span className="font-medium text-xs text-zinc-400">
                  CNY
                </span>
                <span className="font-semibold text-base text-white">
                  15%
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
