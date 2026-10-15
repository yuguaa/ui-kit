import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import {
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="flex flex-col gap-24 items-center justify-center max-w-[52rem] md:py-12 min-h-[820px] py-8 sm:gap-32 w-full">
        <Empty className="border-0 flex-none gap-7 md:p-0 p-0 rounded-none">
          <EmptyHeader className="gap-4 max-w-[28rem]">
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-empty-media cn-empty-media-default flex items-center justify-center mb-0 shrink-0" data-variant="default">
              <div className="h-32 isolate relative w-[13.5rem]" aria-hidden="true">
                <svg className="h-full w-full" viewBox="0 0 220 140" fill="none">
                  <line x1="40" y1="0" x2="40" y2="140" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5"></line>
                  <line x1="110" y1="0" x2="110" y2="140" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5"></line>
                  <line x1="180" y1="0" x2="180" y2="140" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5"></line>
                  <line x1="0" y1="25" x2="220" y2="25" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5"></line>
                  <line x1="0" y1="70" x2="220" y2="70" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5"></line>
                  <line x1="0" y1="115" x2="220" y2="115" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5"></line>
                  <polygon points="89,58 110,70 110,94 89,106 68,94 68,70" fill="none" stroke="currentColor" strokeOpacity="0.28" strokeWidth="0.75" strokeLinejoin="round"></polygon>
                  <line x1="89" y1="82" x2="68" y2="70" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.5"></line>
                  <line x1="89" y1="82" x2="110" y2="70" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.5"></line>
                  <line x1="89" y1="82" x2="89" y2="106" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.5"></line>
                  <polygon points="110,46 131,58 131,82 110,94 89,82 89,58" fill="none" stroke="currentColor" strokeOpacity="0.38" strokeWidth="0.75" strokeLinejoin="round"></polygon>
                  <line x1="110" y1="70" x2="89" y2="58" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.5"></line>
                  <line x1="110" y1="70" x2="131" y2="58" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.5"></line>
                  <line x1="110" y1="70" x2="110" y2="94" stroke="currentColor" strokeOpacity="0.25" strokeWidth="0.5"></line>
                  <polygon points="131,34 152,46 152,70 131,82 110,70 110,46" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="0.75" strokeLinejoin="round"></polygon>
                  <line x1="131" y1="58" x2="110" y2="46" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.5"></line>
                  <line x1="131" y1="58" x2="152" y2="46" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.5"></line>
                  <line x1="131" y1="58" x2="131" y2="82" stroke="currentColor" strokeOpacity="0.35" strokeWidth="0.5"></line>
                  <path d="M148 22 L155 26 L148 30 L141 26 Z" fill="none" stroke="currentColor" strokeOpacity="0.18" strokeWidth="0.5" strokeDasharray="2 2"></path>
                  <circle cx="40" cy="70" r="1.5" fill="currentColor" opacity="0.1"></circle>
                  <circle cx="180" cy="70" r="1.5" fill="currentColor" opacity="0.1"></circle>
                  <circle cx="110" cy="25" r="1.5" fill="currentColor" opacity="0.07"></circle>
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <EmptyTitle className="font-semibold text-2xl tracking-tight">
                No projects to show
              </EmptyTitle>
              <EmptyDescription className="max-w-[25rem] text-sm/relaxed">
                Start a project from scratch or pick a template to launch your first workspace and begin tracking tasks, goals, and progress.
              </EmptyDescription>
            </div>
          </EmptyHeader>
          <EmptyContent className="gap-0 max-w-none">
            <div className="flex flex-wrap gap-2 items-center justify-center w-full">
              <Button type="button" tabIndex="0" extracted="1">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                New project
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-layout-template" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutTemplateIcon" tabler="IconTemplate" hugeicons="DashboardSquare01Icon" phosphor="SquaresFourIcon" remixicon="RiLayout2Line" data-icon="inline-start" aria-hidden="true">
                  <rect width="18" height="7" x="3" y="3" rx="1"></rect>
                  <rect width="9" height="7" x="3" y="14" rx="1"></rect>
                  <rect width="5" height="7" x="16" y="14" rx="1"></rect>
                </svg>
                Explore templates
              </Button>
            </div>
          </EmptyContent>
        </Empty>
        <div className="max-w-md w-full">
          <div className="flex flex-col gap-3 items-center w-full">
            <p className="text-muted-foreground text-sm">
              Quick starts
            </p>
            <div className="gap-3 grid sm:grid-cols-2 w-full">
              <Item className="hover:bg-muted/30 min-w-0" href="#" aria-label="Task board" variant="outline" size="default">
                <ItemMedia className="text-muted-foreground" variant="default">
                  <svg className="lucide lucide-kanban size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KanbanIcon" tabler="IconLayoutKanban" hugeicons="DashboardSquare02Icon" phosphor="KanbanIcon" remixicon="RiKanbanView" aria-hidden="true">
                    <path d="M5 3v14"></path>
                    <path d="M12 3v8"></path>
                    <path d="M19 3v18"></path>
                  </svg>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="truncate">
                    Task board
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="ml-auto text-muted-foreground">
                  <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </ItemActions>
              </Item>
              <Item className="hover:bg-muted/30 min-w-0" href="#" aria-label="Sprint tracker" variant="outline" size="default">
                <ItemMedia className="text-muted-foreground" variant="default">
                  <svg className="lucide lucide-timer size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TimerIcon" tabler="IconClockPlay" hugeicons="Timer01Icon" phosphor="TimerIcon" remixicon="RiTimerLine" aria-hidden="true">
                    <line x1="10" x2="14" y1="2" y2="2"></line>
                    <line x1="12" x2="15" y1="14" y2="11"></line>
                    <circle cx="12" cy="14" r="8"></circle>
                  </svg>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="truncate">
                    Sprint tracker
                  </ItemTitle>
                </ItemContent>
                <ItemActions className="ml-auto text-muted-foreground">
                  <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </ItemActions>
              </Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
