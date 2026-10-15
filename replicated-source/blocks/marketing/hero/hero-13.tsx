import { Rating } from "@/registry-neui/bases/base/neui/rating"
import {
  Avatar,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-background flex items-center justify-center lg:px-8 min-h-svh px-4 py-12 sm:px-6 w-full" aria-labelledby="hero-13-title">
        <div className="flex flex-col gap-6 items-center max-w-7xl mx-auto text-center w-full">
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 hover:bg-accent min-w-5 outline-none px-2 py-0.5 relative rounded-full text-foreground text-sm transition-colors" href="#">
            <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
            Agent Skills Available
            <svg className="lucide lucide-arrow-up-right size-3.5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </Badge>
          <h1 className="font-semibold md:leading-[1.05] md:text-5xl sm:text-4xl text-3xl text-foreground tracking-tight" id="hero-13-title">
            <span className="block">
              First-class shadcn
            </span>
            <span className="block">
              for AI agents
            </span>
          </h1>
          <div className="flex flex-col gap-6 items-center max-w-2xl w-full">
            <p className="leading-6 text-base text-muted-foreground">
              A curated shadcn registry with polished components, blocks, templates, MCP tools, and Agent Skills for building modern interfaces with developers and AI agents.
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-2 items-center justify-center">
              <AvatarGroup>
                <Avatar className="size-8" size="default">
                  <AvatarImage alt="shadcn" loading="lazy" decoding="async" src="https://github.com/shadcn.png?size=96"></AvatarImage>
                </Avatar>
                <Avatar className="size-8" size="default">
                  <AvatarImage alt="Evil Rabbit" loading="lazy" decoding="async" src="https://github.com/evilrabbit.png?size=96"></AvatarImage>
                </Avatar>
                <Avatar className="size-8" size="default">
                  <AvatarImage alt="Lee Robinson" loading="lazy" decoding="async" src="https://github.com/leerob.png?size=96"></AvatarImage>
                </Avatar>
                <Avatar className="size-8" size="default">
                  <AvatarImage alt="Guillermo Rauch" loading="lazy" decoding="async" src="https://github.com/rauchg.png?size=96"></AvatarImage>
                </Avatar>
                <Avatar className="size-8" size="default">
                  <AvatarImage alt="Maya Chen" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <Avatar className="size-8" size="default">
                  <AvatarImage alt="Marcus Lee" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                </Avatar>
                <Avatar className="size-8" size="default">
                  <AvatarImage alt="Delba de Oliveira" loading="lazy" decoding="async" src="https://github.com/delbaoliveira.png?size=96"></AvatarImage>
                </Avatar>
              </AvatarGroup>
              <div className="flex flex-col gap-1 items-start">
                <Rating className="[&_[data-slot=rating-star-filled]]:fill-warning [&_[data-slot=rating-star-filled]]:text-warning" aria-hidden="true">
                  <div className="flex items-center">
                    <div className="relative">
                      <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                        <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                        <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                        <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                        <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                      <div className="absolute inset-0 overflow-hidden" style={{width: "50%"}}>
                        <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </Rating>
                <div className="flex gap-1 items-center">
                  <p className="flex font-medium gap-1 items-center leading-4 text-foreground text-xs">
                    <span>
                      4.5
                    </span>
                    <span className="bg-muted-foreground rounded-full shrink-0 size-1" aria-hidden="true"></span>
                    <span>
                      13.9k Ratings
                    </span>
                  </p>
                  <a className="font-medium hover:text-foreground leading-4 text-muted-foreground text-xs transition-colors underline underline-offset-4" href="#">
                    27 reviews
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              <Button href="#" role="button" tabIndex="0">
                <svg className="size-4" viewBox="0 0 9.77777 14.6667" fill="none" aria-hidden="true">
                  <path d="M2.44444 14.6667C3.79378 14.6667 4.88889 13.5715 4.88889 12.2222V9.77776H2.44444C1.09511 9.77776 0 10.8729 0 12.2222C0 13.5715 1.09511 14.6667 2.44444 14.6667Z" fill="#0ACF83"></path>
                  <path d="M0 7.3333C0 5.98397 1.09511 4.88886 2.44444 4.88886H4.88889V9.77776H2.44444C1.09511 9.77776 0 8.68263 0 7.3333Z" fill="#A259FF"></path>
                  <path d="M0 2.44444C0 1.09511 1.09511 0 2.44444 0H4.88889V4.88886H2.44444C1.09511 4.88886 0 3.79378 0 2.44444Z" fill="#F24E1E"></path>
                  <path d="M4.88889 0H7.33332C8.68265 0 9.77777 1.09511 9.77777 2.44444C9.77777 3.79378 8.68265 4.88889 7.33332 4.88889L4.88889 4.88886V0Z" fill="#FF7262"></path>
                  <path d="M9.77777 7.3333C9.77777 8.68263 8.68265 9.77774 7.33332 9.77774C5.98398 9.77774 4.88887 8.68263 4.88887 7.3333C4.88887 5.98397 5.98398 4.88889 7.33332 4.88889C8.68265 4.88889 9.77777 5.98397 9.77777 7.3333Z" fill="#1ABCFE"></path>
                </svg>
                Preview in Figma
              </Button>
              <Button href="#" role="button" tabIndex="0">
                <svg className="dark:hidden size-4" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                  <path fill="#fff" d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                </svg>
                <svg className="dark:block hidden size-4" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                  <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                </svg>
                Start with Cursor
              </Button>
            </div>
            <a className="font-medium gap-1.5 hover:text-foreground inline-flex items-center mt-2 text-muted-foreground text-sm transition-colors" href="#">
              <svg className="lucide lucide-arrow-down size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                <path d="M12 5v14"></path>
                <path d="m19 12-7 7-7-7"></path>
              </svg>
              Scroll Down
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
