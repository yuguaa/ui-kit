import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import {
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Progress,
  ProgressIndicator,
  ProgressTrack,
} from "@/registry/bases/base/ui/progress"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-emerald-900 flex items-center lg:px-8 min-h-svh overflow-hidden px-4 py-12 relative sm:px-6 w-full" aria-labelledby="hero-3-title">
        <svg className="absolute inset-0 pointer-events-none size-full" aria-hidden="true">
          <defs>
            <pattern id="_r_0_-dots" patternUnits="userSpaceOnUse" width="6" height="6">
              <circle cx="1" cy="1" r="0.55" fill="white"></circle>
            </pattern>
            <radialgradient id="_r_0_-fade" cx="30%" cy="20%" r="120%">
              <stop offset="0%" stopColor="white" stopOpacity="0.85"></stop>
              <stop offset="60%" stopColor="white" stopOpacity="0.5"></stop>
              <stop offset="100%" stopColor="white" stopOpacity="0"></stop>
            </radialgradient>
            <mask id="_r_0_-mask">
              <rect width="100%" height="100%" fill="url(#_r_0_-fade)"></rect>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#_r_0_-dots)" fillOpacity="0.18" mask="url(#_r_0_-mask)"></rect>
        </svg>
        <div className="-left-[130px] -top-[120px] absolute bg-[oklch(0.9022_0.2519_132.47)]/12 blur-[100px] pointer-events-none rounded-full size-[500px]" aria-hidden="true"></div>
        <div className="gap-8 grid grid-cols-1 items-center lg:grid-cols-2 lg:max-w-7xl max-w-[624px] mx-auto relative w-full">
          <div className="@container flex flex-col gap-6 items-start justify-center min-w-72">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-green-900 border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-sm text-white transition-shadow">
              <svg className="invert size-3.5" aria-hidden="true" viewBox="0 0 180 180">
                <mask height="180" id=":r8:mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{maskType: "alpha"}}>
                  <circle cx="90" cy="90" fill="black" r="90"></circle>
                </mask>
                <g mask="url(#:r8:mask0_408_134)">
                  <circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle>
                  <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:r8:paint0_linear_408_134)"></path>
                  <rect fill="url(#:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect>
                </g>
                <defs>
                  <lineargradient gradientUnits="userSpaceOnUse" id=":r8:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5">
                    <stop stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </lineargradient>
                  <lineargradient gradientUnits="userSpaceOnUse" id=":r8:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875">
                    <stop stopColor="white"></stop>
                    <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                  </lineargradient>
                </defs>
              </svg>
              {"Built for Next.js"}
            </Badge>
            <h1 className="@md:text-3xl @xl:leading-10 @xl:text-4xl font-semibold leading-tight text-2xl text-white" id="hero-3-title">
              <span className="@xl:block">
                {"The complete shadcn registry"}
              </span>
              <span className="@xl:block">
                {"for building"}
                <span className="[text-box:trim-both_cap_text] bg-black/30 inline-block px-2 py-0.5 rounded-sm">
                  {"modern Next.js"}
                </span>
              </span>
              <span className="@xl:block">
                {"apps with AI agents"}
              </span>
            </h1>
            <p className="leading-6 text-base text-white/50">
              {"Install production-ready components, blocks, and templates from a curated registry with MCP support and Agent Skills built into every workflow."}
            </p>
            <div className="flex flex-wrap gap-5 items-center">
              <div className="flex gap-2 items-center">
                <IconTile className="[--icon-tile-icon-size:--spacing(4)]! [--icon-tile-inset:--spacing(1)]! after:bg-[linear-gradient(180deg,var(--color-emerald-800)_0%,var(--color-emerald-900)_100%)] after:border-white/10! after:shadow-md bg-black/10 border-transparent text-white" variant="frame" size="default">
                  <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine" aria-hidden="true">
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M9 3v18"></path>
                  </svg>
                </IconTile>
                <span className="font-medium text-sm text-white">
                  {"MCP-ready"}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <IconTile className="[--icon-tile-icon-size:--spacing(4)]! [--icon-tile-inset:--spacing(1)]! after:bg-[linear-gradient(180deg,var(--color-emerald-800)_0%,var(--color-emerald-900)_100%)] after:border-white/10! after:shadow-md bg-black/10 border-transparent text-white" variant="frame" size="default">
                  <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx="4" cy="20" r="2"></circle>
                  </svg>
                </IconTile>
                <span className="font-medium text-sm text-white">
                  {"Agent Skills"}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:w-auto w-full">
              <Button className="bg-lime-400 hover:bg-lime-300 shadow-2xs text-lime-950" href="#" role="button" tabIndex="0">
                {"Start Building"}
              </Button>
              <Button className="bg-white/10 border-transparent hover:bg-white/15 shadow-xs text-white" href="#" role="button" tabIndex="0">
                {"Read Docs"}
              </Button>
            </div>
            <Separator className="bg-white/10 max-w-md w-full" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-4">
              <span className="text-sm text-white/60">
                {"Trusted by leading builders"}
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-4 items-center sm:gap-x-6 sm:gap-y-5">
                <span className="text-white/90">
                  <svg className="h-3.5 sm:h-4 w-auto" aria-hidden="true" aria-label="Vercel logotype" viewBox="0 0 262 52">
                    <path d="M59.8019 52L29.9019 0L0.00190544 52H59.8019ZM89.9593 49.6328L114.947 2.36365H104.139L86.9018 36.6921L69.6647 2.36365H58.8564L83.8442 49.6328H89.9593ZM260.25 2.36365V49.6329H251.302V2.36365H260.25ZM210.442 31.99C210.442 28.3062 211.211 25.0661 212.749 22.2699C214.287 19.4737 216.431 17.321 219.181 15.812C221.93 14.3029 225.146 13.5484 228.828 13.5484C232.09 13.5484 235.026 14.2585 237.636 15.6788C240.245 17.0991 242.319 19.2074 243.857 22.0036C245.395 24.7998 246.187 28.2174 246.234 32.2564V34.3202H219.88C220.066 37.2496 220.928 39.5576 222.466 41.2442C224.051 42.8864 226.171 43.7075 228.828 43.7075C230.505 43.7075 232.043 43.2637 233.441 42.376C234.839 41.4883 235.888 40.2899 236.587 38.7808L245.745 39.4466C244.626 42.7754 242.529 45.4385 239.453 47.4358C236.377 49.4331 232.835 50.4317 228.828 50.4317C225.146 50.4317 221.93 49.6772 219.181 48.1681C216.431 46.6591 214.287 44.5064 212.749 41.7102C211.211 38.914 210.442 35.6739 210.442 31.99ZM237.006 28.6612C236.68 25.7762 235.771 23.668 234.28 22.3365C232.789 20.9606 230.971 20.2726 228.828 20.2726C226.358 20.2726 224.354 21.0049 222.816 22.4696C221.278 23.9343 220.322 25.9982 219.95 28.6612H237.006ZM195.347 22.3365C196.838 23.5348 197.77 25.1993 198.143 27.3297L207.371 26.8637C207.044 24.1562 206.089 21.8039 204.505 19.8066C202.92 17.8093 200.869 16.278 198.353 15.2128C195.883 14.1032 193.157 13.5484 190.174 13.5484C186.492 13.5484 183.277 14.3029 180.527 15.812C177.777 17.321 175.634 19.4737 174.096 22.2699C172.558 25.0661 171.789 28.3062 171.789 31.99C171.789 35.6739 172.558 38.914 174.096 41.7102C175.634 44.5064 177.777 46.6591 180.527 48.1681C183.277 49.6772 186.492 50.4317 190.174 50.4317C193.25 50.4317 196.046 49.8769 198.563 48.7673C201.079 47.6133 203.13 45.9933 204.714 43.9072C206.299 41.8212 207.254 39.38 207.58 36.5838L198.283 36.1844C197.957 38.5367 197.048 40.3565 195.557 41.6436C194.065 42.8864 192.271 43.5078 190.174 43.5078C187.285 43.5078 185.048 42.5091 183.463 40.5118C181.879 38.5145 181.086 35.6739 181.086 31.99C181.086 28.3062 181.879 25.4656 183.463 23.4683C185.048 21.471 187.285 20.4723 190.174 20.4723C192.178 20.4723 193.902 21.0937 195.347 22.3365ZM149.955 14.3457H158.281L158.522 21.1369C159.113 19.2146 159.935 17.7218 160.988 16.6585C162.514 15.1166 164.642 14.3457 167.371 14.3457H170.771V21.6146H167.302C165.359 21.6146 163.763 21.8789 162.514 22.4075C161.311 22.9362 160.386 23.7732 159.739 24.9186C159.137 26.064 158.837 27.5178 158.837 29.2799V49.6328H149.955V14.3457ZM111.548 22.2699C110.01 25.0661 109.241 28.3062 109.241 31.99C109.241 35.6739 110.01 38.914 111.548 41.7102C113.086 44.5064 115.229 46.6591 117.979 48.1681C120.729 49.6772 123.944 50.4317 127.626 50.4317C131.634 50.4317 135.176 49.4331 138.252 47.4358C141.327 45.4385 143.425 42.7754 144.543 39.4466L135.385 38.7808C134.686 40.2899 133.638 41.4883 132.24 42.376C130.842 43.2637 129.304 43.7075 127.626 43.7075C124.97 43.7075 122.849 42.8864 121.265 41.2442C119.727 39.5576 118.865 37.2496 118.678 34.3202H145.032V32.2564C144.986 28.2174 144.194 24.7998 142.656 22.0036C141.118 19.2074 139.044 17.0991 136.434 15.6788C133.824 14.2585 130.888 13.5484 127.626 13.5484C123.944 13.5484 120.729 14.3029 117.979 15.812C115.229 17.321 113.086 19.4737 111.548 22.2699ZM133.079 22.3365C134.57 23.668 135.479 25.7762 135.805 28.6612H118.748C119.121 25.9982 120.076 23.9343 121.614 22.4696C123.152 21.0049 125.156 20.2726 127.626 20.2726C129.77 20.2726 131.587 20.9606 133.079 22.3365Z" fill="white"></path>
                  </svg>
                </span>
                <span className="text-white/90">
                  <svg className="h-3 sm:h-3.5 w-auto" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 1655.29 278.83">
                    <path fill="#fff" d="M139.03,4.61h90.64v49.93h-87.57c-47.24,0-84.11,27.27-84.11,84.88s36.87,84.88,84.11,84.88h87.57v49.93h-94.48c-79.12,0-135.19-46.48-135.19-134.82S59.91,4.61,139.03,4.61Z"></path>
                    <path fill="#fff" d="M275.75,4.61h56.07v164.76c0,41.09,18.82,60.3,62.99,60.3s62.99-19.2,62.99-60.3V4.61h56.07v176.28c0,59.91-38.02,97.94-119.06,97.94s-119.06-38.41-119.06-98.32V4.61Z"></path>
                    <path fill="#fff" d="M806.9,81.04c0,29.96-17.28,53-40.33,62.99v.77c24.2,3.46,36.49,20.74,36.87,44.17l1.15,85.26h-56.07l-1.15-76.04c-.38-16.9-10.37-27.27-30.34-27.27h-93.33v103.31h-56.07V4.61h154.78c50.7,0,84.49,25.73,84.49,76.43h0ZM750.45,88.72c0-23.04-12.29-35.72-35.33-35.72h-91.41v71.43h92.17c21.12,0,34.57-12.67,34.57-35.72h0Z"></path>
                    <path fill="#fff" d="M1018.9,195.49c0-19.2-12.29-27.27-30.72-28.8l-62.22-5.76c-53.77-4.99-81.81-26.12-81.81-77.2S878.72,4.61,928.26,4.61h137.49v48.39h-133.65c-19.2,0-31.49,9.99-31.49,29.19s12.67,28.42,31.88,29.96l63.37,5.38c48.01,4.22,79.5,26.12,79.5,77.58s-33.41,79.12-80.65,79.12h-143.64v-48.39h138.26c18.05,0,29.57-12.29,29.57-30.34h0Z"></path>
                    <path fill="#fff" d="M1239.35,0c84.49,0,137.88,54.15,137.88,139.03s-55.69,139.8-140.18,139.8-137.88-54.92-137.88-139.8S1154.86,0,1239.35,0ZM1319.24,139.41c0-56.84-33.03-90.25-81.04-90.25s-81.04,33.41-81.04,90.25,33.03,90.25,81.04,90.25,81.04-33.41,81.04-90.25Z"></path>
                    <path fill="#fff" d="M1655.29,81.04c0,29.96-17.28,53-40.33,62.99v.77c24.2,3.46,36.49,20.74,36.87,44.17l1.15,85.26h-56.07l-1.15-76.04c-.38-16.9-10.37-27.27-30.34-27.27h-93.33v103.31h-56.07V4.61h154.78c50.7,0,84.49,25.73,84.49,76.43h0ZM1598.83,88.72c0-23.04-12.29-35.72-35.33-35.72h-91.41v71.43h92.17c21.12,0,34.57-12.67,34.57-35.72h0Z"></path>
                  </svg>
                </span>
                <span className="text-white/90">
                  <svg className="h-3.5 sm:h-4 w-auto" aria-hidden="true" fill="none" viewBox="0 0 441 128">
                    <path fill="#fff" d="M166.971 40.917c11.605 0 23.824 4.606 31.392 13.519a.14.14 0 0 1-.015.196l-11.393 9.858a.141.141 0 0 1-.198-.013 24.393 24.393 0 0 0-8.422-6.174 24.897 24.897 0 0 0-10.437-2.133c-13.41 0-22.35 9.192-22.35 22.63 0 6.713 2.223 12.345 6.087 16.29a22.093 22.093 0 0 0 7.464 4.805 22.461 22.461 0 0 0 8.799 1.511 26.7 26.7 0 0 0 10.378-1.996 26.24 26.24 0 0 0 8.635-5.752.141.141 0 0 1 .192-.007l11.645 10.047a.14.14 0 0 1 .013.2c-6.497 7.175-17.999 12.866-32.397 12.866-11.139 0-20.793-3.91-27.569-10.565C132.019 99.545 128 90.12 128 78.928c0-22.63 16.169-38.01 38.971-38.01Zm105.326.007c22.067 0 36.337 15.52 36.337 36.95a61.277 61.277 0 0 1-.457 6.659.141.141 0 0 1-.14.123h-54.261a.14.14 0 0 0-.136.171c2.321 10.287 10.27 16.557 21.26 16.557 3.579.075 7.126-.66 10.369-2.151a23.251 23.251 0 0 0 8.236-6.335.14.14 0 0 1 .199-.019l.447.373 11.163 9.719a.14.14 0 0 1 .018.194c-6.316 7.834-16.808 13.599-31.355 13.599-21.772 0-38.196-15.077-38.196-37.983 0-11.238 3.87-20.663 10.319-27.317a35.7 35.7 0 0 1 11.989-7.934 36.2 36.2 0 0 1 14.208-2.606Zm-46.636-28.948a.14.14 0 0 1 .141.14v103.509a.14.14 0 0 1-.141.141h-16.684a.14.14 0 0 1-.141-.141V12.117c0-.078.063-.141.141-.141h16.684Zm135.724 28.943a.14.14 0 0 1 .142.14v18.553c0 .081-.07.146-.151.14-1.944-.147-3.88-.29-5.072-.29-13.058 0-20.725 9.19-20.725 21.253v34.91a.14.14 0 0 1-.141.141h-16.683a.14.14 0 0 1-.141-.141v-73.52a.14.14 0 0 1 .141-.14h16.683a.14.14 0 0 1 .141.14V53.04c0 .057.047.103.104.103a.105.105 0 0 0 .083-.041c5.851-7.815 14.488-12.162 23.613-12.162l2.006-.022Zm26.947-28.943a.14.14 0 0 1 .141.14v63.165c0 .129.157.19.244.095l30.691-33.455a.142.142 0 0 1 .104-.046h20.063c.122 0 .187.145.105.236l-26.752 29.515a.142.142 0 0 0-.016.17l27.119 43.755a.14.14 0 0 1-.119.215h-19.033a.14.14 0 0 1-.12-.067l-19.234-30.912a.14.14 0 0 0-.119-.066h-.18a.144.144 0 0 0-.104.045l-12.612 13.55a.14.14 0 0 0-.037.096v17.213a.14.14 0 0 1-.141.141h-16.685a.14.14 0 0 1-.14-.141V12.117a.14.14 0 0 1 .14-.141h16.685ZM273.184 56.153a19.44 19.44 0 0 0-8.036 1.46 19.154 19.154 0 0 0-6.683 4.624 20.438 20.438 0 0 0-4.538 8.68.14.14 0 0 0 .135.173h37.036a.14.14 0 0 0 .135-.174c-2.156-8.804-8.293-14.763-18.049-14.763Z"></path>
                    <circle cx="64" cy="64" r="20" fill="#fff"></circle>
                    <path fill="#fff" fillOpacity="0.4" d="M99.572 10.788c1.999 1.34 2.17 4.156.468 5.858L85.424 31.262c-1.32 1.32-3.37 1.53-5.033.678A35.846 35.846 0 0 0 64 28c-19.882 0-36 16.118-36 36a35.846 35.846 0 0 0 3.94 16.391c.851 1.663.643 3.712-.678 5.033L16.646 100.04c-1.702 1.702-4.519 1.531-5.858-.468C3.974 89.399 0 77.163 0 64 0 28.654 28.654 0 64 0c13.163 0 25.399 3.974 35.572 10.788Z"></path>
                    <path fill="#fff" d="M100.04 111.354c1.702 1.702 1.531 4.519-.468 5.858C89.399 124.026 77.164 128 64 128c-13.164 0-25.399-3.974-35.572-10.788-2-1.339-2.17-4.156-.468-5.858l14.615-14.616c1.321-1.32 3.37-1.53 5.033-.678A35.846 35.846 0 0 0 64 100a35.846 35.846 0 0 0 16.392-3.94c1.662-.852 3.712-.643 5.032.678l14.616 14.616Z"></path>
                  </svg>
                </span>
                <span className="text-white/90">
                  <svg className="h-3.5 sm:h-4 w-auto" aria-hidden="true" fill="#ffff" fillRule="evenodd" viewBox="0 0 182 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                    <title>
                      {"Anthropic"}
                    </title>
                    <path d="M38.247 15.874L29.553 2.338H24.86v19.337h4.002V8.139l8.694 13.536h4.693V2.338h-4.003v13.536zm7.313-9.807h6.487v15.608h4.14V6.067h6.487v-3.73H45.56v3.73zm33.686 3.978h-9.109V2.338h-4.14v19.337h4.14v-7.9h9.109v7.9h4.14V2.338h-4.14v7.707zm13.39-3.978h5.108c2.043 0 3.12.746 3.12 2.155 0 1.408-1.077 2.154-3.12 2.154h-5.107v-4.31zm12.37 2.155c0-3.647-2.679-5.884-7.068-5.884h-9.443v19.337h4.142v-7.57h4.61l4.142 7.57h4.583l-4.586-8.146c2.302-.885 3.62-2.75 3.62-5.307zm12.686 9.91c-3.257 0-5.244-2.32-5.244-6.104 0-3.84 1.987-6.16 5.244-6.16 3.23 0 5.189 2.32 5.189 6.16 0 3.784-1.96 6.105-5.189 6.105zm0-16.132c-5.575 0-9.522 4.144-9.522 10.028 0 5.828 3.947 9.972 9.522 9.972 5.547 0 9.466-4.144 9.466-9.972C127.158 6.144 123.24 2 117.692 2zm22.59 8.929h-5.109V6.067h5.11c2.043 0 3.12.829 3.12 2.43 0 1.603-1.077 2.432-3.12 2.432zm.194-8.591h-9.445v19.337h4.142v-7.017h5.303c4.39 0 7.07-2.32 7.07-6.16 0-3.84-2.68-6.16-7.07-6.16zm35.108 12.839c-.718 1.878-2.153 2.956-4.113 2.956-3.257 0-5.244-2.32-5.244-6.105 0-3.84 1.987-6.16 5.244-6.16 1.96 0 3.395 1.077 4.113 2.955h4.388C178.896 4.68 175.667 2 171.472 2c-5.576 0-9.523 4.144-9.523 10.028 0 5.828 3.947 9.972 9.522 9.972 4.223 0 7.453-2.707 8.529-6.823h-4.416zm-26.39-12.84l7.705 19.338h4.225L153.42 2.338h-4.225zM9.277 14.024l2.636-6.796 2.637 6.796H9.276zm.428-11.685L2 21.675h4.307l1.576-4.06h8.06l1.575 4.06h4.307L14.121 2.338H9.704z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="@container lg:justify-self-end lg:max-w-[624px] w-full">
            <div className="aspect-[1020/600] lg:aspect-[624/600] relative w-full">
              <div className="[--hero3-scene-basis:1020px] [transform:translateX(-50%)_scale(calc(100cqw/var(--hero3-scene-basis)))] absolute hero3-scene left-1/2 lg:[--hero3-scene-basis:624px] origin-top top-0" role="img" aria-label="Isometric scene of registry blocks: an accessory permission dialog, a command palette, a payout slider, a button group, a team empty state, a code editor, a payment method menu, and a context menu" style={{width: "624px", height: "600px", "--background": "oklch(1 0 0)", "--color-background": "oklch(1 0 0)", "--foreground": "oklch(0.145 0 0)", "--color-foreground": "oklch(0.145 0 0)", "--card": "oklch(1 0 0)", "--color-card": "oklch(1 0 0)", "--card-foreground": "oklch(0.145 0 0)", "--color-card-foreground": "oklch(0.145 0 0)", "--popover": "oklch(1 0 0)", "--color-popover": "oklch(1 0 0)", "--popover-foreground": "oklch(0.145 0 0)", "--color-popover-foreground": "oklch(0.145 0 0)", "--primary": "oklch(0.205 0 0)", "--color-primary": "oklch(0.205 0 0)", "--primary-foreground": "oklch(0.985 0 0)", "--color-primary-foreground": "oklch(0.985 0 0)", "--secondary": "oklch(0.97 0 0)", "--color-secondary": "oklch(0.97 0 0)", "--secondary-foreground": "oklch(0.205 0 0)", "--color-secondary-foreground": "oklch(0.205 0 0)", "--muted": "oklch(0.97 0 0)", "--color-muted": "oklch(0.97 0 0)", "--muted-foreground": "oklch(0.556 0 0)", "--color-muted-foreground": "oklch(0.556 0 0)", "--accent": "oklch(0.97 0 0)", "--color-accent": "oklch(0.97 0 0)", "--accent-foreground": "oklch(0.205 0 0)", "--color-accent-foreground": "oklch(0.205 0 0)", "--destructive": "oklch(0.577 0.245 27.325)", "--color-destructive": "oklch(0.577 0.245 27.325)", "--border": "oklch(0.922 0 0)", "--color-border": "oklch(0.922 0 0)", "--input": "oklch(0.922 0 0)", "--color-input": "oklch(0.922 0 0)", "--ring": "oklch(0.708 0 0)", "--color-ring": "oklch(0.708 0 0)", "--success": "var(--color-emerald-500)", "--color-success": "var(--color-emerald-500)", "--success-foreground": "var(--color-emerald-900)", "--color-success-foreground": "var(--color-emerald-900)", "--destructive-foreground": "var(--color-red-800)", "--color-destructive-foreground": "var(--color-red-800)"}}>
                <style dangerouslySetInnerHTML={{ __html: "\n@keyframes hero3-rise {\n  from { opacity: 0; transform: translate3d(0, 34px, 0) }\n  to { opacity: 1; transform: translate3d(0, 0, 0) }\n}\n@keyframes hero3-bob {\n  0%, 100% { transform: translate3d(0, 0, 0) }\n  50% { transform: translate3d(0, -6px, 0) }\n}\n@keyframes hero3-ring { 0%, 100% { opacity: 0.6 } 50% { opacity: 1 } }\n@keyframes hero3-scan {\n  0% { scale: 0.28; opacity: 0 }\n  14% { opacity: 0.28 }\n  100% { scale: 1.18; opacity: 0 }\n}\n@keyframes hero3-packet {\n  0% { offset-distance: 0%; opacity: 0 }\n  10% { opacity: 1 }\n  80% { opacity: 1 }\n  100% { offset-distance: 100%; opacity: 0 }\n}\n@keyframes hero3-glow { 0%, 100% { opacity: 0.08 } 50% { opacity: 0.2 } }\n\n/* Entrance and ambient float sit on separate elements because both drive\n   `transform`; the pointer offset lives on the Motion wrapper above them. */\n.hero3-rise { animation: hero3-rise 900ms cubic-bezier(0.22,1,0.36,1) var(--hero3-delay) both }\n.hero3-bob { animation: hero3-bob var(--hero3-period) ease-in-out var(--hero3-delay) infinite }\n/* Depth feedback is the side going denser, never a filter: a filter forces the\n   face to rasterise at its pre-transform size and the scaled type turns soft. */\n.hero3-extrude {\n  opacity: var(--hero3-side-opacity, 0.62);\n  transition: opacity 620ms cubic-bezier(0.22,1,0.36,1);\n}\n.hero3-solid:hover { --hero3-side-opacity: 0.82 }\n\n/* Driven directly, not through `rounded-*`: the face corner and the swept side\n   beneath it must agree, or the solid reads misregistered. */\n.hero3-face [data-slot=\"card\"] { border-radius: var(--hero3-radius) }\n.hero3-face [data-slot=\"button-group\"] > :first-child {\n  border-start-start-radius: var(--hero3-radius);\n  border-end-start-radius: var(--hero3-radius);\n}\n.hero3-face [data-slot=\"button-group\"] > :last-child {\n  border-start-end-radius: var(--hero3-radius);\n  border-end-end-radius: var(--hero3-radius);\n}\n.hero3-ring { animation: hero3-ring 11s ease-in-out var(--hero3-delay) infinite }\n.hero3-scan { animation: hero3-scan 9s cubic-bezier(0.33,0,0.2,1) var(--hero3-delay) infinite }\n.hero3-packet { animation: hero3-packet var(--hero3-period) linear var(--hero3-delay) infinite }\n.hero3-glow { animation: hero3-glow 5.6s ease-in-out infinite }\n\n/* Inside the faces. One cursor walks any menu: every row shares the keyframe\n   and offsets by its own slot, so the list needs no per-row animation. */\n@keyframes hero3-row { 0% { opacity: 0 } 6%, 26% { opacity: 0.07 } 34%, 100% { opacity: 0 } }\n@keyframes hero3-caret { 0%, 45% { opacity: 1 } 55%, 100% { opacity: 0 } }\n@keyframes hero3-sheen {\n  0% { transform: translateX(-110%); opacity: 0 }\n  22% { opacity: 0.75 }\n  62%, 100% { transform: translateX(360%); opacity: 0 }\n}\n@keyframes hero3-cta {\n  0%, 100% { box-shadow: 0 0 0 0 rgb(0 0 0 / 0) }\n  50% { box-shadow: 0 0 0 3px rgb(0 0 0 / 0.09) }\n}\n@keyframes hero3-connect { 0%, 58%, 100% { opacity: 0.55; scale: 1 } 70% { opacity: 1; scale: 1.22 } }\n/* Scale, not travel: the roster is authored at half size and scaled again, so a\n   few pixels of movement would land under one rendered pixel. */\n@keyframes hero3-roster {\n  0%, 55%, 100% { scale: 1 }\n  68% { scale: 1.18 }\n}\n@keyframes hero3-fill { 0%, 100% { width: 25% } 50% { width: 68% } }\n/* One wave reads across the adoption bars: each column shares the keyframe and\n   offsets by its own index, so the whole chart breathes left to right. */\n@keyframes hero3-bar { 0%, 100% { opacity: 0.5 } 45% { opacity: 1 } }\n\n.hero3-row::after {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit;\n  background: currentColor; opacity: 0; pointer-events: none;\n  animation: hero3-row calc(var(--hero3-count) * 1.5s) ease-in-out calc(var(--hero3-step) * 1.5s) infinite;\n}\n/* The scene re-scopes the tokens so its cards stay light in both themes, but\n   these controls carry their own dark-mode fill, which no re-scope reaches.\n   The select and tabs triggers are found by their data-slot. Outline buttons\n   are not: only the radix Button publishes data-variant, so the faces tag all\n   five of theirs with `hero3-outline` and both twins stay identical. */\n.hero3-scene .hero3-outline { background-color: var(--background) }\n.hero3-scene [data-slot=\"select-trigger\"] { background-color: var(--background) }\n.hero3-scene [data-slot=\"tabs-trigger\"] {\n  background-color: var(--background);\n  border-color: transparent;\n  color: color-mix(in oklab, var(--foreground) 60%, transparent);\n}\n.hero3-scene .hero3-outline:hover { background-color: var(--muted) }\n.hero3-caret { animation: hero3-caret 1.1s steps(1, end) infinite }\n.hero3-sheen { animation: hero3-sheen 4.6s ease-in-out infinite }\n.hero3-fill [data-slot=\"progress-indicator\"] { animation: hero3-fill 6.4s ease-in-out infinite }\n.hero3-bar-col { animation: hero3-bar 2.6s ease-in-out infinite; animation-delay: calc(var(--hero3-bar-i) * 0.14s) }\n.hero3-cta { animation: hero3-cta 3.4s ease-in-out infinite }\n.hero3-connect { animation: hero3-connect 2.8s ease-in-out infinite }\n.hero3-roster > * { animation: hero3-roster 3.2s ease-in-out infinite; z-index: 0 }\n.hero3-roster > *:nth-child(2) { animation-delay: 0.26s }\n.hero3-roster > *:nth-child(3) { animation-delay: 0.52s }\n.hero3-roster > *:nth-child(4) { animation-delay: 0.78s }\n\n/* Same walking cursor as a menu row, for the segmented control. */\n.hero3-seg { position: relative }\n.hero3-seg::after {\n  content: \"\"; position: absolute; inset: 0; border-radius: inherit;\n  background: currentColor; opacity: 0; pointer-events: none;\n  animation: hero3-row calc(var(--hero3-count) * 1.5s) ease-in-out calc(var(--hero3-step) * 1.5s) infinite;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .hero3-rise, .hero3-bob, .hero3-ring, .hero3-scan, .hero3-packet, .hero3-glow,\n  .hero3-row::after, .hero3-seg::after, .hero3-caret, .hero3-sheen, .hero3-cta,\n  .hero3-connect, .hero3-roster > *, .hero3-bar-col,\n  .hero3-fill [data-slot=\"progress-indicator\"] {\n    animation: none;\n  }\n  .hero3-extrude { transition-duration: 1ms }\n  .hero3-scan, .hero3-packet, .hero3-sheen { opacity: 0 }\n  .hero3-rise, .hero3-caret { opacity: 1 }\n}\n" }} />
                <div className="absolute border-dashed border-l w-px" style={{height: "1100px", borderColor: "rgba(255, 255, 255, 0.15)", left: "311px", top: "350px"}}>
                  <span className="-left-px absolute bg-lime-300 hero3-packet rounded-full size-0.5" style={{offsetPath: "path(\"M 0 0 L 0 1100\")", "--hero3-period": "7.4s", "--hero3-delay": "1.1s"}}></span>
                </div>
                <div className="absolute" style={{left: "312.37px", top: "350px", transform: "translate(-50%, -50%)"}}>
                  <div className="hero3-ring" style={{width: "460px", height: "460px", borderRadius: "50px", background: "rgba(0, 76, 56, 0.5)", border: "1px dashed rgba(255, 255, 255, 0.2)", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", "--hero3-delay": "0s"}}></div>
                </div>
                <div className="absolute" style={{left: "312.01px", top: "350px", transform: "translate(-50%, -50%)"}}>
                  <div className="hero3-ring" style={{width: "500px", height: "500px", borderRadius: "70px", background: "transparent", border: "1px dashed rgba(255, 255, 255, 0.13)", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", "--hero3-delay": "1.3s"}}></div>
                </div>
                <div className="absolute" style={{left: "311.65px", top: "350px", transform: "translate(-50%, -50%)"}}>
                  <div className="hero3-ring" style={{width: "540px", height: "540px", borderRadius: "90px", background: "transparent", border: "1px dashed rgba(255, 255, 255, 0.09)", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", "--hero3-delay": "2.6s"}}></div>
                </div>
                <div className="absolute" aria-hidden="true" style={{left: "312px", top: "350px", transform: "translate(-50%, -50%)"}}>
                  <div className="hero3-scan" style={{width: "460px", height: "460px", borderRadius: "50px", border: "1px solid rgba(255, 255, 255, 0.28)", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", "--hero3-delay": "0s"}}></div>
                </div>
                <div className="absolute" aria-hidden="true" style={{left: "312px", top: "350px", transform: "translate(-50%, -50%)"}}>
                  <div className="hero3-scan" style={{width: "460px", height: "460px", borderRadius: "50px", border: "1px solid rgba(255, 255, 255, 0.28)", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", "--hero3-delay": "4.5s"}}></div>
                </div>
                <div className="absolute flex items-center justify-center" style={{left: "113.35px", top: "235.2px", width: "177.726px", height: "103.187px"}}>
                  <div className="border-dashed border-l relative w-px" style={{height: "204.643px", borderColor: "rgba(255, 255, 255, 0.15)", transform: "rotate(-60deg)"}}>
                    <span className="-left-px absolute bg-lime-300 hero3-packet rounded-full size-0.5" style={{offsetPath: "path(\"M 0 0 L 0 204.643\")", "--hero3-period": "9.6s", "--hero3-delay": "0s"}}></span>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center" style={{left: "333.35px", top: "234.77px", width: "177.726px", height: "103.187px"}}>
                  <div className="border-dashed border-l relative w-px" style={{height: "204.643px", borderColor: "rgba(255, 255, 255, 0.15)", transform: "rotate(60deg)"}}>
                    <span className="-left-px absolute bg-lime-300 hero3-packet rounded-full size-0.5" style={{offsetPath: "path(\"M 0 0 L 0 204.643\")", "--hero3-period": "9.6s", "--hero3-delay": "2.4s"}}></span>
                  </div>
                </div>
                <div className="absolute hero3-solid left-0 top-0" style={{"--hero3-period": "9.4s", "--hero3-delay": "0.28s"}}>
                  <div className="hero3-rise">
                    <div className="hero3-bob">
                      <div className="absolute hero3-extrude origin-top-left" style={{left: "114px", top: "295px", width: "230.4px", height: "55.2px", borderRadius: "12px", boxShadow: "rgb(95, 163, 146) -0.273px 0.273px 0px 0px, rgb(95, 163, 146) -0.545px 0.545px 0px 0px, rgb(95, 163, 146) -0.818px 0.818px 0px 0px, rgb(95, 163, 146) -1.091px 1.091px 0px 0px, rgb(95, 163, 146) -1.364px 1.364px 0px 0px, rgb(95, 163, 146) -1.636px 1.636px 0px 0px, rgb(95, 163, 146) -1.909px 1.909px 0px 0px, rgb(95, 163, 146) -2.182px 2.182px 0px 0px, rgb(95, 163, 146) -2.455px 2.455px 0px 0px, rgb(95, 163, 146) -2.727px 2.727px 0px 0px, rgb(95, 163, 146) -3px 3px 0px 0px, rgb(95, 163, 146) -3.273px 3.273px 0px 0px, rgb(95, 163, 146) -3.545px 3.545px 0px 0px, rgb(95, 163, 146) -3.818px 3.818px 0px 0px, rgb(95, 163, 146) -4.091px 4.091px 0px 0px, rgb(95, 163, 146) -4.364px 4.364px 0px 0px, rgb(95, 163, 146) -4.636px 4.636px 0px 0px, rgb(95, 163, 146) -4.909px 4.909px 0px 0px, rgb(95, 163, 146) -5.182px 5.182px 0px 0px, rgb(95, 163, 146) -5.455px 5.455px 0px 0px, rgb(95, 163, 146) -5.727px 5.727px 0px 0px, rgb(71, 197, 164) -6px 6px 0px 0.5px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}></div>
                      <div className="absolute hero3-face origin-top-left" style={{left: "114px", top: "295px", width: "230.4px", height: "55.2px", borderRadius: "12px", "--hero3-radius": "43.75px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <div className="origin-top-left" inert="" style={{width: "840px", height: "201.2px", transform: "scale(0.274286)"}}>
                          <div className="bg-card flex h-full items-center justify-center overflow-hidden rounded-[var(--hero3-radius)] w-full">
                            <div className="gap-6 grid grid-cols-1 grow lg:grid-cols-4 sm:grid-cols-2">
                              <Frame className="hero3-row overflow-hidden" style={{"--hero3-step": "0", "--hero3-count": "4"}}>
                                <FramePanel className="flex flex-col gap-5">
                                  <div className="flex gap-3 items-center justify-between">
                                    <h3 className="font-medium text-muted-foreground text-sm">
                                      {"All Orders"}
                                    </h3>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_4_" aria-expanded="false" extracted="1">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                  <div className="space-y-2.5">
                                    <div className="flex gap-2.5 items-center">
                                      <span className="font-medium text-2xl text-foreground tracking-tight">
                                        {"122,380"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/10 dark:border-success/15 dark:text-success-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                          <path d="m5 12 7-7 7 7"></path>
                                          <path d="M12 19V5"></path>
                                        </svg>
                                        {"15.1%"}
                                      </Badge>
                                    </div>
                                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                    <div className="text-muted-foreground text-xs">
                                      {"Vs last month:"}
                                      <span className="font-medium text-foreground">
                                        {"105,922"}
                                      </span>
                                    </div>
                                  </div>
                                </FramePanel>
                              </Frame>
                              <Frame className="hero3-row overflow-hidden" style={{"--hero3-step": "1", "--hero3-count": "4"}}>
                                <FramePanel className="flex flex-col gap-5">
                                  <div className="flex gap-3 items-center justify-between">
                                    <h3 className="font-medium text-muted-foreground text-sm">
                                      {"Order Created"}
                                    </h3>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_9_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                  <div className="space-y-2.5">
                                    <div className="flex gap-2.5 items-center">
                                      <span className="font-medium text-2xl text-foreground tracking-tight">
                                        {"1.9M"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border border-destructive/15 dark:bg-destructive/10 dark:border-destructive/15 dark:text-destructive-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-destructive-foreground text-xs transition-shadow">
                                        <svg className="lucide lucide-arrow-down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowDownIcon" tabler="IconArrowDown" hugeicons="ArrowDown02Icon" phosphor="ArrowDownIcon" remixicon="RiArrowDownLine" aria-hidden="true">
                                          <path d="M12 5v14"></path>
                                          <path d="m19 12-7 7-7-7"></path>
                                        </svg>
                                        {"-2%"}
                                      </Badge>
                                    </div>
                                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                    <div className="text-muted-foreground text-xs">
                                      {"Vs last month:"}
                                      <span className="font-medium text-foreground">
                                        {"2.0M"}
                                      </span>
                                    </div>
                                  </div>
                                </FramePanel>
                              </Frame>
                              <Frame className="hero3-row overflow-hidden" style={{"--hero3-step": "2", "--hero3-count": "4"}}>
                                <FramePanel className="flex flex-col gap-5">
                                  <div className="flex gap-3 items-center justify-between">
                                    <h3 className="font-medium text-muted-foreground text-sm">
                                      {"Organic Sales"}
                                    </h3>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_e_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                  <div className="space-y-2.5">
                                    <div className="flex gap-2.5 items-center">
                                      <span className="font-medium text-2xl text-foreground tracking-tight">
                                        {"$98.1M"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/10 dark:border-success/15 dark:text-success-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                          <path d="m5 12 7-7 7 7"></path>
                                          <path d="M12 19V5"></path>
                                        </svg>
                                        {"0.4%"}
                                      </Badge>
                                    </div>
                                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                    <div className="text-muted-foreground text-xs">
                                      {"Vs last month:"}
                                      <span className="font-medium text-foreground">
                                        {"$97.8M"}
                                      </span>
                                    </div>
                                  </div>
                                </FramePanel>
                              </Frame>
                              <Frame className="hero3-row overflow-hidden" style={{"--hero3-step": "3", "--hero3-count": "4"}}>
                                <FramePanel className="flex flex-col gap-5">
                                  <div className="flex gap-3 items-center justify-between">
                                    <h3 className="font-medium text-muted-foreground text-sm">
                                      {"Active Users"}
                                    </h3>
                                    <DropdownMenu>
                                    <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_j_" aria-expanded="false">
                                      <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                      </svg>
                                    </DropdownMenuTrigger>
                                    </DropdownMenu>
                                  </div>
                                  <div className="space-y-2.5">
                                    <div className="flex gap-2.5 items-center">
                                      <span className="font-medium text-2xl text-foreground tracking-tight">
                                        {"48,210"}
                                      </span>
                                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/10 dark:border-success/15 dark:text-success-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                                        <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                                          <path d="m5 12 7-7 7 7"></path>
                                          <path d="M12 19V5"></path>
                                        </svg>
                                        {"3.7%"}
                                      </Badge>
                                    </div>
                                    <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                                    <div className="text-muted-foreground text-xs">
                                      {"Vs last month:"}
                                      <span className="font-medium text-foreground">
                                        {"46,480"}
                                      </span>
                                    </div>
                                  </div>
                                </FramePanel>
                              </Frame>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-emerald-400 blur-[44px] hero3-glow pointer-events-none rounded-full size-28" aria-hidden="true" style={{left: "311px", top: "345px", transform: "translate(-50%, -50%)"}}></div>
                <div className="absolute origin-top-left" style={{left: "268px", top: "345px", width: "50px", height: "50px", borderRadius: "10px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(95, 163, 146) -0.321px 0.321px 0px 0px, rgb(95, 163, 146) -0.643px 0.643px 0px 0px, rgb(95, 163, 146) -0.964px 0.964px 0px 0px, rgb(95, 163, 146) -1.286px 1.286px 0px 0px, rgb(95, 163, 146) -1.607px 1.607px 0px 0px, rgb(95, 163, 146) -1.928px 1.928px 0px 0px, rgb(95, 163, 146) -2.25px 2.25px 0px 0px, rgb(95, 163, 146) -2.571px 2.571px 0px 0px, rgb(95, 163, 146) -2.893px 2.893px 0px 0px, rgb(95, 163, 146) -3.214px 3.214px 0px 0px, rgb(95, 163, 146) -3.535px 3.535px 0px 0px, rgb(95, 163, 146) -3.857px 3.857px 0px 0px, rgb(95, 163, 146) -4.178px 4.178px 0px 0px, rgb(95, 163, 146) -4.5px 4.5px 0px 0px, rgb(95, 163, 146) -4.821px 4.821px 0px 0px, rgb(95, 163, 146) -5.143px 5.143px 0px 0px, rgb(95, 163, 146) -5.464px 5.464px 0px 0px, rgb(95, 163, 146) -5.785px 5.785px 0px 0px, rgb(95, 163, 146) -6.107px 6.107px 0px 0px, rgb(95, 163, 146) -6.428px 6.428px 0px 0px, rgb(95, 163, 146) -6.75px 6.75px 0px 0px, rgb(71, 197, 164) -7.071px 7.071px 0px 0px", opacity: "0.62"}}></div>
                <div className="absolute origin-top-left" style={{left: "268px", top: "345px", width: "50px", height: "50px", borderRadius: "10px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(1, 105, 79)", border: "1px solid rgba(255, 255, 255, 0.1)"}}></div>
                <div className="absolute origin-top-left" style={{left: "303px", top: "340px", width: "10px", height: "10px", borderRadius: "2px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(95, 163, 146) -0.246px 0.246px 0px 0px, rgb(95, 163, 146) -0.492px 0.492px 0px 0px, rgb(95, 163, 146) -0.738px 0.738px 0px 0px, rgb(95, 163, 146) -0.984px 0.984px 0px 0px, rgb(95, 163, 146) -1.23px 1.23px 0px 0px, rgb(95, 163, 146) -1.477px 1.477px 0px 0px, rgb(95, 163, 146) -1.723px 1.723px 0px 0px, rgb(95, 163, 146) -1.969px 1.969px 0px 0px, rgb(95, 163, 146) -2.215px 2.215px 0px 0px, rgb(95, 163, 146) -2.461px 2.461px 0px 0px, rgb(95, 163, 146) -2.707px 2.707px 0px 0px, rgb(95, 163, 146) -2.953px 2.953px 0px 0px, rgb(95, 163, 146) -3.199px 3.199px 0px 0px, rgb(95, 163, 146) -3.445px 3.445px 0px 0px, rgb(95, 163, 146) -3.691px 3.691px 0px 0px, rgb(95, 163, 146) -3.937px 3.937px 0px 0px, rgb(95, 163, 146) -4.184px 4.184px 0px 0px, rgb(95, 163, 146) -4.43px 4.43px 0px 0px, rgb(95, 163, 146) -4.676px 4.676px 0px 0px, rgb(95, 163, 146) -4.922px 4.922px 0px 0px, rgb(95, 163, 146) -5.168px 5.168px 0px 0px, rgb(71, 197, 164) -5.414px 5.414px 0px 0px", opacity: "0.62"}}></div>
                <div className="absolute origin-top-left" style={{left: "303px", top: "340px", width: "10px", height: "10px", borderRadius: "2px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(1, 105, 79)", border: "1px solid rgb(38, 137, 112)"}}></div>
                <div className="absolute border-dashed border-l w-px" style={{height: "1200px", borderColor: "rgba(255, 255, 255, 0.15)", left: "311px", top: "-860px"}}>
                  <span className="-left-px absolute bg-lime-300 hero3-packet rounded-full size-0.5" style={{offsetPath: "path(\"M 0 0 L 0 1200\")", "--hero3-period": "8.8s", "--hero3-delay": "2.7s"}}></span>
                </div>
                <div className="absolute flex items-center justify-center" style={{left: "113.35px", top: "361.77px", width: "177.726px", height: "103.187px"}}>
                  <div className="border-dashed border-l relative w-px" style={{height: "204.643px", borderColor: "rgba(255, 255, 255, 0.15)", transform: "rotate(60deg)"}}>
                    <span className="-left-px absolute bg-lime-300 hero3-packet rounded-full size-0.5" style={{offsetPath: "path(\"M 0 0 L 0 204.643\")", "--hero3-period": "10.4s", "--hero3-delay": "1.6s"}}></span>
                  </div>
                </div>
                <div className="absolute flex items-center justify-center" style={{left: "333.35px", top: "362.2px", width: "177.726px", height: "103.187px"}}>
                  <div className="border-dashed border-l relative w-px" style={{height: "204.643px", borderColor: "rgba(255, 255, 255, 0.15)", transform: "rotate(-60deg)"}}>
                    <span className="-left-px absolute bg-lime-300 hero3-packet rounded-full size-0.5" style={{offsetPath: "path(\"M 0 0 L 0 204.643\")", "--hero3-period": "10.4s", "--hero3-delay": "4s"}}></span>
                  </div>
                </div>
                <div className="absolute hero3-solid left-0 top-0" style={{"--hero3-period": "7.6s", "--hero3-delay": "0.52s"}}>
                  <div className="hero3-rise">
                    <div className="hero3-bob">
                      <div className="absolute hero3-extrude origin-top-left" style={{left: "253.997px", top: "456px", width: "105.6px", height: "82.2px", borderRadius: "12px", boxShadow: "rgb(95, 163, 146) 0.273px 0.273px 0px 0px, rgb(95, 163, 146) 0.545px 0.545px 0px 0px, rgb(95, 163, 146) 0.818px 0.818px 0px 0px, rgb(95, 163, 146) 1.091px 1.091px 0px 0px, rgb(95, 163, 146) 1.364px 1.364px 0px 0px, rgb(95, 163, 146) 1.636px 1.636px 0px 0px, rgb(95, 163, 146) 1.909px 1.909px 0px 0px, rgb(95, 163, 146) 2.182px 2.182px 0px 0px, rgb(95, 163, 146) 2.455px 2.455px 0px 0px, rgb(95, 163, 146) 2.727px 2.727px 0px 0px, rgb(95, 163, 146) 3px 3px 0px 0px, rgb(95, 163, 146) 3.273px 3.273px 0px 0px, rgb(95, 163, 146) 3.545px 3.545px 0px 0px, rgb(95, 163, 146) 3.818px 3.818px 0px 0px, rgb(95, 163, 146) 4.091px 4.091px 0px 0px, rgb(95, 163, 146) 4.364px 4.364px 0px 0px, rgb(95, 163, 146) 4.636px 4.636px 0px 0px, rgb(95, 163, 146) 4.909px 4.909px 0px 0px, rgb(95, 163, 146) 5.182px 5.182px 0px 0px, rgb(95, 163, 146) 5.455px 5.455px 0px 0px, rgb(95, 163, 146) 5.727px 5.727px 0px 0px, rgb(71, 197, 164) 6px 6px 0px 0.5px", transform: "matrix(0.866025, 0.5, -0.866025, 0.5, 0, 0)"}}></div>
                      <div className="absolute hero3-face origin-top-left" style={{left: "253.997px", top: "456px", width: "105.6px", height: "82.2px", borderRadius: "12px", "--hero3-radius": "43.18px", transform: "matrix(0.866025, 0.5, -0.866025, 0.5, 0, 0)"}}>
                        <div className="origin-top-left" inert="" style={{width: "380px", height: "295.7px", transform: "scale(0.277895)"}}>
                          <div className="bg-card flex h-full items-center justify-center overflow-hidden rounded-[var(--hero3-radius)] w-full">
                            <Frame className="border-0 h-full w-full">
                              <FramePanel className="border-0 h-full justify-center">
                                <div className="flex gap-3 items-start justify-between mb-6">
                                  <div className="flex flex-col gap-0.5">
                                    <div className="font-semibold text-sm">
                                      {"Feature Adoption"}
                                    </div>
                                    <div className="font-medium text-muted-foreground text-sm">
                                      {"Best adoption report"}
                                    </div>
                                  </div>
                                  <DropdownMenu>
                                  <DropdownMenuTrigger className="-me-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_o_" aria-expanded="false">
                                    <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                                      <circle cx="12" cy="12" r="1"></circle>
                                      <circle cx="12" cy="5" r="1"></circle>
                                      <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                  </DropdownMenuTrigger>
                                  </DropdownMenu>
                                </div>
                                <div className="space-y-6">
                                  <div className="font-bold text-5xl text-foreground">
                                    {"84%"}
                                  </div>
                                  <div className="flex gap-2 h-32 items-end relative w-full">
                                    <div className="cursor-pointer flex flex-1 flex-col hero3-bar-col justify-end min-w-0 transition-all" style={{"--hero3-bar-i": "0"}}>
                                      <div className="bg-indigo-600 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-500 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-400 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-300 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-200 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-100 h-3 my-0.5 rounded"></div>
                                    </div>
                                    <div className="cursor-pointer flex flex-1 flex-col hero3-bar-col justify-end min-w-0 transition-all" style={{"--hero3-bar-i": "1"}}>
                                      <div className="bg-indigo-600 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-500 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-400 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-300 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-200 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-100 h-3 my-0.5 rounded"></div>
                                    </div>
                                    <div className="cursor-pointer flex flex-1 flex-col hero3-bar-col justify-end min-w-0 transition-all" style={{"--hero3-bar-i": "2"}}>
                                      <div className="bg-indigo-600 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-500 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-400 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-300 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-200 h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                    </div>
                                    <div className="cursor-pointer flex flex-1 flex-col hero3-bar-col justify-end min-w-0 transition-all" style={{"--hero3-bar-i": "3"}}>
                                      <div className="bg-indigo-600 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-500 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-400 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-300 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-200 h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                    </div>
                                    <div className="cursor-pointer flex flex-1 flex-col hero3-bar-col justify-end min-w-0 transition-all" style={{"--hero3-bar-i": "4"}}>
                                      <div className="bg-indigo-600 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-500 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-400 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-300 h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                    </div>
                                    <div className="cursor-pointer flex flex-1 flex-col hero3-bar-col justify-end min-w-0 transition-all" style={{"--hero3-bar-i": "5"}}>
                                      <div className="bg-indigo-600 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-500 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-400 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-300 h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                    </div>
                                    <div className="cursor-pointer flex flex-1 flex-col hero3-bar-col justify-end min-w-0 transition-all" style={{"--hero3-bar-i": "6"}}>
                                      <div className="bg-indigo-600 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-500 h-3 my-0.5 rounded"></div>
                                      <div className="bg-indigo-400 h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                    </div>
                                    <div className="cursor-pointer flex flex-1 flex-col hero3-bar-col justify-end min-w-0 transition-all" style={{"--hero3-bar-i": "7"}}>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                      <div className="bg-muted h-3 my-0.5 rounded"></div>
                                    </div>
                                  </div>
                                </div>
                              </FramePanel>
                            </Frame>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute hero3-solid left-0 top-0" style={{"--hero3-period": "8.8s", "--hero3-delay": "0.36s"}}>
                  <div className="hero3-rise">
                    <div className="hero3-bob">
                      <div className="absolute hero3-extrude origin-top-left" style={{left: "44.001px", top: "299px", width: "200px", height: "118px", borderRadius: "12px", boxShadow: "rgb(95, 163, 146) 0.273px 0.273px 0px 0px, rgb(95, 163, 146) 0.545px 0.545px 0px 0px, rgb(95, 163, 146) 0.818px 0.818px 0px 0px, rgb(95, 163, 146) 1.091px 1.091px 0px 0px, rgb(95, 163, 146) 1.364px 1.364px 0px 0px, rgb(95, 163, 146) 1.636px 1.636px 0px 0px, rgb(95, 163, 146) 1.909px 1.909px 0px 0px, rgb(95, 163, 146) 2.182px 2.182px 0px 0px, rgb(95, 163, 146) 2.455px 2.455px 0px 0px, rgb(95, 163, 146) 2.727px 2.727px 0px 0px, rgb(95, 163, 146) 3px 3px 0px 0px, rgb(95, 163, 146) 3.273px 3.273px 0px 0px, rgb(95, 163, 146) 3.545px 3.545px 0px 0px, rgb(95, 163, 146) 3.818px 3.818px 0px 0px, rgb(95, 163, 146) 4.091px 4.091px 0px 0px, rgb(95, 163, 146) 4.364px 4.364px 0px 0px, rgb(95, 163, 146) 4.636px 4.636px 0px 0px, rgb(95, 163, 146) 4.909px 4.909px 0px 0px, rgb(95, 163, 146) 5.182px 5.182px 0px 0px, rgb(95, 163, 146) 5.455px 5.455px 0px 0px, rgb(95, 163, 146) 5.727px 5.727px 0px 0px, rgb(71, 197, 164) 6px 6px 0px 0.5px", transform: "matrix(0.866025, 0.5, -0.866025, 0.5, 0, 0)"}}></div>
                      <div className="absolute hero3-face origin-top-left" style={{left: "44.001px", top: "299px", width: "200px", height: "118px", borderRadius: "12px", "--hero3-radius": "24.00px", transform: "matrix(0.866025, 0.5, -0.866025, 0.5, 0, 0)"}}>
                        <div className="origin-top-left" inert="" style={{width: "400px", height: "236px", transform: "scale(0.5)"}}>
                          <Card className="h-full justify-center px-6 py-5" size="default">
                            <Empty className="gap-4">
                              <AvatarGroup className="hero3-roster">
                                <Avatar className="size-9" size="default">
                                  <AvatarImage alt="Mira Stone" width="96" height="96" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-9" size="default">
                                  <AvatarImage alt="Leo Grant" width="96" height="96" loading="lazy" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <Avatar className="size-9" size="default">
                                  <AvatarImage alt="Nora Vale" width="96" height="96" loading="lazy" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
                                </Avatar>
                                <AvatarGroupCount className="size-9 text-xs">
                                  {"+6"}
                                </AvatarGroupCount>
                              </AvatarGroup>
                              <EmptyHeader>
                                <EmptyTitle>
                                  {"No Team Members"}
                                </EmptyTitle>
                                <EmptyDescription>
                                  {"Invite your team to collaborate on this project."}
                                </EmptyDescription>
                              </EmptyHeader>
                              <EmptyContent>
                                <Button className="hero3-cta" type="button" tabIndex="0">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                  {"Invite Members"}
                                </Button>
                              </EmptyContent>
                            </Empty>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute hero3-solid left-0 top-0" style={{"--hero3-period": "10.2s", "--hero3-delay": "0.16s"}}>
                  <div className="hero3-rise">
                    <div className="hero3-bob">
                      <div className="absolute hero3-extrude origin-top-left" style={{left: "405px", top: "77px", width: "192px", height: "108px", borderRadius: "12px", boxShadow: "rgb(95, 163, 146) 0.273px -0.273px 0px 0px, rgb(95, 163, 146) 0.545px -0.545px 0px 0px, rgb(95, 163, 146) 0.818px -0.818px 0px 0px, rgb(95, 163, 146) 1.091px -1.091px 0px 0px, rgb(95, 163, 146) 1.364px -1.364px 0px 0px, rgb(95, 163, 146) 1.636px -1.636px 0px 0px, rgb(95, 163, 146) 1.909px -1.909px 0px 0px, rgb(95, 163, 146) 2.182px -2.182px 0px 0px, rgb(95, 163, 146) 2.455px -2.455px 0px 0px, rgb(95, 163, 146) 2.727px -2.727px 0px 0px, rgb(95, 163, 146) 3px -3px 0px 0px, rgb(95, 163, 146) 3.273px -3.273px 0px 0px, rgb(95, 163, 146) 3.545px -3.545px 0px 0px, rgb(95, 163, 146) 3.818px -3.818px 0px 0px, rgb(95, 163, 146) 4.091px -4.091px 0px 0px, rgb(95, 163, 146) 4.364px -4.364px 0px 0px, rgb(95, 163, 146) 4.636px -4.636px 0px 0px, rgb(95, 163, 146) 4.909px -4.909px 0px 0px, rgb(95, 163, 146) 5.182px -5.182px 0px 0px, rgb(95, 163, 146) 5.455px -5.455px 0px 0px, rgb(95, 163, 146) 5.727px -5.727px 0px 0px, rgb(71, 197, 164) 6px -6px 0px 0.5px", transform: "matrix(0.866025, 0.5, 0, 1, 0, 0)"}}></div>
                      <div className="absolute hero3-face origin-top-left" style={{left: "405px", top: "77px", width: "192px", height: "108px", borderRadius: "12px", "--hero3-radius": "37.50px", transform: "matrix(0.866025, 0.5, 0, 1, 0, 0)"}}>
                        <div className="origin-top-left" inert="" style={{width: "600px", height: "337.5px", transform: "scale(0.32)"}}>
                          <div className="bg-card flex h-full items-center justify-center overflow-hidden rounded-[var(--hero3-radius)] w-full">
                            <Frame className="border-0 h-full w-full">
                              <FramePanel className="border-0 flex flex-col gap-5 h-full justify-center">
                                <div className="flex items-center justify-between">
                                  <h3 className="font-semibold text-base">
                                    {"Tasks Overview"}
                                  </h3>
                                  <Select>
                                  <SelectTrigger className="w-32" type="button" tabIndex="0" id="base-ui-_r_q_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                                    <SelectValue>
                                      {"This Month"}
                                    </SelectValue>
                                    <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                                      <path d="m6 9 6 6 6-6"></path>
                                      {"▼"}
                                    </svg>
                                  </SelectTrigger>
                                  </Select>
                                  <input id="base-ui-_r_q_-hidden-input" tabIndex="-1" aria-hidden="true" value="this-month" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                                </div>
                                <div className="flex flex-col gap-5">
                                  <div className="grow mb-6">
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="font-medium text-muted-foreground text-sm">
                                        {"Tasks Done"}
                                      </span>
                                      <span className="font-semibold text-muted-foreground text-sm">
                                        {"12"}
                                      </span>
                                    </div>
                                    <div className="hero3-fill">
                                      <Progress progressing="" aria-valuemax="100" aria-valuemin="0" aria-valuenow="66" aria-valuetext="66%" role="progressbar">
                                        <ProgressTrack progressing="">
                                          <ProgressIndicator progressing="" style={{insetInlineStart: "0px", height: "inherit", width: "66%"}}></ProgressIndicator>
                                        </ProgressTrack>
                                        <span role="presentation" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}}>
                                          {"x"}
                                        </span>
                                      </Progress>
                                    </div>
                                  </div>
                                  <div className="space-y-6">
                                    <div className="gap-2.5 grid grid-cols-4">
                                      <div className="bg-muted/60 flex flex-col gap-1 items-center justify-center px-2 py-3.5 rounded-lg">
                                        <span className="font-bold text-emerald-500 text-lg">
                                          {"28"}
                                        </span>
                                        <span className="text-accent-foreground text-xs">
                                          {"Backlog"}
                                        </span>
                                      </div>
                                      <div className="bg-muted/60 flex flex-col gap-1 items-center justify-center px-2 py-3.5 rounded-lg">
                                        <span className="font-bold text-amber-500 text-lg">
                                          {"14"}
                                        </span>
                                        <span className="text-accent-foreground text-xs">
                                          {"In Progress"}
                                        </span>
                                      </div>
                                      <div className="bg-muted/60 flex flex-col gap-1 items-center justify-center px-2 py-3.5 rounded-lg">
                                        <span className="font-bold text-indigo-500 text-lg">
                                          {"8"}
                                        </span>
                                        <span className="text-accent-foreground text-xs">
                                          {"In Review"}
                                        </span>
                                      </div>
                                      <div className="bg-muted/60 flex flex-col gap-1 items-center justify-center px-2 py-3.5 rounded-lg">
                                        <span className="font-bold text-lg text-sky-500">
                                          {"42"}
                                        </span>
                                        <span className="text-accent-foreground text-xs">
                                          {"Done"}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="text-center text-muted-foreground text-xs">
                                      {"AI prediction to finish all tasks:"}
                                      <span className="font-semibold text-foreground">
                                        {"1w 4d 2h"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </FramePanel>
                            </Frame>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute hero3-solid left-0 top-0" style={{"--hero3-period": "8.1s", "--hero3-delay": "0.44s"}}>
                  <div className="hero3-rise">
                    <div className="hero3-bob">
                      <div className="absolute hero3-extrude origin-top-left" style={{left: "431px", top: "412px", width: "196px", height: "92px", borderRadius: "12px", boxShadow: "rgb(95, 163, 146) -0.273px 0.273px 0px 0px, rgb(95, 163, 146) -0.545px 0.545px 0px 0px, rgb(95, 163, 146) -0.818px 0.818px 0px 0px, rgb(95, 163, 146) -1.091px 1.091px 0px 0px, rgb(95, 163, 146) -1.364px 1.364px 0px 0px, rgb(95, 163, 146) -1.636px 1.636px 0px 0px, rgb(95, 163, 146) -1.909px 1.909px 0px 0px, rgb(95, 163, 146) -2.182px 2.182px 0px 0px, rgb(95, 163, 146) -2.455px 2.455px 0px 0px, rgb(95, 163, 146) -2.727px 2.727px 0px 0px, rgb(95, 163, 146) -3px 3px 0px 0px, rgb(95, 163, 146) -3.273px 3.273px 0px 0px, rgb(95, 163, 146) -3.545px 3.545px 0px 0px, rgb(95, 163, 146) -3.818px 3.818px 0px 0px, rgb(95, 163, 146) -4.091px 4.091px 0px 0px, rgb(95, 163, 146) -4.364px 4.364px 0px 0px, rgb(95, 163, 146) -4.636px 4.636px 0px 0px, rgb(95, 163, 146) -4.909px 4.909px 0px 0px, rgb(95, 163, 146) -5.182px 5.182px 0px 0px, rgb(95, 163, 146) -5.455px 5.455px 0px 0px, rgb(95, 163, 146) -5.727px 5.727px 0px 0px, rgb(71, 197, 164) -6px 6px 0px 0.5px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}></div>
                      <div className="absolute hero3-face origin-top-left" style={{left: "431px", top: "412px", width: "196px", height: "92px", borderRadius: "12px", "--hero3-radius": "33.80px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                        <div className="origin-top-left" inert="" style={{width: "552px", height: "259px", transform: "scale(0.355072)"}}>
                          <div className="bg-card flex h-full items-center justify-center overflow-hidden rounded-[var(--hero3-radius)] w-full">
                            <Frame className="-translate-y-2 max-w-[552px] w-full" spacing="xs">
                              <FramePanel className="[--chart-distance:oklch(0.57_0.15_181)] bg-card h-[220px] p-0 text-card-foreground">
                                <Tabs className="gap-0 h-full relative" data-orientation="horizontal" activationDirection="none">
                                  <div className="flex flex-col gap-4 pt-6 px-6 relative sm:flex-row sm:items-start sm:justify-between z-10">
                                    <div className="flex gap-2.5 items-center min-w-0">
                                      <div className="bg-[oklch(0.62_0.15_181)] flex isolate items-center justify-center overflow-hidden relative rounded-md shadow-[0_1px_3px_0_rgba(0,0,0,0.16)] shrink-0 size-10" aria-hidden="true">
                                        <span className="absolute bg-[radial-gradient(65%_65%_at_36%_18%,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0)_72%)] inset-0 pointer-events-none"></span>
                                        <svg className="relative size-6 text-white z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <circle cx="6.5" cy="16.5" r="2.6" stroke="currentColor" strokeWidth="1.8"></circle>
                                          <circle cx="17.5" cy="16.5" r="2.6" stroke="currentColor" strokeWidth="1.8"></circle>
                                          <path d="M6.5 16.5 10.2 9.2h3.1l4.2 7.3m-7.3-7.3 3.1 7.3m-3.1-7.3-1.7-2.5h-2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
                                          <path d="M14.2 7.2h3.1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8"></path>
                                        </svg>
                                      </div>
                                      <div className="flex gap-1.5 items-baseline min-w-0">
                                        <span className="font-medium text-2xl">
                                          {"1,562"}
                                        </span>
                                        <span className="font-medium text-2xl text-muted-foreground/45">
                                          {"km"}
                                        </span>
                                      </div>
                                    </div>
                                    <TabsList className="min-[520px]:w-[184px] w-full" data-orientation="horizontal" activationDirection="none" role="tablist" variant="default">
                                      <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_t_" compositeItemActive="" aria-controls="base-ui-_r_10_">
                                        {"Week"}
                                      </TabsTrigger>
                                      <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_u_">
                                        {"Month"}
                                      </TabsTrigger>
                                      <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_v_">
                                        {"Year"}
                                      </TabsTrigger>
                                    </TabsList>
                                  </div>
                                  <div className="absolute bottom-0 h-[134px] inset-x-0">
                                    <TabsContent className="h-full m-0" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_10_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_t_">
                                      <svg className="size-full" viewBox="0 0 552 118" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                          <pattern id="_r_11_-dots" width="5" height="5" patternUnits="userSpaceOnUse">
                                            <circle cx="1" cy="1" r="0.55" fill="var(--chart-distance)" fillOpacity="0.18"></circle>
                                          </pattern>
                                        </defs>
                                        <path d="M0 76 L12 76 L23 86 L35 73 L48 67 L61 66 L73 76 L84 71 L94 60 L108 60 L119 70 L131 70 L142 74 L154 75 L165 80 L178 80 L190 72 L201 82 L214 82 L226 70 L239 70 L252 74 L265 74 L277 60 L289 72 L302 72 L315 50 L328 60 L340 58 L352 49 L364 37 L376 37 L386 26 L397 47 L410 47 L422 58 L435 50 L447 50 L459 39 L470 48 L481 71 L493 60 L506 60 L518 26 L529 48 L541 48 L552 59 L552 118 L0 118 Z" fill="url(#_r_11_-dots)"></path>
                                        <path d="M0 76 L12 76 L23 86 L35 73 L48 67 L61 66 L73 76 L84 71 L94 60 L108 60 L119 70 L131 70 L142 74 L154 75 L165 80 L178 80 L190 72 L201 82 L214 82 L226 70 L239 70 L252 74 L265 74 L277 60 L289 72 L302 72 L315 50 L328 60 L340 58 L352 49 L364 37 L376 37 L386 26 L397 47 L410 47 L422 58 L435 50 L447 50 L459 39 L470 48 L481 71 L493 60 L506 60 L518 26 L529 48 L541 48 L552 59" fill="none" stroke="var(--chart-distance)" strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
                                        <circle r="7" fill="var(--chart-distance)" fillOpacity="0.18">
                                          <animatemotion dur="6s" repeatCount="indefinite" path="M0 76 L12 76 L23 86 L35 73 L48 67 L61 66 L73 76 L84 71 L94 60 L108 60 L119 70 L131 70 L142 74 L154 75 L165 80 L178 80 L190 72 L201 82 L214 82 L226 70 L239 70 L252 74 L265 74 L277 60 L289 72 L302 72 L315 50 L328 60 L340 58 L352 49 L364 37 L376 37 L386 26 L397 47 L410 47 L422 58 L435 50 L447 50 L459 39 L470 48 L481 71 L493 60 L506 60 L518 26 L529 48 L541 48 L552 59" keyPoints="0;1" keyTimes="0;1" calcMode="linear"></animatemotion>
                                        </circle>
                                        <circle r="3" fill="var(--chart-distance)">
                                          <animatemotion dur="6s" repeatCount="indefinite" path="M0 76 L12 76 L23 86 L35 73 L48 67 L61 66 L73 76 L84 71 L94 60 L108 60 L119 70 L131 70 L142 74 L154 75 L165 80 L178 80 L190 72 L201 82 L214 82 L226 70 L239 70 L252 74 L265 74 L277 60 L289 72 L302 72 L315 50 L328 60 L340 58 L352 49 L364 37 L376 37 L386 26 L397 47 L410 47 L422 58 L435 50 L447 50 L459 39 L470 48 L481 71 L493 60 L506 60 L518 26 L529 48 L541 48 L552 59" keyPoints="0;1" keyTimes="0;1" calcMode="linear"></animatemotion>
                                        </circle>
                                      </svg>
                                    </TabsContent>
                                  </div>
                                </Tabs>
                              </FramePanel>
                            </Frame>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute hero3-solid left-0 top-0" style={{"--hero3-period": "6.9s", "--hero3-delay": "0.6s"}}>
                  <div className="hero3-rise">
                    <div className="hero3-bob">
                      <div className="absolute hero3-extrude origin-top-left" style={{left: "314px", top: "350px", width: "120px", height: "72px", borderRadius: "12px", boxShadow: "rgb(95, 163, 146) 0.273px -0.273px 0px 0px, rgb(95, 163, 146) 0.545px -0.545px 0px 0px, rgb(95, 163, 146) 0.818px -0.818px 0px 0px, rgb(95, 163, 146) 1.091px -1.091px 0px 0px, rgb(95, 163, 146) 1.364px -1.364px 0px 0px, rgb(95, 163, 146) 1.636px -1.636px 0px 0px, rgb(95, 163, 146) 1.909px -1.909px 0px 0px, rgb(95, 163, 146) 2.182px -2.182px 0px 0px, rgb(95, 163, 146) 2.455px -2.455px 0px 0px, rgb(95, 163, 146) 2.727px -2.727px 0px 0px, rgb(95, 163, 146) 3px -3px 0px 0px, rgb(95, 163, 146) 3.273px -3.273px 0px 0px, rgb(95, 163, 146) 3.545px -3.545px 0px 0px, rgb(95, 163, 146) 3.818px -3.818px 0px 0px, rgb(95, 163, 146) 4.091px -4.091px 0px 0px, rgb(95, 163, 146) 4.364px -4.364px 0px 0px, rgb(95, 163, 146) 4.636px -4.636px 0px 0px, rgb(95, 163, 146) 4.909px -4.909px 0px 0px, rgb(95, 163, 146) 5.182px -5.182px 0px 0px, rgb(95, 163, 146) 5.455px -5.455px 0px 0px, rgb(95, 163, 146) 5.727px -5.727px 0px 0px, rgb(71, 197, 164) 6px -6px 0px 0.5px", transform: "matrix(0.866025, 0.5, 0, 1, 0, 0)"}}></div>
                      <div className="absolute hero3-face origin-top-left" style={{left: "314px", top: "350px", width: "120px", height: "72px", borderRadius: "12px", "--hero3-radius": "24.00px", transform: "matrix(0.866025, 0.5, 0, 1, 0, 0)"}}>
                        <div className="origin-top-left" inert="" style={{width: "240px", height: "144px", transform: "scale(0.5)"}}>
                          <Card className="gap-0 h-full justify-center p-1.5" size="default">
                            <span className="font-medium pb-1.5 pt-1 px-2 text-muted-foreground text-xs">
                              {"Select Payment Method"}
                            </span>
                            <Item className="hero3-row relative" variant="default" size="sm" style={{"--hero3-step": "0", "--hero3-count": "3"}}>
                              <ItemMedia variant="icon">
                                <svg className="lucide lucide-credit-card" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CreditCardIcon" tabler="IconCreditCard" hugeicons="CreditCardIcon" phosphor="CreditCardIcon" remixicon="RiBankCardLine" aria-hidden="true">
                                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                  <line x1="2" x2="22" y1="10" y2="10"></line>
                                </svg>
                              </ItemMedia>
                              <ItemContent>
                                <ItemTitle>
                                  {"Credit Card"}
                                </ItemTitle>
                              </ItemContent>
                            </Item>
                            <Item className="hero3-row relative" variant="default" size="sm" style={{"--hero3-step": "1", "--hero3-count": "3"}}>
                              <ItemMedia variant="icon">
                                <svg className="lucide lucide-wallet" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                                </svg>
                              </ItemMedia>
                              <ItemContent>
                                <ItemTitle>
                                  {"PayPal"}
                                </ItemTitle>
                              </ItemContent>
                            </Item>
                            <Item className="hero3-row relative" variant="default" size="sm" style={{"--hero3-step": "2", "--hero3-count": "3"}}>
                              <ItemMedia variant="icon">
                                <svg className="lucide lucide-building-2 lucide-building2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Building2Icon" tabler="IconBuilding" hugeicons="Building02Icon" phosphor="BuildingsIcon" remixicon="RiBuildingLine" aria-hidden="true">
                                  <path d="M10 12h4"></path>
                                  <path d="M10 8h4"></path>
                                  <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                                  <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                                  <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                                </svg>
                              </ItemMedia>
                              <ItemContent>
                                <ItemTitle>
                                  {"Bank Transfer"}
                                </ItemTitle>
                              </ItemContent>
                            </Item>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute hero3-solid left-0 top-0" style={{"--hero3-period": "7.2s", "--hero3-delay": "0.24s"}}>
                  <div className="hero3-rise">
                    <div className="hero3-bob">
                      <div className="absolute hero3-extrude origin-top-left" style={{left: "343px", top: "271px", width: "138px", height: "19px", borderRadius: "6px", boxShadow: "rgb(95, 163, 146) 0.273px -0.273px 0px 0px, rgb(95, 163, 146) 0.545px -0.545px 0px 0px, rgb(95, 163, 146) 0.818px -0.818px 0px 0px, rgb(95, 163, 146) 1.091px -1.091px 0px 0px, rgb(95, 163, 146) 1.364px -1.364px 0px 0px, rgb(95, 163, 146) 1.636px -1.636px 0px 0px, rgb(95, 163, 146) 1.909px -1.909px 0px 0px, rgb(95, 163, 146) 2.182px -2.182px 0px 0px, rgb(95, 163, 146) 2.455px -2.455px 0px 0px, rgb(95, 163, 146) 2.727px -2.727px 0px 0px, rgb(95, 163, 146) 3px -3px 0px 0px, rgb(95, 163, 146) 3.273px -3.273px 0px 0px, rgb(95, 163, 146) 3.545px -3.545px 0px 0px, rgb(95, 163, 146) 3.818px -3.818px 0px 0px, rgb(95, 163, 146) 4.091px -4.091px 0px 0px, rgb(95, 163, 146) 4.364px -4.364px 0px 0px, rgb(95, 163, 146) 4.636px -4.636px 0px 0px, rgb(95, 163, 146) 4.909px -4.909px 0px 0px, rgb(95, 163, 146) 5.182px -5.182px 0px 0px, rgb(95, 163, 146) 5.455px -5.455px 0px 0px, rgb(95, 163, 146) 5.727px -5.727px 0px 0px, rgb(71, 197, 164) 6px -6px 0px 0.5px", transform: "matrix(0.866025, 0.5, 0, 1, 0, 0)"}}></div>
                      <div className="absolute hero3-face origin-top-left" style={{left: "343px", top: "271px", width: "138px", height: "19px", borderRadius: "6px", "--hero3-radius": "12.00px", transform: "matrix(0.866025, 0.5, 0, 1, 0, 0)"}}>
                        <div className="origin-top-left" inert="" style={{width: "276px", height: "38px", transform: "scale(0.5)"}}>
                          <ButtonGroup className="*:h-full h-full w-full" role="group">
                            <Button className="flex-1 hero3-outline hero3-seg" type="button" tabIndex="0" style={{"--hero3-step": "0", "--hero3-count": "3"}}>
                              {"Default"}
                            </Button>
                            <Button className="flex-1 hero3-outline hero3-seg" type="button" tabIndex="0" style={{"--hero3-step": "1", "--hero3-count": "3"}}>
                              {"Button"}
                            </Button>
                            <Button className="flex-1 hero3-outline hero3-seg" type="button" tabIndex="0" style={{"--hero3-step": "2", "--hero3-count": "3"}}>
                              {"Group"}
                            </Button>
                            <Button className="hero3-outline" type="button" tabIndex="0" aria-label="Add Item">
                              <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                              </svg>
                            </Button>
                          </ButtonGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute hero3-solid left-0 top-0" style={{"--hero3-period": "11.1s", "--hero3-delay": "0.08s"}}>
                  <div className="hero3-rise">
                    <div className="hero3-bob">
                      <div className="absolute hero3-extrude origin-top-left" style={{left: "123px", top: "112px", width: "193.2px", height: "134.4px", borderRadius: "12px", boxShadow: "rgb(95, 163, 146) -0.273px -0.273px 0px 0px, rgb(95, 163, 146) -0.545px -0.545px 0px 0px, rgb(95, 163, 146) -0.818px -0.818px 0px 0px, rgb(95, 163, 146) -1.091px -1.091px 0px 0px, rgb(95, 163, 146) -1.364px -1.364px 0px 0px, rgb(95, 163, 146) -1.636px -1.636px 0px 0px, rgb(95, 163, 146) -1.909px -1.909px 0px 0px, rgb(95, 163, 146) -2.182px -2.182px 0px 0px, rgb(95, 163, 146) -2.455px -2.455px 0px 0px, rgb(95, 163, 146) -2.727px -2.727px 0px 0px, rgb(95, 163, 146) -3px -3px 0px 0px, rgb(95, 163, 146) -3.273px -3.273px 0px 0px, rgb(95, 163, 146) -3.545px -3.545px 0px 0px, rgb(95, 163, 146) -3.818px -3.818px 0px 0px, rgb(95, 163, 146) -4.091px -4.091px 0px 0px, rgb(95, 163, 146) -4.364px -4.364px 0px 0px, rgb(95, 163, 146) -4.636px -4.636px 0px 0px, rgb(95, 163, 146) -4.909px -4.909px 0px 0px, rgb(95, 163, 146) -5.182px -5.182px 0px 0px, rgb(95, 163, 146) -5.455px -5.455px 0px 0px, rgb(95, 163, 146) -5.727px -5.727px 0px 0px, rgb(71, 197, 164) -6px -6px 0px 0.5px", transform: "matrix(0.866025, -0.5, 0, 1, 0, 0)"}}></div>
                      <div className="absolute hero3-face origin-top-left" style={{left: "123px", top: "112px", width: "193.2px", height: "134.4px", borderRadius: "12px", "--hero3-radius": "20.00px", transform: "matrix(0.866025, -0.5, 0, 1, 0, 0)"}}>
                        <div className="origin-top-left" inert="" style={{width: "322px", height: "224px", transform: "scale(0.6)"}}>
                          <Card className="gap-4 h-full items-center justify-center px-6 py-5 text-center" size="default">
                            <svg className="hero3-connect lucide lucide-plug-zap size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" aria-hidden="true">
                              <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                              <path d="m2 22 3-3"></path>
                              <path d="M7.5 13.5 10 11"></path>
                              <path d="M10.5 16.5 13 14"></path>
                              <path d="m18 3-4 4h6l-4 4"></path>
                            </svg>
                            <div className="flex flex-col gap-1.5">
                              <span className="font-semibold text-base">
                                {"Allow accessory to connect?"}
                              </span>
                              <span className="text-balance text-muted-foreground text-sm">
                                {"Do you want to allow the USB accessory to connect to this device?"}
                              </span>
                            </div>
                            <div className="flex gap-2 items-center">
                              <Button className="hero3-outline hero3-seg" type="button" tabIndex="0" style={{"--hero3-step": "0", "--hero3-count": "2"}}>
                                {"Don't allow"}
                              </Button>
                              <Button className="hero3-seg" type="button" tabIndex="0" style={{"--hero3-step": "1", "--hero3-count": "2"}}>
                                {"Allow"}
                              </Button>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
