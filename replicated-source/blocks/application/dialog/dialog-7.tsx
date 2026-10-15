import {
  Avatar,
  AvatarFallback,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Support hub dialog"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Button type="button" tabIndex="0" extracted="1">
          {"Open support hub"}
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="**:data-[slot=dialog-close]:right-3 **:data-[slot=dialog-close]:top-3 flex flex-col gap-0 max-h-[min(88vh,44rem)] overflow-hidden p-0 sm:max-w-2xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_2_" aria-describedby="base-ui-_r_3_" style={{"--nested-dialogs": "0"}}>
      <DialogHeader className="gap-1 pb-3 pt-4 px-5 text-left">
        <DialogTitle id="base-ui-_r_2_">
          {"Need a hand with setup?"}
        </DialogTitle>
        <DialogDescription id="base-ui-_r_3_">
          {"Choose the fastest path to the right team."}
        </DialogDescription>
      </DialogHeader>
      <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
      <div className="flex-1 min-h-0 overflow-y-auto p-5">
        <div className="flex flex-col gap-5">
          <Card className="border-0 p-0 ring-0 shadow-none" size="default">
            <CardContent className="p-0">
              <ItemGroup className="gap-0" role="list">
                <div className="border-b border-border border-dashed first:pt-0 flex gap-3 items-center last:border-b-0 last:pb-0 py-3">
                  <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="lucide lucide-book-open size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </Item>
                  <ItemContent className="gap-0.5 min-w-0">
                    <ItemTitle className="min-w-0 w-full">
                      <span className="truncate">
                        {"Setup guides"}
                      </span>
                    </ItemTitle>
                    <ItemDescription className="text-sm">
                      {"Admin and onboarding references."}
                    </ItemDescription>
                  </ItemContent>
                  <Button type="button" tabIndex="0">
                    {"Open guides"}
                  </Button>
                </div>
                <div className="border-b border-border border-dashed first:pt-0 flex gap-3 items-center last:border-b-0 last:pb-0 py-3">
                  <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="lucide lucide-video size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="VideoIcon" tabler="IconVideo" hugeicons="Video02Icon" phosphor="VideoCameraIcon" remixicon="RiVideoOnLine" aria-hidden="true">
                      <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                      <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                    </svg>
                  </Item>
                  <ItemContent className="gap-0.5 min-w-0">
                    <ItemTitle className="min-w-0 w-full">
                      <span className="truncate">
                        {"Short walkthroughs"}
                      </span>
                    </ItemTitle>
                    <ItemDescription className="text-sm">
                      {"Quick lessons for rollout."}
                    </ItemDescription>
                  </ItemContent>
                  <Button type="button" tabIndex="0">
                    {"Watch videos"}
                  </Button>
                </div>
                <div className="border-b border-border border-dashed first:pt-0 flex gap-3 items-center last:border-b-0 last:pb-0 py-3">
                  <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                    <svg className="lucide lucide-sparkles size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                  </Item>
                  <ItemContent className="gap-0.5 min-w-0">
                    <ItemTitle className="min-w-0 w-full">
                      <span className="truncate">
                        {"Product feedback"}
                      </span>
                    </ItemTitle>
                    <ItemDescription className="text-sm">
                      {"Share missing patterns."}
                    </ItemDescription>
                  </ItemContent>
                  <Button type="button" tabIndex="0">
                    {"Send feedback"}
                  </Button>
                </div>
              </ItemGroup>
            </CardContent>
          </Card>
          <section className="flex flex-col gap-2.5">
            <p className="font-medium text-muted-foreground text-xs">
              {"Escalation paths"}
            </p>
            <div className="gap-5 grid items-stretch md:grid-cols-2">
              <Card className="gap-0 h-full p-0" size="default">
                <CardHeader className="gap-3 p-3 pb-0">
                  <div className="flex gap-2 items-center min-w-0">
                    <Avatar className="size-10" size="default">
                      <AvatarFallback>
                        {"MC"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <div className="flex gap-2 items-center">
                        <CardTitle>
                          {"Advisor office hours"}
                        </CardTitle>
                        <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-4.5 leading-none min-w-4.5 outline-none px-1 py-0.25 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-[0.625rem] text-info-foreground transition-shadow">
                          {"Office hours"}
                        </Badge>
                      </div>
                      <CardDescription>
                        {"Guided setup review."}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3">
                  <p className="text-muted-foreground text-sm">
                    {"Bring setup questions for a faster next step."}
                  </p>
                </CardContent>
                <CardFooter className="border-t mt-auto p-3">
                  <Button className="w-full" type="button" tabIndex="0">
                    {"Reserve a session"}
                  </Button>
                </CardFooter>
              </Card>
              <Card className="gap-2 h-full p-0" size="default">
                <CardHeader className="p-3 pb-0">
                  <div className="flex gap-2 items-center min-w-0">
                    <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                      <svg className="lucide lucide-mail size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MailIcon" tabler="IconMail" hugeicons="Mail01Icon" phosphor="EnvelopeSimpleIcon" remixicon="RiMailLine" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </Item>
                    <div className="flex flex-col">
                      <CardTitle>
                        {"Direct support desk"}
                      </CardTitle>
                      <CardDescription>
                        {"Account and product help."}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3">
                  <p className="text-muted-foreground text-sm">
                    {"Replies usually land within one business day."}
                  </p>
                </CardContent>
                <CardFooter className="border-t mt-auto p-3">
                  <Button className="w-full" type="button" tabIndex="0">
                    {"Email support"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </div>
      </div>
      <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost cn-dialog-close disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span className="sr-only">
          {"Close"}
        </span>
      </DialogClose>
    </DialogContent>
    </Dialog>
  </>
  )
}
