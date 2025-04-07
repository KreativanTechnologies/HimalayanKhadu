import { DashboardShell } from "../../../components/Dashboard/dashboard_shell"
import { DashboardHeader } from "../../../components/Dashboard/dashboard_header"
import { ListingForm } from "../../../components/Dashboard/listing_form"

export default function NewListingPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Create New Listing" text="Add a new travel package or destination to your website." />
      <div className="grid gap-4">
        <ListingForm />
      </div>
    </DashboardShell>
  )
}


