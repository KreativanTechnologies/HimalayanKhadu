"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../../lib/utils"
import { Button } from "../../components/ui/button"
import { LayoutDashboard, ListIcon, Settings, ImageIcon, UsersIcon, BarChart3 } from "lucide-react"

const navItems = [
  {
    title: "Overview",
    href: "/Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Listings",
    href: "/Dashboard/ListingsTable",
    icon: ListIcon,
  },
  {
    title: "Media",
    href: "/Dashboard/media",
    icon: ImageIcon,
  },
  {
    title: "Analytics",
    href: "/Dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Customers",
    href: "/Dashboard/customers",
    icon: UsersIcon,
  },
  {
    title: "Settings",
    href: "/Dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2 px-2 py-4">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "default" : "ghost"}
          className={cn("justify-start", pathname === item.href && "bg-accent text-accent-foreground")}
          asChild
        >
          <Link href={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        </Button>
      ))}
    </nav>
  )
}

