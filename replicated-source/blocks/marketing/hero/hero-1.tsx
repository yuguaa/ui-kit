import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-[oklch(0.1477_0.004_228.76)] flex items-center lg:px-8 min-h-svh overflow-hidden px-4 py-12 relative sm:px-6 w-full" aria-labelledby="hero-1-title">
        <svg className="absolute inset-0 pointer-events-none size-full" aria-hidden="true">
          <defs>
            <pattern id="_r_0_-dots" patternUnits="userSpaceOnUse" width={6} height={6}>
              <circle cx={1} cy={1} r={0.55} fill="white"></circle>
            </pattern>
            <radialgradient id="_r_0_-fade" cx="30%" cy="20%" r="120%">
              <stop offset="0%" stopColor="white" stopOpacity={0.85}></stop>
              <stop offset="60%" stopColor="white" stopOpacity={0.5}></stop>
              <stop offset="100%" stopColor="white" stopOpacity={0}></stop>
            </radialgradient>
            <mask id="_r_0_-mask">
              <rect width="100%" height="100%" fill="url(#_r_0_-fade)"></rect>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#_r_0_-dots)" fillOpacity={0.18} mask="url(#_r_0_-mask)"></rect>
        </svg>
        <div className="-left-32 -top-30 absolute bg-white/3 blur-[100px] pointer-events-none rounded-full size-125" aria-hidden="true"></div>
        <div className="gap-8 grid grid-cols-1 items-center lg:grid-cols-2 lg:max-w-7xl max-w-xl mx-auto relative w-full">
          <div className="@container flex flex-col gap-6 items-start justify-center">
            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-white/10 border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 min-w-5 outline-none px-2 py-0.5 relative rounded-full text-[#d0d6d8] text-sm transition-shadow">
              <span className="bg-teal-600 rounded-full shrink-0 size-1.5" aria-hidden="true"></span>
              {"Usage velocity elevated"}
              <svg className="lucide lucide-arrow-up-right size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpRightIcon" tabler="IconArrowUpRight" hugeicons="ArrowUpRight01Icon" phosphor="ArrowUpRightIcon" remixicon="RiArrowRightUpLine" aria-hidden="true">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </Badge>
            <h1 className="@md:text-3xl @xl:leading-10 @xl:text-4xl font-semibold leading-tight text-2xl text-[#d0d6d8] tracking-tight" id="hero-1-title">
              <span className="@xl:block">
                {"Scale complex"}
                <span className="[text-box:trim-both_cap_text] bg-white/15 inline-block px-2 py-0.5 rounded-sm text-[#e3e7e8]">
                  {"agent workflows"}
                </span>
              </span>
              <span className="@xl:block">
                {"without slowing down your product"}
              </span>
              <span className="@xl:block">
                {"or hitting usage ceilings"}
              </span>
            </h1>
            <p className="leading-6 text-base text-white/40">
              {"Track MCP activity, spot unusual usage spikes, and keep agent workloads within predictable limits as your product scales."}
            </p>
            <div className="flex flex-wrap gap-5 items-center">
              <div className="flex gap-2 items-center">
                <IconTile className="[--icon-tile-icon-size:--spacing(4)]! [--icon-tile-inset:--spacing(1)]! after:bg-[linear-gradient(180deg,rgba(103,120,124,0.3)_0%,rgba(9,11,12,0.3)_100%),linear-gradient(#090b0c,#090b0c)] after:border-white/10! after:shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1),0_2px_4px_-2px_rgb(0_0_0/0.1),inset_0_1px_0_0_rgb(255_255_255/0.12)] bg-white/5 border-transparent text-white/40" variant="frame" size="default">
                  <svg className="lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine" aria-hidden="true">
                    <rect width={18} height={18} x={3} y={3} rx={2}></rect>
                    <path d="M9 3v18"></path>
                  </svg>
                </IconTile>
                <span className="font-medium text-[#d0d6d8] text-sm">
                  {"MCP-ready"}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <IconTile className="[--icon-tile-icon-size:--spacing(4)]! [--icon-tile-inset:--spacing(1)]! after:bg-[linear-gradient(180deg,rgba(103,120,124,0.3)_0%,rgba(9,11,12,0.3)_100%),linear-gradient(#090b0c,#090b0c)] after:border-white/10! after:shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1),0_2px_4px_-2px_rgb(0_0_0/0.1),inset_0_1px_0_0_rgb(255_255_255/0.12)] bg-white/5 border-transparent text-white/40" variant="frame" size="default">
                  <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                    <path d="M20 2v4"></path>
                    <path d="M22 4h-4"></path>
                    <circle cx={4} cy={20} r={2}></circle>
                  </svg>
                </IconTile>
                <span className="font-medium text-[#d0d6d8] text-sm">
                  {"Agent Skills"}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:w-auto w-full">
              <Button className="bg-teal-500 hover:bg-teal-400 shadow-2xs text-teal-950" href="#" role="button" tabIndex={0}>
                {"Get All-access"}
              </Button>
              <Button className="bg-white/10 border-transparent hover:bg-white/15 hover:text-white shadow-xs text-white/70" href="#" role="button" tabIndex={0}>
                {"View Plans"}
              </Button>
            </div>
            <Separator className="bg-white/10 max-w-md w-full" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            <div className="flex flex-col gap-4">
              <span className="text-sm text-white/40">
                {"Built for growing AI teams"}
              </span>
              <div className="[&_:not([fill=none])]:fill-[#9ca8ab] flex flex-wrap gap-x-6 gap-y-6 items-center">
                <span>
                  <svg className="h-3.5 w-auto" aria-hidden="true" aria-label="Vercel logotype" viewBox="0 0 262 52">
                    <path d="M59.8019 52L29.9019 0L0.00190544 52H59.8019ZM89.9593 49.6328L114.947 2.36365H104.139L86.9018 36.6921L69.6647 2.36365H58.8564L83.8442 49.6328H89.9593ZM260.25 2.36365V49.6329H251.302V2.36365H260.25ZM210.442 31.99C210.442 28.3062 211.211 25.0661 212.749 22.2699C214.287 19.4737 216.431 17.321 219.181 15.812C221.93 14.3029 225.146 13.5484 228.828 13.5484C232.09 13.5484 235.026 14.2585 237.636 15.6788C240.245 17.0991 242.319 19.2074 243.857 22.0036C245.395 24.7998 246.187 28.2174 246.234 32.2564V34.3202H219.88C220.066 37.2496 220.928 39.5576 222.466 41.2442C224.051 42.8864 226.171 43.7075 228.828 43.7075C230.505 43.7075 232.043 43.2637 233.441 42.376C234.839 41.4883 235.888 40.2899 236.587 38.7808L245.745 39.4466C244.626 42.7754 242.529 45.4385 239.453 47.4358C236.377 49.4331 232.835 50.4317 228.828 50.4317C225.146 50.4317 221.93 49.6772 219.181 48.1681C216.431 46.6591 214.287 44.5064 212.749 41.7102C211.211 38.914 210.442 35.6739 210.442 31.99ZM237.006 28.6612C236.68 25.7762 235.771 23.668 234.28 22.3365C232.789 20.9606 230.971 20.2726 228.828 20.2726C226.358 20.2726 224.354 21.0049 222.816 22.4696C221.278 23.9343 220.322 25.9982 219.95 28.6612H237.006ZM195.347 22.3365C196.838 23.5348 197.77 25.1993 198.143 27.3297L207.371 26.8637C207.044 24.1562 206.089 21.8039 204.505 19.8066C202.92 17.8093 200.869 16.278 198.353 15.2128C195.883 14.1032 193.157 13.5484 190.174 13.5484C186.492 13.5484 183.277 14.3029 180.527 15.812C177.777 17.321 175.634 19.4737 174.096 22.2699C172.558 25.0661 171.789 28.3062 171.789 31.99C171.789 35.6739 172.558 38.914 174.096 41.7102C175.634 44.5064 177.777 46.6591 180.527 48.1681C183.277 49.6772 186.492 50.4317 190.174 50.4317C193.25 50.4317 196.046 49.8769 198.563 48.7673C201.079 47.6133 203.13 45.9933 204.714 43.9072C206.299 41.8212 207.254 39.38 207.58 36.5838L198.283 36.1844C197.957 38.5367 197.048 40.3565 195.557 41.6436C194.065 42.8864 192.271 43.5078 190.174 43.5078C187.285 43.5078 185.048 42.5091 183.463 40.5118C181.879 38.5145 181.086 35.6739 181.086 31.99C181.086 28.3062 181.879 25.4656 183.463 23.4683C185.048 21.471 187.285 20.4723 190.174 20.4723C192.178 20.4723 193.902 21.0937 195.347 22.3365ZM149.955 14.3457H158.281L158.522 21.1369C159.113 19.2146 159.935 17.7218 160.988 16.6585C162.514 15.1166 164.642 14.3457 167.371 14.3457H170.771V21.6146H167.302C165.359 21.6146 163.763 21.8789 162.514 22.4075C161.311 22.9362 160.386 23.7732 159.739 24.9186C159.137 26.064 158.837 27.5178 158.837 29.2799V49.6328H149.955V14.3457ZM111.548 22.2699C110.01 25.0661 109.241 28.3062 109.241 31.99C109.241 35.6739 110.01 38.914 111.548 41.7102C113.086 44.5064 115.229 46.6591 117.979 48.1681C120.729 49.6772 123.944 50.4317 127.626 50.4317C131.634 50.4317 135.176 49.4331 138.252 47.4358C141.327 45.4385 143.425 42.7754 144.543 39.4466L135.385 38.7808C134.686 40.2899 133.638 41.4883 132.24 42.376C130.842 43.2637 129.304 43.7075 127.626 43.7075C124.97 43.7075 122.849 42.8864 121.265 41.2442C119.727 39.5576 118.865 37.2496 118.678 34.3202H145.032V32.2564C144.986 28.2174 144.194 24.7998 142.656 22.0036C141.118 19.2074 139.044 17.0991 136.434 15.6788C133.824 14.2585 130.888 13.5484 127.626 13.5484C123.944 13.5484 120.729 14.3029 117.979 15.812C115.229 17.321 113.086 19.4737 111.548 22.2699ZM133.079 22.3365C134.57 23.668 135.479 25.7762 135.805 28.6612H118.748C119.121 25.9982 120.076 23.9343 121.614 22.4696C123.152 21.0049 125.156 20.2726 127.626 20.2726C129.77 20.2726 131.587 20.9606 133.079 22.3365Z" fill="white"></path>
                  </svg>
                </span>
                <span>
                  <svg className="h-3 w-auto" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 1655.29 278.83">
                    <path fill="#fff" d="M139.03,4.61h90.64v49.93h-87.57c-47.24,0-84.11,27.27-84.11,84.88s36.87,84.88,84.11,84.88h87.57v49.93h-94.48c-79.12,0-135.19-46.48-135.19-134.82S59.91,4.61,139.03,4.61Z"></path>
                    <path fill="#fff" d="M275.75,4.61h56.07v164.76c0,41.09,18.82,60.3,62.99,60.3s62.99-19.2,62.99-60.3V4.61h56.07v176.28c0,59.91-38.02,97.94-119.06,97.94s-119.06-38.41-119.06-98.32V4.61Z"></path>
                    <path fill="#fff" d="M806.9,81.04c0,29.96-17.28,53-40.33,62.99v.77c24.2,3.46,36.49,20.74,36.87,44.17l1.15,85.26h-56.07l-1.15-76.04c-.38-16.9-10.37-27.27-30.34-27.27h-93.33v103.31h-56.07V4.61h154.78c50.7,0,84.49,25.73,84.49,76.43h0ZM750.45,88.72c0-23.04-12.29-35.72-35.33-35.72h-91.41v71.43h92.17c21.12,0,34.57-12.67,34.57-35.72h0Z"></path>
                    <path fill="#fff" d="M1018.9,195.49c0-19.2-12.29-27.27-30.72-28.8l-62.22-5.76c-53.77-4.99-81.81-26.12-81.81-77.2S878.72,4.61,928.26,4.61h137.49v48.39h-133.65c-19.2,0-31.49,9.99-31.49,29.19s12.67,28.42,31.88,29.96l63.37,5.38c48.01,4.22,79.5,26.12,79.5,77.58s-33.41,79.12-80.65,79.12h-143.64v-48.39h138.26c18.05,0,29.57-12.29,29.57-30.34h0Z"></path>
                    <path fill="#fff" d="M1239.35,0c84.49,0,137.88,54.15,137.88,139.03s-55.69,139.8-140.18,139.8-137.88-54.92-137.88-139.8S1154.86,0,1239.35,0ZM1319.24,139.41c0-56.84-33.03-90.25-81.04-90.25s-81.04,33.41-81.04,90.25,33.03,90.25,81.04,90.25,81.04-33.41,81.04-90.25Z"></path>
                    <path fill="#fff" d="M1655.29,81.04c0,29.96-17.28,53-40.33,62.99v.77c24.2,3.46,36.49,20.74,36.87,44.17l1.15,85.26h-56.07l-1.15-76.04c-.38-16.9-10.37-27.27-30.34-27.27h-93.33v103.31h-56.07V4.61h154.78c50.7,0,84.49,25.73,84.49,76.43h0ZM1598.83,88.72c0-23.04-12.29-35.72-35.33-35.72h-91.41v71.43h92.17c21.12,0,34.57-12.67,34.57-35.72h0Z"></path>
                  </svg>
                </span>
                <span>
                  <svg className="h-3.5 w-auto" aria-hidden="true" fill="none" viewBox="0 0 441 128">
                    <path fill="#fff" d="M166.971 40.917c11.605 0 23.824 4.606 31.392 13.519a.14.14 0 0 1-.015.196l-11.393 9.858a.141.141 0 0 1-.198-.013 24.393 24.393 0 0 0-8.422-6.174 24.897 24.897 0 0 0-10.437-2.133c-13.41 0-22.35 9.192-22.35 22.63 0 6.713 2.223 12.345 6.087 16.29a22.093 22.093 0 0 0 7.464 4.805 22.461 22.461 0 0 0 8.799 1.511 26.7 26.7 0 0 0 10.378-1.996 26.24 26.24 0 0 0 8.635-5.752.141.141 0 0 1 .192-.007l11.645 10.047a.14.14 0 0 1 .013.2c-6.497 7.175-17.999 12.866-32.397 12.866-11.139 0-20.793-3.91-27.569-10.565C132.019 99.545 128 90.12 128 78.928c0-22.63 16.169-38.01 38.971-38.01Zm105.326.007c22.067 0 36.337 15.52 36.337 36.95a61.277 61.277 0 0 1-.457 6.659.141.141 0 0 1-.14.123h-54.261a.14.14 0 0 0-.136.171c2.321 10.287 10.27 16.557 21.26 16.557 3.579.075 7.126-.66 10.369-2.151a23.251 23.251 0 0 0 8.236-6.335.14.14 0 0 1 .199-.019l.447.373 11.163 9.719a.14.14 0 0 1 .018.194c-6.316 7.834-16.808 13.599-31.355 13.599-21.772 0-38.196-15.077-38.196-37.983 0-11.238 3.87-20.663 10.319-27.317a35.7 35.7 0 0 1 11.989-7.934 36.2 36.2 0 0 1 14.208-2.606Zm-46.636-28.948a.14.14 0 0 1 .141.14v103.509a.14.14 0 0 1-.141.141h-16.684a.14.14 0 0 1-.141-.141V12.117c0-.078.063-.141.141-.141h16.684Zm135.724 28.943a.14.14 0 0 1 .142.14v18.553c0 .081-.07.146-.151.14-1.944-.147-3.88-.29-5.072-.29-13.058 0-20.725 9.19-20.725 21.253v34.91a.14.14 0 0 1-.141.141h-16.683a.14.14 0 0 1-.141-.141v-73.52a.14.14 0 0 1 .141-.14h16.683a.14.14 0 0 1 .141.14V53.04c0 .057.047.103.104.103a.105.105 0 0 0 .083-.041c5.851-7.815 14.488-12.162 23.613-12.162l2.006-.022Zm26.947-28.943a.14.14 0 0 1 .141.14v63.165c0 .129.157.19.244.095l30.691-33.455a.142.142 0 0 1 .104-.046h20.063c.122 0 .187.145.105.236l-26.752 29.515a.142.142 0 0 0-.016.17l27.119 43.755a.14.14 0 0 1-.119.215h-19.033a.14.14 0 0 1-.12-.067l-19.234-30.912a.14.14 0 0 0-.119-.066h-.18a.144.144 0 0 0-.104.045l-12.612 13.55a.14.14 0 0 0-.037.096v17.213a.14.14 0 0 1-.141.141h-16.685a.14.14 0 0 1-.14-.141V12.117a.14.14 0 0 1 .14-.141h16.685ZM273.184 56.153a19.44 19.44 0 0 0-8.036 1.46 19.154 19.154 0 0 0-6.683 4.624 20.438 20.438 0 0 0-4.538 8.68.14.14 0 0 0 .135.173h37.036a.14.14 0 0 0 .135-.174c-2.156-8.804-8.293-14.763-18.049-14.763Z"></path>
                    <circle cx={64} cy={64} r={20} fill="#fff"></circle>
                    <path fill="#fff" fillOpacity={0.4} d="M99.572 10.788c1.999 1.34 2.17 4.156.468 5.858L85.424 31.262c-1.32 1.32-3.37 1.53-5.033.678A35.846 35.846 0 0 0 64 28c-19.882 0-36 16.118-36 36a35.846 35.846 0 0 0 3.94 16.391c.851 1.663.643 3.712-.678 5.033L16.646 100.04c-1.702 1.702-4.519 1.531-5.858-.468C3.974 89.399 0 77.163 0 64 0 28.654 28.654 0 64 0c13.163 0 25.399 3.974 35.572 10.788Z"></path>
                    <path fill="#fff" d="M100.04 111.354c1.702 1.702 1.531 4.519-.468 5.858C89.399 124.026 77.164 128 64 128c-13.164 0-25.399-3.974-35.572-10.788-2-1.339-2.17-4.156-.468-5.858l14.615-14.616c1.321-1.32 3.37-1.53 5.033-.678A35.846 35.846 0 0 0 64 100a35.846 35.846 0 0 0 16.392-3.94c1.662-.852 3.712-.643 5.032.678l14.616 14.616Z"></path>
                  </svg>
                </span>
                <span>
                  <svg className="h-3.5 w-auto" aria-hidden="true" fill="#ffff" fillRule="evenodd" viewBox="0 0 182 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                    <title>
                      {"Anthropic"}
                    </title>
                    <path d="M38.247 15.874L29.553 2.338H24.86v19.337h4.002V8.139l8.694 13.536h4.693V2.338h-4.003v13.536zm7.313-9.807h6.487v15.608h4.14V6.067h6.487v-3.73H45.56v3.73zm33.686 3.978h-9.109V2.338h-4.14v19.337h4.14v-7.9h9.109v7.9h4.14V2.338h-4.14v7.707zm13.39-3.978h5.108c2.043 0 3.12.746 3.12 2.155 0 1.408-1.077 2.154-3.12 2.154h-5.107v-4.31zm12.37 2.155c0-3.647-2.679-5.884-7.068-5.884h-9.443v19.337h4.142v-7.57h4.61l4.142 7.57h4.583l-4.586-8.146c2.302-.885 3.62-2.75 3.62-5.307zm12.686 9.91c-3.257 0-5.244-2.32-5.244-6.104 0-3.84 1.987-6.16 5.244-6.16 3.23 0 5.189 2.32 5.189 6.16 0 3.784-1.96 6.105-5.189 6.105zm0-16.132c-5.575 0-9.522 4.144-9.522 10.028 0 5.828 3.947 9.972 9.522 9.972 5.547 0 9.466-4.144 9.466-9.972C127.158 6.144 123.24 2 117.692 2zm22.59 8.929h-5.109V6.067h5.11c2.043 0 3.12.829 3.12 2.43 0 1.603-1.077 2.432-3.12 2.432zm.194-8.591h-9.445v19.337h4.142v-7.017h5.303c4.39 0 7.07-2.32 7.07-6.16 0-3.84-2.68-6.16-7.07-6.16zm35.108 12.839c-.718 1.878-2.153 2.956-4.113 2.956-3.257 0-5.244-2.32-5.244-6.105 0-3.84 1.987-6.16 5.244-6.16 1.96 0 3.395 1.077 4.113 2.955h4.388C178.896 4.68 175.667 2 171.472 2c-5.576 0-9.523 4.144-9.523 10.028 0 5.828 3.947 9.972 9.522 9.972 4.223 0 7.453-2.707 8.529-6.823h-4.416zm-26.39-12.84l7.705 19.338h4.225L153.42 2.338h-4.225zM9.277 14.024l2.636-6.796 2.637 6.796H9.276zm.428-11.685L2 21.675h4.307l1.576-4.06h8.06l1.575 4.06h4.307L14.121 2.338H9.704z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="lg:translate-x-0 lg:translate-y-[14%] translate-x-[7%] w-full">
            <svg className="h-auto overflow-visible w-full" viewBox="0 0 624 600" role="img" aria-label="MCP usage velocity climbing across seven intervals, peaking at 89 percent">
              <style dangerouslySetInnerHTML={{ __html: "\n@keyframes hero1-gleam { 0%, 100% { opacity: 0 } 45% { opacity: 0.42 } }\n@keyframes hero1-read { 0%, 86%, 100% { opacity: 1 } 91% { opacity: 0.3 } }\n@keyframes hero1-ring { 0%, 100% { opacity: 0.16 } 50% { opacity: 0.6 } }\n@keyframes hero1-sweep { 0% { opacity: 0 } 6% { opacity: 0.34 } 20% { opacity: 0 } 100% { opacity: 0 } }\n@keyframes hero1-grid { 0%, 100% { opacity: 0.82 } 50% { opacity: 1 } }\n@keyframes hero1-flow-a {\n  0% { transform: translateX(-160px); opacity: 0 }\n  9% { opacity: 1 } 84% { opacity: 1 }\n  100% { transform: translateX(940px); opacity: 0 }\n}\n@keyframes hero1-flow-b {\n  0% { transform: translateX(940px); opacity: 0 }\n  9% { opacity: 1 } 84% { opacity: 1 }\n  100% { transform: translateX(-160px); opacity: 0 }\n}\n@keyframes hero1-flow-c {\n  0% { transform: translateY(-160px); opacity: 0 }\n  9% { opacity: 1 } 84% { opacity: 1 }\n  100% { transform: translateY(940px); opacity: 0 }\n}\n@keyframes hero1-flow-d {\n  0% { transform: translateY(940px); opacity: 0 }\n  9% { opacity: 1 } 84% { opacity: 1 }\n  100% { transform: translateY(-160px); opacity: 0 }\n}\n\n.hero1-gleam { animation: hero1-gleam var(--hero1-period) ease-in-out infinite; }\n.hero1-read { animation: hero1-read var(--hero1-period) steps(1, end) infinite; }\n.hero1-ring { animation: hero1-ring 4.4s ease-in-out infinite; }\n.hero1-sweep { animation: hero1-sweep 11.2s ease-out infinite; }\n.hero1-grid { animation: hero1-grid 19s ease-in-out infinite; }\n.hero1-hint { opacity: 0; transition: opacity 220ms cubic-bezier(0.22,1,0.36,1), transform 220ms cubic-bezier(0.22,1,0.36,1); transform: translateY(4px); }\n.hero1-hint[data-open=\"true\"] { opacity: 1; transform: translateY(0); }\n.hero1-lead { transition: stroke-dashoffset 260ms cubic-bezier(0.22,1,0.36,1), opacity 180ms linear; }\n.hero1-hit { fill: transparent; cursor: pointer; outline: none; }\n.hero1-lift { opacity: 0; transition: opacity 200ms cubic-bezier(0.22,1,0.36,1); }\n.hero1-bar[data-active=\"true\"] .hero1-lift { opacity: 1; }\n.hero1-edge { transition: stroke 200ms linear, stroke-opacity 200ms linear; }\n.hero1-bar[data-active=\"true\"] .hero1-edge { stroke: var(--hero1-edge-on); stroke-opacity: 0.22; }\n/* Name and timing arrive as custom properties, never as an inline animation\n   shorthand: an inline style would outrank the reduced-motion rule below. */\n.hero1-flow {\n  opacity: 0;\n  animation: var(--hero1-flow-name) var(--hero1-flow-dur) linear var(--hero1-flow-delay) infinite;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .hero1-gleam, .hero1-read, .hero1-ring, .hero1-sweep, .hero1-grid, .hero1-flow {\n    animation: none;\n  }\n  .hero1-gleam, .hero1-sweep, .hero1-flow { opacity: 0; }\n  .hero1-hint, .hero1-lead { transition-duration: 1ms; }\n  .hero1-ring { opacity: 0.45; }\n}\n" }} />
              <defs>
                <pattern id="_r_1_-grid" patternUnits="userSpaceOnUse" width={50} height={50}>
                  <rect width={50} height={50} fill="none" stroke="white"></rect>
                </pattern>
                <filter id="_r_1_-blur" x="-50%" y="-50%" width="200%" height="200%">
                  <fegaussianblur stdDeviation="100"></fegaussianblur>
                </filter>
                <mask id="_r_1_-mask" maskUnits="userSpaceOnUse" x={0} y={0} width={800} height={800}>
                  <rect width={800} height={800} fill="url(#_r_1_-grid)" fillOpacity={0.1}></rect>
                </mask>
                <mask id="_r_1_-soft" maskUnits="userSpaceOnUse" x={0} y={0} width={800} height={800}>
                  <circle cx={400} cy={400} r={300} fill="white" filter="url(#_r_1_-blur)"></circle>
                </mask>
                <lineargradient id="_r_1_-tail-x" x1={0} y1={0} x2={1} y2={0}>
                  <stop offset="0%" stopColor="white" stopOpacity={0}></stop>
                  <stop offset="100%" stopColor="white" stopOpacity={0.55}></stop>
                </lineargradient>
                <lineargradient id="_r_1_-tail-y" x1={0} y1={0} x2={0} y2={1}>
                  <stop offset="0%" stopColor="white" stopOpacity={0}></stop>
                  <stop offset="100%" stopColor="white" stopOpacity={0.55}></stop>
                </lineargradient>
                <lineargradient id="_r_1_-tail-x-rev" x1={0} y1={0} x2={1} y2={0}>
                  <stop offset="0%" stopColor="white" stopOpacity={0.55}></stop>
                  <stop offset="100%" stopColor="white" stopOpacity={0}></stop>
                </lineargradient>
                <lineargradient id="_r_1_-tail-y-rev" x1={0} y1={0} x2={0} y2={1}>
                  <stop offset="0%" stopColor="white" stopOpacity={0.55}></stop>
                  <stop offset="100%" stopColor="white" stopOpacity={0}></stop>
                </lineargradient>
              </defs>
              <g className="hero1-grid" transform="translate(311.82 300)">
                <g transform="matrix(0.866025 -0.5 0.866025 0.5 0 0)">
                  <g transform="translate(-400 -400)">
                    <g mask="url(#_r_1_-mask)">
                      <circle cx={400} cy={400} r={300} fill="white" filter="url(#_r_1_-blur)"></circle>
                    </g>
                  </g>
                </g>
              </g>
              <g transform="translate(311.82 300)">
                <g transform="matrix(0.866025 -0.5 0.866025 0.5 0 0)">
                  <g transform="translate(-400 -400)" mask="url(#_r_1_-soft)">
                    <g className="hero1-flow" style={{"--hero1-flow-name": "hero1-flow-a", "--hero1-flow-dur": "9s", "--hero1-flow-delay": "0s"}}>
                      <rect x={-30} y={249} width={60} height={2} rx={1} fill="url(#_r_1_-tail-x)"></rect>
                      <circle cx={30} cy={250} r={2.2} fill="#00bba7" opacity={0.9}></circle>
                    </g>
                    <g className="hero1-flow" style={{"--hero1-flow-name": "hero1-flow-a", "--hero1-flow-dur": "13s", "--hero1-flow-delay": "3.4s"}}>
                      <rect x={-30} y={449} width={60} height={2} rx={1} fill="url(#_r_1_-tail-x)"></rect>
                      <circle cx={30} cy={450} r={2.2} fill="white" opacity={0.9}></circle>
                    </g>
                    <g className="hero1-flow" style={{"--hero1-flow-name": "hero1-flow-b", "--hero1-flow-dur": "11s", "--hero1-flow-delay": "1.7s"}}>
                      <rect x={-30} y={549} width={60} height={2} rx={1} fill="url(#_r_1_-tail-x-rev)"></rect>
                      <circle cx={-30} cy={550} r={2.2} fill="white" opacity={0.9}></circle>
                    </g>
                    <g className="hero1-flow" style={{"--hero1-flow-name": "hero1-flow-c", "--hero1-flow-dur": "12s", "--hero1-flow-delay": "2.6s"}}>
                      <rect x={299} y={-30} width={2} height={60} rx={1} fill="url(#_r_1_-tail-y)"></rect>
                      <circle cx={300} cy={30} r={2.2} fill="white" opacity={0.9}></circle>
                    </g>
                    <g className="hero1-flow" style={{"--hero1-flow-name": "hero1-flow-c", "--hero1-flow-dur": "15s", "--hero1-flow-delay": "6.1s"}}>
                      <rect x={499} y={-30} width={2} height={60} rx={1} fill="url(#_r_1_-tail-y)"></rect>
                      <circle cx={500} cy={30} r={2.2} fill="#00bba7" opacity={0.9}></circle>
                    </g>
                    <g className="hero1-flow" style={{"--hero1-flow-name": "hero1-flow-d", "--hero1-flow-dur": "10s", "--hero1-flow-delay": "4.8s"}}>
                      <rect x={399} y={-30} width={2} height={60} rx={1} fill="url(#_r_1_-tail-y-rev)"></rect>
                      <circle cx={400} cy={-30} r={2.2} fill="white" opacity={0.9}></circle>
                    </g>
                  </g>
                </g>
              </g>
              <g className="hero1-bar" data-active="false" style={{"--hero1-edge-on": "#e3e7e8"}}>
                <g transform="translate(-32.160000000000004 375.26)">
                  <path className="hero1-edge" d="M0.503513 23.8729C0.443822 22.7441 1.16011 21.6042 2.65239 20.7426L35.5614 1.74264C38.4311 0.0857894 43.0839 0.0857844 45.9537 1.74264L78.8626 20.7426C80.2401 21.5379 80.9564 22.5704 81.0115 23.6124V73.61240000000001C80.9564 72.5704 80.2401 71.53790000000001 78.8626 70.7426L45.9537 51.7426C43.0839 50.0858 38.4311 50.0858 35.5614 51.7426L2.65239 70.7426C1.16011 71.60419999999999 0.443822 72.7441 0.503513 73.8729V23.8729Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                  <path className="hero1-edge" d="M81.0115 23.6123C81.0712 24.7411 80.3549 25.881 78.8627 26.7426L45.9537 45.7426C43.0839 47.3994 38.4311 47.3994 35.5614 45.7426L2.65242 26.7426C1.27494 25.9473 0.558647 24.9148 0.503548 23.8729V73.8729C0.558647 74.9148 1.27494 75.9473 2.65242 76.7426L35.5614 95.74260000000001C38.4311 97.3994 43.0839 97.3994 45.9537 95.74260000000001L78.8627 76.7426C80.3549 75.881 81.0712 74.7411 81.0115 73.6123V23.6123Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                </g>
                <g transform="translate(8.60125 399) matrix(0.866025 -0.5 0.866025 0.5 0 0) translate(-25 -25)">
                  <rect width={50} height={50} rx={6} fill="#131414" stroke="#2d2f30" vector-effect="non-scaling-stroke"></rect>
                  <rect className="hero1-lift" width={50} height={50} rx={6} fill="white" fillOpacity={0.1}></rect>
                  <rect className="hero1-gleam" width={50} height={50} rx={6} fill="white" opacity={0} style={{"--hero1-period": "7.1s"}}></rect>
                  <rect className="hero1-sweep" width={50} height={50} rx={6} fill="#00bba7" opacity={0} style={{animationDelay: "0s"}}></rect>
                </g>
                <rect className="hero1-hit" tabIndex={0} role="button" aria-label="29 percent usage" x={-34.7} y={374} width={86.6025} height={100}></rect>
                <g transform="translate(8.60125 399) matrix(0.866025 -0.5 0.866025 0.5 0 0)">
                  <text className="hero1-read" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="500" fill="#e3e7e8" style={{"--hero1-period": "7.1s"}}>
                    {"29%"}
                  </text>
                </g>
              </g>
              <g className="hero1-bar" data-active="false" style={{"--hero1-edge-on": "#e3e7e8"}}>
                <g transform="translate(54.54 255.26)">
                  <path className="hero1-edge" d="M0.503513 23.8729C0.443822 22.7441 1.16011 21.6042 2.65239 20.7426L35.5614 1.74264C38.4311 0.0857894 43.0839 0.0857844 45.9537 1.74264L78.8626 20.7426C80.2401 21.5379 80.9564 22.5704 81.0115 23.6124V143.6124C80.9564 142.5704 80.2401 141.5379 78.8626 140.7426L45.9537 121.7426C43.0839 120.0858 38.4311 120.0858 35.5614 121.7426L2.65239 140.7426C1.16011 141.6042 0.443822 142.7441 0.503513 143.87290000000002V23.8729Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                  <path className="hero1-edge" d="M81.0115 23.6123C81.0712 24.7411 80.3549 25.881 78.8627 26.7426L45.9537 45.7426C43.0839 47.3994 38.4311 47.3994 35.5614 45.7426L2.65242 26.7426C1.27494 25.9473 0.558647 24.9148 0.503548 23.8729V143.87290000000002C0.558647 144.9148 1.27494 145.94729999999998 2.65242 146.7426L35.5614 165.7426C38.4311 167.3994 43.0839 167.3994 45.9537 165.7426L78.8627 146.7426C80.3549 145.881 81.0712 144.7411 81.0115 143.6123V23.6123Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                </g>
                <g transform="translate(95.30125000000001 279) matrix(0.866025 -0.5 0.866025 0.5 0 0) translate(-25 -25)">
                  <rect width={50} height={50} rx={6} fill="#131414" stroke="#2d2f30" vector-effect="non-scaling-stroke"></rect>
                  <rect className="hero1-lift" width={50} height={50} rx={6} fill="white" fillOpacity={0.1}></rect>
                  <rect className="hero1-gleam" width={50} height={50} rx={6} fill="white" opacity={0} style={{"--hero1-period": "8.3s"}}></rect>
                  <rect className="hero1-sweep" width={50} height={50} rx={6} fill="#00bba7" opacity={0} style={{animationDelay: "1.6s"}}></rect>
                </g>
                <rect className="hero1-hit" tabIndex={0} role="button" aria-label="60 percent usage" x={52} y={254} width={86.6025} height={170}></rect>
                <g transform="translate(95.30125000000001 279) matrix(0.866025 -0.5 0.866025 0.5 0 0)">
                  <text className="hero1-read" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="500" fill="#e3e7e8" style={{"--hero1-period": "8.3s"}}>
                    {"60%"}
                  </text>
                </g>
              </g>
              <g className="hero1-bar" data-active="false" style={{"--hero1-edge-on": "#00bba7"}}>
                <g transform="translate(141.04 145.26)">
                  <path className="hero1-edge" d="M0.503513 23.8729C0.443822 22.7441 1.16011 21.6042 2.65239 20.7426L35.5614 1.74264C38.4311 0.0857894 43.0839 0.0857844 45.9537 1.74264L78.8626 20.7426C80.2401 21.5379 80.9564 22.5704 81.0115 23.6124V203.6124C80.9564 202.5704 80.2401 201.5379 78.8626 200.7426L45.9537 181.7426C43.0839 180.0858 38.4311 180.0858 35.5614 181.7426L2.65239 200.7426C1.16011 201.6042 0.443822 202.7441 0.503513 203.87290000000002V23.8729Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                  <path className="hero1-edge" d="M81.0115 23.6123C81.0712 24.7411 80.3549 25.881 78.8627 26.7426L45.9537 45.7426C43.0839 47.3994 38.4311 47.3994 35.5614 45.7426L2.65242 26.7426C1.27494 25.9473 0.558647 24.9148 0.503548 23.8729V203.87290000000002C0.558647 204.9148 1.27494 205.94729999999998 2.65242 206.7426L35.5614 225.7426C38.4311 227.3994 43.0839 227.3994 45.9537 225.7426L78.8627 206.7426C80.3549 205.881 81.0712 204.7411 81.0115 203.6123V23.6123Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                </g>
                <g transform="translate(181.80125 169) matrix(0.866025 -0.5 0.866025 0.5 0 0) translate(-25 -25)">
                  <rect width={50} height={50} rx={6} fill="#131414" stroke="#2d2f30" vector-effect="non-scaling-stroke"></rect>
                  <rect className="hero1-lift" width={50} height={50} rx={6} fill="#00bba7" fillOpacity={0.1}></rect>
                  <rect className="hero1-gleam" width={50} height={50} rx={6} fill="white" opacity={0} style={{"--hero1-period": "6.4s"}}></rect>
                  <rect className="hero1-sweep" width={50} height={50} rx={6} fill="#00bba7" opacity={0} style={{animationDelay: "3.2s"}}></rect>
                  <rect className="hero1-ring" width={50} height={50} rx={6} fill="none" stroke="#00bba7" vector-effect="non-scaling-stroke" opacity={0.16}></rect>
                </g>
                <rect className="hero1-hit" tabIndex={0} role="button" aria-label="89 percent usage" x={138.5} y={144} width={86.6025} height={230}></rect>
                <g transform="translate(181.80125 169) matrix(0.866025 -0.5 0.866025 0.5 0 0)">
                  <text className="hero1-read" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="500" fill="#00bba7" style={{"--hero1-period": "6.4s"}}>
                    {"89%"}
                  </text>
                </g>
              </g>
              <g className="hero1-bar" data-active="false" style={{"--hero1-edge-on": "#e3e7e8"}}>
                <g transform="translate(227.84 125.26)">
                  <path className="hero1-edge" d="M0.503513 23.8729C0.443822 22.7441 1.16011 21.6042 2.65239 20.7426L35.5614 1.74264C38.4311 0.0857894 43.0839 0.0857844 45.9537 1.74264L78.8626 20.7426C80.2401 21.5379 80.9564 22.5704 81.0115 23.6124V173.6124C80.9564 172.5704 80.2401 171.5379 78.8626 170.7426L45.9537 151.7426C43.0839 150.0858 38.4311 150.0858 35.5614 151.7426L2.65239 170.7426C1.16011 171.6042 0.443822 172.7441 0.503513 173.87290000000002V23.8729Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                  <path className="hero1-edge" d="M81.0115 23.6123C81.0712 24.7411 80.3549 25.881 78.8627 26.7426L45.9537 45.7426C43.0839 47.3994 38.4311 47.3994 35.5614 45.7426L2.65242 26.7426C1.27494 25.9473 0.558647 24.9148 0.503548 23.8729V173.87290000000002C0.558647 174.9148 1.27494 175.94729999999998 2.65242 176.7426L35.5614 195.7426C38.4311 197.3994 43.0839 197.3994 45.9537 195.7426L78.8627 176.7426C80.3549 175.881 81.0712 174.7411 81.0115 173.6123V23.6123Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                </g>
                <g transform="translate(268.60125 149) matrix(0.866025 -0.5 0.866025 0.5 0 0) translate(-25 -25)">
                  <rect width={50} height={50} rx={6} fill="#131414" stroke="#2d2f30" vector-effect="non-scaling-stroke"></rect>
                  <rect className="hero1-lift" width={50} height={50} rx={6} fill="white" fillOpacity={0.1}></rect>
                  <rect className="hero1-gleam" width={50} height={50} rx={6} fill="white" opacity={0} style={{"--hero1-period": "9.2s"}}></rect>
                  <rect className="hero1-sweep" width={50} height={50} rx={6} fill="#00bba7" opacity={0} style={{animationDelay: "4.8s"}}></rect>
                </g>
                <rect className="hero1-hit" tabIndex={0} role="button" aria-label="76 percent usage" x={225.3} y={124} width={86.6025} height={200}></rect>
                <g transform="translate(268.60125 149) matrix(0.866025 -0.5 0.866025 0.5 0 0)">
                  <text className="hero1-read" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="500" fill="#e3e7e8" style={{"--hero1-period": "9.2s"}}>
                    {"76%"}
                  </text>
                </g>
              </g>
              <g className="hero1-bar" data-active="false" style={{"--hero1-edge-on": "#e3e7e8"}}>
                <g transform="translate(314.24 95.26)">
                  <path className="hero1-edge" d="M0.503513 23.8729C0.443822 22.7441 1.16011 21.6042 2.65239 20.7426L35.5614 1.74264C38.4311 0.0857894 43.0839 0.0857844 45.9537 1.74264L78.8626 20.7426C80.2401 21.5379 80.9564 22.5704 81.0115 23.6124V153.6124C80.9564 152.5704 80.2401 151.5379 78.8626 150.7426L45.9537 131.7426C43.0839 130.0858 38.4311 130.0858 35.5614 131.7426L2.65239 150.7426C1.16011 151.6042 0.443822 152.7441 0.503513 153.87290000000002V23.8729Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                  <path className="hero1-edge" d="M81.0115 23.6123C81.0712 24.7411 80.3549 25.881 78.8627 26.7426L45.9537 45.7426C43.0839 47.3994 38.4311 47.3994 35.5614 45.7426L2.65242 26.7426C1.27494 25.9473 0.558647 24.9148 0.503548 23.8729V153.87290000000002C0.558647 154.9148 1.27494 155.94729999999998 2.65242 156.7426L35.5614 175.7426C38.4311 177.3994 43.0839 177.3994 45.9537 175.7426L78.8627 156.7426C80.3549 155.881 81.0712 154.7411 81.0115 153.6123V23.6123Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                </g>
                <g transform="translate(355.00124999999997 119) matrix(0.866025 -0.5 0.866025 0.5 0 0) translate(-25 -25)">
                  <rect width={50} height={50} rx={6} fill="#131414" stroke="#2d2f30" vector-effect="non-scaling-stroke"></rect>
                  <rect className="hero1-lift" width={50} height={50} rx={6} fill="white" fillOpacity={0.1}></rect>
                  <rect className="hero1-gleam" width={50} height={50} rx={6} fill="white" opacity={0} style={{"--hero1-period": "7.7s"}}></rect>
                  <rect className="hero1-sweep" width={50} height={50} rx={6} fill="#00bba7" opacity={0} style={{animationDelay: "6.4s"}}></rect>
                </g>
                <rect className="hero1-hit" tabIndex={0} role="button" aria-label="71 percent usage" x={311.7} y={94} width={86.6025} height={180}></rect>
                <g transform="translate(355.00124999999997 119) matrix(0.866025 -0.5 0.866025 0.5 0 0)">
                  <text className="hero1-read" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="500" fill="#e3e7e8" style={{"--hero1-period": "7.7s"}}>
                    {"71%"}
                  </text>
                </g>
              </g>
              <g className="hero1-bar" data-active="false" style={{"--hero1-edge-on": "#e3e7e8"}}>
                <g transform="translate(400.84000000000003 85.26)">
                  <path className="hero1-edge" d="M0.503513 23.8729C0.443822 22.7441 1.16011 21.6042 2.65239 20.7426L35.5614 1.74264C38.4311 0.0857894 43.0839 0.0857844 45.9537 1.74264L78.8626 20.7426C80.2401 21.5379 80.9564 22.5704 81.0115 23.6124V113.61240000000001C80.9564 112.5704 80.2401 111.53790000000001 78.8626 110.7426L45.9537 91.7426C43.0839 90.0858 38.4311 90.0858 35.5614 91.7426L2.65239 110.7426C1.16011 111.60419999999999 0.443822 112.7441 0.503513 113.8729V23.8729Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                  <path className="hero1-edge" d="M81.0115 23.6123C81.0712 24.7411 80.3549 25.881 78.8627 26.7426L45.9537 45.7426C43.0839 47.3994 38.4311 47.3994 35.5614 45.7426L2.65242 26.7426C1.27494 25.9473 0.558647 24.9148 0.503548 23.8729V113.8729C0.558647 114.9148 1.27494 115.9473 2.65242 116.7426L35.5614 135.7426C38.4311 137.3994 43.0839 137.3994 45.9537 135.7426L78.8627 116.7426C80.3549 115.881 81.0712 114.7411 81.0115 113.6123V23.6123Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                </g>
                <g transform="translate(441.60125 109) matrix(0.866025 -0.5 0.866025 0.5 0 0) translate(-25 -25)">
                  <rect width={50} height={50} rx={6} fill="#131414" stroke="#2d2f30" vector-effect="non-scaling-stroke"></rect>
                  <rect className="hero1-lift" width={50} height={50} rx={6} fill="white" fillOpacity={0.1}></rect>
                  <rect className="hero1-gleam" width={50} height={50} rx={6} fill="white" opacity={0} style={{"--hero1-period": "8.9s"}}></rect>
                  <rect className="hero1-sweep" width={50} height={50} rx={6} fill="#00bba7" opacity={0} style={{animationDelay: "8s"}}></rect>
                </g>
                <rect className="hero1-hit" tabIndex={0} role="button" aria-label="55 percent usage" x={398.3} y={84} width={86.6025} height={140}></rect>
                <g transform="translate(441.60125 109) matrix(0.866025 -0.5 0.866025 0.5 0 0)">
                  <text className="hero1-read" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="500" fill="#e3e7e8" style={{"--hero1-period": "8.9s"}}>
                    {"55%"}
                  </text>
                </g>
              </g>
              <g className="hero1-bar" data-active="false" style={{"--hero1-edge-on": "#e3e7e8"}}>
                <g transform="translate(487.54 15.26)">
                  <path className="hero1-edge" d="M0.503513 23.8729C0.443822 22.7441 1.16011 21.6042 2.65239 20.7426L35.5614 1.74264C38.4311 0.0857894 43.0839 0.0857844 45.9537 1.74264L78.8626 20.7426C80.2401 21.5379 80.9564 22.5704 81.0115 23.6124V133.6124C80.9564 132.5704 80.2401 131.5379 78.8626 130.7426L45.9537 111.7426C43.0839 110.0858 38.4311 110.0858 35.5614 111.7426L2.65239 130.7426C1.16011 131.6042 0.443822 132.7441 0.503513 133.87290000000002V23.8729Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                  <path className="hero1-edge" d="M81.0115 23.6123C81.0712 24.7411 80.3549 25.881 78.8627 26.7426L45.9537 45.7426C43.0839 47.3994 38.4311 47.3994 35.5614 45.7426L2.65242 26.7426C1.27494 25.9473 0.558647 24.9148 0.503548 23.8729V133.87290000000002C0.558647 134.9148 1.27494 135.94729999999998 2.65242 136.7426L35.5614 155.7426C38.4311 157.3994 43.0839 157.3994 45.9537 155.7426L78.8627 136.7426C80.3549 135.881 81.0712 134.7411 81.0115 133.6123V23.6123Z" fill="#0b0c0c" fillOpacity={0.8} stroke="#2d2f30" strokeLinejoin="round" vector-effect="non-scaling-stroke"></path>
                </g>
                <g transform="translate(528.30125 39) matrix(0.866025 -0.5 0.866025 0.5 0 0) translate(-25 -25)">
                  <rect width={50} height={50} rx={6} fill="#131414" stroke="#2d2f30" vector-effect="non-scaling-stroke"></rect>
                  <rect className="hero1-lift" width={50} height={50} rx={6} fill="white" fillOpacity={0.1}></rect>
                  <rect className="hero1-gleam" width={50} height={50} rx={6} fill="white" opacity={0} style={{"--hero1-period": "6.8s"}}></rect>
                  <rect className="hero1-sweep" width={50} height={50} rx={6} fill="#00bba7" opacity={0} style={{animationDelay: "9.6s"}}></rect>
                </g>
                <rect className="hero1-hit" tabIndex={0} role="button" aria-label="62 percent usage" x={485} y={14} width={86.6025} height={160}></rect>
                <g transform="translate(528.30125 39) matrix(0.866025 -0.5 0.866025 0.5 0 0)">
                  <text className="hero1-read" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="500" fill="#e3e7e8" style={{"--hero1-period": "6.8s"}}>
                    {"62%"}
                  </text>
                </g>
              </g>
              <g className="hero1-hint" data-open="false" pointer-events="none">
                <line className="hero1-lead" x1={8.60125} y1={364} x2={8.60125} y2={335} stroke="#2d2f30" strokeWidth={1} strokeDasharray={29} strokeDashoffset={29} vector-effect="non-scaling-stroke"></line>
                <circle cx={8.60125} cy={364} r={2.5} fill="#e3e7e8"></circle>
                <rect x={-53.39875} y={305} width={124} height={28} rx={8} fill="#131414" stroke="#2d2f30" strokeOpacity={1} vector-effect="non-scaling-stroke"></rect>
                <text x={8.60125} y={319} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="500" fill="#d0d6d8">
                  {"Interval 29%"}
                </text>
              </g>
              <g className="hero1-hint" data-open="false" pointer-events="none">
                <line className="hero1-lead" x1={95.30125000000001} y1={244} x2={95.30125000000001} y2={215} stroke="#2d2f30" strokeWidth={1} strokeDasharray={29} strokeDashoffset={29} vector-effect="non-scaling-stroke"></line>
                <circle cx={95.30125000000001} cy={244} r={2.5} fill="#e3e7e8"></circle>
                <rect x={33.30125000000001} y={185} width={124} height={28} rx={8} fill="#131414" stroke="#2d2f30" strokeOpacity={1} vector-effect="non-scaling-stroke"></rect>
                <text x={95.30125000000001} y={199} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="500" fill="#d0d6d8">
                  {"Interval 60%"}
                </text>
              </g>
              <g className="hero1-hint" data-open="false" pointer-events="none">
                <line className="hero1-lead" x1={181.80125} y1={134} x2={181.80125} y2={105} stroke="#00bba7" strokeWidth={1} strokeDasharray={29} strokeDashoffset={29} vector-effect="non-scaling-stroke"></line>
                <circle cx={181.80125} cy={134} r={2.5} fill="#00bba7"></circle>
                <rect x={119.80125000000001} y={75} width={124} height={28} rx={8} fill="#131414" stroke="#00bba7" strokeOpacity={0.5} vector-effect="non-scaling-stroke"></rect>
                <text x={181.80125} y={89} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="500" fill="#d0d6d8">
                  {"Spike 89%"}
                </text>
              </g>
              <g className="hero1-hint" data-open="false" pointer-events="none">
                <line className="hero1-lead" x1={268.60125} y1={114} x2={268.60125} y2={85} stroke="#2d2f30" strokeWidth={1} strokeDasharray={29} strokeDashoffset={29} vector-effect="non-scaling-stroke"></line>
                <circle cx={268.60125} cy={114} r={2.5} fill="#e3e7e8"></circle>
                <rect x={206.60125} y={55} width={124} height={28} rx={8} fill="#131414" stroke="#2d2f30" strokeOpacity={1} vector-effect="non-scaling-stroke"></rect>
                <text x={268.60125} y={69} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="500" fill="#d0d6d8">
                  {"Interval 76%"}
                </text>
              </g>
              <g className="hero1-hint" data-open="false" pointer-events="none">
                <line className="hero1-lead" x1={355.00124999999997} y1={84} x2={355.00124999999997} y2={55} stroke="#2d2f30" strokeWidth={1} strokeDasharray={29} strokeDashoffset={29} vector-effect="non-scaling-stroke"></line>
                <circle cx={355.00124999999997} cy={84} r={2.5} fill="#e3e7e8"></circle>
                <rect x={293.00124999999997} y={25} width={124} height={28} rx={8} fill="#131414" stroke="#2d2f30" strokeOpacity={1} vector-effect="non-scaling-stroke"></rect>
                <text x={355.00124999999997} y={39} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="500" fill="#d0d6d8">
                  {"Interval 71%"}
                </text>
              </g>
              <g className="hero1-hint" data-open="false" pointer-events="none">
                <line className="hero1-lead" x1={441.60125} y1={74} x2={441.60125} y2={45} stroke="#2d2f30" strokeWidth={1} strokeDasharray={29} strokeDashoffset={29} vector-effect="non-scaling-stroke"></line>
                <circle cx={441.60125} cy={74} r={2.5} fill="#e3e7e8"></circle>
                <rect x={379.60125} y={15} width={124} height={28} rx={8} fill="#131414" stroke="#2d2f30" strokeOpacity={1} vector-effect="non-scaling-stroke"></rect>
                <text x={441.60125} y={29} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="500" fill="#d0d6d8">
                  {"Interval 55%"}
                </text>
              </g>
              <g className="hero1-hint" data-open="false" pointer-events="none">
                <line className="hero1-lead" x1={528.30125} y1={4} x2={528.30125} y2={-25} stroke="#2d2f30" strokeWidth={1} strokeDasharray={29} strokeDashoffset={29} vector-effect="non-scaling-stroke"></line>
                <circle cx={528.30125} cy={4} r={2.5} fill="#e3e7e8"></circle>
                <rect x={466.30125} y={-55} width={124} height={28} rx={8} fill="#131414" stroke="#2d2f30" strokeOpacity={1} vector-effect="non-scaling-stroke"></rect>
                <text x={528.30125} y={-41} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="500" fill="#d0d6d8">
                  {"Interval 62%"}
                </text>
              </g>
              <g transform="translate(163.28 274) rotate(-90) skewX(-30) scale(1,0.866025)">
                <text textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="500" letter-spacing="0.56" fill="#d0d6d8">
                  {"Unusual usage spike"}
                </text>
              </g>
              <g transform="translate(395.17 373.75) matrix(0.866025 -0.5 0.866025 0.5 0 0)">
                <text textAnchor="middle" dominantBaseline="middle" fontSize="36" fontWeight="600" fill="#d0d6d8">
                  {"MCP Usage Velocity"}
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>
    </div>
  )
}
