import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <section className="max-w-2xl px-4 relative w-full">
        <div className="flex flex-col gap-7 items-center text-center">
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5.5 min-w-5.5 outline-none px-1.5 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-secondary-foreground text-xs transition-shadow">
            <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
            {"Free Weekly"}
            <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
            {"5 Min Read"}
          </Badge>
          <h2 className="font-semibold sm:text-5xl text-4xl text-balance text-foreground tracking-tight">
            {"Field Notes For People Who Ship"}
          </h2>
          <p className="max-w-xl sm:text-lg text-balance text-base text-muted-foreground">
            {"Honest write-ups from founders, designers, and engineers building things that matter. One short read, every Sunday."}
          </p>
          <form className="flex flex-col gap-2 max-w-md sm:flex-row w-full">
            <InputGroup className="flex-1" role="group">
              <InputGroupAddon role="group" data-align="inline-start">
                <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_0_" required autoComplete="email" placeholder="you@yourcompany.com" aria-label="Email address" type="email" />
            </InputGroup>
            <Button type="submit" tabIndex="0" extracted="1">
              {"Subscribe"}
              <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </form>
          <div className="flex gap-3 items-center">
            <div className="-space-x-1.5 flex">
              <Avatar className="ring-2 ring-background" size="sm">
                <AvatarImage alt="Avery Chen" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="ring-2 ring-background" size="sm">
                <AvatarImage alt="Mateus Ribeiro" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="ring-2 ring-background" size="sm">
                <AvatarImage alt="Jules Tan" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="ring-2 ring-background" size="sm">
                <AvatarImage alt="Sana Patel" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="ring-2 ring-background" size="sm">
                <AvatarImage alt="Diego Romero" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=160&h=160&q=80"></AvatarImage>
              </Avatar>
            </div>
            <p className="text-muted-foreground text-sm">
              {"Joined by"}
              <span className="font-semibold text-foreground">
                {"1,247"}
              </span>
              {"builders this week."}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
