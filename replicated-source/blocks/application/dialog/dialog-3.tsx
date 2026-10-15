import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/bases/base/ui/alert"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/bases/base/ui/dialog"
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Plan cancellation dialog
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Button type="button" tabIndex="0" extracted="1">
          Open offboarding dialog
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="**:data-[slot=dialog-close]:right-3 **:data-[slot=dialog-close]:top-3 sm:max-w-2xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_2_" aria-describedby="base-ui-_r_3_" style={{"--nested-dialogs": "0"}}>
      <DialogHeader className="mb-2 ps-1 pt-1 text-left">
        <DialogTitle id="base-ui-_r_2_">
          Cancel Your Plan
        </DialogTitle>
        <DialogDescription id="base-ui-_r_3_">
          Your workspace stays active through the current billing period.
        </DialogDescription>
      </DialogHeader>
      <div className="px-1">
        <Alert className="[&>svg:not([class*=size-])]:size-4 [&>svg]:text-warning bg-warning/4 border border-warning/30 gap-y-0.5 grid grid-cols-[0_1fr] has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_[data-slot=alert-action]]:sm:row-end-3 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:[&_svg]:translate-y-0.5 has-[>[data-slot=alert-title]+[data-slot=alert-description]]:items-start has-[>svg]:gap-x-2.5 has-[>svg]:grid-cols-[calc(var(--spacing)*3)_1fr] items-center mb-3 px-3 py-2.5 style-luma:rounded-2xl style-lyra:rounded-none style-maia:rounded-lg style-mira:rounded-lg style-nova:rounded-lg style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-lg text-sm" role="alert">
          <svg className="lucide lucide-triangle-alert" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="TriangleAlertIcon" tabler="IconAlertTriangle" hugeicons="Alert02Icon" phosphor="WarningIcon" remixicon="RiAlertLine" aria-hidden="true">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
          <AlertTitle className="col-start-2 font-medium line-clamp-1 min-h-4 tracking-tight">
            Shared access pauses after expiry.
          </AlertTitle>
          <AlertDescription className="[&_p]:leading-relaxed col-start-2 gap-1 grid justify-items-start text-muted-foreground text-sm">
            Team access stays on until the current period ends.
          </AlertDescription>
          <AlertAction className="flex gap-1.5 max-sm:col-start-2 max-sm:justify-start max-sm:mt-2 sm:col-start-3 sm:justify-end sm:row-start-1 sm:self-center">
            <Button type="button" tabIndex="0">
              Dismiss
            </Button>
            <Button type="button" tabIndex="0">
              Manage
            </Button>
          </AlertAction>
        </Alert>
      </div>
      <FieldSet className="gap-0 mb-1 px-1">
        <FieldLegend className="sr-only" variant="legend">
          Select cancellation reasons
        </FieldLegend>
        <FieldGroup className="gap-3 grid sm:grid-cols-2">
          <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 peer-disabled:cursor-not-allowed select-none w-full" htmlFor="plan-cancellation-single-launch" id="plan-cancellation-single-launch-label">
            <Field className="gap-4 hover:bg-muted/30 justify-between px-3 py-2 rounded-lg transition-colors" role="group" data-orientation="horizontal">
              <FieldContent className="min-w-0 pr-2">
                <FieldLabel className="cn-field-title font-medium items-center text-sm">
                  Only needed one launch
                </FieldLabel>
              </FieldContent>
              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_4_" aria-checked="false" aria-label="Only needed one launch" aria-labelledby="plan-cancellation-single-launch-label"></Checkbox>
              <input id="plan-cancellation-single-launch" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
          </FieldLabel>
          <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 peer-disabled:cursor-not-allowed select-none w-full" htmlFor="plan-cancellation-budget" id="plan-cancellation-budget-label">
            <Field className="gap-4 hover:bg-muted/30 justify-between px-3 py-2 rounded-lg transition-colors" role="group" data-orientation="horizontal">
              <FieldContent className="min-w-0 pr-2">
                <FieldLabel className="cn-field-title font-medium items-center text-sm">
                  Budget changed
                </FieldLabel>
              </FieldContent>
              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_7_" aria-checked="false" aria-label="Budget changed" aria-labelledby="plan-cancellation-budget-label"></Checkbox>
              <input id="plan-cancellation-budget" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
          </FieldLabel>
          <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 peer-disabled:cursor-not-allowed select-none w-full" htmlFor="plan-cancellation-missing-patterns" id="plan-cancellation-missing-patterns-label">
            <Field className="gap-4 hover:bg-muted/30 justify-between px-3 py-2 rounded-lg transition-colors" role="group" data-orientation="horizontal">
              <FieldContent className="min-w-0 pr-2">
                <FieldLabel className="cn-field-title font-medium items-center text-sm">
                  Missing a few patterns
                </FieldLabel>
              </FieldContent>
              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_a_" aria-checked="false" aria-label="Missing a few patterns" aria-labelledby="plan-cancellation-missing-patterns-label"></Checkbox>
              <input id="plan-cancellation-missing-patterns" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
          </FieldLabel>
          <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 peer-disabled:cursor-not-allowed select-none w-full" htmlFor="plan-cancellation-internal-kit" id="plan-cancellation-internal-kit-label">
            <Field className="gap-4 hover:bg-muted/30 justify-between px-3 py-2 rounded-lg transition-colors" role="group" data-orientation="horizontal">
              <FieldContent className="min-w-0 pr-2">
                <FieldLabel className="cn-field-title font-medium items-center text-sm">
                  Moved back in-house
                </FieldLabel>
              </FieldContent>
              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_d_" aria-checked="false" aria-label="Moved back in-house" aria-labelledby="plan-cancellation-internal-kit-label"></Checkbox>
              <input id="plan-cancellation-internal-kit" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
          </FieldLabel>
          <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 peer-disabled:cursor-not-allowed select-none w-full" htmlFor="plan-cancellation-not-our-stack" id="plan-cancellation-not-our-stack-label">
            <Field className="gap-4 hover:bg-muted/30 justify-between px-3 py-2 rounded-lg transition-colors" role="group" data-orientation="horizontal">
              <FieldContent className="min-w-0 pr-2">
                <FieldLabel className="cn-field-title font-medium items-center text-sm">
                  Not the right stack fit
                </FieldLabel>
              </FieldContent>
              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_g_" aria-checked="false" aria-label="Not the right stack fit" aria-labelledby="plan-cancellation-not-our-stack-label"></Checkbox>
              <input id="plan-cancellation-not-our-stack" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
          </FieldLabel>
          <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 peer-disabled:cursor-not-allowed select-none w-full" htmlFor="plan-cancellation-figma-parity" id="plan-cancellation-figma-parity-label">
            <Field className="gap-4 hover:bg-muted/30 justify-between px-3 py-2 rounded-lg transition-colors" role="group" data-orientation="horizontal">
              <FieldContent className="min-w-0 pr-2">
                <FieldLabel className="cn-field-title font-medium items-center text-sm">
                  Wanted better Figma parity
                </FieldLabel>
              </FieldContent>
              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_j_" aria-checked="false" aria-label="Wanted better Figma parity" aria-labelledby="plan-cancellation-figma-parity-label"></Checkbox>
              <input id="plan-cancellation-figma-parity" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
          </FieldLabel>
          <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 peer-disabled:cursor-not-allowed select-none w-full" htmlFor="plan-cancellation-quality-consistency" id="plan-cancellation-quality-consistency-label">
            <Field className="gap-4 hover:bg-muted/30 justify-between px-3 py-2 rounded-lg transition-colors" role="group" data-orientation="horizontal">
              <FieldContent className="min-w-0 pr-2">
                <FieldLabel className="cn-field-title font-medium items-center text-sm">
                  Output felt inconsistent
                </FieldLabel>
              </FieldContent>
              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_m_" aria-checked="false" aria-label="Output felt inconsistent" aria-labelledby="plan-cancellation-quality-consistency-label"></Checkbox>
              <input id="plan-cancellation-quality-consistency" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
          </FieldLabel>
          <FieldLabel className="cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center min-w-0 peer-disabled:cursor-not-allowed select-none w-full" htmlFor="plan-cancellation-other" id="plan-cancellation-other-label">
            <Field className="gap-4 hover:bg-muted/30 justify-between px-3 py-2 rounded-lg transition-colors" role="group" data-orientation="horizontal">
              <FieldContent className="min-w-0 pr-2">
                <FieldLabel className="cn-field-title font-medium items-center text-sm">
                  Something else
                </FieldLabel>
              </FieldContent>
              <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_p_" aria-checked="false" aria-label="Something else" aria-labelledby="plan-cancellation-other-label"></Checkbox>
              <input id="plan-cancellation-other" tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
          </FieldLabel>
        </FieldGroup>
      </FieldSet>
      <Field className="mb-3 px-1" role="group" data-orientation="vertical">
        <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="plan-cancellation-feedback">
          Additional feedback
        </FieldLabel>
        <Textarea className="border min-h-24 px-3 py-2 resize-none rounded-lg" id="plan-cancellation-feedback" placeholder="Anything we should improve before you leave NeUI?"></Textarea>
      </Field>
      <DialogFooter className="px-5 sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3 items-center text-muted-foreground text-sm">
          <Tooltip>
          <TooltipTrigger className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring gap-1.5 hover:text-foreground inline-flex items-center outline-none rounded-sm transition-colors" type="button" id="base-ui-_r_t_" baseUiTooltipTrigger="">
            <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            <span>
              Billing stays active
            </span>
          </TooltipTrigger>
          </Tooltip>
        </div>
        <div className="flex gap-2 justify-end sm:w-auto w-full">
          <Button type="button" tabIndex="0">
            Keep plan
          </Button>
          <Button type="button" disabled="" tabIndex="0" disabled>
            Cancel plan
          </Button>
        </div>
      </DialogFooter>
      <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost cn-dialog-close disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span className="sr-only">
          Close
        </span>
      </DialogClose>
    </DialogContent>
    </Dialog>
  </>
  )
}
