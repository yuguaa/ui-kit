import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import {
  Kbd,
  KbdGroup,
} from "@/registry/bases/base/ui/kbd"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Keyboard shortcuts sheet
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          Open keyboard shortcuts
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden right-4 rounded-xl w-[min(28rem,calc(100vw-2rem))]" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <SheetHeader className="gap-3 pb-3 shrink-0">
        <div className="flex gap-3 items-start justify-between">
          <div className="min-w-0">
            <SheetTitle className="truncate" id="base-ui-_r_3_">
              Keyboard Shortcuts
            </SheetTitle>
            <SheetDescription className="sr-only" id="base-ui-_r_4_">
              Move faster through the operations dashboard.
            </SheetDescription>
          </div>
          <SheetClose className="-me-1.5 -mt-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Close keyboard shortcuts sheet">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <InputGroup className="mt-1" role="group">
          <InputGroupAddon role="group" data-align="inline-start">
            <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
              <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </span>
          </InputGroupAddon>
          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_5_" placeholder="Search shortcuts" aria-label="Search keyboard shortcuts" autoComplete="off" value="" />
        </InputGroup>
      </SheetHeader>
      <div className="flex-1 min-h-0 pb-6">
        <ScrollArea className="h-full" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}} hasOverflowY="" overflowYEnd="">
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_6_-viewport" tabIndex="0" style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "519px"}} data-has-overflow-y="" data-overflow-y-end="">
            <div className="flex flex-col gap-5 pb-4 pt-3 px-5">
              <section aria-labelledby="workspace-heading">
                <div className="flex flex-col">
                  <div className="pb-2">
                    <h3 className="font-medium text-muted-foreground text-xs tracking-normal uppercase" id="workspace-heading">
                      Workspace
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Open command menu
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="Cmd plusK">
                          <Kbd>
                            Cmd
                          </Kbd>
                          <Kbd>
                            K
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Quick capture
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="C">
                          <Kbd>
                            C
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Switch workspace
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="O">
                          <Kbd>
                            O
                          </Kbd>
                        </KbdGroup>
                        <span className="text-muted-foreground text-xs">
                          then
                        </span>
                        <KbdGroup aria-label="W">
                          <Kbd>
                            W
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Toggle sidebar
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="S">
                          <Kbd>
                            S
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Open profile menu
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="Shift plusP">
                          <Kbd>
                            Shift
                          </Kbd>
                          <Kbd>
                            P
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section aria-labelledby="navigation-heading">
                <div className="flex flex-col">
                  <div className="pb-2">
                    <h3 className="font-medium text-muted-foreground text-xs tracking-normal uppercase" id="navigation-heading">
                      Navigation
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Go to dashboard
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="G">
                          <Kbd>
                            G
                          </Kbd>
                        </KbdGroup>
                        <span className="text-muted-foreground text-xs">
                          then
                        </span>
                        <KbdGroup aria-label="D">
                          <Kbd>
                            D
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Go to projects
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="G">
                          <Kbd>
                            G
                          </Kbd>
                        </KbdGroup>
                        <span className="text-muted-foreground text-xs">
                          then
                        </span>
                        <KbdGroup aria-label="P">
                          <Kbd>
                            P
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Go to calendar
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="G">
                          <Kbd>
                            G
                          </Kbd>
                        </KbdGroup>
                        <span className="text-muted-foreground text-xs">
                          then
                        </span>
                        <KbdGroup aria-label="C">
                          <Kbd>
                            C
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Open selected project
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="Enter">
                          <Kbd>
                            Enter
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Open in new window
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="Ctrl plusEnter">
                          <Kbd>
                            Ctrl
                          </Kbd>
                          <Kbd>
                            Enter
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section aria-labelledby="triage-heading">
                <div className="flex flex-col">
                  <div className="pb-2">
                    <h3 className="font-medium text-muted-foreground text-xs tracking-normal uppercase" id="triage-heading">
                      Triage
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Assign owner
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="A">
                          <Kbd>
                            A
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Set priority
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="P">
                          <Kbd>
                            P
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Set due date
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="D">
                          <Kbd>
                            D
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Add label
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="L">
                          <Kbd>
                            L
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Mark as blocked
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="B">
                          <Kbd>
                            B
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section aria-labelledby="board-heading">
                <div className="flex flex-col">
                  <div className="pb-2">
                    <h3 className="font-medium text-muted-foreground text-xs tracking-normal uppercase" id="board-heading">
                      Board
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Move item
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="M">
                          <Kbd>
                            M
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Move card up
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="Alt plusUp">
                          <Kbd>
                            Alt
                          </Kbd>
                          <Kbd>
                            Up
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Move card down
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="Alt plusDown">
                          <Kbd>
                            Alt
                          </Kbd>
                          <Kbd>
                            Down
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Toggle details panel
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="I">
                          <Kbd>
                            I
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Archive item
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="Shift plusA">
                          <Kbd>
                            Shift
                          </Kbd>
                          <Kbd>
                            A
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section aria-labelledby="messages-heading">
                <div className="flex flex-col">
                  <div className="pb-2">
                    <h3 className="font-medium text-muted-foreground text-xs tracking-normal uppercase" id="messages-heading">
                      Messages
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Send update
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="Cmd plusEnter">
                          <Kbd>
                            Cmd
                          </Kbd>
                          <Kbd>
                            Enter
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Reply to thread
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="R">
                          <Kbd>
                            R
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Clear read notifications
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="Shift plusBackspace">
                          <Kbd>
                            Shift
                          </Kbd>
                          <Kbd>
                            Backspace
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center justify-between min-w-0 py-1.5">
                      <span className="min-w-0 text-sm truncate">
                        Open shortcuts
                      </span>
                      <div className="flex flex-wrap gap-1.5 items-center justify-end shrink-0">
                        <KbdGroup aria-label="?">
                          <Kbd>
                            ?
                          </Kbd>
                        </KbdGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="cn-scroll-area-scrollbar flex p-px select-none touch-none transition-colors" data-orientation="vertical" data-has-overflow-y="" data-overflow-y-end="" data-id="base-ui-_r_6_-scrollbar" style={{position: "absolute", touchAction: "none", userSelect: "none", top: "0px", bottom: "var(--scroll-area-corner-height)", insetInlineEnd: "0px", "--scroll-area-thumb-height": "227.48493975903614px"}}>
            <div className="bg-border cn-scroll-area-thumb flex-1 relative" data-orientation="vertical" style={{height: "var(--scroll-area-thumb-height)", transform: "translate3d(0px, 0px, 0px)"}}></div>
          </div>
        </ScrollArea>
      </div>
    </SheetContent>
    </Sheet>
  </>
  )
}
