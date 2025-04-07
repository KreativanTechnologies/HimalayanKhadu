import { DashboardShell } from "../../components/Dashboard/dashboardShell"
import { DashboardHeader } from "../../components/Dashboard/dashboardHeader"
import { ListingsTable } from "../../components/Dashboard/listingsTable"
import { Button } from "../../components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <DashboardShell> 
      <DashboardHeader heading="Listings" text="Manage your travel listings and packages.">
        <Button asChild>
          <Link href="/Dashboard/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Listing
          </Link>
        </Button>
      </DashboardHeader>
      <div className="grid gap-4">
        <ListingsTable />
      </div>
    </DashboardShell>
  )
}

