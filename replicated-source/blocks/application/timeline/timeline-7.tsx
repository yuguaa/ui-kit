import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"

export function Pattern() {
  return (
    <main className="flex items-start justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Account rollout timeline dropdown"}
      </h1>
      <DropdownMenu>
      <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false" extracted="1">
        <svg className="lucide lucide-list-checks" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" data-icon="inline-start" aria-hidden="true">
          <path d="M13 5h8"></path>
          <path d="M13 12h8"></path>
          <path d="M13 19h8"></path>
          <path d="m3 17 2 2 4-4"></path>
          <path d="m3 7 2 2 4-4"></path>
        </svg>
        {"Open timeline"}
      </DropdownMenuTrigger>
      </DropdownMenu>
    </main>
  )
}
