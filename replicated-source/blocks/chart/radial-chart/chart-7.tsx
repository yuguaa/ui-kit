import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-10 w-full">
      <div className="@container w-full">
        <Frame className="w-full" spacing="xs">
          <div className="@4xl:grid-cols-2 gap-1 grid">
            <FramePanel className="min-h-[204px] p-0!" style={{"--metric-segment-color": "var(--success)", "--metric-segment-track": "color-mix(in oklch, var(--muted-foreground) 12%, var(--card))"}}>
              <div className="border-b border-border/60 flex gap-3 h-14 items-center justify-between px-4">
                <h3 className="font-medium text-foreground text-sm">
                  {"Performance Metrics"}
                </h3>
                <Button className="text-foreground" type="button" tabIndex="0" extracted="1">
                  {"Details"}
                </Button>
              </div>
              <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto] items-end max-sm:grid-cols-1 max-sm:items-start min-h-[144px] p-5">
                <div className="flex flex-col gap-7 min-w-0">
                  <div className="space-y-1">
                    <p className="font-medium text-foreground text-sm">
                      {"Stable"}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {"Server Uptime:"}
                      <span className="font-medium text-foreground text-xs">
                        {"99.7%"}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <AvatarGroup>
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Ari Morgan" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Chris Lee" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="size-6" size="default">
                        <AvatarFallback className="bg-background font-medium text-xs">
                          {"K"}
                        </AvatarFallback>
                      </Avatar>
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Ravi Noor" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </AvatarGroup>
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      {"6 reviewers"}
                    </span>
                  </div>
                </div>
                <div className="max-sm:mx-auto overflow-hidden relative shrink-0" aria-label="Performance Metrics: Server Uptime 99.7%" role="img" style={{width: "216px", height: "113px"}}>
                  <svg className="h-full relative w-full z-10" aria-hidden="true" fill="none" viewBox="14 18 216 113" preserveAspectRatio="xMidYMid meet">
                    <g className="[filter:blur(2.5px)] opacity-40">
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="42" x2="19" y1="126.00000000000001" y2="126.00000000000001"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="42.25941534926319" x2="19.333997262176368" y1="119.56267450266193" y2="117.71194342217724"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="43.03597898896696" x2="20.333822948294966" y1="113.16709753137921" y2="109.47763807165074"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="44.324654605915825" x2="21.99299280511663" y1="106.8547468569954" y2="101.35048657838158"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="46.11708464422834" x2="24.300746479443987" y1="100.66656049588225" y2="93.3831966384484"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="48.401644507294066" x2="27.2421173031411" y1="94.642671211194" y2="85.62743918441228"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="51.1635179477432" x2="30.798029357719386" y1="88.82214623649853" y2="78.13351327949185"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="54.38479315649644" x2="34.94542118898917" y1="83.24273390977588" y2="70.95001990883645"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="58.04457892771989" x2="39.65739536943936" y1="77.9406188609617" y2="64.1235467834882"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="62.11914014631192" x2="44.9033929383766" y1="72.95018734073638" y2="57.698366201198084"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="66.582051719232" x2="50.64939158851121" y1="68.30380421249488" y2="51.71614792358716"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="71.40436995236979" x2="56.858126313676095" y1="64.03160305378768" y2="46.21568893175163"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="76.55482026150753" x2="63.48933108669094" y1="60.161290728507495" y2="41.232661812953395"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="81.99999999999997" x2="70.49999999999996" y1="56.71796769724493" y2="36.79938341020285"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="87.70459508775568" x2="77.84466617548543" y1="53.723965231169416" y2="32.944605235130624"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="93.63160903659713" x2="85.4756966346188" y1="51.19870058516682" y2="29.69332700340229"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="99.74260288668373" x2="93.34360121660531" y1="49.15855106949023" y2="27.066634501968664"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="105.99794449791644" x2="101.39735354106742" y1="47.616747836618586" y2="25.081562839646423"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="112.35706557957418" x2="109.58472193370176" y1="46.58329007215568" y2="23.750985967900434"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="118.77872479124672" x2="117.85260816873014" y1="46.06488014627443" y2="23.08353318832833"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="125.22127520875318" x2="126.14739183126972" y1="46.06488014627442" y2="23.083533188328317"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="131.64293442042586" x2="134.4152780662983" y1="46.58329007215568" y2="23.750985967900448"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="138.0020555020836" x2="142.60264645893264" y1="47.6167478366186" y2="25.081562839646438"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="144.25739711331616" x2="150.65639878339456" y1="49.1585510694902" y2="27.066634501968636"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="150.36839096340285" x2="158.52430336538117" y1="51.19870058516682" y2="29.693327003402274"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="156.2954049122443" x2="166.15533382451454" y1="53.7239652311694" y2="32.94460523513061"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="162" x2="173.5" y1="56.717967697244916" y2="36.79938341020282"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="167.44517973849239" x2="180.51066891330896" y1="60.16129072850744" y2="41.232661812953324"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="172.59563004763015" x2="187.1418736863238" y1="64.03160305378759" y2="46.21568893175153"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="177.4179482807679" x2="193.35060841148868" y1="68.30380421249478" y2="51.71614792358703"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="181.88085985368807" x2="199.0966070616234" y1="72.95018734073636" y2="57.698366201198056"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="185.9554210722801" x2="204.34260463056063" y1="77.94061886096168" y2="64.12354678348817"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="189.61520684350353" x2="209.0545788110108" y1="83.24273390977584" y2="70.95001990883638"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="192.83648205225677" x2="213.20197064228057" y1="88.82214623649847" y2="78.13351327949178"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="195.59835549270593" x2="216.75788269685887" y1="94.64267121119397" y2="85.62743918441225"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="197.88291535577164" x2="219.699253520556" y1="100.66656049588222" y2="93.38319663844837"></line>
                    </g>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="42" x2="19" y1="126.00000000000001" y2="126.00000000000001"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="42.25941534926319" x2="19.333997262176368" y1="119.56267450266193" y2="117.71194342217724"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="43.03597898896696" x2="20.333822948294966" y1="113.16709753137921" y2="109.47763807165074"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="44.324654605915825" x2="21.99299280511663" y1="106.8547468569954" y2="101.35048657838158"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="46.11708464422834" x2="24.300746479443987" y1="100.66656049588225" y2="93.3831966384484"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="48.401644507294066" x2="27.2421173031411" y1="94.642671211194" y2="85.62743918441228"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="51.1635179477432" x2="30.798029357719386" y1="88.82214623649853" y2="78.13351327949185"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="54.38479315649644" x2="34.94542118898917" y1="83.24273390977588" y2="70.95001990883645"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="58.04457892771989" x2="39.65739536943936" y1="77.9406188609617" y2="64.1235467834882"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="62.11914014631192" x2="44.9033929383766" y1="72.95018734073638" y2="57.698366201198084"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="66.582051719232" x2="50.64939158851121" y1="68.30380421249488" y2="51.71614792358716"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="71.40436995236979" x2="56.858126313676095" y1="64.03160305378768" y2="46.21568893175163"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="76.55482026150753" x2="63.48933108669094" y1="60.161290728507495" y2="41.232661812953395"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="81.99999999999997" x2="70.49999999999996" y1="56.71796769724493" y2="36.79938341020285"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="87.70459508775568" x2="77.84466617548543" y1="53.723965231169416" y2="32.944605235130624"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="93.63160903659713" x2="85.4756966346188" y1="51.19870058516682" y2="29.69332700340229"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="99.74260288668373" x2="93.34360121660531" y1="49.15855106949023" y2="27.066634501968664"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="105.99794449791644" x2="101.39735354106742" y1="47.616747836618586" y2="25.081562839646423"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="112.35706557957418" x2="109.58472193370176" y1="46.58329007215568" y2="23.750985967900434"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="118.77872479124672" x2="117.85260816873014" y1="46.06488014627443" y2="23.08353318832833"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="125.22127520875318" x2="126.14739183126972" y1="46.06488014627442" y2="23.083533188328317"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="131.64293442042586" x2="134.4152780662983" y1="46.58329007215568" y2="23.750985967900448"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="138.0020555020836" x2="142.60264645893264" y1="47.6167478366186" y2="25.081562839646438"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="144.25739711331616" x2="150.65639878339456" y1="49.1585510694902" y2="27.066634501968636"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="150.36839096340285" x2="158.52430336538117" y1="51.19870058516682" y2="29.693327003402274"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="156.2954049122443" x2="166.15533382451454" y1="53.7239652311694" y2="32.94460523513061"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="162" x2="173.5" y1="56.717967697244916" y2="36.79938341020282"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="167.44517973849239" x2="180.51066891330896" y1="60.16129072850744" y2="41.232661812953324"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="172.59563004763015" x2="187.1418736863238" y1="64.03160305378759" y2="46.21568893175153"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="177.4179482807679" x2="193.35060841148868" y1="68.30380421249478" y2="51.71614792358703"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="181.88085985368807" x2="199.0966070616234" y1="72.95018734073636" y2="57.698366201198056"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="185.9554210722801" x2="204.34260463056063" y1="77.94061886096168" y2="64.12354678348817"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="189.61520684350353" x2="209.0545788110108" y1="83.24273390977584" y2="70.95001990883638"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="192.83648205225677" x2="213.20197064228057" y1="88.82214623649847" y2="78.13351327949178"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="195.59835549270593" x2="216.75788269685887" y1="94.64267121119397" y2="85.62743918441225"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="197.88291535577164" x2="219.699253520556" y1="100.66656049588222" y2="93.38319663844837"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="199.67534539408416" x2="222.00700719488336" y1="106.85474685699538" y2="101.35048657838155"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="200.96402101103303" x2="223.666177051705" y1="113.16709753137908" y2="109.47763807165056"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="201.7405846507368" x2="224.66600273782362" y1="119.56267450266186" y2="117.71194342217716"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="202" x2="225" y1="125.99999999999999" y2="125.99999999999997"></line>
                  </svg>
                </div>
              </div>
            </FramePanel>
            <FramePanel className="min-h-[204px] p-0!" style={{"--metric-segment-color": "var(--warning)", "--metric-segment-track": "color-mix(in oklch, var(--muted-foreground) 12%, var(--card))"}}>
              <div className="border-b border-border/60 flex gap-3 h-14 items-center justify-between px-4">
                <h3 className="font-medium text-foreground text-sm">
                  {"Quality Metrics"}
                </h3>
                <Button className="text-foreground" type="button" tabIndex="0">
                  {"Details"}
                </Button>
              </div>
              <div className="gap-3 grid grid-cols-[minmax(0,1fr)_auto] items-end max-sm:grid-cols-1 max-sm:items-start min-h-[144px] p-5">
                <div className="flex flex-col gap-7 min-w-0">
                  <div className="space-y-1">
                    <p className="font-medium text-foreground text-sm">
                      {"In Review"}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {"Code Coverage:"}
                      <span className="font-medium text-foreground text-xs">
                        {"48.2%"}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <AvatarGroup>
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Elena Lee" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Owen Miles" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                      <Avatar className="size-6" size="default">
                        <AvatarFallback className="bg-background font-medium text-xs">
                          {"K"}
                        </AvatarFallback>
                      </Avatar>
                      <Avatar className="size-6" size="default">
                        <AvatarImage alt="Ben Torres" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=96&h=96&dpr=2&q=80"></AvatarImage>
                      </Avatar>
                    </AvatarGroup>
                    <span className="text-muted-foreground text-xs whitespace-nowrap">
                      {"9 testers"}
                    </span>
                  </div>
                </div>
                <div className="max-sm:mx-auto overflow-hidden relative shrink-0" aria-label="Quality Metrics: Code Coverage 48.2%" role="img" style={{width: "216px", height: "113px"}}>
                  <svg className="h-full relative w-full z-10" aria-hidden="true" fill="none" viewBox="14 18 216 113" preserveAspectRatio="xMidYMid meet">
                    <g className="[filter:blur(2.5px)] opacity-40">
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="42" x2="19" y1="126.00000000000001" y2="126.00000000000001"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="42.25941534926319" x2="19.333997262176368" y1="119.56267450266193" y2="117.71194342217724"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="43.03597898896696" x2="20.333822948294966" y1="113.16709753137921" y2="109.47763807165074"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="44.324654605915825" x2="21.99299280511663" y1="106.8547468569954" y2="101.35048657838158"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="46.11708464422834" x2="24.300746479443987" y1="100.66656049588225" y2="93.3831966384484"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="48.401644507294066" x2="27.2421173031411" y1="94.642671211194" y2="85.62743918441228"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="51.1635179477432" x2="30.798029357719386" y1="88.82214623649853" y2="78.13351327949185"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="54.38479315649644" x2="34.94542118898917" y1="83.24273390977588" y2="70.95001990883645"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="58.04457892771989" x2="39.65739536943936" y1="77.9406188609617" y2="64.1235467834882"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="62.11914014631192" x2="44.9033929383766" y1="72.95018734073638" y2="57.698366201198084"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="66.582051719232" x2="50.64939158851121" y1="68.30380421249488" y2="51.71614792358716"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="71.40436995236979" x2="56.858126313676095" y1="64.03160305378768" y2="46.21568893175163"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="76.55482026150753" x2="63.48933108669094" y1="60.161290728507495" y2="41.232661812953395"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="81.99999999999997" x2="70.49999999999996" y1="56.71796769724493" y2="36.79938341020285"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="87.70459508775568" x2="77.84466617548543" y1="53.723965231169416" y2="32.944605235130624"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="93.63160903659713" x2="85.4756966346188" y1="51.19870058516682" y2="29.69332700340229"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="99.74260288668373" x2="93.34360121660531" y1="49.15855106949023" y2="27.066634501968664"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="105.99794449791644" x2="101.39735354106742" y1="47.616747836618586" y2="25.081562839646423"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="112.35706557957418" x2="109.58472193370176" y1="46.58329007215568" y2="23.750985967900434"></line>
                      <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="3" x1="118.77872479124672" x2="117.85260816873014" y1="46.06488014627443" y2="23.08353318832833"></line>
                    </g>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="42" x2="19" y1="126.00000000000001" y2="126.00000000000001"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="42.25941534926319" x2="19.333997262176368" y1="119.56267450266193" y2="117.71194342217724"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="43.03597898896696" x2="20.333822948294966" y1="113.16709753137921" y2="109.47763807165074"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="44.324654605915825" x2="21.99299280511663" y1="106.8547468569954" y2="101.35048657838158"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="46.11708464422834" x2="24.300746479443987" y1="100.66656049588225" y2="93.3831966384484"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="48.401644507294066" x2="27.2421173031411" y1="94.642671211194" y2="85.62743918441228"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="51.1635179477432" x2="30.798029357719386" y1="88.82214623649853" y2="78.13351327949185"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="54.38479315649644" x2="34.94542118898917" y1="83.24273390977588" y2="70.95001990883645"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="58.04457892771989" x2="39.65739536943936" y1="77.9406188609617" y2="64.1235467834882"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="62.11914014631192" x2="44.9033929383766" y1="72.95018734073638" y2="57.698366201198084"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="66.582051719232" x2="50.64939158851121" y1="68.30380421249488" y2="51.71614792358716"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="71.40436995236979" x2="56.858126313676095" y1="64.03160305378768" y2="46.21568893175163"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="76.55482026150753" x2="63.48933108669094" y1="60.161290728507495" y2="41.232661812953395"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="81.99999999999997" x2="70.49999999999996" y1="56.71796769724493" y2="36.79938341020285"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="87.70459508775568" x2="77.84466617548543" y1="53.723965231169416" y2="32.944605235130624"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="93.63160903659713" x2="85.4756966346188" y1="51.19870058516682" y2="29.69332700340229"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="99.74260288668373" x2="93.34360121660531" y1="49.15855106949023" y2="27.066634501968664"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="105.99794449791644" x2="101.39735354106742" y1="47.616747836618586" y2="25.081562839646423"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="112.35706557957418" x2="109.58472193370176" y1="46.58329007215568" y2="23.750985967900434"></line>
                    <line stroke="var(--metric-segment-color)" strokeLinecap="round" strokeWidth="2.5" x1="118.77872479124672" x2="117.85260816873014" y1="46.06488014627443" y2="23.08353318832833"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="125.22127520875318" x2="126.14739183126972" y1="46.06488014627442" y2="23.083533188328317"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="131.64293442042586" x2="134.4152780662983" y1="46.58329007215568" y2="23.750985967900448"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="138.0020555020836" x2="142.60264645893264" y1="47.6167478366186" y2="25.081562839646438"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="144.25739711331616" x2="150.65639878339456" y1="49.1585510694902" y2="27.066634501968636"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="150.36839096340285" x2="158.52430336538117" y1="51.19870058516682" y2="29.693327003402274"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="156.2954049122443" x2="166.15533382451454" y1="53.7239652311694" y2="32.94460523513061"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="162" x2="173.5" y1="56.717967697244916" y2="36.79938341020282"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="167.44517973849239" x2="180.51066891330896" y1="60.16129072850744" y2="41.232661812953324"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="172.59563004763015" x2="187.1418736863238" y1="64.03160305378759" y2="46.21568893175153"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="177.4179482807679" x2="193.35060841148868" y1="68.30380421249478" y2="51.71614792358703"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="181.88085985368807" x2="199.0966070616234" y1="72.95018734073636" y2="57.698366201198056"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="185.9554210722801" x2="204.34260463056063" y1="77.94061886096168" y2="64.12354678348817"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="189.61520684350353" x2="209.0545788110108" y1="83.24273390977584" y2="70.95001990883638"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="192.83648205225677" x2="213.20197064228057" y1="88.82214623649847" y2="78.13351327949178"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="195.59835549270593" x2="216.75788269685887" y1="94.64267121119397" y2="85.62743918441225"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="197.88291535577164" x2="219.699253520556" y1="100.66656049588222" y2="93.38319663844837"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="199.67534539408416" x2="222.00700719488336" y1="106.85474685699538" y2="101.35048657838155"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="200.96402101103303" x2="223.666177051705" y1="113.16709753137908" y2="109.47763807165056"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="201.7405846507368" x2="224.66600273782362" y1="119.56267450266186" y2="117.71194342217716"></line>
                    <line stroke="var(--metric-segment-track)" strokeLinecap="round" strokeWidth="2.5" x1="202" x2="225" y1="125.99999999999999" y2="125.99999999999997"></line>
                  </svg>
                </div>
              </div>
            </FramePanel>
          </div>
        </Frame>
      </div>
    </div>
  )
}
