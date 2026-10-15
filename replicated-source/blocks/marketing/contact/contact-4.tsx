import { Button } from "@/registry/bases/base/ui/button"
import { Separator } from "@/registry/bases/base/ui/separator"

export function Pattern() {
  return (
    <div className="bg-background min-h-svh overflow-hidden relative w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="absolute dark:opacity-[0.75] dark:text-foreground/[0.03] inset-0 opacity-50 pointer-events-none select-none size-full text-foreground/[0.015] z-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <filter id="contact-4-noise">
            <feturbulence type="fractalNoise" baseFrequency="0.5" numOctaves="5" stitchtiles="stitch"></feturbulence>
            <fecolormatrix type="saturate" values="0"></fecolormatrix>
            <fecomponenttransfer>
              <fefuncr type="linear" slope="0.08"></fefuncr>
              <fefuncg type="linear" slope="0.08"></fefuncg>
              <fefuncb type="linear" slope="0.08"></fefuncb>
            </fecomponenttransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#contact-4-noise)" opacity="0.28"></rect>
        </svg>
      </div>
      <div className="flex items-center justify-center min-h-svh px-4 py-16 relative sm:px-6 w-full z-10">
        <div className="max-w-5xl w-full">
          <section className="flex flex-col gap-8 w-full" aria-labelledby="contact-4-title">
            <header className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 max-w-2xl">
                <p className="font-semibold text-muted-foreground text-xs tracking-wide uppercase">
                  {"Offices"}
                </p>
                <h2 className="font-semibold sm:text-4xl text-3xl text-balance text-foreground tracking-tight" id="contact-4-title">
                  {"Find Us Around The World"}
                </h2>
                <p className="leading-7 text-base text-muted-foreground text-pretty">
                  {"Three studios across three timezones, so there is usually someone on the team online when you are."}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-3 items-center">
                <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline font-medium gap-2 group/mail hover:text-primary hover:underline inline-flex items-center text-foreground text-sm transition-colors underline-offset-4" href="#" aria-label="Email the NeUI team at hello@neui.io">
                  <svg className="lucide lucide-mail shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  {"hello@neui.io"}
                </a>
                <Button href="#" role="button" tabIndex="0">
                  {"Talk to us"}
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
              </div>
            </header>
            <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="divide-border divide-y grid grid-cols-1 sm:divide-x sm:divide-y-0 sm:grid-cols-3">
              <div className="flex flex-col gap-3 py-6 sm:first:pl-0 sm:last:pr-0 sm:px-6 sm:py-0">
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-semibold text-foreground text-lg tracking-tight">
                    {"Austin"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {"United States"}
                  </p>
                </div>
                <address className="leading-6 not-italic text-muted-foreground text-sm">
                  <span className="block">
                    {"98 San Jacinto Blvd, Suite 400"}
                  </span>
                  <span className="block">
                    {"Austin, TX 78701"}
                  </span>
                </address>
                <p className="flex gap-2 items-center text-muted-foreground text-sm">
                  <svg className="lucide lucide-clock shrink-0 size-4 text-muted-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span>
                    <span className="font-medium tabular-nums text-foreground">
                      {"UTC-6"}
                    </span>
                    {"· Mon to Fri, 9 to 6 CST"}
                  </span>
                </p>
                <a className="focus-visible:outline-none focus-visible:underline font-medium gap-1.5 group/dir hover:underline inline-flex items-center mt-auto pt-1 text-primary text-sm transition-colors underline-offset-4 w-fit" href="#" aria-label="Get directions to the Austin office">
                  {"Get directions"}
                  <svg className="duration-200 ease-out lucide lucide-arrow-right motion-safe:group-hover/dir:translate-x-0.5 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="flex flex-col gap-3 py-6 sm:first:pl-0 sm:last:pr-0 sm:px-6 sm:py-0">
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-semibold text-foreground text-lg tracking-tight">
                    {"Berlin"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {"Germany"}
                  </p>
                </div>
                <address className="leading-6 not-italic text-muted-foreground text-sm">
                  <span className="block">
                    {"Torstrasse 120"}
                  </span>
                  <span className="block">
                    {"10119 Berlin"}
                  </span>
                </address>
                <p className="flex gap-2 items-center text-muted-foreground text-sm">
                  <svg className="lucide lucide-clock shrink-0 size-4 text-muted-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span>
                    <span className="font-medium tabular-nums text-foreground">
                      {"UTC+1"}
                    </span>
                    {"· Mon to Fri, 9 to 6 CET"}
                  </span>
                </p>
                <a className="focus-visible:outline-none focus-visible:underline font-medium gap-1.5 group/dir hover:underline inline-flex items-center mt-auto pt-1 text-primary text-sm transition-colors underline-offset-4 w-fit" href="#" aria-label="Get directions to the Berlin office">
                  {"Get directions"}
                  <svg className="duration-200 ease-out lucide lucide-arrow-right motion-safe:group-hover/dir:translate-x-0.5 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="flex flex-col gap-3 py-6 sm:first:pl-0 sm:last:pr-0 sm:px-6 sm:py-0">
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-semibold text-foreground text-lg tracking-tight">
                    {"Tokyo"}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {"Japan"}
                  </p>
                </div>
                <address className="leading-6 not-italic text-muted-foreground text-sm">
                  <span className="block">
                    {"2-11-3 Meguro"}
                  </span>
                  <span className="block">
                    {"Meguro City, 153-0063"}
                  </span>
                </address>
                <p className="flex gap-2 items-center text-muted-foreground text-sm">
                  <svg className="lucide lucide-clock shrink-0 size-4 text-muted-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  <span>
                    <span className="font-medium tabular-nums text-foreground">
                      {"UTC+9"}
                    </span>
                    {"· Mon to Fri, 10 to 7 JST"}
                  </span>
                </p>
                <a className="focus-visible:outline-none focus-visible:underline font-medium gap-1.5 group/dir hover:underline inline-flex items-center mt-auto pt-1 text-primary text-sm transition-colors underline-offset-4 w-fit" href="#" aria-label="Get directions to the Tokyo office">
                  {"Get directions"}
                  <svg className="duration-200 ease-out lucide lucide-arrow-right motion-safe:group-hover/dir:translate-x-0.5 shrink-0 size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
