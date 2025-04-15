"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { ImageUploader } from "@/components/imageUploader"
import { Loader2 } from "lucide-react"
import { DynamicFieldArray } from "@/components/dynamic-field-array"
import { NestedFieldArray } from "@/components/nested-field-array"
import { ItineraryFieldArray } from "@/components/itinerary-field-array"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for editing
const mockListings = {
  1: {
    id: "1",
    name: "Bali Beach Resort",
    title: "Luxury Bali Getaway",
    description: "Luxury beach resort in Bali with private villas",
    price: 1299,
    status: "published",
    images: ["/placeholder.svg?height=300&width=500"],
  },
  2: {
    id: "2",
    name: "Paris City Break",
    title: "Romantic Paris Escape",
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
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z
    .string()
    .min(10, {
      message: "Description must be at least 10 characters.",
    })
    .optional(),
  price: z.coerce
    .number()
    .positive({
      message: "Price must be a positive number.",
    })
    .optional(),
  salePrice: z.coerce
    .number()
    .positive({
      message: "Sale price must be a positive number.",
    })
    .optional(),
  pickDrop: z.string().optional(),
  duration: z.string().optional(),
  status: z.enum(["draft", "published"]),
  inclusions: z
    .array(
      z.object({
        text: z.string().optional(),
      }),
    )
    .optional(),
  exclusions: z
    .array(
      z.object({
        text: z.string().optional(),
      }),
    )
    .optional(),
  itinerary: z
    .array(
      z.object({
        day: z.coerce.number().optional(),
        Title: z.string().optional(),
        todayActivities: z.array(z.string()).optional(),
        Note: z.string().optional(),
        Highlight: z.string().optional(),
      }),
    )
    .optional(),
  thingsToPack: z
    .array(
      z.object({
        title: z.string().optional(),
        image: z.string().optional(),
        desc: z.string().optional(),
      }),
    )
    .optional(),
  faq: z
    .array(
      z.object({
        que: z.string().optional(),
        ans: z.string().optional(),
      }),
    )
    .optional(),
  howToReach: z
    .object({
      title: z.string().optional(),
      multipleWays: z
        .array(
          z.object({
            medium: z.string().optional(),
            desc: z.string().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
  bestTimeToVisit: z
    .object({
      title: z.string().optional(),
      multipleWays: z
        .array(
          z.object({
            time: z.string().optional(),
            desc: z.string().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
  placesToVisit: z
    .object({
      title: z.string().optional(),
      multipleWays: z
        .array(
          z.object({
            place: z.string().optional(),
            desc: z.string().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
  thingsToDo: z
    .object({
      title: z.string().optional(),
      multipleWays: z
        .array(
          z.object({
            thing: z.string().optional(),
            desc: z.string().optional(),
          }),
        )
        .optional(),
    })
    .optional(),
  averageReview: z.coerce.number().min(0).max(5).optional(),
})

export function ListingForm({ id }) {
  const router = useRouter()
  const [images, setImages] = useState(id && mockListings[id] ? mockListings[id].images : [])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")

  // Get listing data if editing
  const existingListing = id ? mockListings[id] : null

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: existingListing
      ? {
          name: existingListing.name,
          title: existingListing.title || "",
          description: existingListing.description || "",
          price: existingListing.price || 0,
          salePrice: existingListing.salePrice || 0,
          pickDrop: existingListing.pickDrop || "",
          duration: existingListing.duration || "",
          status: existingListing.status || "draft",
          inclusions: existingListing.inclusions || [{ text: "" }],
          exclusions: existingListing.exclusions || [{ text: "" }],
          itinerary: existingListing.itinerary || [
            { day: 1, Title: "", todayActivities: [""], Note: "", Highlight: "" },
          ],
          thingsToPack: existingListing.thingsToPack || [{ title: "", image: "", desc: "" }],
          faq: existingListing.faq || [{ que: "", ans: "" }],
          howToReach: existingListing.howToReach || { title: "", multipleWays: [{ medium: "", desc: "" }] },
          bestTimeToVisit: existingListing.bestTimeToVisit || { title: "", multipleWays: [{ time: "", desc: "" }] },
          placesToVisit: existingListing.placesToVisit || { title: "", multipleWays: [{ place: "", desc: "" }] },
          thingsToDo: existingListing.thingsToDo || { title: "", multipleWays: [{ thing: "", desc: "" }] },
          averageReview: existingListing.averageReview || 0,
        }
      : {
          name: "",
          title: "",
          description: "",
          price: 0,
          salePrice: 0,
          pickDrop: "",
          duration: "",
          status: "draft",
          inclusions: [{ text: "" }],
          exclusions: [{ text: "" }],
          itinerary: [{ day: 1, Title: "", todayActivities: [""], Note: "", Highlight: "" }],
          thingsToPack: [{ title: "", image: "", desc: "" }],
          faq: [{ que: "", ans: "" }],
          howToReach: { title: "", multipleWays: [{ medium: "", desc: "" }] },
          bestTimeToVisit: { title: "", multipleWays: [{ time: "", desc: "" }] },
          placesToVisit: { title: "", multipleWays: [{ place: "", desc: "" }] },
          thingsToDo: { title: "", multipleWays: [{ thing: "", desc: "" }] },
          averageReview: 0,
        },
  })

  function onSubmit(values) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log({ ...values, gallery: images })
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
            <h3 className="text-lg font-medium">Gallery Images</h3>
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
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-6">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                  <TabsTrigger value="packing">Packing</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter listing title" {...field} />
                          </FormControl>
                          <FormDescription>A catchy title for your travel package.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

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

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                          <FormDescription>Regular price</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="salePrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sale Price</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-2.5">$</span>
                              <Input type="number" placeholder="0.00" className="pl-7" {...field} />
                            </div>
                          </FormControl>
                          <FormDescription>Discounted price (if applicable)</FormDescription>
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
                </TabsContent>

                <TabsContent value="details" className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="pickDrop"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pick-up/Drop-off</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter pick-up/drop-off details" {...field} />
                          </FormControl>
                          <FormDescription>Specify pick-up and drop-off locations.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Duration</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 3 days, 2 nights" {...field} />
                          </FormControl>
                          <FormDescription>The duration of the travel package.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="averageReview"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Average Review (0-5)</FormLabel>
                        <FormControl>
                          <Input type="number" min="0" max="5" step="0.1" {...field} />
                        </FormControl>
                        <FormDescription>The average review rating for this listing.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DynamicFieldArray
                    name="inclusions"
                    control={form.control}
                    form={form}
                    label="Inclusions"
                    addButtonText="Add Inclusion"
                    fields={[{ name: "text", label: "Inclusion", type: "input" }]}
                  />

                  <DynamicFieldArray
                    name="exclusions"
                    control={form.control}
                    form={form}
                    label="Exclusions"
                    addButtonText="Add Exclusion"
                    fields={[{ name: "text", label: "Exclusion", type: "input" }]}
                  />
                </TabsContent>

                <TabsContent value="itinerary" className="space-y-6">
                  <ItineraryFieldArray name="itinerary" control={form.control} form={form} />
                </TabsContent>

                <TabsContent value="faq" className="space-y-6">
                  <DynamicFieldArray
                    name="faq"
                    control={form.control}
                    form={form}
                    label="FAQs"
                    addButtonText="Add FAQ"
                    fields={[
                      { name: "que", label: "Question", type: "input" },
                      { name: "ans", label: "Answer", type: "textarea" },
                    ]}
                  />
                </TabsContent>

                <TabsContent value="location" className="space-y-6">
                  <NestedFieldArray
                    name="howToReach"
                    control={form.control}
                    form={form}
                    label="How to Reach"
                    titleField="title"
                    nestedArrayName="multipleWays"
                    nestedFields={[
                      { name: "medium", label: "Medium", type: "input" },
                      { name: "desc", label: "Description", type: "textarea" },
                    ]}
                    addButtonText="Add Way"
                    itemLabel="Way"
                  />

                  <NestedFieldArray
                    name="bestTimeToVisit"
                    control={form.control}
                    form={form}
                    label="Best Time to Visit"
                    titleField="title"
                    nestedArrayName="multipleWays"
                    nestedFields={[
                      { name: "time", label: "Season", type: "input" },
                      { name: "desc", label: "Description", type: "textarea" },
                    ]}
                    addButtonText="Add Season"
                    itemLabel="Season"
                  />

                  <NestedFieldArray
                    name="placesToVisit"
                    control={form.control}
                    form={form}
                    label="Places to Visit"
                    titleField="title"
                    nestedArrayName="multipleWays"
                    nestedFields={[
                      { name: "place", label: "Place", type: "input" },
                      { name: "desc", label: "Description", type: "textarea" },
                    ]}
                    addButtonText="Add Place"
                    itemLabel="Place"
                  />

                  <NestedFieldArray
                    name="thingsToDo"
                    control={form.control}
                    form={form}
                    label="Things to Do"
                    titleField="title"
                    nestedArrayName="multipleWays"
                    nestedFields={[
                      { name: "thing", label: "Activity", type: "input" },
                      { name: "desc", label: "Description", type: "textarea" },
                    ]}
                    addButtonText="Add Activity"
                    itemLabel="Activity"
                  />
                </TabsContent>

                <TabsContent value="packing" className="space-y-6">
                  <DynamicFieldArray
                    name="thingsToPack"
                    control={form.control}
                    form={form}
                    label="Things to Pack"
                    addButtonText="Add Item"
                    fields={[
                      { name: "title", label: "Title", type: "input" },
                      { name: "image", label: "Image URL", type: "input" },
                      { name: "desc", label: "Description", type: "textarea" },
                    ]}
                  />
                </TabsContent>
              </Tabs>

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
