import * as React from "react"

import { cn } from "cn"

export interface LogoProps {
  className?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  width?: number
}

export function Logo({ className, onClick, width }: LogoProps) {
  const logoWidth = width ?? 84

  return (
    <div
      onClick={onClick}
      className={cn("text-site-foreground flex items-center", className)}
    >
      <svg
        viewBox="0 0 272 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // `block` removes the inline-baseline that browsers reserve
        // for an inline SVG (a few pixels of phantom descender space).
        // Without it the logo appears slightly clipped at the bottom
        // when the SVG sits inside an <a> tag — the symptom that
        // showed up on the login page where <Link> wraps the logo.
        className="block h-auto shrink-0"
        style={{ width: logoWidth }}
      >
        <path
          d="M271.102 31.8093V68.1729H263.413V31.8093H271.102Z"
          fill="currentColor"
        />
        <path
          d="M239.4 31.8093H247.088V55.4243C247.088 58.0758 246.455 60.3959 245.188 62.3846C243.933 64.3732 242.175 65.9238 239.915 67.0365C237.654 68.1374 235.02 68.6878 232.013 68.6878C228.995 68.6878 226.355 68.1374 224.094 67.0365C221.833 65.9238 220.076 64.3732 218.821 62.3846C217.566 60.3959 216.939 58.0758 216.939 55.4243V31.8093H224.627V54.7674C224.627 56.1523 224.929 57.3834 225.532 58.4605C226.148 59.5377 227.012 60.3841 228.125 60.9996C229.238 61.6151 230.534 61.9229 232.013 61.9229C233.505 61.9229 234.801 61.6151 235.902 60.9996C237.015 60.3841 237.873 59.5377 238.476 58.4605C239.092 57.3834 239.4 56.1523 239.4 54.7674V31.8093Z"
          fill="currentColor"
        />
        <path
          d="M176.323 68.1729V31.8093H200.826V38.148H184.012V46.8128H199.566V53.1516H184.012V61.8341H200.897V68.1729H176.323Z"
          fill="currentColor"
        />
        {/* N：左竖笔 + 对角斜笔 + 右竖笔，斜笔的水平宽度与竖笔一致 */}
        <path
          d="M130.5 31.8093H139.945L154.496 57.13V31.8093H162.185V68.1729H153.154L138.189 42.13V68.1729H130.5Z"
          fill="currentColor"
        />
        <path
          opacity="0.2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M67.1667 3.84615H33.8333C17.548 3.84615 4.34615 17.048 4.34615 33.3333V66.6667C4.34615 82.952 17.548 96.1538 33.8333 96.1538H67.1667C83.452 96.1538 96.6538 82.952 96.6538 66.6667V33.3333C96.6538 17.048 83.452 3.84615 67.1667 3.84615ZM33.8333 0C15.4238 0 0.5 14.9238 0.5 33.3333V66.6667C0.5 85.0762 15.4238 100 33.8333 100H67.1667C85.5762 100 100.5 85.0762 100.5 66.6667V33.3333C100.5 14.9238 85.5762 0 67.1667 0H33.8333Z"
          fill="currentColor"
        />
        <circle cx="70.634" cy="29.698" r="4.69799" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.668 56.879V29.6978C25.668 27.1032 27.7713 24.9998 30.366 24.9998V24.9998C32.9606 24.9998 35.0639 27.1032 35.0639 29.6978V56.879C35.0639 61.6976 38.9702 65.6038 43.7888 65.6038H57.2116C62.0302 65.6038 65.9364 61.6976 65.9364 56.879V43.5904C65.9364 40.9958 68.0398 38.8924 70.6344 38.8924V38.8924C73.229 38.8924 75.3324 40.9958 75.3324 43.5904V56.879C75.3324 66.8869 67.2194 74.9998 57.2116 74.9998H43.7888C33.7809 74.9998 25.668 66.8869 25.668 56.879Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
