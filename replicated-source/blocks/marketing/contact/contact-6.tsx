import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background flex items-center justify-center lg:py-24 min-h-svh px-4 py-16 sm:px-6 w-full">
      <div className="max-w-4xl w-full">
        <section className="flex flex-col gap-10 lg:gap-12 w-full" aria-labelledby="contact-6-title">
          <div className="flex flex-col gap-4 items-center max-w-2xl mx-auto text-center">
            <h2 className="font-semibold lg:text-5xl text-4xl text-balance text-foreground tracking-tight" id="contact-6-title">
              {"Talk To The Team"}
            </h2>
            <p className="leading-8 text-lg text-muted-foreground text-pretty">
              {"Reach us however works best for you. A real person is always glad to help."}
            </p>
          </div>
          <Frame className="w-full">
            <div className="gap-1 grid md:grid-cols-3">
              <FramePanel className="flex flex-col gap-4 group hover:border-primary/40 transition-colors">
                <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold text-base text-foreground tracking-tight">
                    {"Live Chat"}
                  </h3>
                  <p className="leading-6 text-muted-foreground text-pretty text-sm">
                    {"Chat with the team in real time, Monday to Friday."}
                  </p>
                </div>
                <a className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:underline font-medium gap-1.5 hover:underline inline-flex items-center mt-auto text-primary text-sm underline-offset-4 w-fit" href="#" aria-label="Start a live chat with the NeUI team">
                  {"Start a chat"}
                  <svg className="duration-200 group-hover:translate-x-0.5 lucide lucide-arrow-right size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </FramePanel>
              <FramePanel className="flex flex-col gap-4 group hover:border-primary/40 transition-colors">
                <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold text-base text-foreground tracking-tight">
                    {"Email Us"}
                  </h3>
                  <p className="leading-6 text-muted-foreground text-pretty text-sm">
                    {"Send a note and a real person replies within a business day."}
                  </p>
                </div>
                <a className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:underline font-medium gap-1.5 hover:underline inline-flex items-center mt-auto text-primary text-sm underline-offset-4 w-fit" href="#" aria-label="Email the NeUI team at hello@neui.io">
                  {"hello@neui.io"}
                  <svg className="duration-200 group-hover:translate-x-0.5 lucide lucide-arrow-right size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </FramePanel>
              <FramePanel className="flex flex-col gap-4 group hover:border-primary/40 transition-colors">
                <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon"></ItemMedia>
                </Item>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold text-base text-foreground tracking-tight">
                    {"Community"}
                  </h3>
                  <p className="leading-6 text-muted-foreground text-pretty text-sm">
                    {"Ask questions and share what you build with other developers."}
                  </p>
                </div>
                <a className="after:absolute after:inset-0 focus-visible:outline-none focus-visible:underline font-medium gap-1.5 hover:underline inline-flex items-center mt-auto text-primary text-sm underline-offset-4 w-fit" href="#" aria-label="Join the NeUI community on GitHub">
                  {"Join the discussion"}
                  <svg className="duration-200 group-hover:translate-x-0.5 lucide lucide-arrow-right size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </FramePanel>
            </div>
          </Frame>
          <Card className="bg-muted border-0 gap-5 items-center p-8 ring-0 shadow-none sm:p-10 text-center" size="default">
            <div className="flex flex-col gap-2 max-w-xl mx-auto">
              <h3 className="font-semibold text-2xl text-balance text-foreground tracking-tight">
                {"Still Have Questions?"}
              </h3>
              <p className="leading-7 text-muted-foreground text-pretty">
                {"The docs and FAQ cover installation, theming, and every block in the library."}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:w-auto w-full">
              <Button href="#" role="button" tabIndex="0">
                {"Read the Docs"}
                <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Button>
              <Button href="#" role="button" tabIndex="0">
                {"Browse the FAQ"}
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
