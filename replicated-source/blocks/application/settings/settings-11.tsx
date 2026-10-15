import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-12 min-h-svh p-4 sm:p-8 w-full">
      <div className="max-w-3xl space-y-4 w-full">
        <div className="space-y-0.5">
          <h1 className="font-semibold text-xl">
            {"Notification Channels"}
          </h1>
          <p className="text-muted-foreground text-sm">
            {"Pick where each type of update lands so nothing important gets missed."}
          </p>
        </div>
        <Tabs data-orientation="horizontal" activationDirection="none">
          <TabsList className="mb-3.5 p-0!" data-orientation="horizontal" activationDirection="none" role="tablist" variant="line">
            <TabsTrigger type="button" data-active="" data-orientation="horizontal" aria-disabled="false" tabIndex="0" role="tab" aria-selected="true" id="base-ui-_r_0_" compositeItemActive="" aria-controls="base-ui-_r_4_" extracted="1">
              {"Projects"}
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_1_">
              {"Messages"}
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_2_">
              {"Reports"}
            </TabsTrigger>
            <TabsTrigger type="button" data-orientation="horizontal" aria-disabled="false" tabIndex="-1" role="tab" aria-selected="false" id="base-ui-_r_3_">
              {"System"}
            </TabsTrigger>
          </TabsList>
          <TabsContent className="space-y-5" data-orientation="horizontal" activationDirection="none" id="base-ui-_r_4_" role="tabpanel" tabIndex="0" index="0" aria-labelledby="base-ui-_r_0_">
            <div className="cn-table-container">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold w-full">
                      {"Task activity"}
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs">
                      {"Email"}
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs">
                      {"Slack"}
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs">
                      {"In-app"}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-sm">
                      {"Task assigned to you"}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_5_" aria-checked="true" aria-label="Task assigned to you via Email">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_8_" aria-checked="false" aria-label="Task assigned to you via Slack"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_b_" aria-checked="true" aria-label="Task assigned to you via In-app">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm">
                      {"Due date approaching"}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_e_" aria-checked="true" aria-label="Due date approaching via Email">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_h_" aria-checked="false" aria-label="Due date approaching via Slack"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_k_" aria-checked="false" aria-label="Due date approaching via In-app"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm">
                      {"Status changed"}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_n_" aria-checked="false" aria-label="Status changed via Email"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_q_" aria-checked="false" aria-label="Status changed via Slack"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_t_" aria-checked="true" aria-label="Status changed via In-app">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm">
                      {"Mentioned in a comment"}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_10_" aria-checked="true" aria-label="Mentioned in a comment via Email">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_13_" aria-checked="true" aria-label="Mentioned in a comment via Slack">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_16_" aria-checked="true" aria-label="Mentioned in a comment via In-app">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm">
                      {"File attachment added"}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_19_" aria-checked="false" aria-label="File attachment added via Email"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1c_" aria-checked="false" aria-label="File attachment added via Slack"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1f_" aria-checked="false" aria-label="File attachment added via In-app"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="cn-table-container">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold w-full">
                      {"Project updates"}
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs">
                      {"Email"}
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs">
                      {"Slack"}
                    </TableHead>
                    <TableHead className="text-muted-foreground text-xs">
                      {"In-app"}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-sm">
                      {"Milestone completed"}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1i_" aria-checked="true" aria-label="Milestone completed via Email">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1l_" aria-checked="false" aria-label="Milestone completed via Slack"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1o_" aria-checked="true" aria-label="Milestone completed via In-app">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm">
                      {"Sprint ended"}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_1r_" aria-checked="true" aria-label="Sprint ended via Email">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_1u_" aria-checked="false" aria-label="Sprint ended via Slack"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_21_" aria-checked="false" aria-label="Sprint ended via In-app"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm">
                      {"New member added to project"}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_24_" aria-checked="false" aria-label="New member added to project via Email"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_27_" aria-checked="false" aria-label="New member added to project via Slack"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_2a_" aria-checked="true" aria-label="New member added to project via In-app">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-sm">
                      {"Project archived"}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox checked="" role="checkbox" tabIndex="0" id="base-ui-_r_2d_" aria-checked="true" aria-label="Project archived via Email">
                          <span className="cn-checkbox-indicator grid place-content-center text-current transition-none" data-checked="">
                            <svg className="lucide lucide-check" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="CheckIcon" tabler="IconCheck" hugeicons="Tick02Icon" phosphor="CheckIcon" remixicon="RiCheckLine">
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                          </span>
                        </Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" checked style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2g_" aria-checked="false" aria-label="Project archived via Slack"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <Checkbox unchecked="" role="checkbox" tabIndex="0" id="base-ui-_r_2j_" aria-checked="false" aria-label="Project archived via In-app"></Checkbox>
                        <input tabIndex="-1" aria-hidden="true" type="checkbox" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "fixed", top: "0px", left: "0px"}} />
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
