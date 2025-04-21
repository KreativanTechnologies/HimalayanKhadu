"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Save } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import { Textarea } from "../../../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card"

const initialListings = [
  {
    id: "1",
    name: "Bali Beach Resort",
    description: "Luxury beach resort in Bali with private villas",
    price: 1299,
    status: "published",
    createdAt: "2023-04-12T09:00:00.000Z",
  },
  {
    id: "2",
    name: "Paris City Break",
    description: "3-day city break in the heart of Paris",
    price: 799,
    status: "published",
    createdAt: "2023-05-23T14:30:00.000Z",
  },
  {
    id: "3",
    name: "Swiss Alps Adventure",
    description: "Hiking and skiing package in the Swiss Alps",
    price: 1499,
    status: "draft",
    createdAt: "2023-06-05T11:15:00.000Z",
  },
  {
    id: "4",
    name: "New York City Tour",
    description: "5-day comprehensive tour of NYC landmarks",
    price: 1899,
    status: "published",
    createdAt: "2023-07-18T16:45:00.000Z",
  },
  {
    id: "5",
    name: "Tokyo Cultural Experience",
    description: "Immersive cultural tour of Tokyo",
    price: 2199,
    status: "draft",
    createdAt: "2023-08-02T08:20:00.000Z",
  },
]

export default function EditListingPage({ params }) {
  const router = useRouter()
  const { id } = params
  const [listing, setListing] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch the listing from your API
    // For now, we'll use the mock data
    const foundListing = initialListings.find((item) => item.id === id)

    if (foundListing) {
      setListing(foundListing)
    }
    setIsLoading(false)
  }, [id])

  const handleChange = (field, value) => {
    setListing((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Updated listing:", listing)

    router.push("/Dashboard")
  }

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (!listing) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
        <Button onClick={() => router.push("/Dashboard")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Listings
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={() => router.push("/Dashboard")} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <h1 className="text-2xl font-bold">Edit Listing</h1>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Listing Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" value={listing.name} onChange={(e) => handleChange("name", e.target.value)} required />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                value={listing.description}
                onChange={(e) => handleChange("description", e.target.value)}
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="price" className="text-sm font-medium">
                  Price ($)
                </label>
                <Input
                  id="price"
                  type="number"
                  value={listing.price}
                  onChange={(e) => handleChange("price", Number(e.target.value))}
                  min="0"
                  required
                />
              </div>

             
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
