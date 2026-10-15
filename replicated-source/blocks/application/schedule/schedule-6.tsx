import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ComboboxChip,
  ComboboxChips,
} from "@/registry/bases/base/ui/combobox"
import {
  Field,
  FieldContent,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Popover,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Textarea } from "@/registry/bases/base/ui/textarea"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center md:p-20 p-10 w-full">
      <Frame className="max-w-lg w-full">
        <header className="flex flex-col gap-(--frame-panel-header-gap) px-(--frame-panel-header-px) px-2! py-(--frame-panel-header-py) py-1!">
          <div className="font-semibold text-sm">
            {"Create schedule"}
          </div>
          <div className="text-muted-foreground text-sm">
            {"Complete the form below to create a schedule"}
          </div>
        </header>
        <FramePanel className="p-0!">
          <div className="flex flex-col gap-5 p-5">
            <Field className="gap-1" role="group" data-orientation="vertical">
              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                {"Schedule name"}
              </FieldLabel>
              <FieldContent>
                <InputGroup role="group">
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_0_" placeholder="Enter the schedule name" value="" />
                </InputGroup>
              </FieldContent>
            </Field>
            <Field className="gap-1" role="group" data-orientation="vertical">
              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                {"Members"}
              </FieldLabel>
              <ComboboxChips className="has-data-[slot=combobox-chip]:pl-1" role="toolbar">
                <ComboboxChip className="gap-1.5 rounded-full" tabIndex={-1}>
                  <Avatar className="size-4" size="default">
                    <AvatarImage alt="Michael Rodriguez" src="https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=96&h=96&dpr=2&q=80"></AvatarImage>
                  </Avatar>
                  {"Michael Rodriguez"}
                  <button className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost cn-combobox-chip-remove disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={-1} aria-disabled="false" data-extracted="1">
                    <svg className="cn-combobox-chip-indicator-icon lucide lucide-x pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </ComboboxChip>
                <input className="cn-combobox-chip-input flex-1 min-w-16 outline-none" autoComplete="off" spellCheck="false" autocorrect="off" autocapitalize="none" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-autocomplete="list" id="base-ui-_r_1_" placeholder="Add members..." type="text" value="" />
              </ComboboxChips>
              <input id="base-ui-_r_1_-hidden-input" tabIndex={-1} aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
            <Field className="gap-1" role="group" data-orientation="vertical">
              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                {"Date"}
              </FieldLabel>
              <FieldContent>
                <Popover>
                <PopoverTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-outline disabled:opacity-50 disabled:pointer-events-none font-normal group/button inline-flex items-center justify-between outline-none select-none shrink-0 transition-all w-full whitespace-nowrap" type="button" tabIndex={0} baseUiClickTrigger="" id="base-ui-_r_5_" aria-haspopup="dialog" aria-expanded="false">
                  <span className="text-muted-foreground truncate">
                    {"Select the date"}
                  </span>
                  <svg className="lucide lucide-calendar opacity-30 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CalendarIcon" tabler="IconCalendarEvent" hugeicons="Calendar04Icon" phosphor="CalendarBlankIcon" remixicon="RiCalendarLine" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width={18} height={18} x={3} y={4} rx={2}></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </PopoverTrigger>
                </Popover>
              </FieldContent>
            </Field>
            <div className="gap-5 grid md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="start-time">
                  {"Start time"}
                </Label>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex={0} id="base-ui-_r_6_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    {"09:00 AM"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_6_-hidden-input" tabIndex={-1} aria-hidden="true" value="09:00" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="end-time">
                  {"End time"}
                </Label>
                <Select>
                <SelectTrigger className="w-full" type="button" tabIndex={0} id="base-ui-_r_9_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default">
                  <SelectValue>
                    {"10:00 AM"}
                  </SelectValue>
                  <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                    {"▼"}
                  </svg>
                </SelectTrigger>
                </Select>
                <input id="base-ui-_r_9_-hidden-input" tabIndex={-1} aria-hidden="true" value="10:00" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
              </div>
            </div>
            <div className="w-full">
              <div className="border border-dashed border-muted-foreground/25 flex gap-3 hover:border-muted-foreground/50 items-center p-4 rounded-lg transition-colors">
                <input className="sr-only" accept="image/*" multiple type="file" />
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-plus size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  {"Add files"}
                </Button>
                <div className="flex flex-1 gap-2 items-center">
                  <p className="text-muted-foreground text-sm">
                    {"Drop files here (max 3 files)"}
                  </p>
                </div>
              </div>
            </div>
            <Field className="gap-1" role="group" data-orientation="vertical">
              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                {"Add link"}
              </FieldLabel>
              <FieldContent>
                <InputGroup role="group">
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_c_" placeholder="Copy paste in here" value="" />
                  <InputGroupAddon role="group" data-align="inline-end">
                    <svg className="lucide lucide-link opacity-60 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </InputGroupAddon>
                </InputGroup>
              </FieldContent>
            </Field>
            <Field className="gap-1" role="group" data-orientation="vertical">
              <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none">
                {"Description"}
              </FieldLabel>
              <FieldContent>
                <Textarea placeholder="(e.g: Work from mountain)" rows={3}></Textarea>
              </FieldContent>
            </Field>
          </div>
          <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
          <div className="flex gap-5 px-5 py-2.5">
            <Button className="flex-1" type="button" tabIndex={0}>
              {"Cancel"}
            </Button>
            <Button className="flex-1" type="button" tabIndex={0}>
              {"Create schedule"}
            </Button>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
