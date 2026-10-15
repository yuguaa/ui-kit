import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { Button } from "@/registry/bases/base/ui/button"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="flex items-center justify-center min-h-svh p-6 w-full">
      <Frame className="@container max-w-md w-full">
        <FramePanel className="px-3.5! py-3!">
          <h2 className="font-medium text-base text-foreground">
            {"Manual Integrations"}
          </h2>
        </FramePanel>
        <FramePanel className="p-3.5!">
          <ul className="flex flex-col">
            <li>
              <div className="flex gap-2 items-center">
                <Item className="[&_svg]:opacity-70 [&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-3 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-code" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="CodeIcon" tabler="IconCode" hugeicons="SourceCodeIcon" phosphor="CodeIcon" remixicon="RiCodeSSlashLine" aria-hidden="true">
                      <path d="m16 18 6-6-6-6"></path>
                      <path d="m8 6-6 6 6 6"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <p className="font-medium text-foreground text-sm">
                    {"Data Cleaning"}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {"Automated pipeline to clean and format.."}
                  </p>
                </div>
                <Button className="text-foreground" type="button" tabIndex={0} aria-label="Add Data Cleaning integration">
                  <svg className="lucide lucide-plus opacity-60" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </Button>
              </div>
              <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Item className="[&_svg]:opacity-70 [&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-3 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-scan-search" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ScanSearchIcon" tabler="IconZoomScan" hugeicons="SearchVisualIcon" phosphor="SelectionIcon" remixicon="RiScan2Line" aria-hidden="true">
                      <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                      <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                      <circle cx={12} cy={12} r={3}></circle>
                      <path d="m16 16-1.9-1.9"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <p className="font-medium text-foreground text-sm">
                    {"Anomaly Detection"}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {"Identify irregular patterns in financial or.."}
                  </p>
                </div>
                <Button className="text-foreground" type="button" tabIndex={0} aria-label="Add Anomaly Detection integration">
                  <svg className="lucide lucide-plus opacity-60" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </Button>
              </div>
              <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Item className="[&_svg]:opacity-70 [&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-3 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-sparkles" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="SparklesIcon" tabler="IconSparkles" hugeicons="SparklesIcon" phosphor="SparkleIcon" remixicon="RiSparklingLine" aria-hidden="true">
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx={4} cy={20} r={2}></circle>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <p className="font-medium text-foreground text-sm">
                    {"Recommendation Engine"}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {"AI-driven product or content recomme.."}
                  </p>
                </div>
                <Button className="text-foreground" type="button" tabIndex={0} aria-label="Add Recommendation Engine integration">
                  <svg className="lucide lucide-plus opacity-60" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </Button>
              </div>
              <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Item className="[&_svg]:opacity-70 [&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-3 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-message-square" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="MessageSquareIcon" tabler="IconMessageDots" hugeicons="Message02Icon" phosphor="ChatIcon" remixicon="RiChat4Line" aria-hidden="true">
                      <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <p className="font-medium text-foreground text-sm">
                    {"Chatbot Support"}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {"Conversational assistant for customer.."}
                  </p>
                </div>
                <Button className="text-foreground" type="button" tabIndex={0} aria-label="Add Chatbot Support integration">
                  <svg className="lucide lucide-plus opacity-60" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </Button>
              </div>
              <Separator className="bg-transparent border-dashed border-t my-2.5 w-auto" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
            </li>
            <li>
              <div className="flex gap-2 items-center">
                <Item className="[&_svg]:opacity-70 [&_svg]:size-5 [&_svg]:text-accent-foreground bg-muted border-3 border-background dark:border p-0 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] size-10" variant="default" size="default">
                  <ItemMedia className="size-auto" variant="icon">
                    <svg className="lucide lucide-shopping-cart" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="ShoppingCartIcon" tabler="IconShoppingCart" hugeicons="ShoppingCart01Icon" phosphor="ShoppingCartIcon" remixicon="RiShoppingCartLine" aria-hidden="true">
                      <circle cx={8} cy={21} r={1}></circle>
                      <circle cx={19} cy={21} r={1}></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                  </ItemMedia>
                </Item>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <p className="font-medium text-foreground text-sm">
                    {"Fraud Monitoring"}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {"Real-time alerts for suspicious transac.."}
                  </p>
                </div>
                <Button className="text-foreground" type="button" tabIndex={0} aria-label="Add Fraud Monitoring integration">
                  <svg className="lucide lucide-plus opacity-60" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" lucide="PlusIcon" tabler="IconPlus" hugeicons="PlusSignIcon" phosphor="PlusIcon" remixicon="RiAddLine" aria-hidden="true">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </Button>
              </div>
            </li>
          </ul>
        </FramePanel>
        <FramePanel className="p-3!">
          <Button className="text-foreground w-full" type="button" tabIndex={0}>
            {"Browse More"}
          </Button>
        </FramePanel>
      </Frame>
    </div>
  )
}
