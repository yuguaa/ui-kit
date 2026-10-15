import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="max-w-2xl space-y-5 w-full">
        <Frame>
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="font-semibold text-sm">
              AI features
            </div>
          </header>
          <FramePanel className="p-0!">
            <div>
              <Item className="px-3.5" variant="default" size="default">
                <ItemMedia variant="icon">
                  <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="lucide lucide-bot" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                      <path d="M12 8V4H8"></path>
                      <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                      <path d="M2 14h2"></path>
                      <path d="M20 14h2"></path>
                      <path d="M15 13v2"></path>
                      <path d="M9 13v2"></path>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2">
                    Enable AI semantic search
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-primary transition-shadow">
                      Smart
                    </Badge>
                  </ItemTitle>
                  <ItemDescription>
                    Find content by meaning, not exact wording.
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_0_" aria-checked="true" size="default" aria-label="Enable AI semantic search">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_1_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </ItemActions>
              </Item>
            </div>
            <div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <Item className="px-3.5" variant="default" size="default">
                <ItemMedia variant="icon">
                  <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2">
                    Enable AI insight
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                      Beta
                    </Badge>
                  </ItemTitle>
                  <ItemDescription>
                    Surface patterns and highlights from your workspace.
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_3_" aria-checked="true" size="default" aria-label="Enable AI insight">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_4_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </ItemActions>
              </Item>
            </div>
          </FramePanel>
        </Frame>
        <Frame>
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="font-semibold text-sm">
              Publishing
            </div>
          </header>
          <FramePanel className="p-0!">
            <div>
              <Item className="px-3.5" variant="default" size="default">
                <ItemMedia variant="icon">
                  <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="lucide lucide-globe" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GlobeIcon" tabler="IconWorld" hugeicons="Globe02Icon" phosphor="GlobeIcon" remixicon="RiGlobalLine" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2">
                    Subdomain
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-focus/10 border border-focus/15 dark:bg-focus/15 dark:border-focus/25 dark:text-focus disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-focus-foreground transition-shadow">
                      Fallback
                    </Badge>
                  </ItemTitle>
                  <ItemDescription>
                    Short hostname visitors use before your custom domain.
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <Button type="button" tabIndex="0" extracted="1">
                    Edit subdomain
                  </Button>
                </ItemActions>
              </Item>
            </div>
            <div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <Item className="px-3.5" variant="default" size="default">
                <ItemMedia variant="icon">
                  <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2">
                    Custom domain
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-success-foreground transition-shadow">
                      HTTPS
                    </Badge>
                  </ItemTitle>
                  <ItemDescription>
                    Bring your brand URL and serve it over HTTPS.
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <Button type="button" tabIndex="0">
                    Connect domain
                  </Button>
                </ItemActions>
              </Item>
            </div>
            <div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <Item className="px-3.5" variant="default" size="default">
                <ItemMedia variant="icon">
                  <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2">
                    Default content
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-warning-foreground transition-shadow">
                      Homepage
                    </Badge>
                  </ItemTitle>
                  <ItemDescription>
                    What new visitors see when they land on your site.
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <Button type="button" tabIndex="0">
                    Change default
                  </Button>
                </ItemActions>
              </Item>
            </div>
          </FramePanel>
        </Frame>
        <Frame>
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="font-semibold text-sm">
              Collaboration
            </div>
          </header>
          <FramePanel className="p-0!">
            <div>
              <Item className="px-3.5" variant="default" size="default">
                <ItemMedia variant="icon">
                  <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2">
                    Workspace team
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-focus/10 border border-focus/15 dark:bg-focus/15 dark:border-focus/25 dark:text-focus disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-focus-foreground transition-shadow">
                      12 members
                    </Badge>
                  </ItemTitle>
                  <div className="mt-1">
                    <AvatarGroup className="-space-x-1.5" aria-label="Workspace members">
                      <Avatar className="border size-6" size="sm">
                        <AvatarImage alt="Nick Johnson" src="https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="border size-6" size="sm">
                        <AvatarImage alt="Alex Johnson" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="border size-6" size="sm">
                        <AvatarImage alt="Sarah Chen" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <AvatarGroupCount className="border leading-none size-6 text-[10px]">
                        <Popover>
                        <PopoverTrigger className="flex focus-visible:ring-2 focus-visible:ring-ring/50 hover:text-foreground items-center justify-center outline-none rounded-full size-full tabular-nums" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_7_" aria-haspopup="dialog" aria-expanded="false" aria-label="9 more: Maya Patel, Liam Carter, Priya Nair, Diego Alvarez, Emma Wilson, Kenji Sato, Olivia Brown, Omar Haddad, Grace Kim">
                          +9
                        </PopoverTrigger>
                        </Popover>
                      </AvatarGroupCount>
                    </AvatarGroup>
                  </div>
                </ItemContent>
                <ItemActions className="gap-2">
                  <Button type="button" tabIndex="0">
                    Manage members
                  </Button>
                </ItemActions>
              </Item>
            </div>
          </FramePanel>
        </Frame>
        <Frame>
          <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
            <div className="font-semibold text-sm">
              Notifications
            </div>
          </header>
          <FramePanel className="p-0!">
            <div>
              <Item className="px-3.5" variant="default" size="default">
                <ItemMedia variant="icon">
                  <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="lucide lucide-mail" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2">
                    Email digest
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent border border-border dark:bg-input/32 disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] transition-shadow">
                      Weekly
                    </Badge>
                  </ItemTitle>
                  <ItemDescription>
                    Weekly summary of activity and mentions in this workspace.
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_8_" aria-checked="true" size="default" aria-label="Email digest">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_9_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </ItemActions>
              </Item>
            </div>
            <div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <Item className="px-3.5" variant="default" size="default">
                <ItemMedia variant="icon">
                  <Item className="[&_svg]:opacity-50 [&_svg]:size-4.5 bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="lucide lucide-bell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                      <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                      <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                    </svg>
                  </Item>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="gap-2">
                    In-app alerts
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                      Instant
                    </Badge>
                  </ItemTitle>
                  <ItemDescription>
                    Show real-time notifications while you are working here.
                  </ItemDescription>
                </ItemContent>
                <ItemActions className="gap-2">
                  <Switch checked="" role="switch" tabIndex="0" id="base-ui-_r_b_" aria-checked="true" size="default" aria-label="In-app alerts">
                    <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
                  </Switch>
                  <input id="base-ui-_r_c_" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </ItemActions>
              </Item>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}
