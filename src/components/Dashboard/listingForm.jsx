"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Card, CardContent } from "../ui/card"
import { ImageUploader } from "./imageUploader"
import { Loader2 } from "lucide-react"

// Mock data for editing
const mockListings = {
  1: {
    id: "1",
    name: "Bali Beach Resort",
    description: "Luxury beach resort in Bali with private villas",
    price: 1299,
    status: "published",
    images: ["/placeholder.svg?height=300&width=500"],
  },
  2: {
    id: "2",
    name: "Paris City Break",
    description: "3-day city break in the heart of Paris",
    price: 799,
    status: "published",
    images: ["/placeholder.svg?height=300&width=500"],
  },
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.coerce.number().positive({
    message: "Price must be a positive number.",
  }),
  status: z.enum(["draft", "published"]),
})

export function ListingForm({ id }) {
  const router = useRouter()
  const [images, setImages] = useState(id && mockListings[id] ? mockListings[id].images : [])
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get listing data if editing
  const existingListing = id ? mockListings[id] : null

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: existingListing
      ? {
          name: existingListing.name,
          description: existingListing.description,
          price: existingListing.price,
          status: existingListing.status,
        }
      : {
          name: "",
          description: "",
          price: 0,
          status: "draft",
        },
  })

  function onSubmit(values) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log({ ...values, images })
      setIsSubmitting(false)
      router.push("/dashboard")
    }, 1500)
  }

  const handleImageUpload = (imageUrl) => {
    setImages([...images, imageUrl])
  }

  const handleImageRemove = (index) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  return (
    <div className="grid gap-6">
      <Card>
        <CardContent className="pt-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium">Images</h3>
            <p className="text-sm text-muted-foreground">Upload images for your travel listing.</p>
            <div className="mt-4">
              <ImageUploader images={images} onUpload={handleImageUpload} onRemove={handleImageRemove} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter listing name" {...field} />
                    </FormControl>
                    <FormDescription>The name of your travel package or destination.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter listing description" className="min-h-32" {...field} />
                    </FormControl>
                    <FormDescription>Provide a detailed description of your travel package.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5">$</span>
                          <Input type="number" placeholder="0.00" className="pl-7" {...field} />
                        </div>
                      </FormControl>
                      <FormDescription>The price of your travel package.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="draft">Draft</SelectItem>
                          <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>Set the visibility status of your listing.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-end">
                <Button type="button" variant="outline" className="mr-2" onClick={() => router.push("/Dashboard")}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {id ? "Update Listing" : "Create Listing"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

