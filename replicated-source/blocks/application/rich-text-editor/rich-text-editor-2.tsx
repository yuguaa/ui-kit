import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"

export function Pattern() {
  return (
    <div className="flex flex-col min-h-svh w-full">
      <div className="[--page-header:--spacing(14)] bg-background flex flex-1 flex-col text-foreground w-full" style={{"--page-header": "56px"}}>
        <header className="bg-background border-b flex gap-3 items-center min-h-14 px-4 py-2 sm:px-6 sticky top-0 z-20">
          <div className="flex flex-1 flex-col gap-px min-w-0">
            <div className="flex gap-2 items-center min-w-0">
              <h1 className="font-medium text-base/5 truncate">
                {"Escalation Playbook"}
              </h1>
            </div>
            <p className="flex flex-wrap gap-x-1.5 gap-y-0.5 items-center text-muted-foreground text-xs">
              <span>
                {"Support wiki"}
              </span>
              <span className="gap-1.5 inline-flex items-center max-sm:hidden">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                {"Edited Sep 26"}
              </span>
              <span className="gap-1.5 inline-flex items-center">
                <span className="bg-muted-foreground/40 rounded-full shrink-0 size-1" aria-hidden="true"></span>
                <span aria-live="polite">
                  {"Saved"}
                </span>
              </span>
            </p>
          </div>
          <Tooltip>
          <TooltipTrigger className="*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background -space-x-2 cn-avatar-group flex group/avatar-group max-md:hidden" role="group" tabIndex={0} aria-label="Shared with Daniel Okafor, Lena Hoffmann, Maya Chen, and Arjun Mehta" id="base-ui-_r_1_" baseUiTooltipTrigger="">
            <Avatar size="sm">
              <AvatarImage alt="Daniel Okafor" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <Avatar size="sm">
              <AvatarImage alt="Lena Hoffmann" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <Avatar size="sm">
              <AvatarImage alt="Maya Chen" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
            <Avatar size="sm">
              <AvatarImage alt="Arjun Mehta" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&dpr=2&q=80"></AvatarImage>
            </Avatar>
          </TooltipTrigger>
          </Tooltip>
          <div className="flex gap-1 items-center shrink-0">
            <div className="flex gap-0.5 items-center shrink-0" role="group" aria-label="History">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex={0} disabled aria-label="Undo" toolbarItem="" id="base-ui-_r_3_" baseUiTooltipTrigger="" extracted="1">
                <svg className="lucide lucide-undo-2 lucide-undo2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Undo2Icon" tabler="IconArrowBackUp" hugeicons="Undo02Icon" phosphor="ArrowUUpLeftIcon" remixicon="RiArrowGoBackLine" aria-hidden="true">
                  <path d="M9 14 4 9l5-5"></path>
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" disabled="" tabIndex={0} disabled aria-label="Redo" toolbarItem="" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-redo-2 lucide-redo2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="Redo2Icon" tabler="IconArrowForwardUp" hugeicons="Redo02Icon" phosphor="ArrowUUpRightIcon" remixicon="RiArrowGoForwardLine" aria-hidden="true">
                  <path d="m15 14 5-5-5-5"></path>
                  <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
            </div>
            <Separator className="data-vertical:self-center h-4" data-orientation="vertical" role="separator" aria-orientation="vertical"></Separator>
            <Popover>
            <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center md:pointer-fine:hidden outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Outline" baseUiClickTrigger="" id="base-ui-_r_7_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-table-of-contents" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TableOfContentsIcon" tabler="IconListDetails" hugeicons="LeftToRightListDashIcon" phosphor="ListDashesIcon" remixicon="RiListIndefinite" aria-hidden="true">
                <path d="M16 5H3"></path>
                <path d="M16 12H3"></path>
                <path d="M16 19H3"></path>
                <path d="M21 5h.01"></path>
                <path d="M21 12h.01"></path>
                <path d="M21 19h.01"></path>
              </svg>
            </PopoverTrigger>
            </Popover>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Page actions" aria-haspopup="menu" id="base-ui-_r_b_" aria-expanded="false">
              <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                <circle cx={12} cy={12} r={1}></circle>
                <circle cx={19} cy={12} r={1}></circle>
                <circle cx={5} cy={12} r={1}></circle>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </div>
        </header>
        <div className="flex-1 relative">
          <div className="[&_.prosemirror-dropcursor-block]:-translate-y-[0.5px] [&_.prosemirror-dropcursor-block]:h-0.5! [&_.prosemirror-dropcursor-block]:rounded-full [&_.prosemirror-dropcursor-block]:text-primary relative">
            <div className="[&_.ProseMirror-gapcursor]:after:border-t-foreground! [&_.tiptap.resize-cursor]:cursor-col-resize [&_.tiptap>*+*]:mt-3 [&_.tiptap>h2:not(:first-child)]:mt-8 [&_.tiptap>h3:not(:first-child)]:mt-6 [&_.tiptap]:break-words [&_.tiptap]:flex-1 [&_.tiptap]:outline-none [&_.tiptap_.ProseMirror-selectednode]:outline-2 [&_.tiptap_.ProseMirror-selectednode]:outline-ring/50 [&_.tiptap_.column-resize-handle]:-end-px [&_.tiptap_.column-resize-handle]:absolute [&_.tiptap_.column-resize-handle]:bg-primary [&_.tiptap_.column-resize-handle]:inset-y-0 [&_.tiptap_.column-resize-handle]:pointer-events-none [&_.tiptap_.column-resize-handle]:w-0.5 [&_.tiptap_.column-resize-handle]:z-10 [&_.tiptap_.is-empty]:before:content-[attr(data-placeholder)] [&_.tiptap_.is-empty]:before:float-start [&_.tiptap_.is-empty]:before:h-0 [&_.tiptap_.is-empty]:before:pointer-events-none [&_.tiptap_.is-empty]:before:text-muted-foreground [&_.tiptap_.selectedCell]:after:absolute [&_.tiptap_.selectedCell]:after:bg-primary/10 [&_.tiptap_.selectedCell]:after:content-[''] [&_.tiptap_.selectedCell]:after:inset-0 [&_.tiptap_.selectedCell]:after:pointer-events-none [&_.tiptap_.selection]:bg-primary/15 [&_.tiptap_.tableWrapper]:mb-6 [&_.tiptap_.tableWrapper]:mt-10 [&_.tiptap_.tableWrapper]:overflow-x-auto [&_.tiptap_:is(h1,h2,h3)]:scroll-mt-[calc(var(--page-header)+--spacing(6))] [&_.tiptap_:is(td,th)]:align-top [&_.tiptap_:is(td,th)]:border [&_.tiptap_:is(td,th)]:border-border [&_.tiptap_:is(td,th)]:px-3 [&_.tiptap_:is(td,th)]:py-2 [&_.tiptap_:is(td,th)]:relative [&_.tiptap_:is(td,th)]:text-start [&_.tiptap_:not(pre)>code]:bg-muted [&_.tiptap_:not(pre)>code]:font-mono [&_.tiptap_:not(pre)>code]:px-1 [&_.tiptap_:not(pre)>code]:py-0.5 [&_.tiptap_:not(pre)>code]:rounded-sm [&_.tiptap_:not(pre)>code]:text-sm [&_.tiptap_[data-type=mention]]:bg-primary/10 [&_.tiptap_[data-type=mention]]:font-medium [&_.tiptap_[data-type=mention]]:px-1 [&_.tiptap_[data-type=mention]]:py-0.5 [&_.tiptap_[data-type=mention]]:rounded-sm [&_.tiptap_[data-type=mention]]:text-primary [&_.tiptap_[data-type=mention]]:whitespace-nowrap! [&_.tiptap_a]:text-primary [&_.tiptap_a]:underline [&_.tiptap_a]:underline-offset-4 [&_.tiptap_blockquote]:border-s-2 [&_.tiptap_blockquote]:ps-4 [&_.tiptap_blockquote]:text-muted-foreground [&_.tiptap_h1]:font-semibold [&_.tiptap_h1]:text-2xl/9 [&_.tiptap_h1]:tracking-tight [&_.tiptap_h2]:font-semibold [&_.tiptap_h2]:text-xl/8 [&_.tiptap_h2]:tracking-tight [&_.tiptap_h3]:font-semibold [&_.tiptap_h3]:text-lg/7 [&_.tiptap_hr]:border-border [&_.tiptap_hr]:my-6 [&_.tiptap_li+li]:mt-1 [&_.tiptap_li::marker]:text-muted-foreground [&_.tiptap_li[data-checked=true]>div>[data-node-view-content]]:line-through [&_.tiptap_li[data-checked=true]>div>[data-node-view-content]]:text-muted-foreground [&_.tiptap_mark[data-color=blue]]:bg-sky-200 [&_.tiptap_mark[data-color=green]]:bg-emerald-200 [&_.tiptap_mark[data-color=pink]]:bg-pink-200 [&_.tiptap_mark[data-color=violet]]:bg-violet-200 [&_.tiptap_mark]:bg-yellow-200 [&_.tiptap_mark]:px-0.5 [&_.tiptap_mark]:text-inherit [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:ps-6 [&_.tiptap_pre]:bg-muted [&_.tiptap_pre]:font-mono [&_.tiptap_pre]:px-4 [&_.tiptap_pre]:py-3 [&_.tiptap_pre]:rounded-md [&_.tiptap_pre]:text-sm [&_.tiptap_table]:border-collapse [&_.tiptap_table]:table-fixed [&_.tiptap_table]:text-sm [&_.tiptap_table]:w-full [&_.tiptap_th]:bg-muted [&_.tiptap_th]:font-medium [&_.tiptap_th]:text-muted-foreground [&_.tiptap_ul[data-type=taskList]]:list-none [&_.tiptap_ul[data-type=taskList]]:ps-0.5 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:ps-6 dark:[&_.tiptap_mark[data-color=blue]]:bg-sky-400/30 dark:[&_.tiptap_mark[data-color=green]]:bg-emerald-400/30 dark:[&_.tiptap_mark[data-color=pink]]:bg-pink-400/30 dark:[&_.tiptap_mark[data-color=violet]]:bg-violet-400/30 dark:[&_.tiptap_mark]:bg-yellow-400/30 flex flex-col max-w-3xl min-h-full mx-auto px-4 py-8 sm:px-16 sm:py-12 text-base/7 text-foreground w-full">
              <div className="ProseMirror tiptap" contentEditable="true" role="textbox" aria-label="Escalation Playbook page" aria-multiline="true" translate="no" tabIndex={0}>
                <h1>
                  {"Escalation Playbook"}
                </h1>
                <p>
                  {"How Loomwell support hands a customer problem to engineering without losing context."}
                  <span data-type="mention" data-id="usr_daniel" data-label="Daniel Okafor" data-mention-suggestion-char="@" contentEditable="false">
                    {"@Daniel Okafor"}
                  </span>
                  {"owns this page; propose edits in"}
                  <code>
                    {"#support-ops"}
                  </code>
                  {"."}
                </p>
                <div className="node-richTextOutline react-renderer" contentEditable="false">
                  <div className="flex flex-col gap-1.5" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                    <p className="font-medium text-muted-foreground text-xs">
                      {"Contents"}
                    </p>
                    <nav className="flex flex-col items-start" aria-label="Contents">
                      <Button className="font-normal h-auto hover:text-foreground max-w-full px-0 py-0.5 text-muted-foreground" type="button" tabIndex={0}>
                        <span className="truncate">
                          {"Escalation Playbook"}
                        </span>
                      </Button>
                      <Button className="font-normal h-auto hover:text-foreground max-w-full ps-4 px-0 py-0.5 text-muted-foreground" type="button" tabIndex={0}>
                        <span className="truncate">
                          {"When to Escalate"}
                        </span>
                      </Button>
                      <Button className="font-normal h-auto hover:text-foreground max-w-full ps-4 px-0 py-0.5 text-muted-foreground" type="button" tabIndex={0}>
                        <span className="truncate">
                          {"Escalation Tiers"}
                        </span>
                      </Button>
                      <Button className="font-normal h-auto hover:text-foreground max-w-full ps-8 px-0 py-0.5 text-muted-foreground" type="button" tabIndex={0}>
                        <span className="truncate">
                          {"Paging Engineering"}
                        </span>
                      </Button>
                      <Button className="font-normal h-auto hover:text-foreground max-w-full ps-4 px-0 py-0.5 text-muted-foreground" type="button" tabIndex={0}>
                        <span className="truncate">
                          {"Handoff Checklist"}
                        </span>
                      </Button>
                      <Button className="font-normal h-auto hover:text-foreground max-w-full ps-4 px-0 py-0.5 text-muted-foreground" type="button" tabIndex={0}>
                        <span className="truncate">
                          {"Handoff Note"}
                        </span>
                      </Button>
                      <Button className="font-normal h-auto hover:text-foreground max-w-full ps-8 px-0 py-0.5 text-muted-foreground" type="button" tabIndex={0}>
                        <span className="truncate">
                          {"Search Diagnostics"}
                        </span>
                      </Button>
                      <Button className="font-normal h-auto hover:text-foreground max-w-full ps-8 px-0 py-0.5 text-muted-foreground" type="button" tabIndex={0}>
                        <span className="truncate">
                          {"Customer Updates"}
                        </span>
                      </Button>
                      <Button className="font-normal h-auto hover:text-foreground max-w-full ps-4 px-0 py-0.5 text-muted-foreground" type="button" tabIndex={0}>
                        <span className="truncate">
                          {"Review Cadence"}
                        </span>
                      </Button>
                    </nav>
                  </div>
                </div>
                <h2>
                  {"When to Escalate"}
                </h2>
                <p>
                  {"Escalate as soon as one of these is true. When in doubt, escalate and let the next tier downgrade it."}
                </p>
                <ul>
                  <li>
                    <p>
                      {"Email stops syncing for a workspace for more than 15 minutes."}
                    </p>
                  </li>
                  <li>
                    <p>
                      {"Inbox search misses conversations that exist, for more than one agent."}
                    </p>
                  </li>
                  <li>
                    <p>
                      {"Scheduled replies send at the wrong time, or not at all."}
                    </p>
                  </li>
                  <li>
                    <p>
                      {"Anything that looks like another workspace's data is"}
                      <strong>
                        {"always Tier 3"}
                      </strong>
                      {"."}
                    </p>
                  </li>
                </ul>
                <h2>
                  {"Escalation Tiers"}
                </h2>
                <p>
                  {"Targets run from the moment the ticket is tagged, around the clock for Tier 3."}
                </p>
                <div className="tableWrapper">
                  <table style={{minWidth: "384px"}}>
                    <colgroup>
                      <col style={{minWidth: "96px"}} />
                      <col style={{minWidth: "96px"}} />
                      <col style={{minWidth: "96px"}} />
                      <col style={{minWidth: "96px"}} />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th colSpan="1" rowSpan="1">
                          <p>
                            {"Tier"}
                          </p>
                        </th>
                        <th colSpan="1" rowSpan="1">
                          <p>
                            {"Owner"}
                          </p>
                        </th>
                        <th colSpan="1" rowSpan="1">
                          <p>
                            {"Response target"}
                          </p>
                        </th>
                        <th colSpan="1" rowSpan="1">
                          <p>
                            {"Channel"}
                          </p>
                        </th>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            {"Tier 1"}
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            {"Daniel Okafor"}
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            {"4 business hours"}
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            <code>
                              {"#support-desk"}
                            </code>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            {"Tier 2"}
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            {"Lena Hoffmann"}
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            {"1 hour"}
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            <code>
                              {"#search-oncall"}
                            </code>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            {"Tier 3"}
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            {"Lena Hoffmann"}
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            {"15 minutes"}
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            <code>
                              {"#incident-room"}
                            </code>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3>
                  {"Paging Engineering"}
                </h3>
                <p>
                  {"Tier 2 and Tier 3 page the search on-call from the incident channel. Never message an engineer directly:"}
                  <mark data-color="yellow">
                    {"the page is what starts the clock"}
                  </mark>
                  {"."}
                </p>
                <h2>
                  {"Handoff Checklist"}
                </h2>
                <ul data-type="taskList">
                  <li className="node-taskItem react-renderer" data-checked="true">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox checked="" role="checkbox" tabIndex={0} id="base-ui-_r_2o_" aria-checked="true" aria-label="Tag the ticket with its tier and the affected workspace ID">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </span>
                      <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                        <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                          <p>
                            {"Tag the ticket with its tier and the affected workspace ID"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="node-taskItem react-renderer" data-checked="true">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox checked="" role="checkbox" tabIndex={0} id="base-ui-_r_2l_" aria-checked="true" aria-label="Reproduce it on a staging workspace, or note why you could not">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </span>
                      <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                        <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                          <p>
                            {"Reproduce it on a staging workspace, or note why you could not"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="node-taskItem react-renderer" data-checked="false">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2i_" aria-checked="false" aria-label="Paste the search diagnostics from the next section"></Checkbox>
                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </span>
                      <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                        <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                          <p>
                            {"Paste the search diagnostics from the next section"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="node-taskItem react-renderer" data-checked="false">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2r_" aria-checked="false" aria-label="Agree the customer update with  before it goes out"></Checkbox>
                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </span>
                      <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                        <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                          <p>
                            {"Agree the customer update with"}
                            <span data-type="mention" data-id="usr_maya" data-label="Maya Chen" data-mention-suggestion-char="@" contentEditable="false">
                              {"@Maya Chen"}
                            </span>
                            {"before it goes out"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="node-taskItem react-renderer" data-checked="false">
                    <div className="flex gap-2.5 items-start" data-node-view-wrapper="" style={{whiteSpace: "normal"}}>
                      <span className="flex h-7 items-center shrink-0" data-task-toggle="" contentEditable="false">
                        <Checkbox unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_2f_" aria-checked="false" aria-label="Book the incident review with  once Tier 3 closes"></Checkbox>
                        <input tabIndex={-1} aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </span>
                      <div className="flex-1 min-w-0" data-node-view-content="" style={{whiteSpace: "pre-wrap"}}>
                        <div data-node-view-content-react="" data-node-view-wrapper="" style={{whiteSpace: "inherit"}}>
                          <p>
                            {"Book the incident review with"}
                            <span data-type="mention" data-id="usr_lena" data-label="Lena Hoffmann" data-mention-suggestion-char="@" contentEditable="false">
                              {"@Lena Hoffmann"}
                            </span>
                            {"once Tier 3 closes"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <h2>
                  {"Handoff Note"}
                </h2>
                <h3>
                  {"Search Diagnostics"}
                </h3>
                <p>
                  {"Run this from the admin console and paste the output in the ticket:"}
                </p>
                <pre>
                  <code>
                    {"loomwell diag search --workspace ws_4821 --since 2h"}
                  </code>
                </pre>
                <h3>
                  {"Customer Updates"}
                </h3>
                <p>
                  {"Send the first update inside the response target, even with nothing new to say. The tone we aim for:"}
                </p>
                <blockquote>
                  <p>
                    {"We can see the problem on our side and an engineer is on it now. You will hear from us again by 3:00 p.m. UTC, sooner if it is fixed."}
                  </p>
                </blockquote>
                <h2>
                  {"Review Cadence"}
                </h2>
                <p>
                  {"Every Tier 3 gets a written review within five business days."}
                  <span data-type="mention" data-id="usr_arjun" data-label="Arjun Mehta" data-mention-suggestion-char="@" contentEditable="false">
                    {"@Arjun Mehta"}
                  </span>
                  {"collects the notes, and past reviews live in the"}
                  <a target="_blank" rel="noopener noreferrer nofollow" href="https://loomwell.example/reviews">
                    {"incident archive"}
                  </a>
                  {"."}
                </p>
              </div>
            </div>
            <div className="-translate-x-full -translate-y-1/2 absolute data-present:sm:flex data-visible:opacity-100 data-visible:pointer-events-auto data-visible:starting:opacity-0 duration-150 ease-out gap-0.5 hidden items-center left-0 motion-reduce:transition-none opacity-0 pointer-events-none top-0 transition-[opacity,display] transition-discrete z-10" inert="">
              <Tooltip>
              <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={-1} aria-label="Add block" id="base-ui-_r_27_" baseUiTooltipTrigger="">
                <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </TooltipTrigger>
              </Tooltip>
              <Tooltip>
              <TooltipTrigger className="flex" id="base-ui-_r_2c_" baseUiTooltipTrigger="">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 active:cursor-grabbing cn-button cn-button-size-icon-xs cn-button-variant-ghost cursor-grab disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={-1} draggable="true" aria-label="Block actions" aria-haspopup="menu" id="base-ui-_r_2d_" aria-expanded="false">
                  <svg className="lucide lucide-grip-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="GripVerticalIcon" tabler="IconGripVertical" hugeicons="DragDropVerticalIcon" phosphor="DotsSixVerticalIcon" remixicon="RiDraggable" aria-hidden="true">
                    <circle cx={9} cy={12} r={1}></circle>
                    <circle cx={9} cy={5} r={1}></circle>
                    <circle cx={9} cy={19} r={1}></circle>
                    <circle cx={15} cy={12} r={1}></circle>
                    <circle cx={15} cy={5} r={1}></circle>
                    <circle cx={15} cy={19} r={1}></circle>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </TooltipTrigger>
              </Tooltip>
            </div>
          </div>
          <div className="absolute end-4 inset-y-0 max-md:hidden pointer-events-none">
            <nav className="group/outline pointer-events-auto sticky top-[calc(var(--page-header)+--spacing(24))] z-10" aria-label="Outline">
              <div className="duration-150 flex flex-col gap-2.5 group-focus-within/outline:opacity-0 group-hover/outline:opacity-0 items-end motion-reduce:transition-none pe-1 py-3 transition-opacity w-10" aria-hidden="true">
                <span className="bg-foreground duration-200 ease-out h-0.5 motion-reduce:transition-none origin-right rounded-full rtl:origin-left scale-x-100 transition w-6"></span>
                <span className="bg-muted-foreground/40 duration-200 ease-out h-0.5 motion-reduce:transition-none origin-right rounded-full rtl:origin-left scale-x-50 transition w-6"></span>
                <span className="bg-muted-foreground/40 duration-200 ease-out h-0.5 motion-reduce:transition-none origin-right rounded-full rtl:origin-left scale-x-50 transition w-6"></span>
                <span className="bg-muted-foreground/40 duration-200 ease-out h-0.5 motion-reduce:transition-none origin-right rounded-full rtl:origin-left scale-x-33 transition w-6"></span>
                <span className="bg-muted-foreground/40 duration-200 ease-out h-0.5 motion-reduce:transition-none origin-right rounded-full rtl:origin-left scale-x-50 transition w-6"></span>
                <span className="bg-muted-foreground/40 duration-200 ease-out h-0.5 motion-reduce:transition-none origin-right rounded-full rtl:origin-left scale-x-50 transition w-6"></span>
                <span className="bg-muted-foreground/40 duration-200 ease-out h-0.5 motion-reduce:transition-none origin-right rounded-full rtl:origin-left scale-x-33 transition w-6"></span>
                <span className="bg-muted-foreground/40 duration-200 ease-out h-0.5 motion-reduce:transition-none origin-right rounded-full rtl:origin-left scale-x-33 transition w-6"></span>
                <span className="bg-muted-foreground/40 duration-200 ease-out h-0.5 motion-reduce:transition-none origin-right rounded-full rtl:origin-left scale-x-50 transition w-6"></span>
              </div>
              <Card className="[--card-spacing:--spacing(1)] absolute duration-150 end-0 group-focus-within/outline:opacity-100 group-focus-within/outline:pointer-events-auto group-hover/outline:opacity-100 group-hover/outline:pointer-events-auto motion-reduce:transition-none opacity-0 pointer-events-none top-0 transition-opacity w-56" size="sm">
                <CardContent>
                  <div className="flex flex-col max-h-80 no-scrollbar overflow-y-auto p-0.5 supports-[animation-timeline:scroll()]:scroll-fade-y">
                    <Button className="aria-[current=location]:bg-muted aria-[current=location]:font-medium aria-[current=location]:text-foreground dark:aria-[current=location]:bg-muted/50 font-normal justify-start text-muted-foreground w-full" type="button" tabIndex={0} aria-current="location">
                      <span className="truncate">
                        {"Escalation Playbook"}
                      </span>
                    </Button>
                    <Button className="aria-[current=location]:bg-muted aria-[current=location]:font-medium aria-[current=location]:text-foreground dark:aria-[current=location]:bg-muted/50 font-normal justify-start ps-4 text-muted-foreground w-full" type="button" tabIndex={-1}>
                      <span className="truncate">
                        {"When to Escalate"}
                      </span>
                    </Button>
                    <Button className="aria-[current=location]:bg-muted aria-[current=location]:font-medium aria-[current=location]:text-foreground dark:aria-[current=location]:bg-muted/50 font-normal justify-start ps-4 text-muted-foreground w-full" type="button" tabIndex={-1}>
                      <span className="truncate">
                        {"Escalation Tiers"}
                      </span>
                    </Button>
                    <Button className="aria-[current=location]:bg-muted aria-[current=location]:font-medium aria-[current=location]:text-foreground dark:aria-[current=location]:bg-muted/50 font-normal justify-start ps-6 text-muted-foreground w-full" type="button" tabIndex={-1}>
                      <span className="truncate">
                        {"Paging Engineering"}
                      </span>
                    </Button>
                    <Button className="aria-[current=location]:bg-muted aria-[current=location]:font-medium aria-[current=location]:text-foreground dark:aria-[current=location]:bg-muted/50 font-normal justify-start ps-4 text-muted-foreground w-full" type="button" tabIndex={-1}>
                      <span className="truncate">
                        {"Handoff Checklist"}
                      </span>
                    </Button>
                    <Button className="aria-[current=location]:bg-muted aria-[current=location]:font-medium aria-[current=location]:text-foreground dark:aria-[current=location]:bg-muted/50 font-normal justify-start ps-4 text-muted-foreground w-full" type="button" tabIndex={-1}>
                      <span className="truncate">
                        {"Handoff Note"}
                      </span>
                    </Button>
                    <Button className="aria-[current=location]:bg-muted aria-[current=location]:font-medium aria-[current=location]:text-foreground dark:aria-[current=location]:bg-muted/50 font-normal justify-start ps-6 text-muted-foreground w-full" type="button" tabIndex={-1}>
                      <span className="truncate">
                        {"Search Diagnostics"}
                      </span>
                    </Button>
                    <Button className="aria-[current=location]:bg-muted aria-[current=location]:font-medium aria-[current=location]:text-foreground dark:aria-[current=location]:bg-muted/50 font-normal justify-start ps-6 text-muted-foreground w-full" type="button" tabIndex={-1}>
                      <span className="truncate">
                        {"Customer Updates"}
                      </span>
                    </Button>
                    <Button className="aria-[current=location]:bg-muted aria-[current=location]:font-medium aria-[current=location]:text-foreground dark:aria-[current=location]:bg-muted/50 font-normal justify-start ps-4 text-muted-foreground w-full" type="button" tabIndex={-1}>
                      <span className="truncate">
                        {"Review Cadence"}
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
