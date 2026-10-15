import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="flex flex-col gap-8 max-w-3xl w-full">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-0.5 max-w-lg">
            <h1 className="font-semibold text-xl">
              Outreach Inboxes
            </h1>
            <p className="text-muted-foreground text-sm">
              Keep sending accounts, reply routing, and booking calendars aligned.
            </p>
          </div>
          <Button className="self-start" type="button" tabIndex="0" extracted="1">
            <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to profile
          </Button>
        </div>
        <section className="flex flex-col gap-3 mt-1">
          <div className="flex flex-col gap-px">
            <h2 className="font-semibold text-base">
              Connected Accounts
            </h2>
            <p className="text-muted-foreground text-sm">
              Primary mailbox used for sends and calendar booking.
            </p>
          </div>
          <Card className="gap-0 p-0" size="default">
            <CardContent className="p-0">
              <div className="flex flex-col">
                <Item className="px-4" variant="default" size="sm">
                  <ItemMedia variant="icon">
                    <span className="flex items-center justify-center shrink-0 size-10">
                      <svg className="size-5" aria-hidden="true" viewBox="0 0 512 512" fill="none">
                        <g clipPath="url(#clip0_5072_3766)">
                          <path d="M390.736 121.264H121.264V390.736H390.736V121.264Z" fill="white"></path>
                          <path d="M390.736 512L512 390.736L451.368 380.392L390.736 390.736L379.67 446.196L390.736 512Z" fill="#EA4335"></path>
                          <path d="M0 390.736V471.578C0 493.912 18.088 512 40.42 512H121.264L133.714 451.368L121.264 390.736L55.198 380.392L0 390.736Z" fill="#188038"></path>
                          <path d="M512 121.264V40.42C512 18.088 493.912 0 471.58 0H390.736C383.36 30.072 379.671 52.2027 379.67 66.392C379.67 80.58 383.359 98.8707 390.736 121.264C417.556 128.944 437.767 132.784 451.368 132.784C464.969 132.784 485.18 128.945 512 121.264Z" fill="#1967D2"></path>
                          <path d="M512 121.264H390.736V390.736H512V121.264Z" fill="#FBBC04"></path>
                          <path d="M390.736 390.736H121.264V512H390.736V390.736Z" fill="#34A853"></path>
                          <path d="M390.736 0H40.422C18.088 0 0 18.088 0 40.42V390.736H121.264V121.264H390.736V0Z" fill="#4285F4"></path>
                          <path d="M176.54 330.308C166.468 323.504 159.494 313.568 155.688 300.428L179.066 290.796C181.186 298.88 184.891 305.145 190.182 309.592C195.436 314.038 201.836 316.228 209.314 316.228C216.959 316.228 223.527 313.903 229.018 309.254C234.51 304.606 237.272 298.678 237.272 291.504C237.272 284.16 234.375 278.164 228.582 273.516C222.788 268.868 215.512 266.544 206.822 266.544H193.314V243.404H205.44C212.917 243.404 219.216 241.382 224.336 237.338C229.456 233.298 232.016 227.772 232.016 220.732C232.016 214.468 229.726 209.482 225.146 205.744C220.566 202.004 214.77 200.118 207.73 200.118C200.858 200.118 195.402 201.938 191.36 205.608C187.319 209.289 184.282 213.937 182.534 219.116L159.394 209.482C162.458 200.792 168.084 193.112 176.336 186.476C184.588 179.84 195.132 176.506 207.932 176.506C217.398 176.506 225.92 178.326 233.466 181.996C241.01 185.668 246.938 190.754 251.216 197.222C255.496 203.722 257.616 210.998 257.616 219.082C257.616 227.334 255.63 234.308 251.656 240.034C247.682 245.76 242.796 250.138 237.002 253.204V254.584C244.483 257.669 250.982 262.735 255.798 269.238C260.682 275.806 263.142 283.654 263.142 292.818C263.142 301.978 260.816 310.164 256.168 317.338C251.52 324.514 245.088 330.172 236.934 334.282C228.75 338.392 219.554 340.482 209.348 340.482C197.524 340.514 186.612 337.112 176.54 330.308ZM320.132 214.298L294.466 232.858L281.632 213.39L327.678 180.176H345.328V336.842H320.132V214.298Z" fill="#4285F4"></path>
                        </g>
                        <defs>
                          <clippath id="clip0_5072_3766">
                            <rect width="512" height="512" fill="white"></rect>
                          </clippath>
                        </defs>
                      </svg>
                    </span>
                  </ItemMedia>
                  <ItemContent className="min-w-0">
                    <ItemTitle className="flex-wrap gap-2 min-w-0 w-full">
                      <span className="min-w-0 truncate">
                        alex@northstarstudio.com
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                        Primary
                      </Badge>
                    </ItemTitle>
                    <ItemDescription className="truncate">
                      Primary sender mailbox and booking calendar
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="self-start shrink-0">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for alex@northstarstudio.com" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <Item className="px-4" variant="default" size="sm">
                  <ItemMedia variant="icon">
                    <span className="flex items-center justify-center shrink-0 size-10">
                      <svg className="size-5" aria-hidden="true" viewBox="0 0 622 512" fill="none">
                        <g clipPath="url(#googlemeet-clip0)">
                          <path d="M351.419 255.568L411.978 324.79L493.418 376.827L507.584 256.005L493.418 137.908L410.418 183.621L351.419 255.568Z" fill="#00832D"></path>
                          <path d="M0.00283051 365.583V468.541C0.00283051 492.049 19.0851 511.136 42.5983 511.136H145.556L166.876 433.344L145.556 365.583L74.9198 344.263L0.00283051 365.583Z" fill="#0066DA"></path>
                          <path d="M145.556 -7.62939e-06L0.00283051 145.554L74.9247 166.822L145.556 145.554L166.488 78.7145L145.556 -7.62939e-06Z" fill="#E94235"></path>
                          <path d="M0.00526047 365.629H145.556V145.551H0.00526047V365.629Z" fill="#2684FC"></path>
                          <path d="M586.398 61.6293L493.416 137.91V376.827L586.782 453.404C600.758 464.352 621.204 454.374 621.204 436.607V78.0861C621.204 60.1224 600.271 50.193 586.396 61.6317" fill="#00AC47"></path>
                          <path d="M351.419 255.568V365.583H145.556V511.136H450.825C474.338 511.136 493.418 492.049 493.418 468.541V376.827L351.419 255.568Z" fill="#00AC47"></path>
                          <path d="M450.825 -7.62939e-06H145.556V145.554H351.419V255.568L493.42 137.905V42.5979C493.42 19.0847 474.338 0.00241891 450.825 0.00241891" fill="#FFBA00"></path>
                        </g>
                        <defs>
                          <clippath id="googlemeet-clip0">
                            <rect width="621.2" height="512" fill="white"></rect>
                          </clippath>
                        </defs>
                      </svg>
                    </span>
                  </ItemMedia>
                  <ItemContent className="min-w-0">
                    <ItemTitle className="flex-wrap gap-2 min-w-0 w-full">
                      <span className="min-w-0 truncate">
                        meetings@northstarstudio.com
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                        Synced
                      </Badge>
                    </ItemTitle>
                    <ItemDescription className="truncate">
                      Google Meet links for scheduled demos
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="self-start shrink-0">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for meetings@northstarstudio.com" aria-haspopup="menu" id="base-ui-_r_8_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
              </div>
            </CardContent>
            <CardFooter className="border-t px-4 py-3.5 w-full">
              <div className="gap-2 grid grid-cols-2 w-full">
                <Button className="w-full" type="button" tabIndex="0">
                  <span className="flex items-center justify-center shrink-0 size-4.5" aria-hidden="true">
                    <svg className="size-4.5" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                      <path fill="#625DF5" d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"></path>
                    </svg>
                  </span>
                  <span className="truncate">
                    Connect Loom workspace
                  </span>
                </Button>
                <Button className="w-full" type="button" tabIndex="0">
                  <span className="flex items-center justify-center shrink-0 size-4.5" aria-hidden="true">
                    <svg className="size-4.5" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                      <g clipRule="evenodd" fillRule="evenodd">
                        <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                        <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                        <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                        <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                      </g>
                    </svg>
                  </span>
                  <span className="truncate">
                    Connect Slack handoff
                  </span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </section>
        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-px">
            <h2 className="font-semibold text-base">
              Reply Routing
            </h2>
            <p className="text-muted-foreground text-sm">
              Where replies and bounce notices should land.
            </p>
          </div>
          <Card className="gap-0 p-0" size="default">
            <CardContent className="p-0">
              <div className="flex flex-col">
                <Item className="px-4" variant="default" size="sm">
                  <ItemMedia variant="icon">
                    <Avatar className="size-10" size="default">
                      <AvatarImage alt="Ryan at NeUI" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="min-w-0">
                    <ItemTitle className="flex-wrap gap-2 min-w-0 w-full">
                      <span className="min-w-0 truncate">
                        ryan@neui.io
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                        Verified
                      </Badge>
                    </ItemTitle>
                    <ItemDescription className="truncate">
                      Primary reply owner for outbound sequences
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="self-start shrink-0">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for ryan@neui.io" aria-haspopup="menu" id="base-ui-_r_d_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <Item className="px-4" variant="default" size="sm">
                  <ItemMedia variant="icon">
                    <Avatar className="size-10" size="default">
                      <AvatarFallback className="bg-amber-100 dark:bg-amber-950 dark:text-amber-200 font-medium text-amber-700 text-xs tracking-[0.08em] uppercase">
                        AC
                      </AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="min-w-0">
                    <ItemTitle className="flex-wrap gap-2 min-w-0 w-full">
                      <span className="min-w-0 truncate">
                        adam@neui.io
                      </span>
                    </ItemTitle>
                    <ItemDescription className="truncate">
                      Compliance copy for outbound mail
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="self-start shrink-0">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for adam@neui.io" aria-haspopup="menu" id="base-ui-_r_i_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <Item className="px-4" variant="default" size="sm">
                  <ItemMedia variant="icon">
                    <Avatar className="size-10" size="default">
                      <AvatarFallback className="bg-sky-100 dark:bg-sky-950 dark:text-sky-200 font-medium text-sky-700 text-xs tracking-[0.08em] uppercase">
                        MT
                      </AvatarFallback>
                    </Avatar>
                  </ItemMedia>
                  <ItemContent className="min-w-0">
                    <ItemTitle className="flex-wrap gap-2 min-w-0 w-full">
                      <span className="min-w-0 truncate">
                        mason@neui.io
                      </span>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                        Shared
                      </Badge>
                    </ItemTitle>
                    <ItemDescription className="truncate">
                      Shared inbox alias for delegated handoff
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions className="self-start shrink-0">
                    <DropdownMenu>
                    <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Open actions for mason@neui.io" aria-haspopup="menu" id="base-ui-_r_n_" aria-expanded="false">
                      <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </DropdownMenuTrigger>
                    </DropdownMenu>
                  </ItemActions>
                </Item>
              </div>
            </CardContent>
          </Card>
        </section>
        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-px">
            <h2 className="font-semibold text-base">
              Sender Signature
            </h2>
            <p className="text-muted-foreground text-sm">
              Shared footer content for outbound mail.
            </p>
          </div>
          <Card className="gap-0 p-0" size="default">
            <CardContent className="p-0">
              <div className="flex flex-col">
                <FieldGroup>
                  <Field className="gap-4 px-4 py-3.5" role="group" data-orientation="responsive">
                    <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="workspace-signature" id="workspace-signature-label">
                          Attach workspace signature
                        </FieldLabel>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                          Recommended
                        </Badge>
                      </div>
                      <FieldDescription>
                        Add the shared sender details and booking link to outbound mail.
                      </FieldDescription>
                    </div>
                    <FieldContent className="@md/field-group:w-78 min-w-0">
                      <div className="@md/field-group:justify-end flex justify-start w-full">
                        <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_p_" aria-checked="true" size="default" aria-label="Attach workspace signature" aria-labelledby="workspace-signature-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="workspace-signature" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </FieldContent>
                  </Field>
                </FieldGroup>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <FieldGroup>
                  <Field className="gap-4 px-4 py-3.5" role="group" data-orientation="responsive">
                    <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="booking-link" id="booking-link-label">
                          Include booking link
                        </FieldLabel>
                      </div>
                      <FieldDescription>
                        Pull the active scheduling page into first-touch emails.
                      </FieldDescription>
                    </div>
                    <FieldContent className="@md/field-group:w-78 min-w-0">
                      <div className="@md/field-group:justify-end flex justify-start w-full">
                        <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_s_" aria-checked="true" size="default" aria-label="Include booking link" aria-labelledby="booking-link-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                        </Switch>
                        <input id="booking-link" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </FieldContent>
                  </Field>
                </FieldGroup>
                <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <FieldGroup>
                  <Field className="gap-4 px-4 py-3.5" role="group" data-orientation="responsive">
                    <div className="@md/field-group:max-w-sm flex flex-1 flex-col gap-0.5 min-w-0">
                      <div className="flex flex-wrap gap-2 items-center">
                        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="support-footer" id="support-footer-label">
                          Show support footer
                        </FieldLabel>
                      </div>
                      <FieldDescription>
                        Add the shared phone line and help desk email in follow-ups.
                      </FieldDescription>
                    </div>
                    <FieldContent className="@md/field-group:w-78 min-w-0">
                      <div className="@md/field-group:justify-end flex justify-start w-full">
                        <Switch unchecked="" role="switch" tabIndex="0" id="base-ui-_r_v_" aria-checked="false" size="default" aria-label="Show support footer" aria-labelledby="support-footer-label">
                          <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-unchecked=""></span>
                        </Switch>
                        <input id="support-footer" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </FieldContent>
                  </Field>
                </FieldGroup>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
