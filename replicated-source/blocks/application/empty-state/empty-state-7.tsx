import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="flex items-center justify-center max-w-3xl md:py-12 min-h-svh px-4 py-8 w-full">
        <Empty className="bg-transparent border-0 flex-none gap-7 md:p-0 p-0 rounded-none">
          <EmptyHeader className="gap-6 max-w-120 text-center">
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 border border-border cn-empty-media cn-empty-media-default flex items-center justify-center mb-0 p-4 rounded-full shrink-0" data-variant="default">
              <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <line x1="19" x2="19" y1="8" y2="14"></line>
                <line x1="22" x2="16" y1="11" y2="11"></line>
              </svg>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <EmptyTitle className="font-semibold sm:text-3xl text-2xl tracking-tight">
                Invite the first people in
              </EmptyTitle>
              <EmptyDescription className="max-w-104 text-sm/relaxed">
                Bring owners, editors, and reviewers into the workspace with a fast email invite or one secure share link.
              </EmptyDescription>
            </div>
          </EmptyHeader>
          <EmptyContent className="gap-0 max-w-none">
            <div className="flex flex-wrap gap-2 items-center justify-center w-full">
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-user-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UserPlusIcon" tabler="IconUserPlus" hugeicons="UserAdd01Icon" phosphor="UserPlusIcon" remixicon="RiUserAddLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" x2="19" y1="8" y2="14"></line>
                  <line x1="22" x2="16" y1="11" y2="11"></line>
                </svg>
                Invite members
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-copy" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CopyIcon" tabler="IconCopy" hugeicons="Copy01Icon" phosphor="CopyIcon" remixicon="RiFileCopyLine" data-icon="inline-start" aria-hidden="true">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
                Copy invite link
              </Button>
            </div>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  )
}
