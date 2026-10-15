import { Button } from "@/registry/bases/base/ui/button"
import { Card } from "@/registry/bases/base/ui/card"
import { Separator } from "@/registry/bases/base/ui/separator"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col min-h-svh w-full">
      <header className="bg-background border-b border-border flex gap-3 h-12 items-center justify-between px-4 shrink-0 sticky top-0 w-full z-20">
        <div className="flex items-center min-w-0">
          <Button className="-ms-2 size-8" type="button" tabIndex="0" aria-label="Close invoice draft">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </Button>
          <Separator className="h-4 ml-2 mr-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <h1 className="font-medium text-base text-foreground truncate">
            Invoice draft
          </h1>
        </div>
        <div className="flex gap-2 items-center shrink-0">
          <Button className="hidden md:inline-flex" type="button" tabIndex="0" aria-label="Send feedback about this invoice flow">
            <svg className="lucide lucide-megaphone" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start" lucide="MegaphoneIcon" tabler="IconSpeakerphone" hugeicons="Megaphone01Icon" phosphor="MegaphoneIcon" remixicon="RiMegaphoneLine" aria-hidden="true">
              <path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
              <path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
              <path d="M8 6v8"></path>
            </svg>
            Send feedback
          </Button>
          <Button className="hidden sm:inline-flex" type="button" tabIndex="0" aria-pressed="false">
            Collapse preview
          </Button>
          <Button type="button" tabIndex="0" aria-live="polite">
            Submit invoice
          </Button>
        </div>
      </header>
      <main className="flex flex-1 p-4">
        <Card className="border-dashed flex-1 items-center justify-center min-h-64 text-muted-foreground text-sm" size="default" aria-label="Content area">
          Content area
        </Card>
      </main>
    </div>
  )
}
