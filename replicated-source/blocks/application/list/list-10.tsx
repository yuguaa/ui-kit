import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Kbd } from "@/registry/bases/base/ui/kbd"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="@container max-w-xl w-full">
        <FramePanel className="flex items-center justify-between p-3.5!">
          <h2 className="font-medium text-foreground text-sm">
            {"Recent Investments"}
          </h2>
          <InputGroup className="w-46" role="group">
            <InputGroupAddon role="group" data-align="inline-start">
              <svg className="lucide lucide-search shrink-0 size-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SearchIcon" tabler="IconSearch" hugeicons="Search01Icon" phosphor="MagnifyingGlassIcon" remixicon="RiSearchLine" aria-hidden="true">
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
            </InputGroupAddon>
            <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="base-ui-_r_0_" placeholder="Search" />
            <InputGroupAddon role="group" data-align="inline-end">
              <Kbd>
                {"⌘ K"}
              </Kbd>
            </InputGroupAddon>
          </InputGroup>
        </FramePanel>
        <FramePanel className="p-0!">
          <div className="cn-table-container">
            <Table className="table-fixed">
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="ps-3.5 text-muted-foreground text-sm w-[44%]">
                    {"Company"}
                  </TableHead>
                  <TableHead className="text-muted-foreground text-sm w-[28%]">
                    {"Sector"}
                  </TableHead>
                  <TableHead className="pe-3.5 text-muted-foreground text-right text-sm w-[28%]">
                    {"Value Change"}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="pe-2 ps-3.5 py-3 sm:p-3.5">
                    <div className="flex gap-2 items-center min-w-0">
                      <Item className="bg-teal-600 border-2 border-background dark:border-2 overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="brightness-0 invert size-5.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
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
                      <div className="min-w-0">
                        <div className="font-medium text-foreground text-sm truncate">
                          {"Ironclad Metals"}
                        </div>
                        <div className="text-muted-foreground text-sm truncate">
                          {"Feb 8, 2025"}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-2 py-3 sm:p-3.5 text-foreground text-sm truncate">
                    {"Industrial Materials"}
                  </TableCell>
                  <TableCell className="font-medium pe-3.5 px-2 py-3 sm:p-3.5 text-[#0B5C22] text-right text-sm">
                    {"+ $ 420,000"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pe-2 ps-3.5 py-3 sm:p-3.5">
                    <div className="flex gap-2 items-center min-w-0">
                      <Item className="bg-amber-400 border-2 border-background dark:border-2 overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="brightness-0 invert size-5.5" viewBox="0 0 27 37" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M25.7756 17.3698C25.2893 15.6249 24.5666 13.9548 23.6276 12.4058H23.6296C23.6296 12.4058 22.7026 10.8678 22.3136 10.4028H22.3106C22.2146 10.2818 22.0216 10.4158 22.0956 10.5538C22.2046 10.7828 22.3036 11.0648 22.2346 11.3398C22.1206 11.6758 21.7456 11.9088 21.4006 11.7898C21.3051 11.7512 21.2186 11.6933 21.1466 11.6198C20.7936 11.2548 20.6096 10.6508 20.3806 9.8838C20.1746 9.2008 19.9196 8.35279 19.4596 7.43479C18.7116 5.94279 17.8266 5.25279 17.7906 5.22379C17.7686 5.20662 17.7416 5.19721 17.7137 5.19703C17.6859 5.19685 17.6587 5.20591 17.6366 5.2228C17.6142 5.23992 17.5976 5.26346 17.5891 5.29028C17.5805 5.31709 17.5803 5.34588 17.5886 5.3728C17.5926 5.3848 17.9646 6.61479 17.2466 7.54579C16.9606 7.91679 16.5256 8.1408 16.0186 8.1728C15.5086 8.2058 15.0036 8.0368 14.7006 7.7328C13.9496 6.9778 13.8616 5.63979 13.8756 4.90979C13.9226 2.47579 14.6576 0.770795 15.0406 0.209795C15.0567 0.185815 15.0649 0.157376 15.064 0.12849C15.0631 0.0996036 15.0532 0.071728 15.0356 0.048795C15.018 0.0265184 14.9936 0.0106996 14.9661 0.00382184C14.9385 -0.00305591 14.9095 -0.000603202 14.8836 0.010795C11.9096 1.2998 9.75456 3.50679 8.65356 6.38379C8.03456 8.09479 7.76456 8.8748 7.54556 9.3658C7.34356 9.8148 7.15656 10.0218 6.96556 10.1358C6.86056 10.1998 6.73256 10.2358 6.60056 10.2408C6.40656 10.2208 5.44656 10.0448 6.28256 8.4388C6.35156 8.3038 6.16856 8.1698 6.06656 8.2788L5.40856 9.0058C5.37923 9.0378 5.3499 9.0698 5.32056 9.1018L5.21156 9.2228C5.1929 9.24413 5.1759 9.2648 5.16056 9.2848C3.08056 11.6618 1.62756 14.7038 0.790564 17.5138C0.0405639 20.2138 -0.00643612 22.3708 0.000563879 23.1908L0.00156388 23.3728C0.00156388 27.0068 1.38356 30.4228 3.89256 32.9928C6.40156 35.5628 9.73956 36.9778 13.2876 36.9778C16.8356 36.9778 20.1736 35.5628 22.6826 32.9928C25.1926 30.4228 26.5736 27.0058 26.5736 23.3728C26.5736 21.0578 26.2756 19.1718 25.7706 17.3698H25.7756ZM13.2896 30.4168C9.49156 30.4168 6.41056 27.2648 6.41056 23.3738C6.41056 19.4828 9.49056 16.3298 13.2896 16.3298C17.0886 16.3298 20.1686 19.4838 20.1686 23.3738C20.1686 27.2638 17.0886 30.4168 13.2896 30.4168Z" fill="#FF4000"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                      <div className="min-w-0">
                        <div className="font-medium text-foreground text-sm truncate">
                          {"BluePeak Realty"}
                        </div>
                        <div className="text-muted-foreground text-sm truncate">
                          {"Feb 7, 2025"}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-2 py-3 sm:p-3.5 text-foreground text-sm truncate">
                    {"Real Estate"}
                  </TableCell>
                  <TableCell className="font-medium pe-3.5 px-2 py-3 sm:p-3.5 text-[#0B5C22] text-right text-sm">
                    {"+ $ 310,000"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pe-2 ps-3.5 py-3 sm:p-3.5">
                    <div className="flex gap-2 items-center min-w-0">
                      <Item className="bg-violet-600 border-2 border-background dark:border-2 overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="size-5.5 text-white" aria-hidden="true" version="1.1" id="procure__Layer_1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 69.2 108.3" xmlSpace="preserve" fill="currentColor">
                            <path d="M36.3,68.8v-26c0-1.2,0.6-2.4,1.7-3.1l24.5-15.4c2.4-1.5,5.5,0.2,5.5,3.1v22.4c0,1.9-1,3.6-2.6,4.6L39,70.4\tC37.8,71.1,36.3,70.2,36.3,68.8z"></path>
                            <path d="M32.7,104.8V78.1c0-1.2-0.6-2.4-1.7-3.1L4.9,58.6C3.2,57.5,1,58.8,1,60.7v25.4c0,1.2,0.6,2.4,1.7,3.1L30,106.3\tC31.2,107.1,32.7,106.2,32.7,104.8z"></path>
                            <path d="M36.3,3.2v30.2c0,1.4,1.6,2.3,2.8,1.5l20.4-13.3c1.7-1.1,1.8-3.5,0.1-4.7L39.2,1.7C38,0.8,36.3,1.7,36.3,3.2z"></path>
                            <path d="M32.7,2.9v65.9c0,1.4-1.6,2.3-2.8,1.5L2.7,53.2c-1-0.7-1.7-1.8-1.7-3.1V21.5c0-1.2,0.6-2.4,1.7-3.1L30,1.3\tC31.2,0.6,32.7,1.4,32.7,2.9z"></path>
                          </svg>
                        </ItemMedia>
                      </Item>
                      <div className="min-w-0">
                        <div className="font-medium text-foreground text-sm truncate">
                          {"Ditz Logistics"}
                        </div>
                        <div className="text-muted-foreground text-sm truncate">
                          {"Feb 6, 2025"}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-2 py-3 sm:p-3.5 text-foreground text-sm truncate">
                    {"Transportation"}
                  </TableCell>
                  <TableCell className="font-medium pe-3.5 px-2 py-3 sm:p-3.5 text-[#0B5C22] text-right text-sm">
                    {"+ $ 185,000"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="pe-2 ps-3.5 py-3 sm:p-3.5">
                    <div className="flex gap-2 items-center min-w-0">
                      <Item className="bg-orange-500 border-2 border-background dark:border-2 overflow-hidden p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                        <ItemMedia className="size-auto" variant="icon">
                          <svg className="brightness-0 invert size-5.5" aria-hidden="true" viewBox="0 0 64 40">
                            <text x="1" y="29" fill="#0061D5" fontFamily="Arial, Helvetica, sans-serif" fontSize="30" fontWeight="700" letter-spacing="0">
                              {"box"}
                            </text>
                          </svg>
                        </ItemMedia>
                      </Item>
                      <div className="min-w-0">
                        <div className="font-medium text-foreground text-sm truncate">
                          {"WaveMark Capital"}
                        </div>
                        <div className="text-muted-foreground text-sm truncate">
                          {"Feb 5, 2025"}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-2 py-3 sm:p-3.5 text-foreground text-sm truncate">
                    {"Finances"}
                  </TableCell>
                  <TableCell className="font-medium pe-3.5 px-2 py-3 sm:p-3.5 text-[#991930] text-right text-sm">
                    {"- $ 92,000"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </FramePanel>
      </Frame>
    </div>
  )
}
