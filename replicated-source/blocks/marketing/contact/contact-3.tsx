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
      <section className="gap-8 grid lg:grid-cols-2 lg:items-stretch lg:min-h-[44rem] max-w-6xl mx-auto w-full" aria-labelledby="contact-3-title">
        <div className="flex flex-col justify-center lg:p-10 min-w-0 p-1 sm:p-4">
          <div className="flex flex-col gap-3 max-w-xl mb-7">
            <Badge variant="outline">
              {"Contact Us"}
            </Badge>
            <h1 className="font-semibold leading-tight sm:text-4xl text-3xl text-balance text-foreground tracking-tight" id="contact-3-title">
              {"Tell Us What You Need"}
            </h1>
            <p className="leading-7 text-base text-muted-foreground text-pretty">
              {"Send a short note with the context, topic, or blocker."}
              <br />
              {"We will route it to the right person with a useful next step."}
            </p>
          </div>
          <form className="max-w-xl w-full" id="contact-3-form" action="#">
            <FieldGroup className="gap-4">
              <FieldGroup className="gap-4 grid sm:grid-cols-2">
                <Field role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-3-name">
                    {"Name"}
                  </FieldLabel>
                  <Input id="contact-3-name" autoComplete="name" placeholder="Mira" name="name"></Input>
                </Field>
                <Field role="group" data-orientation="vertical">
                  <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-3-email">
                    {"Email"}
                  </FieldLabel>
                  <Input id="contact-3-email" autoComplete="email" placeholder="mira@northstar.co" type="email" name="email"></Input>
                </Field>
              </FieldGroup>
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-3-topic">
                  {"Topic"}
                </FieldLabel>
                <Select>
                <SelectTrigger className="w-full" type="button" placeholder="" tabIndex="0" id="contact-3-topic" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" extracted="1">
                  <SelectValue placeholder="">
                    {"Choose a topic"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input tabIndex="-1" aria-hidden="true" value="" name="topic" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
              </Field>
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-3-subject">
                  {"Subject"}
                </FieldLabel>
                <Input id="contact-3-subject" autoComplete="off" placeholder="How can we help?" name="subject"></Input>
              </Field>
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="contact-3-details">
                  {"Message"}
                </FieldLabel>
                <Textarea className="min-h-28 resize-none" id="contact-3-details" name="details" placeholder="Your message"></Textarea>
              </Field>
              <Button className="mt-1 w-fit" type="submit" tabIndex="0">
                {"Send Message"}
              </Button>
            </FieldGroup>
          </form>
        </div>
        <Card className="h-full overflow-hidden p-0 shadow-none" size="default">
          <CardContent className="bg-[oklch(12%_0.05_255)] flex isolate lg:min-h-full lg:p-12 min-h-[36rem] overflow-hidden p-8 relative sm:p-10 text-[oklch(98%_0.006_252)]">
            <img className="absolute inset-0 object-cover size-full" alt="" width="640" height="440" decoding="async" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=640&h=440&q=80" />
            <div className="absolute bg-[oklch(5%_0.03_266_/_36%)] inset-0"></div>
            <div className="absolute bg-[linear-gradient(180deg,oklch(5%_0.03_266_/_82%)_0%,oklch(5%_0.03_266_/_20%)_42%,oklch(5%_0.03_266_/_88%)_100%)] inset-0"></div>
            <div className="absolute bg-[radial-gradient(circle_at_78%_18%,oklch(74%_0.18_215_/_30%),oklch(7%_0.03_266_/_0%)_48%)] inset-0"></div>
            <div className="flex flex-col gap-10 h-full justify-between min-w-0 relative">
              <div className="flex flex-col gap-5 max-w-xl">
                <Badge className="bg-[oklch(98%_0.006_252_/_15%)] text-[oklch(98%_0.006_252)]" variant="secondary">
                  {"Contact Desk"}
                </Badge>
                <h2 className="font-semibold leading-none max-w-[11ch] sm:text-6xl text-5xl text-balance tracking-tight">
                  {"Reach A Real Team"}
                </h2>
              </div>
              <footer className="flex flex-col gap-7 max-w-lg">
                <p className="leading-8 text-[oklch(98%_0.006_252_/_84%)] text-lg text-pretty">
                  {"Questions, access issues, feedback, and partnership notes all land with someone who can move the conversation forward."}
                </p>
                <ItemGroup className="gap-3 sm:flex-row sm:flex-wrap" role="list">
                  <Item className="bg-[oklch(98%_0.006_252_/_13%)] focus-visible:bg-[oklch(98%_0.006_252_/_20%)] hover:bg-[oklch(98%_0.006_252_/_20%)] max-w-full text-[oklch(98%_0.006_252)] w-fit" href="mailto:hello@neui.example" aria-label="Email the NeUI contact desk" variant="muted" size="xs">
                    <ItemMedia className="[&_svg]:size-4 bg-transparent size-auto text-[oklch(86%_0.17_222)]" variant="icon" aria-hidden="true">
                      <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemTitle className="text-[oklch(98%_0.006_252)]">
                        {"hello@neui.example"}
                      </ItemTitle>
                    </ItemContent>
                  </Item>
                  <Item className="bg-[oklch(98%_0.006_252_/_13%)] focus-visible:bg-[oklch(98%_0.006_252_/_20%)] hover:bg-[oklch(98%_0.006_252_/_20%)] max-w-full text-[oklch(98%_0.006_252)] w-fit" href="tel:+14155550184" aria-label="Call the NeUI contact desk" variant="muted" size="xs">
                    <ItemMedia className="[&_svg]:size-4 bg-transparent size-auto text-[oklch(86%_0.17_222)]" variant="icon" aria-hidden="true">
                      <svg className="lucide lucide-headphones" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Headphones" tabler="IconHeadphones" hugeicons="CustomerSupportIcon" phosphor="HeadphonesIcon" remixicon="RiCustomerService2Line" aria-hidden="true">
                        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>
                      </svg>
                    </ItemMedia>
                    <ItemContent className="min-w-0">
                      <ItemTitle className="text-[oklch(98%_0.006_252)]">
                        {"+1 415 555 0184"}
                      </ItemTitle>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </footer>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
