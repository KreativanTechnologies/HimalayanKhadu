"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
import * as z from "zod"
import { Button } from "../ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Card, CardContent } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Loader2, Plus, Trash2 } from "lucide-react"
import { ImageUploader } from "../../components/Dashboard/imageUploader"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
  price: z.coerce.number().nonnegative().optional(),
  salePrice: z.coerce.number().nonnegative().optional(),
  pickDrop: z.string().optional(),
  duration: z.string().optional(),
  averageReview: z.coerce.number().min(0).max(5).optional(),
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
})

export function ListingForm({ id }) {
  const router = useRouter()
  const [images, setImages] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      salePrice: 0,
      pickDrop: "",
      duration: "",
      averageReview: 0,
      status: "draft",
      inclusions: [{ text: "" }],
      exclusions: [{ text: "" }],
      itinerary: [{ day: 1, Title: "", todayActivities: [""], Note: "", Highlight: "" }],
      thingsToPack: [{ title: "", image: "", desc: "" }],
      faq: [{ que: "", ans: "" }],
      howToReach: {
        title: "",
        multipleWays: [{ medium: "", desc: "" }],
      },
      bestTimeToVisit: {
        title: "",
        multipleWays: [{ time: "", desc: "" }],
      },
      placesToVisit: {
        title: "",
        multipleWays: [{ place: "", desc: "" }],
      },
      thingsToDo: {
        title: "",
        multipleWays: [{ thing: "", desc: "" }],
      },
    },
  })

  const {
    fields: inclusionFields,
    append: appendInclusion,
    remove: removeInclusion,
  } = useFieldArray({ control: form.control, name: "inclusions" })

  const {
    fields: exclusionFields,
    append: appendExclusion,
    remove: removeExclusion,
  } = useFieldArray({ control: form.control, name: "exclusions" })

  const {
    fields: itineraryFields,
    append: appendItinerary,
    remove: removeItinerary,
  } = useFieldArray({ control: form.control, name: "itinerary" })

  const {
    fields: packingFields,
    append: appendPacking,
    remove: removePacking,
  } = useFieldArray({ control: form.control, name: "thingsToPack" })

  const {
    fields: faqFields,
    append: appendFaq,
    remove: removeFaq,
  } = useFieldArray({ control: form.control, name: "faq" })

  const {
    fields: howToReachFields,
    append: appendHowToReach,
    remove: removeHowToReach,
  } = useFieldArray({ control: form.control, name: "howToReach.multipleWays" })

  const {
    fields: bestTimeFields,
    append: appendBestTime,
    remove: removeBestTime,
  } = useFieldArray({ control: form.control, name: "bestTimeToVisit.multipleWays" })

  const {
    fields: placesToVisitFields,
    append: appendPlaceToVisit,
    remove: removePlaceToVisit,
  } = useFieldArray({ control: form.control, name: "placesToVisit.multipleWays" })

  const {
    fields: thingsToDoFields,
    append: appendThingToDo,
    remove: removeThingToDo,
  } = useFieldArray({ control: form.control, name: "thingsToDo.multipleWays" })

  // Handle itinerary activities
  const {
    fields: activitiesFields,
    append: appendActivity,
    remove: removeActivity,
  } = useFieldArray({
    control: form.control,
    name: "itinerary.0.todayActivities", 
  })

  const handleImageUpload = (imageUrl) => {
    setImages([...images, imageUrl])
  }

  const handleImageRemove = (index) => {
    const newImages = [...images]
    newImages.splice(index, 1)
    setImages(newImages)
  }

  function onSubmit(values) {
    setIsSubmitting(true)

    const formData = {
      ...values,
      gallery: images,
    }

    setTimeout(() => {
      console.log(formData)
      setIsSubmitting(false)
      router.push("/dashboard")
    }, 1500)
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
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                  <TabsTrigger value="packing">Packing</TabsTrigger>
                  <TabsTrigger value="location">Location Info</TabsTrigger>
                </TabsList>

                {/* Basic Info Tab */}
                <TabsContent value="basic" className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter listing title" {...field} />
                        </FormControl>
                        <FormDescription>The title of your travel package or destination.</FormDescription>
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
                          <FormLabel>Regular Price</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <span className="absolute left-3 top-2.5">$</span>
                              <Input type="number" placeholder="0.00" className="pl-7" {...field} />
                            </div>
                          </FormControl>
                          <FormDescription>The regular price of your travel package.</FormDescription>
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
                          <FormDescription>Optional discounted price (if on sale).</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

                    <FormField
                      control={form.control}
                      name="pickDrop"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pick-up/Drop-off</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Hotel pickup included" {...field} />
                          </FormControl>
                          <FormDescription>Pick-up and drop-off information.</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="averageReview"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Average Review (0-5)</FormLabel>
                          <FormControl>
                            <Input type="number" min="0" max="5" step="0.1" {...field} />
                          </FormControl>
                          <FormDescription>The average review rating (0-5 stars).</FormDescription>
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

                {/* Details Tab */}
                <TabsContent value="details" className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Inclusions</h3>
                      <Button type="button" variant="outline" size="sm" onClick={() => appendInclusion({ text: "" })}>
                        <Plus className="h-4 w-4 mr-2" /> Add Inclusion
                      </Button>
                    </div>

                    {inclusionFields.map((field, index) => (
                      <div key={field.id} className="flex items-center gap-2">
                        <FormField
                          control={form.control}
                          name={`inclusions.${index}.text`}
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input placeholder="e.g., Breakfast included" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeInclusion(index)}
                          disabled={inclusionFields.length === 1}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Exclusions</h3>
                      <Button type="button" variant="outline" size="sm" onClick={() => appendExclusion({ text: "" })}>
                        <Plus className="h-4 w-4 mr-2" /> Add Exclusion
                      </Button>
                    </div>

                    {exclusionFields.map((field, index) => (
                      <div key={field.id} className="flex items-center gap-2">
                        <FormField
                          control={form.control}
                          name={`exclusions.${index}.text`}
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormControl>
                                <Input placeholder="e.g., Flights not included" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeExclusion(index)}
                          disabled={exclusionFields.length === 1}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Itinerary Tab */}
                <TabsContent value="itinerary" className="space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Itinerary</h3>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          appendItinerary({
                            day: itineraryFields.length + 1,
                            Title: "",
                            todayActivities: [""],
                            Note: "",
                            Highlight: "",
                          })
                        }
                      >
                        <Plus className="h-4 w-4 mr-2" /> Add Day
                      </Button>
                    </div>

                    {itineraryFields.map((field, dayIndex) => (
                      <Card key={field.id} className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium">Day {dayIndex + 1}</h4>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItinerary(dayIndex)}
                            disabled={itineraryFields.length === 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name={`itinerary.${dayIndex}.Title`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Day Title</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., Arrival and City Tour" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <FormLabel>Activities</FormLabel>
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  const currentActivities =
                                    form.getValues(`itinerary.${dayIndex}.todayActivities`) || []
                                  form.setValue(`itinerary.${dayIndex}.todayActivities`, [...currentActivities, ""])
                                }}
                              >
                                <Plus className="h-4 w-4 mr-2" /> Add Activity
                              </Button>
                            </div>

                            {form.watch(`itinerary.${dayIndex}.todayActivities`)?.map((activity, activityIndex) => (
                              <div key={activityIndex} className="flex items-center gap-2">
                                <FormField
                                  control={form.control}
                                  name={`itinerary.${dayIndex}.todayActivities.${activityIndex}`}
                                  render={({ field }) => (
                                    <FormItem className="flex-1">
                                      <FormControl>
                                        <Input placeholder="e.g., Morning breakfast at hotel" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => {
                                    const currentActivities = [
                                      ...form.getValues(`itinerary.${dayIndex}.todayActivities`),
                                    ]
                                    if (currentActivities.length > 1) {
                                      currentActivities.splice(activityIndex, 1)
                                      form.setValue(`itinerary.${dayIndex}.todayActivities`, currentActivities)
                                    }
                                  }}
                                  disabled={form.watch(`itinerary.${dayIndex}.todayActivities`).length <= 1}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>

                          <FormField
                            control={form.control}
                            name={`itinerary.${dayIndex}.Note`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Note</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Any special notes for this day" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name={`itinerary.${dayIndex}.Highlight`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Highlight</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., Sunset dinner cruise" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* FAQ Tab */}
                <TabsContent value="faq" className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Frequently Asked Questions</h3>
                      <Button type="button" variant="outline" size="sm" onClick={() => appendFaq({ que: "", ans: "" })}>
                        <Plus className="h-4 w-4 mr-2" /> Add FAQ
                      </Button>
                    </div>

                    {faqFields.map((field, index) => (
                      <Card key={field.id} className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium">FAQ #{index + 1}</h4>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFaq(index)}
                            disabled={faqFields.length === 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name={`faq.${index}.que`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Question</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., What is the cancellation policy?" {...field} />
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
                                  <Textarea placeholder="Provide a detailed answer" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Packing Tab */}
                <TabsContent value="packing" className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium">Things to Pack</h3>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => appendPacking({ title: "", image: "", desc: "" })}
                      >
                        <Plus className="h-4 w-4 mr-2" /> Add Item
                      </Button>
                    </div>

                    {packingFields.map((field, index) => (
                      <Card key={field.id} className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-medium">Packing Item #{index + 1}</h4>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removePacking(index)}
                            disabled={packingFields.length === 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="space-y-4">
                          <FormField
                            control={form.control}
                            name={`thingsToPack.${index}.title`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Item Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., Sunscreen" {...field} />
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

                          <FormField
                            control={form.control}
                            name={`thingsToPack.${index}.desc`}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                  <Textarea placeholder="Why this item is important" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Location Info Tab */}
                <TabsContent value="location" className="space-y-6">
                  {/* How to Reach */}
                  <Card className="p-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">How to Reach</h3>

                      <FormField
                        control={form.control}
                        name="howToReach.title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Getting to Bali" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <FormLabel>Transportation Options</FormLabel>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => appendHowToReach({ medium: "", desc: "" })}
                          >
                            <Plus className="h-4 w-4 mr-2" /> Add Option
                          </Button>
                        </div>

                        {howToReachFields.map((way, index) => (
                          <div key={way.id} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <FormField
                              control={form.control}
                              name={`howToReach.multipleWays.${index}.medium`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input placeholder="e.g., By Air" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="flex items-center gap-2">
                              <FormField
                                control={form.control}
                                name={`howToReach.multipleWays.${index}.desc`}
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeHowToReach(index)}
                                disabled={howToReachFields.length <= 1}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  {/* Best Time to Visit */}
                  <Card className="p-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Best Time to Visit</h3>

                      <FormField
                        control={form.control}
                        name="bestTimeToVisit.title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Seasons in Bali" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <FormLabel>Seasons</FormLabel>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => appendBestTime({ time: "", desc: "" })}
                          >
                            <Plus className="h-4 w-4 mr-2" /> Add Season
                          </Button>
                        </div>

                        {bestTimeFields.map((way, index) => (
                          <div key={way.id} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <FormField
                              control={form.control}
                              name={`bestTimeToVisit.multipleWays.${index}.time`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input placeholder="e.g., Summer (June-August)" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="flex items-center gap-2">
                              <FormField
                                control={form.control}
                                name={`bestTimeToVisit.multipleWays.${index}.desc`}
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeBestTime(index)}
                                disabled={bestTimeFields.length <= 1}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  {/* Places to Visit */}
                  <Card className="p-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Places to Visit</h3>

                      <FormField
                        control={form.control}
                        name="placesToVisit.title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Must-See Attractions" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <FormLabel>Places</FormLabel>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => appendPlaceToVisit({ place: "", desc: "" })}
                          >
                            <Plus className="h-4 w-4 mr-2" /> Add Place
                          </Button>
                        </div>

                        {placesToVisitFields.map((place, index) => (
                          <div key={place.id} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <FormField
                              control={form.control}
                              name={`placesToVisit.multipleWays.${index}.place`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input placeholder="e.g., Ubud Monkey Forest" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="flex items-center gap-2">
                              <FormField
                                control={form.control}
                                name={`placesToVisit.multipleWays.${index}.desc`}
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removePlaceToVisit(index)}
                                disabled={placesToVisitFields.length <= 1}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  {/* Things to Do */}
                  <Card className="p-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Things to Do</h3>

                      <FormField
                        control={form.control}
                        name="thingsToDo.title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Activities in Bali" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <FormLabel>Activities</FormLabel>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => appendThingToDo({ thing: "", desc: "" })}
                          >
                            <Plus className="h-4 w-4 mr-2" /> Add Activity
                          </Button>
                        </div>

                        {thingsToDoFields.map((thing, index) => (
                          <div key={thing.id} className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <FormField
                              control={form.control}
                              name={`thingsToDo.multipleWays.${index}.thing`}
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input placeholder="e.g., Surfing" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <div className="flex items-center gap-2">
                              <FormField
                                control={form.control}
                                name={`thingsToDo.multipleWays.${index}.desc`}
                                render={({ field }) => (
                                  <FormItem className="flex-1">
                                    <FormControl>
                                      <Input placeholder="Description" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => removeThingToDo(index)}
                                disabled={thingsToDoFields.length <= 1}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end">
                <Button type="button" variant="outline" className="mr-2" onClick={() => router.push("/dashboard")}>
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
