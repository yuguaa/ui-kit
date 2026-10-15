import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import {
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Item } from "@/registry/bases/radix/ui/item"
import { Select } from "@/registry/bases/radix/ui/select"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="max-w-sm w-full" spacing="sm">
        <FramePanel className="flex items-center justify-between p-3!">
          <h2 className="font-medium text-base text-foreground">
            Capital Inflows
          </h2>
          <Select>
          <SelectTrigger className="min-w-28 shrink-0 text-xs" type="button" tabIndex="0" id="base-ui-_r_0_" role="combobox" aria-expanded="false" aria-haspopup="listbox" size="default" aria-label="Filter funds shown">
            <SelectValue>
              Top 3 Funds
            </SelectValue>
            <svg className="cn-select-trigger-icon lucide lucide-chevron-down pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconSelector" hugeicons="UnfoldMoreIcon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
              <path d="m6 9 6 6 6-6"></path>
              ▼
            </svg>
          </SelectTrigger>
          </Select>
          <input id="base-ui-_r_0_-hidden-input" tabIndex="-1" aria-hidden="true" value="top-3" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
        </FramePanel>
        <FramePanel className="p-3.5!">
          <ul className="flex flex-col">
            <li>
              <div className="flex gap-2 items-center">
                <Item className="bg-teal-600 border-2 border-background dark:border-2 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-5" aria-hidden="true" viewBox="0 0 339.43 295.27">
                      <path d="m62.15 1.45-61.89 130a2.52 2.52 0 0 0 .54 2.94l167.15 160.17a2.55 2.55 0 0 0 3.53 0L338.63 134.4a2.52 2.52 0 0 0 .54-2.94l-61.89-130A2.5 2.5 0 0 0 275 0H64.45a2.5 2.5 0 0 0-2.3 1.45Z" style={{fill: "rgb(80, 175, 149)", fillRule: "evenodd"}}></path>
                      <path d="M191.19 144.8c-1.2.09-7.4.46-21.23.46-11 0-18.81-.33-21.55-.46-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25 74.24-18.15v28.91c2.78.2 10.74.67 21.74.67 13.2 0 19.81-.55 21-.66v-28.9c42.42 1.89 74.08 9.29 74.08 18.13s-31.65 16.24-74.08 18.12Zm0-39.25V79.68h59.2V40.23H89.21v39.45h59.19v25.86c-48.11 2.21-84.29 11.74-84.29 23.16s36.18 20.94 84.29 23.16v82.9h42.78v-82.93c48-2.21 84.12-11.73 84.12-23.14s-36.09-20.93-84.12-23.15Zm0 0Z" style={{fill: "rgb(255, 255, 255)", fillRule: "evenodd"}}></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-base text-foreground">
                    Tether Reserve
                  </p>
                </div>
                <div className="shrink-0 space-y-0.5 text-right">
                  <p className="leading-none text-muted-foreground text-xs">
                    Capital In
                  </p>
                  <p className="font-medium leading-tight text-foreground text-sm">
                    $7,928,400
                  </p>
                </div>
              </div>
              <Separator className="my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Item className="bg-amber-400 border-2 border-background dark:border-2 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-5" aria-hidden="true" viewBox="0 0 201 201" fill="none">
                      <path d="M100.517 200.483C155.745 200.483 200.517 155.712 200.517 100.483C200.517 45.2549 155.745 0.483337 100.517 0.483337C45.2882 0.483337 0.516663 45.2549 0.516663 100.483C0.516663 155.712 45.2882 200.483 100.517 200.483Z" fill="black"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M126.452 111.118L141.537 126.159L100.531 167.121L59.5688 126.159L74.6533 111.118L100.531 136.995L126.452 111.118ZM100.531 85.1965L115.832 100.498L100.531 115.799L85.2732 100.541V100.498L87.9607 97.8103L89.2611 96.5099L100.531 85.1965ZM48.949 85.4133L64.0335 100.498L48.949 115.539L33.8644 100.454L48.949 85.4133ZM152.113 85.4133L167.198 100.498L152.113 115.539L137.029 100.454L152.113 85.4133ZM100.531 33.8311L141.493 74.7934L126.409 89.8779L100.531 63.9568L74.6533 89.8346L59.5688 74.7934L100.531 33.8311Z" fill="#F3BA2F"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-base text-foreground">
                    Binance Ventures
                  </p>
                </div>
                <div className="shrink-0 space-y-0.5 text-right">
                  <p className="leading-none text-muted-foreground text-xs">
                    Capital In
                  </p>
                  <p className="font-medium leading-tight text-foreground text-sm">
                    $3,214,900
                  </p>
                </div>
              </div>
              <Separator className="my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Item className="bg-orange-500 border-2 border-background dark:border-2 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="[&_path]:fill-white [&_path]:opacity-100 size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
                      <g clipPath="url(#coinholder-clip)">
                        <path opacity="0.35" d="M12.2926 13.2856C11.5667 13.2856 10.8408 13.0005 10.2901 12.4823L3.50646 5.95223C2.63035 5.09711 2.32997 3.77556 2.75551 2.60948C3.20608 1.4434 4.28245 0.666016 5.50901 0.666016H12.3177C13.9447 0.666016 15.2464 2.0394 15.2464 3.69782V10.2279C15.2464 11.4458 14.5455 12.5341 13.4942 13.0264C13.0936 13.1819 12.6931 13.2856 12.2926 13.2856Z" fill="#7960ED"></path>
                        <path d="M8.68839 15.3321C7.9124 15.3321 7.16145 15.0211 6.61075 14.4511L1.77961 9.47579C1.05369 8.69841 0.753308 7.61007 1.02866 6.57355C1.27898 5.53704 2.05496 4.70783 3.0312 4.39687L9.88991 2.27202C10.9162 1.96107 12.0426 2.24611 12.8186 3.02349C13.5946 3.82679 13.87 4.96696 13.5446 6.0553L11.492 13.1554C11.1916 14.1919 10.3906 14.9693 9.38928 15.2284C9.16399 15.3062 8.91368 15.3321 8.68839 15.3321Z" fill="#7960ED"></path>
                      </g>
                      <defs>
                        <clippath id="coinholder-clip">
                          <rect width="14.6667" height="14.6667" fill="white" transform="translate(0.666016 0.666016)"></rect>
                        </clippath>
                      </defs>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-base text-foreground">
                    Coinholder Treasury
                  </p>
                </div>
                <div className="shrink-0 space-y-0.5 text-right">
                  <p className="leading-none text-muted-foreground text-xs">
                    Capital In
                  </p>
                  <p className="font-medium leading-tight text-foreground text-sm">
                    $1,246,300
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </FramePanel>
      </Frame>
    </div>
  )
}
