"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, CheckCircle, XCircle, Luggage, HelpCircle, ChevronRight, Star, ArrowLeft } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import { Card, CardContent } from "../../components/ui/card"

// Mock data for a single tour package
const tourPackage = {
  id: "1",
  title: "Bali Paradise Escape",
  gallery: [
    "/images/HomePage/BGP2.png",
    "/images/HomePage/Tour1.png",
    "/images/HomePage/Tour2.png",
  ],
  description:
    "Experience the magic of Bali with our all-inclusive package. Explore pristine beaches, ancient temples, lush rice terraces, and vibrant local culture. This carefully crafted itinerary offers the perfect balance of adventure, relaxation, and cultural immersion.",
  price: 1299,
  salePrice: 999,
  pickDrop: "Denpasar International Airport",
  duration: "7 Days / 6 Nights",
  inclusions: [
    { text: "6 nights accommodation in 4-star hotels" },
    { text: "Daily breakfast, 4 lunches, and 3 dinners" },
    { text: "All transportation within Bali" },
   
  ],
  exclusions: [
    { text: "International flights" },
    { text: "Travel insurance" },
   
  ],
  itinerary: [
    {
      day: 1,
      Title: "Arrival in Bali",
      todayActivities: ["Airport pickup", "Check-in at hotel", "Welcome dinner"],
      Note: "Rest and relax after your journey",
      Highlight: "Traditional Balinese welcome ceremony",
    },
    {
      day: 2,
      Title: "Ubud Cultural Tour",
      todayActivities: ["Visit Ubud Monkey Forest", "Explore Ubud Art Market", "Tour of Ubud Palace"],
      Note: "Wear comfortable walking shoes",
      Highlight: "Traditional Balinese dance performance",
    },
   
    {
      day: 3,
      Title: "Mount Batur Sunrise Trek",
      todayActivities: [
        "Early morning trek to Mount Batur",
        "Breakfast with volcano views",
        "Visit to coffee plantation",
      ],
      Note: "Early 2am start, warm clothes recommended",
      Highlight: "Breathtaking sunrise views from the volcano summit",
    },
   
  ],
  thingsToPack: [
    {
      title: "Lightweight Clothing",
      image: "/placeholder.svg?height=200&width=200",
      desc: "Pack breathable, lightweight clothing suitable for tropical weather.",
    },
    {
      title: "Sun Protection",
      image: "/placeholder.svg?height=200&width=200",
      desc: "Sunscreen, sunglasses, and a hat are essential for Bali's sunny climate.",
    },
   
  ],
  faq: [
    {
      que: "Is travel insurance required?",
      ans: "While not mandatory, we strongly recommend purchasing travel insurance to cover unexpected events.",
    },
    {
      que: "What is the best time to visit Bali?",
      ans: "The dry season (April to October) is generally considered the best time to visit Bali.",
    },
   
  ],
  howToReach: {
    title: "How to Reach Bali",
    multipleWays: [
      {
        medium: "By Air",
        desc: "Fly into Ngurah Rai International Airport (DPS) in Denpasar. Direct flights available from major Asian cities, with connections from Europe, Australia, and North America.",
      },
    
    ],
  },
  bestTimeToVisit: {
    title: "Best Time to Visit Bali",
    multipleWays: [
      {
        time: "Dry Season (April to October)",
        desc: "Ideal for outdoor activities with sunny days and lower humidity. Peak tourist season is July and August.",
      },
     
    ],
  },
  placesToVisit: {
    title: "Must-Visit Places in Bali",
    multipleWays: [
      {
        place: "Ubud",
        desc: "Cultural heart of Bali with art markets, monkey forest, and traditional crafts.",
      },
      {
        place: "Seminyak",
        desc: "Trendy beach area with upscale restaurants, boutiques, and vibrant nightlife.",
      },
      
    ],
  },
  thingsToDo: {
    title: "Top Activities in Bali",
    multipleWays: [
      {
        thing: "Surfing",
        desc: "Catch waves at Kuta, Canggu, or Uluwatu beaches, suitable for beginners to advanced surfers.",
      },
      {
        thing: "Temple Hopping",
        desc: "Explore Bali's ancient temples including Tanah Lot, Uluwatu, and Besakih.",
      },
     
    ],
  },
  averageReview: 4.8,
}

