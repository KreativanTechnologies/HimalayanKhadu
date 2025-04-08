import { DashboardShell } from "../../../../components/Dashboard/dashboardShell.jsx"
import { DashboardHeader } from "../../../../components/Dashboard/dashboardHeader.jsx"
import { ListingForm } from "../../../../components/Dashboard/listingForm.jsx"

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

