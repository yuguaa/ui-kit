import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="bg-background flex flex-col justify-center min-h-svh px-4 py-10 sm:px-6 text-foreground w-full">
      <main className="flex flex-col max-w-2xl mx-auto w-full">
        <Empty className="flex-none gap-0 pb-12">
          <EmptyHeader className="gap-5 max-w-md">
            <div className="[&_svg]:pointer-events-none [&_svg]:shrink-0 bg-transparent cn-empty-media cn-empty-media-icon flex items-center justify-center shrink-0 size-auto" data-variant="icon">
              <Item className="bg-primary p-0 size-10 text-primary-foreground" variant="default" size="default" aria-hidden="true">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="size-5" width={50} height={50} viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={70.634} cy={29.8334} r={4.69799} fill="currentColor"></circle>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                  </svg>
                </ItemMedia>
              </Item>
            </div>
            <EmptyTitle className="text-2xl tracking-tight">
              {"What should I look through?"}
            </EmptyTitle>
          </EmptyHeader>
        </Empty>
        <form>
          <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none sr-only" htmlFor="ai-chat-5-composer">
            {"Message NeUI Chat"}
          </FieldLabel>
          <Frame spacing="sm">
            <FramePanel className="p-0">
              <InputGroup className="bg-transparent border-0 rounded-(--frame-panel-radius)" role="group">
                <textarea className="cn-input-group-textarea cn-textarea disabled:cursor-not-allowed disabled:opacity-50 field-sizing-content flex flex-1 max-h-40 min-h-16 outline-none placeholder:text-muted-foreground resize-none w-full" id="ai-chat-5-composer" placeholder="Catch me up on the 3.4 release since Monday"></textarea>
                <InputGroupAddon className="gap-1" role="group" data-align="block-end">
                  <DropdownMenu>
                  <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-ghost cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none rounded-full select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} size="icon-sm" aria-label="Attach a file" aria-haspopup="menu" id="base-ui-_r_3_" aria-expanded="false">
                    <svg className="lucide lucide-paperclip" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PaperclipIcon" tabler="IconPaperclip" hugeicons="Attachment02Icon" phosphor="PaperclipIcon" remixicon="RiAttachment2" aria-hidden="true">
                      <path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
                    </svg>
                  </DropdownMenuTrigger>
                  </DropdownMenu>
                  <div className="flex gap-1 items-center ms-auto">
                    <Select>
                    <SelectTrigger className="border-transparent dark:bg-transparent dark:hover:bg-accent focus-visible:ring-0 gap-1 h-7 hover:bg-accent hover:text-foreground min-w-0 px-1.5 shadow-none text-muted-foreground w-auto" type="button" tabIndex={0} id="base-ui-_r_5_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="sm" aria-label="Answer depth">
                      <SelectValue className="text-xs truncate">
                        {"Auto"}
                      </SelectValue>
                      <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                        {"▼"}
                      </svg>
                    </SelectTrigger>
                    </Select>
                    <input id="base-ui-_r_5_-hidden-input" tabIndex={-1} aria-hidden="true" value="auto" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                    <Tooltip>
                    <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-default cn-button-variant-default cn-input-group-button cn-input-group-button-size-icon-sm disabled:opacity-50 disabled:pointer-events-none flex group/button items-center justify-center outline-none rounded-full select-none shadow-none shrink-0 transition-all whitespace-nowrap" type="submit" tabIndex={0} size="icon-sm" aria-label="Send message" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                      <svg className="lucide lucide-arrow-up" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowUpIcon" tabler="IconArrowUp" hugeicons="ArrowUp02Icon" phosphor="ArrowUpIcon" remixicon="RiArrowUpLine" aria-hidden="true">
                        <path d="m5 12 7-7 7 7"></path>
                        <path d="M12 19V5"></path>
                      </svg>
                    </TooltipTrigger>
                    </Tooltip>
                  </div>
                </InputGroupAddon>
              </InputGroup>
            </FramePanel>
            <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) py-(--frame-panel-footer-py)">
              <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-between">
                <p className="min-w-0 text-muted-foreground text-xs truncate">
                  {"Reading 4 of 9 apps"}
                </p>
                <div className="flex flex-wrap gap-2 items-center min-w-0">
                  <ul className="flex flex-wrap gap-0.5 items-center" aria-label="Connected apps">
                    <li className="flex group/app items-center justify-center relative size-7">
                      <svg className="h-4 w-auto" aria-hidden="true" viewBox="0 0 256 228">
                        <path fill="#1E8E3E" d="M78.8 0 0 136.4l39.4 68.2 78.8-136.4L78.8 0Z"></path>
                        <path fill="#FABB05" d="M78.8 0h98.4L256 136.4h-78.8L98.4 0H78.8Z"></path>
                        <path fill="#4285F4" d="M39.4 204.6h157.2L256 136.4H98.4L39.4 204.6Z"></path>
                        <path fill="#34A853" d="M0 136.4h98.4l-59 68.2L0 136.4Z"></path>
                        <path fill="#1967D2" d="M177.2 136.4H256l-59.4 68.2-19.4-68.2Z"></path>
                      </svg>
                      <Button className="-end-0.5 -top-0.5 absolute focus-visible:opacity-100 group-hover/app:opacity-100 opacity-0 pointer-coarse:opacity-100 ring-2 ring-background rounded-full shadow-sm size-4 transition-opacity" type="button" tabIndex={0} aria-label="Disconnect Google Drive">
                        <svg className="lucide lucide-x size-2.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                    </li>
                    <li className="flex group/app items-center justify-center relative size-7">
                      <svg className="h-4 w-auto" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                        <g clipRule="evenodd" fillRule="evenodd">
                          <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                          <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                          <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                          <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                        </g>
                      </svg>
                      <Button className="-end-0.5 -top-0.5 absolute focus-visible:opacity-100 group-hover/app:opacity-100 opacity-0 pointer-coarse:opacity-100 ring-2 ring-background rounded-full shadow-sm size-4 transition-opacity" type="button" tabIndex={0} aria-label="Disconnect Slack">
                        <svg className="lucide lucide-x size-2.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                    </li>
                    <li className="flex group/app items-center justify-center relative size-7">
                      <svg className="h-4 w-auto" aria-hidden="true" viewBox="0 0 512 512" fill="none">
                        <g clipPath="url(#clip0_5072_3766)">
                          <path d="M390.736 121.264H121.264V390.736H390.736V121.264Z" fill="white"></path>
                          <path d="M390.736 512L512 390.736L451.368 380.392L390.736 390.736L379.67 446.196L390.736 512Z" fill="#EA4335"></path>
                          <path d="M0 390.736V471.578C0 493.912 18.088 512 40.42 512H121.264L133.714 451.368L121.264 390.736L55.198 380.392L0 390.736Z" fill="#188038"></path>
                          <path d="M512 121.264V40.42C512 18.088 493.912 0 471.58 0H390.736C383.36 30.072 379.671 52.2027 379.67 66.392C379.67 80.58 383.359 98.8707 390.736 121.264C417.556 128.944 437.767 132.784 451.368 132.784C464.969 132.784 485.18 128.945 512 121.264Z" fill="#1967D2"></path>
                          <path d="M512 121.264H390.736V390.736H512V121.264Z" fill="#FBBC04"></path>
                          <path d="M390.736 390.736H121.264V512H390.736V390.736Z" fill="#34A853"></path>
                          <path d="M390.736 0H40.422C18.088 0 0 18.088 0 40.42V390.736H121.264V121.264H390.736V0Z" fill="#4285F4"></path>
                          <path d="M176.54 330.308C166.468 323.504 159.494 313.568 155.688 300.428L179.066 290.796C181.186 298.88 184.891 305.145 190.182 309.592C195.436 314.038 201.836 316.228 209.314 316.228C216.959 316.228 223.527 313.903 229.018 309.254C234.51 304.606 237.272 298.678 237.272 291.504C237.272 284.16 234.375 278.164 228.582 273.516C222.788 268.868 215.512 266.544 206.822 266.544H193.314V243.404H205.44C212.917 243.404 219.216 241.382 224.336 237.338C229.456 233.298 232.016 227.772 232.016 220.732C232.016 214.468 229.726 209.482 225.146 205.744C220.566 202.004 214.77 200.118 207.73 200.118C200.858 200.118 195.402 201.938 191.36 205.608C187.319 209.289 184.282 213.937 182.534 219.116L159.394 209.482C162.458 200.792 168.084 193.112 176.336 186.476C184.588 179.84 195.132 176.506 207.932 176.506C217.398 176.506 225.92 178.326 233.466 181.996C241.01 185.668 246.938 190.754 251.216 197.222C255.496 203.722 257.616 210.998 257.616 219.082C257.616 227.334 255.63 234.308 251.656 240.034C247.682 245.76 242.796 250.138 237.002 253.204V254.584C244.483 257.669 250.982 262.735 255.798 269.238C260.682 275.806 263.142 283.654 263.142 292.818C263.142 301.978 260.816 310.164 256.168 317.338C251.52 324.514 245.088 330.172 236.934 334.282C228.75 338.392 219.554 340.482 209.348 340.482C197.524 340.514 186.612 337.112 176.54 330.308ZM320.132 214.298L294.466 232.858L281.632 213.39L327.678 180.176H345.328V336.842H320.132V214.298Z" fill="#4285F4"></path>
                        </g>
                        <defs>
                          <clippath id="clip0_5072_3766">
                            <rect width={512} height={512} fill="white"></rect>
                          </clippath>
                        </defs>
                      </svg>
                      <Button className="-end-0.5 -top-0.5 absolute focus-visible:opacity-100 group-hover/app:opacity-100 opacity-0 pointer-coarse:opacity-100 ring-2 ring-background rounded-full shadow-sm size-4 transition-opacity" type="button" tabIndex={0} aria-label="Disconnect Google Calendar">
                        <svg className="lucide lucide-x size-2.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                    </li>
                    <li className="flex group/app items-center justify-center relative size-7">
                      <svg className="h-4 w-auto" aria-hidden="true" fill="none" viewBox="0 0 128 128">
                        <path fill="#0061FE" d="M0 0h128v128H0z"></path>
                        <path fill="#F7F5F2" d="M43.7 32 23.404 44.75 43.701 57.5 64 44.75 84.3 57.5l20.298-12.75L84.299 32 64.002 44.75 43.7 32Zm0 51L23.404 70.25 43.701 57.5 64 70.25 43.702 83Zm20.302-12.75L84.299 57.5l20.298 12.75L84.299 83 64.002 70.25Zm0 29.75L43.7 87.25 64 74.5l20.3 12.75L64.002 100Z"></path>
                      </svg>
                      <Button className="-end-0.5 -top-0.5 absolute focus-visible:opacity-100 group-hover/app:opacity-100 opacity-0 pointer-coarse:opacity-100 ring-2 ring-background rounded-full shadow-sm size-4 transition-opacity" type="button" tabIndex={0} aria-label="Disconnect Dropbox">
                        <svg className="lucide lucide-x size-2.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine" aria-hidden="true">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                    </li>
                  </ul>
                  <Tooltip>
                  <TooltipTrigger className="[&>svg:last-child]:hidden [&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-outline cn-combobox-trigger disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Add an app" id="base-ui-_r_d_" role="combobox" aria-expanded="false" aria-haspopup="dialog" baseUiTooltipTrigger="">
                    <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                    <svg className="cn-combobox-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </TooltipTrigger>
                  </Tooltip>
                  <input id="base-ui-_r_a_-hidden-input" tabIndex={-1} aria-hidden="true" value="" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                </div>
              </div>
            </footer>
          </Frame>
        </form>
        <div className="mt-4">
          <RadioGroup className="@container/field-group cn-field-group flex flex-row flex-wrap gap-x-2 gap-y-4 group/field-group justify-center" role="radiogroup" aria-label="What to do">
            <FieldLabel className="cn-label cursor-pointer dark:has-data-checked:bg-primary/10 group-data-[disabled=true]:pointer-events-none has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50 has-data-checked:bg-primary/5 has-data-checked:border-primary/50 items-center p-0 peer-disabled:cursor-not-allowed relative select-none transition-colors w-auto!" htmlFor="ai-chat-5-mode-digest" id="ai-chat-5-mode-digest-label">
              <Field className="h-8 px-3 py-0" role="group" data-orientation="horizontal">
                <RadioGroupItem className="sr-only" checked="" role="radio" tabIndex={0} aria-checked="true" compositeItemActive="" id="base-ui-_r_g_" aria-labelledby="ai-chat-5-mode-digest-label">
                  <span className="cn-radio-group-indicator" data-checked="">
                    <span className="cn-radio-group-indicator-icon"></span>
                  </span>
                </RadioGroupItem>
                <input id="ai-chat-5-mode-digest" tabIndex={-1} aria-hidden="true" type="radio" value="digest" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <FieldLabel className="cn-field-title gap-1.5 items-center">
                  <svg className="lucide lucide-list-checks size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                    <path d="M13 5h8"></path>
                    <path d="M13 12h8"></path>
                    <path d="M13 19h8"></path>
                    <path d="m3 17 2 2 4-4"></path>
                    <path d="m3 7 2 2 4-4"></path>
                  </svg>
                  {"Digest"}
                </FieldLabel>
              </Field>
            </FieldLabel>
            <FieldLabel className="cn-label cursor-pointer dark:has-data-checked:bg-primary/10 group-data-[disabled=true]:pointer-events-none has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50 has-data-checked:bg-primary/5 has-data-checked:border-primary/50 items-center p-0 peer-disabled:cursor-not-allowed relative select-none transition-colors w-auto!" htmlFor="ai-chat-5-mode-draft" id="ai-chat-5-mode-draft-label">
              <Field className="h-8 px-3 py-0" role="group" data-orientation="horizontal">
                <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_r_j_" aria-labelledby="ai-chat-5-mode-draft-label"></RadioGroupItem>
                <input id="ai-chat-5-mode-draft" tabIndex={-1} aria-hidden="true" type="radio" value="draft" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <FieldLabel className="cn-field-title gap-1.5 items-center">
                  <svg className="lucide lucide-pencil size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" aria-hidden="true">
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                  {"Draft"}
                </FieldLabel>
              </Field>
            </FieldLabel>
            <FieldLabel className="cn-label cursor-pointer dark:has-data-checked:bg-primary/10 group-data-[disabled=true]:pointer-events-none has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50 has-data-checked:bg-primary/5 has-data-checked:border-primary/50 items-center p-0 peer-disabled:cursor-not-allowed relative select-none transition-colors w-auto!" htmlFor="ai-chat-5-mode-recap" id="ai-chat-5-mode-recap-label">
              <Field className="h-8 px-3 py-0" role="group" data-orientation="horizontal">
                <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_r_m_" aria-labelledby="ai-chat-5-mode-recap-label"></RadioGroupItem>
                <input id="ai-chat-5-mode-recap" tabIndex={-1} aria-hidden="true" type="radio" value="recap" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <FieldLabel className="cn-field-title gap-1.5 items-center">
                  <svg className="lucide lucide-video size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="VideoIcon" tabler="IconVideo" hugeicons="Video02Icon" phosphor="VideoCameraIcon" remixicon="RiVideoOnLine" aria-hidden="true">
                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                    <rect x={2} y={6} width={14} height={12} rx={2}></rect>
                  </svg>
                  {"Recap"}
                </FieldLabel>
              </Field>
            </FieldLabel>
            <FieldLabel className="cn-label cursor-pointer dark:has-data-checked:bg-primary/10 group-data-[disabled=true]:pointer-events-none has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/50 has-data-checked:bg-primary/5 has-data-checked:border-primary/50 items-center p-0 peer-disabled:cursor-not-allowed relative select-none transition-colors w-auto!" htmlFor="ai-chat-5-mode-audit" id="ai-chat-5-mode-audit-label">
              <Field className="h-8 px-3 py-0" role="group" data-orientation="horizontal">
                <RadioGroupItem className="sr-only" unchecked="" role="radio" tabIndex={-1} aria-checked="false" id="base-ui-_r_p_" aria-labelledby="ai-chat-5-mode-audit-label"></RadioGroupItem>
                <input id="ai-chat-5-mode-audit" tabIndex={-1} aria-hidden="true" type="radio" value="audit" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                <FieldLabel className="cn-field-title gap-1.5 items-center">
                  <svg className="lucide lucide-search size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                    <path d="m21 21-4.34-4.34"></path>
                    <circle cx={11} cy={11} r={8}></circle>
                  </svg>
                  {"Audit"}
                </FieldLabel>
              </Field>
            </FieldLabel>
          </RadioGroup>
        </div>
      </main>
    </div>
  )
}
