import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry-neui/bases/base/neui/code-block/code-block"
import { FiltersAdvanced } from "@/registry-neui/bases/base/neui/filters/filters-advanced"
import { Frame } from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"New firewall rule"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Sheet>
        <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-lg cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_1_" aria-haspopup="dialog" aria-expanded="true" popupOpen="" aria-controls="_r_0_" extracted="1">
          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          {"New Rule"}
        </SheetTrigger>
        </Sheet>
      </div>
    </main>
    <Sheet>
    <SheetContent className="flex flex-col gap-0 h-[calc(100svh-2rem)] inset-y-4 left-auto max-w-none outline-none overflow-hidden p-0 right-4 rounded-xl w-[min(36rem,calc(100vw-2rem))]" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_0_" role="dialog" data-side="right" aria-labelledby="base-ui-_r_3_" aria-describedby="base-ui-_r_4_" style={{"--nested-dialogs": "0"}}>
      <div className="border-b flex flex-col gap-1 px-5 py-3.5 shrink-0">
        <div className="flex gap-2 items-center justify-between">
          <SheetTitle className="min-w-0 text-lg" id="base-ui-_r_3_">
            {"New Rule"}
          </SheetTitle>
          <SheetClose className="-me-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Close">
            <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </SheetClose>
        </div>
        <SheetDescription id="base-ui-_r_4_">
          {"Judged in priority order, before managed protections."}
        </SheetDescription>
      </div>
      <div className="flex-1 min-h-0 no-scrollbar overflow-y-auto scroll-fade-y scroll-py-10">
        <div className="px-5 py-5">
          <FieldGroup className="gap-6">
            <FieldGroup className="gap-4">
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-17-rule-name">
                  {"Name"}
                </FieldLabel>
                <Input id="sheet-17-rule-name" autoComplete="off" placeholder="Block card testing bursts" value=""></Input>
              </Field>
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-17-rule-description">
                  {"Description"}
                </FieldLabel>
                <Input id="sheet-17-rule-description" autoComplete="off" placeholder="What this rule protects" value=""></Input>
              </Field>
            </FieldGroup>
            <FieldSet className="gap-3">
              <FieldLegend variant="label">
                {"When"}
              </FieldLegend>
              <FiltersAdvanced className="flex flex-col gap-2 min-w-0 py-(--filter-panel-pad) w-full" role="group" aria-label="Advanced filter" aria-description="0 conditions" style={{"--filter-panel-pad": "0px"}}>
                <div className="flex flex-col gap-1 items-center justify-center px-(--filter-panel-pad) py-8 text-center">
                  <span className="[&_svg]:size-4 bg-muted flex items-center justify-center mb-1 rounded-full size-9 text-muted-foreground" aria-hidden="true">
                    <svg className="lucide lucide-list-filter" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ListFilterIcon" tabler="IconFilter2" hugeicons="FilterMailIcon" phosphor="FunnelSimpleIcon" remixicon="RiFilter3Line">
                      <path d="M2 5h20"></path>
                      <path d="M6 12h12"></path>
                      <path d="M9 19h6"></path>
                    </svg>
                  </span>
                  <p className="font-medium text-sm">
                    {"No conditions yet"}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {"Add a condition to choose the requests this rule meets."}
                  </p>
                </div>
                <div className="data-drop-into:after:absolute data-drop-into:after:bg-primary data-drop-into:after:end-[calc(var(--filter-panel-pad)+4px)] data-drop-into:after:h-0.5 data-drop-into:after:rounded-full data-drop-into:after:start-(--filter-panel-pad) data-drop-into:after:top-0 flex flex-wrap gap-2 items-center pe-[calc(var(--filter-panel-pad)+4px)] px-(--filter-panel-pad) relative" data-drop-parent="root" data-drop-index="0">
                  <Button className="font-normal" type="button" tabIndex={0}>
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    {"Add condition"}
                  </Button>
                  <Button className="font-normal" type="button" tabIndex={0}>
                    <svg className="lucide lucide-folder-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="FolderPlusIcon" tabler="IconFolderPlus" hugeicons="FolderAddIcon" phosphor="FolderPlusIcon" remixicon="RiFolderAddLine">
                      <path d="M12 10v6"></path>
                      <path d="M9 13h6"></path>
                      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
                    </svg>
                    {"Add group"}
                  </Button>
                </div>
                <div className="sr-only" aria-live="polite" role="status">
                  <span></span>
                </div>
              </FiltersAdvanced>
              <CodeBlock className="[--code-block-bg:var(--card)] [--code-block-caret-color:var(--primary)] [--code-block-copy-inset:--spacing(2)] [--code-block-copy-top:var(--code-block-copy-inset)] [--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_8%,transparent)] [--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-error-bg:color-mix(in_oklch,var(--destructive)_8%,transparent)] [--code-block-expand-clearance:--spacing(9)] [--code-block-fold-width:--spacing(4.5)] [--code-block-font-size:0.8125rem] [--code-block-gutter-gap:--spacing(2.5)] [--code-block-gutter-width:--spacing(9)] [--code-block-header-height:--spacing(8)] [--code-block-highlight-bar:color-mix(in_oklch,var(--primary)_60%,transparent)] [--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_6%,transparent)] [--code-block-info-bg:color-mix(in_oklch,var(--info)_8%,transparent)] [--code-block-line-height:1.125rem] [--code-block-number-pad:var(--code-block-gutter-gap)] [--code-block-padding:--spacing(2)] [--code-block-warning-bg:color-mix(in_oklch,var(--warning)_10%,transparent)] bg-card bg-clip-padding border border-border dark:[--code-block-diff-add-bg:color-mix(in_oklch,var(--success)_12%,transparent)] dark:[--code-block-diff-remove-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-error-bg:color-mix(in_oklch,var(--destructive)_12%,transparent)] dark:[--code-block-highlight-bg:color-mix(in_oklch,var(--primary)_12%,transparent)] dark:[--code-block-info-bg:color-mix(in_oklch,var(--info)_12%,transparent)] dark:[--code-block-warning-bg:color-mix(in_oklch,var(--warning)_14%,transparent)] data-[gutter-channel]:[--code-block-number-pad:calc(var(--code-block-gutter-gap)+var(--code-block-fold-width))] data-[has-diff]:[--code-block-gutter-gap:--spacing(4)] data-[has-header]:[--code-block-copy-top:calc(var(--code-block-header-height)+1px+var(--code-block-copy-inset))] flex flex-col group/code-block min-w-0 relative rounded-(--code-block-radius) style-luma:[--code-block-radius:var(--radius-2xl)] style-lyra:[--code-block-radius:0px] style-maia:[--code-block-radius:var(--radius-2xl)] style-mira:[--code-block-radius:var(--radius-lg)] style-nova:[--code-block-radius:var(--radius-lg)] style-rhea:[--code-block-radius:var(--radius-xl)] style-sera:[--code-block-radius:0px] style-vega:[--code-block-radius:var(--radius-lg)] text-card-foreground text-left w-full" variant="default" hasHeader="true">
                <CodeBlockHeader className="min-h-8 px-2.5">
                  <CodeBlockTitle>
                    {"Expression"}
                  </CodeBlockTitle>
                  <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5 cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center ms-auto outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} data-position="inline" aria-label="Copy expression">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width={14} height={14} x={8} y={8} rx={2} ry={2}></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                  </button>
                </CodeBlockHeader>
                <CodeBlockContent className="flex-1 min-w-0 overflow-hidden relative rounded-[inherit]">
                  <span className="sr-only" role="status" aria-live="polite"></span>
                  <div className="[scrollbar-width:thin] focus-visible:ring-[3px] focus-visible:ring-ring/50 min-w-0 outline-none overflow-auto relative rounded-[inherit]" id="_r_8_" role="region" aria-label="text code" tabIndex={0}>
                    <pre className="[&_[data-slot=code-block-token]]:text-[color:var(--cb-c,currentColor)] break-words dark:[&_[data-slot=code-block-token]]:text-[color:var(--cb-cd,currentColor)] font-mono max-w-full min-w-0 py-(--code-block-padding) text-(length:--code-block-font-size) w-full whitespace-pre-wrap" dir="ltr" data-wrap="true" style={{"--code-block-gutter-width": "calc(2ch + var(--code-block-gutter-gap) + var(--code-block-padding))", counterReset: "cb-line 0"}}>
                      <code>
                        <span className="[[data-code-line-numbers]_&[data-gutter]]:before:content-[attr(data-gutter)] [[data-code-line-numbers]_&[data-gutter]]:before:whitespace-pre [[data-code-line-numbers]_&]:before:-ml-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:[counter-increment:cb-line] [[data-code-line-numbers]_&]:before:bg-(--code-block-bg) [[data-code-line-numbers]_&]:before:content-[counter(cb-line)] [[data-code-line-numbers]_&]:before:inline-block [[data-code-line-numbers]_&]:before:left-0 [[data-code-line-numbers]_&]:before:pl-(--code-block-padding) [[data-code-line-numbers]_&]:before:pointer-events-none [[data-code-line-numbers]_&]:before:pr-(--code-block-number-pad) [[data-code-line-numbers]_&]:before:select-none [[data-code-line-numbers]_&]:before:sticky [[data-code-line-numbers]_&]:before:tabular-nums [[data-code-line-numbers]_&]:before:text-muted-foreground/50 [[data-code-line-numbers]_&]:before:text-right [[data-code-line-numbers]_&]:before:w-(--code-block-gutter-width) [[data-code-line-numbers]_&]:before:z-10 [[data-code-line-numbers]_&]:data-[diff]:after:-left-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:data-[diff]:after:w-(--code-block-gutter-gap) [[data-code-line-numbers]_&]:pl-0 [[data-selectable]_&]:data-[active]:bg-muted/40 [[data-streaming]_&]:animate-in [[data-streaming]_&]:duration-150 [[data-streaming]_&]:ease-out [[data-streaming]_&]:fade-in-0 [[data-streaming]_&]:slide-in-from-bottom-1 block data-[blurred]:blur-[1.5px] data-[blurred]:opacity-40 data-[blurred]:transition-[opacity,filter] data-[diff=add]:after:content-['+'] data-[diff=add]:after:text-success data-[diff=add]:bg-(--code-block-diff-add-bg) data-[diff=remove]:after:content-['-'] data-[diff=remove]:after:text-destructive data-[diff=remove]:bg-(--code-block-diff-remove-bg) data-[diff]:after:absolute data-[diff]:after:left-0 data-[diff]:after:select-none data-[diff]:after:text-center data-[diff]:after:w-(--code-block-padding) data-[diff]:after:z-20 data-[highlighted]:bg-(--code-block-highlight-bg) data-[highlighted]:shadow-[inset_2px_0_0_0_var(--code-block-highlight-bar)] data-[level=error]:bg-(--code-block-error-bg) data-[level=info]:bg-(--code-block-info-bg) data-[level=warning]:bg-(--code-block-warning-bg) data-[selected]:bg-accent group-hover/code-block:data-[blurred]:blur-none group-hover/code-block:data-[blurred]:opacity-100 leading-(--code-block-line-height) min-h-(--code-block-line-height) motion-reduce:animate-none px-(--code-block-padding) relative w-full" data-code-line="1" id="_r_8_-L1" style={{counterReset: "cb-line 0"}}>
                          <span>
                            <span>
                              {"No conditions yet"}
                            </span>
                          </span>
                        </span>
                      </code>
                    </pre>
                  </div>
                </CodeBlockContent>
              </CodeBlock>
            </FieldSet>
            <FieldSet className="gap-3">
              <FieldLegend variant="label">
                {"Then"}
              </FieldLegend>
              <RadioGroup className="gap-2 grid sm:grid-cols-2" role="radiogroup" aria-label="Action">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-17-action-block" id="sheet-17-action-block-label">
                  <Field className="items-start" role="group" data-orientation="horizontal">
                    <FieldContent className="gap-0.5 min-w-0">
                      <FieldLabel className="[&_svg:not([class*=size-])]:size-4 cn-field-title items-center">
                        <span className="flex text-muted-foreground">
                          <svg className="lucide lucide-ban" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="BanIcon" tabler="IconBan" hugeicons="UnavailableIcon" phosphor="ProhibitIcon" remixicon="RiForbidLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="M4.929 4.929 19.07 19.071"></path>
                          </svg>
                        </span>
                        {"Block"}
                      </FieldLabel>
                      <FieldDescription className="text-xs">
                        {"Refuse the request with a 403"}
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem checked="" role="radio" tabIndex={0} aria-checked="true" compositeItemActive="" id="base-ui-_r_a_" aria-labelledby="sheet-17-action-block-label">
                      <span className="cn-radio-group-indicator" data-checked="">
                        <span className="cn-radio-group-indicator-icon"></span>
                      </span>
                    </RadioGroupItem>
                    <input id="sheet-17-action-block" tabIndex={-1} aria-hidden="true" type="radio" value="block" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                </FieldLabel>
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-17-action-challenge" id="sheet-17-action-challenge-label">
                  <Field className="items-start" role="group" data-orientation="horizontal">
                    <FieldContent className="gap-0.5 min-w-0">
                      <FieldLabel className="[&_svg:not([class*=size-])]:size-4 cn-field-title items-center">
                        <span className="flex text-muted-foreground">
                          <svg className="lucide lucide-puzzle" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PuzzleIcon" tabler="IconPuzzle" hugeicons="PuzzleIcon" phosphor="PuzzlePieceIcon" remixicon="RiPuzzleLine" aria-hidden="true">
                            <path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
                          </svg>
                        </span>
                        {"Challenge"}
                      </FieldLabel>
                      <FieldDescription className="text-xs">
                        {"Ask the client to prove it is human"}
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_r_d_" aria-labelledby="sheet-17-action-challenge-label"></RadioGroupItem>
                    <input id="sheet-17-action-challenge" tabIndex={-1} aria-hidden="true" type="radio" value="challenge" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                </FieldLabel>
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-17-action-allow" id="sheet-17-action-allow-label">
                  <Field className="items-start" role="group" data-orientation="horizontal">
                    <FieldContent className="gap-0.5 min-w-0">
                      <FieldLabel className="[&_svg:not([class*=size-])]:size-4 cn-field-title items-center">
                        <span className="flex text-muted-foreground">
                          <svg className="lucide lucide-circle-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CircleCheckIcon" tabler="IconCircleCheck" hugeicons="CheckmarkCircle02Icon" phosphor="CheckCircleIcon" remixicon="RiCheckboxCircleLine" aria-hidden="true">
                            <circle cx={12} cy={12} r={10}></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </span>
                        {"Allow"}
                      </FieldLabel>
                      <FieldDescription className="text-xs">
                        {"Skip every later rule and protection"}
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_r_g_" aria-labelledby="sheet-17-action-allow-label"></RadioGroupItem>
                    <input id="sheet-17-action-allow" tabIndex={-1} aria-hidden="true" type="radio" value="allow" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                </FieldLabel>
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-17-action-log" id="sheet-17-action-log-label">
                  <Field className="items-start" role="group" data-orientation="horizontal">
                    <FieldContent className="gap-0.5 min-w-0">
                      <FieldLabel className="[&_svg:not([class*=size-])]:size-4 cn-field-title items-center">
                        <span className="flex text-muted-foreground">
                          <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx={12} cy={12} r={3}></circle>
                          </svg>
                        </span>
                        {"Log"}
                      </FieldLabel>
                      <FieldDescription className="text-xs">
                        {"Record the match and keep evaluating"}
                      </FieldDescription>
                    </FieldContent>
                    <RadioGroupItem unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_r_j_" aria-labelledby="sheet-17-action-log-label"></RadioGroupItem>
                    <input id="sheet-17-action-log" tabIndex={-1} aria-hidden="true" type="radio" value="log" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                  </Field>
                </FieldLabel>
              </RadioGroup>
            </FieldSet>
            <FieldGroup className="gap-4 grid sm:grid-cols-2">
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-17-rule-expiry">
                  {"Expires"}
                </FieldLabel>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex={0} id="sheet-17-rule-expiry" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    {"Never"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_m_-hidden-input" tabIndex={-1} aria-hidden="true" value="never" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </Field>
              <Field role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-17-rule-placement">
                  {"Priority"}
                </FieldLabel>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex={0} id="sheet-17-rule-placement" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    {"Top of the list"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_p_-hidden-input" tabIndex={-1} aria-hidden="true" value="top" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </Field>
            </FieldGroup>
            <Field role="group" data-orientation="horizontal">
              <FieldContent>
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="sheet-17-rule-enabled" id="sheet-17-rule-enabled-label">
                  {"Enabled"}
                </FieldLabel>
                <FieldDescription className="text-xs">
                  {"A disabled rule keeps its place but meets nothing"}
                </FieldDescription>
              </FieldContent>
              <Switch checked="" role="switch" tabIndex={0} id="base-ui-_r_s_" aria-checked="true" size="default" aria-labelledby="sheet-17-rule-enabled-label">
                <span className="block cn-switch-thumb pointer-events-none ring-0 transition-transform" data-checked=""></span>
              </Switch>
              <input id="sheet-17-rule-enabled" tabIndex={-1} aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
            <Frame className="w-full" spacing="default">
              <header className="flex flex-row gap-3 items-center justify-between px-(--frame-panel-header-px) py-(--frame-panel-header-py)">
                <div className="flex flex-col gap-px min-w-0">
                  <div className="font-semibold text-sm">
                    {"Recent Traffic"}
                  </div>
                  <div className="tabular-nums text-muted-foreground text-xs">
                    {"Add a condition to preview matches"}
                  </div>
                </div>
              </header>
            </Frame>
          </FieldGroup>
        </div>
      </div>
      <div className="bg-muted border-t flex flex-wrap gap-2 items-center px-5 py-3 shrink-0">
        <span className="min-w-0 tabular-nums text-muted-foreground text-xs truncate" aria-live="polite">
          {"No conditions yet"}
        </span>
        <div className="flex gap-2 items-center ms-auto">
          <SheetClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-sm cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0}>
            {"Cancel"}
          </SheetClose>
          <Button type="button" tabIndex={0}>
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            {"Create Rule"}
          </Button>
        </div>
      </div>
    </SheetContent>
    </Sheet>
  </>
  )
}
