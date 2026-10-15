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
      <div className="flex flex-col gap-24 items-center justify-center max-w-3xl md:py-12 min-h-[820px] py-8 sm:gap-32 w-full">
        <Empty className="border-0 flex-none gap-7 md:p-0 p-0 rounded-none">
          <EmptyHeader className="gap-4 max-w-[27rem]">
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-empty-media cn-empty-media-default flex items-center justify-center mb-0 shrink-0" data-variant="default">
              <div className="h-24 isolate relative w-52" aria-hidden="true">
                <div className="absolute bg-muted/60 border border-border/50 dark:bg-muted/30 h-6 inset-x-6 rounded-t-lg top-0"></div>
                <div className="absolute bg-muted/80 border border-border/60 dark:bg-muted/50 h-6 inset-x-3 rounded-t-lg top-3"></div>
                <div className="absolute bg-background border border-border flex gap-3 h-16 inset-x-0 items-center px-4 rounded-lg shadow-sm top-6">
                  <div className="bg-muted rounded shrink-0 size-8"></div>
                  <div className="flex flex-1 flex-col gap-1.5 min-w-0">
                    <div className="bg-muted h-2.5 rounded w-3/4"></div>
                    <div className="bg-muted/60 h-2 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="absolute bg-linear-to-b bottom-0 from-background/0 h-8 inset-x-0 pointer-events-none to-background via-background/60"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <EmptyTitle className="font-semibold text-2xl tracking-tight">
                Your record space is empty
              </EmptyTitle>
              <EmptyDescription className="max-w-[24rem] text-sm/relaxed">
                Connect a live source or upload a CSV to start organizing people, teams, and attributes in one place.
              </EmptyDescription>
            </div>
          </EmptyHeader>
          <EmptyContent className="gap-0 max-w-none">
            <div className="flex flex-wrap gap-2 items-center justify-center w-full">
              <Button type="button" tabIndex="0" extracted="1">
                <svg className="lucide lucide-plug-zap" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlugZapIcon" tabler="IconPlugConnected" hugeicons="LinkCircle02Icon" phosphor="PlugsConnectedIcon" remixicon="RiPlug2Line" data-icon="inline-start" aria-hidden="true">
                  <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
                  <path d="m2 22 3-3"></path>
                  <path d="M7.5 13.5 10 11"></path>
                  <path d="M10.5 16.5 13 14"></path>
                  <path d="m18 3-4 4h6l-4 4"></path>
                </svg>
                Connect source
              </Button>
              <Button type="button" tabIndex="0">
                <svg className="lucide lucide-upload" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="UploadIcon" tabler="IconUpload" hugeicons="Upload01Icon" phosphor="UploadSimpleIcon" remixicon="RiUploadLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 3v12"></path>
                  <path d="m17 8-5-5-5 5"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                </svg>
                Upload CSV
              </Button>
            </div>
          </EmptyContent>
        </Empty>
        <div className="max-w-md sm:max-w-[34rem] space-y-3 w-full">
          <p className="text-muted-foreground text-sm">
            Quick guides
          </p>
          <div className="gap-3 grid sm:grid-cols-2">
            <Item className="hover:bg-muted/30 min-w-0" href="#" aria-label="How records work" variant="outline" size="default">
              <ItemMedia className="text-muted-foreground" variant="default">
                <svg className="lucide lucide-book-open size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </ItemMedia>
              <ItemContent className="min-w-0">
                <ItemTitle className="truncate">
                  How records work
                </ItemTitle>
              </ItemContent>
              <ItemActions className="ml-auto text-muted-foreground">
                <svg className="lucide lucide-chevron-right size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronRightIcon" tabler="IconChevronRight" hugeicons="ArrowRight01Icon" phosphor="CaretRightIcon" remixicon="RiArrowRightSLine" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </ItemActions>
            </Item>
            <Item className="hover:bg-muted/30 min-w-0" href="#" aria-label="CSV setup" variant="outline" size="default">
              <ItemMedia className="text-muted-foreground" variant="default">
                <svg className="lucide lucide-file-text size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </ItemMedia>
              <ItemContent className="min-w-0">
                <ItemTitle className="truncate">
                  CSV setup
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
  )
}
