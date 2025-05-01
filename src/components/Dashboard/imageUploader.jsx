"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Card } from "../ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ImagePlus, X, Upload } from "lucide-react"

export function ImageUploader({ images, onUpload, onRemove }) {
  const [isUploading, setIsUploading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleUpload = () => {
    setIsUploading(true)

    // Simulate upload delay
    setTimeout(() => {
      // Generate a placeholder image with random dimensions
      const width = Math.floor(Math.random() * 200) + 400
      const height = Math.floor(Math.random() * 200) + 300
      const placeholderUrl = `/placeholder.svg?height=${height}&width=${width}`

      onUpload(placeholderUrl)
      setIsUploading(false)
      setDialogOpen(false)
    }, 1500)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <Card key={index} className="overflow-hidden group relative">
            <div className="aspect-video relative">
              <Image
                src={image }
                alt={`Listing image ${index + 1}`}
                fill
                className="object-cover"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => onRemove(index)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="h-full min-h-[160px] flex flex-col items-center justify-center border-dashed"
            >
              <ImagePlus className="h-8 w-8 mb-2" />
              <span>Add Image</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload Image</DialogTitle>
              <DialogDescription>Upload an image for your travel listing.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="image-upload">Select image</label>
                <Input id="image-upload" type="file" accept="image/*" />
              </div>
              <div className="border-2 border-dashed rounded-lg p-12 text-center">
                <div className="flex flex-col items-center">
                  <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-1">Drag and drop your image here</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpload} disabled={isUploading}>
                {isUploading ? "Uploading..." : "Upload"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