export default function TourPackageDetail({ params }) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto pt-6 px-4 sm:px-6">
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-[#0c8699] transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all packages
        </Link>
      </div>

      {/* Hero Section with Gallery */}
      <section className="max-w-7xl mx-auto py-8 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src={tourPackage.gallery[selectedImage] || "/placeholder.svg"}
                alt={tourPackage.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {tourPackage.gallery.map((image, index) => (
                <div
                  key={index}
                  className={`relative h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
                    selectedImage === index ? "border-[#0c8699]" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{tourPackage.title}</h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-gray-700">{tourPackage.averageReview}</span>
                </div>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-gray-600">120+ Reviews</span>
              </div>
            </div>

            <p className="text-gray-600">{tourPackage.description}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-[#0c8699] mr-2" />
                <span className="text-gray-700">{tourPackage.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#0c8699] mr-2" />
                <span className="text-gray-700">{tourPackage.pickDrop}</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-[#0c8699]">${tourPackage.salePrice}</span>
                  {tourPackage.salePrice < tourPackage.price && (
                    <span className="text-lg text-gray-500 line-through ml-2">${tourPackage.price}</span>
                  )}
                  <p className="text-gray-500 text-sm">per person</p>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">23% OFF</div>
              </div>
              <Button className="w-full bg-[#0c8699] hover:bg-[#5f9ea7] text-white">Book Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="max-w-7xl mx-auto  py-12 px-4 sm:px-6">
        <Tabs defaultValue="itinerary" className="w-full ">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 text-white bg-[#0c8699] mb-8">
            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
            <TabsTrigger value="inclusions">Inclusions/Exclusions</TabsTrigger>
            <TabsTrigger value="pack">Things to Pack</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="travel-info">Travel Info</TabsTrigger>
          </TabsList>

          {/* Itinerary Tab */}
          <TabsContent value="itinerary" className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Tour Itinerary</h2>
            <div className="space-y-6">
              {tourPackage.itinerary.map((day) => (
                <div key={day.day} className="border-l-4 border-[#0c8699] pl-6 relative">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#0c8699] flex items-center justify-center text-white text-sm">
                    {day.day}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Day {day.day}: {day.Title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {day.todayActivities.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-[#0c8699] mr-2 shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                  {day.Note && (
                    <p className="text-gray-600 italic mb-2">
                      <span className="font-semibold">Note:</span> {day.Note}
                    </p>
                  )}
                  {day.Highlight && (
                    <p className="text-[#0c8699]">
                      <span className="font-semibold">Highlight:</span> {day.Highlight}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Inclusions/Exclusions Tab */}
          <TabsContent value="inclusions" className="bg-[#e7f9fd] rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  What's Included
                </h2>
                <ul className="space-y-3">
                  {tourPackage.inclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <XCircle className="h-6 w-6 text-[#0c8699] mr-2" />
                  What's Not Included
                </h2>
                <ul className="space-y-3">
                  {tourPackage.exclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <XCircle className="h-5 w-5 text-[#0c8699] mr-3 shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Things to Pack Tab */}
          <TabsContent value="pack" className="bg-[#e7f9fd] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Luggage className="h-6 w-6 text-[#0c8699] mr-2" />
              Essential Packing List
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tourPackage.thingsToPack.map((item, index) => (
                <Card key={index} className="overflow-hidden">
                  {/* <div className="relative h-48">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  </div> */}
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="bg-[#e7f9fd] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <HelpCircle className="h-6 w-6 text-[#0c8699] mr-2" />
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full ">
              {tourPackage.faq.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left font-medium">{item.que}</AccordionTrigger>
                  <AccordionContent className="text-white bg-[#0c8699]">{item.ans}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          {/* Travel Info Tab */}
          <TabsContent value="travel-info" className="bg-[#e7f9fd] rounded-xl p-6 shadow-sm">
            <div className="space-y-10">
              {/* How to Reach */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{tourPackage.howToReach.title}</h2>
                <div className="space-y-4">
                  {tourPackage.howToReach.multipleWays.map((way, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">{way.medium}</h3>
                      <p className="text-gray-600">{way.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best Time to Visit */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{tourPackage.bestTimeToVisit.title}</h2>
                <div className="space-y-4">
                  {tourPackage.bestTimeToVisit.multipleWays.map((way, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">{way.time}</h3>
                      <p className="text-gray-600">{way.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Places to Visit */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{tourPackage.placesToVisit.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tourPackage.placesToVisit.multipleWays.map((way, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">{way.place}</h3>
                      <p className="text-gray-600">{way.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Things to Do */}
              <div>
                <h2 className="text-2xl font-bold mb-6">{tourPackage.thingsToDo.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tourPackage.thingsToDo.multipleWays.map((way, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">{way.thing}</h3>
                      <p className="text-gray-600">{way.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="bg-[#E8FAFE] py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Experience {tourPackage.title}?</h2>
          <p className="text-black text-xl max-w-3xl mx-auto mb-8">
            Book now to secure your spot on this amazing adventure.
          </p>
          <Button size="lg" variant="outline" className="bg-[#0c8699] text-white hover:bg-gray-100">
            Book This Package
          </Button>
        </div>
      </section>
    </div>
  )
}
