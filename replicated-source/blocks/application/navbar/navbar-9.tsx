import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { BreadcrumbLink } from "@/registry/bases/radix/ui/breadcrumb"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex flex-col w-full">
      <header className="bg-background border-b border-border flex gap-2 h-12 items-center justify-between px-4 shrink-0 sticky top-0 w-full z-20">
        <div className="flex gap-3 items-center min-w-0">
          <div className="flex gap-2 items-center shrink-0">
            <Item className="bg-primary p-0 size-7 text-primary-foreground" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </ItemMedia>
            </Item>
            <span className="font-semibold hidden sm:inline text-sm">
              {"CodeLive"}
            </span>
          </div>
          <Separator className="h-4 my-auto" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="flex items-center md:gap-1.5" href="#">
                  <svg className="shrink-0 size-3.5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                    <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                  </svg>
                  <span className="hidden md:block">
                    {"acme-org"}
                  </span>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator role="presentation" aria-hidden="true">
                {"/"}
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage role="link" aria-disabled="true" aria-current="page">
                  {"payments-api"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex gap-2 items-center shrink-0">
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-share-2 lucide-share2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="Share2Icon" tabler="IconShare" hugeicons="Share08Icon" phosphor="ShareNetworkIcon" remixicon="RiShareLine" aria-hidden="true">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
            </svg>
            <span className="hidden sm:inline">
              {"Share"}
            </span>
          </Button>
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
              <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
            </svg>
            <span className="hidden sm:inline">
              {"Run"}
            </span>
          </Button>
          <DropdownMenu>
          <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
            <svg className="lucide lucide-git-branch" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="GitBranchIcon" tabler="IconGitBranch" hugeicons="GitBranchIcon" phosphor="GitBranchIcon" remixicon="RiGitBranchLine" aria-hidden="true">
              <path d="M15 6a9 9 0 0 0-9 9V3"></path>
              <circle cx="18" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
            </svg>
            <span className="hidden md:inline">
              {"main"}
            </span>
          </DropdownMenuTrigger>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="auto-rows-min gap-4 grid md:grid-cols-3">
          <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
          <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
          <div className="aspect-video bg-muted/20 border border-border/70 border-dashed rounded-lg"></div>
        </div>
        <div className="bg-muted/20 border border-border/70 border-dashed flex-1 min-h-[200px] rounded-lg"></div>
      </div>
    </div>
  )
}
