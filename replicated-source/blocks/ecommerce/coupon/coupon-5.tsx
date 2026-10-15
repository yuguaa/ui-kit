import { Button } from "@/registry/bases/base/ui/button"

export function Pattern() {
  return (
    <main className="min-h-svh w-full">
      <section aria-labelledby="coupon-5-heading">
        <div className="bg-muted/30 border-border border-y relative">
          <div className="flex gap-3 items-center lg:px-8 max-w-7xl mx-auto px-4 py-3 sm:gap-4 sm:px-6">
            <svg className="lucide lucide-truck shrink-0 size-4 text-success" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TruckIcon" tabler="IconTruck" hugeicons="TruckIcon" phosphor="TruckIcon" remixicon="RiTruckLine" aria-hidden="true">
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
              <path d="M15 18H9"></path>
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
              <circle cx={17} cy={18} r={2}></circle>
              <circle cx={7} cy={18} r={2}></circle>
            </svg>
            <p className="flex flex-1 flex-wrap gap-x-3 gap-y-1 items-center min-w-0 text-sm" id="coupon-5-heading">
              <span className="text-foreground">
                {"Always free shipping on orders over $50"}
              </span>
              <span className="bg-background border border-border border-dashed font-mono font-semibold px-2 py-0.5 rounded-md select-all text-foreground text-xs tracking-[0.18em] uppercase">
                {"FREESHIP50"}
              </span>
            </p>
            <Button type="button" tabIndex={0} aria-label="Copy code FREESHIP50" extracted="1">
              {"Copy code"}
            </Button>
            <button className="flex hover:bg-muted hover:text-foreground items-center justify-center rounded-md shrink-0 size-7 text-muted-foreground transition-colors" type="button" aria-label="Dismiss promotion">
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
