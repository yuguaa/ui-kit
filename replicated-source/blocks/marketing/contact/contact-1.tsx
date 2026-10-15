import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background flex items-center justify-center min-h-svh px-4 py-16 sm:px-6 w-full">
      <section className="flex flex-col gap-8 items-center max-w-2xl mx-auto text-center w-full" aria-labelledby="contact-title">
        <div className="flex flex-col gap-3 items-center max-w-xl">
          <p className="font-semibold text-muted-foreground text-xs uppercase">
            Help & Contact
          </p>
          <h1 className="font-semibold leading-tight sm:text-4xl text-3xl text-balance text-foreground" id="contact-title">
            We're here to help
          </h1>
          <p className="leading-7 text-base text-muted-foreground text-pretty">
            Need assistance with your NeUI kit, have questions about licensing, or want to upgrade your plan? We'll guide you through the process.
          </p>
        </div>
        <Frame className="max-w-md text-left w-full">
          <FramePanel className="p-0">
            <Item variant="default" size="default">
              <ItemMedia variant="icon" aria-hidden="true">
                <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </ItemMedia>
              <ItemContent>
                <ItemTitle>
                  Contact us
                </ItemTitle>
                <ItemDescription>
                  For all requests contact us directly via email.
                </ItemDescription>
              </ItemContent>
            </Item>
          </FramePanel>
          <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
            <Button className="font-medium w-full" type="button" tabIndex="0" aria-label="Contact support at hello@neui.io" extracted="1">
              hello@neui.io
            </Button>
          </footer>
        </Frame>
      </section>
    </div>
  )
}
