import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <div className="@container max-w-4xl w-full">
        <Frame className="w-full" spacing="xs">
          <FramePanel className="p-0!">
            <div className="@2xl:grid-cols-3 grid overflow-hidden">
              <div className="@2xl:border-b-0 @2xl:border-r border-b border-border/60 flex flex-col isolate min-h-[164px] overflow-hidden p-5 relative" style={{"--metric-dot-color": "color-mix(in oklch, var(--muted-foreground) 18%, transparent)", "--metric-gauge-track": "color-mix(in oklch, var(--muted-foreground) 28%, transparent)"}}>
                <span className="[background-image:radial-gradient(circle_at_center,var(--metric-dot-color)_0.8px,transparent_1.25px)] [background-size:6px_6px] [mask-image:radial-gradient(ellipse_at_82%_86%,black_0%,black_32%,transparent_70%)] absolute blur-sm dark:opacity-25 inset-0 opacity-45 pointer-events-none" aria-hidden="true"></span>
                <div className="flex gap-3 items-center justify-between mb-7 relative z-10">
                  <h3 className="font-medium text-muted-foreground text-sm">
                    {"API Response Time"}
                  </h3>
                  <Button className="-mr-2 text-muted-foreground" type="button" tabIndex={0} aria-label="API Response Time actions" extracted="1">
                    <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                      <circle cx={12} cy={12} r={1}></circle>
                      <circle cx={12} cy={5} r={1}></circle>
                      <circle cx={12} cy={19} r={1}></circle>
                    </svg>
                  </Button>
                </div>
                <div className="flex flex-col gap-2 relative z-10">
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1.5 items-center shrink-0">
                      <span style={{"--metric-gauge-color": "var(--success)"}}>
                        <svg className="overflow-visible shrink-0 size-10" aria-hidden="true" fill="none" viewBox="0 0 40 40">
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={20} x2={20} y1={7.800000000000001} y2={4.199999999999999}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={23.77000733137436} x2={24.88246851112417} y1={8.397110501199128} y2={4.9733070425365735}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={27.17098007796817} x2={29.287006986221076} y1={10.129992668625642} y2={7.21753148887583}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={29.87000733137436} x2={32.78246851112417} y1={12.82901992203183} y2={10.712993013778924}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={31.60288949880087} x2={35.026692957463425} y1={16.22999266862564} y2={15.11753148887583}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={32.2} x2={35.8} y1={20} y2={20}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={31.60288949880087} x2={35.026692957463425} y1={23.77000733137436} y2={24.88246851112417}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={29.87000733137436} x2={32.78246851112417} y1={27.170980077968167} y2={29.287006986221073}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={27.17098007796817} x2={29.287006986221076} y1={29.87000733137436} y2={32.78246851112417}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={23.77000733137436} x2={24.88246851112417} y1={31.60288949880087} y2={35.026692957463425}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={20} x2={20} y1={32.2} y2={35.8}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={16.229992668625638} x2={15.117531488875825} y1={31.60288949880087} y2={35.026692957463425}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={12.82901992203183} x2={10.712993013778926} y1={29.87000733137436} y2={32.78246851112417}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={10.129992668625643} x2={7.2175314888758315} y1={27.170980077968174} y2={29.28700698622108}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={8.39711050119913} x2={4.973307042536575} y1={23.770007331374366} y2={24.882468511124177}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={7.800000000000001} x2={4.199999999999999} y1={20} y2={20.000000000000004}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={8.397110501199128} x2={4.9733070425365735} y1={16.229992668625638} y2={15.117531488875827}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={10.12999266862564} x2={7.217531488875828} y1={12.82901992203183} y2={10.712993013778926}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={12.829019922031826} x2={10.712993013778922} y1={10.129992668625643} y2={7.2175314888758315}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={16.22999266862564} x2={15.117531488875828} y1={8.397110501199128} y2={4.9733070425365735}></line>
                        </svg>
                      </span>
                    </div>
                    <div className="flex gap-1 items-baseline min-w-0">
                      <span className="font-medium text-2xl">
                        {"132"}
                      </span>
                      <span className="font-medium text-2xl">
                        {"ms"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center text-sm text-success">
                    <span className="inline-flex items-center justify-center shrink-0 size-[18px]">
                      <svg className="lucide lucide-trending-up size-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                    </span>
                    <span className="text-muted-foreground/70">
                      {"up from"}
                    </span>
                    <span className="font-medium">
                      {"148 ms"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="@2xl:border-b-0 @2xl:border-r border-b border-border/60 flex flex-col isolate min-h-[164px] overflow-hidden p-5 relative" style={{"--metric-dot-color": "color-mix(in oklch, var(--muted-foreground) 18%, transparent)", "--metric-gauge-track": "color-mix(in oklch, var(--muted-foreground) 28%, transparent)"}}>
                <span className="[background-image:radial-gradient(circle_at_center,var(--metric-dot-color)_0.8px,transparent_1.25px)] [background-size:6px_6px] [mask-image:radial-gradient(ellipse_at_82%_86%,black_0%,black_32%,transparent_70%)] absolute blur-sm dark:opacity-25 inset-0 opacity-45 pointer-events-none" aria-hidden="true"></span>
                <div className="flex gap-3 items-center justify-between mb-7 relative z-10">
                  <h3 className="font-medium text-muted-foreground text-sm">
                    {"Error Rate"}
                  </h3>
                  <Button className="-mr-2 text-muted-foreground" type="button" tabIndex={0} aria-label="Error Rate actions">
                    <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                      <circle cx={12} cy={12} r={1}></circle>
                      <circle cx={12} cy={5} r={1}></circle>
                      <circle cx={12} cy={19} r={1}></circle>
                    </svg>
                  </Button>
                </div>
                <div className="flex flex-col gap-2 relative z-10">
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1.5 items-center shrink-0">
                      <span style={{"--metric-gauge-color": "var(--destructive)"}}>
                        <svg className="overflow-visible shrink-0 size-10" aria-hidden="true" fill="none" viewBox="0 0 40 40">
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={20} x2={20} y1={7.800000000000001} y2={4.199999999999999}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={23.77000733137436} x2={24.88246851112417} y1={8.397110501199128} y2={4.9733070425365735}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={27.17098007796817} x2={29.287006986221076} y1={10.129992668625642} y2={7.21753148887583}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={29.87000733137436} x2={32.78246851112417} y1={12.82901992203183} y2={10.712993013778924}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={31.60288949880087} x2={35.026692957463425} y1={16.22999266862564} y2={15.11753148887583}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={32.2} x2={35.8} y1={20} y2={20}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={31.60288949880087} x2={35.026692957463425} y1={23.77000733137436} y2={24.88246851112417}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={29.87000733137436} x2={32.78246851112417} y1={27.170980077968167} y2={29.287006986221073}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={27.17098007796817} x2={29.287006986221076} y1={29.87000733137436} y2={32.78246851112417}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={23.77000733137436} x2={24.88246851112417} y1={31.60288949880087} y2={35.026692957463425}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={20} x2={20} y1={32.2} y2={35.8}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={16.229992668625638} x2={15.117531488875825} y1={31.60288949880087} y2={35.026692957463425}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={12.82901992203183} x2={10.712993013778926} y1={29.87000733137436} y2={32.78246851112417}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={10.129992668625643} x2={7.2175314888758315} y1={27.170980077968174} y2={29.28700698622108}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={8.39711050119913} x2={4.973307042536575} y1={23.770007331374366} y2={24.882468511124177}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={7.800000000000001} x2={4.199999999999999} y1={20} y2={20.000000000000004}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={8.397110501199128} x2={4.9733070425365735} y1={16.229992668625638} y2={15.117531488875827}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={10.12999266862564} x2={7.217531488875828} y1={12.82901992203183} y2={10.712993013778926}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={12.829019922031826} x2={10.712993013778922} y1={10.129992668625643} y2={7.2175314888758315}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={16.22999266862564} x2={15.117531488875828} y1={8.397110501199128} y2={4.9733070425365735}></line>
                        </svg>
                      </span>
                    </div>
                    <div className="flex gap-1 items-baseline min-w-0">
                      <span className="font-medium text-2xl">
                        {"1.4"}
                      </span>
                      <span className="font-medium text-2xl">
                        {"%"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center text-destructive text-sm">
                    <span className="inline-flex items-center justify-center shrink-0 size-[18px]">
                      <svg className="lucide lucide-trending-down size-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingDown" tabler="IconTrendingDown" hugeicons="TradeDownIcon" phosphor="TrendDownIcon" remixicon="RiArrowRightDownLongLine" aria-hidden="true">
                        <path d="M16 17h6v-6"></path>
                        <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                      </svg>
                    </span>
                    <span className="text-muted-foreground/70">
                      {"down from"}
                    </span>
                    <span className="font-medium">
                      {"2.1%"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-border/60 flex flex-col isolate min-h-[164px] overflow-hidden p-5 relative" style={{"--metric-dot-color": "color-mix(in oklch, var(--muted-foreground) 18%, transparent)", "--metric-gauge-track": "color-mix(in oklch, var(--muted-foreground) 28%, transparent)"}}>
                <span className="[background-image:radial-gradient(circle_at_center,var(--metric-dot-color)_0.8px,transparent_1.25px)] [background-size:6px_6px] [mask-image:radial-gradient(ellipse_at_82%_86%,black_0%,black_32%,transparent_70%)] absolute blur-sm dark:opacity-25 inset-0 opacity-45 pointer-events-none" aria-hidden="true"></span>
                <div className="flex gap-3 items-center justify-between mb-7 relative z-10">
                  <h3 className="font-medium text-muted-foreground text-sm">
                    {"Request Throughput"}
                  </h3>
                  <Button className="-mr-2 text-muted-foreground" type="button" tabIndex={0} aria-label="Request Throughput actions">
                    <svg className="lucide lucide-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="EllipsisVerticalIcon" tabler="IconDotsVertical" hugeicons="MoreVerticalIcon" phosphor="DotsThreeVerticalIcon" remixicon="RiMore2Fill" aria-hidden="true">
                      <circle cx={12} cy={12} r={1}></circle>
                      <circle cx={12} cy={5} r={1}></circle>
                      <circle cx={12} cy={19} r={1}></circle>
                    </svg>
                  </Button>
                </div>
                <div className="flex flex-col gap-2 relative z-10">
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1.5 items-center shrink-0">
                      <span style={{"--metric-gauge-color": "var(--success)"}}>
                        <svg className="overflow-visible shrink-0 size-10" aria-hidden="true" fill="none" viewBox="0 0 40 40">
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={20} x2={20} y1={7.800000000000001} y2={4.199999999999999}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={23.77000733137436} x2={24.88246851112417} y1={8.397110501199128} y2={4.9733070425365735}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={27.17098007796817} x2={29.287006986221076} y1={10.129992668625642} y2={7.21753148887583}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={29.87000733137436} x2={32.78246851112417} y1={12.82901992203183} y2={10.712993013778924}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={31.60288949880087} x2={35.026692957463425} y1={16.22999266862564} y2={15.11753148887583}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={32.2} x2={35.8} y1={20} y2={20}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={31.60288949880087} x2={35.026692957463425} y1={23.77000733137436} y2={24.88246851112417}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={29.87000733137436} x2={32.78246851112417} y1={27.170980077968167} y2={29.287006986221073}></line>
                          <line stroke="var(--metric-gauge-track)" strokeLinecap="round" strokeWidth={2.5} x1={27.17098007796817} x2={29.287006986221076} y1={29.87000733137436} y2={32.78246851112417}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={23.77000733137436} x2={24.88246851112417} y1={31.60288949880087} y2={35.026692957463425}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={20} x2={20} y1={32.2} y2={35.8}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={16.229992668625638} x2={15.117531488875825} y1={31.60288949880087} y2={35.026692957463425}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={12.82901992203183} x2={10.712993013778926} y1={29.87000733137436} y2={32.78246851112417}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={10.129992668625643} x2={7.2175314888758315} y1={27.170980077968174} y2={29.28700698622108}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={8.39711050119913} x2={4.973307042536575} y1={23.770007331374366} y2={24.882468511124177}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={7.800000000000001} x2={4.199999999999999} y1={20} y2={20.000000000000004}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={8.397110501199128} x2={4.9733070425365735} y1={16.229992668625638} y2={15.117531488875827}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={10.12999266862564} x2={7.217531488875828} y1={12.82901992203183} y2={10.712993013778926}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={12.829019922031826} x2={10.712993013778922} y1={10.129992668625643} y2={7.2175314888758315}></line>
                          <line stroke="var(--metric-gauge-color)" strokeLinecap="round" strokeWidth={2.5} x1={16.22999266862564} x2={15.117531488875828} y1={8.397110501199128} y2={4.9733070425365735}></line>
                        </svg>
                      </span>
                    </div>
                    <div className="flex gap-1 items-baseline min-w-0">
                      <span className="font-medium text-2xl">
                        {"4.3k"}
                      </span>
                      <span className="font-medium text-2xl">
                        {"req/s"}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-1.5 items-center text-sm text-success">
                    <span className="inline-flex items-center justify-center shrink-0 size-[18px]">
                      <svg className="lucide lucide-trending-up size-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="TrendingUp" tabler="IconTrendingUp" hugeicons="TradeUpIcon" phosphor="TrendUpIcon" remixicon="RiArrowRightUpLongLine" aria-hidden="true">
                        <path d="M16 7h6v6"></path>
                        <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                      </svg>
                    </span>
                    <span className="text-muted-foreground/70">
                      {"up from"}
                    </span>
                    <span className="font-medium">
                      {"3.9k req/s"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FramePanel>
        </Frame>
      </div>
    </div>
  )
}
