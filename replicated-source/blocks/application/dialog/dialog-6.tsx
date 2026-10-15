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
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"App connection dialog"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Button type="button" tabIndex={0} extracted="1">
          {"Open app connector"}
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="**:data-[slot=dialog-close]:right-3 **:data-[slot=dialog-close]:top-3 flex flex-col max-w-[calc(100vw-1.5rem)] shadow-none sm:max-w-xl" data-open="" tabIndex={-1} baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_2_" aria-describedby="base-ui-_r_3_" style={{"--nested-dialogs": "0"}}>
      <DialogHeader>
        <DialogTitle id="base-ui-_r_2_">
          {"Add a workspace app"}
        </DialogTitle>
        <DialogDescription id="base-ui-_r_3_">
          {"Choose one source to connect."}
        </DialogDescription>
      </DialogHeader>
      <div className="shrink-0">
        <InputGroup role="group">
          <InputGroupAddon role="group" data-align="inline-start">
            <svg className="lucide lucide-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
              <path d="m21 21-4.34-4.34"></path>
              <circle cx={11} cy={11} r={8}></circle>
            </svg>
          </InputGroupAddon>
          <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_4_" placeholder="Search integrations" aria-label="Search integrations" autoComplete="off" value="" />
          <InputGroupAddon role="group" data-align="inline-end">
            <Kbd>
              {"⌘K"}
            </Kbd>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="flex-1 flex-col grid min-h-0">
        <ScrollArea className="flex-1 max-h-[70vh] min-h-0" role="presentation" style={{position: "relative", "--scroll-area-corner-height": "0px", "--scroll-area-corner-width": "0px"}}>
          <div className="base-ui-disable-scrollbar cn-scroll-area-viewport focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50 outline-none rounded-[inherit] size-full transition-[color,box-shadow]" role="presentation" data-id="base-ui-_r_5_-viewport" tabIndex={-1} style={{overflow: "scroll", "--scroll-area-overflow-x-start": "0px", "--scroll-area-overflow-x-end": "0px", "--scroll-area-overflow-y-start": "0px", "--scroll-area-overflow-y-end": "0px"}}>
            <div className="gap-3 grid grid-cols-2 sm:grid-cols-3">
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-claude" id="connect-app-claude-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 257">
                        <path fill="#D97757" d="m50.228 170.321 50.357-28.257.843-2.463-.843-1.361h-2.462l-8.426-.518-28.775-.778-24.952-1.037-24.175-1.296-6.092-1.297L0 125.796l.583-3.759 5.12-3.434 7.324.648 16.202 1.101 24.304 1.685 17.629 1.037 26.118 2.722h4.148l.583-1.685-1.426-1.037-1.101-1.037-25.147-17.045-27.22-18.017-14.258-10.37-7.713-5.25-3.888-4.925-1.685-10.758 7-7.713 9.397.649 2.398.648 9.527 7.323 20.35 15.75L94.817 91.9l3.889 3.24 1.555-1.102.195-.777-1.75-2.917-14.453-26.118-15.425-26.572-6.87-11.018-1.814-6.61c-.648-2.723-1.102-4.991-1.102-7.778l7.972-10.823L71.42 0 82.05 1.426l4.472 3.888 6.61 15.101 10.694 23.786 16.591 32.34 4.861 9.592 2.592 8.879.973 2.722h1.685v-1.556l1.36-18.211 2.528-22.36 2.463-28.776.843-8.1 4.018-9.722 7.971-5.25 6.222 2.981 5.12 7.324-.713 4.73-3.046 19.768-5.962 30.98-3.889 20.739h2.268l2.593-2.593 10.499-13.934 17.628-22.036 7.778-8.749 9.073-9.657 5.833-4.601h11.018l8.1 12.055-3.628 12.443-11.342 14.388-9.398 12.184-13.48 18.147-8.426 14.518.778 1.166 2.01-.194 30.46-6.481 16.462-2.982 19.637-3.37 8.88 4.148.971 4.213-3.5 8.62-20.998 5.184-24.628 4.926-36.682 8.685-.454.324.519.648 16.526 1.555 7.065.389h17.304l32.21 2.398 8.426 5.574 5.055 6.805-.843 5.184-12.962 6.611-17.498-4.148-40.83-9.721-14-3.5h-1.944v1.167l11.666 11.406 21.387 19.314 26.767 24.887 1.36 6.157-3.434 4.86-3.63-.518-23.526-17.693-9.073-7.972-20.545-17.304h-1.36v1.814l4.73 6.935 25.017 37.59 1.296 11.536-1.814 3.76-6.481 2.268-7.13-1.297-14.647-20.544-15.1-23.138-12.185-20.739-1.49.843-7.194 77.448-3.37 3.953-7.778 2.981-6.48-4.925-3.436-7.972 3.435-15.749 4.148-20.544 3.37-16.333 3.046-20.285 1.815-6.74-.13-.454-1.49.194-15.295 20.999-23.267 31.433-18.406 19.702-4.407 1.75-7.648-3.954.713-7.064 4.277-6.286 25.47-32.405 15.36-20.092 9.917-11.6-.065-1.686h-.583L44.07 198.125l-12.055 1.555-5.185-4.86.648-7.972 2.463-2.593 20.35-13.999-.064.065Z"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_6_" aria-checked="false" aria-labelledby="connect-app-claude-label"></Checkbox>
                  <input id="connect-app-claude" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-claude" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"Claude"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Track model usage"}
                  </p>
                </div>
              </label>
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-openai" id="connect-app-openai-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <span className="dark:hidden" aria-hidden="true">
                        <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                          <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                        </svg>
                      </span>
                      <span className="dark:block hidden" aria-hidden="true">
                        <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                          <path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                        </svg>
                      </span>
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_9_" aria-checked="false" aria-labelledby="connect-app-openai-label"></Checkbox>
                  <input id="connect-app-openai" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-openai" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"OpenAI"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Research and model runs"}
                  </p>
                </div>
              </label>
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-cursor" id="connect-app-cursor-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <span className="dark:hidden" aria-hidden="true">
                        <svg className="size-5" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                          <path d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                        </svg>
                      </span>
                      <span className="dark:block hidden" aria-hidden="true">
                        <svg className="size-5" aria-hidden="true" id="Ebene_1" version="1.1" viewBox="0 0 466.73 532.09">
                          <path fill="#fff" d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"></path>
                        </svg>
                      </span>
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_c_" aria-checked="false" aria-labelledby="connect-app-cursor-label"></Checkbox>
                  <input id="connect-app-cursor" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-cursor" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"Cursor"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Sync coding activity"}
                  </p>
                </div>
              </label>
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-google-calendar" id="connect-app-google-calendar-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-5" aria-hidden="true" viewBox="0 0 512 512" fill="none">
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
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_f_" aria-checked="false" aria-labelledby="connect-app-google-calendar-label"></Checkbox>
                  <input id="connect-app-google-calendar" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-google-calendar" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"Google Calendar"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Mirror planning holds"}
                  </p>
                </div>
              </label>
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-slack" id="connect-app-slack-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-5" aria-hidden="true" viewBox="0 0 2447.6 2452.5">
                        <g clipRule="evenodd" fillRule="evenodd">
                          <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3.1 0 .1 0 0 0m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"></path>
                          <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"></path>
                          <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"></path>
                          <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1 0 0 0 .1 0 0" fill="#e01e5a"></path>
                        </g>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_i_" aria-checked="false" aria-labelledby="connect-app-slack-label"></Checkbox>
                  <input id="connect-app-slack" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-slack" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"Slack"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Monitor team activity"}
                  </p>
                </div>
              </label>
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-stripe" id="connect-app-stripe-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-5" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                        <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_l_" aria-checked="false" aria-labelledby="connect-app-stripe-label"></Checkbox>
                  <input id="connect-app-stripe" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-stripe" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"Stripe"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Track revenue signals"}
                  </p>
                </div>
              </label>
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-zoom" id="connect-app-zoom-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-5" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                        <defs>
                          <lineargradient id="_r_o_" x1="23.666%" x2="76.334%" y1="95.6118%" y2="4.3882%">
                            <stop offset=".00006%" stopColor="#0845BF"></stop>
                            <stop offset="19.11%" stopColor="#0950DE"></stop>
                            <stop offset="38.23%" stopColor="#0B59F6"></stop>
                            <stop offset="50%" stopColor="#0B5CFF"></stop>
                            <stop offset="67.32%" stopColor="#0E5EFE"></stop>
                            <stop offset="77.74%" stopColor="#1665FC"></stop>
                            <stop offset="86.33%" stopColor="#246FF9"></stop>
                            <stop offset="93.88%" stopColor="#387FF4"></stop>
                            <stop offset="100%" stopColor="#4F90EE"></stop>
                          </lineargradient>
                        </defs>
                        <path fill="url(#_r_o_)" d="M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z"></path>
                        <path fill="#FFF" d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_p_" aria-checked="false" aria-labelledby="connect-app-zoom-label"></Checkbox>
                  <input id="connect-app-zoom" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-zoom" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"Zoom"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Log meeting sessions"}
                  </p>
                </div>
              </label>
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-loom" id="connect-app-loom-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-5" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                        <path fill="#625DF5" d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_s_" aria-checked="false" aria-labelledby="connect-app-loom-label"></Checkbox>
                  <input id="connect-app-loom" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-loom" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"Loom"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Store async walkthroughs"}
                  </p>
                </div>
              </label>
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-instagram" id="connect-app-instagram-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-5" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 264.583 264.583">
                        <defs>
                          <radialgradient xlinkHref="#a" id="f" cx={158.429} cy={578.088} r={52.352} fx="158.429" fy="578.088" gradientTransform="matrix(0 -4.03418 4.28018 0 -2332.227 942.236)" gradientUnits="userSpaceOnUse"></radialgradient>
                          <radialgradient xlinkHref="#b" id="g" cx={172.615} cy={600.692} r={65} fx="172.615" fy="600.692" gradientTransform="matrix(.67441 -1.16203 1.51283 .87801 -814.366 -47.835)" gradientUnits="userSpaceOnUse"></radialgradient>
                          <radialgradient xlinkHref="#c" id="h" cx={144.012} cy={51.337} r={67.081} fx="144.012" fy="51.337" gradientTransform="matrix(-2.3989 .67549 -.23008 -.81732 464.996 -26.404)" gradientUnits="userSpaceOnUse"></radialgradient>
                          <radialgradient xlinkHref="#d" id="e" cx={199.788} cy={628.438} r={52.352} fx="199.788" fy="628.438" gradientTransform="matrix(-3.10797 .87652 -.6315 -2.23914 1345.65 1374.198)" gradientUnits="userSpaceOnUse"></radialgradient>
                          <lineargradient id="d">
                            <stop offset={0} stopColor="#ff005f"></stop>
                            <stop offset={1} stopColor="#fc01d8"></stop>
                          </lineargradient>
                          <lineargradient id="c">
                            <stop offset={0} stopColor="#780cff"></stop>
                            <stop offset={1} stopColor="#820bff" stopOpacity={0}></stop>
                          </lineargradient>
                          <lineargradient id="b">
                            <stop offset={0} stopColor="#fc0"></stop>
                            <stop offset={1} stopColor="#fc0" stopOpacity={0}></stop>
                          </lineargradient>
                          <lineargradient id="a">
                            <stop offset={0} stopColor="#fc0"></stop>
                            <stop offset=".124" stopColor="#fc0"></stop>
                            <stop offset=".567" stopColor="#fe4a05"></stop>
                            <stop offset=".694" stopColor="#ff0f3f"></stop>
                            <stop offset={1} stopColor="#fe0657" stopOpacity={0}></stop>
                          </lineargradient>
                        </defs>
                        <path fill="url(#e)" d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244 33.413 0 66.826-.04 70.02-.203 8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z" transform="translate(-71.816 -18.143)"></path>
                        <path fill="url(#f)" d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244 33.413 0 66.826-.04 70.02-.203 8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z" transform="translate(-71.816 -18.143)"></path>
                        <path fill="url(#g)" d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244 33.413 0 66.826-.04 70.02-.203 8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z" transform="translate(-71.816 -18.143)"></path>
                        <path fill="url(#h)" d="M204.15 18.143c-55.23 0-71.383.057-74.523.317-11.334.943-18.387 2.728-26.07 6.554-5.922 2.942-10.592 6.351-15.201 11.13-8.394 8.716-13.481 19.439-15.323 32.184-.895 6.188-1.156 7.45-1.209 39.056-.02 10.536 0 24.4 0 42.999 0 55.2.062 71.341.326 74.476.916 11.032 2.645 17.973 6.308 25.565 7 14.533 20.37 25.443 36.12 29.514 5.453 1.404 11.476 2.178 19.208 2.544 3.277.142 36.669.244 70.081.244 33.413 0 66.826-.04 70.02-.203 8.954-.422 14.153-1.12 19.901-2.606 15.852-4.09 28.977-14.838 36.12-29.575 3.591-7.409 5.412-14.614 6.236-25.07.18-2.28.255-38.626.255-74.924 0-36.304-.082-72.583-.26-74.863-.835-10.625-2.656-17.77-6.364-25.32-3.042-6.182-6.42-10.799-11.324-15.519-8.752-8.361-19.455-13.45-32.21-15.29-6.18-.894-7.41-1.158-39.033-1.213z" transform="translate(-71.816 -18.143)"></path>
                        <path fill="#fff" d="M132.345 33.973c-26.716 0-30.07.117-40.563.594-10.472.48-17.62 2.136-23.876 4.567-6.47 2.51-11.958 5.87-17.426 11.335-5.472 5.464-8.834 10.948-11.354 17.412-2.44 6.252-4.1 13.397-4.57 23.858-.47 10.486-.593 13.838-.593 40.535 0 26.697.119 30.037.594 40.522.482 10.465 2.14 17.609 4.57 23.859 2.515 6.465 5.876 11.95 11.346 17.414 5.466 5.468 10.955 8.834 17.42 11.345 6.26 2.431 13.41 4.088 23.881 4.567 10.493.477 13.844.594 40.559.594 26.719 0 30.061-.117 40.555-.594 10.472-.48 17.63-2.136 23.888-4.567 6.468-2.51 11.948-5.877 17.414-11.345 5.472-5.464 8.834-10.949 11.354-17.412 2.419-6.252 4.079-13.398 4.57-23.858.472-10.486.595-13.828.595-40.525s-.123-30.047-.594-40.533c-.492-10.465-2.152-17.608-4.57-23.858-2.521-6.466-5.883-11.95-11.355-17.414-5.472-5.468-10.944-8.827-17.42-11.335-6.271-2.431-13.424-4.088-23.897-4.567-10.493-.477-13.834-.594-40.558-.594zm-8.825 17.715c2.62-.004 5.542 0 8.825 0 26.266 0 29.38.094 39.752.565 9.591.438 14.797 2.04 18.264 3.385 4.591 1.782 7.864 3.912 11.305 7.352 3.443 3.44 5.575 6.717 7.362 11.305 1.346 3.46 2.951 8.663 3.388 18.247.47 10.363.573 13.475.573 39.71 0 26.233-.102 29.346-.573 39.709-.44 9.584-2.042 14.786-3.388 18.247-1.783 4.587-3.919 7.854-7.362 11.292-3.443 3.441-6.712 5.57-11.305 7.352-3.463 1.352-8.673 2.95-18.264 3.388-10.37.47-13.486.573-39.752.573-26.268 0-29.38-.102-39.751-.573-9.592-.443-14.797-2.044-18.267-3.39-4.59-1.781-7.87-3.911-11.313-7.352-3.443-3.44-5.574-6.709-7.362-11.298-1.346-3.461-2.95-8.663-3.387-18.247-.472-10.363-.566-13.476-.566-39.726s.094-29.347.566-39.71c.438-9.584 2.04-14.786 3.387-18.25 1.783-4.588 3.919-7.865 7.362-11.305 3.443-3.441 6.722-5.57 11.313-7.357 3.468-1.351 8.675-2.949 18.267-3.389 9.075-.41 12.592-.532 30.926-.553zm61.337 16.322c-6.518 0-11.805 5.277-11.805 11.792 0 6.512 5.287 11.796 11.805 11.796 6.517 0 11.804-5.284 11.804-11.796 0-6.513-5.287-11.796-11.805-11.796zm-52.512 13.782c-27.9 0-50.519 22.603-50.519 50.482 0 27.879 22.62 50.471 50.52 50.471s50.51-22.592 50.51-50.471c0-27.879-22.613-50.482-50.513-50.482zm0 17.715c18.11 0 32.792 14.67 32.792 32.767 0 18.096-14.683 32.767-32.792 32.767-18.11 0-32.791-14.671-32.791-32.767 0-18.098 14.68-32.767 32.791-32.767z"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_v_" aria-checked="false" aria-labelledby="connect-app-instagram-label"></Checkbox>
                  <input id="connect-app-instagram" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-instagram" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"Instagram"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Track campaign engagement"}
                  </p>
                </div>
              </label>
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-discord" id="connect-app-discord-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-5" aria-hidden="true" viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                        <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_12_" aria-checked="false" aria-labelledby="connect-app-discord-label"></Checkbox>
                  <input id="connect-app-discord" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-discord" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"Discord"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Watch community activity"}
                  </p>
                </div>
              </label>
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-google-meet" id="connect-app-google-meet-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-5" aria-hidden="true" viewBox="0 0 622 512" fill="none">
                        <g clipPath="url(#googlemeet-clip0)">
                          <path d="M351.419 255.568L411.978 324.79L493.418 376.827L507.584 256.005L493.418 137.908L410.418 183.621L351.419 255.568Z" fill="#00832D"></path>
                          <path d="M0.00283051 365.583V468.541C0.00283051 492.049 19.0851 511.136 42.5983 511.136H145.556L166.876 433.344L145.556 365.583L74.9198 344.263L0.00283051 365.583Z" fill="#0066DA"></path>
                          <path d="M145.556 -7.62939e-06L0.00283051 145.554L74.9247 166.822L145.556 145.554L166.488 78.7145L145.556 -7.62939e-06Z" fill="#E94235"></path>
                          <path d="M0.00526047 365.629H145.556V145.551H0.00526047V365.629Z" fill="#2684FC"></path>
                          <path d="M586.398 61.6293L493.416 137.91V376.827L586.782 453.404C600.758 464.352 621.204 454.374 621.204 436.607V78.0861C621.204 60.1224 600.271 50.193 586.396 61.6317" fill="#00AC47"></path>
                          <path d="M351.419 255.568V365.583H145.556V511.136H450.825C474.338 511.136 493.418 492.049 493.418 468.541V376.827L351.419 255.568Z" fill="#00AC47"></path>
                          <path d="M450.825 -7.62939e-06H145.556V145.554H351.419V255.568L493.42 137.905V42.5979C493.42 19.0847 474.338 0.00241891 450.825 0.00241891" fill="#FFBA00"></path>
                        </g>
                        <defs>
                          <clippath id="googlemeet-clip0">
                            <rect width={621.2} height={512} fill="white"></rect>
                          </clippath>
                        </defs>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_15_" aria-checked="false" aria-labelledby="connect-app-google-meet-label"></Checkbox>
                  <input id="connect-app-google-meet" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-google-meet" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"Google Meet"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Capture call activity"}
                  </p>
                </div>
              </label>
              <label className="bg-card border border-input cursor-pointer flex flex-col focus-within:ring-0 gap-3 hover:bg-accent/40 min-w-0 outline-none p-3 rounded-lg shadow-none text-left transition-colors" htmlFor="connect-app-paypal" id="connect-app-paypal-label">
                <div className="flex gap-3 items-start justify-between">
                  <Item className="border-0 p-0 w-auto" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="size-5" aria-hidden="true" viewBox="7.056000232696533 3 37.35095977783203 45">
                        <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#a)">
                          <path fill="#002991" d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.687 9.687 0 0 1 .603 3.58z"></path>
                          <path fill="#60CDFF" d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35z"></path>
                          <path fill="#008CFF" d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15z"></path>
                        </g>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Checkbox className="focus-visible:ring-0 rounded-full shadow-none size-5" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_18_" aria-checked="false" aria-labelledby="connect-app-paypal-label"></Checkbox>
                  <input id="connect-app-paypal" tabIndex={-1} aria-hidden="true" type="checkbox" name="connect-app-paypal" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                </div>
                <div className="min-w-0 space-y-1 w-full">
                  <p className="font-bold">
                    {"PayPal"}
                  </p>
                  <p className="leading-none text-muted-foreground text-xs truncate">
                    {"Monitor payout events"}
                  </p>
                </div>
              </label>
            </div>
          </div>
        </ScrollArea>
      </div>
      <DialogFooter>
        <Button className="w-full" type="button" disabled="" tabIndex={0} disabled>
          <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          {"Add app"}
        </Button>
      </DialogFooter>
      <DialogClose className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-sm cn-button-variant-ghost cn-dialog-close disabled:opacity-50 disabled:pointer-events-none group/button inline-flex items-center justify-center outline-none select-none shrink-0 transition-all whitespace-nowrap" type="button" tabIndex={0}>
        <svg className="lucide lucide-x" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="XIcon" tabler="IconX" hugeicons="Cancel01Icon" phosphor="XIcon" remixicon="RiCloseLine">
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
