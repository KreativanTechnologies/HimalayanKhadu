"use client"

import { useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Badge } from "../ui/badge"
import { Edit, MoreHorizontal, Trash } from "lucide-react"

// Mock data for demonstration
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

export function ListingsTable() {
  const [listings, setListings] = useState(initialListings)

  const deleteListing = (id) => {
    setListings(listings.filter((listing) => listing.id !== id))
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                No listings found.
              </TableCell>
            </TableRow>
          ) : (
            listings.map((listing) => (
              <TableRow key={listing.id}>
                <TableCell className="font-medium">{listing.name}</TableCell>
                <TableCell>
                  <Badge variant={listing.status === "published" ? "default" : "secondary"}>{listing.status}</Badge>
                </TableCell>
                <TableCell>${listing.price}</TableCell>
                <TableCell>{formatDate(listing.createdAt)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href={`/Dashboard/edit/${listing.id}`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive focus:text-destructive"
                        onClick={() => deleteListing(listing.id)}
                      >
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

