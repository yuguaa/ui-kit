import { Button } from "@/registry/bases/base/ui/button"
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
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/base/ui/toggle-group"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        Duration picker dialog
      </h1>
      <div className="flex items-center justify-center min-h-[320px]">
        <Button type="button" tabIndex="0" extracted="1">
          Launch dialog
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="sm:max-w-xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_2_" aria-describedby="base-ui-_r_3_" style={{"--nested-dialogs": "0"}}>
      <DialogHeader className="text-left">
        <div className="flex gap-3 items-start pr-8">
          <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
            <ItemMedia className="size-auto" variant="icon">
              <svg className="lucide lucide-clock" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ClockIcon" tabler="IconClock" hugeicons="ClockIcon" phosphor="ClockIcon" remixicon="RiTimeLine" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </ItemMedia>
          </Item>
          <div className="flex flex-col gap-1 min-w-0">
            <DialogTitle id="base-ui-_r_2_">
              Select duration
            </DialogTitle>
            <DialogDescription id="base-ui-_r_3_">
              Pick a start and end time or use a quick preset.
            </DialogDescription>
          </div>
        </div>
      </DialogHeader>
      <div className="flex flex-col gap-7 pt-3">
        <FieldGroup className="gap-4 grid md:grid-cols-2">
          <Field className="gap-2" role="group" data-orientation="vertical">
            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="duration-start-time">
              Start time
              <span className="text-muted-foreground">
                (optional)
              </span>
            </FieldLabel>
            <Select>
            <SelectTrigger className="w-full" type="button" tabIndex="0" id="duration-start-time" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
              <SelectValue>
                02:00 AM
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                ▼
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_4_-hidden-input" tabIndex="-1" aria-hidden="true" value="02:00" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          </Field>
          <Field className="gap-2" role="group" data-orientation="vertical">
            <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="duration-end-time">
              End time
              <span className="text-muted-foreground">
                (optional)
              </span>
            </FieldLabel>
            <Select>
            <SelectTrigger className="w-full" type="button" tabIndex="0" id="duration-end-time" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
              <SelectValue>
                02:30 AM
              </SelectValue>
              <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
                ▼
              </svg>
            </SelectTrigger>
            </Select>
            <input id="base-ui-_r_7_-hidden-input" tabIndex="-1" aria-hidden="true" value="02:30" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
          </Field>
        </FieldGroup>
        <div className="flex flex-col gap-3">
          <p className="font-medium text-sm">
            Quick duration
          </p>
          <ToggleGroup className="grid grid-cols-4 w-full" data-orientation="horizontal" aria-orientation="horizontal" role="group" variant="outline" size="sm" spacing="2" aria-label="Quick duration presets" style={{"--gap": "2"}}>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-medium group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 relative transition-colors w-full whitespace-nowrap" type="button" pressed="" aria-disabled="false" tabIndex="0" aria-pressed="true" variant="outline" size="sm" spacing="2">
              <svg className="absolute left-3 lucide lucide-check size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine" aria-hidden="true">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              <span className="min-w-0 text-center">
                30 min
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 relative transition-colors w-full whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
              <span className="min-w-0 text-center">
                2 hours
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 relative transition-colors w-full whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
              <span className="min-w-0 text-center">
                4 hours
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 relative transition-colors w-full whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
              <span className="min-w-0 text-center">
                8 hours
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 relative transition-colors w-full whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
              <span className="min-w-0 text-center">
                12 hours
              </span>
            </ToggleGroupItem>
            <ToggleGroupItem className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-toggle cn-toggle-size-sm cn-toggle-variant-outline disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-[3px] font-normal group/toggle hover:bg-muted inline-flex items-center justify-center outline-none px-3 relative transition-colors w-full whitespace-nowrap" type="button" aria-disabled="false" tabIndex="-1" aria-pressed="false" variant="outline" size="sm" spacing="2">
              <span className="min-w-0 text-center">
                1 day
              </span>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <DialogFooter className="flex-col gap-3 sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <Tooltip>
          <TooltipTrigger className="gap-1.5 inline-flex items-center outline-none text-muted-foreground text-sm w-fit" type="button" id="base-ui-_r_h_" baseUiTooltipTrigger="">
            <svg className="lucide lucide-info size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            <span>
              Quick presets update the end time.
            </span>
          </TooltipTrigger>
          </Tooltip>
        </div>
        <div className="flex gap-2 justify-end sm:w-auto w-full">
          <Button type="button" tabIndex="0">
            Cancel
          </Button>
          <Button type="button" tabIndex="0">
            Apply
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
