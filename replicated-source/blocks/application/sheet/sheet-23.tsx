import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
} from "@/registry-neui/bases/base/neui/stepper"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import { Button } from "@/registry/bases/base/ui/button"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"New connection"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          {"New Connection"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(40rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <div className="border-b flex flex-col gap-2.5 px-5 py-3 shrink-0">
        <div className="flex gap-2 items-center justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <SheetTitle className="min-w-0" id="base-ui-_r_3_">
              {"New Connection"}
            </SheetTitle>
            <SheetDescription id="base-ui-_r_4_">
              {"Pick what to connect."}
            </SheetDescription>
          </div>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <StepperItem>
        <Stepper role="tablist" aria-orientation="horizontal" data-orientation="horizontal" aria-label="New connection steps">
          <Stepper>
          <StepperNav className="flex items-center" data-state="1" data-orientation="horizontal">
            <Stepper>
            <StepperItem className="min-w-0" data-state="active">
              <Stepper>
              <StepperTrigger className="gap-1.5 min-w-0" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false">
                <Stepper>
                <StepperIndicator className="[&_svg:not([class*=size-])]:size-3.5" data-state="active">
                  <div className="absolute">
                    {"1"}
                  </div>
                </StepperIndicator>
                </Stepper>
                <Stepper>
                <StepperTitle className="truncate" data-state="active">
                  {"Source"}
                </StepperTitle>
                </Stepper>
              </StepperTrigger>
              </Stepper>
              <StepperSeparator className="mx-2.5" data-state="active"></StepperSeparator>
            </StepperItem>
            </Stepper>
            <Stepper>
            <StepperItem className="min-w-0" data-state="inactive">
              <Stepper>
              <StepperTrigger className="gap-1.5 min-w-0" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false" disabled>
                <Stepper>
                <StepperIndicator className="[&_svg:not([class*=size-])]:size-3.5" data-state="inactive">
                  <div className="absolute">
                    {"2"}
                  </div>
                </StepperIndicator>
                </Stepper>
                <Stepper>
                <StepperTitle className="truncate" data-state="inactive">
                  {"Configure"}
                </StepperTitle>
                </Stepper>
              </StepperTrigger>
              </Stepper>
              <StepperSeparator className="mx-2.5" data-state="inactive"></StepperSeparator>
            </StepperItem>
            </Stepper>
            <Stepper>
            <StepperItem className="min-w-0" data-state="inactive">
              <Stepper>
              <StepperTrigger className="gap-1.5 min-w-0" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false" disabled>
                <Stepper>
                <StepperIndicator className="[&_svg:not([class*=size-])]:size-3.5" data-state="inactive">
                  <div className="absolute">
                    {"3"}
                  </div>
                </StepperIndicator>
                </Stepper>
                <Stepper>
                <StepperTitle className="truncate" data-state="inactive">
                  {"Datasets"}
                </StepperTitle>
                </Stepper>
              </StepperTrigger>
              </Stepper>
            </StepperItem>
            </Stepper>
          </StepperNav>
          </Stepper>
        </Stepper>
        </StepperItem>
      </div>
      <form className="flex flex-1 flex-col min-h-0" novalidate="">
        <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
          <div className="flex flex-col gap-4 px-5 py-4">
            <InputGroup role="group">
              <InputGroupAddon role="group" data-align="inline-start">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </InputGroupAddon>
              <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_5_" placeholder="Search integrations..." aria-label="Search integrations" value="" />
            </InputGroup>
            <div className="gap-2 grid min-[460px]:grid-cols-2 sm:grid-cols-3">
              <Item className="cursor-pointer flex-nowrap hover:bg-muted/50 px-2 text-start" type="button" aria-pressed="false" variant="outline" size="xs">
                <ItemMedia className="translate-y-0" variant="default">
                  <IconTile variant="outline" size="default" aria-hidden="true">
                    <svg aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                      <defs>
                        <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                          <stop offset="0%" stopColor="#62F755"></stop>
                          <stop offset="100%" stopColor="#8FF986" stopOpacity="0"></stop>
                        </lineargradient>
                        <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                          <stop offset="0%" stopOpacity=".9"></stop>
                          <stop offset="100%" stopColor="#1A1A1A" stopOpacity="0"></stop>
                        </lineargradient>
                      </defs>
                      <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                      <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                      <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                      <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                    </svg>
                  </IconTile>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="truncate">
                      {"Neon"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="truncate">
                    {"Postgres"}
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="cursor-pointer flex-nowrap hover:bg-muted/50 px-2 text-start" type="button" aria-pressed="false" variant="outline" size="xs">
                <ItemMedia className="translate-y-0" variant="default">
                  <IconTile variant="outline" size="default" aria-hidden="true">
                    <svg className="dark:hidden" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                      <path d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                    </svg>
                    <svg className="dark:block hidden" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                      <path fill="#fff" d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                    </svg>
                  </IconTile>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="truncate">
                      {"PlanetScale"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="truncate">
                    {"MySQL"}
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="cursor-pointer flex-nowrap hover:bg-muted/50 px-2 text-start" type="button" aria-pressed="false" variant="outline" size="xs">
                <ItemMedia className="translate-y-0" variant="default">
                  <IconTile variant="outline" size="default" aria-hidden="true">
                    <svg aria-hidden="true" viewBox="0 0 109 113" fill="none">
                      <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                      <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity="0.2"></path>
                      <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                      <defs>
                        <lineargradient id="supabase-paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#249361"></stop>
                          <stop offset="1" stopColor="#3ECF8E"></stop>
                        </lineargradient>
                        <lineargradient id="supabase-paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                          <stop></stop>
                          <stop offset="1" stopOpacity="0"></stop>
                        </lineargradient>
                      </defs>
                    </svg>
                  </IconTile>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="truncate">
                      {"Supabase"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="truncate">
                    {"Postgres"}
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="cursor-pointer flex-nowrap hover:bg-muted/50 px-2 text-start" type="button" aria-pressed="false" variant="outline" size="xs">
                <ItemMedia className="translate-y-0" variant="default">
                  <IconTile variant="outline" size="default" aria-hidden="true">
                    <svg aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 220">
                      <path d="M246 169c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 209.4 24 179 10.3 172.5 3.6 169.3 0 166.5 0 164v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.3V160c0 2.5-3 5.3-10 9" fill="#912626"></path>
                      <path d="M246 143.2c-13.7 7.1-84.5 36.2-99.5 44-15.1 8-23.5 7.9-35.4 2.2-11.9-5.7-87.2-36.1-100.8-42.6-13.5-6.5-13.8-11-.5-16.2 13.4-5.2 88.2-34.6 104-40.3 16-5.6 21.4-5.8 34.9-1 13.4 5 83.8 33 97.1 37.9 13.3 4.9 13.8 8.9.2 16" fill="#C6302B"></path>
                      <path d="M246 127c-13.7 7.2-84.5 36.3-99.5 44.2-15.1 7.8-23.5 7.7-35.4 2-11.9-5.6-87.2-36-100.8-42.6-6.7-3.2-10.3-6-10.3-8.5V96.2s98-21.3 113.9-27c15.8-5.7 21.3-5.9 34.8-1 13.4 5 94 19.5 107.3 24.4V118c0 2.5-3 5.4-10 9" fill="#912626"></path>
                      <path d="M246 101.4c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 141.8 24 111.4 10.3 105c-13.5-6.5-13.8-11-.5-16.1C23.2 83.5 98 54 113.8 48.5c16-5.7 21.4-6 34.9-1 13.4 5 83.8 33 97.1 37.8 13.3 5 13.8 9 .2 16" fill="#C6302B"></path>
                      <path d="M246 83.7c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 124.1 24 93.7 10.3 87.2 3.6 84 0 81.2 0 78.7v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.4v25.5c0 2.5-3 5.3-10 9" fill="#912626"></path>
                      <path d="M246 58c-13.7 7-84.5 36.1-99.5 44-15.1 7.9-23.5 7.8-35.4 2C99.2 98.5 24 68 10.3 61.6c-13.5-6.5-13.8-11-.5-16.2C23.2 40.1 98 10.7 113.8 5c16-5.6 21.4-5.8 34.9-.9 13.4 5 83.8 33 97.1 37.8 13.3 4.9 13.8 9 .2 16" fill="#C6302B"></path>
                      <path d="m159.3 32.8-22 2.2-5 11.9-8-13.2L99 31.4l19-6.9-5.8-10.5 17.8 7 16.7-5.5-4.5 10.9 17 6.4M131 90.3l-41-17 58.8-9.1-17.8 26M74 39.3c17.5 0 31.5 5.5 31.5 12.2 0 6.8-14 12.2-31.4 12.2s-31.5-5.4-31.5-12.2c0-6.7 14.1-12.2 31.5-12.2" fill="#FFF"></path>
                      <path d="M185.3 36 220 49.8l-34.8 13.7V36" fill="#621B1C"></path>
                      <path d="M146.8 51.2 185.3 36v27.5l-3.8 1.5-34.7-13.8" fill="#9A2928"></path>
                    </svg>
                  </IconTile>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="truncate">
                      {"Redis"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="truncate">
                    {"Redis 7"}
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="cursor-pointer flex-nowrap hover:bg-muted/50 px-2 text-start" type="button" aria-pressed="false" variant="outline" size="xs">
                <ItemMedia className="translate-y-0" variant="default">
                  <IconTile variant="outline" size="default" aria-hidden="true">
                    <svg aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256">
                      <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z"></path>
                      <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453"></path>
                      <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757"></path>
                      <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425"></path>
                    </svg>
                  </IconTile>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="truncate">
                      {"BigQuery"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="truncate">
                    {"Google Cloud"}
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="cursor-pointer flex-nowrap hover:bg-muted/50 px-2 text-start" type="button" aria-pressed="false" variant="outline" size="xs">
                <ItemMedia className="translate-y-0" variant="default">
                  <IconTile variant="outline" size="default" aria-hidden="true">
                    <svg aria-hidden="true" fill="none" viewBox="100 100 312 312">
                      <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                    </svg>
                  </IconTile>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="truncate">
                      {"Stripe"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="truncate">
                    {"REST API"}
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="cursor-pointer flex-nowrap hover:bg-muted/50 px-2 text-start" type="button" aria-pressed="false" variant="outline" size="xs">
                <ItemMedia className="translate-y-0" variant="default">
                  <IconTile variant="outline" size="default" aria-hidden="true">
                    <svg className="dark:hidden" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                      <path fill="#1b1f23" fillRule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clipRule="evenodd"></path>
                    </svg>
                    <svg className="dark:block hidden" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"></path>
                    </svg>
                  </IconTile>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="truncate">
                      {"GitHub"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="truncate">
                    {"REST API"}
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="cursor-pointer flex-nowrap hover:bg-muted/50 px-2 text-start" type="button" aria-pressed="false" variant="outline" size="xs">
                <ItemMedia className="translate-y-0" variant="default">
                  <IconTile variant="outline" size="default" aria-hidden="true">
                    <svg aria-hidden="true" fill="none" viewBox="0 0 100 100">
                      <path fill="#5E6AD2" d="M1.225 61.523c-.222-.949.908-1.546 1.597-.857l36.512 36.512c.69.69.092 1.82-.857 1.597-18.425-4.323-32.93-18.827-37.252-37.252ZM.002 46.889a.99.99 0 0 0 .29.76L52.35 99.71c.201.2.478.307.76.29 2.37-.149 4.695-.46 6.963-.927.765-.157 1.03-1.096.478-1.648L2.576 39.448c-.552-.551-1.491-.286-1.648.479a50.067 50.067 0 0 0-.926 6.962ZM4.21 29.705a.988.988 0 0 0 .208 1.1l64.776 64.776c.289.29.726.375 1.1.208a49.908 49.908 0 0 0 5.185-2.684.981.981 0 0 0 .183-1.54L8.436 24.336a.981.981 0 0 0-1.541.183 49.896 49.896 0 0 0-2.684 5.185Zm8.448-11.631a.986.986 0 0 1-.045-1.354C21.78 6.46 35.111 0 49.952 0 77.592 0 100 22.407 100 50.048c0 14.84-6.46 28.172-16.72 37.338a.986.986 0 0 1-1.354-.045L12.659 18.074Z"></path>
                    </svg>
                  </IconTile>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="truncate">
                      {"Linear"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="truncate">
                    {"GraphQL API"}
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="cursor-pointer flex-nowrap hover:bg-muted/50 px-2 text-start" type="button" aria-pressed="false" variant="outline" size="xs">
                <ItemMedia className="translate-y-0" variant="default">
                  <IconTile variant="outline" size="default" aria-hidden="true">
                    <svg aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                      <g clipRule="evenodd" fillRule="evenodd">
                        <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                        <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                        <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                        <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                      </g>
                    </svg>
                  </IconTile>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="truncate">
                      {"Slack"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="truncate">
                    {"Web API"}
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="cursor-pointer flex-nowrap hover:bg-muted/50 px-2 text-start" type="button" aria-pressed="false" variant="outline" size="xs">
                <ItemMedia className="translate-y-0" variant="default">
                  <IconTile variant="outline" size="default" aria-hidden="true">
                    <svg aria-hidden="true" viewBox="0 0 256 228">
                      <path fill="#1E8E3E" d="M78.8 0 0 136.4l39.4 68.2 78.8-136.4L78.8 0Z"></path>
                      <path fill="#FABB05" d="M78.8 0h98.4L256 136.4h-78.8L98.4 0H78.8Z"></path>
                      <path fill="#4285F4" d="M39.4 204.6h157.2L256 136.4H98.4L39.4 204.6Z"></path>
                      <path fill="#34A853" d="M0 136.4h98.4l-59 68.2L0 136.4Z"></path>
                      <path fill="#1967D2" d="M177.2 136.4H256l-59.4 68.2-19.4-68.2Z"></path>
                    </svg>
                  </IconTile>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="truncate">
                      {"Google Drive"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="truncate">
                    {"Sheets API"}
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="cursor-pointer flex-nowrap hover:bg-muted/50 px-2 text-start" type="button" aria-pressed="false" variant="outline" size="xs">
                <ItemMedia className="translate-y-0" variant="default">
                  <IconTile variant="outline" size="default" aria-hidden="true">
                    <svg aria-hidden="true" fill="none" viewBox="0 0 128 128">
                      <path fill="#0061FE" d="M0 0h128v128H0z"></path>
                      <path fill="#F7F5F2" d="M43.7 32 23.404 44.75 43.701 57.5 64 44.75 84.3 57.5l20.298-12.75L84.299 32 64.002 44.75 43.7 32Zm0 51L23.404 70.25 43.701 57.5 64 70.25 43.702 83Zm20.302-12.75L84.299 57.5l20.298 12.75L84.299 83 64.002 70.25Zm0 29.75L43.7 87.25 64 74.5l20.3 12.75L64.002 100Z"></path>
                    </svg>
                  </IconTile>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="max-w-full min-w-0">
                    <span className="truncate">
                      {"Dropbox"}
                    </span>
                  </ItemTitle>
                  <ItemDescription className="truncate">
                    {"Files API"}
                  </ItemDescription>
                </ItemContent>
              </Item>
            </div>
          </div>
        </div>
        <div className="bg-muted border-t flex gap-2 items-center px-5 py-3 shrink-0">
          <p className="me-auto min-w-0 text-muted-foreground text-xs truncate" aria-live="polite">
            {"Pick an integration to continue"}
          </p>
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
            {"Cancel"}
          </SheetClose>
          <Button type="submit" disabled="" tabIndex="0" disabled>
            {"Continue"}
            <svg className="lucide lucide-chevron-right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Button>
        </div>
      </form>
    </SheetContent>
    </Sheet>
  </>
  )
}
