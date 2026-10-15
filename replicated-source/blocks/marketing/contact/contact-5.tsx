import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Textarea } from "@/registry/bases/base/ui/textarea"

export function Pattern() {
  return (
    <section className="bg-background flex items-center justify-center lg:py-24 min-h-svh px-4 py-16 sm:px-6 w-full" aria-labelledby="contact-5-title">
      <Card className="max-w-5xl overflow-hidden p-0 w-full" size="default">
        <div className="grid lg:grid-cols-2">
          <div className="bg-muted/30 border-b flex flex-col gap-8 lg:border-b-0 lg:border-r lg:p-12 p-8 sm:p-10">
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-primary text-sm tracking-wide uppercase">
                Contact
              </p>
              <h2 className="font-semibold lg:text-4xl text-3xl text-balance text-foreground tracking-tight" id="contact-5-title">
                Let's Build Your Next Interface
              </h2>
              <p className="leading-7 max-w-sm text-base text-muted-foreground text-pretty">
                Tell us what you are building and the team behind NeUI will point you in the right direction.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2.5 items-center">
                <span className="[&_svg]:size-4 shrink-0 text-muted-foreground">
                  <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-medium text-[0.6875rem] text-muted-foreground tracking-wider uppercase">
                    Email
                  </span>
                  <a className="focus-visible:outline-none focus-visible:text-primary focus-visible:underline font-medium hover:text-primary hover:underline text-base text-foreground underline-offset-4 w-fit" href="#" aria-label="Email the NeUI team at hello@neui.io">
                    hello@neui.io
                  </a>
                </div>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="[&_svg]:size-4 shrink-0 text-muted-foreground">
                  <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-medium text-[0.6875rem] text-muted-foreground tracking-wider uppercase">
                    Response time
                  </span>
                  <span className="font-medium text-base text-foreground">
                    Within one business day
                  </span>
                </div>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="[&_svg]:size-4 shrink-0 text-muted-foreground">
                  <svg className="lucide lucide-map-pin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinIcon" tabler="IconMapPin" hugeicons="Location06Icon" phosphor="MapPinIcon" remixicon="RiMapPinLine" aria-hidden="true">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-medium text-[0.6875rem] text-muted-foreground tracking-wider uppercase">
                    Studio
                  </span>
                  <span className="font-medium text-base text-foreground">
                    San Francisco, CA
                  </span>
                </div>
              </div>
            </div>
            <p className="leading-6 mt-auto text-muted-foreground text-sm">
              Prefer to self-serve?
              <a className="focus-visible:outline-none focus-visible:underline font-medium hover:text-primary hover:underline text-foreground underline-offset-4" href="#">
                Browse the documentation
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:p-12 p-8 sm:p-10">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-foreground text-xl tracking-tight">
                Tell Us About Your Project
              </h3>
              <p className="leading-6 text-muted-foreground text-sm">
                Share a few details and a real person gets back to you soon.
              </p>
            </div>
            <form className="w-full" action="#">
              <FieldGroup className="gap-5">
                <FieldGroup className="gap-5 grid sm:grid-cols-2">
                  <Field role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-5-first">
                      First name
                    </FieldLabel>
                    <Input id="contact-5-first" autoComplete="given-name" placeholder="Jordan" name="first-name"></Input>
                  </Field>
                  <Field role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-5-last">
                      Last name
                    </FieldLabel>
                    <Input id="contact-5-last" autoComplete="family-name" placeholder="Reyes" name="last-name"></Input>
                  </Field>
                </FieldGroup>
                <Field role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-5-email">
                    Work email
                  </FieldLabel>
                  <Input id="contact-5-email" autoComplete="email" placeholder="jordan@studio.co" type="email" name="email"></Input>
                </Field>
                <Field role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-5-company">
                    Company
                  </FieldLabel>
                  <Input id="contact-5-company" autoComplete="organization" placeholder="Studio name" name="company"></Input>
                </Field>
                <Field role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-5-message">
                    Message
                  </FieldLabel>
                  <Textarea className="min-h-28 resize-none" id="contact-5-message" name="message" placeholder="Tell us a little about what you are building."></Textarea>
                </Field>
                <Button className="mt-1 w-full" type="submit" tabIndex="0" extracted="1">
                  Send Message
                  <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
                <p className="leading-5 text-center text-muted-foreground text-xs">
                  Sending this means you accept our
                  <a className="focus-visible:outline-none focus-visible:underline font-medium hover:text-primary hover:underline text-foreground underline-offset-4" href="#">
                    Terms
                  </a>
                  and
                  <a className="focus-visible:outline-none focus-visible:underline font-medium hover:text-primary hover:underline text-foreground underline-offset-4" href="#">
                    Privacy Policy
                  </a>
                  .
                </p>
              </FieldGroup>
            </form>
          </div>
        </div>
      </Card>
    </section>
  )
}
