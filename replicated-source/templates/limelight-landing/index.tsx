import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Input } from "@/registry/bases/base/ui/input"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Sheet,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <div hidden></div>
    <a className="focus:bg-background focus:fixed focus:left-4 focus:not-sr-only focus:outline-none focus:px-4 focus:py-2 focus:ring-2 focus:ring-ring focus:rounded-full focus:text-sm focus:top-20 focus:z-50 sr-only" href="#main-content">
      {"Skip to content"}
    </a>
    <header className="fixed inset-x-0 pointer-events-none top-0 z-40">
      <div className="shell">
        <div className="duration-300 ease-out flex gap-4 items-center justify-between max-w-full motion-reduce:transition-none mt-0 mx-auto py-5 relative transition-[max-width,margin-top,padding]">
          <span className="absolute backdrop-blur-xl bg-background/85 border border-border dark:bg-background/75 dark:shadow-none duration-300 ease-out inset-0 motion-reduce:transition-none opacity-0 pointer-events-none rounded-full shadow-lift transition-opacity" aria-hidden="true"></span>
          <span className="absolute bg-linear-to-r dark:block duration-300 from-transparent h-px hidden inset-x-12 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent top-0 transition-opacity via-brand/70" aria-hidden="true"></span>
          <a className="focus-visible:ring-3 focus-visible:ring-ring/30 outline-none pointer-events-auto relative rounded-md shrink-0" href="#top" aria-label="Limelight home">
            <span className="gap-2 inline-flex items-center">
              <svg className="shrink-0 size-5 sm:size-6 text-brand-ink" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 2.5h4l5.5 15.5h-15L10 2.5z"></path>
                <ellipse cx="12" cy="20.25" rx="10" ry="2.25" opacity="0.4"></ellipse>
              </svg>
              <span className="font-bold sm:text-xl text-foreground text-lg tracking-tight">
                {"Limelight"}
              </span>
            </span>
          </a>
          <nav className="-translate-x-1/2 absolute hidden items-center left-1/2 lg:flex pointer-events-auto w-max whitespace-nowrap" aria-label="Main">
            <a className="focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group outline-none overflow-hidden px-3.5 py-2 relative rounded-md text-foreground text-sm transition-colors" href="#top" aria-current="true">
              <span className="-translate-x-1/2 absolute bg-brand dark:block duration-200 ease-out h-px hidden left-1/2 motion-reduce:transition-none opacity-100 pointer-events-none rounded-full top-0 transition-opacity w-7" aria-hidden="true"></span>
              <span className="[clip-path:polygon(38%_0,62%_0,100%_100%,0_100%)] absolute bg-linear-to-b bottom-0 dark:block duration-200 ease-out from-brand/25 hidden inset-x-0 motion-reduce:transition-none opacity-100 pointer-events-none to-transparent top-0 transition-opacity" aria-hidden="true"></span>
              <span className="absolute bg-brand-ink bottom-1 dark:hidden duration-200 ease-out h-0.5 inset-x-3 motion-reduce:transition-none opacity-100 pointer-events-none rounded-full transition-opacity" aria-hidden="true"></span>
              {"Home"}
            </a>
            <a className="focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group hover:text-foreground outline-none overflow-hidden px-3.5 py-2 relative rounded-md text-muted-foreground text-sm transition-colors" href="#how-it-works">
              <span className="-translate-x-1/2 absolute bg-brand dark:block duration-200 ease-out group-hover:opacity-50 h-px hidden left-1/2 motion-reduce:transition-none opacity-0 pointer-events-none rounded-full top-0 transition-opacity w-7" aria-hidden="true"></span>
              <span className="[clip-path:polygon(38%_0,62%_0,100%_100%,0_100%)] absolute bg-linear-to-b bottom-0 dark:block duration-200 ease-out from-brand/25 group-hover:opacity-40 hidden inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent top-0 transition-opacity" aria-hidden="true"></span>
              <span className="absolute bg-brand-ink bottom-1 dark:hidden duration-200 ease-out group-hover:opacity-40 h-0.5 inset-x-3 motion-reduce:transition-none opacity-0 pointer-events-none rounded-full transition-opacity" aria-hidden="true"></span>
              {"How it works"}
            </a>
            <a className="focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group hover:text-foreground outline-none overflow-hidden px-3.5 py-2 relative rounded-md text-muted-foreground text-sm transition-colors" href="#features">
              <span className="-translate-x-1/2 absolute bg-brand dark:block duration-200 ease-out group-hover:opacity-50 h-px hidden left-1/2 motion-reduce:transition-none opacity-0 pointer-events-none rounded-full top-0 transition-opacity w-7" aria-hidden="true"></span>
              <span className="[clip-path:polygon(38%_0,62%_0,100%_100%,0_100%)] absolute bg-linear-to-b bottom-0 dark:block duration-200 ease-out from-brand/25 group-hover:opacity-40 hidden inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent top-0 transition-opacity" aria-hidden="true"></span>
              <span className="absolute bg-brand-ink bottom-1 dark:hidden duration-200 ease-out group-hover:opacity-40 h-0.5 inset-x-3 motion-reduce:transition-none opacity-0 pointer-events-none rounded-full transition-opacity" aria-hidden="true"></span>
              {"Features"}
            </a>
            <a className="focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group hover:text-foreground outline-none overflow-hidden px-3.5 py-2 relative rounded-md text-muted-foreground text-sm transition-colors" href="#pricing">
              <span className="-translate-x-1/2 absolute bg-brand dark:block duration-200 ease-out group-hover:opacity-50 h-px hidden left-1/2 motion-reduce:transition-none opacity-0 pointer-events-none rounded-full top-0 transition-opacity w-7" aria-hidden="true"></span>
              <span className="[clip-path:polygon(38%_0,62%_0,100%_100%,0_100%)] absolute bg-linear-to-b bottom-0 dark:block duration-200 ease-out from-brand/25 group-hover:opacity-40 hidden inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent top-0 transition-opacity" aria-hidden="true"></span>
              <span className="absolute bg-brand-ink bottom-1 dark:hidden duration-200 ease-out group-hover:opacity-40 h-0.5 inset-x-3 motion-reduce:transition-none opacity-0 pointer-events-none rounded-full transition-opacity" aria-hidden="true"></span>
              {"Pricing"}
            </a>
            <a className="focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group hover:text-foreground outline-none overflow-hidden px-3.5 py-2 relative rounded-md text-muted-foreground text-sm transition-colors" href="#faq">
              <span className="-translate-x-1/2 absolute bg-brand dark:block duration-200 ease-out group-hover:opacity-50 h-px hidden left-1/2 motion-reduce:transition-none opacity-0 pointer-events-none rounded-full top-0 transition-opacity w-7" aria-hidden="true"></span>
              <span className="[clip-path:polygon(38%_0,62%_0,100%_100%,0_100%)] absolute bg-linear-to-b bottom-0 dark:block duration-200 ease-out from-brand/25 group-hover:opacity-40 hidden inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent top-0 transition-opacity" aria-hidden="true"></span>
              <span className="absolute bg-brand-ink bottom-1 dark:hidden duration-200 ease-out group-hover:opacity-40 h-0.5 inset-x-3 motion-reduce:transition-none opacity-0 pointer-events-none rounded-full transition-opacity" aria-hidden="true"></span>
              {"FAQ"}
            </a>
            <a className="focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group hover:text-foreground outline-none overflow-hidden px-3.5 py-2 relative rounded-md text-muted-foreground text-sm transition-colors" href="#contact">
              <span className="-translate-x-1/2 absolute bg-brand dark:block duration-200 ease-out group-hover:opacity-50 h-px hidden left-1/2 motion-reduce:transition-none opacity-0 pointer-events-none rounded-full top-0 transition-opacity w-7" aria-hidden="true"></span>
              <span className="[clip-path:polygon(38%_0,62%_0,100%_100%,0_100%)] absolute bg-linear-to-b bottom-0 dark:block duration-200 ease-out from-brand/25 group-hover:opacity-40 hidden inset-x-0 motion-reduce:transition-none opacity-0 pointer-events-none to-transparent top-0 transition-opacity" aria-hidden="true"></span>
              <span className="absolute bg-brand-ink bottom-1 dark:hidden duration-200 ease-out group-hover:opacity-40 h-0.5 inset-x-3 motion-reduce:transition-none opacity-0 pointer-events-none rounded-full transition-opacity" aria-hidden="true"></span>
              {"Contact"}
            </a>
          </nav>
          <div className="flex gap-1.5 items-center pointer-events-auto relative shrink-0">
            <Tooltip>
            <TooltipTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center outline-none rounded-4xl select-none shrink-0 size-9 text-muted-foreground text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Toggle theme" id="base-ui-_R_1lllflb_" baseUiTooltipTrigger="">
              <svg className="dark:hidden lucide lucide-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
              </svg>
              <svg className="dark:block hidden lucide lucide-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <div className="hidden lg:block lg:ms-1">
              <Button className="[&_svg:not([class*='size-'])]:size-4 active:bg-brand-active active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-brand bg-clip-padding border border-transparent brand-weave dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:shadow-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 h-9 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-brand-hover press px-4 rounded-full shadow-lift text-brand-foreground text-sm" href="#pricing" role="button" tabIndex="0">
                {"Start free"}
              </Button>
            </div>
            <Sheet>
            <SheetTrigger className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-clip-padding border border-transparent dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:hover:bg-muted/50 disabled:opacity-50 disabled:pointer-events-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium group/button hover:bg-muted hover:text-foreground inline-flex items-center justify-center lg:hidden outline-none rounded-4xl select-none shrink-0 size-9 text-sm transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open menu" baseUiClickTrigger="" id="base-ui-_R_1nllflb_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-menu" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </SheetTrigger>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
    <main id="main-content">
      <section className="lg:pt-44 overflow-hidden pb-20 pt-32 relative seam" id="top">
        <div className="absolute h-[48rem] inset-x-0 motion-safe:animate-lamp pointer-events-none top-0" aria-hidden="true">
          <div className="blur-[80px] dark:hidden size-full">
            <div className="[background:linear-gradient(168deg,color-mix(in_oklab,var(--brand)_44%,transparent),color-mix(in_oklab,var(--brand)_12%,transparent)_48%,transparent_78%)] [clip-path:polygon(4%_0%,56%_0%,92%_100%,-10%_100%)] size-full"></div>
          </div>
          <div className="blur-2xl dark:block hidden size-full">
            <div className="[background:linear-gradient(to_bottom,color-mix(in_oklab,var(--brand)_22%,transparent),color-mix(in_oklab,var(--brand)_6%,transparent)_55%,transparent_92%)] [clip-path:polygon(30%_0%,46%_0%,86%_100%,0%_100%)] size-full"></div>
          </div>
        </div>
        <div className="relative shell z-10">
          <div className="font-semibold isolate max-w-[15ch] relative text-display">
            <h1 className="font-semibold text-display">
              <span className="block text-balance text-foreground/15">
                {"Run the whole"}
                {"show"}
                {"from one console."}
              </span>
            </h1>
            <span className="absolute block font-semibold inset-0 motion-safe:animate-sweep spot-wipe text-balance text-display" aria-hidden="true">
              {"Run the whole"}
              <span className="-me-[0.105em] -ms-[0.035em] [background-image:linear-gradient(to_bottom,transparent_calc(50%_-_0.43em),var(--brand)_calc(50%_-_0.43em),var(--brand)_calc(50%_+_0.37em),transparent_calc(50%_+_0.37em))] [box-decoration-break:clone] bg-no-repeat bg-position-[left_center] dark:bg-none dark:mx-0 dark:px-0 dark:text-brand motion-safe:animate-catch pe-[0.105em] ps-[0.035em]">
                {"show"}
              </span>
              {"from one console."}
            </span>
            <span className="-z-10 [background:radial-gradient(closest-side,color-mix(in_oklab,var(--brand)_30%,transparent),transparent)] [mix-blend-mode:plus-lighter] absolute dark:block hidden inset-y-[-45%] left-0 motion-safe:animate-follow pointer-events-none w-[34%]" aria-hidden="true"></span>
          </div>
          <div className="gap-10 grid lg:gap-8 lg:grid-cols-12 lg:items-center lg:mt-16 mt-12">
            <div className="lg:col-span-6 motion-safe:animate-rise" style={{animationDelay: "160ms"}}>
              <p className="max-w-[58ch] text-lede text-muted-foreground text-pretty">
                {"One console for the tools, the data, and the routine work between them. Typed end to end, automated on your cues."}
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 motion-safe:animate-rise" style={{animationDelay: "240ms"}}>
              <div className="flex flex-col gap-3 lg:justify-end sm:flex-row">
                <Button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:transition-transform active:bg-brand-active active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-brand bg-clip-padding border border-transparent brand-weave dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:shadow-none fine-pointer:[&_svg]:hover:translate-x-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 h-11 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-brand-hover press px-6 rounded-full shadow-lift text-base text-brand-foreground" href="#pricing" role="button" tabIndex="0">
                  {"Start free trial"}
                  <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:hover:bg-input/30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 h-11 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground press px-6 rounded-full text-base" href="#how-it-works" role="button" tabIndex="0">
                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="6" cy="19" r="3"></circle>
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                    <circle cx="18" cy="5" r="3"></circle>
                  </svg>
                  {"See how it works"}
                </Button>
              </div>
              <div className="flex gap-3 items-center lg:justify-end mt-6">
                <div className="-space-x-2 flex">
                  <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                    <AvatarImage className="rounded-full" alt="" src="/avatars/300-1.png"></AvatarImage>
                  </Avatar>
                  <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                    <AvatarImage className="rounded-full" alt="" src="/avatars/300-2.png"></AvatarImage>
                  </Avatar>
                  <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                    <AvatarImage className="rounded-full" alt="" src="/avatars/300-3.png"></AvatarImage>
                  </Avatar>
                  <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                    <AvatarImage className="rounded-full" alt="" src="/avatars/300-4.png"></AvatarImage>
                  </Avatar>
                  <Avatar className="after:rounded-full border-2 border-background data-[size=lg]:size-10 data-[size=sm]:size-6 rounded-full size-6" size="default">
                    <AvatarImage className="rounded-full" alt="" src="/avatars/300-5.png"></AvatarImage>
                  </Avatar>
                </div>
                <p className="text-muted-foreground text-sm">
                  <span className="font-medium text-foreground">
                    {"2,400+ teams"}
                  </span>
                  {"run production on Limelight"}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mt-28 motion-safe:animate-rise mt-20" style={{animationDelay: "340ms"}}>
            <figure className="bg-card border border-border dark:shadow-none overflow-hidden relative rounded-2xl shadow-lift">
              <span className="absolute bg-linear-to-r dark:block from-transparent h-px hidden inset-x-10 pointer-events-none to-transparent top-0 via-brand/70 z-10" aria-hidden="true"></span>
              <div className="relative">
                <div className="@container/lcframe w-full">
                  <div className="overflow-hidden relative w-full" data-lc-canvas="hero" style={{"--lc-tempo": "1"}}>
                    <div className="absolute lc-canvas left-0 origin-top-left top-0" role="img" aria-label="Limelight operations console: 4 headline metrics cycling through 3 periods, a 24 hour throughput curve peaking at 612 runs per hour, the next 5 runs on the clock, and 4 approvals waiting on the operator.">
                      <div className="@container/lc bg-card flex flex-col size-full text-foreground" aria-hidden="true">
                        <div className="bg-card border-b border-border flex gap-[calc(var(--lc-pad)*0.5)] h-[var(--lc-topbar)] items-center leading-snug px-[var(--lc-gap)] shrink-0 text-[length:var(--lc-label)]">
                          <span className="bg-brand flex items-center justify-center rounded-[var(--lc-radius)] shrink-0 text-brand-foreground" style={{width: "var(--lc-tile)", height: "var(--lc-tile)"}}>
                            <svg className="size-[calc(var(--lc-tile)*0.56)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M10 2.5h4l5.5 15.5h-15L10 2.5z"></path>
                              <ellipse cx="12" cy="20.25" rx="10" ry="2.25" opacity="0.4"></ellipse>
                            </svg>
                          </span>
                          <span className="@max-[700px]/lc:hidden flex gap-[calc(var(--lc-pad)*0.5)] items-center">
                            <span className="flex gap-[calc(var(--lc-pad)*0.25)] items-center text-muted-foreground whitespace-nowrap">
                              {"Limelight"}
                            </span>
                          </span>
                          <span className="@max-[700px]/lc:hidden flex gap-[calc(var(--lc-pad)*0.5)] items-center">
                            <span className="@max-[700px]/lc:hidden select-none text-muted-foreground/70">
                              {"/"}
                            </span>
                            <span className="flex gap-[calc(var(--lc-pad)*0.25)] items-center text-muted-foreground whitespace-nowrap">
                              {"Production"}
                            </span>
                          </span>
                          <span className="flex gap-[calc(var(--lc-pad)*0.5)] items-center">
                            <span className="@max-[700px]/lc:hidden select-none text-muted-foreground/70">
                              {"/"}
                            </span>
                            <span className="flex font-medium gap-[calc(var(--lc-pad)*0.25)] items-center text-foreground whitespace-nowrap">
                              {"Overview"}
                              <svg className="lucide lucide-chevrons-up-down size-[calc(var(--lc-icon)*0.82)] text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </span>
                          </span>
                          <span className="bg-muted border border-border font-medium gap-[calc(var(--lc-pad)*0.3)] inline-flex items-center leading-snug ms-auto px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-muted-foreground w-fit whitespace-nowrap">
                            <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                              <span className="bg-brand lc-blink relative rounded-full size-full"></span>
                            </span>
                            <span className="@max-[700px]/lc:hidden">
                              {"All systems"}
                            </span>
                            <span className="font-medium text-brand-ink">
                              {"Normal"}
                            </span>
                          </span>
                          <span className="flex items-center relative shrink-0 text-muted-foreground">
                            <svg className="lucide lucide-bell size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                            </svg>
                            <span className="-right-px -top-px absolute">
                              <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.3)]" aria-hidden="true">
                                <span className="bg-brand-accent relative rounded-full size-full"></span>
                              </span>
                            </span>
                          </span>
                          <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-[var(--lc-face)]" alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-6.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                        </div>
                        <div className="flex flex-1 min-h-0">
                          <div className="@max-[1300px]/lc:hidden bg-background border-border border-r flex flex-col gap-[calc(var(--lc-gap)*0.55)] p-[calc(var(--lc-gap)*0.6)] shrink-0 w-[var(--lc-rail)]">
                            <Item className="[a]:hover:bg-muted bg-card border border-border gap-[calc(var(--lc-pad)*0.4)] in-data-[slot=dropdown-menu-content]:p-0 leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.3)] rounded-[var(--lc-radius)] text-[length:var(--lc-label)] text-muted-foreground" variant="outline" size="xs">
                              <svg className="lucide lucide-search size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m21 21-4.34-4.34"></path>
                                <circle cx="11" cy="11" r="8"></circle>
                              </svg>
                              <span className="truncate">
                                {"Search runs, records, tools"}
                              </span>
                              <Kbd className="[&_svg:not([class*='size-'])]:size-3 bg-muted dark:in-data-[slot=tooltip-content]:bg-background/10 font-medium font-sans gap-1 h-[calc(var(--lc-icon)*1.35)] in-data-[slot=input-group]:bg-input in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background leading-snug min-w-[calc(var(--lc-icon)*1.35)] ms-auto px-[calc(var(--lc-pad)*0.2)] rounded-lg text-[length:var(--lc-micro)] text-muted-foreground w-fit">
                                {"⌘K"}
                              </Kbd>
                            </Item>
                            <span className="font-medium leading-snug pt-[calc(var(--lc-pad)*0.2)] px-[calc(var(--lc-pad)*0.4)] text-[length:var(--lc-micro)] text-muted-foreground">
                              {"Production"}
                            </span>
                            <div className="flex flex-col gap-[calc(var(--lc-pad)*0.1)]">
                              <Item className="[a]:hover:bg-muted bg-muted border border-transparent font-medium gap-[calc(var(--lc-pad)*0.4)] in-data-[slot=dropdown-menu-content]:p-0 leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.3)] rounded-[var(--lc-radius)] text-[length:var(--lc-label)] text-foreground" variant="default" size="xs">
                                <svg className="lucide lucide-gauge size-[var(--lc-icon)] text-brand-ink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m12 14 4-4"></path>
                                  <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                                </svg>
                                <span className="truncate">
                                  {"Overview"}
                                </span>
                              </Item>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-[calc(var(--lc-pad)*0.4)] in-data-[slot=dropdown-menu-content]:p-0 leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.3)] rounded-[var(--lc-radius)] text-[length:var(--lc-label)] text-muted-foreground" variant="default" size="xs">
                                <svg className="lucide lucide-plug-zap size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                  <path d="m2 22 3-3"></path>
                                  <path d="M7.5 13.5 10 11"></path>
                                  <path d="M10.5 16.5 13 14"></path>
                                  <path d="m18 3-4 4h6l-4 4"></path>
                                </svg>
                                <span className="truncate">
                                  {"Integrations"}
                                </span>
                              </Item>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-[calc(var(--lc-pad)*0.4)] in-data-[slot=dropdown-menu-content]:p-0 leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.3)] rounded-[var(--lc-radius)] text-[length:var(--lc-label)] text-muted-foreground" variant="default" size="xs">
                                <svg className="lucide lucide-database size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                  <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                  <path d="M3 12A9 3 0 0 0 21 12"></path>
                                </svg>
                                <span className="truncate">
                                  {"Ingest"}
                                </span>
                              </Item>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-[calc(var(--lc-pad)*0.4)] in-data-[slot=dropdown-menu-content]:p-0 leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.3)] rounded-[var(--lc-radius)] text-[length:var(--lc-label)] text-muted-foreground" variant="default" size="xs">
                                <svg className="lucide lucide-users size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                  <circle cx="9" cy="7" r="4"></circle>
                                </svg>
                                <span className="truncate">
                                  {"Workspace"}
                                </span>
                                <svg className="lucide lucide-chevron-right ms-auto size-[calc(var(--lc-icon)*0.82)] text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Item>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-[calc(var(--lc-pad)*0.4)] in-data-[slot=dropdown-menu-content]:p-0 leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.3)] rounded-[var(--lc-radius)] text-[length:var(--lc-label)] text-muted-foreground" variant="default" size="xs">
                                <svg className="lucide lucide-rocket size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                                  <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                                </svg>
                                <span className="truncate">
                                  {"Deploy"}
                                </span>
                              </Item>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-[calc(var(--lc-pad)*0.4)] in-data-[slot=dropdown-menu-content]:p-0 leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.3)] rounded-[var(--lc-radius)] text-[length:var(--lc-label)] text-muted-foreground" variant="default" size="xs">
                                <svg className="lucide lucide-workflow size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                                  <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                                  <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                                </svg>
                                <span className="truncate">
                                  {"Runs"}
                                </span>
                                <svg className="lucide lucide-chevron-right ms-auto size-[calc(var(--lc-icon)*0.82)] text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Item>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-[calc(var(--lc-pad)*0.4)] in-data-[slot=dropdown-menu-content]:p-0 leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.3)] rounded-[var(--lc-radius)] text-[length:var(--lc-label)] text-muted-foreground" variant="default" size="xs">
                                <svg className="lucide lucide-shield-check size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                  <path d="m9 12 2 2 4-4"></path>
                                </svg>
                                <span className="truncate">
                                  {"Audit"}
                                </span>
                              </Item>
                              <Item className="[a]:hover:bg-muted border border-transparent gap-[calc(var(--lc-pad)*0.4)] in-data-[slot=dropdown-menu-content]:p-0 leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.3)] rounded-[var(--lc-radius)] text-[length:var(--lc-label)] text-muted-foreground" variant="default" size="xs">
                                <svg className="lucide lucide-settings size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <span className="truncate">
                                  {"Settings"}
                                </span>
                                <svg className="lucide lucide-chevron-right ms-auto size-[calc(var(--lc-icon)*0.82)] text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="m9 18 6-6-6-6"></path>
                                </svg>
                              </Item>
                            </div>
                            <div className="bg-card border border-border flex flex-col min-h-0 mt-auto overflow-hidden rounded-[var(--lc-radius)]">
                              <div className="flex flex-col gap-[calc(var(--lc-pad)*0.35)] p-[calc(var(--lc-pad)*0.55)]">
                                <span className="font-medium leading-snug text-[length:var(--lc-label)] text-foreground">
                                  {"Run budget"}
                                </span>
                                <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground">
                                  {"Included runs for the March cycle. Resets on the 1st."}
                                </span>
                                <span className="bg-muted flex h-[var(--lc-bar)] mt-[calc(var(--lc-pad)*0.2)] overflow-hidden relative rounded-full w-full" aria-hidden="true">
                                  <span className="bg-brand h-full lc-sheen rounded-full text-brand-foreground" style={{width: "82%"}}></span>
                                </span>
                                <span className="flex items-center justify-between leading-snug text-[length:var(--lc-micro)] text-muted-foreground">
                                  <span>
                                    <span className="font-medium text-foreground">
                                      {"82"}
                                      {"%"}
                                    </span>
                                    {"used"}
                                  </span>
                                  <span>
                                    <span className="font-medium text-foreground">
                                      {"18"}
                                      {"%"}
                                    </span>
                                    {"left"}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center px-[calc(var(--lc-pad)*0.2)]">
                              <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-[var(--lc-face)]" alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-6.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                              <span className="flex flex-col min-w-0">
                                <span className="font-medium leading-snug text-[length:var(--lc-label)] truncate">
                                  {"Maya Lindqvist"}
                                </span>
                                <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                  {"Head of Ops"}
                                </span>
                              </span>
                              <svg className="lucide lucide-ellipsis ms-auto size-[var(--lc-icon)] text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </div>
                          </div>
                          <div className="@max-[1300px]/lc:flex bg-background border-border border-r flex-col gap-[calc(var(--lc-pad)*0.28)] hidden items-center py-[calc(var(--lc-gap)*0.6)] shrink-0 w-[var(--lc-rail)]">
                            <span className="flex items-center justify-center mb-[calc(var(--lc-pad)*0.2)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                              <svg className="lucide lucide-search size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m21 21-4.34-4.34"></path>
                                <circle cx="11" cy="11" r="8"></circle>
                              </svg>
                            </span>
                            <span className="bg-muted flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-brand-ink">
                              <svg className="lucide lucide-gauge size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m12 14 4-4"></path>
                                <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                              </svg>
                            </span>
                            <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                              <svg className="lucide lucide-plug-zap size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                <path d="m2 22 3-3"></path>
                                <path d="M7.5 13.5 10 11"></path>
                                <path d="M10.5 16.5 13 14"></path>
                                <path d="m18 3-4 4h6l-4 4"></path>
                              </svg>
                            </span>
                            <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                              <svg className="lucide lucide-database size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                <path d="M3 12A9 3 0 0 0 21 12"></path>
                              </svg>
                            </span>
                            <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                              <svg className="lucide lucide-users size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                              </svg>
                            </span>
                            <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                              <svg className="lucide lucide-rocket size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                                <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                              </svg>
                            </span>
                            <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                              <svg className="lucide lucide-workflow size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                                <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                                <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                              </svg>
                            </span>
                            <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                              <svg className="lucide lucide-shield-check size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                            </span>
                            <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                              <svg className="lucide lucide-settings size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                              </svg>
                            </span>
                            <img className="mt-auto object-cover ring-1 ring-border rounded-full shrink-0 size-[var(--lc-face)]" alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-6.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                          </div>
                          <div className="bg-background flex flex-1 flex-col gap-[var(--lc-gap)] min-w-0 overflow-clip p-[var(--lc-gap)]">
                            <div className="bg-card border border-border flex flex-col min-h-0 overflow-hidden rounded-[var(--lc-radius)] shrink-0">
                              <div className="border-b border-border flex gap-[calc(var(--lc-pad)*0.5)] items-start justify-between px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.72)] shrink-0">
                                <div className="flex flex-col gap-[calc(var(--lc-pad)*0.18)] min-w-0">
                                  <span className="font-semibold leading-tight text-[length:var(--lc-title)] text-foreground tracking-tight truncate">
                                    {"Operations overview"}
                                  </span>
                                  <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                    <span className="@max-[700px]/lc:hidden">
                                      {"Throughput, latency, and what is waiting on a person."}
                                    </span>
                                  </span>
                                </div>
                                <div className="shrink-0">
                                  <div className="bg-muted flex font-medium gap-[calc(var(--lc-pad)*0.1)] items-center leading-snug p-[calc(var(--lc-pad)*0.15)] rounded-full text-[length:var(--lc-micro)]">
                                    <span className="px-[calc(var(--lc-pad)*0.5)] py-[calc(var(--lc-pad)*0.2)] relative rounded-full text-muted-foreground">
                                      <span className="absolute bg-card border border-border inset-0 lc-cyc-0 rounded-full"></span>
                                      <span className="relative">
                                        {"Week"}
                                      </span>
                                    </span>
                                    <span className="px-[calc(var(--lc-pad)*0.5)] py-[calc(var(--lc-pad)*0.2)] relative rounded-full text-muted-foreground">
                                      <span className="absolute bg-card border border-border inset-0 lc-cyc-1 rounded-full"></span>
                                      <span className="relative">
                                        {"Month"}
                                      </span>
                                    </span>
                                    <span className="px-[calc(var(--lc-pad)*0.5)] py-[calc(var(--lc-pad)*0.2)] relative rounded-full text-muted-foreground">
                                      <span className="absolute bg-card border border-border inset-0 lc-cyc-2 rounded-full"></span>
                                      <span className="relative">
                                        {"Year"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-1 flex-row items-stretch min-h-0 p-[var(--lc-pad)]">
                                <div className="flex flex-1 items-stretch min-w-0">
                                  <div className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.35)] min-w-0">
                                    <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 text-[length:var(--lc-label)] text-muted-foreground">
                                      <svg className="lucide lucide-play shrink-0 size-[calc(var(--lc-icon)*0.9)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                                      </svg>
                                      <span className="truncate">
                                        {"Runs completed"}
                                      </span>
                                    </span>
                                    <div className="grid">
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-0 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"58,247"}
                                          </span>
                                          <span className="bg-brand-subtle font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink" aria-hidden="true">
                                            <svg className="lucide lucide-trending-up shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 7h6v6"></path>
                                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                            {"8.2%"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-brand-ink" d="M0 31 L22 28 L44 30 L66 24 L88 26 L110 19 L132 15" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-1 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"251,580"}
                                          </span>
                                          <span className="bg-brand-subtle font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink" aria-hidden="true">
                                            <svg className="lucide lucide-trending-up shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 7h6v6"></path>
                                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                            {"6.4%"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-brand-ink" d="M0 33 L26 29 L53 31 L79 23 L106 24 L132 13" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-2 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"2,852,270"}
                                          </span>
                                          <span className="bg-brand-subtle font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink" aria-hidden="true">
                                            <svg className="lucide lucide-trending-up shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 7h6v6"></path>
                                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                            {"31.7%"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-brand-ink" d="M0 34 L18 30 L36 32 L54 25 L72 27 L90 19 L108 22 L132 10" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-1 items-stretch min-w-0">
                                  <span className="bg-border h-[calc(var(--lc-pad)*4)] mx-[calc(var(--lc-pad)*0.7)] self-center shrink-0 w-px"></span>
                                  <div className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.35)] min-w-0">
                                    <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 text-[length:var(--lc-label)] text-muted-foreground">
                                      <svg className="lucide lucide-layers shrink-0 size-[calc(var(--lc-icon)*0.9)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                                      </svg>
                                      <span className="truncate">
                                        {"Active pipelines"}
                                      </span>
                                    </span>
                                    <div className="grid">
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-0 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"38"}
                                          </span>
                                          <span className="bg-brand-subtle font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink" aria-hidden="true">
                                            <svg className="lucide lucide-trending-up shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 7h6v6"></path>
                                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                            {"2"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-brand-ink" d="M0 30 L22 30 L44 26 L66 27 L88 22 L110 23 L132 18" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-1 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"41"}
                                          </span>
                                          <span className="bg-brand-subtle font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink" aria-hidden="true">
                                            <svg className="lucide lucide-trending-up shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 7h6v6"></path>
                                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                            {"5"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-brand-ink" d="M0 32 L26 27 L53 28 L79 21 L106 22 L132 16" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-2 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"44"}
                                          </span>
                                          <span className="bg-brand-subtle font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink" aria-hidden="true">
                                            <svg className="lucide lucide-trending-up shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 7h6v6"></path>
                                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                            {"12"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-brand-ink" d="M0 34 L18 31 L36 27 L54 28 L72 22 L90 19 L108 20 L132 12" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="@max-[1300px]/lc:hidden flex flex-1 items-stretch min-w-0">
                                  <span className="bg-border h-[calc(var(--lc-pad)*4)] mx-[calc(var(--lc-pad)*0.7)] self-center shrink-0 w-px"></span>
                                  <div className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.35)] min-w-0">
                                    <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 text-[length:var(--lc-label)] text-muted-foreground">
                                      <svg className="lucide lucide-timer shrink-0 size-[calc(var(--lc-icon)*0.9)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <line x1="10" x2="14" y1="2" y2="2"></line>
                                        <line x1="12" x2="15" y1="14" y2="11"></line>
                                        <circle cx="12" cy="14" r="8"></circle>
                                      </svg>
                                      <span className="truncate">
                                        {"Median latency"}
                                      </span>
                                    </span>
                                    <div className="grid">
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-0 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"214ms"}
                                          </span>
                                          <span className="bg-brand-subtle font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink" aria-hidden="true">
                                            <svg className="lucide lucide-trending-down shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 17h6v-6"></path>
                                              <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                            </svg>
                                            {"18ms"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-brand-ink" d="M0 14 L22 17 L44 15 L66 20 L88 18 L110 23 L132 22" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-1 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"221ms"}
                                          </span>
                                          <span className="bg-brand-subtle font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink" aria-hidden="true">
                                            <svg className="lucide lucide-trending-down shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 17h6v-6"></path>
                                              <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                            </svg>
                                            {"31ms"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-brand-ink" d="M0 12 L26 16 L53 15 L79 21 L106 20 L132 25" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-2 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"236ms"}
                                          </span>
                                          <span className="bg-brand-subtle font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink" aria-hidden="true">
                                            <svg className="lucide lucide-trending-down shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 17h6v-6"></path>
                                              <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                            </svg>
                                            {"96ms"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-brand-ink" d="M0 10 L18 14 L36 13 L54 19 L72 17 L90 23 L108 21 L132 27" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="@max-[1300px]/lc:hidden flex flex-1 items-stretch min-w-0">
                                  <span className="bg-border h-[calc(var(--lc-pad)*4)] mx-[calc(var(--lc-pad)*0.7)] self-center shrink-0 w-px"></span>
                                  <div className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.35)] min-w-0">
                                    <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 text-[length:var(--lc-label)] text-muted-foreground">
                                      <svg className="lucide lucide-circle-alert shrink-0 size-[calc(var(--lc-icon)*0.9)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" x2="12" y1="8" y2="12"></line>
                                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                                      </svg>
                                      <span className="truncate">
                                        {"Error rate"}
                                      </span>
                                    </span>
                                    <div className="grid">
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-0 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"0.14%"}
                                          </span>
                                          <span className="bg-brand-subtle font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink" aria-hidden="true">
                                            <svg className="lucide lucide-trending-down shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 17h6v-6"></path>
                                              <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                            </svg>
                                            {"0.03"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-brand-ink" d="M0 18 L22 22 L44 19 L66 24 L88 21 L110 26 L132 25" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-1 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"0.11%"}
                                          </span>
                                          <span className="bg-brand-subtle font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink" aria-hidden="true">
                                            <svg className="lucide lucide-trending-down shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 17h6v-6"></path>
                                              <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                                            </svg>
                                            {"0.06"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-brand-ink" d="M0 16 L26 21 L53 19 L79 25 L106 23 L132 28" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="col-start-1 flex flex-col gap-[calc(var(--lc-pad)*0.5)] lc-cyc-2 min-w-0 row-start-1">
                                        <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                          <span className="font-semibold leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate">
                                            {"0.19%"}
                                          </span>
                                          <span className="bg-destructive/10 dark:text-destructive font-medium gap-[calc(var(--lc-icon)*0.22)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.32)] py-[calc(var(--lc-pad)*0.1)] rounded-full shrink-0 text-[color-mix(in_oklab,var(--destructive)_76%,black)] text-[length:var(--lc-micro)]" aria-hidden="true">
                                            <svg className="lucide lucide-trending-up shrink-0 size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M16 7h6v6"></path>
                                              <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                                            </svg>
                                            {"0.02"}
                                          </span>
                                        </div>
                                        <div className="@max-[1300px]/lc:h-[calc(var(--lc-pad)*1.3)] h-[calc(var(--lc-pad)*2.2)] w-full">
                                          <svg className="overflow-visible size-full" viewBox="0 0 132 40" preserveAspectRatio="none" aria-hidden="true">
                                            <path className="stroke-destructive" d="M0 20 L18 17 L36 23 L54 19 L72 25 L90 21 L108 27 L132 16" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="bg-muted flex gap-[var(--lc-pad)] items-center justify-between leading-snug mt-auto px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.55)] shrink-0 text-[length:var(--lc-label)] text-muted-foreground">
                                <span className="flex gap-[calc(var(--lc-pad)*0.35)] items-center min-w-0">
                                  <svg className="lucide lucide-chart-line shrink-0 size-[calc(var(--lc-icon)*0.9)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                    <path d="m19 9-5 5-4-4-3 3"></path>
                                  </svg>
                                  <span className="grid">
                                    <span className="col-start-1 lc-cyc-0 row-start-1 truncate">
                                      {"Every delta compares with the previous"}
                                      {"week"}
                                      {"."}
                                    </span>
                                    <span className="col-start-1 lc-cyc-1 row-start-1 truncate">
                                      {"Every delta compares with the previous"}
                                      {"month"}
                                      {"."}
                                    </span>
                                    <span className="col-start-1 lc-cyc-2 row-start-1 truncate">
                                      {"Every delta compares with the previous"}
                                      {"year"}
                                      {"."}
                                    </span>
                                  </span>
                                </span>
                                <span className="@max-[700px]/lc:hidden flex font-medium gap-[calc(var(--lc-pad)*0.3)] items-center shrink-0 text-foreground">
                                  {"View"}
                                  {"runs"}
                                  <svg className="lucide lucide-arrow-right size-[calc(var(--lc-icon)*0.9)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="@max-[1300px]/lc:grid-cols-1 flex-1 gap-[var(--lc-gap)] grid grid-cols-[minmax(0,1fr)_336px_376px] min-h-0">
                              <div className="bg-card border border-border flex flex-col min-h-0 overflow-hidden rounded-[var(--lc-radius)]">
                                <div className="border-b border-border flex gap-[calc(var(--lc-pad)*0.5)] items-start justify-between px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.72)] shrink-0">
                                  <div className="flex flex-col gap-[calc(var(--lc-pad)*0.18)] min-w-0">
                                    <span className="font-semibold leading-tight text-[length:var(--lc-title)] text-foreground tracking-tight truncate">
                                      {"Throughput"}
                                    </span>
                                    <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                      {"Runs started per hour, last 24 hours"}
                                    </span>
                                  </div>
                                  <div className="shrink-0">
                                    <span className="bg-muted border border-border font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-muted-foreground w-fit whitespace-nowrap">
                                      {"runs/hr"}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.55)] min-h-0 p-[var(--lc-pad)]">
                                  <div className="gap-[var(--lc-pad)] grid grid-cols-3 shrink-0">
                                    <div className="flex flex-col gap-[calc(var(--lc-pad)*0.1)] min-w-0">
                                      <span className="font-semibold leading-tight tabular-nums text-[length:var(--lc-title)] text-foreground tracking-tight truncate">
                                        {"612"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                        {"Peak"}
                                      </span>
                                    </div>
                                    <div className="flex flex-col gap-[calc(var(--lc-pad)*0.1)] min-w-0">
                                      <span className="font-semibold leading-tight tabular-nums text-[length:var(--lc-title)] text-foreground tracking-tight truncate">
                                        {"347"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                        {"Mean"}
                                      </span>
                                    </div>
                                    <div className="flex flex-col gap-[calc(var(--lc-pad)*0.1)] min-w-0">
                                      <span className="font-semibold leading-tight tabular-nums text-[length:var(--lc-title)] text-foreground tracking-tight truncate">
                                        {"198"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                        {"Now"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex-1 min-h-0 relative w-full">
                                    <svg className="size-full" viewBox="0 0 560 210" preserveAspectRatio="none" aria-hidden="true">
                                      <defs>
                                        <lineargradient className="text-brand-ink" id="lc-overview-throughput-fill" x1="0" y1="0" x2="0" y2="1">
                                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"></stop>
                                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.02"></stop>
                                        </lineargradient>
                                      </defs>
                                      <path d="M0 143.6447963800905 C4.057971014492754 144.71631473102062 16.231884057971016 147.93086978381095 24.347826086956523 150.0739064856712 C32.46376811594203 152.21694318753143 40.57971014492754 154.8957390648567 48.69565217391305 156.50301659125188 C56.811594202898554 158.11029411764704 64.92753623188406 159.035696329814 73.04347826086956 159.71757164404224 C81.15942028985506 160.3994469582705 89.27536231884058 161.032616892911 97.3913043478261 160.5942684766214 C105.50724637681161 160.15592006033182 113.62318840579712 159.5227501256913 121.73913043478262 157.08748114630467 C129.85507246376812 154.65221216691805 137.97101449275362 151.1454248366013 146.08695652173913 145.98265460030166 C154.20289855072463 140.819884364002 162.31884057971016 134.0985419808949 170.43478260869566 126.11085972850678 C178.55072463768116 118.12317747611866 186.66666666666669 106.92094017094018 194.7826086956522 98.05656108597286 C202.8985507246377 89.19218200100553 211.01449275362322 79.93815987933635 219.13043478260872 72.92458521870287 C227.24637681159422 65.91101055806939 235.36231884057975 60.0663650075415 243.47826086956525 55.97511312217196 C251.59420289855075 51.883861236802424 259.71014492753625 48.96153846153846 267.82608695652175 48.37707390648566 C275.94202898550725 47.792609351432866 284.05797101449275 53.63725490196077 292.17391304347825 52.46832579185519 C300.28985507246375 51.29939668174961 308.4057971014493 45.06510809451985 316.5217391304348 41.36349924585218 C324.6376811594203 37.661890397184514 332.7536231884058 33.96028154851684 340.8695652173913 30.25867269984917 C348.9855072463768 26.5570638511815 357.10144927536237 19.835721468074414 365.21739130434787 19.15384615384616 C373.33333333333337 18.471970839617907 381.4492753623189 22.952865761689296 389.5652173913044 26.16742081447964 C397.6811594202899 29.381975867269986 405.7971014492754 32.79135243841126 413.9130434782609 38.44117647058823 C422.0289855072464 44.091000502765205 430.14492753623193 52.85796882855705 438.26086956521743 60.066365007541464 C446.37681159420293 67.27476118652588 454.49275362318843 74.48315736551031 462.60869565217394 81.69155354449472 C470.72463768115944 88.89994972347914 478.840579710145 96.98504273504274 486.9565217391305 103.31674208144797 C495.072463768116 109.6484414278532 503.1884057971015 114.81121166415284 511.304347826087 119.68174962292609 C519.4202898550725 124.55228758169935 527.536231884058 129.1305932629462 535.6521739130435 132.5399698340875 C543.768115942029 135.94934640522877 555.9420289855072 138.87166918049272 560 140.13800904977376 L560 210 L0 210 Z" fill="url(#lc-overview-throughput-fill)"></path>
                                      <path className="stroke-brand-ink" d="M0 143.6447963800905 C4.057971014492754 144.71631473102062 16.231884057971016 147.93086978381095 24.347826086956523 150.0739064856712 C32.46376811594203 152.21694318753143 40.57971014492754 154.8957390648567 48.69565217391305 156.50301659125188 C56.811594202898554 158.11029411764704 64.92753623188406 159.035696329814 73.04347826086956 159.71757164404224 C81.15942028985506 160.3994469582705 89.27536231884058 161.032616892911 97.3913043478261 160.5942684766214 C105.50724637681161 160.15592006033182 113.62318840579712 159.5227501256913 121.73913043478262 157.08748114630467 C129.85507246376812 154.65221216691805 137.97101449275362 151.1454248366013 146.08695652173913 145.98265460030166 C154.20289855072463 140.819884364002 162.31884057971016 134.0985419808949 170.43478260869566 126.11085972850678 C178.55072463768116 118.12317747611866 186.66666666666669 106.92094017094018 194.7826086956522 98.05656108597286 C202.8985507246377 89.19218200100553 211.01449275362322 79.93815987933635 219.13043478260872 72.92458521870287 C227.24637681159422 65.91101055806939 235.36231884057975 60.0663650075415 243.47826086956525 55.97511312217196 C251.59420289855075 51.883861236802424 259.71014492753625 48.96153846153846 267.82608695652175 48.37707390648566 C275.94202898550725 47.792609351432866 284.05797101449275 53.63725490196077 292.17391304347825 52.46832579185519 C300.28985507246375 51.29939668174961 308.4057971014493 45.06510809451985 316.5217391304348 41.36349924585218 C324.6376811594203 37.661890397184514 332.7536231884058 33.96028154851684 340.8695652173913 30.25867269984917 C348.9855072463768 26.5570638511815 357.10144927536237 19.835721468074414 365.21739130434787 19.15384615384616 C373.33333333333337 18.471970839617907 381.4492753623189 22.952865761689296 389.5652173913044 26.16742081447964 C397.6811594202899 29.381975867269986 405.7971014492754 32.79135243841126 413.9130434782609 38.44117647058823 C422.0289855072464 44.091000502765205 430.14492753623193 52.85796882855705 438.26086956521743 60.066365007541464 C446.37681159420293 67.27476118652588 454.49275362318843 74.48315736551031 462.60869565217394 81.69155354449472 C470.72463768115944 88.89994972347914 478.840579710145 96.98504273504274 486.9565217391305 103.31674208144797 C495.072463768116 109.6484414278532 503.1884057971015 114.81121166415284 511.304347826087 119.68174962292609 C519.4202898550725 124.55228758169935 527.536231884058 129.1305932629462 535.6521739130435 132.5399698340875 C543.768115942029 135.94934640522877 555.9420289855072 138.87166918049272 560 140.13800904977376" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                      <path className="dark:stroke-foreground lc-trace stroke-brand" d="M0 143.6447963800905 C4.057971014492754 144.71631473102062 16.231884057971016 147.93086978381095 24.347826086956523 150.0739064856712 C32.46376811594203 152.21694318753143 40.57971014492754 154.8957390648567 48.69565217391305 156.50301659125188 C56.811594202898554 158.11029411764704 64.92753623188406 159.035696329814 73.04347826086956 159.71757164404224 C81.15942028985506 160.3994469582705 89.27536231884058 161.032616892911 97.3913043478261 160.5942684766214 C105.50724637681161 160.15592006033182 113.62318840579712 159.5227501256913 121.73913043478262 157.08748114630467 C129.85507246376812 154.65221216691805 137.97101449275362 151.1454248366013 146.08695652173913 145.98265460030166 C154.20289855072463 140.819884364002 162.31884057971016 134.0985419808949 170.43478260869566 126.11085972850678 C178.55072463768116 118.12317747611866 186.66666666666669 106.92094017094018 194.7826086956522 98.05656108597286 C202.8985507246377 89.19218200100553 211.01449275362322 79.93815987933635 219.13043478260872 72.92458521870287 C227.24637681159422 65.91101055806939 235.36231884057975 60.0663650075415 243.47826086956525 55.97511312217196 C251.59420289855075 51.883861236802424 259.71014492753625 48.96153846153846 267.82608695652175 48.37707390648566 C275.94202898550725 47.792609351432866 284.05797101449275 53.63725490196077 292.17391304347825 52.46832579185519 C300.28985507246375 51.29939668174961 308.4057971014493 45.06510809451985 316.5217391304348 41.36349924585218 C324.6376811594203 37.661890397184514 332.7536231884058 33.96028154851684 340.8695652173913 30.25867269984917 C348.9855072463768 26.5570638511815 357.10144927536237 19.835721468074414 365.21739130434787 19.15384615384616 C373.33333333333337 18.471970839617907 381.4492753623189 22.952865761689296 389.5652173913044 26.16742081447964 C397.6811594202899 29.381975867269986 405.7971014492754 32.79135243841126 413.9130434782609 38.44117647058823 C422.0289855072464 44.091000502765205 430.14492753623193 52.85796882855705 438.26086956521743 60.066365007541464 C446.37681159420293 67.27476118652588 454.49275362318843 74.48315736551031 462.60869565217394 81.69155354449472 C470.72463768115944 88.89994972347914 478.840579710145 96.98504273504274 486.9565217391305 103.31674208144797 C495.072463768116 109.6484414278532 503.1884057971015 114.81121166415284 511.304347826087 119.68174962292609 C519.4202898550725 124.55228758169935 527.536231884058 129.1305932629462 535.6521739130435 132.5399698340875 C543.768115942029 135.94934640522877 555.9420289855072 138.87166918049272 560 140.13800904977376" fill="none" pathlength="100" strokeWidth="2.5" strokeDasharray="12 88" strokeLinecap="round" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                                    </svg>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute pointer-events-none" aria-hidden="true" style={{left: "100%", top: "66.73238526179702%"}}>
                                      <span className="bg-brand-ink block lc-ping rounded-full size-[calc(var(--lc-icon)*0.34)]"></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "0%", top: "68.40228399051928%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "0.000"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "4.347826086956522%", top: "71.46376499317675%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "0.609"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "8.695652173913045%", top: "74.52524599583424%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "1.217"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "13.043478260869565%", top: "76.05598649716298%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "1.826"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "17.39130434782609%", top: "76.47346117934353%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "2.435"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "21.73913043478261%", top: "74.80356245062127%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "3.043"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "26.08695652173913%", top: "69.51554980966745%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "3.652"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "30.434782608695656%", top: "60.05279034690799%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "4.261"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "34.78260869565218%", top: "46.69360051712994%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "4.870"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "39.130434782608695%", top: "34.72599296128708%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "5.478"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "43.47826086956522%", top: "26.654815772462836%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "6.087"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "47.82608695652174%", top: "23.03670186023127%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "6.696"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "52.17391304347826%", top: "24.984917043740566%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "7.304"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "56.52173913043479%", top: "19.696904402786753%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "7.913"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "60.86956521739131%", top: "14.40889176183294%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "8.522"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "65.21739130434784%", top: "9.120879120879124%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "9.130"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "69.56521739130436%", top: "12.460676578323639%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "9.739"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "73.91304347826087%", top: "18.30532212885154%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "10.348"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "78.26086956521739%", top: "28.603030955972127%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "10.957"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "82.6086956521739%", top: "38.900739783092725%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "11.565"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "86.95652173913044%", top: "49.19844861021332%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "12.174"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "91.30434782608697%", top: "56.99130934425052%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "12.783"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "95.65217391304348%", top: "63.11427134956546%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "13.391"}}></span>
                                    </span>
                                    <span className="-translate-x-1/2 -translate-y-1/2 absolute" aria-hidden="true" style={{left: "100%", top: "66.73238526179702%"}}>
                                      <span className="bg-card block border-2 border-brand-ink lc-dot rounded-full size-[calc(var(--lc-icon)*0.34)]" style={{"--lc-d": "14.000"}}></span>
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between leading-snug shrink-0 tabular-nums text-[length:var(--lc-micro)] text-muted-foreground">
                                    <span>
                                      {"00:00"}
                                    </span>
                                    <span>
                                      {"06:00"}
                                    </span>
                                    <span>
                                      {"12:00"}
                                    </span>
                                    <span>
                                      {"18:00"}
                                    </span>
                                    <span>
                                      {"23:00"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="@max-[1300px]/lc:hidden bg-card border border-border flex flex-col min-h-0 overflow-hidden rounded-[var(--lc-radius)]">
                                <div className="border-b border-border flex gap-[calc(var(--lc-pad)*0.5)] items-start justify-between px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.72)] shrink-0">
                                  <div className="flex flex-col gap-[calc(var(--lc-pad)*0.18)] min-w-0">
                                    <span className="font-semibold leading-tight text-[length:var(--lc-title)] text-foreground tracking-tight truncate">
                                      {"Run schedule"}
                                    </span>
                                    <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                      {"Next five on the clock"}
                                    </span>
                                  </div>
                                  <div className="shrink-0">
                                    <span className="bg-brand-subtle border border-brand-border/45 font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink w-fit whitespace-nowrap">
                                      {"1"}
                                      {"running"}
                                    </span>
                                  </div>
                                </div>
                                <div className="divide-border divide-y flex flex-col min-h-0">
                                  <div className="flex gap-[calc(var(--lc-pad)*0.5)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)]">
                                    <span className="flex items-center shrink-0">
                                      <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                        <span className="bg-brand lc-blink relative rounded-full size-full"></span>
                                      </span>
                                    </span>
                                    <span className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.12)] min-w-0">
                                      <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                        {"Arclight nightly reconcile"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                        {"every 4h"}
                                      </span>
                                    </span>
                                    <span className="flex flex-col gap-[calc(var(--lc-pad)*0.12)] items-end shrink-0">
                                      <span className="leading-snug tabular-nums text-[length:var(--lc-body)] text-foreground">
                                        {"14:20"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground">
                                        <span className="capitalize">
                                          {"running"}
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex gap-[calc(var(--lc-pad)*0.5)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)]">
                                    <span className="flex items-center shrink-0">
                                      <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                        <span className="bg-muted-foreground/45 relative rounded-full size-full"></span>
                                      </span>
                                    </span>
                                    <span className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.12)] min-w-0">
                                      <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                        {"Nightjar event backfill"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                        {"hourly"}
                                      </span>
                                    </span>
                                    <span className="flex flex-col gap-[calc(var(--lc-pad)*0.12)] items-end shrink-0">
                                      <span className="leading-snug tabular-nums text-[length:var(--lc-body)] text-foreground">
                                        {"14:45"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground">
                                        <span className="capitalize">
                                          {"queued"}
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex gap-[calc(var(--lc-pad)*0.5)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)]">
                                    <span className="flex items-center shrink-0">
                                      <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                        <span className="bg-muted-foreground/45 relative rounded-full size-full"></span>
                                      </span>
                                    </span>
                                    <span className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.12)] min-w-0">
                                      <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                        {"Veldt ledger export"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                        {"daily"}
                                      </span>
                                    </span>
                                    <span className="flex flex-col gap-[calc(var(--lc-pad)*0.12)] items-end shrink-0">
                                      <span className="leading-snug tabular-nums text-[length:var(--lc-body)] text-foreground">
                                        {"15:00"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground">
                                        <span className="capitalize">
                                          {"queued"}
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex gap-[calc(var(--lc-pad)*0.5)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)]">
                                    <span className="flex items-center shrink-0">
                                      <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                        <span className="bg-muted-foreground/45 relative rounded-full size-full"></span>
                                      </span>
                                    </span>
                                    <span className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.12)] min-w-0">
                                      <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                        {"Halcyon enrichment sweep"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                        {"every 30m"}
                                      </span>
                                    </span>
                                    <span className="flex flex-col gap-[calc(var(--lc-pad)*0.12)] items-end shrink-0">
                                      <span className="leading-snug tabular-nums text-[length:var(--lc-body)] text-foreground">
                                        {"15:30"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground">
                                        <span className="capitalize">
                                          {"queued"}
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex gap-[calc(var(--lc-pad)*0.5)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)]">
                                    <span className="flex items-center shrink-0">
                                      <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                        <span className="bg-brand-border relative rounded-full size-full"></span>
                                      </span>
                                    </span>
                                    <span className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.12)] min-w-0">
                                      <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                        {"Copperline invoice batch"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                        {"daily"}
                                      </span>
                                    </span>
                                    <span className="flex flex-col gap-[calc(var(--lc-pad)*0.12)] items-end shrink-0">
                                      <span className="leading-snug tabular-nums text-[length:var(--lc-body)] text-foreground">
                                        {"16:00"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground">
                                        <span className="capitalize">
                                          {"held"}
                                        </span>
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="bg-muted flex gap-[var(--lc-pad)] items-center justify-between leading-snug mt-auto px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.55)] shrink-0 text-[length:var(--lc-label)] text-muted-foreground">
                                  <span className="flex gap-[calc(var(--lc-pad)*0.35)] items-center min-w-0">
                                    <svg className="lucide lucide-clock shrink-0 size-[calc(var(--lc-icon)*0.9)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"3"}
                                      {"queued,"}
                                      {"1"}
                                      {"held"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="@max-[1300px]/lc:hidden bg-card border border-border flex flex-col min-h-0 overflow-hidden rounded-[var(--lc-radius)]">
                                <div className="border-b border-border flex gap-[calc(var(--lc-pad)*0.5)] items-start justify-between px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.72)] shrink-0">
                                  <div className="flex flex-col gap-[calc(var(--lc-pad)*0.18)] min-w-0">
                                    <span className="font-semibold leading-tight text-[length:var(--lc-title)] text-foreground tracking-tight truncate">
                                      {"Waiting on you"}
                                    </span>
                                    <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                      {"Approvals in the queue"}
                                    </span>
                                  </div>
                                  <div className="shrink-0">
                                    <span className="bg-brand border border-transparent font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-foreground w-fit whitespace-nowrap">
                                      {"4"}
                                    </span>
                                  </div>
                                </div>
                                <div className="divide-border divide-y flex flex-col min-h-0">
                                  <div className="flex gap-[calc(var(--lc-pad)*0.5)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)]">
                                    <span className="flex items-center shrink-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-[var(--lc-face)]" alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-3.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-3.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-3.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                                    </span>
                                    <span className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.12)] min-w-0">
                                      <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                        {"Promote ingest-v12 to production"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                        {"Priya Raman"}
                                      </span>
                                    </span>
                                    <span className="flex flex-col gap-[calc(var(--lc-pad)*0.12)] items-end shrink-0">
                                      <span className="leading-snug tabular-nums text-[length:var(--lc-body)] text-foreground">
                                        <span className="lc-rise" style={{"--lc-delay": "0ms"}}>
                                          {"4m"}
                                        </span>
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground">
                                        {"Arclight"}
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex gap-[calc(var(--lc-pad)*0.5)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)]">
                                    <span className="flex items-center shrink-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-[var(--lc-face)]" alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-4.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-4.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-4.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                                    </span>
                                    <span className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.12)] min-w-0">
                                      <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                        {"Raise rate limit to 5k/min"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                        {"Diego Marin"}
                                      </span>
                                    </span>
                                    <span className="flex flex-col gap-[calc(var(--lc-pad)*0.12)] items-end shrink-0">
                                      <span className="leading-snug tabular-nums text-[length:var(--lc-body)] text-foreground">
                                        <span className="lc-rise" style={{"--lc-delay": "-3400ms"}}>
                                          {"12m"}
                                        </span>
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground">
                                        {"Windrose"}
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex gap-[calc(var(--lc-pad)*0.5)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)]">
                                    <span className="flex items-center shrink-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-[var(--lc-face)]" alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-5.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-5.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-5.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                                    </span>
                                    <span className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.12)] min-w-0">
                                      <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                        {"Grant read on billing.events"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                        {"Yuki Tanaka"}
                                      </span>
                                    </span>
                                    <span className="flex flex-col gap-[calc(var(--lc-pad)*0.12)] items-end shrink-0">
                                      <span className="leading-snug tabular-nums text-[length:var(--lc-body)] text-foreground">
                                        <span className="lc-rise" style={{"--lc-delay": "-6800ms"}}>
                                          {"25m"}
                                        </span>
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground">
                                        {"Solvine"}
                                      </span>
                                    </span>
                                  </div>
                                  <div className="flex gap-[calc(var(--lc-pad)*0.5)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)]">
                                    <span className="flex items-center shrink-0">
                                      <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-[var(--lc-face)]" alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-2.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-2.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-2.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                                    </span>
                                    <span className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.12)] min-w-0">
                                      <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                        {"Retire the legacy webhook"}
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                        {"Noah Bennett"}
                                      </span>
                                    </span>
                                    <span className="flex flex-col gap-[calc(var(--lc-pad)*0.12)] items-end shrink-0">
                                      <span className="leading-snug tabular-nums text-[length:var(--lc-body)] text-foreground">
                                        <span className="lc-rise" style={{"--lc-delay": "-10200ms"}}>
                                          {"1h"}
                                        </span>
                                      </span>
                                      <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground">
                                        {"Bellwether"}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="bg-muted flex gap-[var(--lc-pad)] items-center justify-between leading-snug mt-auto px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.55)] shrink-0 text-[length:var(--lc-label)] text-muted-foreground">
                                  <span className="flex gap-[calc(var(--lc-pad)*0.35)] items-center min-w-0">
                                    <svg className="lucide lucide-clock shrink-0 size-[calc(var(--lc-icon)*0.9)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                      <circle cx="12" cy="12" r="10"></circle>
                                      <path d="M12 6v6l4 2"></path>
                                    </svg>
                                    <span className="truncate">
                                      {"Oldest waiting"}
                                      {"1h"}
                                    </span>
                                  </span>
                                  <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center shrink-0">
                                    <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-[calc(var(--lc-face)*0.72)]" alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-6.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                                    <span className="font-medium text-foreground">
                                      {"Maya Lindqvist"}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </figure>
            <p className="mt-6 text-sm">
              <a className="gap-2 group hover:text-foreground inline-flex items-center text-muted-foreground transition-colors" href="#how-it-works">
                <span className="font-medium text-foreground">
                  {"Limelight 2.0"}
                </span>
                {"Typed integrations just shipped"}
                <svg className="fine-pointer:group-hover:translate-x-0.5 lucide lucide-arrow-right size-3.5 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="band bg-muted dark:bg-muted/30 overflow-hidden seam" aria-labelledby="trusted-by-heading">
        <div className="shell">
          <div className="gap-8 grid lg:gap-14 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="font-semibold text-balance text-headline" id="trusted-by-heading">
                {"2,400+ teams ship on Limelight"}
              </h2>
              <p className="max-w-[46ch] mt-3 text-muted-foreground text-pretty text-sm">
                {"From seed-stage launches to public companies, in 40 countries, on 99.9% measured uptime."}
              </p>
            </div>
            <div className="flex flex-col gap-6 lg:border-border lg:border-l lg:pl-14 min-w-0 relative">
              <div className="[--edge-fade:16%] edge-fade-x flex flex-row gap-(--marquee-gap) group overflow-hidden sm:[--edge-fade:8%]" style={{"--marquee-duration": "55s", "--marquee-gap": "4rem"}}>
                <div className="animate-marquee flex flex-row gap-(--marquee-gap) group-hover:[animation-play-state:paused] shrink-0">
                  <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="GitHub">
                    <span className="sr-only">
                      {"GitHub"}
                    </span>
                    <svg className="h-5 shrink-0 w-auto" aria-hidden="true" fill="currentColor" xmlSpace="preserve" viewBox="0 0 249.1 67.5">
                      <path d="M103.4 55.9h-.1s0 .1.1 0m0 .1c-.5 0-1.8.3-3.2.3-4.4 0-5.9-2-5.9-4.6V34.2h8.9c.5 0 .9-.4.9-1.1v-9.5c0-.5-.4-.9-.9-.9h-8.9V10.9c0-.4-.3-.7-.8-.7h-12c-.5 0-.8.3-.8.7V23s-6.1 1.5-6.5 1.6-.7.5-.7.9v7.6c0 .6.4 1.1.9 1.1h6.2v18.3c0 13.6 9.5 15 16 15 3 0 6.5-.9 7.1-1.2.3-.1.5-.5.5-.9V57c0-.5-.4-.9-.8-1m132.1-12.3c0-10.1-4.1-11.4-8.4-11-3.3.2-6 1.9-6 1.9v19.6s2.7 1.9 6.8 2c5.8.2 7.6-1.8 7.6-12.5m13.6-.9c0 19.1-6.2 24.6-17 24.6-9.1 0-14.1-4.6-14.1-4.6s-.2 2.6-.5 2.9c-.2.3-.4.4-.8.4h-8.3c-.6 0-1.1-.4-1.1-.9l.1-62c0-.5.4-.9.9-.9h11.9c.5 0 .9.4.9.9l-.1 20.9s4.6-3 11.3-3h.1c6.8.1 16.7 2.6 16.7 21.7m-48.6-20.1h-11.7c-.6 0-.9.4-.9 1.1v30.3s-3.1 2.2-7.3 2.2-5.4-1.9-5.4-6.1V23.7c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v28.5c0 12.3 6.9 15.3 16.3 15.3 7.8 0 14.1-4.3 14.1-4.3s.3 2.2.4 2.5.5.5.9.5h7.5c.6 0 .9-.4.9-.9l.1-41.7c-.2-.5-.6-.9-1.2-.9m-132.2-.1H56.4c-.5 0-.9.5-.9 1.1v40.9c0 1.1.7 1.5 1.7 1.5h10.7c1.1 0 1.4-.5 1.4-1.5v-41c-.1-.5-.5-1-1-1M62.4 3.8c-4.3 0-7.7 3.4-7.7 7.7s3.4 7.7 7.7 7.7c4.2 0 7.6-3.4 7.6-7.7s-3.4-7.7-7.6-7.7m92-1.4h-11.8c-.5 0-.9.4-.9.9v22.8h-18.5V3.3c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v62c0 .5.5.9.9.9h11.9c.5 0 .9-.4.9-.9V38.8h18.5l-.1 26.5c0 .5.4.9.9.9h11.9c.5 0 .9-.4.9-.9v-62c0-.5-.4-.9-.9-.9M49.1 29.8v32c0 .2-.1.6-.3.7 0 0-7 5-18.5 5-13.8 0-30.3-4.3-30.3-33C0 5.9 14.4-.1 28.4 0c12.2 0 17.1 2.7 17.8 3.2.2.3.3.5.3.8l-2.3 9.9c0 .5-.5 1.1-1.1.9-2-.6-5-1.8-12.1-1.8-8.2 0-17 2.3-17 20.8s8.4 20.6 14.4 20.6c5.1 0 7-.6 7-.6V41.1h-8.2c-.6 0-1.1-.4-1.1-.9V29.8c0-.5.4-.9 1.1-.9h20.9c.6 0 1 .4 1 .9"></path>
                    </svg>
                  </span>
                  <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="OpenAI">
                    <span className="sr-only">
                      {"OpenAI"}
                    </span>
                    <svg className="h-5 shrink-0 w-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 1180 320">
                      <path d="M367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8z m129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68z M614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84V114h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84z m-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48z M747.65 242.64c25.2 0 45.12-13.2 54-35.28L776.93 198c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52z m-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92z M823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88V240h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84V114h-28.8z M1014.17 67.68 948.89 240h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32z m16.8 34.08 27.36 72h-54.24z M1163.69 68.18h-30.72V240.5h30.72z M297.06 130.97a79.712 79.712 0 0 0-6.85-65.48c-17.46-30.4-52.56-46.04-86.84-38.68A79.747 79.747 0 0 0 143.24 0C108.2-.08 77.11 22.48 66.33 55.82a79.754 79.754 0 0 0-53.31 38.67c-17.59 30.32-13.58 68.54 9.92 94.54a79.712 79.712 0 0 0 6.85 65.48c17.46 30.4 52.56 46.04 86.84 38.68a79.687 79.687 0 0 0 60.13 26.8c35.06.09 66.16-22.49 76.94-55.86a79.754 79.754 0 0 0 53.31-38.67c17.57-30.32 13.55-68.51-9.94-94.51z M176.78 299.08a59.77 59.77 0 0 1-38.39-13.88c.49-.26 1.34-.73 1.89-1.07l63.72-36.8a10.36 10.36 0 0 0 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97z M47.94 244.05a59.71 59.71 0 0 1-7.15-40.18c.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83L129.87 266c-28.69 16.52-65.33 6.7-81.92-21.95z M31.17 104.96c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91L118.44 224c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89z m221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94a59.94 59.94 0 0 1-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06z m26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8a10.375 10.375 0 0 0-10.47 0l-77.79 44.92V92c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22a59.95 59.95 0 0 1 7.15 40.1z m-168.51 55.43-26.94-15.55a.943.943 0 0 1-.52-.74V80.86c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07L116 72.67a10.344 10.344 0 0 0-5.24 9.06l-.04 89.79z M125.35 140 160 119.99l34.65 20V180L160 200l-34.65-20z"></path>
                    </svg>
                  </span>
                  <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="NVIDIA">
                    <span className="sr-only">
                      {"NVIDIA"}
                    </span>
                    <svg className="h-4 shrink-0 w-auto" aria-hidden="true" fill="currentColor" xmlSpace="preserve" style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2"}} viewBox="0 0 164 30">
                      <path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331M96.374 5.707l.002 19.66h5.552V5.707h-5.554Zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97l-.001.001Zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792Zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.988Zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659h-5.667Zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659Zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001ZM146.1 9.3l3.364 9.204h-6.833l3.47-9.204h-.001Z"></path>
                      <path d="M16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.83 6.83 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088Zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.807 18.807 0 0 1-1.838-.096V30h28.375V.047H16.889Zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852ZM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943Z"></path>
                    </svg>
                  </span>
                  <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="Cursor">
                    <span className="sr-only">
                      {"Cursor"}
                    </span>
                    <svg className="h-4 shrink-0 w-auto" aria-hidden="true" fill="currentColor" id="Ebene_1" version="1.1" viewBox="0 0 1655.29 278.83">
                      <path d="M139.03,4.61h90.64v49.93h-87.57c-47.24,0-84.11,27.27-84.11,84.88s36.87,84.88,84.11,84.88h87.57v49.93h-94.48c-79.12,0-135.19-46.48-135.19-134.82S59.91,4.61,139.03,4.61Z"></path>
                      <path d="M275.75,4.61h56.07v164.76c0,41.09,18.82,60.3,62.99,60.3s62.99-19.2,62.99-60.3V4.61h56.07v176.28c0,59.91-38.02,97.94-119.06,97.94s-119.06-38.41-119.06-98.32V4.61Z"></path>
                      <path d="M806.9,81.04c0,29.96-17.28,53-40.33,62.99v.77c24.2,3.46,36.49,20.74,36.87,44.17l1.15,85.26h-56.07l-1.15-76.04c-.38-16.9-10.37-27.27-30.34-27.27h-93.33v103.31h-56.07V4.61h154.78c50.7,0,84.49,25.73,84.49,76.43h0ZM750.45,88.72c0-23.04-12.29-35.72-35.33-35.72h-91.41v71.43h92.17c21.12,0,34.57-12.67,34.57-35.72h0Z"></path>
                      <path d="M1018.9,195.49c0-19.2-12.29-27.27-30.72-28.8l-62.22-5.76c-53.77-4.99-81.81-26.12-81.81-77.2S878.72,4.61,928.26,4.61h137.49v48.39h-133.65c-19.2,0-31.49,9.99-31.49,29.19s12.67,28.42,31.88,29.96l63.37,5.38c48.01,4.22,79.5,26.12,79.5,77.58s-33.41,79.12-80.65,79.12h-143.64v-48.39h138.26c18.05,0,29.57-12.29,29.57-30.34h0Z"></path>
                      <path d="M1239.35,0c84.49,0,137.88,54.15,137.88,139.03s-55.69,139.8-140.18,139.8-137.88-54.92-137.88-139.8S1154.86,0,1239.35,0ZM1319.24,139.41c0-56.84-33.03-90.25-81.04-90.25s-81.04,33.41-81.04,90.25,33.03,90.25,81.04,90.25,81.04-33.41,81.04-90.25Z"></path>
                      <path d="M1655.29,81.04c0,29.96-17.28,53-40.33,62.99v.77c24.2,3.46,36.49,20.74,36.87,44.17l1.15,85.26h-56.07l-1.15-76.04c-.38-16.9-10.37-27.27-30.34-27.27h-93.33v103.31h-56.07V4.61h154.78c50.7,0,84.49,25.73,84.49,76.43h0ZM1598.83,88.72c0-23.04-12.29-35.72-35.33-35.72h-91.41v71.43h92.17c21.12,0,34.57-12.67,34.57-35.72h0Z"></path>
                    </svg>
                  </span>
                  <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="Convex">
                    <span className="sr-only">
                      {"Convex"}
                    </span>
                    <svg className="h-6 shrink-0 w-auto" aria-hidden="true" fill="currentColor" xmlSpace="preserve" style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2"}} viewBox="0 0 600 150">
                      <path d="m512.51 75.13-22.19-29.38h25.72l45.39 59.77h-25.97l-10.09-13.37-10.09 13.37h-25.85l23.08-30.39ZM534.89 45.75h25.6l-19.65 26.17-13-16.77 7.05-9.4ZM159.9 98.9c-6.18-5.25-9.27-13.01-9.27-23.26 0-10.25 3.15-18.01 9.46-23.26 6.3-5.25 14.92-7.88 25.85-7.88 4.54 0 8.55.31 12.04.95 3.49.63 6.83 1.7 10.02 3.22V65.3c-4.96-2.35-10.59-3.53-16.89-3.53-5.55 0-9.65 1.05-12.29 3.15-2.65 2.1-3.97 5.67-3.97 10.72 0 4.88 1.3 8.41 3.91 10.59 2.6 2.19 6.72 3.28 12.36 3.28 5.97 0 11.64-1.39 17.02-4.16v17.4c-5.97 2.69-13.41 4.03-22.32 4.03-11.11 0-19.74-2.63-25.92-7.88ZM213.52 75.63c0-10.17 2.9-17.9 8.7-23.2 5.8-5.3 14.54-7.94 26.23-7.94 11.77 0 20.57 2.65 26.42 7.94 5.84 5.29 8.76 13.03 8.76 23.2 0 20.76-11.73 31.14-35.18 31.14-23.29.01-34.93-10.37-34.93-31.14Zm43.32 10.6c1.72-2.19 2.58-5.72 2.58-10.59 0-4.79-.86-8.3-2.58-10.53-1.72-2.23-4.52-3.34-8.39-3.34-3.78 0-6.52 1.12-8.2 3.34-1.68 2.23-2.52 5.74-2.52 10.53 0 4.88.84 8.41 2.52 10.59 1.68 2.19 4.41 3.28 8.2 3.28 3.87 0 6.66-1.1 8.39-3.28ZM289.15 45.75h22.19l.63 4.54c2.44-1.68 5.55-3.07 9.33-4.16 3.78-1.09 7.69-1.64 11.73-1.64 7.48 0 12.94 1.85 16.39 5.55 3.45 3.7 5.17 9.41 5.17 17.15v38.33h-23.7V69.58c0-2.69-.61-4.62-1.83-5.8-1.22-1.18-3.26-1.76-6.12-1.76-1.76 0-3.57.4-5.42 1.2-1.85.8-3.4 1.83-4.67 3.09v39.21h-23.7V45.75ZM354.66 45.75h24.71l11.35 35.05 11.35-35.05h24.71l-23.58 59.77h-24.97l-23.57-59.77Z" style={{fillRule: "nonzero"}}></path>
                      <path d="M434.24 100.38c-7.12-5.34-10.45-14.61-10.45-24.62 0-9.75 2.65-17.78 8.7-23.33 6.05-5.55 15.27-7.94 26.91-7.94 10.71 0 19.13 2.48 25.28 7.44 6.14 4.96 9.22 11.73 9.22 20.3V82.7h-45.07c1.12 3.11 2.54 5.36 6.03 6.75 3.49 1.39 8.36 2.08 14.59 2.08 3.72 0 7.52-.29 11.38-.88 1.36-.21 3.6-.54 4.78-.79v14.53c-5.89 1.6-13.74 2.4-22.59 2.4-11.91-.01-21.66-1.07-28.78-6.41ZM469 69.84c0-2.96-3.41-9.33-10.26-9.33-6.18 0-10.26 6.27-10.26 9.33H469Z" style={{fillRule: "nonzero"}}></path>
                      <path d="M100.22 100.4c13.1-1.43 25.45-8.29 32.25-19.74-3.22 28.32-34.73 46.22-60.45 35.23-2.37-1.01-4.41-2.69-5.81-4.85-5.78-8.92-7.68-20.27-4.95-30.57 7.8 13.23 23.66 21.34 38.96 19.93Z" style={{fillRule: "nonzero"}}></path>
                      <path d="M60.78 72.16c-5.31 12.06-5.54 26.18.97 37.8C38.84 93.02 39.09 56.77 61.47 40c2.07-1.55 4.53-2.47 7.11-2.61 10.61-.55 21.39 3.48 28.95 10.99-15.36.15-30.32 9.82-36.75 23.78Z" style={{fillRule: "nonzero"}}></path>
                      <path d="M104.94 52.09c-7.75-10.62-19.88-17.85-33.17-18.07 25.69-11.46 57.29 7.12 60.73 34.59.32 2.55-.1 5.15-1.25 7.45-4.8 9.58-13.7 17.01-24.1 19.76 7.62-13.89 6.68-30.86-2.21-43.73Z" style={{fillRule: "nonzero"}}></path>
                    </svg>
                  </span>
                </div>
                <div aria-hidden="true">
                  <div className="animate-marquee flex flex-row gap-(--marquee-gap) group-hover:[animation-play-state:paused] shrink-0">
                    <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="GitHub">
                      <span className="sr-only">
                        {"GitHub"}
                      </span>
                      <svg className="h-5 shrink-0 w-auto" aria-hidden="true" fill="currentColor" xmlSpace="preserve" viewBox="0 0 249.1 67.5">
                        <path d="M103.4 55.9h-.1s0 .1.1 0m0 .1c-.5 0-1.8.3-3.2.3-4.4 0-5.9-2-5.9-4.6V34.2h8.9c.5 0 .9-.4.9-1.1v-9.5c0-.5-.4-.9-.9-.9h-8.9V10.9c0-.4-.3-.7-.8-.7h-12c-.5 0-.8.3-.8.7V23s-6.1 1.5-6.5 1.6-.7.5-.7.9v7.6c0 .6.4 1.1.9 1.1h6.2v18.3c0 13.6 9.5 15 16 15 3 0 6.5-.9 7.1-1.2.3-.1.5-.5.5-.9V57c0-.5-.4-.9-.8-1m132.1-12.3c0-10.1-4.1-11.4-8.4-11-3.3.2-6 1.9-6 1.9v19.6s2.7 1.9 6.8 2c5.8.2 7.6-1.8 7.6-12.5m13.6-.9c0 19.1-6.2 24.6-17 24.6-9.1 0-14.1-4.6-14.1-4.6s-.2 2.6-.5 2.9c-.2.3-.4.4-.8.4h-8.3c-.6 0-1.1-.4-1.1-.9l.1-62c0-.5.4-.9.9-.9h11.9c.5 0 .9.4.9.9l-.1 20.9s4.6-3 11.3-3h.1c6.8.1 16.7 2.6 16.7 21.7m-48.6-20.1h-11.7c-.6 0-.9.4-.9 1.1v30.3s-3.1 2.2-7.3 2.2-5.4-1.9-5.4-6.1V23.7c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v28.5c0 12.3 6.9 15.3 16.3 15.3 7.8 0 14.1-4.3 14.1-4.3s.3 2.2.4 2.5.5.5.9.5h7.5c.6 0 .9-.4.9-.9l.1-41.7c-.2-.5-.6-.9-1.2-.9m-132.2-.1H56.4c-.5 0-.9.5-.9 1.1v40.9c0 1.1.7 1.5 1.7 1.5h10.7c1.1 0 1.4-.5 1.4-1.5v-41c-.1-.5-.5-1-1-1M62.4 3.8c-4.3 0-7.7 3.4-7.7 7.7s3.4 7.7 7.7 7.7c4.2 0 7.6-3.4 7.6-7.7s-3.4-7.7-7.6-7.7m92-1.4h-11.8c-.5 0-.9.4-.9.9v22.8h-18.5V3.3c0-.5-.4-.9-.9-.9h-11.9c-.5 0-.9.4-.9.9v62c0 .5.5.9.9.9h11.9c.5 0 .9-.4.9-.9V38.8h18.5l-.1 26.5c0 .5.4.9.9.9h11.9c.5 0 .9-.4.9-.9v-62c0-.5-.4-.9-.9-.9M49.1 29.8v32c0 .2-.1.6-.3.7 0 0-7 5-18.5 5-13.8 0-30.3-4.3-30.3-33C0 5.9 14.4-.1 28.4 0c12.2 0 17.1 2.7 17.8 3.2.2.3.3.5.3.8l-2.3 9.9c0 .5-.5 1.1-1.1.9-2-.6-5-1.8-12.1-1.8-8.2 0-17 2.3-17 20.8s8.4 20.6 14.4 20.6c5.1 0 7-.6 7-.6V41.1h-8.2c-.6 0-1.1-.4-1.1-.9V29.8c0-.5.4-.9 1.1-.9h20.9c.6 0 1 .4 1 .9"></path>
                      </svg>
                    </span>
                    <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="OpenAI">
                      <span className="sr-only">
                        {"OpenAI"}
                      </span>
                      <svg className="h-5 shrink-0 w-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 1180 320">
                        <path d="M367.44 153.84c0 52.32 33.6 88.8 80.16 88.8s80.16-36.48 80.16-88.8-33.6-88.8-80.16-88.8-80.16 36.48-80.16 88.8z m129.6 0c0 37.44-20.4 61.68-49.44 61.68s-49.44-24.24-49.44-61.68 20.4-61.68 49.44-61.68 49.44 24.24 49.44 61.68z M614.27 242.64c35.28 0 55.44-29.76 55.44-65.52s-20.16-65.52-55.44-65.52c-16.32 0-28.32 6.48-36.24 15.84V114h-28.8v169.2h28.8v-56.4c7.92 9.36 19.92 15.84 36.24 15.84z m-36.96-69.12c0-23.76 13.44-36.72 31.2-36.72 20.88 0 32.16 16.32 32.16 40.32s-11.28 40.32-32.16 40.32c-17.76 0-31.2-13.2-31.2-36.48z M747.65 242.64c25.2 0 45.12-13.2 54-35.28L776.93 198c-3.84 12.96-15.12 20.16-29.28 20.16-18.48 0-31.44-13.2-33.6-34.8h88.32v-9.6c0-34.56-19.44-62.16-55.92-62.16s-60 28.56-60 65.52c0 38.88 25.2 65.52 61.2 65.52z m-1.44-106.8c18.24 0 26.88 12 27.12 25.92h-57.84c4.32-17.04 15.84-25.92 30.72-25.92z M823.98 240h28.8v-73.92c0-18 13.2-27.6 26.16-27.6 15.84 0 22.08 11.28 22.08 26.88V240h28.8v-83.04c0-27.12-15.84-45.36-42.24-45.36-16.32 0-27.6 7.44-34.8 15.84V114h-28.8z M1014.17 67.68 948.89 240h30.48l14.64-39.36h74.4l14.88 39.36h30.96l-65.28-172.32z m16.8 34.08 27.36 72h-54.24z M1163.69 68.18h-30.72V240.5h30.72z M297.06 130.97a79.712 79.712 0 0 0-6.85-65.48c-17.46-30.4-52.56-46.04-86.84-38.68A79.747 79.747 0 0 0 143.24 0C108.2-.08 77.11 22.48 66.33 55.82a79.754 79.754 0 0 0-53.31 38.67c-17.59 30.32-13.58 68.54 9.92 94.54a79.712 79.712 0 0 0 6.85 65.48c17.46 30.4 52.56 46.04 86.84 38.68a79.687 79.687 0 0 0 60.13 26.8c35.06.09 66.16-22.49 76.94-55.86a79.754 79.754 0 0 0 53.31-38.67c17.57-30.32 13.55-68.51-9.94-94.51z M176.78 299.08a59.77 59.77 0 0 1-38.39-13.88c.49-.26 1.34-.73 1.89-1.07l63.72-36.8a10.36 10.36 0 0 0 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97z M47.94 244.05a59.71 59.71 0 0 1-7.15-40.18c.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83L129.87 266c-28.69 16.52-65.33 6.7-81.92-21.95z M31.17 104.96c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91L118.44 224c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89z m221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94a59.94 59.94 0 0 1-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06z m26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8a10.375 10.375 0 0 0-10.47 0l-77.79 44.92V92c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22a59.95 59.95 0 0 1 7.15 40.1z m-168.51 55.43-26.94-15.55a.943.943 0 0 1-.52-.74V80.86c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07L116 72.67a10.344 10.344 0 0 0-5.24 9.06l-.04 89.79z M125.35 140 160 119.99l34.65 20V180L160 200l-34.65-20z"></path>
                      </svg>
                    </span>
                    <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="NVIDIA">
                      <span className="sr-only">
                        {"NVIDIA"}
                      </span>
                      <svg className="h-4 shrink-0 w-auto" aria-hidden="true" fill="currentColor" xmlSpace="preserve" style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2"}} viewBox="0 0 164 30">
                        <path d="M160.352 24.069v-.449h.288c.157 0 .371.012.371.204 0 .208-.11.245-.296.245h-.363m0 .315h.192l.447.784h.49l-.494-.816c.255-.019.465-.14.465-.484 0-.427-.295-.565-.793-.565h-.721v1.865h.414v-.784m2.098-.146c0-1.095-.851-1.73-1.8-1.73-.955 0-1.805.635-1.805 1.73s.85 1.733 1.805 1.733c.948 0 1.8-.638 1.8-1.733m-.52 0c0 .798-.587 1.334-1.28 1.334v-.006c-.713.006-1.289-.53-1.289-1.328 0-.797.577-1.331 1.289-1.331.694 0 1.28.534 1.28 1.331M96.374 5.707l.002 19.66h5.552V5.707h-5.554Zm-43.677-.026v19.686H58.3V10.086l4.37.014c1.437 0 2.43.345 3.123 1.084.879.936 1.237 2.444 1.237 5.205v8.978h5.427V14.49c0-7.763-4.948-8.81-9.789-8.81h-9.97l-.001.001Zm52.617.027v19.659h9.006c4.798 0 6.364-.798 8.057-2.587 1.198-1.256 1.971-4.014 1.971-7.027 0-2.763-.655-5.228-1.797-6.763-2.057-2.745-5.02-3.282-9.445-3.282h-7.792Zm5.508 4.28h2.387c3.463 0 5.703 1.556 5.703 5.591 0 4.037-2.24 5.592-5.703 5.592h-2.387V9.988Zm-22.453-4.28-4.634 15.58-4.44-15.579-5.993-.001 6.34 19.659h8.003l6.391-19.659h-5.667Zm38.563 19.659h5.553V5.709l-5.555-.001.002 19.659Zm15.564-19.652-7.753 19.645h5.475l1.227-3.472h9.175l1.161 3.472h5.944l-7.812-19.646-7.417.001ZM146.1 9.3l3.364 9.204h-6.833l3.47-9.204h-.001Z"></path>
                        <path d="M16.889 8.985V6.28c.262-.02.528-.033.798-.042 7.4-.232 12.255 6.359 12.255 6.359s-5.244 7.282-10.866 7.282a6.83 6.83 0 0 1-2.187-.35v-8.204c2.88.348 3.46 1.62 5.192 4.508l3.852-3.248s-2.812-3.688-7.552-3.688c-.515 0-1.008.036-1.492.088Zm0-8.938V4.09c.265-.021.531-.038.798-.048 10.29-.346 16.995 8.44 16.995 8.44s-7.7 9.364-15.723 9.364c-.735 0-1.424-.068-2.07-.183v2.498c.553.07 1.126.112 1.724.112 7.465 0 12.864-3.812 18.092-8.325.867.694 4.416 2.383 5.145 3.123-4.971 4.16-16.555 7.515-23.123 7.515a18.807 18.807 0 0 1-1.838-.096V30h28.375V.047H16.889Zm0 19.482v2.133c-6.905-1.23-8.822-8.408-8.822-8.408s3.316-3.674 8.822-4.269v2.34l-.011-.001c-2.89-.347-5.147 2.353-5.147 2.353s1.265 4.544 5.158 5.852ZM4.625 12.943s4.092-6.04 12.264-6.663V4.088C7.838 4.815 0 12.48 0 12.48s4.439 12.833 16.889 14.008V24.16C7.753 23.011 4.625 12.943 4.625 12.943Z"></path>
                      </svg>
                    </span>
                    <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="Cursor">
                      <span className="sr-only">
                        {"Cursor"}
                      </span>
                      <svg className="h-4 shrink-0 w-auto" aria-hidden="true" fill="currentColor" id="Ebene_1" version="1.1" viewBox="0 0 1655.29 278.83">
                        <path d="M139.03,4.61h90.64v49.93h-87.57c-47.24,0-84.11,27.27-84.11,84.88s36.87,84.88,84.11,84.88h87.57v49.93h-94.48c-79.12,0-135.19-46.48-135.19-134.82S59.91,4.61,139.03,4.61Z"></path>
                        <path d="M275.75,4.61h56.07v164.76c0,41.09,18.82,60.3,62.99,60.3s62.99-19.2,62.99-60.3V4.61h56.07v176.28c0,59.91-38.02,97.94-119.06,97.94s-119.06-38.41-119.06-98.32V4.61Z"></path>
                        <path d="M806.9,81.04c0,29.96-17.28,53-40.33,62.99v.77c24.2,3.46,36.49,20.74,36.87,44.17l1.15,85.26h-56.07l-1.15-76.04c-.38-16.9-10.37-27.27-30.34-27.27h-93.33v103.31h-56.07V4.61h154.78c50.7,0,84.49,25.73,84.49,76.43h0ZM750.45,88.72c0-23.04-12.29-35.72-35.33-35.72h-91.41v71.43h92.17c21.12,0,34.57-12.67,34.57-35.72h0Z"></path>
                        <path d="M1018.9,195.49c0-19.2-12.29-27.27-30.72-28.8l-62.22-5.76c-53.77-4.99-81.81-26.12-81.81-77.2S878.72,4.61,928.26,4.61h137.49v48.39h-133.65c-19.2,0-31.49,9.99-31.49,29.19s12.67,28.42,31.88,29.96l63.37,5.38c48.01,4.22,79.5,26.12,79.5,77.58s-33.41,79.12-80.65,79.12h-143.64v-48.39h138.26c18.05,0,29.57-12.29,29.57-30.34h0Z"></path>
                        <path d="M1239.35,0c84.49,0,137.88,54.15,137.88,139.03s-55.69,139.8-140.18,139.8-137.88-54.92-137.88-139.8S1154.86,0,1239.35,0ZM1319.24,139.41c0-56.84-33.03-90.25-81.04-90.25s-81.04,33.41-81.04,90.25,33.03,90.25,81.04,90.25,81.04-33.41,81.04-90.25Z"></path>
                        <path d="M1655.29,81.04c0,29.96-17.28,53-40.33,62.99v.77c24.2,3.46,36.49,20.74,36.87,44.17l1.15,85.26h-56.07l-1.15-76.04c-.38-16.9-10.37-27.27-30.34-27.27h-93.33v103.31h-56.07V4.61h154.78c50.7,0,84.49,25.73,84.49,76.43h0ZM1598.83,88.72c0-23.04-12.29-35.72-35.33-35.72h-91.41v71.43h92.17c21.12,0,34.57-12.67,34.57-35.72h0Z"></path>
                      </svg>
                    </span>
                    <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="Convex">
                      <span className="sr-only">
                        {"Convex"}
                      </span>
                      <svg className="h-6 shrink-0 w-auto" aria-hidden="true" fill="currentColor" xmlSpace="preserve" style={{fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "2"}} viewBox="0 0 600 150">
                        <path d="m512.51 75.13-22.19-29.38h25.72l45.39 59.77h-25.97l-10.09-13.37-10.09 13.37h-25.85l23.08-30.39ZM534.89 45.75h25.6l-19.65 26.17-13-16.77 7.05-9.4ZM159.9 98.9c-6.18-5.25-9.27-13.01-9.27-23.26 0-10.25 3.15-18.01 9.46-23.26 6.3-5.25 14.92-7.88 25.85-7.88 4.54 0 8.55.31 12.04.95 3.49.63 6.83 1.7 10.02 3.22V65.3c-4.96-2.35-10.59-3.53-16.89-3.53-5.55 0-9.65 1.05-12.29 3.15-2.65 2.1-3.97 5.67-3.97 10.72 0 4.88 1.3 8.41 3.91 10.59 2.6 2.19 6.72 3.28 12.36 3.28 5.97 0 11.64-1.39 17.02-4.16v17.4c-5.97 2.69-13.41 4.03-22.32 4.03-11.11 0-19.74-2.63-25.92-7.88ZM213.52 75.63c0-10.17 2.9-17.9 8.7-23.2 5.8-5.3 14.54-7.94 26.23-7.94 11.77 0 20.57 2.65 26.42 7.94 5.84 5.29 8.76 13.03 8.76 23.2 0 20.76-11.73 31.14-35.18 31.14-23.29.01-34.93-10.37-34.93-31.14Zm43.32 10.6c1.72-2.19 2.58-5.72 2.58-10.59 0-4.79-.86-8.3-2.58-10.53-1.72-2.23-4.52-3.34-8.39-3.34-3.78 0-6.52 1.12-8.2 3.34-1.68 2.23-2.52 5.74-2.52 10.53 0 4.88.84 8.41 2.52 10.59 1.68 2.19 4.41 3.28 8.2 3.28 3.87 0 6.66-1.1 8.39-3.28ZM289.15 45.75h22.19l.63 4.54c2.44-1.68 5.55-3.07 9.33-4.16 3.78-1.09 7.69-1.64 11.73-1.64 7.48 0 12.94 1.85 16.39 5.55 3.45 3.7 5.17 9.41 5.17 17.15v38.33h-23.7V69.58c0-2.69-.61-4.62-1.83-5.8-1.22-1.18-3.26-1.76-6.12-1.76-1.76 0-3.57.4-5.42 1.2-1.85.8-3.4 1.83-4.67 3.09v39.21h-23.7V45.75ZM354.66 45.75h24.71l11.35 35.05 11.35-35.05h24.71l-23.58 59.77h-24.97l-23.57-59.77Z" style={{fillRule: "nonzero"}}></path>
                        <path d="M434.24 100.38c-7.12-5.34-10.45-14.61-10.45-24.62 0-9.75 2.65-17.78 8.7-23.33 6.05-5.55 15.27-7.94 26.91-7.94 10.71 0 19.13 2.48 25.28 7.44 6.14 4.96 9.22 11.73 9.22 20.3V82.7h-45.07c1.12 3.11 2.54 5.36 6.03 6.75 3.49 1.39 8.36 2.08 14.59 2.08 3.72 0 7.52-.29 11.38-.88 1.36-.21 3.6-.54 4.78-.79v14.53c-5.89 1.6-13.74 2.4-22.59 2.4-11.91-.01-21.66-1.07-28.78-6.41ZM469 69.84c0-2.96-3.41-9.33-10.26-9.33-6.18 0-10.26 6.27-10.26 9.33H469Z" style={{fillRule: "nonzero"}}></path>
                        <path d="M100.22 100.4c13.1-1.43 25.45-8.29 32.25-19.74-3.22 28.32-34.73 46.22-60.45 35.23-2.37-1.01-4.41-2.69-5.81-4.85-5.78-8.92-7.68-20.27-4.95-30.57 7.8 13.23 23.66 21.34 38.96 19.93Z" style={{fillRule: "nonzero"}}></path>
                        <path d="M60.78 72.16c-5.31 12.06-5.54 26.18.97 37.8C38.84 93.02 39.09 56.77 61.47 40c2.07-1.55 4.53-2.47 7.11-2.61 10.61-.55 21.39 3.48 28.95 10.99-15.36.15-30.32 9.82-36.75 23.78Z" style={{fillRule: "nonzero"}}></path>
                        <path d="M104.94 52.09c-7.75-10.62-19.88-17.85-33.17-18.07 25.69-11.46 57.29 7.12 60.73 34.59.32 2.55-.1 5.15-1.25 7.45-4.8 9.58-13.7 17.01-24.1 19.76 7.62-13.89 6.68-30.86-2.21-43.73Z" style={{fillRule: "nonzero"}}></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="[--edge-fade:16%] edge-fade-x flex flex-row gap-(--marquee-gap) group overflow-hidden sm:[--edge-fade:8%]" style={{"--marquee-duration": "70s", "--marquee-gap": "4rem"}}>
                <div className="[animation-direction:reverse] animate-marquee flex flex-row gap-(--marquee-gap) group-hover:[animation-play-state:paused] shrink-0">
                  <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="n8n">
                    <span className="sr-only">
                      {"n8n"}
                    </span>
                    <svg className="h-5 shrink-0 w-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 87 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M47.9855 4.8C47.9855 7.45098 45.8365 9.6 43.1855 9.6C40.949 9.6 39.0696 8.0703 38.5368 6H31.8352C30.662 6 29.6607 6.84822 29.4678 8.00544L29.2706 9.18912C29.0832 10.313 28.5147 11.2911 27.7108 12C28.5147 12.7089 29.0832 13.687 29.2706 14.8109L29.4678 15.9946C29.6607 17.1518 30.662 18 31.8352 18H33.7368C34.2696 15.9297 36.149 14.4 38.3855 14.4C41.0365 14.4 43.1855 16.549 43.1855 19.2C43.1855 21.851 41.0365 24 38.3855 24C36.149 24 34.2696 22.4703 33.7368 20.4H31.8352C29.4888 20.4 27.4863 18.7036 27.1005 16.3891L26.9032 15.2054C26.7104 14.0482 25.7091 13.2 24.5359 13.2H22.5782C21.979 15.1681 20.1495 16.6 17.9855 16.6C15.8216 16.6 13.9921 15.1681 13.3929 13.2H10.5782C9.97901 15.1681 8.14949 16.6 5.98554 16.6C3.33458 16.6 1.18555 14.4509 1.18555 11.8C1.18555 9.14904 3.33458 7.00002 5.98554 7.00002C8.29361 7.00002 10.2212 8.62902 10.6812 10.8H13.2899C13.7499 8.62902 15.6775 7.00002 17.9855 7.00002C20.2936 7.00002 22.2212 8.62902 22.6812 10.8H24.5359C25.7091 10.8 26.7104 9.95178 26.9032 8.79456L27.1005 7.61088C27.4863 5.29638 29.4888 3.6 31.8352 3.6H38.5368C39.0696 1.52973 40.949 0 43.1855 0C45.8365 0 47.9855 2.14903 47.9855 4.8ZM45.5855 4.8C45.5855 6.12546 44.511 7.2 43.1855 7.2C41.8601 7.2 40.7855 6.12546 40.7855 4.8C40.7855 3.47452 41.8601 2.4 43.1855 2.4C44.511 2.4 45.5855 3.47452 45.5855 4.8ZM5.98554 14.2C7.31105 14.2 8.38553 13.1255 8.38553 11.8C8.38553 10.4745 7.31105 9.40002 5.98554 9.40002C4.66006 9.40002 3.58554 10.4745 3.58554 11.8C3.58554 13.1255 4.66006 14.2 5.98554 14.2ZM17.9855 14.2C19.311 14.2 20.3855 13.1255 20.3855 11.8C20.3855 10.4745 19.311 9.40002 17.9855 9.40002C16.6601 9.40002 15.5855 10.4745 15.5855 11.8C15.5855 13.1255 16.6601 14.2 17.9855 14.2ZM38.3855 21.6C39.711 21.6 40.7855 20.5255 40.7855 19.2C40.7855 17.8745 39.711 16.8 38.3855 16.8C37.0601 16.8 35.9855 17.8745 35.9855 19.2C35.9855 20.5255 37.0601 21.6 38.3855 21.6Z"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M71.7381 11.4027V11.2852C72.5997 10.8544 73.4613 10.1104 73.4613 8.64206C73.4613 6.52754 71.7183 5.25488 69.3105 5.25488C66.8433 5.25488 65.0811 6.60584 65.0811 8.68118C65.0811 10.0909 65.9037 10.8544 66.8043 11.2852V11.4027C65.8059 11.7551 64.6113 12.8124 64.6113 14.5744C64.6113 16.7086 66.3735 18.1966 69.2907 18.1966C72.2079 18.1966 73.9113 16.7086 73.9113 14.5744C73.9113 12.8124 72.7365 11.7747 71.7381 11.4027ZM69.2907 7.05614C70.2699 7.05614 70.9941 7.68266 70.9941 8.73992C70.9941 9.79718 70.2501 10.4238 69.2907 10.4238C68.3313 10.4238 67.5285 9.79718 67.5285 8.73992C67.5285 7.6631 68.2923 7.05614 69.2907 7.05614ZM69.2907 16.317C68.1549 16.317 67.2351 15.5926 67.2351 14.3591C67.2351 13.2431 67.9983 12.4012 69.2709 12.4012C70.5243 12.4012 71.2881 13.2235 71.2881 14.3983C71.2881 15.5926 70.4067 16.317 69.2907 16.317ZM52.7871 18.0004H55.2933V12.6945C55.2933 10.952 56.3505 10.1884 57.5448 10.1884C58.7195 10.1884 59.6398 10.9715 59.6398 12.577V18.0004H62.1456V12.068C62.1456 9.50314 60.6576 8.01514 58.328 8.01514C56.8596 8.01514 56.0372 8.60248 55.4498 9.36604H55.2933L55.0779 8.21092H52.7871V18.0004ZM78.9632 18.0004H76.457V8.21092H78.7478L78.9632 9.36604H79.1198C79.7072 8.60248 80.5298 8.01514 81.998 8.01514C84.3278 8.01514 85.8158 9.50314 85.8158 12.068V18.0004H83.3096V12.577C83.3096 10.9715 82.3898 10.1884 81.215 10.1884C80.0204 10.1884 78.9632 10.952 78.9632 12.6945V18.0004Z"></path>
                    </svg>
                  </span>
                  <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="TIDAL">
                    <span className="sr-only">
                      {"TIDAL"}
                    </span>
                    <svg className="h-4 shrink-0 w-auto" aria-hidden="true" fill="currentColor" version="1.0" viewBox="0 0 753.000000 100.000000">
                      <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)">
                        <path d="M120 875 l-125 -125 125 -125 125 -125 125 125 125 125 -125 125 -125 125 -125 -125z"></path>
                        <path d="M620 875 l-125 -125 125 -125 125 -125 -125 -125 -125 -125 125 -125 125 -125 125 125 125 125 -125 125 -125 125 125 125 125 125 -125 125 -125 125 -125 -125z"></path>
                        <path d="M1120 875 l-125 -125 125 -125 125 -125 125 125 125 125 -125 125 -125 125 -125 -125z"></path>
                        <path d="M2300 795 l0 -85 125 0 125 0 0 -345 0 -345 95 0 95 0 0 345 0 345 125 0 125 0 0 85 0 85 -345 0 -345 0 0 -85z"></path>
                        <path d="M3570 450 l0 -430 95 0 95 0 0 430 0 430 -95 0 -95 0 0 -430z"></path>
                        <path d="M4410 451 l0 -431 190 0 c104 0 213 5 242 11 234 49 377 254 341 488 -27 175 -132 289 -310 337 -39 10 -126 17 -260 21 l-203 6 0 -432z m442 226 c31 -15 68 -43 83 -63 79 -103 70 -260 -19 -348 -56 -56 -115 -76 -228 -76 l-88 0 0 261 0 261 98 -4 c81 -3 107 -8 154 -31z"></path>
                        <path d="M5912 833 c-55 -130 -332 -802 -332 -807 0 -3 46 -6 103 -6 l102 0 30 83 30 82 180 3 180 2 30 -82 30 -83 109 -3 c85 -2 107 0 103 10 -11 27 -290 707 -319 776 l-30 72 -98 0 -98 0 -20 -47z m182 -336 c31 -81 56 -150 56 -152 0 -3 -57 -5 -126 -5 -69 0 -124 4 -122 8 2 5 30 79 63 165 33 86 63 151 66 144 4 -7 32 -79 63 -160z"></path>
                        <path d="M7000 450 l0 -430 265 0 265 0 0 85 0 85 -170 0 -170 0 0 345 0 345 -95 0 -95 0 0 -430z"></path>
                      </g>
                    </svg>
                  </span>
                  <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="Codex">
                    <span className="sr-only">
                      {"Codex"}
                    </span>
                    <svg className="h-5 shrink-0 w-auto" aria-hidden="true" fill="currentColor" fillRule="evenodd" style={{flex: "none", lineHeight: "1"}} viewBox="0 0 91 24">
                      <path d="M79.915 14.964l-5.53-7.548h3.33l3.88 5.256 3.88-5.256h3.24l-5.5 7.486 5.683 7.792h-3.361l-4.003-5.5-4.064 5.5H74.2l5.715-7.73zM66.368 23c-1.345 0-2.567-.326-3.667-.978-1.08-.652-1.935-1.579-2.567-2.78-.631-1.203-.947-2.608-.947-4.217 0-1.59.316-2.974.947-4.156.652-1.202 1.518-2.129 2.597-2.78 1.08-.652 2.272-.978 3.575-.978 1.813 0 3.33.55 4.553 1.65 1.222 1.1 1.956 2.597 2.2 4.491.082.693.112 1.477.092 2.353H62.09c.06 1.548.489 2.76 1.283 3.636.815.876 1.793 1.314 2.933 1.314h.184c.855 0 1.599-.224 2.23-.672.632-.448 1.06-1.06 1.284-1.833h2.933a6.147 6.147 0 01-2.322 3.575C69.433 22.54 68.018 23 66.368 23zm3.819-9.687c-.082-1.16-.469-2.077-1.161-2.75-.693-.692-1.558-1.038-2.597-1.038h-.214c-.978 0-1.844.315-2.597.947-.734.611-1.212 1.558-1.437 2.841h8.006zM47.834 23c-1.324 0-2.516-.326-3.575-.978-1.039-.652-1.854-1.579-2.444-2.78-.591-1.202-.887-2.598-.887-4.187 0-1.588.306-2.984.917-4.186.611-1.201 1.446-2.128 2.506-2.78 1.08-.652 2.281-.978 3.605-.978 1.08 0 2.047.224 2.903.672.855.449 1.497 1.019 1.925 1.711V1.306h2.903v21.388h-2.903v-2.108c-.408.672-1.06 1.242-1.956 1.711-.896.469-1.894.703-2.994.703zm.58-2.475c.856 0 1.62-.234 2.292-.703.672-.468 1.192-1.11 1.558-1.925.387-.835.58-1.782.58-2.841 0-1.06-.193-1.997-.58-2.812-.366-.835-.886-1.487-1.558-1.955a3.911 3.911 0 00-2.292-.703h-.183c-1.304 0-2.363.51-3.178 1.528-.794 1.018-1.191 2.332-1.191 3.941 0 1.61.397 2.924 1.191 3.942.815 1.019 1.874 1.528 3.178 1.528h.183zM31.022 23c-1.406 0-2.679-.337-3.82-1.009a7.367 7.367 0 01-2.688-2.841c-.652-1.223-.978-2.587-.978-4.095 0-1.507.326-2.862.978-4.064.651-1.222 1.548-2.17 2.688-2.841 1.141-.693 2.414-1.04 3.82-1.04 1.405 0 2.668.347 3.789 1.04 1.14.672 2.037 1.62 2.688 2.841.652 1.202.978 2.557.978 4.064 0 1.508-.326 2.872-.977 4.095a7.367 7.367 0 01-2.69 2.841C33.69 22.663 32.428 23 31.023 23zm.06-2.476c.857 0 1.62-.224 2.293-.672.672-.468 1.201-1.11 1.589-1.925.386-.835.58-1.792.58-2.872 0-1.08-.194-2.027-.58-2.841-.388-.836-.917-1.477-1.59-1.925a3.911 3.911 0 00-2.291-.703H30.9c-1.304 0-2.373.51-3.209 1.528-.814.998-1.222 2.312-1.222 3.941 0 1.63.407 2.954 1.222 3.972.835.998 1.905 1.497 3.209 1.497h.183zM12.053 23c-2.037 0-3.82-.469-5.348-1.406-1.507-.957-2.668-2.271-3.483-3.941S2 14.098 2 12c0-2.098.407-3.982 1.222-5.653.835-1.67 2.017-2.974 3.545-3.91C8.294 1.478 10.057 1 12.053 1c1.609 0 3.055.316 4.338.947 1.304.611 2.363 1.477 3.178 2.597.815 1.1 1.304 2.374 1.467 3.82h-3.117c-.244-1.365-.876-2.465-1.894-3.3-1.019-.856-2.302-1.283-3.85-1.283h-.245c-1.385 0-2.597.356-3.636 1.069-1.039.713-1.833 1.69-2.383 2.933-.55 1.243-.825 2.648-.825 4.217 0 1.568.275 2.974.825 4.216.55 1.243 1.344 2.22 2.383 2.934 1.04.713 2.251 1.07 3.636 1.07h.245c1.548 0 2.831-.418 3.85-1.254 1.039-.855 1.68-1.976 1.925-3.36h3.086c-.184 1.446-.683 2.729-1.497 3.85-.795 1.12-1.844 1.996-3.148 2.627-1.303.611-2.75.917-4.338.917z"></path>
                    </svg>
                  </span>
                  <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="Model Context Protocol">
                    <span className="sr-only">
                      {"Model Context Protocol"}
                    </span>
                    <svg className="h-3.5 shrink-0 w-auto" aria-hidden="true" fill="currentColor" style={{flex: "none", lineHeight: "1"}} viewBox="0 0 335 24">
                      <path d="M2 .292h4.736l6.341 15.503h.25L19.67.292h4.736v21.394H20.69V6.99h-.198L14.59 21.624h-2.775L5.911 6.957h-.198v14.73H2V.291zM35.44 22c-1.565 0-2.92-.345-4.068-1.034-1.148-.69-2.038-1.654-2.67-2.894-.626-1.24-.939-2.688-.939-4.345 0-1.658.313-3.11.939-4.357.632-1.246 1.522-2.214 2.67-2.904 1.147-.69 2.503-1.034 4.068-1.034 1.564 0 2.92.345 4.068 1.034 1.147.69 2.033 1.658 2.66 2.904.632 1.247.949 2.7.949 4.357s-.317 3.105-.95 4.345c-.626 1.24-1.512 2.204-2.66 2.894C38.36 21.656 37.005 22 35.44 22zm.02-3.03c.849 0 1.558-.233 2.129-.7.57-.473.994-1.107 1.272-1.9.285-.795.427-1.68.427-2.654 0-.982-.142-1.87-.427-2.664-.278-.8-.703-1.438-1.272-1.911-.57-.474-1.28-.71-2.128-.71-.87 0-1.593.236-2.17.71-.57.473-.998 1.11-1.283 1.911-.278.794-.417 1.682-.417 2.664 0 .975.14 1.86.417 2.653.285.794.713 1.428 1.283 1.901.577.467 1.3.7 2.17.7zm16.806 2.998c-1.258 0-2.384-.323-3.379-.97-.994-.649-1.78-1.589-2.357-2.822-.577-1.232-.866-2.73-.866-4.491 0-1.783.292-3.287.876-4.513.591-1.233 1.387-2.163 2.389-2.79 1.001-.633 2.117-.95 3.348-.95.938 0 1.71.16 2.315.48.605.314 1.085.694 1.44 1.14.355.438.63.852.824 1.242h.156V.292h3.786v21.394h-3.713V19.16h-.23c-.194.39-.476.804-.844 1.243-.369.431-.855.8-1.46 1.107-.605.306-1.367.46-2.285.46zm1.054-3.102c.8 0 1.481-.216 2.044-.648.564-.438.991-1.048 1.283-1.828.292-.78.438-1.688.438-2.726s-.146-1.94-.438-2.706c-.285-.766-.71-1.361-1.272-1.786-.556-.425-1.242-.637-2.055-.637-.842 0-1.544.219-2.107.658-.563.438-.987 1.044-1.272 1.817-.286.774-.428 1.658-.428 2.654 0 1.003.142 1.897.428 2.685.291.78.72 1.396 1.282 1.849.57.445 1.27.668 2.097.668zM71.915 22c-1.607 0-2.994-.334-4.162-1.003-1.161-.676-2.055-1.63-2.68-2.862-.626-1.24-.94-2.699-.94-4.377 0-1.65.314-3.1.94-4.346.632-1.253 1.515-2.228 2.649-2.925 1.133-.703 2.465-1.055 3.994-1.055.988 0 1.92.16 2.796.48.883.314 1.662.801 2.336 1.463.682.662 1.217 1.504 1.606 2.528.39 1.017.585 2.229.585 3.635v1.16H65.907v-2.549h9.512c-.007-.724-.163-1.368-.47-1.932a3.416 3.416 0 00-1.282-1.348c-.543-.327-1.175-.491-1.899-.491-.771 0-1.45.188-2.033.564-.584.37-1.04.857-1.367 1.463a4.209 4.209 0 00-.49 1.974v2.225c0 .933.17 1.734.511 2.402.341.662.817 1.17 1.429 1.526.612.348 1.328.522 2.149.522a4.56 4.56 0 001.491-.23c.445-.16.831-.393 1.158-.7a2.92 2.92 0 00.74-1.138l3.526.397a5.505 5.505 0 01-1.273 2.444c-.618.69-1.41 1.226-2.377 1.609-.967.376-2.073.564-3.317.564zM86.009.292v21.394h-3.776V.293h3.776zm29.619 7.219h-3.901a4.862 4.862 0 00-.615-1.703 4.578 4.578 0 00-1.116-1.274 4.652 4.652 0 00-1.523-.784 5.934 5.934 0 00-1.826-.271c-1.161 0-2.19.292-3.087.877-.897.578-1.599 1.428-2.107 2.549-.507 1.114-.761 2.476-.761 4.084 0 1.637.254 3.016.761 4.137.515 1.114 1.217 1.957 2.107 2.528.897.564 1.923.846 3.077.846.64 0 1.238-.083 1.794-.25a4.914 4.914 0 001.513-.763 4.653 4.653 0 001.783-2.904l3.901.02a8.414 8.414 0 01-.949 2.863 8.436 8.436 0 01-1.888 2.361 8.709 8.709 0 01-2.733 1.588c-1.043.376-2.2.564-3.473.564-1.877 0-3.553-.435-5.027-1.306-1.475-.87-2.636-2.127-3.484-3.771-.849-1.643-1.272-3.614-1.272-5.913 0-2.305.427-4.276 1.282-5.912.855-1.644 2.02-2.9 3.494-3.771C103.052.436 104.721 0 106.585 0c1.189 0 2.295.167 3.317.501a8.499 8.499 0 012.733 1.473 7.85 7.85 0 011.971 2.361c.521.926.862 1.985 1.022 3.176zM125.993 22c-1.564 0-2.92-.345-4.068-1.034-1.147-.69-2.037-1.654-2.67-2.894-.626-1.24-.938-2.688-.938-4.345 0-1.658.312-3.11.938-4.357.633-1.246 1.523-2.214 2.67-2.904 1.148-.69 2.504-1.034 4.068-1.034 1.565 0 2.921.345 4.068 1.034 1.147.69 2.034 1.658 2.66 2.904.632 1.247.949 2.7.949 4.357s-.317 3.105-.949 4.345c-.626 1.24-1.513 2.204-2.66 2.894-1.147.69-2.503 1.034-4.068 1.034zm.021-3.03c.848 0 1.558-.233 2.128-.7.57-.473.994-1.107 1.272-1.9.285-.795.428-1.68.428-2.654 0-.982-.143-1.87-.428-2.664-.278-.8-.702-1.438-1.272-1.911-.57-.474-1.28-.71-2.128-.71-.869 0-1.592.236-2.169.71-.571.473-.998 1.11-1.283 1.911-.278.794-.418 1.682-.418 2.664 0 .975.14 1.86.418 2.653.285.794.712 1.428 1.283 1.901.577.467 1.3.7 2.169.7zm14.637-6.685v9.401h-3.776V5.641h3.608v2.726h.188a4.585 4.585 0 011.763-2.141c.813-.53 1.819-.794 3.015-.794 1.105 0 2.068.237 2.889.71.827.474 1.467 1.16 1.919 2.058.459.899.685 1.989.678 3.27v10.216h-3.776v-9.631c0-1.072-.278-1.912-.835-2.518-.549-.605-1.31-.908-2.284-.908-.66 0-1.248.146-1.762.438-.508.286-.908.7-1.2 1.243-.285.544-.427 1.202-.427 1.975zm22.122-6.644v2.925h-9.21V5.641h9.21zm-6.936-3.844h3.776V16.86c0 .509.076.899.229 1.17.16.265.369.446.626.544.257.097.542.146.855.146a3.7 3.7 0 00.647-.052c.202-.035.355-.067.459-.094l.636 2.956c-.201.07-.49.146-.865.23a7.124 7.124 0 01-1.356.146c-.946.028-1.798-.115-2.556-.428a3.973 3.973 0 01-1.804-1.484c-.438-.668-.654-1.504-.647-2.507V1.797zM172.851 22c-1.606 0-2.993-.334-4.161-1.003-1.162-.676-2.055-1.63-2.681-2.862-.626-1.24-.939-2.699-.939-4.377 0-1.65.313-3.1.939-4.346.633-1.253 1.516-2.228 2.649-2.925 1.134-.703 2.465-1.055 3.995-1.055.988 0 1.919.16 2.796.48a6.32 6.32 0 012.336 1.463c.681.662 1.217 1.504 1.606 2.528.39 1.017.584 2.229.584 3.635v1.16h-13.131v-2.549h9.512c-.007-.724-.163-1.368-.469-1.932a3.418 3.418 0 00-1.283-1.348c-.542-.327-1.175-.491-1.898-.491-.772 0-1.45.188-2.034.564a3.88 3.88 0 00-1.367 1.463 4.212 4.212 0 00-.49 1.974v2.225c0 .933.17 1.734.511 2.402.341.662.817 1.17 1.429 1.526.612.348 1.328.522 2.148.522.55 0 1.047-.077 1.492-.23.445-.16.831-.393 1.158-.7.327-.306.574-.686.74-1.138l3.526.397a5.52 5.52 0 01-1.272 2.444c-.619.69-1.412 1.226-2.379 1.609-.966.376-2.072.564-3.317.564zm13.062-16.359l3.233 5.923 3.286-5.923h3.995l-4.83 8.023 4.913 8.022h-3.974l-3.39-5.776-3.358 5.776h-4.006l4.882-8.022-4.757-8.023h4.006zm21.434 0v2.925h-9.21V5.641h9.21zm-6.936-3.844h3.776V16.86c0 .509.076.899.229 1.17.16.265.369.446.626.544a2.4 2.4 0 00.855.146 3.7 3.7 0 00.647-.052c.202-.035.355-.067.459-.094l.636 2.956c-.201.07-.49.146-.866.23-.368.083-.82.132-1.356.146-.945.028-1.797-.115-2.555-.428a3.973 3.973 0 01-1.804-1.484c-.438-.668-.654-1.504-.647-2.507V1.797zm17.546 19.89V.291h8.011c1.641 0 3.018.307 4.13.92 1.12.613 1.965 1.455 2.535 2.528.577 1.065.866 2.277.866 3.635 0 1.372-.289 2.59-.866 3.656-.577 1.066-1.429 1.905-2.555 2.518-1.127.606-2.514.909-4.162.909h-5.309v-3.186h4.787c.96 0 1.745-.168 2.357-.502.612-.334 1.064-.794 1.356-1.379.3-.585.449-1.257.449-2.016 0-.759-.149-1.428-.449-2.006-.292-.578-.747-1.027-1.366-1.347-.612-.327-1.401-.491-2.368-.491h-3.546v18.155h-3.87zm18.736 0V5.64h3.66v2.674h.169c.29-.926.792-1.64 1.502-2.141.716-.509 1.533-.763 2.451-.763.208 0 .44.01.697.032.266.013.484.038.658.073v3.478c-.159-.055-.413-.104-.762-.146a6.967 6.967 0 00-.991-.073c-.689 0-1.307.15-1.857.45-.542.292-.97.699-1.282 1.221-.312.523-.468 1.125-.468 1.808v9.432h-3.777zm17.973.313c-1.563 0-2.919-.345-4.066-1.034-1.147-.69-2.038-1.654-2.671-2.894-.627-1.24-.939-2.688-.939-4.345 0-1.658.312-3.11.939-4.357.633-1.246 1.524-2.214 2.671-2.904 1.147-.69 2.503-1.034 4.066-1.034 1.566 0 2.922.345 4.069 1.034 1.148.69 2.035 1.658 2.659 2.904.633 1.247.948 2.7.948 4.357s-.315 3.105-.948 4.345c-.624 1.24-1.511 2.204-2.659 2.894-1.147.69-2.503 1.034-4.069 1.034zm.021-3.03c.848 0 1.558-.233 2.13-.7.569-.473.994-1.107 1.27-1.9.287-.795.428-1.68.428-2.654 0-.982-.141-1.87-.428-2.664-.276-.8-.701-1.438-1.27-1.911-.572-.474-1.282-.71-2.13-.71-.868 0-1.591.236-2.169.71-.569.473-.997 1.11-1.282 1.911-.278.794-.419 1.682-.419 2.664 0 .975.141 1.86.419 2.653.285.794.713 1.428 1.282 1.901.578.467 1.301.7 2.169.7zM273.55 5.641v2.925h-9.213V5.641h9.213zm-6.936-3.844h3.775V16.86c0 .509.077.899.23 1.17.159.265.367.446.624.544.257.097.541.146.856.146.236 0 .45-.018.646-.052.202-.035.355-.067.459-.094l.636 2.956c-.202.07-.489.146-.866.23-.367.083-.82.132-1.355.146-.945.028-1.799-.115-2.555-.428a3.97 3.97 0 01-1.805-1.484c-.437-.668-.655-1.504-.645-2.507V1.797zM283.524 22c-1.567 0-2.922-.345-4.069-1.034-1.148-.69-2.038-1.654-2.671-2.894-.625-1.24-.94-2.688-.94-4.345 0-1.658.315-3.11.94-4.357.633-1.246 1.523-2.214 2.671-2.904 1.147-.69 2.502-1.034 4.069-1.034 1.563 0 2.919.345 4.066 1.034 1.147.69 2.035 1.658 2.659 2.904.633 1.247.951 2.7.951 4.357s-.318 3.105-.951 4.345c-.624 1.24-1.512 2.204-2.659 2.894-1.147.69-2.503 1.034-4.066 1.034zm.018-3.03c.851 0 1.557-.233 2.13-.7.569-.473.994-1.107 1.272-1.9.285-.795.429-1.68.429-2.654 0-.982-.144-1.87-.429-2.664-.278-.8-.703-1.438-1.272-1.911-.573-.474-1.279-.71-2.13-.71-.869 0-1.591.236-2.169.71-.569.473-.997 1.11-1.282 1.911-.278.794-.416 1.682-.416 2.664 0 .975.138 1.86.416 2.653.285.794.713 1.428 1.282 1.901.578.467 1.3.7 2.169.7zm17.85 3.03c-1.6 0-2.971-.352-4.119-1.055-1.141-.704-2.022-1.675-2.64-2.915-.612-1.246-.918-2.681-.918-4.304 0-1.629.312-3.067.94-4.314.624-1.253 1.508-2.228 2.649-2.925 1.147-.703 2.503-1.055 4.066-1.055 1.301 0 2.454.24 3.454.72 1.007.474 1.812 1.146 2.408 2.017.6.864.94 1.873 1.022 3.03h-3.607a3.477 3.477 0 00-1.043-1.933c-.542-.522-1.27-.784-2.182-.784-.771 0-1.447.21-2.031.627-.585.411-1.041 1.003-1.368 1.776-.318.773-.48 1.7-.48 2.779 0 1.093.162 2.034.48 2.82.321.78.768 1.383 1.346 1.807.585.418 1.27.627 2.053.627.557 0 1.056-.104 1.493-.313a3.018 3.018 0 001.117-.93c.297-.404.502-.895.615-1.473h3.607c-.088 1.135-.422 2.142-1 3.02-.578.87-1.362 1.552-2.356 2.047-.994.487-2.163.731-3.506.731zm16.953 0c-1.567 0-2.922-.345-4.07-1.034-1.147-.69-2.037-1.654-2.667-2.894-.628-1.24-.94-2.688-.94-4.345 0-1.658.312-3.11.94-4.357.63-1.246 1.52-2.214 2.667-2.904 1.148-.69 2.503-1.034 4.07-1.034 1.563 0 2.919.345 4.066 1.034 1.147.69 2.034 1.658 2.662 2.904.63 1.247.948 2.7.948 4.357s-.318 3.105-.948 4.345c-.628 1.24-1.515 2.204-2.662 2.894S319.908 22 318.345 22zm.021-3.03c.848 0 1.557-.233 2.126-.7.57-.473.995-1.107 1.273-1.9.285-.795.429-1.68.429-2.654 0-.982-.144-1.87-.429-2.664-.278-.8-.703-1.438-1.273-1.911-.569-.474-1.278-.71-2.126-.71-.869 0-1.594.236-2.169.71-.572.473-1.001 1.11-1.285 1.911-.279.794-.416 1.682-.416 2.664 0 .975.137 1.86.416 2.653.284.794.713 1.428 1.285 1.901.575.467 1.3.7 2.169.7zM333 .292v21.394h-3.776V.293H333z"></path>
                    </svg>
                  </span>
                </div>
                <div aria-hidden="true">
                  <div className="[animation-direction:reverse] animate-marquee flex flex-row gap-(--marquee-gap) group-hover:[animation-play-state:paused] shrink-0">
                    <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="n8n">
                      <span className="sr-only">
                        {"n8n"}
                      </span>
                      <svg className="h-5 shrink-0 w-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 87 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M47.9855 4.8C47.9855 7.45098 45.8365 9.6 43.1855 9.6C40.949 9.6 39.0696 8.0703 38.5368 6H31.8352C30.662 6 29.6607 6.84822 29.4678 8.00544L29.2706 9.18912C29.0832 10.313 28.5147 11.2911 27.7108 12C28.5147 12.7089 29.0832 13.687 29.2706 14.8109L29.4678 15.9946C29.6607 17.1518 30.662 18 31.8352 18H33.7368C34.2696 15.9297 36.149 14.4 38.3855 14.4C41.0365 14.4 43.1855 16.549 43.1855 19.2C43.1855 21.851 41.0365 24 38.3855 24C36.149 24 34.2696 22.4703 33.7368 20.4H31.8352C29.4888 20.4 27.4863 18.7036 27.1005 16.3891L26.9032 15.2054C26.7104 14.0482 25.7091 13.2 24.5359 13.2H22.5782C21.979 15.1681 20.1495 16.6 17.9855 16.6C15.8216 16.6 13.9921 15.1681 13.3929 13.2H10.5782C9.97901 15.1681 8.14949 16.6 5.98554 16.6C3.33458 16.6 1.18555 14.4509 1.18555 11.8C1.18555 9.14904 3.33458 7.00002 5.98554 7.00002C8.29361 7.00002 10.2212 8.62902 10.6812 10.8H13.2899C13.7499 8.62902 15.6775 7.00002 17.9855 7.00002C20.2936 7.00002 22.2212 8.62902 22.6812 10.8H24.5359C25.7091 10.8 26.7104 9.95178 26.9032 8.79456L27.1005 7.61088C27.4863 5.29638 29.4888 3.6 31.8352 3.6H38.5368C39.0696 1.52973 40.949 0 43.1855 0C45.8365 0 47.9855 2.14903 47.9855 4.8ZM45.5855 4.8C45.5855 6.12546 44.511 7.2 43.1855 7.2C41.8601 7.2 40.7855 6.12546 40.7855 4.8C40.7855 3.47452 41.8601 2.4 43.1855 2.4C44.511 2.4 45.5855 3.47452 45.5855 4.8ZM5.98554 14.2C7.31105 14.2 8.38553 13.1255 8.38553 11.8C8.38553 10.4745 7.31105 9.40002 5.98554 9.40002C4.66006 9.40002 3.58554 10.4745 3.58554 11.8C3.58554 13.1255 4.66006 14.2 5.98554 14.2ZM17.9855 14.2C19.311 14.2 20.3855 13.1255 20.3855 11.8C20.3855 10.4745 19.311 9.40002 17.9855 9.40002C16.6601 9.40002 15.5855 10.4745 15.5855 11.8C15.5855 13.1255 16.6601 14.2 17.9855 14.2ZM38.3855 21.6C39.711 21.6 40.7855 20.5255 40.7855 19.2C40.7855 17.8745 39.711 16.8 38.3855 16.8C37.0601 16.8 35.9855 17.8745 35.9855 19.2C35.9855 20.5255 37.0601 21.6 38.3855 21.6Z"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M71.7381 11.4027V11.2852C72.5997 10.8544 73.4613 10.1104 73.4613 8.64206C73.4613 6.52754 71.7183 5.25488 69.3105 5.25488C66.8433 5.25488 65.0811 6.60584 65.0811 8.68118C65.0811 10.0909 65.9037 10.8544 66.8043 11.2852V11.4027C65.8059 11.7551 64.6113 12.8124 64.6113 14.5744C64.6113 16.7086 66.3735 18.1966 69.2907 18.1966C72.2079 18.1966 73.9113 16.7086 73.9113 14.5744C73.9113 12.8124 72.7365 11.7747 71.7381 11.4027ZM69.2907 7.05614C70.2699 7.05614 70.9941 7.68266 70.9941 8.73992C70.9941 9.79718 70.2501 10.4238 69.2907 10.4238C68.3313 10.4238 67.5285 9.79718 67.5285 8.73992C67.5285 7.6631 68.2923 7.05614 69.2907 7.05614ZM69.2907 16.317C68.1549 16.317 67.2351 15.5926 67.2351 14.3591C67.2351 13.2431 67.9983 12.4012 69.2709 12.4012C70.5243 12.4012 71.2881 13.2235 71.2881 14.3983C71.2881 15.5926 70.4067 16.317 69.2907 16.317ZM52.7871 18.0004H55.2933V12.6945C55.2933 10.952 56.3505 10.1884 57.5448 10.1884C58.7195 10.1884 59.6398 10.9715 59.6398 12.577V18.0004H62.1456V12.068C62.1456 9.50314 60.6576 8.01514 58.328 8.01514C56.8596 8.01514 56.0372 8.60248 55.4498 9.36604H55.2933L55.0779 8.21092H52.7871V18.0004ZM78.9632 18.0004H76.457V8.21092H78.7478L78.9632 9.36604H79.1198C79.7072 8.60248 80.5298 8.01514 81.998 8.01514C84.3278 8.01514 85.8158 9.50314 85.8158 12.068V18.0004H83.3096V12.577C83.3096 10.9715 82.3898 10.1884 81.215 10.1884C80.0204 10.1884 78.9632 10.952 78.9632 12.6945V18.0004Z"></path>
                      </svg>
                    </span>
                    <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="TIDAL">
                      <span className="sr-only">
                        {"TIDAL"}
                      </span>
                      <svg className="h-4 shrink-0 w-auto" aria-hidden="true" fill="currentColor" version="1.0" viewBox="0 0 753.000000 100.000000">
                        <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)">
                          <path d="M120 875 l-125 -125 125 -125 125 -125 125 125 125 125 -125 125 -125 125 -125 -125z"></path>
                          <path d="M620 875 l-125 -125 125 -125 125 -125 -125 -125 -125 -125 125 -125 125 -125 125 125 125 125 -125 125 -125 125 125 125 125 125 -125 125 -125 125 -125 -125z"></path>
                          <path d="M1120 875 l-125 -125 125 -125 125 -125 125 125 125 125 -125 125 -125 125 -125 -125z"></path>
                          <path d="M2300 795 l0 -85 125 0 125 0 0 -345 0 -345 95 0 95 0 0 345 0 345 125 0 125 0 0 85 0 85 -345 0 -345 0 0 -85z"></path>
                          <path d="M3570 450 l0 -430 95 0 95 0 0 430 0 430 -95 0 -95 0 0 -430z"></path>
                          <path d="M4410 451 l0 -431 190 0 c104 0 213 5 242 11 234 49 377 254 341 488 -27 175 -132 289 -310 337 -39 10 -126 17 -260 21 l-203 6 0 -432z m442 226 c31 -15 68 -43 83 -63 79 -103 70 -260 -19 -348 -56 -56 -115 -76 -228 -76 l-88 0 0 261 0 261 98 -4 c81 -3 107 -8 154 -31z"></path>
                          <path d="M5912 833 c-55 -130 -332 -802 -332 -807 0 -3 46 -6 103 -6 l102 0 30 83 30 82 180 3 180 2 30 -82 30 -83 109 -3 c85 -2 107 0 103 10 -11 27 -290 707 -319 776 l-30 72 -98 0 -98 0 -20 -47z m182 -336 c31 -81 56 -150 56 -152 0 -3 -57 -5 -126 -5 -69 0 -124 4 -122 8 2 5 30 79 63 165 33 86 63 151 66 144 4 -7 32 -79 63 -160z"></path>
                          <path d="M7000 450 l0 -430 265 0 265 0 0 85 0 85 -170 0 -170 0 0 345 0 345 -95 0 -95 0 0 -430z"></path>
                        </g>
                      </svg>
                    </span>
                    <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="Codex">
                      <span className="sr-only">
                        {"Codex"}
                      </span>
                      <svg className="h-5 shrink-0 w-auto" aria-hidden="true" fill="currentColor" fillRule="evenodd" style={{flex: "none", lineHeight: "1"}} viewBox="0 0 91 24">
                        <path d="M79.915 14.964l-5.53-7.548h3.33l3.88 5.256 3.88-5.256h3.24l-5.5 7.486 5.683 7.792h-3.361l-4.003-5.5-4.064 5.5H74.2l5.715-7.73zM66.368 23c-1.345 0-2.567-.326-3.667-.978-1.08-.652-1.935-1.579-2.567-2.78-.631-1.203-.947-2.608-.947-4.217 0-1.59.316-2.974.947-4.156.652-1.202 1.518-2.129 2.597-2.78 1.08-.652 2.272-.978 3.575-.978 1.813 0 3.33.55 4.553 1.65 1.222 1.1 1.956 2.597 2.2 4.491.082.693.112 1.477.092 2.353H62.09c.06 1.548.489 2.76 1.283 3.636.815.876 1.793 1.314 2.933 1.314h.184c.855 0 1.599-.224 2.23-.672.632-.448 1.06-1.06 1.284-1.833h2.933a6.147 6.147 0 01-2.322 3.575C69.433 22.54 68.018 23 66.368 23zm3.819-9.687c-.082-1.16-.469-2.077-1.161-2.75-.693-.692-1.558-1.038-2.597-1.038h-.214c-.978 0-1.844.315-2.597.947-.734.611-1.212 1.558-1.437 2.841h8.006zM47.834 23c-1.324 0-2.516-.326-3.575-.978-1.039-.652-1.854-1.579-2.444-2.78-.591-1.202-.887-2.598-.887-4.187 0-1.588.306-2.984.917-4.186.611-1.201 1.446-2.128 2.506-2.78 1.08-.652 2.281-.978 3.605-.978 1.08 0 2.047.224 2.903.672.855.449 1.497 1.019 1.925 1.711V1.306h2.903v21.388h-2.903v-2.108c-.408.672-1.06 1.242-1.956 1.711-.896.469-1.894.703-2.994.703zm.58-2.475c.856 0 1.62-.234 2.292-.703.672-.468 1.192-1.11 1.558-1.925.387-.835.58-1.782.58-2.841 0-1.06-.193-1.997-.58-2.812-.366-.835-.886-1.487-1.558-1.955a3.911 3.911 0 00-2.292-.703h-.183c-1.304 0-2.363.51-3.178 1.528-.794 1.018-1.191 2.332-1.191 3.941 0 1.61.397 2.924 1.191 3.942.815 1.019 1.874 1.528 3.178 1.528h.183zM31.022 23c-1.406 0-2.679-.337-3.82-1.009a7.367 7.367 0 01-2.688-2.841c-.652-1.223-.978-2.587-.978-4.095 0-1.507.326-2.862.978-4.064.651-1.222 1.548-2.17 2.688-2.841 1.141-.693 2.414-1.04 3.82-1.04 1.405 0 2.668.347 3.789 1.04 1.14.672 2.037 1.62 2.688 2.841.652 1.202.978 2.557.978 4.064 0 1.508-.326 2.872-.977 4.095a7.367 7.367 0 01-2.69 2.841C33.69 22.663 32.428 23 31.023 23zm.06-2.476c.857 0 1.62-.224 2.293-.672.672-.468 1.201-1.11 1.589-1.925.386-.835.58-1.792.58-2.872 0-1.08-.194-2.027-.58-2.841-.388-.836-.917-1.477-1.59-1.925a3.911 3.911 0 00-2.291-.703H30.9c-1.304 0-2.373.51-3.209 1.528-.814.998-1.222 2.312-1.222 3.941 0 1.63.407 2.954 1.222 3.972.835.998 1.905 1.497 3.209 1.497h.183zM12.053 23c-2.037 0-3.82-.469-5.348-1.406-1.507-.957-2.668-2.271-3.483-3.941S2 14.098 2 12c0-2.098.407-3.982 1.222-5.653.835-1.67 2.017-2.974 3.545-3.91C8.294 1.478 10.057 1 12.053 1c1.609 0 3.055.316 4.338.947 1.304.611 2.363 1.477 3.178 2.597.815 1.1 1.304 2.374 1.467 3.82h-3.117c-.244-1.365-.876-2.465-1.894-3.3-1.019-.856-2.302-1.283-3.85-1.283h-.245c-1.385 0-2.597.356-3.636 1.069-1.039.713-1.833 1.69-2.383 2.933-.55 1.243-.825 2.648-.825 4.217 0 1.568.275 2.974.825 4.216.55 1.243 1.344 2.22 2.383 2.934 1.04.713 2.251 1.07 3.636 1.07h.245c1.548 0 2.831-.418 3.85-1.254 1.039-.855 1.68-1.976 1.925-3.36h3.086c-.184 1.446-.683 2.729-1.497 3.85-.795 1.12-1.844 1.996-3.148 2.627-1.303.611-2.75.917-4.338.917z"></path>
                      </svg>
                    </span>
                    <span className="duration-200 hover:text-foreground inline-flex items-center text-muted-foreground transition-colors whitespace-nowrap" title="Model Context Protocol">
                      <span className="sr-only">
                        {"Model Context Protocol"}
                      </span>
                      <svg className="h-3.5 shrink-0 w-auto" aria-hidden="true" fill="currentColor" style={{flex: "none", lineHeight: "1"}} viewBox="0 0 335 24">
                        <path d="M2 .292h4.736l6.341 15.503h.25L19.67.292h4.736v21.394H20.69V6.99h-.198L14.59 21.624h-2.775L5.911 6.957h-.198v14.73H2V.291zM35.44 22c-1.565 0-2.92-.345-4.068-1.034-1.148-.69-2.038-1.654-2.67-2.894-.626-1.24-.939-2.688-.939-4.345 0-1.658.313-3.11.939-4.357.632-1.246 1.522-2.214 2.67-2.904 1.147-.69 2.503-1.034 4.068-1.034 1.564 0 2.92.345 4.068 1.034 1.147.69 2.033 1.658 2.66 2.904.632 1.247.949 2.7.949 4.357s-.317 3.105-.95 4.345c-.626 1.24-1.512 2.204-2.66 2.894C38.36 21.656 37.005 22 35.44 22zm.02-3.03c.849 0 1.558-.233 2.129-.7.57-.473.994-1.107 1.272-1.9.285-.795.427-1.68.427-2.654 0-.982-.142-1.87-.427-2.664-.278-.8-.703-1.438-1.272-1.911-.57-.474-1.28-.71-2.128-.71-.87 0-1.593.236-2.17.71-.57.473-.998 1.11-1.283 1.911-.278.794-.417 1.682-.417 2.664 0 .975.14 1.86.417 2.653.285.794.713 1.428 1.283 1.901.577.467 1.3.7 2.17.7zm16.806 2.998c-1.258 0-2.384-.323-3.379-.97-.994-.649-1.78-1.589-2.357-2.822-.577-1.232-.866-2.73-.866-4.491 0-1.783.292-3.287.876-4.513.591-1.233 1.387-2.163 2.389-2.79 1.001-.633 2.117-.95 3.348-.95.938 0 1.71.16 2.315.48.605.314 1.085.694 1.44 1.14.355.438.63.852.824 1.242h.156V.292h3.786v21.394h-3.713V19.16h-.23c-.194.39-.476.804-.844 1.243-.369.431-.855.8-1.46 1.107-.605.306-1.367.46-2.285.46zm1.054-3.102c.8 0 1.481-.216 2.044-.648.564-.438.991-1.048 1.283-1.828.292-.78.438-1.688.438-2.726s-.146-1.94-.438-2.706c-.285-.766-.71-1.361-1.272-1.786-.556-.425-1.242-.637-2.055-.637-.842 0-1.544.219-2.107.658-.563.438-.987 1.044-1.272 1.817-.286.774-.428 1.658-.428 2.654 0 1.003.142 1.897.428 2.685.291.78.72 1.396 1.282 1.849.57.445 1.27.668 2.097.668zM71.915 22c-1.607 0-2.994-.334-4.162-1.003-1.161-.676-2.055-1.63-2.68-2.862-.626-1.24-.94-2.699-.94-4.377 0-1.65.314-3.1.94-4.346.632-1.253 1.515-2.228 2.649-2.925 1.133-.703 2.465-1.055 3.994-1.055.988 0 1.92.16 2.796.48.883.314 1.662.801 2.336 1.463.682.662 1.217 1.504 1.606 2.528.39 1.017.585 2.229.585 3.635v1.16H65.907v-2.549h9.512c-.007-.724-.163-1.368-.47-1.932a3.416 3.416 0 00-1.282-1.348c-.543-.327-1.175-.491-1.899-.491-.771 0-1.45.188-2.033.564-.584.37-1.04.857-1.367 1.463a4.209 4.209 0 00-.49 1.974v2.225c0 .933.17 1.734.511 2.402.341.662.817 1.17 1.429 1.526.612.348 1.328.522 2.149.522a4.56 4.56 0 001.491-.23c.445-.16.831-.393 1.158-.7a2.92 2.92 0 00.74-1.138l3.526.397a5.505 5.505 0 01-1.273 2.444c-.618.69-1.41 1.226-2.377 1.609-.967.376-2.073.564-3.317.564zM86.009.292v21.394h-3.776V.293h3.776zm29.619 7.219h-3.901a4.862 4.862 0 00-.615-1.703 4.578 4.578 0 00-1.116-1.274 4.652 4.652 0 00-1.523-.784 5.934 5.934 0 00-1.826-.271c-1.161 0-2.19.292-3.087.877-.897.578-1.599 1.428-2.107 2.549-.507 1.114-.761 2.476-.761 4.084 0 1.637.254 3.016.761 4.137.515 1.114 1.217 1.957 2.107 2.528.897.564 1.923.846 3.077.846.64 0 1.238-.083 1.794-.25a4.914 4.914 0 001.513-.763 4.653 4.653 0 001.783-2.904l3.901.02a8.414 8.414 0 01-.949 2.863 8.436 8.436 0 01-1.888 2.361 8.709 8.709 0 01-2.733 1.588c-1.043.376-2.2.564-3.473.564-1.877 0-3.553-.435-5.027-1.306-1.475-.87-2.636-2.127-3.484-3.771-.849-1.643-1.272-3.614-1.272-5.913 0-2.305.427-4.276 1.282-5.912.855-1.644 2.02-2.9 3.494-3.771C103.052.436 104.721 0 106.585 0c1.189 0 2.295.167 3.317.501a8.499 8.499 0 012.733 1.473 7.85 7.85 0 011.971 2.361c.521.926.862 1.985 1.022 3.176zM125.993 22c-1.564 0-2.92-.345-4.068-1.034-1.147-.69-2.037-1.654-2.67-2.894-.626-1.24-.938-2.688-.938-4.345 0-1.658.312-3.11.938-4.357.633-1.246 1.523-2.214 2.67-2.904 1.148-.69 2.504-1.034 4.068-1.034 1.565 0 2.921.345 4.068 1.034 1.147.69 2.034 1.658 2.66 2.904.632 1.247.949 2.7.949 4.357s-.317 3.105-.949 4.345c-.626 1.24-1.513 2.204-2.66 2.894-1.147.69-2.503 1.034-4.068 1.034zm.021-3.03c.848 0 1.558-.233 2.128-.7.57-.473.994-1.107 1.272-1.9.285-.795.428-1.68.428-2.654 0-.982-.143-1.87-.428-2.664-.278-.8-.702-1.438-1.272-1.911-.57-.474-1.28-.71-2.128-.71-.869 0-1.592.236-2.169.71-.571.473-.998 1.11-1.283 1.911-.278.794-.418 1.682-.418 2.664 0 .975.14 1.86.418 2.653.285.794.712 1.428 1.283 1.901.577.467 1.3.7 2.169.7zm14.637-6.685v9.401h-3.776V5.641h3.608v2.726h.188a4.585 4.585 0 011.763-2.141c.813-.53 1.819-.794 3.015-.794 1.105 0 2.068.237 2.889.71.827.474 1.467 1.16 1.919 2.058.459.899.685 1.989.678 3.27v10.216h-3.776v-9.631c0-1.072-.278-1.912-.835-2.518-.549-.605-1.31-.908-2.284-.908-.66 0-1.248.146-1.762.438-.508.286-.908.7-1.2 1.243-.285.544-.427 1.202-.427 1.975zm22.122-6.644v2.925h-9.21V5.641h9.21zm-6.936-3.844h3.776V16.86c0 .509.076.899.229 1.17.16.265.369.446.626.544.257.097.542.146.855.146a3.7 3.7 0 00.647-.052c.202-.035.355-.067.459-.094l.636 2.956c-.201.07-.49.146-.865.23a7.124 7.124 0 01-1.356.146c-.946.028-1.798-.115-2.556-.428a3.973 3.973 0 01-1.804-1.484c-.438-.668-.654-1.504-.647-2.507V1.797zM172.851 22c-1.606 0-2.993-.334-4.161-1.003-1.162-.676-2.055-1.63-2.681-2.862-.626-1.24-.939-2.699-.939-4.377 0-1.65.313-3.1.939-4.346.633-1.253 1.516-2.228 2.649-2.925 1.134-.703 2.465-1.055 3.995-1.055.988 0 1.919.16 2.796.48a6.32 6.32 0 012.336 1.463c.681.662 1.217 1.504 1.606 2.528.39 1.017.584 2.229.584 3.635v1.16h-13.131v-2.549h9.512c-.007-.724-.163-1.368-.469-1.932a3.418 3.418 0 00-1.283-1.348c-.542-.327-1.175-.491-1.898-.491-.772 0-1.45.188-2.034.564a3.88 3.88 0 00-1.367 1.463 4.212 4.212 0 00-.49 1.974v2.225c0 .933.17 1.734.511 2.402.341.662.817 1.17 1.429 1.526.612.348 1.328.522 2.148.522.55 0 1.047-.077 1.492-.23.445-.16.831-.393 1.158-.7.327-.306.574-.686.74-1.138l3.526.397a5.52 5.52 0 01-1.272 2.444c-.619.69-1.412 1.226-2.379 1.609-.966.376-2.072.564-3.317.564zm13.062-16.359l3.233 5.923 3.286-5.923h3.995l-4.83 8.023 4.913 8.022h-3.974l-3.39-5.776-3.358 5.776h-4.006l4.882-8.022-4.757-8.023h4.006zm21.434 0v2.925h-9.21V5.641h9.21zm-6.936-3.844h3.776V16.86c0 .509.076.899.229 1.17.16.265.369.446.626.544a2.4 2.4 0 00.855.146 3.7 3.7 0 00.647-.052c.202-.035.355-.067.459-.094l.636 2.956c-.201.07-.49.146-.866.23-.368.083-.82.132-1.356.146-.945.028-1.797-.115-2.555-.428a3.973 3.973 0 01-1.804-1.484c-.438-.668-.654-1.504-.647-2.507V1.797zm17.546 19.89V.291h8.011c1.641 0 3.018.307 4.13.92 1.12.613 1.965 1.455 2.535 2.528.577 1.065.866 2.277.866 3.635 0 1.372-.289 2.59-.866 3.656-.577 1.066-1.429 1.905-2.555 2.518-1.127.606-2.514.909-4.162.909h-5.309v-3.186h4.787c.96 0 1.745-.168 2.357-.502.612-.334 1.064-.794 1.356-1.379.3-.585.449-1.257.449-2.016 0-.759-.149-1.428-.449-2.006-.292-.578-.747-1.027-1.366-1.347-.612-.327-1.401-.491-2.368-.491h-3.546v18.155h-3.87zm18.736 0V5.64h3.66v2.674h.169c.29-.926.792-1.64 1.502-2.141.716-.509 1.533-.763 2.451-.763.208 0 .44.01.697.032.266.013.484.038.658.073v3.478c-.159-.055-.413-.104-.762-.146a6.967 6.967 0 00-.991-.073c-.689 0-1.307.15-1.857.45-.542.292-.97.699-1.282 1.221-.312.523-.468 1.125-.468 1.808v9.432h-3.777zm17.973.313c-1.563 0-2.919-.345-4.066-1.034-1.147-.69-2.038-1.654-2.671-2.894-.627-1.24-.939-2.688-.939-4.345 0-1.658.312-3.11.939-4.357.633-1.246 1.524-2.214 2.671-2.904 1.147-.69 2.503-1.034 4.066-1.034 1.566 0 2.922.345 4.069 1.034 1.148.69 2.035 1.658 2.659 2.904.633 1.247.948 2.7.948 4.357s-.315 3.105-.948 4.345c-.624 1.24-1.511 2.204-2.659 2.894-1.147.69-2.503 1.034-4.069 1.034zm.021-3.03c.848 0 1.558-.233 2.13-.7.569-.473.994-1.107 1.27-1.9.287-.795.428-1.68.428-2.654 0-.982-.141-1.87-.428-2.664-.276-.8-.701-1.438-1.27-1.911-.572-.474-1.282-.71-2.13-.71-.868 0-1.591.236-2.169.71-.569.473-.997 1.11-1.282 1.911-.278.794-.419 1.682-.419 2.664 0 .975.141 1.86.419 2.653.285.794.713 1.428 1.282 1.901.578.467 1.301.7 2.169.7zM273.55 5.641v2.925h-9.213V5.641h9.213zm-6.936-3.844h3.775V16.86c0 .509.077.899.23 1.17.159.265.367.446.624.544.257.097.541.146.856.146.236 0 .45-.018.646-.052.202-.035.355-.067.459-.094l.636 2.956c-.202.07-.489.146-.866.23-.367.083-.82.132-1.355.146-.945.028-1.799-.115-2.555-.428a3.97 3.97 0 01-1.805-1.484c-.437-.668-.655-1.504-.645-2.507V1.797zM283.524 22c-1.567 0-2.922-.345-4.069-1.034-1.148-.69-2.038-1.654-2.671-2.894-.625-1.24-.94-2.688-.94-4.345 0-1.658.315-3.11.94-4.357.633-1.246 1.523-2.214 2.671-2.904 1.147-.69 2.502-1.034 4.069-1.034 1.563 0 2.919.345 4.066 1.034 1.147.69 2.035 1.658 2.659 2.904.633 1.247.951 2.7.951 4.357s-.318 3.105-.951 4.345c-.624 1.24-1.512 2.204-2.659 2.894-1.147.69-2.503 1.034-4.066 1.034zm.018-3.03c.851 0 1.557-.233 2.13-.7.569-.473.994-1.107 1.272-1.9.285-.795.429-1.68.429-2.654 0-.982-.144-1.87-.429-2.664-.278-.8-.703-1.438-1.272-1.911-.573-.474-1.279-.71-2.13-.71-.869 0-1.591.236-2.169.71-.569.473-.997 1.11-1.282 1.911-.278.794-.416 1.682-.416 2.664 0 .975.138 1.86.416 2.653.285.794.713 1.428 1.282 1.901.578.467 1.3.7 2.169.7zm17.85 3.03c-1.6 0-2.971-.352-4.119-1.055-1.141-.704-2.022-1.675-2.64-2.915-.612-1.246-.918-2.681-.918-4.304 0-1.629.312-3.067.94-4.314.624-1.253 1.508-2.228 2.649-2.925 1.147-.703 2.503-1.055 4.066-1.055 1.301 0 2.454.24 3.454.72 1.007.474 1.812 1.146 2.408 2.017.6.864.94 1.873 1.022 3.03h-3.607a3.477 3.477 0 00-1.043-1.933c-.542-.522-1.27-.784-2.182-.784-.771 0-1.447.21-2.031.627-.585.411-1.041 1.003-1.368 1.776-.318.773-.48 1.7-.48 2.779 0 1.093.162 2.034.48 2.82.321.78.768 1.383 1.346 1.807.585.418 1.27.627 2.053.627.557 0 1.056-.104 1.493-.313a3.018 3.018 0 001.117-.93c.297-.404.502-.895.615-1.473h3.607c-.088 1.135-.422 2.142-1 3.02-.578.87-1.362 1.552-2.356 2.047-.994.487-2.163.731-3.506.731zm16.953 0c-1.567 0-2.922-.345-4.07-1.034-1.147-.69-2.037-1.654-2.667-2.894-.628-1.24-.94-2.688-.94-4.345 0-1.658.312-3.11.94-4.357.63-1.246 1.52-2.214 2.667-2.904 1.148-.69 2.503-1.034 4.07-1.034 1.563 0 2.919.345 4.066 1.034 1.147.69 2.034 1.658 2.662 2.904.63 1.247.948 2.7.948 4.357s-.318 3.105-.948 4.345c-.628 1.24-1.515 2.204-2.662 2.894S319.908 22 318.345 22zm.021-3.03c.848 0 1.557-.233 2.126-.7.57-.473.995-1.107 1.273-1.9.285-.795.429-1.68.429-2.654 0-.982-.144-1.87-.429-2.664-.278-.8-.703-1.438-1.273-1.911-.569-.474-1.278-.71-2.126-.71-.869 0-1.594.236-2.169.71-.572.473-1.001 1.11-1.285 1.911-.279.794-.416 1.682-.416 2.664 0 .975.137 1.86.416 2.653.284.794.713 1.428 1.285 1.901.575.467 1.3.7 2.169.7zM333 .292v21.394h-3.776V.293H333z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="act seam" id="how-it-works">
        <div className="shell">
          <div className="flex flex-col">
            <h2 className="font-semibold max-w-[20ch] text-balance text-title">
              {"Four cues from signup to production"}
            </h2>
            <p className="max-w-[62ch] mt-5 text-lede text-muted-foreground text-pretty">
              {"Every cue below is the live console, not demo data. The run fits inside a coffee break."}
            </p>
          </div>
          <div className="gap-12 grid items-center lg:mt-20 mt-16 xl:gap-16 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
            <div role="tablist" aria-orientation="vertical" aria-label="Four cues from signup to production">
              <div className="border-border border-l relative">
                <span className="-left-px absolute bg-linear-to-b from-brand-accent h-full to-brand-ink top-0 w-px" aria-hidden="true"></span>
                <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 gap-4 items-baseline outline-none press px-5 py-5 text-left w-full" type="button" role="tab" id="step-tab-connect" aria-selected="true" aria-controls="step-panel" tabIndex="0">
                  <span className="font-mono shrink-0 text-brand-ink text-xs tracking-widest transition-colors w-7">
                    {"01"}
                  </span>
                  <span className="font-medium text-foreground text-lg tracking-tight transition-colors">
                    {"Wire in the stack"}
                  </span>
                </button>
                <div className="overflow-hidden" style={{height: "auto", opacity: "1"}}>
                  <p className="leading-relaxed max-w-[52ch] pb-6 pl-16 pr-5 text-muted-foreground">
                    {"OAuth into the tools you already run and Limelight generates a typed client for each one. A schema change upstream fails your build, not your Friday deploy."}
                  </p>
                </div>
              </div>
              <div className="border-border border-l relative">
                <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 gap-4 items-baseline outline-none press px-5 py-5 text-left w-full" type="button" role="tab" id="step-tab-analyze" aria-selected="false" aria-controls="step-panel" tabIndex="-1">
                  <span className="font-mono shrink-0 text-muted-foreground text-xs tracking-widest transition-colors w-7">
                    {"02"}
                  </span>
                  <span className="font-medium text-lg text-muted-foreground tracking-tight transition-colors">
                    {"Let the model assemble"}
                  </span>
                </button>
              </div>
              <div className="border-border border-l relative">
                <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 gap-4 items-baseline outline-none press px-5 py-5 text-left w-full" type="button" role="tab" id="step-tab-configure" aria-selected="false" aria-controls="step-panel" tabIndex="-1">
                  <span className="font-mono shrink-0 text-muted-foreground text-xs tracking-widest transition-colors w-7">
                    {"03"}
                  </span>
                  <span className="font-medium text-lg text-muted-foreground tracking-tight transition-colors">
                    {"Shape it to the team"}
                  </span>
                </button>
              </div>
              <div className="border-border border-l relative">
                <button className="cursor-pointer flex focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-ring/50 gap-4 items-baseline outline-none press px-5 py-5 text-left w-full" type="button" role="tab" id="step-tab-deploy" aria-selected="false" aria-controls="step-panel" tabIndex="-1">
                  <span className="font-mono shrink-0 text-muted-foreground text-xs tracking-widest transition-colors w-7">
                    {"04"}
                  </span>
                  <span className="font-medium text-lg text-muted-foreground tracking-tight transition-colors">
                    {"Promote to production"}
                  </span>
                </button>
              </div>
            </div>
            <div role="tabpanel" id="step-panel" aria-labelledby="step-tab-connect" tabIndex="0">
              <figure className="bg-card border border-border dark:shadow-none overflow-hidden relative rounded-2xl shadow-lift">
                <figcaption className="border-b border-border flex flex-wrap gap-x-6 gap-y-1 items-center justify-between px-4 py-3.5 relative sm:px-5 text-foreground text-sm">
                  <span className="gap-x-3 inline-flex items-center min-w-0">
                    <span style={{opacity: "1"}}>
                      <span className="flex-wrap gap-x-3 inline-flex items-baseline">
                        <span className="font-mono text-brand-ink text-meta uppercase">
                          {"Cue"}
                          {"01"}
                        </span>
                        <span className="font-medium">
                          {"Wire in the stack"}
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="font-mono text-caption text-muted-foreground">
                    <span style={{opacity: "1"}}>
                      {"Integrations · typed end to end"}
                    </span>
                  </span>
                </figcaption>
                <div className="grid overflow-hidden relative">
                  <div className="col-start-1 row-start-1" style={{opacity: "1"}}>
                    <div className="@container/lcframe w-full">
                      <div className="overflow-hidden relative w-full" data-lc-canvas="cue" style={{"--lc-tempo": "0.45"}}>
                        <div className="absolute lc-canvas left-0 origin-top-left top-0" role="img" aria-label="Limelight console, integrations: 5 of 6 tools connected, each with its generated typed client and schema version, and a drift check that has caught a renamed field before it shipped.">
                          <div className="@container/lc bg-card flex flex-col size-full text-foreground" aria-hidden="true">
                            <div className="bg-card border-b border-border flex gap-[calc(var(--lc-pad)*0.5)] h-[var(--lc-topbar)] items-center leading-snug px-[var(--lc-gap)] shrink-0 text-[length:var(--lc-label)]">
                              <span className="bg-brand flex items-center justify-center rounded-[var(--lc-radius)] shrink-0 text-brand-foreground" style={{width: "var(--lc-tile)", height: "var(--lc-tile)"}}>
                                <svg className="size-[calc(var(--lc-tile)*0.56)]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                  <path d="M10 2.5h4l5.5 15.5h-15L10 2.5z"></path>
                                  <ellipse cx="12" cy="20.25" rx="10" ry="2.25" opacity="0.4"></ellipse>
                                </svg>
                              </span>
                              <span className="@max-[700px]/lc:hidden flex gap-[calc(var(--lc-pad)*0.5)] items-center">
                                <span className="flex gap-[calc(var(--lc-pad)*0.25)] items-center text-muted-foreground whitespace-nowrap">
                                  {"Limelight"}
                                </span>
                              </span>
                              <span className="@max-[700px]/lc:hidden flex gap-[calc(var(--lc-pad)*0.5)] items-center">
                                <span className="@max-[700px]/lc:hidden select-none text-muted-foreground/70">
                                  {"/"}
                                </span>
                                <span className="flex gap-[calc(var(--lc-pad)*0.25)] items-center text-muted-foreground whitespace-nowrap">
                                  {"Production"}
                                </span>
                              </span>
                              <span className="flex gap-[calc(var(--lc-pad)*0.5)] items-center">
                                <span className="@max-[700px]/lc:hidden select-none text-muted-foreground/70">
                                  {"/"}
                                </span>
                                <span className="flex font-medium gap-[calc(var(--lc-pad)*0.25)] items-center text-foreground whitespace-nowrap">
                                  {"Integrations"}
                                  <svg className="lucide lucide-chevrons-up-down size-[calc(var(--lc-icon)*0.82)] text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m7 15 5 5 5-5"></path>
                                    <path d="m7 9 5-5 5 5"></path>
                                  </svg>
                                </span>
                              </span>
                              <span className="bg-muted border border-border font-medium gap-[calc(var(--lc-pad)*0.3)] inline-flex items-center leading-snug ms-auto px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-muted-foreground w-fit whitespace-nowrap">
                                <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                  <span className="bg-brand lc-blink relative rounded-full size-full"></span>
                                </span>
                                <span className="@max-[700px]/lc:hidden">
                                  {"All systems"}
                                </span>
                                <span className="font-medium text-brand-ink">
                                  {"Normal"}
                                </span>
                              </span>
                              <span className="flex items-center relative shrink-0 text-muted-foreground">
                                <svg className="lucide lucide-bell size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                                  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                                </svg>
                                <span className="-right-px -top-px absolute">
                                  <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.3)]" aria-hidden="true">
                                    <span className="bg-brand-accent relative rounded-full size-full"></span>
                                  </span>
                                </span>
                              </span>
                              <img className="object-cover ring-1 ring-border rounded-full shrink-0 size-[var(--lc-face)]" alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-6.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                            </div>
                            <div className="flex flex-1 min-h-0">
                              <div className="bg-background border-border border-r flex flex-col gap-[calc(var(--lc-pad)*0.28)] items-center py-[calc(var(--lc-gap)*0.6)] shrink-0 w-[var(--lc-rail)]">
                                <span className="flex items-center justify-center mb-[calc(var(--lc-pad)*0.2)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                                  <svg className="lucide lucide-search size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m21 21-4.34-4.34"></path>
                                    <circle cx="11" cy="11" r="8"></circle>
                                  </svg>
                                </span>
                                <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                                  <svg className="lucide lucide-gauge size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m12 14 4-4"></path>
                                    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                                  </svg>
                                </span>
                                <span className="bg-muted flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-brand-ink">
                                  <svg className="lucide lucide-plug-zap size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                    <path d="m2 22 3-3"></path>
                                    <path d="M7.5 13.5 10 11"></path>
                                    <path d="M10.5 16.5 13 14"></path>
                                    <path d="m18 3-4 4h6l-4 4"></path>
                                  </svg>
                                </span>
                                <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                                  <svg className="lucide lucide-database size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                    <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                    <path d="M3 12A9 3 0 0 0 21 12"></path>
                                  </svg>
                                </span>
                                <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                                  <svg className="lucide lucide-users size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                  </svg>
                                </span>
                                <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                                  <svg className="lucide lucide-rocket size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                                    <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                                  </svg>
                                </span>
                                <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                                  <svg className="lucide lucide-workflow size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                                    <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                                    <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                                  </svg>
                                </span>
                                <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                                  <svg className="lucide lucide-shield-check size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12 2 2 4-4"></path>
                                  </svg>
                                </span>
                                <span className="flex items-center justify-center rounded-[var(--lc-radius)] size-[calc(var(--lc-rail)*0.56)] text-muted-foreground">
                                  <svg className="lucide lucide-settings size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                  </svg>
                                </span>
                                <img className="mt-auto object-cover ring-1 ring-border rounded-full shrink-0 size-[var(--lc-face)]" alt="" loading="lazy" width="96" height="96" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-6.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-6.png&w=256&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                              </div>
                              <div className="bg-background flex flex-1 flex-col gap-[var(--lc-gap)] min-w-0 overflow-clip p-[var(--lc-gap)]">
                                <div className="flex gap-[calc(var(--lc-pad)*0.6)] items-center justify-between shrink-0">
                                  <div className="flex flex-col gap-[calc(var(--lc-pad)*0.2)] min-w-0">
                                    <span className="font-semibold leading-tight text-[length:var(--lc-title)] text-foreground tracking-tight truncate">
                                      {"Integrations"}
                                    </span>
                                    <span className="@max-[700px]/lc:hidden leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                      {"One typed client per tool, regenerated on every schema change."}
                                    </span>
                                  </div>
                                  <div className="shrink-0">
                                    <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center">
                                      <span className="@max-[700px]/lc:hidden bg-brand-subtle border border-brand-border/45 font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink w-fit whitespace-nowrap">
                                        <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                          <span className="bg-brand-accent relative rounded-full size-full"></span>
                                        </span>
                                        {"5"}
                                        {"of"}
                                        {"6"}
                                        {"connected"}
                                      </span>
                                      <span className="bg-brand border border-transparent font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-foreground w-fit whitespace-nowrap">
                                        <svg className="lucide lucide-braces size-[calc(var(--lc-icon)*0.72)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                          <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path>
                                          <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path>
                                        </svg>
                                        {"5"}
                                        {"typed clients"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-1 gap-[var(--lc-gap)] min-h-0">
                                  <div className="bg-card border border-border flex flex-[1.62] flex-col min-h-0 min-w-0 overflow-hidden rounded-[var(--lc-radius)]">
                                    <div className="@max-[700px]/lc:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] border-b border-border font-medium gap-[calc(var(--lc-pad)*0.5)] grid grid-cols-[minmax(0,1.55fr)_minmax(0,2.7fr)_minmax(0,1.05fr)] items-center leading-snug px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.42)] shrink-0 text-[length:var(--lc-micro)] text-muted-foreground">
                                      <span>
                                        {"Tool"}
                                      </span>
                                      <span className="@max-[700px]/lc:hidden">
                                        {"Generated client"}
                                      </span>
                                      <span className="text-end">
                                        {"Drift check"}
                                      </span>
                                    </div>
                                    <div className="divide-border divide-y flex flex-1 flex-col min-h-0">
                                      <div className="flex flex-col gap-[calc(var(--lc-pad)*0.28)] px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)] shrink-0">
                                        <div className="@max-[700px]/lc:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-[calc(var(--lc-pad)*0.5)] grid grid-cols-[minmax(0,1.55fr)_minmax(0,2.7fr)_minmax(0,1.05fr)] items-center">
                                          <div className="flex gap-[calc(var(--lc-pad)*0.45)] items-center min-w-0">
                                            <IconTile className="[--icon-tile-icon-size:var(--lc-icon)] [--icon-tile-inset:calc(var(--lc-tile)*0.07)] [--icon-tile-radius:var(--lc-radius)] [--icon-tile-size:var(--lc-tile)] rounded-(--icon-tile-radius) text-muted-foreground" variant="outline" size="default" aria-hidden="true">
                                              <svg className="lucide lucide-database size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                                <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
                                                <path d="M3 12A9 3 0 0 0 21 12"></path>
                                              </svg>
                                            </IconTile>
                                            <span className="flex flex-col min-w-0">
                                              <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                                {"Quarry"}
                                              </span>
                                              <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                                {"Warehouse"}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="@max-[700px]/lc:hidden flex flex-col gap-[calc(var(--lc-pad)*0.15)] min-w-0">
                                            <span className="font-mono leading-snug text-[length:var(--lc-micro)] text-foreground truncate">
                                              {"@limelight/quarry@4.2.0"}
                                            </span>
                                            <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 text-[length:var(--lc-micro)] text-muted-foreground">
                                              <span className="bg-muted border border-border font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-muted-foreground w-fit whitespace-nowrap">
                                                {"Schema"}
                                                {"v18"}
                                              </span>
                                              <svg className="lucide lucide-key-round shrink-0 size-[calc(var(--lc-icon)*0.7)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                              </svg>
                                              <span className="truncate">
                                                {"Arclight, Veldt"}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="flex flex-col gap-[calc(var(--lc-pad)*0.15)] items-end min-w-0">
                                            <span className="bg-brand-subtle border border-brand-border/45 font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink w-fit whitespace-nowrap">
                                              <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                                <span className="bg-brand-accent relative rounded-full size-full"></span>
                                              </span>
                                              {"Clean"}
                                            </span>
                                            <span className="leading-snug tabular-nums text-[length:var(--lc-micro)] text-muted-foreground">
                                              {"2m ago"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-[calc(var(--lc-pad)*0.28)] px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)] shrink-0">
                                        <div className="@max-[700px]/lc:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-[calc(var(--lc-pad)*0.5)] grid grid-cols-[minmax(0,1.55fr)_minmax(0,2.7fr)_minmax(0,1.05fr)] items-center">
                                          <div className="flex gap-[calc(var(--lc-pad)*0.45)] items-center min-w-0">
                                            <IconTile className="[--icon-tile-icon-size:var(--lc-icon)] [--icon-tile-inset:calc(var(--lc-tile)*0.07)] [--icon-tile-radius:var(--lc-radius)] [--icon-tile-size:var(--lc-tile)] rounded-(--icon-tile-radius) text-muted-foreground" variant="outline" size="default" aria-hidden="true">
                                              <svg className="lucide lucide-receipt size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M12 17V7"></path>
                                                <path d="M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"></path>
                                                <path d="M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z"></path>
                                              </svg>
                                            </IconTile>
                                            <span className="flex flex-col min-w-0">
                                              <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                                {"Ledger"}
                                              </span>
                                              <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                                {"Billing"}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="@max-[700px]/lc:hidden flex flex-col gap-[calc(var(--lc-pad)*0.15)] min-w-0">
                                            <span className="font-mono leading-snug text-[length:var(--lc-micro)] text-foreground truncate">
                                              {"@limelight/ledger@3.6.1"}
                                            </span>
                                            <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 text-[length:var(--lc-micro)] text-muted-foreground">
                                              <span className="bg-muted border border-border font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-muted-foreground w-fit whitespace-nowrap">
                                                {"Schema"}
                                                {"v11"}
                                              </span>
                                              <svg className="lucide lucide-key-round shrink-0 size-[calc(var(--lc-icon)*0.7)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                              </svg>
                                              <span className="truncate">
                                                {"Copperline"}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="flex flex-col gap-[calc(var(--lc-pad)*0.15)] items-end min-w-0">
                                            <span className="bg-brand-subtle border border-brand-border/45 font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink w-fit whitespace-nowrap">
                                              <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                                <span className="bg-brand-accent relative rounded-full size-full"></span>
                                              </span>
                                              {"Clean"}
                                            </span>
                                            <span className="leading-snug tabular-nums text-[length:var(--lc-micro)] text-muted-foreground">
                                              {"6m ago"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-[calc(var(--lc-pad)*0.28)] px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)] shrink-0">
                                        <div className="@max-[700px]/lc:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-[calc(var(--lc-pad)*0.5)] grid grid-cols-[minmax(0,1.55fr)_minmax(0,2.7fr)_minmax(0,1.05fr)] items-center">
                                          <div className="flex gap-[calc(var(--lc-pad)*0.45)] items-center min-w-0">
                                            <IconTile className="[--icon-tile-icon-size:var(--lc-icon)] [--icon-tile-inset:calc(var(--lc-tile)*0.07)] [--icon-tile-radius:var(--lc-radius)] [--icon-tile-size:var(--lc-tile)] rounded-(--icon-tile-radius) text-muted-foreground" variant="outline" size="default" aria-hidden="true">
                                              <svg className="lucide lucide-chart-line size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                                                <path d="m19 9-5 5-4-4-3 3"></path>
                                              </svg>
                                            </IconTile>
                                            <span className="flex flex-col min-w-0">
                                              <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                                {"Beacon"}
                                              </span>
                                              <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                                {"Analytics"}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="@max-[700px]/lc:hidden flex flex-col gap-[calc(var(--lc-pad)*0.15)] min-w-0">
                                            <span className="font-mono leading-snug text-[length:var(--lc-micro)] text-foreground truncate">
                                              {"@limelight/beacon@2.9.4"}
                                            </span>
                                            <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 text-[length:var(--lc-micro)] text-muted-foreground">
                                              <span className="bg-muted border border-border font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-muted-foreground w-fit whitespace-nowrap">
                                                {"Schema"}
                                                {"v7"}
                                              </span>
                                              <svg className="lucide lucide-key-round shrink-0 size-[calc(var(--lc-icon)*0.7)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                              </svg>
                                              <span className="truncate">
                                                {"Nightjar, Solvine"}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="flex flex-col gap-[calc(var(--lc-pad)*0.15)] items-end min-w-0">
                                            <span className="bg-muted border border-border font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center lc-sheen leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-muted-foreground w-fit whitespace-nowrap">
                                              <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                                <span className="bg-brand-border relative rounded-full size-full"></span>
                                              </span>
                                              {"Checking"}
                                            </span>
                                            <span className="leading-snug tabular-nums text-[length:var(--lc-micro)] text-muted-foreground">
                                              {"9m ago"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-[calc(var(--lc-pad)*0.28)] px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)] shrink-0">
                                        <div className="@max-[700px]/lc:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-[calc(var(--lc-pad)*0.5)] grid grid-cols-[minmax(0,1.55fr)_minmax(0,2.7fr)_minmax(0,1.05fr)] items-center">
                                          <div className="flex gap-[calc(var(--lc-pad)*0.45)] items-center min-w-0">
                                            <IconTile className="[--icon-tile-icon-size:var(--lc-icon)] [--icon-tile-inset:calc(var(--lc-tile)*0.07)] [--icon-tile-radius:var(--lc-radius)] [--icon-tile-size:var(--lc-tile)] rounded-(--icon-tile-radius) text-muted-foreground" variant="outline" size="default" aria-hidden="true">
                                              <svg className="lucide lucide-message-square size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                                              </svg>
                                            </IconTile>
                                            <span className="flex flex-col min-w-0">
                                              <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                                {"Switchboard"}
                                              </span>
                                              <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                                {"Support"}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="@max-[700px]/lc:hidden flex flex-col gap-[calc(var(--lc-pad)*0.15)] min-w-0">
                                            <span className="font-mono leading-snug text-[length:var(--lc-micro)] text-foreground truncate">
                                              {"@limelight/switchboard@1.8.2"}
                                            </span>
                                            <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 text-[length:var(--lc-micro)] text-muted-foreground">
                                              <span className="bg-muted border border-border font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-muted-foreground w-fit whitespace-nowrap">
                                                {"Schema"}
                                                {"v5"}
                                              </span>
                                              <svg className="lucide lucide-key-round shrink-0 size-[calc(var(--lc-icon)*0.7)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                              </svg>
                                              <span className="truncate">
                                                {"Halcyon"}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="flex flex-col gap-[calc(var(--lc-pad)*0.15)] items-end min-w-0">
                                            <span className="bg-brand-subtle border border-brand-border/45 font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-brand-ink w-fit whitespace-nowrap">
                                              <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                                <span className="bg-brand-accent relative rounded-full size-full"></span>
                                              </span>
                                              {"Clean"}
                                            </span>
                                            <span className="leading-snug tabular-nums text-[length:var(--lc-micro)] text-muted-foreground">
                                              {"11m ago"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-col gap-[calc(var(--lc-pad)*0.28)] px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)] shrink-0">
                                        <div className="@max-[700px]/lc:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-[calc(var(--lc-pad)*0.5)] grid grid-cols-[minmax(0,1.55fr)_minmax(0,2.7fr)_minmax(0,1.05fr)] items-center">
                                          <div className="flex gap-[calc(var(--lc-pad)*0.45)] items-center min-w-0">
                                            <IconTile className="[--icon-tile-icon-size:var(--lc-icon)] [--icon-tile-inset:calc(var(--lc-tile)*0.07)] [--icon-tile-radius:var(--lc-radius)] [--icon-tile-size:var(--lc-tile)] rounded-(--icon-tile-radius) text-muted-foreground" variant="outline" size="default" aria-hidden="true">
                                              <svg className="lucide lucide-mail size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                              </svg>
                                            </IconTile>
                                            <span className="flex flex-col min-w-0">
                                              <span className="font-medium leading-snug text-[length:var(--lc-body)] text-foreground truncate">
                                                {"Mailroom"}
                                              </span>
                                              <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                                {"Messaging"}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="@max-[700px]/lc:hidden flex flex-col gap-[calc(var(--lc-pad)*0.15)] min-w-0">
                                            <span className="font-mono leading-snug text-[length:var(--lc-micro)] text-foreground truncate">
                                              {"@limelight/mailroom@5.1.0"}
                                            </span>
                                            <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 text-[length:var(--lc-micro)] text-muted-foreground">
                                              <span className="bg-muted border border-border font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-muted-foreground w-fit whitespace-nowrap">
                                                {"Schema"}
                                                {"v9"}
                                              </span>
                                              <svg className="lucide lucide-key-round shrink-0 size-[calc(var(--lc-icon)*0.7)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                                              </svg>
                                              <span className="truncate">
                                                {"Windrose"}
                                              </span>
                                            </span>
                                          </div>
                                          <div className="flex flex-col gap-[calc(var(--lc-pad)*0.15)] items-end min-w-0">
                                            <span className="bg-destructive/10 border border-destructive/25 dark:text-destructive font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[color-mix(in_oklab,var(--destructive)_76%,black)] text-[length:var(--lc-micro)] w-fit whitespace-nowrap">
                                              <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                                <span className="bg-destructive lc-blink relative rounded-full size-full"></span>
                                              </span>
                                              {"Break"}
                                            </span>
                                            <span className="leading-snug tabular-nums text-[length:var(--lc-micro)] text-muted-foreground">
                                              {"14m ago"}
                                            </span>
                                          </div>
                                        </div>
                                        <span className="@max-[700px]/lc:ps-0 flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 ps-[calc(var(--lc-tile)+var(--lc-pad)*0.45)] text-[length:var(--lc-micro)] text-destructive">
                                          <svg className="lucide lucide-circle-alert shrink-0 size-[calc(var(--lc-icon)*0.8)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" x2="12" y1="8" y2="12"></line>
                                            <line x1="12" x2="12.01" y1="16" y2="16"></line>
                                          </svg>
                                          <span className="truncate">
                                            {"field renamed: contact.email_address, build failed in CI"}
                                          </span>
                                        </span>
                                      </div>
                                      <div className="flex flex-col gap-[calc(var(--lc-pad)*0.28)] px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.5)] shrink-0">
                                        <div className="@max-[700px]/lc:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-[calc(var(--lc-pad)*0.5)] grid grid-cols-[minmax(0,1.55fr)_minmax(0,2.7fr)_minmax(0,1.05fr)] items-center">
                                          <div className="flex gap-[calc(var(--lc-pad)*0.45)] items-center min-w-0">
                                            <IconTile className="[--icon-tile-icon-size:var(--lc-icon)] [--icon-tile-inset:calc(var(--lc-tile)*0.07)] [--icon-tile-radius:var(--lc-radius)] [--icon-tile-size:var(--lc-tile)] rounded-(--icon-tile-radius) text-muted-foreground" variant="outline" size="default" aria-hidden="true">
                                              <svg className="lucide lucide-git-branch size-[var(--lc-icon)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <path d="M15 6a9 9 0 0 0-9 9V3"></path>
                                                <circle cx="18" cy="6" r="3"></circle>
                                                <circle cx="6" cy="18" r="3"></circle>
                                              </svg>
                                            </IconTile>
                                            <span className="flex flex-col min-w-0">
                                              <span className="font-medium leading-snug text-[length:var(--lc-body)] text-muted-foreground truncate">
                                                {"Shipyard"}
                                              </span>
                                              <span className="leading-snug text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                                {"Delivery"}
                                              </span>
                                            </span>
                                          </div>
                                          <span className="@max-[700px]/lc:hidden flex gap-[calc(var(--lc-pad)*0.35)] items-center leading-snug min-w-0 text-[length:var(--lc-label)] text-muted-foreground">
                                            <svg className="lucide lucide-unplug shrink-0 size-[calc(var(--lc-icon)*0.8)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="m19 5 3-3"></path>
                                              <path d="m2 22 3-3"></path>
                                              <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                                              <path d="M7.5 13.5 10 11"></path>
                                              <path d="M10.5 16.5 13 14"></path>
                                              <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"></path>
                                            </svg>
                                            <span className="truncate">
                                              {"Not connected"}
                                            </span>
                                          </span>
                                          <div className="flex flex-col gap-[calc(var(--lc-pad)*0.15)] items-end min-w-0">
                                            <svg className="lucide lucide-minus size-[calc(var(--lc-icon)*0.8)] text-muted-foreground/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M5 12h14"></path>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="@max-[700px]/lc:hidden flex flex-1 flex-col gap-[var(--lc-gap)] min-w-0">
                                    <div className="bg-card border border-border flex flex-col min-h-0 overflow-hidden rounded-[var(--lc-radius)] shrink-0">
                                      <div className="border-b border-border flex gap-[calc(var(--lc-pad)*0.5)] items-start justify-between px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.72)] shrink-0">
                                        <div className="flex flex-col gap-[calc(var(--lc-pad)*0.18)] min-w-0">
                                          <span className="font-semibold leading-tight text-[length:var(--lc-title)] text-foreground tracking-tight truncate">
                                            {"Schema checks"}
                                          </span>
                                          <span className="leading-snug text-[length:var(--lc-label)] text-muted-foreground truncate">
                                            {"Since the March cycle opened"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 flex-row gap-[var(--lc-pad)] items-start min-h-0 p-[var(--lc-pad)]">
                                        <div className="flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.35)] min-w-0">
                                          <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 text-[length:var(--lc-label)] text-muted-foreground">
                                            <svg className="lucide lucide-shield-check shrink-0 size-[calc(var(--lc-icon)*0.9)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                              <path d="m9 12 2 2 4-4"></path>
                                            </svg>
                                            <span className="truncate">
                                              {"Checks run"}
                                            </span>
                                          </span>
                                          <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                            <span className="font-semibold lc-rise leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate" style={{"--lc-delay": "-2600ms"}}>
                                              {"148"}
                                            </span>
                                          </div>
                                        </div>
                                        <div className="border-border border-s flex flex-1 flex-col gap-[calc(var(--lc-pad)*0.35)] min-w-0 ps-[var(--lc-pad)]">
                                          <span className="flex gap-[calc(var(--lc-pad)*0.3)] items-center leading-snug min-w-0 text-[length:var(--lc-label)] text-muted-foreground">
                                            <svg className="lucide lucide-circle-alert shrink-0 size-[calc(var(--lc-icon)*0.9)]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                              <circle cx="12" cy="12" r="10"></circle>
                                              <line x1="12" x2="12" y1="8" y2="12"></line>
                                              <line x1="12" x2="12.01" y1="16" y2="16"></line>
                                            </svg>
                                            <span className="truncate">
                                              {"Breaks caught"}
                                            </span>
                                          </span>
                                          <div className="flex gap-[calc(var(--lc-pad)*0.4)] items-center min-w-0">
                                            <span className="font-semibold lc-rise leading-[1.02] tabular-nums text-[length:var(--lc-figure)] text-foreground tracking-tight truncate" style={{"--lc-delay": "-7300ms"}}>
                                              {"11"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-card border border-border flex flex-1 flex-col min-h-0 overflow-hidden rounded-[var(--lc-radius)]">
                                      <div className="border-b border-border flex gap-[calc(var(--lc-pad)*0.5)] items-start justify-between px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.72)] shrink-0">
                                        <div className="flex flex-col gap-[calc(var(--lc-pad)*0.18)] min-w-0">
                                          <span className="font-semibold leading-tight text-[length:var(--lc-title)] text-foreground tracking-tight truncate">
                                            {"Drift"}
                                          </span>
                                        </div>
                                        <div className="shrink-0">
                                          <span className="bg-muted border border-border font-medium gap-[calc(var(--lc-icon)*0.3)] inline-flex items-center leading-snug px-[calc(var(--lc-pad)*0.4)] py-[calc(var(--lc-pad)*0.13)] rounded-full shrink-0 text-[length:var(--lc-micro)] text-muted-foreground w-fit whitespace-nowrap">
                                            {"6"}
                                            {"tools"}
                                          </span>
                                        </div>
                                      </div>
                                      <div className="px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.6)] shrink-0">
                                        <span className="bg-muted flex h-[var(--lc-bar)] overflow-hidden relative rounded-full w-full" aria-hidden="true">
                                          <span className="bg-brand-accent h-full" style={{width: "50.000%"}}></span>
                                          <span className="bg-brand-border h-full" style={{width: "16.667%"}}></span>
                                          <span className="bg-destructive h-full" style={{width: "16.667%"}}></span>
                                          <span className="bg-muted-foreground/45 h-full" style={{width: "16.667%"}}></span>
                                        </span>
                                      </div>
                                      <div className="border-border border-t divide-border divide-y flex flex-1 flex-col min-h-0">
                                        <div className="flex flex-1 gap-[calc(var(--lc-pad)*0.45)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.3)]">
                                          <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                            <span className="bg-brand-accent relative rounded-full size-full"></span>
                                          </span>
                                          <span className="font-medium leading-snug shrink-0 text-[length:var(--lc-body)] text-foreground">
                                            {"Clean"}
                                          </span>
                                          <span className="flex-1 leading-snug min-w-0 text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                            {"Quarry, Ledger, Switchboard"}
                                          </span>
                                          <span className="leading-snug shrink-0 tabular-nums text-[length:var(--lc-body)] text-foreground">
                                            {"3"}
                                          </span>
                                        </div>
                                        <div className="flex flex-1 gap-[calc(var(--lc-pad)*0.45)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.3)]">
                                          <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                            <span className="bg-brand-border relative rounded-full size-full"></span>
                                          </span>
                                          <span className="font-medium leading-snug shrink-0 text-[length:var(--lc-body)] text-foreground">
                                            {"Checking"}
                                          </span>
                                          <span className="flex-1 leading-snug min-w-0 text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                            {"Beacon"}
                                          </span>
                                          <span className="leading-snug shrink-0 tabular-nums text-[length:var(--lc-body)] text-foreground">
                                            {"1"}
                                          </span>
                                        </div>
                                        <div className="flex flex-1 gap-[calc(var(--lc-pad)*0.45)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.3)]">
                                          <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                            <span className="bg-destructive relative rounded-full size-full"></span>
                                          </span>
                                          <span className="font-medium leading-snug shrink-0 text-[length:var(--lc-body)] text-foreground">
                                            {"Break"}
                                          </span>
                                          <span className="flex-1 leading-snug min-w-0 text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                            {"Mailroom"}
                                          </span>
                                          <span className="leading-snug shrink-0 tabular-nums text-[length:var(--lc-body)] text-foreground">
                                            {"1"}
                                          </span>
                                        </div>
                                        <div className="flex flex-1 gap-[calc(var(--lc-pad)*0.45)] items-center min-w-0 px-[var(--lc-pad)] py-[calc(var(--lc-pad)*0.3)]">
                                          <span className="inline-flex relative shrink-0 size-[calc(var(--lc-icon)*0.42)]" aria-hidden="true">
                                            <span className="bg-muted-foreground/45 relative rounded-full size-full"></span>
                                          </span>
                                          <span className="font-medium leading-snug shrink-0 text-[length:var(--lc-body)] text-foreground">
                                            {"Not connected"}
                                          </span>
                                          <span className="flex-1 leading-snug min-w-0 text-[length:var(--lc-micro)] text-muted-foreground truncate">
                                            {"Shipyard"}
                                          </span>
                                          <span className="leading-snug shrink-0 tabular-nums text-[length:var(--lc-body)] text-foreground">
                                            {"1"}
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
          <div className="border-border border-t flex flex-col gap-6 items-start justify-between mt-20 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-[52ch] text-muted-foreground">
              {"First connection to production in under five minutes, with your own data."}
            </p>
            <Button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:transition-transform active:bg-brand-active active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-brand bg-clip-padding border border-transparent brand-weave dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:shadow-none fine-pointer:[&_svg]:hover:translate-x-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 h-11 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-brand-hover press px-6 rounded-full shadow-lift text-base text-brand-foreground" href="#pricing" role="button" tabIndex="0">
              {"Run it yourself"}
              <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Button>
          </div>
        </div>
      </section>
      <section className="act bg-muted dark:bg-muted/30 seam" id="features">
        <div className="shell">
          <div className="gap-6 grid lg:gap-10 lg:grid-cols-12 lg:items-end">
            <div className="flex flex-col lg:col-span-5">
              <h2 className="font-semibold max-w-[12ch] text-balance text-title">
                {"Four acts, one console"}
              </h2>
            </div>
            <p className="lg:col-span-6 lg:col-start-7 max-w-[38ch] text-lede text-muted-foreground text-pretty">
              {"Automation, security, scheduling, and analytics, all on one data model."}
            </p>
          </div>
          <div className="lg:mt-20 mt-16">
            <article className="border-border border-t gap-8 grid lg:gap-10 lg:grid-cols-12 lg:items-start lg:py-14 py-10">
              <div className="lg:col-span-4">
                <h3 className="font-semibold max-w-[22ch] text-balance text-headline">
                  {"Automation that learns the run sheet"}
                </h3>
                <p className="flex gap-3 items-baseline mt-5">
                  <span className="font-semibold tabular-nums text-2xl tracking-tight">
                    {"4x"}
                  </span>
                  <span className="font-mono text-meta text-muted-foreground uppercase">
                    {"Faster cycle time"}
                  </span>
                </p>
              </div>
              <p className="leading-relaxed lg:col-span-5 max-w-[58ch] text-muted-foreground text-pretty">
                {"Limelight watches the sequences your team repeats and offers to take them over. Approve once and the routine runs on its cue, every step logged."}
              </p>
              <div className="lg:col-span-3 pointer-events-none select-none" aria-hidden="true">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-3 items-center px-3 py-2.5 rounded-lg">
                    <span className="bg-muted-foreground/65 rounded-full shrink-0 size-1.5"></span>
                    <span className="bg-muted-foreground/40 h-1.5 rounded-full w-24"></span>
                  </div>
                  <div className="bg-brand dark:bg-brand-subtle flex gap-3 items-center px-3 py-2.5 rounded-lg">
                    <span className="bg-brand-foreground dark:bg-brand-ink rounded-full shrink-0 size-1.5"></span>
                    <span className="bg-brand-foreground/35 dark:bg-muted-foreground/40 h-1.5 rounded-full w-32"></span>
                    <span className="dark:text-brand-ink font-mono ms-auto text-[11px] text-brand-foreground tracking-widest uppercase">
                      {"auto"}
                    </span>
                  </div>
                  <div className="flex gap-3 items-center px-3 py-2.5 rounded-lg">
                    <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1.5"></span>
                    <span className="bg-muted-foreground/40 h-1.5 rounded-full w-20"></span>
                  </div>
                </div>
              </div>
            </article>
            <article className="border-border border-t gap-8 grid lg:gap-10 lg:grid-cols-12 lg:items-start lg:py-14 py-10">
              <div className="lg:col-span-4">
                <h3 className="font-semibold max-w-[22ch] text-balance text-headline">
                  {"Security that survives the audit"}
                </h3>
                <p className="flex gap-3 items-baseline mt-5">
                  <span className="font-semibold tabular-nums text-2xl tracking-tight">
                    {"SOC 2"}
                  </span>
                  <span className="font-mono text-meta text-muted-foreground uppercase">
                    {"Type II aligned"}
                  </span>
                </p>
              </div>
              <p className="leading-relaxed lg:col-span-5 max-w-[58ch] text-muted-foreground text-pretty">
                {"Per-field encryption, role-scoped access, and an immutable trail on every mutation. When the review lands, you export evidence instead of assembling it."}
              </p>
              <div className="lg:col-span-3 pointer-events-none select-none" aria-hidden="true">
                <div className="flex flex-col">
                  <div className="border-b border-border flex gap-3 items-center last:border-b-0 py-2.5">
                    <span className="bg-muted-foreground/30 h-1.5 rounded-full shrink-0 w-10"></span>
                    <span className="bg-muted-foreground/45 h-1.5 rounded-full w-28"></span>
                    <svg className="lucide lucide-lock ms-auto shrink-0 size-3 text-muted-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div className="border-b border-border flex gap-3 items-center last:border-b-0 py-2.5">
                    <span className="bg-brand-ink h-1.5 rounded-full shrink-0 w-10"></span>
                    <span className="bg-muted-foreground/45 h-1.5 rounded-full w-20"></span>
                    <svg className="lucide lucide-lock ms-auto shrink-0 size-3 text-brand-ink" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div className="border-b border-border flex gap-3 items-center last:border-b-0 py-2.5">
                    <span className="bg-muted-foreground/30 h-1.5 rounded-full shrink-0 w-10"></span>
                    <span className="bg-muted-foreground/45 h-1.5 rounded-full w-24"></span>
                    <svg className="lucide lucide-lock ms-auto shrink-0 size-3 text-muted-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <div className="border-b border-border flex gap-3 items-center last:border-b-0 py-2.5">
                    <span className="bg-muted-foreground/30 h-1.5 rounded-full shrink-0 w-10"></span>
                    <span className="bg-muted-foreground/45 h-1.5 rounded-full w-16"></span>
                    <svg className="lucide lucide-lock ms-auto shrink-0 size-3 text-muted-foreground/70" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </article>
            <article className="border-border border-t gap-8 grid lg:gap-10 lg:grid-cols-12 lg:items-start lg:py-14 py-10">
              <div className="lg:col-span-4">
                <h3 className="font-semibold max-w-[22ch] text-balance text-headline">
                  {"Scheduling that reads the calendar"}
                </h3>
                <p className="flex gap-3 items-baseline mt-5">
                  <span className="font-semibold tabular-nums text-2xl tracking-tight">
                    {"38%"}
                  </span>
                  <span className="font-mono text-meta text-muted-foreground uppercase">
                    {"Less handoff lag"}
                  </span>
                </p>
              </div>
              <p className="leading-relaxed lg:col-span-5 max-w-[58ch] text-muted-foreground text-pretty">
                {"Work lands on whoever has room, in their own hours. The scheduler weighs capacity, timezone, and what is already booked before it assigns a thing."}
              </p>
              <div className="lg:col-span-3 pointer-events-none select-none" aria-hidden="true">
                <div className="flex flex-col gap-2">
                  <div className="font-mono gap-1.5 grid grid-cols-7 text-[11px] text-center text-muted-foreground">
                    <span>
                      {"M"}
                    </span>
                    <span>
                      {"T"}
                    </span>
                    <span>
                      {"W"}
                    </span>
                    <span>
                      {"T"}
                    </span>
                    <span>
                      {"F"}
                    </span>
                    <span>
                      {"S"}
                    </span>
                    <span>
                      {"S"}
                    </span>
                  </div>
                  <div className="gap-1.5 grid grid-cols-7">
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-[color-mix(in_oklab,var(--brand-ink)_80%,var(--brand))] dark:bg-brand-ink/70 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-[color-mix(in_oklab,var(--brand-ink)_30%,var(--brand))] dark:bg-brand-ink/40 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-brand-ink rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-brand dark:bg-brand-ink/25 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                    <span className="aspect-square bg-[color-mix(in_oklab,var(--brand-ink)_55%,var(--brand))] dark:bg-brand-ink/55 rounded-[4px]"></span>
                    <span className="aspect-square bg-card dark:bg-muted-foreground/15 rounded-[4px]"></span>
                  </div>
                </div>
              </div>
            </article>
            <article className="border-border border-t gap-8 grid lg:gap-10 lg:grid-cols-12 lg:items-start lg:py-14 py-10">
              <div className="lg:col-span-4">
                <h3 className="font-semibold max-w-[22ch] text-balance text-headline">
                  {"Analytics on the live model"}
                </h3>
                <p className="flex gap-3 items-baseline mt-5">
                  <span className="font-semibold tabular-nums text-2xl tracking-tight">
                    {"1.2s"}
                  </span>
                  <span className="font-mono text-meta text-muted-foreground uppercase">
                    {"Median query"}
                  </span>
                </p>
              </div>
              <p className="leading-relaxed lg:col-span-5 max-w-[58ch] text-muted-foreground text-pretty">
                {"Funnels, retention, and cohorts run on the records your automations touch, not a stale export. Ask the question in the morning, settle it before standup."}
              </p>
              <div className="lg:col-span-3 pointer-events-none select-none" aria-hidden="true">
                <div className="flex gap-1.5 h-32 items-end">
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "35.9375%"}}></span>
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "48.4375%"}}></span>
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "39.0625%"}}></span>
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "60.9375%"}}></span>
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "51.5625%"}}></span>
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "75%"}}></span>
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "62.5%"}}></span>
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "68.75%"}}></span>
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "85.9375%"}}></span>
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "70.3125%"}}></span>
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "93.75%"}}></span>
                  <span className="bg-muted-foreground/35 flex-1 min-w-0 rounded-t-[3px]" style={{height: "81.25%"}}></span>
                  <span className="bg-brand-ink flex-1 min-w-0 rounded-t-[3px]" style={{height: "100%"}}></span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="act seam">
        <div className="shell">
          <div className="gap-10 grid lg:gap-16 lg:grid-cols-12">
            <div className="flex flex-col lg:col-span-4">
              <h2 className="font-semibold max-w-[20ch] text-balance text-title">
                {"The notices are in"}
              </h2>
              <p className="max-w-[62ch] mt-5 text-lede text-muted-foreground text-pretty">
                {"Ten teams on what changed after the move, collected from renewal calls."}
              </p>
            </div>
            <figure className="lg:col-span-7 lg:col-start-6">
              <blockquote className="font-medium leading-snug text-headline text-pretty">
                {"We shut four tools off on a Friday and nobody has asked for any of them since. Monday standup was the first in a year that did not open with a syncing question."}
              </blockquote>
              <figcaption className="border-border border-t font-mono mt-6 pt-4 text-meta uppercase">
                <span className="text-foreground">
                  {"Ingrid Bergstrom"}
                </span>
                <span className="mx-2 text-muted-foreground" aria-hidden="true">
                  {"·"}
                </span>
                <span className="text-muted-foreground">
                  {"COO, Veldt"}
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="gap-x-10 lg:columns-3 lg:gap-x-14 lg:mt-24 md:columns-2 mt-20">
            <figure className="border-border border-t break-inside-avoid lg:mb-14 mb-10 pt-6">
              <p className="flex gap-2.5 items-baseline mb-4">
                <span className="font-semibold tabular-nums text-2xl tracking-tight">
                  {"40%"}
                </span>
                <span className="font-mono text-meta text-muted-foreground uppercase">
                  {"lower ops spend"}
                </span>
              </p>
              <blockquote className="leading-relaxed text-pretty">
                {"We retired the ETL vendor, the cron box, and both status dashboards inside a quarter. Finance noticed before engineering did."}
              </blockquote>
              <figcaption className="flex gap-3 items-center mt-5">
                <img className="object-cover rounded-full shrink-0 size-9" alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-6.png&w=48&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-6.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-6.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                <span className="text-sm">
                  <span className="font-medium">
                    {"Maya Lindqvist"}
                  </span>
                  <span className="block text-muted-foreground">
                    {"Head of Ops, Arclight"}
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure className="border-border border-t break-inside-avoid lg:mb-14 mb-10 pt-6">
              <blockquote className="leading-relaxed text-pretty">
                {"A typed integration failing in CI instead of at 2am is worth the invoice on its own. Eleven schema breaks caught since March, zero reached production."}
              </blockquote>
              <figcaption className="flex gap-3 items-center mt-5">
                <img className="object-cover rounded-full shrink-0 size-9" alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-7.png&w=48&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-7.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-7.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                <span className="text-sm">
                  <span className="font-medium">
                    {"Tomas Ricci"}
                  </span>
                  <span className="block text-muted-foreground">
                    {"Platform Lead, Nightjar"}
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure className="border-border border-t break-inside-avoid lg:mb-14 mb-10 pt-6">
              <blockquote className="leading-relaxed text-pretty">
                {"Standup got shorter. That is the whole review."}
              </blockquote>
              <figcaption className="flex gap-3 items-center mt-5">
                <img className="object-cover rounded-full shrink-0 size-9" alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-8.png&w=48&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-8.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-8.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                <span className="text-sm">
                  <span className="font-medium">
                    {"Jonas Weber"}
                  </span>
                  <span className="block text-muted-foreground">
                    {"Founder, Ottavo"}
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure className="border-border border-t break-inside-avoid lg:mb-14 mb-10 pt-6">
              <blockquote className="leading-relaxed text-pretty">
                {"I was ready to write the enrichment layer myself. Scoring on ingest got us further in a week than my roadmap had us reaching by June."}
              </blockquote>
              <figcaption className="flex gap-3 items-center mt-5">
                <img className="object-cover rounded-full shrink-0 size-9" alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-9.png&w=48&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-9.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-9.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                <span className="text-sm">
                  <span className="font-medium">
                    {"Amara Diallo"}
                  </span>
                  <span className="block text-muted-foreground">
                    {"CTO, Halcyon"}
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure className="border-border border-t break-inside-avoid lg:mb-14 mb-10 pt-6">
              <p className="flex gap-2.5 items-baseline mb-4">
                <span className="font-semibold tabular-nums text-2xl tracking-tight">
                  {"30x"}
                </span>
                <span className="font-mono text-meta text-muted-foreground uppercase">
                  {"launch week traffic"}
                </span>
              </p>
              <blockquote className="leading-relaxed text-pretty">
                {"Launch week peaked at thirty times a normal Tuesday. The per-request cost did not move. I checked twice."}
              </blockquote>
              <figcaption className="flex gap-3 items-center mt-5">
                <img className="object-cover rounded-full shrink-0 size-9" alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-10.png&w=48&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-10.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-10.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                <span className="text-sm">
                  <span className="font-medium">
                    {"Elena Vasquez"}
                  </span>
                  <span className="block text-muted-foreground">
                    {"VP Engineering, Copperline"}
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure className="border-border border-t break-inside-avoid lg:mb-14 mb-10 pt-6">
              <blockquote className="leading-relaxed text-pretty">
                {"Scheduling reads capacity and timezones better than the spreadsheet that used to run my mornings. I do not miss the spreadsheet."}
              </blockquote>
              <figcaption className="flex gap-3 items-center mt-5">
                <img className="object-cover rounded-full shrink-0 size-9" alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-11.png&w=48&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-11.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-11.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                <span className="text-sm">
                  <span className="font-medium">
                    {"Rosa Delgado"}
                  </span>
                  <span className="block text-muted-foreground">
                    {"Director of Ops, Bellwether"}
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure className="border-border border-t break-inside-avoid lg:mb-14 mb-10 pt-6">
              <blockquote className="leading-relaxed text-pretty">
                {"The cohort view settled an argument we had been having for two quarters. One afternoon, one chart, done."}
              </blockquote>
              <figcaption className="flex gap-3 items-center mt-5">
                <img className="object-cover rounded-full shrink-0 size-9" alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-12.png&w=48&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-12.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-12.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                <span className="text-sm">
                  <span className="font-medium">
                    {"Noor Haddad"}
                  </span>
                  <span className="block text-muted-foreground">
                    {"Product Manager, Solvine"}
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure className="border-border border-t break-inside-avoid lg:mb-14 mb-10 pt-6">
              <blockquote className="leading-relaxed text-pretty">
                {"Records land deduplicated and scored, so warehouse queries read like questions instead of archaeology."}
              </blockquote>
              <figcaption className="flex gap-3 items-center mt-5">
                <img className="object-cover rounded-full shrink-0 size-9" alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-13.png&w=48&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-13.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-13.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                <span className="text-sm">
                  <span className="font-medium">
                    {"Felix Andersen"}
                  </span>
                  <span className="block text-muted-foreground">
                    {"Data Lead, Fernwave"}
                  </span>
                </span>
              </figcaption>
            </figure>
            <figure className="border-border border-t break-inside-avoid lg:mb-14 mb-10 pt-6">
              <p className="flex gap-2.5 items-baseline mb-4">
                <span className="font-semibold tabular-nums text-2xl tracking-tight">
                  {"40h"}
                </span>
                <span className="font-mono text-meta text-muted-foreground uppercase">
                  {"back every week"}
                </span>
              </p>
              <blockquote className="leading-relaxed text-pretty">
                {"Forty hours a week came back to the marketing team. We spent every one of them on campaigns."}
              </blockquote>
              <figcaption className="flex gap-3 items-center mt-5">
                <img className="object-cover rounded-full shrink-0 size-9" alt="" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" style={{color: "transparent"}} srcSet="/_next/image?url=%2Favatars%2F300-14.png&w=48&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 1x, /_next/image?url=%2Favatars%2F300-14.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2 2x" src="/_next/image?url=%2Favatars%2F300-14.png&w=96&q=75&dpl=dpl_AJs6VM4Qr2xM6AA5GUSDgGvt9Dt2" />
                <span className="text-sm">
                  <span className="font-medium">
                    {"Grace Okafor"}
                  </span>
                  <span className="block text-muted-foreground">
                    {"CMO, Windrose"}
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="act-deep bg-stage dark overflow-hidden relative seam text-foreground">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{background: "conic-gradient(from 0deg at 50% -6rem, transparent 150deg, color-mix(in oklab, var(--color-brand) 7%, transparent) 180deg, transparent 210deg), conic-gradient(from 0deg at 50% -6rem, transparent 168deg, color-mix(in oklab, var(--color-brand) 14%, transparent) 180deg, transparent 192deg)", maskImage: "linear-gradient(to bottom, black 55%, transparent 98%)", WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 98%)"}}></div>
        <div className="relative shell z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative">
              <h2 className="font-semibold text-balance text-foreground/60 text-poster">
                <span className="block">
                  {"Four tools go dark."}
                </span>
                <span className="block">
                  {"The work takes the stage."}
                </span>
              </h2>
              <div className="absolute font-semibold inset-0 pointer-events-none select-none text-balance text-brand-ink text-poster" aria-hidden="true" style={{maskImage: "radial-gradient(clamp(8rem, 18vw, 13rem) circle at 50% 45%, black 45%, transparent 100%)", WebkitMaskImage: "radial-gradient(clamp(8rem, 18vw, 13rem) circle at 50% 45%, black 45%, transparent 100%)"}}>
                <span className="block">
                  {"Four tools go dark."}
                </span>
                <span className="block">
                  {"The work takes the stage."}
                </span>
              </div>
            </div>
            <p className="max-w-[58ch] mt-10 mx-auto text-lede text-muted-foreground text-pretty">
              {"Pipelines, automations, and analytics in one workspace. The glue code hours go back into the product."}
            </p>
          </div>
          <ul className="flex flex-col font-mono gap-y-3 items-center mt-16 mx-auto sm:divide-border sm:divide-x sm:flex-row sm:gap-y-0 text-meta text-muted-foreground uppercase w-fit">
            <li className="sm:first:pl-0 sm:last:pr-0 sm:px-7 sm:py-1">
              {"4 tools retired"}
            </li>
            <li className="sm:first:pl-0 sm:last:pr-0 sm:px-7 sm:py-1">
              {"40 hours a week back"}
            </li>
            <li className="sm:first:pl-0 sm:last:pr-0 sm:px-7 sm:py-1">
              {"1 invoice"}
            </li>
          </ul>
        </div>
      </section>
      <section className="act seam" id="pricing">
        <div className="shell">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col lg:max-w-2xl">
              <h2 className="font-semibold max-w-[20ch] text-balance text-title">
                {"One invoice for the whole run"}
              </h2>
              <p className="max-w-[62ch] mt-5 text-lede text-muted-foreground text-pretty">
                {"Every tier is the same platform. What changes is the cast, the volume, and the paperwork."}
              </p>
            </div>
            <div className="bg-muted border border-border inline-flex isolate items-center lg:self-auto p-1 rounded-full self-start shrink-0 w-fit" role="radiogroup" aria-label="Billing period">
              <button className="cursor-pointer focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-solid focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 inline-flex items-center outline-none press px-5 relative rounded-full text-foreground text-sm transition-colors" type="button" role="radio" aria-checked="true" tabIndex="0">
                <span className="-z-10 absolute bg-card dark:bg-foreground/10 dark:shadow-none inset-0 overflow-hidden shadow-sm" aria-hidden="true" style={{borderRadius: "9999px", opacity: "1"}}>
                  <span className="absolute bg-linear-to-r dark:block from-transparent h-px hidden inset-x-3 to-transparent top-0 via-brand/70"></span>
                </span>
                {"Monthly"}
              </button>
              <button className="cursor-pointer focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-solid focus-visible:ring-3 focus-visible:ring-ring/50 font-medium gap-2 h-9 hover:text-foreground inline-flex items-center outline-none press px-5 relative rounded-full text-muted-foreground text-sm transition-colors" type="button" role="radio" aria-checked="false" tabIndex="-1">
                {"Yearly"}
                <span className="bg-brand-subtle font-medium px-2 py-0.5 rounded-full text-brand-ink text-xs">
                  {"2 months free"}
                </span>
              </button>
            </div>
          </div>
          <div className="border-border border-t lg:mt-20 mt-16">
            <div className="grid lg:-mx-10 md:-mx-6 md:grid-cols-3">
              <article className="flex flex-col isolate lg:px-10 lg:py-12 md:px-6 py-10 relative" aria-label="Starter plan">
                <div className="lg:min-h-32 md:min-h-44">
                  <h3 className="font-semibold text-headline">
                    {"Starter"}
                  </h3>
                  <p className="font-mono h-4 mt-2 text-brand-ink text-meta uppercase" aria-hidden="true"></p>
                  <p className="max-w-[38ch] mt-3 text-muted-foreground text-pretty text-sm">
                    {"First workflows for a small cast. Nothing to configure."}
                  </p>
                </div>
                <p className="flex items-end mt-6">
                  <span className="grid h-12 items-end overflow-hidden relative">
                    <span className="col-start-1 font-semibold row-start-1 tabular-nums text-4xl tracking-tight" style={{opacity: "1", transform: "none"}}>
                      {"$"}
                      {"29"}
                    </span>
                  </span>
                  <span className="mb-1 ml-1.5 text-muted-foreground text-sm">
                    {"/month"}
                  </span>
                </p>
                <div className="mt-8">
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:hover:bg-input/30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 h-11 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground press px-3 rounded-full text-base w-full" type="button" tabIndex="0">
                    {"Start free trial"}
                  </Button>
                </div>
                <ul className="border-border border-t gap-3 grid mt-10 pt-8">
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"5 seats"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"3 typed integrations"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"1,000 automation runs a month"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Core analytics"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"90 days of event history"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Email support"}
                    </span>
                  </li>
                </ul>
              </article>
              <article className="flex flex-col isolate lg:px-10 lg:py-12 md:px-6 py-10 relative" aria-label="Professional plan">
                <span className="-inset-x-4 -top-px -z-10 absolute bg-card bottom-0 dark:shadow-none md:inset-x-0 pointer-events-none rounded-b-2xl shadow-lift" aria-hidden="true">
                  <span className="absolute bg-brand-ink h-0.5 inset-x-0 top-0"></span>
                </span>
                <div className="lg:min-h-32 md:min-h-44">
                  <h3 className="font-semibold text-headline">
                    {"Professional"}
                  </h3>
                  <p className="font-mono h-4 mt-2 text-brand-ink text-meta uppercase" aria-hidden="false">
                    {"Where most teams land"}
                  </p>
                  <p className="max-w-[38ch] mt-3 text-muted-foreground text-pretty text-sm">
                    {"The full platform for a team with production traffic and no patience for glue code."}
                  </p>
                </div>
                <p className="flex items-end mt-6">
                  <span className="grid h-12 items-end overflow-hidden relative">
                    <span className="col-start-1 font-semibold row-start-1 tabular-nums text-4xl tracking-tight" style={{opacity: "1", transform: "none"}}>
                      {"$"}
                      {"99"}
                    </span>
                  </span>
                  <span className="mb-1 ml-1.5 text-muted-foreground text-sm">
                    {"/month"}
                  </span>
                </p>
                <div className="mt-8">
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:bg-brand-active active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-brand bg-clip-padding border border-transparent brand-weave dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:shadow-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 h-11 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-brand-hover press px-6 rounded-full shadow-lift text-base text-brand-foreground w-full" type="button" tabIndex="0">
                    {"Start free trial"}
                  </Button>
                </div>
                <ul className="border-border border-t gap-3 grid mt-10 pt-8">
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"25 seats"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Every integration, typed end to end"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"20,000 automation runs a month"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Enrichment on every record"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Funnels, retention, and cohort views"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Full API access"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Custom fields, views, and roles"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Priority support"}
                    </span>
                  </li>
                </ul>
              </article>
              <article className="border-border border-t flex flex-col isolate lg:px-10 lg:py-12 md:border-t-0 md:px-6 py-10 relative" aria-label="Enterprise plan">
                <div className="lg:min-h-32 md:min-h-44">
                  <h3 className="font-semibold text-headline">
                    {"Enterprise"}
                  </h3>
                  <p className="font-mono h-4 mt-2 text-brand-ink text-meta uppercase" aria-hidden="true"></p>
                  <p className="max-w-[38ch] mt-3 text-muted-foreground text-pretty text-sm">
                    {"For the org that arrives with procurement, a security review, and its own paper."}
                  </p>
                </div>
                <p className="flex items-end mt-6">
                  <span className="grid h-12 items-end overflow-hidden relative">
                    <span className="col-start-1 font-semibold row-start-1 tabular-nums text-4xl tracking-tight" style={{opacity: "1", transform: "none"}}>
                      {"$"}
                      {"299"}
                    </span>
                  </span>
                  <span className="mb-1 ml-1.5 text-muted-foreground text-sm">
                    {"/month"}
                  </span>
                </p>
                <div className="mt-8">
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:hover:bg-input/30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 h-11 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground press px-3 rounded-full text-base w-full" type="button" tabIndex="0">
                    {"Talk to sales"}
                  </Button>
                </div>
                <ul className="border-border border-t gap-3 grid mt-10 pt-8">
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Unlimited seats"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Unmetered automation runs"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"SSO, SCIM, and audit logs"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Per-field encryption controls"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Dedicated infrastructure option"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Guided onboarding"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"Net 30 invoicing"}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start text-sm">
                    <svg className="lucide lucide-check mt-0.5 shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span>
                      {"24/7 support with an SLA"}
                    </span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
          <div className="border-border border-t flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between mt-14 pt-6">
            <p className="max-w-[52ch] text-muted-foreground text-sm">
              {"Per workspace, billed monthly. Move tiers whenever you need to."}
            </p>
            <ul className="flex flex-wrap font-mono gap-x-10 gap-y-3 text-meta text-muted-foreground uppercase">
              <li>
                {"14 day trial"}
              </li>
              <li>
                {"No card required"}
              </li>
              <li>
                {"Cancel anytime"}
              </li>
              <li>
                {"30 day guarantee"}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="act bg-muted dark:bg-muted/30 seam" id="faq">
        <div className="gap-12 grid lg:gap-20 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] shell">
          <div className="lg:self-start lg:sticky lg:top-28">
            <div className="flex flex-col">
              <h2 className="font-semibold max-w-[20ch] text-balance text-title">
                {"Asked at every demo"}
              </h2>
              <p className="max-w-[62ch] mt-5 text-lede text-muted-foreground text-pretty">
                {"Straight answers on the trial, the invoice, and what it takes to leave."}
              </p>
            </div>
            <aside className="border-border border-t mt-12 pt-6">
              <h3 className="font-semibold">
                {"The house desk"}
              </h3>
              <p className="leading-relaxed max-w-[46ch] mt-3 text-muted-foreground text-pretty text-sm">
                {"Anything the program leaves out gets a person, not a macro."}
              </p>
              <a className="font-medium gap-2 group/desk hover:text-foreground inline-flex items-center mt-5 text-brand-ink text-sm transition-colors" href="#contact">
                {"Write to the desk"}
                <svg className="duration-200 ease-out fine-pointer:group-hover/desk:translate-x-0.5 lucide lucide-arrow-right motion-reduce:transition-none size-4 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <p className="flex gap-3 items-baseline mt-8">
                <span className="font-semibold tabular-nums text-2xl tracking-tight">
                  {"3h 12m"}
                </span>
                <span className="font-mono text-meta text-muted-foreground uppercase">
                  {"Median first reply"}
                </span>
              </p>
            </aside>
          </div>
          <Accordion className="**:data-[slot=accordion-content]:px-0 border-0 motion-reduce:**:data-[slot=accordion-content]:animate-none! overflow-hidden rounded-none" data-orientation="vertical" dir="ltr" role="region">
            <AccordionItem className="border-b border-border data-open:bg-transparent first:border-t group/item not-last:border-b py-1.5" data-orientation="vertical" index="0" data-open="">
              <h3 className="flex" data-orientation="vertical" data-index="0" data-open="">
                <AccordionTrigger className="**:data-[slot=accordion-trigger-icon]:duration-200 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground **:data-[slot=accordion-trigger-icon]:transition-colors border-x-0 focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-solid font-medium gap-6 group-data-[open]/item:**:data-[slot=accordion-trigger-icon]:text-brand-ink hover:no-underline md:py-7 p-4 px-0 py-6 text-lede text-left text-pretty tracking-tight" type="button" value="speed" data-orientation="vertical" panelOpen="" aria-disabled="false" aria-controls="base-ui-_R_d25flbH1_" aria-expanded="true" id="base-ui-_R_d25flbH2_" tabIndex="0">
                  {"How fast can we actually be in production?"}
                  <svg className="group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <svg className="group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </AccordionTrigger>
              </h3>
              <AccordionContent className="data-closed:animate-accordion-up data-open:animate-accordion-down px-4 text-sm" data-orientation="vertical" index="0" data-open="" id="base-ui-_R_d25flbH1_" aria-labelledby="base-ui-_R_d25flbH2_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto", animationName: "none"}}>
                <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-relaxed max-w-[68ch] pb-8 pr-10 pt-0 text-muted-foreground text-pretty">
                  {"First OAuth connection to a live deploy is under five minutes, with your own data rather than a demo set. Most teams wire in the full stack over an afternoon and promote the same day; nothing in setup requires a call with us."}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-border data-open:bg-transparent first:border-t group/item not-last:border-b py-1.5" data-orientation="vertical" hidden="" index="1" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="1" data-closed="">
                <AccordionTrigger className="**:data-[slot=accordion-trigger-icon]:duration-200 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground **:data-[slot=accordion-trigger-icon]:transition-colors border-x-0 focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-solid font-medium gap-6 group-data-[open]/item:**:data-[slot=accordion-trigger-icon]:text-brand-ink hover:no-underline md:py-7 p-4 px-0 py-6 text-lede text-left text-pretty tracking-tight" type="button" value="speed" data-orientation="vertical" hidden="" index="1" aria-disabled="false" aria-expanded="false" id="base-ui-_R_l25flbH2_" tabIndex="0">
                  {"What does the trial include?"}
                  <svg className="group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <svg className="group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </AccordionTrigger>
              </h3>
              <AccordionContent className="data-closed:animate-accordion-up data-open:animate-accordion-down px-4 text-sm" data-orientation="vertical" hidden="" index="1" data-closed="" hidden="until-found" id="base-ui-_R_l25flbH1_" aria-labelledby="base-ui-_R_l25flbH2_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto"}}>
                <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-relaxed max-w-[68ch] pb-8 pr-10 pt-0 text-muted-foreground text-pretty">
                  {"Fourteen days of the Professional plan with every feature on and no card up front. When it ends the workspace goes read-only instead of disappearing, so your integrations, views, and history wait while you decide."}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-border data-open:bg-transparent first:border-t group/item not-last:border-b py-1.5" data-orientation="vertical" hidden="" index="2" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="2" data-closed="">
                <AccordionTrigger className="**:data-[slot=accordion-trigger-icon]:duration-200 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground **:data-[slot=accordion-trigger-icon]:transition-colors border-x-0 focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-solid font-medium gap-6 group-data-[open]/item:**:data-[slot=accordion-trigger-icon]:text-brand-ink hover:no-underline md:py-7 p-4 px-0 py-6 text-lede text-left text-pretty tracking-tight" type="button" value="speed" data-orientation="vertical" hidden="" index="2" aria-disabled="false" aria-expanded="false" id="base-ui-_R_t25flbH2_" tabIndex="0">
                  {"Do we have to rip out our current tools first?"}
                  <svg className="group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <svg className="group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </AccordionTrigger>
              </h3>
              <AccordionContent className="data-closed:animate-accordion-up data-open:animate-accordion-down px-4 text-sm" data-orientation="vertical" hidden="" index="2" data-closed="" hidden="until-found" id="base-ui-_R_t25flbH1_" aria-labelledby="base-ui-_R_t25flbH2_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto"}}>
                <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-relaxed max-w-[68ch] pb-8 pr-10 pt-0 text-muted-foreground text-pretty">
                  {"No. Limelight connects to the stack you already run, and both keep working while you migrate at your own pace. Most teams retire the overlapping tools within a quarter, once nobody has opened them in weeks."}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-border data-open:bg-transparent first:border-t group/item not-last:border-b py-1.5" data-orientation="vertical" hidden="" index="3" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="3" data-closed="">
                <AccordionTrigger className="**:data-[slot=accordion-trigger-icon]:duration-200 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground **:data-[slot=accordion-trigger-icon]:transition-colors border-x-0 focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-solid font-medium gap-6 group-data-[open]/item:**:data-[slot=accordion-trigger-icon]:text-brand-ink hover:no-underline md:py-7 p-4 px-0 py-6 text-lede text-left text-pretty tracking-tight" type="button" value="speed" data-orientation="vertical" hidden="" index="3" aria-disabled="false" aria-expanded="false" id="base-ui-_R_1525flbH2_" tabIndex="0">
                  {"What happens when a connected tool changes its schema?"}
                  <svg className="group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <svg className="group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </AccordionTrigger>
              </h3>
              <AccordionContent className="data-closed:animate-accordion-up data-open:animate-accordion-down px-4 text-sm" data-orientation="vertical" hidden="" index="3" data-closed="" hidden="until-found" id="base-ui-_R_1525flbH1_" aria-labelledby="base-ui-_R_1525flbH2_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto"}}>
                <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-relaxed max-w-[68ch] pb-8 pr-10 pt-0 text-muted-foreground text-pretty">
                  {"Your build fails, on purpose. Every integration is typed end to end, so an upstream change breaks CI with a readable diff instead of quietly corrupting records in production over a weekend."}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-border data-open:bg-transparent first:border-t group/item not-last:border-b py-1.5" data-orientation="vertical" hidden="" index="4" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="4" data-closed="">
                <AccordionTrigger className="**:data-[slot=accordion-trigger-icon]:duration-200 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground **:data-[slot=accordion-trigger-icon]:transition-colors border-x-0 focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-solid font-medium gap-6 group-data-[open]/item:**:data-[slot=accordion-trigger-icon]:text-brand-ink hover:no-underline md:py-7 p-4 px-0 py-6 text-lede text-left text-pretty tracking-tight" type="button" value="speed" data-orientation="vertical" hidden="" index="4" aria-disabled="false" aria-expanded="false" id="base-ui-_R_1d25flbH2_" tabIndex="0">
                  {"How do plan changes and refunds work?"}
                  <svg className="group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <svg className="group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </AccordionTrigger>
              </h3>
              <AccordionContent className="data-closed:animate-accordion-up data-open:animate-accordion-down px-4 text-sm" data-orientation="vertical" hidden="" index="4" data-closed="" hidden="until-found" id="base-ui-_R_1d25flbH1_" aria-labelledby="base-ui-_R_1d25flbH2_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto"}}>
                <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-relaxed max-w-[68ch] pb-8 pr-10 pt-0 text-muted-foreground text-pretty">
                  {"Upgrades apply immediately, downgrades at the end of the period, and either way the difference is prorated on the next invoice. The first paid period carries a 30 day guarantee: write to support and the refund is processed in full, no exit interview."}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-border data-open:bg-transparent first:border-t group/item not-last:border-b py-1.5" data-orientation="vertical" hidden="" index="5" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="5" data-closed="">
                <AccordionTrigger className="**:data-[slot=accordion-trigger-icon]:duration-200 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground **:data-[slot=accordion-trigger-icon]:transition-colors border-x-0 focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-solid font-medium gap-6 group-data-[open]/item:**:data-[slot=accordion-trigger-icon]:text-brand-ink hover:no-underline md:py-7 p-4 px-0 py-6 text-lede text-left text-pretty tracking-tight" type="button" value="speed" data-orientation="vertical" hidden="" index="5" aria-disabled="false" aria-expanded="false" id="base-ui-_R_1l25flbH2_" tabIndex="0">
                  {"Where does our data live, and can we take it out?"}
                  <svg className="group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <svg className="group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </AccordionTrigger>
              </h3>
              <AccordionContent className="data-closed:animate-accordion-up data-open:animate-accordion-down px-4 text-sm" data-orientation="vertical" hidden="" index="5" data-closed="" hidden="until-found" id="base-ui-_R_1l25flbH1_" aria-labelledby="base-ui-_R_1l25flbH2_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto"}}>
                <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-relaxed max-w-[68ch] pb-8 pr-10 pt-0 text-muted-foreground text-pretty">
                  {"In your workspace, encrypted per field, with role-scoped access and an immutable trail on every mutation. Export is a button, not a ticket: the full history in open formats, before or after you cancel."}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b border-border data-open:bg-transparent first:border-t group/item not-last:border-b py-1.5" data-orientation="vertical" hidden="" index="6" data-closed="">
              <h3 className="flex" data-orientation="vertical" data-hidden="" data-index="6" data-closed="">
                <AccordionTrigger className="**:data-[slot=accordion-trigger-icon]:duration-200 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground **:data-[slot=accordion-trigger-icon]:transition-colors border-x-0 focus-visible:-outline-offset-2 focus-visible:outline-2 focus-visible:outline-foreground focus-visible:outline-solid font-medium gap-6 group-data-[open]/item:**:data-[slot=accordion-trigger-icon]:text-brand-ink hover:no-underline md:py-7 p-4 px-0 py-6 text-lede text-left text-pretty tracking-tight" type="button" value="speed" data-orientation="vertical" hidden="" index="6" aria-disabled="false" aria-expanded="false" id="base-ui-_R_1t25flbH2_" tabIndex="0">
                  {"We have procurement, a security review, and our own paper."}
                  <svg className="group-aria-expanded/accordion-trigger:hidden lucide lucide-chevron-down pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  <svg className="group-aria-expanded/accordion-trigger:inline hidden lucide lucide-chevron-up pointer-events-none shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m18 15-6-6-6 6"></path>
                  </svg>
                </AccordionTrigger>
              </h3>
              <AccordionContent className="data-closed:animate-accordion-up data-open:animate-accordion-down px-4 text-sm" data-orientation="vertical" hidden="" index="6" data-closed="" hidden="until-found" id="base-ui-_R_1t25flbH1_" aria-labelledby="base-ui-_R_1t25flbH2_" role="region" style={{"--accordion-panel-height": "auto", "--accordion-panel-width": "auto"}}>
                <div className="[&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4 data-ending-style:h-0 data-starting-style:h-0 h-(--accordion-panel-height) leading-relaxed max-w-[68ch] pb-8 pr-10 pt-0 text-muted-foreground text-pretty">
                  {"Good, bring them. Enterprise covers SSO, SCIM, dedicated infrastructure, net 30 invoicing, and a named contact who has read your requirements before the first call. Talk to sales and we will scope it together."}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <section className="beat seam">
        <div className="shell">
          <div className="gap-10 grid lg:gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <h2 className="font-semibold max-w-[14ch] text-balance text-title">
                {"Bring the whole operation into the light."}
              </h2>
              <p className="max-w-[54ch] mt-5 text-lede text-muted-foreground text-pretty">
                {"Connect the stack this afternoon. Every feature is on from day one, and nothing is deleted when the trial ends."}
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex flex-col gap-3 lg:justify-end sm:flex-row">
                <Button className="[&_svg:not([class*='size-'])]:size-4 [&_svg]:transition-transform active:bg-brand-active active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-brand bg-clip-padding border border-transparent brand-weave dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:shadow-none fine-pointer:[&_svg]:hover:translate-x-1 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 h-11 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-brand-hover press px-6 rounded-full shadow-lift text-base text-brand-foreground" href="#pricing" role="button" tabIndex="0">
                  {"Start the free trial"}
                  <svg className="lucide lucide-arrow-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Button>
                <Button className="[&_svg:not([class*='size-'])]:size-4 active:not-aria-[haspopup]:translate-y-px aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-background bg-clip-padding border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:bg-transparent dark:hover:bg-input/30 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 h-11 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-muted hover:text-foreground press px-6 rounded-full text-base" href="#contact" role="button" tabIndex="0">
                  {"Book a walkthrough"}
                </Button>
              </div>
              <p className="font-mono lg:text-right mt-5 text-caption text-muted-foreground">
                {"14 days · No card required · Cancel from the billing page"}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="act bg-muted dark:bg-muted/30 seam" id="contact">
        <div className="shell">
          <div className="gap-14 grid lg:gap-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
            <div>
              <h2 className="font-semibold max-w-[16ch] text-balance text-title">
                {"Talk to the crew that runs it"}
              </h2>
              <p className="max-w-[54ch] mt-5 text-lede text-muted-foreground text-pretty">
                {"Migrations, security questionnaires, or a question the docs did not settle. Messages land with the engineers who operate the platform."}
              </p>
              <dl className="border-border border-t mt-12">
                <div className="border-b border-border gap-1 grid py-5 sm:gap-6 sm:grid-cols-[7rem_1fr]">
                  <dt className="font-mono pt-1 text-meta text-muted-foreground uppercase">
                    {"Email"}
                  </dt>
                  <dd>
                    <a className="font-medium hover:text-brand-ink hover:underline transition-colors underline-offset-4" href="mailto:hello@limelight.app">
                      {"hello@limelight.app"}
                    </a>
                    <p className="max-w-[46ch] mt-1 text-muted-foreground text-sm">
                      {"Best for anything with detail. Attachments welcome."}
                    </p>
                  </dd>
                </div>
                <div className="border-b border-border gap-1 grid py-5 sm:gap-6 sm:grid-cols-[7rem_1fr]">
                  <dt className="font-mono pt-1 text-meta text-muted-foreground uppercase">
                    {"Phone"}
                  </dt>
                  <dd>
                    <a className="font-medium hover:text-brand-ink hover:underline transition-colors underline-offset-4" href="tel:+15551234567">
                      {"+1 (555) 123-4567"}
                    </a>
                    <p className="max-w-[46ch] mt-1 text-muted-foreground text-sm">
                      {"Monday to Friday, 9 to 6 Pacific. After hours it takes messages."}
                    </p>
                  </dd>
                </div>
                <div className="border-b border-border gap-1 grid py-5 sm:gap-6 sm:grid-cols-[7rem_1fr]">
                  <dt className="font-mono pt-1 text-meta text-muted-foreground uppercase">
                    {"Office"}
                  </dt>
                  <dd>
                    <span className="font-medium whitespace-pre-line">
                      {"48 Stagehouse Row, Floor 3\nSan Francisco, CA 94103"}
                    </span>
                    <p className="max-w-[46ch] mt-1 text-muted-foreground text-sm">
                      {"Visits by appointment. The coffee is decent."}
                    </p>
                  </dd>
                </div>
              </dl>
              <p className="flex flex-wrap gap-x-3 gap-y-1 items-baseline mt-8">
                <span className="font-semibold tabular-nums text-2xl tracking-tight">
                  {"3h 12m"}
                </span>
                <span className="text-muted-foreground text-sm">
                  {"Median first reply, trailing 90 days"}
                </span>
              </p>
            </div>
            <div>
              <div className="border-b border-border flex flex-wrap gap-x-6 gap-y-2 items-baseline justify-between lg:pt-2 pb-4">
                <h3 className="font-mono text-foreground text-meta uppercase">
                  {"Booking desk"}
                </h3>
                <p className="font-mono text-caption text-muted-foreground">
                  {"Replies within one business day"}
                </p>
              </div>
              <form className="mt-8" novalidate="">
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">
                    {"Company"}
                  </label>
                  <input id="company" type="text" tabIndex="-1" autoComplete="off" name="company" />
                </div>
                <div className="gap-5 grid">
                  <div className="gap-5 grid sm:grid-cols-2">
                    <div className="gap-2 grid">
                      <Label className="font-medium gap-2 group-data-[disabled=true]:opacity-50 leading-none peer-disabled:opacity-50 text-sm" htmlFor="name">
                        {"Name"}
                      </Label>
                      <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-card border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 file:font-medium file:h-7 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 h-11 md:text-sm px-3 py-1 rounded-xl text-base transition-[color,box-shadow,background-color]" id="name" type="text" placeholder="Your name" autoComplete="name" aria-invalid="false" name="name"></Input>
                    </div>
                    <div className="gap-2 grid">
                      <Label className="font-medium gap-2 group-data-[disabled=true]:opacity-50 leading-none peer-disabled:opacity-50 text-sm" htmlFor="email">
                        {"Email"}
                      </Label>
                      <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-card border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 file:font-medium file:h-7 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 h-11 md:text-sm px-3 py-1 rounded-xl text-base transition-[color,box-shadow,background-color]" id="email" type="email" placeholder="you@company.com" autoComplete="email" aria-invalid="false" name="email"></Input>
                    </div>
                  </div>
                  <div className="gap-2 grid">
                    <Label className="font-medium gap-2 group-data-[disabled=true]:opacity-50 leading-none peer-disabled:opacity-50 text-sm" htmlFor="subject">
                      {"Subject"}
                    </Label>
                    <Input className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-card border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 file:font-medium file:h-7 file:text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 h-11 md:text-sm px-3 py-1 rounded-xl text-base transition-[color,box-shadow,background-color]" id="subject" placeholder="What is this about?" aria-invalid="false" name="subject"></Input>
                  </div>
                  <div className="gap-2 grid">
                    <Label className="font-medium gap-2 group-data-[disabled=true]:opacity-50 leading-none peer-disabled:opacity-50 text-sm" htmlFor="message">
                      {"Message"}
                    </Label>
                    <Textarea className="aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-card border border-border dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm px-3 py-3 resize-none rounded-xl text-base transition-[color,box-shadow,background-color]" id="message" name="message" rows="5" placeholder="Tell us about your project or question..." aria-invalid="false"></Textarea>
                  </div>
                  <Button className="[&_svg:not([class*='size-'])]:size-4 active:bg-brand-active active:not-aria-[haspopup]:translate-y-px aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 bg-brand bg-clip-padding border border-transparent brand-weave dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:shadow-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 font-medium gap-1.5 h-11 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 hover:bg-brand-hover press px-6 rounded-full shadow-lift text-base text-brand-foreground w-full" type="submit" tabIndex="0">
                    {"Send message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="bg-stage dark overflow-hidden relative text-foreground">
      <div className="lg:pt-20 pb-10 pt-16 relative shell">
        <div className="gap-12 grid lg:gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="gap-2 inline-flex items-center">
              <svg className="shrink-0 size-5 sm:size-6 text-brand-ink" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 2.5h4l5.5 15.5h-15L10 2.5z"></path>
                <ellipse cx="12" cy="20.25" rx="10" ry="2.25" opacity="0.4"></ellipse>
              </svg>
              <span className="font-bold sm:text-xl text-foreground text-lg tracking-tight">
                {"Limelight"}
              </span>
            </span>
            <p className="max-w-xs mt-4 text-muted-foreground">
              {"One console for your tools, your data, and the routine work between them."}
            </p>
            <a className="border border-border gap-2.5 hover:border-foreground/30 hover:text-foreground inline-flex items-center mt-8 pl-3 pr-4 py-1.5 rounded-full text-muted-foreground text-sm transition-colors" href="#">
              <span className="flex relative size-2" aria-hidden="true">
                <span className="absolute bg-brand/60 inset-0 motion-safe:animate-ping rounded-full"></span>
                <span className="bg-brand relative rounded-full size-2"></span>
              </span>
              {"All systems on air"}
            </a>
          </div>
          <nav className="gap-x-8 gap-y-10 grid grid-cols-2 lg:col-span-7 lg:justify-items-end sm:grid-cols-3" aria-label="Footer">
            <div>
              <h3 className="font-mono text-meta text-muted-foreground uppercase">
                {"Product"}
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#features">
                    {"Features"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#how-it-works">
                    {"How it works"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#pricing">
                    {"Pricing"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#">
                    {"Changelog"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#">
                    {"Docs"}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-meta text-muted-foreground uppercase">
                {"Company"}
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#">
                    {"About"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#">
                    {"Blog"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#">
                    {"Careers"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#contact">
                    {"Contact"}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-meta text-muted-foreground uppercase">
                {"Resources"}
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#">
                    {"Help center"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#">
                    {"API reference"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#">
                    {"Community"}
                  </a>
                </li>
                <li>
                  <a className="hover:text-foreground text-muted-foreground text-sm transition-colors" href="#">
                    {"Security"}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="border-border border-t flex flex-col gap-6 md:flex-row md:items-center md:justify-between mt-14 pt-8">
          <div className="flex flex-wrap gap-x-6 gap-y-2 items-center text-muted-foreground text-sm">
            <p>
              {"©"}
              {"2026"}
              {"Limelight"}
            </p>
            <a className="hover:text-foreground transition-colors" href="#">
              {"Privacy"}
            </a>
            <a className="hover:text-foreground transition-colors" href="#">
              {"Terms"}
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-4 items-center">
            <ul className="flex gap-2">
              <li>
                <a className="border border-border flex hover:border-foreground/30 hover:text-foreground items-center justify-center rounded-full size-9 text-muted-foreground transition-colors" href="https://x.com/neui_io" aria-label="X" target="_blank" rel="noopener noreferrer">
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a className="border border-border flex hover:border-foreground/30 hover:text-foreground items-center justify-center rounded-full size-9 text-muted-foreground transition-colors" href="https://github.com/newcapec/neui" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58l-.01-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22l-.01 3.29c0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a className="border border-border flex hover:border-foreground/30 hover:text-foreground items-center justify-center rounded-full size-9 text-muted-foreground transition-colors" href="https://www.linkedin.com/company/neui" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a className="border border-border flex hover:border-foreground/30 hover:text-foreground items-center justify-center rounded-full size-9 text-muted-foreground transition-colors" href="mailto:hello@neui.io" aria-label="Email">
                  <svg className="lucide lucide-mail size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                </a>
              </li>
            </ul>
            <p className="text-muted-foreground text-sm">
              {"Product by"}
              <a className="hover:underline text-foreground transition-colors underline-offset-4" href="https://neui.io" target="_blank" rel="noopener noreferrer">
                {"NeUI"}
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="-mb-[0.14em] [mask-image:linear-gradient(to_bottom,rgb(0_0_0/0.22),rgb(0_0_0/0.06)_55%,transparent_92%)] font-semibold leading-none pointer-events-none relative select-none text-[clamp(4rem,14vw,12.5rem)] text-center text-foreground tracking-[-0.045em] uppercase" aria-hidden="true">
        {"Limelight"}
      </p>
    </footer>
  </>
  )
}
