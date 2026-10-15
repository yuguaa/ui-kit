import {
  Avatar,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Sheet,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/registry/bases/base/ui/sidebar"
import { Skeleton } from "@/registry/bases/base/ui/skeleton"
import {
  Tooltip,
  TooltipTrigger,
} from "@/registry/bases/base/ui/tooltip"

export function Pattern() {
  return (
    <SidebarProvider>
    <div className="bg-muted flex group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar min-h-svh overflow-clip relative text-foreground w-full" style={{"--sidebar-width": "16rem", "--sidebar-width-icon": "3rem"}}>
      <div className="absolute h-[380px] inset-x-0 lg:h-[444px] overflow-hidden pointer-events-none sm:h-[420px] top-[-68px]" aria-hidden="true">
        <style dangerouslySetInnerHTML={{ __html: "\n@keyframes app-shell-22-slide {\n  0%, 11.667% { opacity: 0 }\n  16.667%, 33.333% { opacity: 1 }\n  33.367%, 100% { opacity: 0 }\n}\n@keyframes app-shell-22-slide-last {\n  0%, 11.667% { opacity: 0 }\n  16.667%, 28.333% { opacity: 1 }\n  33.333%, 100% { opacity: 0 }\n}\n.app-shell-22-slide {\n  opacity: 0;\n  animation: app-shell-22-slide 30s ease-in-out var(--app-shell-22-slide-delay) infinite;\n}\n.app-shell-22-slide[data-last] { animation-name: app-shell-22-slide-last }\n@keyframes app-shell-22-twinkle {\n  0%, 62% { opacity: 0 }\n  72%, 88% { opacity: 1 }\n  98%, 100% { opacity: 0 }\n}\n.app-shell-22-twinkle {\n  opacity: 0;\n  animation: app-shell-22-twinkle var(--app-shell-22-twinkle-duration) ease-in-out var(--app-shell-22-twinkle-delay) infinite;\n}\n.app-shell-22-twinkle[data-lit] { opacity: 1 }\n@media (prefers-reduced-motion: reduce) {\n  .app-shell-22-slide, .app-shell-22-twinkle { animation: none }\n}\n" }} />
        <img className="absolute inset-0 object-cover size-full" sizes="100vw" alt="" width="1440" height="444" fetchpriority="high" srcSet="/blocks/app-shell-22/hero-768.webp 768w, /blocks/app-shell-22/hero-1152.webp 1152w, /blocks/app-shell-22/hero-1670.webp 1670w" src="/blocks/app-shell-22/hero-1670.webp" style={{objectPosition: "center 30%"}} />
        <img className="absolute app-shell-22-slide inset-0 object-cover size-full" sizes="100vw" alt="" width="1440" height="444" decoding="async" fetchpriority="low" srcSet="/blocks/app-shell-22/hero-reading-768.webp 768w, /blocks/app-shell-22/hero-reading-1152.webp 1152w, /blocks/app-shell-22/hero-reading-1536.webp 1536w" src="/blocks/app-shell-22/hero-reading-1536.webp" style={{objectPosition: "center 30%", "--app-shell-22-slide-delay": "0s"}} />
        <img className="absolute app-shell-22-slide inset-0 object-cover size-full" sizes="100vw" alt="" width="1440" height="444" decoding="async" fetchpriority="low" srcSet="/blocks/app-shell-22/hero-plane-768.webp 768w, /blocks/app-shell-22/hero-plane-1152.webp 1152w, /blocks/app-shell-22/hero-plane-1670.webp 1670w" src="/blocks/app-shell-22/hero-plane-1670.webp" style={{objectPosition: "center 30%", "--app-shell-22-slide-delay": "5s"}} />
        <img className="absolute app-shell-22-slide inset-0 object-cover size-full" sizes="100vw" alt="" width="1440" height="444" decoding="async" fetchpriority="low" srcSet="/blocks/app-shell-22/hero-sofa-768.webp 768w, /blocks/app-shell-22/hero-sofa-1152.webp 1152w, /blocks/app-shell-22/hero-sofa-1536.webp 1536w" src="/blocks/app-shell-22/hero-sofa-1536.webp" style={{objectPosition: "center 12%", "--app-shell-22-slide-delay": "10s"}} />
        <img className="absolute app-shell-22-slide inset-0 object-cover size-full" sizes="100vw" alt="" width="1440" height="444" decoding="async" fetchpriority="low" srcSet="/blocks/app-shell-22/hero-whiteboard-768.webp 768w, /blocks/app-shell-22/hero-whiteboard-1152.webp 1152w, /blocks/app-shell-22/hero-whiteboard-1670.webp 1670w" src="/blocks/app-shell-22/hero-whiteboard-1670.webp" style={{objectPosition: "center 30%", "--app-shell-22-slide-delay": "15s"}} />
        <img className="absolute app-shell-22-slide inset-0 object-cover size-full" sizes="100vw" alt="" width="1440" height="444" decoding="async" fetchpriority="low" data-last="" srcSet="/blocks/app-shell-22/hero-kitchen-768.webp 768w, /blocks/app-shell-22/hero-kitchen-1152.webp 1152w, /blocks/app-shell-22/hero-kitchen-1670.webp 1670w" src="/blocks/app-shell-22/hero-kitchen-1670.webp" style={{objectPosition: "center 30%", "--app-shell-22-slide-delay": "20s"}} />
        <svg className="absolute inset-0 size-full" viewBox="0 0 1440 444" preserveAspectRatio="xMidYMax slice">
          <path className="stroke-white/7" d="M0 48V444M12 48V444M24 48V444M36 48V444M48 48V444M60 48V444M72 48V444M84 48V444M96 48V444M108 48V444M120 48V444M132 48V444M144 48V444M156 48V444M168 48V444M180 48V444M192 48V444M204 48V444M216 48V444M228 48V444M240 48V444M252 48V444M264 48V444M276 48V444M288 48V444M300 48V444M312 48V444M324 48V444M336 48V444M348 48V444M360 48V444M372 48V444M384 48V444M396 48V444M408 48V444M420 48V444M432 48V444M444 48V444M456 48V444M468 48V444M480 48V444M492 48V444M504 48V444M516 48V444M528 48V444M540 48V444M552 48V444M564 48V444M576 48V444M588 48V444M600 48V444M612 48V444M624 48V444M636 48V444M648 48V444M660 48V444M672 48V444M684 48V444M696 48V444M708 48V444M720 48V444M732 48V444M744 48V444M756 48V444M768 48V444M780 48V444M792 48V444M804 48V444M816 48V444M828 48V444M840 48V444M852 48V444M864 48V444M876 48V444M888 48V444M900 48V444M912 48V444M924 48V444M936 48V444M948 48V444M960 48V444M972 48V444M984 48V444M996 48V444M1008 48V444M1020 48V444M1032 48V444M1044 48V444M1056 48V444M1068 48V444M1080 48V444M1092 48V444M1104 48V444M1116 48V444M1128 48V444M1140 48V444M1152 48V444M1164 48V444M1176 48V444M1188 48V444M1200 48V444M1212 48V444M1224 48V444M1236 48V444M1248 48V444M1260 48V444M1272 48V444M1284 48V444M1296 48V444M1308 48V444M1320 48V444M1332 48V444M1344 48V444M1356 48V444M1368 48V444M1380 48V444M1392 48V444M1404 48V444M1416 48V444M1428 48V444M1440 48V444M0 48H1440M0 60H1440M0 72H1440M0 84H1440M0 96H1440M0 108H1440M0 120H1440M0 132H1440M0 144H1440M0 156H1440M0 168H1440M0 180H1440M0 192H1440M0 204H1440M0 216H1440M0 228H1440M0 240H1440M0 252H1440M0 264H1440M0 276H1440M0 288H1440M0 300H1440M0 312H1440M0 324H1440M0 336H1440M0 348H1440M0 360H1440M0 372H1440M0 384H1440M0 396H1440M0 408H1440M0 420H1440M0 432H1440M0 444H1440" fill="none" strokeWidth="0.48"></path>
          <path className="fill-muted" d="M108 384h24v12h-24zM240 384h24v12h-24zM336 384h24v12h-24zM552 384h24v12h-24zM588 384h24v12h-24zM732 384h24v12h-24zM936 384h24v12h-24zM1164 384h24v12h-24zM1356 384h24v12h-24zM84 396h12v12h-12zM132 396h12v12h-12zM168 396h36v12h-36zM252 396h12v12h-12zM288 396h36v12h-36zM372 396h12v12h-12zM420 396h24v12h-24zM492 396h12v12h-12zM528 396h36v12h-36zM600 396h24v12h-24zM660 396h24v12h-24zM696 396h12v12h-12zM756 396h12v12h-12zM792 396h24v12h-24zM840 396h12v12h-12zM888 396h36v12h-36zM960 396h12v12h-12zM996 396h12v12h-12zM1044 396h36v12h-36zM1092 396h12v12h-12zM1140 396h24v12h-24zM1200 396h12v12h-12zM1248 396h36v12h-36zM1332 396h12v12h-12zM1368 396h24v12h-24zM1416 396h12v12h-12zM0 408h24v12h-24zM12 408h48v12h-48zM72 408h24v12h-24zM108 408h12v12h-12zM144 408h24v12h-24zM204 408h12v12h-12zM240 408h36v12h-36zM312 408h24v12h-24zM348 408h12v12h-12zM384 408h36v12h-36zM456 408h12v12h-12zM480 408h48v12h-48zM540 408h36v12h-36zM612 408h24v12h-24zM648 408h24v12h-24zM708 408h24v12h-24zM744 408h12v12h-12zM780 408h24v12h-24zM828 408h60v12h-60zM912 408h24v12h-24zM948 408h12v12h-12zM972 408h36v12h-36zM1020 408h12v12h-12zM1068 408h36v12h-36zM1116 408h12v12h-12zM1164 408h48v12h-48zM1236 408h12v12h-12zM1272 408h48v12h-48zM1356 408h24v12h-24zM1392 408h12v12h-12zM1428 408h12v12h-12zM12 420h60v12h-60zM96 420h48v12h-48zM156 420h36v12h-36zM204 420h60v12h-60zM288 420h24v12h-24zM324 420h72v12h-72zM408 420h36v12h-36zM468 420h36v12h-36zM516 420h36v12h-36zM576 420h12v12h-12zM600 420h60v12h-60zM684 420h24v12h-24zM720 420h24v12h-24zM768 420h48v12h-48zM828 420h24v12h-24zM864 420h48v12h-48zM924 420h24v12h-24zM972 420h12v12h-12zM996 420h36v12h-36zM1044 420h36v12h-36zM1104 420h36v12h-36zM1152 420h72v12h-72zM1248 420h48v12h-48zM1308 420h36v12h-36zM1368 420h48v12h-48zM13 432h143v12h-143zM168 432h84v12h-84zM264 432h216v12h-216zM492 432h48v12h-48zM552 432h84v12h-84zM648 432h72v12h-72zM732 432h132v12h-132zM876 432h48v12h-48zM936 432h84v12h-84zM1032 432h36v12h-36zM1080 432h72v12h-72zM1164 432h48v12h-48zM1224 432h96v12h-96zM1332 432h36v12h-36zM1380 432h48v12h-48z"></path>
          <rect className="app-shell-22-twinkle fill-muted" x="108" y="336" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "6.918s", "--app-shell-22-twinkle-delay": "-4.77s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="384" y="336" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "9.778s", "--app-shell-22-twinkle-delay": "-4.28s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="648" y="336" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.394s", "--app-shell-22-twinkle-delay": "-3.21s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="888" y="336" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "6.538s", "--app-shell-22-twinkle-delay": "-2.35s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1008" y="336" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "7.122s", "--app-shell-22-twinkle-delay": "-5.95s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1152" y="336" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "6.578s", "--app-shell-22-twinkle-delay": "-5.53s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1428" y="336" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "7.598s", "--app-shell-22-twinkle-delay": "-4.51s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="144" y="348" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "7.854s", "--app-shell-22-twinkle-delay": "-0.31s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="300" y="348" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.21s", "--app-shell-22-twinkle-delay": "-6.86s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="480" y="348" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.126s", "--app-shell-22-twinkle-delay": "-4.18s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="540" y="348" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.026s", "--app-shell-22-twinkle-delay": "-6.89s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="684" y="348" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.49s", "--app-shell-22-twinkle-delay": "-1.19s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="851" y="348" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "9.479s", "--app-shell-22-twinkle-delay": "-5.73s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="948" y="348" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "6.594s", "--app-shell-22-twinkle-delay": "-2.03s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1068" y="348" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.594000000000001s", "--app-shell-22-twinkle-delay": "-0.17s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1164" y="348" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.058s", "--app-shell-22-twinkle-delay": "-8.7s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1320" y="348" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "9.638s", "--app-shell-22-twinkle-delay": "-6.3s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1368" y="348" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "11.094000000000001s", "--app-shell-22-twinkle-delay": "-6.89s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="84" y="360" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.661999999999999s", "--app-shell-22-twinkle-delay": "-3.6s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="192" y="360" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.809999999999999s", "--app-shell-22-twinkle-delay": "-2.95s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="240" y="360" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "9.258s", "--app-shell-22-twinkle-delay": "-5.43s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="420" y="360" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.878s", "--app-shell-22-twinkle-delay": "-5.02s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="504" y="360" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.690000000000001s", "--app-shell-22-twinkle-delay": "-5.32s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="612" y="360" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "9.174s", "--app-shell-22-twinkle-delay": "-5.21s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="696" y="360" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "11.058s", "--app-shell-22-twinkle-delay": "-1.94s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="780" y="360" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.23s", "--app-shell-22-twinkle-delay": "-0.15s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="840" y="360" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "9.554s", "--app-shell-22-twinkle-delay": "-1.2s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="876" y="360" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "9.454s", "--app-shell-22-twinkle-delay": "-0.08s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="984" y="360" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "6.226s", "--app-shell-22-twinkle-delay": "-3.74s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1116" y="360" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.366s", "--app-shell-22-twinkle-delay": "-9.05s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1284" y="360" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "10.822s", "--app-shell-22-twinkle-delay": "-0.12s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1416" y="360" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.234s", "--app-shell-22-twinkle-delay": "-4.62s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="48" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.382s", "--app-shell-22-twinkle-delay": "-8.63s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="108" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.538s", "--app-shell-22-twinkle-delay": "-6.3s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="216" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "9.118s", "--app-shell-22-twinkle-delay": "-7.95s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="288" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "9.206s", "--app-shell-22-twinkle-delay": "-3.67s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="372" y="372" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "9.978s", "--app-shell-22-twinkle-delay": "-6.33s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="492" y="372" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "8.738s", "--app-shell-22-twinkle-delay": "-2.05s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="600" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.222000000000001s", "--app-shell-22-twinkle-delay": "-1.88s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="672" y="372" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "10.405999999999999s", "--app-shell-22-twinkle-delay": "-2.21s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="768" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.838000000000001s", "--app-shell-22-twinkle-delay": "-3.27s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="864" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.198s", "--app-shell-22-twinkle-delay": "-5.44s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="972" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "6.674s", "--app-shell-22-twinkle-delay": "-0.41s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1032" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.886s", "--app-shell-22-twinkle-delay": "-6.01s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1140" y="372" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "9.258s", "--app-shell-22-twinkle-delay": "-3.85s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1224" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.822s", "--app-shell-22-twinkle-delay": "-7.65s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1272" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.190000000000001s", "--app-shell-22-twinkle-delay": "-5.38s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1308" y="372" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "8.45s", "--app-shell-22-twinkle-delay": "-6.19s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1380" y="372" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "6.938s", "--app-shell-22-twinkle-delay": "-6.89s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="60" y="384" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "10.054s", "--app-shell-22-twinkle-delay": "-9.5s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="180" y="384" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "8.67s", "--app-shell-22-twinkle-delay": "-4.14s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="204" y="384" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.51s", "--app-shell-22-twinkle-delay": "-5.89s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="312" y="384" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.161999999999999s", "--app-shell-22-twinkle-delay": "-10.51s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="396" y="384" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.838000000000001s", "--app-shell-22-twinkle-delay": "-2.02s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="456" y="384" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.634s", "--app-shell-22-twinkle-delay": "-10.56s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="504" y="384" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "7.002s", "--app-shell-22-twinkle-delay": "-0.57s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="636" y="384" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "7.254s", "--app-shell-22-twinkle-delay": "-3.79s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="684" y="384" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.614s", "--app-shell-22-twinkle-delay": "-5.71s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="816" y="384" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "7.442s", "--app-shell-22-twinkle-delay": "-2.67s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="876" y="384" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "6.982s", "--app-shell-22-twinkle-delay": "-0.84s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1020" y="384" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "9.734s", "--app-shell-22-twinkle-delay": "-1.74s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1104" y="384" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "10.514s", "--app-shell-22-twinkle-delay": "-8.31s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1212" y="384" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.022s", "--app-shell-22-twinkle-delay": "-3.26s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1284" y="384" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "7.902s", "--app-shell-22-twinkle-delay": "-6.53s"}}></rect>
          <rect className="app-shell-22-twinkle fill-muted" x="1428" y="384" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.91s", "--app-shell-22-twinkle-delay": "-3.51s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="72" y="216" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "6.162s", "--app-shell-22-twinkle-delay": "-2.7s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="288" y="216" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.61s", "--app-shell-22-twinkle-delay": "-2.05s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="480" y="216" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.618s", "--app-shell-22-twinkle-delay": "-1.57s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="756" y="216" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.206s", "--app-shell-22-twinkle-delay": "-2.66s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="972" y="216" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.894s", "--app-shell-22-twinkle-delay": "-3.7s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="36" y="228" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.106s", "--app-shell-22-twinkle-delay": "-3.81s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="120" y="228" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "7.582s", "--app-shell-22-twinkle-delay": "-4.51s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="516" y="228" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "6.698s", "--app-shell-22-twinkle-delay": "-3.5s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="780" y="228" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.370000000000001s", "--app-shell-22-twinkle-delay": "-8.19s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1008" y="228" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "6.2620000000000005s", "--app-shell-22-twinkle-delay": "-1.24s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1416" y="228" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "6.126s", "--app-shell-22-twinkle-delay": "-1.65s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="192" y="240" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "9.474s", "--app-shell-22-twinkle-delay": "-2.71s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="348" y="240" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.918s", "--app-shell-22-twinkle-delay": "-7.85s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="552" y="240" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.394s", "--app-shell-22-twinkle-delay": "-7.52s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="876" y="240" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.806000000000001s", "--app-shell-22-twinkle-delay": "-1.46s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1080" y="240" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.434000000000001s", "--app-shell-22-twinkle-delay": "-9.42s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1368" y="240" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "7.754s", "--app-shell-22-twinkle-delay": "-6.58s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="228" y="252" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.097999999999999s", "--app-shell-22-twinkle-delay": "-6.26s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="600" y="252" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.902000000000001s", "--app-shell-22-twinkle-delay": "-2.41s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="696" y="252" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.318s", "--app-shell-22-twinkle-delay": "-6.16s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1164" y="252" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.834s", "--app-shell-22-twinkle-delay": "-4.22s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1272" y="252" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "11.606s", "--app-shell-22-twinkle-delay": "-5.28s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="84" y="264" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.254s", "--app-shell-22-twinkle-delay": "-1.13s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="432" y="264" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "7.7059999999999995s", "--app-shell-22-twinkle-delay": "-4.03s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="624" y="264" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "7.802s", "--app-shell-22-twinkle-delay": "-5.11s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="804" y="264" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "7.366s", "--app-shell-22-twinkle-delay": "-4.3s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="996" y="264" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.67s", "--app-shell-22-twinkle-delay": "-4.25s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1296" y="264" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "9.85s", "--app-shell-22-twinkle-delay": "-8.81s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="276" y="276" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "8.474s", "--app-shell-22-twinkle-delay": "-5.76s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="360" y="276" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "9.79s", "--app-shell-22-twinkle-delay": "-3.36s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="852" y="276" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "6.906s", "--app-shell-22-twinkle-delay": "-0.53s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="948" y="276" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "6.7780000000000005s", "--app-shell-22-twinkle-delay": "-0.89s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1332" y="276" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.402000000000001s", "--app-shell-22-twinkle-delay": "-0.27s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="108" y="288" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.262s", "--app-shell-22-twinkle-delay": "-3.96s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="396" y="288" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.806000000000001s", "--app-shell-22-twinkle-delay": "-7.61s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="588" y="288" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "7.1899999999999995s", "--app-shell-22-twinkle-delay": "-1.98s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="912" y="288" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.442s", "--app-shell-22-twinkle-delay": "-10.98s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1116" y="288" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "10.597999999999999s", "--app-shell-22-twinkle-delay": "-4.62s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="72" y="300" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "7.2379999999999995s", "--app-shell-22-twinkle-delay": "-3.63s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="444" y="300" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "11.354s", "--app-shell-22-twinkle-delay": "-7.03s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="480" y="300" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "9.486s", "--app-shell-22-twinkle-delay": "-2.7s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="804" y="300" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "11.218s", "--app-shell-22-twinkle-delay": "-9.88s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1092" y="300" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "8.193999999999999s", "--app-shell-22-twinkle-delay": "-6.24s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1164" y="300" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.586s", "--app-shell-22-twinkle-delay": "-5.75s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="216" y="312" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "10.178s", "--app-shell-22-twinkle-delay": "-2.54s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="528" y="312" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "7.546s", "--app-shell-22-twinkle-delay": "-5.97s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="720" y="312" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "9.338000000000001s", "--app-shell-22-twinkle-delay": "-3.54s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1044" y="312" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "11.606s", "--app-shell-22-twinkle-delay": "-9.92s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1248" y="312" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "9.546s", "--app-shell-22-twinkle-delay": "-5.22s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="252" y="324" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.225999999999999s", "--app-shell-22-twinkle-delay": "-1.77s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="588" y="324" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "8.306000000000001s", "--app-shell-22-twinkle-delay": "-0.89s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="948" y="324" width="12" height="12" style={{"--app-shell-22-twinkle-duration": "7.082s", "--app-shell-22-twinkle-delay": "-4.11s"}}></rect>
          <rect className="app-shell-22-twinkle fill-white/45" x="1308" y="324" width="12" height="12" data-lit="" style={{"--app-shell-22-twinkle-duration": "6.6899999999999995s", "--app-shell-22-twinkle-delay": "-2.72s"}}></rect>
        </svg>
      </div>
      <h1 className="sr-only">
        {"Fleet control overview"}
      </h1>
      <div className="flex gap-3 p-3 relative w-full">
        <div className="h-[calc(100svh-24px)] hidden lg:block self-start shrink-0 sticky top-3">
          <SidebarProvider>
          <Sidebar className="backdrop-blur-xl bg-black/40 items-center rounded-full shadow-[0_24px_64px_0_rgb(0_0_0/0.04),inset_0_2px_2px_0_rgb(255_255_255/0.1)] shrink-0 w-12" role="navigation" aria-label="Workspace">
            <SidebarHeader className="items-center px-2 py-3 w-full" sidebar="header">
              <svg className="shrink-0 size-8 text-white" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path opacity="0.2" d="M30.4158 15.8631C30.4158 7.81395 23.8907 1.28883 15.8416 1.28883C7.79244 1.28883 1.26733 7.81395 1.26733 15.8631C1.26733 23.9122 7.79244 30.4373 15.8416 30.4373V31.7047C7.09253 31.7047 0 24.6121 0 15.8631C0 7.114 7.09253 0.0215037 15.8416 0.0215037C24.5906 0.0215037 31.6832 7.114 31.6832 15.8631C31.6832 24.6121 24.5906 31.7047 15.8416 31.7047V30.4373C23.8907 30.4373 30.4158 23.9122 30.4158 15.8631Z" fill="currentColor"></path>
                <g transform="translate(16 16) scale(0.9) translate(-16 -16)">
                  <path d="M23.8927 9.50335C23.8927 10.3336 23.2196 11.0067 22.3893 11.0067C21.5591 11.0067 20.886 10.3336 20.886 9.50335C20.886 8.67307 21.5591 8 22.3893 8C23.2196 8 23.8927 8.67307 23.8927 9.50335Z" fill="currentColor"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 18.2013V9.50335C8 8.67307 8.67307 8 9.50335 8C10.3336 8 11.0067 8.67307 11.0067 9.50335V18.2013C11.0067 19.7433 12.2567 20.9933 13.7987 20.9933H18.094C19.6359 20.9933 20.8859 19.7433 20.8859 18.2013V13.949C20.8859 13.1187 21.559 12.4456 22.3893 12.4456C23.2196 12.4456 23.8926 13.1187 23.8926 13.949V18.2013C23.8926 21.4039 21.2965 24 18.094 24H13.7987C10.5961 24 8 21.4039 8 18.2013Z" fill="currentColor"></path>
                </g>
              </svg>
            </SidebarHeader>
            <SidebarProvider>
            <SidebarContent className="[scrollbar-color:rgb(255_255_255/0.35)_transparent] [scrollbar-width:thin] items-center w-full" sidebar="content">
              <div className="border border-white/15 flex flex-col gap-1.5 items-center py-[9px] rounded-[calc(var(--radius-xl)+4px)] w-full">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:text-white bg-white/10 cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] shrink-0 text-white transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="Overview" aria-current="true" id="base-ui-_r_1_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-layout-dashboard size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LayoutDashboardIcon" tabler="IconLayoutDashboard" hugeicons="DashboardSquare02Icon" phosphor="LayoutIcon" remixicon="RiDashboardLine" aria-hidden="true">
                    <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                    <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="Robots" aria-haspopup="menu" id="base-ui-_r_5_" aria-expanded="false">
                  <svg className="lucide lucide-bot size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BotIcon" tabler="IconRobot" hugeicons="BotIcon" phosphor="RobotIcon" remixicon="RiRobot2Line" aria-hidden="true">
                    <path d="M12 8V4H8"></path>
                    <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                    <path d="M2 14h2"></path>
                    <path d="M20 14h2"></path>
                    <path d="M15 13v2"></path>
                    <path d="M9 13v2"></path>
                  </svg>
                </DropdownMenuTrigger>
                </DropdownMenu>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="Routes" id="base-ui-_r_8_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-route size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RouteIcon" tabler="IconRoute" hugeicons="Route01Icon" phosphor="PathIcon" remixicon="RiRouteLine" aria-hidden="true">
                    <circle cx="6" cy="19" r="3"></circle>
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
                    <circle cx="18" cy="5" r="3"></circle>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="Stations" id="base-ui-_r_a_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-radio size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="RadioIcon" tabler="IconBroadcast" hugeicons="LiveStreaming02Icon" phosphor="BroadcastIcon" remixicon="RiRfidLine" aria-hidden="true">
                    <path d="M16.247 7.761a6 6 0 0 1 0 8.478"></path>
                    <path d="M19.075 4.933a10 10 0 0 1 0 14.134"></path>
                    <path d="M4.925 19.067a10 10 0 0 1 0-14.134"></path>
                    <path d="M7.753 16.239a6 6 0 0 1 0-8.478"></path>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="Incidents" id="base-ui-_r_c_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-shield-alert size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ShieldAlertIcon" tabler="IconShieldExclamation" hugeicons="ShieldEnergyIcon" phosphor="ShieldWarningIcon" remixicon="RiShieldLine" aria-hidden="true">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="Tasks" id="base-ui-_r_e_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-list-checks size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ListChecksIcon" tabler="IconListCheck" hugeicons="TaskDone01Icon" phosphor="ChecksIcon" remixicon="RiListCheck" aria-hidden="true">
                    <path d="M13 5h8"></path>
                    <path d="M13 12h8"></path>
                    <path d="M13 19h8"></path>
                    <path d="m3 17 2 2 4-4"></path>
                    <path d="m3 7 2 2 4-4"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <div className="flex flex-col gap-1.5 items-center py-2.5 w-full">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="Depots" id="base-ui-_r_g_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-store size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="StoreIcon" tabler="IconBuildingStore" hugeicons="Store01Icon" phosphor="StorefrontIcon" remixicon="RiStore2Line" aria-hidden="true">
                    <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path>
                    <path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
                    <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="Billing" id="base-ui-_r_i_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-wallet size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="WalletIcon" tabler="IconWallet" hugeicons="Wallet01Icon" phosphor="WalletIcon" remixicon="RiWallet3Line" aria-hidden="true">
                    <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="Runbooks" id="base-ui-_r_k_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-book-open size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BookOpenIcon" tabler="IconBook" hugeicons="BookOpen01Icon" phosphor="BookOpenIcon" remixicon="RiBookOpenLine" aria-hidden="true">
                    <path d="M12 7v14"></path>
                    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
            </SidebarContent>
            </SidebarProvider>
            <SidebarFooter className="gap-0 items-center p-0 w-full" sidebar="footer">
              <div className="border border-white/15 dark:bg-white/2.5 dark:border-white/8 flex flex-col gap-1.5 items-center py-[9px] rounded-[calc(var(--radius-xl)+4px)] w-full">
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" href="#" role="button" tabIndex="0" aria-label="Notifications" id="base-ui-_r_m_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-bell size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="BellIcon" tabler="IconBell" hugeicons="NotificationIcon" phosphor="BellIcon" remixicon="RiNotificationLine" aria-hidden="true">
                    <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                    <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" href="#" role="button" tabIndex="0" aria-label="Settings" id="base-ui-_r_o_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-settings size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="SettingsIcon" tabler="IconSettings" hugeicons="SettingsIcon" phosphor="GearIcon" remixicon="RiSettings3Line" aria-hidden="true">
                    <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" href="#" role="button" tabIndex="0" aria-label="Sign Out" id="base-ui-_r_q_" baseUiTooltipTrigger="">
                  <svg className="lucide lucide-log-out size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="LogOutIcon" tabler="IconLogout" hugeicons="LogoutSquare01Icon" phosphor="SignOutIcon" remixicon="RiLogoutBoxRLine" aria-hidden="true">
                    <path d="m16 17 5-5-5-5"></path>
                    <path d="M21 12H9"></path>
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  </svg>
                </TooltipTrigger>
                </Tooltip>
              </div>
              <div className="flex flex-col gap-1 items-center py-2.5 w-full">
                <DropdownMenu>
                <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-transparent cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-transparent inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 size-7 transition-all whitespace-nowrap" type="button" tabIndex="0" aria-label="Evil Rabbit account" aria-haspopup="menu" id="base-ui-_r_u_" aria-expanded="false">
                  <Avatar className="after:border-white/20 size-7" size="sm">
                    <AvatarImage alt="" width="28" height="28" src="https://github.com/evilrabbit.png?size=96"></AvatarImage>
                  </Avatar>
                </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
            </SidebarFooter>
          </Sidebar>
          </SidebarProvider>
        </div>
        <div className="flex flex-1 flex-col min-w-0">
          <header className="backdrop-blur-xl bg-black/40 flex gap-1 items-center lg:hidden p-1.5 rounded-full shadow-[0_24px_64px_0_rgb(0_0_0/0.04),inset_0_2px_2px_0_rgb(255_255_255/0.1)] sticky top-3 z-10">
            <svg className="shrink-0 size-8 text-white" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path opacity="0.2" d="M30.4158 15.8631C30.4158 7.81395 23.8907 1.28883 15.8416 1.28883C7.79244 1.28883 1.26733 7.81395 1.26733 15.8631C1.26733 23.9122 7.79244 30.4373 15.8416 30.4373V31.7047C7.09253 31.7047 0 24.6121 0 15.8631C0 7.114 7.09253 0.0215037 15.8416 0.0215037C24.5906 0.0215037 31.6832 7.114 31.6832 15.8631C31.6832 24.6121 24.5906 31.7047 15.8416 31.7047V30.4373C23.8907 30.4373 30.4158 23.9122 30.4158 15.8631Z" fill="currentColor"></path>
              <g transform="translate(16 16) scale(0.9) translate(-16 -16)">
                <path d="M23.8927 9.50335C23.8927 10.3336 23.2196 11.0067 22.3893 11.0067C21.5591 11.0067 20.886 10.3336 20.886 9.50335C20.886 8.67307 21.5591 8 22.3893 8C23.2196 8 23.8927 8.67307 23.8927 9.50335Z" fill="currentColor"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M8 18.2013V9.50335C8 8.67307 8.67307 8 9.50335 8C10.3336 8 11.0067 8.67307 11.0067 9.50335V18.2013C11.0067 19.7433 12.2567 20.9933 13.7987 20.9933H18.094C19.6359 20.9933 20.8859 19.7433 20.8859 18.2013V13.949C20.8859 13.1187 21.559 12.4456 22.3893 12.4456C23.2196 12.4456 23.8926 13.1187 23.8926 13.949V18.2013C23.8926 21.4039 21.2965 24 18.094 24H13.7987C10.5961 24 8 21.4039 8 18.2013Z" fill="currentColor"></path>
              </g>
            </svg>
            <span className="flex-1"></span>
            <Sheet>
            <SheetTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:text-white cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="Open workspace navigation" baseUiClickTrigger="" id="base-ui-_r_11_" aria-haspopup="dialog" aria-expanded="false">
              <svg className="lucide lucide-menu size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MenuIcon" tabler="IconMenu2" hugeicons="Menu01Icon" phosphor="ListIcon" remixicon="RiMenuLine" aria-hidden="true">
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </SheetTrigger>
            </Sheet>
            <DropdownMenu>
            <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:text-white cn-button cn-button-size-icon-sm cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/90 transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="Open sections menu" aria-haspopup="menu" id="base-ui-_r_15_" aria-expanded="false">
              <svg className="lucide lucide-chevron-down size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="ChevronDownIcon" tabler="IconChevronDown" hugeicons="ArrowDown01Icon" phosphor="CaretDownIcon" remixicon="RiArrowDownSLine" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </DropdownMenuTrigger>
            </DropdownMenu>
          </header>
          <div className="-translate-x-1.5 flex-col hidden items-center lg:flex">
            <nav className="backdrop-blur-xl bg-black/40 flex gap-0.5 items-center pl-1 pr-2.5 py-1 rounded-full shadow-[0_24px_64px_0_rgb(0_0_0/0.04),inset_0_2px_2px_0_rgb(255_255_255/0.1)]" aria-label="Sections">
              <Button className="bg-white/10 hover:bg-white/10 hover:text-white px-3 rounded-full shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] text-white text-xs transition-colors" type="button" tabIndex="0" aria-current="page">
                {"Overview"}
              </Button>
              <Button className="hidden hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white md:inline-flex px-3 rounded-full text-white/70 text-xs transition-colors" type="button" tabIndex="0">
                {"Missions"}
              </Button>
              <Button className="hidden hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white md:inline-flex px-3 rounded-full text-white/70 text-xs transition-colors" type="button" tabIndex="0">
                {"Stations"}
              </Button>
              <Button className="hidden hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white md:inline-flex px-3 rounded-full text-white/70 text-xs transition-colors" type="button" tabIndex="0">
                {"Requests"}
              </Button>
              <Button className="hidden hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white md:inline-flex px-3 rounded-full text-white/70 text-xs transition-colors" type="button" tabIndex="0">
                {"Maintenance"}
              </Button>
              <DropdownMenu>
              <DropdownMenuTrigger className="[&_svg]:pointer-events-none [&_svg]:shrink-0 aria-expanded:bg-white/10 aria-expanded:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] aria-expanded:text-white cn-button cn-button-size-icon cn-button-variant-ghost disabled:opacity-50 disabled:pointer-events-none group/button hover:bg-white/10 hover:shadow-[inset_1px_1px_0_0_rgb(255_255_255/0.45),inset_-1px_-1px_0_0_rgb(255_255_255/0.3)] hover:text-white inline-flex items-center justify-center outline-none rounded-full select-none shrink-0 text-white/70 transition-colors whitespace-nowrap" type="button" tabIndex="0" aria-label="More sections" aria-haspopup="menu" id="base-ui-_r_1a_" aria-expanded="false">
                <svg className="lucide lucide-ellipsis" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="MoreHorizontalIcon" tabler="IconDots" hugeicons="MoreHorizontalCircle01Icon" phosphor="DotsThreeIcon" remixicon="RiMoreLine" aria-hidden="true">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </DropdownMenuTrigger>
              </DropdownMenu>
            </nav>
          </div>
          <div className="lg:mt-[260px] mt-[196px] sm:mt-[236px]">
            <div className="flex flex-col gap-6 lg:px-3">
              <div className="gap-3 grid sm:gap-6 sm:grid-cols-4">
                <Card className="border border-border gap-0 h-[154px] pb-0 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="border-b flex flex-col h-[93px] p-0 rounded-b-xl shrink-0">
                    <div className="flex items-center justify-between px-(--card-spacing)">
                      <div className="flex gap-2.5 items-center">
                        <Skeleton className="bg-input/50 dark:bg-input/30 rounded-md shrink-0 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-24"></Skeleton>
                      </div>
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-1"></Skeleton>
                    </div>
                  </CardContent>
                  <div className="flex flex-1 items-center justify-between px-(--card-spacing)">
                    <div className="flex">
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-28"></Skeleton>
                  </div>
                </Card>
                <Card className="border border-border gap-0 h-[154px] pb-0 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="border-b flex flex-col h-[93px] p-0 rounded-b-xl shrink-0">
                    <div className="flex items-center justify-between px-(--card-spacing)">
                      <div className="flex gap-2.5 items-center">
                        <Skeleton className="bg-input/50 dark:bg-input/30 rounded-md shrink-0 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-24"></Skeleton>
                      </div>
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-1"></Skeleton>
                    </div>
                  </CardContent>
                  <div className="flex flex-1 items-center justify-between px-(--card-spacing)">
                    <div className="flex">
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-28"></Skeleton>
                  </div>
                </Card>
                <Card className="border border-border gap-0 h-[154px] pb-0 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="border-b flex flex-col h-[93px] p-0 rounded-b-xl shrink-0">
                    <div className="flex items-center justify-between px-(--card-spacing)">
                      <div className="flex gap-2.5 items-center">
                        <Skeleton className="bg-input/50 dark:bg-input/30 rounded-md shrink-0 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-24"></Skeleton>
                      </div>
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-1"></Skeleton>
                    </div>
                  </CardContent>
                  <div className="flex flex-1 items-center justify-between px-(--card-spacing)">
                    <div className="flex">
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-28"></Skeleton>
                  </div>
                </Card>
                <Card className="border border-border gap-0 h-[154px] pb-0 ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="border-b flex flex-col h-[93px] p-0 rounded-b-xl shrink-0">
                    <div className="flex items-center justify-between px-(--card-spacing)">
                      <div className="flex gap-2.5 items-center">
                        <Skeleton className="bg-input/50 dark:bg-input/30 rounded-md shrink-0 size-7"></Skeleton>
                        <Skeleton className="bg-input/50 dark:bg-input/30 h-5 shrink-0 w-24"></Skeleton>
                      </div>
                      <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-1"></Skeleton>
                    </div>
                  </CardContent>
                  <div className="flex flex-1 items-center justify-between px-(--card-spacing)">
                    <div className="flex">
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                      <Skeleton className="-mr-2 bg-input/50 dark:bg-input/30 ring-1 ring-card rounded-full shrink-0 size-5"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 h-4 shrink-0 w-28"></Skeleton>
                  </div>
                </Card>
              </div>
              <div className="gap-6 grid lg:grid-cols-4">
                <Card className="border border-border min-h-[336px] ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
                <Card className="border border-border lg:col-span-3 min-h-[336px] ring-0 shadow-xs" size="default" aria-hidden="true">
                  <CardContent className="flex flex-1 flex-col gap-6 min-h-0">
                    <div className="flex flex-col gap-2 h-10 shrink-0">
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                      <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                    </div>
                    <Skeleton className="bg-input/50 dark:bg-input/30 flex-1 min-h-px"></Skeleton>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </SidebarProvider>
  )
}
