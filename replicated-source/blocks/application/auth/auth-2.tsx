import {
  Avatar,
  AvatarFallback,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
} from "@/registry/bases/base/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/registry/bases/base/ui/carousel"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
} from "@/registry/bases/base/ui/input-group"
import { Input } from "@/registry/bases/base/ui/input"
import { ItemMedia } from "@/registry/bases/base/ui/item"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Item } from "@/registry/bases/radix/ui/item"

export function Pattern() {
  return (
    <div className="bg-background lg:grid lg:grid-cols-[minmax(0,1fr)_640px] lg:min-h-svh w-full">
      <aside className="flex lg:min-h-svh lg:pb-8 lg:pt-28 min-h-64 overflow-hidden pb-8 pt-9 relative sm:min-h-72 sm:pb-10 sm:pt-12">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute bg-zinc-950 inset-0"></div>
          <div className="absolute bg-[radial-gradient(circle_at_16%_12%,var(--color-cyan-950)_0,transparent_34%),radial-gradient(circle_at_84%_30%,var(--color-fuchsia-950)_0,transparent_34%),linear-gradient(145deg,var(--color-zinc-950),var(--color-slate-950)_46%,var(--color-indigo-950))] inset-0 opacity-95"></div>
          <svg className="absolute h-[62%] inset-x-[-20%] opacity-90 top-[18%] w-[140%]" viewBox="0 0 1200 620" preserveAspectRatio="none" style={{transform: "translateY(0.0013512px)", opacity: "0.820038"}}>
            <defs>
              <lineargradient id="auth20-fiber-primary" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-amber-300)" stopOpacity="0.08"></stop>
                <stop offset="38%" stopColor="var(--color-rose-400)" stopOpacity="0.88"></stop>
                <stop offset="58%" stopColor="var(--color-fuchsia-500)" stopOpacity="0.94"></stop>
                <stop offset="100%" stopColor="var(--color-violet-600)" stopOpacity="0"></stop>
              </lineargradient>
              <lineargradient id="auth20-fiber-secondary" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--color-sky-500)" stopOpacity="0"></stop>
                <stop offset="32%" stopColor="var(--color-teal-300)" stopOpacity="0.36"></stop>
                <stop offset="58%" stopColor="var(--color-purple-500)" stopOpacity="0.86"></stop>
                <stop offset="100%" stopColor="var(--color-blue-500)" stopOpacity="0.08"></stop>
              </lineargradient>
              <filter id="auth20-fiber-glow" x="-10%" y="-30%" width="120%" height="160%">
                <fegaussianblur stdDeviation="2.6" result="blur"></fegaussianblur>
                <femerge>
                  <femergenode in="blur"></femergenode>
                  <femergenode in="SourceGraphic"></femergenode>
                </femerge>
              </filter>
            </defs>
            <g filter="url(#auth20-fiber-glow)" fill="none" style={{transformOrigin: "50% 50%", transform: "translateX(-17.9913px) translateY(-0.00217799px) scaleX(1.00001) rotate(-0.89963deg) skewX(-1.19955deg)", transformBox: "fill-box"}}>
              <path d="M -80 262.6349 C 180 202.84964 360 474.98076 511.52428 427.78965 C 710 368.55502 820 303.86513 1037.99266 310.6698 C 1120 314.77258 1200 210.06682 1300 204.66306" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.24" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 269.93286 C 180 210.14766 360 472.27883 514.02343 424.88794 C 710 365.95309 820 303.5609 1037.8918 310.36556 C 1120 314.46835 1200 211.66687 1300 206.26312" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.252" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 277.13077 C 180 217.34551 360 468.67738 516.32251 421.1866 C 710 362.35159 820 303.25634 1037.69094 310.061 C 1120 314.16379 1200 212.76714 1300 207.36339" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.264" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 284.32847 C 180 224.54321 360 464.27641 518.72139 416.58579 C 710 357.85074 820 302.85162 1037.39014 309.65629 C 1120 313.65913 1200 213.36762 1300 207.86392" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.276" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 291.22616 C 180 231.4409 360 459.07609 520.92026 411.28563 C 710 352.65036 820 302.14685 1036.88939 308.95152 C 1120 313.0543 1200 213.46848 1300 207.96478" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.288" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 298.02375 C 180 238.23849 360 453.37631 523.01908 405.38601 C 710 346.95057 820 301.14197 1036.28869 307.94664 C 1120 312.04943 1200 213.16966 1300 207.76591" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.3" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 304.52134 C 180 244.73608 360 447.17722 525.01774 399.08703 C 710 340.85143 820 299.83704 1035.58799 306.64171 C 1120 310.74449 1200 212.57111 1300 207.16735" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.312" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 310.71892 C 180 250.93372 360 440.87856 526.91635 392.58858 C 710 334.45283 820 298.13222 1034.68746 304.93688 C 1120 309.03967 1200 211.77293 1300 206.36918" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.324" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 316.61662 C 180 256.83136 360 434.58043 528.51501 386.19062 C 710 328.25465 820 296.02745 1033.68692 302.83211 C 1120 306.9349 1200 210.87502 1300 205.47127" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.33599999999999997" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 322.21431 C 180 262.42911 360 428.58263 529.91362 379.99298 C 710 322.1569 820 293.42284 1032.58649 300.2275 C 1120 304.33029 1200 210.07732 1300 204.57363" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.348" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 327.51217 C 180 267.72696 360 422.98515 531.11222 374.19571 C 710 316.55942 820 290.41839 1031.38606 297.22305 C 1120 301.32584 1200 209.27995 1300 203.8762" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.36" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 332.51013 C 180 272.72487 360 418.08772 532.11078 369.09845 C 710 311.66199 820 286.81421 1030.08574 293.61887 C 1120 297.72166 1200 208.78274 1300 203.37899" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.372" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 337.10831 C 180 277.32305 360 413.89035 532.90938 364.80118 C 710 307.46462 820 282.81029 1028.68547 289.61496 C 1120 293.71774 1200 208.58563 1300 203.18188" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.384" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 341.50659 C 180 281.72139 360 410.59276 533.30815 361.40381 C 710 304.16709 820 278.3067 1027.18531 285.11136 C 1120 289.11421 1200 208.88853 1300 203.38483" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.396" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 345.70509 C 180 285.91983 360 408.29491 533.50686 358.90611 C 710 301.86918 820 273.30343 1025.5852 280.10809 C 1120 284.21088 1200 209.59142 1300 204.08772" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.40800000000000003" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 349.60381 C 180 289.81855 360 406.79673 533.50568 357.30809 C 710 300.47095 820 267.90054 1023.88515 274.7052 C 1120 278.70804 1200 210.79432 1300 205.39057" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.42" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 353.50263 C 180 293.71737 360 406.29802 533.10466 356.70949 C 710 299.97223 820 262.09802 1022.1852 268.90268 C 1120 273.00547 1200 212.597 1300 207.19325" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.432" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 357.20172 C 180 297.41646 360 406.69871 532.60365 356.81045 C 710 300.27298 820 255.89593 1020.38531 262.70059 C 1120 266.80338 1200 214.89952 1300 209.49577" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.444" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 360.90091 C 180 301.11571 360 407.69887 531.70284 357.71072 C 710 301.27314 820 249.4941 1018.58542 256.29877 C 1120 260.40155 1200 217.80182 1300 212.39807" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.45599999999999996" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 364.70027 C 180 304.91501 360 409.19839 530.60214 359.01045 C 710 302.77266 820 242.89266 1016.68569 249.69732 C 1120 253.80011 1200 221.20381 1300 215.80005" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.46799999999999997" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 368.49979 C 180 308.71453 360 410.99737 529.30155 360.70954 C 710 304.57164 820 236.19153 1014.78601 242.99619 C 1120 247.09898 1200 225.00552 1300 219.60177" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.48" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 372.49936 C 180 312.7141 360 412.89587 527.80113 362.50815 C 710 306.57009 820 229.39073 1012.78644 236.19539 C 1120 240.19823 1200 229.20686 1300 223.80311" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.492" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 376.69898 C 180 316.91372 360 414.69389 526.1008 364.10638 C 710 308.3681 820 222.49019 1010.88687 229.29485 C 1120 233.39764 1200 233.70788 1300 228.30413" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.504" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 381.09866 C 180 321.31346 360 416.19153 524.2007 365.50418 C 710 309.86575 820 215.78987 1008.8874 222.59453 C 1120 226.69732 1200 238.30863 1300 232.90488" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.516" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 385.79834 C 180 326.01308 360 417.18901 522.10075 366.30182 C 710 310.76328 820 209.18971 1006.88799 215.99437 C 1120 220.09716 1200 243.00906 1300 237.60531" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.528" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 390.79796 C 180 331.01276 360 417.48638 519.90091 366.39941 C 710 311.06065 820 202.78965 1004.98864 209.59432 C 1120 213.69711 1200 247.70922 1300 242.20552" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.54" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 396.09753 C 180 336.31233 360 416.98381 517.70118 365.79694 C 710 310.55808 820 196.68971 1003.08928 203.49437 C 1120 207.59716 1200 252.20917 1300 246.70547" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.552" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 401.69705 C 180 341.91179 360 415.5814 515.30172 364.19475 C 710 309.15572 820 190.98976 1001.19008 197.79442 C 1120 201.89721 1200 256.40901 1300 251.00525" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.5640000000000001" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 407.69635 C 180 347.91115 360 413.17941 512.90236 361.69287 C 710 306.75368 820 185.58976 999.39083 192.39442 C 1120 196.49721 1200 260.30868 1300 254.80499" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.5760000000000001" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 413.8956 C 180 354.1104 360 409.87775 510.50306 358.19142 C 710 303.45202 820 180.68965 997.59169 187.49432 C 1120 191.59711 1200 263.70842 1300 258.30466" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.5880000000000001" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 420.39464 C 180 360.60943 360 405.67668 508.10397 353.89046 C 710 299.25095 820 176.18944 995.89255 182.9941 C 1120 187.09689 1200 266.70809 1300 261.2044" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.6" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 427.19351 C 180 367.40831 360 400.67614 505.70499 348.69014 C 710 294.35036 820 172.18901 994.19351 178.99367 C 1120 183.09646 1200 269.10788 1300 263.60418" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.612" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 434.19217 C 180 374.40697 360 395.0762 503.40611 342.99035 C 710 288.75047 820 168.68831 992.59442 175.49298 C 1120 179.59577 1200 270.90788 1300 265.50413" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.624" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 441.39067 C 180 381.60541 360 389.07684 501.20729 336.79115 C 710 282.65111 820 165.68735 991.09544 172.49201 C 1120 176.5948 1200 272.20804 1300 266.80429" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.636" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 448.58901 C 180 388.80375 360 382.77807 499.10858 330.39255 C 710 276.45229 820 163.18606 989.69641 169.99073 C 1120 174.09351 1200 273.00842 1300 267.60466" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.648" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 455.88713 C 180 396.10188 360 376.47979 497.20986 323.89442 C 710 270.05406 820 161.08445 988.39743 167.88912 C 1120 171.99191 1200 273.30911 1300 267.90536" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.6599999999999999" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 463.1851 C 180 403.39989 360 370.38188 495.51126 317.59673 C 710 263.95615 820 159.48247 987.1985 166.28713 C 1120 170.38992 1200 273.21013 1300 267.70643" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.6719999999999999" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 470.4829 C 180 410.69769 360 364.58435 493.91265 311.6993 C 710 258.25856 820 158.18017 986.19946 164.98483 C 1120 169.08762 1200 272.71147 1300 267.30772" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.6839999999999999" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 477.58065 C 180 417.79544 360 359.48687 492.61405 306.40204 C 710 253.06113 820 157.27743 985.20054 164.0821 C 1120 168.18488 1200 272.01313 1300 266.50943" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.696" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 484.57829 C 180 424.79308 360 354.98955 491.51544 301.80482 C 710 248.66376 820 156.67432 984.30161 163.47899 C 1120 167.48183 1200 271.11512 1300 265.71136" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.708" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 491.27593 C 180 431.49067 360 351.49201 490.61683 298.10745 C 710 245.06628 820 156.17089 983.60263 162.97556 C 1120 167.07834 1200 270.21737 1300 264.81362" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.72" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 497.77346 C 180 437.98826 360 348.79432 490.01817 295.30992 C 710 242.36859 820 155.86714 983.00365 162.6718 C 1120 166.77459 1200 269.41989 1300 264.01614" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.732" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 503.97111 C 180 444.18585 360 347.09619 489.61946 293.41201 C 710 240.67046 820 155.56312 982.60461 162.36778 C 1120 166.47057 1200 268.82257 1300 263.41882" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.744" vector-effect="non-scaling-stroke"></path>
              <path d="M -80 509.86875 C 180 450.08354 360 346.29764 489.52069 292.51362 C 710 239.97191 820 155.35878 982.20563 162.16344 C 1120 166.26623 1200 268.52541 1300 263.02171" stroke="url(#auth20-fiber-primary)" strokeWidth="1.35" opacity="0.756" vector-effect="non-scaling-stroke"></path>
            </g>
            <g filter="url(#auth20-fiber-glow)" fill="none" style={{transformOrigin: "50% 50%", transform: "translateX(15.9932px) translateY(7.99744px) scaleX(1.015) rotate(0.599769deg) skewX(0.999675deg)", transformBox: "fill-box"}}>
              <path d="M -120 386.87915 C 130 324.95849 330 346.56568 539.09903 387.50401 C 700 454.08958 930.78372 365.20803 1320 265.42961" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.18" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 388.97975 C 130 327.05909 330 348.66628 540.99816 388.80189 C 700 455.3875 929.18289 368.60641 1320 268.728" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.19" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 390.88044 C 130 328.95983 330 350.56702 542.79723 389.69968 C 700 456.18533 927.28224 371.60494 1320 271.82647" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.19999999999999998" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 392.48141 C 130 330.56075 330 352.16794 544.49626 389.89756 C 700 456.48316 925.08183 374.40355 1320 274.52514" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.21" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 393.88252 C 130 331.96186 330 353.56905 546.0953 389.59543 C 700 456.181 922.68155 376.90231 1320 277.02394" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.22" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 395.18376 C 130 333.26315 330 354.87034 547.59428 388.59345 C 700 455.17906 920.08146 379.10129 1320 279.32288" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.22999999999999998" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 396.48519 C 130 334.56458 330 356.17177 548.99322 386.8917 C 700 453.37731 917.18155 381.20037 1320 281.42195" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.24" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 397.68681 C 130 335.76615 330 357.37334 550.29221 384.39027 C 700 450.97583 914.18183 383.19963 1320 283.32122" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.25" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 398.98852 C 130 337.0679 330 358.67509 551.39114 381.28911 C 700 447.77477 910.98233 385.09899 1320 285.22062" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.26" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 400.49031 C 130 338.5697 330 360.17689 552.39008 377.48838 C 700 443.97399 907.78293 386.89852 1320 287.12011" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.27" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 402.19221 C 130 340.27154 330 361.87874 553.18907 373.08805 C 700 439.67362 904.38376 388.69825 1320 288.91979" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.28" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 404.09414 C 130 342.17348 330 363.78067 553.88805 368.18815 C 700 434.77371 900.98473 390.69797 1320 290.81956" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.29" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 406.39599 C 130 344.47537 330 366.08257 554.38709 362.88865 C 700 429.47426 897.58584 392.69788 1320 292.81946" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.3" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 408.99788 C 130 347.07722 330 368.68441 554.68616 357.38953 C 700 423.97514 894.28709 394.79788 1320 295.01946" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.31" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 411.89968 C 130 349.97901 330 371.58621 554.88524 351.69082 C 700 418.27643 890.98847 397.19792 1320 297.41946" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.32" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 415.30129 C 130 353.28072 330 374.88792 554.88436 346.09239 C 700 412.57805 887.69004 399.79802 1320 299.91965" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.32999999999999996" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 418.90286 C 130 356.98224 330 378.58944 554.78349 340.49433 C 700 407.07989 884.59165 402.69816 1320 302.81974" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.33999999999999997" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 422.90424 C 130 360.98363 330 382.59082 554.4827 335.1964 C 700 401.78201 881.69331 405.79834 1320 306.01988" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.35" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 427.10549 C 130 365.18487 330 386.79207 553.98201 330.29862 C 700 396.88423 878.89506 409.29843 1320 309.52002" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.36" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 431.60655 C 130 369.68589 330 391.29308 553.38132 326.00083 C 700 392.48649 876.39686 413.09857 1320 313.32016" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.37" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 436.30738 C 130 374.38676 330 395.99396 552.58072 322.10314 C 700 388.6887 873.99875 417.29862 1320 317.52016" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.38" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 441.10807 C 130 379.18741 330 400.7946 551.68017 319.00521 C 700 385.49087 872.00055 421.79862 1320 322.02016" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.39" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 445.90858 C 130 383.98796 330 405.59516 550.57975 316.5072 C 700 383.09276 870.2024 426.69848 1320 326.92006" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.4" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 450.70899 C 130 388.78833 330 410.39553 549.37934 314.80886 C 700 381.29451 868.70424 431.89829 1320 332.11983" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.41000000000000003" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 455.40922 C 130 393.48861 330 415.0958 547.97911 313.81024 C 700 380.29585 867.50604 437.39797 1320 337.61956" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.42" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 459.90941 C 130 397.98879 330 419.59599 546.47888 313.41125 C 700 379.99686 866.70775 443.29746 1320 343.4191" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.43" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 464.20955 C 130 402.28893 330 423.89613 544.87874 313.7119 C 700 380.29746 866.20936 449.39686 1320 349.5185" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.44" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 468.20969 C 130 406.28902 330 427.89622 543.17869 314.51208 C 700 381.09769 866.01093 455.69613 1320 355.91771" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.45" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 471.90978 C 130 409.98916 330 431.59636 541.47869 315.8119 C 700 382.39746 866.21236 462.19525 1320 362.41684" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.46" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 475.30992 C 130 413.28935 330 434.89654 539.57883 317.41125 C 700 383.99686 866.7137 468.89419 1320 369.11577" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.47" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 478.31019 C 130 416.28962 330 437.89682 537.67901 319.21024 C 700 385.79585 867.51485 475.69299 1320 375.91453" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.48" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 480.91056 C 130 418.98995 330 440.59714 535.67934 321.1089 C 700 387.69447 868.71587 482.59161 1320 382.71324" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.49" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 483.21112 C 130 421.29045 330 442.89765 533.67966 323.0072 C 700 389.4928 870.11679 489.49008 1320 389.61172" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.5" vector-effect="non-scaling-stroke"></path>
              <path d="M -120 485.21176 C 130 423.19119 330 444.79839 531.58012 324.6053 C 700 391.19087 871.91748 496.28852 1320 396.4101" stroke="url(#auth20-fiber-secondary)" strokeWidth="1.2" opacity="0.51" vector-effect="non-scaling-stroke"></path>
            </g>
          </svg>
          <div className="absolute bg-gradient-to-b from-zinc-950 h-56 inset-x-0 to-transparent top-0 via-zinc-950/70"></div>
          <div className="absolute bg-gradient-to-t bottom-0 from-zinc-950 h-72 inset-x-0 to-transparent via-zinc-950/72"></div>
          <div className="absolute bg-[radial-gradient(circle_at_50%_46%,transparent_0,var(--color-zinc-950)_74%)] inset-0 opacity-45"></div>
        </div>
        <div className="flex flex-1 flex-col gap-0 justify-center lg:gap-8 lg:justify-start relative w-full z-10">
          <header className="flex flex-col gap-4 items-center lg:gap-6 lg:px-14 px-6 shrink-0 sm:px-10 text-center text-slate-50">
            <div className="gap-2 inline-flex items-center text-slate-100">
              <Item className="bg-slate-50 p-2 size-8 text-slate-950" variant="default" size="default" aria-hidden="true">
                <ItemMedia className="size-auto" variant="icon">
                  <svg className="size-[1.05rem]" width="50" height="50" viewBox="25.668 25.1352 49.6644 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="70.634" cy="29.8334" r="4.69799" fill="currentColor"></circle>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.668 57.0144V29.8332C25.668 27.2386 27.7713 25.1352 30.366 25.1352C32.9606 25.1352 35.0639 27.2386 35.0639 29.8332V57.0144C35.0639 61.833 38.9702 65.7392 43.7888 65.7392H57.2116C62.0302 65.7392 65.9364 61.833 65.9364 57.0144V43.7258C65.9364 41.1312 68.0398 39.0278 70.6344 39.0278C73.229 39.0278 75.3324 41.1312 75.3324 43.7258V57.0144C75.3324 67.0222 67.2194 75.1352 57.2116 75.1352H43.7888C33.7809 75.1352 25.668 67.0222 25.668 57.0144Z" fill="currentColor"></path>
                  </svg>
                </ItemMedia>
              </Item>
              <span className="font-medium text-[0.9375rem]">
                NeUI
              </span>
            </div>
            <div className="flex flex-col gap-3.5 items-center max-w-2xl">
              <h1 className="font-semibold leading-tight lg:text-[2.75rem] sm:text-3xl text-2xl text-balance text-slate-50">
                Access With Trust
              </h1>
              <p className="leading-5 lg:leading-6 lg:max-w-2xl lg:text-base max-w-xl sm:text-sm text-pretty text-slate-300 text-xs">
                <span className="block sm:whitespace-nowrap">
                  Give teams a calm, confident first touch before work begins.
                </span>
                <span className="block sm:whitespace-nowrap">
                  Secure access, backed by trusted proof.
                </span>
              </p>
            </div>
          </header>
          <div className="hidden lg:block py-1 sm:py-2">
            <Carousel className="mx-auto w-full" role="region" aria-roledescription="carousel" aria-label="Founder testimonials">
              <CarouselContent>
                <div className="-ml-3 flex py-1.5" style={{transform: "translate3d(186px, 0px, 0px)"}}>
                  <CarouselItem className="basis-[90%] flex items-center lg:basis-[43%] pl-3 sm:basis-[56%]" role="group" aria-roledescription="slide" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                    <div className="h-full origin-center w-full" style={{opacity: "1", transform: "none"}}>
                      <Card className="bg-card duration-300 ease-out min-h-64 relative ring-1 ring-white/20 text-card-foreground transition-colors" size="sm" data-active="true">
                        <svg className="absolute bottom-5 pointer-events-none right-5 size-8 text-muted-foreground/10" viewBox="0 0 48 48" aria-hidden="true">
                          <path className="opacity-40" fill="currentColor" d="M17.1 8.5c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Zm23.1 0c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Z"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M17.2 15.4c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3m23.2-12.6c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.6 30.8c-1.7 2.4-4.3 4.5-7.8 6.1m30.9-6.1c-1.7 2.4-4.3 4.5-7.8 6.1"></path>
                        </svg>
                        <CardContent className="flex flex-1 flex-col gap-5 justify-between min-h-0 p-5 relative z-10">
                          <blockquote className="flex flex-col gap-2 leading-5 text-[0.8125rem] text-pretty">
                            <p>
                              NeUI helped us turn a rough dashboard sketch into a shipped portal in one focused week.
                            </p>
                            <p>
                              The structure was ready. We tuned copy and made it feel like our product.
                            </p>
                          </blockquote>
                          <div className="flex gap-2.5 items-center">
                            <Avatar className="size-8" size="default">
                              <AvatarFallback>
                                MC
                              </AvatarFallback>
                            </Avatar>
                            <div className="min-w-0">
                              <p className="font-semibold text-sm truncate">
                                Mira Chen
                              </p>
                              <p className="text-muted-foreground text-xs truncate">
                                Founder at AtlasForge
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-[90%] flex items-center lg:basis-[43%] pl-3 sm:basis-[56%]" role="group" aria-roledescription="slide" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                    <div className="h-full origin-center w-full" style={{opacity: "0.66", transform: "translateY(3px) scale(0.9)"}}>
                      <Card className="backdrop-blur-sm bg-card/45 duration-300 ease-out min-h-64 relative ring-1 ring-white/10 text-card-foreground/75 transition-colors" size="sm" data-active="false">
                        <svg className="absolute bottom-5 pointer-events-none right-5 size-8 text-muted-foreground/10" viewBox="0 0 48 48" aria-hidden="true">
                          <path className="opacity-40" fill="currentColor" d="M17.1 8.5c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Zm23.1 0c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Z"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M17.2 15.4c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3m23.2-12.6c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.6 30.8c-1.7 2.4-4.3 4.5-7.8 6.1m30.9-6.1c-1.7 2.4-4.3 4.5-7.8 6.1"></path>
                        </svg>
                        <CardContent className="flex flex-1 flex-col gap-5 justify-between min-h-0 p-5 relative z-10">
                          <blockquote className="flex flex-col gap-2 leading-5 text-[0.8125rem] text-pretty">
                            <p>
                              The auth and settings patterns gave our team shared language fast.
                            </p>
                            <p>
                              We stopped debating screen basics and got back to the workflow.
                            </p>
                          </blockquote>
                          <div className="flex gap-2.5 items-center">
                            <Avatar className="size-8" size="default">
                              <AvatarFallback>
                                JP
                              </AvatarFallback>
                            </Avatar>
                            <div className="min-w-0">
                              <p className="font-semibold text-sm truncate">
                                Jonah Price
                              </p>
                              <p className="text-muted-foreground text-xs truncate">
                                Product Lead at NimbleStack
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-[90%] flex items-center lg:basis-[43%] pl-3 sm:basis-[56%]" role="group" aria-roledescription="slide">
                    <div className="h-full origin-center w-full" style={{opacity: "0.66", transform: "translateY(3px) scale(0.9)"}}>
                      <Card className="backdrop-blur-sm bg-card/45 duration-300 ease-out min-h-64 relative ring-1 ring-white/10 text-card-foreground/75 transition-colors" size="sm" data-active="false">
                        <svg className="absolute bottom-5 pointer-events-none right-5 size-8 text-muted-foreground/10" viewBox="0 0 48 48" aria-hidden="true">
                          <path className="opacity-40" fill="currentColor" d="M17.1 8.5c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Zm23.1 0c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Z"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M17.2 15.4c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3m23.2-12.6c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.6 30.8c-1.7 2.4-4.3 4.5-7.8 6.1m30.9-6.1c-1.7 2.4-4.3 4.5-7.8 6.1"></path>
                        </svg>
                        <CardContent className="flex flex-1 flex-col gap-5 justify-between min-h-0 p-5 relative z-10">
                          <blockquote className="flex flex-col gap-2 leading-5 text-[0.8125rem] text-pretty">
                            <p>
                              Labels, states, keyboard paths, spacing, and responsive behavior were already handled.
                            </p>
                            <p>
                              The copy was close enough that we avoided a launch rewrite.
                            </p>
                          </blockquote>
                          <div className="flex gap-2.5 items-center">
                            <Avatar className="size-8" size="default">
                              <AvatarFallback>
                                EM
                              </AvatarFallback>
                            </Avatar>
                            <div className="min-w-0">
                              <p className="font-semibold text-sm truncate">
                                Elena Marquez
                              </p>
                              <p className="text-muted-foreground text-xs truncate">
                                Design Systems Lead at CoilStack
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-[90%] flex items-center lg:basis-[43%] pl-3 sm:basis-[56%]" role="group" aria-roledescription="slide">
                    <div className="h-full origin-center w-full" style={{opacity: "0.66", transform: "translateY(3px) scale(0.9)"}}>
                      <Card className="backdrop-blur-sm bg-card/45 duration-300 ease-out min-h-64 relative ring-1 ring-white/10 text-card-foreground/75 transition-colors" size="sm" data-active="false">
                        <svg className="absolute bottom-5 pointer-events-none right-5 size-8 text-muted-foreground/10" viewBox="0 0 48 48" aria-hidden="true">
                          <path className="opacity-40" fill="currentColor" d="M17.1 8.5c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Zm23.1 0c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Z"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M17.2 15.4c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3m23.2-12.6c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.6 30.8c-1.7 2.4-4.3 4.5-7.8 6.1m30.9-6.1c-1.7 2.4-4.3 4.5-7.8 6.1"></path>
                        </svg>
                        <CardContent className="flex flex-1 flex-col gap-5 justify-between min-h-0 p-5 relative z-10">
                          <blockquote className="flex flex-col gap-2 leading-5 text-[0.8125rem] text-pretty">
                            <p>
                              Our launch build finally felt like one connected product.
                            </p>
                            <p>
                              The defaults were calm, practical, and easy for customers to trust.
                            </p>
                          </blockquote>
                          <div className="flex gap-2.5 items-center">
                            <Avatar className="size-8" size="default">
                              <AvatarFallback>
                                PN
                              </AvatarFallback>
                            </Avatar>
                            <div className="min-w-0">
                              <p className="font-semibold text-sm truncate">
                                Priya Nair
                              </p>
                              <p className="text-muted-foreground text-xs truncate">
                                Co-founder at PilotDesk
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-[90%] flex items-center lg:basis-[43%] pl-3 sm:basis-[56%]" role="group" aria-roledescription="slide">
                    <div className="h-full origin-center w-full" style={{opacity: "0.66", transform: "translateY(3px) scale(0.9)"}}>
                      <Card className="backdrop-blur-sm bg-card/45 duration-300 ease-out min-h-64 relative ring-1 ring-white/10 text-card-foreground/75 transition-colors" size="sm" data-active="false">
                        <svg className="absolute bottom-5 pointer-events-none right-5 size-8 text-muted-foreground/10" viewBox="0 0 48 48" aria-hidden="true">
                          <path className="opacity-40" fill="currentColor" d="M17.1 8.5c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Zm23.1 0c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Z"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M17.2 15.4c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3m23.2-12.6c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.6 30.8c-1.7 2.4-4.3 4.5-7.8 6.1m30.9-6.1c-1.7 2.4-4.3 4.5-7.8 6.1"></path>
                        </svg>
                        <CardContent className="flex flex-1 flex-col gap-5 justify-between min-h-0 p-5 relative z-10">
                          <blockquote className="flex flex-col gap-2 leading-5 text-[0.8125rem] text-pretty">
                            <p>
                              The components landed without a cleanup sprint.
                            </p>
                            <p>
                              Engineers wired real data and the interface stayed composed.
                            </p>
                          </blockquote>
                          <div className="flex gap-2.5 items-center">
                            <Avatar className="size-8" size="default">
                              <AvatarFallback>
                                OH
                              </AvatarFallback>
                            </Avatar>
                            <div className="min-w-0">
                              <p className="font-semibold text-sm truncate">
                                Owen Hart
                              </p>
                              <p className="text-muted-foreground text-xs truncate">
                                Engineering Manager at RelayKit
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="basis-[90%] flex items-center lg:basis-[43%] pl-3 sm:basis-[56%]" role="group" aria-roledescription="slide" style={{transform: "translate3d(-1682px, 0px, 0px)"}}>
                    <div className="h-full origin-center w-full" style={{opacity: "0.66", transform: "translateY(3px) scale(0.9)"}}>
                      <Card className="backdrop-blur-sm bg-card/45 duration-300 ease-out min-h-64 relative ring-1 ring-white/10 text-card-foreground/75 transition-colors" size="sm" data-active="false">
                        <svg className="absolute bottom-5 pointer-events-none right-5 size-8 text-muted-foreground/10" viewBox="0 0 48 48" aria-hidden="true">
                          <path className="opacity-40" fill="currentColor" d="M17.1 8.5c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Zm23.1 0c5.4 0 9.8 4.4 9.8 9.8 0 7.6-5.6 14.1-15.5 18.1l-2.9-4.7c5.3-2.5 8.8-5.3 10-8.6h-1.4a7.3 7.3 0 1 1 0-14.6Z"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" d="M17.2 15.4c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3m23.2-12.6c-3.5 0-6.3 2.8-6.3 6.3 0 3.4 2.7 6.2 6.1 6.3"></path>
                          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.6 30.8c-1.7 2.4-4.3 4.5-7.8 6.1m30.9-6.1c-1.7 2.4-4.3 4.5-7.8 6.1"></path>
                        </svg>
                        <CardContent className="flex flex-1 flex-col gap-5 justify-between min-h-0 p-5 relative z-10">
                          <blockquote className="flex flex-col gap-2 leading-5 text-[0.8125rem] text-pretty">
                            <p>
                              We replaced three uneven account screens with one polished flow.
                            </p>
                            <p>
                              The proof points felt ready for review, so we shipped faster.
                            </p>
                          </blockquote>
                          <div className="flex gap-2.5 items-center">
                            <Avatar className="size-8" size="default">
                              <AvatarFallback>
                                SR
                              </AvatarFallback>
                            </Avatar>
                            <div className="min-w-0">
                              <p className="font-semibold text-sm truncate">
                                Sofia Romero
                              </p>
                              <p className="text-muted-foreground text-xs truncate">
                                Operations Lead at Northstar Labs
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </div>
              </CarouselContent>
              <div className="flex gap-1.5 items-center justify-center mt-4">
                <button className="bg-white/35 data-[active=true]:bg-white data-[active=true]:ring-2 data-[active=true]:ring-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-white/70 hover:bg-white/55 rounded-full size-1.5 transition-colors" type="button" aria-label="Go to testimonial 1" aria-current="true" data-active="true"></button>
                <button className="bg-white/35 data-[active=true]:bg-white data-[active=true]:ring-2 data-[active=true]:ring-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-white/70 hover:bg-white/55 rounded-full size-1.5 transition-colors" type="button" aria-label="Go to testimonial 2" data-active="false"></button>
                <button className="bg-white/35 data-[active=true]:bg-white data-[active=true]:ring-2 data-[active=true]:ring-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-white/70 hover:bg-white/55 rounded-full size-1.5 transition-colors" type="button" aria-label="Go to testimonial 3" data-active="false"></button>
                <button className="bg-white/35 data-[active=true]:bg-white data-[active=true]:ring-2 data-[active=true]:ring-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-white/70 hover:bg-white/55 rounded-full size-1.5 transition-colors" type="button" aria-label="Go to testimonial 4" data-active="false"></button>
                <button className="bg-white/35 data-[active=true]:bg-white data-[active=true]:ring-2 data-[active=true]:ring-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-white/70 hover:bg-white/55 rounded-full size-1.5 transition-colors" type="button" aria-label="Go to testimonial 5" data-active="false"></button>
                <button className="bg-white/35 data-[active=true]:bg-white data-[active=true]:ring-2 data-[active=true]:ring-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-white/70 hover:bg-white/55 rounded-full size-1.5 transition-colors" type="button" aria-label="Go to testimonial 6" data-active="false"></button>
              </div>
            </Carousel>
          </div>
          <div className="hidden lg:block lg:px-14 px-6 shrink-0 sm:px-10">
            <div className="flex flex-col gap-3 items-center text-center">
              <div className="flex-wrap font-medium gap-x-2.5 gap-y-2 inline-flex items-center justify-center leading-none max-w-full text-sm" aria-label="Rated Excellent by Trustpilot">
                <span className="shrink-0 text-slate-100">
                  Excellent
                </span>
                <span className="flex gap-0.5 items-center shrink-0" aria-hidden="true">
                  <Item className="bg-emerald-500 p-0 size-5 text-white" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Item className="bg-emerald-500 p-0 size-5 text-white" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Item className="bg-emerald-500 p-0 size-5 text-white" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Item className="bg-emerald-500 p-0 size-5 text-white" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                  <Item className="bg-emerald-500 p-0 size-5 text-white" variant="default" size="default">
                    <ItemMedia className="size-auto" variant="icon">
                      <svg className="fill-current lucide lucide-star size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" lucide="StarIcon" tabler="IconStar" hugeicons="StarIcon" phosphor="StarIcon" remixicon="RiStarLine">
                        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                      </svg>
                    </ItemMedia>
                  </Item>
                </span>
                <span className="shrink-0 text-slate-300">
                  by
                </span>
                <svg className="[&>path:first-child]:fill-current h-[1.125rem] shrink-0 text-slate-50 w-auto" aria-hidden="true" viewBox="20.5 248.5 600 147.3">
                  <path fill="currentColor" d="M178.2 300.7h60.7V312H215v63.7h-13.1V312h-23.8zm58.1 20.7h11.2v10.5h.2c.4-1.5 1.1-2.9 2.1-4.3s2.2-2.7 3.7-3.8c1.4-1.2 3-2.1 4.8-2.8 1.7-.7 3.5-1.1 5.3-1.1 1.4 0 2.4.1 2.9.1.5.1 1.1.2 1.6.2v11.5c-.8-.2-1.7-.3-2.6-.4s-1.7-.2-2.6-.2c-2 0-3.9.4-5.7 1.2s-3.3 2-4.7 3.5c-1.3 1.6-2.4 3.5-3.2 5.8s-1.2 5-1.2 8v25.8h-12zm86.8 54.3h-11.8v-7.6h-.2c-1.5 2.8-3.7 4.9-6.6 6.6s-5.9 2.5-8.9 2.5c-7.1 0-12.3-1.7-15.5-5.3-3.2-3.5-4.8-8.9-4.8-16v-34.5h12v33.3c0 4.8.9 8.2 2.8 10.1 1.8 2 4.4 3 7.7 3 2.5 0 4.6-.4 6.3-1.2s3.1-1.8 4.1-3.1c1.1-1.3 1.8-2.9 2.3-4.7s.7-3.8.7-5.9v-31.5h12v54.3zm20.4-17.4c.4 3.5 1.7 5.9 4 7.4 2.3 1.4 5.1 2.1 8.3 2.1 1.1 0 2.4-.1 3.8-.3s2.8-.5 4-1c1.3-.5 2.3-1.2 3.1-2.2s1.2-2.2 1.1-3.7-.6-2.8-1.7-3.8-2.4-1.7-4-2.4c-1.6-.6-3.5-1.1-5.6-1.5s-4.2-.9-6.4-1.4-4.4-1.1-6.5-1.8-3.9-1.6-5.6-2.9c-1.6-1.2-3-2.7-3.9-4.6-1-1.9-1.5-4.1-1.5-6.9 0-3 .7-5.4 2.2-7.4 1.4-2 3.3-3.6 5.5-4.8s4.7-2.1 7.4-2.6 5.3-.7 7.7-.7c2.8 0 5.5.3 8 .9s4.9 1.5 6.9 2.9c2.1 1.3 3.8 3.1 5.1 5.2 1.4 2.1 2.2 4.7 2.6 7.7h-12.5c-.6-2.9-1.9-4.8-3.9-5.8-2.1-1-4.4-1.5-7.1-1.5-.8 0-1.9.1-3 .2-1.2.2-2.2.4-3.3.8-1 .4-1.9 1-2.6 1.7s-1.1 1.7-1.1 2.9c0 1.5.5 2.6 1.5 3.5s2.3 1.6 4 2.3c1.6.6 3.5 1.1 5.6 1.5s4.3.9 6.5 1.4 4.3 1.1 6.4 1.8 4 1.6 5.6 2.9c1.6 1.2 3 2.7 4 4.5s1.5 4.1 1.5 6.7c0 3.2-.7 5.9-2.2 8.2-1.5 2.2-3.4 4.1-5.7 5.5s-5 2.4-7.8 3.1c-2.9.6-5.7 1-8.5 1-3.4 0-6.6-.4-9.5-1.2s-5.5-2-7.6-3.5c-2.1-1.6-3.8-3.5-5-5.9-1.2-2.3-1.9-5.1-2-8.4h12.1v.1zm39.5-36.9h9.1V305h12v16.3h10.8v8.9h-10.8v29c0 1.3.1 2.3.2 3.3.1.9.4 1.7.7 2.3.4.6 1 1.1 1.7 1.4.8.3 1.8.5 3.2.5.8 0 1.7 0 2.5-.1s1.7-.2 2.5-.4v9.3c-1.3.2-2.6.3-3.9.4-1.3.2-2.5.2-3.9.2-3.2 0-5.7-.3-7.6-.9s-3.4-1.5-4.5-2.6c-1.1-1.2-1.8-2.6-2.2-4.3s-.6-3.8-.7-6v-32H383v-9.1zm40.3 0h11.3v7.4h.2c1.7-3.2 4-5.4 7-6.8s6.2-2.1 9.8-2.1c4.3 0 8 .7 11.2 2.3 3.2 1.5 5.8 3.5 7.9 6.2 2.1 2.6 3.7 5.7 4.7 9.2s1.6 7.3 1.6 11.2c0 3.7-.5 7.2-1.4 10.6-1 3.4-2.4 6.5-4.3 9.1s-4.3 4.7-7.3 6.3-6.4 2.4-10.4 2.4c-1.7 0-3.5-.2-5.2-.5s-3.4-.8-5-1.5-3.1-1.6-4.4-2.7c-1.4-1.1-2.5-2.4-3.4-3.8h-.2v27.1h-12v-74.4zm41.9 27.2c0-2.4-.3-4.8-1-7.1-.6-2.3-1.6-4.3-2.9-6.1s-2.9-3.2-4.7-4.3c-1.9-1.1-4.1-1.6-6.5-1.6-5 0-8.8 1.7-11.4 5.2-2.5 3.5-3.8 8.2-3.8 14 0 2.8.3 5.3 1 7.6s1.6 4.3 3 6c1.3 1.7 2.9 3 4.8 4s4 1.5 6.5 1.5c2.8 0 5-.6 6.9-1.7s3.4-2.6 4.7-4.3c1.2-1.8 2.1-3.8 2.6-6.1.5-2.4.8-4.7.8-7.1zm21.1-47.9h12V312h-12zm0 20.7h12v54.3h-12zm22.7-20.7h12v75h-12zm48.6 76.5c-4.3 0-8.2-.7-11.6-2.2s-6.2-3.4-8.6-5.9c-2.3-2.5-4.1-5.6-5.3-9.1s-1.9-7.4-1.9-11.5.6-7.9 1.9-11.4c1.2-3.5 3-6.5 5.3-9.1 2.3-2.5 5.2-4.5 8.6-5.9s7.3-2.2 11.6-2.2 8.2.7 11.6 2.2c3.4 1.4 6.2 3.4 8.6 5.9 2.3 2.5 4.1 5.6 5.3 9.1s1.9 7.3 1.9 11.4c0 4.2-.6 8-1.9 11.5s-3 6.5-5.3 9.1c-2.3 2.5-5.2 4.5-8.6 5.9s-7.2 2.2-11.6 2.2zm0-9.5c2.6 0 5-.6 6.9-1.7 2-1.1 3.5-2.6 4.8-4.4s2.2-3.9 2.8-6.1c.6-2.3.9-4.6.9-7 0-2.3-.3-4.6-.9-6.9s-1.5-4.3-2.8-6.1-2.9-3.2-4.8-4.3c-2-1.1-4.3-1.7-6.9-1.7s-5 .6-6.9 1.7c-2 1.1-3.5 2.6-4.8 4.3-1.3 1.8-2.2 3.8-2.8 6.1s-.9 4.6-.9 6.9c0 2.4.3 4.7.9 7s1.5 4.3 2.8 6.1 2.9 3.3 4.8 4.4c2 1.2 4.3 1.7 6.9 1.7zm31-46.3h9.1V305h12v16.3h10.8v8.9h-10.8v29c0 1.3.1 2.3.2 3.3.1.9.4 1.7.7 2.3.4.6 1 1.1 1.7 1.4.8.3 1.8.5 3.2.5.8 0 1.7 0 2.5-.1s1.7-.2 2.5-.4v9.3c-1.3.2-2.6.3-3.9.4-1.3.2-2.5.2-3.9.2-3.2 0-5.7-.3-7.6-.9s-3.4-1.5-4.5-2.6c-1.1-1.2-1.8-2.6-2.2-4.3s-.6-3.8-.7-6v-32h-9.1v-9.1z"></path>
                  <path fill="#00b67a" d="M164.2 300.7h-54.9l-16.9-52.2-17 52.2-54.9-.1 44.4 32.3-17 52.2 44.4-32.3 44.4 32.3-16.9-52.2z"></path>
                  <path fill="#005128" d="m123.6 344.7-3.8-11.8-27.4 19.9z"></path>
                </svg>
              </div>
              <p className="leading-6 text-slate-300 text-sm">
                Trusted by 14,800+ founders building production software.
              </p>
            </div>
          </div>
        </div>
      </aside>
      <section className="bg-background flex flex-col lg:min-h-svh lg:pb-3 lg:pt-6 lg:px-12 min-w-0 pb-3 pt-6 px-6 sm:pb-4 sm:pt-8 sm:px-8">
        <div className="flex flex-1 flex-col max-w-[38rem] mx-auto w-full">
          <div className="flex flex-1 flex-col justify-center py-8">
            <div className="flex flex-col gap-6 max-w-[26rem] mx-auto w-full">
              <div className="flex flex-col gap-2 items-center text-center">
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-xl tracking-tight">
                    Welcome back
                  </h2>
                  <p className="text-muted-foreground text-pretty text-sm">
                    Sign in with your workspace credentials.
                  </p>
                </div>
              </div>
              <form className="flex flex-col gap-4">
                <FieldGroup className="gap-3.5">
                  <Field className="gap-2" role="group" data-orientation="vertical">
                    <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="auth-2-identifier">
                      Email or username
                    </FieldLabel>
                    <Input className="bg-background" id="auth-2-identifier" autoComplete="username" placeholder="Email or username" type="text"></Input>
                  </Field>
                  <Field className="gap-2" role="group" data-orientation="vertical">
                    <div className="flex gap-3 items-center justify-between">
                      <FieldLabel className="cn-label group-data-[disabled=true]:pointer-events-none items-center peer-disabled:cursor-not-allowed select-none" htmlFor="auth-2-password">
                        Password
                      </FieldLabel>
                      <Button className="cursor-pointer font-normal h-auto p-0 text-muted-foreground text-xs" type="button" tabIndex="0">
                        Forgot password?
                      </Button>
                    </div>
                    <InputGroup className="bg-background" role="group">
                      <input className="cn-input cn-input-group-input disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none file:bg-transparent file:border-0 file:inline-flex file:text-foreground flex-1 min-w-0 outline-none placeholder:text-muted-foreground w-full" id="auth-2-password" autoComplete="current-password" placeholder="Enter your password" type="password" />
                      <InputGroupAddon role="group" data-align="inline-end">
                        <Button className="cn-input-group-button cn-input-group-button-size-icon-xs flex hover:text-foreground shadow-none text-muted-foreground" type="button" tabIndex="0" size="icon-xs" aria-label="Show password" aria-pressed="false">
                          <svg className="lucide lucide-eye size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" lucide="EyeIcon" tabler="IconEye" hugeicons="ViewIcon" phosphor="EyeIcon" remixicon="RiEyeLine" aria-hidden="true">
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Field>
                </FieldGroup>
                <Button className="w-full" type="submit" tabIndex="0">
                  Sign in
                </Button>
              </form>
              <div className="flex gap-3 items-center">
                <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
                <span className="text-muted-foreground text-xs">
                  Or continue with
                </span>
                <Separator className="flex-1" data-orientation="horizontal" role="separator" aria-orientation="horizontal"></Separator>
              </div>
              <div className="gap-3 grid sm:grid-cols-3">
                <Button className="w-full" type="button" tabIndex="0">
                  <svg className="shrink-0 size-4" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" overflow="hidden" viewBox="0 0 268.152 273.883">
                    <defs>
                      <lineargradient id="a">
                        <stop offset="0" stopColor="#0fbc5c"></stop>
                        <stop offset="1" stopColor="#0cba65"></stop>
                      </lineargradient>
                      <lineargradient id="g">
                        <stop offset=".231" stopColor="#0fbc5f"></stop>
                        <stop offset=".312" stopColor="#0fbc5f"></stop>
                        <stop offset=".366" stopColor="#0fbc5e"></stop>
                        <stop offset=".458" stopColor="#0fbc5d"></stop>
                        <stop offset=".54" stopColor="#12bc58"></stop>
                        <stop offset=".699" stopColor="#28bf3c"></stop>
                        <stop offset=".771" stopColor="#38c02b"></stop>
                        <stop offset=".861" stopColor="#52c218"></stop>
                        <stop offset=".915" stopColor="#67c30f"></stop>
                        <stop offset="1" stopColor="#86c504"></stop>
                      </lineargradient>
                      <lineargradient id="h">
                        <stop offset=".142" stopColor="#1abd4d"></stop>
                        <stop offset=".248" stopColor="#6ec30d"></stop>
                        <stop offset=".312" stopColor="#8ac502"></stop>
                        <stop offset=".366" stopColor="#a2c600"></stop>
                        <stop offset=".446" stopColor="#c8c903"></stop>
                        <stop offset=".54" stopColor="#ebcb03"></stop>
                        <stop offset=".616" stopColor="#f7cd07"></stop>
                        <stop offset=".699" stopColor="#fdcd04"></stop>
                        <stop offset=".771" stopColor="#fdce05"></stop>
                        <stop offset=".861" stopColor="#ffce0a"></stop>
                      </lineargradient>
                      <lineargradient id="f">
                        <stop offset=".316" stopColor="#ff4c3c"></stop>
                        <stop offset=".604" stopColor="#ff692c"></stop>
                        <stop offset=".727" stopColor="#ff7825"></stop>
                        <stop offset=".885" stopColor="#ff8d1b"></stop>
                        <stop offset="1" stopColor="#ff9f13"></stop>
                      </lineargradient>
                      <lineargradient id="b">
                        <stop offset=".231" stopColor="#ff4541"></stop>
                        <stop offset=".312" stopColor="#ff4540"></stop>
                        <stop offset=".458" stopColor="#ff4640"></stop>
                        <stop offset=".54" stopColor="#ff473f"></stop>
                        <stop offset=".699" stopColor="#ff5138"></stop>
                        <stop offset=".771" stopColor="#ff5b33"></stop>
                        <stop offset=".861" stopColor="#ff6c29"></stop>
                        <stop offset="1" stopColor="#ff8c18"></stop>
                      </lineargradient>
                      <lineargradient id="d">
                        <stop offset=".408" stopColor="#fb4e5a"></stop>
                        <stop offset="1" stopColor="#ff4540"></stop>
                      </lineargradient>
                      <lineargradient id="c">
                        <stop offset=".132" stopColor="#0cba65"></stop>
                        <stop offset=".21" stopColor="#0bb86d"></stop>
                        <stop offset=".297" stopColor="#09b479"></stop>
                        <stop offset=".396" stopColor="#08ad93"></stop>
                        <stop offset=".477" stopColor="#0aa6a9"></stop>
                        <stop offset=".568" stopColor="#0d9cc6"></stop>
                        <stop offset=".667" stopColor="#1893dd"></stop>
                        <stop offset=".769" stopColor="#258bf1"></stop>
                        <stop offset=".859" stopColor="#3086ff"></stop>
                      </lineargradient>
                      <lineargradient id="e">
                        <stop offset=".366" stopColor="#ff4e3a"></stop>
                        <stop offset=".458" stopColor="#ff8a1b"></stop>
                        <stop offset=".54" stopColor="#ffa312"></stop>
                        <stop offset=".616" stopColor="#ffb60c"></stop>
                        <stop offset=".771" stopColor="#ffcd0a"></stop>
                        <stop offset=".861" stopColor="#fecf0a"></stop>
                        <stop offset=".915" stopColor="#fecf08"></stop>
                        <stop offset="1" stopColor="#fdcd01"></stop>
                      </lineargradient>
                      <lineargradient xlinkHref="#a" id="s" x1="219.7" x2="254.467" y1="329.535" y2="329.535" gradientUnits="userSpaceOnUse"></lineargradient>
                      <radialgradient xlinkHref="#b" id="m" cx="109.627" cy="135.862" r="71.46" fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 1.043 1.45573 2.55542 290.525 -400.634)" gradientUnits="userSpaceOnUse"></radialgradient>
                      <radialgradient xlinkHref="#c" id="n" cx="45.259" cy="279.274" r="71.46" fx="45.259" fy="279.274" gradientTransform="matrix(-3.5126 -4.45809 -1.69255 1.26062 870.8 191.554)" gradientUnits="userSpaceOnUse"></radialgradient>
                      <radialgradient xlinkHref="#d" id="l" cx="304.017" cy="118.009" r="47.854" fx="304.017" fy="118.009" gradientTransform="matrix(2.06435 0 0 2.59204 -297.679 -151.747)" gradientUnits="userSpaceOnUse"></radialgradient>
                      <radialgradient xlinkHref="#e" id="o" cx="181.001" cy="177.201" r="71.46" fx="181.001" fy="177.201" gradientTransform="matrix(-.24858 2.08314 2.96249 .33417 -255.146 -331.164)" gradientUnits="userSpaceOnUse"></radialgradient>
                      <radialgradient xlinkHref="#f" id="p" cx="207.673" cy="108.097" r="41.102" fx="207.673" fy="108.097" gradientTransform="matrix(-1.2492 1.34326 -3.89684 -3.4257 880.501 194.905)" gradientUnits="userSpaceOnUse"></radialgradient>
                      <radialgradient xlinkHref="#g" id="r" cx="109.627" cy="135.862" r="71.46" fx="109.627" fy="135.862" gradientTransform="matrix(-1.93688 -1.043 1.45573 -2.55542 290.525 838.683)" gradientUnits="userSpaceOnUse"></radialgradient>
                      <radialgradient xlinkHref="#h" id="j" cx="154.87" cy="145.969" r="71.46" fx="154.87" fy="145.969" gradientTransform="matrix(-.0814 -1.93722 2.92674 -.11625 -215.135 632.86)" gradientUnits="userSpaceOnUse"></radialgradient>
                      <filter id="q" width="1.097" height="1.116" x="-.048" y="-.058" color-interpolation-filters="sRGB">
                        <fegaussianblur stdDeviation="1.701"></fegaussianblur>
                      </filter>
                      <filter id="k" width="1.033" height="1.02" x="-.017" y="-.01" color-interpolation-filters="sRGB">
                        <fegaussianblur stdDeviation=".242"></fegaussianblur>
                      </filter>
                      <clippath id="i" clippathunits="userSpaceOnUse">
                        <path d="M371.378 193.24H237.083v53.438h77.167c-1.241 7.563-4.026 15.003-8.105 21.786-4.674 7.773-10.451 13.69-16.373 18.196-17.74 13.498-38.42 16.258-52.783 16.258-36.283 0-67.283-23.286-79.285-54.928-.484-1.149-.805-2.335-1.197-3.507a81.115 81.115 0 0 1-4.101-25.448c0-9.226 1.569-18.057 4.43-26.398 11.285-32.897 42.985-57.467 80.179-57.467 7.481 0 14.685.884 21.517 2.648a77.668 77.668 0 0 1 33.425 18.25l40.834-39.712c-24.839-22.616-57.219-36.32-95.844-36.32-30.878 0-59.386 9.553-82.748 25.7-18.945 13.093-34.483 30.625-44.97 50.985-9.753 18.879-15.094 39.8-15.094 62.294 0 22.495 5.35 43.633 15.103 62.337v.126c10.302 19.857 25.368 36.954 43.678 49.988 15.997 11.386 44.68 26.551 84.031 26.551 22.63 0 42.687-4.051 60.375-11.644 12.76-5.478 24.065-12.622 34.301-21.804 13.525-12.132 24.117-27.139 31.347-44.404 7.23-17.265 11.097-36.79 11.097-57.957 0-9.858-.998-19.87-2.689-28.968Z"></path>
                      </clippath>
                    </defs>
                    <g clipPath="url(#i)" transform="matrix(.95792 0 0 .98525 -90.174 -78.856)">
                      <path fill="url(#j)" d="M92.076 219.958c.148 22.14 6.501 44.983 16.117 63.424v.127c6.949 13.392 16.445 23.97 27.26 34.452l65.327-23.67c-12.36-6.235-14.246-10.055-23.105-17.026-9.054-9.066-15.802-19.473-20.004-31.677h-.17l.17-.127c-2.765-8.058-3.037-16.613-3.14-25.503Z" filter="url(#k)"></path>
                      <path fill="url(#l)" d="M237.083 79.025c-6.456 22.526-3.988 44.421 0 57.161 7.457.006 14.64.888 21.45 2.647a77.662 77.662 0 0 1 33.424 18.25l41.88-40.726c-24.81-22.59-54.667-37.297-96.754-37.332Z" filter="url(#k)"></path>
                      <path fill="url(#m)" d="M236.943 78.847c-31.67 0-60.91 9.798-84.871 26.359a145.533 145.533 0 0 0-24.332 21.15c-1.904 17.744 14.257 39.551 46.262 39.37 15.528-17.936 38.495-29.542 64.056-29.542l.07.002-1.044-57.335c-.048 0-.093-.004-.14-.004Z" filter="url(#k)"></path>
                      <path fill="url(#n)" d="m341.475 226.379-28.268 19.285c-1.24 7.562-4.028 15.002-8.107 21.786-4.674 7.772-10.45 13.69-16.373 18.196-17.702 13.47-38.328 16.244-52.687 16.255-14.842 25.102-17.444 37.675 1.043 57.934 22.877-.016 43.157-4.117 61.046-11.796 12.931-5.551 24.388-12.792 34.761-22.097 13.706-12.295 24.442-27.503 31.769-45 7.327-17.497 11.245-37.282 11.245-58.734Z" filter="url(#k)"></path>
                      <path fill="#3086ff" d="M234.996 191.21v57.498h136.006c1.196-7.874 5.152-18.064 5.152-26.5 0-9.858-.996-21.899-2.687-30.998Z" filter="url(#k)"></path>
                      <path fill="url(#o)" d="M128.39 124.327c-8.394 9.119-15.564 19.326-21.249 30.364-9.753 18.879-15.094 41.83-15.094 64.324 0 .317.026.627.029.944 4.32 8.224 59.666 6.649 62.456 0-.004-.31-.039-.613-.039-.924 0-9.226 1.57-16.026 4.43-24.367 3.53-10.289 9.056-19.763 16.123-27.926 1.602-2.031 5.875-6.397 7.121-9.016.475-.997-.862-1.557-.937-1.908-.083-.393-1.876-.077-2.277-.37-1.275-.929-3.8-1.414-5.334-1.845-3.277-.921-8.708-2.953-11.725-5.06-9.536-6.658-24.417-14.612-33.505-24.216Z" filter="url(#k)"></path>
                      <path fill="url(#p)" d="M162.099 155.857c22.112 13.301 28.471-6.714 43.173-12.977l-25.574-52.664a144.74 144.74 0 0 0-26.543 14.504c-12.316 8.512-23.192 18.9-32.176 30.72Z" filter="url(#q)"></path>
                      <path fill="url(#r)" d="M171.099 290.222c-29.683 10.641-34.33 11.023-37.062 29.29a144.806 144.806 0 0 0 16.792 13.984c15.996 11.386 46.766 26.551 86.118 26.551.046 0 .09-.004.137-.004v-59.157l-.094.002c-14.736 0-26.512-3.843-38.585-10.527-2.977-1.648-8.378 2.777-11.123.799-3.786-2.729-12.9 2.35-16.183-.938Z" filter="url(#k)"></path>
                      <path fill="url(#s)" d="M219.7 299.023v59.996c5.506.64 11.236 1.028 17.247 1.028 6.026 0 11.855-.307 17.52-.872v-59.748a105.119 105.119 0 0 1-17.477 1.461c-5.932 0-11.7-.686-17.29-1.865Z" filter="url(#k)" opacity=".5"></path>
                    </g>
                  </svg>
                  Google
                </Button>
                <Button className="w-full" type="button" tabIndex="0">
                  <span className="dark:hidden" aria-hidden="true">
                    <svg className="shrink-0 size-4" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                    </svg>
                  </span>
                  <span className="dark:block hidden" aria-hidden="true">
                    <svg className="shrink-0 size-4" aria-hidden="true" xmlSpace="preserve" viewBox="0 0 814 1000">
                      <path fill="#fff" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"></path>
                    </svg>
                  </span>
                  Apple
                </Button>
                <Button className="w-full" type="button" tabIndex="0">
                  <span className="dark:hidden" aria-hidden="true">
                    <svg className="shrink-0 size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                      <path fill="#1b1f23" fillRule="evenodd" d="M512 0C229.12 0 0 229.12 0 512c0 226.56 146.56 417.92 350.08 485.76 25.6 4.48 35.2-10.88 35.2-24.32 0-12.16-.64-52.48-.64-95.36-128.64 23.68-161.92-31.36-172.16-60.16-5.76-14.72-30.72-60.16-52.48-72.32-17.92-9.6-43.52-33.28-.64-33.92 40.32-.64 69.12 37.12 78.72 52.48 46.08 77.44 119.68 55.68 149.12 42.24 4.48-33.28 17.92-55.68 32.64-68.48-113.92-12.8-232.96-56.96-232.96-252.8 0-55.68 19.84-101.76 52.48-137.6-5.12-12.8-23.04-65.28 5.12-135.68 0 0 42.88-13.44 140.8 52.48 40.96-11.52 84.48-17.28 128-17.28s87.04 5.76 128 17.28c97.92-66.56 140.8-52.48 140.8-52.48 28.16 70.4 10.24 122.88 5.12 135.68 32.64 35.84 52.48 81.28 52.48 137.6 0 196.48-119.68 240-233.6 252.8 18.56 16 34.56 46.72 34.56 94.72 0 68.48-.64 123.52-.64 140.8 0 13.44 9.6 29.44 35.2 24.32C877.44 929.92 1024 737.92 1024 512 1024 229.12 794.88 0 512 0" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span className="dark:block hidden" aria-hidden="true">
                    <svg className="shrink-0 size-4" aria-hidden="true" viewBox="0 0 1024 1024" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#ffff"></path>
                    </svg>
                  </span>
                  GitHub
                </Button>
              </div>
              <p className="text-center text-muted-foreground text-sm">
                Need an account?
                <Button className="cursor-pointer h-auto p-0" type="button" tabIndex="0">
                  Sign up
                </Button>
              </p>
            </div>
          </div>
          <footer className="flex flex-col gap-3 items-center justify-center leading-6 max-w-[38rem] mx-auto shrink-0 sm:flex-row sm:gap-4 text-center text-muted-foreground text-pretty text-xs">
            <p>
              © 2026 NeUI
            </p>
            <nav aria-label="Authentication footer links">
              <ul className="flex gap-4 items-center justify-center">
                <li>
                  <a className="hover:text-primary hover:underline hover:underline-offset-4 transition-colors" href="#">
                    Terms
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary hover:underline hover:underline-offset-4 transition-colors" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary hover:underline hover:underline-offset-4 transition-colors" href="#">
                    Help
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </div>
      </section>
    </div>
  )
}
