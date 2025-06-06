"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../../lib/utils"
import { Button } from "../ui/button"
import { LayoutDashboard, ListIcon, Settings, ImageIcon, UsersIcon, BarChart3 } from "lucide-react"

const navItems = [
  {
    title: "Listings",
    href: "/Dashboard",
    icon: ListIcon,
  },
  // {
  //   title: "Listings",
  //   href: "/components/Dashboard/listingsTable.jsx",
  //   icon: ListIcon,
  // },
  
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start  gap-2 px-2 py-4">
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant={pathname === item.href ? "default" : "ghost"}
          className={cn("justify-start", pathname === item.href && "")}
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

