import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconStack } from "@/registry-neui/bases/base/neui/icon-stack"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import { Separator } from "@/registry/bases/base/ui/separator"

export function Pattern() {
  return (
    <main className="flex items-center justify-center md:p-10 min-h-svh p-4 sm:p-8 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        File sources empty state
      </h1>
      <section className="flex flex-col justify-center max-w-4xl min-h-[560px] w-full" aria-labelledby="file-sources-heading">
        <div className="flex flex-col gap-1.5 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-1 min-w-0">
            <h2 className="font-semibold text-2xl tracking-tight" id="file-sources-heading">
              File Sources
            </h2>
            <p className="text-muted-foreground text-sm/6">
              Connect governed folders for contracts, exports, and client delivery packets.
            </p>
          </div>
          <a className="focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-1.5 hover:text-foreground hover:underline inline-flex items-center outline-none rounded-sm text-muted-foreground text-sm underline-offset-4 w-fit" href="#connector-guide">
            Connector guide
            <svg className="lucide lucide-external-link size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
              <path d="M15 3h6v6"></path>
              <path d="M10 14 21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </a>
        </div>
        <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
        <div className="flex items-center justify-center min-h-[300px] px-6 py-12 sm:min-h-[320px] sm:px-10">
          <Empty className="bg-transparent flex-none max-w-md p-0">
            <EmptyHeader className="gap-5 text-center">
              <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-empty-media cn-empty-media-default flex items-center justify-center mb-0 shrink-0" data-variant="default">
                <IconStack className="h-24 w-22" aria-hidden="true" style={{"--icon-stack-content-x": "70%", "--icon-stack-content-y": "57%"}}>
                  <svg className="h-full overflow-visible w-full" aria-hidden="true" viewBox="0 0 72 81" fill="none">
                    <ellipse className="blur-[4px]" cx="36" cy="76" rx="30" ry="7" fill="currentColor" fillOpacity="0.055"></ellipse>
                    <g opacity="0.4" transform="translate(0 0)">
                      <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                    <g opacity="0.6" transform="translate(13.65 6.04)">
                      <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity="0.2" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                    <g opacity="0.8" transform="translate(27.32 12.08)">
                      <path d="M42.2538 2.046C41.4408 1.6325 40.3965 1.6677 39.2612 2.2424L7.9616 18.1934C5.3895 19.5039 3.301 23.1064 3.301 26.2322V64.3226C3.301 66.0677 3.9458 67.2943 4.962 67.8199L1.8363 66.229C0.8201 65.7104 0.1753 64.4771 0.1753 62.732V24.6412C0.1753 21.5085 2.2638 17.913 4.8359 16.6024L36.1355 0.6515C37.2778 0.0698 38.322 0.0416 39.128 0.4551L42.2538 2.046Z" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M42.2545 2.0456C43.2707 2.5643 43.9155 3.7979 43.9155 5.543V43.6337C43.9155 46.7665 41.827 50.3616 39.2549 51.6722L7.9554 67.6235C6.813 68.2052 5.7687 68.2331 4.9628 67.8196C3.9465 67.301 3.3018 66.0673 3.3018 64.3222V26.2318C3.3018 23.0991 5.3903 19.5036 7.9624 18.193L39.2619 2.2421C40.4043 1.6604 41.4486 1.6321 42.2545 2.0456Z" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                  </svg>
                  <div className="-skew-y-26 -translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-[var(--icon-stack-content-x)] pointer-events-none scale-x-90 text-muted-foreground top-[var(--icon-stack-content-y)]">
                    <svg className="lucide lucide-folder size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="FolderIcon" tabler="IconFolder" hugeicons="FolderIcon" phosphor="FolderIcon" remixicon="RiFolderLine" aria-hidden="true">
                      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                    </svg>
                  </div>
                </IconStack>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <EmptyTitle className="font-semibold text-base tracking-tight">
                  No file sources are linked
                </EmptyTitle>
                <EmptyDescription className="max-w-sm text-sm/relaxed">
                  Attach a storage workspace before review files, billing exports, or signed packets can land in this queue.
                </EmptyDescription>
              </div>
            </EmptyHeader>
          </Empty>
        </div>
        <Frame className="@container w-full" spacing="xs" aria-label="Storage connector actions">
          <div className="@2xl:grid-cols-2 @3xl:grid-cols-4 gap-1 grid">
            <FramePanel className="p-0!">
              <a className="flex focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-2 h-11 hover:bg-muted/50 items-center justify-center min-w-0 outline-none px-3 rounded-lg text-sm transition-colors" href="#dropbox">
                <svg className="shrink-0 size-4" aria-hidden="true" fill="none" viewBox="0 0 128 128">
                  <path fill="#0061FE" d="M0 0h128v128H0z"></path>
                  <path fill="#F7F5F2" d="M43.7 32 23.404 44.75 43.701 57.5 64 44.75 84.3 57.5l20.298-12.75L84.299 32 64.002 44.75 43.7 32Zm0 51L23.404 70.25 43.701 57.5 64 70.25 43.702 83Zm20.302-12.75L84.299 57.5l20.298 12.75L84.299 83 64.002 70.25Zm0 29.75L43.7 87.25 64 74.5l20.3 12.75L64.002 100Z"></path>
                </svg>
                <span className="truncate">
                  Dropbox
                </span>
              </a>
            </FramePanel>
            <FramePanel className="p-0!">
              <a className="flex focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-2 h-11 hover:bg-muted/50 items-center justify-center min-w-0 outline-none px-3 rounded-lg text-sm transition-colors" href="#box">
                <svg className="h-5 shrink-0 w-8" aria-hidden="true" viewBox="0 0 64 40">
                  <text x="1" y="29" fill="#0061D5" fontFamily="Arial, Helvetica, sans-serif" fontSize="30" fontWeight="700" letter-spacing="0">
                    box
                  </text>
                </svg>
                <span className="truncate">
                  Box
                </span>
              </a>
            </FramePanel>
            <FramePanel className="p-0!">
              <a className="flex focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-2 h-11 hover:bg-muted/50 items-center justify-center min-w-0 outline-none px-3 rounded-lg text-sm transition-colors" href="#google-drive">
                <svg className="shrink-0 size-4" aria-hidden="true" viewBox="0 0 256 228">
                  <path fill="#1E8E3E" d="M78.8 0 0 136.4l39.4 68.2 78.8-136.4L78.8 0Z"></path>
                  <path fill="#FABB05" d="M78.8 0h98.4L256 136.4h-78.8L98.4 0H78.8Z"></path>
                  <path fill="#4285F4" d="M39.4 204.6h157.2L256 136.4H98.4L39.4 204.6Z"></path>
                  <path fill="#34A853" d="M0 136.4h98.4l-59 68.2L0 136.4Z"></path>
                  <path fill="#1967D2" d="M177.2 136.4H256l-59.4 68.2-19.4-68.2Z"></path>
                </svg>
                <span className="truncate">
                  Google Drive
                </span>
              </a>
            </FramePanel>
            <FramePanel className="p-0!">
              <a className="flex focus-visible:ring-[3px] focus-visible:ring-ring/50 font-medium gap-2 h-11 hover:bg-muted/50 items-center justify-center min-w-0 outline-none px-3 rounded-lg text-sm transition-colors" href="#microsoft-onedrive">
                <svg className="h-5 shrink-0 w-6" aria-hidden="true" viewBox="0 0 256 160">
                  <path fill="#0364B8" d="M102.6 38.7 164 75.2l36.6-15.3C187.4 24.6 153.6 0 113.8 0 82.8 0 55.8 15.8 40.6 40l62-1.3Z"></path>
                  <path fill="#0078D4" d="M102.6 38.7 40.6 40C17.6 44.7 0 65.2 0 89.8c0 27.9 22.6 50.6 50.5 50.6h83.8L164 75.2l-61.4-36.5Z"></path>
                  <path fill="#1490DF" d="m164 75.2-29.7 65.2h72.2c27.3 0 49.5-22.2 49.5-49.6 0-21.8-14.1-40.2-33.6-46.8l-21.8 15.9L164 75.2Z"></path>
                  <path fill="#28A8EA" d="m200.6 59.9-36.6 15.3 42.5 65.2h15.2c20-6.3 34.3-25 34.3-47 0-19.9-11.8-37-28.7-44.7-9.1.9-18 4.7-26.7 11.2Z"></path>
                </svg>
                <span className="truncate">
                  Microsoft OneDrive
                </span>
              </a>
            </FramePanel>
          </div>
        </Frame>
      </section>
    </main>
  )
}
