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
            <Item className="[&_svg]:size-4.5 [&_svg]:text-white bg-green-600 border-2 border-background dark:border mb-3.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-link" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LinkIcon" tabler="IconLink" hugeicons="Link01Icon" phosphor="LinkIcon" remixicon="RiLinkM" aria-hidden="true">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </ItemMedia>
            </Item>
            <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
              API Integration
            </a>
            <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
              Quick steps to connect APIs
            </p>
          </FramePanel>
          <FramePanel>
            <Item className="[&_svg]:size-4.5 [&_svg]:text-white bg-indigo-600 border-2 border-background dark:border mb-3.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-palette" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="PaletteIcon" tabler="IconPalette" hugeicons="PaintBoardIcon" phosphor="PaletteIcon" remixicon="RiPaletteLine" aria-hidden="true">
                  <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </svg>
              </ItemMedia>
            </Item>
            <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
              UI Themes
            </a>
            <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
              Ready-made styles for apps
            </p>
          </FramePanel>
          <FramePanel>
            <Item className="[&_svg]:size-4.5 [&_svg]:text-white bg-orange-600 border-2 border-background dark:border mb-3.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-chart-column" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BarChart3Icon" tabler="IconChartBar" hugeicons="Analytics01Icon" phosphor="ChartBarIcon" remixicon="RiBarChartLine" aria-hidden="true">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </ItemMedia>
            </Item>
            <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
              Analytics Setup
            </a>
            <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
              Real-time tracking setup
            </p>
          </FramePanel>
          <FramePanel>
            <Item className="[&_svg]:size-4.5 [&_svg]:text-white bg-sky-600 border-2 border-background dark:border mb-3.5 p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-9" variant="default" size="default">
              <ItemMedia className="size-auto" variant="icon">
                <svg className="lucide lucide-shield" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldIcon" tabler="IconShield" hugeicons="Shield01Icon" phosphor="ShieldIcon" remixicon="RiShieldLine" aria-hidden="true">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </ItemMedia>
            </Item>
            <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
              Security Tips
            </a>
            <p className="leading-relaxed mt-1.5 text-muted-foreground text-xs">
              Simple ways to stay secure
            </p>
          </FramePanel>
        </div>
      </Frame>
    </div>
  )
}
