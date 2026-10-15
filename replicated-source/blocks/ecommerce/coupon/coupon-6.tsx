import { Button } from "@/registry/bases/base/ui/button"

export function Pattern() {
  return (
    <main className="min-h-svh w-full">
      <section aria-labelledby="coupon-6-heading">
        <div className="bg-foreground relative text-background">
          <div className="flex gap-3 items-center lg:px-8 max-w-7xl mx-auto px-4 py-3 sm:gap-4 sm:px-6">
            <svg className="lucide lucide-zap shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
            <p className="flex flex-1 flex-wrap gap-x-3 gap-y-1 items-center min-w-0 text-sm" id="coupon-6-heading">
              <span className="text-background">
                {"20% off sitewide this weekend, ends Sunday at midnight"}
              </span>
              <span className="bg-background/5 border border-background/30 border-dashed font-mono font-semibold px-2 py-0.5 rounded-md select-all text-background text-xs tracking-[0.18em] uppercase">
                {"WEEKEND20"}
              </span>
            </p>
            <Button className="bg-background hover:bg-background/90 text-foreground" type="button" tabIndex={0} aria-label="Copy code WEEKEND20" extracted="1">
              {"Copy code"}
            </Button>
            <button className="flex hover:bg-background/10 hover:text-background items-center justify-center rounded-md shrink-0 size-7 text-background/70 transition-colors" type="button" aria-label="Dismiss promotion">
              <svg className="lucide lucide-x size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
