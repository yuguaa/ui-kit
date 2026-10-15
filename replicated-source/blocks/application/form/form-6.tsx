import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"
import { Badge } from "@/registry/bases/radix/ui/badge"

export function Pattern() {
  return (
    <main className="bg-background flex justify-center lg:px-10 min-h-svh px-4 py-6 sm:px-8 sm:py-10 w-full" aria-labelledby="page-heading">
      <h1 className="sr-only" id="page-heading">
        {"Business verification form"}
      </h1>
      <section className="max-w-4xl w-full" aria-labelledby="form-6-title">
        <div className="flex flex-col gap-3 mb-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-0.5 min-w-0">
            <h2 className="font-semibold leading-tight text-lg" id="form-6-title">
              {"Business Verification"}
            </h2>
            <p className="text-muted-foreground text-sm">
              {"Review submitted profile details before approval."}
            </p>
          </div>
          <Button type="button" tabIndex={0}>
            <svg className="lucide lucide-circle-question-mark" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="HelpCircleIcon" tabler="IconHelpCircle" hugeicons="HelpCircleIcon" phosphor="QuestionIcon" remixicon="RiQuestionLine" data-icon="inline-start" aria-hidden="true">
              <circle cx={12} cy={12} r={10}></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
            {"Contact support"}
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Frame className="w-full" spacing="sm">
            <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="font-semibold text-sm">
                  {"Business Details"}
                </div>
                <div className="text-muted-foreground text-sm truncate">
                  {"Legal identity and address."}
                </div>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Button type="button" tabIndex={0} aria-label="Edit business details">
                  <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                  {"Edit"}
                </Button>
              </div>
            </header>
            <FramePanel className="p-0">
              <div className="flex flex-col gap-3 min-w-0 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="font-medium text-sm">
                    {"Cedar & Volt Studio LLC"}
                  </p>
                  <p className="text-muted-foreground text-sm truncate">
                    {"Domain confirmed for review."}
                  </p>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative self-start sm:self-center style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  {"Verified domain"}
                </Badge>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <dl className="flex flex-col">
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"URL"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="URL info" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        <a className="gap-1.5 hover:underline hover:underline-offset-4 inline-flex items-center min-w-0 text-primary" href="https://cedarvolt.studio" target="_blank" rel="noreferrer">
                          <span className="min-w-0 truncate">
                            {"cedarvolt.studio"}
                          </span>
                          <svg className="lucide lucide-external-link shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ExternalLinkIcon" tabler="IconExternalLink" hugeicons="LinkSquare01Icon" phosphor="ArrowSquareOutIcon" remixicon="RiExternalLinkLine" aria-hidden="true">
                            <path d="M15 3h6v6"></path>
                            <path d="M10 14 21 3"></path>
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          </svg>
                        </a>
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="URL value info" id="base-ui-_r_3_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </dd>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Address"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Address info" id="base-ui-_r_5_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        <span className="flex flex-col min-w-0">
                          <span className="min-w-0 truncate">
                            {"418 Market Street, Floor 6"}
                          </span>
                          <span className="min-w-0 truncate">
                            {"Portland, OR 97205"}
                          </span>
                          <span className="min-w-0 truncate">
                            {"United States"}
                          </span>
                        </span>
                      </span>
                    </dd>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Business type"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Business type info" id="base-ui-_r_7_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        {"Limited liability company"}
                      </span>
                    </dd>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Other information provided"}
                      </span>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        {"US EIN ending 2146, Digital services, Product description"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Other information provided value info" id="base-ui-_r_9_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </dd>
                  </div>
                </div>
              </dl>
            </FramePanel>
          </Frame>
          <Frame className="w-full" spacing="sm">
            <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="font-semibold text-sm">
                  {"Public Details"}
                </div>
                <div className="text-muted-foreground text-sm truncate">
                  {"Customer-facing profile."}
                </div>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Button type="button" tabIndex={0} aria-label="Edit public details">
                  <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                  {"Edit"}
                </Button>
              </div>
            </header>
            <FramePanel className="p-0">
              <div className="flex flex-col gap-3 min-w-0 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="font-medium text-sm">
                    {"Customer Support Information"}
                  </p>
                  <p className="text-muted-foreground text-sm truncate">
                    {"Receipt and invoice profile."}
                  </p>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative self-start sm:self-center style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                  <svg className="lucide lucide-eye" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                    <circle cx={12} cy={12} r={3}></circle>
                  </svg>
                  {"Customer visible"}
                </Badge>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <dl className="flex flex-col">
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Business name"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Business name info" id="base-ui-_r_b_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        <span className="flex flex-wrap gap-x-3 gap-y-1.5 items-center min-w-0">
                          <span className="min-w-0">
                            {"Cedar & Volt Studio"}
                          </span>
                          <span className="flex-wrap gap-x-3 gap-y-1 inline-flex items-center min-w-0">
                            <span className="h-5 inline-flex items-center" aria-label="Stripe">
                              <svg className="h-4 w-auto" aria-hidden="true" viewBox="0 0 512 214">
                                <path fill="#635bff" d="M512 110.08c0-36.409-17.636-65.138-51.342-65.138-33.85 0-54.33 28.73-54.33 64.854 0 42.808 24.179 64.426 58.88 64.426 16.925 0 29.725-3.84 39.396-9.244v-28.445c-9.67 4.836-20.764 7.823-34.844 7.823-13.796 0-26.027-4.836-27.591-21.618h69.547c0-1.85.284-9.245.284-12.658m-70.258-13.511c0-16.071 9.814-22.756 18.774-22.756 8.675 0 17.92 6.685 17.92 22.756zm-90.31-51.627c-13.939 0-22.899 6.542-27.876 11.094l-1.85-8.818h-31.288v165.83l35.555-7.537.143-40.249c5.12 3.698 12.657 8.96 25.173 8.96 25.458 0 48.64-20.48 48.64-65.564-.142-41.245-23.609-63.716-48.498-63.716m-8.534 97.991c-8.391 0-13.37-2.986-16.782-6.684l-.143-52.765c3.698-4.124 8.818-6.968 16.925-6.968 12.942 0 21.902 14.506 21.902 33.137 0 19.058-8.818 33.28-21.902 33.28M241.493 36.551l35.698-7.68V0l-35.698 7.538zm0 10.809h35.698v124.444h-35.698zm-38.257 10.524L200.96 47.36h-30.72v124.444h35.556V87.467c8.39-10.951 22.613-8.96 27.022-7.396V47.36c-4.551-1.707-21.191-4.836-29.582 10.524m-71.112-41.386-34.702 7.395-.142 113.92c0 21.05 15.787 36.551 36.836 36.551 11.662 0 20.195-2.133 24.888-4.693V140.8c-4.55 1.849-27.022 8.391-27.022-12.658V77.653h27.022V47.36h-27.022zM35.982 83.484c0-5.546 4.551-7.68 12.09-7.68 10.808 0 24.461 3.272 35.27 9.103V51.484c-11.804-4.693-23.466-6.542-35.27-6.542C19.2 44.942 0 60.018 0 85.192c0 39.252 54.044 32.995 54.044 49.92 0 6.541-5.688 8.675-13.653 8.675-11.804 0-26.88-4.836-38.827-11.378v33.849c13.227 5.689 26.596 8.106 38.827 8.106 29.582 0 49.92-14.648 49.92-40.106-.142-42.382-54.329-34.845-54.329-50.774"></path>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </span>
                    </dd>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Support phone"}
                      </span>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        {"+1 503 555 0184"}
                      </span>
                    </dd>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Support email"}
                      </span>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        {"support@cedarvolt.studio"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Support email value info" id="base-ui-_r_d_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </dd>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Statement descriptor"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Statement descriptor info" id="base-ui-_r_f_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        <span className="flex flex-wrap gap-x-3 gap-y-1.5 items-center min-w-0">
                          <span className="min-w-0">
                            {"CEDARVOLT.STUDIO"}
                          </span>
                          <span className="flex-wrap gap-x-3 gap-y-1 inline-flex items-center min-w-0">
                            <span className="h-5 inline-flex items-center" aria-label="PayPal">
                              <svg className="h-4 w-auto" aria-hidden="true" id="Layer_1" viewBox="0 0 404.65 98.18">
                                <g>
                                  <path d="M311.63,21.96h-22.25c-1.52,0-2.82,1.11-3.05,2.61l-9,57.05c-.18,1.13.69,2.14,1.83,2.14h11.42c1.06,0,1.97-.77,2.14-1.83l2.55-16.17c.24-1.5,1.53-2.61,3.05-2.61h7.04c14.66,0,23.11-7.09,25.32-21.15.99-6.15.04-10.98-2.84-14.36-3.16-3.72-8.77-5.68-16.22-5.68ZM314.2,42.79c-1.22,7.99-7.32,7.99-13.22,7.99h-3.36l2.35-14.91c.14-.9.92-1.57,1.83-1.57h1.54c4.02,0,7.81,0,9.77,2.29,1.17,1.37,1.52,3.4,1.08,6.2Z" style={{fill: "rgb(0, 156, 222)"}}></path>
                                  <path d="M152.93,21.96h-22.25c-1.52,0-2.82,1.11-3.05,2.61l-9,57.05c-.18,1.13.69,2.14,1.83,2.14h10.62c1.52,0,2.82-1.11,3.05-2.61l2.43-15.39c.24-1.5,1.53-2.61,3.05-2.61h7.04c14.66,0,23.11-7.09,25.32-21.15.99-6.15.04-10.98-2.84-14.36-3.16-3.72-8.77-5.68-16.22-5.68ZM155.5,42.79c-1.22,7.99-7.32,7.99-13.22,7.99h-3.36l2.35-14.91c.14-.9.92-1.57,1.83-1.57h1.54c4.02,0,7.81,0,9.76,2.29,1.17,1.37,1.52,3.4,1.08,6.2Z" style={{fill: "rgb(0, 48, 135)"}}></path>
                                  <path d="M219.44,42.54h-10.65c-.91,0-1.69.66-1.83,1.57l-.47,2.98-.74-1.08c-2.31-3.35-7.45-4.47-12.58-4.47-11.77,0-21.83,8.92-23.78,21.43-1.02,6.24.43,12.21,3.97,16.37,3.25,3.82,7.89,5.42,13.42,5.42,9.49,0,14.75-6.1,14.75-6.1l-.48,2.96c-.18,1.13.69,2.15,1.83,2.15h9.59c1.52,0,2.82-1.11,3.05-2.61l5.76-36.47c.18-1.13-.69-2.14-1.83-2.14ZM204.59,63.27c-1.03,6.09-5.86,10.17-12.03,10.17-3.09,0-5.56-.99-7.15-2.88-1.58-1.87-2.17-4.52-1.67-7.48.96-6.03,5.87-10.25,11.94-10.25,3.03,0,5.48,1,7.1,2.9,1.63,1.91,2.27,4.59,1.81,7.53Z" style={{fill: "rgb(0, 48, 135)"}}></path>
                                  <path d="M378.13,42.54h-10.65c-.91,0-1.69.66-1.83,1.57l-.47,2.98-.74-1.08c-2.31-3.35-7.45-4.47-12.58-4.47-11.77,0-21.83,8.92-23.78,21.43-1.02,6.24.43,12.21,3.97,16.37,3.25,3.82,7.89,5.42,13.42,5.42,9.49,0,14.75-6.1,14.75-6.1l-.48,2.96c-.18,1.13.69,2.15,1.83,2.15h9.59c1.52,0,2.82-1.11,3.05-2.61l5.76-36.47c.18-1.13-.69-2.14-1.83-2.14ZM363.28,63.27c-1.03,6.09-5.86,10.17-12.03,10.17-3.09,0-5.56-.99-7.15-2.88-1.58-1.87-2.17-4.52-1.67-7.48.96-6.03,5.87-10.25,11.94-10.25,3.03,0,5.48,1,7.1,2.9,1.63,1.91,2.27,4.59,1.81,7.53Z" style={{fill: "rgb(0, 156, 222)"}}></path>
                                  <path d="M276.18,42.54h-10.71c-1.02,0-1.98.51-2.56,1.36l-14.77,21.76-6.26-20.91c-.39-1.31-1.6-2.21-2.96-2.21h-10.53c-1.27,0-2.17,1.25-1.76,2.45l11.79,34.61-11.09,15.65c-.87,1.23,0,2.93,1.51,2.93h10.7c1.01,0,1.96-.5,2.54-1.33l35.61-51.4c.85-1.23-.03-2.91-1.52-2.91Z" style={{fill: "rgb(0, 48, 135)"}}></path>
                                  <path d="M390.69,23.52l-9.13,58.1c-.18,1.13.69,2.14,1.83,2.14h9.18c1.52,0,2.82-1.11,3.05-2.61l9-57.05c.18-1.13-.69-2.14-1.83-2.14h-10.28c-.91,0-1.69.66-1.83,1.57Z" style={{fill: "rgb(0, 156, 222)"}}></path>
                                </g>
                                <g>
                                  <path d="M74.98,24.94c1.2-7.64,0-12.83-4.14-17.54-4.55-5.18-12.76-7.4-23.28-7.4h-30.51c-2.15,0-3.98,1.56-4.31,3.69L.03,84.26c-.25,1.59.98,3.03,2.59,3.03h18.84l-1.3,8.25c-.22,1.39.86,2.65,2.26,2.65h15.88c1.88,0,3.48-1.37,3.77-3.22l.16-.81,2.99-18.97.19-1.05c.29-1.86,1.89-3.22,3.77-3.22h2.38c15.38,0,27.43-6.25,30.95-24.32,1.47-7.55.71-13.86-3.18-18.29-1.18-1.34-2.64-2.45-4.35-3.35h0" style={{fill: "rgb(0, 156, 222)"}}></path>
                                  <path d="M74.98,24.94c1.2-7.64,0-12.83-4.14-17.54-4.55-5.18-12.76-7.4-23.28-7.4h-30.51c-2.15,0-3.98,1.56-4.31,3.69L.03,84.26c-.25,1.59.98,3.03,2.59,3.03h18.84l4.73-30.01-.15.94c.33-2.12,2.15-3.69,4.3-3.69h8.95c17.58,0,31.35-7.14,35.38-27.8.12-.61.22-1.2.31-1.79" style={{fill: "rgb(1, 33, 105)"}}></path>
                                  <path d="M31.27,25.05c.2-1.28,1.02-2.32,2.12-2.85.5-.24,1.06-.37,1.65-.37h23.92c2.83,0,5.48.19,7.89.57.69.11,1.36.24,2.01.38s1.29.31,1.9.49c.31.09.61.18.9.28,1.19.39,2.29.86,3.31,1.4,1.2-7.64,0-12.83-4.14-17.54-4.55-5.18-12.76-7.4-23.28-7.4h-30.51c-2.15,0-3.98,1.56-4.31,3.69L.03,84.26c-.25,1.59.98,3.03,2.59,3.03h18.84l4.73-30.01,5.08-32.23Z" style={{fill: "rgb(0, 48, 135)"}}></path>
                                </g>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </span>
                    </dd>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Also provided"}
                      </span>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        {"Business website, Support URL, Customer support note"}
                      </span>
                    </dd>
                  </div>
                </div>
              </dl>
            </FramePanel>
          </Frame>
          <Frame className="w-full" spacing="sm">
            <header className="flex flex-col gap-3 px-(--frame-panel-header-px) py-(--frame-panel-header-py) sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="font-semibold text-sm">
                  {"Management and Ownership"}
                </div>
                <div className="text-muted-foreground text-sm truncate">
                  {"People authorized to represent the business."}
                </div>
              </div>
              <div className="flex gap-2 items-center shrink-0">
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-plus" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  {"Add owner"}
                </Button>
                <Button type="button" tabIndex={0} aria-label="Edit management and ownership">
                  <svg className="lucide lucide-pencil" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PencilIcon" tabler="IconPencil" hugeicons="PenIcon" phosphor="PencilIcon" remixicon="RiPencilLine" data-icon="inline-start" aria-hidden="true">
                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    <path d="m15 5 4 4"></path>
                  </svg>
                  {"Edit"}
                </Button>
              </div>
            </header>
            <FramePanel className="p-0">
              <div className="flex flex-col gap-3 min-w-0 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="font-medium text-sm">
                    {"Mira Coleman"}
                  </p>
                  <p className="text-muted-foreground text-sm truncate">
                    {"Account representative"}
                  </p>
                </div>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary/10 border border-primary/10 dark:bg-primary/15 dark:border-primary/25 dark:text-primary disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative self-start sm:self-center style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-primary text-xs transition-shadow">
                  <svg className="lucide lucide-star" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine" aria-hidden="true">
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                  </svg>
                  {"Primary"}
                </Badge>
              </div>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <dl className="flex flex-col">
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Role"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Role info" id="base-ui-_r_h_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        {"Executive, owner, and representative"}
                      </span>
                    </dd>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Email"}
                      </span>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        {"mira@cedarvolt.studio"}
                      </span>
                    </dd>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Date of birth"}
                      </span>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        {"Born on May 18, 1987"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Date of birth value info" id="base-ui-_r_j_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </dd>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Address"}
                      </span>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        <span className="flex flex-col min-w-0">
                          <span className="min-w-0 truncate">
                            {"730 Alder Way"}
                          </span>
                          <span className="min-w-0 truncate">
                            {"Portland, OR 97209"}
                          </span>
                          <span className="min-w-0 truncate">
                            {"United States"}
                          </span>
                        </span>
                      </span>
                    </dd>
                  </div>
                  <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                </div>
                <div>
                  <div className="gap-1 grid px-4 py-3 sm:gap-5 sm:grid-cols-[minmax(10rem,0.95fr)_minmax(0,1.35fr)]">
                    <dt className="flex gap-1.5 items-center min-w-0 text-muted-foreground text-sm">
                      <span className="min-w-0 truncate">
                        {"Other information provided"}
                      </span>
                    </dt>
                    <dd className="flex gap-1.5 items-center leading-6 min-w-0 text-foreground text-sm">
                      <span className="min-w-0">
                        {"Last 4 SSN ending 4481, Phone"}
                      </span>
                      <Tooltip>
                      <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 cn-button cn-button-size-icon-xs cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:text-foreground inline-flex items-center justify-center outline-none select-none shrink-0 text-muted-foreground transition-all whitespace-nowrap" type="button" tabIndex={0} aria-label="Other information provided value info" id="base-ui-_r_l_" baseUiTooltipTrigger="">
                        <svg className="lucide lucide-info" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="InfoIcon" tabler="IconInfoCircle" hugeicons="InformationCircleIcon" phosphor="InfoIcon" remixicon="RiInformationLine" aria-hidden="true">
                          <circle cx={12} cy={12} r={10}></circle>
                          <path d="M12 16v-4"></path>
                          <path d="M12 8h.01"></path>
                        </svg>
                      </TooltipTrigger>
                      </Tooltip>
                    </dd>
                  </div>
                </div>
              </dl>
              <Separator data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              <div className="flex gap-3 items-center justify-between px-4 py-3">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="font-medium text-sm truncate">
                    {"Beneficial ownership"}
                  </p>
                  <p className="text-muted-foreground text-sm truncate">
                    {"1 additional owner provided."}
                  </p>
                </div>
                <Button type="button" tabIndex={0}>
                  <svg className="lucide lucide-chevron-down" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" data-icon="inline-start" aria-hidden="true">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                  {"Show 1 more owner"}
                </Button>
              </div>
            </FramePanel>
          </Frame>
        </div>
      </section>
    </main>
  )
}
