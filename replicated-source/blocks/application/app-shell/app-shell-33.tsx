import {
  Sortable,
  SortableItem,
  SortableItemHandle,
} from "@/registry-neui/bases/radix/neui/sortable"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/registry/bases/base/ui/sidebar"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"
import {
  SidebarGroupLabel,
  SidebarMenuAction,
  SidebarMenuSubButton,
} from "@/registry/bases/radix/ui/sidebar"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="bg-background flex group/sidebar-wrapper h-svh has-data-[variant=inset]:bg-sidebar min-h-0 overflow-hidden text-foreground w-full" style={{"--sidebar-width": "21.25rem", "--sidebar-width-icon": "3.25rem"}}>
      <div className="hidden md:flex">
        <nav className="flex flex-col h-full items-center justify-between p-3 shrink-0 w-13" aria-label="Sections">
          <div className="flex flex-col items-center">
            <div className="flex h-11 items-center">
              <a className="dark:text-foreground/90 flex focus-visible:ring-3 focus-visible:ring-ring/50 outline-none rounded-md text-foreground" href="#" aria-label="NeUI home">
                <svg className="size-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16 0.92308H8C4.09152 0.92308 0.92308 4.09152 0.92308 8V16C0.92308 19.9085 4.09152 23.0769 8 23.0769H16C19.9085 23.0769 23.0769 19.9085 23.0769 16V8C23.0769 4.09152 19.9085 0.92308 16 0.92308ZM8 0C3.58172 0 0 3.58172 0 8V16C0 20.4183 3.58172 24 8 24H16C20.4183 24 24 20.4183 24 16V8C24 3.58172 20.4183 0 16 0H8Z" fill="currentColor"></path>
                  <path d="M16.8322 8.25504C17.4549 8.25504 17.9597 7.75023 17.9597 7.12752C17.9597 6.50481 17.4549 6 16.8322 6C16.2095 6 15.7047 6.50481 15.7047 7.12752C15.7047 7.75023 16.2095 8.25504 16.8322 8.25504Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.04032 13.6509V7.12745C6.04032 6.50474 6.54512 5.99993 7.16782 5.99993C7.79055 5.99993 8.29535 6.50474 8.29535 7.12745V13.6509C8.29535 14.8074 9.23282 15.7449 10.3893 15.7449H13.6108C14.7672 15.7449 15.7047 14.8074 15.7047 13.6509V10.4616C15.7047 9.83898 16.2095 9.33418 16.8323 9.33418C17.4549 9.33418 17.9598 9.83898 17.9598 10.4616V13.6509C17.9598 16.0528 16.0127 17.9999 13.6108 17.9999H10.3893C7.98742 17.9999 6.04032 16.0528 6.04032 13.6509Z" fill="currentColor"></path>
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-2 items-center pt-3">
              <ul className="flex flex-col gap-1">
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 bg-input/60 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 dark:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 inline-flex items-center justify-center outline-none select-none shrink-0 text-foreground transition-all whitespace-nowrap" href="#" aria-label="Home" aria-current="page" role="button" tabIndex="0" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-house" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="HouseIcon" tabler="IconHome" hugeicons="Home03Icon" phosphor="HouseIcon" remixicon="RiHome5Line" aria-hidden="true">
                      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                      <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 dark:hover:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Live Map" role="button" tabIndex="0" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-map" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapIcon" tabler="IconMap" hugeicons="MapsIcon" phosphor="MapTrifoldIcon" remixicon="RiMapLine" aria-hidden="true">
                      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                      <path d="M15 5.764v15"></path>
                      <path d="M9 3.236v15"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 dark:hover:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Robots" role="button" tabIndex="0" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                      <path d="M12 8V4H8"></path>
                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 dark:hover:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Locations" role="button" tabIndex="0" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-map-pinned" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MapPinnedIcon" tabler="IconMapPin" hugeicons="MapPinIcon" phosphor="MapPinAreaIcon" remixicon="RiRoadMapLine" aria-hidden="true">
                      <path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path>
                      <circle cx="12" cy="8" r="2"></circle>
                      <path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 dark:hover:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Security" role="button" tabIndex="0" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
              </ul>
              <div className="flex h-0 items-center" aria-hidden="true">
                <Separator className="bg-input data-horizontal:w-4" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </div>
              <ul className="flex flex-col gap-1.5" aria-label="Connected apps">
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 dark:hover:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Swagger" role="button" tabIndex="0" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                    <svg className="size-4.5" viewBox="0 0 18 18" fill="none">
                      <path d="M9 16.8633C6.91453 16.8633 4.91447 16.0348 3.43982 14.5602C1.96517 13.0855 1.13672 11.0855 1.13672 9C1.13672 6.91453 1.96517 4.91447 3.43982 3.43982C4.91447 1.96517 6.91453 1.13672 9 1.13672C11.0855 1.13672 13.0855 1.96517 14.5602 3.43982C16.0348 4.91447 16.8633 6.91453 16.8633 9C16.8633 11.0855 16.0348 13.0855 14.5602 14.5602C13.0855 16.0348 11.0855 16.8633 9 16.8633Z" fill="#85EA2D"></path>
                      <path d="M9 1.52344C10.9829 1.52344 12.8846 2.31114 14.2867 3.71327C15.6889 5.1154 16.4766 7.01709 16.4766 9C16.4766 10.9829 15.6889 12.8846 14.2867 14.2867C12.8846 15.6889 10.9829 16.4766 9 16.4766C7.01709 16.4766 5.1154 15.6889 3.71327 14.2867C2.31114 12.8846 1.52344 10.9829 1.52344 9C1.52344 7.01709 2.31114 5.1154 3.71327 3.71327C5.1154 2.31114 7.01709 1.52344 9 1.52344ZM9 0.75C6.81196 0.75 4.71354 1.61919 3.16637 3.16637C1.61919 4.71354 0.75 6.81196 0.75 9C0.75 11.188 1.61919 13.2865 3.16637 14.8336C4.71354 16.3808 6.81196 17.25 9 17.25C11.188 17.25 13.2865 16.3808 14.8336 14.8336C16.3808 13.2865 17.25 11.188 17.25 9C17.25 6.81196 16.3808 4.71354 14.8336 3.16637C13.2865 1.61919 11.188 0.75 9 0.75Z" fill="#173647"></path>
                      <path d="M5.9707 6.35748L5.90625 7.19537L5.8418 8.03326C5.71289 8.41998 5.51953 8.74225 5.13281 9.00006C5.8418 9.45123 5.90625 10.0958 5.9707 10.8047V11.9004C6.03516 12.2227 6.09961 12.2872 6.42188 12.2872H6.80859V13.1895C5.90625 13.3184 5.19727 13.0606 5.06836 12.3516L4.93945 11.5137V10.6114C4.875 9.83795 4.74609 9.51568 3.97266 9.51568V8.48443H4.16602C4.55273 8.41998 4.74609 8.29107 4.875 7.90436L4.93945 7.19537L5.00391 5.7774C5.13281 5.13287 5.51953 4.81061 6.22852 4.81061H6.80859V5.71295H6.55078C6.03516 5.71295 5.9707 5.90631 5.9707 6.35748ZM7.00195 8.41998C6.84811 8.41143 6.69717 8.46435 6.58234 8.56709C6.46751 8.66984 6.3982 8.81399 6.38965 8.96783C6.3811 9.12168 6.43402 9.27262 6.53676 9.38745C6.6395 9.50228 6.78365 9.57159 6.9375 9.58014C7.25977 9.58014 7.58203 9.38678 7.58203 9.06451V9.00006C7.58203 8.67779 7.32422 8.41998 7.00195 8.41998ZM9 8.41998C8.84615 8.41998 8.69861 8.4811 8.58982 8.58988C8.48104 8.69867 8.41992 8.84621 8.41992 9.00006C8.41992 9.38678 8.67773 9.58014 9 9.58014C9.38672 9.58014 9.58008 9.32232 9.58008 9.00006C9.58008 8.67779 9.32227 8.41998 9 8.41998ZM10.998 8.41998C10.8442 8.41998 10.6967 8.4811 10.5879 8.58988C10.4791 8.69867 10.418 8.84621 10.418 9.00006C10.418 9.1539 10.4791 9.30145 10.5879 9.41024C10.6967 9.51902 10.8442 9.58014 10.998 9.58014C11.3203 9.64459 11.5781 9.32232 11.6426 9.00006C11.6426 8.67779 11.3203 8.41998 10.998 8.41998ZM13.834 8.48443C13.4473 8.41998 13.2539 8.35553 13.1895 7.96881L13.0605 7.32428L12.9961 6.03521C12.9316 5.00396 12.2227 4.6817 11.1914 4.81061V5.71295H11.5781C11.8359 5.71295 11.9648 5.7774 12.0293 6.03521V6.7442L12.2227 8.09771C12.2871 8.48443 12.5449 8.8067 12.8672 9.00006C12.2871 9.38678 12.1582 9.9024 12.0938 10.5469L12.0293 11.7715C12.0293 12.1583 11.9004 12.2872 11.5137 12.2872H11.1914V13.1895H11.8359C12.4805 13.1895 12.8672 12.8672 12.9961 12.2227L13.0605 11.1915L13.125 10.2247C13.1895 9.7735 13.3828 9.58014 13.8984 9.51568H14.0273V8.48443H13.834Z" fill="#173647"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 dark:hover:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Reddit" role="button" tabIndex="0" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                    <svg className="size-4.5" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 216 216">
                      <defs>
                        <radialgradient id="snoo-radial-gragient" cx="169.75" cy="92.19" r="50.98" fx="169.75" fy="92.19" gradientTransform="matrix(1 0 0 .87 0 11.64)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#feffff"></stop>
                          <stop offset=".4" stopColor="#feffff"></stop>
                          <stop offset=".51" stopColor="#f9fcfc"></stop>
                          <stop offset=".62" stopColor="#edf3f5"></stop>
                          <stop offset=".7" stopColor="#dee9ec"></stop>
                          <stop offset=".72" stopColor="#d8e4e8"></stop>
                          <stop offset=".76" stopColor="#ccd8df"></stop>
                          <stop offset=".8" stopColor="#c8d5dd"></stop>
                          <stop offset=".83" stopColor="#ccd6de"></stop>
                          <stop offset=".85" stopColor="#d8dbe2"></stop>
                          <stop offset=".88" stopColor="#ede3e9"></stop>
                          <stop offset=".9" stopColor="#ffebef"></stop>
                        </radialgradient>
                        <radialgradient xlinkHref="#snoo-radial-gragient" id="snoo-radial-gragient-2" cx="47.31" r="50.98" fx="47.31"></radialgradient>
                        <radialgradient xlinkHref="#snoo-radial-gragient" id="snoo-radial-gragient-3" cx="109.61" cy="85.59" r="153.78" fx="109.61" fy="85.59" gradientTransform="matrix(1 0 0 .7 0 25.56)"></radialgradient>
                        <radialgradient id="snoo-radial-gragient-4" cx="-6.01" cy="64.68" r="12.85" fx="-6.01" fy="64.68" gradientTransform="matrix(1.07 0 0 1.55 81.08 27.26)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#f60"></stop>
                          <stop offset=".5" stopColor="#ff4500"></stop>
                          <stop offset=".7" stopColor="#fc4301"></stop>
                          <stop offset=".82" stopColor="#f43f07"></stop>
                          <stop offset=".92" stopColor="#e53812"></stop>
                          <stop offset="1" stopColor="#d4301f"></stop>
                        </radialgradient>
                        <radialgradient xlinkHref="#snoo-radial-gragient-4" id="snoo-radial-gragient-5" cx="-73.55" cy="64.68" r="12.85" fx="-73.55" fy="64.68" gradientTransform="matrix(-1.07 0 0 1.55 62.87 27.26)"></radialgradient>
                        <radialgradient id="snoo-radial-gragient-6" cx="107.93" cy="166.96" r="45.3" fx="107.93" fy="166.96" gradientTransform="matrix(1 0 0 .66 0 57.4)" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#172e35"></stop>
                          <stop offset=".29" stopColor="#0e1c21"></stop>
                          <stop offset=".73" stopColor="#030708"></stop>
                          <stop offset="1"></stop>
                        </radialgradient>
                        <radialgradient xlinkHref="#snoo-radial-gragient" id="snoo-radial-gragient-7" cx="147.88" cy="32.94" r="39.77" fx="147.88" fy="32.94" gradientTransform="matrix(1 0 0 .98 0 .54)"></radialgradient>
                        <radialgradient id="snoo-radial-gragient-8" cx="131.31" cy="73.08" r="32.6" fx="131.31" fy="73.08" gradientUnits="userSpaceOnUse">
                          <stop offset=".48" stopColor="#7a9299"></stop>
                          <stop offset=".67" stopColor="#172e35"></stop>
                          <stop offset=".75"></stop>
                          <stop offset=".82" stopColor="#172e35"></stop>
                        </radialgradient>
                      </defs>
                      <path fill="#ff4500" d="M108 0C48.35 0 0 48.35 0 108c0 29.82 12.09 56.82 31.63 76.37l-20.57 20.57C6.98 209.02 9.87 216 15.64 216H108c59.65 0 108-48.35 108-108S167.65 0 108 0Z"></path>
                      <circle cx="169.22" cy="106.98" r="25.22" fill="url(#snoo-radial-gragient)"></circle>
                      <circle cx="46.78" cy="106.98" r="25.22" fill="url(#snoo-radial-gragient-2)"></circle>
                      <ellipse cx="108.06" cy="128.64" fill="url(#snoo-radial-gragient-3)" rx="72" ry="54"></ellipse>
                      <path fill="url(#snoo-radial-gragient-4)" d="M86.78 123.48c-.42 9.08-6.49 12.38-13.56 12.38s-12.46-4.93-12.04-14.01c.42-9.08 6.49-15.02 13.56-15.02s12.46 7.58 12.04 16.66Z"></path>
                      <path fill="url(#snoo-radial-gragient-5)" d="M129.35 123.48c.42 9.08 6.49 12.38 13.56 12.38s12.46-4.93 12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46 7.58-12.04 16.66Z"></path>
                      <ellipse cx="79.63" cy="116.37" rx="2.8" ry="3.05"></ellipse>
                      <ellipse cx="146.21" cy="116.37" rx="2.8" ry="3.05"></ellipse>
                      <path fill="url(#snoo-radial-gragient-6)" d="M108.06 142.92c-8.76 0-17.16.43-24.92 1.22-1.33.13-2.17 1.51-1.65 2.74 4.35 10.39 14.61 17.69 26.57 17.69s22.23-7.3 26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z"></path>
                      <circle cx="147.49" cy="49.43" r="17.87" fill="url(#snoo-radial-gragient-7)"></circle>
                      <path fill="url(#snoo-radial-gragient-8)" d="M107.8 76.92c-2.14 0-3.87-.89-3.87-2.27 0-16.01 13.03-29.04 29.04-29.04 2.14 0 3.87 1.73 3.87 3.87s-1.73 3.87-3.87 3.87c-11.74 0-21.29 9.55-21.29 21.29 0 1.38-1.73 2.27-3.87 2.27Z"></path>
                      <path fill="#842123" d="M62.82 122.65c.39-8.56 6.08-14.16 12.69-14.16 6.26 0 11.1 6.39 11.28 14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14 6.05-13.56 15.2c-.42 9.15 4.97 13.83 12.04 13.83h.52c-6.44-.16-11.3-4.79-10.91-13.2Zm90.48 0c-.39-8.56-6.08-14.16-12.69-14.16-6.26 0-11.1 6.39-11.28 14.33-.17-8.88 5.13-15.99 12.05-15.99 7.07 0 13.14 6.05 13.56 15.2.42 9.15-4.97 13.83-12.04 13.83h-.52c6.44-.16 11.3-4.79 10.91-13.2Z"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 dark:hover:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Strapi" role="button" tabIndex="0" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                    <svg className="size-4.5" viewBox="0 0 18 18" fill="none">
                      <path d="M0.75 6.47002C0.75 3.77356 0.75 2.42533 1.5877 1.5877C2.42533 0.75 3.7735 0.75 6.47002 0.75H11.53C14.2264 0.75 15.5746 0.75 16.4124 1.5877C17.25 2.42533 17.25 3.7735 17.25 6.47002V11.53C17.25 14.2264 17.25 15.5746 16.4123 16.4124C15.5746 17.25 14.2265 17.25 11.53 17.25H6.47009C3.77363 17.25 2.42539 17.25 1.58776 16.4123C0.75 15.5746 0.75 14.2265 0.75 11.53V6.47002Z" fill="#4945FF"></path>
                      <path d="M12.135 5.75485H6.57999V8.58737H9.41251V11.4198H12.245V5.86487C12.245 5.80409 12.1957 5.75485 12.135 5.75485Z" fill="white"></path>
                      <path d="M9.30246 8.58743H9.41248V8.69745H9.30246V8.58743Z" fill="white"></path>
                      <path d="M6.57994 8.58737H9.30244C9.36322 8.58737 9.41246 8.63662 9.41246 8.69733V11.4198H6.68996C6.67552 11.4198 6.66121 11.417 6.64786 11.4115C6.63451 11.406 6.62238 11.3979 6.61217 11.3876C6.60195 11.3774 6.59384 11.3653 6.58831 11.352C6.58278 11.3386 6.57994 11.3243 6.57994 11.3099V8.58737ZM9.41246 11.4198H12.2449L9.5063 14.1584C9.47169 14.1931 9.41246 14.1686 9.41246 14.1196V11.4198ZM6.57994 8.58737H3.88019C3.83121 8.58737 3.80671 8.52808 3.84133 8.49347L6.57994 5.75485V8.58737Z" fill="#9593FF"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
                <li className="flex">
                  <Tooltip>
                  <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 dark:hover:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Connect app" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 dark:hover:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Help" role="button" tabIndex="0" id="base-ui-_r_j_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CircleHelpIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <Tooltip>
            <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-input/60 dark:hover:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-input/60 hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-ring transition-all whitespace-nowrap" href="#" aria-label="Settings" role="button" tabIndex="0" id="base-ui-_r_l_" baseUiTooltipTrigger="">
              <svg className="lucide lucide-settings" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </TooltipTrigger>
            </Tooltip>
            <div className="flex h-11 items-center">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Account menu for Shadcn" aria-haspopup="menu" id="base-ui-_r_p_" aria-expanded="false">
                <Avatar className="after:border-0 after:rounded-md rounded-md size-7" size="default">
                  <AvatarImage className="rounded-md" alt="" src="/assets/avatar-shadcn.jpg"></AvatarImage>
                </Avatar>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </div>
      <aside className="data-[state=collapsed]:w-0 duration-200 ease-linear hidden md:flex overflow-hidden shrink-0 transition-[width] w-72" aria-label="Fleet Center" data-state="expanded">
        <div className="flex flex-col py-3 shrink-0 w-72">
          <Card className="bg-background bg-linear-to-r dark flex-1 from-input/20 gap-0 min-h-0 py-0 ring-0 rounded-lg shadow-xs text-foreground to-input/20" size="default" aria-label="Fleet Center">
            <div className="flex gap-3 h-11 items-center justify-between px-4 shrink-0">
              <h2 className="font-medium text-foreground/90 text-sm truncate">
                {"Fleet Center"}
              </h2>
              <Tooltip>
              <TooltipTrigger className="-mr-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4 active:translate-y-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost dark:hover:bg-transparent disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground/90 inline-flex items-center justify-center outline-none select-none shrink-0 text-ring/80 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Search scopes" id="base-ui-_r_s_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </div>
            <Card className="bg-background flex-1 gap-0 inset-ring inset-ring-ring/20 min-h-0 py-0 ring-0 rounded-lg" size="default">
              <nav className="gap-2 grid grid-cols-3 p-4 shrink-0" aria-label="Views">
                <Button className="active:translate-y-0 bg-input/80 dark:hover:bg-input/80 flex-col font-medium gap-1.5 h-auto hover:bg-input/80 leading-3.5 px-2 py-3.75 rounded-lg text-[0.625rem] text-foreground/90" href="#" aria-current="page" role="button" tabIndex="0">
                  <svg className="lucide lucide-layout-dashboard" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                    <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                    <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                  </svg>
                  {"Overview"}
                </Button>
                <Button className="[&_svg]:text-ring/80 active:translate-y-0 bg-input/40 dark:hover:bg-input/80 flex-col font-medium gap-1.5 h-auto hover:[&_svg]:text-current hover:bg-input/80 hover:text-foreground/90 leading-3.5 px-2 py-3.75 rounded-lg text-[0.625rem] text-muted-foreground" href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-radio-tower" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RadioTowerIcon" tabler="IconAntenna" hugeicons="AntennaIcon" phosphor="BroadcastIcon" remixicon="RiSignalTowerLine" aria-hidden="true">
                    <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9"></path>
                    <path d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"></path>
                    <circle cx="12" cy="9" r="2"></circle>
                    <path d="M16.2 4.8c2 2 2.26 5.11.8 7.47"></path>
                    <path d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1"></path>
                    <path d="M9.5 18h5"></path>
                    <path d="m8 22 4-11 4 11"></path>
                  </svg>
                  {"Live"}
                </Button>
                <Button className="[&_svg]:text-ring/80 active:translate-y-0 bg-input/40 dark:hover:bg-input/80 flex-col font-medium gap-1.5 h-auto hover:[&_svg]:text-current hover:bg-input/80 hover:text-foreground/90 leading-3.5 px-2 py-3.75 rounded-lg text-[0.625rem] text-muted-foreground" href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-route" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                    <circle cx="6" cy="19" r="3"></circle>
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                    <circle cx="18" cy="5" r="3"></circle>
                  </svg>
                  {"Runs"}
                </Button>
                <Button className="[&_svg]:text-ring/80 active:translate-y-0 bg-input/40 dark:hover:bg-input/80 flex-col font-medium gap-1.5 h-auto hover:[&_svg]:text-current hover:bg-input/80 hover:text-foreground/90 leading-3.5 px-2 py-3.75 rounded-lg text-[0.625rem] text-muted-foreground" href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-layers" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Layers3Icon" tabler="IconStack3" hugeicons="Layers02Icon" phosphor="StackIcon" remixicon="RiStackLine" aria-hidden="true">
                    <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                    <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                    <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
                  </svg>
                  {"Load"}
                </Button>
                <Button className="[&_svg]:text-ring/80 active:translate-y-0 bg-input/40 dark:hover:bg-input/80 flex-col font-medium gap-1.5 h-auto hover:[&_svg]:text-current hover:bg-input/80 hover:text-foreground/90 leading-3.5 px-2 py-3.75 rounded-lg text-[0.625rem] text-muted-foreground" href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-database-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseZapIcon" tabler="IconDatabase" hugeicons="DatabaseZapIcon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5V19A9 3 0 0 0 15 21.84"></path>
                    <path d="M21 5V8"></path>
                    <path d="M21 12L18 17H22L19 22"></path>
                    <path d="M3 12A9 3 0 0 0 14.59 14.87"></path>
                  </svg>
                  {"Power"}
                </Button>
                <Button className="[&_svg]:text-ring/80 active:translate-y-0 bg-input/40 dark:hover:bg-input/80 flex-col font-medium gap-1.5 h-auto hover:[&_svg]:text-current hover:bg-input/80 hover:text-foreground/90 leading-3.5 px-2 py-3.75 rounded-lg text-[0.625rem] text-muted-foreground" href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-settings-2 lucide-settings2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Settings2Icon" tabler="IconAdjustmentsHorizontal" hugeicons="SlidersHorizontalIcon" phosphor="SlidersHorizontalIcon" remixicon="RiEqualizer2Line" aria-hidden="true">
                    <path d="M14 17H5"></path>
                    <path d="M19 7h-9"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  {"Service"}
                </Button>
                <Button className="[&_svg]:text-ring/80 active:translate-y-0 bg-input/40 dark:hover:bg-input/80 flex-col font-medium gap-1.5 h-auto hover:[&_svg]:text-current hover:bg-input/80 hover:text-foreground/90 leading-3.5 px-2 py-3.75 rounded-lg text-[0.625rem] text-muted-foreground" href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-octagon-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="OctagonAlertIcon" tabler="IconAlertOctagon" hugeicons="Alert02Icon" phosphor="WarningOctagonIcon" remixicon="RiAlarmWarningLine" aria-hidden="true">
                    <path d="M12 16h.01"></path>
                    <path d="M12 8v4"></path>
                    <path d="M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"></path>
                  </svg>
                  {"Issues"}
                </Button>
                <Button className="[&_svg]:text-ring/80 active:translate-y-0 bg-input/40 dark:hover:bg-input/80 flex-col font-medium gap-1.5 h-auto hover:[&_svg]:text-current hover:bg-input/80 hover:text-foreground/90 leading-3.5 px-2 py-3.75 rounded-lg text-[0.625rem] text-muted-foreground" href="#" role="button" tabIndex="0">
                  <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChartColumnIcon" tabler="IconChartBar" hugeicons="ChartColumnIcon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                  {"Trends"}
                </Button>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:text-ring/80 active:translate-y-0 bg-input/40 cn-button cn-button-size-default cn-button-variant-ghost dark:hover:bg-input/80 disabled:opacity-50 disabled:pointer-events-none flex-col font-medium gap-1.5 group/button h-auto hover:[&_svg]:text-current hover:bg-input/80 hover:text-foreground/90 inline-flex items-center justify-center leading-3.5 outline-none px-2 py-3.75 rounded-lg select-none shrink-0 text-[0.625rem] text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Pin a view" aria-haspopup="menu" id="base-ui-_r_10_" aria-expanded="false">
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </nav>
              <div className="flex h-0 items-center px-4" aria-hidden="true">
                <Separator className="bg-transparent border-dashed border-input/80 border-t" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </div>
              <div className="[--scroll-fade-reveal:--spacing(8)] flex-1 min-h-0 no-scrollbar overflow-y-auto p-4 scroll-fade-y scroll-py-10">
                <SidebarProvider>
                <SidebarGroup className="p-0" sidebar="group">
                  <SidebarProvider>
                  <SidebarGroupLabel className="h-5 pb-1 px-0 text-ring/80" sidebar="group-label">
                    {"Operational Scope"}
                  </SidebarGroupLabel>
                  </SidebarProvider>
                  <SidebarProvider>
                  <SidebarGroupContent sidebar="group-content">
                    <SidebarProvider>
                    <SidebarMenu sidebar="menu">
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <Collapsible data-open="">
                          <Collapsible>
                          <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring/80 [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground/90 items-center outline-hidden overflow-hidden peer/menu-button pr-0 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_12_" aria-expanded="true">
                            <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none rotate-90 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <svg className="lucide lucide-monitor-cog size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MonitorCogIcon" tabler="IconDeviceDesktopCog" hugeicons="ComputerSettingsIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" aria-hidden="true">
                              <path d="M12 17v4"></path>
                              <path d="m14.305 7.53.923-.382"></path>
                              <path d="m15.228 4.852-.923-.383"></path>
                              <path d="m16.852 3.228-.383-.924"></path>
                              <path d="m16.852 8.772-.383.923"></path>
                              <path d="m19.148 3.228.383-.924"></path>
                              <path d="m19.53 9.696-.382-.924"></path>
                              <path d="m20.772 4.852.924-.383"></path>
                              <path d="m20.772 7.148.924.383"></path>
                              <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                              <path d="M8 21h8"></path>
                              <circle cx="18" cy="6" r="3"></circle>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Fleet"}
                            </span>
                            <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-0 border-success/15 dark:bg-success/20 dark:border-success/25 dark:text-emerald-400 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-0.75 h-4.5 min-w-4.5 ml-auto outline-none pr-1.5 px-1 py-0.25 relative rounded-full text-[0.625rem] text-success-foreground transition-shadow">
                              <svg className="lucide lucide-shield-check size-2.5!" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              {"Stable"}
                            </Badge>
                          </CollapsibleTrigger>
                          </Collapsible>
                          <CollapsibleContent data-open="" id="base-ui-_r_12_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                            <Sortable className="border-l cn-sidebar-menu-sub flex flex-col gap-0 min-w-0 ml-1.75 mx-0 pl-1 pr-0 py-0 translate-x-0" sidebar="menu-sub" dragging="false">
                              <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="robots" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                <Collapsible data-closed="">
                                  <Collapsible>
                                  <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring/80 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground/90 items-center min-w-0 outline-hidden overflow-hidden pr-6 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                    <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                    <span className="shrink-0 size-4" aria-hidden="true"></span>
                                    <span className="min-w-0 truncate">
                                      {"Robots"}
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative rounded-full tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
                                      {"248"}
                                    </Badge>
                                  </CollapsibleTrigger>
                                  </Collapsible>
                                </Collapsible>
                                <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-transparent disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground/90 inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring/80 top-0.5 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Robots" dragging="false">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </SortableItemHandle>
                                <SidebarMenuAction className="[&>svg]:size-3.5 aspect-auto h-5 hover:bg-transparent hover:text-foreground/90 right-0 text-ring/80 top-1.5 w-3.5" type="button" sidebar="menu-action" aria-label="Add to Robots">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </SidebarMenuAction>
                              </SortableItem>
                              <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="depots" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                <Collapsible data-open="">
                                  <Collapsible>
                                  <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring/80 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground/90 items-center min-w-0 outline-hidden overflow-hidden pr-6 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" panelOpen="" tabIndex="0" aria-disabled="false" aria-controls="base-ui-_r_14_" aria-expanded="true">
                                    <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none rotate-90 shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                    <span className="shrink-0 size-4" aria-hidden="true"></span>
                                    <span className="min-w-0 truncate">
                                      {"Depots"}
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative rounded-full tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
                                      {"12"}
                                    </Badge>
                                  </CollapsibleTrigger>
                                  </Collapsible>
                                  <CollapsibleContent data-open="" id="base-ui-_r_14_" style={{"--collapsible-panel-height": "auto", "--collapsible-panel-width": "auto", animationName: "none"}}>
                                    <SidebarMenuSub className="border-l gap-px ml-3.75 mx-0 pl-1 pr-0 py-0 translate-x-0" sidebar="menu-sub">
                                      <SidebarMenuSubItem sidebar="menu-sub-item">
                                        <SidebarMenuSubButton className="[&>svg]:text-ring/80 active:bg-input/60 aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 data-active:[&>svg]:text-current data-active:bg-input/60 data-active:gap-2 data-active:text-foreground/90 font-medium gap-1.5 hover:[&>svg]:text-current hover:bg-input/60 hover:text-foreground/90 pr-0 text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
                                          <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                                            <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                                            <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                                            <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                                            <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                                          </svg>
                                          <span className="min-w-0 truncate">
                                            {"Overview"}
                                          </span>
                                        </SidebarMenuSubButton>
                                      </SidebarMenuSubItem>
                                      <SidebarMenuSubItem sidebar="menu-sub-item">
                                        <SidebarMenuSubButton className="[&>svg]:text-ring/80 active:bg-input/60 aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 data-active:[&>svg]:text-current data-active:bg-input/60 data-active:gap-2 data-active:text-foreground/90 font-medium gap-1.5 hover:[&>svg]:text-current hover:bg-input/60 hover:text-foreground/90 pr-0 text-muted-foreground translate-x-0 w-full" href="#" aria-current="page" sidebar="menu-sub-button" size="sm" data-active="">
                                          <svg className="lucide lucide-scan-search size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ScanSearchIcon" tabler="IconZoomScan" hugeicons="SearchVisualIcon" phosphor="SelectionIcon" remixicon="RiScan2Line" aria-hidden="true">
                                            <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                                            <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                                            <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                                            <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                            <path d="m16 16-1.9-1.9"></path>
                                          </svg>
                                          <span className="min-w-0 truncate">
                                            {"Suspicious Activity"}
                                          </span>
                                        </SidebarMenuSubButton>
                                      </SidebarMenuSubItem>
                                      <SidebarMenuSubItem sidebar="menu-sub-item">
                                        <SidebarMenuSubButton className="[&>svg]:text-ring/80 active:bg-input/60 aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 data-active:[&>svg]:text-current data-active:bg-input/60 data-active:gap-2 data-active:text-foreground/90 font-medium gap-1.5 hover:[&>svg]:text-current hover:bg-input/60 hover:text-foreground/90 pr-12 text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
                                          <svg className="lucide lucide-shield-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                            <path d="M12 8v4"></path>
                                            <path d="M12 16h.01"></path>
                                          </svg>
                                          <span className="min-w-0 truncate">
                                            {"Incidents"}
                                          </span>
                                        </SidebarMenuSubButton>
                                        <a className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-sm cn-button-variant-ghost dark:hover:bg-transparent disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-5 hover:bg-transparent hover:text-foreground/90 inline-flex items-center justify-center outline-none px-0 right-0 select-none shrink-0 text-ring/80 text-xs top-1 transition-all w-auto whitespace-nowrap" href="#" aria-label="Review Incidents">
                                          {"Review"}
                                        </a>
                                      </SidebarMenuSubItem>
                                      <SidebarMenuSubItem sidebar="menu-sub-item">
                                        <SidebarMenuSubButton className="[&>svg]:text-ring/80 active:bg-input/60 aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 data-active:[&>svg]:text-current data-active:bg-input/60 data-active:gap-2 data-active:text-foreground/90 font-medium gap-1.5 hover:[&>svg]:text-current hover:bg-input/60 hover:text-foreground/90 pr-0 text-muted-foreground translate-x-0 w-full" href="#" sidebar="menu-sub-button" size="sm">
                                          <svg className="lucide lucide-square-activity size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SquareActivityIcon" tabler="IconActivityHeartbeat" hugeicons="PulseRectangle01Icon" phosphor="HeartbeatIcon" remixicon="RiPulseLine" aria-hidden="true">
                                            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                                            <path d="M17 12h-2l-2 5-2-10-2 5H7"></path>
                                          </svg>
                                          <span className="min-w-0 truncate">
                                            {"Anomalies"}
                                          </span>
                                        </SidebarMenuSubButton>
                                      </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                  </CollapsibleContent>
                                </Collapsible>
                                <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-transparent disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground/90 inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring/80 top-0.5 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Depots" dragging="false">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </SortableItemHandle>
                                <SidebarMenuAction className="[&>svg]:size-3.5 aspect-auto h-5 hover:bg-transparent hover:text-foreground/90 right-0 text-ring/80 top-1.5 w-3.5" type="button" sidebar="menu-action" aria-label="Add to Depots">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </SidebarMenuAction>
                              </SortableItem>
                              <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="risks" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                <Collapsible data-closed="">
                                  <Collapsible>
                                  <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring/80 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground/90 items-center min-w-0 outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                    <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                    <span className="shrink-0 size-4" aria-hidden="true"></span>
                                    <span className="min-w-0 truncate">
                                      {"Risks"}
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative rounded-full tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
                                      {"37"}
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-destructive/10 border-0 border-destructive/15 dark:bg-destructive/20 dark:border-destructive/25 dark:text-destructive-foreground disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 min-w-4 ml-auto outline-none px-1 py-0.25 relative rounded-full text-[0.625rem] text-destructive-foreground transition-shadow">
                                      {"High"}
                                    </Badge>
                                  </CollapsibleTrigger>
                                  </Collapsible>
                                </Collapsible>
                                <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-transparent disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground/90 inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring/80 top-0.5 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Risks" dragging="false">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </SortableItemHandle>
                              </SortableItem>
                              <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="policies" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                <Collapsible data-closed="">
                                  <Collapsible>
                                  <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring/80 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground/90 items-center min-w-0 outline-hidden overflow-hidden pr-6 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                    <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                    <span className="shrink-0 size-4" aria-hidden="true"></span>
                                    <span className="min-w-0 truncate">
                                      {"Policies"}
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative rounded-full tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
                                      {"8"}
                                    </Badge>
                                  </CollapsibleTrigger>
                                  </Collapsible>
                                </Collapsible>
                                <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-transparent disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground/90 inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring/80 top-0.5 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Policies" dragging="false">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </SortableItemHandle>
                                <SidebarMenuAction className="[&>svg]:size-3.5 aspect-auto h-5 hover:bg-transparent hover:text-foreground/90 right-0 text-ring/80 top-1.5 w-3.5" type="button" sidebar="menu-action" aria-label="Add to Policies">
                                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5v14"></path>
                                  </svg>
                                </SidebarMenuAction>
                              </SortableItem>
                              <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="quarantined" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                <Collapsible data-closed="">
                                  <Collapsible>
                                  <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring/80 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground/90 items-center min-w-0 outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                    <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                    <span className="shrink-0 size-4" aria-hidden="true"></span>
                                    <span className="min-w-0 truncate">
                                      {"Quarantined"}
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative rounded-full tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
                                      {"5"}
                                    </Badge>
                                  </CollapsibleTrigger>
                                  </Collapsible>
                                </Collapsible>
                                <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-transparent disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground/90 inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring/80 top-0.5 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Quarantined" dragging="false">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </SortableItemHandle>
                              </SortableItem>
                              <SortableItem className="data-[dragging=true]:bg-background data-[dragging=true]:pointer-events-none group/menu-sub-item relative rounded-md text-sidebar-foreground" sidebar="menu-sub-item" value="tasks" dragging="false" tabIndex="-1" aria-disabled="false" aria-roledescription="sortable" aria-describedby="DndDescribedBy-0">
                                <Collapsible data-closed="">
                                  <Collapsible>
                                  <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:shrink-0 [&>svg]:text-ring/80 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 cn-sidebar-menu-sub-button data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group-data-[collapsible=icon]:hidden h-8 hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground/90 items-center min-w-0 outline-hidden overflow-hidden pr-0 text-muted-foreground translate-x-0 w-full" type="button" sidebar="menu-sub-button" size="sm" tabIndex="0" aria-disabled="false" aria-expanded="false">
                                    <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                                      <path d="m9 18 6-6-6-6"></path>
                                    </svg>
                                    <span className="shrink-0 size-4" aria-hidden="true"></span>
                                    <span className="min-w-0 truncate">
                                      {"Tasks"}
                                    </span>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border-0 border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1.5 py-0.25 relative rounded-full tabular-nums text-[0.625rem] text-secondary-foreground transition-shadow">
                                      {"7"}
                                    </Badge>
                                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border-0 border-success/15 dark:bg-success/20 dark:border-success/25 dark:text-emerald-400 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4 min-w-4 ml-auto outline-none px-1 py-0.25 relative rounded-full text-[0.625rem] text-success-foreground transition-shadow">
                                      {"Active"}
                                    </Badge>
                                  </CollapsibleTrigger>
                                  </Collapsible>
                                </Collapsible>
                                <SortableItemHandle className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost dark:hover:bg-transparent disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent hover:text-foreground/90 inline-flex items-center justify-center left-5.5 outline-none select-none shrink-0 text-ring/80 top-0.5 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Reorder Tasks" dragging="false">
                                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                                    <circle cx="9" cy="12" r="1"></circle>
                                    <circle cx="9" cy="5" r="1"></circle>
                                    <circle cx="9" cy="19" r="1"></circle>
                                    <circle cx="15" cy="12" r="1"></circle>
                                    <circle cx="15" cy="5" r="1"></circle>
                                    <circle cx="15" cy="19" r="1"></circle>
                                  </svg>
                                </SortableItemHandle>
                              </SortableItem>
                            </Sortable>
                            <div id="DndDescribedBy-0" style={{display: "none"}}>
                              {"To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel."}
                            </div>
                            <div id="DndLiveRegion-0" role="status" aria-live="assertive" aria-atomic="true" style={{position: "fixed", top: "0px", left: "0px", width: "1px", height: "1px", margin: "-1px", border: "0px", padding: "0px", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", clipPath: "inset(100%)", whiteSpace: "nowrap"}}></div>
                          </CollapsibleContent>
                        </Collapsible>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <Collapsible data-closed="">
                          <Collapsible>
                          <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring/80 [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground/90 items-center outline-hidden overflow-hidden peer/menu-button pr-6 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex="0" aria-disabled="false" aria-expanded="false">
                            <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <svg className="lucide lucide-shield-ellipsis size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldEllipsisIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                              <path d="M8 12h.01"></path>
                              <path d="M12 12h.01"></path>
                              <path d="M16 12h.01"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Identity & Access"}
                            </span>
                          </CollapsibleTrigger>
                          </Collapsible>
                          <SidebarMenuAction className="[&>svg]:size-3.5 aspect-auto h-5 hover:bg-transparent hover:text-foreground/90 right-0 text-ring/80 top-1.5 w-3.5" type="button" sidebar="menu-action" aria-label="Add to Identity & Access">
                            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                              <path d="M5 12h14"></path>
                              <path d="M12 5v14"></path>
                            </svg>
                          </SidebarMenuAction>
                        </Collapsible>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <Collapsible data-closed="">
                          <Collapsible>
                          <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring/80 [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground/90 items-center outline-hidden overflow-hidden peer/menu-button pr-0 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex="0" aria-disabled="false" aria-expanded="false">
                            <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <svg className="lucide lucide-braces size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BracesIcon" tabler="IconBraces" hugeicons="BracesIcon" phosphor="BracketsCurlyIcon" remixicon="RiBracesLine" aria-hidden="true">
                              <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path>
                              <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Application Security"}
                            </span>
                          </CollapsibleTrigger>
                          </Collapsible>
                        </Collapsible>
                      </SidebarMenuItem>
                      </SidebarProvider>
                      <SidebarProvider>
                      <SidebarMenuItem sidebar="menu-item">
                        <Collapsible data-closed="">
                          <Collapsible>
                          <CollapsibleTrigger className="[&>span:last-child]:truncate [&>svg]:text-ring/80 [&_svg]:shrink-0 [&_svg]:size-4 active:bg-transparent aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-expanded:[&>svg]:text-current aria-expanded:text-foreground/90 cn-sidebar-menu-button cn-sidebar-menu-button-size-default cn-sidebar-menu-button-variant-default data-active:[&>svg]:text-current data-active:bg-transparent data-active:text-foreground/90 disabled:opacity-50 disabled:pointer-events-none flex font-medium gap-1.5 group/menu-button hover:[&>svg]:text-current hover:bg-transparent hover:text-foreground/90 items-center outline-hidden overflow-hidden peer/menu-button pr-12 px-0 text-muted-foreground text-xs w-full" type="button" sidebar="menu-button" size="default" tabIndex="0" aria-disabled="false" aria-expanded="false">
                            <svg className="duration-200 lucide lucide-chevron-right motion-reduce:transition-none shrink-0 size-3.5! transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                              <path d="m9 18 6-6-6-6"></path>
                            </svg>
                            <svg className="lucide lucide-database-zap size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="DatabaseZapIcon" tabler="IconDatabase" hugeicons="DatabaseZapIcon" phosphor="DatabaseIcon" remixicon="RiDatabase2Line" aria-hidden="true">
                              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                              <path d="M3 5V19A9 3 0 0 0 15 21.84"></path>
                              <path d="M21 5V8"></path>
                              <path d="M21 12L18 17H22L19 22"></path>
                              <path d="M3 12A9 3 0 0 0 14.59 14.87"></path>
                            </svg>
                            <span className="min-w-0 truncate">
                              {"Data Protection"}
                            </span>
                          </CollapsibleTrigger>
                          </Collapsible>
                          <a className="[&_svg]:pointer-events-none [&_svg]:shrink-0 absolute active:translate-y-0 cn-button cn-button-size-sm cn-button-variant-ghost dark:hover:bg-transparent disabled:opacity-50 disabled:pointer-events-none font-normal group/button h-5 hover:bg-transparent hover:text-foreground/90 inline-flex items-center justify-center outline-none px-0 right-0 select-none shrink-0 text-ring/80 text-xs top-1.5 transition-all w-auto whitespace-nowrap" href="#" aria-label="Review Data Protection">
                            {"Review"}
                          </a>
                        </Collapsible>
                      </SidebarMenuItem>
                      </SidebarProvider>
                    </SidebarMenu>
                    </SidebarProvider>
                  </SidebarGroupContent>
                  </SidebarProvider>
                </SidebarGroup>
                </SidebarProvider>
              </div>
            </Card>
            <div className="flex gap-2.5 px-4 py-2.5 shrink-0">
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none flex-1 group/button inline-flex items-center justify-center outline-none select-none shadow-xs text-foreground/80 text-xs transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1f_" aria-expanded="false">
                <svg className="lucide lucide-copy-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyPlusIcon" tabler="IconCopyPlus" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" data-icon="inline-start" aria-hidden="true">
                  <line x1="15" x2="15" y1="12" y2="18"></line>
                  <line x1="12" x2="18" y1="15" y2="15"></line>
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
                {"Quick Add"}
              </DropdownMenuTrigger>
              </DropdownMenu>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none flex-1 group/button inline-flex items-center justify-center outline-none select-none shadow-xs text-foreground/80 text-xs transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_1k_" aria-expanded="false">
                <svg className="lucide lucide-monitor-cog" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MonitorCogIcon" tabler="IconDeviceDesktopCog" hugeicons="ComputerSettingsIcon" phosphor="MonitorIcon" remixicon="RiComputerLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 17v4"></path>
                  <path d="m14.305 7.53.923-.382"></path>
                  <path d="m15.228 4.852-.923-.383"></path>
                  <path d="m16.852 3.228-.383-.924"></path>
                  <path d="m16.852 8.772-.383.923"></path>
                  <path d="m19.148 3.228.383-.924"></path>
                  <path d="m19.53 9.696-.382-.924"></path>
                  <path d="m20.772 4.852.924-.383"></path>
                  <path d="m20.772 7.148.924.383"></path>
                  <path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                  <path d="M8 21h8"></path>
                  <circle cx="18" cy="6" r="3"></circle>
                </svg>
                {"System"}
              </DropdownMenuTrigger>
              </DropdownMenu>
            </div>
          </Card>
        </div>
      </aside>
      <div className="flex flex-1 flex-col min-w-0">
        <header className="border-b border-input/50 flex gap-2.5 items-center md:hidden px-3 py-2.5 shrink-0">
          <a className="dark:text-foreground/90 flex focus-visible:ring-3 focus-visible:ring-ring/50 outline-none rounded-md text-foreground" href="#" aria-label="NeUI home">
            <svg className="size-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path opacity=".2" fillRule="evenodd" clipRule="evenodd" d="M16 0.92308H8C4.09152 0.92308 0.92308 4.09152 0.92308 8V16C0.92308 19.9085 4.09152 23.0769 8 23.0769H16C19.9085 23.0769 23.0769 19.9085 23.0769 16V8C23.0769 4.09152 19.9085 0.92308 16 0.92308ZM8 0C3.58172 0 0 3.58172 0 8V16C0 20.4183 3.58172 24 8 24H16C20.4183 24 24 20.4183 24 16V8C24 3.58172 20.4183 0 16 0H8Z" fill="currentColor"></path>
              <path d="M16.8322 8.25504C17.4549 8.25504 17.9597 7.75023 17.9597 7.12752C17.9597 6.50481 17.4549 6 16.8322 6C16.2095 6 15.7047 6.50481 15.7047 7.12752C15.7047 7.75023 16.2095 8.25504 16.8322 8.25504Z" fill="currentColor"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M6.04032 13.6509V7.12745C6.04032 6.50474 6.54512 5.99993 7.16782 5.99993C7.79055 5.99993 8.29535 6.50474 8.29535 7.12745V13.6509C8.29535 14.8074 9.23282 15.7449 10.3893 15.7449H13.6108C14.7672 15.7449 15.7047 14.8074 15.7047 13.6509V10.4616C15.7047 9.83898 16.2095 9.33418 16.8323 9.33418C17.4549 9.33418 17.9598 9.83898 17.9598 10.4616V13.6509C17.9598 16.0528 16.0127 17.9999 13.6108 17.9999H10.3893C7.98742 17.9999 6.04032 16.0528 6.04032 13.6509Z" fill="currentColor"></path>
            </svg>
          </a>
          <SidebarProvider>
          <SidebarTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" sidebar="trigger">
            <svg className="cn-rtl-flip lucide lucide-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PanelLeftIcon" tabler="IconLayoutSidebar" hugeicons="SidebarLeftIcon" phosphor="SidebarIcon" remixicon="RiSideBarLine">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M9 3v18"></path>
            </svg>
            <span className="sr-only">
              {"Toggle Sidebar"}
            </span>
          </SidebarTrigger>
          </SidebarProvider>
          <h1 className="font-medium text-sm truncate">
            {"Fleet Center"}
          </h1>
        </header>
        <main className="@container [--scroll-fade-reveal:--spacing(8)] duration-200 ease-linear flex flex-1 flex-col lg:overflow-hidden md:data-[state=collapsed]:pl-0 min-h-0 min-w-0 no-scrollbar overflow-y-auto p-3 scroll-fade-y transition-[padding]" data-state="expanded">
          <div className="[--shell-line:#f3f1f3] [--shell-sheet:#ffffff] dark:[--shell-line:var(--border)] dark:[--shell-sheet:var(--card)] flex flex-col gap-3 lg:flex-1 lg:min-h-0" aria-hidden="true">
            <div className="@2xl:grid-cols-3 gap-3 grid items-start">
              <Card className="bg-input/50 dark:bg-input/20 gap-0 inset-ring inset-ring-(--shell-line) py-0 ring-0 rounded-lg" size="default">
                <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-(--shell-line) after:pointer-events-none after:rounded-lg bg-(--shell-sheet) relative ring-0 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex gap-4 h-8 items-center justify-between">
                      <div className="flex flex-1 gap-2.5 items-center min-w-0">
                        <Skeleton className="bg-input/50 dark:bg-input/30 shrink-0 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-5 max-w-23.5 w-full"></Skeleton>
                      </div>
                      <div className="flex items-center justify-center size-8">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-1"></Skeleton>
                      </div>
                    </div>
                    <div className="flex gap-1 h-6 items-center">
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-10.25"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 max-w-26.25 w-full"></Skeleton>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex gap-4 items-center justify-between px-4 py-1.5">
                  <Skeleton className="bg-input/50 dark:bg-input/30 h-5 rounded-full shrink-0 w-24.5"></Skeleton>
                  <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-27.5 w-full"></Skeleton>
                </div>
              </Card>
              <Card className="bg-input/50 dark:bg-input/20 gap-0 inset-ring inset-ring-(--shell-line) py-0 ring-0 rounded-lg" size="default">
                <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-(--shell-line) after:pointer-events-none after:rounded-lg bg-(--shell-sheet) relative ring-0 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex gap-4 h-8 items-center justify-between">
                      <div className="flex flex-1 gap-2.5 items-center min-w-0">
                        <Skeleton className="bg-input/50 dark:bg-input/30 shrink-0 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-5 max-w-20 w-full"></Skeleton>
                      </div>
                      <div className="flex items-center justify-center size-8">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-1"></Skeleton>
                      </div>
                    </div>
                    <div className="flex gap-1 h-6 items-center">
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-10.5"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 max-w-21 w-full"></Skeleton>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex gap-4 items-center justify-between px-4 py-1.5">
                  <div className="flex flex-1 gap-2 items-center min-w-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 rounded-full shrink-0 w-8"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-3 max-w-16.75 w-full"></Skeleton>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 size-6"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-6 w-14.75"></Skeleton>
                  </div>
                </div>
              </Card>
              <Card className="bg-input/50 dark:bg-input/20 gap-0 inset-ring inset-ring-(--shell-line) py-0 ring-0 rounded-lg" size="default">
                <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-(--shell-line) after:pointer-events-none after:rounded-lg bg-(--shell-sheet) relative ring-0 rounded-lg" size="default">
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex gap-4 h-8 items-center justify-between">
                      <div className="flex flex-1 gap-2.5 items-center min-w-0">
                        <Skeleton className="bg-input/50 dark:bg-input/30 shrink-0 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-5 max-w-24.25 w-full"></Skeleton>
                      </div>
                      <div className="flex items-center justify-center size-8">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-1"></Skeleton>
                      </div>
                    </div>
                    <div className="flex gap-1 h-6 items-center">
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-11.5"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 max-w-31 w-full"></Skeleton>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex gap-4 items-center justify-between px-4 py-1.5">
                  <div className="flex flex-1 gap-2 items-center min-w-0">
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-3.5 shrink-0 w-12.75"></Skeleton>
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-25 w-full"></Skeleton>
                  </div>
                  <Skeleton className="bg-input/50 dark:bg-input/30 h-6 shrink-0 w-14.5"></Skeleton>
                </div>
              </Card>
            </div>
            <Card className="bg-input/50 dark:bg-input/20 gap-0 inset-ring inset-ring-(--shell-line) lg:flex-1 lg:min-h-0 py-0 ring-0 rounded-lg" size="default">
              <div className="flex gap-4 items-center justify-between px-4 py-1.5">
                <Skeleton className="bg-input/50 dark:bg-input/30 h-5 max-w-27.5 w-full"></Skeleton>
                <div className="flex gap-2.5 shrink-0">
                  <Skeleton className="bg-input/50 dark:bg-input/30 h-7 w-23.25"></Skeleton>
                  <Skeleton className="bg-input/50 dark:bg-input/30 h-7 w-14"></Skeleton>
                  <Skeleton className="bg-input/50 dark:bg-input/30 size-7"></Skeleton>
                </div>
              </div>
              <Card className="after:absolute after:inset-0 after:inset-ring after:inset-ring-(--shell-line) after:pointer-events-none after:rounded-lg bg-(--shell-sheet) lg:flex-1 lg:min-h-0 relative ring-0 rounded-lg" size="default">
                <CardContent className="@container flex flex-col gap-4">
                  <div className="flex flex-wrap gap-3 items-center justify-between">
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-6 max-w-75.25 w-full"></Skeleton>
                    <div className="@lg:w-auto flex gap-1.5 items-center w-full">
                      <Skeleton className="@lg:w-60 bg-input/50 dark:bg-input/30 h-6 w-full"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 shrink-0 size-6"></Skeleton>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Card className="[--card-spacing:--spacing(3.25)] after:absolute after:inset-0 after:inset-ring after:inset-ring-(--shell-line) after:pointer-events-none after:rounded-lg bg-(--shell-sheet) pb-2.25 relative ring-0 rounded-lg" size="default">
                      <CardContent className="flex flex-col gap-5">
                        <div className="flex gap-4 items-start">
                          <div className="@3xl:flex-row @3xl:gap-10 @3xl:items-center flex flex-1 flex-col gap-3 min-w-0">
                            <div className="@3xl:shrink-0 @3xl:w-52.5 flex gap-1.5 items-center min-w-0 w-full">
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-10.25 rounded-full shrink-0 w-3"></Skeleton>
                              <div className="flex flex-1 flex-col h-11.5 justify-between min-w-0">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-19.25 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-36 w-full"></Skeleton>
                              </div>
                            </div>
                            <div className="@lg:flex @lg:gap-10 gap-x-5 gap-y-3 grid grid-cols-2 min-w-0">
                              <div className="flex flex-col h-11 justify-between max-w-full w-23">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                              <div className="flex flex-col h-11 justify-between max-w-full w-13.75">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                              <div className="flex flex-col h-11 justify-between max-w-full w-12">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                              <div className="flex flex-col h-11 justify-between max-w-full w-16">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            <Skeleton className="bg-input/50 dark:bg-input/30 size-6"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 size-6"></Skeleton>
                          </div>
                        </div>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 max-w-50 rounded-full w-full"></Skeleton>
                      </CardContent>
                    </Card>
                    <Card className="bg-input/50 dark:bg-input/20 gap-0 inset-ring inset-ring-(--shell-line) py-0 ring-0 rounded-lg" size="default">
                      <Card className="[--card-spacing:--spacing(3.25)] after:absolute after:inset-0 after:inset-ring after:inset-ring-(--shell-line) after:pointer-events-none after:rounded-lg bg-(--shell-sheet) relative ring-0 rounded-lg" size="default">
                        <CardContent className="flex flex-col gap-6">
                          <div className="flex gap-4 items-start">
                            <div className="@3xl:flex-row @3xl:gap-10 @3xl:items-center flex flex-1 flex-col gap-3 min-w-0">
                              <div className="@3xl:shrink-0 @3xl:w-52.5 flex gap-1.5 items-center min-w-0 w-full">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-10.25 rounded-full shrink-0 w-3"></Skeleton>
                                <div className="flex flex-1 flex-col h-11.5 justify-between min-w-0">
                                  <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-19.25 w-full"></Skeleton>
                                  <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-36 w-full"></Skeleton>
                                </div>
                              </div>
                              <div className="@lg:flex @lg:gap-10 gap-x-5 gap-y-3 grid grid-cols-2 min-w-0">
                                <div className="flex flex-col h-11 justify-between max-w-full w-23">
                                  <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                  <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                </div>
                                <div className="flex flex-col h-11 justify-between max-w-full w-13.75">
                                  <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                  <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                </div>
                                <div className="flex flex-col h-11 justify-between max-w-full w-12">
                                  <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                  <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                </div>
                                <div className="flex flex-col h-11 justify-between max-w-full w-16">
                                  <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                  <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                </div>
                              </div>
                            </div>
                            <div className="flex gap-2 shrink-0">
                              <Skeleton className="bg-input/50 dark:bg-input/30 size-6"></Skeleton>
                              <Skeleton className="bg-input/50 dark:bg-input/30 size-6"></Skeleton>
                            </div>
                          </div>
                          <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 max-w-50 rounded-full w-full"></Skeleton>
                          <div className="@3xl:flex-row flex flex-col gap-4">
                            <div className="@3xl:w-60 flex flex-col gap-3 shrink-0 w-full">
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-23.5"></Skeleton>
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-6"></Skeleton>
                            </div>
                            <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 h-23.5 min-w-0"></Skeleton>
                          </div>
                        </CardContent>
                      </Card>
                      <div className="@3xl:flex-row @3xl:items-center @3xl:justify-between flex flex-col gap-2 px-3 py-1.5">
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-72.75 w-full"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-7 max-w-89.75 w-full"></Skeleton>
                      </div>
                    </Card>
                    <Card className="[--card-spacing:--spacing(3.25)] after:absolute after:inset-0 after:inset-ring after:inset-ring-(--shell-line) after:pointer-events-none after:rounded-lg bg-(--shell-sheet) pb-2.25 relative ring-0 rounded-lg" size="default">
                      <CardContent className="flex flex-col gap-5">
                        <div className="flex gap-4 items-start">
                          <div className="@3xl:flex-row @3xl:gap-10 @3xl:items-center flex flex-1 flex-col gap-3 min-w-0">
                            <div className="@3xl:shrink-0 @3xl:w-52.5 flex gap-1.5 items-center min-w-0 w-full">
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-10.25 rounded-full shrink-0 w-3"></Skeleton>
                              <div className="flex flex-1 flex-col h-11.5 justify-between min-w-0">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-19.25 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-36 w-full"></Skeleton>
                              </div>
                            </div>
                            <div className="@lg:flex @lg:gap-10 gap-x-5 gap-y-3 grid grid-cols-2 min-w-0">
                              <div className="flex flex-col h-11 justify-between max-w-full w-23">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                              <div className="flex flex-col h-11 justify-between max-w-full w-13.75">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                              <div className="flex flex-col h-11 justify-between max-w-full w-12">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                              <div className="flex flex-col h-11 justify-between max-w-full w-16">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            <Skeleton className="bg-input/50 dark:bg-input/30 size-6"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 size-6"></Skeleton>
                          </div>
                        </div>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 max-w-50 rounded-full w-full"></Skeleton>
                      </CardContent>
                    </Card>
                    <Card className="[--card-spacing:--spacing(3.25)] after:absolute after:inset-0 after:inset-ring after:inset-ring-(--shell-line) after:pointer-events-none after:rounded-lg bg-(--shell-sheet) pb-2.25 relative ring-0 rounded-lg" size="default">
                      <CardContent className="flex flex-col gap-5">
                        <div className="flex gap-4 items-start">
                          <div className="@3xl:flex-row @3xl:gap-10 @3xl:items-center flex flex-1 flex-col gap-3 min-w-0">
                            <div className="@3xl:shrink-0 @3xl:w-52.5 flex gap-1.5 items-center min-w-0 w-full">
                              <Skeleton className="bg-input/50 dark:bg-input/30 h-10.25 rounded-full shrink-0 w-3"></Skeleton>
                              <div className="flex flex-1 flex-col h-11.5 justify-between min-w-0">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-19.25 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 max-w-36 w-full"></Skeleton>
                              </div>
                            </div>
                            <div className="@lg:flex @lg:gap-10 gap-x-5 gap-y-3 grid grid-cols-2 min-w-0">
                              <div className="flex flex-col h-11 justify-between max-w-full w-23">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                              <div className="flex flex-col h-11 justify-between max-w-full w-13.75">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                              <div className="flex flex-col h-11 justify-between max-w-full w-12">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                              <div className="flex flex-col h-11 justify-between max-w-full w-16">
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                                <Skeleton className="bg-input/50 dark:bg-input/30 h-4 w-full"></Skeleton>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            <Skeleton className="bg-input/50 dark:bg-input/30 size-6"></Skeleton>
                            <Skeleton className="bg-input/50 dark:bg-input/30 size-6"></Skeleton>
                          </div>
                        </div>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-4.5 max-w-50 rounded-full w-full"></Skeleton>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </Card>
          </div>
        </main>
      </div>
      <button className="-translate-y-1/2 cursor-pointer duration-200 ease-linear fixed flex focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring focus-visible:rounded-sm group/rail h-12 items-center outline-none pl-2 top-1/2 transition-[left] w-7 z-30" type="button" aria-label="Collapse sidebar" style={{left: "var(--sidebar-width)"}}>
        <span className="flex flex-col items-center">
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:bg-foreground/60 group-hover/rail:rotate-40 h-2 origin-bottom rounded-t-full transition-all w-0.5" aria-hidden="true"></span>
          <span className="bg-foreground/40 block duration-100 ease-linear group-hover/rail:-rotate-40 group-hover/rail:bg-foreground/60 h-2 origin-top rounded-b-full transition-all w-0.5" aria-hidden="true"></span>
        </span>
        <span className="-ml-2 -translate-x-0.5 absolute bg-foreground border border-border duration-200 ease-out font-medium group-hover/rail:opacity-100 group-hover/rail:translate-x-0 left-full opacity-0 pointer-events-none px-2 py-0.5 rounded-md shadow-black/5 shadow-xs text-[11px] text-background transition-all whitespace-nowrap">
          {"Collapse"}
        </span>
      </button>
    </div>
    </SidebarProvider>
  )
}
