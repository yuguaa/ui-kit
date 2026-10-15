import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
} from "@/registry-neui/bases/base/neui/stepper"
import { StepperTrigger } from "@/registry-neui/bases/radix/neui/stepper"
import {
  Avatar,
  AvatarFallback,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <main className="bg-muted/20 flex flex-col isolate lg:flex-row min-h-svh relative text-foreground w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute bottom-0 dark:opacity-45 h-[58svh] inset-x-0 min-h-[28rem] opacity-58">
          <div className="absolute h-full inset-0 w-full" style={{width: "100%", height: "100%", transform: "translateY(24%)"}}>
            <canvas className="block h-full w-full" aria-hidden="true" width="1280" height="448"></canvas>
          </div>
        </div>
      </div>
      <aside className="border-b flex lg:border-b-0 lg:min-h-svh lg:pl-7 lg:pr-5 lg:py-7 lg:w-[18rem] pb-4 pt-5 px-5 relative shrink-0 sm:pb-5 sm:pt-6 sm:px-8 w-full z-10">
        <div className="flex flex-col min-h-full w-full">
          <header className="flex gap-4 items-center justify-between min-h-8 relative shrink-0 z-10">
            <div className="gap-2 inline-flex items-center">
              <Item className="bg-primary p-1.5 size-7 text-primary-foreground" variant="default" size="default" aria-hidden="true">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="size-[0.95rem]" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <span className="font-medium text-[0.9375rem]">
                NeUI
              </span>
            </div>
          </header>
          <div className="lg:hidden mt-4">
            <Stepper className="flex flex-col gap-2.5" role="tablist" aria-orientation="horizontal" data-orientation="horizontal">
              <div className="flex gap-3 items-baseline justify-between">
                <p className="font-medium leading-4 min-w-0 text-[0.8125rem] text-foreground truncate">
                  Profile
                </p>
                <p className="leading-4 shrink-0 tabular-nums text-muted-foreground text-xs">
                  Step 1 of 6
                </p>
              </div>
              <StepperNav className="w-full" data-state="1" data-orientation="horizontal">
                <StepperItem data-state="active">
                  <StepperTrigger className="-my-2 py-2 shrink-0" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false" aria-label="Step 1: Profile">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="active">
                      <div className="absolute">
                        1
                      </div>
                    </StepperIndicator>
                  </StepperTrigger>
                  <StepperSeparator className="bg-muted-foreground/12 dark:bg-muted-foreground/18 dark:group-data-[state=active]/step:bg-muted-foreground/18 dark:group-data-[state=inactive]/step:bg-muted-foreground/18 group-data-[state=active]/step:bg-muted-foreground/12 group-data-[state=completed]/step:bg-success group-data-[state=inactive]/step:bg-muted-foreground/12 mx-1.5" data-state="active"></StepperSeparator>
                </StepperItem>
                <StepperItem data-state="inactive">
                  <StepperTrigger className="-my-2 py-2 shrink-0" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false" aria-label="Step 2: Role">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="inactive">
                      <div className="absolute">
                        2
                      </div>
                    </StepperIndicator>
                  </StepperTrigger>
                  <StepperSeparator className="bg-muted-foreground/12 dark:bg-muted-foreground/18 dark:group-data-[state=active]/step:bg-muted-foreground/18 dark:group-data-[state=inactive]/step:bg-muted-foreground/18 group-data-[state=active]/step:bg-muted-foreground/12 group-data-[state=completed]/step:bg-success group-data-[state=inactive]/step:bg-muted-foreground/12 mx-1.5" data-state="inactive"></StepperSeparator>
                </StepperItem>
                <StepperItem data-state="inactive">
                  <StepperTrigger className="-my-2 py-2 shrink-0" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false" aria-label="Step 3: Source">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="inactive">
                      <div className="absolute">
                        3
                      </div>
                    </StepperIndicator>
                  </StepperTrigger>
                  <StepperSeparator className="bg-muted-foreground/12 dark:bg-muted-foreground/18 dark:group-data-[state=active]/step:bg-muted-foreground/18 dark:group-data-[state=inactive]/step:bg-muted-foreground/18 group-data-[state=active]/step:bg-muted-foreground/12 group-data-[state=completed]/step:bg-success group-data-[state=inactive]/step:bg-muted-foreground/12 mx-1.5" data-state="inactive"></StepperSeparator>
                </StepperItem>
                <StepperItem data-state="inactive">
                  <StepperTrigger className="-my-2 py-2 shrink-0" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false" aria-label="Step 4: Workspace">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="inactive">
                      <div className="absolute">
                        4
                      </div>
                    </StepperIndicator>
                  </StepperTrigger>
                  <StepperSeparator className="bg-muted-foreground/12 dark:bg-muted-foreground/18 dark:group-data-[state=active]/step:bg-muted-foreground/18 dark:group-data-[state=inactive]/step:bg-muted-foreground/18 group-data-[state=active]/step:bg-muted-foreground/12 group-data-[state=completed]/step:bg-success group-data-[state=inactive]/step:bg-muted-foreground/12 mx-1.5" data-state="inactive"></StepperSeparator>
                </StepperItem>
                <StepperItem data-state="inactive">
                  <StepperTrigger className="-my-2 py-2 shrink-0" type="button" role="tab" id="stepper-tab-5" aria-selected="false" aria-controls="stepper-panel-5" tabIndex="-1" data-state="inactive" loading="false" aria-label="Step 5: Goals">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="inactive">
                      <div className="absolute">
                        5
                      </div>
                    </StepperIndicator>
                  </StepperTrigger>
                  <StepperSeparator className="bg-muted-foreground/12 dark:bg-muted-foreground/18 dark:group-data-[state=active]/step:bg-muted-foreground/18 dark:group-data-[state=inactive]/step:bg-muted-foreground/18 group-data-[state=active]/step:bg-muted-foreground/12 group-data-[state=completed]/step:bg-success group-data-[state=inactive]/step:bg-muted-foreground/12 mx-1.5" data-state="inactive"></StepperSeparator>
                </StepperItem>
                <StepperItem data-state="inactive">
                  <StepperTrigger className="-my-2 py-2 shrink-0" type="button" role="tab" id="stepper-tab-6" aria-selected="false" aria-controls="stepper-panel-6" tabIndex="-1" data-state="inactive" loading="false" aria-label="Step 6: Invite">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="inactive">
                      <div className="absolute">
                        6
                      </div>
                    </StepperIndicator>
                  </StepperTrigger>
                </StepperItem>
              </StepperNav>
            </Stepper>
          </div>
          <div className="flex-1 hidden items-center justify-center lg:flex py-16">
            <Stepper className="flex flex-col gap-0 items-start justify-center" role="tablist" aria-orientation="vertical" data-orientation="vertical">
              <StepperNav className="w-full" data-state="1" data-orientation="vertical">
                <StepperItem className="items-start relative" data-state="active">
                  <StepperTrigger className="items-start last:pb-0 pb-4 text-left w-full" type="button" role="tab" id="stepper-tab-1" aria-selected="true" aria-controls="stepper-panel-1" tabIndex="0" data-state="active" loading="false">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="active">
                      <div className="absolute">
                        1
                      </div>
                    </StepperIndicator>
                    <div className="flex-1 min-w-0 mt-0.5 text-left">
                      <StepperTitle className="!leading-4 !text-[0.8125rem]" data-state="active">
                        Profile
                      </StepperTitle>
                      <StepperDescription className="!leading-4 !text-xs max-w-none mt-0.5" data-state="active">
                        Basic profile details.
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                  <StepperSeparator className="!h-[calc(100%-1.75rem)] -order-1 -translate-x-1/2 absolute bg-muted-foreground/12 dark:bg-muted-foreground/18 dark:group-data-[state=active]/step:bg-muted-foreground/18 dark:group-data-[state=inactive]/step:bg-muted-foreground/18 group-data-[state=active]/step:bg-muted-foreground/12 group-data-[state=completed]/step:bg-success group-data-[state=inactive]/step:bg-muted-foreground/12 inset-y-0 left-2.5 m-0 top-6" data-state="active"></StepperSeparator>
                </StepperItem>
                <StepperItem className="items-start relative" data-state="inactive">
                  <StepperTrigger className="items-start last:pb-0 pb-4 text-left w-full" type="button" role="tab" id="stepper-tab-2" aria-selected="false" aria-controls="stepper-panel-2" tabIndex="-1" data-state="inactive" loading="false">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="inactive">
                      <div className="absolute">
                        2
                      </div>
                    </StepperIndicator>
                    <div className="flex-1 min-w-0 mt-0.5 text-left">
                      <StepperTitle className="!leading-4 !text-[0.8125rem]" data-state="inactive">
                        Role
                      </StepperTitle>
                      <StepperDescription className="!leading-4 !text-xs max-w-none mt-0.5" data-state="inactive">
                        Tune starter views.
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                  <StepperSeparator className="!h-[calc(100%-1.75rem)] -order-1 -translate-x-1/2 absolute bg-muted-foreground/12 dark:bg-muted-foreground/18 dark:group-data-[state=active]/step:bg-muted-foreground/18 dark:group-data-[state=inactive]/step:bg-muted-foreground/18 group-data-[state=active]/step:bg-muted-foreground/12 group-data-[state=completed]/step:bg-success group-data-[state=inactive]/step:bg-muted-foreground/12 inset-y-0 left-2.5 m-0 top-6" data-state="inactive"></StepperSeparator>
                </StepperItem>
                <StepperItem className="items-start relative" data-state="inactive">
                  <StepperTrigger className="items-start last:pb-0 pb-4 text-left w-full" type="button" role="tab" id="stepper-tab-3" aria-selected="false" aria-controls="stepper-panel-3" tabIndex="-1" data-state="inactive" loading="false">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="inactive">
                      <div className="absolute">
                        3
                      </div>
                    </StepperIndicator>
                    <div className="flex-1 min-w-0 mt-0.5 text-left">
                      <StepperTitle className="!leading-4 !text-[0.8125rem]" data-state="inactive">
                        Source
                      </StepperTitle>
                      <StepperDescription className="!leading-4 !text-xs max-w-none mt-0.5" data-state="inactive">
                        Optional discovery signal.
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                  <StepperSeparator className="!h-[calc(100%-1.75rem)] -order-1 -translate-x-1/2 absolute bg-muted-foreground/12 dark:bg-muted-foreground/18 dark:group-data-[state=active]/step:bg-muted-foreground/18 dark:group-data-[state=inactive]/step:bg-muted-foreground/18 group-data-[state=active]/step:bg-muted-foreground/12 group-data-[state=completed]/step:bg-success group-data-[state=inactive]/step:bg-muted-foreground/12 inset-y-0 left-2.5 m-0 top-6" data-state="inactive"></StepperSeparator>
                </StepperItem>
                <StepperItem className="items-start relative" data-state="inactive">
                  <StepperTrigger className="items-start last:pb-0 pb-4 text-left w-full" type="button" role="tab" id="stepper-tab-4" aria-selected="false" aria-controls="stepper-panel-4" tabIndex="-1" data-state="inactive" loading="false">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="inactive">
                      <div className="absolute">
                        4
                      </div>
                    </StepperIndicator>
                    <div className="flex-1 min-w-0 mt-0.5 text-left">
                      <StepperTitle className="!leading-4 !text-[0.8125rem]" data-state="inactive">
                        Workspace
                      </StepperTitle>
                      <StepperDescription className="!leading-4 !text-xs max-w-none mt-0.5" data-state="inactive">
                        Name the workspace.
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                  <StepperSeparator className="!h-[calc(100%-1.75rem)] -order-1 -translate-x-1/2 absolute bg-muted-foreground/12 dark:bg-muted-foreground/18 dark:group-data-[state=active]/step:bg-muted-foreground/18 dark:group-data-[state=inactive]/step:bg-muted-foreground/18 group-data-[state=active]/step:bg-muted-foreground/12 group-data-[state=completed]/step:bg-success group-data-[state=inactive]/step:bg-muted-foreground/12 inset-y-0 left-2.5 m-0 top-6" data-state="inactive"></StepperSeparator>
                </StepperItem>
                <StepperItem className="items-start relative" data-state="inactive">
                  <StepperTrigger className="items-start last:pb-0 pb-4 text-left w-full" type="button" role="tab" id="stepper-tab-5" aria-selected="false" aria-controls="stepper-panel-5" tabIndex="-1" data-state="inactive" loading="false">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="inactive">
                      <div className="absolute">
                        5
                      </div>
                    </StepperIndicator>
                    <div className="flex-1 min-w-0 mt-0.5 text-left">
                      <StepperTitle className="!leading-4 !text-[0.8125rem]" data-state="inactive">
                        Goals
                      </StepperTitle>
                      <StepperDescription className="!leading-4 !text-xs max-w-none mt-0.5" data-state="inactive">
                        Pick first workflows.
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                  <StepperSeparator className="!h-[calc(100%-1.75rem)] -order-1 -translate-x-1/2 absolute bg-muted-foreground/12 dark:bg-muted-foreground/18 dark:group-data-[state=active]/step:bg-muted-foreground/18 dark:group-data-[state=inactive]/step:bg-muted-foreground/18 group-data-[state=active]/step:bg-muted-foreground/12 group-data-[state=completed]/step:bg-success group-data-[state=inactive]/step:bg-muted-foreground/12 inset-y-0 left-2.5 m-0 top-6" data-state="inactive"></StepperSeparator>
                </StepperItem>
                <StepperItem className="items-start relative" data-state="inactive">
                  <StepperTrigger className="items-start last:pb-0 pb-4 text-left w-full" type="button" role="tab" id="stepper-tab-6" aria-selected="false" aria-controls="stepper-panel-6" tabIndex="-1" data-state="inactive" loading="false">
                    <StepperIndicator className="bg-foreground dark:bg-foreground dark:data-[state=active]:bg-foreground dark:data-[state=active]:text-background dark:data-[state=inactive]:bg-muted-foreground/14 dark:data-[state=inactive]:ring-muted-foreground/12 dark:data-[state=inactive]:text-muted-foreground dark:ring-border/70 dark:text-background data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=completed]:bg-success data-[state=completed]:text-white data-[state=inactive]:bg-muted-foreground/8 data-[state=inactive]:ring-muted-foreground/12 data-[state=inactive]:text-muted-foreground ring-1 ring-border/60 size-5 text-[0.6875rem] text-background" data-state="inactive">
                      <div className="absolute">
                        6
                      </div>
                    </StepperIndicator>
                    <div className="flex-1 min-w-0 mt-0.5 text-left">
                      <StepperTitle className="!leading-4 !text-[0.8125rem]" data-state="inactive">
                        Invite
                      </StepperTitle>
                      <StepperDescription className="!leading-4 !text-xs max-w-none mt-0.5" data-state="inactive">
                        Add teammates.
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                </StepperItem>
              </StepperNav>
            </Stepper>
          </div>
          <div className="h-8 hidden lg:block shrink-0" aria-hidden="true"></div>
        </div>
      </aside>
      <section className="flex flex-1 lg:pl-0 lg:pr-5 lg:py-6 min-w-0 p-3 relative sm:p-6 z-10">
        <Frame className="[--frame-px:--spacing(1.25)] [--frame-py:--spacing(1.25)] bg-muted/60 dark:bg-muted/10 flex-1 lg:min-h-[calc(100svh-3rem)] overflow-hidden w-full" spacing="xs">
          <FramePanel className="border-border/40 flex flex-1 flex-col lg:px-14 lg:py-20 md:py-16 px-5 py-8 sm:px-10 sm:py-14 xl:py-24">
            <div className="flex flex-1">
              <form className="flex flex-col lg:min-h-[36rem] max-w-md mx-auto w-full" style={{opacity: "1", filter: "blur(0px)", transform: "none"}}>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-1.5 max-w-md" aria-live="polite">
                    <h1 className="font-semibold leading-7 sm:text-[1.375rem] text-balance text-foreground text-xl">
                      Set up your profile
                    </h1>
                    <p className="leading-5 text-muted-foreground text-pretty text-sm">
                      Add the details teammates will see across the workspace.
                    </p>
                  </div>
                  <FieldSet>
                    <FieldLegend className="sr-only" variant="legend">
                      Profile details
                    </FieldLegend>
                    <FieldGroup className="gap-4">
                      <Field role="group" data-orientation="vertical">
                        <div className="flex gap-3 items-center">
                          <Avatar className="border size-12" size="default">
                            <AvatarFallback className="bg-muted text-muted-foreground">
                              <svg className="lucide lucide-circle-user opacity-60 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserCircle" tabler="IconUserCircle" hugeicons="UserCircleIcon" phosphor="UserCircleIcon" remixicon="RiUserLine" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <circle cx="12" cy="10" r="3"></circle>
                                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                              </svg>
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 space-y-1.5">
                            <div className="flex flex-wrap gap-2 items-center">
                              <div className="inline-flex relative">
                                <Button type="button" tabIndex="0" aria-haspopup="dialog">
                                  Upload photo
                                </Button>
                                <input className="hidden" id="onboarding-2-profile-photo" accept="image/*" aria-hidden="true" tabIndex="-1" type="file" />
                              </div>
                            </div>
                            <p className="leading-4 text-muted-foreground text-xs">
                              PNG or JPG, at least 400 x 400 px, up to 10 MB.
                            </p>
                          </div>
                        </div>
                      </Field>
                      <FieldGroup className="gap-4">
                        <Field className="gap-2" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-2-name">
                            Full name
                            <span className="text-destructive">
                              *
                            </span>
                          </FieldLabel>
                          <Input id="onboarding-2-name" autoComplete="name" value="Sam Rivera"></Input>
                        </Field>
                        <Field className="gap-2" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-2-title">
                            Job title
                          </FieldLabel>
                          <Input id="onboarding-2-title" autoComplete="organization-title" value="Product Lead"></Input>
                        </Field>
                        <Field className="gap-2" role="group" data-orientation="vertical">
                          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="onboarding-2-timezone">
                            Timezone
                          </FieldLabel>
                          <InputGroup className="cn-combobox-input" role="group">
                            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="onboarding-2-timezone" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" placeholder="Select a timezone" type="text" value="" />
                            <InputGroupAddon role="group" data-align="inline-end">
                              <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-combobox-trigger cn-input-group-button cn-input-group-button-size-icon-xs data-pressed:bg-transparent disabled:opacity-50 disabled:pointer-events-none flex group-has-data-[slot=combobox-clear]/input-group:hidden group/button items-center justify-center outline-none select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" data-placeholder="" tabIndex="0" aria-expanded="false" aria-haspopup="listbox" data-size="icon-xs">
                                <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                                  <path d="m6 9 6 6 6-6"></path>
                                </svg>
                              </button>
                            </InputGroupAddon>
                          </InputGroup>
                          <input id="base-ui-_r_4_-hidden-input" tabIndex="-1" aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        </Field>
                      </FieldGroup>
                      <Field className="gap-2.5" role="group" data-orientation="horizontal">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_9_" aria-checked="true" aria-labelledby="onboarding-2-marketing-label">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input id="onboarding-2-marketing" tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                        <FieldLabel className="cn-label font-normal group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none text-muted-foreground" htmlFor="onboarding-2-marketing" id="onboarding-2-marketing-label">
                          Send me product updates and workspace tips.
                        </FieldLabel>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                </div>
                <div className="flex flex-col gap-2 mt-auto pt-8">
                  <Button className="w-full" type="submit" tabIndex="0">
                    Continue
                  </Button>
                </div>
              </form>
            </div>
          </FramePanel>
        </Frame>
      </section>
    </main>
  )
}
