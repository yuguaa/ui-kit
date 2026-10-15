import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-start justify-center md:p-16 min-h-svh p-8 w-full">
      <Card className="max-w-4xl w-full" size="default">
        <CardHeader>
          <CardTitle>
            {"Import from other services"}
          </CardTitle>
          <CardDescription>
            {"Select maximum 2 services to copy tasks from and authentication details to access their API."}
          </CardDescription>
        </CardHeader>
        <CardContent className="gap-4 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
          <Frame className="transition-colors">
            <FramePanel className="before:hidden flex flex-col p-0 shadow-none!">
              <FieldLabel className="block border-0 cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center p-0! peer-disabled:cursor-not-allowed relative select-none w-full" htmlFor="import-service-stripe" id="import-service-stripe-label">
                <Field role="group" data-orientation="horizontal">
                  <Checkbox className="absolute right-2.5 rounded-full size-5 top-2.5 z-10" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_0_" aria-checked="false" aria-labelledby="import-service-stripe-label"></Checkbox>
                  <input id="import-service-stripe" tabIndex={-1} aria-hidden="true" type="checkbox" name="import-service-stripe" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                  <div className="flex flex-col gap-3 w-full">
                    <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="size-6" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                          <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-sm">
                        {"Stripe"}
                      </h2>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"Easy Import"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {"Payment processing platform for online transactions."}
                    </p>
                  </div>
                </Field>
              </FieldLabel>
            </FramePanel>
          </Frame>
          <Frame className="transition-colors">
            <FramePanel className="before:hidden flex flex-col p-0 shadow-none!">
              <FieldLabel className="block border-0 cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center p-0! peer-disabled:cursor-not-allowed relative select-none w-full" htmlFor="import-service-supabase" id="import-service-supabase-label">
                <Field role="group" data-orientation="horizontal">
                  <Checkbox className="absolute right-2.5 rounded-full size-5 top-2.5 z-10" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_3_" aria-checked="false" aria-labelledby="import-service-supabase-label"></Checkbox>
                  <input id="import-service-supabase" tabIndex={-1} aria-hidden="true" type="checkbox" name="import-service-supabase" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                  <div className="flex flex-col gap-3 w-full">
                    <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="size-6" aria-hidden="true" viewBox="0 0 109 113" fill="none">
                          <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                          <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity={0.2}></path>
                          <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                          <defs>
                            <lineargradient id="supabase-paint0_linear" x1={53.9738} y1={54.974} x2={94.1635} y2={71.8295} gradientUnits="userSpaceOnUse">
                              <stop stopColor="#249361"></stop>
                              <stop offset={1} stopColor="#3ECF8E"></stop>
                            </lineargradient>
                            <lineargradient id="supabase-paint1_linear" x1={36.1558} y1={30.578} x2={54.4844} y2={65.0806} gradientUnits="userSpaceOnUse">
                              <stop></stop>
                              <stop offset={1} stopOpacity={0}></stop>
                            </lineargradient>
                          </defs>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-sm">
                        {"Supabase"}
                      </h2>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"Easy Import"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {"Open-source Firebase alternative with database and authentication."}
                    </p>
                  </div>
                </Field>
              </FieldLabel>
            </FramePanel>
          </Frame>
          <Frame className="transition-colors">
            <FramePanel className="before:hidden flex flex-col p-0 shadow-none!">
              <FieldLabel className="block border-0 cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center p-0! peer-disabled:cursor-not-allowed relative select-none w-full" htmlFor="import-service-openai" id="import-service-openai-label">
                <Field role="group" data-orientation="horizontal">
                  <Checkbox className="absolute right-2.5 rounded-full size-5 top-2.5 z-10" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_6_" aria-checked="false" aria-labelledby="import-service-openai-label"></Checkbox>
                  <input id="import-service-openai" tabIndex={-1} aria-hidden="true" type="checkbox" name="import-service-openai" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                  <div className="flex flex-col gap-3 w-full">
                    <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <span className="dark:hidden" aria-hidden="true">
                          <svg className="size-6" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                            <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                          </svg>
                        </span>
                        <span className="dark:block hidden" aria-hidden="true">
                          <svg className="size-6" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                            <path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                          </svg>
                        </span>
                      </ItemMedia>
                    </Item>
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-sm">
                        {"OpenAI"}
                      </h2>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"Easy Import"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {"AI models and APIs for building intelligent applications."}
                    </p>
                  </div>
                </Field>
              </FieldLabel>
            </FramePanel>
          </Frame>
          <Frame className="transition-colors">
            <FramePanel className="before:hidden flex flex-col p-0 shadow-none!">
              <FieldLabel className="block border-0 cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center p-0! peer-disabled:cursor-not-allowed relative select-none w-full" htmlFor="import-service-discord" id="import-service-discord-label">
                <Field role="group" data-orientation="horizontal">
                  <Checkbox className="absolute right-2.5 rounded-full size-5 top-2.5 z-10" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_9_" aria-checked="false" aria-labelledby="import-service-discord-label"></Checkbox>
                  <input id="import-service-discord" tabIndex={-1} aria-hidden="true" type="checkbox" name="import-service-discord" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                  <div className="flex flex-col gap-3 w-full">
                    <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="size-6" aria-hidden="true" viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                          <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-sm">
                        {"Discord"}
                      </h2>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"Easy Import"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {"Communication platform for communities with chat and voice."}
                    </p>
                  </div>
                </Field>
              </FieldLabel>
            </FramePanel>
          </Frame>
          <Frame className="transition-colors">
            <FramePanel className="before:hidden flex flex-col p-0 shadow-none!">
              <FieldLabel className="block border-0 cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center p-0! peer-disabled:cursor-not-allowed relative select-none w-full" htmlFor="import-service-anthropic" id="import-service-anthropic-label">
                <Field role="group" data-orientation="horizontal">
                  <Checkbox className="absolute right-2.5 rounded-full size-5 top-2.5 z-10" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_c_" aria-checked="false" aria-labelledby="import-service-anthropic-label"></Checkbox>
                  <input id="import-service-anthropic" tabIndex={-1} aria-hidden="true" type="checkbox" name="import-service-anthropic" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                  <div className="flex flex-col gap-3 w-full">
                    <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <span className="dark:hidden" aria-hidden="true">
                          <svg className="size-6" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                            <title>
                              {"Anthropic"}
                            </title>
                            <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                          </svg>
                        </span>
                        <span className="dark:block hidden" aria-hidden="true">
                          <svg className="size-6" fill="#ffff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                            <title>
                              {"Anthropic"}
                            </title>
                            <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                          </svg>
                        </span>
                      </ItemMedia>
                    </Item>
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-sm">
                        {"Anthropic"}
                      </h2>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        {"2-Step Import"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {"AI safety company building reliable and interpretable AI systems."}
                    </p>
                  </div>
                </Field>
              </FieldLabel>
            </FramePanel>
          </Frame>
          <Frame className="transition-colors">
            <FramePanel className="before:hidden flex flex-col p-0 shadow-none!">
              <FieldLabel className="block border-0 cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center p-0! peer-disabled:cursor-not-allowed relative select-none w-full" htmlFor="import-service-resend" id="import-service-resend-label">
                <Field role="group" data-orientation="horizontal">
                  <Checkbox className="absolute right-2.5 rounded-full size-5 top-2.5 z-10" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_f_" aria-checked="false" aria-labelledby="import-service-resend-label"></Checkbox>
                  <input id="import-service-resend" tabIndex={-1} aria-hidden="true" type="checkbox" name="import-service-resend" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                  <div className="flex flex-col gap-3 w-full">
                    <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <span className="dark:hidden" aria-hidden="true">
                          <svg className="size-6" viewBox="0 0 1800 1800" fill="none">
                            <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="black"></path>
                          </svg>
                        </span>
                        <span className="dark:block hidden" aria-hidden="true">
                          <svg className="size-6" viewBox="0 0 1800 1800" fill="none">
                            <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="#FDFDFD"></path>
                          </svg>
                        </span>
                      </ItemMedia>
                    </Item>
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-sm">
                        {"Resend"}
                      </h2>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"Easy Import"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {"Modern email API built for developers with great deliverability."}
                    </p>
                  </div>
                </Field>
              </FieldLabel>
            </FramePanel>
          </Frame>
          <Frame className="transition-colors">
            <FramePanel className="before:hidden flex flex-col p-0 shadow-none!">
              <FieldLabel className="block border-0 cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center p-0! peer-disabled:cursor-not-allowed relative select-none w-full" htmlFor="import-service-neon" id="import-service-neon-label">
                <Field role="group" data-orientation="horizontal">
                  <Checkbox className="absolute right-2.5 rounded-full size-5 top-2.5 z-10" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_i_" aria-checked="false" aria-labelledby="import-service-neon-label"></Checkbox>
                  <input id="import-service-neon" tabIndex={-1} aria-hidden="true" type="checkbox" name="import-service-neon" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                  <div className="flex flex-col gap-3 w-full">
                    <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="size-6" aria-hidden="true" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                          <defs>
                            <lineargradient id="neon-a" x1="100%" x2="12.069%" y1="100%" y2="0%">
                              <stop offset="0%" stopColor="#62F755"></stop>
                              <stop offset="100%" stopColor="#8FF986" stopOpacity={0}></stop>
                            </lineargradient>
                            <lineargradient id="neon-b" x1="100%" x2="40.603%" y1="100%" y2="76.897%">
                              <stop offset="0%" stopOpacity=".9"></stop>
                              <stop offset="100%" stopColor="#1A1A1A" stopOpacity={0}></stop>
                            </lineargradient>
                          </defs>
                          <path fill="#00E0D9" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                          <path fill="url(#neon-a)" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                          <path fill="url(#neon-b)" fillOpacity=".4" d="M0 44.139C0 19.762 19.762 0 44.139 0H211.86C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723h-76.36C19.763 256 0 236.238 0 211.861V44.14Zm44.139-8.825c-4.879 0-8.825 3.946-8.825 8.818v167.73c0 4.878 3.946 8.831 8.818 8.831h77.688c2.44 0 3.087-1.977 3.087-4.416v-101.22c0-25.222 31.914-36.166 47.395-16.255l48.391 62.243V44.14c0-4.879.455-8.825-4.416-8.825H44.14Z"></path>
                          <path fill="#63F655" d="M211.861 0C236.238 0 256 19.762 256 44.139v142.649c0 25.216-31.915 36.16-47.388 16.256l-48.392-62.251v75.484c0 21.939-17.784 39.723-39.722 39.723a4.409 4.409 0 0 0 4.409-4.409V115.058c0-25.223 31.914-36.167 47.395-16.256l48.391 62.243V8.825c0-4.871-3.953-8.825-8.832-8.825Z"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-sm">
                        {"Neon"}
                      </h2>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        {"2-Step Import"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {"Serverless Postgres database with branching and auto-scaling."}
                    </p>
                  </div>
                </Field>
              </FieldLabel>
            </FramePanel>
          </Frame>
          <Frame className="transition-colors">
            <FramePanel className="before:hidden flex flex-col p-0 shadow-none!">
              <FieldLabel className="block border-0 cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center p-0! peer-disabled:cursor-not-allowed relative select-none w-full" htmlFor="import-service-planetscale" id="import-service-planetscale-label">
                <Field role="group" data-orientation="horizontal">
                  <Checkbox className="absolute right-2.5 rounded-full size-5 top-2.5 z-10" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_l_" aria-checked="false" aria-labelledby="import-service-planetscale-label"></Checkbox>
                  <input id="import-service-planetscale" tabIndex={-1} aria-hidden="true" type="checkbox" name="import-service-planetscale" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                  <div className="flex flex-col gap-3 w-full">
                    <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <span className="dark:hidden" aria-hidden="true">
                          <svg className="size-6" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                            <path d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                          </svg>
                        </span>
                        <span className="dark:block hidden" aria-hidden="true">
                          <svg className="size-6" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                            <path fill="#fff" d="M256 128a128 128 0 01-128 128zM128 0c52 0 96.7 31 116.8 75.5L75.5 244.8c-7.3-3.3-14.2-7.2-20.7-11.7L160 128h-32l-90.5 90.5A128 128 0 01128 0z"></path>
                          </svg>
                        </span>
                      </ItemMedia>
                    </Item>
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-sm">
                        {"PlanetScale"}
                      </h2>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                        {"2-Step Import"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {"MySQL-compatible serverless database with branching workflows."}
                    </p>
                  </div>
                </Field>
              </FieldLabel>
            </FramePanel>
          </Frame>
          <Frame className="transition-colors">
            <FramePanel className="before:hidden flex flex-col p-0 shadow-none!">
              <FieldLabel className="block border-0 cn-label cursor-pointer group-data-[disabled=true]:pointer-events-none items-center p-0! peer-disabled:cursor-not-allowed relative select-none w-full" htmlFor="import-service-redis" id="import-service-redis-label">
                <Field role="group" data-orientation="horizontal">
                  <Checkbox className="absolute right-2.5 rounded-full size-5 top-2.5 z-10" unchecked="" role="checkbox" tabIndex={0} id="base-ui-_r_o_" aria-checked="false" aria-labelledby="import-service-redis-label"></Checkbox>
                  <input id="import-service-redis" tabIndex={-1} aria-hidden="true" type="checkbox" name="import-service-redis" style={{clipPath: "inset(50%)", overflow: "hidden", whiteSpace: "nowrap", border: "0px", padding: "0px", width: "1px", height: "1px", margin: "-1px", position: "absolute"}} />
                  <div className="flex flex-col gap-3 w-full">
                    <Item className="bg-muted/60 border-2 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-11" variant="default" size="default">
                      <ItemMedia className="size-auto" variant="icon">
                        <svg className="size-6" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 256 220">
                          <path d="M246 169c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 209.4 24 179 10.3 172.5 3.6 169.3 0 166.5 0 164v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.3V160c0 2.5-3 5.3-10 9" fill="#912626"></path>
                          <path d="M246 143.2c-13.7 7.1-84.5 36.2-99.5 44-15.1 8-23.5 7.9-35.4 2.2-11.9-5.7-87.2-36.1-100.8-42.6-13.5-6.5-13.8-11-.5-16.2 13.4-5.2 88.2-34.6 104-40.3 16-5.6 21.4-5.8 34.9-1 13.4 5 83.8 33 97.1 37.9 13.3 4.9 13.8 8.9.2 16" fill="#C6302B"></path>
                          <path d="M246 127c-13.7 7.2-84.5 36.3-99.5 44.2-15.1 7.8-23.5 7.7-35.4 2-11.9-5.6-87.2-36-100.8-42.6-6.7-3.2-10.3-6-10.3-8.5V96.2s98-21.3 113.9-27c15.8-5.7 21.3-5.9 34.8-1 13.4 5 94 19.5 107.3 24.4V118c0 2.5-3 5.4-10 9" fill="#912626"></path>
                          <path d="M246 101.4c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 141.8 24 111.4 10.3 105c-13.5-6.5-13.8-11-.5-16.1C23.2 83.5 98 54 113.8 48.5c16-5.7 21.4-6 34.9-1 13.4 5 83.8 33 97.1 37.8 13.3 5 13.8 9 .2 16" fill="#C6302B"></path>
                          <path d="M246 83.7c-13.7 7-84.5 36.2-99.5 44-15.1 7.9-23.5 7.8-35.4 2.1C99.2 124.1 24 93.7 10.3 87.2 3.6 84 0 81.2 0 78.7v-26s98-21.3 113.9-27c15.8-5.6 21.3-5.8 34.8-.9 13.4 5 94 19.5 107.3 24.4v25.5c0 2.5-3 5.3-10 9" fill="#912626"></path>
                          <path d="M246 58c-13.7 7-84.5 36.1-99.5 44-15.1 7.9-23.5 7.8-35.4 2C99.2 98.5 24 68 10.3 61.6c-13.5-6.5-13.8-11-.5-16.2C23.2 40.1 98 10.7 113.8 5c16-5.6 21.4-5.8 34.9-.9 13.4 5 83.8 33 97.1 37.8 13.3 4.9 13.8 9 .2 16" fill="#C6302B"></path>
                          <path d="m159.3 32.8-22 2.2-5 11.9-8-13.2L99 31.4l19-6.9-5.8-10.5 17.8 7 16.7-5.5-4.5 10.9 17 6.4M131 90.3l-41-17 58.8-9.1-17.8 26M74 39.3c17.5 0 31.5 5.5 31.5 12.2 0 6.8-14 12.2-31.4 12.2s-31.5-5.4-31.5-12.2c0-6.7 14.1-12.2 31.5-12.2" fill="#FFF"></path>
                          <path d="M185.3 36 220 49.8l-34.8 13.7V36" fill="#621B1C"></path>
                          <path d="M146.8 51.2 185.3 36v27.5l-3.8 1.5-34.7-13.8" fill="#9A2928"></path>
                        </svg>
                      </ItemMedia>
                    </Item>
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold text-sm">
                        {"Redis"}
                      </h2>
                      <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                        {"Easy Import"}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {"In-memory data store for caching, messaging, and real-time apps."}
                    </p>
                  </div>
                </Field>
              </FieldLabel>
            </FramePanel>
          </Frame>
        </CardContent>
        <CardFooter className="justify-between">
          <Button type="button" tabIndex={0} extracted="1">
            <svg className="lucide lucide-arrow-left" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowLeftIcon" tabler="IconArrowLeft" hugeicons="ArrowLeft02Icon" phosphor="ArrowLeftIcon" remixicon="RiArrowLeftLine" aria-hidden="true">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            {"Go back"}
          </Button>
          <Button type="button" tabIndex={0}>
            {"Next step"}
            <svg className="lucide lucide-arrow-right" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ArrowRightIcon" tabler="IconArrowRight" hugeicons="ArrowRight02Icon" phosphor="ArrowRightIcon" remixicon="RiArrowRightLine" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
