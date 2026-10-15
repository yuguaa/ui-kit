import Link from "next/link"

import { cn } from "cn"

const resourceLinks = [
  { label: "Components", href: "/components" },
  { label: "Docs", href: "/docs" },
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
          <FooterLinkGroup title="Product" links={resourceLinks} />
        </div>
      </div>

      {/* Compact bottom bar */}
      <div className="relative">
        <div className="bg-site-border h-px w-full" aria-hidden="true" />
        <div className="container-wrapper">
          <div className="container py-3 md:py-3.5">
            <p className="text-site-muted-foreground text-sm">
              &copy; {currentYear} NeUI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
