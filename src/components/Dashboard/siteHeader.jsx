import Link from "next/link"
import { Button } from "../ui/button"
import { PlaneTakeoff } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center">
          <PlaneTakeoff className="h-6 w-6" />
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">TravelDash</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" className="text-sm font-medium" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" className="text-sm font-medium" asChild>
              <Link href="/dashboard/settings">Settings</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

