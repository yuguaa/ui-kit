import {
  Frame,
  FramePanel,
} from "@/registry-neui/bases/base/neui/frame"
import { IconTile } from "@/registry-neui/bases/radix/neui/icon-tile"

export function Pattern() {
  return (
    <div className="flex items-center justify-center max-w-5xl min-h-svh p-8 w-full">
      <div className="@container w-full">
        <div className="@2xl:grid-cols-3 @4xl:grid-cols-5 gap-5 grid">
          <Frame>
            <FramePanel className="px-3.5 py-6 shadow-none! text-center">
              <IconTile className="[--icon-tile-size:--spacing(13.5)]" variant="elevated" size="default">
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
              </IconTile>
            </FramePanel>
            <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) px-1.5! py-(--frame-panel-footer-py) py-2.5! text-center">
              <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                {"Resend"}
              </a>
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="px-3.5 py-6 shadow-none! text-center">
              <IconTile className="[--icon-tile-size:--spacing(13.5)]" variant="elevated" size="default">
                <svg className="size-7" aria-hidden="true" fill="none" viewBox="100 100 312 312">
                  <path fill="#533afd" fillRule="evenodd" d="m120 392 272-57.683V120l-272 58.357z" clipRule="evenodd"></path>
                </svg>
              </IconTile>
            </FramePanel>
            <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) px-1.5! py-(--frame-panel-footer-py) py-2.5! text-center">
              <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                {"Stripe"}
              </a>
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="px-3.5 py-6 shadow-none! text-center">
              <IconTile className="[--icon-tile-size:--spacing(13.5)]" variant="elevated" size="default">
                <svg className="size-7" aria-hidden="true" viewBox="0 0 109 113" fill="none">
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
              </IconTile>
            </FramePanel>
            <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) px-1.5! py-(--frame-panel-footer-py) py-2.5! text-center">
              <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                {"Supabase"}
              </a>
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="px-3.5 py-6 shadow-none! text-center">
              <IconTile className="[--icon-tile-size:--spacing(13.5)]" variant="elevated" size="default">
                <span className="dark:hidden" aria-hidden="true">
                  <svg className="size-7" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                    <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                  </svg>
                </span>
                <span className="dark:block hidden" aria-hidden="true">
                  <svg className="size-7" preserveAspectRatio="xMidYMid" viewBox="0 0 256 260">
                    <path fill="#fff" d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"></path>
                  </svg>
                </span>
              </IconTile>
            </FramePanel>
            <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) px-1.5! py-(--frame-panel-footer-py) py-2.5! text-center">
              <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                {"OpenAI"}
              </a>
            </footer>
          </Frame>
          <Frame>
            <FramePanel className="px-3.5 py-6 shadow-none! text-center">
              <IconTile className="[--icon-tile-size:--spacing(13.5)]" variant="elevated" size="default">
                <span className="dark:hidden" aria-hidden="true">
                  <svg className="size-7" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                    <title>
                      {"Anthropic"}
                    </title>
                    <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                  </svg>
                </span>
                <span className="dark:block hidden" aria-hidden="true">
                  <svg className="size-7" fill="#ffff" fillRule="evenodd" viewBox="0 0 24 24" style={{flex: "0 0 auto", lineHeight: "1"}}>
                    <title>
                      {"Anthropic"}
                    </title>
                    <path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                  </svg>
                </span>
              </IconTile>
            </FramePanel>
            <footer className="flex flex-col gap-(--frame-panel-footer-gap) px-(--frame-panel-footer-px) px-1.5! py-(--frame-panel-footer-py) py-2.5! text-center">
              <a className="font-medium hover:text-primary leading-tight text-sm" href="#">
                {"Anthropic"}
              </a>
            </footer>
          </Frame>
        </div>
      </div>
    </div>
  )
}
