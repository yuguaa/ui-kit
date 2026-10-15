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
import { Field } from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Collaborator invite dialog"}
      </h1>
      <div className="flex items-center justify-center min-h-[60px]">
        <Button type="button" tabIndex="0" extracted="1">
          {"Open collaborator invite dialog"}
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="sm:max-w-2xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_2_" aria-describedby="base-ui-_r_3_" style={{"--nested-dialogs": "0"}}>
      <DialogHeader>
        <DialogTitle id="base-ui-_r_2_">
          {"Invite Collaborators"}
        </DialogTitle>
        <DialogDescription id="base-ui-_r_3_">
          {"Add each person with the access they need."}
        </DialogDescription>
      </DialogHeader>
      <form className="contents py-3">
        <div className="flex flex-col gap-2">
          <div className="gap-2 grid sm:grid-cols-[minmax(0,1fr)_15rem] sm:items-start">
            <Field className="gap-1.5" role="group" data-orientation="vertical">
              <Input id="invite-row-1-email" placeholder="Enter user email" autoComplete="email" aria-label="Email address for invite 1" type="email" value=""></Input>
            </Field>
            <Field className="gap-1.5" role="group" data-orientation="vertical">
              <Select>
              <SelectTrigger className="w-full" type="button" tabIndex="0" id="invite-row-1-role" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Role for invite 1">
                <SelectValue>
                  {"Member"}
                </SelectValue>
                <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                  <path d="m6 9 6 6 6-6"></path>
                  {"▼"}
                </svg>
              </SelectTrigger>
              </Select>
              <input id="base-ui-_r_5_-hidden-input" tabIndex="-1" aria-hidden="true" value="member" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
            </Field>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="button" tabIndex="0">
            <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            {"Add new member"}
          </Button>
        </div>
        <DialogFooter>
          <Button type="button" tabIndex="0">
            {"Cancel"}
          </Button>
          <Button type="submit" disabled="" tabIndex="0" disabled>
            <svg className="lucide lucide-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SendIcon" tabler="IconSend" hugeicons="SentIcon" phosphor="PaperPlaneTiltIcon" remixicon="RiSendInsLine" data-icon="inline-start" aria-hidden="true">
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
            {"Send invitations"}
          </Button>
        </DialogFooter>
      </form>
      <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost cn-dialog-close disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex="0">
        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
        <span className="sr-only">
          {"Close"}
        </span>
      </DialogClose>
    </DialogContent>
    </Dialog>
  </>
  )
}
