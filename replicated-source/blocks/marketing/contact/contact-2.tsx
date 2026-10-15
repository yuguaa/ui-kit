import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import {
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex items-center justify-center md:py-10 min-h-svh px-4 py-8 sm:px-6 w-full">
      <div className="max-w-6xl w-full">
        <section className="max-w-6xl mx-auto w-full" aria-labelledby="contact-2-title">
          <Card className="overflow-hidden p-0 shadow-none" size="default">
            <div className="grid lg:grid-cols-2 min-h-[44rem]">
              <CardContent className="flex flex-col justify-center lg:p-10 min-w-0 p-5 sm:p-8">
                <div className="flex flex-col gap-3 max-w-xl mb-7">
                  <Badge variant="outline">
                    Project Inquiry
                  </Badge>
                  <h1 className="font-semibold leading-tight sm:text-4xl text-3xl text-balance text-foreground tracking-tight" id="contact-2-title">
                    Start A Project
                  </h1>
                  <p className="leading-7 text-base text-muted-foreground text-pretty">
                    Share the essentials. We will route the note and send a practical next step.
                  </p>
                </div>
                <form className="max-w-xl w-full" id="contact-2-form" action="#">
                  <FieldGroup className="gap-4">
                    <FieldGroup className="gap-4 grid sm:grid-cols-2">
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-2-first-name">
                          First Name
                        </FieldLabel>
                        <Input id="contact-2-first-name" autoComplete="given-name" placeholder="Mira" name="firstName"></Input>
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-2-last-name">
                          Last Name
                        </FieldLabel>
                        <Input id="contact-2-last-name" autoComplete="family-name" placeholder="Stone" name="lastName"></Input>
                      </Field>
                    </FieldGroup>
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-2-email">
                        Work Email
                      </FieldLabel>
                      <Input id="contact-2-email" autoComplete="email" placeholder="mira@northstar.co" type="email" name="email"></Input>
                    </Field>
                    <FieldGroup className="gap-4 grid sm:grid-cols-2">
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-2-company">
                          Company
                        </FieldLabel>
                        <Input id="contact-2-company" autoComplete="organization" placeholder="Northstar Labs" name="company"></Input>
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-2-project-type">
                          Project Type
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="w-full" type="button" placeholder="" tabIndex="0" id="contact-2-project-type" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
                          <SelectValue placeholder="">
                            Choose a surface
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input tabIndex="-1" aria-hidden="true" value="" name="projectType" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                      </Field>
                    </FieldGroup>
                    <FieldGroup className="gap-4 grid sm:grid-cols-2">
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-2-budget">
                          Project Budget
                        </FieldLabel>
                        <InputGroup role="group">
                          <InputGroupAddon role="group" data-align="inline-start">
                            <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                              $
                            </span>
                          </InputGroupAddon>
                          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="contact-2-budget" inputmode="numeric" placeholder="25,000 to 75,000" name="budget" />
                        </InputGroup>
                      </Field>
                      <Field role="group" data-orientation="vertical">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-2-timeline">
                          Timeline
                        </FieldLabel>
                        <Select>
                        <SelectTrigger className="w-full" type="button" placeholder="" tabIndex="0" id="contact-2-timeline" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                          <SelectValue placeholder="">
                            Choose timing
                          </SelectValue>
                          <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                            ▼
                          </svg>
                        </SelectTrigger>
                        </Select>
                        <input tabIndex="-1" aria-hidden="true" value="" name="timeline" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                      </Field>
                    </FieldGroup>
                    <Field role="group" data-orientation="vertical">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-2-details">
                        Project Details
                      </FieldLabel>
                      <Textarea className="min-h-28 resize-none" id="contact-2-details" name="details" placeholder="What are you launching, what is blocked, and what should we review?"></Textarea>
                    </Field>
                    <Button className="mt-1 w-fit" type="submit" tabIndex="0">
                      Send Project Brief
                    </Button>
                  </FieldGroup>
                </form>
              </CardContent>
              <aside className="bg-[oklch(51%_0.27_278)] flex isolate lg:min-h-full lg:p-12 min-h-[36rem] overflow-hidden p-8 relative sm:p-10 text-[oklch(98%_0.006_260)]">
                <svg className="absolute inset-0 size-full" aria-hidden="true" viewBox="0 0 720 720" preserveAspectRatio="none">
                  <defs>
                    <lineargradient id="contact-2-panel-wash" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="oklch(14% 0.04 268)"></stop>
                      <stop offset="0.42" stopColor="oklch(47% 0.29 279)"></stop>
                      <stop offset="1" stopColor="oklch(61% 0.23 250)"></stop>
                    </lineargradient>
                    <pattern id="contact-2-dot-field" width="18" height="18" patternUnits="userSpaceOnUse">
                      <circle cx="1.5" cy="1.5" r="1.4" fill="currentColor"></circle>
                      <circle cx="12" cy="8" r="0.9" fill="currentColor"></circle>
                    </pattern>
                    <radialgradient id="contact-2-void" cx="12%" cy="34%" r="64%">
                      <stop offset="0" stopColor="oklch(8% 0.02 268)"></stop>
                      <stop offset="0.5" stopColor="oklch(8% 0.02 268 / 72%)"></stop>
                      <stop offset="1" stopColor="oklch(8% 0.02 268 / 0%)"></stop>
                    </radialgradient>
                    <mask id="contact-2-spray-mask">
                      <rect width="720" height="720" fill="oklch(100% 0 0)"></rect>
                      <circle cx="545" cy="182" r="210" fill="oklch(0% 0 0 / 24%)"></circle>
                      <circle cx="112" cy="620" r="190" fill="oklch(0% 0 0 / 30%)"></circle>
                    </mask>
                  </defs>
                  <rect width="720" height="720" fill="url(#contact-2-panel-wash)"></rect>
                  <rect className="text-[oklch(8%_0.02_268_/_42%)]" width="720" height="720" fill="url(#contact-2-dot-field)" mask="url(#contact-2-spray-mask)"></rect>
                  <path d="M0 84C118 42 196 62 286 139C411 246 517 248 720 166V720H0Z" fill="oklch(41% 0.24 282 / 52%)"></path>
                  <path d="M-40 500C96 410 226 398 350 462C472 526 560 532 760 430V760H-40Z" fill="oklch(20% 0.12 262 / 45%)"></path>
                  <rect width="720" height="720" fill="url(#contact-2-void)"></rect>
                </svg>
                <div className="flex flex-col gap-10 h-full justify-between min-w-0 relative">
                  <div className="flex flex-col gap-5 max-w-xl">
                    <Badge className="bg-[oklch(98%_0.006_260_/_16%)] text-[oklch(98%_0.006_260)]" variant="secondary">
                      Scope Desk
                    </Badge>
                    <h2 className="font-semibold leading-none max-w-[11ch] sm:text-6xl text-5xl text-balance tracking-tight">
                      Got A Launch In Motion?
                    </h2>
                  </div>
                  <footer className="flex flex-col gap-7 max-w-lg">
                    <p className="leading-8 text-[oklch(98%_0.006_260_/_84%)] text-lg text-pretty">
                      Plan adoption, registry setup, and launch polish before work drifts.
                    </p>
                    <ItemGroup className="gap-3 sm:flex-row sm:flex-wrap" role="list">
                      <Item className="bg-[oklch(98%_0.006_260_/_14%)] focus-visible:bg-[oklch(98%_0.006_260_/_20%)] hover:bg-[oklch(98%_0.006_260_/_20%)] max-w-full text-[oklch(98%_0.006_260)] w-fit" href="mailto:studio@neui.example" aria-label="Email the NeUI scope desk" variant="muted" size="xs">
                        <ItemMedia className="[&_svg]:size-4 bg-transparent size-auto text-[oklch(98%_0.006_260_/_82%)]" variant="icon" aria-hidden="true">
                          <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="text-[oklch(98%_0.006_260)]">
                            studio@neui.example
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                      <Item className="bg-[oklch(98%_0.006_260_/_14%)] focus-visible:bg-[oklch(98%_0.006_260_/_20%)] hover:bg-[oklch(98%_0.006_260_/_20%)] max-w-full text-[oklch(98%_0.006_260)] w-fit" href="tel:+14155550184" aria-label="Call the NeUI scope desk" variant="muted" size="xs">
                        <ItemMedia className="[&_svg]:size-4 bg-transparent size-auto text-[oklch(98%_0.006_260_/_82%)]" variant="icon" aria-hidden="true">
                          <svg className="lucide lucide-headphones" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                          </svg>
                        </ItemMedia>
                        <ItemContent className="min-w-0">
                          <ItemTitle className="text-[oklch(98%_0.006_260)]">
                            +1 415 555 0184
                          </ItemTitle>
                        </ItemContent>
                      </Item>
                    </ItemGroup>
                  </footer>
                </div>
              </aside>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
