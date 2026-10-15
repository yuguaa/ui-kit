import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
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
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"

export function Pattern() {
  return (
  <>
    <main className="flex items-center justify-center md:p-12 min-h-svh p-6 sm:p-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Finance account dialog"}
      </h1>
      <div className="flex items-center justify-center min-h-[360px]">
        <Button type="button" tabIndex="0" extracted="1">
          <svg className="lucide lucide-landmark" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LandmarkIcon" tabler="IconBuildingBank" hugeicons="BankIcon" phosphor="BankIcon" remixicon="RiBankLine" data-icon="inline-start" aria-hidden="true">
            <path d="M10 18v-7"></path>
            <path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"></path>
            <path d="M14 18v-7"></path>
            <path d="M18 18v-7"></path>
            <path d="M3 22h18"></path>
            <path d="M6 18v-7"></path>
          </svg>
          {"Open finance account dialog"}
        </Button>
      </div>
    </main>
    <Dialog>
    <DialogContent className="**:data-[slot=dialog-close]:backdrop-blur **:data-[slot=dialog-close]:bg-background/90 **:data-[slot=dialog-close]:right-4 **:data-[slot=dialog-close]:top-4 flex flex-col gap-0 h-[min(90svh,36rem)] max-w-[calc(100vw-1.5rem)] overflow-hidden p-0 sm:max-w-4xl" data-open="" tabIndex="-1" baseUiFocusable="" id="_r_0_" role="dialog" aria-labelledby="base-ui-_r_2_" aria-describedby="base-ui-_r_3_" style={{"--nested-dialogs": "0"}}>
      <form className="flex-1 grid md:grid-cols-[minmax(0,1fr)_minmax(20rem,0.96fr)] min-h-0">
        <section className="flex flex-col min-h-0">
          <DialogHeader className="gap-2 pb-6 pr-12 pt-12 px-6 shrink-0 sm:pt-14 sm:px-8 text-left">
            <DialogTitle className="text-2xl" id="base-ui-_r_2_">
              {"Create your finance account"}
            </DialogTitle>
            <DialogDescription className="leading-5 max-w-md text-sm" id="base-ui-_r_3_">
              {"Set the account identity used for payouts and transfers."}
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 min-h-0 overflow-y-auto pb-6 px-6 sm:px-8">
            <FieldGroup className="gap-4">
              <Field className="gap-2" role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="finance-account-name">
                  {"Account name"}
                </FieldLabel>
                <Input id="finance-account-name" value="Cedar Operating"></Input>
              </Field>
              <Field className="gap-2" role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="finance-account-tag">
                  {"Account tag"}
                </FieldLabel>
                <InputGroup role="group">
                  <InputGroupAddon role="group" data-align="inline-start">
                    <span className="[&_svg]:pointer-events-none cn-input-group-text flex items-center">
                      {"acct_"}
                    </span>
                  </InputGroupAddon>
                  <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="finance-account-tag" value="cedar_ops" />
                </InputGroup>
              </Field>
              <Field className="gap-2" role="group" data-orientation="vertical">
                <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="finance-statement-label">
                  {"Statement label"}
                </FieldLabel>
                <Input id="finance-statement-label" value="CEDAR STUDIO"></Input>
              </Field>
            </FieldGroup>
            <div className="md:hidden mt-6">
              <div className="bg-[linear-gradient(155deg,oklch(0.24_0.15_258)_0%,oklch(0.37_0.18_282)_36%,oklch(0.68_0.19_318)_67%,oklch(0.86_0.13_48)_100%)] flex isolate items-center justify-center min-h-72 overflow-hidden p-5 relative rounded-lg">
                <div className="absolute bg-[linear-gradient(100deg,oklch(0.18_0.15_252)_0%,transparent_48%),linear-gradient(28deg,oklch(0.91_0.11_42)_0%,transparent_45%)] inset-0 opacity-90 pointer-events-none"></div>
                <div className="absolute bg-[linear-gradient(180deg,transparent_0%,oklch(0.87_0.14_330)_100%)] inset-0 opacity-55 pointer-events-none"></div>
                <Card className="backdrop-blur bg-background/95 gap-0 max-w-[20rem] p-0 shadow-black/15 shadow-xl w-full" size="default" aria-label="Operating account">
                  <CardHeader className="gap-0 pb-4 pt-5 px-5">
                    <div className="flex gap-3 items-start min-w-0">
                      <div className="bg-background border flex font-semibold items-center justify-center rounded-md shadow-xs shrink-0 size-11 text-foreground text-sm">
                        {"CO"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="leading-5 text-base truncate">
                          {"Cedar Operating"}
                        </CardTitle>
                        <CardDescription className="text-sm truncate">
                          {"acct_cedar_ops"}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 pb-5 px-5">
                    <div>
                      <p className="font-medium text-muted-foreground text-xs">
                        {"Available balance"}
                      </p>
                      <p className="font-semibold leading-none mt-1 tabular-nums text-2xl">
                        {"$86,240.00"}
                      </p>
                    </div>
                    <div className="border-t flex flex-col gap-2 pt-3">
                      <div className="flex gap-4 items-center justify-between min-w-0 text-sm">
                        <span className="shrink-0 text-muted-foreground">
                          {"Account type"}
                        </span>
                        <span className="font-medium min-w-0 truncate">
                          {"USD operating"}
                        </span>
                      </div>
                      <div className="flex gap-4 items-center justify-between min-w-0 text-sm">
                        <span className="shrink-0 text-muted-foreground">
                          {"Statement label"}
                        </span>
                        <span className="font-medium min-w-0 truncate">
                          {"CEDAR STUDIO"}
                        </span>
                      </div>
                      <div className="flex gap-4 items-center justify-between min-w-0 text-sm">
                        <span className="shrink-0 text-muted-foreground">
                          {"Routing"}
                        </span>
                        <span className="font-medium min-w-0 truncate">
                          {"021000021"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <DialogFooter className="bg-transparent! border-0 m-0 pb-6 pt-0 px-6 sm:px-8">
            <div className="border-t flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between w-full">
              <Button className="px-0 w-fit" type="button" tabIndex="0">
                {"Terms & disclosures"}
                <svg className="lucide lucide-external-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" data-icon="inline-end" aria-hidden="true">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
              </Button>
              <div className="flex gap-2 sm:w-auto w-full">
                <Button className="flex-1 sm:flex-none" type="button" tabIndex="0">
                  {"Not now"}
                </Button>
                <Button className="flex-1 sm:flex-none" type="submit" tabIndex="0">
                  {"Create account"}
                </Button>
              </div>
            </div>
          </DialogFooter>
        </section>
        <aside className="hidden md:block min-h-0 p-2">
          <div className="bg-[linear-gradient(155deg,oklch(0.24_0.15_258)_0%,oklch(0.37_0.18_282)_36%,oklch(0.68_0.19_318)_67%,oklch(0.86_0.13_48)_100%)] flex isolate items-center justify-center min-h-full overflow-hidden p-8 relative rounded-lg">
            <div className="absolute bg-[linear-gradient(100deg,oklch(0.18_0.15_252)_0%,transparent_48%),linear-gradient(28deg,oklch(0.91_0.11_42)_0%,transparent_45%)] inset-0 opacity-90 pointer-events-none"></div>
            <div className="absolute bg-[linear-gradient(180deg,transparent_0%,oklch(0.87_0.14_330)_100%)] inset-0 opacity-55 pointer-events-none"></div>
            <Card className="backdrop-blur bg-background/95 gap-0 max-w-[20rem] p-0 shadow-black/15 shadow-xl w-full" size="default" aria-label="Operating account">
              <CardHeader className="gap-0 pb-4 pt-5 px-5">
                <div className="flex gap-3 items-start min-w-0">
                  <div className="bg-background border flex font-semibold items-center justify-center rounded-md shadow-xs shrink-0 size-11 text-foreground text-sm">
                    {"CO"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="leading-5 text-base truncate">
                      {"Cedar Operating"}
                    </CardTitle>
                    <CardDescription className="text-sm truncate">
                      {"acct_cedar_ops"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 pb-5 px-5">
                <div>
                  <p className="font-medium text-muted-foreground text-xs">
                    {"Available balance"}
                  </p>
                  <p className="font-semibold leading-none mt-1 tabular-nums text-2xl">
                    {"$86,240.00"}
                  </p>
                </div>
                <div className="border-t flex flex-col gap-2 pt-3">
                  <div className="flex gap-4 items-center justify-between min-w-0 text-sm">
                    <span className="shrink-0 text-muted-foreground">
                      {"Account type"}
                    </span>
                    <span className="font-medium min-w-0 truncate">
                      {"USD operating"}
                    </span>
                  </div>
                  <div className="flex gap-4 items-center justify-between min-w-0 text-sm">
                    <span className="shrink-0 text-muted-foreground">
                      {"Statement label"}
                    </span>
                    <span className="font-medium min-w-0 truncate">
                      {"CEDAR STUDIO"}
                    </span>
                  </div>
                  <div className="flex gap-4 items-center justify-between min-w-0 text-sm">
                    <span className="shrink-0 text-muted-foreground">
                      {"Routing"}
                    </span>
                    <span className="font-medium min-w-0 truncate">
                      {"021000021"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>
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
