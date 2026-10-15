import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import {
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="flex flex-col items-center justify-center max-w-3xl md:py-12 min-h-[820px] py-8 w-full">
        <Empty className="border-0 flex-none gap-6 md:p-0 p-0 rounded-none">
          <EmptyHeader className="gap-3 max-w-[31rem] text-center">
            <EmptyTitle className="font-semibold text-2xl tracking-tight">
              Launch the Team Workspace
            </EmptyTitle>
            <EmptyDescription className="max-w-[31rem] text-sm/relaxed">
              <span className="block">
                Bring the core team together and sync the roster,
              </span>
              <span className="block">
                so plans and follow-ups stay visible.
              </span>
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="gap-5 max-w-none text-center">
            <div className="flex flex-col gap-2 max-w-[26rem] w-full">
              <Button className="w-full" type="button" tabIndex="0">
                <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" x2="19" y1="8" y2="14"></line>
                  <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
                Add Core Team
              </Button>
              <Button className="w-full" type="button" tabIndex="0">
                <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 3v12"></path>
                  <path d="m17 8-5-5-5 5"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                </svg>
                Sync Directory
              </Button>
            </div>
            <div className="gap-3 grid max-w-[26rem] w-full">
              <Item className="bg-fuchsia-500/8 border-transparent hover:bg-fuchsia-500/12 min-w-0" href="#" aria-label="Link deliverables" variant="default" size="default">
                <ItemMedia className="text-fuchsia-700" variant="icon">
                  <svg className="lucide lucide-kanban" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="KanbanIcon" tabler="IconLayoutKanban" hugeicons="DashboardSquare02Icon" phosphor="KanbanIcon" remixicon="RiKanbanView" aria-hidden="true">
                    <path d="M5 3v14"></path>
                    <path d="M12 3v8"></path>
                    <path d="M19 3v18"></path>
                  </svg>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="truncate">
                    Link Deliverables
                  </ItemTitle>
                  <ItemDescription className="text-sm truncate">
                    Keep milestones, owners, and blockers in view.
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="bg-sky-500/8 border-transparent hover:bg-sky-500/12 min-w-0" href="#" aria-label="Open brief" variant="default" size="default">
                <ItemMedia className="text-sky-700" variant="icon">
                  <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="truncate">
                    Open Brief
                  </ItemTitle>
                  <ItemDescription className="text-sm truncate">
                    Capture context, decisions, and handoff notes.
                  </ItemDescription>
                </ItemContent>
              </Item>
              <Item className="bg-emerald-500/8 border-transparent hover:bg-emerald-500/12 min-w-0" href="#" aria-label="Start check-in" variant="default" size="default">
                <ItemMedia className="text-emerald-700" variant="icon">
                  <svg className="lucide lucide-users" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UsersIcon" tabler="IconUsers" hugeicons="UserMultiple02Icon" phosphor="UsersIcon" remixicon="RiGroupLine" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                  </svg>
                </ItemMedia>
                <ItemContent className="min-w-0">
                  <ItemTitle className="truncate">
                    Start Check-In
                  </ItemTitle>
                  <ItemDescription className="text-sm truncate">
                    Gather the team when a thread needs answers.
                  </ItemDescription>
                </ItemContent>
              </Item>
            </div>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  )
}
