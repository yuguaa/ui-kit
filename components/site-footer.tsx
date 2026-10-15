import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { FIGMA_URL, FigmaIcon } from "@/lib/nav-config"
import { cn } from "cn"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const resourceLinks = [
  { label: "Components", href: "/components" },
  { label: "Docs", href: "/docs" },
]

const communityLinks = [
  { label: "X / Twitter", href: siteConfig.links.twitter },
  { label: "Figma", href: FIGMA_URL },
]

const currentYear = 2026

function FooterLinkGroup({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="text-site-foreground text-sm font-semibold">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-site-muted-foreground hover:text-site-foreground focus-visible:ring-site-ring site-rounded-sm inline-block text-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      data-slot="site-footer"
      className={cn(
        "site-theme-container font-site-sans bg-site-background text-site-foreground relative",
        className
      )}
    >
      {/* Top border */}
      <div className="bg-site-border h-px w-full" aria-hidden="true" />

      <div className="container-wrapper">
        <div className="container py-8 md:py-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            <FooterLinkGroup title="Product" links={resourceLinks} />
            <FooterLinkGroup title="Community" links={communityLinks} />
          </div>
        </div>
      </div>

      {/* Compact bottom bar */}
      <div className="relative">
        <div className="bg-site-border h-px w-full" aria-hidden="true" />
        <div className="container-wrapper">
          <div className="container flex flex-col items-center justify-between gap-3 py-3 md:flex-row md:py-3.5">
            <p className="text-site-muted-foreground text-sm">
              &copy; {currentYear} NeUI.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-site-muted-foreground hover:text-site-foreground focus-visible:ring-site-ring site-rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="Follow us on X"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={FIGMA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-site-muted-foreground hover:text-site-foreground focus-visible:ring-site-ring site-rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    aria-label="View NeUI on Figma"
                  >
                    <FigmaIcon className="size-[18px]" aria-hidden="true" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Free shadcn/ui Figma</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
