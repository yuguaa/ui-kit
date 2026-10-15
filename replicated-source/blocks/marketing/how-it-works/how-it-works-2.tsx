import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="w-full">
      <section className="bg-background lg:px-8 px-4 py-12 sm:px-6 text-foreground w-full" aria-labelledby="how-it-works-2-title">
        <style>{`
@keyframes hiw2-drift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
[data-slot="hiw2-drift"] {
  animation: hiw2-drift var(--hiw2-period) ease-in-out var(--hiw2-delay) infinite;
}
@keyframes hiw2-sweep-a {
  0%, 100% { transform: translate(0px, 0px); opacity: 0; }
  4% { opacity: 0.6; }
  40% { opacity: 0.6; }
  46% { transform: translate(95.40px, 55.08px); opacity: 0; }
}
@keyframes hiw2-sweep-b {
  0%, 100% { transform: translate(0px, 0px); opacity: 0; }
  4% { opacity: 0.6; }
  40% { opacity: 0.6; }
  46% { transform: translate(95.40px, -55.08px); opacity: 0; }
}
[data-slot="hiw2-sweep"] {
  animation-duration: 9s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
[data-slot="hiw2-sweep"][data-axis="a"] { animation-name: hiw2-sweep-a; }
[data-slot="hiw2-sweep"][data-axis="b"] { animation-name: hiw2-sweep-b; }
[data-slot="hiw2-sweep"][data-leg="2"] { animation-delay: 4.50s; }
@media (prefers-reduced-motion: reduce) {
  [data-slot="hiw2-drift"],
  [data-slot="hiw2-sweep"] { animation: none; }
}
`}</style>
        <div className="@container flex flex-col gap-8 max-w-7xl mx-auto w-full">
          <div className="@5xl:grid-cols-[1fr_auto] @5xl:items-end @6xl:grid-cols-[1fr_auto_20rem] gap-8 grid">
            <div className="flex flex-col gap-4 items-start min-w-0">
              <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-3.5! bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1.5 h-7 min-w-6 outline-none px-2 py-0.75 relative rounded-full text-secondary-foreground text-sm transition-shadow">
                <svg className="lucide lucide-code-xml" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="CodeXmlIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
                How It Works
              </Badge>
              <h2 className="@xl:text-4xl font-semibold text-3xl" id="how-it-works-2-title">
                Build faster with NeUI
              </h2>
              <p className="leading-6 text-base text-muted-foreground">
                Install NeUI, find the right components, customize the source, and ship polished interfaces faster.
              </p>
            </div>
            <div className="@5xl:justify-end @5xl:w-80 flex flex-wrap gap-x-2.5 gap-y-2 items-center">
              <Button href="#" role="button" tabIndex="0">
                <svg className="lucide lucide-book-open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" data-icon="inline-start" aria-hidden="true">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
                View Docs
              </Button>
              <Button href="#" role="button" tabIndex="0">
                <svg className="lucide lucide-layout-grid" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutGridIcon" tabler="IconLayoutGrid" hugeicons="GridViewIcon" phosphor="SquaresFourIcon" remixicon="RiGalleryView2" data-icon="inline-start" aria-hidden="true">
                  <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                  <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                  <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                  <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                </svg>
                Browse Registry
              </Button>
            </div>
            <ul className="@6xl:w-80 divide-border divide-y flex flex-col" role="list">
              <li>
                <Item className="border-0" variant="default" size="default">
                  <IconTile className="[--icon-tile-size:--spacing(7)] self-start" variant="outline" size="default">
                    <svg className="lucide lucide-layout-panel-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutPanelLeftIcon" tabler="IconLayoutBoardSplit" hugeicons="DashboardSquare01Icon" phosphor="LayoutIcon" remixicon="RiLayoutLeftLine" aria-hidden="true">
                      <rect width="7" height="18" x="3" y="3" rx="1"></rect>
                      <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                      <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                    </svg>
                  </IconTile>
                  <ItemContent className="gap-px">
                    <ItemTitle className="leading-5 line-clamp-none">
                      Curated Library
                    </ItemTitle>
                    <ItemDescription className="leading-5 line-clamp-none">
                      Components, templates, and production-ready blocks in one place.
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </li>
              <li>
                <Item className="border-0" variant="default" size="default">
                  <IconTile className="[--icon-tile-size:--spacing(7)] self-start" variant="outline" size="default">
                    <svg className="lucide lucide-workflow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WorkflowIcon" tabler="IconSitemap" hugeicons="WorkflowCircle01Icon" phosphor="TreeStructureIcon" remixicon="RiFlowChart" aria-hidden="true">
                      <rect width="8" height="8" x="3" y="3" rx="2"></rect>
                      <path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
                      <rect width="8" height="8" x="13" y="13" rx="2"></rect>
                    </svg>
                  </IconTile>
                  <ItemContent className="gap-px">
                    <ItemTitle className="leading-5 line-clamp-none">
                      CLI Compatible
                    </ItemTitle>
                    <ItemDescription className="leading-5 line-clamp-none">
                      Add parts with the shadcn command you already use.
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </li>
            </ul>
          </div>
          <ul className="@2xl:grid-cols-2 @6xl:grid-cols-4 gap-8 grid grid-cols-1" role="list">
            <li className="flex">
              <Card className="gap-0 py-0 w-full" size="default">
                <div className="bg-background dark overflow-clip relative w-full" aria-hidden="true" style={{height: "166.5px"}}>
                  <div className="-translate-x-1/2 absolute left-1/2 top-0" style={{width: "600px", height: "166.5px"}}>
                    <svg className="absolute inset-0 overflow-visible size-full" aria-hidden="true" viewBox="0 0 600 166.5">
                      <defs>
                        <pattern id="hiw2-art-0-grid" patternUnits="userSpaceOnUse" width="54" height="54">
                          <rect width="54" height="54" fill="none" stroke="white" strokeWidth="0.58"></rect>
                        </pattern>
                        <lineargradient id="hiw2-art-0-run-a-20" gradientUnits="userSpaceOnUse" x1="157.46929999999998" y1="57" x2="297.76535" y2="138">
                          <stop stopColor="white" stopOpacity="0"></stop>
                          <stop offset="0.08" stopColor="white"></stop>
                          <stop offset="0.92" stopColor="white"></stop>
                          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </lineargradient>
                        <lineargradient id="hiw2-art-0-run-b10" gradientUnits="userSpaceOnUse" x1="297.76535" y1="138" x2="438.06140000000005" y2="57">
                          <stop stopColor="white" stopOpacity="0"></stop>
                          <stop offset="0.08" stopColor="white"></stop>
                          <stop offset="0.92" stopColor="white"></stop>
                          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </lineargradient>
                      </defs>
                      <rect width="100%" height="100%" fill="white" fillOpacity="0.02"></rect>
                      <g transform="translate(251 111)">
                        <g transform="matrix(0.866025,-0.5,0.866025,0.5,0,0)">
                          <rect x="-648" y="-648" width="1296" height="1296" fill="url(#hiw2-art-0-grid)" fillOpacity="0.15"></rect>
                        </g>
                      </g>
                      <line data-axis="a" data-leg="1" x1="157.46929999999998" y1="57" x2="202.364036" y2="82.92" stroke="url(#hiw2-art-0-run-a-20)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity="0"></line>
                      <line data-axis="b" data-leg="2" x1="297.76535" y1="138" x2="342.66008600000004" y2="112.08" stroke="url(#hiw2-art-0-run-b10)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity="0"></line>
                    </svg>
                    <div className="absolute" style={{left: "251px", top: "79px"}}>
                      <div style={{"--hiw2-period": "7.4s", "--hiw2-delay": "0.00s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full [filter:brightness(0)_invert(1)] absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg viewBox="25.668 25.1352 49.6644 50" fill="none" aria-hidden="true">
                            <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                            <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "391.296px", top: "52px"}}>
                      <div style={{"--hiw2-period": "9.1s", "--hiw2-delay": "0.45s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg viewBox="0 0 20 24" fill="none">
                            <path d="M0 1.5C0 0.671573 0.671573 0 1.5 0H8.5C9.32843 0 10 0.671573 10 1.5V8H1.5C0.671573 8 0 7.32843 0 6.5V1.5Z" fill="#F26207"></path>
                            <path d="M10 8H18.5C19.3284 8 20 8.67157 20 9.5V14.5C20 15.3284 19.3284 16 18.5 16H10V8Z" fill="#F26207"></path>
                            <path d="M0 17.5C0 16.6716 0.671573 16 1.5 16H10V22.5C10 23.3284 9.32843 24 8.5 24H1.5C0.671573 24 0 23.3284 0 22.5V17.5Z" fill="#F26207"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "297.765px", top: "160px"}}>
                      <div style={{"--hiw2-period": "8.3s", "--hiw2-delay": "0.90s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg viewBox="0 0 109 113" fill="none">
                            <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint0_linear)"></path>
                            <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase-paint1_linear)" fillOpacity="0.2"></path>
                            <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E"></path>
                            <defs>
                              <lineargradient id="supabase-paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#249361"></stop>
                                <stop offset="1" stopColor="#3ECF8E"></stop>
                              </lineargradient>
                              <lineargradient id="supabase-paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
                                <stop></stop>
                                <stop offset="1" stopOpacity="0"></stop>
                              </lineargradient>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "157.469px", top: "187px"}}>
                      <div style={{"--hiw2-period": "6.8s", "--hiw2-delay": "1.35s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="flex flex-col gap-2 py-(--card-spacing)">
                  <div className="flex gap-2 items-start">
                    <CardTitle className="flex-1 leading-6 min-w-0">
                      Install NeUI
                    </CardTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5.5 min-w-5.5 mt-px outline-none px-2 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                      Step 1
                    </Badge>
                  </div>
                  <CardDescription className="leading-5">
                    Add NeUI to your project and configure the tools you want to use.
                  </CardDescription>
                </CardContent>
                <CardFooter className="bg-muted/50 border-t mt-auto pb-(--card-spacing)">
                  <Button className="w-full" href="#" role="button" tabIndex="0">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </li>
            <li className="flex">
              <Card className="gap-0 py-0 w-full" size="default">
                <div className="bg-background dark overflow-clip relative w-full" aria-hidden="true" style={{height: "166.5px"}}>
                  <div className="-translate-x-1/2 absolute left-1/2 top-0" style={{width: "600px", height: "166.5px"}}>
                    <svg className="absolute inset-0 overflow-visible size-full" aria-hidden="true" viewBox="0 0 600 166.5">
                      <defs>
                        <pattern id="hiw2-art-1-grid" patternUnits="userSpaceOnUse" width="54" height="54">
                          <rect width="54" height="54" fill="none" stroke="white" strokeWidth="0.58"></rect>
                        </pattern>
                        <lineargradient id="hiw2-art-1-run-b0-2" gradientUnits="userSpaceOnUse" x1="157.46929999999998" y1="165" x2="297.76535" y2="84">
                          <stop stopColor="white" stopOpacity="0"></stop>
                          <stop offset="0.08" stopColor="white"></stop>
                          <stop offset="0.92" stopColor="white"></stop>
                          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </lineargradient>
                        <lineargradient id="hiw2-art-1-run-a01" gradientUnits="userSpaceOnUse" x1="297.76535" y1="84" x2="438.06140000000005" y2="165">
                          <stop stopColor="white" stopOpacity="0"></stop>
                          <stop offset="0.08" stopColor="white"></stop>
                          <stop offset="0.92" stopColor="white"></stop>
                          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </lineargradient>
                      </defs>
                      <rect width="100%" height="100%" fill="white" fillOpacity="0.02"></rect>
                      <g transform="translate(251 111)">
                        <g transform="matrix(0.866025,-0.5,0.866025,0.5,0,0)">
                          <rect x="-648" y="-648" width="1296" height="1296" fill="url(#hiw2-art-1-grid)" fillOpacity="0.15"></rect>
                        </g>
                      </g>
                      <line data-axis="b" data-leg="1" x1="157.46929999999998" y1="165" x2="202.364036" y2="139.07999999999998" stroke="url(#hiw2-art-1-run-b0-2)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity="0"></line>
                      <line data-axis="a" data-leg="2" x1="297.76535" y1="84" x2="342.66008600000004" y2="109.92" stroke="url(#hiw2-art-1-run-a01)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity="0"></line>
                    </svg>
                    <div className="absolute" style={{left: "251px", top: "79px"}}>
                      <div style={{"--hiw2-period": "10.2s", "--hiw2-delay": "0.00s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full [filter:brightness(0)_invert(1)] absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg viewBox="28 28 128 132" fill="none">
                            <path fill="#F3B01C" d="M108.092 130.021c18.166-2.018 35.293-11.698 44.723-27.854-4.466 39.961-48.162 65.218-83.83 49.711-3.286-1.425-6.115-3.796-8.056-6.844-8.016-12.586-10.65-28.601-6.865-43.135 10.817 18.668 32.81 30.111 54.028 28.122Z"></path>
                            <path fill="#8D2676" d="M53.401 90.174c-7.364 17.017-7.682 36.94 1.345 53.336-31.77-23.902-31.423-75.052-.388-98.715 2.87-2.187 6.282-3.485 9.86-3.683 14.713-.776 29.662 4.91 40.146 15.507-21.3.212-42.046 13.857-50.963 33.555Z"></path>
                            <path fill="#EE342F" d="M114.637 61.855C103.89 46.87 87.069 36.668 68.639 36.358c35.625-16.17 79.446 10.047 84.217 48.807.444 3.598-.139 7.267-1.734 10.512-6.656 13.518-18.998 24.002-33.42 27.882 10.567-19.599 9.263-43.544-3.065-61.704Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "204.235px", top: "-2px"}}>
                      <div style={{"--hiw2-period": "9.6s", "--hiw2-delay": "0.45s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "391.296px", top: "52px"}}>
                      <div style={{"--hiw2-period": "8.7s", "--hiw2-delay": "0.90s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                            <path d="M128 0C57.33 0 0 57.33 0 128s57.33 128 128 128 128-57.33 128-128S198.67 0 128 0Zm-6.67 230.605v-80.288H76.699l64.128-124.922v80.288h42.966L121.33 230.605Z" fill="#009688"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "110.704px", top: "106px"}}>
                      <div style={{"--hiw2-period": "7.9s", "--hiw2-delay": "1.35s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg viewBox="0 0 256 299" preserveAspectRatio="xMidYMid">
                            <defs>
                              <lineargradient id="surrealdb-a" x1="31.047%" x2="68.957%" y1="11.705%" y2="88.303%">
                                <stop offset="0%" stopColor="#FF00A0"></stop>
                                <stop offset="100%" stopColor="#9600FF"></stop>
                              </lineargradient>
                            </defs>
                            <path fill="url(#surrealdb-a)" d="m128 78.568 71.101 39.375v-15.787L128 62.872c-10.575 5.852-61.684 34.103-71.101 39.284 8.747 4.846 100.602 55.589 156.434 86.43v15.726C205.745 208.518 128 251.46 128 251.46a76502.912 76502.912 0 0 1-85.333-47.147v-47.146L128 204.312l14.232-7.862-113.798-62.842v78.598L128 267.185c9.813-5.425 92.282-50.987 99.535-55.01v-31.42L85.333 102.155 128 78.568ZM28.434 86.43v31.452l142.202 78.598-42.666 23.589-71.101-39.376v15.787l71.1 39.284c10.576-5.852 61.684-34.103 71.101-39.284-8.746-4.846-100.571-55.589-156.403-86.461V94.293C50.255 90.088 128 47.147 128 47.147a76501.239 76501.239 0 0 0 85.333 47.146v47.147L128 94.293l-14.232 7.863 113.767 62.873V86.43L128 31.421c-9.844 5.455-92.282 51.017-99.566 55.01ZM128 0 0 70.735v157.166l128 70.735 128-70.705V70.735L128 0Zm113.737 220.038L128 282.91 14.232 220.038V78.598L128 15.726l113.768 62.872-.03 141.44Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "157.469px", top: "187px"}}>
                      <div style={{"--hiw2-period": "10.8s", "--hiw2-delay": "1.80s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="flex flex-col gap-2 py-(--card-spacing)">
                  <div className="flex gap-2 items-start">
                    <CardTitle className="flex-1 leading-6 min-w-0">
                      Find components
                    </CardTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5.5 min-w-5.5 mt-px outline-none px-2 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                      Step 2
                    </Badge>
                  </div>
                  <CardDescription className="leading-5">
                    Browse the registry or use AI-assisted tools for your interface.
                  </CardDescription>
                </CardContent>
                <CardFooter className="bg-muted/50 border-t mt-auto pb-(--card-spacing)">
                  <Button className="w-full" href="#" role="button" tabIndex="0">
                    Explore Components
                  </Button>
                </CardFooter>
              </Card>
            </li>
            <li className="flex">
              <Card className="gap-0 py-0 w-full" size="default">
                <div className="bg-background dark overflow-clip relative w-full" aria-hidden="true" style={{height: "166.5px"}}>
                  <div className="-translate-x-1/2 absolute left-1/2 top-0" style={{width: "600px", height: "166.5px"}}>
                    <svg className="absolute inset-0 overflow-visible size-full" aria-hidden="true" viewBox="0 0 600 166.5">
                      <defs>
                        <pattern id="hiw2-art-2-grid" patternUnits="userSpaceOnUse" width="54" height="54">
                          <rect width="54" height="54" fill="none" stroke="white" strokeWidth="0.58"></rect>
                        </pattern>
                        <lineargradient id="hiw2-art-2-run-a-31" gradientUnits="userSpaceOnUse" x1="157.46929999999998" y1="3" x2="297.76535" y2="84">
                          <stop stopColor="white" stopOpacity="0"></stop>
                          <stop offset="0.08" stopColor="white"></stop>
                          <stop offset="0.92" stopColor="white"></stop>
                          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </lineargradient>
                        <lineargradient id="hiw2-art-2-run-b01" gradientUnits="userSpaceOnUse" x1="297.76535" y1="84" x2="438.06140000000005" y2="3">
                          <stop stopColor="white" stopOpacity="0"></stop>
                          <stop offset="0.08" stopColor="white"></stop>
                          <stop offset="0.92" stopColor="white"></stop>
                          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </lineargradient>
                      </defs>
                      <rect width="100%" height="100%" fill="white" fillOpacity="0.02"></rect>
                      <g transform="translate(251 111)">
                        <g transform="matrix(0.866025,-0.5,0.866025,0.5,0,0)">
                          <rect x="-648" y="-648" width="1296" height="1296" fill="url(#hiw2-art-2-grid)" fillOpacity="0.15"></rect>
                        </g>
                      </g>
                      <line data-axis="a" data-leg="1" x1="157.46929999999998" y1="3" x2="202.364036" y2="28.92" stroke="url(#hiw2-art-2-run-a-31)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity="0"></line>
                      <line data-axis="b" data-leg="2" x1="297.76535" y1="84" x2="342.66008600000004" y2="58.08" stroke="url(#hiw2-art-2-run-b01)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity="0"></line>
                    </svg>
                    <div className="absolute" style={{left: "251px", top: "79px"}}>
                      <div style={{"--hiw2-period": "6.4s", "--hiw2-delay": "0.00s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full [filter:brightness(0)_invert(1)] absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg viewBox="0 0 256 199" preserveAspectRatio="xMidYMid">
                            <path d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046-19.692-2.961-39.203-2.961-58.533 0-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632 108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237 136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848 21.142-6.58 42.646-16.637 64.815-33.213 5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2 0 14.375-10.148 26.18-23.015 26.18Z" fill="#5865F2"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "391.296px", top: "52px"}}>
                      <div style={{"--hiw2-period": "9.1s", "--hiw2-delay": "0.45s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 220">
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
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "110.704px", top: "106px"}}>
                      <div style={{"--hiw2-period": "7.1s", "--hiw2-delay": "0.90s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg viewBox="0 0 36 36">
                            <g fill="none">
                              <circle fill="#8247E5" cx="18" cy="18" r="18"></circle>
                              <path d="M24.172 13.954c-.438-.25-1.002-.25-1.504 0l-3.509 2.068-2.38 1.316-3.447 2.068c-.439.25-1.003.25-1.504 0l-2.695-1.63a1.527 1.527 0 0 1-.752-1.315v-3.133c0-.502.25-1.003.752-1.316l2.695-1.567c.438-.25 1.002-.25 1.504 0l2.694 1.63c.439.25.752.751.752 1.315v2.068l2.381-1.378v-2.13c0-.502-.25-1.004-.752-1.317l-5.013-2.945c-.438-.25-1.002-.25-1.504 0l-5.138 3.008c-.501.25-.752.752-.752 1.253v5.89c0 .502.25 1.003.752 1.316l5.076 2.946c.438.25 1.002.25 1.504 0l3.446-2.006 2.381-1.378 3.447-2.006c.438-.25 1.002-.25 1.504 0l2.694 1.567c.439.25.752.752.752 1.316v3.133c0 .501-.25 1.003-.752 1.316l-2.632 1.567c-.438.25-1.002.25-1.504 0l-2.694-1.567a1.527 1.527 0 0 1-.752-1.316v-2.005L16.84 22.1v2.067c0 .502.25 1.003.752 1.316l5.075 2.946c.439.25 1.003.25 1.504 0l5.076-2.946c.439-.25.752-.752.752-1.316v-5.953c0-.5-.25-1.002-.752-1.316l-5.076-2.945z" fill="#FFF"></path>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "297.765px", top: "160px"}}>
                      <div style={{"--hiw2-period": "7.4s", "--hiw2-delay": "1.35s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg viewBox="0 0 201 201" fill="none">
                            <path d="M100.517 200.483C155.745 200.483 200.517 155.712 200.517 100.483C200.517 45.2549 155.745 0.483337 100.517 0.483337C45.2882 0.483337 0.516663 45.2549 0.516663 100.483C0.516663 155.712 45.2882 200.483 100.517 200.483Z" fill="black"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M126.452 111.118L141.537 126.159L100.531 167.121L59.5688 126.159L74.6533 111.118L100.531 136.995L126.452 111.118ZM100.531 85.1965L115.832 100.498L100.531 115.799L85.2732 100.541V100.498L87.9607 97.8103L89.2611 96.5099L100.531 85.1965ZM48.949 85.4133L64.0335 100.498L48.949 115.539L33.8644 100.454L48.949 85.4133ZM152.113 85.4133L167.198 100.498L152.113 115.539L137.029 100.454L152.113 85.4133ZM100.531 33.8311L141.493 74.7934L126.409 89.8779L100.531 63.9568L74.6533 89.8346L59.5688 74.7934L100.531 33.8311Z" fill="#F3BA2F"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "157.469px", top: "187px"}}>
                      <div style={{"--hiw2-period": "6.8s", "--hiw2-delay": "1.80s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="flex flex-col gap-2 py-(--card-spacing)">
                  <div className="flex gap-2 items-start">
                    <CardTitle className="flex-1 leading-6 min-w-0">
                      Customize
                    </CardTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5.5 min-w-5.5 mt-px outline-none px-2 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                      Step 3
                    </Badge>
                  </div>
                  <CardDescription className="leading-5">
                    Edit the source, styling, variants, and behavior inside your project.
                  </CardDescription>
                </CardContent>
                <CardFooter className="bg-muted/50 border-t mt-auto pb-(--card-spacing)">
                  <Button className="w-full" href="#" role="button" tabIndex="0">
                    Read Documentation
                  </Button>
                </CardFooter>
              </Card>
            </li>
            <li className="flex">
              <Card className="gap-0 py-0 w-full" size="default">
                <div className="bg-background dark overflow-clip relative w-full" aria-hidden="true" style={{height: "166.5px"}}>
                  <div className="-translate-x-1/2 absolute left-1/2 top-0" style={{width: "600px", height: "166.5px"}}>
                    <svg className="absolute inset-0 overflow-visible size-full" aria-hidden="true" viewBox="0 0 600 166.5">
                      <defs>
                        <pattern id="hiw2-art-3-grid" patternUnits="userSpaceOnUse" width="54" height="54">
                          <rect width="54" height="54" fill="none" stroke="white" strokeWidth="0.58"></rect>
                        </pattern>
                        <lineargradient id="hiw2-art-3-run-b0-2" gradientUnits="userSpaceOnUse" x1="157.46929999999998" y1="175" x2="297.76535" y2="94">
                          <stop stopColor="white" stopOpacity="0"></stop>
                          <stop offset="0.08" stopColor="white"></stop>
                          <stop offset="0.92" stopColor="white"></stop>
                          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </lineargradient>
                        <lineargradient id="hiw2-art-3-run-a01" gradientUnits="userSpaceOnUse" x1="297.76535" y1="94" x2="438.06140000000005" y2="175">
                          <stop stopColor="white" stopOpacity="0"></stop>
                          <stop offset="0.08" stopColor="white"></stop>
                          <stop offset="0.92" stopColor="white"></stop>
                          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                        </lineargradient>
                      </defs>
                      <rect width="100%" height="100%" fill="white" fillOpacity="0.02"></rect>
                      <g transform="translate(251 121)">
                        <g transform="matrix(0.866025,-0.5,0.866025,0.5,0,0)">
                          <rect x="-648" y="-648" width="1296" height="1296" fill="url(#hiw2-art-3-grid)" fillOpacity="0.15"></rect>
                        </g>
                      </g>
                      <line data-axis="b" data-leg="1" x1="157.46929999999998" y1="175" x2="202.364036" y2="149.07999999999998" stroke="url(#hiw2-art-3-run-b0-2)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity="0"></line>
                      <line data-axis="a" data-leg="2" x1="297.76535" y1="94" x2="342.66008600000004" y2="119.92" stroke="url(#hiw2-art-3-run-a01)" strokeLinecap="round" vector-effect="non-scaling-stroke" opacity="0"></line>
                    </svg>
                    <div className="absolute" style={{left: "251px", top: "89px"}}>
                      <div style={{"--hiw2-period": "10.8s", "--hiw2-delay": "0.00s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full [filter:brightness(0)_invert(1)] absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
                            <path fill="#625DF5" d="M256 113.765h-74.858l64.83-37.43-14.237-24.667-64.83 37.43 37.421-64.825-24.667-14.246-37.421 64.826V0h-28.476v74.86L76.326 10.027 51.667 24.266 89.096 89.09 24.265 51.668l-14.238 24.66 64.83 37.43H0v28.477h74.85l-64.823 37.43 14.238 24.667 64.824-37.423-37.43 64.825 24.667 14.239 37.429-64.832V256h28.476v-74.853l37.422 64.826 24.665-14.239-37.428-64.832 64.83 37.43 14.24-24.667-64.825-37.423h74.85v-28.477H256ZM128 166.73c-21.472 0-38.876-17.403-38.876-38.876 0-21.472 17.404-38.876 38.876-38.876 21.472 0 38.875 17.404 38.875 38.876 0 21.473-17.403 38.876-38.875 38.876Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "204.235px", top: "8px"}}>
                      <div style={{"--hiw2-period": "8.3s", "--hiw2-delay": "0.45s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg viewBox="0 0 228 120">
                            <path fillRule="evenodd" clipRule="evenodd" d="M204 48C192.817 48 183.42 40.3514 180.756 30H153.248C147.382 30 142.376 34.241 141.412 40.0272L140.425 45.9456C139.489 51.5648 136.646 56.4554 132.626 60C136.646 63.5446 139.489 68.4352 140.425 74.0544L141.412 79.9728C142.376 85.759 147.382 90 153.248 90H156.756C159.42 79.6486 168.817 72 180 72C193.255 72 204 82.7452 204 96C204 109.255 193.255 120 180 120C168.817 120 159.42 112.351 156.756 102H153.248C141.516 102 131.504 93.5181 129.575 81.9456L128.588 76.0272C127.624 70.241 122.618 66 116.752 66H107.244C104.58 76.3514 95.183 84 84 84C72.817 84 63.4204 76.3514 60.7561 66H47.2439C44.5796 76.3514 35.183 84 24 84C10.7452 84 0 73.2548 0 60C0 46.7452 10.7452 36 24 36C35.183 36 44.5796 43.6486 47.2439 54H60.7561C63.4204 43.6486 72.817 36 84 36C95.183 36 104.58 43.6486 107.244 54H116.752C122.618 54 127.624 49.759 128.588 43.9728L129.575 38.0544C131.504 26.4819 141.516 18 153.248 18L180.756 18C183.42 7.64864 192.817 0 204 0C217.255 0 228 10.7452 228 24C228 37.2548 217.255 48 204 48ZM204 36C210.627 36 216 30.6274 216 24C216 17.3726 210.627 12 204 12C197.373 12 192 17.3726 192 24C192 30.6274 197.373 36 204 36ZM24 72C30.6274 72 36 66.6274 36 60C36 53.3726 30.6274 48 24 48C17.3726 48 12 53.3726 12 60C12 66.6274 17.3726 72 24 72ZM96 60C96 66.6274 90.6274 72 84 72C77.3726 72 72 66.6274 72 60C72 53.3726 77.3726 48 84 48C90.6274 48 96 53.3726 96 60ZM192 96C192 102.627 186.627 108 180 108C173.373 108 168 102.627 168 96C168 89.3726 173.373 84 180 84C186.627 84 192 89.3726 192 96Z" fill="#ea4b71"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "391.296px", top: "62px"}}>
                      <div style={{"--hiw2-period": "6.4s", "--hiw2-delay": "0.90s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg viewBox="0 0 24 24" fill="#008fe2">
                            <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "110.704px", top: "116px"}}>
                      <div style={{"--hiw2-period": "9.6s", "--hiw2-delay": "1.35s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                        <div className="[&_svg]:size-full absolute origin-top-left" style={{left: "25.9808px", top: "0px", width: "24px", height: "24px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)"}}>
                          <svg fill="none" viewBox="0 0 160 160">
                            <rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)"></rect>
                            <rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)"></rect>
                            <rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)"></rect>
                            <rect width="9.631" height="40.852" fill="#C5F74F" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)"></rect>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="absolute" style={{left: "157.469px", top: "197px"}}>
                      <div style={{"--hiw2-period": "10.2s", "--hiw2-delay": "1.80s"}}>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", boxShadow: "rgb(5, 5, 5) -1.231px 1.231px 0px 0px, rgb(5, 5, 5) -2.462px 2.462px 0px 0px, rgb(5, 5, 5) -3.692px 3.692px 0px 0px, rgb(5, 5, 5) -4.923px 4.923px 0px 0px, rgb(5, 5, 5) -6.154px 6.154px 0px 0px, rgb(5, 5, 5) -7.385px 7.385px 0px 0px, rgb(5, 5, 5) -8.615px 8.615px 0px 0px, rgb(5, 5, 5) -9.846px 9.846px 0px 0px, rgb(5, 5, 5) -11.077px 11.077px 0px 0px, rgb(5, 5, 5) -12.308px 12.308px 0px 0px, rgb(5, 5, 5) -13.538px 13.538px 0px 0px, rgb(5, 5, 5) -14.769px 14.769px 0px 0px, rgb(5, 5, 5) -16px 16px 0px 0px, rgb(5, 5, 5) -17.231px 17.231px 0px 0px, rgb(5, 5, 5) -18.462px 18.462px 0px 0px, rgb(5, 5, 5) -19.692px 19.692px 0px 0px, rgb(5, 5, 5) -20.923px 20.923px 0px 0px, rgb(5, 5, 5) -22.154px 22.154px 0px 0px, rgb(5, 5, 5) -23.385px 23.385px 0px 0px, rgb(5, 5, 5) -24.615px 24.615px 0px 0px, rgb(5, 5, 5) -25.846px 25.846px 0px 0px, rgb(5, 5, 5) -27.077px 27.077px 0px 0px, rgb(5, 5, 5) -28.308px 28.308px 0px 0px, rgb(5, 5, 5) -29.538px 29.538px 0px 0px, rgb(5, 5, 5) -30.769px 30.769px 0px 0px, rgb(5, 5, 5) -32px 32px 0px 0px, rgb(64, 64, 64) -1.231px 1.231px 0px 1px, rgb(64, 64, 64) -2.462px 2.462px 0px 1px, rgb(64, 64, 64) -3.692px 3.692px 0px 1px, rgb(64, 64, 64) -4.923px 4.923px 0px 1px, rgb(64, 64, 64) -6.154px 6.154px 0px 1px, rgb(64, 64, 64) -7.385px 7.385px 0px 1px, rgb(64, 64, 64) -8.615px 8.615px 0px 1px, rgb(64, 64, 64) -9.846px 9.846px 0px 1px, rgb(64, 64, 64) -11.077px 11.077px 0px 1px, rgb(64, 64, 64) -12.308px 12.308px 0px 1px, rgb(64, 64, 64) -13.538px 13.538px 0px 1px, rgb(64, 64, 64) -14.769px 14.769px 0px 1px, rgb(64, 64, 64) -16px 16px 0px 1px, rgb(64, 64, 64) -17.231px 17.231px 0px 1px, rgb(64, 64, 64) -18.462px 18.462px 0px 1px, rgb(64, 64, 64) -19.692px 19.692px 0px 1px, rgb(64, 64, 64) -20.923px 20.923px 0px 1px, rgb(64, 64, 64) -22.154px 22.154px 0px 1px, rgb(64, 64, 64) -23.385px 23.385px 0px 1px, rgb(64, 64, 64) -24.615px 24.615px 0px 1px, rgb(64, 64, 64) -25.846px 25.846px 0px 1px, rgb(64, 64, 64) -27.077px 27.077px 0px 1px, rgb(64, 64, 64) -28.308px 28.308px 0px 1px, rgb(64, 64, 64) -29.538px 29.538px 0px 1px, rgb(64, 64, 64) -30.769px 30.769px 0px 1px, rgb(64, 64, 64) -32px 32px 0px 1px", opacity: "0.7"}}></div>
                        <div className="absolute origin-top-left" style={{width: "54px", height: "54px", borderRadius: "6px", transform: "matrix(0.866025, -0.5, 0.866025, 0.5, 0, 0)", background: "rgb(5, 5, 5)", border: "1px solid rgb(64, 64, 64)"}}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="flex flex-col gap-2 py-(--card-spacing)">
                  <div className="flex gap-2 items-start">
                    <CardTitle className="flex-1 leading-6 min-w-0">
                      Ship faster
                    </CardTitle>
                    <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-secondary border border-transparent disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5.5 min-w-5.5 mt-px outline-none px-2 py-0.5 relative rounded-full text-secondary-foreground text-xs transition-shadow">
                      Step 4
                    </Badge>
                  </div>
                  <CardDescription className="leading-5">
                    Combine components into interfaces without rebuilding common patterns.
                  </CardDescription>
                </CardContent>
                <CardFooter className="bg-muted/50 border-t mt-auto pb-(--card-spacing)">
                  <Button className="w-full" href="#" role="button" tabIndex="0">
                    Start Building
                  </Button>
                </CardFooter>
              </Card>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
