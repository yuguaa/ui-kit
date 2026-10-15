import { Rating } from "@/registry-neui/bases/base/neui/rating"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-background flex items-center lg:px-20 overflow-hidden px-4 py-12 sm:px-6 w-full" aria-labelledby="hero-9-title">
        <div className="flex flex-col gap-12 max-w-7xl mx-auto sm:gap-16 w-full">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4 items-start max-w-xl">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 hover:bg-accent min-w-6 outline-none px-2.5 py-0.75 relative rounded-full text-sm transition-colors" href="#">
                <span className="bg-success rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
                {"Browse NeUI Blocks"}
                <svg className="lucide lucide-external-link size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </Badge>
              <h1 className="font-semibold leading-tight sm:text-4xl text-3xl text-foreground tracking-tight" id="hero-9-title">
                {"The complete shadcn registry for building modern"}
                <span className="bg-amber-300 box-decoration-clone pb-1 px-1.5 rounded-sm text-amber-950">
                  {"Next.js apps"}
                </span>
                <span className="sm:block">
                  {"with AI agents"}
                </span>
              </h1>
              <p className="leading-6 text-base text-muted-foreground">
                {"Build faster with production-ready blocks, MCP support, and a curated shadcn registry."}
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:max-w-sm w-full">
              <div className="flex flex-col gap-1.5">
                <span aria-hidden="true">
                  <Rating className="[&_[data-slot=rating-star-filled]]:fill-yellow-500 [&_[data-slot=rating-star-filled]]:text-yellow-500">
                    <div className="flex items-center">
                      <div className="relative">
                        <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative">
                        <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative">
                        <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative">
                        <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <div className="absolute inset-0 overflow-hidden" style={{width: "100%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="relative">
                        <svg className="h-4 lucide lucide-star text-muted-foreground/30 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                        </svg>
                        <div className="absolute inset-0 overflow-hidden" style={{width: "50%"}}>
                          <svg className="fill-yellow-400 h-4 lucide lucide-star text-yellow-400 w-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Rating>
                </span>
                <div className="flex gap-2 items-center text-xs">
                  <span className="font-medium text-foreground">
                    {"4.5 · 13.9k Ratings"}
                  </span>
                  <a className="border-b border-muted-foreground/50 hover:text-foreground text-muted-foreground" href="#">
                    {"27 reviews"}
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <Button href="#" role="button" tabIndex={0}>
                  <svg className="dark:hidden size-4" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                    <path fill="#fff" d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                  </svg>
                  <svg className="dark:block hidden size-4" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                    <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                  </svg>
                  {"Open in Cursor"}
                </Button>
                <Button href="#" role="button" tabIndex={0}>
                  <svg className="h-4 w-auto" viewBox="0 0 9.77777 14.6667" fill="none" aria-hidden="true">
                    <path d="M2.44444 14.6667C3.79378 14.6667 4.88889 13.5715 4.88889 12.2222V9.77776H2.44444C1.09511 9.77776 0 10.8729 0 12.2222C0 13.5715 1.09511 14.6667 2.44444 14.6667Z" fill="#0ACF83"></path>
                    <path d="M0 7.3333C0 5.98397 1.09511 4.88886 2.44444 4.88886H4.88889V9.77776H2.44444C1.09511 9.77776 0 8.68263 0 7.3333Z" fill="#A259FF"></path>
                    <path d="M0 2.44444C0 1.09511 1.09511 0 2.44444 0H4.88889V4.88886H2.44444C1.09511 4.88886 0 3.79378 0 2.44444Z" fill="#F24E1E"></path>
                    <path d="M4.88889 0H7.33332C8.68265 0 9.77777 1.09511 9.77777 2.44444C9.77777 3.79378 8.68265 4.88889 7.33332 4.88889L4.88889 4.88886V0Z" fill="#FF7262"></path>
                    <path d="M9.77777 7.3333C9.77777 8.68263 8.68265 9.77774 7.33332 9.77774C5.98398 9.77774 4.88887 8.68263 4.88887 7.3333C4.88887 5.98397 5.98398 4.88889 7.33332 4.88889C8.68265 4.88889 9.77777 5.98397 9.77777 7.3333Z" fill="#1ABCFE"></path>
                  </svg>
                  {"View in Figma"}
                </Button>
              </div>
            </div>
          </div>
          <Card className="gap-0 overflow-hidden p-0 w-full" size="default">
            <style dangerouslySetInnerHTML={{ __html: "\n@keyframes hero9-grow {\n  0%, 54% { transform: scaleY(1) }\n  66% { transform: scaleY(0.3) }\n  100% { transform: scaleY(1) }\n}\n/* Opacity only. This rides on figures, and moving text a few pixels inside a\n   canvas that is itself scaled lands every frame on a fractional device pixel,\n   so the glyphs re-rasterise and shimmer. A dip reads as a refresh either way. */\n@keyframes hero9-rise {\n  0%, 60% { opacity: 1 }\n  72% { opacity: 0.35 }\n  100% { opacity: 1 }\n}\n@keyframes hero9-fill {\n  0%, 52% { transform: scaleX(1) }\n  64% { transform: scaleX(0.1) }\n  100% { transform: scaleX(1) }\n}\n@keyframes hero9-blink {\n  0%, 100% { opacity: 1 }\n  50% { opacity: 0.4 }\n}\n@keyframes hero9-draw {\n  0%, 50% { stroke-dashoffset: 0 }\n  62% { stroke-dashoffset: 1200 }\n  100% { stroke-dashoffset: 0 }\n}\n/* Activating a tab mounts its panel fresh, so this replays on every switch,\n   which is what gives the self-advancing bar something to land on. */\n@keyframes hero9-enter {\n  from { opacity: 0; transform: translateY(8px) }\n  to { opacity: 1; transform: translateY(0) }\n}\n/* No scale here: it would resample every glyph in the card on the way in. The lift\n   stays, promoted to its own layer so the text is rasterised once and carried by\n   the compositor rather than repainted each frame. */\n.hero9-enter {\n  animation: hero9-enter 0.45s cubic-bezier(0.22, 1, 0.36, 1) var(--hero9-delay, 0s) both;\n  will-change: opacity, transform;\n}\n.hero9-grow,\n.hero9-rise,\n.hero9-draw,\n.hero9-track [data-slot=\"progress-indicator\"] {\n  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);\n  animation-iteration-count: infinite;\n  animation-fill-mode: both;\n  animation-delay: var(--hero9-delay, 0s);\n}\n.hero9-grow { animation-name: hero9-grow; animation-duration: 11.3s; }\n/* Promoted for the whole cycle. A fading text node switches from subpixel to\n   greyscale antialiasing while its opacity is off 1 and back again at the ends,\n   and that switch reads as the glyphs changing weight. Holding the layer holds\n   one rendering path. */\n.hero9-rise {\n  animation-name: hero9-rise;\n  animation-duration: 13.7s;\n  will-change: opacity;\n}\n.hero9-draw { animation-name: hero9-draw; animation-duration: 16.3s; }\n.hero9-track [data-slot=\"progress-indicator\"] {\n  transform-origin: left center;\n  animation-name: hero9-fill;\n  animation-duration: 10.1s;\n}\n.hero9-blink {\n  animation: hero9-blink 3.7s ease-in-out var(--hero9-delay, 0s) infinite;\n  will-change: opacity;\n}\n@media (prefers-reduced-motion: reduce) {\n  .hero9-grow,\n  .hero9-rise,\n  .hero9-draw,\n  .hero9-blink,\n  .hero9-enter,\n  .hero9-track [data-slot=\"progress-indicator\"] {\n    animation: none;\n  }\n}\n" }} />
            <Tabs className="gap-0 w-full" data-orientation="horizontal" activationDirection="right">
              <TabsList className="border-b gap-0 grid! grid-cols-3 h-auto! md:flex! md:flex-nowrap md:flex-row md:items-center md:justify-start md:overflow-x-auto p-0! rounded-none w-full" data-orientation="horizontal" activationDirection="right" role="tablist" variant="line">
                <TabsTrigger className="[&:nth-child(3n)]:border-r-0 [&:nth-child(n+4)]:border-b-0 after:hidden border-b border-border! border-l-0 border-r border-t-0 data-active:bg-muted! flex-none font-medium h-12! md:border-b-0! md:border-r! md:flex-1 md:last:border-r-0! md:min-w-28 md:px-3 px-2 rounded-none text-muted-foreground text-sm transition-colors w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_0_" extracted="1">
                  {"Overview"}
                </TabsTrigger>
                <TabsTrigger className="[&:nth-child(3n)]:border-r-0 [&:nth-child(n+4)]:border-b-0 after:hidden border-b border-border! border-l-0 border-r border-t-0 data-active:bg-muted! flex-none font-medium h-12! md:border-b-0! md:border-r! md:flex-1 md:last:border-r-0! md:min-w-28 md:px-3 px-2 rounded-none text-muted-foreground text-sm transition-colors w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_1_">
                  {"Components"}
                </TabsTrigger>
                <TabsTrigger className="[&:nth-child(3n)]:border-r-0 [&:nth-child(n+4)]:border-b-0 after:hidden border-b border-border! border-l-0 border-r border-t-0 data-active:bg-muted! flex-none font-medium h-12! md:border-b-0! md:border-r! md:flex-1 md:last:border-r-0! md:min-w-28 md:px-3 px-2 rounded-none text-muted-foreground text-sm transition-colors w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_2_">
                  {"Workflows"}
                </TabsTrigger>
                <TabsTrigger className="[&:nth-child(3n)]:border-r-0 [&:nth-child(n+4)]:border-b-0 after:hidden border-b border-border! border-l-0 border-r border-t-0 data-active:bg-muted! flex-none font-medium h-12! md:border-b-0! md:border-r! md:flex-1 md:last:border-r-0! md:min-w-28 md:px-3 px-2 rounded-none text-muted-foreground text-sm transition-colors w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_3_">
                  {"Integrations"}
                </TabsTrigger>
                <TabsTrigger className="[&:nth-child(3n)]:border-r-0 [&:nth-child(n+4)]:border-b-0 after:hidden border-b border-border! border-l-0 border-r border-t-0 data-active:bg-muted! flex-none font-medium h-12! md:border-b-0! md:border-r! md:flex-1 md:last:border-r-0! md:min-w-28 md:px-3 px-2 rounded-none text-muted-foreground text-sm transition-colors w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={-1} role="tab" aria-selected="false" id="base-ui-_r_4_">
                  {"Templates"}
                </TabsTrigger>
                <TabsTrigger className="[&:nth-child(3n)]:border-r-0 [&:nth-child(n+4)]:border-b-0 after:hidden border-b border-border! border-l-0 border-r border-t-0 data-active:bg-muted! flex-none font-medium h-12! md:border-b-0! md:border-r! md:flex-1 md:last:border-r-0! md:min-w-28 md:px-3 px-2 rounded-none text-muted-foreground text-sm transition-colors w-full" type="button" data-orientation="horizontal" aria-disabled="false" tabIndex={0} role="tab" aria-selected="true" id="base-ui-_r_5_" data-active="" compositeItemActive="" aria-controls="base-ui-_r_d_">
                  {"Docs"}
                </TabsTrigger>
              </TabsList>
              <div className="@container w-full">
                <div className="aspect-[16/10] overflow-clip relative">
                  <svg className="absolute inset-0 pointer-events-none size-full" aria-hidden="true" viewBox="0 0 1600 1000" preserveAspectRatio="none">
                    <defs>
                      <lineargradient id="_r_6_-field" x1={0} y1={0} x2={0} y2={1}>
                        <stop offset="0%" stopColor="#57b2c1"></stop>
                        <stop offset="38%" stopColor="#3ba4b8"></stop>
                        <stop offset="72%" stopColor="#209ab4"></stop>
                        <stop offset="100%" stopColor="#0b94b1"></stop>
                      </lineargradient>
                      <radialgradient id="_r_6_-haze" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(1560 -70) scale(1300 430)">
                        <stop offset="0%" stopColor="#e8f4f3" stopOpacity={0.96}></stop>
                        <stop offset="26%" stopColor="#c9e7e7" stopOpacity={0.74}></stop>
                        <stop offset="52%" stopColor="#a2d4d9" stopOpacity={0.42}></stop>
                        <stop offset="78%" stopColor="#74bdc6" stopOpacity={0.15}></stop>
                        <stop offset="100%" stopColor="#5fb4c0" stopOpacity={0}></stop>
                      </radialgradient>
                      <radialgradient id="_r_6_-lift" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(1600 1000) scale(780 440)">
                        <stop offset="0%" stopColor="#43aabb" stopOpacity={0.34}></stop>
                        <stop offset="45%" stopColor="#35a4b7" stopOpacity={0.17}></stop>
                        <stop offset="100%" stopColor="#2ba0b5" stopOpacity={0}></stop>
                      </radialgradient>
                    </defs>
                    <rect width={1600} height={1000} fill="url(#_r_6_-field)"></rect>
                    <rect width={1600} height={1000} fill="url(#_r_6_-lift)"></rect>
                    <rect width={1600} height={1000} fill="url(#_r_6_-haze)"></rect>
                    <g fill="#ffffff">
                      <circle cx={78} cy={96} r={3.2} fillOpacity={0.72}></circle>
                      <circle cx={196} cy={232} r={2.1} fillOpacity={0.5}></circle>
                      <circle cx={264} cy={58} r={2.6} fillOpacity={0.62}></circle>
                      <circle cx={342} cy={396} r={3.4} fillOpacity={0.55}></circle>
                      <circle cx={408} cy={158} r={1.9} fillOpacity={0.44}></circle>
                      <circle cx={470} cy={502} r={2.4} fillOpacity={0.4}></circle>
                      <circle cx={536} cy={292} r={3.1} fillOpacity={0.6}></circle>
                      <circle cx={604} cy={108} r={2.2} fillOpacity={0.66}></circle>
                      <circle cx={668} cy={612} r={2.8} fillOpacity={0.34}></circle>
                      <circle cx={726} cy={344} r={1.8} fillOpacity={0.46}></circle>
                      <circle cx={792} cy={196} r={3.3} fillOpacity={0.58}></circle>
                      <circle cx={858} cy={470} r={2.3} fillOpacity={0.38}></circle>
                      <circle cx={918} cy={82} r={2.7} fillOpacity={0.7}></circle>
                      <circle cx={984} cy={640} r={2} fillOpacity={0.3}></circle>
                      <circle cx={1042} cy={268} r={3} fillOpacity={0.52}></circle>
                      <circle cx={1108} cy={424} r={2.5} fillOpacity={0.36}></circle>
                      <circle cx={1174} cy={132} r={2.9} fillOpacity={0.64}></circle>
                      <circle cx={1236} cy={560} r={2.1} fillOpacity={0.28}></circle>
                      <circle cx={1302} cy={316} r={3.2} fillOpacity={0.46}></circle>
                      <circle cx={1368} cy={188} r={2.4} fillOpacity={0.54}></circle>
                      <circle cx={1436} cy={460} r={2.6} fillOpacity={0.32}></circle>
                      <circle cx={1502} cy={244} r={2} fillOpacity={0.42}></circle>
                      <circle cx={1558} cy={118} r={3.1} fillOpacity={0.5}></circle>
                      <circle cx={142} cy={548} r={2.5} fillOpacity={0.34}></circle>
                      <circle cx={300} cy={704} r={2.2} fillOpacity={0.24}></circle>
                      <circle cx={452} cy={792} r={2.8} fillOpacity={0.2}></circle>
                      <circle cx={618} cy={858} r={2} fillOpacity={0.18}></circle>
                      <circle cx={812} cy={748} r={2.6} fillOpacity={0.22}></circle>
                      <circle cx={1006} cy={890} r={2.3} fillOpacity={0.16}></circle>
                      <circle cx={1198} cy={806} r={2.9} fillOpacity={0.2}></circle>
                      <circle cx={1390} cy={918} r={2.1} fillOpacity={0.15}></circle>
                      <circle cx={1544} cy={682} r={2.7} fillOpacity={0.24}></circle>
                      <circle cx={46} cy={340} r={2.3} fillOpacity={0.5}></circle>
                      <circle cx={232} cy={428} r={1.9} fillOpacity={0.4}></circle>
                      <circle cx={380} cy={246} r={2.7} fillOpacity={0.56}></circle>
                      <circle cx={556} cy={690} r={2.2} fillOpacity={0.26}></circle>
                      <circle cx={700} cy={486} r={3} fillOpacity={0.38}></circle>
                      <circle cx={880} cy={224} r={2.4} fillOpacity={0.6}></circle>
                      <circle cx={1064} cy={736} r={2.6} fillOpacity={0.22}></circle>
                      <circle cx={1258} cy={68} r={2.8} fillOpacity={0.68}></circle>
                      <circle cx={1452} cy={620} r={2.2} fillOpacity={0.26}></circle>
                      <circle cx={1590} cy={386} r={2.5} fillOpacity={0.36}></circle>
                    </g>
                  </svg>
                  <div className="-bottom-[4cqw] absolute bg-white/10 inset-x-[5cqw] ring-1 ring-inset ring-white/25 rounded-md top-[5cqw]" aria-hidden="true"></div>
                  <div className="absolute inset-0">
                    <div className="absolute h-[1060px] left-[6.25cqw] origin-top-left top-[6.25cqw] w-[1400px]" style={{transform: "scale(calc(100cqw / 1600px))"}}>
                      <Card className="[--card-spacing:--spacing(1.5)] bg-white border-0 dark:bg-neutral-900 dark:ring-white/10 dark:text-neutral-50 gap-0 overflow-hidden px-1.5 ring-1 ring-neutral-900/10 shadow-2xl size-full text-neutral-900" size="default">
                        <Card className="[--card-spacing:0px] bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-50 flex-1 gap-0 min-h-0 overflow-hidden relative ring-0 shadow-none text-neutral-900" size="default">
                          <div className="contents" aria-hidden="true">
                            <div className="border-b border-neutral-200 dark:border-neutral-800 flex gap-2 h-9 items-center px-2.5 shrink-0">
                              <IconTile className="bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 text-white" variant="solid" size="xs">
                                <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M9.33333 0.538463H4.66667C2.38672 0.538463 0.538463 2.38672 0.538463 4.66667V9.33333C0.538463 11.6133 2.38672 13.4615 4.66667 13.4615H9.33333C11.6133 13.4615 13.4615 11.6133 13.4615 9.33333V4.66667C13.4615 2.38672 11.6133 0.538463 9.33333 0.538463ZM4.66667 0C2.08934 0 0 2.08934 0 4.66667V9.33333C0 11.9107 2.08934 14 4.66667 14H9.33333C11.9107 14 14 11.9107 14 9.33333V4.66667C14 2.08934 11.9107 0 9.33333 0H4.66667Z" fill="currentColor" opacity={0.2}></path>
                                  <g transform="translate(3.5238 3.5)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 4.46307V0.657716C0 0.294471 0.294471 0 0.657708 0C1.02097 0 1.31544 0.294471 1.31544 0.657716V4.46307C1.31544 5.13768 1.86229 5.68457 2.5369 5.68457H4.41613C5.09069 5.68457 5.63759 5.13768 5.63759 4.46307V2.60267C5.63759 2.23944 5.93205 1.94498 6.29531 1.94498C6.65854 1.94498 6.953 2.23944 6.953 2.60267V4.46307C6.953 5.8642 5.81721 6.99999 4.41613 6.99999H2.5369C1.13581 6.99999 0 5.8642 0 4.46307Z" fill="currentColor"></path>
                                  </g>
                                  <g transform="translate(9.1616 3.5)">
                                    <path d="M0.65772 1.31544C1.02097 1.31544 1.31544 1.02097 1.31544 0.65772C1.31544 0.294471 1.02097 0 0.65772 0C0.294471 0 0 0.294471 0 0.65772C0 1.02097 0.294471 1.31544 0.65772 1.31544Z" fill="currentColor"></path>
                                  </g>
                                </svg>
                              </IconTile>
                              <div className="contents">
                                <span className="flex font-medium gap-1.5 items-center text-sm">
                                  <span className="bg-violet-500 rounded-full shrink-0 size-2" aria-hidden="true"></span>
                                  {"NeUI Pro"}
                                  <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </span>
                              </div>
                              <div className="contents">
                                <span className="dark:text-neutral-600 text-neutral-300" aria-hidden="true">
                                  {"/"}
                                </span>
                                <span className="flex font-medium gap-1.5 items-center text-sm">
                                  {"Registry"}
                                  <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </span>
                              </div>
                              <div className="contents">
                                <span className="dark:text-neutral-600 text-neutral-300" aria-hidden="true">
                                  {"/"}
                                </span>
                                <span className="flex font-medium gap-1.5 items-center text-sm">
                                  {"Live"}
                                  <svg className="dark:text-neutral-500 lucide lucide-chevrons-up-down size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronsUpDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretUpDownIcon" remixicon="RiExpandUpDownLine" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </span>
                              </div>
                              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-6 min-w-5 ms-auto outline-none px-2 py-0.5 relative rounded-full text-neutral-600 text-xs transition-shadow">
                                <svg className="lucide lucide-activity size-3" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ActivityIcon" tabler="IconActivity" hugeicons="Pulse01Icon" phosphor="ActivityIcon" remixicon="RiPulseLine" aria-hidden="true">
                                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                                </svg>
                                {"System"}
                                <span className="dark:text-emerald-400 text-emerald-600">
                                  {"Normal"}
                                </span>
                              </Badge>
                            </div>
                          </div>
                          <div className="flex flex-1 min-h-0">
                            <div className="contents" aria-hidden="true">
                              <div className="bg-neutral-50 border-neutral-200 border-r dark:bg-neutral-950 dark:border-neutral-800 flex flex-col gap-1.5 p-2 pb-[168px] shrink-0 w-56">
                                <Item className="bg-white border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-500 gap-2 px-2 py-1.5 text-neutral-400 text-sm" variant="outline" size="xs">
                                  <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                                    <path d="m21 21-4.34-4.34"></path>
                                    <circle cx={11} cy={11} r={8}></circle>
                                  </svg>
                                  {"Search..."}
                                  <Kbd className="bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-500 h-5 min-w-5 ms-auto px-1.5 text-neutral-400 text-xs">
                                    {"⌘K"}
                                  </Kbd>
                                </Item>
                                <div className="dark:text-neutral-500 font-medium pt-1.5 px-2 text-neutral-400 text-xs">
                                  {"Platform"}
                                </div>
                                <div className="flex flex-col gap-0.5">
                                  <div className="contents">
                                    <Item className="bg-neutral-100 border-transparent dark:bg-neutral-800 dark:text-neutral-50 font-medium gap-2 px-2 py-1.5 text-neutral-900 text-sm" variant="default" size="xs">
                                      <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                                        <rect width={7} height={9} x={3} y={3} rx={1}></rect>
                                        <rect width={7} height={5} x={14} y={3} rx={1}></rect>
                                        <rect width={7} height={9} x={14} y={12} rx={1}></rect>
                                        <rect width={7} height={5} x={3} y={16} rx={1}></rect>
                                      </svg>
                                      {"Overview"}
                                    </Item>
                                  </div>
                                  <div className="contents">
                                    <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                      <svg className="lucide lucide-layers size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayersIcon" tabler="IconStack2" hugeicons="Layers01Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                      {"Blocks"}
                                      <svg className="dark:text-neutral-500 lucide lucide-chevron-down ms-auto size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                        <path d="m6 9 6 6 6-6"></path>
                                      </svg>
                                    </Item>
                                    <div className="border-l border-neutral-200 dark:border-neutral-800 flex flex-col gap-0.5 ms-4 ps-1">
                                      <Item className="border-transparent dark:text-neutral-400 px-2 py-1.5 text-neutral-500 text-sm" variant="default" size="xs">
                                        {"Marketing"}
                                      </Item>
                                      <Item className="bg-neutral-100 border-transparent dark:bg-neutral-800 dark:text-neutral-50 font-medium px-2 py-1.5 text-neutral-900 text-sm" variant="default" size="xs">
                                        {"Application"}
                                      </Item>
                                      <Item className="border-transparent dark:text-neutral-400 px-2 py-1.5 text-neutral-500 text-sm" variant="default" size="xs">
                                        {"Ecommerce"}
                                      </Item>
                                    </div>
                                  </div>
                                  <div className="contents">
                                    <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                      <svg className="lucide lucide-puzzle size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PuzzleIcon" tabler="IconPuzzle" hugeicons="PuzzleIcon" phosphor="PuzzlePieceIcon" remixicon="RiPuzzleLine" aria-hidden="true">
                                        <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                                      </svg>
                                      {"Components"}
                                      <svg className="dark:text-neutral-500 lucide lucide-chevron-right ms-auto size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Item>
                                  </div>
                                  <div className="contents">
                                    <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                      <svg className="lucide lucide-layout-template size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LayoutTemplateIcon" tabler="IconTemplate" hugeicons="DashboardSquare01Icon" phosphor="SquaresFourIcon" remixicon="RiLayout2Line" aria-hidden="true">
                                        <rect width={18} height={7} x={3} y={3} rx={1}></rect>
                                        <rect width={9} height={7} x={3} y={14} rx={1}></rect>
                                        <rect width={5} height={7} x={16} y={14} rx={1}></rect>
                                      </svg>
                                      {"Templates"}
                                      <svg className="dark:text-neutral-500 lucide lucide-chevron-right ms-auto size-3.5 text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                        <path d="m9 18 6-6-6-6"></path>
                                      </svg>
                                    </Item>
                                  </div>
                                  <div className="contents">
                                    <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                      <svg className="lucide lucide-chart-column size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                                        <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                        <path d="M18 17V9"></path>
                                        <path d="M13 17V5"></path>
                                        <path d="M8 17v-3"></path>
                                      </svg>
                                      {"Analytics"}
                                    </Item>
                                  </div>
                                  <div className="contents">
                                    <Item className="border-transparent dark:text-neutral-400 gap-2 px-2 py-1.5 text-neutral-600 text-sm" variant="default" size="xs">
                                      <svg className="lucide lucide-settings size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                                        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                        <circle cx={12} cy={12} r={3}></circle>
                                      </svg>
                                      {"Settings"}
                                    </Item>
                                  </div>
                                </div>
                                <Card className="[--card-spacing:--spacing(2.5)] bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:ring-white/10 dark:text-neutral-50 gap-2 mt-auto ring-0 ring-neutral-900/8 shadow-sm text-neutral-900" size="sm">
                                  <CardContent className="flex flex-col gap-2">
                                    <span className="font-semibold text-sm">
                                      {"Multi-theme support is here"}
                                    </span>
                                    <span className="dark:text-neutral-400 leading-5 text-neutral-500 text-sm">
                                      {"Switch between Vega, Nova, Maia, Lyra, and Mira themes."}
                                    </span>
                                    <span className="bg-[radial-gradient(120%_90%_at_12%_18%,var(--color-orange-400)_0%,transparent_46%),radial-gradient(120%_120%_at_88%_8%,var(--color-fuchsia-500)_0%,transparent_55%),linear-gradient(160deg,var(--color-violet-600)_0%,var(--color-sky-400)_58%,var(--color-cyan-400)_100%)] block h-20 overflow-hidden relative w-full" aria-hidden="true">
                                      <svg className="absolute inset-0 size-full" viewBox="0 0 96 34" preserveAspectRatio="none" aria-hidden="true">
                                        <defs>
                                          <lineargradient id="hero9-wave" x1={0} y1={0} x2={0} y2={1}>
                                            <stop offset="0%" stopColor="white" stopOpacity={0.5}></stop>
                                            <stop offset="100%" stopColor="white" stopOpacity={0.05}></stop>
                                          </lineargradient>
                                        </defs>
                                        <path d="M0 26 C 18 26 26 12 48 12 C 70 12 78 22 96 22 L96 34 L0 34 Z" fill="url(#hero9-wave)"></path>
                                      </svg>
                                    </span>
                                    <div className="dark:text-neutral-400 flex items-center justify-between text-neutral-500 text-xs">
                                      <span>
                                        {"Read more"}
                                      </span>
                                      <span>
                                        {"Dismiss"}
                                      </span>
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>
                            </div>
                            <div className="bg-neutral-50 dark:bg-neutral-950 flex flex-1 flex-col min-w-0">
                              <TabsContent className="m-0 min-h-0" data-orientation="horizontal" activationDirection="right" aria-labelledby="base-ui-_r_5_" id="base-ui-_r_d_" role="tabpanel" tabIndex={-1} index="0" aria-label="Docs preview">
                                <div className="dark:text-neutral-50 flex flex-col gap-4 h-full min-h-0 overflow-clip p-4 relative text-neutral-900" aria-hidden="true">
                                  <div className="flex flex-1 flex-col gap-3 hero9-enter items-center justify-center text-center">
                                    <IconTile className="dark:text-neutral-500 hero9-blink text-neutral-400" variant="soft" size="lg">
                                      <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                                        <path d="M12 7v14"></path>
                                        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                                      </svg>
                                    </IconTile>
                                    <div className="flex flex-col gap-1">
                                      <span className="font-semibold text-base">
                                        {"Documentation"}
                                      </span>
                                      <span className="dark:text-neutral-400 text-neutral-500 text-sm">
                                        {"Coming soon"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </TabsContent>
                            </div>
                          </div>
                        </Card>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </Card>
        </div>
      </section>
    </div>
  )
}
