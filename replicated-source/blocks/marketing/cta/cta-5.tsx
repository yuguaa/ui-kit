import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Card className="border-0 isolate overflow-hidden p-0 relative shadow-sm w-full" size="default">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{background: "radial-gradient(120% 130% at 60% 128%, oklch(0.97 0.03 255) 0%, oklch(0.64 0.24 258) 22%, oklch(0.4 0.17 261) 46%, oklch(0.2 0.07 263) 66%, transparent 82%), radial-gradient(85% 75% at 20% 116%, oklch(0.5 0.21 262) 0%, transparent 56%), oklch(0.13 0.025 264)"}}></div>
        <div className="flex flex-col gap-8 items-center lg:py-32 px-6 py-20 relative sm:px-10 sm:py-28 text-center">
          <h2 className="font-semibold leading-[1.05] lg:text-6xl sm:text-5xl text-4xl text-[oklch(0.98_0.012_255)] tracking-tight">
            <span className="block">
              {"Build Your Interface"}
            </span>
            <span className="block">
              {"In An Afternoon."}
            </span>
          </h2>
          <Button className="bg-[oklch(0.98_0.012_255)] hover:bg-[oklch(0.92_0.02_255)] hover:text-[oklch(0.2_0.03_264)] px-8 rounded-full text-[oklch(0.2_0.03_264)]" href="#" role="button" tabIndex="0">
            {"Start Building"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
