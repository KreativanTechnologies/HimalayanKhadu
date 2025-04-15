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
import { ImageUploader } from "../../components/Dashboard/imageUploader"
import { Loader2, Plus, X } from "lucide-react"

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

  // Add state for managing dynamic arrays
  const [inclusionsCount, setInclusionsCount] = useState(1)
  const [exclusionsCount, setExclusionsCount] = useState(1)
  const [itineraryCount, setItineraryCount] = useState(1)
  const [thingsToPackCount, setThingsToPackCount] = useState(1)
  const [faqCount, setFaqCount] = useState(1)
  const [howToReachCount, setHowToReachCount] = useState(1)
  const [bestTimeToVisitCount, setBestTimeToVisitCount] = useState(1)
  const [placesToVisitCount, setPlacesToVisitCount] = useState(1)
  const [thingsToDoCount, setThingsToDoCount] = useState(1)

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

              {/* Inclusions Section */}
              <div className="space-y-4 border p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Inclusions</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentInclusions = form.getValues("inclusions") || []
                      form.setValue("inclusions", [...currentInclusions, { text: "" }])
                      setInclusionsCount(inclusionsCount + 1)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Inclusion
                  </Button>
                </div>

                {Array.from({ length: inclusionsCount }).map((_, index) => (
                  <div key={`inclusion-${index}`} className="flex items-center gap-2">
                    <FormField
                      control={form.control}
                      name={`inclusions.${index}.text`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Enter inclusion" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => {
                          const currentInclusions = form.getValues("inclusions")
                          const newInclusions = currentInclusions.filter((_, i) => i !== index)
                          form.setValue("inclusions", newInclusions)
                          setInclusionsCount(inclusionsCount - 1)
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {/* Exclusions Section */}
              <div className="space-y-4 border p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Exclusions</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentExclusions = form.getValues("exclusions") || []
                      form.setValue("exclusions", [...currentExclusions, { text: "" }])
                      setExclusionsCount(exclusionsCount + 1)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Exclusion
                  </Button>
                </div>

                {Array.from({ length: exclusionsCount }).map((_, index) => (
                  <div key={`exclusion-${index}`} className="flex items-center gap-2">
                    <FormField
                      control={form.control}
                      name={`exclusions.${index}.text`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Enter exclusion" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        onClick={() => {
                          const currentExclusions = form.getValues("exclusions")
                          const newExclusions = currentExclusions.filter((_, i) => i !== index)
                          form.setValue("exclusions", newExclusions)
                          setExclusionsCount(exclusionsCount - 1)
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {/* Itinerary Section */}
              <div className="space-y-4 border p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Itinerary</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentItinerary = form.getValues("itinerary") || []
                      form.setValue("itinerary", [
                        ...currentItinerary,
                        { day: currentItinerary.length + 1, Title: "", todayActivities: [""], Note: "", Highlight: "" },
                      ])
                      setItineraryCount(itineraryCount + 1)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Day
                  </Button>
                </div>

                {Array.from({ length: itineraryCount }).map((_, index) => (
                  <div key={`itinerary-${index}`} className="space-y-4 border p-4 rounded-md">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Day {index + 1}</h4>
                      {index > 0 && (
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            const currentItinerary = form.getValues("itinerary")
                            const newItinerary = currentItinerary.filter((_, i) => i !== index)
                            // Update day numbers
                            newItinerary.forEach((item, i) => {
                              item.day = i + 1
                            })
                            form.setValue("itinerary", newItinerary)
                            setItineraryCount(itineraryCount - 1)
                          }}
                        >
                          Remove Day
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <FormField
                        control={form.control}
                        name={`itinerary.${index}.Title`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Day Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter day title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Today's Activities</div>
                        {form.getValues(`itinerary.${index}.todayActivities`)?.map((_, activityIndex) => (
                          <div key={`activity-${index}-${activityIndex}`} className="flex items-center gap-2">
                            <FormField
                              control={form.control}
                              name={`itinerary.${index}.todayActivities.${activityIndex}`}
                              render={({ field }) => (
                                <FormItem className="flex-1">
                                  <FormControl>
                                    <Input placeholder="Enter activity" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                const currentActivities = form.getValues(`itinerary.${index}.todayActivities`) || []
                                form.setValue(`itinerary.${index}.todayActivities`, [...currentActivities, ""])
                              }}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                            {activityIndex > 0 && (
                              <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                onClick={() => {
                                  const currentActivities = form.getValues(`itinerary.${index}.todayActivities`)
                                  const newActivities = currentActivities.filter((_, i) => i !== activityIndex)
                                  form.setValue(`itinerary.${index}.todayActivities`, newActivities)
                                }}
                              >
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>

                      <FormField
                        control={form.control}
                        name={`itinerary.${index}.Note`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Note</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Enter note for this day" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`itinerary.${index}.Highlight`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Highlight</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter day highlight" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Things to Pack Section */}
              <div className="space-y-4 border p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Things to Pack</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentThingsToPack = form.getValues("thingsToPack") || []
                      form.setValue("thingsToPack", [...currentThingsToPack, { title: "", image: "", desc: "" }])
                      setThingsToPackCount(thingsToPackCount + 1)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Item
                  </Button>
                </div>

                {Array.from({ length: thingsToPackCount }).map((_, index) => (
                  <div key={`thingsToPack-${index}`} className="space-y-4 border p-4 rounded-md">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">Item {index + 1}</h4>
                      {index > 0 && (
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            const currentThingsToPack = form.getValues("thingsToPack")
                            const newThingsToPack = currentThingsToPack.filter((_, i) => i !== index)
                            form.setValue("thingsToPack", newThingsToPack)
                            setThingsToPackCount(thingsToPackCount - 1)
                          }}
                        >
                          Remove Item
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name={`thingsToPack.${index}.title`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter item title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`thingsToPack.${index}.image`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter image URL" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name={`thingsToPack.${index}.desc`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter item description" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="space-y-4 border p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">FAQs</h3>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentFaq = form.getValues("faq") || []
                      form.setValue("faq", [...currentFaq, { que: "", ans: "" }])
                      setFaqCount(faqCount + 1)
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add FAQ
                  </Button>
                </div>

                {Array.from({ length: faqCount }).map((_, index) => (
                  <div key={`faq-${index}`} className="space-y-4 border p-4 rounded-md">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">FAQ {index + 1}</h4>
                      {index > 0 && (
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          onClick={() => {
                            const currentFaq = form.getValues("faq")
                            const newFaq = currentFaq.filter((_, i) => i !== index)
                            form.setValue("faq", newFaq)
                            setFaqCount(faqCount - 1)
                          }}
                        >
                          Remove FAQ
                        </Button>
                      )}
                    </div>

                    <FormField
                      control={form.control}
                      name={`faq.${index}.que`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Question</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter question" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`faq.${index}.ans`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Answer</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Enter answer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </div>

              {/* How to Reach Section */}
              <div className="space-y-4 border p-4 rounded-md">
                <h3 className="text-lg font-medium">How to Reach</h3>

                <FormField
                  control={form.control}
                  name="howToReach.title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Ways to Reach</h4>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const currentWays = form.getValues("howToReach.multipleWays") || []
                        form.setValue("howToReach.multipleWays", [...currentWays, { medium: "", desc: "" }])
                        setHowToReachCount(howToReachCount + 1)
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Way
                    </Button>
                  </div>

                  {Array.from({ length: howToReachCount }).map((_, index) => (
                    <div key={`howToReach-${index}`} className="space-y-4 border p-4 rounded-md">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium">Way {index + 1}</h5>
                        {index > 0 && (
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              const currentWays = form.getValues("howToReach.multipleWays")
                              const newWays = currentWays.filter((_, i) => i !== index)
                              form.setValue("howToReach.multipleWays", newWays)
                              setHowToReachCount(howToReachCount - 1)
                            }}
                          >
                            Remove
                          </Button>
                        )}
                      </div>

                      <FormField
                        control={form.control}
                        name={`howToReach.multipleWays.${index}.medium`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Medium</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., By Air, By Road" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`howToReach.multipleWays.${index}.desc`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Enter description" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Time to Visit Section */}
              <div className="space-y-4 border p-4 rounded-md">
                <h3 className="text-lg font-medium">Best Time to Visit</h3>

                <FormField
                  control={form.control}
                  name="bestTimeToVisit.title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Seasons</h4>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const currentSeasons = form.getValues("bestTimeToVisit.multipleWays") || []
                        form.setValue("bestTimeToVisit.multipleWays", [...currentSeasons, { time: "", desc: "" }])
                        setBestTimeToVisitCount(bestTimeToVisitCount + 1)
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Season
                    </Button>
                  </div>

                  {Array.from({ length: bestTimeToVisitCount }).map((_, index) => (
                    <div key={`bestTimeToVisit-${index}`} className="space-y-4 border p-4 rounded-md">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium">Season {index + 1}</h5>
                        {index > 0 && (
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              const currentSeasons = form.getValues("bestTimeToVisit.multipleWays")
                              const newSeasons = currentSeasons.filter((_, i) => i !== index)
                              form.setValue("bestTimeToVisit.multipleWays", newSeasons)
                              setBestTimeToVisitCount(bestTimeToVisitCount - 1)
                            }}
                          >
                            Remove
                          </Button>
                        )}
                      </div>

                      <FormField
                        control={form.control}
                        name={`bestTimeToVisit.multipleWays.${index}.time`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Time</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Summer, Winter" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`bestTimeToVisit.multipleWays.${index}.desc`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Enter description" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Places to Visit Section */}
              <div className="space-y-4 border p-4 rounded-md">
                <h3 className="text-lg font-medium">Places to Visit</h3>

                <FormField
                  control={form.control}
                  name="placesToVisit.title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Places</h4>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const currentPlaces = form.getValues("placesToVisit.multipleWays") || []
                        form.setValue("placesToVisit.multipleWays", [...currentPlaces, { place: "", desc: "" }])
                        setPlacesToVisitCount(placesToVisitCount + 1)
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Place
                    </Button>
                  </div>

                  {Array.from({ length: placesToVisitCount }).map((_, index) => (
                    <div key={`placesToVisit-${index}`} className="space-y-4 border p-4 rounded-md">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium">Place {index + 1}</h5>
                        {index > 0 && (
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              const currentPlaces = form.getValues("placesToVisit.multipleWays")
                              const newPlaces = currentPlaces.filter((_, i) => i !== index)
                              form.setValue("placesToVisit.multipleWays", newPlaces)
                              setPlacesToVisitCount(placesToVisitCount - 1)
                            }}
                          >
                            Remove
                          </Button>
                        )}
                      </div>

                      <FormField
                        control={form.control}
                        name={`placesToVisit.multipleWays.${index}.place`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Place</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter place name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`placesToVisit.multipleWays.${index}.desc`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Enter description" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Things to Do Section */}
              <div className="space-y-4 border p-4 rounded-md">
                <h3 className="text-lg font-medium">Things to Do</h3>

                <FormField
                  control={form.control}
                  name="thingsToDo.title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Activities</h4>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const currentThings = form.getValues("thingsToDo.multipleWays") || []
                        form.setValue("thingsToDo.multipleWays", [...currentThings, { thing: "", desc: "" }])
                        setThingsToDoCount(thingsToDoCount + 1)
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Activity
                    </Button>
                  </div>

                  {Array.from({ length: thingsToDoCount }).map((_, index) => (
                    <div key={`thingsToDo-${index}`} className="space-y-4 border p-4 rounded-md">
                      <div className="flex justify-between items-center">
                        <h5 className="font-medium">Activity {index + 1}</h5>
                        {index > 0 && (
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => {
                              const currentThings = form.getValues("thingsToDo.multipleWays")
                              const newThings = currentThings.filter((_, i) => i !== index)
                              form.setValue("thingsToDo.multipleWays", newThings)
                              setThingsToDoCount(thingsToDoCount - 1)
                            }}
                          >
                            Remove
                          </Button>
                        )}
                      </div>

                      <FormField
                        control={form.control}
                        name={`thingsToDo.multipleWays.${index}.thing`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Activity</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter activity name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`thingsToDo.multipleWays.${index}.desc`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Enter description" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  ))}
                </div>
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
