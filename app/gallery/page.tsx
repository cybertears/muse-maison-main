"use client"

import { Button } from "@/components/ui/button"
import { FilmGrainOverlay } from "@/components/film-grain-overlay"
import { PhotoGallery } from "@/components/photo-gallery"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function GalleryPage() {
  // Sample gallery photos
  const photos = [
    {
      src: "/placeholder.svg?height=600&width=400&text=Fashion+Editorial+1",
      alt: "Fashion Editorial 1",
      width: 400,
      height: 600,
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Street+Photography+1",
      alt: "Street Photography 1",
      width: 600,
      height: 400,
    },
    {
      src: "/placeholder.svg?height=600&width=400&text=Portrait+1",
      alt: "Portrait 1",
      width: 400,
      height: 600,
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Wedding+1",
      alt: "Wedding 1",
      width: 600,
      height: 400,
    },
    {
      src: "/placeholder.svg?height=500&width=500&text=Travel+1",
      alt: "Travel 1",
      width: 500,
      height: 500,
    },
    {
      src: "/placeholder.svg?height=600&width=400&text=Fashion+Editorial+2",
      alt: "Fashion Editorial 2",
      width: 400,
      height: 600,
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Street+Photography+2",
      alt: "Street Photography 2",
      width: 600,
      height: 400,
    },
    {
      src: "/placeholder.svg?height=600&width=400&text=Portrait+2",
      alt: "Portrait 2",
      width: 400,
      height: 600,
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Wedding+2",
      alt: "Wedding 2",
      width: 600,
      height: 400,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <FilmGrainOverlay />

      <div className="container px-4 md:px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-neutral-600 hover:text-[#FF0000] mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-serif mb-2">PHOTOGRAPHY PORTFOLIO</h1>
          <p className="text-neutral-600 font-light max-w-[600px]">
            A collection of my best work across fashion, portrait, wedding, and street photography. Click on any image
            to view it in full size.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex space-x-4 mb-8">
            <Button
              variant="outline"
              className="border-neutral-200 text-neutral-800 hover:text-[#FF0000] hover:border-[#FF0000]"
            >
              All
            </Button>
            <Button
              variant="outline"
              className="border-neutral-200 text-neutral-800 hover:text-[#FF0000] hover:border-[#FF0000]"
            >
              Fashion
            </Button>
            <Button
              variant="outline"
              className="border-neutral-200 text-neutral-800 hover:text-[#FF0000] hover:border-[#FF0000]"
            >
              Portraits
            </Button>
            <Button
              variant="outline"
              className="border-neutral-200 text-neutral-800 hover:text-[#FF0000] hover:border-[#FF0000]"
            >
              Weddings
            </Button>
            <Button
              variant="outline"
              className="border-neutral-200 text-neutral-800 hover:text-[#FF0000] hover:border-[#FF0000]"
            >
              Street
            </Button>
          </div>

          <PhotoGallery photos={photos} />
        </div>
      </div>
    </div>
  )
}
