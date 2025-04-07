import { DashboardShell } from "../../components/Dashboard/dashboard-shell.jsx"
import { DashboardHeader } from "../../components/Dashboard/dashboard-header.jsx"
import { ListingForm } from "../../components/Dashboard/listing-form.jsx"

export default function EditListingPage({ params }) {
  return (
    <DashboardShell>
      <DashboardHeader heading="Edit Listing" text="Update your travel package or destination details." />
      <div className="grid gap-4">
        <ListingForm id={params.id} />
      </div>
    </DashboardShell>
  )
}

