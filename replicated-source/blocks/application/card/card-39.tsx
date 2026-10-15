import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-8 w-full">
      <Frame className="@container w-full">
        <div className="@2xl:grid-cols-2 @4xl:grid-cols-4 gap-1 grid">
          <FramePanel>
            <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border mb-6 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-play" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlayIcon" tabler="IconPlayerPlay" hugeicons="PlayIcon" phosphor="PlayIcon" remixicon="RiPlayLine" aria-hidden="true">
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
                </svg>
              </ItemMedia>
            </Item>
            <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
              {"Getting Started"}
            </a>
            <p className="leading-relaxed pt-1.5 text-muted-foreground text-sm">
              {"Follow our step-by-step onboarding guides to integrate and launch your project smoothly, even if you’re just getting started."}
            </p>
          </FramePanel>
          <FramePanel>
            <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border mb-6 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-shield" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </ItemMedia>
            </Item>
            <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
              {"Security Center"}
            </a>
            <p className="leading-relaxed pt-1.5 text-muted-foreground text-sm">
              {"Learn about our advanced security measures and best practices to keep your data protected and your app fully compliant."}
            </p>
          </FramePanel>
          <FramePanel>
            <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border mb-6 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </ItemMedia>
            </Item>
            <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
              {"Integrations"}
            </a>
            <p className="leading-relaxed pt-1.5 text-muted-foreground text-sm">
              {"Seamlessly connect your app with trusted third-party services, from analytics and payments to automation tools that boost performance."}
            </p>
          </FramePanel>
          <FramePanel>
            <Item className="[&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-2 border-background dark:border mb-6 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10.5" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-life-buoy" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="LifeBuoyIcon" tabler="IconLifebuoy" hugeicons="LifebuoyIcon" phosphor="LifebuoyIcon" remixicon="RiLifebuoyLine" aria-hidden="true">
                  <circle cx={12} cy={12} r={10}></circle>
                  <path d="m4.93 4.93 4.24 4.24"></path>
                  <path d="m14.83 9.17 4.24-4.24"></path>
                  <path d="m14.83 14.83 4.24 4.24"></path>
                  <path d="m9.17 14.83-4.24 4.24"></path>
                  <circle cx={12} cy={12} r={4}></circle>
                </svg>
              </ItemMedia>
            </Item>
            <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
              {"Support Hub"}
            </a>
            <p className="leading-relaxed pt-1.5 text-muted-foreground text-sm">
              {"Access expert support, detailed docs, and a vibrant developer community, with guidance for complex issues whenever needed."}
            </p>
          </FramePanel>
        </div>
      </Frame>
    </div>
  )
}
