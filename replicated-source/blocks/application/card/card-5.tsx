import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Badge } from "@/registry/bases/radix/ui/badge"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-6 w-full">
      <div className="@container w-full">
        <div className="@2xl:grid-cols-3 gap-5 grid">
          <Frame className="h-full">
            <FramePanel className="[&::before]:z-0 bg-muted/60 flex-1 isolate px-6 py-10 shadow-none!">
              <canvas className="[mask-image:radial-gradient(86%_76%_at_50%_46%,black,transparent)] absolute h-full inset-0 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width={302} height={136}></canvas>
              <div className="flex items-center justify-center relative z-10">
                <Item className="bg-background border-2 border-background dark:bg-muted/80 dark:border-muted/80 p-0 shadow-sm size-10 text-foreground" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-shopping-cart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingCartIcon" tabler="IconShoppingCart" hugeicons="ShoppingCart01Icon" phosphor="ShoppingCartIcon" remixicon="RiShoppingCartLine" aria-hidden="true">
                      <circle cx={8} cy={21} r={1}></circle>
                      <circle cx={19} cy={21} r={1}></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="border-dashed border-foreground/20 border-t mx-1 w-8"></div>
                <Item className="bg-background border-2 border-background dark:bg-muted/80 dark:border-muted/80 p-0 shadow-sm size-14 text-foreground" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <span className="dark:hidden" aria-hidden="true">
                      <svg className="size-9" viewBox="0 0 1800 1800" fill="none">
                        <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="black"></path>
                      </svg>
                    </span>
                    <span className="dark:block hidden" aria-hidden="true">
                      <svg className="size-9" viewBox="0 0 1800 1800" fill="none">
                        <path d="M1000.46 450C1174.77 450 1278.43 553.669 1278.43 691.282C1278.43 828.896 1174.77 932.563 1000.46 932.563H912.382L1350 1350H1040.82L707.794 1033.48C683.944 1011.47 672.936 985.781 672.935 963.765C672.935 932.572 694.959 905.049 737.161 893.122L908.712 847.244C973.85 829.812 1018.81 779.353 1018.81 713.298C1018.8 632.567 952.745 585.78 871.095 585.78H450V450H1000.46Z" fill="#FDFDFD"></path>
                      </svg>
                    </span>
                  </ItemMedia>
                </Item>
                <div className="border-dashed border-foreground/20 border-t mx-1 w-8"></div>
                <Item className="bg-background border-2 border-background dark:bg-muted/80 dark:border-muted/80 p-0 shadow-sm size-10 text-foreground" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-file-text" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileTextIcon" tabler="IconFileText" hugeicons="File02Icon" phosphor="FileTextIcon" remixicon="RiFileTextLine" aria-hidden="true">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </ItemMedia>
                </Item>
              </div>
            </FramePanel>
            <footer className="flex flex-col gap-1.5 items-start mt-auto px-3 py-3">
              <div className="flex gap-2 items-center justify-between w-full">
                <a className="font-medium hover:text-primary leading-snug text-foreground text-sm" href="#">
                  {"Resend Email Flow"}
                </a>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-info/10 border border-info/15 dark:bg-info/15 dark:border-info/25 dark:text-info disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-info-foreground text-xs transition-shadow">
                  {"Premium"}
                </Badge>
              </div>
              <p className="leading-relaxed line-clamp-2 text-muted-foreground text-xs">
                {"Transactional email delivery tuned for speed, observability, and reliable event handling."}
              </p>
            </footer>
          </Frame>
          <Frame className="h-full">
            <FramePanel className="[&::before]:z-0 bg-muted/60 flex-1 isolate px-6 py-10 shadow-none!">
              <canvas className="[mask-image:radial-gradient(86%_76%_at_50%_46%,black,transparent)] absolute h-full inset-0 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width={302} height={136}></canvas>
              <div className="flex items-center justify-center relative z-10">
                <Item className="bg-background border-2 border-background dark:bg-muted/80 dark:border-muted/80 p-0 shadow-sm size-10 text-foreground" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-zap" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ZapIcon" tabler="IconBolt" hugeicons="FlashIcon" phosphor="LightningIcon" remixicon="RiFlashlightLine" aria-hidden="true">
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="border-dashed border-foreground/20 border-t mx-1 w-8"></div>
                <Item className="bg-background border-2 border-background dark:bg-muted/80 dark:border-muted/80 p-0 shadow-sm size-14 text-foreground" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-9" aria-hidden="true" viewBox="7.056000232696533 3 37.35095977783203 45">
                      <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#a)">
                        <path fill="#002991" d="M38.914 13.35c0 5.574-5.144 12.15-12.927 12.15H18.49l-.368 2.322L16.373 39H7.056l5.605-36h15.095c5.083 0 9.082 2.833 10.555 6.77a9.687 9.687 0 0 1 .603 3.58z"></path>
                        <path fill="#60CDFF" d="M44.284 23.7A12.894 12.894 0 0 1 31.53 34.5h-5.206L24.157 48H14.89l1.483-9 1.75-11.178.367-2.322h7.497c7.773 0 12.927-6.576 12.927-12.15 3.825 1.974 6.055 5.963 5.37 10.35z"></path>
                        <path fill="#008CFF" d="M38.914 13.35C37.31 12.511 35.365 12 33.248 12h-12.64L18.49 25.5h7.497c7.773 0 12.927-6.576 12.927-12.15z"></path>
                      </g>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="border-dashed border-foreground/20 border-t mx-1 w-8"></div>
                <Item className="bg-background border-2 border-background dark:bg-muted/80 dark:border-muted/80 p-0 shadow-sm size-10 text-foreground" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-shield-check" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShieldCheckIcon" tabler="IconShieldCheck" hugeicons="Shield01Icon" phosphor="ShieldCheckIcon" remixicon="RiShieldCheckLine" aria-hidden="true">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </ItemMedia>
                </Item>
              </div>
            </FramePanel>
            <footer className="flex flex-col gap-1.5 items-start mt-auto px-3 py-3">
              <div className="flex gap-2 items-center justify-between w-full">
                <a className="font-medium hover:text-primary leading-snug text-foreground text-sm" href="#">
                  {"PayPal Checkout Flow"}
                </a>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-warning/10 border border-warning/15 dark:bg-warning/15 dark:border-warning/25 dark:text-warning disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-warning-foreground text-xs transition-shadow">
                  {"Regular"}
                </Badge>
              </div>
              <p className="leading-relaxed line-clamp-2 text-muted-foreground text-xs">
                {"Optimized payment processing for speed, reliability, and global reach."}
              </p>
            </footer>
          </Frame>
          <Frame className="h-full">
            <FramePanel className="[&::before]:z-0 bg-muted/60 flex-1 isolate px-6 py-10 shadow-none!">
              <canvas className="[mask-image:radial-gradient(86%_76%_at_50%_46%,black,transparent)] absolute h-full inset-0 pointer-events-none text-muted-foreground w-full" aria-hidden="true" width={302} height={136}></canvas>
              <div className="flex items-center justify-center relative z-10">
                <Item className="bg-background border-2 border-background dark:bg-muted/80 dark:border-muted/80 p-0 shadow-sm size-10 text-foreground" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-shopping-cart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingCartIcon" tabler="IconShoppingCart" hugeicons="ShoppingCart01Icon" phosphor="ShoppingCartIcon" remixicon="RiShoppingCartLine" aria-hidden="true">
                      <circle cx={8} cy={21} r={1}></circle>
                      <circle cx={19} cy={21} r={1}></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="border-dashed border-foreground/20 border-t mx-1 w-8"></div>
                <Item className="bg-background border-2 border-background dark:bg-muted/80 dark:border-muted/80 p-0 shadow-sm size-14 text-foreground" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="size-9" aria-hidden="true" viewBox="0 0 109 113" fill="none">
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
                <div className="border-dashed border-foreground/20 border-t mx-1 w-8"></div>
                <Item className="bg-background border-2 border-background dark:bg-muted/80 dark:border-muted/80 p-0 shadow-sm size-10 text-foreground" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-file" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="FileIcon" tabler="IconFile" hugeicons="FileEmpty02Icon" phosphor="FileIcon" remixicon="RiFileLine" aria-hidden="true">
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    </svg>
                  </ItemMedia>
                </Item>
              </div>
            </FramePanel>
            <footer className="flex flex-col gap-1.5 items-start mt-auto px-3 py-3">
              <div className="flex gap-2 items-center justify-between w-full">
                <a className="font-medium hover:text-primary leading-snug text-foreground text-sm" href="#">
                  {"Supabase Auth Integration"}
                </a>
                <Badge className="[&_svg:not([class*=size-])]:size-3 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-success/10 border border-success/15 dark:bg-success/15 dark:border-success/25 dark:text-success disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:ring-ring font-medium gap-1 h-5 min-w-5 outline-none px-1.25 py-0.5 relative style-luma:rounded-4xl style-lyra:rounded-none style-maia:rounded-4xl style-mira:rounded-sm style-nova:rounded-sm style-rhea:rounded-2xl style-sera:rounded-none style-vega:rounded-sm text-success-foreground text-xs transition-shadow">
                  {"Enterprise"}
                </Badge>
              </div>
              <p className="leading-relaxed line-clamp-2 text-muted-foreground text-xs">
                {"Authentication and data access wired together for secure product onboarding and account recovery."}
              </p>
            </footer>
          </Frame>
        </div>
      </div>
    </div>
  )
}
