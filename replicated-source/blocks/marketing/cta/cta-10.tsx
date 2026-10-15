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
      <section className="@container bg-background text-foreground w-full" aria-labelledby="cta-10-title">
        <div className="flex flex-col gap-6 items-center max-w-7xl mx-auto px-[max(1rem,5.56cqw)] py-12 w-full">
          <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-sm transition-shadow">
            <svg className="size-3.5" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path opacity="0.2" fillRule="evenodd" clipRule="evenodd" d="M9.33333 0.538463H4.66667C2.38672 0.538463 0.538463 2.38672 0.538463 4.66667V9.33333C0.538463 11.6133 2.38672 13.4615 4.66667 13.4615H9.33333C11.6133 13.4615 13.4615 11.6133 13.4615 9.33333V4.66667C13.4615 2.38672 11.6133 0.538463 9.33333 0.538463ZM4.66667 0C2.08934 0 0 2.08934 0 4.66667V9.33333C0 11.9107 2.08934 14 4.66667 14H9.33333C11.9107 14 14 11.9107 14 9.33333V4.66667C14 2.08934 11.9107 0 9.33333 0H4.66667Z" fill="currentColor"></path>
              <path transform="translate(3.5238 3.5)" fillRule="evenodd" clipRule="evenodd" d="M0 4.46307V0.657716C0 0.294471 0.294471 0 0.657708 0C1.02097 0 1.31544 0.294471 1.31544 0.657716V4.46307C1.31544 5.13768 1.86229 5.68457 2.5369 5.68457H4.41613C5.09069 5.68457 5.63759 5.13768 5.63759 4.46307V2.60267C5.63759 2.23944 5.93205 1.94498 6.29531 1.94498C6.65854 1.94498 6.953 2.23944 6.953 2.60267V4.46307C6.953 5.8642 5.81721 6.99999 4.41613 6.99999H2.5369C1.13581 6.99999 0 5.8642 0 4.46307Z" fill="currentColor"></path>
              <circle cx="9.81932" cy="4.15772" r="0.65772" fill="currentColor"></circle>
            </svg>
            {"Ready to Build?"}
          </Badge>
          <h2 className="@xl:text-4xl font-semibold leading-10 text-3xl text-balance text-center" id="cta-10-title">
            {"Start Building Faster"}
          </h2>
          <div className="flex flex-col gap-6 items-center max-w-[40rem] w-full">
            <p className="leading-5 text-center text-muted-foreground text-sm">
              {"Everything you need to build polished interfaces with NeUI, from reusable components and templates to MCP tools and Agent Skills for AI-powered workflows."}
            </p>
            <AvatarGroup role="group" aria-label="Teams building with NeUI">
              <Avatar className="size-8" size="default">
                <AvatarImage alt="shadcn" loading="lazy" decoding="async" src="https://github.com/shadcn.png?size=96"></AvatarImage>
              </Avatar>
              <Avatar className="size-8" size="default">
                <AvatarImage alt="Evil Rabbit" loading="lazy" decoding="async" src="https://github.com/evilrabbit.png?size=96"></AvatarImage>
              </Avatar>
              <Avatar className="size-8" size="default">
                <AvatarImage alt="Mira Stone" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="size-8" size="default">
                <AvatarImage alt="Nora Vale" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="size-8" size="default">
                <AvatarImage alt="Theo Park" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="size-8" size="default">
                <AvatarImage alt="Sana Qureshi" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="size-8" size="default">
                <AvatarImage alt="Alex Johnson" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="size-8" size="default">
                <AvatarImage alt="Michael Rodriguez" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
              <Avatar className="size-8" size="default">
                <AvatarImage alt="Emma Wilson" loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=96&h=96&dpr=2&q=80"></AvatarImage>
              </Avatar>
            </AvatarGroup>
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
              {"Preview in Figma"}
            </Button>
            <Button href="#" role="button" tabIndex="0">
              <svg className="fill-current size-4" aria-hidden="true" focusable="false" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
              </svg>
              {"Start with Cursor"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
